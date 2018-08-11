var Result = (function () {
    function Result(phasergame) {
        this.flagStop = false;
        this.game = phasergame;
    }
    Result.prototype.render = function () {
        //this.game.debug.pointer(this.game.input.activePointer);
    };
    Result.prototype.init = function (param) {
    };
    Result.prototype.preload = function () {
    };
    Result.prototype.create = function () {
        var _this = this;
        this.lstResultNumber = [];
        this.lstPrize = [];
        this.game.stage.backgroundColor = '#ffffff';
        var machine = this.game.add.image(185, this.game.world.centerY, Resources.machine.name);
        machine.anchor.set(0.5, 0.5);
        var bgTicket = this.game.add.image(790, 400, Resources.ticket.name);
        bgTicket.anchor.set(0.5, 0.5);
        var now = new Date();
        var resultDes = this.game.add.text(660, 74, 'Kết quả quay thưởng Mega 6/45 ngày ' + now.getDate() + '/' + (now.getMonth() + 1), {
            font: "25px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        resultDes.anchor.set(0.5, 0.5);
        // Rule Button
        var btnRule = this.game.add.button(575, 610, Resources.ico_question.name, function () {
            OpenRule(3);
        });
        btnRule.anchor.set(0.5, 0.5);
        var txtRule = this.game.add.text(btnRule.x + 12, btnRule.y + 2, 'Luật Chơi', {
            font: "18px Arial", fill: "#ff0000", wordWrap: true,
            wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        txtRule.anchor.set(0, 0.5);
        txtRule.inputEnabled = true;
        txtRule.events.onInputUp.add(function () { OpenRule(3); });
        var note = this.game.add.text(30, btnRule.y + 2, '*Lưu ý: kết quả quay thử không có giá trị lĩnh thưởng trên thực tế', {
            font: "18px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        note.anchor.set(0, 0.5);
        this.createResult();
        this.createMachine();
        this.flagStop = true;
        this.calculatorTicket();
        this.calculatorResult();
        this.showTicket();
        var tween = this.game.add.tween(this.spinSprite).to({ rotation: -Math.PI * 20 }, 10000, Phaser.Easing.Linear.None, true, 3000, 1);
        tween.onComplete.add(function () {
            _this.flagStop = true;
        });
        tween.onStart.add(function () {
            _this.flagStop = false;
            _this.game.time.events.add(2000, (function () {
                _this.drawBallResult();
            }), _this);
        });
        this.showFullScreenButton();
    };
    Result.prototype.showFullScreenButton = function () {
        var _this = this;
        var btnFull = this.game.add.button(10, 10, Resources.ico_fullscreen.name, function () {
            if (!_this.game.scale.isFullScreen) {
                _this.game.scale.startFullScreen();
            }
            else {
                _this.game.scale.stopFullScreen();
            }
        });
        btnFull.scale.set(0.2, 0.2);
    };
    Result.prototype.update = function () {
        if (!this.flagStop) {
            this.spinBody.angle -= 0.1;
        }
    };
    Result.prototype.createMachine = function () {
        var spin = this.game.add.sprite(216, 258, Resources.spincircle.name);
        spin.anchor.set(0.5, 0.5);
        this.spinSprite = spin;
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.restitution = 0.9;
        this.game.physics.p2.gravity.y = 300;
        var sim = this.game.physics.p2;
        //create bounds
        var bounds = new Phaser.Circle(spin.x, spin.y, spin.width);
        this.balls = [];
        var ballRadius = 8;
        for (var i = 0; i < 20; i++) {
            var ball = this.game.add.sprite(0, 0, 'ball1');
            ball.position = bounds.random();
            ball.scale.set(ballRadius * 2 / ball.width, ballRadius * 2 / ball.width);
            this.game.physics.p2.enable(ball, true);
            ball.body.setCircle(ballRadius);
            this.balls.push(ball.body);
        }
        this.createCircleBody(bounds.x, bounds.y, bounds.radius, 10);
        spin.bringToTop();
        //var graphics = this.game.add.graphics(0, 0);
        //graphics.lineStyle(4, 0xffd900, 1);
        //graphics.drawCircle(bounds.x, bounds.y, bounds.diameter);
    };
    Result.prototype.createCircleBody = function (x, y, r, c) {
        var sim = this.game.physics.p2;
        //  If you want to use your own collision group then set it here and un-comment the lines below
        var mask = sim.boundsCollisionGroup.mask;
        //let angleDelta = Math.PI * 2 / 4;
        var angleDelta = Math.PI * 2 / c;
        var option = {};
        option.position = [sim.pxmi(x), sim.pxmi(y)];
        option.angle = 0;
        var body = new p2.Body(option);
        this.spinBody = body;
        for (var i = 0; i < c; i++) {
            body.addShape(new p2.Plane(0), [sim.pxmi(-Math.cos(i * angleDelta) * r), sim.pxmi(-Math.sin(i * angleDelta) * r)], i * angleDelta + Math.PI / 2);
        }
        body.addShape(new p2.Rectangle(sim.pxmi(20), sim.pxmi(20)), [sim.pxmi(-r), 0]);
        sim.world.addBody(body);
        //for (let i = 0; i < c; i++) {
        //    let option: p2.BodyOptions = {};
        //    option.position = [sim.pxmi(x - Math.cos(i * angleDelta) * r), sim.pxmi(y - Math.sin(i * angleDelta) * r)];
        //    option.angle = i * angleDelta + Math.PI / 2;
        //    console.log(option.position[0] + '|' + option.position[1] + '|' + option.angle);
        //    let body = new p2.Body(option);
        //    body.addShape(new p2.Plane(0));
        //    sim.world.addBody(body);
        //}
    };
    Result.prototype.createResult = function () {
        //this.lstResultNumber = [1, 2, 3, 4, 5, 6];
        //return;
        var countToBeSelect = Global.Bao + 5;
        var lstNumberBeSelect = [];
        for (var _i = 0, _a = Global.AllTicketNumber; _i < _a.length; _i++) {
            var item = _a[_i];
            var _loop_1 = function(it) {
                if (lstNumberBeSelect.every(function (v, ind, a) { return v != it; })) {
                    lstNumberBeSelect.push(it);
                }
            };
            for (var _b = 0, item_1 = item; _b < item_1.length; _b++) {
                var it = item_1[_b];
                _loop_1(it);
            }
        }
        var _loop_2 = function() {
            if (lstNumberBeSelect.length < countToBeSelect) {
                var newnumber_1 = Math.floor(Math.random() * 45) + 1;
                if (lstNumberBeSelect.every(function (v, ind, a) { return v != newnumber_1; })) {
                    lstNumberBeSelect.push(newnumber_1);
                }
            }
            else {
                lstNumberBeSelect.shift();
            }
        };
        while (lstNumberBeSelect.length != countToBeSelect) {
            _loop_2();
        }
        this.lstResultNumber = [];
        var count = 0;
        while (count < 6) {
            var flag = false;
            var newNumber = lstNumberBeSelect[Math.floor(Math.random() * countToBeSelect)];
            for (var _c = 0, _d = this.lstResultNumber; _c < _d.length; _c++) {
                var item = _d[_c];
                if (item == newNumber) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                this.lstResultNumber.push(newNumber);
                count++;
            }
        }
    };
    Result.prototype.drawBallResult = function () {
        var _this = this;
        if (this.lstResultNumber == undefined || this.lstResultNumber == null || this.lstResultNumber.length != 6) {
            console.error('result not init');
            return;
        }
        var count = 0;
        var timer = this.game.time.events.loop(2000, function () {
            var ball = _this.game.add.image(400 + (count) * 100, 150, 'ball' + _this.lstResultNumber[count]);
            ball.anchor.set(0.5, 0.5);
            ball.alpha = 0;
            var resultNum = _this.lstResultNumber[count];
            _this.game.add.tween(ball).to({ alpha: 1 }, 2000, 'Linear', true).onComplete.add(function () {
                _this.checkResultTicket(resultNum);
            });
            var ball2 = _this.game.add.image(215, 361, 'ball' + _this.lstResultNumber[count]);
            ball2.data = count;
            ball2.anchor.set(0.5, 0.5);
            ball2.scale.set(0.25, 0.25);
            _this.game.add.tween(ball2).to({ y: 420 }, 1000, Phaser.Easing.Quadratic.In, true, 200).onComplete.add(function () {
                _this.game.add.tween(ball2).to({ y: 431 - ball2.data * 2, x: 100 + ball2.data * ball2.width }, 1000, Phaser.Easing.Quadratic.In, true, 200);
            });
            if (count >= 5) {
                _this.game.time.events.remove(timer);
                _this.showReward();
                return;
            }
            count++;
        }, this);
    };
    Result.prototype.showTicket = function () {
        var txtGach = this.game.add.text(674, 280, '------------------------------------------', {
            font: "16px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        var txtGach2 = this.game.add.text(674, 465, '------------------------------------------', {
            font: "16px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        this.game.add.text(674, 480, 'Tổng', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        this.game.add.text(674, 495, 'Kỳ QSMT', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        var dayName = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
        var monName = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        var now = new Date();
        var today = dayName[now.getDay()] + " " + now.getDate() + "/" + monName[now.getMonth()] + "/" + now.getFullYear();
        var txtKy = this.game.add.text(896, 495, '4321/16\n' + today + '\n1234 - ABCD', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "right", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtKy.lineSpacing = -7;
        txtKy.anchor.set(1, 0);
        var txtBarcode = this.game.add.text(724, 537, 'BARCODE\nABCD-DEFG-HIJK-LMNO\njnw4ni8cxnrlvxcknnzoidn', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtBarcode.lineSpacing = -7;
        var cost = this.numberWithCommas(this.ticketQuantity * 10000);
        var txtCost = this.game.add.text(896, 480, cost + 'VNĐ', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "right", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtCost.anchor.set(1, 0);
        var content = '';
        var ticketName = ['A', 'B', 'C', 'D', 'E'];
        for (var i = 0; i < Global.AllTicketNumber.length; i++) {
            var item = Global.AllTicketNumber[i];
            var str = '' + ticketName[i] + ':';
            var count = 0;
            var numberInTicket = [];
            for (var _i = 0, item_2 = item; _i < item_2.length; _i++) {
                var num = item_2[_i];
                if (count != 0 && count % 6 == 0) {
                    str += '\n   ';
                }
                var val = num < 10 ? '0' + num : num.toString();
                str = str + '   ' + val;
                count++;
            }
            content = content + str + '\n';
        }
        this.txtTicket = this.game.add.text(674, 300, content, {
            font: "16px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 400, align: "left", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        var txtTicket = this.txtTicket;
        var mask = this.game.add.graphics(0, 0);
        mask.beginFill(0xffffff);
        mask.drawRect(674, 300, 220, 170);
        txtTicket.mask = mask;
        txtTicket.inputEnabled = true;
        txtTicket.input.enableDrag();
        txtTicket.events.onDragUpdate.add(function (sprite, pointer, dragX, dragY, snapPoint) {
            txtTicket.x = 674;
            if (txtTicket.height < 170)
                txtTicket.y = 300;
            else if (txtTicket.y >= 300)
                txtTicket.y = 300;
            else if (txtTicket.y + txtTicket.height < 470)
                txtTicket.y = 470 - txtTicket.height;
        });
    };
    Result.prototype.showReward = function () {
        var _this = this;
        var txtWin = this.game.add.text(450, 350, '', {
            font: "26px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtWin.anchor.set(0.5, 0.5);
        var txtWin2 = this.game.add.text(450, 400, '', {
            font: "26px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtWin2.anchor.set(0.5, 0.5);
        var txtPrice = this.game.add.text(450, 440, '', {
            font: "38px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtPrice.anchor.set(0.5, 0.5);
        var btnPlayAgain = this.game.add.button(450, 550, Resources.btn_play_again.name, function () {
            _this.game.state.start('intro', true, false, IntroState.State1);
        });
        btnPlayAgain.anchor.set(0.5, 0.5);
        btnPlayAgain.onInputDown.add(function () {
            btnPlayAgain.scale.set(0.7, 0.7);
        }, this);
        btnPlayAgain.onInputUp.add(function () {
            btnPlayAgain.scale.set(1, 1);
        }, this);
        if (this.lstPrize[4] > 0) {
            txtWin.text = 'Chúc Mừng!!!';
            txtWin2.text = 'Bạn đã trúng thưởng:';
            txtPrice.text = this.numberWithCommas(this.lstPrize[4]) + 'VNĐ';
        }
        else {
            txtWin.text = 'Chưa trúng thưởng!';
            txtWin2.text = 'Chúc bạn may mắn lần sau!';
        }
    };
    Result.prototype.checkResultTicket = function (num) {
        var strNum = num < 10 ? '0' + num : num.toString();
        var indice = this.getIndicesOf(strNum, this.txtTicket.text, false);
        for (var _i = 0, indice_1 = indice; _i < indice_1.length; _i++) {
            var index = indice_1[_i];
            this.txtTicket.addColor('#00ff00', index);
            this.txtTicket.addColor('#000000', index + 2);
        }
    };
    Result.prototype.getIndicesOf = function (searchStr, str, caseSensitive) {
        var startIndex = 0, searchStrLen = searchStr.length;
        var index, indices = [];
        if (!caseSensitive) {
            str = str.toLowerCase();
            searchStr = searchStr.toLowerCase();
        }
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStrLen;
        }
        return indices;
    };
    Result.prototype.calculatorTicket = function () {
        var ticketCount = 0;
        switch (Global.Bao) {
            case 5:
                ticketCount = Global.AllTicketNumber.length * 40;
                break;
            case 6:
                ticketCount = Global.AllTicketNumber.length;
                break;
            default:
                ticketCount = Global.AllTicketNumber.length * this.ToHopChapKCuaN(Global.Bao, 6);
                break;
        }
        this.ticketQuantity = ticketCount;
        return ticketCount;
    };
    Result.prototype.calculatorResult = function () {
        var c3, c4, c5, c6;
        c3 = c4 = c5 = c6 = 0;
        for (var _i = 0, _a = Global.AllTicketNumber; _i < _a.length; _i++) {
            var ticket = _a[_i];
            var countSameNumber = 0;
            for (var _b = 0, ticket_1 = ticket; _b < ticket_1.length; _b++) {
                var number = ticket_1[_b];
                for (var _c = 0, _d = this.lstResultNumber; _c < _d.length; _c++) {
                    var numberS = _d[_c];
                    if (number == numberS) {
                        countSameNumber++;
                        break;
                    }
                }
            }
            var prizeCount = void 0;
            if (Global.Bao == 5) {
                prizeCount = this.CheckPrizeBao5(countSameNumber);
            }
            else if (Global.Bao == 6) {
                prizeCount = this.CheckPrize(countSameNumber);
            }
            else {
                prizeCount = this.CheckPrizeBao7To18(countSameNumber);
            }
            c3 += prizeCount[0];
            c4 += prizeCount[1];
            c5 += prizeCount[2];
            c6 += prizeCount[3];
        }
        if (c6 > 1)
            c6 = 1;
        var prize = c3 * this.GetRewardByPrize(3) + c4 * this.GetRewardByPrize(4)
            + c5 * this.GetRewardByPrize(5) + c6 * this.GetRewardByPrize(6);
        this.lstPrize = [c3, c4, c5, c6, prize];
    };
    Result.prototype.ToHopChapKCuaN = function (n, k) {
        if (k > n)
            return 0;
        var sub = n - k;
        if (k < sub) {
            return this.ToHopChapKCuaN(n, sub);
        }
        var tuso;
        var mauso;
        tuso = mauso = 1;
        //tinh tu so
        for (var i = k + 1; i <= n; i++) {
            tuso *= i;
        }
        //tinh mau so
        for (var i = 1; i <= sub; i++) {
            mauso *= i;
        }
        return (tuso / mauso);
    };
    Result.prototype.GetRewardByPrize = function (c) {
        var prize = 0;
        switch (c) {
            case 3:
                prize = 30000;
                break;
            case 4:
                prize = 300000;
                break;
            case 5:
                prize = 10000000;
                break;
            case 6:
                prize = 12000000000;
                break;
        }
        return prize;
    };
    Result.prototype.CheckPrize = function (c) {
        var prize = 0;
        var c3, c4, c5, c6;
        c3 = c4 = c5 = c6 = 0;
        switch (c) {
            case 3:
                c3++;
                prize = 30000;
                break;
            case 4:
                c4++;
                prize = 300000;
                break;
            case 5:
                c5++;
                prize = 10000000;
                break;
            case 6:
                c6++;
                prize = 12000000000;
                break;
        }
        return [c3, c4, c5, c6, prize];
    };
    Result.prototype.CheckPrizeBao5 = function (c) {
        var reward = 0;
        var c3, c4, c5, c6;
        c3 = c4 = c5 = c6 = 0;
        switch (c) {
            case 2:
                c3 += 4;
                reward = 4 * this.GetRewardByPrize(3);
                break;
            case 3:
                c4 += 3;
                c3 += 37;
                reward = 3 * this.GetRewardByPrize(4) + 37 * this.GetRewardByPrize(3);
                break;
            case 4:
                c5 += 2;
                c4 += 38;
                reward = 2 * this.GetRewardByPrize(5) + 38 * this.GetRewardByPrize(4);
                break;
            case 5:
                c6 += 1;
                c5 += 39;
                reward = 1 * this.GetRewardByPrize(6) + 39 * this.GetRewardByPrize(5);
                break;
        }
        return [c3, c4, c5, c6, reward];
    };
    Result.prototype.CheckPrizeBao7To18 = function (c) {
        var countSoTrung = c;
        var countSoKhongTrung = Global.Bao - c;
        var countG6, countG5, countG4, countG3;
        countG6 = countG5 = countG4 = countG3 = 0;
        countG3 = this.ToHopChapKCuaN(countSoTrung, 3) * this.ToHopChapKCuaN(countSoKhongTrung, 3);
        if (countSoTrung >= 4)
            countG4 = this.ToHopChapKCuaN(countSoTrung, 4) * this.ToHopChapKCuaN(countSoKhongTrung, 2);
        if (countSoTrung >= 5)
            countG5 = this.ToHopChapKCuaN(countSoTrung, 5) * this.ToHopChapKCuaN(countSoKhongTrung, 1);
        if (countSoTrung >= 6)
            countG6 = this.ToHopChapKCuaN(countSoTrung, 6);
        //c3 += countG3;
        //c4 += countG4;
        //c5 += countG5;
        //c6 += countG6;
        var reward = countG3 * this.GetRewardByPrize(3) + countG4 * this.GetRewardByPrize(4)
            + countG5 * this.GetRewardByPrize(5) + countG6 * this.GetRewardByPrize(6);
        return [countG3, countG4, countG5, countG6, reward];
    };
    Result.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    Result.prototype.setDrag = function (obj) {
        obj.inputEnabled = true;
        obj.input.enableDrag(true);
        obj.events.onInputUp.add(function () {
            console.log(obj.x + '|' + obj.y);
        }, this);
    };
    return Result;
}());
//# sourceMappingURL=result.js.map