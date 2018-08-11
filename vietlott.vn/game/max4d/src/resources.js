var PrizeType;
(function (PrizeType) {
    PrizeType[PrizeType["G1"] = 0] = "G1";
    PrizeType[PrizeType["G2"] = 1] = "G2";
    PrizeType[PrizeType["G3"] = 2] = "G3";
    PrizeType[PrizeType["GKK1"] = 3] = "GKK1";
    PrizeType[PrizeType["GKK2"] = 4] = "GKK2";
})(PrizeType || (PrizeType = {}));
var Resources = (function () {
    function Resources() {
    }
    Resources.ticketNames = ['A', 'B', 'C', 'D', 'E', 'G'];
    Resources.amountNames = ['10k', '20k', '50k', '100k', '200k', '500k', '1M'];
    Resources.prizeNames = ['Giải 1', 'Giải 2', 'Giải 3', 'Giải KK 1', 'Giải KK 2'];
    Resources.prizeSpinOrder = [PrizeType.G2, PrizeType.G2, PrizeType.G1];
    Resources.bgLoad = {
        name: 'bgLoad',
        path: 'assets/loading-bg.jpg'
    };
    Resources.preloaderBar = {
        name: 'preloaderBar',
        path: 'assets/loadingbar.png'
    };
    Resources.bg_main = {
        name: 'bg-main',
        path: 'assets/bg-main.jpg'
    };
    Resources.btn_buyticket = {
        name: 'btn-buyticket',
        path: 'assets/btn-buyticket.png'
    };
    Resources.btn_help = {
        name: 'btn-help',
        path: 'assets/btn-help.png'
    };
    Resources.btn_play = {
        name: 'btn-play',
        path: 'assets/btn-play.png'
    };
    Resources.btn_choose_number = {
        name: 'btn-choose-number',
        path: 'assets/btn-choose-number.png'
    };
    Resources.btn_replay = {
        name: 'btn-replay',
        path: 'assets/btn-replay.png'
    };
    Resources.cage_max4d = {
        name: 'cage-max4d',
        path: 'assets/cage-max4d.png'
    };
    Resources.g1 = {
        name: 'g1',
        path: 'assets/g1.png'
    };
    Resources.g2 = {
        name: 'g2',
        path: 'assets/g2.png'
    };
    Resources.g3 = {
        name: 'g3',
        path: 'assets/g3.png'
    };
    Resources.panel_4d_dotblack = {
        name: 'panel-4d-dotblack',
        path: 'assets/panel-4d-dotblack.png'
    };
    Resources.panel_4d_logo = {
        name: 'panel-4d-logo',
        path: 'assets/panel-4d-logo.png'
    };
    Resources.panel_4d = {
        name: 'panel-4d',
        path: 'assets/panel-4d.png'
    };
    Resources.ico_question = {
        name: 'ico-question',
        path: 'assets/ico-question.png'
    };
    Resources.panel_table = {
        name: 'panel-table',
        path: 'assets/panel-table.png'
    };
    Resources.ticket_4d = {
        name: 'ticket-4d',
        path: 'assets/ticket-4d.png'
    };
    Resources.barcode = {
        name: 'barcode',
        path: 'assets/barcode.png'
    };
    Resources.ico_fullscreen = {
        name: 'ico-fullscreen',
        path: 'assets/ico-fullscreen.png'
    };
    Resources.bg_talk = {
        name: 'bg-talk',
        path: 'assets/bg-talk.png'
    };
    Resources.ico_arrow = {
        name: 'ico-arrow',
        path: 'assets/ico-arrow.png'
    };
    Resources.btn_choose = {
        name: 'btn-choose',
        path: 'assets/btn-choose.png'
    };
    Resources.ico_close = {
        name: 'ico-close',
        path: 'assets/ico-close.png'
    };
    Resources.black_lines = {
        name: 'black-lines',
        path: 'assets/black-lines.png'
    };
    Resources.border = {
        name: 'border',
        path: 'assets/border.png'
    };
    Resources.bangketqua = {
        name: 'bangketqua',
        path: 'assets/bangketqua.png'
    };
    Resources.girl_sprite = {
        name: 'girl-sprite',
        path: 'assets/girl-sprite.png',
        x: 100,
        y: 100,
        frameW: 244,
        frameH: 446
    };
    Resources.eyes_sprite = {
        name: 'eyes-sprite',
        path: 'assets/eyes-sprite.png',
        x: 713,
        y: 277,
        frameW: 80,
        frameH: 28
    };
    return Resources;
}());
//# sourceMappingURL=resources.js.map