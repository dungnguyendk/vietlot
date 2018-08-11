if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.Statitics645WebPart_class == "undefined") Vietlott.PlugIn.WebParts.Statitics645WebPart_class={};
Vietlott.PlugIn.WebParts.Statitics645WebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.Statitics645WebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideSearch: function(ORenderInfo, FromDate, ToDate, SortType) {
		return this.invoke("ServerSideSearch", {"ORenderInfo":ORenderInfo, "FromDate":FromDate, "ToDate":ToDate, "SortType":SortType}, this.ServerSideSearch.getArguments().slice(4));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.Statitics645WebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.Statitics645WebPart = new Vietlott.PlugIn.WebParts.Statitics645WebPart_class();

