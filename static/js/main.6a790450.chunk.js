(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(57)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),c=n.n(l),o=(n(20),n(1)),i=n(2),s=n(4),u=n(3),m=n(5);n(21);function h(e){var t=e.unread?r.a.createElement("div",{className:"unread_count badge"},e.unread):null;return r.a.createElement("div",{className:"messages"},e.name,t)}n(22);var p=function(e){var t="split ".concat(e.className),n={flex:e.flexBasis};return r.a.createElement("div",{className:t,style:n},e.children)},d=(n(23),n(24),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"Tooltip"},r.a.createElement("span",{className:"Tooltip-content",style:{color:this.props.color}},this.props.children),r.a.createElement("div",{className:"Tooltip-message"},this.props.message))}}]),t}(r.a.Component));d.defaultProps={color:"#01A800"};var f=d,b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={datetime:new Date},console.log("called constructor"),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("called componentDidMount"),this.interval=setInterval(function(){console.log("called setInterval"),e.setState({datetime:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){console.log("called componentWillUnmount"),clearInterval(this.interval)}},{key:"render",value:function(){return console.log("called render"),console.log(this.state),r.a.createElement("div",null,"Current DateTime: ",this.state.datetime.toLocaleString())}}]),t}(r.a.Component),v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={count:n.props.count,step:n.props.step},n.handleButtonClick=function(){console.log("props in handleButtonClick",n.props),console.log("state in handleButtonClick",n.state),n.setState({count:n.state.count+n.state.step}),console.log("this.state.count shows value before updated = ",n.state.count)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"The current count: ",this.state.count),r.a.createElement("button",{onClick:this.handleButtonClick},"Add ",this.state.step))}}]),t}(r.a.Component);v.defaultProps={count:0,step:2};n(25);var E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentTabIndex:0},n.handleButtonClick=function(e){return function(){console.log("button clicked!",{index:e}),n.setState({currentTabIndex:e})}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderButtons",value:function(){var e=this;return this.props.tabs.map(function(t,n){return r.a.createElement("button",{className:"tabButtons",key:n,onClick:e.handleButtonClick(n)},t.name)})}},{key:"renderContent",value:function(){var e=this.props.tabs[this.state.currentTabIndex];return r.a.createElement("div",{className:"content"},e.content)}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderButtons(),!!this.props.tabs.length&&this.renderContent())}}]),t}(r.a.Component);E.defaultProps={tabs:[]};var g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={who:n.props.who},n.handleButtonClick=function(e){return function(){n.setState({who:e})}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HelloWorld"},r.a.createElement("p",null,"Hello, ",this.state.who,"!"),r.a.createElement("button",{onClick:this.handleButtonClick(this.props.who)},"Change to ",this.props.who),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleButtonClick(this.props.friend)},"Change to ",this.props.friend),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleButtonClick(this.props.react)},"Change to ",this.props.react))}}]),t}(r.a.Component);g.defaultProps={who:"world",friend:"friend",react:"React"};var y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={count:n.props.count,display:n.props.display},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("called componentDidMount"),this.interval=setInterval(function(){console.log("called setInterval"),e.setState({count:e.state.count+1}),e.state.count>7?(e.setState({display:"BOOM!!!!"}),e.componentWillUnmount()):e.state.count%2===0?e.setState({display:"tock"}):e.setState({display:"tick"})},1e3)}},{key:"componentWillUnmount",value:function(){console.log("called componentWillUnmount"),clearInterval(this.interval)}},{key:"render",value:function(){return console.log("called render"),r.a.createElement("div",{className:"Bomb"},r.a.createElement("p",null,this.state.display))}}]),t}(r.a.Component);y.defaultProps={count:0,display:"tick"};var j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={chamber:null,spinningTheChamber:!1},n.handleButtonClick=function(){n.setState({spinningTheChamber:!0}),n.timeout=setTimeout(function(){console.log("called setTimeout"),n.setState({chamber:Math.ceil(8*Math.random()),spinningTheChamber:!1})},2e3)},n.renderDisplay=function(){return n.state.spinningTheChamber?"spinning the chamber and pulling the trigger!...":n.state.chamber===n.props.bulletInChamber?"BANG!!!!":"you're safe!"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){console.log("called componentWillUnmount"),clearTimeout(this.timeout)}},{key:"render",value:function(){return r.a.createElement("div",{className:"RouletteGun"},r.a.createElement("p",null,this.renderDisplay(),r.a.createElement("br",null),"chamber is ",this.state.chamber,r.a.createElement("br",null),"bullet in chamber is ",this.props.bulletInChamber),r.a.createElement("button",{onClick:this.handleButtonClick},"Pull the trigger!"))}}]),t}(r.a.Component);j.defaultProps={bulletInChamber:8};n(26);var k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentSectionIndex:null},n.toggleActive=function(e){return function(t){null!==document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")}},n.handleButtonClick=function(e){return function(t){n.setState({currentSectionIndex:e}),null!==document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),t.currentTarget.classList.add("active")}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderButtons",value:function(){var e=this,t=this.props.sections,n=this.state.currentSectionIndex,a=t.map(function(a,l){return r.a.createElement("li",{key:l},r.a.createElement("button",{className:"accordion",onClick:e.handleButtonClick(l)},a.title),!!t.length&&n===l&&e.renderContent(t,n))});return r.a.createElement("ul",{className:"accordianList"},a)}},{key:"renderContent",value:function(e,t){var n=e[t];return r.a.createElement("div",{className:"panel"},r.a.createElement("p",null,n.content))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderButtons())}}]),t}(r.a.Component);k.defaultProps={sections:[]};var O=n(7),C=n(13),S=n.n(C),w=function(e){return Object(O.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(S.a,{type:"ThreeDots",color:"#00FFFF",height:100,width:100}))};n(54),n(55);function N(e){return r.a.createElement("div",{className:"demonym"},"A ",e.name," comes from ",e.country)}n(56);var B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"changeSelection",value:function(e){if("None"===e)this.props.changeHandler(null);else{var t=this.props.countries.find(function(t){return t.name===e});this.props.changeHandler(t)}}},{key:"render",value:function(){var e=this,t=this.props.countries.map(function(e,t){return r.a.createElement("option",{value:e.name,key:t},e.name)});return r.a.createElement("div",{className:"country_selector"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"country"},"Select a country: "),r.a.createElement("select",{id:"country",name:"country",onChange:function(t){return e.changeSelection(t.target.value)}},r.a.createElement("option",{value:"None"},"Select one..."),t)))}}]),t}(a.Component);B.defaultProps={countries:[]};var T=B,q="https://country.register.gov.uk/records.json?page-size=5000",I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).fetchCountries=function(){Object(O.trackPromise)(fetch(q).then(function(e){if(console.log("About to check for errors"),!e.ok)throw console.log("An error did occur, lets throw an error."),new Error("Something went wrong");return e}).then(function(e){return e.json()}).then(function(e){var t=Object.keys(e).map(function(t){return e[t].item[0]});n.setState({countries:t,error:null})}).catch(function(e){console.log("Handling the error here.",e),n.setState({error:e.message})}))},n.state={countries:[],selected:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchCountries()}},{key:"setSelected",value:function(e){this.setState({selected:e})}},{key:"render",value:function(){var e=this,t=this.state.selected?r.a.createElement(N,{name:this.state.selected["citizen-names"],country:this.state.selected.name}):r.a.createElement("div",{className:"demonym_app__placeholder"},"Select a country above"),n=this.state.error?r.a.createElement("div",{className:"demonym_app__error"},this.state.error):r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null));return r.a.createElement("div",{className:"demonym_app"},n,r.a.createElement(T,{countries:this.state.countries,changeHandler:function(t){return e.setSelected(t)}}),t)}}]),t}(a.Component);function x(){alert("This is myFunc - its just an alert!")}var A=r.a.createElement(f,{color:"hotpink",message:"tooltip message"},"ipsum"),F=r.a.createElement(f,{color:"#126BCC",message:"another tooltip message"},"officiis"),L=[{name:"First tab",content:"First tab: Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."},{name:"Second tab",content:"Second tab: Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Third tab",content:"Third tab: Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."}],D=[{title:"Section 1",content:"Section 1: Lorem ipsum dolor sit amet consectetur adipisicing elit."},{title:"Section 2",content:"Section 2: Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"},{title:"Section 3",content:"Section 3: Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"}],M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement(p,{className:"left",flexBasis:2},r.a.createElement("h1",null,"My React Playground"),r.a.createElement("div",null,"Hello!"),"This is the content for the left `Split`.",r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?",r.a.createElement("hr",null),r.a.createElement("h2",null,"DemonynApp"),r.a.createElement(I,null),r.a.createElement("hr",null),r.a.createElement("h2",null,"Accordian"),r.a.createElement(k,{sections:D}),r.a.createElement("hr",null),r.a.createElement("h2",null,"Tabs"),r.a.createElement(E,{tabs:L}),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("h2",null,"RouletteGun"),r.a.createElement(j,null),r.a.createElement("hr",null),r.a.createElement("h2",null,"Bomb"),r.a.createElement(y,null),r.a.createElement("hr",null),r.a.createElement("h2",null,"HelloWorld"),r.a.createElement(g,null),r.a.createElement("hr",null),r.a.createElement("h2",null,"Counter"),r.a.createElement(v,{count:120}),r.a.createElement("hr",null),r.a.createElement("h2",null,"TheDate"),r.a.createElement(b,null),r.a.createElement("hr",null),r.a.createElement("h2",null,"Messages"),r.a.createElement("br",null),r.a.createElement(h,{name:"Messages",unread:0}),r.a.createElement(h,{name:"Notifications",unread:10}),r.a.createElement("hr",null),r.a.createElement("h2",null,"Tooltips"),r.a.createElement(f,{message:"one more tooltip message"},"Necessitatibus?"),r.a.createElement("br",null),r.a.createElement("br",null),A,r.a.createElement("br",null),r.a.createElement("br",null),F,r.a.createElement("hr",null),r.a.createElement("h2",null,"MyFunction"),r.a.createElement("button",{onClick:x},"Click Me")),r.a.createElement(p,{className:"right"},"This is the content for the right `Split`.",r.a.createElement("br",null),"Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur."))}}]),t}(r.a.Component);c.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6a790450.chunk.js.map