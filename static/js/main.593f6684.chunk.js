(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,o){},16:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),s=o(8),r=o.n(s),i=(o(15),o(16),o(2)),l=o(3),c=o(5),d=o(4),u=o(1),m=o(6),h=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("td",null,a.a.createElement("a",{className:"name",href:"mailto:".concat(this.props.email)},this.props.name))}}]),e}(a.a.Component);var p=function(t){var e=t.users.find(function(e){return t.id===e.id});return a.a.createElement("tr",null,a.a.createElement("td",null,t.title),a.a.createElement(h,{name:e.name,email:e.email}),a.a.createElement("td",{className:t.completed?"completed":"active"},t.completed?"completed":"active"))},f=function(t){function e(t){var o;return Object(i.a)(this,e),(o=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={request:!1,loaded:!1,todos:null,users:null},o.loadTodos=o.loadTodos.bind(Object(u.a)(o)),o.sortTodos=o.sortTodos.bind(Object(u.a)(o)),o}return Object(m.a)(e,t),Object(l.a)(e,[{key:"loadTodos",value:function(){this.setState({request:!0})}},{key:"sortTodos",value:function(t){var e=this;this.str=t,"title"===this.str&&this.setState(function(t){return{todos:t.todos.sort(function(t,o){return t[e.str].localeCompare(o[e.str])})}}),"userId"===this.str&&this.setState(function(t){return{todos:t.todos.sort(function(t,o){return t[e.str].toString().localeCompare(o[e.str].toString())})}}),"completed"===this.str&&this.setState(function(t){return{todos:t.todos.sort(function(t,o){return t[e.str].toString().localeCompare(o[e.str].toString())})}})}},{key:"componentDidMount",value:function(){var t=this,e=new XMLHttpRequest,o=new XMLHttpRequest;e.open("GET","https://jsonplaceholder.typicode.com/todos"),o.open("GET","https://jsonplaceholder.typicode.com/users"),e.addEventListener("load",function(){var n=JSON.parse(e.response);o.addEventListener("load",function(){var e=JSON.parse(o.response);t.setState({loaded:!0,todos:n,users:e})}),o.send()}),e.send()}},{key:"render",value:function(){var t=this;return this.state.request?this.state.loaded?a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{title:"click to sort",onClick:this.sortTodos.bind(this,"title")},"Todos"),a.a.createElement("th",{title:"click to sort",onClick:this.sortTodos.bind(this,"userId")},"Name"),a.a.createElement("th",{title:"click to sort",onClick:this.sortTodos.bind(this,"completed")},"Completed"))),a.a.createElement("tbody",null,this.state.todos.map(function(e){return a.a.createElement(p,{title:e.title,completed:e.completed,users:t.state.users,key:e.title,id:e.userId})}))):a.a.createElement("div",null,"Loading..."):a.a.createElement("div",{className:"button"},a.a.createElement("button",{onClick:this.loadTodos},"Download"))}}]),e}(a.a.Component);var v=function(){return a.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,o){t.exports=o(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.593f6684.chunk.js.map