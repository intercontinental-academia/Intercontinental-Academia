(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{477:function(t,e,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("28f1127f",content,!0,{sourceMap:!1})},487:function(t,e,n){"use strict";n(477)},488:function(t,e,n){var o=n(13)(!1);o.push([t.i,".v-card__title{word-break:normal}.nuxt-content p{display:inline-block}.by,.count,.theme{display:inline;padding:.5rem;-webkit-box-decoration-break:clone;box-decoration-break:clone}.theme{padding:1.5rem 80px 1.5rem 2rem}.count,.theme{color:#fff!important}.count{padding:1rem;margin-bottom:-20px;z-index:2}",""]),t.exports=o},489:function(t,e,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2d62e390",content,!0,{sourceMap:!1})},490:function(t,e,n){var o=n(13)(!1);o.push([t.i,".v-card__title{word-break:normal}.v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=o},499:function(t,e,n){"use strict";n.r(e);var o=n(20),r=(n(60),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,n=t.$content,e.next=3,n("testimonials").fetch();case 3:return o=e.sent,console.log("testimonials: ",o),e.abrupt("return",{testimonials:o});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{model:0,colors:["primary","secondary","yellow darken-2","red","orange"]}}}),l=(n(487),n(37)),c=n(56),h=n.n(c),d=n(208),m=(n(8),n(6),n(9),n(10),n(7),n(11),n(1)),v=(n(18),n(46),n(489),n(209)),f=n(90),w=n(66),_=n(298),y=n(65),T=y.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return y.a.options.computed.classes.call(this)}},methods:{genData:y.a.options.methods.genData}}),O=n(0),C=n(12);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=v.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return j(j({},v.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(C.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:v.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var o=this.$createElement(f.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(w.a,{props:{size:18}},this.delimiterIcon)]);n.push(o)}return this.$createElement(T,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(_.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=v.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(O.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),D=n(157),$=n(103),E=n(105),I=n(3),S=Object(I.a)(D.a,Object($.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:E.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(O.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(O.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),A=n(167),P=n(58);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function G(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var V=Object(I.a)(S,P.a).extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(A.a,{staticClass:"v-carousel__item",props:G(G({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(O.k)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}}),L=n(461),N=n(202),H=n(465),z=n(57),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("logo",{staticStyle:{position:"absolute",top:"-80px","z-index":"5"},attrs:{size:240,colors:[t.$store.state.logo[0],t.$store.state.logo[1],t.$store.state.logo[2],t.$store.state.logo[3],t.$store.state.logo[4]]}}),t._v(" "),n("div",{staticClass:"text-h4 text-center text-uppercase mt-12",style:"color: "+t.$store.state.primary},[t._v("\n    INTERCONTINENTAL ACADEMIA\n  ")]),t._v(" "),n("div",{staticClass:"d-flex justify-end align-end flex-column"},[n("div",{staticClass:"count text-h4",staticStyle:{"'background-color":"#3a1d60'"}},[t._v("\n      4th\n    ")]),t._v(" "),n("div",{staticClass:"theme text-h4",style:"background-color:"+t.$store.state.primary},[t._v("\n      INTELLIGENCE AND ARTIFICIAL INTELLIGENCE\n    ")]),t._v(" "),n("div",{staticClass:"by text-h4"},[t._v("BY UBIAS")])]),t._v(" "),n("v-carousel",{attrs:{cycle:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.colors,(function(e,i){return n("v-carousel-item",{key:e},[n("v-sheet",{attrs:{color:e,height:"100%",tile:""}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-3"},[t._v("Slide "+t._s(i+1))])])],1)],1)})),1),t._v(" "),n("v-row",{staticClass:"my-9"},[n("v-col",{staticClass:"text-h4",attrs:{cols:"auto",offset:"2"}},[t._v("10 Mentors for 15 fellows")]),t._v(" "),n("v-col",{staticClass:"text-h4",attrs:{cols:"auto",offset:"4"}},[t._v("One group, two institutions")]),t._v(" "),n("v-col",{staticClass:"text-h4",attrs:{cols:"auto",offset:"6"}},[t._v("From Paris to Belo Horizonte")])],1),t._v(" "),n("v-carousel",{attrs:{cycle:"","hide-delimiter-background":"","hide-delimiters":""}},t._l(t.testimonials,(function(e){return n("v-carousel-item",{key:e.slug},[n("v-sheet",{staticClass:"px-16",attrs:{light:"",height:"100%",tile:""}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"4",align:"center",justify:"center"}},[n("v-avatar",{attrs:{size:"80%"}},[e.picture.length?n("img",{attrs:{src:e.picture,alt:e.first_name+" "+e.last_name}}):n("div",[t._v("\n                "+t._s(e.first_name[0]+" "+e.last_name[0])+"\n              ")])])],1),t._v(" "),n("v-col",{attrs:{cols:"8"}},[n("v-icon",{staticClass:"align-start"},[t._v("mdi-format-quote-open")]),t._v(" "),n("nuxt-content",{staticClass:"d-inline-block",attrs:{document:e}}),t._v(" "),n("v-icon",{staticClass:"align-end"},[t._v("mdi-format-quote-close")]),t._v(" "),n("b",[t._v(t._s(e.first_name+" "+e.last_name+" "+e.title+" - ICA"+e.millesime))])],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{Logo:n(171).default}),h()(component,{VAvatar:d.a,VCarousel:k,VCarouselItem:V,VCol:L.a,VIcon:N.a,VRow:H.a,VSheet:z.a})}}]);