(function(){"use strict";var e={8837:function(e,n,t){var a=t(9242),r=t(3396),o=t(7139);const s={key:0,class:"view login"},u={class:"form-inner"},i=(0,r._)("h1",null,"Login to FireChat",-1),l=(0,r._)("label",{for:"username"},"Username",-1),c=(0,r._)("input",{type:"submit",value:"Login"},null,-1),p={key:1,class:"view chat"},f={class:"chat-box"},m={class:"message-inner"},d={class:"username"},v={class:"content"},g=(0,r._)("input",{type:"submit",value:"Send"},null,-1);function b(e,n,t,b,h,y){return b.state.username?((0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("header",null,[(0,r._)("button",{class:"logout",onClick:n[2]||(n[2]=(...e)=>b.Logout&&b.Logout(...e))},"Logout"),(0,r._)("h1",null,"Welcome, "+(0,o.zw)(b.state.username),1)]),(0,r._)("section",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.state.messages,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.key,class:(0,o.C_)(["message",e.username==b.state.username?"current-user":""])},[(0,r._)("div",m,[(0,r._)("div",d,(0,o.zw)(e.username),1),(0,r._)("div",v,(0,o.zw)(e.content),1)])],2)))),128))]),(0,r._)("footer",null,[(0,r._)("form",{onSubmit:n[4]||(n[4]=(0,a.iM)(((...e)=>b.SendMessage&&b.SendMessage(...e)),["prevent"]))},[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Write a message...","onUpdate:modelValue":n[3]||(n[3]=e=>b.inputMessage=e)},null,512),[[a.nr,b.inputMessage]]),g],32)])])):((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("form",{class:"login-form",onSubmit:n[1]||(n[1]=(0,a.iM)(((...e)=>b.Login&&b.Login(...e)),["prevent"]))},[(0,r._)("div",u,[i,l,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Please enter your username...","onUpdate:modelValue":n[0]||(n[0]=e=>b.inputUsername=e)},null,512),[[a.nr,b.inputUsername]]),c])],32)]))}t(7658);var h=t(4870),y=t(1509);t(9663);const _={apiKey:"AIzaSyAEkGOpqC_lUHrluX_FF4DlNbaDulZAZww",authDomain:"chat-app-602f7.firebaseapp.com",databaseURL:"https://chat-app-602f7-default-rtdb.europe-west1.firebasedatabase.app",projectId:"chat-app-602f7",storageBucket:"chat-app-602f7.appspot.com",messagingSenderId:"65150990041",appId:"1:65150990041:web:3dca39578fab8cdc8bb0c8"},w=y.Z.initializeApp(_);var O=w,k={setup(){const e=(0,h.iH)(""),n=(0,h.iH)(""),t=(0,h.qj)({username:"",messages:[]}),a=()=>{e.value.trim()&&(t.username=e.value,e.value="")},o=()=>{t.username=""},s=()=>{const e=O.database().ref("messages");if(!n.value.trim())return;const a={username:t.username,content:n.value};e.push(a),n.value=""};return(0,r.bv)((()=>{const e=O.database().ref("messages");e.on("value",(e=>{const n=e.val();let a=[];Object.keys(n).forEach((e=>{a.push({id:e,username:n[e].username,content:n[e].content})})),t.messages=a}))})),{inputUsername:e,inputMessage:n,state:t,Login:a,Logout:o,SendMessage:s}}},S=t(89);const j=(0,S.Z)(k,[["render",b]]);var M=j;(0,a.ri)(M).mount("#app")}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,a,r,o){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var u=!0,i=0;i<a.length;i++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[i])}))?a.splice(i--,1):(u=!1,o<s&&(s=o));if(u){e.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var r,o,s=a[0],u=a[1],i=a[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(i)var c=i(t)}for(n&&n(a);l<s.length;l++)o=s[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},a=self["webpackChunkchat_app"]=self["webpackChunkchat_app"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(8837)}));a=t.O(a)})();
//# sourceMappingURL=app.1cc87539.js.map