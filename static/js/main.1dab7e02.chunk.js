(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[4],{50:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),a=t(18),i=t.n(a),r=t(14),l=t(20),s=t(29),b=t(13),d=Object(b.a)({Header:{padding:"20px 0 20px 30px"},logoLink:{fontSize:18,fontWeight:600,letterSpacing:3,textTransform:"uppercase",color:"#9697b6"}}),u=t(2);function j(){var e=d();return Object(u.jsx)("header",{className:e.Header,children:Object(u.jsx)(r.b,{className:e.logoLink,to:"/",replace:!0,children:"Reactor"})})}var p=t(15),h=Object(p.b)("navMenu/visible"),g=t(16),v="#2c3139",f="#9697b6",O="#9697b6",x=Object(b.a)({NavMenu:{position:"absolute",top:0,right:0},navMenuButton:{position:"absolute",top:11,right:10,width:120,padding:{top:10,left:10,right:10,bottom:10},fontSize:14,fontWeight:500,textTransform:"uppercase",cursor:"pointer",color:O,backgroundColor:v,border:"2px solid ".concat(f),borderRadius:4,outline:"none","&:hover":{backgroundColor:f,color:"#fff"}},Navigation:Object(g.a)({display:"flex",flexDirection:"column",width:"100vw",height:"100vh",listStyle:"none",margin:0,padding:10,paddingTop:100,minWidth:130,overflow:"auto",backgroundColor:"#2b2c30"},"@media (min-width: ".concat(414,"px)"),{width:250}),link:{backgroundColor:"inherit",textDecoration:"none",padding:10,fontSize:16,color:O,borderRadius:4,"&:not(:last-child)":{marginBottom:5},"&:hover":{color:"#fff",backgroundColor:f}},activeLink:{backgroundColor:v,color:"#f1f1f1","&:hover":{color:"#fff",backgroundColor:v}}}),m=[{path:"/",label:"Home",component:Object(o.lazy)((function(){return t.e(3).then(t.bind(null,91))})),exact:!0,showInMenu:!0},{path:"/applications",label:"Applications",component:Object(o.lazy)((function(){return t.e(0).then(t.bind(null,92))})),showInMenu:!0},{path:"/books",label:"Books",component:Object(o.lazy)((function(){return Promise.all([t.e(7),t.e(1)]).then(t.bind(null,90))})),showInMenu:!0},{path:"/contacts",label:"Contacts",component:Object(o.lazy)((function(){return t.e(2).then(t.bind(null,93))})),showInMenu:!0}];function k(e){var n=e.onToggleVisible,t=x(),o=function(){return n()};return Object(u.jsx)("div",{className:t.Navigation,children:m.map((function(e){var n=e.path,c=e.label;return e.showInMenu?Object(u.jsx)(r.b,{to:n,exact:!0,className:t.link,activeClassName:t.activeLink,onClick:o,replace:!0,children:c},n):null}))})}var w={toggleVisible:h},C=Object(l.b)((function(e){return{visible:e.navMenu.visible}}),w)((function(e){var n=e.visible,t=e.toggleVisible,o=x(),c=function(){return t(!n)};return Object(u.jsxs)("div",{className:o.NavMenu,children:[Object(u.jsx)("button",{className:o.navMenuButton,type:"button",onClick:c,children:n?"Hide menu":"Show menu"}),n&&Object(u.jsx)(k,{onToggleVisible:c})]})})),M=t(3),N=Object(b.a)({Content:{padding:30}});function y(){var e=N();return Object(u.jsx)("div",{className:e.Content,children:Object(u.jsx)(o.Suspense,{fallback:Object(u.jsx)("p",{children:"Content Loading..."}),children:Object(u.jsxs)(M.d,{children:[m.map((function(e){var n=e.path,t=e.exact,o=e.component;return Object(u.jsx)(M.b,{path:n,exact:t,component:o},n)})),Object(u.jsx)(M.a,{to:"/"})]})})})}var z=Object(b.a)({App:Object(g.a)({position:"relative",height:"100vh",width:"100%",margin:"0 auto",backgroundColor:"#2c3139"},"@media (min-width: ".concat(900,"px)"),{maxWidth:1440})});function S(){var e=z();return Object(u.jsxs)("div",{className:e.App,children:[Object(u.jsx)(j,{}),Object(u.jsx)(y,{}),Object(u.jsx)(C,{})]})}var I=t(21),L=t(12),T=t(30),B=t.n(T),A=t(31),H=t.n(A),V=Object(p.c)({visible:!1},Object(g.a)({},h,(function(e,n){return{visible:n.payload}}))),W=[].concat(Object(I.a)(Object(p.d)({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}})),[H.a]),R={key:"navMenu",storage:B.a},D=Object(p.a)({reducer:{navMenu:Object(L.g)(R,V)},middleware:W,devTools:!1}),J={store:D,persistor:Object(L.h)(D)};t(49),t(50);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l.a,{store:J.store,children:Object(u.jsx)(s.a,{loading:Object(u.jsx)("p",{children:"Loading..."}),persistor:J.persistor,children:Object(u.jsx)(r.a,{children:Object(u.jsx)(S,{})})})})}),document.getElementById("root"))}},[[51,5,6]]]);
//# sourceMappingURL=main.1dab7e02.chunk.js.map