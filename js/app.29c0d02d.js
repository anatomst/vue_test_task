(function(){"use strict";var e={5714:function(e,i,t){var s=t(9242),o=t(3396);const r={key:1,class:"large"},n={class:"large__wrapper"};function a(e,i,t,s,a,l){const v=(0,o.up)("router-view"),c=(0,o.up)("home-view"),d=(0,o.up)("movie-view");return s.width<900?((0,o.wg)(),(0,o.j4)(v,{key:0})):((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",n,[(0,o.Wm)(c,{screenWidth:s.width,selectedMovie:s.selectedMovie,onChangeMovie:s.handleChangeMovie},null,8,["screenWidth","selectedMovie","onChangeMovie"]),(0,o.Wm)(d,{selectedMovie:s.selectedMovie,screenWidth:s.width},null,8,["selectedMovie","screenWidth"])])]))}var l=t(4870),v=t(2483);t(7658);function c(){const e=(0,v.tv)(),i=i=>{e.push({name:i})};return{redirectTo:i}}const d=()=>{const e=(0,l.iH)(window.innerWidth),{redirectTo:i}=c(),t=(0,v.yj)();(0,o.bv)((()=>window.addEventListener("resize",s))),(0,o.Ah)((()=>window.removeEventListener("resize",s)));const s=(s=null)=>{e.value=window.innerWidth,window.innerWidth>=900&&"movie"===t.name&&(s&&t.params.id&&(s.value=+t.params.id),i("home"))},r=(0,o.Fl)((()=>e.value));return{width:r,onWidthChange:s}},m=e=>((0,o.dD)("data-v-e69b7828"),e=e(),(0,o.Cn)(),e),u={class:"home"},_={class:"home__container"},p=m((()=>(0,o._)("h1",{class:"app__title"},[(0,o.Uk)("Popular "),(0,o._)("span",{class:"app__title--red"},"series")],-1)));function g(e,i,t,s,r,n){const a=(0,o.up)("movies-list"),l=(0,o.up)("movies-carousel");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",_,[p,(0,o.Wm)(a,{movies:s.movies,isNextPage:s.isNextPage,onMoreMovies:s.getMovies,screenWidth:t.screenWidth,onChangeMovie:i[0]||(i[0]=i=>e.$emit("change-movie",i))},null,8,["movies","isNextPage","onMoreMovies","screenWidth"])]),t.screenWidth>=1152?((0,o.wg)(),(0,o.j4)(l,{key:0,onChangeMovie:i[1]||(i[1]=i=>e.$emit("change-movie",i)),selectedMovie:t.selectedMovie,movies:s.movies,screenWidth:t.screenWidth,isNextPage:s.isNextPage,getMovies:s.getMovies},null,8,["selectedMovie","movies","screenWidth","isNextPage","getMovies"])):(0,o.kq)("",!0)])}var w=t(70);const h="https://live.mocat.amifactory.network",f=async(e=1)=>{try{const i=await w.ZP.get(`${h}/api/v1/movies/?page=${e-1}`);return i.data}catch(i){return{error:"Failed to load movies"}}},k=async(e=1)=>{try{const i=await w.ZP.get(`${h}/api/v1/movies/${e}`);return{movieData:i.data}}catch(i){return{error:"Failed to load movie"}}},y=e=>((0,o.dD)("data-v-0d80d0f8"),e=e(),(0,o.Cn)(),e),b={key:0,class:"movies"},M=["src"],W=y((()=>(0,o._)("p",null,"View more",-1)));function D(e,i,t,s,r,n){const a=(0,o.up)("movies-item"),l=(0,o.up)("movies-list-skeleton");return t.movies.length>0?((0,o.wg)(),(0,o.iD)("div",b,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.movies,(s=>((0,o.wg)(),(0,o.j4)(a,{key:s.id,movie:s,screenWidth:t.screenWidth,onChangeMovie:i[0]||(i[0]=i=>e.$emit("change-movie",i))},null,8,["movie","screenWidth"])))),128)),t.isNextPage?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"movies__card",onClick:i[1]||(i[1]=i=>e.$emit("more-movies"))},[(0,o._)("img",{class:"movies__card-image",src:s.AddMovie,alt:""},null,8,M),W])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.j4)(l,{key:1}))}var C=t(7139);const S=e=>((0,o.dD)("data-v-4342efc8"),e=e(),(0,o.Cn)(),e),P={class:"movie"},N=["src","alt"],z={class:"movie__rating"},x=["src"],A={class:"movie__rating-imdb"},j=S((()=>(0,o._)("span",null,"/10",-1))),q={class:"movie__name"};function I(e,i,t,s,r,n){return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("a",{class:(0,C.C_)(["movie__link",{scale:t.isSelected}]),onClick:i[0]||(i[0]=(...e)=>s.onMovieClick&&s.onMovieClick(...e))},[(0,o._)("img",{class:"movie__poster",src:t.movie.poster,alt:t.movie.title},null,8,N)],2),(0,o._)("div",z,[(0,o._)("img",{src:s.Star,alt:"stars",class:"movie__rating-img"},null,8,x),(0,o._)("span",A,(0,C.zw)(t.movie.imdb_rating),1),j]),(0,o._)("h2",q,(0,C.zw)(t.movie.title),1)])}var H=t.p+"img/star.d670f472.svg",O={props:{movie:{type:Object,required:!0},screenWidth:{type:Number,default:0},isSelected:{type:Boolean,default:!1}},emits:["change-movie"],setup(e,{emit:i}){const{screenWidth:t,movie:s}=(0,l.BK)(e),o=(0,v.tv)(),r=()=>{t.value>500?i("change-movie",s.value.id):o.push({name:"movie",params:{id:s.value.id}})};return{Star:H,onMovieClick:r}}},$=t(89);const Z=(0,$.Z)(O,[["render",I],["__scopeId","data-v-4342efc8"]]);var T=Z;const U={class:"movies-skeleton"};function B(e,i,t,s,r,n){const a=(0,o.up)("item-skeleton");return(0,o.wg)(),(0,o.iD)("div",U,[(0,o.Wm)(a),(0,o.Wm)(a),(0,o.Wm)(a),(0,o.Wm)(a)])}const F=e=>((0,o.dD)("data-v-10a8bef5"),e=e(),(0,o.Cn)(),e),E={class:"movie-skeleton"},L=F((()=>(0,o._)("div",{class:"movie-skeleton__poster"},null,-1))),V=F((()=>(0,o._)("div",{class:"movie-skeleton__rating"},null,-1))),K=F((()=>(0,o._)("div",{class:"movie-skeleton__name-top"},null,-1))),Y=F((()=>(0,o._)("div",{class:"movie-skeleton__name-bottom"},null,-1))),R=[L,V,K,Y];function G(e,i,t,s,r,n){return(0,o.wg)(),(0,o.iD)("div",E,R)}var J={};const Q=(0,$.Z)(J,[["render",G],["__scopeId","data-v-10a8bef5"]]);var X=Q,ee={components:{ItemSkeleton:X}};const ie=(0,$.Z)(ee,[["render",B],["__scopeId","data-v-0e800fca"]]);var te=ie,se=t.p+"img/plus.8ef26dde.svg",oe={components:{MoviesItem:T,MoviesListSkeleton:te},emits:["more-movies","change-movie"],props:{movies:{type:Array,required:!0},isNextPage:{type:Boolean,required:!0},screenWidth:{type:Number,default:0}},setup(){return{AddMovie:se}}};const re=(0,$.Z)(oe,[["render",D],["__scopeId","data-v-0d80d0f8"]]);var ne=re;const ae=e=>((0,o.dD)("data-v-c2f35314"),e=e(),(0,o.Cn)(),e),le={key:0,class:"slider"},ve=["src"],ce=ae((()=>(0,o._)("p",null,"View more",-1))),de=["src"],me=["src"];function ue(e,i,t,s,r,n){const a=(0,o.up)("movies-item"),l=(0,o.up)("swiper-slide"),v=(0,o.up)("swiper");return t.movies.length>0?((0,o.wg)(),(0,o.iD)("div",le,[(0,o.Wm)(v,{onSwiper:s.onSwiper,"slides-per-view":7,"space-between":24},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.movies,(s=>((0,o.wg)(),(0,o.j4)(l,{key:s.id},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{movie:s,screenWidth:t.screenWidth,isSelected:t.selectedMovie===s.id,onChangeMovie:i[0]||(i[0]=i=>e.$emit("change-movie",i))},null,8,["movie","screenWidth","isSelected"])])),_:2},1024)))),128)),t.isNextPage?((0,o.wg)(),(0,o.j4)(l,{key:0},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"movies__card",onClick:i[1]||(i[1]=(...e)=>s.onMoreMovies&&s.onMoreMovies(...e))},[(0,o._)("img",{class:"movies__card-image",src:s.AddMovie,alt:""},null,8,ve),ce])])),_:1})):(0,o.kq)("",!0)])),_:1},8,["onSwiper"]),(0,o._)("button",{onClick:i[2]||(i[2]=(...e)=>s.onSlideNext&&s.onSlideNext(...e)),class:(0,C.C_)(["slider__btn slider__btn--right",{disabled:s.isSliderEnd}])},[(0,o._)("img",{src:s.Arrow,alt:"Arrow-left",class:"slider__btn-image"},null,8,de)],2),(0,o._)("button",{onClick:i[3]||(i[3]=(...e)=>s.onSlidePrev&&s.onSlidePrev(...e)),class:(0,C.C_)(["slider__btn slider__btn--left",{disabled:s.isSliderStart}])},[(0,o._)("img",{src:s.Arrow,alt:"Arrow-right",class:"slider__btn-image"},null,8,me)],2)])):(0,o.kq)("",!0)}var _e=t(2878),pe=t.p+"img/arrow.3a7bbde2.svg",ge={components:{MoviesItem:T,Swiper:_e.tq,SwiperSlide:_e.o5},props:{selectedMovie:{type:Number,default:1},movies:{type:Array,default:[]},screenWidth:{type:Number,default:0},isNextPage:{type:Boolean,default:!0},getMovies:{type:Function}},emits:["change-movie"],setup(e){const i=(0,l.iH)(null),t=(0,l.iH)(),s=(0,l.iH)(!1),o=(0,l.iH)(!0),r=e=>{t.value=e},n=()=>{t.value.slideNext(),t.value.isEnd&&(s.value=!0),o.value=!1},a=()=>{t.value.slidePrev(),t.value.isBeginning&&(o.value=!0),s.value=!1},v=()=>{e.getMovies(),s.value=!1};return{myCarousel:i,swiper:t,onSwiper:r,Arrow:pe,AddMovie:se,onSlideNext:n,onSlidePrev:a,isSliderEnd:s,isSliderStart:o,onMoreMovies:v}}};const we=(0,$.Z)(ge,[["render",ue],["__scopeId","data-v-c2f35314"]]);var he=we,fe={name:"HomeView",components:{MoviesList:ne,MoviesCarousel:he},props:{screenWidth:{type:Number,default:0},selectedMovie:{type:Number,default:1}},emits:["change-movie"],setup(){const e=(0,l.iH)([]),i=(0,l.iH)(1),t=(0,l.iH)(!0),{redirectTo:s}=c(),r=async()=>{const{results:o,pages:r,error:n}=await f(i.value);n?s("not-found"):(r>i.value?i.value+=1:t.value=!1,e.value=[...e.value,...o])};return(0,o.bv)(r),{movies:e,isNextPage:t,getMovies:r}}};const ke=(0,$.Z)(fe,[["render",g],["__scopeId","data-v-e69b7828"]]);var ye=ke;const be=e=>((0,o.dD)("data-v-17ead5f9"),e=e(),(0,o.Cn)(),e),Me={key:0,class:"movie"},We={class:"movie__img-wrapper"},De=["src"],Ce={class:"movie__wrapper"},Se={class:"movie__rating-wrapper movie__rating-wrapper--large"},Pe=be((()=>(0,o._)("h3",{class:"movie__rating-title"},"iMDb rating",-1))),Ne={class:"movie__rating"},ze=["src"],xe={class:"movie__rating-value"},Ae={class:"movie__top"},je={class:"movie__title"},qe={class:"movie__title-capitalize"},Ie={class:"movie__year"},He={class:"movie__main"},Oe={class:"movie__desc-wrapper"},$e={class:"movie__description"},Ze={class:"movie__rating-wrapper movie__rating-wrapper--tablet"},Te=be((()=>(0,o._)("h3",{class:"movie__rating-title"},"iMDb rating",-1))),Ue={class:"movie__rating"},Be=["src"],Fe={class:"movie__rating-value"},Ee={class:"movie__info"},Le={key:0,class:"movie__genres"},Ve={key:1,class:"movie__mpa"},Ke={key:2,class:"movie__duration"},Ye={class:"movie__persons-wrapper"},Re={key:0,class:"movie__persons"},Ge={class:"movie__persons-name"},Je={key:1,class:"movie__persons"},Qe={class:"movie__persons-name"},Xe={key:2,class:"movie__persons"},ei={class:"movie__persons-name"},ii={class:"movie__footer"},ti={class:"movie__rating-wrapper movie__rating-wrapper--hide"},si=be((()=>(0,o._)("h3",{class:"movie__rating-title"},"iMDb rating",-1))),oi={class:"movie__rating"},ri=["src"],ni={class:"movie__rating-value"},ai=["src"],li={key:1};function vi(e,i,t,s,r,n){const a=(0,o.up)("custom-button"),l=(0,o.up)("router-link");return s.movie?((0,o.wg)(),(0,o.iD)("div",Me,[(0,o._)("div",We,[(0,o._)("img",{class:"movie__image",src:s.movie.bg_picture,alt:"Poster"},null,8,De)]),(0,o._)("div",Ce,[(0,o._)("div",Se,[Pe,(0,o._)("div",Ne,[(0,o._)("img",{class:"movie__rating-img",src:s.Star,alt:"star",width:"20",height:"20"},null,8,ze),(0,o._)("span",xe,(0,C.zw)(s.movie.imdb_rating),1),(0,o.Uk)(" /10 ")])]),(0,o._)("div",Ae,[(0,o._)("h2",je,[(0,o._)("span",qe,(0,C.zw)(s.movie.title),1),(0,o._)("span",Ie," ("+(0,C.zw)(s.movie.release_year)+")",1)]),(0,o.Wm)(a,{class:"movie__top-btn",isTrailer:!0},{default:(0,o.w5)((()=>[(0,o.Uk)("Watch trailer")])),_:1})]),(0,o._)("div",He,[(0,o._)("div",Oe,[(0,o._)("p",$e,(0,C.zw)(s.movie.description),1),(0,o._)("div",Ze,[Te,(0,o._)("div",Ue,[(0,o._)("img",{class:"movie__rating-img",src:s.Star,alt:"star",width:"20",height:"20"},null,8,Be),(0,o._)("span",Fe,(0,C.zw)(s.movie.imdb_rating),1),(0,o.Uk)(" /10 ")])])]),(0,o._)("div",Ee,[s.genres?((0,o.wg)(),(0,o.iD)("p",Le,(0,C.zw)(s.genres),1)):(0,o.kq)("",!0),s.movie.mpa_rating?((0,o.wg)(),(0,o.iD)("p",Ve,(0,C.zw)(s.movie.mpa_rating),1)):(0,o.kq)("",!0),s.duration?((0,o.wg)(),(0,o.iD)("p",Ke,(0,C.zw)(s.duration),1)):(0,o.kq)("",!0)]),(0,o._)("div",Ye,[s.movie.directors.length?((0,o.wg)(),(0,o.iD)("p",Re,[(0,o.Uk)((0,C.zw)(s.movie.directors.length>1?"Directors:":"Director:")+" ",1),(0,o._)("span",Ge,(0,C.zw)(s.getPersons("directors")),1)])):(0,o.kq)("",!0),s.movie.writers.length?((0,o.wg)(),(0,o.iD)("p",Je,[(0,o.Uk)((0,C.zw)(s.movie.writers.length>1?"Writers:":"Writer:")+" ",1),(0,o._)("span",Qe,(0,C.zw)(s.getPersons("writers")),1)])):(0,o.kq)("",!0),s.movie.stars.length?((0,o.wg)(),(0,o.iD)("p",Xe,[(0,o.Uk)((0,C.zw)(s.movie.stars.length>1?"Stars:":"Star:")+" ",1),(0,o._)("span",ei,(0,C.zw)(s.getPersons("stars")),1)])):(0,o.kq)("",!0)])]),(0,o._)("div",ii,[(0,o._)("div",ti,[si,(0,o._)("div",oi,[(0,o._)("img",{class:"movie__rating-img",src:s.Star,alt:"star",width:"20",height:"20"},null,8,ri),(0,o._)("span",ni,(0,C.zw)(s.movie.imdb_rating),1),(0,o.Uk)(" /10 ")])]),(0,o.Wm)(a,{isTrailer:!0},{default:(0,o.w5)((()=>[(0,o.Uk)("Watch trailer")])),_:1})])]),(0,o.Wm)(l,{to:"/",class:"arrow-link"},{default:(0,o.w5)((()=>[(0,o._)("img",{width:"22",height:"14",src:s.Arrow,alt:"Arrow left"},null,8,ai)])),_:1})])):((0,o.wg)(),(0,o.iD)("div",li,"Loading..."))}const ci={class:"btn"},di=["src"];function mi(e,i,t,s,r,n){return(0,o.wg)(),(0,o.iD)("button",ci,[t.isTrailer?((0,o.wg)(),(0,o.iD)("img",{key:0,src:s.PlayImg,alt:"play",class:"btn__image"},null,8,di)):(0,o.kq)("",!0),(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var ui=t.p+"img/play.6b4114f1.svg",_i={name:"custom-button",props:{isTrailer:{type:Boolean,default:!1}},setup(){return{PlayImg:ui}}};const pi=(0,$.Z)(_i,[["render",mi],["__scopeId","data-v-44fa9f4c"]]);var gi=pi,wi={components:{CustomButton:gi},props:{selectedMovie:{type:Number,default:1},screenWidth:{type:Number,default:0}},setup(e){const i=(0,v.yj)(),t=(0,l.iH)(),{selectedMovie:s,screenWidth:r}=(0,l.BK)(e),{redirectTo:n}=c(),a=async()=>{const{movieData:e,error:o}=await k(r.value>900?s.value:i.params.id);o?n("not-found"):t.value=e};(0,o.bv)(a),(0,o.YP)(s,(()=>a()));const d=(0,o.Fl)((()=>t.value.genres.map((e=>e.title)).join(", "))),m=(0,o.Fl)((()=>{const e=+t.value.duration,i=Math.trunc(e/60),s=e-60*i;let o=i?`${i}h `:"";return o+=s?`${s}m`:"",o.trim()})),u=e=>t.value[e].map((e=>`${e.first_name} ${e.last_name}`)).join(", ");return{movie:t,genres:d,duration:m,getPersons:u,Star:H,Arrow:pe}}};const hi=(0,$.Z)(wi,[["render",vi],["__scopeId","data-v-17ead5f9"]]);var fi=hi,ki={name:"App",components:{HomeView:ye,MovieView:fi},setup(){const{width:e,onWidthChange:i}=d(),t=(0,l.iH)(1),s=e=>{t.value=e};return(0,o.YP)(e,(()=>i(t))),{width:e,selectedMovie:t,handleChangeMovie:s}}};const yi=(0,$.Z)(ki,[["render",a]]);var bi=yi;const Mi=e=>((0,o.dD)("data-v-1e417df6"),e=e(),(0,o.Cn)(),e),Wi={class:"error"},Di=["src"],Ci=Mi((()=>(0,o._)("h1",{class:"error__title"},"Ooops",-1))),Si=Mi((()=>(0,o._)("p",{class:"error__description"},"Something went wrong!",-1)));function Pi(e,i,t,s,r,n){const a=(0,o.up)("custom-button"),l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Wi,[(0,o._)("img",{class:"error__image",src:s.Aliens,alt:"Aliens",width:"255",height:"255"},null,8,Di),Ci,Si,(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Retry")])),_:1})])),_:1})])}var Ni=t.p+"img/aliens.f566d9f7.svg",zi={components:{CustomButton:gi},setup(){return{Aliens:Ni}}};const xi=(0,$.Z)(zi,[["render",Pi],["__scopeId","data-v-1e417df6"]]);var Ai=xi;const ji=[{path:"/",name:"home",component:ye},{path:"/movie/:id",name:"movie",component:fi},{path:"/:pathMatch(.*)*",name:"not-found",component:Ai}],qi=(0,v.p7)({history:(0,v.PO)("/vue_test_task/"),routes:ji});var Ii=qi;(0,s.ri)(bi).use(Ii).mount("#app")}},i={};function t(s){var o=i[s];if(void 0!==o)return o.exports;var r=i[s]={exports:{}};return e[s](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(i,s,o,r){if(!s){var n=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],r=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(a=!1,r<n&&(n=r));if(a){e.splice(c--,1);var v=o();void 0!==v&&(i=v)}}return i}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,o,r]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.p="/vue_test_task/"}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,s){var o,r,n=s[0],a=s[1],l=s[2],v=0;if(n.some((function(i){return 0!==e[i]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(l)var c=l(t)}for(i&&i(s);v<n.length;v++)r=n[v],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},s=self["webpackChunkfilms"]=self["webpackChunkfilms"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(5714)}));s=t.O(s)})();
//# sourceMappingURL=app.29c0d02d.js.map