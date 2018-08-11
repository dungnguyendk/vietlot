if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.ListWinnerWebPart_class == "undefined") Vietlott.PlugIn.WebParts.ListWinnerWebPart_class={};
Vietlott.PlugIn.WebParts.ListWinnerWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.ListWinnerWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.ListWinnerWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.ListWinnerWebPart = new Vietlott.PlugIn.WebParts.ListWinnerWebPart_class();

