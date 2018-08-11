if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.RelationInfoWebPart_class == "undefined") Vietlott.PlugIn.WebParts.RelationInfoWebPart_class={};
Vietlott.PlugIn.WebParts.RelationInfoWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.RelationInfoWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.RelationInfoWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.RelationInfoWebPart = new Vietlott.PlugIn.WebParts.RelationInfoWebPart_class();

