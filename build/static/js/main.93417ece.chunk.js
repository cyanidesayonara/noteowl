(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(63)},31:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),s=n.n(o),i=(n(31),n(1)),u=n.n(i),c=n(3),l=n(6),d=n(18),f=n(19),h=n(23),p=n(20),m=n(24),v=function(e){var t=e.filter,n=e.handleInputChange;return r.a.createElement("div",{className:"d-none"},r.a.createElement("input",{placeholder:"Filter notes",value:t,name:"filter",onChange:n(null)}))},g=function(e){var t=e.login,n=e.username,a=e.password,o=e.handleInputChange,s=e.loginMessage;return r.a.createElement("form",{onSubmit:t},r.a.createElement("span",null,s),r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:n,onChange:o(null)}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:a,onChange:o(null)}),r.a.createElement("button",{type:"submit"},"Login"))},w=function(e){var t=e.user,n=e.logout;return r.a.createElement("form",{onSubmit:n},r.a.createElement("button",{type:"submit"},"Logout\xa0",t.username))},b=function(e){var t=e.title,n=e.login,a=e.logout,o=e.newNote,s=e.filterValue,i=e.handleInputChange,u=e.username,c=e.password,l=e.user,d=e.loginMessage;return r.a.createElement("nav",null,r.a.createElement("h1",null,t),r.a.createElement(v,{filterValue:s,handleInputChange:i}),r.a.createElement("button",{onClick:o,type:"button"},"New note"),null===l&&r.a.createElement(g,{login:n,username:u,password:c,handleInputChange:i,loginMessage:d}),null!==l&&r.a.createElement(w,{logout:a,user:l}))},E=n(9),x=n.n(E),S=n(21),y=n.n(S),C=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"notification"},t)},k=n(22),N=n.n(k),O=function(e){var t=e.text,n=e.date;return null===n?null:r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(N.a,{format:"ddd DD MMM YYYY HH:mm"},n))},I=function(e){var t=e.note,n=e.user,a=e.handleRemove;return 0===t.user||n&&t.user===n.id?r.a.createElement("button",{type:"button",onClick:a(t)},"Delete"):null},j=function(e){var t=e.note,n=e.user,a=e.handleRemove,o=e.handleDrag,s=e.saveNote,i=e.handleInputChange;return r.a.createElement(y.a,{cancel:".note form>*",position:t.position,bounds:"parent",onStop:s(t),onDrag:o(t)},r.a.createElement("div",{className:"note"},r.a.createElement(C,{message:t.notification}),r.a.createElement("form",{onSubmit:s(t)},r.a.createElement("h3",null,r.a.createElement(x.a,{onBlur:s(t),onResize:function(e){},value:t.title,name:"title",placeholder:"Title",onChange:i(t)}),r.a.createElement("span",{className:"border"})),r.a.createElement(O,{text:"Created: ",date:t.created}),r.a.createElement(O,{text:"Saved: ",date:t.updated}),r.a.createElement("p",null,r.a.createElement(x.a,{onBlur:s(t),onResize:function(e){},value:t.content,name:"content",placeholder:"Add text here",onChange:i(t)}),r.a.createElement("span",{className:"border"})),r.a.createElement(I,{user:n,note:t,handleRemove:a}))))},D=function(e){var t=e.notes,n=e.user,a=e.handleRemove,o=e.handleDrag,s=e.saveNote,i=e.handleInputChange;return r.a.createElement("div",{id:"notes"},t.map(function(e){return r.a.createElement(j,{key:e.id,note:e,user:n,handleRemove:a,handleDrag:o,saveNote:s,handleInputChange:i})}))},M=n(4),R=n.n(M),A=null,T={setToken:function(e){A="bearer ".concat(e)},removeToken:function(){A=null},getAll:function(){var e=Object(c.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(c.a)(u.a.mark(function e(t){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:A}},e.next=3,R.a.post("/notes",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(c.a)(u.a.mark(function e(t){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:A}},e.next=3,R.a.put("".concat("/notes","/").concat(t.id),t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(c.a)(u.a.mark(function e(t){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:A}},e.next=3,R.a.delete("".concat("/notes","/").concat(t.id),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},z={login:function(){var e=Object(c.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post("/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},L=n(10),Y=n.n(L),B=n(11),J=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).hideNotification=function(e){setTimeout(function(){var t=n.state.notes.findIndex(function(t){return t.id===e.id});if(t>=0){var a=Y()(n.state.notes,Object(l.a)({},t,Object(l.a)({},"notification",{$set:null})));n.setState({notes:a})}},3e3)},n.logout=function(){var e=Object(c.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{T.removeToken(n.state.user.token),window.localStorage.removeItem("user"),n.setState({user:null})}catch(a){n.setState({user:null})}case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.login=function(){var e=Object(c.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,z.login({username:n.state.username,password:n.state.password});case 4:a=e.sent,window.localStorage.setItem("user",JSON.stringify(a)),T.setToken(a.token),n.setState({user:a,username:"",password:""}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),n.setState({loginMessage:"Username and/or password incorrect"}),setTimeout(function(){n.setState({loginMessage:null})},3e3);case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),n.newNote=function(){if(!n.state.notes.find(function(e){return 0===e.id})){var e={id:0,title:"",content:"",created:new Date,updated:null,important:!1,notification:null,position:{x:0,y:0},user:0};n.setState({notes:n.state.notes.concat(e)})}},n.saveNote=function(e){return function(){n.state.user&&e.title&&e.content&&(0===e.id?T.create(e).then(function(e){e.notification="Note saved";var t=n.state.notes.filter(function(e){return 0!==e.id});n.setState({notes:t.concat(e)}),n.hideNotification(e)}).catch(function(e){console.log(e)}):T.update(e).then(function(e){e.notification="Note saved";var t=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:t.concat(e)}),n.hideNotification(e)}).catch(function(e){console.log(e)}))}},n.handleRemove=function(e){return function(){if(!e.author&&window.confirm("Are you sure you want to remove this note?"))if(0===e.id){var t=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:t})}else T.remove(e).then(function(t){var a=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:a})}).catch(function(t){console.log(t);var a=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:a})})}},n.handleDrag=function(e){return function(t,a){var r=n.state.notes.filter(function(t){return t.id!==e.id});e.position||(e.position={x:0,y:0}),e.position={x:+e.position.x+ +a.deltaX.toFixed(0),y:+e.position.y+ +a.deltaY.toFixed(0)},n.setState({notes:r.concat(e)})}},n.handleInputChange=function(e){return function(t){var a=t.target.value,r=t.target.name;if(e){var o=n.state.notes.findIndex(function(t){return t.id===e.id}),s=Y()(n.state.notes,Object(l.a)({},o,Object(l.a)({},r,{$set:a})));n.setState({notes:s})}else n.setState(Object(l.a)({},r,a))}},n.state={notes:[],filter:"",username:"",password:"",user:null,loginMessage:null},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="NoteOwl",T.getAll().then(function(t){e.setState({notes:t})});var t=window.localStorage.getItem("user");if(t){var n=JSON.parse(t);this.setState({user:n}),T.setToken(n.token)}B.a.initialize("UA-120584024-4"),B.a.pageview("/")}},{key:"render",value:function(){var e=this,t=this.state.notes.filter(function(t){return t.title.toLowerCase().includes(e.state.filter.toLowerCase())||t.content.toLowerCase().includes(e.state.filter.toLowerCase())});return r.a.createElement("div",{id:"content"},r.a.createElement(b,{title:"Noteowl",login:this.login,logout:this.logout,newNote:this.newNote,handleInputChange:this.handleInputChange,filter:this.state.filter,username:this.state.username,password:this.state.password,user:this.state.user,loginMessage:this.state.loginMessage}),r.a.createElement(D,{notes:t,handleRemove:this.handleRemove,handleDrag:this.handleDrag,saveNote:this.saveNote,user:this.state.user,handleInputChange:this.handleInputChange}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.93417ece.chunk.js.map