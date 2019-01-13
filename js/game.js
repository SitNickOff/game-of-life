class Game {
    constructor(gridWidth, gridHeight, gridRows, gridCols, root) {
        this.gridWidth  = gridWidth;
        this.gridHeight = gridHeight;
        this.gridRows   = gridRows;
        this.gridCols   = gridCols;
        this.root    = root;

        this.grid       = new Grid(gridWidth, gridHeight, gridRows, gridCols);
        this.isPlaying  = false;
        this.baseSpeed  = 1000;
        this.speed      = 0;
        this.interval   = null;
        this.element    = null;
        this.controls   = {};

        this.next = this.next.bind(this);
        this._handleStartButtonClick = this._handleStartButtonClick.bind(this);

        this._init();
    }

    next() {
        this.grid.next();
    }

    play() {
        this.isPlaying = true;
        this.controls.startButton.textContent = 'pause';
        this._startInterval();
    }

    pause() {
        this.isPlaying = false;
        this.controls.startButton.textContent = 'play_arrow';
        this._stopInterval();
    }

    reset() {
        this.pause();
        this.grid.reset();
    }

    randomize() {
        this.reset();
        this.grid.randomize();
    }

    changeSpeed(value) {
        this.speed = value;
        this._stopInterval();
        this._startInterval();
    }

    _init() {
        this._createControls();
        this._render();
    }

    _createControls() {
        const startButton = document.createElement('button');
        startButton.className = 'material-icons';
        startButton.textContent = 'play_arrow';
        startButton.addEventListener('click', this._handleStartButtonClick);
        this.controls.startButton = startButton;

        const resetButton = document.createElement('button');
        resetButton.className = 'material-icons';
        resetButton.textContent = 'replay';
        resetButton.addEventListener('click', () => this.reset());

        const randomizeButton = document.createElement('button');
        randomizeButton.className = 'material-icons';
        randomizeButton.textContent = 'transform';
        randomizeButton.addEventListener('click', () => this.randomize());

        const speedSlider = document.createElement('input');
        speedSlider.type = 'range';
        speedSlider.min = 0;
        speedSlider.max = 900;
        speedSlider.step = 100;
        speedSlider.value = this.speed;
        speedSlider.addEventListener('input', () => this.changeSpeed(speedSlider.value));

        const container = document.createElement('div');
        container.className = 'controls';
        
        container.append(startButton, resetButton, randomizeButton, speedSlider);

        //root.appendChild(container);
        this.controlsElement = container;
    }

    _startInterval() {
        this.interval = setInterval(this.next, this.baseSpeed - this.speed);
    }

    _stopInterval() {        
        clearInterval(this.interval);
    }

    _render() {
        root.appendChild(this.grid.element);
        root.appendChild(this.controlsElement);
    }

    _handleStartButtonClick() {
        if (this.isPlaying) {  
            this.pause(); 
        } else {
            this.play();
        }
    }
}