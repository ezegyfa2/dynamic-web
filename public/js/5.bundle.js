"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5],{3005:(s,e,t)=>{t.r(e),t.d(e,{default:()=>l});const n={data:()=>({isVisible:!0}),computed:{hiddenClass(){return this.isVisible?"":"is-hidden"}}};var i=t(1900);const o={mixins:[(0,i.Z)(n,undefined,undefined,!1,null,null,null).exports],props:{content:{type:String}},data:()=>({iconClass:""}),mounted(){setTimeout((()=>{this.close()}),5e3)},methods:{close(){this.isVisible=!1}}};const a={mixins:[(0,i.Z)(o,undefined,undefined,!1,null,null,null).exports],data:()=>({iconClass:""})};const l=(0,i.Z)(a,(function(){var s=this,e=s._self._c;return e("div",{staticClass:"message",class:s.hiddenClass},[e("div",{staticClass:"message-icon"},[e("i",{class:s.iconClass})]),e("div",{staticClass:"message-body"},[e("p",[s._v(s._s(s.content))])]),e("button",{staticClass:"message-close",on:{click:function(e){return s.close()}}},[e("i",{staticClass:"fa fa-times"})])])}),[],!1,null,null,null).exports},1900:(s,e,t)=>{function n(s,e,t,n,i,o,a,l){var c,r="function"==typeof s?s.options:s;if(e&&(r.render=e,r.staticRenderFns=t,r._compiled=!0),n&&(r.functional=!0),o&&(r._scopeId="data-v-"+o),a?(c=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),i&&i.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(a)},r._ssrRegister=c):i&&(c=l?function(){i.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(r.functional){r._injectStyles=c;var d=r.render;r.render=function(s,e){return c.call(e),d(s,e)}}else{var u=r.beforeCreate;r.beforeCreate=u?[].concat(u,c):[c]}return{exports:s,options:r}}t.d(e,{Z:()=>n})}}]);
//# sourceMappingURL=5.bundle.js.map