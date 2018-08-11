if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.AgencyRuleWebPart_class == "undefined") Vietlott.PlugIn.WebParts.AgencyRuleWebPart_class={};
Vietlott.PlugIn.WebParts.AgencyRuleWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.AgencyRuleWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideReading: function(ORenderInfo, DataListId, SortField, SortType, Keyword) {
		return this.invoke("ServerSideReading", {"ORenderInfo":ORenderInfo, "DataListId":DataListId, "SortField":SortField, "SortType":SortType, "Keyword":Keyword}, this.ServerSideReading.getArguments().slice(5));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.AgencyRuleWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.AgencyRuleWebPart = new Vietlott.PlugIn.WebParts.AgencyRuleWebPart_class();

