(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),i=n.n(s),o=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))}),a=(n(14),n(5)),l=n(6),h=n(8),b=n(7),d=n(2),j=n.n(d),u=n(0),f=function(e){var t=e.name,n=e.email,c=e.id;return Object(u.jsxs)(j.a,{flipOnHover:!0,flipOnClick:!1,flipDirection:"verizontal",className:"tc dib pa3",children:[Object(u.jsx)(d.FrontSide,{style:{backgroundColor:"lightblue"},className:"tc dib br3 pa3 ma2 grow bw2",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{style:{fontSize:"16px"},children:t}),Object(u.jsx)("p",{children:n})]})]})}),Object(u.jsx)(d.BackSide,{style:{backgroundColor:"lightblue"}})]})},O=function(e){var t=e.robots,n=t.map((function(e,n){return Object(u.jsx)(f,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(u.jsx)("div",{children:n})},p=function(e){e.searchfield;var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--black bg-lightest-blue br3",type:"search",placeholder:"Search Robots",onChange:t})})},x=function(e){return Object(u.jsx)("div",{style:{overflow:"scroll",height:"800px"},children:e.children})},g=(n(34),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.title="Robot Friends",fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{children:"Robot Friends"}),Object(u.jsx)(p,{searchChange:this.onSearchChange}),Object(u.jsx)(x,{children:Object(u.jsx)(O,{robots:t})})]}):Object(u.jsx)("h1",{className:"tc",children:"Loading..."})}}]),n}(c.Component));i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),o()}},[[35,1,2]]]);
//# sourceMappingURL=main.1913d288.chunk.js.map