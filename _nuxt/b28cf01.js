(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11],{518:function(e,n,t){var content=t(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(14).default)("19ae6984",content,!0,{sourceMap:!1})},521:function(e,n,t){"use strict";t(518)},522:function(e,n,t){var o=t(13)(!1);o.push([e.i,".frame[data-v-0745fc3a]{display:flex;position:relative;overflow:hidden;width:100%;height:100%}.overlay[data-v-0745fc3a]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:2;justify-content:space-between}.v-image[data-v-0745fc3a]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-0745fc3a]{transform:scale(1.1);opacity:.8}",""]),e.exports=o},525:function(e,n,t){"use strict";t.r(n);t(20);var o={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:""}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:this.height,width:this.height*this.ratio}})}},mounted:function(){}},r=(t(521),t(44)),l=t(88),c=t.n(l),v=t(182),d=t(223),h=t(504),x=t(70),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"frame"},[t("div",{staticClass:"overlay"},[e._t("default")],2),e._v(" "),e.src?t("v-img",e._b({attrs:{"aspect-ratio":e.ratio,"lazy-src":e.$img(e.src,{width:10,quality:70}),src:e.$img(e.src,{height:e.height,quality:70}),srcset:e._srcset.srcset,sizes:e._srcset.size,height:e.height},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,4034393411)},"v-img",e.$attrs,!1)):t("v-sheet")],1)}),[],!1,null,"0745fc3a",null);n.default=component.exports;c()(component,{VImg:v.a,VProgressCircular:d.a,VRow:h.a,VSheet:x.a})},529:function(e,n,t){"use strict";t.d(n,"b",(function(){return v})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return h}));t(6),t(5),t(10),t(4),t(11);var o=t(1),r=t(18);t(64),t(30),t(50),t(59),t(16),t(83),t(37),t(185),t(8);function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var v=function(e){return e.toString().trim().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},d=function(e,n){return e.length<=n?e:e.slice(0,n)+"..."},h=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,t,o,r,l){var v,d,h,x,f,m,y,w,_,O,k,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v=parseInt(o.page)||1,d=5,h=o.tags?JSON.parse(o.tags):[],x={published:!0},h.length&&(x.tags={$containsAny:h}),e.next=7,t(n).where(x).search(r).only([]).fetch();case 7:if(f=e.sent,m=f.length,y=Math.ceil(m/d),w=m%d,_=function(){return 1==+v?0:+v===y?0===w?m-d:m-w:(v-1)*d},1!==v){e.next=22;break}return e.next=15,t(n).where(x).search(r).sortBy("date","desc").limit(d).skip(_()).fetch();case 15:return j=e.sent,e.next=18,t(n).where(c(c({},x),{},{pinned:!0})).search(r).sortBy("date","desc").limit(1).fetch();case 18:k=e.sent,O=k?j.filter((function(e){var n;return e.slug!==(null===(n=k[0])||void 0===n?void 0:n.slug)})):j,e.next=26;break;case 22:return e.next=24,t(n).where(x).search(r).sortBy("date","desc").limit(d).skip(_()).fetch();case 24:O=e.sent,k=!1;case 26:if(0!==v&&O.length){e.next=28;break}return e.abrupt("return");case 28:return e.abrupt("return",{count:m,pages:y,pinnedPost:!!k.length&&k[0],posts:O});case 29:case"end":return e.stop()}}),e)})));return function(n,t,o,r,l){return e.apply(this,arguments)}}()},539:function(e,n,t){"use strict";t.r(n);var o=t(18),r=(t(327),t(30),t(83),t(50),t(64),t(529)),l={props:{mentor:{type:Boolean,default:!1},item:{type:Object,default:function(){}},search:{type:String,default:""}},data:function(){return{podcast:!1}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.item.podcast){n.next=5;break}return n.next=3,e.$content("Blog").where({path:e.item.podcast.substring(0,e.item.podcast.length-3).substring(7)}).only("slug").fetch();case 3:t=n.sent,e.podcast=!(!t||!t.length)&&t[0].slug;case 5:case"end":return n.stop()}}),n)})))()},computed:{},mounted:function(){},methods:{slugifyItem:function(e){return Object(r.b)(e)},highlight:function(e,n){var t=new RegExp(n,"ig");return e.replace(t,(function(e,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+e+"</strong>"}))},getSocials:function(e){var n=[];return e.website&&n.push({link:e.website,icon:"mdi-link-variant",tooltip:"Visit this "+(this.mentor?"mentor":"fellow")+" website"}),e.wikipedia&&n.push({link:e.wikipedia,icon:"mdi-wikipedia",tooltip:"Check the Wikipedia page of the "+(this.mentor?"mentor":"fellow")}),e.linkedin&&n.push({link:e.linkedin,icon:"mdi-linkedin",tooltip:"Get in touch on Linkedin"}),e.twitter&&n.push({link:e.twitter,icon:"mdi-twitter",tooltip:"Follow this "+(this.mentor?"mentor":"fellow")+" on Twitter"}),n}}},c=(t(571),t(44)),v=t(88),d=t.n(v),h=t(230),x=t(142),f=t(499),m=(t(6),t(5),t(8),t(10),t(4),t(11),t(1)),y=t(107),w=t(159),_=t(0),O=t(7);function k(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var j=Object(O.a)(Object(y.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(w.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(n){Object(m.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(_.l)(this))}}),P=t(101),C=t(157),D=t(26),$=Object(O.a)(C.a,D.a,Object(w.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(P.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(_.l)(n))])]})))}}),A=t(82),S=t(115);function B(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function z(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(n){Object(m.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var E=Object(O.a)(D.a,Object(w.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel")).extend().extend({name:"v-expansion-panel-header",directives:{ripple:S.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(_.l)(this,"actions")||[this.$createElement(A.a,this.expandIcon)];return this.$createElement(P.c,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:z(z({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(_.l)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),I=(t(186),t(573),t(76)),V=t(12);function M(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function R(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(n){Object(m.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var H=I.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return R(R({},I.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(V.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(V.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}}),L=t(220),T=t(504),J=t(506),component=Object(c.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-row",{staticClass:"mt-12",class:{"mx:6":e.$vuetify.breakpoint.mdAndUp}},[e.$vuetify.breakpoint.mdAndUp?t("v-col",{staticClass:"d-flex flex-column align-center",attrs:{cols:"3","col-md-offset":"1",justify:"center",align:"center"}},[t("v-avatar",{staticClass:"mb-3",attrs:{size:"160"}},[e.item.image?t("OptimizedImage",{attrs:{alt:"Avatar",src:e.item.image,height:"160",ratio:1}}):t("v-icon",{staticClass:"white--text headline",style:"background-color:"+e.$vuetify.theme.themes.light.primary+"; font-style: normal;"},[e._v(e._s(e.item.firstname[0]+e.item.lastname[0]))])],1),e._v(" "),t("div",{staticClass:"flex-row justify-center"},[e.item.wikipedia?t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({attrs:{icon:"",text:"",href:e.item.wikipedia,target:"_blank"}},"v-btn",r,!1),o),[t("v-icon",[e._v("mdi-wikipedia")])],1)]}}],null,!1,1139077672)},[e._v(" "),t("span",[e._v("Check the Wikipedia page of the "+e._s(e.mentor?"mentor":"fellow")+"\n        ")])]):e._e(),e._v(" "),e.item.linkedin?t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({attrs:{icon:"",text:"",href:e.item.linkedin,target:"_blank"}},"v-btn",r,!1),o),[t("v-icon",[e._v("mdi-linkedin")])],1)]}}],null,!1,915892520)},[e._v(" "),t("span",[e._v("Get in touch on Linkedin")])]):e._e(),e._v(" "),e.item.twitter?t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({attrs:{icon:"",text:"",href:e.item.twitter,target:"_blank"}},"v-btn",r,!1),o),[t("v-icon",[e._v("mdi-twitter")])],1)]}}],null,!1,988693416)},[e._v(" "),t("span",[e._v("Follow this "+e._s(e.mentor?"mentor":"fellow")+" on Twitter")])]):e._e(),e._v(" "),e.item.website?t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-btn",e._g(e._b({attrs:{icon:"",text:"",href:e.item.website,target:"_blank"}},"v-btn",r,!1),o),[t("v-icon",[e._v("mdi-link-variant")])],1)]}}],null,!1,992302441)},[e._v(" "),t("span",[e._v("Check this "+e._s(e.mentor?"mentor":"fellow")+" personal\n          website")])]):e._e()],1)],1):e._e(),e._v(" "),t("v-col",{staticClass:"mx-3",attrs:{cols:"12",md:"8"}},[t("div",{staticClass:"anchor",attrs:{id:e.slugifyItem(e.item.lastname)}}),e._v(" "),t("div",{staticClass:"text-h5 font-weight-black",domProps:{innerHTML:e._s(e.highlight(e.item.firstname+" "+e.item.lastname,e.search))}}),e._v(" "),t("div",{staticClass:"text-h6 mb-3",domProps:{innerHTML:e._s(e.highlight(e.item.title_and_institution,e.search))}}),e._v(" "),e.$vuetify.breakpoint.smAndDown?t("div",{staticClass:"flex-row justify-center mb-6"},[e._l(e.getSocials(e.item),(function(n){return t("v-tooltip",{key:n.link,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[t("v-btn",e._g(e._b({attrs:{text:"",icon:"",color:"primary",href:n.link,target:"_blank"}},"v-btn",l,!1),r),[t("v-icon",[e._v(e._s(n.icon))])],1)]}}],null,!0)},[e._v(" "),t("span",[e._v(e._s(n.tooltip)+" ")])])})),e._v(" "),e.podcast?[t("v-btn",{attrs:{outlined:"",nuxt:"",href:"https://www.intercontinental-academia.org/blog/"+e.podcast}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-play-circle")]),e._v(" Podcast\n        ")],1)]:e._e()],2):e._e(),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.highlight(e.item.presentation,e.search))}}),e._v(" "),e.podcast&&e.$vuetify.breakpoint.mdAndUp?[t("v-btn",{staticClass:"mb-3",attrs:{outlined:"",nuxt:"",href:"https://www.intercontinental-academia.org/blog/"+e.podcast}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-play-circle")]),e._v(" Podcast\n      ")],1)]:e._e(),e._v(" "),t("div",[e.item.copyright?t("small",{staticClass:"muted caption"},[e._v("Image of © "+e._s(e.item.copyright))]):e._e()]),e._v(" "),e.mentor?t("v-expansion-panels",{staticClass:"mt-6"},[t("v-expansion-panel",[t("v-expansion-panel-header",[e._v(" References ")]),e._v(" "),t("v-expansion-panel-content",[t("nuxt-content",{attrs:{document:e.item}})],1)],1)],1):e._e()],2)],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{OptimizedImage:t(525).default}),d()(component,{VAvatar:h.a,VBtn:x.a,VCol:f.a,VExpansionPanel:j,VExpansionPanelContent:$,VExpansionPanelHeader:E,VExpansionPanels:H,VIcon:L.a,VRow:T.a,VTooltip:J.a})},545:function(e,n,t){var content=t(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(14).default)("921ced78",content,!0,{sourceMap:!1})},571:function(e,n,t){"use strict";t(545)},572:function(e,n,t){var o=t(13)(!1);o.push([e.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.nuxt-content ul{padding-bottom:1rem}.nuxt-content h1{padding-top:1rem;padding-bottom:1.3rem}div.anchor{display:block;position:relative;top:-100px;visibility:hidden}",""]),e.exports=o},573:function(e,n,t){var content=t(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(14).default)("48751daa",content,!0,{sourceMap:!1})},574:function(e,n,t){var o=t(13)(!1);o.push([e.i,'.v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.nuxt-content ul{padding-bottom:1rem}.nuxt-content h1{padding-top:1rem;padding-bottom:1.3rem}.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.16}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.32}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),e.exports=o}}]);