(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[2],{110:function(t,e,n){t.exports={section:"ViewStyles_section__AuNei",goBackBtn:"ViewStyles_goBackBtn__3UJi4",breadcrumbs:"ViewStyles_breadcrumbs__30e5K",container:"ViewStyles_container__3TyNI",Loading:"ViewStyles_Loading__23h_i",useList:"ViewStyles_useList__3vLRS",strong:"ViewStyles_strong__3kEIs",toast:"ViewStyles_toast__3PgFy"}},114:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}))},116:function(t,e,n){t.exports={containerMain:"BookStyles_containerMain__210z8",bookList:"BookStyles_bookList__gnjuQ",thumb:"BookStyles_thumb__AFLZ2",toast:"BookStyles_toast__1z44a",BookDetails:"BookStyles_BookDetails__1ghun",meta:"BookStyles_meta__3Rj3L",genre:"BookStyles_genre__3QNxq"}},119:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},124:function(t,e,n){"use strict";e.a=n.p+"static/media/error.42d26448.jpg"},125:function(t,e,n){t.exports={pageHeader:"AppBar_pageHeader__3n1xx",containerHeader:"AppBar_containerHeader__166B1",NavList:"AppBar_NavList__1ZAH9",NavLink:"AppBar_NavLink__7Jxjb",NavLink__active:"AppBar_NavLink__active__3tklH"}},126:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return s}));var c=n(114),r=n(35);function a(t,e){return!e||"object"!==Object(c.a)(e)&&"function"!==typeof e?Object(r.a)(t):e}function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=o(t);if(e){var r=o(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return a(this,n)}}},127:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return c}))},144:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n(8),c=(n(0),n(23)),r=n(125),a=n.n(r),s=n(3),i=function(){return Object(s.jsxs)("nav",{className:a.a.NavList,children:[Object(s.jsx)(c.c,{exact:!0,to:"/applications/books",className:a.a.NavLink,activeClassName:a.a.NavLink__active,children:"Books"}),Object(s.jsx)(c.c,{to:"/applications/books/authors",className:a.a.NavLink,activeClassName:a.a.NavLink__active,children:"Authors"})]})},u=Object(o.g)((function(t){t.location;return Object(s.jsx)("header",{className:a.a.pageHeader,children:Object(s.jsx)("div",{className:a.a.containerHeader,children:Object(s.jsx)(i,{})})})}))},145:function(t,e,n){"use strict";var o=n(23),c=n(8),r=n(124),a=n(116),s=n.n(a),i=n(3),u=function(t){var e=t.imgUrl,n=t.title,o=t.genre;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:s.a.thumb,children:"\u0414\u0430\u0433\u043e\u043d"===n?Object(i.jsx)("img",{src:r.a,alt:n}):Object(i.jsx)("img",{src:e,alt:n})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:n}),Object(i.jsx)("p",{children:o})]})]})},l=n(34);e.a=Object(c.g)((function(t){var e=t.books,n=t.location;return Object(i.jsx)(i.Fragment,{children:e?Object(i.jsx)("ul",{className:s.a.bookList,children:e.map((function(t){var e=t.id,c=t.imgUrl,r=t.title,a=t.genre;return Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:{pathname:"/applications/books/".concat(e),state:{from:n}},children:Object(i.jsx)(u,{imgUrl:c,title:r,genre:a})})},e)}))}):Object(i.jsx)("p",{children:"To see ".concat(l.name,"'s books, you need to turn on the Local Server")})})}))},235:function(t,e,n){"use strict";n.r(e);var o=n(8),c=n(144),r=n(18),a=n.n(r),s=n(30),i=n(119),u=n(32),l=n(127),b=n(126),j=n(0),f=n(26),p=n.n(f),_=n(34),h=n(145),d=n(43),y=n(37),O=n(116),v=n.n(O),x=n(3),k=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={books:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(s.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("http://localhost:2222/books");case 3:e=t.sent,n=e.data,this.setState({books:n}),Object(y.a)("success","Successful downloading!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),Object(y.a)("error","Server is not available!"),this.setState({books:_.books});case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.books;return Object(x.jsxs)("div",{className:v.a.containerMain,children:[0!==t.length&&Object(x.jsx)(h.a,{books:t}),Object(x.jsx)(d.a,{className:v.a.toast})]})}}]),n}(j.Component),m=n(110),g=n.n(m);e.default=Object(o.g)((function(t){var e=t.location,n=t.history;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("section",{className:g.a.section,children:[Object(x.jsx)("h1",{children:"Books"}),Object(x.jsx)("button",{className:g.a.goBackBtn,type:"button",onClick:function(){e.state&&e.state.from?n.push(e.state.from):n.push("/applications")},children:"\u2190 Go back"}),Object(x.jsx)(c.a,{}),Object(x.jsx)(k,{})]}),Object(x.jsxs)("ul",{className:g.a.useList,children:[Object(x.jsx)("li",{children:"use json-server"}),Object(x.jsx)("li",{children:"use server/db.json"}),Object(x.jsx)("li",{children:"use axios"}),Object(x.jsx)("li",{children:"use try...catch"}),Object(x.jsx)("li",{children:"use toastify"})]})]})}))}}]);
//# sourceMappingURL=Book.7bf664dc.chunk.js.map