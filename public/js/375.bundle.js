"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[375],{375:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});const i={props:{image_url:{type:String},image_alt:{type:String,default:()=>""},content_sections:{type:Array},date_interval:{type:String},is_inverted:{type:Boolean,default:()=>!1},with_line:{type:Boolean,default:()=>!0}},data:()=>({imageWidths:[30,39,47,102,127,187,352]}),computed:{leftContentClass(){return this.is_inverted?"empty-space":""},rightContentClass(){return this.is_inverted?"":"empty-space"}}};const s=(0,n(1900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"timeline-container"},[t.with_line?e("div",{staticClass:"line"}):t._e(),e("div",{staticClass:"timeline-panel left-content",class:t.leftContentClass},t._l(t.content_sections,(function(t){return e("dynamic-component",{attrs:{component_infos:t}})})),1),e("div",{staticClass:"timeline-image"},[e("vue-image",{staticClass:"rounded-circle img-fluid",attrs:{widths:t.imageWidths,src:t.image_url,alt:t.image_alt}})],1),e("div",{staticClass:"timeline-panel right-content",class:t.rightContentClass},t._l(t.content_sections,(function(t){return e("dynamic-component",{attrs:{component_infos:t}})})),1)])}),[],!1,null,null,null).exports},1900:(t,e,n)=>{function i(t,e,n,i,s,a,o,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:c}}n.d(e,{Z:()=>i})}}]);