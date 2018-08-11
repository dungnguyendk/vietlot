if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.Max4dStatiticsWebPart_class == "undefined") Vietlott.PlugIn.WebParts.Max4dStatiticsWebPart_class={};
Vietlott.PlugIn.WebParts.Max4dStatiticsWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.Max4dStatiticsWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideSearch: function(ORenderInfo, FromDate, ToDate, SetOfNumber, SortType, PageIndex) {
		return this.invoke("ServerSideSearch", {"ORenderInfo":ORenderInfo, "FromDate":FromDate, "ToDate":ToDate, "SetOfNumber":SetOfNumber, "SortType":SortType, "PageIndex":PageIndex}, this.ServerSideSearch.getArguments().slice(6));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.Max4dStatiticsWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.Max4dStatiticsWebPart = new Vietlott.PlugIn.WebParts.Max4dStatiticsWebPart_class();

