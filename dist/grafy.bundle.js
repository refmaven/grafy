import 'p5'

export class Grid {
    constructor(width, height, rows, cols) {
        this.width = width;
        this.height = height || width; // Assume height = width if empty
        this.cols = cols || Math.floor(this.width / 10); // Generate grids based on width if cols are empty
        this.rows = rows || Math.floor(this.height / 10); // Generate grids based on height if rows are empty
        this.cellWidth = this.width / this.cols;
        this.cellHeight = this.height / this.rows;
    }

    draw() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                let topLeft = { x: i * this.cellWidth, y: j * this.cellHeight };
                let center = {
                    x: topLeft.x + this.cellWidth / 2,
                    y: topLeft.y + this.cellHeight / 2
                };

                // Draw the rectangle (grid cell)
                rect(topLeft.x, topLeft.y, this.cellWidth, this.cellHeight);
                
                // Optional: Draw a point at the center for visualization
                fill(255, 0, 0); // red color for the center point
                ellipse(center.x, center.y, 5, 5); // draw a small circle at the center
            }
        }
    }

    getTopLeft(col, row) {
        return {
            x: col * this.cellWidth,
            y: row * this.cellHeight
        };
    }

    getCenter(col, row) {
        let topLeft = this.getTopLeft(col, row);
        return {
            x: topLeft.x + this.cellWidth / 2,
            y: topLeft.y + this.cellHeight / 2
        };
    }
}