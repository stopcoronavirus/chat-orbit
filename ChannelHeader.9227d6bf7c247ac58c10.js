(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{357:function(e,t,n){"use strict";e.exports=n(358)},358:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=(o=n(10))&&"object"==typeof o&&"default"in o?o.default:o;function i(e){return i.warnAboutHMRDisabled&&(i.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),a.Children.only(e.children)}i.warnAboutHMRDisabled=!1;var r=function e(){return e.shouldWrapWithAppContainer?function(e){return function(t){return a.createElement(i,null,a.createElement(e,t))}}:function(e){return e}};r.shouldWrapWithAppContainer=!1;t.AppContainer=i,t.hot=r,t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},468:function(e,t,n){"use strict";n.r(t),function(e){var o,a=n(10),i=n.n(a),r=n(390),l=n(357),s=n(360),u=n(355),c=n(359);n(469);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,a=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(){var e=Object(r.g)(),t=Object(r.h)().channel,n=Object(a.useContext)(c.a),o=n.networkStore,l=n.uiStore;function m(e){e.stopPropagation(),l.openControlPanel()}var b=(0,f(Object(u.b)(),1)[0])("viewNames.".concat(e.pathname.slice(1)));return Object(s.a)((function(){return i.a.createElement("div",{className:"Header"},i.a.createElement("div",{className:"open-controlpanel icon flaticon-lines18",onClick:m,style:d({},l.theme)},o.unreadEntriesCount>0?i.a.createElement("span",{className:"unreadMessages"},o.unreadEntriesCount):null),i.a.createElement("div",{className:"currentChannel"},t?"#".concat(t):b))}))}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(m,"useLocation{location}\nuseParams{{ channel }}\nuseContext{{ networkStore, uiStore }}\nuseTranslation{[t]}\nuseObserver{}",(function(){return[r.g,r.h,u.b,s.a]}));var b,p,h=Object(l.hot)(e)(m);t.default=h,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(m,"ChannelHeader","/Users/guillaumeaugais/lib/stopcoronavirus.tech/ipfs/orbit-web/src/containers/ChannelHeader.js"),b.register(h,"default","/Users/guillaumeaugais/lib/stopcoronavirus.tech/ipfs/orbit-web/src/containers/ChannelHeader.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,n(52)(e))},469:function(e,t,n){var o=n(470);"string"==typeof o&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(47)(o,a);o.locals&&(e.exports=o.locals)},470:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,".Header{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#1e1e1e;font-weight:bold;font-size:2em;color:#a0a0a0;padding:0.2em 0.3em}.Header .notificationsIcon{position:absolute;font-size:0.8em;top:1.1em;right:1.1em;padding-top:-0.2em}.Header .icon{font-size:0.7em;cursor:pointer;font-weight:100}.Header .currentChannel{display:flex;flex:1 0 33%;justify-content:flex-start;font-size:1em;color:#f0f0f0;margin-left:0.2em}.Header .unreadMessages{position:absolute;top:0;left:2.35em;font-weight:bold;font-size:0.6em;color:rgba(240,240,240,0.9);background-color:#783c8c;border-radius:1em;display:flex;justify-content:center;height:1.2em;min-width:1.2em;padding:0.1em}.channelHeaderAnimation-enter{-webkit-animation:slideFromLeft;animation:slideFromLeft;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.channelHeaderAnimation-leave{-webkit-animation:fadeOutRight;animation:fadeOutRight;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}\n",""])}}]);