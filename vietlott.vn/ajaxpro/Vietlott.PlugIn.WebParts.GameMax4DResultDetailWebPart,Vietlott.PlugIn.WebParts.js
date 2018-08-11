if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.GameMax4DResultDetailWebPart_class == "undefined") Vietlott.PlugIn.WebParts.GameMax4DResultDetailWebPart_class={};
Vietlott.PlugIn.WebParts.GameMax4DResultDetailWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.GameMax4DResultDetailWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideDrawResult: function(ORenderInfo, Key, DrawId) {
		return this.invoke("ServerSideDrawResult", {"ORenderInfo":ORenderInfo, "Key":Key, "DrawId":DrawId}, this.ServerSideDrawResult.getArguments().slice(3));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.GameMax4DResultDetailWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.GameMax4DResultDetailWebPart = new Vietlott.PlugIn.WebParts.GameMax4DResultDetailWebPart_class();

