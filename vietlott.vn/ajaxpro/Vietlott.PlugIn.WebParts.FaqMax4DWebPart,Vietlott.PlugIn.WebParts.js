if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.FaqMax4DWebPart_class == "undefined") Vietlott.PlugIn.WebParts.FaqMax4DWebPart_class={};
Vietlott.PlugIn.WebParts.FaqMax4DWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.FaqMax4DWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.FaqMax4DWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.FaqMax4DWebPart = new Vietlott.PlugIn.WebParts.FaqMax4DWebPart_class();

