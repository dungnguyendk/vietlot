var Result = (function () {
    function Result(phasergame) {
        this.rewardValue = 0;
        this.gLocationsY = [117, 155, 201, 247, 287];
        this.beforeSpinStart = 1000;
        this.delaySpinStart = 1000;
        this.delayBallAppear = 500;
        this.delayBallStartMove = 500;
        this.timeBallMove = 1000;
        this.delayBallDisappear = 1000;
        this.bodyTestVRange = [];
        this.flagSpinCages = [false, false, false, false, false];
        this.game = phasergame;
    }
    //public render() {
    //    this.game.debug.pointer(this.game.input.activePointer);
    //}
    Result.prototype.init = function (param) {
    };
    Result.prototype.preload = function () {
        this.game.stage.disableVisibilityChange = true;
    };
    Result.prototype.update = function () {
        for (var i = 0; i < 5; i++) {
            if (this.flagSpinCages[i]) {
                this.bodySpins[i].position[1] += 0.1;
                if (this.bodySpins[i].position[1] > this.bodyTestVRange[1]) {
                    this.bodySpins[i].position[1] = this.bodyTestVRange[0];
                }
            }
        }
    };
    Result.prototype.create = function () {
        var _this = this;
        this.lstResultNumber = [];
        this.ticketPrize = 0;
        this.game.stage.backgroundColor = '#ffffff';
        var now = new Date();
        var resultDes = this.game.add.text(36, 20, 'Kết quả quay số mở thưởng Max 4D, ngày ' + now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear(), {
            font: "25px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
            wordWrapWidth: 900, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        //for (let i = 0; i < 5; i++) {
        //    //this.game.add.image(50, this.gLocationsY[i], 'g' + (i + 1)).anchor.set(0.5, 0.5);
        //    let prizeName = this.game.add.text(50, this.gLocationsY[i]+3, Resources.prizeNames[i], {
        //        font: "17px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
        //        wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        //    });
        //    prizeName.anchor.set(0, 0.5);
        //}
        this.game.add.image(0, 52, Resources.bangketqua.name);
        this.createResult();
        this.calculatorTicket();
        this.createTextPrize();
        this.showTicket();
        this.createMachine();
        this.showFullScreenButton();
        this.game.time.events.add(this.beforeSpinStart, function () {
            _this.startSpin();
        });
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
    Result.prototype.createTextPrize = function () {
        this.txtPrizes = [];
        //let lstPrizeName = ['Giải Nhất', 'Giải Nhì', 'Giải Nhì', 'Giải Ba', 'Giải Ba', 'Giải Ba', 'Giải KK 1', 'Giải KK 2'];
        //for (let i = 0; i < 6; i++) {
        //    let txtAlphabet = this.game.add.text(545, 95 + 40 * i, Resources.ticketNames[i], {
        //        font: "16px Arial", fill: "#da2888", wordWrap: true, fontWeight: 'bold',
        //        wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        //    });
        //txtAlphabet.anchor.set(0, 0.5);
        //var border = this.game.add.sprite(570, txtAlphabet.y - 2, Resources.border.name);
        //border.anchor.set(0, 0.5);
        //    let txtNumber = this.game.add.text(570, txtAlphabet.y, '', {
        //        font: "16px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
        //        wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        //    });
        //    txtNumber.anchor.set(0, 0.5);
        //    this.txtPrizes.push([txtAlphabet, txtNumber]);
        //}
    };
    Result.prototype.showTicket = function () {
        var bgTicket = this.game.add.image(693, 35, Resources.ticket_4d.name);
        var barcode = this.game.add.image(bgTicket.centerX, bgTicket.bottom - 30, Resources.barcode.name);
        barcode.anchor.set(0.5, 0.5);
        var txtGach = this.game.add.text(bgTicket.left + 20, bgTicket.top + 70, '---------------------------------------', {
            font: "16px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        var txtGach2 = this.game.add.text(txtGach.left, bgTicket.top + 187, '---------------------------------------', {
            font: "16px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        var txtSum = this.game.add.text(txtGach.left, txtGach2.bottom, 'Tổng', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        var cost = this.numberWithCommas(this.ticketPrize);
        var txtCost = this.game.add.text(txtGach.right, txtSum.y, cost + 'VNĐ', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "right", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtCost.anchor.set(1, 0);
        var txtKyQSMT = this.game.add.text(txtGach.left, txtSum.bottom - 5, 'Kỳ QSMT', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        var dayName = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
        var monName = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        var now = new Date();
        var today = dayName[now.getDay()] + " " + now.getDate() + "/" + monName[now.getMonth()] + "/" + now.getFullYear();
        var txtKy = this.game.add.text(txtGach.right, txtKyQSMT.y, '4321/16\n' + today + '\n1234 - ABCD', {
            font: "12px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "right", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtKy.lineSpacing = -7;
        txtKy.anchor.set(1, 0);
        this.txtTickets = [];
        var tCount = 0;
        for (var i = 0; i < 6; i++) {
            var tData = Global.AllTicket[i];
            var txtNumber = this.game.add.text(txtGach.left, txtGach.bottom - 5 + 18 * tCount, tData.tAmount == 0 ? '' : tData.tName + ':   ' + tData.tNumberString, {
                font: "12px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
                wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
            });
            this.txtTickets.push(txtNumber);
            var txtAmount = this.game.add.text(txtGach.right, txtNumber.y, tData.tAmountString, {
                font: "12px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
                wordWrapWidth: 600, align: "left", boundsAlignH: 'center', boundsAlignV: 'middle'
            });
            txtAmount.anchor.set(1, 0);
            if (tData.tAmount != 0)
                tCount++;
        }
    };
    Result.prototype.showReward = function () {
        var _this = this;
        this.calculatorResult();
        var txtWin = this.game.add.text(830, 415, '', {
            font: "24px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtWin.anchor.set(0.5, 0.5);
        var txtWin2 = this.game.add.text(txtWin.centerX, 440, '', {
            font: "20px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtWin2.anchor.set(0.5, 0.5);
        var txtPrice = this.game.add.text(txtWin.centerX, 480, '', {
            font: "28px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
            wordWrapWidth: 600, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
        });
        txtPrice.anchor.set(0.5, 0.5);
        var btnPlayAgain = this.game.add.button(txtWin.centerX, 550, Resources.btn_replay.name, function () {
            _this.game.state.start('intro', true, false, IntroState.State1);
        });
        btnPlayAgain.anchor.set(0.5, 0.5);
        btnPlayAgain.onInputDown.add(function () {
            btnPlayAgain.scale.set(0.7, 0.7);
        }, this);
        btnPlayAgain.onInputUp.add(function () {
            btnPlayAgain.scale.set(1, 1);
        }, this);
        if (this.rewardValue > 0) {
            txtWin.text = 'Chúc Mừng!!!';
            txtWin2.text = 'Bạn đã trúng thưởng:';
            txtPrice.text = this.numberWithCommas(this.rewardValue) + 'VNĐ';
        }
        else {
            txtWin.text = 'Chưa trúng thưởng!';
            txtWin2.text = 'Chúc bạn may mắn lần sau!';
        }
    };
    Result.prototype.createMachine = function () {
        var msl = { x: 30, y: 370 };
        var mdV = 130;
        for (var i = 0; i < 5; i++) {
            var machine = this.game.add.image(msl.x + i * mdV, msl.y, Resources.cage_max4d.name);
        }
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.restitution = 0.9;
        this.game.physics.p2.gravity.y = 300;
        var sim = this.game.physics.p2;
        this.bodyTestVRange = [sim.pxmi(580), sim.pxmi(470)];
        this.bodySpins = [];
        for (var i = 0; i < 5; i++) {
            var rootPoint = { x: 88 + mdV * i, y: 490 };
            this.createMachineBody(rootPoint, i);
        }
    };
    Result.prototype.createMachineBody = function (rootPoint, index) {
        var sim = this.game.physics.p2;
        var points = [[-34, 0], [34, 0], [0, -60], [0, 60]];
        var angles = [];
        var option = {};
        option.position = [sim.pxmi(rootPoint.x), sim.pxmi(rootPoint.y)];
        option.angle = 0;
        var body = new p2.Body(option); //w:68 h:138 
        //body.addShape(new p2.Rectangle(sim.pxmi(100), sim.pxmi(100)), [0, 0]);
        body.addShape(new p2.Rectangle(sim.pxmi(30), sim.pxmi(140)), [sim.pxmi(-47), 0]);
        body.addShape(new p2.Rectangle(sim.pxmi(30), sim.pxmi(140)), [sim.pxmi(49), 0]);
        body.addShape(new p2.Rectangle(sim.pxmi(60), sim.pxmi(30)), [0, sim.pxmi(83)]);
        body.addShape(new p2.Rectangle(sim.pxmi(60), sim.pxmi(30)), [0, sim.pxmi(-83)]);
        body.addShape(new p2.Rectangle(sim.pxmi(20), sim.pxmi(30)), [sim.pxmi(-32), sim.pxmi(-66)], Math.PI / 4); //   /
        body.addShape(new p2.Rectangle(sim.pxmi(20), sim.pxmi(30)), [sim.pxmi(32), sim.pxmi(66)], Math.PI / 4); //   /
        body.addShape(new p2.Rectangle(sim.pxmi(20), sim.pxmi(30)), [sim.pxmi(-32), sim.pxmi(66)], 3 * Math.PI / 4); //   \
        body.addShape(new p2.Rectangle(sim.pxmi(20), sim.pxmi(30)), [sim.pxmi(32), sim.pxmi(-66)], 3 * Math.PI / 4); //   \
        sim.world.addBody(body);
        var bounds = new Phaser.Rectangle(rootPoint.x - 30, rootPoint.y - 30, 60, 60);
        this.balls = [];
        var ballRadius = 6;
        if (4 == index) {
            for (var i = 0; i < 6; i++) {
                var ball = this.game.add.sprite(0, 0, 'ball-' + Resources.ticketNames[i].toLowerCase());
                ball.x = bounds.randomX;
                ball.y = bounds.randomY;
                ball.scale.set(ballRadius * 2 / ball.width, ballRadius * 2 / ball.width);
                this.game.physics.p2.enable(ball, true);
                ball.body.clearShapes();
                ball.body.setCircle(ballRadius);
                this.balls.push(ball.body);
            }
        }
        else {
            for (var i = 0; i < 9; i++) {
                var ball = this.game.add.sprite(0, 0, (index + 1) + '-ball-' + i);
                ball.x = bounds.randomX;
                ball.y = bounds.randomY;
                ball.scale.set(12 / 167, 12 / 167);
                this.game.physics.p2.enable(ball, true);
                ball.body.setCircle(ballRadius);
                this.balls.push(ball.body);
            }
        }
        var option2 = {};
        option2.position = [sim.pxmi(rootPoint.x), sim.pxmi(580)];
        option2.angle = 0;
        var bodyTest = new p2.Body(option2);
        bodyTest.addShape(new p2.Rectangle(sim.pxmi(30), sim.pxmi(30)));
        sim.world.addBody(bodyTest);
        this.bodySpins.push(bodyTest);
        //this.mouseBody = this.game.add.sprite(100, 100, 'cursor');
        //this.game.physics.p2.enable(this.mouseBody, true);
        //this.mouseBody.body.static = true;
        //this.mouseBody.body.setCircle(10);
        //this.mouseBody.body.data.shapes[0].sensor = true;
        //this.game.input.onDown.add(this.click, this);
        //this.game.input.onUp.add(this.release, this);
        //this.game.input.addMoveCallback(this.move, this);
    };
    Result.prototype.click = function (pointer) {
        var bodies = this.game.physics.p2.hitTest(pointer.position, this.balls);
        if (bodies.length) {
            //  Attach to the first body the mouse hit
            this.mouseSpring = this.game.physics.p2.createSpring(this.mouseBody, bodies[0], 0, 30, 1);
        }
    };
    Result.prototype.release = function () {
        this.game.physics.p2.removeSpring(this.mouseSpring);
    };
    Result.prototype.move = function (pointer, x, y, isDown) {
        this.mouseBody.body.x = x;
        this.mouseBody.body.y = y;
    };
    Result.prototype.createResult = function () {
        this.lstResultNumber = [];
        this.lstResultNumberString = [];
        var count = 0;
        var rdIndex = Math.floor(Math.random() * 6) + 0;
        var rdToIndex = Math.floor(Math.random() * 6) + 0;
        while (count < 6) {
            var newNumber = [];
            if (count == rdToIndex && Global.AllTicket[rdIndex].tNumberString != '') {
                newNumber = Global.AllTicket[rdIndex].tNumber;
            }
            else {
                newNumber = this.generateRandomNumber(4);
            }
            var newNumberStr = '';
            for (var _i = 0, newNumber_1 = newNumber; _i < newNumber_1.length; _i++) {
                var n = newNumber_1[_i];
                newNumberStr += n;
            }
            var flag = false;
            for (var _a = 0, _b = this.lstResultNumberString; _a < _b.length; _a++) {
                var str = _b[_a];
                if (newNumberStr == str) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                count++;
                this.lstResultNumber.push(newNumber);
                this.lstResultNumberString.push(newNumberStr);
            }
        }
        var arrAlphabets = this.shuffle([0, 1, 2, 3, 4, 5]);
        this.lstResultAlphabet = [arrAlphabets[0], arrAlphabets[1], arrAlphabets[2]];
        arrAlphabets.shift();
        arrAlphabets.shift();
        arrAlphabets.shift();
        arrAlphabets.sort();
        this.lstResultAlphabet.push(arrAlphabets[0], arrAlphabets[1], arrAlphabets[2]);
        //console.log(this.lstResultAlphabet);
    };
    Result.prototype.startSpin = function () {
        var _this = this;
        this.flagSpinCages = [true, true, true, true, false];
        this.game.time.events.add(this.delaySpinStart, function () {
            _this.startSpinNumber();
        });
    };
    Result.prototype.startSpinNumber = function () {
        var _this = this;
        this.lstResultBall = [];
        var count = 0;
        var callback = function () {
            if (count > 0) {
            }
            if (count >= 6) {
                _this.flagSpinCages = [false, false, false, false, true];
                for (var _i = 0, _a = _this.bodySpins; _i < _a.length; _i++) {
                    var b = _a[_i];
                    b.position[1] = _this.bodyTestVRange[0];
                }
                _this.startSpinAlphabet();
                return;
            }
            _this.animateANumber(_this.lstResultNumber[count], callback, count);
            count++;
        };
        callback();
    };
    Result.prototype.animateANumber = function (arr, onComplete, numberCount) {
        var _this = this;
        if (arr.length != 4) {
            console.error('length of number must equal 4');
            return;
        }
        var balls = [];
        this.lstResultBall.push(balls);
        var endWidth = 20;
        var count = 0;
        var loop = this.game.time.events.loop(this.delayBallAppear, function () {
            var index = count;
            var ball = _this.game.add.image(90 + 130 * count, 510, (count + 1) + '-ball-' + arr[count]);
            ball.anchor.set(0.5, 0.5);
            ball.scale.set(12 / 167, 12 / 167);
            ball.data = arr[count];
            balls.push(ball);
            var tween = _this.game.add.tween(ball).to({ y: 410 }, _this.timeBallMove, Phaser.Easing.Elastic.Out, true, _this.delayBallStartMove);
            tween.onComplete.add(function () {
                _this.game.add.tween(ball.scale).to({ x: 40 / 167, y: 40 / 167 }, 500, Phaser.Easing.Linear.None, true, 500);
                _this.game.add.tween(ball).to({ y: 360 }, 500, Phaser.Easing.Linear.None, true, 500)
                    .onComplete.add(function () {
                    if (numberCount == 5) {
                        _this.flagSpinCages[index] = false;
                    }
                    if (index == 3) {
                        _this.game.time.events.add(_this.delayBallDisappear, function () {
                            //for (let b of balls) {
                            //    b.destroy();
                            //}
                            for (var i = 0; i < 4; i++) {
                                var endX = 600 + i * endWidth;
                                var endY = 87 + numberCount * 47;
                                _this.game.add.tween(balls[i].scale).to({ x: endWidth / 167, y: endWidth / 167 }, 200, Phaser.Easing.Linear.None, true, 200);
                                _this.game.add.tween(balls[i]).to({ x: endX, y: endY }, 200, Phaser.Easing.Linear.None, true, 200);
                            }
                            if (onComplete != undefined && onComplete != null) {
                                onComplete();
                            }
                        });
                    }
                });
            }, _this, 1);
            count++;
            if (count == 4) {
                _this.game.time.events.remove(loop);
            }
        });
    };
    Result.prototype.startSpinAlphabet = function () {
        var _this = this;
        var count = 0;
        var onComplete = function () {
            for (var i = 3; i < 6; i++) {
            }
            var g1 = _this.lstResultNumber[_this.lstResultAlphabet[2]];
            //this.txtPrizes[6][1].text = 'x' + g1[1] + g1[2] + g1[3];
            //this.txtPrizes[6][2].text = Resources.prizeNames[PrizeType.GKK1];
            //this.txtPrizes[7][1].text = 'xx' + g1[2] + g1[3];
            //this.txtPrizes[7][2].text = Resources.prizeNames[PrizeType.GKK2];
            _this.orderResultTable();
            _this.flagSpinCages = [false, false, false, false, false];
            for (var _i = 0, _a = _this.bodySpins; _i < _a.length; _i++) {
                var b = _a[_i];
                b.position[1] = _this.bodyTestVRange[1];
            }
        };
        var loop = this.game.time.events.loop(3000, function () {
            var index = count;
            var ball = _this.game.add.image(608, 510, 'ball-' + Resources.ticketNames[_this.lstResultAlphabet[index]].toLowerCase());
            ball.anchor.set(0.5, 0.5);
            ball.scale.set(12 / 167, 12 / 167);
            var tween = _this.game.add.tween(ball).to({ y: 410 }, _this.timeBallMove, Phaser.Easing.Elastic.Out, true, 0);
            tween.onComplete.add(function () {
                _this.game.add.tween(ball.scale).to({ x: 40 / 167, y: 40 / 167 }, 500, Phaser.Easing.Linear.None, true, 500);
                _this.game.add.tween(ball).to({ y: 360 }, 500, Phaser.Easing.Linear.None, true, 500)
                    .onComplete.add(function () {
                    if (index == 2) {
                        _this.showBallG1();
                    }
                    else {
                        _this.showBallG2(index);
                    }
                    _this.game.time.events.add(_this.delayBallDisappear, function () {
                        ball.destroy();
                        //this.txtPrizes[this.lstResultAlphabet[index]][2].text = Resources.prizeNames[Resources.prizeSpinOrder[index]];
                        if (index == 2) {
                            onComplete();
                        }
                    });
                });
            }, _this, 1);
            count++;
            if (count == 3) {
                _this.game.time.events.remove(loop);
            }
        });
    };
    Result.prototype.orderResultTable = function () {
        //let lstY: number[] = [];
        //lstY.push(this.txtPrizes[0][0].y);
        //lstY.push(this.txtPrizes[1][0].y);
        //lstY.push(this.txtPrizes[2][0].y);
        //lstY.push(this.txtPrizes[3][0].y);
        //lstY.push(this.txtPrizes[4][0].y);
        //lstY.push(this.txtPrizes[5][0].y);
        //let lstLocationY: number[] = [0, 0, 0, 0, 0, 0];
        //lstLocationY[this.lstResultAlphabet[2]] = lstY[0];
        //lstLocationY[this.lstResultAlphabet[0]] = lstY[1];
        //lstLocationY[this.lstResultAlphabet[1]] = lstY[2];
        //lstLocationY[this.lstResultAlphabet[3]] = lstY[3];
        //lstLocationY[this.lstResultAlphabet[4]] = lstY[4];
        //lstLocationY[this.lstResultAlphabet[5]] = lstY[5];
        for (var i = 0; i < 6; i++) {
            var ind = i;
        }
        this.showBallResult();
    };
    Result.prototype.showBallResult = function () {
        this.showAllBallG3();
        this.showBallKK1();
        this.showBallKK2();
        this.showReward();
        //this.game.time.events.add(2000, () => {
        //    this.showTextResult();
        //});
    };
    Result.prototype.showTextResult = function () {
        for (var _i = 0, _a = this.lstResultBall; _i < _a.length; _i++) {
            var balls = _a[_i];
            for (var _b = 0, balls_1 = balls; _b < balls_1.length; _b++) {
                var ball = balls_1[_b];
                this.game.add.text(ball.x - 6, ball.y - 13, ball.data, {
                    font: "50px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
                    wordWrapWidth: 900, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
                }).scale.set(0.5, 0.5);
                ball.destroy();
            }
        }
    };
    Result.prototype.showBallG1 = function () {
        var g1 = this.lstResultNumber[this.lstResultAlphabet[2]];
        var w = 33;
        var ratio = w / 167;
        var bSpace = w * 4 + 15;
        for (var j = 0; j < 4; j++) {
            var endX = 260 + (w + 2) * j;
            var endY = this.gLocationsY[0];
            this.game.add.tween(this.lstResultBall[this.lstResultAlphabet[2]][j].scale).to({ x: w / 167, y: w / 167 }, 200, Phaser.Easing.Linear.None, true, 200);
            this.game.add.tween(this.lstResultBall[this.lstResultAlphabet[2]][j]).to({ x: endX, y: endY }, 200, Phaser.Easing.Linear.None, true, 200);
        }
    };
    Result.prototype.showAllBallG2 = function () {
        for (var i = 0; i < 2; i++) {
            this.showBallG2(i);
        }
    };
    Result.prototype.showBallG2 = function (i) {
        var w = 33;
        var ratio = w / 167;
        var bSpace = (w + 2) * 4 + 30;
        for (var j = 0; j < 4; j++) {
            var endX = 184 + bSpace * i + (w + 2) * j;
            var endY = this.gLocationsY[1];
            this.game.add.tween(this.lstResultBall[this.lstResultAlphabet[i]][j].scale).to({ x: w / 167, y: w / 167 }, 200, Phaser.Easing.Linear.None, true, 200);
            this.game.add.tween(this.lstResultBall[this.lstResultAlphabet[i]][j]).to({ x: endX, y: endY }, 200, Phaser.Easing.Linear.None, true, 200);
        }
    };
    Result.prototype.showAllBallG3 = function () {
        for (var i = 0; i < 3; i++) {
            this.showBallG3(i);
        }
    };
    Result.prototype.showBallG3 = function (i) {
        var g2 = [this.lstResultNumber[this.lstResultAlphabet[3]],
            this.lstResultNumber[this.lstResultAlphabet[4]],
            this.lstResultNumber[this.lstResultAlphabet[5]]];
        var w = 33;
        var ratio = w / 167;
        var delta = [0, 11, 18];
        var bSpace = (w + 2) * 4 * i + delta[i];
        for (var j = 0; j < 4; j++) {
            var endX = 109 + bSpace + (w + 2) * j;
            var endY = this.gLocationsY[2];
            this.game.add.tween(this.lstResultBall[this.lstResultAlphabet[i + 3]][j].scale).to({ x: w / 167, y: w / 167 }, 200, Phaser.Easing.Linear.None, true, 200);
            this.game.add.tween(this.lstResultBall[this.lstResultAlphabet[i + 3]][j]).to({ x: endX, y: endY }, 200, Phaser.Easing.Linear.None, true, 200);
        }
    };
    Result.prototype.showBallKK1 = function () {
        var w = 33;
        var ratio = w / 167;
        var bSpace = w * 4 + 8;
        var g1 = this.lstResultNumber[this.lstResultAlphabet[2]];
        var balls = [];
        for (var i = 0; i < 4; i++) {
            if (i == 0)
                continue;
            var ball = this.game.add.image(260 + (w + 2) * i, this.gLocationsY[3], i == 0 ? 'ball--1' : (i + 1) + '-ball-' + g1[i]);
            ball.anchor.set(0.5, 0.5);
            ball.scale.set(ratio, ratio);
            ball.alpha = 0;
            ball.data = g1[i];
            this.game.add.tween(ball).to({ alpha: 1 }, 3000, Phaser.Easing.Quadratic.In, true, 0);
            balls.push(ball);
        }
        this.lstResultBall.push(balls);
    };
    Result.prototype.showBallKK2 = function () {
        var w = 33;
        var ratio = w / 167;
        var bSpace = w * 4 + 8;
        var g1 = this.lstResultNumber[this.lstResultAlphabet[2]];
        var balls = [];
        for (var i = 0; i < 4; i++) {
            if (i < 2)
                continue;
            var ball = this.game.add.image(260 + (w + 2) * i, this.gLocationsY[4], i < 2 ? 'ball--1' : (i + 1) + '-ball-' + g1[i]);
            ball.anchor.set(0.5, 0.5);
            ball.scale.set(ratio, ratio);
            ball.alpha = 0;
            ball.data = g1[i];
            this.game.add.tween(ball).to({ alpha: 1 }, 3000, Phaser.Easing.Quadratic.In, true, 0);
            balls.push(ball);
        }
        this.lstResultBall.push(balls);
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
        var tAmount = 0;
        for (var i = 0; i < 6; i++) {
            tAmount += Global.AllTicket[i].tAmount;
        }
        this.ticketPrize = tAmount;
        return tAmount;
    };
    Result.prototype.calculatorResult = function () {
        var reward = 0;
        for (var _i = 0, _a = Global.AllTicket; _i < _a.length; _i++) {
            var ticket = _a[_i];
            if (ticket.tNumberString == '')
                continue;
            for (var i = 0; i < 6; i++) {
                if (ticket.tNumberString == this.lstResultNumberString[this.lstResultAlphabet[i]]) {
                    var pType = this.getPrizeType(i);
                    reward += this.GetMultiple(pType) * ticket.tAmount;
                    this.txtTickets[ticket.tIndex].addColor('#da2888', 4);
                }
                else {
                    if (i == 2) {
                        var arr = this.lstResultNumber[this.lstResultAlphabet[i]];
                        if (ticket.tNumber[1] == arr[1] && ticket.tNumber[2] == arr[2] && ticket.tNumber[3] == arr[3]) {
                            reward += this.GetMultiple(PrizeType.GKK1) * ticket.tAmount;
                            this.txtTickets[ticket.tIndex].addColor('#da2888', 5);
                        }
                        else if (ticket.tNumber[2] == arr[2] && ticket.tNumber[3] == arr[3]) {
                            reward += this.GetMultiple(PrizeType.GKK2) * ticket.tAmount;
                            this.txtTickets[ticket.tIndex].addColor('#da2888', 6);
                        }
                    }
                }
            }
        }
        this.rewardValue = reward;
    };
    Result.prototype.getPrizeType = function (index) {
        switch (index) {
            case 0:
                return PrizeType.G2;
            case 1:
                return PrizeType.G2;
            case 2:
                return PrizeType.G1;
            case 3:
                return PrizeType.G3;
            case 4:
                return PrizeType.G3;
            case 5:
                return PrizeType.G3;
        }
        return -1;
    };
    Result.prototype.GetMultiple = function (type) {
        var multiple = 0;
        switch (type) {
            case PrizeType.G1:
                multiple = 1500;
                break;
            case PrizeType.G2:
                multiple = 650;
                break;
            case PrizeType.G3:
                multiple = 300;
                break;
            case PrizeType.GKK1:
                multiple = 100;
                break;
            case PrizeType.GKK2:
                multiple = 10;
                break;
        }
        return multiple;
    };
    Result.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    Result.prototype.generateRandomNumber = function (length) {
        var temp = [];
        while (true) {
            if (temp.length >= length)
                break;
            var rand = Math.random();
            var newNumber = Math.floor(rand * 10) + 0;
            temp.push(newNumber);
        }
        return temp;
    };
    Result.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
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