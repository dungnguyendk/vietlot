if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.GameMax4DCompareWebPart_class == "undefined") Vietlott.PlugIn.WebParts.GameMax4DCompareWebPart_class={};
Vietlott.PlugIn.WebParts.GameMax4DCompareWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.GameMax4DCompareWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideDrawResult: function(ORenderInfo, GameId, GameDrawId, number, CheckMulti, PageIndex) {
		return this.invoke("ServerSideDrawResult", {"ORenderInfo":ORenderInfo, "GameId":GameId, "GameDrawId":GameDrawId, "number":number, "CheckMulti":CheckMulti, "PageIndex":PageIndex}, this.ServerSideDrawResult.getArguments().slice(6));
	},
	ServerSideOpenUrl: function(ORenderInfo, GameId) {
		return this.invoke("ServerSideOpenUrl", {"ORenderInfo":ORenderInfo, "GameId":GameId}, this.ServerSideOpenUrl.getArguments().slice(2));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.GameMax4DCompareWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.GameMax4DCompareWebPart = new Vietlott.PlugIn.WebParts.GameMax4DCompareWebPart_class();

