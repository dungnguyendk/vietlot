if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.HistoryWebPart_class == "undefined") Vietlott.PlugIn.WebParts.HistoryWebPart_class={};
Vietlott.PlugIn.WebParts.HistoryWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.HistoryWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.HistoryWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.HistoryWebPart = new Vietlott.PlugIn.WebParts.HistoryWebPart_class();

