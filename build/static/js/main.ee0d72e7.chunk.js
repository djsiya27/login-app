(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/pic1.c61e7d3a.jpg"},30:function(e,a,t){e.exports=t.p+"static/media/pic2.7b0ab1cc.jpg"},31:function(e,a,t){e.exports=t.p+"static/media/pic3.b4911562.jpg"},33:function(e,a,t){e.exports=t(46)},38:function(e,a,t){},39:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),s=t.n(l),o=(t(38),t(39),t(16)),c=t(7),m=t(17),i=t(11),h=t(12),d=t(14),p=t(13),u=t(15),E=t(18),g=t(47),b=t(48),f=t(49),w=t(50),N=t(51),v=t(26),j=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/),y=function(e){var a=e.formErrors,t=Object(E.a)(e,["formErrors"]),n=!0;return Object.values(a).forEach(function(e){e.length>0&&(n=!1)}),Object.values(t).forEach(function(e){null===e&&(n=!1)}),n},O=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).handleSubmit=function(e){t.props.history.push("/cards"),e.preventDefault(),y(t.state)?console.log("\n            --SUBMITTING--\n            Name: ".concat(t.state.name,"\n            Email: ").concat(t.state.email,"\n            Phone: ").concat(t.state.phone,"\n            Password: ").concat(t.state.password,"\n            ")):console.error("Form Invalid - display error message")},t.handleChange=function(e){e.preventDefault();var a=e.target,n=a.name,r=a.value,l=t.state.formErrors;switch(n){case"name":l.name=r.length<3?"minimum 3 characters required":"";break;case"email":l.email=j.test(r)?"":"Invalid email address";break;case"phone":l.phone=r.length<10?"minimum 10 characters":"";break;case"password":l.password=r.length<6?"minimum 3 characters required":""}t.setState(Object(m.a)({formErrors:l},n,r),function(){return console.log(t.state)})},t.state={},t.state={name:null,email:null,password:null,phone:null,formErrors:{name:"",email:"",phone:"",password:""}},t}return Object(u.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.state.formErrors;return r.a.createElement(g.a,{onSubmit:this.handleSubmit,className:"login-form",noValidate:!0},r.a.createElement("h1",{className:"text-center"},r.a.createElement("span",{className:"font-weight-bold"},"Login Form")),r.a.createElement("h2",{className:"text-center"},"Welcome"),r.a.createElement(b.a,null,r.a.createElement(f.a,{htmlFor:"name"},"Name"),r.a.createElement(w.a,{type:"text",name:"name",className:e.name.length>0?"error":null,id:"name",placeholder:"Name",noValidate:!0,onChange:this.handleChange}),e.name.length>0&&r.a.createElement("span",{className:"errorMessage"},e.name)),r.a.createElement(b.a,null,r.a.createElement(f.a,{htmlFor:"email"},"Email"),r.a.createElement(w.a,{type:"email",name:"email",className:e.email.length>0?"error":null,id:"email",placeholder:"Email",noValidate:!0,onChange:this.handleChange}),e.email.length>0&&r.a.createElement("span",{className:"errorMessage"},e.email)),r.a.createElement(b.a,null,r.a.createElement(f.a,{htmlFor:"phone"},"Phone"),r.a.createElement(w.a,{type:"phone",name:"phone",className:e.phone.length>0?"error":null,id:"phone",placeholder:"Phone",noValidate:!0,onChange:this.handleChange}),e.phone.length>0&&r.a.createElement("span",{className:"errorMessage"},e.phone)),r.a.createElement(b.a,null,r.a.createElement(f.a,{htmlFor:"password"},"Password"),r.a.createElement(w.a,{type:"password",name:"password",className:e.password.length>0?"error":null,placeholder:"Password",noValidate:!0,onChange:this.handleChange}),e.password.length>0&&r.a.createElement("span",{className:"errorMessage"},e.password)),r.a.createElement(N.a,{type:"submit",className:"btn-lg btn-dark btn-block"},"Login"),r.a.createElement("div",{className:"text-center pt-3"},"Or continue with your social account"),r.a.createElement(v.FacebookLoginButton,{className:"mt-3 mb-3"}),r.a.createElement("div",{className:"text-center"},r.a.createElement(o.b,{exact:!0,to:"/"},"Sign up"),r.a.createElement("span",{className:"p-2"},"|"),r.a.createElement(o.a,{to:"/forgot-password"},"Forgot Password")))}}]),a}(n.Component),x=Object(c.e)(O),k=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/),C=function(e){var a=e.formErrors,t=Object(E.a)(e,["formErrors"]),n=!0;return Object.values(a).forEach(function(e){e.length>0&&(n=!1)}),Object.values(t).forEach(function(e){null===e&&(n=!1)}),n},F=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).handleSubmit=function(e){t.props.history.push("/login"),e.preventDefault(),C(t.state)?console.log("\n            --SUBMITTING--\n            Name: ".concat(t.state.name,"\n            Email: ").concat(t.state.email,"\n            Phone: ").concat(t.state.phone,"\n            Password: ").concat(t.state.password,"\n            ")):console.error("Form Invalid - display error message")},t.handleChange=function(e){e.preventDefault();var a=e.target,n=a.name,r=a.value,l=t.state.formErrors;switch(n){case"name":l.name=r.length<3?"minimum 3 characters required":"";break;case"email":l.email=k.test(r)?"":"Invalid email address";break;case"phone":l.phone=r.length<10?"minimum 10 characters":"";break;case"password":l.password=r.length<6?"minimum 3 characters required":""}t.setState(Object(m.a)({formErrors:l},n,r),function(){return console.log(t.state)})},t.state={name:null,email:null,password:null,phone:null,formErrors:{name:"",email:"",phone:"",password:""}},t}return Object(u.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.state.formErrors;return r.a.createElement(g.a,{onSubmit:this.handleSubmit,className:"login-form",noValidate:!0},r.a.createElement("h1",{className:"text-center"},r.a.createElement("span",{className:"font-weight-bold"},"Sign Up Form")),r.a.createElement("h2",{className:"text-center"},"Welcome"),r.a.createElement(b.a,null,r.a.createElement(f.a,{htmlFor:"name"},"Name"),r.a.createElement(w.a,{type:"text",name:"name",className:e.name.length>0?"error":null,id:"name",placeholder:"Name",noValidate:!0,onChange:this.handleChange}),e.name.length>0&&r.a.createElement("span",{className:"errorMessage"},e.name)),r.a.createElement(b.a,null,r.a.createElement(f.a,{htmlFor:"email"},"Email"),r.a.createElement(w.a,{type:"email",name:"email",className:e.email.length>0?"error":null,id:"email",placeholder:"Email",noValidate:!0,onChange:this.handleChange}),e.email.length>0&&r.a.createElement("span",{className:"errorMessage"},e.email)),r.a.createElement(b.a,null,r.a.createElement(f.a,{htmlFor:"phone"},"Phone"),r.a.createElement(w.a,{type:"phone",name:"phone",className:e.phone.length>0?"error":null,id:"phone",placeholder:"Phone",noValidate:!0,onChange:this.handleChange}),e.phone.length>0&&r.a.createElement("span",{className:"errorMessage"},e.phone)),r.a.createElement(b.a,null,r.a.createElement(f.a,{htmlFor:"password"},"Password"),r.a.createElement(w.a,{type:"password",name:"password",className:e.password.length>0?"error":null,placeholder:"Password",noValidate:!0,onChange:this.handleChange}),e.password.length>0&&r.a.createElement("span",{className:"errorMessage"},e.password)),r.a.createElement(N.a,{type:"submit",className:"btn-lg btn-dark btn-block"},"Sign Up"))}}]),a}(n.Component),P=Object(c.e)(F),S=(t(44),function(e){return r.a.createElement("div",{className:"card text-center shadow"},r.a.createElement("div",{className:"overflow"},r.a.createElement("img",{src:e.imgsrc,alt:"image",className:"card-img-top"})),r.a.createElement("div",{className:"card-body text-dark"},r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text text-secondary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus nam quae ratione dicta sed saepe obcaecati illum debitis quasi."),r.a.createElement("a",{href:"#",className:"btn btn-outline-success"},"Go Anywhere")))}),M=t(29),V=t.n(M),I=t(30),A=t.n(I),q=t(31),z=t.n(q),Z=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(S,{imgsrc:V.a,title:"Skyline"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(S,{imgsrc:A.a,title:"Downtown"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(S,{imgsrc:z.a,title:"Workplace"}))))}}]),a}(n.Component);var B=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:P}),r.a.createElement(c.a,{exact:!0,path:"/login",component:x}),r.a.createElement(c.a,{exact:!0,path:"/dashboard",component:S}),r.a.createElement(c.a,{exact:!0,path:"/cards",component:Z}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(45);s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.ee0d72e7.chunk.js.map