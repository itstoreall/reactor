(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[2],{108:function(e,t,a){"use strict";function i(e){var t=e.theme,a=e.name,i=e.props;if(!t||!t.props||!t.props[a])return i;var n,c=t.props[a];for(n in c)void 0===i[n]&&(i[n]=c[n]);return i}a.d(t,"a",(function(){return i}))},133:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(0),n=a.n(i);var c=n.a.createContext(null);function o(){return n.a.useContext(c)}},170:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(0),c=a(133),o=a(108);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(c.a)(),s=Object(o.a)({theme:a,name:"MuiUseMediaQuery",props:{}});var r="function"===typeof e?e(a):e;r=r.replace(/^@media( ?)/m,"");var d="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,l=Object(i.a)({},s,t),m=l.defaultMatches,h=void 0!==m&&m,p=l.matchMedia,j=void 0===p?d?window.matchMedia:null:p,b=l.noSsr,x=void 0!==b&&b,u=l.ssrMatchMedia,f=void 0===u?null:u,g=n.useState((function(){return x&&d?j(r).matches:f?f(r).matches:h})),O=g[0],w=g[1];return n.useEffect((function(){var e=!0;if(d){var t=j(r),a=function(){e&&w(t.matches)};return a(),t.addListener(a),function(){e=!1,t.removeListener(a)}}}),[r,j,d]),O}var r,d,l,m,h,p,j,b,x,u,f,g,O,w,v,k=a(3),y=a.p+"static/media/sprite.27cdf64d.svg",S=a(2),C=function(e){var t=e.icon;return Object(S.jsx)("li",{children:Object(S.jsx)("svg",{children:Object(S.jsx)("use",{href:y+t})})})},M=a(11),B=a(18),L=Object(B.a)({TechIconList:(l={display:"flex"},Object(M.a)(l,"@media (max-width: ".concat(k.a.desktopMax,"px)"),{justifyContent:"center"}),Object(M.a)(l,"@media (min-width: ".concat(k.a.desktop,"px)"),{marginBottom:50}),Object(M.a)(l,"& li",{"&:not(:last-child)":(r={marginRight:15},Object(M.a)(r,"@media (min-width: ".concat(k.a.mobile,"px and (max-width: ").concat(k.a.mobileMax,"px))"),{marginRight:20}),Object(M.a)(r,"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{marginRight:25}),Object(M.a)(r,"@media (min-width: ".concat(k.a.desktop,"px)"),{marginRight:20}),r)}),Object(M.a)(l,"& svg",(d={width:30,height:30,fill:k.a.primaryYellow},Object(M.a)(d,"@media (min-width: ".concat(k.a.mobile,"px)"),{width:35,height:35}),Object(M.a)(d,"@media (min-width: ".concat(k.a.mobilePlus,"px)"),{width:43,height:43}),Object(M.a)(d,"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{width:50,height:50}),Object(M.a)(d,"@media (min-width: ".concat(k.a.desktop,"px)"),{width:35}),d)),l),ResumeContent:Object(M.a)({width:"100%"},"@media (min-width: ".concat(k.a.desktop,"px)"),{display:"flex",justifyContent:"center"}),aside:(m={paddingTop:100,paddingBottom:30},Object(M.a)(m,"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{display:"flex",flexWrap:"wrap"}),Object(M.a)(m,"@media (min-width: ".concat(k.a.desktop,"px)"),{paddingTop:110,paddingRight:50,width:320,height:"100vh",borderRight:"1px solid ".concat(k.a.secondaryBg),overflow:"scroll","-ms-overflow-style":"none","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}),m),avatar:(h={paddingBottom:40,borderBottom:"1px solid ".concat(k.a.secondaryBg)},Object(M.a)(h,"@media (min-width: ".concat(k.a.mobile,"px)"),{minHeight:460}),Object(M.a)(h,"@media (min-width: ".concat(k.a.mobilePlus,"px)"),{minHeight:490}),Object(M.a)(h,"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{paddingBottom:60,width:"100%",minHeight:540}),Object(M.a)(h,"@media (min-width: ".concat(k.a.desktop,"px)"),{display:"flex",justifyContent:"center",minHeight:290}),Object(M.a)(h,"& img",Object(M.a)({display:"block",borderRadius:"50%"},"@media (max-width: ".concat(k.a.desktopMax,"px)"),{margin:"0 auto 30px"})),Object(M.a)(h,"& h1",{marginBottom:10,fontSize:32,fontWeight:600,textAlign:"center"}),Object(M.a)(h,"& b",Object(M.a)({display:"block",marginBottom:30,fontSize:22,fontWeight:400,textAlign:"center",color:k.a.primaryColor},"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{marginBottom:50})),h),contacts:(x={padding:"30px 0",borderBottom:"1px solid ".concat(k.a.secondaryBg)},Object(M.a)(x,"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{width:300,borderRight:"1px solid ".concat(k.a.secondaryBg)}),Object(M.a)(x,"& h2",(p={marginBottom:20,fontSize:24,fontWeight:600},Object(M.a)(p,"@media (min-width: ".concat(k.a.mobile,"px)"),{fontSize:24}),Object(M.a)(p,"@media (min-width: ".concat(k.a.mobilePlus,"px)"),{fontSize:26}),Object(M.a)(p,"@media (min-width: ".concat(k.a.desktop,"px)"),{fontSize:22}),p)),Object(M.a)(x,"& ul",{marginBottom:30,"& li":(b={color:k.a.secondaryWhiteColor,"&:not(:last-child)":Object(M.a)({marginBottom:10},"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{marginBottom:20})},Object(M.a)(b,"@media (min-width: ".concat(k.a.mobile,"px)"),{fontSize:20}),Object(M.a)(b,"@media (min-width: ".concat(k.a.mobilePlus,"px)"),{fontSize:22}),Object(M.a)(b,"@media (min-width: ".concat(k.a.desktop,"px)"),{fontSize:16}),Object(M.a)(b,"& a",(j={paddingLeft:10,fontWeight:400,color:k.a.linkColor},Object(M.a)(j,"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{display:"block",paddingTop:7,paddingLeft:0,fontSize:20}),Object(M.a)(j,"&:hover",{color:k.a.primaryWhiteColor}),j)),b)}),x),socialList:{display:"flex","& span:not(:last-child)":Object(M.a)({marginRight:25},"@media (min-width: ".concat(k.a.tablet,"px)"),{marginRight:20}),"& span a":{display:"block","& svg":(u={fill:k.a.linkColor,width:30,height:30},Object(M.a)(u,"@media (min-width: ".concat(k.a.desktop,"px)"),{width:25,height:25}),Object(M.a)(u,"&:hover",{fill:k.a.primaryWhiteColor}),u)}},skillsWrap:(w={padding:"30px 0",borderBottom:"1px solid ".concat(k.a.secondaryBg)},Object(M.a)(w,"@media (min-width: ".concat(k.a.mobile,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{display:"flex","& section":{width:"50%"}}),Object(M.a)(w,"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{padding:0}),Object(M.a)(w,"& section",(f={},Object(M.a)(f,"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{width:190,padding:"30px 0"}),Object(M.a)(f,"&:not(:last-child)",Object(M.a)({marginBottom:30},"@media (min-width: ".concat(k.a.mobile,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{marginBottom:0,borderRight:"1px solid ".concat(k.a.secondaryBg)})),Object(M.a)(f,"&:last-child",Object(M.a)({},"@media (min-width: ".concat(k.a.mobile,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{paddingLeft:20})),Object(M.a)(f,"&:first-child",Object(M.a)({},"@media (min-width: ".concat(k.a.tablet,"px) and (max-width: ").concat(k.a.desktopMax,"px)"),{paddingLeft:20})),f)),Object(M.a)(w,"& h2",(g={marginBottom:20,fontSize:22,fontWeight:600},Object(M.a)(g,"@media (min-width: ".concat(k.a.mobile,"px)"),{fontSize:24}),Object(M.a)(g,"@media (min-width: ".concat(k.a.mobilePlus,"px)"),{fontSize:26}),Object(M.a)(g,"@media (min-width: ".concat(k.a.desktop,"px)"),{fontSize:22}),g)),Object(M.a)(w,"& ul",{"& li":(O={fontSize:20,color:k.a.secondaryWhiteColor},Object(M.a)(O,"@media (min-width: ".concat(k.a.desktop,"px)"),{fontSize:16}),Object(M.a)(O,"&:not(:last-child)",{marginBottom:10}),O)}),w),downloadResume:{padding:"30px 0","& > a":{display:"inline-flex",alignItems:"center","& svg":{marginRight:12,width:20,height:20,fill:k.a.linkColor}},"& > a:hover":{color:k.a.primaryWhiteColor,"& > svg":{fill:k.a.primaryWhiteColor}}},mainContent:(v={paddingBottom:40},Object(M.a)(v,"@media (min-width: ".concat(k.a.tablet,"px)"),{paddingBottom:60}),Object(M.a)(v,"@media (min-width: ".concat(k.a.desktop,"px)"),{paddingTop:110,paddingLeft:50,width:550,height:"100vh",overflow:"scroll","-ms-overflow-style":"none","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}),Object(M.a)(v,"& section",{"&:not(:last-child)":{marginBottom:40},"& h1":{marginBottom:10},"& b":{display:"block",marginBottom:30,fontSize:22,fontWeight:400,color:k.a.primaryColor},"& h2":{marginBottom:30},"& h3":{marginBottom:10,lineHeight:1.4,"& span":{fontWeight:400,color:k.a.primaryColor}},"& ul":{paddingLeft:30,listStyleType:"disc",color:k.a.secondaryWhiteColor,"& li":{lineHeight:1.4,"&:not(:last-child)":{marginBottom:5}}},"& a:hover":{color:k.a.primaryWhiteColor}}),v),summary:{marginBottom:30,lineHeight:1.6,color:k.a.secondaryWhiteColor},certificateLink:{display:"inline-flex",alignItems:"center","& svg":{marginRight:7,width:26,height:26,fill:k.a.linkColor},"&:hover svg":{fill:k.a.primaryWhiteColor}},projectLink:{display:"inline-flex",alignItems:"center",paddingLeft:4,color:k.a.linkColor,"& svg":{marginRight:10,width:26,height:26,fill:k.a.linkColor},"&:hover svg":{fill:k.a.primaryWhiteColor}},date:{fontSize:15,fontStyle:"italic",color:k.a.trinityWhiteColor},jobListWrap:{"&:not(:last-child)":{marginBottom:30},"& p":{marginBottom:20}},education:{"& div":{marginBottom:30}}}),W=function(e){var t=e.techIcons,a=L();return Object(S.jsx)("ul",{className:a.TechIconList,children:null===t||void 0===t?void 0:t.map((function(e){return Object(S.jsx)(C,{icon:e},e)}))})},N=a.p+"static/media/serhiistanislav_900.c19376c2.jpg",R=function(e){var t=e.desktopMax,a=e.resume,i=a.avatar,n=i.name,c=i.position,o=L();return Object(S.jsxs)("section",{className:o.avatar,children:[Object(S.jsx)("img",{src:N,alt:"primaryContentSerhii Stanislav",width:"250",height:"250"}),t&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{children:n}),Object(S.jsx)("b",{children:c})]}),t&&Object(S.jsx)(W,{techIcons:a.techIcons})]})},I=function(e){var t=e.icon,a=e.link,i=e.title;return Object(S.jsx)("span",{children:Object(S.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",title:i,children:Object(S.jsx)("svg",{children:Object(S.jsx)("use",{href:y+t})})})},t)},T=function(e){var t=e.tablet,a=e.desktop,i=e.resume.contacts,n=i.phone,c=i.phone_href,o=i.email,s=i.social,r=i.email_href,d=L();return Object(S.jsxs)("section",{className:d.contacts,children:[Object(S.jsx)("h2",{children:"Contacts:"}),Object(S.jsxs)("ul",{className:d.contactList,children:[Object(S.jsxs)("li",{children:["Phone:",t&&!a&&Object(S.jsx)("br",{}),Object(S.jsx)("a",{className:d.contactLink,href:c,children:n})]}),Object(S.jsxs)("li",{children:["E-mail:",t&&!a&&Object(S.jsx)("br",{}),Object(S.jsx)("a",{className:d.contactLink,href:r,children:o})]})]}),Object(S.jsx)("div",{className:d.socialList,children:s.map((function(e){var t=e.title,a=e.icon,i=e.link;return Object(S.jsx)(I,{title:t,icon:a,link:i},t)}))})]})},z=function(e){var t=e.resume.skills,a=t.tech,i=t.soft,n=L();return Object(S.jsxs)("div",{className:n.skillsWrap,children:[Object(S.jsxs)("section",{children:[Object(S.jsx)("h2",{children:"Tech skills:"}),Object(S.jsx)("ul",{children:a.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})]}),Object(S.jsxs)("section",{children:[Object(S.jsx)("h2",{children:"Soft skills:"}),Object(S.jsx)("ul",{children:i.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})]})]})},P=a.p+"static/media/serhii_stanislav_resume.3d1859e5.pdf",A=function(){var e=L();return Object(S.jsx)("div",{className:e.downloadResume,children:Object(S.jsxs)("a",{className:e.downloadResumeLink,href:P,download:!0,children:[Object(S.jsx)("svg",{children:Object(S.jsx)("use",{href:"".concat(y,"#pdf")})}),"Download resume PDF"]})})},H=a.p+"static/media/serhii_stanislav-goit_certificate.d41f710c.jpg",J=function(e){var t=e.desktop,a=e.resume,i=a.summary,n=a.avatar,c=n.name,o=n.position,s=L();return Object(S.jsxs)("section",{className:s.enter,children:[t&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{children:c}),Object(S.jsx)("b",{children:o})]}),Object(S.jsx)("p",{className:s.summary,children:i}),Object(S.jsxs)("a",{className:s.certificateLink,href:H,target:"_blank",rel:"noreferrer",children:[Object(S.jsx)("svg",{children:Object(S.jsx)("use",{href:"".concat(y,"#certificate")})}),"Certificate"]})]})},_=function(){var e=L();return Object(S.jsxs)("section",{className:e.Projects,children:[Object(S.jsx)("h2",{children:"Project experience:"}),Object(S.jsxs)("a",{className:e.projectLink,href:"#/portfolio",children:[Object(S.jsx)("svg",{children:Object(S.jsx)("use",{href:"".concat(y,"#code")})}),"Projects"]})]})},D=function(e){var t=e.resume,a=L();return Object(S.jsxs)("section",{className:a.jobs,children:[Object(S.jsx)("h2",{children:"Employment history:"}),t.jobs.map((function(e){var t=e.position,i=e.company,n=e.date,c=e.specialization;return Object(S.jsxs)("div",{className:a.jobListWrap,children:[Object(S.jsxs)("h3",{children:[t," ",Object(S.jsx)("span",{children:i})]}),Object(S.jsx)("p",{className:a.date,children:n}),Object(S.jsx)("ul",{children:null===c||void 0===c?void 0:c.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})]},n)}))]})},F=function(e){var t=e.resume,a=L();return Object(S.jsxs)("section",{className:a.education,children:[Object(S.jsx)("h2",{children:"Education:"}),t.education.map((function(e){var t=e.subject,i=e.institute,n=e.date;return Object(S.jsxs)("div",{children:[Object(S.jsxs)("h3",{children:[t,", ",Object(S.jsx)("span",{children:i})]}),Object(S.jsx)("p",{className:a.date,children:n})]},t)}))]})},G=function(e){var t=e.resume.languages;return Object(S.jsxs)("section",{children:[Object(S.jsx)("h2",{children:"Languages:"}),Object(S.jsx)("ul",{children:t.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})]})},E=a(89),U=function(){var e=L(),t=function(e){return"(max-width:".concat(e,"px) ")},a=function(e){return"(min-width:".concat(e,"px) ")},i=s(t(k.a.mobilePlusMax)),n=s(a(k.a.mobilePlus)),c=s(a(k.a.tablet)),o=s(t(k.a.desktopMax)),r=s(a(k.a.desktop));return Object(S.jsxs)("div",{className:e.ResumeContent,children:[Object(S.jsxs)("aside",{className:e.aside,children:[Object(S.jsx)(R,{mobilePlusMax:i,mobilePlus:n,desktopMax:o,resume:E}),Object(S.jsx)(T,{tablet:c,desktop:r,resume:E}),Object(S.jsx)(z,{resume:E}),r&&Object(S.jsx)(A,{})]}),Object(S.jsxs)("div",{className:e.mainContent,children:[r&&Object(S.jsx)(W,{techIcons:E.techIcons}),Object(S.jsx)(J,{desktop:r,resume:E}),Object(S.jsx)(_,{}),Object(S.jsx)(D,{resume:E}),Object(S.jsx)(F,{resume:E}),Object(S.jsx)(G,{resume:E}),!r&&Object(S.jsx)(A,{})]})]})},K=function(){return Object(S.jsx)(U,{})};t.default=function(){return Object(S.jsx)(K,{resume:E})}},89:function(e){e.exports=JSON.parse('{"techIcons":["#react","#redux","#nodejs","#js","#sass","#html"],"avatar":{"name":"Serhii Stanislav","position":"Front-end Developer"},"contacts":{"phone":"+38 (067) 518 3309","phone_href":"tel:+380675183309","email":"serhiistanislav@gmail.com","email_href":"mailto:serhiistanislav@gmail.com","social":[{"title":"Telegram","icon":"#telegram","link":"https://t.me/serhiistanislav"},{"title":"Facebook","icon":"#fb","link":"https://www.facebook.com/SerhiiStanislav/"},{"title":"GitHub","icon":"#github","link":"https://github.com/itstoreall"},{"title":"Linkedin","icon":"#in","link":"https://www.linkedin.com/in/serhiistanislav/"}]},"skills":{"tech":["HTML","CSS","Git","JavaScript","React","Node.js","Scrum","Agile"],"soft":["GTD","Teamwork","Result-oriented"]},"downloadResume":{"fexUrl":"https://fs7.fex.net:443/download/3394039776"},"summary":"Since 2015 I developed websites in Webflow at freelance. These were simple projects using HTML/CSS. At the beginning of 2020, I started my studies at the GoIT school, where I had experience in teamwork and coding for over a year. I prefer to use React, Redux and JavaScript in development. In the stack of these technologies, I can be most effective as a front-end developer for remote work","jobs":[{"position":"Front-end developer","company":"at Freelance","date":"September 2020 - up to now","specialization":["Website development","SPA development (React/Redux)","REST API (Node.js)","Teamwork"]},{"position":"Web Designer","company":"at Freelance","date":"December 2014 - August 2020","specialization":["Website development (Webflow)","Landing page development (Adobe Muse)","Layout HTML/CSS"]}],"education":[{"subject":"Node.js","institute":"GoIT Course","date":"April - July 2021"},{"subject":"React","institute":"GoIT Course","date":"January - April 2021"},{"subject":"JavaScript","institute":"GoIT Course","date":"September - December 2020"},{"subject":"HTML/CSS","institute":"GoIT Course","date":"May - August 2020"},{"subject":"Web Design (Adobe Muse)","institute":"Computer Academy \xabKademika\xbb Course","date":"October - January 2016"},{"subject":"Practical psychology","institute":"Open International University of Human Development \xabUkraine\xbb","date":"Septermber 2006 - June 2011"},{"subject":"Computer graphics design","institute":"Pro Course","date":"June - August 2004"}],"languages":["English (Pre-Intermediate)","Ukrainian (Native)","Russian (Native)"]}')}}]);
//# sourceMappingURL=Resume.851951fa.chunk.js.map