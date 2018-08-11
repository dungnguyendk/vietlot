var ChooseNumber = (function () {
    function ChooseNumber(phasergame) {
        this.game = phasergame;
    }
    ChooseNumber.prototype.preload = function () {
    };
    ChooseNumber.prototype.create = function () {
        var _this = this;
        this._currentBao = 6;
        this._allTicketSelected = [];
        this._lstBaoObject = [];
        this._lstTicketNumber = [];
        this.game.stage.backgroundColor = '#ffffff';
        var logo = this.game.add.image(10, this.game.world.centerY / 2, Resources.logo_game.name);
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
            font: "14px Arial", fill: "#ff0000", wordWrap: true,
            wordWrapWidth: 180, align: "center", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        this.txtError.anchor.set(0.5, 1);
        this.txtError.lineSpacing = -5;
        // descript text
        var txtDes1 = this.game.add.text(785, 130, '- Giá vé 10.000đ/\nlần tham gia dự thưởng.', {
            font: "14px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 400, align: "left", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        var txtDes2 = this.game.add.text(785, 190, '- Giờ quay số mở thưởng: \n18h10 ngày Thứ 4, Thứ 6 \nvà Chủ Nhật hàng tuần.', {
            font: "14px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 400, align: "left", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        var txtDes3 = this.game.add.text(785, 300, '  Các số đã chọn:', {
            font: "14px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 400, align: "left", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        // Buy Button
        var btnBuy = this.game.add.button(860, 560, Resources.btn_green.name, function () {
            _this.buyProcess();
        });
        btnBuy.anchor.set(0.5, 0.5);
        var txtBuy = this.game.add.text(btnBuy.x, btnBuy.y - 3, 'MUA VÉ', {
            font: "25px Arial", fill: "#ffffff", wordWrap: true, fontWeight: 'bold',
            wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        txtBuy.anchor.set(0.5, 0.5);
        btnBuy.onInputDown.add(function () {
            btnBuy.scale.set(0.7, 0.7);
            txtBuy.scale.set(0.7, 0.7);
        }, this);
        btnBuy.onInputUp.add(function () {
            btnBuy.scale.set(1, 1);
            txtBuy.scale.set(1, 1);
        }, this);
        //btnBuy.onInputOut.add(() => {
        //    btnBuy.scale.set(1, 1);
        //    txtBuy.scale.set(1, 1);
        //}, this);
        // Rule Button
        var btnRule = this.game.add.button(813, 113, Resources.ico_question.name, function () {
            OpenRule(2);
        });
        btnRule.anchor.set(0.5, 0.5);
        var txtRule = this.game.add.text(btnRule.x + 12, btnRule.y + 2, 'Luật Chơi', {
            font: "18px Arial", fill: "#ff0000", wordWrap: true,
            wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        txtRule.anchor.set(0, 0.5);
        txtRule.inputEnabled = true;
        txtRule.events.onInputUp.add(function () { OpenRule(2); });
        this.drawTicket();
        this.drawBao();
        this.showFullScreenButton();
        this.txtTicket = this.game.add.text(785, 320, 'A:\nB:\nC:\nD:\nE:', {
            font: "14px Arial", fill: "#000000", wordWrap: true,
            wordWrapWidth: 400, align: "left", boundsAlignH: 'center', boundsAlignV: 'center'
        });
        //	A mask is a Graphics object
        var mask = this.game.add.graphics(0, 0);
        //	Shapes drawn to the Graphics object must be filled.
        mask.beginFill(0xffffff);
        mask.drawRect(780, 320, 200, 170);
        var txtTicket = this.txtTicket;
        txtTicket.mask = mask;
        txtTicket.inputEnabled = true;
        txtTicket.input.enableDrag();
        txtTicket.events.onDragUpdate.add(function (sprite, pointer, dragX, dragY, snapPoint) {
            txtTicket.x = 785;
            if (txtTicket.height < 170)
                txtTicket.y = 320;
            else if (txtTicket.y >= 320)
                txtTicket.y = 320;
            else if (txtTicket.y + txtTicket.height < 490)
                txtTicket.y = 490 - txtTicket.height;
        });
        btnBuy.bringToTop();
        txtBuy.bringToTop();
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
        this._lstTicketNumber = [[], [], [], [], []];
        var lstTicketName = ['A', 'B', 'C', 'D', 'E'];
        var ticketW = 115;
        var ticketSpace = 3;
        var lstTickerPositionX = [166, 166 + (ticketW + ticketSpace) * 1,
            166 + (ticketW + ticketSpace) * 2,
            166 + (ticketW + ticketSpace) * 3,
            166 + (ticketW + ticketSpace) * 4];
        var ticketPositionY = 96;
        for (var i = 0; i < 5; i++) {
            var ticketBg = this.game.add.image(lstTickerPositionX[i], ticketPositionY, Resources.choose_number_ticket.name);
            var blackLine = this.game.add.image(lstTickerPositionX[i] + 15, ticketPositionY - 25, Resources.black_line.name);
            var txtName = this.game.add.text(ticketBg.x + 61, ticketBg.y + 19, lstTicketName[i], {
                font: "25px Arial", fill: "#ffffff", wordWrap: true, fontWeight: 'bold',
                wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
            });
            txtName.anchor.set(0.5, 0.5);
            var txtTC = this.game.add.text(ticketBg.x + 40, ticketBg.y + 466, '     ', {
                font: "18px Arial", fill: "#000000", wordWrap: true,
                wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
            });
            txtTC.anchor.set(0.5, 0.5);
            txtTC.data = { ticketIndex: i, select: false };
            txtTC.inputEnabled = true;
            txtTC.events.onInputUp.add(this.btnTCClick, this, 1, txtTC);
            var txtCancel = this.game.add.text(ticketBg.x + 100, ticketBg.y + 466, '     ', {
                font: "18px Arial", fill: "#000000", wordWrap: true,
                wordWrapWidth: 400, align: "center", boundsAlignH: 'center', boundsAlignV: 'middle'
            });
            txtCancel.anchor.set(0.5, 0.5);
            txtCancel.data = { ticketIndex: i };
            txtCancel.inputEnabled = true;
            txtCancel.events.onInputUp.add(this.btnCancelClick, this, 1, txtCancel);
            this._lstTicketNumber[i].btnTC = txtTC;
            //this._lstTicketNumber[i].btnCancel = txtCancel;
            var numberSpaceH = 20.5;
            var numberSpaceV = 40;
            for (var j = 0; j < 45; j++) {
                var row = void 0, collum = void 0;
                row = (j) % 10;
                collum = Math.floor((j) / 10);
                var bar = this.game.add.graphics(ticketBg.x + 17 + numberSpaceH * collum, ticketBg.y + 54 + numberSpaceV * row);
                var txtNumber = this.game.add.text(ticketBg.x + 17 + numberSpaceH * collum, ticketBg.y + 54 + numberSpaceV * row, ' ' + (j + 1) + ' ', {
                    font: "12px Arial", fill: "#000000", wordWrap: true, backgroundColor: null,
                    boundsAlignH: 'center', boundsAlignV: 'middle'
                });
                txtNumber.scale.set(0.9, 1);
                txtNumber.anchor.set(0.5, 0.5);
                txtNumber.inputEnabled = true;
                txtNumber.data = new NumberInTicket(txtNumber, i, lstTicketName[i], j + 1, bar, this);
                this._lstTicketNumber[i].push(txtNumber.data);
            }
        }
        var blackLine2 = this.game.add.image(760, ticketPositionY - 25, Resources.black_line_2.name);
    };
    ChooseNumber.prototype.drawBao = function () {
        this._lstBaoObject = [];
        var ticketBg = this.game.add.image(117, 96, Resources.bg_bao.name);
        var numberSpaceV = 40;
        for (var i = 0; i < 11; i++) {
            var bao = 0;
            if (i == 0)
                bao = 5;
            else if (i == 10)
                bao = 18;
            else
                bao = i + 6;
            var bar = this.game.add.graphics(ticketBg.x + 22.5, ticketBg.y + 55 + numberSpaceV * i);
            var txtNumber = this.game.add.text(ticketBg.x + 22.5, ticketBg.y + 55 + numberSpaceV * i, ' ' + bao + ' ', {
                font: "12px Arial", fill: "#000000", wordWrap: true, backgroundColor: null,
                boundsAlignH: 'center', boundsAlignV: 'middle'
            });
            txtNumber.scale.set(0.9, 1);
            txtNumber.anchor.set(0.5, 0.5);
            txtNumber.inputEnabled = true;
            txtNumber.data = new NumberInTicket(txtNumber, i, 'bao', bao, bar, this);
            this._lstBaoObject.push(txtNumber.data);
        }
    };
    ChooseNumber.prototype.onNumberClick = function (sender, params) {
        //Bao Number Clicked
        if (sender._ticketName == 'bao') {
            this.baoNumberClicked(sender);
        }
        else {
            this.ticketNumberClick(sender);
        }
    };
    ChooseNumber.prototype.baoNumberClicked = function (sender) {
        // huy choi bao
        if (this._currentBao == sender._value) {
            sender.setSelection(false);
            this._currentBao = 6;
        }
        else {
            for (var _i = 0, _a = this._lstBaoObject; _i < _a.length; _i++) {
                var t = _a[_i];
                if (t.getSelection()) {
                    t.setSelection(false);
                }
            }
            this._currentBao = sender._value;
            sender.setSelection(true);
        }
        //xoa du lieu ve
        this.clearAllTicket();
        this.clearAllTC();
        this.showTextTicket();
    };
    ChooseNumber.prototype.ticketNumberClick = function (sender) {
        if (this._lstTicketNumber[sender._ticketInDex].btnTC.data.select) {
            //this.showError('Không thể chọn số!');
            return;
        }
        if (sender.getSelection()) {
            sender.setSelection(false);
            this.showTextTicket();
            return;
        }
        var selectedCount = 0;
        for (var _i = 0, _a = this._lstTicketNumber[sender._ticketInDex]; _i < _a.length; _i++) {
            var num = _a[_i];
            if (num.getSelection()) {
                selectedCount++;
            }
        }
        if (selectedCount < this._currentBao) {
            sender.setSelection(true);
            this.showTextTicket();
        }
        else {
            this.showError('Lỗi chọn số. Bạn chỉ được chọn ' + this._currentBao + ' số trên mỗi bảng chọn số.');
        }
    };
    ChooseNumber.prototype.btnTCClick = function (sender) {
        if (sender.data.select) {
            sender.data.select = false;
            sender.text = '     ';
            this.clearTicket(sender.data.ticketIndex);
        }
        else {
            sender.data.select = true;
            sender.text = '  x  ';
            this.clearTicket(sender.data.ticketIndex);
            //chon so ngau nhien
            var lstNumber = this.generateRandomNumber(this._currentBao);
            for (var _i = 0, lstNumber_1 = lstNumber; _i < lstNumber_1.length; _i++) {
                var num = lstNumber_1[_i];
                this._lstTicketNumber[sender.data.ticketIndex][num - 1].setSelection(true);
            }
        }
        this.showTextTicket();
    };
    ChooseNumber.prototype.showError = function (msg) {
        this.txtError.text = msg;
        this.txtError.alpha = 1;
        this.game.tweens.remove(this.txtError.data);
        this.txtError.data = this.game.add.tween(this.txtError).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 3000);
    };
    ChooseNumber.prototype.showTextTicket = function () {
        var content = '';
        this._allTicketSelected = [];
        for (var _i = 0, _a = this._lstTicketNumber; _i < _a.length; _i++) {
            var item = _a[_i];
            var str = '' + item[0]._ticketName + ':';
            var count = 0;
            var numberInTicket = [];
            for (var _b = 0, item_1 = item; _b < item_1.length; _b++) {
                var num = item_1[_b];
                if (num.getSelection()) {
                    if (count != 0 && count % 6 == 0) {
                        str += '\n   ';
                    }
                    var val = num._value < 10 ? '0' + num._value : num._value.toString();
                    str = str + '  ' + val;
                    count++;
                    numberInTicket.push(num._value);
                }
            }
            content = content + str + '\n';
            this._allTicketSelected.push(numberInTicket);
        }
        this.txtTicket.text = content;
    };
    ChooseNumber.prototype.generateRandomNumber = function (quantity) {
        var temp = [];
        while (true) {
            if (temp.length >= quantity)
                break;
            var rand = Math.random();
            var newNumber = Math.floor(rand * 45) + 1;
            var isContain = false;
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var item = temp_1[_i];
                if (item == newNumber) {
                    isContain = true;
                    break;
                }
            }
            if (!isContain)
                temp.push(newNumber);
        }
        return temp;
    };
    ChooseNumber.prototype.btnCancelClick = function (sender) {
        this.clearTicket(sender.data.ticketIndex);
        this.clearTC(sender.data.ticketIndex);
        this.showTextTicket();
    };
    ChooseNumber.prototype.clearAllTicket = function () {
        for (var _i = 0, _a = this._lstTicketNumber; _i < _a.length; _i++) {
            var ticket = _a[_i];
            for (var _b = 0, ticket_1 = ticket; _b < ticket_1.length; _b++) {
                var num = ticket_1[_b];
                if (num.getSelection()) {
                    num.setSelection(false);
                }
            }
        }
    };
    ChooseNumber.prototype.clearTicket = function (tIndex) {
        if (this._lstTicketNumber.length > tIndex)
            for (var _i = 0, _a = this._lstTicketNumber[tIndex]; _i < _a.length; _i++) {
                var num = _a[_i];
                if (num.getSelection()) {
                    num.setSelection(false);
                }
            }
    };
    ChooseNumber.prototype.clearAllTC = function () {
        for (var _i = 0, _a = this._lstTicketNumber; _i < _a.length; _i++) {
            var ticket = _a[_i];
            ticket.btnTC.data.select = false;
            ticket.btnTC.text = '     ';
        }
    };
    ChooseNumber.prototype.clearTC = function (tIndex) {
        this._lstTicketNumber[tIndex].btnTC.data.select = false;
        this._lstTicketNumber[tIndex].btnTC.text = '     ';
    };
    ChooseNumber.prototype.buyProcess = function () {
        if (!this.checkAllTicket())
            return;
        Global.Bao = this._currentBao;
        Global.AllTicketNumber = [];
        for (var _i = 0, _a = this._allTicketSelected; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.length == this._currentBao) {
                Global.AllTicketNumber.push(item);
            }
        }
        this.game.state.start('intro', true, false, IntroState.State3);
    };
    ChooseNumber.prototype.checkAllTicket = function () {
        if (this._allTicketSelected == null) {
            this.showError('Bạn chưa chọn số. Vui lòng chọn đủ số để mua vé.');
            return false;
        }
        var hasSelected = false;
        for (var _i = 0, _a = this._allTicketSelected; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.length > 0)
                hasSelected = true;
            if (!(item.length == this._currentBao || item.length == 0)) {
                this.showError('Lỗi chọn số! Bạn phải chọn đủ ' + this._currentBao + ' số trên mỗi bảng chọn số.');
                return false;
            }
        }
        if (!hasSelected) {
            this.showError('Bạn chưa chọn số. Vui lòng chọn đủ số để mua vé.');
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
    function NumberInTicket(txtObj, tIndex, tName, value, graphic, context) {
        this._textObject = txtObj;
        this._ticketInDex = tIndex;
        this._ticketName = tName;
        this._value = value;
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
            this._background.beginFill(0xff0000, 1);
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
//# sourceMappingURL=chooseNumber.js.map