(this.webpackJsonpreactor=this.webpackJsonpreactor||[]).push([[12],{110:function(e,t,c){e.exports={section:"ViewStyles_section__AuNei",goBackBtn:"ViewStyles_goBackBtn__3UJi4",breadcrumbs:"ViewStyles_breadcrumbs__30e5K",container:"ViewStyles_container__3TyNI",Loading:"ViewStyles_Loading__23h_i",useList:"ViewStyles_useList__3vLRS",strong:"ViewStyles_strong__3kEIs",toast:"ViewStyles_toast__3PgFy"}},131:function(e,t,c){},171:function(e,t,c){},221:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(8),o=c(25),i=c(158),a=c.n(i),l=c(111),r=c(41),d=(c(131),c(3));function j(){var e=Object(o.d)(r.d.getTotalTodoCount),t=Object(o.d)(r.d.getCompletedTodoCount);return Object(d.jsxs)("div",{className:"Stats",children:[Object(d.jsx)("p",{children:Object(d.jsxs)("span",{children:["Total: ",e]})}),Object(d.jsx)("p",{children:Object(d.jsxs)("span",{children:["Completed: ",t]})})]})}var b=c(167),u=c.n(b),O=c(216),x=c(168),h=c.n(x),m=c(225),p=function(e){var t=e.id,c=e.text,n=e.completed,i=Object(o.c)(),a=Object(s.useCallback)((function(){return i(r.b.deleteTodo(t))}),[i,t]),l=Object(s.useCallback)((function(){return i(r.b.toggleCompleted({id:t,completed:!n}))}),[i,t,n]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:Object(d.jsx)(m.a,{type:"checkbox",className:"TodoList__checkbox",checked:n,onChange:l,color:"primary",inputProps:{"aria-label":"secondary checkbox"}})}),Object(d.jsx)("p",{className:"TodoList__text",children:c}),Object(d.jsx)(O.a,{type:"button",className:"TodoList__btn",onClick:a,disabled:!n,color:"primary","aria-label":"delete todo",component:"span",children:Object(d.jsx)(h.a,{})})]})},f=function(){var e=Object(o.d)(r.d.getVisibleTodos);return Object(d.jsx)("ul",{className:"TodoList",children:e.map((function(e){var t=e.id,c=e.text,s=e.completed;return Object(d.jsx)("li",{className:u()("TodoList__item",{"TodoList__item--completed":s}),children:Object(d.jsx)(p,{id:t,text:c,completed:s})},t)}))})},_=c(44),g=c(220),v=c(217);function k(e){var t=e.onCloseModal,c=Object(s.useState)(""),n=Object(l.a)(c,2),i=n[0],a=n[1],r=Object(o.c)(),j=Object(s.useRef)();Object(s.useEffect)((function(){j.current.focus()}));var b=Object(s.useCallback)((function(e){a(e.currentTarget.value)}),[]),u=Object(s.useCallback)((function(e){e.preventDefault(),""===i&&alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 Todo"),r(_.a.addTodo(i)),t(),a("")}),[r,i,t]);return Object(d.jsxs)("form",{className:"TodoEditor",onSubmit:u,children:[Object(d.jsx)("label",{className:"TodoEditor__textarea-label",children:Object(d.jsx)(g.a,{className:"TodoEditor__textarea",autoComplete:"off",value:i,onChange:b,id:"outlined-multiline-static",label:"Todo text",multiline:!0,rows:2,variant:"outlined",inputRef:j})}),Object(d.jsx)(v.a,{className:"TodoEditor__btn",variant:"contained",color:"primary",type:"submit",children:"Submit"})]})}var y=c(2),C=c(218),T=c(6),N=Object(C.a)((function(e){var t;return{root:{display:"block",marginBottom:30,"& > *":(t={color:"#fff",width:"100%"},Object(y.a)(t,"@media (min-width: ".concat(T.a.tablet,"px)"),{width:"calc(50% - 5px)"}),Object(y.a)(t,"@media (min-width: ".concat(T.a.desktop,"px)"),{width:"calc(33% - 5px)"}),t),"& .MuiFormLabel-root.Mui-focused":{color:"#6ecab6"},"& .MuiInputBase-input.MuiInput-input":{borderBottom:"2px solid #666",borderRadius:0},"& .MuiInput-underline:after":{borderBottom:"2px solid white"},"& .MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:"2px solid #666"}}}}));function w(){var e=Object(o.c)(),t=Object(s.useRef)(),c=Object(o.d)(r.d.getFilter),n=Object(s.useCallback)((function(t){return e(Object(r.a)(t.target.value))}),[e]),i=N();return Object(d.jsx)(g.a,{type:"text",className:i.root,autoComplete:"off",list:"",value:c,onChange:n,id:"outlined-basic",label:"Filter by name",inputRef:t})}var S=c(172),L=c.n(S),R=c(24),M=(c(171),document.querySelector("#modal-root"));function E(e){var t=e.children,c=e.onClose;Object(s.useEffect)((function(){var e=function(e){"Escape"===e.code&&c()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[c]);return Object(R.createPortal)(Object(d.jsx)("div",{className:"Modal__backdrop",onClick:function(e){e.currentTarget===e.target&&c()},children:Object(d.jsx)("div",{className:"Modal__content",children:t})}),M)}function B(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(o.c)();Object(s.useEffect)((function(){i(r.b.fetchTodos)}),[i]);var a=Object(s.useCallback)((function(){n((function(e){return!e}))}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(v.a,{className:"ModaOpen__btn",onClick:a,variant:"contained",color:"primary",type:"button",children:"+ Add Todo"}),c&&Object(d.jsxs)(E,{onClose:a,children:[Object(d.jsx)("span",{className:"ModaClose__btn-wrap",children:Object(d.jsx)(O.a,{className:"ModaClose__btn",onClick:a,color:"primary","aria-label":"upload picture",component:"span",children:Object(d.jsx)(L.a,{})})}),Object(d.jsx)(k,{onCloseModal:a})]}),Object(d.jsx)(w,{}),Object(d.jsx)(f,{})]})}var V=c(45),F=c(43),I=c(110),P=c.n(I);t.default=Object(n.g)((function(e){var t=e.location,c=e.history,s=Object(o.d)(V.a.getLoading);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("section",{className:P.a.section,children:[Object(d.jsx)("button",{className:P.a.goBackBtn,type:"button",onClick:function(){t.state&&t.state.from?c.push(t.state.from):c.push("/applications")},children:"\u2190 Go back"}),Object(d.jsxs)("div",{className:P.a.container,children:[Object(d.jsxs)("h1",{children:["Todos",s&&Object(d.jsx)("span",{className:P.a.Loading,children:" Loading..."})]}),Object(d.jsx)(B,{}),Object(d.jsx)(F.a,{})]})]}),Object(d.jsxs)("ul",{className:P.a.useList,children:[Object(d.jsx)("li",{className:P.a.strong,children:"Hooks:"}),Object(d.jsx)("li",{children:"useState"}),Object(d.jsx)("li",{children:"useEffect"}),Object(d.jsx)("li",{children:"useRef"}),Object(d.jsx)("li",{children:"useCallback"}),Object(d.jsx)("li",{className:P.a.strong,children:"Dependencies:"}),Object(d.jsx)("li",{children:"use React - Prop Types"}),Object(d.jsx)("li",{children:"use ESLint"}),Object(d.jsx)("li",{children:"use Prettier"}),Object(d.jsx)("li",{children:"use gh-pages"}),Object(d.jsx)("li",{children:"use Modern normalize"}),Object(d.jsx)("li",{children:"use Node Sass"}),Object(d.jsx)("li",{children:"use React JSS"}),Object(d.jsx)("li",{children:"use Redux"}),Object(d.jsx)("li",{children:"use React Redux"}),Object(d.jsx)("li",{children:"use Redux Devtools Extension"}),Object(d.jsx)("li",{children:"use Material-UI"}),Object(d.jsx)("li",{children:"use axios"}),Object(d.jsx)("li",{children:"use classnames"}),Object(d.jsx)("li",{children:"use react-router-dom"}),Object(d.jsxs)("li",{children:["use shortid - id: ",a.a.generate()]}),Object(d.jsx)("li",{children:"use Redux Toolkit"}),Object(d.jsx)("li",{children:"use Logger for Redux"}),Object(d.jsx)("li",{children:"use Redux Persist"}),Object(d.jsx)("li",{children:"use JSON Server"}),Object(d.jsx)("li",{children:"use Reselect (from Toolkit)"})]})]})}))}}]);
//# sourceMappingURL=Todos.fbaccdfe.chunk.js.map