"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[264],{264:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const a={methods:{changeDeepData(e,t,n){e&&e.data&&(e.data[t]=n)},initDeepWatcher(e,t){this.$watch(e,((e,n)=>{void 0!==e&&t(e,n)}),{immediate:!0,deep:!0,flush:"sync"})},refreshDataValue(e){this.changeDataValue(e,this[e])},changeDataValue(e,t){this.$options.propsData[e],this[e]=structuredClone(t)}}};var s=n(1900);const o=(0,s.Z)(a,undefined,undefined,!1,null,null,null).exports,r={mixins:[o],data:()=>({deepProperties:{}}),mounted(){let e=this;for(const[t,n]of Object.entries(this.deepProperties)){for(const[a,s]of Object.entries(e.getSubDataNamesObject(n,t)))e.initDeepWatcher(a,(n=>{if(Array.isArray(n)){let n=e[a],o=!1;n.forEach((n=>{n&&n.data&&n.data[s]!=e[t]&&(e.changeDeepData(n,s,e[t]),o=!0)})),o&&(e[a]=structuredClone(n))}else n&&n.data&&n.data[s]!=e[t]&&(e.changeDeepData(e[a],s,e[t]),e.refreshDataValue(a))}));e.initDeepWatcher(t,(a=>{for(const[s,o]of Object.entries(e.getSubDataNamesObject(n,t)))if(Array.isArray(e[s])){let n=e[s],r=!1;n.forEach((n=>{n&&n.data&&n.data[o]!=e[t]&&(e.changeDeepData(n,o,a),r=!0)})),r&&(e[s]=structuredClone(n)),e.refreshDataValue(s)}else e[s]&&e[s].data&&e[s].data[o]!=e[t]&&(e.changeDeepData(e[s],o,a),e.refreshDataValue(e[s]))}))}},methods:{getSubDataNamesObject(e,t){if(Array.isArray(e)){let n={};return e.forEach((e=>{n[e]=t})),n}return e}}};const i={mixins:[o],data:()=>({dataTransmits:{}}),mounted(){for(const[e,t]of Object.entries(this.dataTransmits))this.changeDataValue(e,this[t]),this.initDeepWatcher(t,((t,n)=>{self[e]!==t&&this.changeDataValue(e,t)}))}};const d={mixins:[(0,s.Z)(r,undefined,undefined,!1,null,null,null).exports,(0,s.Z)(i,undefined,undefined,!1,null,null,null).exports],props:{dropdown_section:{type:Object}},data:()=>({deepProperties:{dropdownLinkId:{dropdown_section:"dropdown_link_id"}}}),computed:{dropdownLinkId(){return"dropdown"+this._uid}}};const c={mixins:[(0,s.Z)(d,undefined,undefined,!1,null,null,null).exports],props:{icon_class:{type:String},badge_content:{type:String}}};const l=(0,s.Z)(c,(function(){var e=this,t=e._self._c;return t("li",{staticClass:"nav-item dropdown no-arrow"},[t("a",{staticClass:"nav-link navigation-link dropdown-toggle",attrs:{id:e.dropdownLinkId,href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e.icon_class?t("i",{class:e.icon_class}):e._e(),e._v(e._s(e.badge_content))]),t("dynamic-component",{attrs:{component_infos:e.dropdown_section}})],1)}),[],!1,null,null,null).exports},1900:(e,t,n)=>{function a(e,t,n,a,s,o,r,i){var d,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=d):s&&(d=i?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),d)if(c.functional){c._injectStyles=d;var l=c.render;c.render=function(e,t){return d.call(t),l(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:c}}n.d(t,{Z:()=>a})}}]);