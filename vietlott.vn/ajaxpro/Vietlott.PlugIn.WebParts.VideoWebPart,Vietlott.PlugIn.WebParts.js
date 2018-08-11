if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.VideoWebPart_class == "undefined") Vietlott.PlugIn.WebParts.VideoWebPart_class={};
Vietlott.PlugIn.WebParts.VideoWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.VideoWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.VideoWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.VideoWebPart = new Vietlott.PlugIn.WebParts.VideoWebPart_class();

