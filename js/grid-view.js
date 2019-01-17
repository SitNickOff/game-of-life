export default class GridView {
    constructor(width, height, rows, cols) {
        this.gridWidth = width;
        this.gridHeight = height;
        this.rows = rows;
        this.cols = cols;

        this.cellWidth = width / cols;
        this.cellHeight = height / rows;

        this.onClick = Function.prototype;
    } 

    get element() {
        throw new Error('Abstract property');
    }

    update(grid) {
        throw new Error('Abstract method');    
    }

    reset() {
        throw new Error('Abstract method');    
    }
}