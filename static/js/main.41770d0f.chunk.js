(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(10),a(11),function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("nav",{className:"nav nav-pills nav-justified m-3"},r.a.createElement("h4",null,"Home")))))}),s=a(1),i={photoFeeds:[]},m=1;m<16;m++)i.photoFeeds.push({id:m,title:"This Is Title ".concat(m),content:"This is content ".concat(m),image:"https://picsum.photos/400/200?random&img=".concat(Math.floor(100*Math.random())+1),tags:m%2===0?["AAA","BBB"]:["CCC","DDD"]});var u=i,f=r.a.createContext(i),d=a(4);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var E=function(e){var t=Object(n.useContext)(f),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],E=i[1];Object(n.useEffect)((function(){}),[]);var p=function(e){if(l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},u)),e.target.value!==m){var t=c.photoFeeds.filter((function(t){return t.tags.includes(e.target.value)}));E(e.target.value),l({photoFeeds:t})}else E((function(e){return""}))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("button",{className:"m-2",onClick:p,value:"AAA"},"AAA"),r.a.createElement("button",{className:"m-2",onClick:p,value:"BBB"},"BBB"),r.a.createElement("button",{className:"m-2",onClick:p,value:"CCC"},"CCC"),r.a.createElement("button",{className:"m-2",onClick:p,value:"DDD"},"DDD")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("button",{className:"m-2",onClick:function(e){l(u)}},"Reset All"))))},p=function(e){var t=e.items;return r.a.createElement("div",{className:"row"},t.photoFeeds.map((function(e){return r.a.createElement(h,{key:e.id,article:e})})))},h=function(e){var t=e.article;return r.a.createElement("div",{key:t.id,className:"col-6 col-sm-4 p-1"},r.a.createElement("h3",null,t.title),r.a.createElement("img",{src:"".concat(t.image),alt:t.title}),r.a.createElement("p",null,t.content))},b=function(){var e=Object(n.useContext)(f),t=Object(n.useState)(e),a=Object(s.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){}),[]);return r.a.createElement(f.Provider,{value:[c,l]},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-8"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",id:"searchInput","aria-describedby":"searchHelp",placeholder:"What do you want to search?",onChange:function(t){var a=c.photoFeeds.filter((function(e){if(e.title.toLowerCase().indexOf(t.target.value.toLowerCase())>-1||e.content.toLowerCase().indexOf(t.target.value.toLowerCase())>-1)return e}));""===t.target.value?setTimeout((function(){return l(e)}),500):setTimeout((function(){return l({photoFeeds:a})}),500)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg col-4 col-sm-2"},"Search")))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement(E,null)),r.a.createElement("div",{className:"col-sm-8 mt-5"},r.a.createElement("h3",null,"Feeds"),r.a.createElement("hr",null),r.a.createElement(p,{items:c})))))},g=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("hr",null),r.a.createElement("h2",null,r.a.createElement("p",{className:"text-center"},"This is Footer")))))},N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(b,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(12),a(13);l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports=a(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.41770d0f.chunk.js.map