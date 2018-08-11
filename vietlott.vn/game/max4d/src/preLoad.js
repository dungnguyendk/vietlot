var PreLoad = (function () {
    function PreLoad(phasergame) {
        this.game = phasergame;
    }
    PreLoad.prototype.preload = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Resources.bgLoad.name);
        logo.anchor.setTo(0.5, 0.5);
        var preloaderBar = this.game.add.sprite(this.game.world.centerX - 141 / 2, this.game.world.centerY, Resources.preloaderBar.name);
        preloaderBar.anchor.setTo(0, 0.5);
        this.game.load.setPreloadSprite(preloaderBar);
        this.game.load.image(Resources.bg_main.name, Resources.bg_main.path);
        this.game.load.image(Resources.btn_buyticket.name, Resources.btn_buyticket.path);
        this.game.load.image(Resources.btn_help.name, Resources.btn_help.path);
        this.game.load.image(Resources.btn_play.name, Resources.btn_play.path);
        this.game.load.image(Resources.btn_replay.name, Resources.btn_replay.path);
        this.game.load.image(Resources.cage_max4d.name, Resources.cage_max4d.path);
        this.game.load.image(Resources.g1.name, Resources.g1.path);
        this.game.load.image(Resources.g2.name, Resources.g2.path);
        this.game.load.image(Resources.g3.name, Resources.g3.path);
        this.game.load.image(Resources.ico_question.name, Resources.ico_question.path);
        this.game.load.image(Resources.panel_4d_dotblack.name, Resources.panel_4d_dotblack.path);
        this.game.load.image(Resources.panel_4d.name, Resources.panel_4d.path);
        this.game.load.image(Resources.panel_4d_logo.name, Resources.panel_4d_logo.path);
        this.game.load.image(Resources.panel_table.name, Resources.panel_table.path);
        this.game.load.image(Resources.ticket_4d.name, Resources.ticket_4d.path);
        this.game.load.image(Resources.barcode.name, Resources.barcode.path);
        this.game.load.image(Resources.bg_talk.name, Resources.bg_talk.path);
        this.game.load.image(Resources.ico_arrow.name, Resources.ico_arrow.path);
        this.game.load.image(Resources.ico_fullscreen.name, Resources.ico_fullscreen.path);
        this.game.load.image(Resources.btn_choose_number.name, Resources.btn_choose_number.path);
        this.game.load.image(Resources.ico_close.name, Resources.ico_close.path);
        this.game.load.image(Resources.black_lines.name, Resources.black_lines.path);
        this.game.load.image(Resources.border.name, Resources.border.path);
        this.game.load.image(Resources.bangketqua.name, Resources.bangketqua.path);
        for (var i = 0; i < 10; i++) {
            for (var j = 1; j < 5; j++) {
                this.game.load.image(j + '-ball-' + i, 'assets/' + j + '-ball-' + i + '.png');
            }
        }
        this.game.load.image('ball-a', 'assets/5-ball-a.png');
        this.game.load.image('ball-b', 'assets/5-ball-b.png');
        this.game.load.image('ball-c', 'assets/5-ball-c.png');
        this.game.load.image('ball-d', 'assets/5-ball-d.png');
        this.game.load.image('ball-e', 'assets/5-ball-e.png');
        this.game.load.image('ball-g', 'assets/5-ball-g.png');
        this.game.load.image('ball--1', 'assets/ball--1.png');
        this.game.load.spritesheet(Resources.girl_sprite.name, Resources.girl_sprite.path, Resources.girl_sprite.frameW, Resources.girl_sprite.frameH);
        this.game.load.spritesheet(Resources.eyes_sprite.name, Resources.eyes_sprite.path, Resources.eyes_sprite.frameW, Resources.eyes_sprite.frameH);
    };
    PreLoad.prototype.create = function () {
        this.game.state.start('intro');
    };
    return PreLoad;
}());
//# sourceMappingURL=preload.js.map