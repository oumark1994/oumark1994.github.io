(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(39),a=c.n(s),i=c(19),o=(c(49),c(50),c(51),c(5)),l=c(4),j=(c(52),c.p+"static/media/tmovie.67797e94.png"),u=c(0),d=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}],b=function(){var e=Object(l.g)().pathname,t=Object(n.useRef)(null),c=d.findIndex((function(t){return t.path===e}));return Object(n.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(u.jsx)("div",{ref:t,className:"header",children:Object(u.jsxs)("div",{className:"header__wrap container",children:[Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:j,alt:""}),Object(u.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"tMovies"})]}),Object(u.jsx)("ul",{className:"header__nav",children:d.map((function(e,t){return Object(u.jsx)("li",{className:"".concat(t===c?"active":""),children:Object(u.jsx)(o.b,{style:{textDecoration:"none",color:"white"},to:e.path,children:e.display})},t)}))})]})})},m=(c(59),c.p+"static/media/footer-bg.67e95f05.jpg"),h=function(){return Object(u.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(m,")")},children:Object(u.jsxs)("div",{className:"footer__content container",children:[Object(u.jsx)("div",{className:"footer__content__logo",children:Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:j,alt:""}),Object(u.jsx)(o.b,{to:"/",children:"tMovies"})]})}),Object(u.jsxs)("div",{className:"footer__content__menus",children:[Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"Home"}),Object(u.jsx)(o.b,{to:"/",children:"Contact us"}),Object(u.jsx)(o.b,{to:"/",children:"Term of services"}),Object(u.jsx)(o.b,{to:"/",children:"About us"})]}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"Live"}),Object(u.jsx)(o.b,{to:"/",children:"FAQ"}),Object(u.jsx)(o.b,{to:"/",children:"Premium"}),Object(u.jsx)(o.b,{to:"/",children:"Pravacy policy"})]}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"You must watch"}),Object(u.jsx)(o.b,{to:"/",children:"Recent release"}),Object(u.jsx)(o.b,{to:"/",children:"Top IMDB"})]})]})]})})},O=(c(60),function(e){return Object(u.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(m,")")},children:Object(u.jsx)("h2",{children:e.children})})}),v=c(7),p=c.n(v),x=c(10),f=c(42),g=c.n(f),_=c(43),y=c.n(_),N={baseUrl:"http://api.themoviedb.org/3/",apiKey:"6a3460502432bc714f21b729de24c6a2",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},k=g.a.create({baseURL:N.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return y.a.stringify(Object(i.a)(Object(i.a)({},e),{},{api_key:N.apiKey}))}});k.interceptors.request.use(function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var w=k,C={movie:"movie",tv:"tv"},L={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},I="popular",T="top_rated",E={getMoviesList:function(e,t){var c="movie/"+L[e];return w.get(c,t)},getTvList:function(e,t){var c="tv/"+L[e];return w.get(c,t)},getVideos:function(e,t){var c=C[e]+"/"+t+"/videos";return w.get(c,{params:{}})},search:function(e,t){var c="search/"+C[e];return w.get(c,t)},detail:function(e,t,c){var n=C[e]+"/"+t;return w.get(n,c)},credits:function(e,t){var c=C[e]+"/"+t+"/credits";return w.get(c,{params:{}})},similar:function(e,t){var c=C[e]+"/"+t+"/similar";return w.get(c,{params:{}})}},S=c(28),M=c(9),V=(c(94),c(95),c(96),function(e){return Object(u.jsx)("button",{className:"btn-outline ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}),F=function(e){return Object(u.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},R=function(e){var t=e.item,c="/"+C[e.category]+"/"+t.id,n=N.w500Image(t.poster_path||t.backdrop_path);return Object(u.jsxs)(o.b,{to:c,children:[Object(u.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsx)(F,{children:Object(u.jsx)("i",{className:"bx bx-play"})})}),Object(u.jsx)("h3",{children:t.title||t.name})]})},A=(c(97),function(e){return Object(u.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange?function(t){return e.onChange(t)}:null})}),B=function(e){var t=Object(l.f)(),c=Object(n.useState)(e.keyword?e.keyword:""),r=Object(M.a)(c,2),s=r[0],a=r[1],i=Object(n.useCallback)((function(){s.trim().length>0&&t.push("/".concat(C[e.category],"/search/").concat(s))}),[s,e.category,t]);return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[s,i]),Object(u.jsxs)("div",{className:"movie-search",children:[Object(u.jsx)(A,{type:"text",placeholder:"Enter keyword",value:s,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)(F,{className:"small",onClick:i,children:"Search"})]})},D=function(e){var t=Object(n.useState)([]),c=Object(M.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(1),i=Object(M.a)(a,2),o=i[0],j=i[1],d=Object(n.useState)(0),b=Object(M.a)(d,2),m=b[0],h=b[1],O=Object(l.h)().keyword;Object(n.useEffect)((function(){var t=function(){var t=Object(x.a)(p.a.mark((function t(){var c,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==O){t.next=15;break}n={},t.t0=e.category,t.next=t.t0===C.movie?6:10;break;case 6:return t.next=8,E.getMoviesList(L.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,E.getTvList(I,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return r={query:O},t.next=18,E.search(e.category,{params:r});case 18:c=t.sent;case 19:s(c.results),h(c.total_pages);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.category,O]);var v=function(){var t=Object(x.a)(p.a.mark((function t(){var c,n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==O){t.next=15;break}n={page:o+1},t.t0=e.category,t.next=t.t0===C.movie?6:10;break;case 6:return t.next=8,E.getMoviesList(L.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,E.getTvList(I,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return a={page:o+1,query:O},t.next=18,E.search(e.category,{params:a});case 18:c=t.sent;case 19:s([].concat(Object(S.a)(r),Object(S.a)(c.results))),j(o+1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(B,{category:e.category,keyword:O})}),Object(u.jsx)("div",{className:"movie-grid",children:r.map((function(t,c){return Object(u.jsx)(R,{category:e.category,item:t},c)}))}),o<m?Object(u.jsx)("div",{className:"movie-grid__loadmore",children:Object(u.jsx)(V,{className:"small",onClick:v,children:"Load more"})}):null]})},P=function(){var e=Object(l.h)().category;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{children:e===C.movie?"Movies":"TV Series"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(D,{category:e})})})]})},q=(c(98),function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),r=Object(M.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(x.a)(p.a.mark((function c(){var n;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,E.credits(t,e.id);case 2:n=c.sent,a(n.cast.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(u.jsx)("div",{className:"casts",children:s.map((function(e,t){return Object(u.jsxs)("div",{className:"casts__item",children:[Object(u.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(N.w500Image(e.profile_path),")")}}),Object(u.jsx)("p",{className:"casts_item_name",children:e.name})]},t)}))})}),U=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(u.jsxs)("div",{className:"video",children:[Object(u.jsx)("div",{className:"video__title",children:Object(u.jsx)("h2",{children:t.name})}),Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),ref:c,width:"100%",title:"video"})]})},H=function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),r=Object(M.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(x.a)(p.a.mark((function c(){var n;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,E.getVideos(t,e.id);case 2:n=c.sent,a(n.results.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(u.jsx)(u.Fragment,{children:s.map((function(e,t){return Object(u.jsx)(U,{item:e},t)}))})},J=(c(99),c(106)),K=c(103),W=function(e){var t=Object(n.useState)([]),c=Object(M.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(x.a)(p.a.mark((function t(){var c,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,n={},"similar"===e.type){t.next=15;break}t.t0=e.category,t.next=t.t0===C.movie?6:10;break;case 6:return t.next=8,E.getMoviesList(e.type,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,E.getTvList(e.type,{params:n});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,E.similar(e.category,e.id);case 17:c=t.sent;case 18:s(c.results);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(u.jsx)("div",{className:"movie-list",children:Object(u.jsx)(J.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(u.jsx)(K.a,{children:Object(u.jsx)(R,{item:t,category:e.category})},c)}))})})},z=function(){var e=Object(l.h)(),t=e.category,c=e.id,r=Object(n.useState)(null),s=Object(M.a)(r,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.detail(t,c,{params:{}});case 2:n=e.sent,i(n),window.scrollTo(0,0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,c]),Object(u.jsx)(u.Fragment,{children:a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(N.originalImage(a.backdrop_path||a.poster_path),")")}}),Object(u.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(u.jsx)("div",{className:"movie-content__poster",children:Object(u.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(N.originalImage(a.poster_path||a.backdrop_path),")")}})}),Object(u.jsxs)("div",{className:"movie-content__info",children:[Object(u.jsx)("h1",{className:"title",children:a.title||a.name}),Object(u.jsx)("div",{className:"genres",children:a.genres&&a.genres.slice(0,5).map((function(e,t){return Object(u.jsx)("span",{className:"genres__item",children:e.name},t)}))}),Object(u.jsx)("p",{className:"overview",children:a.overview}),Object(u.jsxs)("div",{className:"cast",children:[Object(u.jsx)("div",{className:"section__header",children:Object(u.jsx)("h2",{children:"Casts"})}),Object(u.jsx)(q,{id:a.id})]})]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(H,{id:a.id})}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsx)("div",{className:"section__header mb-2",children:Object(u.jsx)("h2",{children:"Similar"})}),Object(u.jsx)(W,{category:t,type:"similar",id:a.id})]})]})]})})},Q=c(105),Y=c(104),G=(c(100),function(e){var t=Object(n.useRef)(null);return Object(u.jsxs)("div",{className:"modal_content",children:[e.children,Object(u.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(u.jsx)("i",{className:"bx bx-x"})})]})}),X=function(e){var t=Object(n.useState)(!1),c=Object(M.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){s(e.active)}),[e.active]),Object(u.jsx)("div",{id:e.id,className:"modal ".concat(r?"active":""),children:e.children})},Z=(c(101),function(e){var t=Object(l.f)(),c=e.item,n=N.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path);return Object(u.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(u.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(u.jsx)("h2",{className:"title",children:c.title}),Object(u.jsx)("div",{className:"overview",children:c.overview}),Object(u.jsx)("div",{className:"btns",children:Object(u.jsx)(F,{onClick:function(){return t.push("/movie/"+c.id)},children:"Watch now"})})]}),Object(u.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(u.jsx)("img",{src:N.w500Image(c.poster_path),alt:""})})]})})}),$=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(u.jsx)(X,{active:!1,id:"modal_".concat(t.id),children:Object(u.jsx)(G,{onClose:function(){return c.current.setAttribute("src","")},children:Object(u.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})},ee=function(){Q.a.use([Y.a]);var e=Object(n.useState)([]),t=Object(M.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,E.getMoviesList(L.popular,{params:t});case 4:c=e.sent,r(c.results.slice(1,4)),console.log(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"hero-slide",children:[Object(u.jsx)(J.a,{modules:[Y.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,children:c.map((function(e,t){return Object(u.jsx)(K.a,{children:function(t){var c=t.isActive;return Object(u.jsx)(Z,{item:e,className:"".concat(c?"active":"")})}},t)}))}),c.map((function(e,t){return Object(u.jsx)($,{item:e},t)}))]})},te=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ee,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2 ",style:{justifyContent:"space-between"},children:[Object(u.jsx)("h2",{children:"Trending Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(V,{className:"small",children:"View more"})})]}),Object(u.jsx)(W,{category:C.movie,type:L.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rated Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(V,{className:"small",children:"View more"})})]}),Object(u.jsx)(W,{category:C.movie,type:L.top_rated})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending TV"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(V,{className:"small",children:"View more"})})]}),Object(u.jsx)(W,{category:C.tv,type:I})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rated TV"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(V,{className:"small",children:"View more"})})]}),Object(u.jsx)(W,{category:C.tv,type:T})]})]})]})},ce=function(){return Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/:category/search/:keyword",component:P}),Object(u.jsx)(l.a,{path:"/:category/:id",component:z}),Object(u.jsx)(l.a,{path:"/:category",component:P}),Object(u.jsx)(l.a,{path:"/",exact:!0,component:te})]})};var ne=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(l.a,{render:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,Object(i.a)({},e)),Object(u.jsx)(ce,{}),Object(u.jsx)(h,{})]})}})})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(ne,{})}),document.getElementById("root"))},49:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.80452d38.chunk.js.map