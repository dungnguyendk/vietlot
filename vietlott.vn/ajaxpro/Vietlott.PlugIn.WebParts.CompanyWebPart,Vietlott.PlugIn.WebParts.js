if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.CompanyWebPart_class == "undefined") Vietlott.PlugIn.WebParts.CompanyWebPart_class={};
Vietlott.PlugIn.WebParts.CompanyWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.CompanyWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.CompanyWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.CompanyWebPart = new Vietlott.PlugIn.WebParts.CompanyWebPart_class();

