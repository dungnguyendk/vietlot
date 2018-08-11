if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.LawDocumentWebPart_class == "undefined") Vietlott.PlugIn.WebParts.LawDocumentWebPart_class={};
Vietlott.PlugIn.WebParts.LawDocumentWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.LawDocumentWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideReading: function(ORenderInfo, DataListId, SortField, SortType, Keyword, CurrentPageIndex) {
		return this.invoke("ServerSideReading", {"ORenderInfo":ORenderInfo, "DataListId":DataListId, "SortField":SortField, "SortType":SortType, "Keyword":Keyword, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideReading.getArguments().slice(6));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.LawDocumentWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.LawDocumentWebPart = new Vietlott.PlugIn.WebParts.LawDocumentWebPart_class();

