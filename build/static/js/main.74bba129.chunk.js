(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n(46)},24:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(12),c=n.n(i),r=(n(24),n(2)),l=n(13),u=n(14),s=n(16),d=n(15),f=n(17),h=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},m=function(t){var e=t.filterValue,n=t.handleFilterChange;return o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Filter notes",value:e,onChange:n}))},v=function(t){var e=t.note,n=t.handleRemove,a=t.handleSubmit,i=t.handleInputChange;return o.a.createElement("div",{className:"note"},o.a.createElement("form",{onSubmit:a(e)},o.a.createElement("h3",null,o.a.createElement("input",{value:e.title,placeholder:"Title",onChange:i("title",e)}),e.title),o.a.createElement("p",null,o.a.createElement("textarea",{value:e.content,placeholder:"Add text here",onChange:i("content",e)})),o.a.createElement("button",{type:"submit"},"Save"),o.a.createElement("button",{type:"button",onClick:n(e)},"Delete")))},g=function(t){var e=t.notes,n=t.handleRemove,a=t.handleSubmit,i=t.handleInputChange;return o.a.createElement("div",null,e.map(function(t){return o.a.createElement(v,{key:t.id,note:t,handleRemove:n,handleSubmit:a,handleInputChange:i})}))},w=n(3),E=n.n(w),C={getAll:function(){return E.a.get("/notes").then(function(t){return t.data})},create:function(t){return E.a.post("/notes",t).then(function(t){return t.data})},update:function(t,e){return E.a.put("".concat("/notes","/").concat(t),e).then(function(t){return t.data})},remove:function(t){return E.a.delete("".concat("/notes","/").concat(t)).then(function(t){return t.data})}},p=n(5),b=n.n(p),S=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).newNote=function(){if(!n.state.notes.find(function(t){return 0===t.id})){n.setState({notes:[{id:0,title:"",author:"",content:"",date:"",important:!1}].concat(n.state.notes)})}},n.saveNote=function(t){return function(e){e.preventDefault(),0===t.id?C.create(t).then(function(t){var e=n.state.notes.filter(function(t){return 0!==t.id});n.setState({notes:[t].concat(e),notification:"Note saved"}),setTimeout(function(){n.setState({notification:null})},3e3)}).catch(function(t){console.log(t)}):C.update(t.id,t).then(function(t){var e=n.state.notes.findIndex(function(e){return e.id===t.id}),a=b()(n.state,{notes:Object(r.a)({},e,{$set:t})});n.setState({newState:a,notification:"Note saved"}),setTimeout(function(){n.setState({notification:null})},3e3)}).catch(function(t){console.log(t)})}},n.handleRemove=function(t){return function(){window.confirm("Are you sure you want to remove this note?")&&C.remove(t.id).then(function(e){var a=n.state.notes.filter(function(e){return e.id!==t.id});n.setState({notes:a,notification:"Note deleted"}),setTimeout(function(){n.setState({notification:null})},3e3)}).catch(function(e){console.log(e);var a=n.state.notes.filter(function(e){return e.id!==t.id});n.setState({notes:a,notification:"Failed to delete note"}),setTimeout(function(){n.setState({notification:null})},3e3)})}},n.handleInputChange=function(t,e){return function(a){var o=a.target.value;if(e){var i=n.state.notes.findIndex(function(t){return t.id===e.id}),c=b()(n.state,{notes:Object(r.a)({},i,Object(r.a)({},t,{$set:o}))});n.setState(c)}else n.setState(Object(r.a)({},t,o))}},n.state={notes:[],filter:"",notification:null},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;document.title="NoteOwl",C.getAll().then(function(e){t.setState({notes:e})})}},{key:"render",value:function(){var t=this,e=this.state.notes.filter(function(e){return e.title.toLowerCase().includes(t.state.filter.toLowerCase())||e.author.toLowerCase().includes(t.state.filter.toLowerCase())||e.content.toLowerCase().includes(t.state.filter.toLowerCase())});return o.a.createElement("div",{id:"content"},o.a.createElement("nav",null,o.a.createElement("h1",null,"Noteowl"),o.a.createElement("button",{onClick:this.newNote},"Add New Note"),o.a.createElement(m,{filterValue:this.state.filter,handleFilterChange:this.handleInputChange("filter",void 0)})),o.a.createElement("div",{id:"notes"},o.a.createElement(h,{message:this.state.notification}),o.a.createElement(g,{notes:e,handleRemove:this.handleRemove,handleSubmit:this.saveNote,handleInputChange:this.handleInputChange})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.74bba129.chunk.js.map