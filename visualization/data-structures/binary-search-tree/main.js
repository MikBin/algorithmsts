import * as d3 from 'd3';
import { BinarySearchTree } from '../../../src/data-structures/binary-search-tree/index.js';

const tree = new BinarySearchTree();

const margin = { top: 20, right: 90, bottom: 30, left: 90 };
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3
  .select('#tree-container')
  .append('svg')
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

let i = 0;
const duration = 750;

const treemap = d3.tree().size([height, width]);

function update(source) {
  const treeData = treemap(d3.hierarchy(source, (d) => d.children));

  const nodes = treeData.descendants();
  const links = treeData.descendants().slice(1);

  nodes.forEach((d) => {
    d.y = d.depth * 180;
  });

  const node = svg.selectAll('g.node').data(nodes, (d) => {
    return d.id || (d.id = ++i);
  });

  const nodeEnter = node
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', (d) => {
      return 'translate(' + source.y0 + ',' + source.x0 + ')';
    })
    .on('click', click);

  nodeEnter
    .append('circle')
    .attr('class', 'node')
    .attr('r', 1e-6)
    .style('fill', (d) => {
      return d._children ? 'lightsteelblue' : '#fff';
    });

  nodeEnter
    .append('text')
    .attr('dy', '.35em')
    .attr('x', (d) => {
      return d.children || d._children ? -13 : 13;
    })
    .attr('text-anchor', (d) => {
      return d.children || d._children ? 'end' : 'start';
    })
    .text((d) => {
      return d.data.value;
    });

  const nodeUpdate = nodeEnter.merge(node);

  nodeUpdate
    .transition()
    .duration(duration)
    .attr('transform', (d) => {
      return 'translate(' + d.y + ',' + d.x + ')';
    });

  nodeUpdate
    .select('circle.node')
    .attr('r', 10)
    .style('fill', (d) => {
      return d._children ? 'lightsteelblue' : '#fff';
    })
    .attr('cursor', 'pointer');

  const nodeExit = node
    .exit()
    .transition()
    .duration(duration)
    .attr('transform', (d) => {
      return 'translate(' + source.y + ',' + source.x + ')';
    })
    .remove();

  nodeExit.select('circle').attr('r', 1e-6);
  nodeExit.select('text').style('fill-opacity', 1e-6);

  const link = svg.selectAll('path.link').data(links, (d) => {
    return d.id;
  });

  const linkEnter = link
    .enter()
    .insert('path', 'g')
    .attr('class', 'link')
    .attr('d', (d) => {
      const o = { x: source.x0, y: source.y0 };
      return diagonal(o, o);
    });

  const linkUpdate = linkEnter.merge(link);

  linkUpdate
    .transition()
    .duration(duration)
    .attr('d', (d) => {
      return diagonal(d, d.parent);
    });

  const linkExit = link
    .exit()
    .transition()
    .duration(duration)
    .attr('d', (d) => {
      const o = { x: source.x, y: source.y };
      return diagonal(o, o);
    })
    .remove();

  nodes.forEach((d) => {
    d.x0 = d.x;
    d.y0 = d.y;
  });

  function diagonal(s, d) {
    const path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;

    return path;
  }

  function click(event, d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }
}

function redraw() {
  const root = JSON.parse(tree.toJson());
  if (root) {
    root.x0 = height / 2;
    root.y0 = 0;
    update(root);
  } else {
    // Clear the SVG
    svg.selectAll('*').remove();
  }
}

d3.select('#add-node').on('click', () => {
  const value = d3.select('#node-value').property('value');
  if (value && !isNaN(value)) {
    tree.insert(parseInt(value, 10));
    redraw();
  }
});

d3.select('#remove-node').on('click', () => {
  const value = d3.select('#node-value').property('value');
  if (value && !isNaN(value)) {
    tree.remove(parseInt(value, 10));
    redraw();
  }
});
