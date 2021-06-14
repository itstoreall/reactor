(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[2],{2:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var o={mobile:"375",mobilePlus:"414",tablet:"768",desktop:"900",desktopBig:"1200",mobileMax:"374",mobilePlusMax:"413",tabletMax:"767",desktopMax:"899",desktopBigMax:"1200",primaryColor:"#9697b6",darkColor:"#212225",primaryWhiteColor:"#ffffff",secondaryWhiteColor:"#ffffff96",trinityWhiteColor:"#ffffff52",linkColor:"#6ecab6",primaryBg:"#252729",secondaryBg:"#353a44",darkBg:"#212225",accentBg:"#9697b6",primaryYellow:"#f7df1e",$itemShadow:"rgba(99, 99, 99, 0.5) 0px 2px 5px -1px",$todoShadow:"rgba(99, 99, 99, 0.5) 0px 2px 5px -1px"}},33:function(e){e.exports=JSON.parse('{"location":["/resume"]}')},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var o,i=a(0),n=a.n(i),r=a(21),c=a.n(r),l=a(17),d=a(18),s=a(32),p=a(13),b=Object(p.b)("app/hidden"),h=a(6),m=a(33),u=a(4),g=a(16),j=a(2),f=Object(g.a)({Header:(o={paddingLeft:15,display:"flex",alignItems:"center",margin:"0 auto",height:60,width:"100%"},Object(u.a)(o,"@media (max-width: 767px)",{}),Object(u.a)(o,"@media (min-width: ".concat(j.a.tablet,"px)"),{paddingLeft:30}),Object(u.a)(o,"@media (min-width: ".concat(j.a.desktop,"px)"),{}),o),logoLink:{fontSize:18,fontWeight:600,letterSpacing:3,textTransform:"uppercase",color:j.a.primaryColor}}),O=a(3);function x(){var e=f();return Object(O.jsx)("header",{className:e.Header,children:Object(O.jsx)(l.b,{className:e.logoLink,to:"/",replace:!0,children:"Reactor"})})}var v,w=Object(p.b)("navMenu/visible"),k=Object(g.a)({backdrop:Object(u.a)({position:"fixed",top:0,right:0,width:"100%",height:"100vh",backgroundColor:j.a.primaryYellow,overflow:"scroll"},"@media (min-width: ".concat(j.a.tablet,"px)"),{width:220}),NavMenu:{position:"relative"},navMenuButton:{position:"fixed",top:11,right:10,width:84,padding:{top:10,left:10,right:10,bottom:10},fontSize:14,fontWeight:500,letterSpacing:1,textTransform:"uppercase",cursor:"pointer",color:j.a.primaryColor,backgroundColor:j.a.primaryBg,border:"2px solid ".concat(j.a.accentBg),borderRadius:4,outline:"none","&:hover":{backgroundColor:j.a.primaryYellow,color:j.a.darkColor,border:"2px solid ".concat(j.a.primaryYellow)}},activeNavMenuButton:{composes:"navMenuButton",position:"fixed",top:11,right:10,width:84,padding:{top:10,left:10,right:10,bottom:10},fontSize:14,fontWeight:500,textTransform:"uppercase",cursor:"pointer",color:j.a.primaryBg,backgroundColor:"transparent",border:"2px solid ".concat(j.a.primaryBg),borderRadius:4,outline:"none","&:hover":{backgroundColor:j.a.primaryBg,color:j.a.primaryWhiteColor}},Navigation:Object(u.a)({display:"flex",flexDirection:"column",width:"100vw",minHeight:"100vh",listStyle:"none",margin:0,padding:{top:100,left:40,right:40,bottom:40}},"@media (min-width: ".concat(j.a.tablet,"px)"),{padding:{top:100,left:10,right:10,bottom:20},width:220}),link:(v={textDecoration:"none",padding:15,fontSize:22,color:j.a.darkColor,backgroundColor:"inherit",borderRadius:4},Object(u.a)(v,"@media (min-width: ".concat(j.a.tablet,"px)"),{fontSize:16}),Object(u.a)(v,"&:not(:last-child)",{marginBottom:5}),Object(u.a)(v,"&:hover",{color:j.a.primaryWhiteColor,backgroundColor:j.a.primaryBg}),v),activeLink:{backgroundColor:j.a.primaryBg,color:j.a.primaryWhiteColor,"&:hover":{color:j.a.primaryWhiteColor,backgroundColor:j.a.primaryBg}}}),y=[{path:"/resume",label:"Resume",component:Object(i.lazy)((function(){return a.e(1).then(a.bind(null,62))})),showInMenu:!0},{path:"/portfolio",label:"Portfolio",component:Object(i.lazy)((function(){return a.e(0).then(a.bind(null,61))})),showInMenu:!0}];function C(e){var t=e.onToggleVisible,a=k(),o=function(){return t()};return Object(O.jsx)("div",{className:a.Navigation,children:y.map((function(e){var t=e.path,i=e.label;return e.showInMenu?Object(O.jsx)(l.b,{to:t,exact:!0,className:a.link,activeClassName:a.activeLink,onClick:o,replace:!0,children:i},t):null}))})}var B,N,M={toggleVisible:w},S=Object(d.b)((function(e){return{visible:e.navMenu.visible}}),M)((function(e){var t=e.visible,a=e.toggleVisible,o=k(),i=function(){return a(!t)};return Object(O.jsxs)(O.Fragment,{children:[t&&Object(O.jsx)("div",{className:o.backdrop,children:Object(O.jsx)("div",{className:o.NavMenu,children:t&&Object(O.jsx)(C,{onToggleVisible:i})})}),Object(O.jsx)("button",{className:t?o.activeNavMenuButton:o.navMenuButton,type:"button",onClick:i,children:t?"Close":"Menu"})]})})),W=Object(g.a)({article:{"& section > h1":{}},container:(B={paddingLeft:15,paddingRight:15,margin:"0 auto"},Object(u.a)(B,"@media (min-width: ".concat(j.a.mobile,"px)"),{width:Number(j.a.mobile)}),Object(u.a)(B,"@media (min-width: ".concat(j.a.mobilePlus,"px)"),{width:Number(j.a.mobilePlus)}),Object(u.a)(B,"@media (min-width: ".concat(j.a.tablet,"px)"),{paddingLeft:30,paddingRight:30,width:Number(j.a.tablet)}),Object(u.a)(B,"@media (min-width: ".concat(j.a.desktop,"px)"),{width:Number(j.a.desktop)}),Object(u.a)(B,"@media (min-width: ".concat(j.a.desktopBig,"px)"),{width:Number(j.a.desktopBig)}),B),loading:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100vh - 180px)",fontSize:18,fontWeight:600,letterSpacing:3,color:j.a.primaryColor}}),z=Object(d.b)((function(e){return{visible:e.navMenu.visible}}))((function(e){e.visible,e.location;var t=W();return Object(O.jsx)("main",{className:t.Main,children:Object(O.jsx)("article",{className:t.article,children:Object(O.jsx)("div",{className:t.container,children:Object(O.jsx)(i.Suspense,{fallback:Object(O.jsx)("p",{className:t.loading,children:"LOADING..."}),children:Object(O.jsxs)(h.d,{children:[y.map((function(e){var t=e.path,a=e.exact,o=e.component;return Object(O.jsx)(h.b,{path:t,exact:a,component:o},t)})),Object(O.jsx)(h.a,{to:"/resume"})]})})})})})})),L=Object(g.a)({AppOption_one:(N={height:"100vh",overflow:"scroll"},Object(u.a)(N,"@media screen and (max-width: ".concat(j.a.desktopMax,"px)"),{"& article":{paddingBottom:100}}),Object(u.a)(N,"-ms-overflow-style","none"),Object(u.a)(N,"scrollbar-width","none"),Object(u.a)(N,"&::-webkit-scrollbar",{display:"none"}),Object(u.a)(N,"@media screen and (min-width: ".concat(j.a.desktop,"px)"),{overflow:"hidden"}),N),AppOption_two:{height:"100vh",overflow:"scroll","-ms-overflow-style":"none","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"},"& article":{paddingTop:30,paddingBottom:100},"& h1":{marginBottom:40}}}),A=a(28),I={toggleOverflow:b},R=Object(d.b)((function(e){return{hidden:e.app.hidden}}),I)(Object(h.g)((function(e){var t=e.location,a=e.hidden,o=e.toggleOverflow,n=L();return Object(i.useEffect)((function(){A.a.initialize("UA-199360185-1"),A.a.pageview(t.pathname),m.location.map((function(e){return t.pathname===e?o(!0):o(!1)}))}),[t.pathname,o,t.search]),Object(O.jsxs)("div",{className:a?n.AppOption_one:n.AppOption_two,children:[Object(O.jsx)(x,{}),Object(O.jsx)(z,{}),Object(O.jsx)(S,{})]})}))),T=a(22),P=a(14),V=a(27),Y=a.n(V),_=Object(p.c)({visible:!1},Object(u.a)({},w,(function(e,t){return{visible:t.payload}}))),D=Object(p.c)({hidden:!1},Object(u.a)({},b,(function(e,t){return{hidden:t.payload}}))),H=Object(T.a)(Object(p.d)({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})),J={key:"navMenu",storage:Y.a},E={key:"app",storage:Y.a},$=Object(p.a)({reducer:{navMenu:Object(P.g)(J,_),app:Object(P.g)(E,D)},middleware:H,devTools:!1}),F={store:$,persistor:Object(P.h)($)};a(53),a(54);c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(d.a,{store:F.store,children:Object(O.jsx)(s.a,{loading:Object(O.jsx)("p",{children:"Loading..."}),persistor:F.persistor,children:Object(O.jsx)(l.a,{children:Object(O.jsx)(R,{})})})})}),document.getElementById("root"))}},[[55,3,4]]]);
//# sourceMappingURL=main.53a3d805.chunk.js.map