if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.VideoListMax4DWebPart_class == "undefined") Vietlott.PlugIn.WebParts.VideoListMax4DWebPart_class={};
Vietlott.PlugIn.WebParts.VideoListMax4DWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.VideoListMax4DWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideReading: function(ORenderInfo, GameId, Keyword, CurrentPageIndex) {
		return this.invoke("ServerSideReading", {"ORenderInfo":ORenderInfo, "GameId":GameId, "Keyword":Keyword, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideReading.getArguments().slice(4));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.VideoListMax4DWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.VideoListMax4DWebPart = new Vietlott.PlugIn.WebParts.VideoListMax4DWebPart_class();

