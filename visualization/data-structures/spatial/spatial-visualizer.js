import * as d3 from 'd3';

export class SpatialVisualizer {
    constructor(selector, width = 600, height = 600) {
        this.width = width;
        this.height = height;
        this.container = d3.select(selector);

        // Clear previous if any
        this.container.selectAll('*').remove();

        this.svg = this.container
            .append('svg').attr('role', 'img').attr('aria-label', 'Visualization').attr('tabindex', '0')
            .attr('width', width)
            .attr('height', height)
            .style('border', '1px solid #ccc')
            .style('background', '#fff');

        // Background rect to capture click events instead of the svg element itself,
        // allowing d3.zoom on the svg.
        this.bg = this.svg.append('rect')
            .attr('class', 'interaction-layer')
            .attr('width', width)
            .attr('height', height)
            .attr('fill', 'transparent');

        this.g = this.svg.append('g');

        // Setup d3 zoom
        this.zoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', (event) => {
                this.g.attr('transform', event.transform);
            });
        this.svg.call(this.zoom);

        // Add a clip path to prevent drawing outside
        this.svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);

        this.g.attr("clip-path", "url(#clip)");

        // Containers for layer separation
        this.rectGroup = this.g.append('g').attr('class', 'rects-layer');
        this.lineGroup = this.g.append('g').attr('class', 'lines-layer');
        this.pointGroup = this.g.append('g').attr('class', 'points-layer');
        this.textGroup = this.g.append('g').attr('class', 'texts-layer');
    }

    clear() {
        this.rectGroup.selectAll('*').remove();
        this.lineGroup.selectAll('*').remove();
        this.pointGroup.selectAll('*').remove();
        this.textGroup.selectAll('*').remove();
    }

    update({ points = [], lines = [], rects = [], texts = [] }) {
        const t = this.svg.transition().duration(500);

        // --- RECTS ---
        const rectNodes = this.rectGroup.selectAll('rect')
            .data(rects, d => d.id);

        rectNodes.exit()
            .transition(t)
            .attr('opacity', 0)
            .remove();

        rectNodes.enter()
            .append('rect')
            .attr('x', d => d.x + d.w / 2)
            .attr('y', d => d.y + d.h / 2)
            .attr('width', 0)
            .attr('height', 0)
            .attr('fill', d => (d.style && d.style.fill) || 'none')
            .attr('stroke', d => (d.style && d.style.stroke) || '#999')
            .attr('stroke-width', d => (d.style && d.style.strokeWidth) || 1)
            .attr('stroke-dasharray', d => (d.style && d.style.strokeDasharray) || null)
            .attr('opacity', 0)
            .merge(rectNodes)
            .transition(t)
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('width', d => d.w)
            .attr('height', d => d.h)
            .attr('fill', d => (d.style && d.style.fill) || 'none')
            .attr('stroke', d => (d.style && d.style.stroke) || '#999')
            .attr('stroke-width', d => (d.style && d.style.strokeWidth) || 1)
            .attr('stroke-dasharray', d => (d.style && d.style.strokeDasharray) || null)
            .attr('opacity', d => (d.style && d.style.opacity !== undefined ? d.style.opacity : 1));

        // --- LINES ---
        const lineNodes = this.lineGroup.selectAll('line')
            .data(lines, d => d.id);

        lineNodes.exit()
            .transition(t)
            .attr('opacity', 0)
            .remove();

        lineNodes.enter()
            .append('line')
            // Start the line at the middle of its eventual coordinates for a growing effect
            .attr('x1', d => (d.x1 + d.x2) / 2)
            .attr('y1', d => (d.y1 + d.y2) / 2)
            .attr('x2', d => (d.x1 + d.x2) / 2)
            .attr('y2', d => (d.y1 + d.y2) / 2)
            .attr('stroke', d => (d.style && d.style.stroke) || 'blue')
            .attr('stroke-width', d => (d.style && d.style.strokeWidth) || 1)
            .attr('opacity', 0)
            .merge(lineNodes)
            .transition(t)
            .attr('x1', d => d.x1)
            .attr('y1', d => d.y1)
            .attr('x2', d => d.x2)
            .attr('y2', d => d.y2)
            .attr('stroke', d => (d.style && d.style.stroke) || 'blue')
            .attr('stroke-width', d => (d.style && d.style.strokeWidth) || 1)
            .attr('opacity', d => (d.style && d.style.opacity !== undefined ? d.style.opacity : 1));

        // --- POINTS ---
        const pointNodes = this.pointGroup.selectAll('circle')
            .data(points, d => d.id);

        pointNodes.exit()
            .transition(t)
            .attr('r', 0)
            .remove();

        pointNodes.enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', 0)
            .attr('fill', d => (d.style && d.style.fill) || 'red')
            .attr('stroke', d => (d.style && d.style.stroke) || 'none')
            .merge(pointNodes)
            .transition(t)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => (d.style && d.style.radius) || 3)
            .attr('fill', d => (d.style && d.style.fill) || 'red')
            .attr('stroke', d => (d.style && d.style.stroke) || 'none')
            .attr('opacity', d => (d.style && d.style.opacity !== undefined ? d.style.opacity : 1));

        // --- TEXTS ---
        const textNodes = this.textGroup.selectAll('text')
            .data(texts, d => d.id);

        textNodes.exit()
            .transition(t)
            .attr('opacity', 0)
            .remove();

        textNodes.enter()
            .append('text')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .text(d => d.text)
            .attr('font-size', d => (d.style && d.style.fontSize) || '10px')
            .attr('fill', d => (d.style && d.style.fill) || '#000')
            .attr('opacity', 0)
            .merge(textNodes)
            .transition(t)
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .text(d => d.text)
            .attr('font-size', d => (d.style && d.style.fontSize) || '10px')
            .attr('fill', d => (d.style && d.style.fill) || '#000')
            .attr('opacity', d => (d.style && d.style.opacity !== undefined ? d.style.opacity : 1));
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
