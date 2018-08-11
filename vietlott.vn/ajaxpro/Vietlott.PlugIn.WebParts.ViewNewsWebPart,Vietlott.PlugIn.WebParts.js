if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.ViewNewsWebPart_class == "undefined") Vietlott.PlugIn.WebParts.ViewNewsWebPart_class={};
Vietlott.PlugIn.WebParts.ViewNewsWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.ViewNewsWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.ViewNewsWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.ViewNewsWebPart = new Vietlott.PlugIn.WebParts.ViewNewsWebPart_class();

