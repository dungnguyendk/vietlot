if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.ViewArticleWebPart_class == "undefined") Vietlott.PlugIn.WebParts.ViewArticleWebPart_class={};
Vietlott.PlugIn.WebParts.ViewArticleWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.ViewArticleWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.ViewArticleWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.ViewArticleWebPart = new Vietlott.PlugIn.WebParts.ViewArticleWebPart_class();

