if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.Game655CompareWebPart_class == "undefined") Vietlott.PlugIn.WebParts.Game655CompareWebPart_class={};
Vietlott.PlugIn.WebParts.Game655CompareWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.Game655CompareWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideDrawResult: function(ORenderInfo, Key, GameDrawId, ArrayNumbers, CheckMulti, PageIndex) {
		return this.invoke("ServerSideDrawResult", {"ORenderInfo":ORenderInfo, "Key":Key, "GameDrawId":GameDrawId, "ArrayNumbers":ArrayNumbers, "CheckMulti":CheckMulti, "PageIndex":PageIndex}, this.ServerSideDrawResult.getArguments().slice(6));
	},
	ServerSideOpenUrl: function(ORenderInfo, GameId) {
		return this.invoke("ServerSideOpenUrl", {"ORenderInfo":ORenderInfo, "GameId":GameId}, this.ServerSideOpenUrl.getArguments().slice(2));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.Game655CompareWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.Game655CompareWebPart = new Vietlott.PlugIn.WebParts.Game655CompareWebPart_class();

