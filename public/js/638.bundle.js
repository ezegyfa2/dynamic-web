"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[638],{3764:(s,e,t)=>{t.d(e,{Z:()=>a});const d={props:{added_classes:{type:Object}},mounted(){this.addClassesToItemsByQueries(this.added_classes)},updated(){this.$nextTick((()=>{this.addClassesToItemsByQueries(this.added_classes)}))},methods:{addClass(s,e){this.addClassesToItemsByQuery(s,e),Array.isArray(e)||(e=[e]),this.added_classes||(this.added_classes={}),this.added_classes[s]?(Array.isArray(this.added_classes[s])||(this.added_classes[s]=[this.added_classes[s]]),this.added_classes[s]=this.added_classes[s].concat(e)):this.added_classes[s]=e},removeClass(s,e){this.removeClassFromItemsByQuery(s,e),this.added_classes&&this.added_classes[s]&&(Array.isArray(this.added_classes[s])?this.added_classes[s]=this.added_classes[s].filter((function(s){return s!=e})):this.added_classes[s]==e&&this.added_classes.filter((function(s){return s!=e})))},removeClassFromItemsByQuery(s,e){if(this.$el){let t;t="root"==s?this.$el:this.$el.querySelectorAll(s),t.classList.remove(e)}},addClassesToItemsByQueries(s){if(this.$el&&s)for(const[e,t]of Object.entries(s))this.addClassesToItemsByQuery(e,t)},addClassesToItemsByQuery(s,e){if("root"==s)this.$el&&this.addClassesToItems(this.$el,e);else if("#comment"==this.$el.nodeName)console.log("Added classes query returned comment node. Skipped query: "+s);else{let t=this.$el.querySelectorAll(s);this.addClassesToItems(t,e)}},addClassesToItems(s,e){if(Array.isArray(e)){let t=this;e.forEach((e=>{t.addClassesToItems(s,e)}))}else NodeList.prototype.isPrototypeOf(s)?s.forEach((s=>{s.classList.contains(e)||s.classList.add(e)})):s.classList&&!s.classList.contains(e)&&s.classList.add(e)}}};const a=(0,t(1900).Z)(d,undefined,undefined,!1,null,null,null).exports},8638:(s,e,t)=>{t.r(e),t.d(e,{default:()=>a});const d={mixins:[t(3764).Z],props:{content:{type:String},url:{type:String},tab_index:{type:Number},added_classes:{type:Object,default:()=>({li:"text-uppercase"})}}};const a=(0,t(1900).Z)(d,(function(){var s=this,e=s._self._c;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:s.url,tabindex:s.tab_index}},[s._v(s._s(s.content))])])}),[],!1,null,null,null).exports},1900:(s,e,t)=>{function d(s,e,t,d,a,i,l,r){var n,o="function"==typeof s?s.options:s;if(e&&(o.render=e,o.staticRenderFns=t,o._compiled=!0),d&&(o.functional=!0),i&&(o._scopeId="data-v-"+i),l?(n=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),a&&a.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(l)},o._ssrRegister=n):a&&(n=r?function(){a.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:a),n)if(o.functional){o._injectStyles=n;var c=o.render;o.render=function(s,e){return n.call(e),c(s,e)}}else{var h=o.beforeCreate;o.beforeCreate=h?[].concat(h,n):[n]}return{exports:s,options:o}}t.d(e,{Z:()=>d})}}]);
//# sourceMappingURL=638.bundle.js.map