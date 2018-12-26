(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,n){t.exports=n(55)},26:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(6),i=n.n(c),u=(n(26),n(2)),l=n(14),r=n(15),s=n(18),f=n(16),m=n(19),v=n(7),d=n.n(v),h=n(17),w=n.n(h),E=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"notification"},e)},b=function(t){var e=t.note,n=t.handleRemove,a=t.saveNote,c=t.handleInputChange;return o.a.createElement(w.a,{cancel:"form>*",bounds:"parent",onStop:a(e)},o.a.createElement("div",{className:"note"},o.a.createElement(E,{message:e.notification}),o.a.createElement("form",{onSubmit:a(e)},o.a.createElement("h3",null,o.a.createElement(d.a,{onBlur:a(e),onResize:function(t){},value:e.title,placeholder:"Title",onChange:c("title",e)}),o.a.createElement("span",{className:"border"})),o.a.createElement("p",null,o.a.createElement(d.a,{onBlur:a(e),onResize:function(t){},value:e.content,placeholder:"Add text here",onChange:c("content",e)}),o.a.createElement("span",{className:"border"})),o.a.createElement("button",{type:"submit"},"Save"),o.a.createElement("button",{type:"button",onClick:n(e)},"Delete"))))},g=function(t){var e=t.notes,n=t.handleRemove,a=t.saveNote,c=t.handleInputChange;return o.a.createElement("div",{id:"notes"},e.map(function(t){return o.a.createElement(b,{key:t.id,note:t,handleRemove:n,saveNote:a,handleInputChange:c})}))},C=n(3),O=n.n(C),j={getAll:function(){return O.a.get("/notes").then(function(t){return t.data})},create:function(t){return O.a.post("/notes",t).then(function(t){return t.data})},update:function(t,e){return O.a.put("".concat("/notes","/").concat(t),e).then(function(t){return t.data})},remove:function(t){return O.a.delete("".concat("/notes","/").concat(t)).then(function(t){return t.data})}},S=n(4),I=n.n(S),k=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(f.a)(e).call(this,t))).newNote=function(){if(!n.state.notes.find(function(t){return 0===t.id})){n.setState({notes:[{id:0,title:"",author:"",content:"",date:"",important:!1,notification:null}].concat(n.state.notes)})}},n.saveNote=function(t){return function(e){if(e.preventDefault(),t.title&&t.content)0===t.id?j.create(t).then(function(t){t.notification="Note saved";var e=n.state.notes.filter(function(t){return 0!==t.id});e=[t].concat(e),n.setState({notes:e})}).catch(function(t){console.log(t)}):j.update(t.id,t).then(function(t){t.notification="Note saved";var e=n.state.notes.findIndex(function(e){return e.id===t.id}),a=I()(n.state.notes,Object(u.a)({},e,{$set:t}));n.setState({notes:a})}).catch(function(t){console.log(t)});else if("submit"===e.type){var a=n.state.notes.findIndex(function(e){return e.id===t.id}),o=I()(n.state.notes,Object(u.a)({},a,Object(u.a)({},"notification",{$set:"Note must have a title and text"})));n.setState({notes:o})}setTimeout(function(){var e=n.state.notes.findIndex(function(e){return e.id===t.id}),a=I()(n.state.notes,Object(u.a)({},e,Object(u.a)({},"notification",{$set:null})));n.setState({notes:a})},3e3)}},n.handleRemove=function(t){return function(){window.confirm("Are you sure you want to remove this note?")&&j.remove(t.id).then(function(e){var a=n.state.notes.filter(function(e){return e.id!==t.id});n.setState({notes:a})}).catch(function(e){console.log(e);var a=n.state.notes.filter(function(e){return e.id!==t.id});n.setState({notes:a})})}},n.handleInputChange=function(t,e){return function(a){var o=a.target.value;if(e){var c=n.state.notes.findIndex(function(t){return t.id===e.id}),i=I()(n.state.notes,Object(u.a)({},c,Object(u.a)({},t,{$set:o})));n.setState({notes:i})}else n.setState(Object(u.a)({},t,o))}},n.state={notes:[],filter:""},n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;document.title="NoteOwl",j.getAll().then(function(e){t.setState({notes:e})})}},{key:"render",value:function(){var t=this,e=this.state.notes.filter(function(e){return e.title.toLowerCase().includes(t.state.filter.toLowerCase())||e.author.toLowerCase().includes(t.state.filter.toLowerCase())||e.content.toLowerCase().includes(t.state.filter.toLowerCase())});return o.a.createElement("div",{id:"content"},o.a.createElement("nav",null,o.a.createElement("h1",null,"Noteowl"),o.a.createElement("button",{onClick:this.newNote},"Add New Note")),o.a.createElement(g,{notes:e,handleRemove:this.handleRemove,saveNote:this.saveNote,handleInputChange:this.handleInputChange}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.08bd36f6.chunk.js.map