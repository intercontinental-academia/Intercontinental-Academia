(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{467:function(t,e,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("077501e4",content,!0,{sourceMap:!1})},468:function(t,e,n){"use strict";n(467)},469:function(t,e,n){var o=n(13)(!1);o.push([t.i,".v-card__title{word-break:normal}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=o},470:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{}},r=(n(468),n(44)),l=n(66),c=n.n(l),d=n(127),v=n(198),f=n(466),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color: "+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color: "+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"text-h4 py-8 my-0",attrs:{text:"","x-large":"",to:t.next,color:t.$vuetify.theme.themes.light.primary,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:v.a,VTooltip:f.a})}}]);