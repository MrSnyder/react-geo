!function(e){function t(t){for(var r,u,l=t[0],c=t[1],f=t[2],p=0,s=[];p<l.length;p++)u=l[p],o[u]&&s.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);s.length;)s.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={22:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var i=c;a.push([461,1,0]),n()}({461:function(e,t,n){"use strict";var r=p(n(2)),o=n(16),a=p(n(43)),u=p(n(58)),l=p(n(54)),c=p(n(65)),f=p(n(21)),i=n(37);function p(e){return e&&e.__esModule?e:{default:e}}var s=new a.default({layers:[new l.default({name:"OSM",source:new c.default})],view:new u.default({center:f.default.fromLonLat([37.4057,8.81566]),zoom:19})});(0,o.render)(r.default.createElement("div",null,r.default.createElement("div",{id:"map",style:{height:"400px"}}),r.default.createElement("div",{className:"example-block"},r.default.createElement("span",null,"Zoom in button:"),r.default.createElement(i.ZoomInButton,{map:s},"Zoom in (+)"))),document.getElementById("exampleContainer"),function(){s.setTarget("map")})}});