import * as d3 from 'd3';

export class TreeVisualizer {
    constructor(selector) {
        this.container = d3.select(selector);

        // Setup SVG and dimensions
        const width = this.container.node().getBoundingClientRect().width || 800;
        const height = this.container.node().getBoundingClientRect().height || 600;

        this.svg = this.container.append('svg').attr('role', 'img').attr('aria-label', 'Visualization').attr('tabindex', '0')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', [0, 0, width, height]);

        this.g = this.svg.append('g');

        // Setup Zoom/Pan
        const zoom = d3.zoom()
            .scaleExtent([0.1, 4])
            .on('zoom', (event) => {
                this.g.attr('transform', event.transform);
            });

        this.svg.call(zoom);

        // Center initially
        this.svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2, 50));

        // Create groups for links and nodes to ensure proper layering
        this.linksGroup = this.g.append('g').attr('class', 'links');
        this.nodesGroup = this.g.append('g').attr('class', 'nodes');

        // D3 Tree Layout
        this.treeLayout = d3.tree()
            .nodeSize([50, 80]); // Adjust node spacing as needed

        this.root = null;

        // Resize listener
        window.addEventListener('resize', () => {
            const rect = this.container.node().getBoundingClientRect();
            const newWidth = rect.width || 800;
            const newHeight = rect.height || 600;
            this.svg.attr('viewBox', [0, 0, newWidth, newHeight]);
        });
    }

    update(hierarchyData) {
        if (!hierarchyData) {
            this.nodesGroup.selectAll('*').remove();
            this.linksGroup.selectAll('*').remove();
            return;
        }

        const root = d3.hierarchy(hierarchyData);
        this.treeLayout(root);

        const nodes = root.descendants();
        const links = root.links();

        const transition = this.svg.transition().duration(500);

        // --- LINKS ---
        const link = this.linksGroup.selectAll('path.link')
            .data(links, d => d.target.data.id !== undefined ? d.target.data.id : d.target.data.value); // Use id if available, else value

        const linkEnter = link.enter().append('path')
            .attr('class', 'link')
            .attr('d', d => {
                const o = {
                    x: d.source.x0 !== undefined ? d.source.x0 : d.source.x,
                    y: d.source.y0 !== undefined ? d.source.y0 : d.source.y
                };
                return diagonal({ source: o, target: o });
            })
            .style('fill', 'none')
            .style('stroke', d => d.target.data.isDummy ? 'none' : '#ccc')
            .style('stroke-width', '2px');

        link.merge(linkEnter).transition(transition)
            .attr('d', diagonal)
            .style('stroke', d => d.target.data.isDummy ? 'none' : '#ccc');

        link.exit().transition(transition)
            .attr('d', d => {
                const o = { x: d.source.x, y: d.source.y };
                return diagonal({ source: o, target: o });
            })
            .remove();

        // --- NODES ---
        const node = this.nodesGroup.selectAll('g.node')
            .data(nodes, d => d.data.id !== undefined ? d.data.id : d.data.value);

        const nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr('transform', d => {
                const x = d.parent ? (d.parent.x0 !== undefined ? d.parent.x0 : d.parent.x) : d.x;
                const y = d.parent ? (d.parent.y0 !== undefined ? d.parent.y0 : d.parent.y) : d.y;
                return `translate(${x},${y})`;
            });

        nodeEnter.each(function(d) {
            const shape = d.data.shape || 'circle';
            const el = d3.select(this);
            if (shape === 'rect' || shape === 'square') {
                el.append('rect')
                    .attr('x', -20)
                    .attr('y', -20)
                    .attr('width', 1e-6)
                    .attr('height', 1e-6)
                    .style('fill', d => d.data.isDummy ? 'none' : '#fff')
                    .style('stroke', d => d.data.isDummy ? 'none' : '#3498db')
                    .style('stroke-width', '2px');
            } else {
                el.append('circle')
                    .attr('r', 1e-6)
                    .style('fill', d => d.data.isDummy ? 'none' : '#fff')
                    .style('stroke', d => d.data.isDummy ? 'none' : '#3498db')
                    .style('stroke-width', '2px');
            }
        });

        nodeEnter.append('text')
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .style('fill-opacity', 1e-6)
            .text(d => d.data.isDummy ? '' : d.data.value);

        const nodeUpdate = node.merge(nodeEnter).transition(transition)
            .attr('transform', d => `translate(${d.x},${d.y})`);

        nodeUpdate.select('circle')
            .attr('r', d => d.data.isDummy ? 1e-6 : 20)
            .style('fill', d => d.data.isDummy ? 'none' : (d.data.color || '#fff'))
            .style('stroke', d => d.data.isDummy ? 'none' : (d.data.color ? d.data.color : '#3498db'))
            .style('stroke-width', d => d.data.color ? '3px' : '2px');

        nodeUpdate.select('rect')
            .attr('width', d => d.data.isDummy ? 1e-6 : 40)
            .attr('height', d => d.data.isDummy ? 1e-6 : 40)
            .style('fill', d => d.data.isDummy ? 'none' : (d.data.color || '#fff'))
            .style('stroke', d => d.data.isDummy ? 'none' : (d.data.color ? d.data.color : '#3498db'))
            .style('stroke-width', d => d.data.color ? '3px' : '2px');

        nodeUpdate.select('text')
            .text(d => d.data.isDummy ? '' : d.data.value)
            .style('fill-opacity', d => d.data.isDummy ? 1e-6 : 1)
            .style('fill', d => (d.data.color && d.data.color !== '#fff' && d.data.color !== 'white') ? '#fff' : '#333');

        const nodeExit = node.exit().transition(transition)
            .attr('transform', d => `translate(${d.parent ? d.parent.x : d.x},${d.parent ? d.parent.y : d.y})`)
            .remove();

        nodeExit.select('circle')
            .attr('r', 1e-6);

        nodeExit.select('rect')
            .attr('width', 1e-6)
            .attr('height', 1e-6);

        nodeExit.select('text')
            .style('fill-opacity', 1e-6);

        // Store current positions for future transitions
        nodes.forEach(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }
}

export class BarChartVisualizer {
    constructor(selector) {
        this.container = d3.select(selector);

        // Define dimensions and margins
        const rect = this.container.node().getBoundingClientRect();
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
        this.width = (rect.width || 800) - this.margin.left - this.margin.right;
        this.height = (rect.height || 400) - this.margin.top - this.margin.bottom;

        this.svg = this.container.append('svg').attr('role', 'img').attr('aria-label', 'Visualization').attr('tabindex', '0')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

        this.x = d3.scaleBand()
            .range([0, this.width])
            .padding(0.1);

        this.y = d3.scaleLinear()
            .range([this.height, 0]);

        this.xAxis = this.svg.append('g')
            .attr('transform', `translate(0,${this.height})`);

        this.yAxis = this.svg.append('g');

        this.data = [];
        this.state = {};

        // Resize listener
        window.addEventListener('resize', () => {
            const rect = this.container.node().getBoundingClientRect();
            this.width = (rect.width || 800) - this.margin.left - this.margin.right;
            this.height = (rect.height || 400) - this.margin.top - this.margin.bottom;

            // Update SVG parent
            d3.select(this.svg.node().parentNode)
                .attr('width', this.width + this.margin.left + this.margin.right)
                .attr('height', this.height + this.margin.top + this.margin.bottom);

            this.x.range([0, this.width]);
            this.y.range([this.height, 0]);
            this.xAxis.attr('transform', `translate(0,${this.height})`);

            // Redraw if we have data
            if (this.data && this.data.length > 0) {
                this.update(this.data, this.state);
            }
        });
    }

    update(data, state = {}) {
        this.data = data;
        this.state = state;

        if (!data || data.length === 0) {
            this.svg.selectAll('.bar').remove();
            return;
        }

        const { compare = [], swap = [], sorted = [] } = state;

        // Update scales
        this.x.domain(data.map((d, i) => i));

        // Handle both primitive numbers and {id, value} objects
        const getValue = d => (d !== null && typeof d === 'object' && d.value !== undefined) ? d.value : d;
        const getId = (d, i) => (d !== null && typeof d === 'object' && d.id !== undefined) ? d.id : (d + '-' + i);

        this.y.domain([0, d3.max(data, d => getValue(d))]);

        // Update axes
        this.xAxis.transition().duration(200).call(d3.axisBottom(this.x).tickFormat(i => i));
        this.yAxis.transition().duration(200).call(d3.axisLeft(this.y));

        // Join data
        const bars = this.svg.selectAll('.bar')
            .data(data, (d, i) => getId(d, i));

        // Update existing bars
        bars.transition().duration(200)
            .attr('x', (d, i) => this.x(i))
            .attr('width', this.x.bandwidth())
            .attr('y', d => this.y(getValue(d)))
            .attr('height', d => this.height - this.y(getValue(d)))
            .style('fill', (d, i) => this.getColor(i, compare, swap, sorted));

        // Enter new bars
        bars.enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d, i) => this.x(i))
            .attr('width', this.x.bandwidth())
            .attr('y', d => this.y(0))
            .attr('height', 0)
            .style('fill', (d, i) => this.getColor(i, compare, swap, sorted))
            .transition().duration(200)
            .attr('y', d => this.y(getValue(d)))
            .attr('height', d => this.height - this.y(getValue(d)));

        // Remove old bars
        bars.exit()
            .transition().duration(200)
            .attr('y', this.y(0))
            .attr('height', 0)
            .remove();
    }

    getColor(index, compare, swap, sorted) {
        if (sorted.includes(index)) return 'var(--color-found)'; // Green
        if (swap.includes(index)) return 'var(--color-comparing)';   // Red
        if (compare.includes(index)) return 'var(--color-highlight)'; // Yellow/Highlight
        return 'var(--color-default)';                             // Default
    }
}

export function arrayToTree(array) {
    if (!array || array.length === 0) return null;

    let idCounter = 0;

    const buildNode = (index) => {
        if (index >= array.length || array[index] == null) return null;

        const node = {
            value: array[index],
            id: idCounter++,
            children: []
        };

        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;

        const leftChild = buildNode(leftIndex);
        if (leftChild) node.children.push(leftChild);

        const rightChild = buildNode(rightIndex);
        if (rightChild) {
            // Push right child. If no left child, we might need a dummy or let D3 handle it
            // Typically heap has left before right anyway.
            node.children.push(rightChild);
        }

        return node;
    };

    return buildNode(0);
}

export function diagonal(d) {
    return `M ${d.target.x} ${d.target.y}
            C ${d.target.x} ${(d.target.y + d.source.y) / 2},
              ${d.source.x} ${(d.target.y + d.source.y) / 2},
              ${d.source.x} ${d.source.y}`;
}

export function parseInputInteger(value, min = -999999, max = 999999) {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed) || parsed < min || parsed > max) {
        alert(`Please enter a valid integer between ${min} and ${max}.`);
        return null;
    }
    return parsed;
}
