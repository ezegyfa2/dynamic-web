"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1770,4805,2379],{9039:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(1519),a=s.n(n)()((function(e){return e[1]}));a.push([e.id,".primary-text[data-v-3e9b7ee9]{font-family:Open Sans,sans-serif;font-weight:700}.content[data-v-3e9b7ee9],.secondary-text[data-v-3e9b7ee9]{font-family:Roboto,sans-serif;font-weight:400}.button[data-v-3e9b7ee9]{stroke:none;align-self:flex-start;background-color:#007ea7!important;border-radius:0;color:#fff!important;cursor:pointer;font-size:.875rem;font-weight:500;letter-spacing:1px;line-height:1.4;outline-width:0;padding:10px 30px;text-align:center;text-decoration:none;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.title[data-v-3e9b7ee9]{color:#fff;font-family:Open Sans,sans-serif;font-size:2.5rem;font-weight:700;line-height:1.2;margin-bottom:1rem;margin-top:0}.content[data-v-3e9b7ee9]{color:#fff!important;font-size:1rem;font-style:italic;margin-bottom:4rem}",""]);const r=a},1519:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=e(t);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(e,s,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var o=0;o<e.length;o++){var d=[].concat(e[o]);n&&a[d[0]]||(s&&(d[2]?d[2]="".concat(s," and ").concat(d[2]):d[2]=s),t.push(d))}},t}},3379:(e,t,s)=>{var n,a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}e[t]=s}return e[t]}}(),i=[];function o(e){for(var t=-1,s=0;s<i.length;s++)if(i[s].identifier===e){t=s;break}return t}function d(e,t){for(var s={},n=[],a=0;a<e.length;a++){var r=e[a],d=t.base?r[0]+t.base:r[0],l=s[d]||0,c="".concat(d," ").concat(l);s[d]=l+1;var u=o(c),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:c,updater:v(f,t),references:1}),n.push(c)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=s.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,s,n){var a=s?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function h(e,t,s){var n=s.css,a=s.media,r=s.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function v(e,t){var s,n,a;if(t.singleton){var r=m++;s=p||(p=l(t)),n=f.bind(null,s,r,!1),a=f.bind(null,s,r,!0)}else s=l(t),n=h.bind(null,s,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(s)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var s=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<s.length;n++){var a=o(s[n]);i[a].references--}for(var r=d(e,t),l=0;l<s.length;l++){var c=o(s[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}s=r}}}},1770:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});const n={mixins:[s(2379).default],props:{added_classes:{type:Object,default:()=>({".title":"text-uppercase",".content":"text-muted"})}}};var a=s(3379),r=s.n(a),i=s(9039),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const d=(0,s(1900).Z)(n,undefined,undefined,!1,null,"3e9b7ee9",null).exports},3764:(e,t,s)=>{s.d(t,{Z:()=>a});const n={props:{added_classes:{type:Object}},mounted(){this.addClassesToItemsByQueries(this.added_classes)},updated(){this.$nextTick((()=>{this.addClassesToItemsByQueries(this.added_classes)}))},methods:{addClass(e,t){this.addClassesToItemsByQuery(e,t),Array.isArray(t)||(t=[t]),this.added_classes||(this.added_classes={}),this.added_classes[e]?(Array.isArray(this.added_classes[e])||(this.added_classes[e]=[this.added_classes[e]]),this.added_classes[e]=this.added_classes[e].concat(t)):this.added_classes[e]=t},removeClass(e,t){this.removeClassFromItemsByQuery(e,t),this.added_classes&&this.added_classes[e]&&(Array.isArray(this.added_classes[e])?this.added_classes[e]=this.added_classes[e].filter((function(e){return e!=t})):this.added_classes[e]==t&&this.added_classes.filter((function(e){return e!=t})))},removeClassFromItemsByQuery(e,t){if(this.$el){let s;s="root"==e?this.$el:this.$el.querySelectorAll(e),s.classList.remove(t)}},addClassesToItemsByQueries(e){if(this.$el&&e)for(const[t,s]of Object.entries(e))this.addClassesToItemsByQuery(t,s)},addClassesToItemsByQuery(e,t){if("root"==e)this.$el&&this.addClassesToItems(this.$el,t);else if("#comment"==this.$el.nodeName)console.log("Added classes query returned comment node. Skipped query: "+e);else{let s=this.$el.querySelectorAll(e);this.addClassesToItems(s,t)}},addClassesToItems(e,t){if(Array.isArray(t)){let s=this;t.forEach((t=>{s.addClassesToItems(e,t)}))}else NodeList.prototype.isPrototypeOf(e)?e.forEach((e=>{e.classList.contains(t)||e.classList.add(t)})):e.classList&&!e.classList.contains(t)&&e.classList.add(t)}}};const a=(0,s(1900).Z)(n,undefined,undefined,!1,null,null,null).exports},2379:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const n={mixins:[s(4805).default],props:{added_classes:{type:Object,default:()=>({".title":"h2"})}}};const a=(0,s(1900).Z)(n,undefined,undefined,!1,null,null,null).exports},4805:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const n={mixins:[s(3764).Z],props:{title:{type:String},content:{type:String}}};const a=(0,s(1900).Z)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-content text-center"},[e.title?t("div",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e.content?t("div",{staticClass:"content"},[e._v(e._s(e.content))]):e._e()])}),[],!1,null,null,null).exports},1900:(e,t,s)=>{function n(e,t,s,n,a,r,i,o){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=d):a&&(d=o?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:l}}s.d(t,{Z:()=>n})}}]);