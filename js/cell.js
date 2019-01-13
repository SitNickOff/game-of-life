class Cell {
    constructor(width, height, row, col, alive = false) {
        this.row        = row;
        this.col        = col;
        this._alive      = alive;
        this.element    = null;
        this.width      = width;
        this.height     = height;
        
        this._init();
    }

    get alive() {
        return this._alive;
    }

    set alive(value) {
        this._alive = value;
        this.element.classList.toggle('alive', this._alive);
    }

    _init() {
        const td = document.createElement('td');

        td.className    = 'cell';
        td.width        = this.width;
        td.height       = this.height;

        td.addEventListener('click', this._handleClick.bind(this));

        this.element = td;
    }

    _handleClick() {
        this.alive = !this.alive;
    }
}