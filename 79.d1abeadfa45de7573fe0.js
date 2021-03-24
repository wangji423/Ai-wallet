(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{NAQR:function(e,i,t){"use strict";t.r(i),t.d(i,"ion_split_pane",function(){return b});var s=t("TR1e"),n=t("MGFw"),r=t("WtWf"),o=t("A36C"),a=t("Zgba"),d="split-pane-main",l="split-pane-side",p={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},b=function(){function SplitPane(e){Object(n.a)(this,SplitPane),Object(o.o)(this,e),this.ionSplitPaneVisible=Object(o.g)(this,"ionSplitPaneVisible",7),this.visible=!1,this.disabled=!1,this.when=p.lg}return Object(r.a)(SplitPane,[{key:"visibleChanged",value:function visibleChanged(e){var i={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(i)}},{key:"connectedCallback",value:function connectedCallback(){this.styleChildren(),this.updateState()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}},{key:"updateState",value:function updateState(){var e=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var i=this.when;if("boolean"!=typeof i){var t=p[i]||i;if(0!==t.length){if(window.matchMedia){var s=function callback(i){e.visible=i.matches},n=window.matchMedia(t);n.addListener(s),this.rmL=function(){return n.removeListener(s)},this.visible=n.matches}}else this.visible=!1}else this.visible=i}}},{key:"isPane",value:function isPane(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains(l)}},{key:"styleChildren",value:function styleChildren(){for(var e=this.contentId,i=this.el.children,t=this.el.childElementCount,s=!1,n=0;n<t;n++){var r=i[n],o=void 0!==e&&r.id===e;if(o){if(s)return void console.warn("split pane cannot have more than one main node");s=!0}h(r,o)}s||console.warn("split pane does not have a specified main node")}},{key:"render",value:function render(){var e,i=Object(a.b)(this);return Object(o.j)(o.c,{class:(e={},Object(s.a)(e,i,!0),Object(s.a)(e,"split-pane-".concat(i),!0),Object(s.a)(e,"split-pane-visible",this.visible),e)},Object(o.j)("slot",null))}},{key:"el",get:function get(){return Object(o.k)(this)}}],[{key:"watchers",get:function get(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}}]),SplitPane}(),h=function setPaneClass(e,i){var t,s;i?(t=d,s=l):(t=l,s=d);var n=e.classList;n.add(t),n.remove(s)};b.style={ios:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}",md:":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none !important;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:0;border-right:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side){border-left:unset;border-right:unset;-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border)}}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:var(--border);border-right:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){border-left:unset;border-right:unset;-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0}}"}}}]);