var IntroState;
(function (IntroState) {
    IntroState[IntroState["State1"] = 0] = "State1";
    IntroState[IntroState["State2"] = 1] = "State2";
    IntroState[IntroState["State3"] = 2] = "State3";
})(IntroState || (IntroState = {}));
var Intro = (function () {
    function Intro(phasergame) {
        this.actionBgClick = null;
        this.game = phasergame;
        this.initParam = IntroState.State1;
    }
    Intro.prototype.render = function () {
        //this.game.debug.pointer(this.game.input.activePointer);
    };
    Intro.prototype.init = function (param) {
        if (param) {
            this.initParam = param;
        }
        else {
            this.initParam = IntroState.State1;
        }
    };
    Intro.prototype.preload = function () {
    };
    Intro.prototype.create = function () {
        var bg = this.game.add.sprite(0, 0, Resources.bg_vietlott.name);
        bg.inputEnabled = true;
        bg.events.onInputUp.add(this.bgClick, this);
        this.game.add.image(Resources.computer.x, Resources.computer.y, Resources.computer.name, 0);
        this.girl = this.game.add.sprite(this.game.world.right - 100, this.game.world.bottom, Resources.girl_sprite.name, 0);
        this.girl.anchor.set(1, 1);
        this.eyes = this.game.add.sprite(Resources.eyes_sprite.x, Resources.eyes_sprite.y, Resources.eyes_sprite.name, 0);
        this.eyes.animations.add('eyes', [0, 1, 0], 10, false);
        var timer = this.game.time.events.loop(4000, this.playEye, this);
        if (this.initParam == IntroState.State1) {
            this.talk1();
        }
        else if (this.initParam == IntroState.State2) {
            this.talk2();
        }
        else if (this.initParam == IntroState.State3) {
            this.talk3();
        }
        this.showFullScreenButton();
    };
    Intro.prototype.showFullScreenButton = function () {
        var _this = this;
        var btnFull = this.game.add.button(this.game.world.left + 10, this.game.world.top + 10, Resources.ico_fullscreen.name, function () {
            if (!_this.game.scale.isFullScreen) {
                _this.game.scale.startFullScreen();
            }
            else {
                _this.game.scale.stopFullScreen();
            }
        });
        btnFull.scale.set(0.2, 0.2);
    };
    Intro.prototype.playEye = function () {
        this.eyes.animations.play('eyes');
    };
    Intro.prototype.update = function () {
    };
    Intro.prototype.gotoChooseNumber = function () {
        this.game.state.start('chooseticket', true);
    };
    Intro.prototype.talk1 = function () {
        var _this = this;
        var talkGroup = this.game.add.group();
        talkGroup.add(this.game.add.sprite(Resources.arrow.x, Resources.arrow.y, Resources.arrow.name));
        talkGroup.add(this.game.add.sprite(Resources.bg_talk.x, Resources.bg_talk.y, Resources.bg_talk.name));
        var style = { font: "25px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'center' };
        var talkTxt = this.game.add.text(342, 275, '', style, talkGroup);
        talkTxt.anchor.set(0.5, 0.5);
        var callback = function () {
            var btnPlay = _this.game.add.button(458, 365, Resources.btn_play.name, function () {
                talkGroup.removeAll(true);
                _this.game.world.remove(talkGroup);
                _this.talk2();
            }, _this);
            btnPlay.anchor.set(0.5, 0.5);
            btnPlay.onInputDown.add(function () {
                btnPlay.scale.set(0.7, 0.7);
            }, _this);
            btnPlay.onInputUp.add(function () {
                btnPlay.scale.set(1, 1);
            }, _this);
            btnPlay.onInputOut.add(function () {
                btnPlay.scale.set(1, 1);
            }, _this);
            var btnRule = _this.game.add.button(222, 365, Resources.btn_play_rule.name, function () {
                OpenRule(1);
            });
            btnRule.anchor.set(0.5, 0.5);
            btnRule.onInputDown.add(function () {
                btnRule.scale.set(0.7, 0.7);
            }, _this);
            btnRule.onInputUp.add(function () {
                btnRule.scale.set(1, 1);
            }, _this);
            btnRule.onInputOut.add(function () {
                btnRule.scale.set(1, 1);
            }, _this);
            talkGroup.add(btnPlay);
            talkGroup.add(btnRule);
            talkGroup.add(talkTxt);
        };
        this.runningText(talkTxt, 'Chào mừng quý khách đã tham gia\nxổ số Mega 6/45', callback);
    };
    Intro.prototype.talk2 = function () {
        var _this = this;
        var groupChoseNumber = this.game.add.group();
        var btnChooseNumber = this.game.add.button(340, 324, Resources.btn_green.name, function () {
            groupChoseNumber.removeAll(true);
            _this.game.world.remove(groupChoseNumber);
            _this.gotoChooseNumber();
        });
        btnChooseNumber.anchor.set(0.5, 0.5);
        var style = { font: "25px Arial", fill: "#ffffff", fontWeight: 'bold', wordWrap: true, wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'center' };
        var txt = this.game.add.text(340, 321, 'CHỌN SỐ', style);
        txt.anchor.set(0.5, 0.5);
        btnChooseNumber.onInputDown.add(function () {
            btnChooseNumber.scale.set(0.7, 0.7);
            txt.scale.set(0.7, 0.7);
        }, this);
        btnChooseNumber.onInputUp.add(function () {
            btnChooseNumber.scale.set(1, 1);
            txt.scale.set(1, 1);
        }, this);
        btnChooseNumber.onInputOut.add(function () {
            btnChooseNumber.scale.set(1, 1);
            txt.scale.set(1, 1);
        }, this);
    };
    Intro.prototype.talk3 = function () {
        var _this = this;
        var talkGroup = this.game.add.group();
        talkGroup.add(this.game.add.sprite(Resources.arrow.x, Resources.arrow.y, Resources.arrow.name));
        talkGroup.add(this.game.add.sprite(Resources.bg_talk.x, Resources.bg_talk.y, Resources.bg_talk.name));
        var style = { font: "25px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'center' };
        var talkTxt = this.game.add.text(342, 295, '', style, talkGroup);
        talkTxt.anchor.set(0.5, 0.5);
        var callback = function () {
            _this.game.time.events.add(1000, function () {
                _this.game.state.start('result', true);
            }, _this);
        };
        this.runningText(talkTxt, 'Đã đến giờ quay thưởng', callback);
    };
    Intro.prototype.runningText = function (textview, content, onComplete) {
        var _this = this;
        var max = content.length;
        var count = 0;
        var girlTimer = this.game.time.events.loop(200, function () {
            _this.girl.frame = (_this.girl.frame + 1) % 2;
        }, this);
        var timer = this.game.time.events.loop(100, function () {
            textview.text = content.substr(0, count);
            if (count == max) {
                _this.actionBgClick = null;
                _this.game.time.events.remove(timer);
                _this.game.time.events.remove(girlTimer);
                _this.girl.frame = 0;
                if (onComplete != null)
                    onComplete();
            }
            count++;
        }, this);
        this.actionBgClick = function () {
            _this.actionBgClick = null;
            _this.game.time.events.remove(timer);
            _this.game.time.events.remove(girlTimer);
            _this.girl.frame = 0;
            textview.text = content;
            if (onComplete != null)
                onComplete();
        };
    };
    Intro.prototype.bgClick = function () {
        if (this.actionBgClick != null)
            this.actionBgClick();
    };
    Intro.prototype.setDrag = function (obj) {
        obj.inputEnabled = true;
        obj.input.enableDrag(true);
        obj.events.onInputUp.add(function () {
            console.log(obj.x + '|' + obj.y);
        }, this);
    };
    return Intro;
}());
//# sourceMappingURL=intro.js.map