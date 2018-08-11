if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.LocationDrawWebPart_class == "undefined") Vietlott.PlugIn.WebParts.LocationDrawWebPart_class={};
Vietlott.PlugIn.WebParts.LocationDrawWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.LocationDrawWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.LocationDrawWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.LocationDrawWebPart = new Vietlott.PlugIn.WebParts.LocationDrawWebPart_class();

