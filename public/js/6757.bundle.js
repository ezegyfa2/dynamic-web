"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6757],{6757:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const o={props:{url:{type:String},method:{type:String,default:"post"},button_title:{type:String},form_item_sections:{type:Array}},data:()=>({formItemTypePrefix:null,formItemConvertTypes:{select:"vue-select"},submitted:!1}),computed:{convertedFormItemSections(){return this.form_item_sections.map((t=>({type:this.getConvertedType(t.type),data:t.data})))}},methods:{getConvertedType(t){return this.formItemTypePrefix?this.formItemTypePrefix+"-"+t:this.formItemConvertTypes[t]?this.formItemConvertTypes[t]:t},getRequestData(t){let e={};return t.forEach((t=>{e[t.data.name]=t.data.value})),e._token=document.querySelector('meta[name="csrf-token"]').content,e},submitForm(t){return this.submitted=!0,!0}}};const r=(0,n(1900).Z)(o,(function(){var t=this,e=t._self._c;return e("form",{attrs:{action:t.url,method:t.method},on:{submit:t.submitForm}},[e("csrf-input"),t._l(t.form_item_sections,(function(n){return e(t.getConvertedType(n.type),t._b({key:n.data.name,ref:n.data.name,refInFor:!0,tag:"component",attrs:{value:n.data.value},on:{"update:value":t=>{n.data.value=t}}},"component",n.data,!1))})),e("div",{staticClass:"form-item"},[e("button",{staticClass:"btn btn-form form-item-control text-align-center",attrs:{type:"submit"},on:{click:t.submitForm}},[t._v(t._s(t.button_title))])])],2)}),[],!1,null,null,null).exports},1900:(t,e,n)=>{function o(t,e,n,o,r,s,a,i){var m,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),a?(m=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=m):r&&(m=i?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),m)if(u.functional){u._injectStyles=m;var c=u.render;u.render=function(t,e){return m.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,m):[m]}return{exports:t,options:u}}n.d(e,{Z:()=>o})}}]);