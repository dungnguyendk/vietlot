if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.SocialActivityWebPart_class == "undefined") Vietlott.PlugIn.WebParts.SocialActivityWebPart_class={};
Vietlott.PlugIn.WebParts.SocialActivityWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.SocialActivityWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.SocialActivityWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.SocialActivityWebPart = new Vietlott.PlugIn.WebParts.SocialActivityWebPart_class();

