(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[5],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(19),c=n.n(a),r=n(16),l=n(15),s=n(29),d=n(7),b=n(14),u="768",h="900",p="#9697b6",j="#212225",v="#fff",g="#2c3139",m="#9697b6",O=Object(b.a)({Header:Object(d.a)({paddingLeft:15,display:"flex",alignItems:"center",height:60},"@media (min-width: ".concat(u,"ps)"),{paddingLeft:30}),logoLink:{fontSize:18,fontWeight:600,letterSpacing:3,textTransform:"uppercase",color:p}}),f=n(2);function x(){var e=O();return Object(f.jsx)("header",{className:e.Header,children:Object(f.jsx)(r.c,{className:e.logoLink,to:"/",replace:!0,children:"Reactor"})})}var w,k=n(17),M=Object(k.b)("navMenu/visible"),N=Object(b.a)({backdrop:Object(d.a)({position:"fixed",top:0,right:0,width:"100%",height:"100vh",backgroundColor:"yellow",overflow:"scroll"},"@media (min-width: ".concat(u,"px)"),{width:220}),NavMenu:{position:"relative"},navMenuButton:{position:"fixed",top:11,right:10,width:120,padding:{top:10,left:10,right:10,bottom:10},fontSize:14,fontWeight:500,textTransform:"uppercase",cursor:"pointer",color:p,backgroundColor:g,border:"2px solid ".concat(m),borderRadius:4,outline:"none","&:hover":{backgroundColor:m,color:v}},activeNavMenuButton:{composes:"navMenuButton",position:"fixed",top:11,right:10,width:120,padding:{top:12,left:12,right:12,bottom:12},fontSize:14,fontWeight:500,textTransform:"uppercase",cursor:"pointer",color:v,backgroundColor:g,border:"none",borderRadius:4,outline:"none","&:hover":{backgroundColor:m}},Navigation:Object(d.a)({display:"flex",flexDirection:"column",width:"100vw",minHeight:"100vh",listStyle:"none",margin:0,padding:{top:100,left:40,right:40,bottom:40}},"@media (min-width: ".concat(u,"px)"),{padding:{top:100,left:10,right:10,bottom:20},width:220}),link:(w={backgroundColor:"inherit",textDecoration:"none",padding:15,fontSize:22,color:j,borderRadius:4},Object(d.a)(w,"@media (min-width: ".concat(u,"px)"),{fontSize:16}),Object(d.a)(w,"&:not(:last-child)",{marginBottom:5}),Object(d.a)(w,"&:hover",{color:v,backgroundColor:m}),w),activeLink:{backgroundColor:g,color:v,"&:hover":{color:v,backgroundColor:g}}}),C=Object(o.lazy)((function(){return n.e(4).then(n.bind(null,93))})),y=Object(o.lazy)((function(){return n.e(0).then(n.bind(null,92))})),z=[{path:"/",label:"Home",component:C,exact:!0,showInMenu:!0},{path:"/applications/books/:bookId",label:"Book Details",component:Object(o.lazy)((function(){return n.e(2).then(n.bind(null,90))})),showInMenu:!1},{path:"/applications/books",label:"Books",component:Object(o.lazy)((function(){return Promise.all([n.e(8),n.e(1)]).then(n.bind(null,91))})),showInMenu:!1},{path:"/applications",label:"Applications",component:y,showInMenu:!0},{path:"/contacts",label:"Contacts",component:Object(o.lazy)((function(){return n.e(3).then(n.bind(null,94))})),showInMenu:!0}];function S(e){var t=e.onToggleVisible,n=N(),o=function(){return t()};return Object(f.jsx)("div",{className:n.Navigation,children:z.map((function(e){var t=e.path,i=e.label;return e.showInMenu?Object(f.jsx)(r.c,{to:t,exact:!0,className:n.link,activeClassName:n.activeLink,onClick:o,replace:!0,children:i},t):null}))})}var B={toggleVisible:M},I=Object(l.b)((function(e){return{visible:e.navMenu.visible}}),B)((function(e){var t=e.visible,n=e.toggleVisible,o=N(),i=function(){return n(!t)};return Object(f.jsxs)(f.Fragment,{children:[t&&Object(f.jsx)("div",{className:o.backdrop,children:Object(f.jsx)("div",{className:o.NavMenu,children:t&&Object(f.jsx)(S,{onToggleVisible:i})})}),Object(f.jsx)("button",{className:t?o.activeNavMenuButton:o.navMenuButton,type:"button",onClick:i,children:t?"Hide menu":"Show menu"})]})})),L=n(3),H=Object(b.a)({Content:Object(d.a)({padding:15,height:"calc(100vh - 60px)"},"@media (min-width: ".concat(u,"px)"),{padding:30}),NavMenu:Object(d.a)({padding:15,height:"calc(100vh - 60px)",overflow:"hidden"},"@media (min-width: ".concat(u,"px)"),{padding:30})}),T=Object(l.b)((function(e){return{visible:e.navMenu.visible}}))((function(e){var t=e.visible,n=H();return Object(f.jsx)("div",{className:t?n.NavMenu:n.Content,children:Object(f.jsx)(o.Suspense,{fallback:Object(f.jsx)("p",{children:"Content Loading..."}),children:Object(f.jsxs)(L.d,{children:[z.map((function(e){var t=e.path,n=e.exact,o=e.component;return Object(f.jsx)(L.b,{path:t,exact:n,component:o},t)})),Object(f.jsx)(L.a,{to:"/"})]})})})})),W=Object(b.a)({App:Object(d.a)({position:"relative",minHeight:"100vh",width:"100%",margin:"0 auto"},"@media (min-width: ".concat(h,"px)"),{maxWidth:1440}),NavMenu:Object(d.a)({position:"relative",minHeight:"100vh",width:"100%",margin:"0 auto",overflow:"hidden"},"@media (min-width: ".concat(h,"px)"),{maxWidth:1440})}),A=Object(l.b)((function(e){return{visible:e.navMenu.visible}}))((function(e){e.visible;var t=W();return Object(f.jsxs)("div",{className:t.App,children:[Object(f.jsx)(x,{}),Object(f.jsx)(T,{}),Object(f.jsx)(I,{})]})})),R=n(21),V=n(13),D=n(30),J=n.n(D),E=n(31),F=n.n(E),P=Object(k.c)({visible:!1},Object(d.a)({},M,(function(e,t){return{visible:t.payload}}))),q=[].concat(Object(R.a)(Object(k.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),[F.a]),G={key:"navMenu",storage:J.a},K=Object(k.a)({reducer:{navMenu:Object(V.g)(G,P)},middleware:q,devTools:!1}),Q={store:K,persistor:Object(V.h)(K)};n(49),n(50);c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(l.a,{store:Q.store,children:Object(f.jsx)(s.a,{loading:Object(f.jsx)("p",{children:"Loading..."}),persistor:Q.persistor,children:Object(f.jsx)(r.a,{children:Object(f.jsx)(A,{})})})})}),document.getElementById("root"))}},[[51,6,7]]]);
//# sourceMappingURL=main.7aca3b69.chunk.js.map