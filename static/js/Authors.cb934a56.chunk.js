(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[1],{109:function(t,e,n){t.exports={section:"ViewStyles_section__AuNei",goBackBtn:"ViewStyles_goBackBtn__3UJi4",container:"ViewStyles_container__3TyNI",Loading:"ViewStyles_Loading__23h_i",useList:"ViewStyles_useList__3vLRS",strong:"ViewStyles_strong__3kEIs",toast:"ViewStyles_toast__3PgFy"}},112:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},114:function(t,e,n){t.exports={bookList:"BookStyles_bookList__gnjuQ",thumb:"BookStyles_thumb__AFLZ2",toast:"BookStyles_toast__1z44a",BookDetails:"BookStyles_BookDetails__1ghun"}},115:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},122:function(t,e,n){"use strict";e.a=n.p+"static/media/error.42d26448.jpg"},123:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}));var o=n(112),c=n(34);function s(t,e){return!e||"object"!==Object(o.a)(e)&&"function"!==typeof e?Object(c.a)(t):e}function a(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var c=r(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return s(this,n)}}},124:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},138:function(t,e,n){"use strict";var r=n(22),o=n(7),c=n(122),s=n(114),a=n.n(s),i=n(3),u=function(t){var e=t.imgUrl,n=t.title,r=t.genre;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:a.a.thumb,children:"\u0414\u0430\u0433\u043e\u043d"===n?Object(i.jsx)("img",{src:c.a,alt:n}):Object(i.jsx)("img",{src:e,alt:n})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:n}),Object(i.jsx)("p",{children:r})]})]})},l=n(33);e.a=Object(o.g)((function(t){var e=t.books,n=t.location;return Object(i.jsx)(i.Fragment,{children:e?Object(i.jsx)("ul",{className:a.a.bookList,children:e.map((function(t){var e=t.id,o=t.imgUrl,c=t.title,s=t.genre;return Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{to:{pathname:"/applications/books/".concat(e),state:{from:n}},children:Object(i.jsx)(u,{imgUrl:o,title:c,genre:s})})},e)}))}):Object(i.jsx)("p",{children:"To see ".concat(l.name,"'s books, you need to turn on the Local Server")})})}))},169:function(t,e,n){t.exports={toast:"AuthorStyles_toast__3xWXX"}},214:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return B}));var r=n(37),o=n(18),c=n.n(o),s=n(29),a=n(115),i=n(31),u=n(124),l=n(123),f=n(0),b=n(22),j=n(7),h=n(26),p=n.n(h),d=n(138),y=n(33),O=n(41),_=n(35),m=n(169),x=n.n(m),v=n(3),g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={authors:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(s.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("http://localhost:2222/authors?_embed=books");case 3:e=t.sent,n=e.data,this.setState({authors:n}),Object(_.a)("success","Successful downloading!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),Object(_.a)("error","Server is not available!"),this.setState({authors:y.authors});case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.match,e=this.state.authors;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("ul",{children:e?e.map((function(e){var n=e.id,r=e.name;return Object(v.jsx)("li",{children:Object(v.jsx)(b.c,{to:"".concat(t.url,"/").concat(n),replace:!0,children:r})},n)})):y.authors.map((function(e){var n=e.id,r=e.name;return Object(v.jsx)("li",{children:Object(v.jsx)(b.c,{to:"".concat(t.url,"/").concat(n),replace:!0,children:r})},n)}))}),Object(v.jsx)(j.b,{path:"".concat(t.path,"/:authorId"),render:function(t){var n=Number(t.match.params.authorId),o=e.find((function(t){return t.id===n})),c=y.authors.find((function(t){return t.id===n}));return o&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h3",{children:"Books by authors"}),Object(v.jsx)(d.a,Object(r.a)(Object(r.a)({},t),{},{books:o.books,reserveAuthor:c}))]})}}),Object(v.jsx)(O.a,{className:x.a.toast})]})}}]),n}(f.Component),k=Object(j.g)(g),S=n(109),w=n.n(S);function B(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("section",{className:w.a.section,children:[Object(v.jsx)("h1",{children:"Authors View"}),Object(v.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=Authors.cb934a56.chunk.js.map