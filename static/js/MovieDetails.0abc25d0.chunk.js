(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[7],{111:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(117);var a=r(42),c=r(118);function s(t,e){return Object(n.a)(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,c=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(o){a=!0,c=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return r}}(t,e)||Object(a.a)(t,e)||Object(c.a)()}},117:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return n}))},118:function(t,e,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(e,"a",(function(){return n}))},127:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(18),a=r.n(n),c=r(30),s=r(26),i=r.n(s);i.a.defaults.baseURL="https://api.themoviedb.org",i.a.defaults.params={api_key:"e548173527b69af98deb3da87ab1364c"};var o={getTrends:function(){var t=Object(c.a)(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/3/trending/all/day");case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:return t.prev=8,t.t0=t.catch(0),console.log("error",{error:t.t0}),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),getMovie:function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/3/search/movie?query=".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:return t.prev=8,t.t0=t.catch(0),console.log("error",{error:t.t0}),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),getMovieDetails:function(){var t=Object(c.a)(a.a.mark((function t(e){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/3/movie/".concat(e,"?append_to_response=credits,reviews"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),console.log("error",{error:t.t0}),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},219:function(t,e,r){"use strict";r.r(e);var n=r(38),a=r(111),c=r(0),s=r(23),i=r(8),o=r(127),u=r(146),l=r.n(u),p=r(3),b=Object(c.lazy)((function(){return r.e(8).then(r.bind(null,182))})),d=Object(c.lazy)((function(){return r.e(4).then(r.bind(null,181))})),h=Object(c.lazy)((function(){return r.e(10).then(r.bind(null,183))}));e.default=function(t){var e=t.history,r=t.location,u=t.match,f=Object(c.useState)({poster_path:"",title:null,release_date:"",overview:null,genres:[],credits:null,reviews:null}),j=Object(a.a)(f,2),v=j[0],O=j[1];Object(c.useEffect)((function(){var t=u.params.movieId;o.a.getMovieDetails(t).then((function(t){return O(Object(n.a)({},t))}))}),[]);return Object(p.jsxs)(p.Fragment,{children:[v.poster_path&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:l.a.goBackBtn,onClick:function(){r.state&&r.state.query?e.push({pathname:"/applications/movies/search",search:"?query=".concat(r.state.query)}):e.push("/applications/movies")},children:"\u2190 Go back"}),Object(p.jsx)(b,{state:v})]}),Object(p.jsxs)("div",{className:l.a.additionalInfoWrap,children:[Object(p.jsx)("h3",{children:"Additional information"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:{pathname:"".concat(u.url,"/cast"),state:Object(n.a)(Object(n.a)({},r.state),{},{path:"/movies/".concat(v.id)})},children:"Cost"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{to:{pathname:"".concat(u.url,"/reviews"),state:Object(n.a)(Object(n.a)({},r.state),{},{path:"/movies/".concat(v.id)})},children:"Reviews"})})]})]}),Object(p.jsxs)(c.Suspense,{fallback:Object(p.jsx)("p",{children:"Loading..."}),children:[Object(p.jsx)(i.b,{path:"".concat(u.path,"/cast"),render:function(t){return Object(p.jsx)(d,{credits:v.credits})}}),Object(p.jsx)(i.b,{path:"".concat(u.path,"/reviews"),render:function(t){return Object(p.jsx)(h,{reviews:v.reviews})}})]})]})}}}]);
//# sourceMappingURL=MovieDetails.0abc25d0.chunk.js.map