(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(63)},31:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),s=n.n(o),i=(n(31),n(1)),l=n.n(i),u=n(3),c=n(6),d=n(18),m=n(19),f=n(23),h=n(20),p=n(24),v=function(e){var t=e.filter,n=e.handleInputChange;return r.a.createElement("div",{className:"d-none"},r.a.createElement("input",{placeholder:"Filter notes",value:t,name:"filter",onChange:n(null)}))},g=function(e){var t=e.loginMessage;return t?r.a.createElement("div",null,r.a.createElement("p",null,t)):null},w=function(e){var t=e.type,n=e.placeholder,a=e.name,o=e.value,s=e.handleInputChange;return r.a.createElement("div",{className:"owl-field"},r.a.createElement("input",{type:t,placeholder:n,name:a,value:o,onChange:s(null)}),r.a.createElement("span",{className:"border"}))},E=function(e){var t=e.login,n=e.username,a=e.password,o=e.handleInputChange,s=e.loginMessage;return r.a.createElement("div",{id:"login"},r.a.createElement(g,{loginMessage:s}),r.a.createElement("form",{onSubmit:t},r.a.createElement(w,{type:"text",placeholder:"Username",name:"username",value:n,handleInputChange:o}),r.a.createElement(w,{type:"password",placeholder:"Password",name:"password",value:a,handleInputChange:o}),r.a.createElement("button",{type:"submit"},"Login")))},b=function(e){var t=e.user,n=e.logout;return r.a.createElement("div",{id:"logout"},r.a.createElement("p",null,"Signed in as"),r.a.createElement("p",null,t.username),r.a.createElement("form",{onSubmit:n},r.a.createElement("button",{type:"submit"},"Logout")))},N=function(e){var t=e.title,n=e.login,a=e.logout,o=e.filterValue,s=e.handleInputChange,i=e.username,l=e.password,u=e.user,c=e.loginMessage;return r.a.createElement("nav",null,r.a.createElement("h1",null,t),r.a.createElement(v,{filterValue:o,handleInputChange:s}),null===u&&r.a.createElement(E,{login:n,username:i,password:l,handleInputChange:s,loginMessage:c}),null!==u&&r.a.createElement(b,{logout:a,user:u}))},x=n(9),y=n.n(x),C=n(21),k=n.n(C),S=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"notification"},t)},I=n(22),O=n.n(I),j=function(e){var t=e.text,n=e.date;return null===n?null:r.a.createElement("div",{className:"note-date"},r.a.createElement("span",null,t),r.a.createElement(O.a,{format:"ddd DD MMM YYYY HH:mm"},n))},M=function(e){var t=e.note,n=e.user,a=e.handleRemove;return n&&t.user===n.id||null===t.user?r.a.createElement("button",{type:"button",onClick:a(t)},"Delete"):null},D=function(e){var t=e.colors,n=e.note,a=e.handleInputChange,o=e.saveNote;return r.a.createElement("div",{className:"color-changer"},t.map(function(e){var t=!1;return n.color===e&&(t=!0),r.a.createElement("div",{className:"color-input color-"+e},r.a.createElement("input",{name:"color",value:e,onMouseDown:a(n),onMouseUp:o(n),type:"checkbox",checked:t}),r.a.createElement("label",{class:"checkmark"}))}))},R=function(e){var t=e.user,n=e.note,a=e.handleRemove,o=e.handleInputChange,s=e.saveNote,i=e.colors;return r.a.createElement("div",{className:"note-controls"},r.a.createElement(M,{note:n,user:t,handleRemove:a}),r.a.createElement(D,{note:n,handleInputChange:o,colors:i,saveNote:s}))},A=function(e){var t=e.note,n=e.user,a=e.handleRemove,o=e.handleDrag,s=e.saveNote,i=e.handleInputChange,l=e.index,u=e.colors,c={zIndex:8e3+l};return r.a.createElement(k.a,{cancel:".note form>*",position:t.position,bounds:"parent",onStop:s(t),onDrag:o(t)},r.a.createElement("div",{className:"note color-"+t.color,style:c},r.a.createElement(S,{message:t.notification}),r.a.createElement("form",{onSubmit:s(t)},r.a.createElement("div",{className:"owl-field"},r.a.createElement(y.a,{onBlur:s(t),onResize:function(e){},value:t.title,name:"title",placeholder:"Title",onChange:i(t)}),r.a.createElement("span",{className:"border"})),r.a.createElement(j,{text:"Created: ",date:t.created}),r.a.createElement(j,{text:"Saved: ",date:t.updated}),r.a.createElement("div",{className:"owl-field"},r.a.createElement(y.a,{onBlur:s(t),onResize:function(e){},value:t.content,name:"content",placeholder:"Add text here",onChange:i(t)}),r.a.createElement("span",{className:"border"})),r.a.createElement(R,{user:n,note:t,handleRemove:a,colors:u,handleInputChange:i,saveNote:s}))))},T=function(e){var t=e.notes,n=e.user,a=e.handleRemove,o=e.handleDrag,s=e.saveNote,i=e.handleInputChange,l=e.newNote,u=["yellow","blue","red","green"];return r.a.createElement("div",{id:"notes"},r.a.createElement("button",{onClick:l,type:"button"},"New note"),t.map(function(e,t){return r.a.createElement(A,{key:e.id,note:e,user:n,handleRemove:a,handleDrag:o,saveNote:s,handleInputChange:i,index:t,colors:u})}))},z=n(4),L=n.n(z),Y=null,B={setToken:function(e){Y="bearer ".concat(e)},removeToken:function(){Y=null},getAll:function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(u.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:Y}},e.next=3,L.a.post("/notes",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(u.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:Y}},e.next=3,L.a.put("".concat("/notes","/").concat(t.id),t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(u.a)(l.a.mark(function e(t){var n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:Y}},e.next=3,L.a.delete("".concat("/notes","/").concat(t.id),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},J={login:function(){var e=Object(u.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},U=n(10),F=n.n(U),$=n(11),H=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).hideNotification=function(e){setTimeout(function(){var t=n.state.notes.findIndex(function(t){return t.id===e.id});if(t){var a=F()(n.state.notes,Object(c.a)({},t,Object(c.a)({},"notification",{$set:null})));n.setState({notes:a})}},3e3)},n.logout=function(){var e=Object(u.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{B.removeToken(n.state.user.token),window.localStorage.removeItem("user"),n.setState({user:null})}catch(a){n.setState({user:null})}case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.login=function(){var e=Object(u.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,J.login({username:n.state.username,password:n.state.password});case 4:a=e.sent,window.localStorage.setItem("user",JSON.stringify(a)),B.setToken(a.token),n.setState({user:a,username:"",password:""}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),n.setState({loginMessage:"Username and/or password incorrect",password:""}),setTimeout(function(){n.setState({loginMessage:null})},3e3);case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),n.newNote=function(){if(!n.state.notes.find(function(e){return 0===e.id})){var e={id:null,title:"",content:"",created:new Date,updated:null,important:!1,notification:null,position:{x:0,y:0},user:null,color:"yellow"};n.setState({notes:n.state.notes.concat(e)})}},n.saveNote=function(e){return function(){if(e.title&&e.content)if(n.state.user)null===e.id?B.create(e).then(function(e){e.notification="Note saved";var t=n.state.notes.filter(function(e){return 0!==e.id});n.setState({notes:t.concat(e)}),n.hideNotification(e)}).catch(function(e){console.log(e)}):B.update(e).then(function(e){e.notification="Note saved";var t=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:t.concat(e)}),n.hideNotification(e)}).catch(function(e){console.log(e)});else{e.notification="Login to save note";var t=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:t.concat(e)}),n.hideNotification(e)}}},n.handleRemove=function(e){return function(){if(!e.author&&window.confirm("Are you sure you want to remove this note?"))if(0===e.id){var t=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:t})}else B.remove(e).then(function(t){var a=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:a})}).catch(function(t){var a=n.state.notes.filter(function(t){return t.id!==e.id});n.setState({notes:a})})}},n.handleDrag=function(e){return function(t,a){var r=n.state.notes.filter(function(t){return t.id!==e.id});e.position||(e.position={x:0,y:0}),e.position={x:+e.position.x+ +a.deltaX.toFixed(0),y:+e.position.y+ +a.deltaY.toFixed(0)},n.setState({notes:r.concat(e)})}},n.handleInputChange=function(e){return function(t){var a=t.target.value,r=t.target.name;if(e){var o=n.state.notes.findIndex(function(t){return t.id===e.id}),s=F()(n.state.notes,Object(c.a)({},o,Object(c.a)({},r,{$set:a})));n.setState({notes:s})}else n.setState(Object(c.a)({},r,a))}},n.state={notes:[],filter:"",username:"",password:"",user:null,loginMessage:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="NoteOwl",B.getAll().then(function(t){e.setState({notes:t})});var t=window.localStorage.getItem("user");if(t){var n=JSON.parse(t);this.setState({user:n}),B.setToken(n.token)}$.a.initialize("UA-120584024-4"),$.a.pageview("/")}},{key:"render",value:function(){var e=this,t=this.state.notes.filter(function(t){return t.title.toLowerCase().includes(e.state.filter.toLowerCase())||t.content.toLowerCase().includes(e.state.filter.toLowerCase())});return r.a.createElement("div",{id:"content"},r.a.createElement(N,{title:"Noteowl",login:this.login,logout:this.logout,handleInputChange:this.handleInputChange,filter:this.state.filter,username:this.state.username,password:this.state.password,user:this.state.user,loginMessage:this.state.loginMessage}),r.a.createElement(T,{notes:t,newNote:this.newNote,handleRemove:this.handleRemove,handleDrag:this.handleDrag,saveNote:this.saveNote,user:this.state.user,handleInputChange:this.handleInputChange}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.08af2286.chunk.js.map