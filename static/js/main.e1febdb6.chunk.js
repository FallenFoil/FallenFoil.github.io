(this.webpackJsonpmy_website_js=this.webpackJsonpmy_website_js||[]).push([[0],{18:function(e,t,s){},21:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(11),n=s.n(a),i=(s(18),s(2)),r=s(3),l=s(5),o=s(4),j=s(10),d=s(9),h=s.n(d),m=(s(21),s(13)),b=s(7),u=s.n(b),O=s(12),p=s.n(O),x=s(0),f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={is_preloaded:!0,first_render:!0},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.state.is_preloaded=!1}},{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,t=this.props.data.description,s=!1;this.state.first_render&&(this.state.first_render=!1,this.setState(Object(m.a)({},this.state)),s=!0);var c=Object(x.jsx)(p.a,{interval:100,children:t.map((function(e,t){return Object(x.jsxs)(u.a,{className:"typist",startDelay:500,children:[s&&0===t&&Object(x.jsx)(u.a.Delay,{ms:1439}),e,Object(x.jsx)(u.a.Backspace,{count:e.length,delay:1e3})]},e)}))}),a=this.props.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(x.jsx)("i",{className:e.className})})},e.name)}))}for(var n=[],i=1;i<10;i++)n.push(Object(x.jsx)("span",{className:"light x"+i}));return Object(x.jsxs)("header",{id:"home",className:this.state.is_preloaded?"is-preload":"",children:[Object(x.jsxs)("nav",{id:"nav-wrap",children:[Object(x.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(x.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(x.jsxs)("ul",{id:"nav",className:"nav",children:[Object(x.jsx)("li",{className:"current",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{id:"about_btn",className:"smoothscroll",href:"#about",children:"About"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})})]})]}),Object(x.jsx)("div",{className:"row banner",children:Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsx)("h1",{className:"responsive-headline name-animation",children:e}),Object(x.jsx)("div",{className:"description-animation",children:c}),Object(x.jsx)("hr",{}),Object(x.jsx)("ul",{className:"social",children:a})]})}),Object(x.jsx)("p",{className:"scrolldown",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(x.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),v=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:e.url,children:Object(x.jsx)("i",{className:e.className})})},e.name)}));return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"twelve columns",children:[Object(x.jsx)("ul",{className:"social-links",children:e}),Object(x.jsxs)("ul",{className:"copyright",children:[Object(x.jsx)("li",{children:"\xa9 Copyright 2021 Lu\xeds Macedo"}),Object(x.jsxs)("li",{children:["Design by ",Object(x.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(x.jsx)("div",{id:"go-top",children:Object(x.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(x.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),N=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e="images/"+this.props.data.image,t=this.props.data.bio.map((function(e){return Object(x.jsx)("p",{className:"bio",children:e})})),s=this.props.data.resumedownload;return Object(x.jsx)("section",{id:"about",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"three columns",children:Object(x.jsx)("img",{className:"profile-pic",src:e,alt:"Tim Baker Profile Pic"})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsx)("h2",{children:"About Me"}),t,Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"columns download",children:Object(x.jsx)("p",{children:Object(x.jsxs)("a",{href:s,rel:"noreferrer",className:"button",target:"_blank",children:[Object(x.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})})]})]})})}}]),s}(c.Component),w=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage.map((function(e){return Object(x.jsx)("p",{children:e})})),t=this.props.data.education.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.school}),Object(x.jsxs)("p",{className:"info",children:[e.degree," ",Object(x.jsx)("span",{children:"\u2022"}),Object(x.jsx)("em",{className:"date",children:e.graduated})]}),Object(x.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){var t=e.description.map((function(e){return Object(x.jsx)("p",{children:e})}));return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.company}),Object(x.jsxs)("p",{className:"info",children:[e.title,Object(x.jsx)("span",{children:"\u2022"})," ",Object(x.jsx)("em",{className:"date",children:e.years})]}),t]})})),c=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{width:e.level},className:t}),Object(x.jsx)("em",{children:e.name})]},e.name)})),a=this.props.data.online.map((function(e){var t=e.description.map((function(e){return Object(x.jsx)("p",{children:e})}));return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.school}),Object(x.jsxs)("p",{className:"info",children:[e.degree," ",Object(x.jsx)("span",{children:"\u2022"}),Object(x.jsx)("em",{className:"date",children:e.graduated})," ",Object(x.jsx)("span",{children:"\u2022"}),Object(x.jsx)("a",{href:e.credential,rel:"noreferrer",target:"_blank",children:"Credential"})]}),t]},e.school)}));return Object(x.jsxs)("section",{id:"resume",children:[Object(x.jsxs)("div",{className:"row education",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Education"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"row item",children:Object(x.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(x.jsxs)("div",{className:"row education",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Online Courses"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"row item",children:Object(x.jsx)("div",{className:"twelve columns",children:a})})})]}),Object(x.jsxs)("div",{className:"row work",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Work"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(x.jsxs)("div",{className:"row skill",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Skills"})})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[e,Object(x.jsx)("div",{className:"bars",children:Object(x.jsx)("ul",{className:"skills",children:c})})]})]})]})}}]),s}(c.Component),g=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(x.jsx)("div",{className:"columns portfolio-item",children:Object(x.jsx)("div",{className:"item-wrap",children:Object(x.jsxs)("a",{href:e.url,title:e.title,children:[Object(x.jsx)("img",{alt:e.title,src:t}),Object(x.jsx)("div",{className:"overlay",children:Object(x.jsxs)("div",{className:"portfolio-item-meta",children:[Object(x.jsx)("h5",{children:e.title}),Object(x.jsx)("p",{children:e.category})]})}),Object(x.jsx)("div",{className:"link-icon",children:Object(x.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(x.jsx)("section",{id:"portfolio",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"twelve columns collapsed",children:[Object(x.jsx)("h1",{children:"Check Out Some of My Works."}),Object(x.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(c.Component);var k=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(f,{data:this.state.resumeData.main}),Object(x.jsx)(N,{data:this.state.resumeData.main}),Object(x.jsx)(w,{data:this.state.resumeData.resume}),Object(x.jsx)(g,{data:this.state.resumeData.portfolio}),Object(x.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(c.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(x.jsx)(k,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");y?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):D(e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.e1febdb6.chunk.js.map