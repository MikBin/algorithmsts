import * as d3 from 'd3';

export class SpatialVisualizer {
    constructor(selector, width = 600, height = 600) {
        this.width = width;
        this.height = height;
        this.container = d3.select(selector);

        // Clear previous if any
        this.container.selectAll('*').remove();

        this.svg = this.container
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('border', '1px solid #ccc')
            .style('background', '#fff');

        this.g = this.svg.append('g');

        // Add a clip path to prevent drawing outside
        this.svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);

        this.g.attr("clip-path", "url(#clip)");
    }

    clear() {
        this.g.selectAll('*').remove();
    }

    // Draw a rectangle (for Quadtree regions or R-Tree MBRs)
    drawRect(x, y, w, h, style = {}) {
        this.g.append('rect')
            .attr('x', x)
            .attr('y', y)
            .attr('width', w)
            .attr('height', h)
            .attr('fill', style.fill || 'none')
            .attr('stroke', style.stroke || '#999')
            .attr('stroke-width', style.strokeWidth || 1)
            .attr('opacity', style.opacity || 1);
    }

    // Draw a point
    drawPoint(x, y, style = {}) {
        this.g.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', style.radius || 3)
            .attr('fill', style.fill || 'red')
            .attr('stroke', style.stroke || 'none');
    }

    // Draw a line (for KD-Tree splits)
    drawLine(x1, y1, x2, y2, style = {}) {
         this.g.append('line')
            .attr('x1', x1)
            .attr('y1', y1)
            .attr('x2', x2)
            .attr('y2', y2)
            .attr('stroke', style.stroke || 'blue')
            .attr('stroke-width', style.strokeWidth || 1);
    }

    // Draw text (optional, for debugging or labels)
    drawText(x, y, text, style = {}) {
        this.g.append('text')
            .attr('x', x)
            .attr('y', y)
            .text(text)
            .attr('font-size', style.fontSize || '10px')
            .attr('fill', style.fill || '#000');
    }
}
