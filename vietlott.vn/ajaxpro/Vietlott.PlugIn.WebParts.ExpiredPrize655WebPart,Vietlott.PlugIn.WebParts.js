if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.ExpiredPrize655WebPart_class == "undefined") Vietlott.PlugIn.WebParts.ExpiredPrize655WebPart_class={};
Vietlott.PlugIn.WebParts.ExpiredPrize655WebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.ExpiredPrize655WebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideOpenUrl: function(ORenderInfo, PageIndex) {
		return this.invoke("ServerSideOpenUrl", {"ORenderInfo":ORenderInfo, "PageIndex":PageIndex}, this.ServerSideOpenUrl.getArguments().slice(2));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.ExpiredPrize655WebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.ExpiredPrize655WebPart = new Vietlott.PlugIn.WebParts.ExpiredPrize655WebPart_class();

