"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7569,4805],{4060:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(1519),i=s.n(n)()((function(e){return e[1]}));i.push([e.id,"@media (min-width:1200px){.title[data-v-4b96f72c]{font-size:1.5rem}}@media (max-width:1200px){.title[data-v-4b96f72c]{font-size:150%}}",""]);const a=i},1519:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=e(t);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(e,s,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var o=0;o<e.length;o++){var d=[].concat(e[o]);n&&i[d[0]]||(s&&(d[2]?d[2]="".concat(s," and ").concat(d[2]):d[2]=s),t.push(d))}},t}},3379:(e,t,s)=>{var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}e[t]=s}return e[t]}}(),r=[];function o(e){for(var t=-1,s=0;s<r.length;s++)if(r[s].identifier===e){t=s;break}return t}function d(e,t){for(var s={},n=[],i=0;i<e.length;i++){var a=e[i],d=t.base?a[0]+t.base:a[0],l=s[d]||0,c="".concat(d," ").concat(l);s[d]=l+1;var u=o(c),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(f)):r.push({identifier:c,updater:v(f,t),references:1}),n.push(c)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=s.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,s,n){var i=s?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function h(e,t,s){var n=s.css,i=s.media,a=s.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function v(e,t){var s,n,i;if(t.singleton){var a=m++;s=p||(p=l(t)),n=f.bind(null,s,a,!1),i=f.bind(null,s,a,!0)}else s=l(t),n=h.bind(null,s,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(s)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var s=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<s.length;n++){var i=o(s[n]);r[i].references--}for(var a=d(e,t),l=0;l<s.length;l++){var c=o(s[l]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}s=a}}}},3764:(e,t,s)=>{s.d(t,{Z:()=>i});const n={props:{added_classes:{type:Object}},mounted(){this.addClassesToItemsByQueries(this.added_classes)},updated(){this.$nextTick((()=>{this.addClassesToItemsByQueries(this.added_classes)}))},methods:{addClass(e,t){this.addClassesToItemsByQuery(e,t),Array.isArray(t)||(t=[t]),this.added_classes||(this.added_classes={}),this.added_classes[e]?(Array.isArray(this.added_classes[e])||(this.added_classes[e]=[this.added_classes[e]]),this.added_classes[e]=this.added_classes[e].concat(t)):this.added_classes[e]=t},removeClass(e,t){this.removeClassFromItemsByQuery(e,t),this.added_classes&&this.added_classes[e]&&(Array.isArray(this.added_classes[e])?this.added_classes[e]=this.added_classes[e].filter((function(e){return e!=t})):this.added_classes[e]==t&&this.added_classes.filter((function(e){return e!=t})))},removeClassFromItemsByQuery(e,t){if(this.$el){let s;s="root"==e?this.$el:this.$el.querySelectorAll(e),s.classList.remove(t)}},addClassesToItemsByQueries(e){if(this.$el&&e)for(const[t,s]of Object.entries(e))this.addClassesToItemsByQuery(t,s)},addClassesToItemsByQuery(e,t){if("root"==e)this.$el&&this.addClassesToItems(this.$el,t);else if("#comment"==this.$el.nodeName)console.log("Added classes query returned comment node. Skipped query: "+e);else{let s=this.$el.querySelectorAll(e);this.addClassesToItems(s,t)}},addClassesToItems(e,t){if(Array.isArray(t)){let s=this;t.forEach((t=>{s.addClassesToItems(e,t)}))}else NodeList.prototype.isPrototypeOf(e)?e.forEach((e=>{e.classList.contains(t)||e.classList.add(t)})):e.classList&&!e.classList.contains(t)&&e.classList.add(t)}}};const i=(0,s(1900).Z)(n,undefined,undefined,!1,null,null,null).exports},7569:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});const n={mixins:[s(4805).default]};var i=s(3379),a=s.n(i),r=s(4060),o={insert:"head",singleton:!1};a()(r.Z,o);r.Z.locals;const d=(0,s(1900).Z)(n,undefined,undefined,!1,null,"4b96f72c",null).exports},4805:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});const n={mixins:[s(3764).Z],props:{title:{type:String},content:{type:String}}};const i=(0,s(1900).Z)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-content text-center"},[e.title?t("div",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e.content?t("div",{staticClass:"content"},[e._v(e._s(e.content))]):e._e()])}),[],!1,null,null,null).exports},1900:(e,t,s)=>{function n(e,t,s,n,i,a,r,o){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=d):i&&(d=o?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:l}}s.d(t,{Z:()=>n})}}]);