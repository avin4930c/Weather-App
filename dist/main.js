(()=>{"use strict";var n={10:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"body {\n    margin: 0px;\n    color: whitesmoke;\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0px;\n}\n\n#main-container {\n    width: 100%;\n    height: 100vh;\n    background-image: url(https://images.hdqwalls.com/wallpapers/weather-and-sky-4k-nb.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#container-1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    word-wrap: break-word;\n    align-items: center;\n    width: 25%;\n    min-height: 60%;\n    background: rgba( 255, 255, 255, 0.25 );\nbox-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\nbackdrop-filter: blur( 4px );\n-webkit-backdrop-filter: blur( 4px );\nborder-radius: 10px;\nborder: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n#container-2 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 30%;\n    min-height: 40%;\n    \n}\n\n#container-3 {\n    width: 20%;\n    min-height: 60%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.container-small {\n    width: 90%;\n    min-height: 45%;\n}\n\n.inside-container {\n    text-align: center;\n}\n\n\n\n.image {\n    font-size: 200px;\n}\n\n.weather-description {\n    font-size: max(28px, 3.5vw);\n}\n\n.temperature {\n    margin-top: 20px;\n    font-size: 3em;\n}\n\n.current-weather {\n    align-items: center;\n}\n\n.bottom-container {\n    display: flex;\n    justify-content: space-around;\n    word-wrap: break-word;\n    align-items: center;\n}\n\n.left-bottom {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 60%;\n    height: 70%;\n    text-align: center;\n    font-size: max(26px, 2vw);\n}\n\n.right-bottom {\n    display: flex;\n    padding: 5px;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 1.5em;\n    width: 40%;\n    height: 70%;\n}\n\n.right-bottom-elements {\n    font-size: max(26px, 2vw);\n    text-align: center;\n        \n}\n\n.date {\n    display: inline-block;\n    font-size: max(16px, 1.5vw);\n}\n\n.left-bottom-elements {\n    text-align: left;\n    \n}\n\n.city {\n    font-size: max(22px, 1.7vw);\n    text-align: center;\n}\n\n.region {\n    font-size: max(22px, 1.7vw);\n    text-align: center;\n}\n\n.country {\n    font-size: max(22px, 1.7vw);\n    text-align: center;\n}\n\n\n.search-bar-container {\n    width: 80%;\n    display: flex;\n    align-items: center;\n}\n\n#search-bar {\n\n}\n\n.input {\n    width:  100%;\n    min-height: 50px;\n    padding: 0 1rem;\n    color: #fff;\n    font-size: 20px;\n    border: 1px solid #5e4dcd;\n    border-radius: 6px 0 0 6px;\n    background-color: transparent;\n}\n\n.search-button {\n    width: 30%;\n    min-height: 50px;\n    padding: .5em 1em;\n    border: none;\n    border-radius: 0 6px 6px 0;\n    background-color: #5e4dcd;\n    color: #fff;\n    font-size: 80%;\n    cursor: pointer;\n    transition: background-color .3s ease-in-out;\n}\n\n.search-button:hover {\n    background-color: #5e5dcd;\n}\n\n.search-bar-container ::placeholder {\n    color: white;\n}\n\n.error-message {\n    color: red;\n    width: 75%;\n    text-align: left;\n    font-size: 16px;\n    padding: 5px;\n}\n\n.input:focus,\n.input:focus-visible {\n    border-color: #19179e;\n    outline: none;\n}\n\n.right-container {\n    width: 100%;\n    text-align: center;\n    font-size: 2vw;\n}\n\n.description {\n    width: auto;\n}\n\n.right-details {\n    text-align: left;\n    width: 100%;\n    height: auto;\n    padding: 1rem 0;\n    margin: 10px 0px;\n    font-size: max(28px, 1.8vw);\n    word-wrap: break-word;\n    display: flex;\n    justify-content: center;\n    \n    background: rgba( 255, 255, 255, 0.2 );\nbox-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\nbackdrop-filter: blur( 4px );\n-webkit-backdrop-filter: blur( 4px );\nborder-radius: 10px;\nborder: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n.right-icons {\n    width: 2rem;\n    margin-right: 15px;\n}\n\n.checkbox-wrapper-35 {\n    color: white;\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 10px;\n    margin-right: 20px;\n}\n\n.checkbox-wrapper-35 .switch {\n    display: none;\n  }\n  \n  .checkbox-wrapper-35 .switch + label {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    line-height: 15px;\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  .checkbox-wrapper-35 .switch + label::before,\n    .checkbox-wrapper-35 .switch + label::after {\n    content: '';\n    display: block;\n  }\n  \n  .checkbox-wrapper-35 .switch + label::before {\n    background-color: #05012c;\n    border-radius: 500px;\n    height: 15px;\n    margin-right: 8px;\n    -webkit-transition: background-color 0.125s ease-out;\n    transition: background-color 0.125s ease-out;\n    width: 25px;\n  }\n  \n  .checkbox-wrapper-35 .switch + label::after {\n    background-color: #fff;\n    border-radius: 13px;\n    box-shadow: 0 3px 1px 0 rgba(37, 34, 71, 0.05), 0 2px 2px 0 rgba(37, 34, 71, 0.1), 0 3px 3px 0 rgba(37, 34, 71, 0.05);\n    height: 13px;\n    left: 1px;\n    position: absolute;\n    top: 1px;\n    -webkit-transition: -webkit-transform 0.125s ease-out;\n    transition: -webkit-transform 0.125s ease-out;\n    transition: transform 0.125s ease-out;\n    transition: transform 0.125s ease-out, -webkit-transform 0.125s ease-out;\n    width: 13px;\n  }\n  \n  .checkbox-wrapper-35 .switch + label .switch-x-text {\n    display: block;\n    margin-right: .3em;\n  }\n  \n  .checkbox-wrapper-35 .switch + label .switch-x-toggletext {\n    display: block;\n    font-weight: bold;\n    height: 15px;\n    overflow: hidden;\n    position: relative;\n    width: 45px;\n  }\n  \n  .checkbox-wrapper-35 .switch + label .switch-x-unchecked,\n    .checkbox-wrapper-35 .switch + label .switch-x-checked {\n    left: 0;\n    position: absolute;\n    top: 0;\n    -webkit-transition: opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;\n    transition: opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;\n    transition: transform 0.125s ease-out, opacity 0.125s ease-out;\n    transition: transform 0.125s ease-out, opacity 0.125s ease-out, -webkit-transform 0.125s ease-out;\n  }\n  \n  .checkbox-wrapper-35 .switch + label .switch-x-unchecked {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n  \n  .checkbox-wrapper-35 .switch + label .switch-x-checked {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n  \n  .checkbox-wrapper-35 .switch + label .switch-x-hiddenlabel {\n    position: absolute;\n    visibility: hidden;\n  }\n  \n  .checkbox-wrapper-35 .switch:checked + label::before {\n    background-color: #ffb500;\n  }\n  \n  .checkbox-wrapper-35 .switch:checked + label::after {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n  \n  .checkbox-wrapper-35 .switch:checked + label .switch-x-unchecked {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  \n  .checkbox-wrapper-35 .switch:checked + label .switch-x-checked {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n  .kph-mph {\n    display: block;\n  }",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),p=t.n(l),d=t(589),u=t.n(d),h=t(10),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const x=["icon","text","temp_c","temp_f","feelslike_c","feelslike_f","wind_kph","wind_mph","humidity","cloud"],m=["name","region","country","localtime"],b=document.querySelector("#switch");let w;const g=document.querySelector(".weather-description"),y=document.querySelector(".temperature"),k=document.querySelector(".city"),v=document.querySelector(".region"),C=document.querySelector(".country"),S=document.querySelector(".time"),q=document.querySelector(".date"),_=document.querySelector(".feels-like"),z=document.querySelector(".wind-speed"),j=document.querySelector(".humidity"),E=document.querySelector(".clouds-above"),M=document.querySelector(".error-message");function T(n){fetch(`http://api.weatherapi.com/v1/current.json?key=936f8d1522364b2c8b8114545232409&q=${n}&aqi=yes&days=yes`).then((n=>n.json())).then((n=>{if(n.error)throw new Error(n.error.message);if(n.current.condition.text)return n})).then((n=>function(n){let e={};for(let t of x)e[t]="icon"==t||"text"==t?n.current.condition[t]:n.current[t];for(let t of m)e[t]=n.location[t];return console.log(e),e}(n))).then((n=>function(n){w=n,b.checked?(y.textContent=n.temp_f+" F",_.textContent=n.feelslike_f+" F",z.textContent=n.wind_mph+" Mph"):(y.textContent=n.temp_c+" C",_.textContent=n.feelslike_c+" C",z.textContent=n.wind_kph+" Kph");let e=n.localtime.split(" ");g.textContent=n.text,console.log(n.temp_c+"C"),k.textContent=n.name,v.textContent=n.region,C.textContent=n.country,q.textContent=e[0],S.textContent=e[1],j.textContent=n.humidity+"%",E.textContent=n.cloud+"%",M.textContent=""}(n))).catch((n=>{const e=document.querySelector(".error-message");"Parameter q is missing."==n.message?e.textContent="Enter the city name":e.textContent=n.message}))}T("London");let L=document.querySelector(".search-button");document.querySelector("#search-bar").addEventListener("keypress",(function(n){13==n.keyCode&&(console.log("Hello"),n.preventDefault(),L.click())})),L.addEventListener("click",(function(){let n=document.querySelector("#search-bar").value;n=document.querySelector("#search-bar").value,T(n)})),b.addEventListener("click",(()=>{b.checked?(y.textContent=w.temp_f+" F",_.textContent=w.feelslike_f+" F",z.textContent=w.wind_mph+" Mph"):(y.textContent=w.temp_c+" C",_.textContent=w.feelslike_c+" C",z.textContent=w.wind_kph+" Kph")}))})()})();