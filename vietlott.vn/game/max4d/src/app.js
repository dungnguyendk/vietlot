var GAME_WIDTH = 970;
var GAME_HEIGHT = 622;
var Global = (function () {
    function Global() {
    }
    return Global;
}());
var Boot = (function () {
    function Boot(phasergame) {
        this.game = phasergame;
    }
    Boot.prototype.preload = function () {
        this.game.load.image(Resources.bgLoad.name, Resources.bgLoad.path);
        this.game.load.image(Resources.preloaderBar.name, Resources.preloaderBar.path);
    };
    Boot.prototype.create = function () {
        this.game.input.maxPointers = 1;
        this.game.scale.maxWidth = GAME_WIDTH;
        this.game.scale.maxHeight = GAME_HEIGHT;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('preload');
    };
    Boot.prototype.render = function () {
    };
    return Boot;
}());
window.onload = function () {
    var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'game-content');
    game.state.add('boot', new Boot(game));
    game.state.add('preload', new PreLoad(game));
    game.state.add('intro', new Intro(game));
    game.state.add('chooseticket', new ChooseNumber(game));
    game.state.add('result', new Result(game));
    game.state.start('boot');
};
//# sourceMappingURL=app.js.map