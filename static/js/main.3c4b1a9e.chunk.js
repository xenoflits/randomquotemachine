(this.webpackJsonprandomquotemachine=this.webpackJsonprandomquotemachine||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),u=(n(13),n(4)),i=n(5),s=n(1),l=n(7),m=n(6),d=function(e){return a.a.createElement("button",{className:"quotebutton",onClick:function(){e.getQuote()}},"New Quote")},h=function(e){var t=e.quote.replace(/<p[^>]*>|<\/p>/g,"").replace(/&#8217;/g,"'").replace(/&#8211;/g,"-");return a.a.createElement("div",{className:"quotefield"},a.a.createElement("div",{className:"quotefield-quote"},t),a.a.createElement("div",{className:"quotefield-title"},e.title))},f=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this)).getQuote=o.getQuote.bind(Object(s.a)(o)),o.state={currentQuote:"empty",title:"empty",randomnumber:0},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var e=this;fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand").then((function(e){return e.json()})).then((function(t){for(var n=e.state.randomnumber,o=0;n===o;)o=Math.floor(10*Math.random());var a=t[o].content.rendered,r=t[o].title.rendered;e.setState({currentQuote:a,currentTitle:r})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,{quote:this.state.currentQuote,title:this.state.currentTitle}),a.a.createElement(d,{getQuote:this.getQuote}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3c4b1a9e.chunk.js.map