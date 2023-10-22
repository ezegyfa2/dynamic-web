"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[348],{348:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});const a={props:{params:{type:Array|Object},template_type_name:{type:String}},data:()=>({configChanged:!1,paramChanged:!1,compiledTemplate:{}}),mounted(){let e={template_type_name:this.template_type_name,params:this.params};this.compiledTemplate=this.replaceConfigTemplates(e),this.compiledTemplate=this.HTMLDecodeTemplate(this.compiledTemplate),console.log(this.compiledTemplate)},computed:{compiledTemplateText(){return JSON.stringify(this.compiledTemplate)}},methods:{replaceConfigTemplates(e){let t=e.params;do{this.configChanged=!1,e=this.replaceUpperConfigTemplates(e,t)}while(this.configChanged);return e},replaceUpperConfigTemplates(e,t){if(Array.isArray(e)){let r=this;return e.map((e=>r.replaceUpperConfigTemplates(e,t)))}return e&&"object"==typeof e?"template_type_name"in e?this.replaceTemplate(e,t):this.replaceObjectTemplateProperties(e,t):e},replaceObjectTemplateProperties(e,t){for(const[r,a]of Object.entries(e))if(null==a)e[r]=null;else if(Array.isArray(a)){let p=this;e[r]=a.map((e=>p.replaceUpperConfigTemplates(e,t)))}else"object"==typeof a&&(e[r]="template_type_name"in a?this.replaceTemplate(a,t):this.replaceUpperConfigTemplates(a,t));return e},replaceTemplate(e,t){let r=getObjectSubProperty(window.templates,e.template_type_name);return"params"in e&&(r=this.replaceTemplateParams(r,e.params,"++")),t&&(r=this.replaceTemplateParams(r,t,"-++"),r=this.replaceTemplateParams(r,t,"--")),this.configChanged=!0,r},replaceTemplateParams(e,t,r){do{this.paramChanged=!1,e=this.replaceUpperTemplateParams(e,t,r)}while(this.paramChanged);return e},replaceUpperTemplateParams(e,t,r){if(null==e)return null;if(Array.isArray(e)){let a=[],p=this;return e.forEach((e=>{let n=p.getReplacedTemplateValue(e,t,r);"object"==typeof e&&"array_data"in e&&e.merge_to_parent?a=a.concat(n):a.push(n)})),a}if("object"==typeof e){if("array_data"in e)return this.createArrayTemplate(e,t[e.array_data],e.array_data);{let a=structuredClone(e);for(const[e,p]of Object.entries(a))a[e]=this.replaceUpperTemplateParams(p,t,r);return a}}return this.getTemplateValue(e,t,r)},getReplacedTemplateValue(e,t,r){return"object"==typeof e&&"array_data"in e&&e.direct_paste?t[e.array_data]:this.replaceUpperTemplateParams(e,t,r)},createArrayTemplate(e,t,r){if(t&&Array.isArray(t)){let a=structuredClone(e);return delete a.array_data,delete a.merge_to_parent,t.map((e=>{let t={};return t[r]=e,this.replaceUpperTemplateParams(a,t,"++")}))}return[]},getTemplateValue(e,t,r){if("string"==typeof e){if(0==e.indexOf(r)){let a=e.substring(r.length),p=getObjectSubProperty(t,a,e);return p!=e&&(this.paramChanged=!0),p}return e}return e},HTMLDecodeTemplate(e){if(null==e)return null;if(Array.isArray(e)){let t=[];return e.forEach((e=>{t.push(this.HTMLDecodeTemplate(e))})),t}if("object"==typeof e){let t=structuredClone(e);for(const[e,r]of Object.entries(t))t[e]=this.HTMLDecodeTemplate(r);return t}return"string"==typeof e?he.decode(e):e}}};const p=(0,r(1900).Z)(a,(function(){return(0,this._self._c)("dynamic-component",{attrs:{component_infos:this.compiledTemplate}})}),[],!1,null,null,null).exports},1900:(e,t,r)=>{function a(e,t,r,a,p,n,l,s){var i,o="function"==typeof e?e.options:e;if(t&&(o.render=t,o.staticRenderFns=r,o._compiled=!0),a&&(o.functional=!0),n&&(o._scopeId="data-v-"+n),l?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),p&&p.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},o._ssrRegister=i):p&&(i=s?function(){p.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:p),i)if(o.functional){o._injectStyles=i;var c=o.render;o.render=function(e,t){return i.call(t),c(e,t)}}else{var m=o.beforeCreate;o.beforeCreate=m?[].concat(m,i):[i]}return{exports:e,options:o}}r.d(t,{Z:()=>a})}}]);
//# sourceMappingURL=348.bundle.js.map