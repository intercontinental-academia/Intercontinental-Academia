(window.webpackJsonp=window.webpackJsonp||[]).push([[19,12],{509:function(t,e,n){var content=n(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("077501e4",content,!0,{sourceMap:!1})},511:function(t,e,n){"use strict";n(509)},512:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}div.section-title{color:#fff;border-radius:0!important;align-items:center;width:50%;text-align:right}div.section-title,div.section-title content{text-transform:uppercase}",""]),t.exports=r},513:function(t,e,n){"use strict";n.r(e);n(30),n(185);var r={props:{title:{type:String,default:""},isSession:{type:Boolean,default:!1},isSatellite:{type:Boolean,default:!1},nextSatellite:{type:Boolean,default:!1},previous:{type:String,default:""},next:{type:String,default:""},nextName:{type:String,default:""},previousName:{type:String,default:""}},data:function(){return{expand:!1,searchString:""}},computed:{returnTooltip:function(){return this.previousName.length>0?"Back to "+this.previousName:"Back to the program"}},mounted:function(){},methods:{showInput:function(){var t=this;this.expand=!0,this.$nextTick((function(){t.focusInput()}))},focusInput:function(){this.$refs.search.focus()},onClickOutside:function(){this.expand=!1}}},o=(n(511),n(44)),l=n(88),c=n.n(l),d=n(143),h=n(100),m=n(220),v=n(594),f=n(504),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-12 mt-3"},[t.isSession?n("div",{staticClass:"d-flex section-title justify-space-between",style:"background-color:"+(t.isSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"auto;")},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",icon:"","x-large":"",to:t.previous,nuxt:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"white","x-large":""}},[t._v("mdi-chevron-left")])],1)]}}],null,!1,89319704)},[t._v(" "),n("span",[t._v(t._s(t.returnTooltip))])]),t._v(" "),n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})],1):n("div",{staticClass:"section-title",style:"background-color:"+t.$vuetify.theme.themes.light.primary+";width:"+(t.$vuetify.breakpoint.mdAndUp?"50%;":"100%;")},[n("div",{staticClass:"content pa-3 mr-2",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",domProps:{textContent:t._s(t.title)}})]),t._v(" "),t.isSession&&t.next.length?n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",style:"color:"+(t.nextSatellite?"#fba421":t.$vuetify.theme.themes.light.primary)+"!important",attrs:{text:"","x-large":"",to:t.next,nuxt:""}},[t._v(t._s(t.nextName)+" "),n("v-icon",{attrs:{right:"","x-large":""}},[t._v("mdi-chevron-right")])],1)],1):t._e(),t._v(" "),["program","fellows","mentors","blog","blog-page-page"].includes(t.$route.name)?n("div",{staticClass:"d-flex"},[n("v-expand-x-transition",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:!t.expand,expression:"!expand"}],staticClass:"py-8 my-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":"text-h6",attrs:{text:"",nuxt:""},on:{click:function(e){return t.showInput()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{large:"",color:t.$vuetify.theme.themes.light.primary}},[t._v("mdi-magnify")])],1)]}}],null,!1,2453248715)},[t._v(" "),n("span",[t._v("Search in the program")])])],1),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"search",style:"max-width:"+(t.expand?"300px":"0px")+";",attrs:{height:"64",large:"",placeholder:"Search",outlined:"","prepend-inner-icon":"mdi-magnify",color:t.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keyup:function(e){return t.$emit("search",t.searchString)},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.expand=!1,t.$emit("esc")},"click:clear":function(e){t.expand=!1,t.$emit("esc")}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VExpandXTransition:h.b,VIcon:m.a,VTextField:v.a,VTooltip:f.a})},526:function(t,e,n){var content=n(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2d62e390",content,!0,{sourceMap:!1})},527:function(t,e,n){var r=n(13)(!1);r.push([t.i,".v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=r},539:function(t,e,n){"use strict";n(6),n(5),n(8),n(10),n(4),n(11);var r=n(1),o=(n(20),n(45),n(526),n(188)),l=n(127),c=n(82),d=n(237),h=n(76),m=h.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return h.a.options.computed.classes.call(this)}},methods:{genData:h.a.options.methods.genData}}),v=n(0),f=n(12);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return _(_({},o.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(f.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(l.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(c.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(m,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(v.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},540:function(t,e,n){"use strict";n(6),n(5),n(8),n(10),n(4),n(11);var r=n(1),o=n(156),l=n(107),c=n(109),d=n(0),h=n(7),m=Object(h.a)(o.a,Object(l.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(d.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(d.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),v=n(182),f=n(65);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=Object(h.a)(m,f.a);e.a=x.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(v.a,{staticClass:"v-carousel__item",props:_(_({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.l)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},547:function(t,e,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2065e928",content,!0,{sourceMap:!1})},576:function(t,e,n){"use strict";n(547)},577:function(t,e,n){var r=n(13)(!1);r.push([t.i,'.v-card__title{word-break:normal}.nuxt-content p img{max-width:100%;padding:2rem 0}.testimonial.nuxt-content p:before{content:"󰝗"}.testimonial.nuxt-content p:after,.testimonial.nuxt-content p:before{font:normal normal normal 24px/1 "Material Design Icons";font-size:24px;color:grey}.testimonial.nuxt-content p:after{content:"󰉾"}.by,.count,.theme{display:inline;padding:.5rem;-webkit-box-decoration-break:clone;box-decoration-break:clone}.theme{padding:1.5rem 80px 1.5rem 2rem;text-align:right}.count,.theme{color:#fff!important}.count{padding:1rem;margin-bottom:-20px;z-index:2}',""]),t.exports=r},604:function(t,e,n){"use strict";n.r(e);var r=n(18),o=(n(64),n(4),n(37),n(16),n(83),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,d,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,e.next=3,n("Programs").sortBy("_","asc").fetch();case 3:return o=e.sent,l=o[o.length-1],e.next=7,n("testimonials").fetch();case 7:return c=e.sent,e.next=10,n("Carousel").fetch();case 10:return d=e.sent,e.next=13,n("Pages_content/index").fetch();case 13:return h=e.sent,m=[l.logo_colors["1_inner_circle_color"],l.logo_colors[2],l.logo_colors[3],l.logo_colors[4],l.logo_colors["5_outer_circle_color"]],o.forEach(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="content"+e.path+".md",t.next=3,n("Sessions").where({"related-program":r}).sortBy("start_date_and_time","asc").fetch();case 3:e.sessions=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.abrupt("return",{index:h,programs:o,current:l,testimonials:c,logo:m,carousel:d});case 17:case"end":return e.stop()}}),e)})))()},data:function(){return{model:0}},mounted:function(){},methods:{LightenDarkenColor:function(col,t){var e=!1;"#"===col[0]&&(col=col.slice(1),e=!0);var n=parseInt(col,16),r=(n>>16)+t;r>255?r=255:r<0&&(r=0);var b=(n>>8&255)+t;b>255?b=255:b<0&&(b=0);var g=(255&n)+t;return g>255?g=255:g<0&&(g=0),(e?"#":"")+String("000000"+(g|b<<8|r<<16).toString(16)).slice(-6)},_srcset:function(t){return this.$img.getSizes(t,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70}})}}}),l=(n(576),n(44)),c=n(88),d=n.n(c),h=n(229),m=n(539),v=n(540),f=n(497),y=n(502),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$vuetify.breakpoint.mdAndUp?n("logo",{staticStyle:{position:"absolute",top:"-80px","z-index":"5"},attrs:{size:240,colors:t.logo}}):t._e(),t._v(" "),n("div",{staticClass:"d-flex justify-end align-end flex-column",style:"margin-top:"+(t.$vuetify.breakpoint.mdAndUp?"8rem":"2rem")},[n("div",{staticClass:"d-flex flex-row text-uppercase justify-end align-end",class:t.$vuetify.breakpoint.smAndUp?"text-h4":"text-h5",style:"color: "+t.$vuetify.theme.themes.light.primary},[n("div",{staticClass:"pb-3 mx-4"},[t._v("\n        "+t._s(t.$vuetify.breakpoint.smAndUp?"INTERCONTINENTAL ACADEMIA":"ICA")+"\n      ")]),t._v(" "),n("div",{staticClass:"count pa-8",style:"background-color:"+t.LightenDarkenColor(t.$vuetify.theme.themes.light.primary,-30)},[t._v("\n        #"+t._s(t.current._)+"\n      ")])]),t._v(" "),n("div",{staticClass:"theme",class:t.$vuetify.breakpoint.smAndUp?"text-h4":"text-h5",style:"background-color:"+t.$vuetify.theme.themes.light.primary},[t._v("\n      INTELLIGENCE AND ARTIFICIAL INTELLIGENCE\n    ")]),t._v(" "),n("div",{staticClass:"by text-h4"},[t._v("BY UBIAS")])]),t._v(" "),n("v-carousel",{attrs:{cycle:"",height:"auto"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.carousel,(function(e){return n("v-carousel-item",{key:e.label,attrs:{"lazy-src":t.$img(e.image,{width:10,quality:70}),src:t.$img(e.image,{height:"auto",quality:70}),srcset:t._srcset(e.image).srcset,sizes:t._srcset(e.image).size,nuxt:!e.open_in_new_tab,blank:!e.open_in_new_tab,to:e.link}})})),1),t._v(" "),n("v-row",{staticClass:"ma-12",attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticClass:"text-h5 py-6 text-justify"},[n("nuxt-content",{attrs:{document:t.index}})],1)])],1),t._v(" "),n("TitleBlock",{staticClass:"mt-9 mb-3",attrs:{title:"Testimonials"}}),t._v(" "),n("v-row",{staticClass:"mb-12",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-carousel",{attrs:{cycle:"","hide-delimiters":"","show-arrows":t.testimonials.length>1,continuous:"",interval:"20000"}},t._l(t.testimonials,(function(e){return n("v-carousel-item",{key:e.slug,attrs:{eager:"",transition:"slide-y-transition"}},[n("div",{staticClass:"d-flex justify-center align-center mx-16 black--text mb-12"},[t.$vuetify.breakpoint.mdAndUp?n("v-avatar",{attrs:{size:"120px"}},[e.picture.length?n("img",{attrs:{src:e.picture,alt:e.first_name+" "+e.last_name}}):n("div",[t._v("\n                "+t._s(e.first_name[0]+" "+e.last_name[0])+"\n              ")])]):t._e(),t._v(" "),n("div",{class:{"ml-12":t.$vuetify.breakpoint.mdAndUp}},[n("nuxt-content",{staticClass:"d-inline-block testimonial",attrs:{document:e}}),t._v(" "),n("b",[t._v(t._s(e.first_name+" "+e.last_name+", "+e.title_and_institution+" - ICA"+e.millesime))])],1)],1)])})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Logo:n(326).default,TitleBlock:n(513).default}),d()(component,{VAvatar:h.a,VCarousel:m.a,VCarouselItem:v.a,VCol:f.a,VRow:y.a})}}]);