!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],u=t.base?o[0]+t.base:o[0],l=n[u]||0,d="".concat(u," ").concat(l);n[u]=l+1;var s=c(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==s?(a[s].references++,a[s].updater(p)):a.push({identifier:d,updater:v(p,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,i;if(t.singleton){var o=m++;n=h||(h=l(t)),r=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=l(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=c(n[r]);a[i].references--}for(var o=u(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{color:#1d1;background-color:#000;font-size:20px;font-weight:900}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);var r,i,o=function(){function e(){}return e.prototype.createInput=function(e,t){var n=document.createElement("LI"),r=document.createTextNode(e),i=document.createElement(t);return i.id=e,n.appendChild(r),n.appendChild(i),document.getElementById("namelist").appendChild(n),i},e.prototype.clear=function(e,t){return"",e.remove(e),""},e.prototype.edit=function(e,t,n){return t=document.getElementById(n).value,e.nodeValue=n+": "+t,t},e.prototype.editSelect=function(e,t,n,r){return t=r.value,e.nodeValue=n+": "+t,t},e}(),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});!function(e){e[e.InputField=0]="InputField",e[e.TextAreaField=1]="TextAreaField",e[e.DateField=2]="DateField",e[e.EmailField=3]="EmailField",e[e.SelectField=4]="SelectField",e[e.CheckboxField=5]="CheckboxField"}(i||(i={}));var c,u=function(e){function t(t){var n=e.call(this)||this;return n.name=t,n.label="etykieta",n.fieldType=i.InputField,n.value="",n}return a(t,e),t.prototype.setValue=function(){var e=document.createElement("LI"),t=document.createTextNode(this.name+": "+this.value);this.value=this.edit(t,this.value,this.name),e.appendChild(t)},t.prototype.render=function(){this.createInput(this.name,"input")},t.prototype.getValue=function(){var e=this,t=document.createElement("LI");this.value=document.getElementById(this.name).value;var n=document.createTextNode(this.name+": "+this.value);t.appendChild(n);var r=document.createElement("button");r.innerText="Usuń",r.onclick=function(){e.value=e.clear(t,e.value)},t.appendChild(r);var i=document.createElement("button");i.innerText="Edytuj",i.onclick=function(){e.value=e.edit(n,e.value,e.name)},t.appendChild(i),document.getElementById("ArrayList").appendChild(t)},t}(o),l=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();!function(e){e[e.InputField=0]="InputField",e[e.TextAreaField=1]="TextAreaField",e[e.DateField=2]="DateField",e[e.EmailField=3]="EmailField",e[e.SelectField=4]="SelectField",e[e.CheckboxField=5]="CheckboxField"}(c||(c={}));var d,s=function(e){function t(t){var n=e.call(this)||this;return n.name=t,n.label="etykieta",n.fieldType=c.TextAreaField,n.value="",n}return l(t,e),t.prototype.setValue=function(){var e=document.createElement("LI"),t=document.createTextNode(this.name+": "+this.value);this.value=this.edit(t,this.value,this.name),e.appendChild(t)},t.prototype.render=function(){this.createInput(this.name,"input")},t.prototype.getValue=function(){var e=this,t=document.createElement("LI");this.value=document.getElementById(this.name).value;var n=document.createTextNode(this.name+": "+this.value);t.appendChild(n);var r=document.createElement("button");r.innerText="Usuń",r.onclick=function(){e.value=e.clear(t,e.value)},t.appendChild(r);var i=document.createElement("button");i.innerText="Edytuj",i.onclick=function(){e.value=e.edit(n,e.value,e.name)},t.appendChild(i),document.getElementById("ArrayList").appendChild(t)},t}(o),p=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();!function(e){e[e.InputField=0]="InputField",e[e.TextAreaField=1]="TextAreaField",e[e.DateField=2]="DateField",e[e.EmailField=3]="EmailField",e[e.SelectField=4]="SelectField",e[e.CheckboxField=5]="CheckboxField"}(d||(d={}));var f,h=function(e){function t(t){var n=e.call(this)||this;return n.name=t,n.label="etykieta",n.fieldType=d.EmailField,n.value="",n}return p(t,e),t.prototype.render=function(){this.createInput(this.name,"input")},t.prototype.setValue=function(){var e=document.createElement("LI"),t=document.createTextNode(this.name+": "+this.value);this.value=this.edit(t,this.value,this.name),e.appendChild(t)},t.prototype.getValue=function(){var e=this,t=document.createElement("LI");this.value=document.getElementById(this.name).value;var n=document.createTextNode(this.name+": "+this.value);t.appendChild(n);var r=document.createElement("button");r.innerText="Usuń",r.onclick=function(){e.value=e.clear(t,e.value)},t.appendChild(r);var i=document.createElement("button");i.innerText="Edytuj",i.onclick=function(){e.value=e.edit(n,e.value,e.name)},t.appendChild(i),document.getElementById("ArrayList").appendChild(t)},t}(o),m=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();!function(e){e[e.InputField=0]="InputField",e[e.TextAreaField=1]="TextAreaField",e[e.DateField=2]="DateField",e[e.EmailField=3]="EmailField",e[e.SelectField=4]="SelectField",e[e.CheckboxField=5]="CheckboxField"}(f||(f={}));var v,y=function(e){function t(t){var n=e.call(this)||this;return n.name=t,n.label="etykieta",n.fieldType=f.DateField,n.value="",n}return m(t,e),t.prototype.render=function(){this.createInput(this.name,"input")},t.prototype.setValue=function(){var e=document.createElement("LI"),t=document.createTextNode(this.name+": "+this.value);this.value=this.edit(t,this.value,this.name),e.appendChild(t)},t.prototype.getValue=function(){var e=this,t=document.createElement("LI");this.value=document.getElementById(this.name).value;var n=document.createTextNode(this.name+": "+this.value);t.appendChild(n);var r=document.createElement("button");r.innerText="Usuń",r.onclick=function(){e.value=e.clear(t,e.value)},t.appendChild(r);var i=document.createElement("button");i.innerText="Edytuj",i.onclick=function(){e.value=e.edit(n,e.value,e.name)},t.appendChild(i),document.getElementById("ArrayList").appendChild(t)},t}(o),b=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();!function(e){e[e.InputField=0]="InputField",e[e.TextAreaField=1]="TextAreaField",e[e.DateField=2]="DateField",e[e.EmailField=3]="EmailField",e[e.SelectField=4]="SelectField",e[e.CheckboxField=5]="CheckboxField"}(v||(v={}));var F,E=function(e){function t(t){var n=e.call(this)||this;return n.name=t,n.label="etykieta",n.fieldType=v.CheckboxField,n.value="",n}return b(t,e),t.prototype.setValue=function(){var e=document.createElement("LI"),t=document.createTextNode(this.name+": "+this.value);this.value=this.edit(t,this.value,this.name),e.appendChild(t)},t.prototype.render=function(){this.createInput(this.name,"checkbox")},t.prototype.getValue=function(){var e=this,t=document.createElement("LI");this.value=document.getElementById(this.name).checked;var n=document.createTextNode(this.name+": "+this.value);t.appendChild(n);var r=document.createElement("button");r.innerText="Usuń",r.onclick=function(){e.value=e.clear(t,e.value)},t.appendChild(r);var i=document.createElement("button");i.innerText="Edytuj",i.onclick=function(){e.value=e.edit(n,e.value,e.name)},t.appendChild(i),document.getElementById("ArrayList").appendChild(t)},t}(o),g=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();!function(e){e[e.InputField=0]="InputField",e[e.TextAreaField=1]="TextAreaField",e[e.DateField=2]="DateField",e[e.EmailField=3]="EmailField",e[e.SelectField=4]="SelectField",e[e.CheckboxField=5]="CheckboxField"}(F||(F={}));var x=function(e){function t(t){var n=e.call(this)||this;return n.element=document.createElement("select"),n.name=t,n.label="etykieta",n.fieldType=F.SelectField,n.value="",n.fetchOptions("https://restcountries.eu/rest/v2/all").then((function(e){e.map((function(e){return e.name})).forEach((function(e){var t=document.createElement("option");t.text=e,t.value=e,n.element.options.add(t)}))})),n}return g(t,e),t.prototype.setValue=function(){var e=document.createElement("LI"),t=document.createTextNode(this.name+": "+this.value);this.value=this.edit(t,this.value,this.name),e.appendChild(t)},t.prototype.render=function(){var e=document.createElement("LI"),t=document.createTextNode(this.name),n=document.createElement("select");n.id=name,e.appendChild(t),e.appendChild(n),e.appendChild(this.element),document.getElementById("namelist").appendChild(e)},t.prototype.getValue=function(){var e=this,t=document.createElement("LI");this.value=this.element.value;var n=document.createTextNode(this.name+": "+this.value);t.appendChild(n);var r=document.createElement("button");r.innerText="Usuń",r.onclick=function(){e.value=e.clear(t,e.value)},t.appendChild(r);var i=document.createElement("button");i.innerText="Edytuj",i.onclick=function(){e.value=e.editSelect(n,e.value,e.name,e.element)},t.appendChild(i),document.getElementById("ArrayList").appendChild(t)},t.prototype.fetchOptions=function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log("API errore fetching ")}))},t}(o),C=(n(0),new(function(){function e(){this.fieldArray=[],this.fieldArrayString=[],this.socket=new WebSocket("ws://localhost:8080")}return e.prototype.getValue=function(){var e=this;this.fieldArray.forEach((function(t){t.getValue(),null==window.localStorage.getItem("data")&&e.fieldArrayString.push(t.value)})),null==window.localStorage.getItem("data")&&window.localStorage.setItem("data",JSON.stringify(this.fieldArrayString)),document.getElementById("send").addEventListener("click",(function(){var t;t=" ",e.fieldArray.forEach((function(e){t+=e.value})),console.log(t),e.socket.send(t)}))},e.prototype.setValue=function(){this.fieldArray.forEach((function(e){e.setValue()}))},e.prototype.render=function(){var e=new u("Imię");e.render(),this.fieldArray.push(e);var t=new s("Nazwisko");t.render(),this.fieldArray.push(t);var n=new y("Data urodzenia");n.render(),this.fieldArray.push(n);var r=new h("email");r.render(),this.fieldArray.push(r);var i=new x("Wybrany kraj");i.render(),this.fieldArray.push(i);var o=new E("Czy preferujesz e-learning");o.render(),this.fieldArray.push(o)},e.prototype.sendMessage=function(){var e=this;this.socket.onopen=function(t){alert("Connected"),e.socket.send("Hello!")},this.socket.onmessage=function(e){alert("Message received: "+e.data)}},e.prototype.loadDate=function(){var e=window.localStorage.getItem("data");return JSON.parse(e)},e.prototype.putLoadDataToObject=function(){for(var e=0;e<this.fieldArray.length;e++)this.fieldArray[e].value=this.fieldArrayString[e]},e.prototype.createUI=function(){var e=document.createElement("LI"),t=document.createElement("button");t.innerText="Stwórz tabele",t.onclick=function(){C.render()},e.appendChild(t);var n=document.createElement("button");n.innerText="Zapisz",n.onclick=function(){C.getValue()},e.appendChild(n);var r=document.createElement("button");r.id="send",r.innerText="send",r.onclick=function(){C.sendMessage()},e.appendChild(r),document.getElementById("Main").appendChild(e)},e}()));C.createUI()}]);
//# sourceMappingURL=FormCreator.js.map