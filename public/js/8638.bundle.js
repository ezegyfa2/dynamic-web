"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8638],{3764:(s,e,t)=>{t.d(e,{Z:()=>d});const a={props:{added_classes:{type:Object}},mounted(){this.addClassesToItemsByQueries(this.added_classes)},updated(){this.$nextTick((()=>{this.addClassesToItemsByQueries(this.added_classes)}))},methods:{addClass(s,e){this.addClassesToItemsByQuery(s,e),Array.isArray(e)||(e=[e]),this.added_classes||(this.added_classes={}),this.added_classes[s]?(Array.isArray(this.added_classes[s])||(this.added_classes[s]=[this.added_classes[s]]),this.added_classes[s]=this.added_classes[s].concat(e)):this.added_classes[s]=e},removeClass(s,e){this.removeClassFromItemsByQuery(s,e),this.added_classes&&this.added_classes[s]&&(Array.isArray(this.added_classes[s])?this.added_classes[s]=this.added_classes[s].filter((function(s){return s!=e})):this.added_classes[s]==e&&this.added_classes.filter((function(s){return s!=e})))},removeClassFromItemsByQuery(s,e){if(this.$el){let t;t="root"==s?this.$el:this.$el.querySelectorAll(s),t.classList.remove(e)}},addClassesToItemsByQueries(s){if(this.$el&&s)for(const[e,t]of Object.entries(s))this.addClassesToItemsByQuery(e,t)},addClassesToItemsByQuery(s,e){if("root"==s)this.$el&&this.addClassesToItems(this.$el,e);else{let t=this.$el.querySelectorAll(s);this.addClassesToItems(t,e)}},addClassesToItems(s,e){if(Array.isArray(e)){let t=this;e.forEach((e=>{t.addClassesToItems(s,e)}))}else NodeList.prototype.isPrototypeOf(s)?s.forEach((s=>{s.classList.contains(e)||s.classList.add(e)})):s.classList.contains(e)||s.classList.add(e)}}};const d=(0,t(1900).Z)(a,undefined,undefined,!1,null,null,null).exports},8638:(s,e,t)=>{t.r(e),t.d(e,{default:()=>d});const a={mixins:[t(3764).Z],props:{content:{type:String},url:{type:String},tab_index:{type:Number},added_classes:{type:Object,default:()=>({li:"text-uppercase"})}}};const d=(0,t(1900).Z)(a,(function(){var s=this,e=s._self._c;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:s.url,tabindex:s.tab_index}},[s._v(s._s(s.content))])])}),[],!1,null,null,null).exports},1900:(s,e,t)=>{function a(s,e,t,a,d,i,r,l){var n,o="function"==typeof s?s.options:s;if(e&&(o.render=e,o.staticRenderFns=t,o._compiled=!0),a&&(o.functional=!0),i&&(o._scopeId="data-v-"+i),r?(n=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),d&&d.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(r)},o._ssrRegister=n):d&&(n=l?function(){d.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:d),n)if(o.functional){o._injectStyles=n;var c=o.render;o.render=function(s,e){return n.call(e),c(s,e)}}else{var h=o.beforeCreate;o.beforeCreate=h?[].concat(h,n):[n]}return{exports:s,options:o}}t.d(e,{Z:()=>a})}}]);
//# sourceMappingURL=8638.bundle.js.map