(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{468:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("077501e4",content,!0,{sourceMap:!1})},469:function(t,e,n){"use strict";n(468)},470:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=r},471:function(t,e,n){"use strict";n.r(e);n(32),n(213);var r={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{expand:!1,searchString:""}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{showInput:function(){var t=this;this.expand=!0,this.$nextTick((function(){t.focusInput()}))},focusInput:function(){this.$refs.search.focus()},onClickOutside:function(){this.expand=!1}}},o=(n(469),n(47)),l=n(68),c=n.n(l),v=n(128),m=n(89),d=n(199),f=n(519),_=n(467),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color: "+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color: "+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content text-h4 pa-3 mr-2",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"text-h4 py-8 my-0",attrs:{text:"","x-large":"",to:t.next,color:t.$vuetify.theme.themes.light.primary,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e(),t._v(" "),["program","fellows","mentors"].includes(t.$route.name)?n("div",{staticClass:"d-flex"},[n("v-expand-x-transition",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:!t.expand,expression:"!expand"}],staticClass:"text-h4 py-8 my-0",attrs:{text:"",nuxt:""},on:{click:function(e){return t.showInput()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{large:"",color:t.$vuetify.theme.themes.light.primary}},[t._v("mdi-magnify")])],1)]}}],null,!1,3087914956)},[t._v(" "),n("span",[t._v("Search in the program")])])],1),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"search",style:"max-width:"+(t.expand?"300px":"0px")+";",attrs:{height:"64",large:"",placeholder:"Search",outlined:"","prepend-inner-icon":"mdi-magnify",color:t.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keyup:function(e){return t.$emit("search",t.searchString)},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.expand=!1,t.$emit("esc")},"click:clear":function(e){t.expand=!1,t.$emit("esc")}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VExpandXTransition:m.b,VIcon:d.a,VTextField:f.a,VTooltip:_.a})},486:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("47d17a7e",content,!0,{sourceMap:!1})},491:function(t,e,n){"use strict";n(486)},492:function(t,e,n){var r=n(13)(!1);r.push([t.i,"#conceptText{-moz-columns:500px 2;columns:500px 2}",""]),t.exports=r},521:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(61),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,v,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,e.next=3,n("Pages_content/about/concept").fetch();case 3:return r=e.sent,e.next=6,n("Programs").sortBy("_","asc").fetch();case 6:return o=e.sent,e.next=9,n("Chairs").sortBy("slug","asc").fetch();case 9:return l=e.sent,e.next=12,n("Partners_and_Sponsors").sortBy("slug","asc").fetch();case 12:return c=e.sent,e.next=15,n("Institutions").sortBy("slug","asc").fetch();case 15:return v=e.sent,e.next=18,n("Steering_Committee").sortBy("slug","asc").fetch();case 18:return m=e.sent,d=o[o.length-1],console.log("editions: ",o),e.abrupt("return",{concept:r,editions:o,current:d,chairs:l,steering:m,institutions:v,partners:c});case 22:case"end":return e.stop()}}),e)})))()},mounted:function(){}}),l=(n(491),n(47)),c=n(68),v=n.n(c),m=n(207),d=n(128),f=n(457),_=n(199),h=n(166),x=n(461),y=n(467),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-9"},[n("TitleBlock",{staticClass:"mt-9",attrs:{title:"THE "+t.editions.length+"TH EDITION"}}),t._v(" "),n("v-row",{staticClass:"mr-3",attrs:{justify:"center"}},[n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        "+t._s(t.current.title)+"\n      ")]),t._v(" "),n("nuxt-content",{attrs:{document:t.current}})],1),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("CHAIRS")]),t._v(" "),n("v-row",t._l(t.chairs,(function(e){return n("v-col",{key:e.slug,staticClass:"d-flex",attrs:{cols:"12",xl:"6"}},[t.$vuetify.breakpoint.smAndUp?n("v-avatar",{staticClass:"my-3 mr-6",attrs:{size:"125",tile:"",rounded:"",color:e.image.length?"transparent":t.$vuetify.theme.themes.light.primary}},[e.image?n("v-img",{attrs:{src:e.image,alt:e.firstname+" "+e.lastname}}):n("span",{staticClass:"white--text headline"},[t._v(t._s(e.firstname[0])+" "+t._s(e.lastname[0]))])],1):t._e(),t._v(" "),n("div",{staticClass:"mt-3"},[n("div",{staticClass:"text-h5 font-weight-black"},[t._v("\n              "+t._s(e.firstname)+" "+t._s(e.lastname)+"\n            ")]),t._v(" "),n("div",{staticClass:"text-h6 mb-3"},[t._v("\n              "+t._s(e.title_and_institution)+"\n            ")]),t._v(" "),n("p",[t._v(t._s(e.presentation))])])],1)})),1)],1),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        Steering committee\n      ")]),t._v(" "),n("ul",t._l(t.steering,(function(e){return n("li",{key:e.slug},[n("b",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),t._v("\n          - "+t._s(e.presentation)+"\n        ")])})),0)]),t._v(" "),n("v-col",{staticClass:"px-12",attrs:{cols:"12"}},[n("div",{staticClass:"text-h4 font-weight-black text-uppercase my-6"},[t._v("\n        Institutions\n      ")]),t._v(" "),n("v-row",t._l(t.institutions,(function(e){return n("v-col",{key:e.slug,staticClass:"d-flex",attrs:{cols:"12",justify:"center"}},[t.$vuetify.breakpoint.smAndUp?n("v-avatar",{staticClass:"my-3 mr-6",attrs:{size:"125",tile:"",rounded:"",color:e.logo.length?"transparent":t.$vuetify.theme.themes.light.primary}},[e.logo?n("v-img",{attrs:{src:e.logo,alt:e.name,contain:""}}):n("span",{staticClass:"white--text headline"},[t._v(t._s(e.name))])],1):t._e(),t._v(" "),n("div",{staticClass:"flex-column align-content-start"},[n("div",{staticClass:"d-flex flex-row text-h5 font-weight-black align-center"},[t._v("\n              \n              "+t._s(e.name)+"\n              "),e.url?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"",href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.name,small:""}},"v-btn",l,!1),o),[n("v-icon",{attrs:{small:""}},[t._v("mdi-open-in-new")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Visit the website of "+t._s(e.name))])]):t._e()],1),t._v(" "),n("nuxt-content",{attrs:{document:e}}),t._v(" "),e.copyright?n("small",{staticClass:"muted caption"},[t._v("Image of © "+t._s(e.copyright))]):t._e()],1)],1)})),1)],1)],1),t._v(" "),n("TitleBlock",{staticClass:"mt-9",attrs:{title:"PARTNERS"}}),t._v(" "),n("div",{staticClass:"mb-12"},t._l(t.partners,(function(e){return n("v-tooltip",{key:e,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[n("v-avatar",t._g(t._b({staticClass:"mx-6",attrs:{color:"indigo",size:"100"}},"v-avatar",l,!1),o),[e.logo?n("v-img",{attrs:{src:e.logo,alt:e.name,contain:""}}):t._e()],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.name))])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{TitleBlock:n(471).default}),v()(component,{VAvatar:m.a,VBtn:d.a,VCol:f.a,VIcon:_.a,VImg:h.a,VRow:x.a,VTooltip:y.a})}}]);