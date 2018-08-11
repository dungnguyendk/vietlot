if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.ListStoreWebPart_class == "undefined") Vietlott.PlugIn.WebParts.ListStoreWebPart_class={};
Vietlott.PlugIn.WebParts.ListStoreWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.ListStoreWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideDetectWard: function(ORenderInfo, ProvinceId) {
		return this.invoke("ServerSideDetectWard", {"ORenderInfo":ORenderInfo, "ProvinceId":ProvinceId}, this.ServerSideDetectWard.getArguments().slice(2));
	},
	ServerSideReading: function(ORenderInfo, ProvinceId, WardId, StoreId, Keyword, CurrentPageIndex) {
		return this.invoke("ServerSideReading", {"ORenderInfo":ORenderInfo, "ProvinceId":ProvinceId, "WardId":WardId, "StoreId":StoreId, "Keyword":Keyword, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideReading.getArguments().slice(6));
	},
	ServerSideOpenUrl: function(ORenderInfo, ProvinceId, WardId, Keyword, CurrentPageIndex) {
		return this.invoke("ServerSideOpenUrl", {"ORenderInfo":ORenderInfo, "ProvinceId":ProvinceId, "WardId":WardId, "Keyword":Keyword, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideOpenUrl.getArguments().slice(5));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.ListStoreWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.ListStoreWebPart = new Vietlott.PlugIn.WebParts.ListStoreWebPart_class();

