(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(8),i=n.n(o),s=n(7),u=n(2),l=n(3),d=n(5),b=n(4),h=n(17),j=n(9);function m(t){var e=t.label,n=t.type,c=t.name,r=t.value,o=t.onChange;return Object(a.jsxs)("label",{children:[" ",e,Object(a.jsx)("input",{type:n,name:c,value:r,onChange:o})]})}var f=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChande=function(e){var n=e.target.name,a=e.target.value;t.setState(Object(j.a)({},n,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;""!==a&&""!==c&&t.props.addContact(a,c),t.reset()},t.reset=function(){return t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(m,{label:"Name",type:"text",name:"name",value:e,onChange:this.handleChande}),Object(a.jsx)(m,{label:"Number",type:"text",name:"number",value:n,onChange:this.handleChande}),Object(a.jsx)("button",{type:"submit",children:"Add"})]},this.props.id)}}]),n}(c.Component);function O(t){var e=t.contact,n=t.onDelete;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[e.name," ",e.number]}),Object(a.jsx)("button",{id:e.id,onClick:n,children:"Delete"})]})}function p(t){var e=t.contacts,n=t.onDelete;return Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)(O,{contact:t,onDelete:n},t.id)}))})}var v=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie",number:"459-12-56"},{id:"id-2",name:"Hermione",number:"443-89-12"},{id:"id-3",name:"Eden",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.renewalLocalStorage=function(t){localStorage.setItem("contacts",JSON.stringify(t))},t.addContact=function(e,n){var a=t.state.contacts,c=Object(h.a)(),r=e.toLowerCase();a.find((function(t){return t.name.toLowerCase()===r}))?alert("".concat(r," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{id:c,name:e,number:n}])}}))},t.deleteContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.filterChange=function(e){t.setState({filter:e.target.value})},t.getFiltrationContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState((function(e){return{contacts:Object(s.a)(JSON.parse(t))}}))}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&this.renewalLocalStorage(this.state.contacts)}},{key:"render",value:function(){var t=this.state.filter,e=this.getFiltrationContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{addContact:this.addContact,id:Object(h.a)()}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(m,{label:"Find contacts by name",type:"text",name:"filter",value:t,onChange:this.filterChange}),Object(a.jsx)(p,{contacts:e,onDelete:this.deleteContact})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7ebf83d4.chunk.js.map