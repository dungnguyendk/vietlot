if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.VideoList655WebPart_class == "undefined") Vietlott.PlugIn.WebParts.VideoList655WebPart_class={};
Vietlott.PlugIn.WebParts.VideoList655WebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.VideoList655WebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideReading: function(ORenderInfo, GameId, Keyword, CurrentPageIndex) {
		return this.invoke("ServerSideReading", {"ORenderInfo":ORenderInfo, "GameId":GameId, "Keyword":Keyword, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideReading.getArguments().slice(4));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.VideoList655WebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.VideoList655WebPart = new Vietlott.PlugIn.WebParts.VideoList655WebPart_class();

