!function(e){function t(t){for(var o,i,a=t[0],u=t[1],c=t[2],p=0,f=[];p<a.length;p++)i=a[p],r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(s&&s(t);f.length;)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={4:0},l=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var s=u;l.push([441,1,0]),n()}({441:function(e,t,n){"use strict";var o,r=n(2),l=(o=r)&&o.__esModule?o:{default:o},i=n(16),a=n(37);var u=!1,c=function(){u=!u,s()},s=function(){(0,i.render)(l.default.createElement("div",{style:{height:"100px"}},l.default.createElement("div",{className:"example-block"},l.default.createElement("span",null,"Click to open window:"),l.default.createElement(a.SimpleButton,{tooltip:"Click me to show/hide a window",onClick:c}),u?l.default.createElement(a.Window,{parentId:"exampleContainer",title:"This is the window title",width:300,height:150,tools:[l.default.createElement(a.SimpleButton,{key:"closeButton",icon:"close",size:"small",tooltip:"Close",onClick:c})]},"This is the content of the window."):null)),document.getElementById("exampleContainer"))};s()}});