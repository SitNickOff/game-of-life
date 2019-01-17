export default class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;

        //his.game.onCellStateChange = cell => view.updateCell(cell);
        this.view.onGridClick = (row, col) => this.game.toggleCellState(row, col);

        this.game.onGridStateChange = grid => view.updateGrid(grid);

        this.view.onStartButtonClick = () => {
            this.game.toggle();
            this.view.updateControls(this.game.isPlaying);
        };
        this.view.onResetButtonClick = () => {
            this.game.reset();
            this.view.resetControls();
        };        
        this.view.onRandomizeButtonClick = () => this.game.randomize();        
        this.view.onSpeedSliderChange = speed => this.game.changeSpeed(speed);

        this.view.init();

        
    }
}