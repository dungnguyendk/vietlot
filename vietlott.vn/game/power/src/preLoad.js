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
        this.game.load.image(Resources.bg_vietlott.name, Resources.bg_vietlott.path);
        this.game.load.image(Resources.bg_talk.name, Resources.bg_talk.path);
        this.game.load.image(Resources.btn_green.name, Resources.btn_green.path);
        this.game.load.image(Resources.btn_play_again.name, Resources.btn_play_again.path);
        this.game.load.image(Resources.btn_play_rule.name, Resources.btn_play_rule.path);
        this.game.load.image(Resources.btn_play.name, Resources.btn_play.path);
        this.game.load.image(Resources.choose_number_ticket.name, Resources.choose_number_ticket.path);
        this.game.load.image(Resources.panel_655.name, Resources.panel_655.path);
        this.game.load.image(Resources.btn_play_rule.name, Resources.btn_play_rule.path);
        this.game.load.image(Resources.computer.name, Resources.computer.path);
        this.game.load.image(Resources.arrow.name, Resources.arrow.path);
        this.game.load.image(Resources.logo_game.name, Resources.logo_game.path);
        this.game.load.image(Resources.ico_close.name, Resources.ico_close.path);
        this.game.load.image(Resources.black_line.name, Resources.black_line.path);
        this.game.load.image(Resources.black_line_2.name, Resources.black_line_2.path);
        this.game.load.image(Resources.ico_close.name, Resources.ico_close.path);
        this.game.load.image(Resources.pencil.name, Resources.pencil.path);
        this.game.load.image(Resources.bg_bao.name, Resources.bg_bao.path);
        this.game.load.image(Resources.ico_question.name, Resources.ico_question.path);
        this.game.load.image(Resources.machine.name, Resources.machine.path);
        this.game.load.image(Resources.spincircle.name, Resources.spincircle.path);
        this.game.load.image(Resources.ticket.name, Resources.ticket.path);
        this.game.load.image(Resources.ticket_655.name, Resources.ticket_655.path);
        this.game.load.image(Resources.ico_fullscreen.name, Resources.ico_fullscreen.path);
        for (var i = 1; i < 56; i++) {
            this.game.load.image('ball' + i, 'assets/ball/' + i + '.png');
        }
        this.game.load.spritesheet(Resources.girl_sprite.name, Resources.girl_sprite.path, Resources.girl_sprite.frameW, Resources.girl_sprite.frameH);
        this.game.load.spritesheet(Resources.eyes_sprite.name, Resources.eyes_sprite.path, Resources.eyes_sprite.frameW, Resources.eyes_sprite.frameH);
    };
    PreLoad.prototype.create = function () {
        this.game.state.start('intro');
    };
    return PreLoad;
}());
//# sourceMappingURL=preLoad.js.map