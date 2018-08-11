if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.ListNewsWebPart_class == "undefined") Vietlott.PlugIn.WebParts.ListNewsWebPart_class={};
Vietlott.PlugIn.WebParts.ListNewsWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.ListNewsWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideReadingNews: function(ORenderInfo, NewsCategoryId, CurrentPageIndex) {
		return this.invoke("ServerSideReadingNews", {"ORenderInfo":ORenderInfo, "NewsCategoryId":NewsCategoryId, "CurrentPageIndex":CurrentPageIndex}, this.ServerSideReadingNews.getArguments().slice(3));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.ListNewsWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.ListNewsWebPart = new Vietlott.PlugIn.WebParts.ListNewsWebPart_class();

