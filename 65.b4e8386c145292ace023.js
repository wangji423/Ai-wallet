(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{vnES:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",function(){return b}),n.d(t,"ion_nav_link",function(){return w});var i=n("QdLy"),r=n("RQB8"),s=n.n(r),o=n("20ZU"),a=n("MGFw"),u=n("WtWf"),c=n("A36C"),l=n("Zgba"),v=n("QPqR"),h=n("jRcJ"),d=n("bC4P"),f=n("ZaV5"),p=function(){function ViewController(e,t){Object(a.a)(this,ViewController),this.component=e,this.params=t,this.state=1}var e;return Object(u.a)(ViewController,[{key:"init",value:(e=Object(o.a)(s.a.mark(function _callee(e){var t;return s.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(this.state=2,this.element){n.next=6;break}return t=this.component,n.next=5,Object(f.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params);case 5:this.element=n.sent;case 6:case"end":return n.stop()}},_callee,this)})),function init(t){return e.apply(this,arguments)})},{key:"_destroy",value:function _destroy(){Object(v.k)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}]),ViewController}(),m=function matches(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),s=Object.keys(n);if(r.length!==s.length)return!1;for(var o=0,a=r;o<a.length;o++){var u=a[o];if(i[u]!==n[u])return!1}return!0},g=function convertToView(e,t){return e?e instanceof p?e:new p(e,t):null},b=function(){function Nav(e){Object(a.a)(this,Nav),Object(c.o)(this,e),this.ionNavWillLoad=Object(c.g)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(c.g)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(c.g)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}var e,t,r,f,b;return Object(u.a)(Nav,[{key:"swipeGestureChanged",value:function swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}},{key:"rootChanged",value:function rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}},{key:"componentWillLoad",value:function componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(l.b)(this);this.swipeGesture=l.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}},{key:"componentDidLoad",value:(b=Object(o.a)(s.a.mark(function _callee2(){return s.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return this.rootChanged(),e.next=3,n.e(2).then(n.bind(null,"V+6w"));case 3:this.gesture=e.sent.createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged();case 5:case"end":return e.stop()}},_callee2,this)})),function componentDidLoad(){return b.apply(this,arguments)})},{key:"disconnectedCallback",value:function disconnectedCallback(){var e,t=Object(i.a)(this.views);try{for(t.s();!(e=t.n()).done;){var n=e.value;Object(h.h)(n.element,h.e),n._destroy()}}catch(r){t.e(r)}finally{t.f()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}},{key:"push",value:function push(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:n},i)}},{key:"insert",value:function insert(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:n}],opts:i},r)}},{key:"insertPages",value:function insertPages(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}},{key:"pop",value:function pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}},{key:"popTo",value:function popTo(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}},{key:"popToRoot",value:function popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}},{key:"removeIndex",value:function removeIndex(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}},{key:"setRoot",value:function setRoot(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)}},{key:"setPages",value:function setPages(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}},{key:"setRouteId",value:function setRouteId(e,t,n,i){var r,a=this.getActiveSync();if(m(a,e,t))return Promise.resolve({changed:!1,element:a.element});var u,c=new Promise(function(e){return r=e}),l={updateURL:!1,viewIsReady:function viewIsReady(e){var t,n,i=new Promise(function(e){return t=e});return r({changed:!0,element:e,markVisible:(n=Object(o.a)(s.a.mark(function _callee3(){return s.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,u;case 3:case"end":return e.stop()}},_callee3)})),function markVisible(){return n.apply(this,arguments)})}),i}};if("root"===n)u=this.setRoot(e,t,l);else{var v=this.views.find(function(n){return m(n,e,t)});v?u=this.popTo(v,Object.assign(Object.assign({},l),{direction:"back",animationBuilder:i})):"forward"===n?u=this.push(e,t,Object.assign(Object.assign({},l),{animationBuilder:i})):"back"===n&&(u=this.setRoot(e,t,Object.assign(Object.assign({},l),{direction:"back",animated:!0,animationBuilder:i})))}return c}},{key:"getRouteId",value:(f=Object(o.a)(s.a.mark(function _callee4(){var e;return s.a.wrap(function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:return e=this.getActiveSync(),t.abrupt("return",e?{id:e.element.tagName,params:e.params,element:e.element}:void 0);case 2:case"end":return t.stop()}},_callee4,this)})),function getRouteId(){return f.apply(this,arguments)})},{key:"getActive",value:function getActive(){return Promise.resolve(this.getActiveSync())}},{key:"getByIndex",value:function getByIndex(e){return Promise.resolve(this.views[e])}},{key:"canGoBack",value:function canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}},{key:"getPrevious",value:function getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}},{key:"getLength",value:function getLength(){return this.views.length}},{key:"getActiveSync",value:function getActiveSync(){return this.views[this.views.length-1]}},{key:"canGoBackSync",value:function canGoBackSync(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();return!(!e||!this.getPreviousSync(e))}},{key:"getPreviousSync",value:function getPreviousSync(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();if(e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}}},{key:"queueTrns",value:(r=Object(o.a)(s.a.mark(function _callee5(e,t){var n,i,r;return s.a.wrap(function _callee5$(s){for(;;)switch(s.prev=s.next){case 0:if(!this.isTransitioning||null==e.opts||!e.opts.skipIfBusy){s.next=2;break}return s.abrupt("return",Promise.resolve(!1));case 2:if(n=new Promise(function(t,n){e.resolve=t,e.reject=n}),e.done=t,!e.opts||!1===e.opts.updateURL||!this.useRouter){s.next=17;break}if(!(i=document.querySelector("ion-router"))){s.next=17;break}return s.next=9,i.canTransition();case 9:if(!1!==(r=s.sent)){s.next=14;break}return s.abrupt("return",Promise.resolve(!1));case 14:if("string"!=typeof r){s.next=17;break}return i.push(r,e.opts.direction||"back"),s.abrupt("return",Promise.resolve(!1));case 17:return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),s.abrupt("return",n);case 21:case"end":return s.stop()}},_callee5,this)})),function queueTrns(e,t){return r.apply(this,arguments)})},{key:"success",value:function success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i="back"===e.direction?"back":"forward";n.navChanged(i)}}}},{key:"failed",value:function failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}},{key:"fireError",value:function fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}},{key:"nextTrns",value:function nextTrns(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}},{key:"runTransition",value:(t=Object(o.a)(s.a.mark(function _callee6(e){var t,n,i,r;return s.a.wrap(function _callee6$(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),t||n){s.next=8;break}throw new Error("no views in the stack to be removed");case 8:if(!n||1!==n.state){s.next=11;break}return s.next=11,n.init(this.el);case 11:if(this.postViewInit(n,t,e),(i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t)&&e.opts&&t&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||n&&n.animationBuilder),t.animationBuilder=e.opts.animationBuilder),!i){s.next=20;break}return s.next=17,this.transition(n,t,e);case 17:s.t0=s.sent,s.next=21;break;case 20:s.t0={hasCompleted:!0,requiresTransition:!1};case 21:r=s.t0,this.success(r,e),this.ionNavDidChange.emit(),s.next=29;break;case 26:s.prev=26,s.t1=s.catch(0),this.failed(s.t1,e);case 29:this.isTransitioning=!1,this.nextTrns();case 31:case"end":return s.stop()}},_callee6,this,[[0,26]])})),function runTransition(e){return t.apply(this,arguments)})},{key:"prepareTI",value:function prepareTI(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(v.k)(void 0!==e.removeStart,"removeView needs removeStart"),Object(v.k)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var r=e.insertViews;if(r){Object(v.k)(r.length>0,"length can not be zero");var s=function convertToViews(e){return e.map(function(e){return e instanceof p?e:"component"in e?g(e.component,null===e.componentProps?void 0:e.componentProps):g(e,void 0)}).filter(function(e){return null!==e})}(r);if(0===s.length)throw new Error("invalid views to insert");var o,a=Object(i.a)(s);try{for(a.s();!(o=a.n()).done;){var u=o.value;u.delegate=e.opts.delegate;var c=u.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}}catch(l){a.e(l)}finally{a.f()}e.insertViews=s}}},{key:"getEnteringView",value:function getEnteringView(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,s=i+e.removeCount,o=r.length-1;o>=0;o--){var a=r[o];if((o<i||o>=s)&&a!==t)return a}}},{key:"postViewInit",value:function postViewInit(e,t,n){Object(v.k)(t||e,"Both leavingView and enteringView are null"),Object(v.k)(n.resolve,"resolve must be valid"),Object(v.k)(n.reject,"reject must be valid");var r,s=n.opts,o=n.insertViews,a=n.removeStart,u=n.removeCount;if(void 0!==a&&void 0!==u){Object(v.k)(a>=0,"removeStart can not be negative"),Object(v.k)(u>=0,"removeCount can not be negative"),r=[];for(var c=0;c<u;c++){var l=this.views[c+a];l&&l!==e&&l!==t&&r.push(l)}s.direction=s.direction||"back"}var d=this.views.length+(void 0!==o?o.length:0)-(void 0!==u?u:0);if(Object(v.k)(d>=0,"final balance can not be negative"),0===d)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){var f,p=n.insertStart,m=Object(i.a)(o);try{for(m.s();!(f=m.n()).done;){var g=f.value;this.insertViewAt(g,p),p++}}catch(S){m.e(S)}finally{m.f()}n.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(r&&r.length>0){var b,w=Object(i.a)(r);try{for(w.s();!(b=w.n()).done;){var k=b.value;Object(h.h)(k.element,h.c),Object(h.h)(k.element,h.d),Object(h.h)(k.element,h.e)}}catch(S){w.e(S)}finally{w.f()}var y,j=Object(i.a)(r);try{for(j.s();!(y=j.n()).done;){var O=y.value;this.destroyView(O)}}catch(S){j.e(S)}finally{j.f()}}}},{key:"transition",value:(e=Object(o.a)(s.a.mark(function _callee7(e,t,n){var i,r,o,a,u,c,v,d,f=this;return s.a.wrap(function _callee7$(s){for(;;)switch(s.prev=s.next){case 0:return i=n.opts,r=i.progressAnimation?function(e){return f.sbAni=e}:void 0,o=Object(l.b)(this),a=e.element,u=t&&t.element,c=Object.assign({mode:o,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||i.animationBuilder||l.c.get("navAnimation"),progressCallback:r,animated:this.animated&&l.c.getBoolean("animated",!0),enteringEl:a,leavingEl:u},i),s.next=8,Object(h.j)(c);case 8:return v=s.sent,d=v.hasCompleted,s.abrupt("return",this.transitionFinish(d,e,t,i));case 11:case"end":return s.stop()}},_callee7,this)})),function transition(t,n,i){return e.apply(this,arguments)})},{key:"transitionFinish",value:function transitionFinish(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}},{key:"insertViewAt",value:function insertViewAt(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(v.k)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(v.k)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}},{key:"removeView",value:function removeView(e){Object(v.k)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(v.k)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}},{key:"destroyView",value:function destroyView(e){e._destroy(),this.removeView(e)}},{key:"cleanup",value:function cleanup(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],s=r.element;s&&(i>n?(Object(h.h)(s,h.e),this.destroyView(r)):i<n&&Object(h.i)(s,!0))}}},{key:"canStart",value:function canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}},{key:"onStart",value:function onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}},{key:"onMove",value:function onMove(e){this.sbAni&&this.sbAni.progressStep(e)}},{key:"onEnd",value:function onEnd(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(function(){i.animationEnabled=!0},{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=Object(d.a)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(d.a)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,r,n)}}},{key:"render",value:function render(){return Object(c.j)("slot",null)}},{key:"el",get:function get(){return Object(c.k)(this)}}],[{key:"watchers",get:function get(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}}]),Nav}();b.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var w=function(){function NavLink(e){var t=this;Object(a.a)(this,NavLink),Object(c.o)(this,e),this.routerDirection="forward",this.onClick=function(){return function navLink(e,t,n,i,r){var s=e.closest("ion-nav");if(s)if("forward"===t){if(void 0!==n)return s.push(n,i,{skipIfBusy:!0,animationBuilder:r})}else if("root"===t){if(void 0!==n)return s.setRoot(n,i,{skipIfBusy:!0,animationBuilder:r})}else if("back"===t)return s.pop({skipIfBusy:!0,animationBuilder:r});return Promise.resolve(!1)}(t.el,t.routerDirection,t.component,t.componentProps,t.routerAnimation)}}return Object(u.a)(NavLink,[{key:"render",value:function render(){return Object(c.j)(c.c,{onClick:this.onClick})}},{key:"el",get:function get(){return Object(c.k)(this)}}]),NavLink}()}}]);