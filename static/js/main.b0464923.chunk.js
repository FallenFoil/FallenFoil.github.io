(this.webpackJsonpmy_website_js=this.webpackJsonpmy_website_js||[]).push([[0],{20:function(e,t,s){},23:function(e,t,s){},25:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(12),n=s.n(c),i=(s(20),s(2)),r=s(3),l=s(5),o=s(4),j=s(10),d=(s(23),s(11)),h=s(8),b=s.n(h),u=s(13),m=s.n(u),O=s(0),p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={is_preloaded:!0,first_render:!0},a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.setState({is_preloaded:!1})}},{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,t=this.props.data.description,s=!1;this.state.first_render&&(this.setState(Object(d.a)(Object(d.a)({},this.state),{},{first_render:!1})),s=!0);var a=Object(O.jsx)(m.a,{interval:100,children:t.map((function(e,t){return Object(O.jsxs)(b.a,{className:"typist",startDelay:500,children:[s&&0===t&&Object(O.jsx)(b.a.Delay,{ms:1439}),e,Object(O.jsx)(b.a.Backspace,{count:e.length,delay:1e3})]},e)}))}),c=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(O.jsx)("i",{className:e.className})})},e.name)}))}for(var n=[],i=1;i<10;i++)n.push(Object(O.jsx)("span",{className:"light x"+i}));return Object(O.jsxs)("header",{id:"home",className:this.state.is_preloaded?"is-preload":"",children:[Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#fibo",onClick:function(){console.log("test");var e=document.getElementById("fibo").style.display;"none"===e?document.getElementById("fibo").style.display="block":"block"===e&&(document.getElementById("fibo").style.display="none")},children:Object(O.jsx)("span",{style:{opacity:"0"},children:"Fibonacci"})})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)("h1",{className:"responsive-headline name-animation",children:e}),Object(O.jsx)("div",{className:"description-animation",children:a}),Object(O.jsx)("hr",{}),Object(O.jsx)("ul",{className:"social",children:c})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),x=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsxs)("ul",{className:"copyright",children:[Object(O.jsx)("li",{children:"\xa9 Copyright 2021 Lu\xeds Macedo"}),Object(O.jsxs)("li",{children:["Design by ",Object(O.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e="images/"+this.props.data.image,t=-1,s=this.props.data.bio.map((function(e){if(t++,e.includes("{age}")){var s=new Date,a=s.getFullYear()-1998;return s.getMonth()<=1&&s.getDate()<10&&a--,Object(O.jsx)("p",{className:"bio",children:e.replace("{age}",a)},t)}return Object(O.jsx)("p",{className:"bio",children:e},t)})),a=this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:e,alt:"Luis Macedo Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),s,Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:a,rel:"noreferrer",className:"button",target:"_blank",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})})]})]})})}}]),s}(a.Component),v=s(14),N=s.n(v),g=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage.map((function(e){return Object(O.jsx)("p",{children:e})})),t=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){var t=e.description.map((function(e){return Object(O.jsx)("p",{children:e})}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),t]})})),a=this.props.data.skills.map((function(e){var t="images/skills/"+e.image;return Object(O.jsx)("img",{alt:e.image,className:"marquee-img",src:t})})),c=this.props.data.online.map((function(e){var t=e.description.map((function(e){return Object(O.jsx)("p",{children:e})}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("a",{href:e.credential,rel:"noreferrer",target:"_blank",children:"Credential"})]}),t]},e.school)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Online Courses"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:c})})})]}),Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Skills"})})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[e,Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)(N.a,{className:"marquee",pauseOnClick:"true",speed:"30",children:a})})]})]})]})}}]),s}(a.Component),w=s(15),y=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e,t){var s="images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsx)("div",{className:"item-wrap",children:Object(O.jsxs)("a",{href:e.url,title:e.title,children:[e.video?e.no_hover?Object(O.jsx)("video",{className:"project-video",autoPlay:!0,loop:!0,muted:!0,children:Object(O.jsx)("source",{src:s,type:"video/mp4"})}):Object(O.jsx)(w.a,{videoSrc:s,hoverTarget:function(){return document.getElementById("overlay-"+t)}}):Object(O.jsx)("img",{alt:e.title,src:s}),Object(O.jsx)("div",{className:"overlay",id:"overlay-"+t,children:Object(O.jsxs)("div",{className:"portfolio-item-meta",children:[Object(O.jsx)("h5",{children:e.title}),Object(O.jsx)("p",{children:e.category})]})}),Object(O.jsx)("div",{className:"link-icon",children:Object(O.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Check Out Some of My Works."}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),k=s(6);function S(e){for(var t,s=1,a=0;e>=0;)t=s,s+=a,a=t,e--;return a}var D=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={start:0,size:6,result:0,random:Math.floor(1001*Math.random())},a.changeStart=a.changeStart.bind(Object(k.a)(a)),a.changeSize=a.changeSize.bind(Object(k.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(a)),a.newNumber=a.newNumber.bind(Object(k.a)(a)),a.useNumber=a.useNumber.bind(Object(k.a)(a)),a}return Object(r.a)(s,[{key:"changeStart",value:function(e){this.setState({start:e.target.value})}},{key:"changeSize",value:function(e){this.setState({size:e.target.value})}},{key:"handleSubmit",value:function(e){var t=function(e,t){for(var s="",a=e;s.length<t;)s=(s+=S(a)).replace(".",""),a++;return s.length>t&&(s=s.substring(0,t)),s}(this.state.start,this.state.size);this.setState({result:t}),e.preventDefault()}},{key:"newNumber",value:function(){this.setState({random:Math.floor(1001*Math.random())})}},{key:"useNumber",value:function(){this.setState({start:this.state.random})}},{key:"render",value:function(){return Object(O.jsx)("section",{id:"fibo",style:{display:"none"},children:Object(O.jsxs)("div",{style:{margin:"auto",marginTop:"10%",display:"flex",width:"30%",flexDirection:"column"},children:[Object(O.jsxs)("div",{style:{color:"white"},children:[Object(O.jsxs)("p",{children:["Random Number: ",Object(O.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.5em"},children:this.state.random})]}),Object(O.jsx)("button",{onClick:this.newNumber,style:{width:"40%"},children:"New Number"}),Object(O.jsx)("button",{onClick:this.useNumber,style:{width:"40%",marginLeft:"1em"},children:"Use Number"})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{style:{color:"white"},children:["Start:",Object(O.jsx)("input",{style:{width:"30%",marginLeft:"1em"},type:"number",value:this.state.start,onChange:this.changeStart})]}),Object(O.jsxs)("label",{style:{color:"white"},children:["Size:",Object(O.jsx)("input",{style:{width:"30%",marginLeft:"1.6em"},type:"number",value:this.state.size,onChange:this.changeSize})]}),Object(O.jsx)("input",{style:{width:"100%",height:"30%"},type:"submit",value:"Submit"}),Object(O.jsxs)("p",{style:{color:"white"},children:["Result: ",Object(O.jsx)("span",{style:{fontWeight:"bold",fontSize:"2em"},children:this.state.result})]})]})})]})})}}]),s}(a.Component),C=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){var e=this;fetch("/resumeData.json").then((function(e){return e.json()})).then((function(t){e.setState({resumeData:t})}),(function(e){alert("Could get some data")}))}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{data:this.state.resumeData.main}),Object(O.jsx)(D,{}),Object(O.jsx)(f,{data:this.state.resumeData.main}),Object(O.jsx)(g,{data:this.state.resumeData.resume}),Object(O.jsx)(y,{data:this.state.resumeData.portfolio}),Object(O.jsx)(x,{data:this.state.resumeData.main})]})}}]),s}(a.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(O.jsx)(C,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");_?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):z(e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.b0464923.chunk.js.map