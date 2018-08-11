if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.LedContentWebPart_class == "undefined") Vietlott.PlugIn.WebParts.LedContentWebPart_class={};
Vietlott.PlugIn.WebParts.LedContentWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.LedContentWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideReading: function(ORenderInfo, DataListId, SortField, SortType, Keyword) {
		return this.invoke("ServerSideReading", {"ORenderInfo":ORenderInfo, "DataListId":DataListId, "SortField":SortField, "SortType":SortType, "Keyword":Keyword}, this.ServerSideReading.getArguments().slice(5));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.LedContentWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.LedContentWebPart = new Vietlott.PlugIn.WebParts.LedContentWebPart_class();

