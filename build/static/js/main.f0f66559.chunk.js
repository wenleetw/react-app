(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),i=a.n(c),l=(a(9),a(10),function(e){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("nav",{className:"nav nav-pills nav-justified m-3"},s.a.createElement("h4",null,"Home")))))}),o=a(1),r={newsFeeds:[{id:1,title:"This Is Title 1",content:"This is content 1",image:"https://picsum.photos/400/200",tags:["AAA","BBB"]},{id:2,title:"This Is Title 2",content:"This is content 2",image:"https://picsum.photos/400/200",tags:["AAA"]},{id:3,title:"This Is Title 3",content:"This is content 3",image:"https://picsum.photos/400/200",tags:["AAA"]},{id:4,title:"This Is Title 4",content:"This is content 4",image:"https://picsum.photos/400/200",tags:["AAA"]},{id:5,title:"This Is Title 5",content:"This is content 5",image:"https://picsum.photos/400/200",tags:["CCC"]},{id:6,title:"This Is Title 6",content:"This is content 6",image:"https://picsum.photos/400/200",tags:["AAA"]},{id:7,title:"This Is Title 7",content:"This is content 7",image:"https://picsum.photos/400/200",tags:["BBB"]},{id:8,title:"This Is Title 8",content:"This is content 8",image:"https://picsum.photos/400/200",tags:["AAA"]},{id:9,title:"This Is Title 9",content:"This is content 9",image:"https://picsum.photos/400/200",tags:["AAA","CCC"]},{id:10,title:"This Is Title 10",content:"This is content 10",image:"https://picsum.photos/400/200",tags:["AAA"]}]},m=r,u=s.a.createContext(r),h=function(e){var t=Object(n.useContext)(u),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(""),r=Object(o.a)(l,2),h=r[0],d=r[1];Object(n.useEffect)((function(){}),[]);var p=function(e){if(e.target.value===h)return d(""),void i(m);var t=c.newsFeeds.filter((function(t){return t.tags.includes(e.target.value)}));d(e.target.value),i({newsFeeds:t})};return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("button",{className:"m-2",onClick:p,value:"AAA"},"AAA"),s.a.createElement("button",{className:"m-2",onClick:p,value:"BBB"},"BBB"),s.a.createElement("button",{className:"m-2",onClick:p,value:"CCC"},"CCC"),s.a.createElement("button",{className:"m-2",onClick:p,value:"DDD"},"DDD")),s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("button",{className:"m-2",onClick:function(e){i(m)}},"Reset"))))},d=function(e){var t=e.items;return s.a.createElement("div",{className:"row"},t.newsFeeds.map((function(e){return s.a.createElement(p,{key:e.id,article:e})})))},p=function(e){var t=e.article;return s.a.createElement("div",{key:t.id,className:"col-6 col-sm-4 p-1"},s.a.createElement("h3",null,t.title),s.a.createElement("img",{src:"".concat(t.image,"?random&img=").concat(t.id),alt:t.title}),s.a.createElement("p",null,t.content))},E=function(){var e=Object(n.useContext)(u),t=Object(n.useState)(e),a=Object(o.a)(t,2),c=a[0],i=a[1];Object(n.useEffect)((function(){}),[]);return s.a.createElement(u.Provider,{value:[c,i]},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("form",null,s.a.createElement("div",{className:"form-group row"},s.a.createElement("div",{className:"col-12 offset-sm-1 col-sm-8"},s.a.createElement("input",{type:"text",className:"form-control form-control-lg",id:"searchInput","aria-describedby":"searchHelp",placeholder:"What do you want to search?",onChange:function(t){var a=c.newsFeeds.filter((function(e){if(e.title.toLowerCase().indexOf(t.target.value.toLowerCase())>-1)return e}));""===t.target.value?setTimeout((function(){return i(e)}),500):setTimeout((function(){return i({newsFeeds:a})}),500)}})),s.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg col-4 col-sm-2"},"Search")))),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-3"},s.a.createElement(h,null)),s.a.createElement("div",{className:"col-sm-8 mt-5"},s.a.createElement("h3",null,"Feeds"),s.a.createElement("hr",null),s.a.createElement(d,{items:c})))))},v=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("hr",null),s.a.createElement("h2",null,s.a.createElement("p",{className:"text-center"},"This is Footer")))))},f=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l,null),s.a.createElement(E,null),s.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(11),a(12);i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports=a(15)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.f0f66559.chunk.js.map