"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8084],{797:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7897),o=n.n(r),i=n(1519),a=n.n(i)()(o());a.push([e.id,"video[data-v-e607099c]{height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:100%}","",{version:3,sources:["webpack://./node_modules/helper-vue-components/src/VideoBackground/Component.vue"],names:[],mappings:"AAAA,uBAAsD,WAAA,CAAP,MAAA,CAAzC,mBAAA,CAAA,gBAAA,CAAiB,iBAAA,CAAkB,KAAA,CAAyB,UAOlE",sourcesContent:["video{object-fit:cover;position:absolute;top:0;left:0;height:100%;width:100%}"],sourceRoot:""}]);const c=a},1519:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},7897:e=>{function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n=t(e,4),r=n[1],o=n[3];if(!o)return r;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),c="/*# ".concat(a," */"),s=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[r].concat(s).concat([c]).join("\n")}return[r].join("\n")}},3379:(e,t,n)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:m(d,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=v||(v=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},8084:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const r={props:{url:{type:String},video_type:{type:String},poster_url:{type:String}}};var o=n(3379),i=n.n(o),a=n(797),c={insert:"head",singleton:!1};i()(a.Z,c);a.Z.locals;const s=(0,n(1900).Z)(r,(function(){var e=this,t=e._self._c;return t("video",{attrs:{playsinline:"",autoplay:"",muted:"",loop:"",poster:e.poster_url},domProps:{muted:!0}},[t("source",{attrs:{src:e.url,type:e.video_type}})])}),[],!1,null,"e607099c",null).exports},1900:(e,t,n)=>{function r(e,t,n,r,o,i,a,c){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(e,t){return s.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:u}}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=8084.bundle.js.map