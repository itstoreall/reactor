(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[4],{144:function(e){e.exports=JSON.parse('{"techIcons":["#react","#redux","#nodejs","#js","#sass","#html"],"avatar":{"name":"Serhii Stanislav","position":"Front-end Developer"},"contacts":{"phone":"+38 (067) 518 3309","phone_href":"tel:+380675183309","email":"serhiistanislav@gmail.com","email_href":"mailto:serhiistanislav@gmail.com","social":[{"title":"Telegram","icon":"#telegram","link":"https://t.me/serhiistanislav"},{"title":"Facebook","icon":"#fb","link":"https://www.facebook.com/SerhiiStanislav/"},{"title":"GitHub","icon":"#github","link":"https://github.com/itstoreall"},{"title":"Linkedin","icon":"#in","link":"https://www.linkedin.com/in/serhiistanislav/"}]},"skills":{"tech":["HTML","CSS","Git","JavaScript","React","Node.js","Scrum","Agile"],"soft":["GTD","Teamwork","Result-oriented"]},"downloadResume":{"fexUrl":"https://fs7.fex.net:443/download/3394039776"},"summary":"Since 2015 I developed websites in Webflow at freelance. These were simple projects using HTML/CSS. At the beginning of 2020, I started my studies at the GoIT school, where I had experience in teamwork and coding for over a year. I prefer to use React, Redux and JavaScript in development. In the stack of these technologies, I can be most effective as a front-end developer for remote work","jobs":[{"position":"Front-end developer","company":"at Freelance","date":"September 2020 - up to now","specialization":["Website development","SPA development (React/Redux)","REST API (Node.js)","Teamwork"]},{"position":"Web Designer","company":"at Freelance","date":"December 2014 - August 2020","specialization":["Website development (Webflow)","Landing page development (Adobe Muse)","Layout HTML/CSS"]}],"education":[{"subject":"Node.js","institute":"GoIT Course","date":"April - July 2021"},{"subject":"React","institute":"GoIT Course","date":"January - April 2021"},{"subject":"JavaScript","institute":"GoIT Course","date":"September - December 2020"},{"subject":"HTML/CSS","institute":"GoIT Course","date":"May - August 2020"},{"subject":"Web Design (Adobe Muse)","institute":"Computer Academy \xabKademika\xbb Course","date":"October - January 2016"},{"subject":"Computer graphics design","institute":"Pro Course","date":"June - August 2014"},{"subject":"Practical psychology","institute":"Open International University of Human Development \xabUkraine\xbb","date":"Septermber 2006 - June 2011"}],"languages":["English (Pre-Intermediate)","Ukrainian (Native)","Russian (Native)"]}')},152:function(e,t,a){"use strict";function i(e){var t=e.theme,a=e.name,i=e.props;if(!t||!t.props||!t.props[a])return i;var n,c=t.props[a];for(n in c)void 0===i[n]&&(i[n]=c[n]);return i}a.d(t,"a",(function(){return i}))},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(0),n=a.n(i);var c=n.a.createContext(null);function o(){return n.a.useContext(c)}},200:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(0),c=a(163),o=a(152);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(c.a)(),s=Object(o.a)({theme:a,name:"MuiUseMediaQuery",props:{}});var r="function"===typeof e?e(a):e;r=r.replace(/^@media( ?)/m,"");var d="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,l=Object(i.a)({},s,t),m=l.defaultMatches,h=void 0!==m&&m,p=l.matchMedia,j=void 0===p?d?window.matchMedia:null:p,b=l.noSsr,x=void 0!==b&&b,u=l.ssrMatchMedia,f=void 0===u?null:u,g=n.useState((function(){return x&&d?j(r).matches:f?f(r).matches:h})),O=g[0],w=g[1];return n.useEffect((function(){var e=!0;if(d){var t=j(r),a=function(){e&&w(t.matches)};return a(),t.addListener(a),function(){e=!1,t.removeListener(a)}}}),[r,j,d]),O}var r,d,l,m,h,p,j,b,x,u,f,g,O,w,v,k,y=a(3),S=a(38),C=a(1),M=function(e){var t=e.icon;return Object(C.jsx)("li",{children:Object(C.jsx)("svg",{children:Object(C.jsx)("use",{href:S.a+t})})})},B=a(8),L=a(21),W=Object(L.a)({TechIconList:(l={display:"flex"},Object(B.a)(l,"@media (max-width: ".concat(y.a.desktopMax,"px)"),{justifyContent:"center"}),Object(B.a)(l,"@media (min-width: ".concat(y.a.desktop,"px)"),{marginBottom:50}),Object(B.a)(l,"& li",{"&:not(:last-child)":(r={marginRight:15},Object(B.a)(r,"@media (min-width: ".concat(y.a.mobile,"px and (max-width: ").concat(y.a.mobileMax,"px))"),{marginRight:20}),Object(B.a)(r,"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{marginRight:25}),Object(B.a)(r,"@media (min-width: ".concat(y.a.desktop,"px)"),{marginRight:20}),r)}),Object(B.a)(l,"& svg",(d={width:30,height:30,fill:y.a.primaryYellow},Object(B.a)(d,"@media (min-width: ".concat(y.a.mobile,"px)"),{width:35,height:35}),Object(B.a)(d,"@media (min-width: ".concat(y.a.mobilePlus,"px)"),{width:43,height:43}),Object(B.a)(d,"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{width:50,height:50}),Object(B.a)(d,"@media (min-width: ".concat(y.a.desktop,"px)"),{width:35}),d)),l),ResumeContent:Object(B.a)({width:"100%"},"@media (min-width: ".concat(y.a.desktop,"px)"),{display:"flex",justifyContent:"center"}),aside:(m={paddingBottom:30},Object(B.a)(m,"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{display:"flex",flexWrap:"wrap"}),Object(B.a)(m,"@media (min-width: ".concat(y.a.desktop,"px)"),{paddingTop:110,paddingRight:50,width:320,height:"100vh",borderRight:"1px solid ".concat(y.a.secondaryBg),overflow:"scroll","-ms-overflow-style":"none","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}),m),avatar:(h={paddingBottom:40,borderBottom:"1px solid ".concat(y.a.secondaryBg)},Object(B.a)(h,"@media (max-width: ".concat(y.a.desktopMax,"px)"),{paddingTop:100}),Object(B.a)(h,"@media (min-width: ".concat(y.a.mobile,"px)"),{minHeight:460}),Object(B.a)(h,"@media (min-width: ".concat(y.a.mobilePlus,"px)"),{minHeight:490}),Object(B.a)(h,"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{paddingBottom:60,width:"100%",minHeight:540}),Object(B.a)(h,"@media (min-width: ".concat(y.a.desktop,"px)"),{display:"flex",justifyContent:"center",minHeight:290}),Object(B.a)(h,"& img",Object(B.a)({display:"block",borderRadius:"50%"},"@media (max-width: ".concat(y.a.desktopMax,"px)"),{margin:"0 auto 30px"})),Object(B.a)(h,"& h1",{marginBottom:10,fontSize:32,fontWeight:600,textAlign:"center"}),Object(B.a)(h,"& b",Object(B.a)({display:"block",marginBottom:30,fontSize:22,fontWeight:400,textAlign:"center",color:y.a.primaryColor},"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{marginBottom:50})),h),contacts:(x={padding:"30px 0",borderBottom:"1px solid ".concat(y.a.secondaryBg)},Object(B.a)(x,"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{width:300,borderRight:"1px solid ".concat(y.a.secondaryBg)}),Object(B.a)(x,"& h2",(p={marginBottom:20,fontSize:24,fontWeight:600},Object(B.a)(p,"@media (min-width: ".concat(y.a.mobile,"px)"),{fontSize:24}),Object(B.a)(p,"@media (min-width: ".concat(y.a.mobilePlus,"px)"),{fontSize:26}),Object(B.a)(p,"@media (min-width: ".concat(y.a.desktop,"px)"),{fontSize:22}),p)),Object(B.a)(x,"& ul",{marginBottom:30,"& li":(b={color:y.a.secondaryWhiteColor,"&:not(:last-child)":Object(B.a)({marginBottom:10},"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{marginBottom:20})},Object(B.a)(b,"@media (min-width: ".concat(y.a.mobile,"px)"),{fontSize:20}),Object(B.a)(b,"@media (min-width: ".concat(y.a.mobilePlus,"px)"),{fontSize:22}),Object(B.a)(b,"@media (min-width: ".concat(y.a.desktop,"px)"),{fontSize:16}),Object(B.a)(b,"& a",(j={paddingLeft:10,fontWeight:400,color:y.a.linkColor},Object(B.a)(j,"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{display:"block",paddingTop:7,paddingLeft:0,fontSize:20}),Object(B.a)(j,"&:hover",{color:y.a.primaryWhiteColor}),j)),b)}),x),socialList:{display:"flex","& span:not(:last-child)":Object(B.a)({marginRight:25},"@media (min-width: ".concat(y.a.tablet,"px)"),{marginRight:20}),"& span a":{display:"block","& svg":(u={fill:y.a.linkColor,width:30,height:30},Object(B.a)(u,"@media (min-width: ".concat(y.a.desktop,"px)"),{width:25,height:25}),Object(B.a)(u,"&:hover",{fill:y.a.primaryWhiteColor}),u)}},skillsWrap:(w={padding:"30px 0",borderBottom:"1px solid ".concat(y.a.secondaryBg)},Object(B.a)(w,"@media (min-width: ".concat(y.a.mobile,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{display:"flex","& section":{width:"50%"}}),Object(B.a)(w,"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{padding:0}),Object(B.a)(w,"& section",(f={},Object(B.a)(f,"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{width:190,padding:"30px 0"}),Object(B.a)(f,"&:not(:last-child)",Object(B.a)({marginBottom:30},"@media (min-width: ".concat(y.a.mobile,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{marginBottom:0,borderRight:"1px solid ".concat(y.a.secondaryBg)})),Object(B.a)(f,"&:last-child",Object(B.a)({},"@media (min-width: ".concat(y.a.mobile,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{paddingLeft:20})),Object(B.a)(f,"&:first-child",Object(B.a)({},"@media (min-width: ".concat(y.a.tablet,"px) and (max-width: ").concat(y.a.desktopMax,"px)"),{paddingLeft:20})),f)),Object(B.a)(w,"& h2",(g={marginBottom:20,fontSize:22,fontWeight:600},Object(B.a)(g,"@media (min-width: ".concat(y.a.mobile,"px)"),{fontSize:24}),Object(B.a)(g,"@media (min-width: ".concat(y.a.mobilePlus,"px)"),{fontSize:26}),Object(B.a)(g,"@media (min-width: ".concat(y.a.desktop,"px)"),{fontSize:22}),g)),Object(B.a)(w,"& ul",{"& li":(O={fontSize:20,color:y.a.secondaryWhiteColor},Object(B.a)(O,"@media (min-width: ".concat(y.a.desktop,"px)"),{fontSize:16}),Object(B.a)(O,"&:not(:last-child)",{marginBottom:10}),O)}),w),downloadResume:(v={padding:"30px 0"},Object(B.a)(v,"@media (max-width: ".concat(y.a.tabletMax,"px)"),{paddingBottom:80}),Object(B.a)(v,"& > a",{display:"inline-flex",alignItems:"center","& svg":{marginRight:12,width:20,height:20,fill:y.a.linkColor}}),Object(B.a)(v,"& > a:hover",{color:y.a.primaryWhiteColor,"& > svg":{fill:y.a.primaryWhiteColor}}),v),mainContent:(k={},Object(B.a)(k,"@media (min-width: ".concat(y.a.tablet,"px)"),{paddingBottom:60}),Object(B.a)(k,"@media (min-width: ".concat(y.a.desktop,"px)"),{paddingTop:110,paddingLeft:50,width:550,height:"100vh",overflow:"scroll","-ms-overflow-style":"none","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}),Object(B.a)(k,"& section",{"&:not(:last-child)":{marginBottom:40},"& h1":{marginBottom:10},"& b":{display:"block",marginBottom:30,fontSize:22,fontWeight:400,color:y.a.primaryColor},"& h2":{marginBottom:30},"& h3":{marginBottom:10,lineHeight:1.4,"& span":{fontWeight:400,color:y.a.primaryColor}},"& ul":{paddingLeft:30,listStyleType:"disc",color:y.a.secondaryWhiteColor,"& li":{lineHeight:1.4,"&:not(:last-child)":{marginBottom:5}}},"& a:hover":{color:y.a.primaryWhiteColor}}),k),summary:{marginBottom:30,lineHeight:1.6,color:y.a.secondaryWhiteColor},certificateLink:{display:"inline-flex",alignItems:"center","& svg":{marginRight:7,width:26,height:26,fill:y.a.linkColor},"&:hover svg":{fill:y.a.primaryWhiteColor}},projectLink:{display:"inline-flex",alignItems:"center",paddingLeft:4,color:y.a.linkColor,"& svg":{marginRight:10,width:26,height:26,fill:y.a.linkColor},"&:hover svg":{fill:y.a.primaryWhiteColor}},date:{fontSize:15,fontStyle:"italic",color:y.a.trinityWhiteColor},jobListWrap:{"&:not(:last-child)":{marginBottom:30},"& p":{marginBottom:20}},education:{"& div":{marginBottom:30}}}),N=function(e){var t=e.techIcons,a=W();return Object(C.jsx)("ul",{className:a.TechIconList,children:null===t||void 0===t?void 0:t.map((function(e){return Object(C.jsx)(M,{icon:e},e)}))})},R=a.p+"static/media/serhiistanislav_900.c19376c2.jpg",I=function(e){var t=e.desktopMax,a=e.resume,i=a.avatar,n=i.name,c=i.position,o=W();return Object(C.jsxs)("section",{className:o.avatar,children:[Object(C.jsx)("img",{src:R,alt:"primaryContentSerhii Stanislav",width:"250",height:"250"}),t&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:n}),Object(C.jsx)("b",{children:c})]}),t&&Object(C.jsx)(N,{techIcons:a.techIcons})]})},T=function(e){var t=e.icon,a=e.link,i=e.title;return Object(C.jsx)("span",{children:Object(C.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",title:i,children:Object(C.jsx)("svg",{children:Object(C.jsx)("use",{href:S.a+t})})})},t)},z=function(e){var t=e.tablet,a=e.desktop,i=e.resume.contacts,n=i.phone,c=i.phone_href,o=i.email,s=i.social,r=i.email_href,d=W();return Object(C.jsxs)("section",{className:d.contacts,children:[Object(C.jsx)("h2",{children:"Contacts:"}),Object(C.jsxs)("ul",{className:d.contactList,children:[Object(C.jsxs)("li",{children:["Phone:",t&&!a&&Object(C.jsx)("br",{}),Object(C.jsx)("a",{className:d.contactLink,href:c,children:n})]}),Object(C.jsxs)("li",{children:["E-mail:",t&&!a&&Object(C.jsx)("br",{}),Object(C.jsx)("a",{className:d.contactLink,href:r,children:o})]})]}),Object(C.jsx)("div",{className:d.socialList,children:s.map((function(e){var t=e.title,a=e.icon,i=e.link;return Object(C.jsx)(T,{title:t,icon:a,link:i},t)}))})]})},P=function(e){var t=e.resume.skills,a=t.tech,i=t.soft,n=W();return Object(C.jsxs)("div",{className:n.skillsWrap,children:[Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Tech skills:"}),Object(C.jsx)("ul",{children:a.map((function(e){return Object(C.jsx)("li",{children:e},e)}))})]}),Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Soft skills:"}),Object(C.jsx)("ul",{children:i.map((function(e){return Object(C.jsx)("li",{children:e},e)}))})]})]})},A=a.p+"static/media/serhii_stanislav_resume.bd590c2b.pdf",H=function(){var e=W();return Object(C.jsx)("div",{className:e.downloadResume,children:Object(C.jsxs)("a",{className:e.downloadResumeLink,href:A,download:!0,children:[Object(C.jsx)("svg",{children:Object(C.jsx)("use",{href:"".concat(S.a,"#pdf")})}),"Download resume PDF"]})})},J=a.p+"static/media/serhii_stanislav-goit_certificate.d41f710c.jpg",_=function(e){var t=e.desktop,a=e.resume,i=a.summary,n=a.avatar,c=n.name,o=n.position,s=W();return Object(C.jsxs)("section",{className:s.enter,children:[t&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:c}),Object(C.jsx)("b",{children:o})]}),Object(C.jsx)("p",{className:s.summary,children:i}),Object(C.jsxs)("a",{className:s.certificateLink,href:J,target:"_blank",rel:"noreferrer",children:[Object(C.jsx)("svg",{children:Object(C.jsx)("use",{href:"".concat(S.a,"#certificate")})}),"Certificate"]})]})},D=function(){var e=W();return Object(C.jsxs)("section",{className:e.Projects,children:[Object(C.jsx)("h2",{children:"Project experience:"}),Object(C.jsxs)("a",{className:e.projectLink,href:"#/portfolio",children:[Object(C.jsx)("svg",{children:Object(C.jsx)("use",{href:"".concat(S.a,"#code")})}),"Projects"]})]})},F=function(e){var t=e.resume,a=W();return Object(C.jsxs)("section",{className:a.jobs,children:[Object(C.jsx)("h2",{children:"Employment history:"}),t.jobs.map((function(e){var t=e.position,i=e.company,n=e.date,c=e.specialization;return Object(C.jsxs)("div",{className:a.jobListWrap,children:[Object(C.jsxs)("h3",{children:[t," ",Object(C.jsx)("span",{children:i})]}),Object(C.jsx)("p",{className:a.date,children:n}),Object(C.jsx)("ul",{children:null===c||void 0===c?void 0:c.map((function(e){return Object(C.jsx)("li",{children:e},e)}))})]},n)}))]})},G=function(e){var t=e.resume,a=W();return Object(C.jsxs)("section",{className:a.education,children:[Object(C.jsx)("h2",{children:"Education:"}),t.education.map((function(e){var t=e.subject,i=e.institute,n=e.date;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("h3",{children:[t,", ",Object(C.jsx)("span",{children:i})]}),Object(C.jsx)("p",{className:a.date,children:n})]},t)}))]})},E=function(e){var t=e.resume.languages;return Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Languages:"}),Object(C.jsx)("ul",{children:t.map((function(e){return Object(C.jsx)("li",{children:e},e)}))})]})},U=a(144),K=function(){var e=W(),t=function(e){return"(max-width:".concat(e,"px) ")},a=function(e){return"(min-width:".concat(e,"px) ")},i=s(t(y.a.mobilePlusMax)),n=s(a(y.a.mobilePlus)),c=s(a(y.a.tablet)),o=s(t(y.a.desktopMax)),r=s(a(y.a.desktop));return Object(C.jsxs)("div",{className:e.ResumeContent,children:[Object(C.jsxs)("aside",{className:e.aside,children:[Object(C.jsx)(I,{mobilePlusMax:i,mobilePlus:n,desktopMax:o,resume:U}),Object(C.jsx)(z,{tablet:c,desktop:r,resume:U}),Object(C.jsx)(P,{resume:U}),r&&Object(C.jsx)(H,{})]}),Object(C.jsxs)("div",{className:e.mainContent,children:[r&&Object(C.jsx)(N,{techIcons:U.techIcons}),Object(C.jsx)(_,{desktop:r,resume:U}),Object(C.jsx)(D,{}),Object(C.jsx)(F,{resume:U}),Object(C.jsx)(G,{resume:U}),Object(C.jsx)(E,{resume:U}),!r&&Object(C.jsx)(H,{})]})]})},Q=function(){return Object(C.jsx)(K,{})};t.default=function(){return Object(C.jsx)(Q,{resume:U})}}}]);
//# sourceMappingURL=Resume.cfbc80af.chunk.js.map