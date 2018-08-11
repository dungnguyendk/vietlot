if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.ListAgencyWebPart_class == "undefined") Vietlott.PlugIn.WebParts.ListAgencyWebPart_class={};
Vietlott.PlugIn.WebParts.ListAgencyWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.ListAgencyWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideReading: function(ORenderInfo, ProvinceId, WardId, Keyword, CurrentPageIndex) {
		return this.invoke("ServerSideReading", {"ORenderInfo":ORenderInfo, "ProvinceId":ProvinceId, "WardId":WardId, "Keyword":Keyword, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideReading.getArguments().slice(5));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.ListAgencyWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.ListAgencyWebPart = new Vietlott.PlugIn.WebParts.ListAgencyWebPart_class();

