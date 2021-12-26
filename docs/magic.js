"use strict";var b=["to","action","text"],c=["href","nofollow","noreferrer"],d=["collapse","items","text","url"];function e(a){return r(a)||f(a)||o(a)||n()}function f(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function g(a,b){if(null==a)return{};var c,d,e=h(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function h(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){return r(a)||q(a,b)||o(a,b)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(a,b){if(a){if("string"==typeof a)return p(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?p(a,b):void 0}}function p(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function q(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function r(a){if(Array.isArray(a))return a}function s(a){"@babel/helpers - typeof";return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},s(a)}(function(){var f=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===s(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){q(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),q)),d&&!c&&g(s,c=!0)),b},o=a.middleware,p=void 0===o?function(a){return a}:o,q=p(function(a,c){return"function"==typeof a?q(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?q(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](q,a[1])},m(a[0])),b):m(a)}),s=function(){c=!1,e=r(e.parentNode,e,h,h=u(d(b)),l)};q(a.init)}}}(),i=f.h,h=f.app,j=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0,e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===s(a)})};if(e(d,"undefined")){if(b.props)return i(a,{},[b]);e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})}return i(a,b,d)}},l=j("a"),a=j("button"),n=j("circle"),o=j("code"),q=j("div"),r=j("footer"),t=j("g"),u=j("h1"),v=j("h2"),w=j("h3"),x=j("h4"),y=j("header"),z=j("img"),A=j("input"),B=j("li"),C=j("link"),D=j("main"),E=j("meta"),F=j("nav"),G=j("p"),p=j("path"),H=j("pre"),I=j("script"),J=j("span"),K=j("svg"),L=j("title"),M=j("ul"),N=j("view"),O={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},P=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[w(b?X({to:b},i):i),h.map(function(c){var d=m(c,2),e=d[0],f=d[1];return f.map(function(c){return Q(k(k(k({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},Q=function(a){return q([x([a.day,"-",a.month,"-",a.year," - ",X({to:a.name},a.title)]),G(a.description)])},R=function(){return q({class:"Credits"},["made with a few bits of ",X({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")])},S=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return r({class:"Footer"},[q({class:"Container"},[R(),a])])},T=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.branch,d=void 0===c?"master":c,e=b.host,f=void 0===e?"github":e,g=a,h=g.project,i=void 0!==h&&h,j="",k=i;i.startsWith("@")?(j="@",i=i.substr(1)):k=i.split("/")[1];var l=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://www.npmjs.com/package/".concat(k),src:"https://img.shields.io/npm/v/".concat(j).concat(a,"?color=blue")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/node/v/".concat(j).concat(a,"?color=blue")}}],["license",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/npm/l/".concat(j).concat(a,"?color=blue")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(d)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;if(a){var b=a.split("/"),c=m(b,2),e=c[0],f=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(f,"/branch/").concat(d),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(f,"/").concat(d,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return{to:"https://coveralls.io/".concat(f,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(f,"/").concat(a,"/").concat(d,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://snyk.io/test/".concat(f,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=m(b,2),d=c[0],e=c[1];return e(a[d])});return l.length?M({class:"GitBadges"},l.map(function(a){var b=a.to,c=a.src;if(c){var d=V({src:c,height:"23"});return b?B(X({to:b},d)):B(d)}})):void 0},U=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.logotext,f=a.hash,g=a.url;return c||d||e?y({class:"Header"},[Y(),e&&G(e),d&&Z({url:g,hash:f,menu:d}),b]):void 0},V=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),z(a)},W=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return K({class:"LightSwitch icon",onclick:da.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])},X=function(a,d){var e=a.to,f=a.action,h=void 0===f?da.go:f,i=a.text,j=g(a,b),k=j.href,m=j.nofollow,n=j.noreferrer,o=g(j,c);e=e||k||"",o.href=e,i&&d?i=[i,d]:!i&&(d?i=d:i=e);var p="/"===e[0]||"#"===e[0];return p?o.onclick=[h,ca.preventDefault]:(o.target="_blank",o.rel="noopener",m&&(o.rel+=" nofollow"),n&&(o.rel+=" noreferrer")),l(o,i)},Y=function(){return X({to:"/git-badges/",class:"Logo"},[K({viewBox:"0 0 512 444"},[p({d:"M512 444L256 0 0 444z",fill:"#663695"}),n({cx:"256",cy:"294",r:"130",fill:"#fff"}),n({cx:"256",cy:"281",r:"40",fill:"#663695"}),p({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),p({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])])},Z=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.collapse,c=a.menu,d=a.hash,e=a["class"],f=void 0===e?"":e,g=a.url;return f.includes("Menu")||(f="Menu ".concat(f).trim()),d&&!g.endsWith(d)&&(g+="#".concat(d)),F({className:f},M(c.map(function(a){return $(k(k({},a),{},{url:g,collapse:void 0===b||b}))})))},$=function(a){var b=a.collapse,c=a.items,e=void 0===c?[]:c,f=a.text,h=a.url,i=g(a,d),j={class:{}},l=i.to;l===h&&(j["class"].active=!0);var m=[],n=!b||h.includes(l);return n&&e.length&&(m=M(e.map(function(a){return $(k({url:h,collapse:b},a))}))),B(j,[l?X(i,f):J(i,f),m])},_=function(a){var b=a.nospy,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Notice":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.buttonText,l=void 0===k?"Awesome!":k;return f?q({class:"NoSpy"},[q({class:"Container"},[h&&w(h),j&&G(j),A({onclick:da.nospy.toggle,value:l,type:"button"})])]):q({class:"NoSpy"},K({class:"icon",onclick:da.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[t([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),n({cx:"192",cy:"128",r:"32"}),n({cx:"128",cy:"256",r:"32"}),n({cx:"288",cy:"384",r:"32"}),n({cx:"272",cy:"272",r:"16"}),n({cx:"400",cy:"336",r:"16"}),n({cx:"176",cy:"368",r:"16"})])]))},aa=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return D(e,q({class:{Wrapper:!0}},[U(d),q({class:"Page",id:"page"},c(d)),S(d),b]))},ba=function(b,c){"string"==typeof b?b={content:b}:c?b=k({content:c},b):Array.isArray(b)&&(b={content:b.join("")});var d=b,f=d.content,g=d.lines,h=!(void 0!==g)||g;return q({class:{Pre:!0,lines:h&&"false"!==h}},[q({class:"menu"},[a({onclick:[da.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),H(f.trim().split("\n").map(ba.Line))])};ba.Comment=function(a){return J({class:"comment"},a)},ba.Line=function(a){return o({class:"line"},ba.Words(a))},ba.Word=function(a){if(!a)return"";var b=a.includes("://"),c=a.startsWith("mailto:")||a.includes("@")&&a.includes(".");if(b||c)return X({to:a,text:a});var d="";return"state"===a?d="state":"actions"===a?d="actions":ca.pre.keywords.includes(a)?d="keyword":ca.pre.builtins.includes(a)?d="builtin":ca.pre.booleans.includes(a)&&(d="boolean"),d?J({class:d},a):a},ba.Words=function(a){var b=a.split(ca.pre.commentRegex),c=e(b),d=c[0],f=c.slice(1),g=!d.endsWith(":")&&f.length;if(g)return[ba.Words(d),ba.Comment(f.join("").split(ca.pre.wordRegex).map(ba.Word))];var h=[],i=a;if(a.replace(ca.pre.stringRegex,function(a){if(i){var b=i.split(a),c=m(b,2),d=c[0],e=c[1];d&&h.push(d.split(ca.pre.wordRegex).map(ba.Word).filter(function(b){return b})),i=e}h.push(J({class:"string"},a))}),i!==a)return i&&h.push(i.split(ca.pre.wordRegex).map(ba.Word).filter(function(b){return b})),h;var j=a.split(ca.pre.wordRegex).filter(function(b){return b});return j.map(ba.Word)};var ca={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function preventDefault(a){return a.preventDefault(),a}},da={changeTheme:function changeTheme(a){return k(k({},a),{},{pageClass:k(k({},a.pageClass),{},{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=m(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=a.pages&&a.pages[f]&&a.pages[f].title;i&&(document.title=a.title=i),f===a.url?window.location.hash=h:!h&&window.scrollTo({top:0});var j=window,l=j.scrollY;return window.history.pushState({url:f,hash:h,scrollY:l},a.title,c),k(k({},a),{},{url:f,hash:h,prev:a.url})},nospy:{toggle:function toggle(a){return a.nospy.show=!a.nospy.show,k({},a)}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f}),k(k({},a),{},{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},ea={"/git-badges/":function gitBadges(){return[u({id:"magic-modulesgit-badges"},"@magic-modules/git-badges"),G(["this is the\n",X({to:"https://github.com/magic-modules",text:"@magic-modules"}),"\nGitBadges component."]),G("shows git badges for a github/gitlab repository."),v({id:"installation"},"installation"),ba({lines:"false"},"npm install @magic-modules/git-badges"),v({id:"usage"},"usage"),G("in a page/component, just pass the badge user/project string for those badges you want to show:"),ba("<GitBadges\n  // show all badges,\n  // insert project into the various urls of the badges\n  project=\"user/project\"\n\n  // optional if different to project above\n  // every one of this arguments can be false to hide a badge\n  npm=\"user/project\" || false,\n  travis=\"user/project\" || false,\n  coveralls=\"user/project\" || false,\n  appveyor=\"user/project\" || false, // - will automatically be removed from the user.\n  greenkeeper=\"user/project\" || false,\n\n  // optional, master is default value\n  branch=\"master\">\n</GitBadges>"),v({id:"gitlab--other-git-hosts"},"gitlab / other git hosts"),G("to use gitlab or any other git host in the urls that need a git host to be set,\nsimply pass a host prop to the GitBadges module"),ba({lines:"false"},"<GitBadges project=\"gitlab-org/gitlab-repo\" host=\"gitlab\"></GitBadges>"),v({id:"demo"},"demo"),G("this demo also shows how to use npm @org/repository names."),ba({lines:"false"},"<GitBadges>@magic-modules/git-badges</GitBadges>"),G("renders"),T("@magic-modules/git-badges"),v({id:"source"},"source"),G(["the source for this page is in the\n",X({to:"https://github.com/magic-modules/git-badges/tree/master/example",text:"example directory"}),"\nand gets built and published to github using\n",X({to:"https://github.com/magic/core",text:"@magic/core"})])]},"/git-badges/404/":function gitBadges404(){return q("404 - not found.")}};h({init:k(k({},{description:"shows git badges for a github/gitlab repository.",logotext:"GitBadges",menu:[{text:"installation",to:"/git-badges/#installation"},{text:"usage",to:"/git-badges/#usage"},{text:"demo",to:"/git-badges/#demo"},{text:"source",to:"/git-badges/#source"}],nospy:{show:!1},pageClass:{},pages:{"/git-badges/":{menu:[{text:"installation",to:"/git-badges/#installation"},{text:"usage",to:"/git-badges/#usage"},{text:"demo",to:"/git-badges/#demo"},{text:"source",to:"/git-badges/#source"}]},"/git-badges/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/git-badges/",theme:"dark",title:"@magic-modules/git-badges",url:"/git-badges/"}),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[O.listenPopState,da.pop]]},view:function(a){var b=ea[a.url]?a.url:"/404/",c=ea[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,aa({page:c,state:a},[W(a),_(a)])},node:document.getElementById("Magic")})})();