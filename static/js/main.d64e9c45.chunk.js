(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[3],{20:function(e,a,t){e.exports={backdrop:"NavBar_backdrop__bvuiO",NavBar:"NavBar_NavBar__Cqnef",NavBarlSlideMobile:"NavBar_NavBarlSlideMobile__s57ra",NavBarlSlide:"NavBar_NavBarlSlide__WgN3J",navigation:"NavBar_navigation__3mDSN",NavBarLink:"NavBar_NavBarLink__1gWaP",activeNavBarLink:"NavBar_activeNavBarLink__2N_97"}},3:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var r={mobile:"375",mobilePlus:"414",tablet:"768",desktop:"900",desktopBig:"1200",mobileMax:"374",mobilePlusMax:"413",tabletMax:"767",desktopMax:"899",desktopBigMax:"1200",primaryColor:"#9697b6",darkColor:"#212225",primaryWhiteColor:"#ffffff",secondaryWhiteColor:"#ffffff96",trinityWhiteColor:"#ffffff52",fourthWhiteColor:"#ffffff17",linkColor:"#6ecab6",primaryBg:"#252729",secondaryBg:"#353a44",darkBg:"#212225",accentBg:"#9697b6",primaryYellow:"#f7df1e",itemShadow:"rgba(99, 99, 99, 0.5) 0px 2px 5px -1px",headerShadow:"rgba(0, 0, 0, 0.5) 0px 2px 5px -1px",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var r,n=t(0),o=t.n(n),i=t(21),c=t.n(i),l=t(19),d=t(27),s=t(45),b=t(34),p=t(6),u=t(18),h=Object(u.a)({AppWrap:{height:"100vh",overflow:"scroll","-ms-overflow-style":"none","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}}),f=t(11),j=t(3),m=Object(u.a)({Header:(r={paddingLeft:15,display:"flex",alignItems:"center",margin:"0 auto",height:60,width:"100%",position:"fixed",zIndex:1,backgroundColor:"#212225a1",backdropFilter:"blur(10px)",boxShadow:j.a.headerShadow},Object(f.a)(r,"@media (min-width: ".concat(j.a.tablet,"px)"),{paddingLeft:30}),Object(f.a)(r,"@media (min-width: ".concat(j.a.desktop,"px)"),{}),r),logoLink:{fontSize:18,fontWeight:600,letterSpacing:3,textTransform:"uppercase",color:j.a.primaryColor}}),g=t(2);function v(){var e=m();return Object(g.jsx)("header",{className:e.Header,children:Object(g.jsx)(l.b,{className:e.logoLink,to:"/",replace:!0,children:"Reactor"})})}var x,O=[{path:"/resume",label:"Resume",component:Object(n.lazy)((function(){return t.e(2).then(t.bind(null,170))})),showInMenu:!0},{path:"/portfolio",label:"Portfolio",component:Object(n.lazy)((function(){return t.e(1).then(t.bind(null,168))})),showInMenu:!0},{path:"/admin",label:"Admin",component:Object(n.lazy)((function(){return Promise.all([t.e(6),t.e(0)]).then(t.bind(null,172))})),showInMenu:!1}],N=Object(u.a)({article:{},container:(x={paddingLeft:15,paddingRight:15,margin:"0 auto"},Object(f.a)(x,"@media (min-width: ".concat(j.a.mobile,"px)"),{width:Number(j.a.mobile)}),Object(f.a)(x,"@media (min-width: ".concat(j.a.mobilePlus,"px)"),{width:Number(j.a.mobilePlus)}),Object(f.a)(x,"@media (min-width: ".concat(j.a.tablet,"px)"),{paddingLeft:30,paddingRight:30,width:Number(j.a.tablet)}),Object(f.a)(x,"@media (min-width: ".concat(j.a.desktop,"px)"),{width:Number(j.a.desktop)}),Object(f.a)(x,"@media (min-width: ".concat(j.a.desktopBig,"px)"),{width:Number(j.a.desktopBig)}),x),loading:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",fontSize:18,fontWeight:600,letterSpacing:3,color:j.a.primaryColor}}),B=Object(d.b)((function(e){return{visible:e.navMenu.visible}}))((function(e){e.visible,e.location;var a=N();return Object(g.jsx)("main",{className:a.Main,children:Object(g.jsx)("article",{className:a.article,children:Object(g.jsx)("div",{className:a.container,children:Object(g.jsx)(n.Suspense,{fallback:Object(g.jsx)("p",{className:a.loading,children:"LOADING..."}),children:Object(g.jsxs)(p.d,{children:[O.map((function(e){var a=e.path,t=e.exact,r=e.component;return Object(g.jsx)(p.b,{path:a,exact:t,component:r},a)})),Object(g.jsx)(p.a,{to:"/resume"})]})})})})})})),k=Object(u.a)({MenuBtn:{position:"fixed",top:11,right:10,width:84,padding:{top:10,left:10,right:10,bottom:10},fontSize:14,fontWeight:500,letterSpacing:1,textTransform:"uppercase",cursor:"pointer",color:j.a.primaryColor,backgroundColor:"transparent",border:"2px solid ".concat(j.a.accentBg),borderRadius:4,outline:"none",zIndex:3,"&:hover":{backgroundColor:j.a.primaryColor,color:j.a.darkColor,border:"2px solid ".concat(j.a.primaryColor)}},activeMenuBtn:{composes:"navMenuButton",position:"fixed",top:11,right:10,width:84,padding:{top:10,left:10,right:10,bottom:10},fontSize:14,fontWeight:500,textTransform:"uppercase",cursor:"pointer",color:j.a.primaryBg,backgroundColor:"transparent",border:"2px solid ".concat(j.a.primaryBg),borderRadius:4,outline:"none","&:hover":{backgroundColor:j.a.primaryBg,color:j.a.primaryWhiteColor}}}),w=function(e){var a=e.toggleNavBar,t=k();return Object(g.jsx)("button",{className:t.MenuBtn,onClick:a,children:"Menu"})},y=t(20),C=t.n(y);function M(e){var a=e.toggleNavBar;return Object(g.jsx)("div",{className:C.a.navigation,children:O.map((function(e){var t=e.path,r=e.label;return e.showInMenu?Object(g.jsx)(l.b,{to:t,exact:!0,className:C.a.NavBarLink,activeClassName:C.a.activeNavBarLink,onClick:a,replace:!0,children:r},t):null}))})}var _=document.querySelector("#navbar-root"),S=function(e){var a=e.toggleNavBar;Object(n.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}));var t=function(e){return"Escape"===e.code&&a()};return Object(i.createPortal)(Object(g.jsx)("div",{className:C.a.backdrop,onClick:function(e){return e.currentTarget===e.target&&a()},children:Object(g.jsx)("div",{className:C.a.NavBar,children:Object(g.jsx)(M,{toggleNavBar:a})})}),_)},L=t(33),z=Object(p.g)((function(e){var a=e.location,t=Object(n.useState)(!1),r=Object(b.a)(t,2),o=r[0],i=r[1],c=h();Object(n.useEffect)((function(){L.a.initialize("UA-199360185-1"),L.a.pageview(a.pathname)}),[a.pathname]),Object(n.useEffect)((function(){document.querySelector("body").style.overflow=o?"hidden":"auto"}),[o]);var l=function(){i(!o)};return Object(g.jsxs)("div",{className:c.AppWrap,children:[Object(g.jsx)(v,{}),Object(g.jsx)(B,{}),Object(g.jsx)(w,{toggleNavBar:l}),o&&Object(g.jsx)(S,{toggleNavBar:l})]})})),W=t(24),I=t(14),P=t(15),E=t(32),A=t.n(E),R=Object(I.b)("navMenu/visible"),T=Object(I.c)({visible:!1},Object(f.a)({},R,(function(e,a){return{visible:a.payload}}))),q=Object(I.b)("app/hidden"),J=Object(I.c)({hidden:!1},Object(f.a)({},q,(function(e,a){return{hidden:a.payload}}))),D=Object(W.a)(Object(I.d)({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})),H={key:"navMenu",storage:A.a},F={key:"app",storage:A.a},G=Object(I.a)({reducer:{navMenu:Object(P.g)(H,T),app:Object(P.g)(F,J)},middleware:D,devTools:!1}),U={store:G,persistor:Object(P.h)(G)};t(66),t(67);c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(d.a,{store:U.store,children:Object(g.jsx)(s.a,{loading:Object(g.jsx)("p",{children:"Loading!"}),persistor:U.persistor,children:Object(g.jsx)(l.a,{children:Object(g.jsx)(z,{})})})})}),document.getElementById("root"))}},[[68,4,5]]]);
//# sourceMappingURL=main.d64e9c45.chunk.js.map