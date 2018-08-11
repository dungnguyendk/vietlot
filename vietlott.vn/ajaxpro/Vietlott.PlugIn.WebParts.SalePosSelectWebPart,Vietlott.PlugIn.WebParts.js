if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.SalePosSelectWebPart_class == "undefined") Vietlott.PlugIn.WebParts.SalePosSelectWebPart_class={};
Vietlott.PlugIn.WebParts.SalePosSelectWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.SalePosSelectWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.SalePosSelectWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.SalePosSelectWebPart = new Vietlott.PlugIn.WebParts.SalePosSelectWebPart_class();

