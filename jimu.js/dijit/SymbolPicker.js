// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dijit/TooltipDialog dijit/popup dijit/registry jimu/dijit/SymbolChooser jimu/symbolUtils".split(" "),function(h,k,l,m,b,e,f,d,n,p,g,q,r,t){return h([k,l,m],{baseClass:"jimu-symbol-picker",declaredClass:"jimu.dijit.SymbolPicker",templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"symbolNode" class\x3d"symbol-node jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"separator jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8 jimu-float-leading"\x3e\x3c/div\x3e\x3c/div\x3e',
tooltipDialog:null,_isTooltipDialogOpened:!1,symbol:null,type:null,cropImage:!1,customZIndex:null,postCreate:function(){this.inherited(arguments);this._createTooltipDialog();this._hideTooltipDialog();var a=this.symbolChooser.getSymbol();a&&this._drawSymbol(a)},destroy:function(){this._hideTooltipDialog();this.symbolChooser&&this.symbolChooser.destroy();this.symbolChooser=null;this.inherited(arguments)},_createTooltipDialog:function(){var a=e.create("div");this.tooltipDialog=new p({content:a});this.symbolChooser=
new r({cropImage:this.cropImage,customZIndex:this.customZIndex,symbol:this.symbol,type:this.type});this.symbolChooser.placeAt(a);this.symbolChooser.startup();this.own(d(this.symbolChooser,"change",b.hitch(this,function(a){this._drawSymbol(a);this.emit("change",a)})));this.own(d(this.domNode,"click",b.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})));this.own(d(document.body,"click",b.hitch(this,function(a){var b=
a.target||a.srcElement;a=this._getColorPickers();if(!(0<a.length&&f.some(a,function(a){return a.isPartOfPopup(b)})))if(a=this.tooltipDialog.domNode,a=b===a||e.isDescendant(b,a),this.cropImage&&this.symbolChooser._isCustomImageOptionSelected()){var c=this.symbolChooser.imageChooser,d=c.msgPopupOpen;c.cropPopupOpen||d||a||this._hideTooltipDialog();c.cropPopup&&c.cropPopup.domNode||(c.cropPopupOpen=!1);c.msgPopup&&c.msgPopup.domNode||(c.msgPopupOpen=!1)}else a||this._hideTooltipDialog()})));this.own(d(this.symbolChooser,
"resize",b.hitch(this,function(){this._isTooltipDialogOpened&&(this._hideTooltipDialog(),this._showTooltipDialog())})))},_getColorPickers:function(){var a=n(".jimu-color-picker",this.symbolChooser.domNode);return f.map(a,b.hitch(this,function(a){return q.byNode(a)}))},reset:function(){this.symbol=this.type=null;e.empty(this.symbolNode);this.symbolChooser.reset()},showBySymbol:function(a){this.reset();a&&(this._drawSymbol(a),this.symbolChooser.showBySymbol(a))},showByType:function(a){this.reset();
this.symbolChooser.showByType(a);(a=this.symbolChooser.getSymbol())&&this._drawSymbol(a)},getSymbol:function(){return this.symbolChooser.getSymbol()},_drawSymbol:function(a){e.empty(this.symbolNode);a&&(a=t.createSymbolNode(a,{width:16,height:16}))&&e.place(a,this.symbolNode)},_showTooltipDialog:function(){this.tooltipDialog&&(g.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.domNode}),this._isTooltipDialogOpened=!0)},_hideTooltipDialog:function(){this.tooltipDialog&&(g.close(this.tooltipDialog),
this._isTooltipDialogOpened=!1)}})});