(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[4],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),c=n(18),a=n.n(c),r=n(15),l=n(20),s=n(29),b=n(9),d=n(14),u="768",h="900",j="#9697b6",p="#fff",g="#2c3139",m="#212225",O="#9697b6",v=Object(d.a)({Header:Object(b.a)({paddingLeft:15,display:"flex",alignItems:"center",height:60},"@media (min-width: ".concat(u,"ps)"),{paddingLeft:30}),logoLink:{fontSize:18,fontWeight:600,letterSpacing:3,textTransform:"uppercase",color:j}}),f=n(2);function x(){var e=v();return Object(f.jsx)("header",{className:e.Header,children:Object(f.jsx)(r.b,{className:e.logoLink,to:"/",replace:!0,children:"Reactor"})})}var k,w=n(16),C=Object(w.b)("navMenu/visible"),M=Object(d.a)({NavMenu:{position:"absolute",top:0,right:0},navMenuButton:{position:"absolute",top:11,right:10,width:120,padding:{top:10,left:10,right:10,bottom:10},fontSize:14,fontWeight:500,textTransform:"uppercase",cursor:"pointer",color:j,backgroundColor:g,border:"2px solid ".concat(O),borderRadius:4,outline:"none","&:hover":{backgroundColor:O,color:p}},Navigation:Object(b.a)({display:"flex",flexDirection:"column",width:"100vw",height:"100vh",listStyle:"none",margin:0,padding:{top:100,left:40,right:40,bottom:40},backgroundColor:m,overflow:"scroll"},"@media (min-width: ".concat(u,"px)"),{padding:{top:100,left:10,right:10,bottom:20},width:220}),link:(k={backgroundColor:"inherit",textDecoration:"none",padding:10,fontSize:20,color:j,borderRadius:4},Object(b.a)(k,"@media (min-width: ".concat(u,"px)"),{fontSize:16}),Object(b.a)(k,"&:not(:last-child)",{marginBottom:5}),Object(b.a)(k,"&:hover",{color:p,backgroundColor:O}),k),activeLink:{backgroundColor:g,color:p,"&:hover":{color:p,backgroundColor:g}}}),N=[{path:"/",label:"Home",component:Object(o.lazy)((function(){return n.e(3).then(n.bind(null,91))})),exact:!0,showInMenu:!0},{path:"/applications",label:"Applications",component:Object(o.lazy)((function(){return n.e(0).then(n.bind(null,92))})),showInMenu:!0},{path:"/books",label:"Books",component:Object(o.lazy)((function(){return Promise.all([n.e(7),n.e(1)]).then(n.bind(null,90))})),showInMenu:!0},{path:"/contacts",label:"Contacts",component:Object(o.lazy)((function(){return n.e(2).then(n.bind(null,93))})),showInMenu:!0}];function y(e){var t=e.onToggleVisible,n=M(),o=function(){return t()};return Object(f.jsx)("div",{className:n.Navigation,children:N.map((function(e){var t=e.path,i=e.label;return e.showInMenu?Object(f.jsx)(r.b,{to:t,exact:!0,className:n.link,activeClassName:n.activeLink,onClick:o,replace:!0,children:i},t):null}))})}var z={toggleVisible:C},S=Object(l.b)((function(e){return{visible:e.navMenu.visible}}),z)((function(e){var t=e.visible,n=e.toggleVisible,o=M(),i=function(){return n(!t)};return Object(f.jsxs)("div",{className:o.NavMenu,children:[Object(f.jsx)("button",{className:o.navMenuButton,type:"button",onClick:i,children:t?"Hide menu":"Show menu"}),t&&Object(f.jsx)(y,{onToggleVisible:i})]})})),L=n(3),I=Object(d.a)({Content:Object(b.a)({padding:15,height:"calc(100vh - 60px)",overflow:"scroll"},"@media (min-width: ".concat(u,"px)"),{padding:30})});function B(){var e=I();return Object(f.jsx)("div",{className:e.Content,children:Object(f.jsx)(o.Suspense,{fallback:Object(f.jsx)("p",{children:"Content Loading..."}),children:Object(f.jsxs)(L.d,{children:[N.map((function(e){var t=e.path,n=e.exact,o=e.component;return Object(f.jsx)(L.b,{path:t,exact:n,component:o},t)})),Object(f.jsx)(L.a,{to:"/"})]})})})}var H=Object(d.a)({App:Object(b.a)({position:"relative",minHeight:"100vh",width:"100%",margin:"0 auto"},"@media (min-width: ".concat(h,"px)"),{maxWidth:1440})});function T(){var e=H();return Object(f.jsxs)("div",{className:e.App,children:[Object(f.jsx)(x,{}),Object(f.jsx)(B,{}),Object(f.jsx)(S,{})]})}var A=n(21),V=n(13),R=n(30),W=n.n(R),D=n(31),J=n.n(D),E=Object(w.c)({visible:!1},Object(b.a)({},C,(function(e,t){return{visible:t.payload}}))),P=[].concat(Object(A.a)(Object(w.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),[J.a]),q={key:"navMenu",storage:W.a},F=Object(w.a)({reducer:{navMenu:Object(V.g)(q,E)},middleware:P,devTools:!1}),G={store:F,persistor:Object(V.h)(F)};n(49),n(50);a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(l.a,{store:G.store,children:Object(f.jsx)(s.a,{loading:Object(f.jsx)("p",{children:"Loading..."}),persistor:G.persistor,children:Object(f.jsx)(r.a,{children:Object(f.jsx)(T,{})})})})}),document.getElementById("root"))}},[[51,5,6]]]);
//# sourceMappingURL=main.0ffb657e.chunk.js.map