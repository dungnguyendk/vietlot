var TicketViewHolder = (function () {
    function TicketViewHolder() {
    }
    TicketViewHolder.prototype.hasSelectNumber = function () {
        for (var _i = 0, _a = this.allNumber; _i < _a.length; _i++) {
            var col = _a[_i];
            for (var _b = 0, col_1 = col; _b < col_1.length; _b++) {
                var row = col_1[_b];
                if (row.data.getSelection()) {
                    return true;
                }
            }
        }
        return false;
    };
    TicketViewHolder.prototype.getAmount = function () {
        for (var _i = 0, _a = this.allAmount; _i < _a.length; _i++) {
            var a = _a[_i];
            var amountData = a.data;
            if (amountData.getSelection()) {
                return { amount: amountData._value, amountStr: Resources.amountNames[amountData._index] };
            }
        }
        return { amount: 0, amountStr: '' };
    };
    TicketViewHolder.prototype.getNumber = function () {
        var ret = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 10; j++) {
                var data = this.allNumber[i][j].data;
                if (data.getSelection()) {
                    ret.push(data._row);
                    break;
                }
            }
        }
        if (ret.length < 4)
            return [];
        else
            return ret;
    };
    TicketViewHolder.prototype.getNumberString = function () {
        var numbers = this.getNumber();
        var ret = '';
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var n = numbers_1[_i];
            ret += n;
        }
        return ret;
    };
    return TicketViewHolder;
}());
var ChooseNumber = (function () {
    function ChooseNumber(phasergame) {
        this.game = phasergame;
    }
    ChooseNumber.prototype.preload = function () {
    };
    ChooseNumber.prototype.create = function () {
        var _this = this;
        this.game.stage.backgroundColor = '#ffffff';
        var logo = this.game.add.image(10, this.game.world.centerY / 2, Resources.panel_4d_logo.name);
        var btnClose = this.game.add.button(945, 29, Resources.ico_close.name, function () {
            _this.game.state.start('intro', true, false, IntroState.State2);
        });
        btnClose.anchor.set(0.5, 0.5);
        btnClose.onInputDown.add(function () {
            btnClose.scale.set(0.7, 0.7);
        }, this);
        btnClose.onInputUp.add(function () {
            btnClose.scale.set(1, 1);
        }, this);
        this.txtError = this.game.add.text(862, 533, '', {
            font: "18px Arial", fill: "#ff0000", wordWrap: true,
            wordWrapWidth: 200, align: "center", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        this.txtError.anchor.set(0.5, 1);
        this.txtError.lineSpacing = -5;
        // descript text
        var txtDes2 = this.game.add.text(785, 130, 'Giờ quay số mở thưởng: \n18h10 ngày Thứ 3, Thứ 5 \nvà Thứ 7 hàng tuần.', {
            font: "14px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 400, align: "left", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        var ticketBg = this.game.add.image(784, 270, Resources.panel_table.name);
        this.lstTxtTicket = [];
        for (var i = 0; i < 6; i++) {
            var txtTicket = this.game.add.text(ticketBg.left + 10, ticketBg.top + 56 + 26 * i, Resources.ticketNames[i] + ':', {
                font: "14px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
                wordWrapWidth: 400, align: "left", boundsAlignH: 'center', boundsAlignV: 'center'
            });
            txtTicket.anchor.set(0, 0.5);
            var txtAmount = this.game.add.text(ticketBg.right - 10, txtTicket.y, '', {
                font: "14px Arial", fill: "#000000", wordWrap: true, fontWeight: 'bold',
                wordWrapWidth: 400, align: "right", boundsAlignH: 'center', boundsAlignV: 'center'
            });
            txtAmount.anchor.set(1, 0.5);
            this.lstTxtTicket.push([txtTicket, txtAmount]);
        }
        // Buy Button
        var btnBuy = this.game.add.button(860, 560, Resources.btn_buyticket.name, function () {
            _this.buyProcess();
        });
        btnBuy.anchor.set(0.5, 0.5);
        btnBuy.onInputDown.add(function () {
            btnBuy.scale.set(0.7, 0.7);
        }, this);
        btnBuy.onInputUp.add(function () {
            btnBuy.scale.set(1, 1);
        }, this);
        // Rule Button
        var btnRule = this.game.add.button(813, 113, Resources.ico_question.name, function () {
            OpenRule(2);
        });
        btnRule.anchor.set(0.5, 0.5);
        var txtRule = this.game.add.text(btnRule.x + 12, btnRule.y + 2, 'Luật Chơi', {
            font: "18px Arial", fill: "#da2888", wordWrap: true,
            wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        txtRule.anchor.set(0, 0.5);
        txtRule.inputEnabled = true;
        txtRule.events.onInputUp.add(function () { OpenRule(2); });
        this.drawTicket();
        this.showFullScreenButton();
    };
    ChooseNumber.prototype.showFullScreenButton = function () {
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
    ChooseNumber.prototype.drawTicket = function () {
        var lstTicketName = Resources.ticketNames;
        var ticketW = 106;
        var ticketSpace = 3;
        var startPoint = { x: 86, y: 54 };
        var numberSpaceH = 17;
        var numberSpaceV = 36.2;
        this.lstTicketsData = [];
        for (var i = 0; i < 6; i++) {
            var ticketHolder = new TicketViewHolder();
            ticketHolder.allNumber = [];
            ticketHolder.allAmount = [];
            ticketHolder.tIndex = i;
            ticketHolder.tName = Resources.ticketNames[i];
            //draw number
            var ticketBg = this.game.add.image(startPoint.x + (ticketW + ticketSpace) * i, startPoint.y, Resources.panel_4d.name);
            for (var j = 0; j < 4; j++) {
                var txtName = this.game.add.text(ticketBg.x + ticketBg.width / 2, ticketBg.y + 45, lstTicketName[i], {
                    font: "22px Arial", fill: "#ffffff", wordWrap: true, fontWeight: 'bold',
                    wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
                });
                txtName.anchor.set(0.5, 0.5);
                var allNumInCollum = [];
                for (var k = 0; k < 10; k++) {
                    var bg = this.game.add.graphics(ticketBg.x + 14.5 + numberSpaceH * j, ticketBg.y + 81 + numberSpaceV * k);
                    //let txtNumber = this.game.add.text(ticketBg.x + 17 + numberSpaceH * j, ticketBg.y + 54 + numberSpaceV * k, ' ' + k + ' ',
                    var txtNumber = this.game.add.text(bg.x, bg.y, ' ' + k + ' ', {
                        font: "12px Arial", fill: "#000000", wordWrap: true, backgroundColor: null,
                        boundsAlignH: 'center', boundsAlignV: 'middle'
                    });
                    txtNumber.scale.set(0.9, 1);
                    txtNumber.anchor.set(0.5, 0.5);
                    txtNumber.inputEnabled = true;
                    txtNumber.data = new NumberInTicket(txtNumber, bg, i, lstTicketName[i], k, j, this);
                    allNumInCollum.push(txtNumber);
                }
                ticketHolder.allNumber.push(allNumInCollum);
            }
            //draw amount
            var amountsString = Resources.amountNames;
            var amounts = [10000, 20000, 50000, 100000, 200000, 500000, 1000000];
            for (var j = 0; j < 7; j++) {
                var bg = this.game.add.graphics(ticketBg.x + 174 - 86, ticketBg.y + 81 + numberSpaceV * j);
                var txtNumber = this.game.add.text(bg.x, bg.y, amountsString[j], {
                    font: "12px Arial", fill: "#000000", wordWrap: true, backgroundColor: null,
                    boundsAlignH: 'center', boundsAlignV: 'middle'
                });
                txtNumber.scale.set(0.9, 1);
                txtNumber.anchor.set(0.5, 0.5);
                txtNumber.inputEnabled = true;
                txtNumber.data = new AmountInTicket(txtNumber, bg, i, lstTicketName[i], j, amounts[j], this);
                ticketHolder.allAmount.push(txtNumber);
            }
            //draw button TC
            var txtTC = this.game.add.text(ticketBg.x + 32, ticketBg.y + 456, '       ', {
                font: "18px Arial", fill: "#000000", wordWrap: true,
                wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
            });
            txtTC.anchor.set(0.5, 0.5);
            txtTC.data = { ticketIndex: i, select: false };
            txtTC.inputEnabled = true;
            txtTC.events.onInputUp.add(this.btnTCClick, this, 1, txtTC);
            ticketHolder.btnTC = txtTC;
            //draw button Cancel
            var txtCancel = this.game.add.text(ticketBg.x + 86, ticketBg.y + 456, '        ', {
                font: "18px Arial", fill: "#000000", wordWrap: true,
                wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
            });
            txtCancel.anchor.set(0.5, 0.5);
            txtCancel.data = { ticketIndex: i };
            txtCancel.inputEnabled = true;
            txtCancel.events.onInputUp.add(this.btnCancelClick, this, 1, txtCancel);
            this.lstTicketsData.push(ticketHolder);
        }
        var blackLine2 = this.game.add.image(744, startPoint.y, Resources.panel_4d_dotblack.name);
    };
    ChooseNumber.prototype.showError = function (msg) {
        this.txtError.text = msg;
        this.txtError.alpha = 1;
        this.game.tweens.remove(this.txtError.data);
        this.txtError.data = this.game.add.tween(this.txtError).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 3000);
    };
    ChooseNumber.prototype.showTextTicket = function (tIndex) {
        this.lstTxtTicket[tIndex][0].text = Resources.ticketNames[tIndex] +
            ':   ' + this.lstTicketsData[tIndex].getNumberString();
        this.lstTxtTicket[tIndex][1].text = this.lstTicketsData[tIndex].getAmount().amountStr;
    };
    ChooseNumber.prototype.generateRandomNumber = function (quantity) {
        var temp = [];
        while (true) {
            if (temp.length >= quantity)
                break;
            var rand = Math.random();
            var newNumber = Math.floor(rand * 10) + 0;
            temp.push(newNumber);
        }
        return temp;
    };
    ChooseNumber.prototype.onNumberClick = function (sender) {
        var nit = sender;
        if (this.lstTicketsData[nit._ticketInDex].btnTC.data.select) {
            return;
        }
        if (nit.getSelection()) {
            nit.setSelection(false);
        }
        else {
            for (var _i = 0, _a = this.lstTicketsData[nit._ticketInDex].allNumber[nit._collum]; _i < _a.length; _i++) {
                var n = _a[_i];
                n.data.setSelection(false);
            }
            nit.setSelection(true);
        }
        this.showTextTicket(nit._ticketInDex);
    };
    ChooseNumber.prototype.onAmountClick = function (sender) {
        if (sender.getSelection()) {
            sender.setSelection(false);
        }
        else {
            for (var _i = 0, _a = this.lstTicketsData[sender._ticketInDex].allAmount; _i < _a.length; _i++) {
                var a = _a[_i];
                a.data.setSelection(false);
            }
            sender.setSelection(true);
        }
        this.showTextTicket(sender._ticketInDex);
    };
    ChooseNumber.prototype.btnTCClick = function (sender) {
        var tInfo = sender.data;
        this.clearTicket(tInfo.ticketIndex);
        if (!tInfo.select) {
            var lstRandom = this.generateRandomNumber(4);
            for (var i = 0; i < 4; i++) {
                this.lstTicketsData[tInfo.ticketIndex].allNumber[i][lstRandom[i]].data.setSelection(true);
            }
            tInfo.select = true;
            sender.text = '   x  ';
        }
        else {
            tInfo.select = false;
            sender.text = '       ';
        }
        this.showTextTicket(tInfo.ticketIndex);
    };
    ChooseNumber.prototype.btnCancelClick = function (sender) {
        this.clearTicket(sender.data.ticketIndex);
        this.clearTC(sender.data.ticketIndex);
        this.showTextTicket(sender.data.ticketIndex);
    };
    ChooseNumber.prototype.clearAllTicket = function () {
    };
    ChooseNumber.prototype.clearTicket = function (tIndex) {
        for (var _i = 0, _a = this.lstTicketsData[tIndex].allNumber; _i < _a.length; _i++) {
            var col = _a[_i];
            for (var _b = 0, col_2 = col; _b < col_2.length; _b++) {
                var row = col_2[_b];
                row.data.setSelection(false);
            }
        }
    };
    ChooseNumber.prototype.clearAllTC = function () {
    };
    ChooseNumber.prototype.clearTC = function (tIndex) {
        this.lstTicketsData[tIndex].btnTC.data.select = false;
        this.lstTicketsData[tIndex].btnTC.text = '       ';
    };
    ChooseNumber.prototype.buyProcess = function () {
        if (!this.checkAllTicket())
            return;
        this.game.state.start('intro', true, false, IntroState.State3);
    };
    ChooseNumber.prototype.checkAllTicket = function () {
        Global.AllTicket = [];
        var hasSelect = false;
        for (var _i = 0, _a = this.lstTicketsData; _i < _a.length; _i++) {
            var ticket = _a[_i];
            var tNumberStr = ticket.getNumberString();
            if (ticket.hasSelectNumber() && tNumberStr == '') {
                this.showError('Bạn phải chọn đủ 4 số trên bảng ' + ticket.tName + '');
                return false;
            }
            var tNumber = ticket.getNumber();
            var tAmount = ticket.getAmount();
            if (tNumberStr == '' && tAmount.amountStr != '') {
                this.showError('Bạn chưa chọn số trên bảng ' + ticket.tName + '');
                return false;
            }
            else {
                if (tNumberStr != '') {
                    hasSelect = true;
                }
                if (tAmount.amountStr == '' && tNumberStr != '') {
                    tAmount.amountStr = Resources.amountNames[0];
                    tAmount.amount = 10000;
                }
                Global.AllTicket.push({
                    tName: ticket.tName,
                    tIndex: ticket.tIndex,
                    tNumber: tNumber,
                    tNumberString: tNumberStr,
                    tAmount: tAmount.amount,
                    tAmountString: tAmount.amountStr
                });
            }
        }
        if (!hasSelect) {
            this.showError('Bạn chưa chọn số!');
            return false;
        }
        return true;
    };
    ChooseNumber.prototype.render = function () {
        //this.game.debug.pointer(this.game.input.activePointer);
        //this.game.debug.inputInfo(32, 32);
    };
    ChooseNumber.prototype.setDrag = function (obj) {
        obj.inputEnabled = true;
        obj.input.enableDrag(true);
        obj.events.onInputUp.add(function () {
            console.log(obj.x + '|' + obj.y);
        }, this);
    };
    return ChooseNumber;
}());
var NumberInTicket = (function () {
    function NumberInTicket(txtObj, graphic, tIndex, tName, row, collum, context) {
        this._textObject = txtObj;
        this._ticketInDex = tIndex;
        this._ticketName = tName;
        this._row = row;
        this._collum = collum;
        this._context = context;
        this._background = graphic;
        this._textObject.events.onInputUp.add(this.onMouseUp, this);
        this._active = true;
        this.setSelection(false);
    }
    NumberInTicket.prototype.getSelection = function () {
        return this._selection;
    };
    NumberInTicket.prototype.setSelection = function (isSelect) {
        this._selection = isSelect;
        if (this._selection) {
            this._background.beginFill(0xda2888, 1);
            this._background.drawRect(-6, -15, 12, 25);
        }
        else {
            this._background.clear();
        }
    };
    NumberInTicket.prototype.getActive = function () {
        return this._active;
    };
    NumberInTicket.prototype.setActive = function (isActive) {
        this._active = isActive;
    };
    NumberInTicket.prototype.onMouseUp = function () {
        if (this._context != null) {
            this._context.onNumberClick(this);
        }
    };
    return NumberInTicket;
}());
var AmountInTicket = (function () {
    function AmountInTicket(txtObj, graphic, tIndex, tName, index, value, context) {
        this._textObject = txtObj;
        this._ticketInDex = tIndex;
        this._ticketName = tName;
        this._index = index;
        this._value = value;
        this._context = context;
        this._background = graphic;
        this._textObject.events.onInputUp.add(this.onMouseUp, this);
        this._active = true;
        this.setSelection(false);
    }
    AmountInTicket.prototype.getSelection = function () {
        return this._selection;
    };
    AmountInTicket.prototype.setSelection = function (isSelect) {
        this._selection = isSelect;
        if (this._selection) {
            this._background.beginFill(0xda2888, 1);
            this._background.drawRect(-10, -15, 20, 25);
        }
        else {
            this._background.clear();
        }
    };
    AmountInTicket.prototype.getActive = function () {
        return this._active;
    };
    AmountInTicket.prototype.setActive = function (isActive) {
        this._active = isActive;
    };
    AmountInTicket.prototype.onMouseUp = function () {
        if (this._context != null) {
            this._context.onAmountClick(this);
        }
    };
    return AmountInTicket;
}());
//# sourceMappingURL=chooseNumber.js.map