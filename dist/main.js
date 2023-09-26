(()=>{"use strict";var n={10:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([n.id,"body {\n    margin: 0px;\n    color: rgb(255, 255, 255);\n}\n\n* {\n    margin: 0px;\n}\n\n#main-container {\n    width: 100%;\n    height: 100vh;\n    background-image: url(https://images.hdqwalls.com/download/dark-night-beautiful-sky-nl-3840x2400.jpg);\n    background-size: cover;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#container-1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    word-wrap: break-word;\n    align-items: center;\n    width: 25%;\n    min-height: 60%;\n}\n\n#container-2 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30%;\n    height: 40%;\n    \n}\n\n#container-3 {\n    width: 25%;\n    min-height: 40%;\n}\n\n.container-small {\n    width: 90%;\n    min-height: 45%;\n}\n\n.inside-container {\n    text-align: center;\n}\n\n\n\n.image {\n    font-size: 200px;\n}\n\n.weather-description {\n    font-size: max(28px, 3.5vw);\n}\n\n.temperature {\n    margin-top: 20px;\n    font-size: 3em;\n}\n\n.current-weather {\n    align-items: center;\n}\n\n.bottom-container {\n    display: flex;\n    justify-content: space-around;\n    word-wrap: break-word;\n    align-items: center;\n}\n\n.left-bottom {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 80%;\n    height: 70%;\n    text-align: center;\n    font-size: max(26px, 2vw);\n}\n\n.right-bottom {\n    display: flex;\n    padding: 5px;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 1.5em;\n    width: 40%;\n    height: 70%;\n}\n\n.right-bottom-elements {\n    font-size: max(26px, 2vw);\n    text-align: center;\n        \n}\n\n.date {\n    display: inline-block;\n    font-size: max(16px, 1.5vw);\n}\n\n.left-bottom-elements {\n    text-align: left;\n    \n}\n\n.city {\n    font-size: max(22px, 1.7vw);\n    text-align: center;\n}\n\n.region {\n    font-size: max(22px, 1.7vw);\n    text-align: center;\n}\n\n.country {\n    font-size: max(22px, 1.7vw);\n    text-align: center;\n}\n\n\n.search-bar-container {\n    width: 80%;\n    \n    display: flex;\n    align-items: center;\n}\n\n#search-bar {\n\n}\n\n.input {\n    width:  100%;\n    min-height: 50px;\n    padding: 0 1rem;\n    color: #fff;\n    font-size: 15px;\n    border: 1px solid #5e4dcd;\n    border-radius: 6px 0 0 6px;\n    background-color: transparent;\n}\n\n.search-button {\n    min-height: 50px;\n    padding: .5em 1em;\n    border: none;\n    border-radius: 0 6px 6px 0;\n    background-color: #5e4dcd;\n    color: #fff;\n    font-size: 15px;\n    cursor: pointer;\n    transition: background-color .3s ease-in-out;\n}\n\n.search-button:hover {\n    background-color: #5e5dcd;\n}\n\n.input:focus,\n.input:focus-visible {\n    border-color: red;\n    outline: none;\n}\n\n.right-container {\n    font-size: 2vw;\n}\n\n.description {\n    width: 100%;\n}\n\n.right-details {\n    \n    width: 100%;\n    padding: 1rem 0;\n    font-size: 32px;\n    display: flex;\n}\n\n.right-icons {\n    width: 2rem;\n    margin-right: 10px;\n}",""]);const a=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},c=[],a=0;a<n.length;a++){var s=n[a],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=t(i[c]);e[a].references--}for(var s=r(n,o),u=0;u<i.length;u++){var l=t(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),c=t.n(i),a=t(565),s=t.n(a),u=t(216),l=t.n(u),d=t(589),p=t.n(d),f=t(10),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=["icon","text","temp_c","temp_f","feelslike_c","feelslike_f","wind_kph","wind_mph","humidity","cloud"],x=["name","region","country","localtime"];function g(n){fetch(`http://api.weatherapi.com/v1/current.json?key=936f8d1522364b2c8b8114545232409&q=${n}&aqi=yes&days=yes`).then((n=>n.json())).then((n=>{if(n.error)throw new Error(n.error.message);if(n.current.condition.text)return n})).then((n=>function(n){let e={};for(let t of h)e[t]="icon"==t||"text"==t?n.current.condition[t]:n.current[t];for(let t of x)e[t]=n.location[t];return console.log(e),e}(n))).then((n=>function(n){const e=document.querySelector(".weather-description"),t=document.querySelector(".temperature"),r=document.querySelector(".city"),o=document.querySelector(".region"),i=document.querySelector(".country"),c=document.querySelector(".time"),a=document.querySelector(".date"),s=document.querySelector(".feels-like"),u=document.querySelector(".wind-speed"),l=document.querySelector(".humidity"),d=document.querySelector(".clouds-above");let p=n.localtime.split(" ");e.textContent=n.text,t.textContent=n.temp_c+" C",console.log(n.temp_c+"C"),r.textContent=n.name,o.textContent=n.region,i.textContent=n.country,a.textContent=p[0],c.textContent=p[1],s.textContent=n.feelslike_c+"C",u.textContent=n.wind_kph+"Kph",l.textContent=n.humidity,d.textContent=n.cloud+"%"}(n))).catch((n=>alert(n.message)))}g("London"),document.querySelector(".search-button").addEventListener("click",(function(){g(document.querySelector("#search-bar").value)}))})()})();