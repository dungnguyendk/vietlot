if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.Game645ResultDetailWebPart_class == "undefined") Vietlott.PlugIn.WebParts.Game645ResultDetailWebPart_class={};
Vietlott.PlugIn.WebParts.Game645ResultDetailWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.Game645ResultDetailWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideDrawResult: function(ORenderInfo, Key, DrawId) {
		return this.invoke("ServerSideDrawResult", {"ORenderInfo":ORenderInfo, "Key":Key, "DrawId":DrawId}, this.ServerSideDrawResult.getArguments().slice(3));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.Game645ResultDetailWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.Game645ResultDetailWebPart = new Vietlott.PlugIn.WebParts.Game645ResultDetailWebPart_class();

