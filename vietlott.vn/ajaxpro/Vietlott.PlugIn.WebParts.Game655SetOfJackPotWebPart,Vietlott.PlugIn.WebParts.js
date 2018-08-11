if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.Game655SetOfJackPotWebPart_class == "undefined") Vietlott.PlugIn.WebParts.Game655SetOfJackPotWebPart_class={};
Vietlott.PlugIn.WebParts.Game655SetOfJackPotWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.Game655SetOfJackPotWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideReading: function(ORenderInfo, CurrentPageIndex) {
		return this.invoke("ServerSideReading", {"ORenderInfo":ORenderInfo, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideReading.getArguments().slice(2));
	},
	ServerSideOpenUrl: function(ORenderInfo, CurrentPageIndex) {
		return this.invoke("ServerSideOpenUrl", {"ORenderInfo":ORenderInfo, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideOpenUrl.getArguments().slice(2));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.Game655SetOfJackPotWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.Game655SetOfJackPotWebPart = new Vietlott.PlugIn.WebParts.Game655SetOfJackPotWebPart_class();

