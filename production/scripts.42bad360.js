parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rDCW":[function(require,module,exports) {

},{}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"UUq2":[function(require,module,exports) {
var process = require("process");
var r=require("process");function t(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function e(r){"string"!=typeof r&&(r+="");var t,e=0,n=-1,o=!0;for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!o){e=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":r.slice(e,n)}function n(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}exports.resolve=function(){for(var e="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var i=s>=0?arguments[s]:r.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,o="/"===i.charAt(0))}return(o?"/":"")+(e=t(n(e.split("/"),function(r){return!!r}),!o).join("/"))||"."},exports.normalize=function(r){var e=exports.isAbsolute(r),s="/"===o(r,-1);return(r=t(n(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&s&&(r+="/"),(e?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(n(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),s=Math.min(n.length,o.length),i=s,u=0;u<s;u++)if(n[u]!==o[u]){i=u;break}var f=[];for(u=i;u<n.length;u++)f.push("..");return(f=f.concat(o.slice(i))).join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){if("string"!=typeof r&&(r+=""),0===r.length)return".";for(var t=r.charCodeAt(0),e=47===t,n=-1,o=!0,s=r.length-1;s>=1;--s)if(47===(t=r.charCodeAt(s))){if(!o){n=s;break}}else o=!1;return-1===n?e?"/":".":e&&1===n?"/":r.slice(0,n)},exports.basename=function(r,t){var n=e(r);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},exports.extname=function(r){"string"!=typeof r&&(r+="");for(var t=-1,e=0,n=-1,o=!0,s=0,i=r.length-1;i>=0;--i){var u=r.charCodeAt(i);if(47!==u)-1===n&&(o=!1,n=i+1),46===u?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){e=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===e+1?"":r.slice(t,n)};var o="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
},{"process":"pBGv"}],"YF8F":[function(require,module,exports) {
var process = require("process");
var e=require("process"),n=require("fs"),r=require("path");function t(e){console.log("[dotenv][DEBUG] ".concat(e))}var o="\n",a=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,c=/\\n/g,i=/\n|\r|\r\n/;function l(e,n){var r=Boolean(n&&n.debug),l={};return e.toString().split(i).forEach(function(e,n){var i=e.match(a);if(null!=i){var s=i[1],u=i[2]||"",d=u.length-1,p='"'===u[0]&&'"'===u[d];"'"===u[0]&&"'"===u[d]||p?(u=u.substring(1,d),p&&(u=u.replace(c,o))):u=u.trim(),l[s]=u}else r&&t("did not match key and value when parsing line ".concat(n+1,": ").concat(e))}),l}function s(o){var a=r.resolve(e.cwd(),".env"),c="utf8",i=!1;o&&(null!=o.path&&(a=o.path),null!=o.encoding&&(c=o.encoding),null!=o.debug&&(i=!0));try{var s=l(n.readFileSync(a,{encoding:c}),{debug:i});return Object.keys(s).forEach(function(n){Object.prototype.hasOwnProperty.call(e.env,n)?i&&t('"'.concat(n,'" is already defined in `process.env` and will not be overwritten')):e.env[n]=s[n]}),{parsed:s}}catch(u){return{error:u}}}module.exports.config=s,module.exports.parse=l;
},{"fs":"rDCW","path":"UUq2","process":"pBGv"}],"dLYZ":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("dotenv").config();var n=function(){function t(){e(this,t),this.totalMarketCap,this.yesterdaysDate=this.yesterdaysDate(),this.currentHour=this.currentHour(),this.coinsURL="https://api.nomics.com/v1/currencies/ticker?key=".concat("50d3530f3903fcf6af244ce0c86fe9e3","&1d"),this.marketCapUrl="https://api.nomics.com/v1/market-cap/history?key=".concat("50d3530f3903fcf6af244ce0c86fe9e3","&start=").concat(this.yesterdaysDate,"T").concat(this.currentHour,"%3A59%3A59.999Z"),this.volumeUrl="https://api.nomics.com/v1/volume/history?key=".concat("50d3530f3903fcf6af244ce0c86fe9e3","&start=").concat(this.yesterdaysDate,"T").concat(this.currentHour,"%3A59%3A59.999Z"),this.marketcap=document.querySelector(".market-status__marketcap"),this.volume=document.querySelector(".market-status__volume"),this.dominanceElement=document.querySelector(".market-status__dominance"),this.marketCapChangeEl=document.querySelector(".marketcap-change__ptc"),this.volumeChangeEl=document.querySelector(".volume-change__ptc"),this.callApi(this.marketCapUrl,this.setMarketCap),this.callApi(this.volumeUrl,this.setVolume),this.callApi(this.coinsURL,this.setDominance)}return a(t,[{key:"yesterdaysDate",value:function(){var e=new Date,t=new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),a=t.setDate(t.getDate()-1),n=new Date(a);return n.getUTCFullYear()+"-"+("0"+(n.getUTCMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)}},{key:"currentHour",value:function(){return("0"+(new Date).getUTCHours()).slice(-2)}},{key:"callApi",value:function(e,t){var a=this;fetch(e).then(function(e){return e.json()}).then(function(e){t.bind(a)(e)}).catch(function(e){console.error(e)})}},{key:"formatNumber",value:function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},{key:"calculateChange",value:function(e,t){return((e-t)/t*100).toFixed(2)+"%"}},{key:"setChangeColor",value:function(e,t){var a=parseFloat(e);1===Math.sign(a)?t.style.color="green":-1===Math.sign(a)?t.style.color="red":t.style.color="#757575"}},{key:"setMarketCap",value:function(e){var t=e.length-1,a=parseInt(e[t].market_cap);this.marketcap.innerHTML="$ ".concat(this.formatNumber(a)),this.totalMarketCap=a;var n=this.calculateChange(a,e[0].market_cap);return this.marketCapChangeEl.innerHTML=n,this.setChangeColor(n,this.marketCapChangeEl),a}},{key:"setVolume",value:function(e){for(var t=0,a=0;a<e.length;a++)t+=parseInt(e[a].volume);this.volume.innerHTML="$ ".concat(this.formatNumber(t));var n=e.length-1,r=this.calculateChange(e[n].volume,e[0].volume);this.volumeChangeEl.innerHTML=r,this.setChangeColor(r,this.volumeChangeEl)}},{key:"setDominance",value:function(e){var t=[],a=this.dominanceElement;a.innerHTML="";for(var n=0;n<3;n++){var r=parseInt(e[n].market_cap);t[n]={coinSymbol:e[n].symbol,dominance:(r/this.totalMarketCap*100).toFixed(2)+"%"};var o=document.createElement("li"),c=document.createElement("span");c.classList="coin-symbol";var i=document.createTextNode(n+1+". "+t[n].coinSymbol),s=document.createTextNode(t[n].dominance);c.appendChild(i),o.appendChild(c),o.appendChild(s),a.appendChild(o)}}}]),t}(),r=n;exports.default=r;
},{"dotenv":"YF8F"}],"SFr2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./Cards"));function t(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,s){return t&&a(e.prototype,t),s&&a(e,s),e}var r=function(){function e(){s(this,e),this.favorites=[],this.cards_container=document.querySelector(".cards__container"),this.events()}return i(e,[{key:"events",value:function(){this.cards_container.addEventListener("click",this.addToFavorites.bind(this))}},{key:"addToFavorites",value:function(e){var t=e.target;if(t.classList.contains("add-favorite_btn")){var s=JSON.stringify(t.parentNode.childNodes[1].childNodes[1].innerText.replace(/[\d.' ']/g,""));if(null!=localStorage.getItem("coin"))if(this.favorites=JSON.parse(localStorage.getItem("coin")),!1===this.favorites.some(function(e){return e.symbol===s})){var a={symbol:s,favorited:!0};this.favorites.push(a),localStorage.setItem("coin",JSON.stringify(this.favorites))}else if(1===this.favorites.length)localStorage.clear(),this.favorites=[];else{var i=this.favorites.filter(function(e){return e.symbol!==s});this.favorites=i,localStorage.setItem("coin",JSON.stringify(this.favorites))}else{var r={symbol:s,favorited:!0};this.favorites.push(r),localStorage.setItem("coin",JSON.stringify(this.favorites))}var o=t.parentNode.childNodes[13];o.classList.contains("fas")?(o.classList.remove("fas"),o.className+=" far",location.href.includes("favorites.html")&&(o.parentNode.parentNode.style.display="none")):(o.classList.remove("far"),o.className+=" fas")}}}]),e}(),o=r;exports.default=o;
},{"./Cards":"tNo4"}],"tNo4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("./Favorites"));function a(e){return e&&e.__esModule?e:{default:e}}function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function c(e,a){for(var n=0;n<a.length;n++){var c=a[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function r(e,a,n){return a&&c(e.prototype,a),n&&c(e,n),e}require("dotenv").config();var t=function(){function e(){n(this,e),this.apiUrl="https://api.nomics.com/v1/currencies/ticker?key=".concat("50d3530f3903fcf6af244ce0c86fe9e3","&1d"),this.loadingScreen=document.querySelector("#loadingScreen"),this.cards=document.querySelector(".cards"),this.cards_container=document.querySelector(".cards__container"),this.favorites=JSON.parse(localStorage.getItem("coin")),this.makeCard()}return r(e,[{key:"formatNumber",value:function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},{key:"abbreviateNumber",value:function(e){for(var a=parseInt(e),n=0;a>=1e3;)a/=1e3,n++;return a=a.toPrecision(3),a+=["","K","M","B","T"][n]}},{key:"setPriceChangeBgColor",value:function(){for(var e=document.getElementsByClassName("price-change"),a=document.getElementsByClassName("price-change-pct"),n=0;n<e.length;n++){var c=parseFloat(a[n].innerText);1===Math.sign(c)?(e[n].style.backgroundColor="#0D1F24",a[n].style.color="green"):-1===Math.sign(c)?(e[n].style.backgroundColor="#1B0B19",a[n].style.color="red"):(e[n].style.backgroundColor="",a[n].style.color="")}}},{key:"setFavoritesBtnStyle",value:function(e,a){var n=document.getElementsByClassName("add-favorite_btn")[a];this.favorites?this.favorites.map(function(c){c.symbol===JSON.stringify(e[a].symbol)?n.className+=" fas fa-star":n.className+=" far fa-star"}):n.className+=" far fa-star"}},{key:"makeCard",value:function(){var e=this;fetch(this.apiUrl).then(function(e){return e.json()}).then(function(a){var n;if(e.loadingScreen.style.display="none",e.cards_container.innerHTML="",location.href.includes("favorites.html"))if(e.favorites){for(var c=0;c<100;c++)if(c<e.favorites.length)for(var r=0;r<100;r++)JSON.stringify(a[r].symbol)===e.favorites[c].symbol&&(n='\n                                                <div class="cards__item">\n                                                    <div class="wrapper">\n                                                        <div class="item__symbol-price">\n                                                            <b class="symbol-price__symbol">'.concat(r+1+". "+a[r].symbol,'</b>\n                                                            <b class="symbol-price__price">$').concat(e.formatNumber(parseFloat(a[r].price).toFixed(3)),'</b>\n                                                        </div>\n                                                        <div class="price-change">\n                                                            <b class="price-change-timeframe">1hr</b>\n                                                            <p class="price-change-pct">\n                                                                ').concat(a[r]["1d"]?(100*a[r]["1d"].price_change_pct).toFixed(2)+"%":"N/A",'\n                                                            </p>\n                                                        </div>\n                                                        <div class="price-change">\n                                                            <b class="price-change-timeframe">24hr</b>\n                                                            <p class="price-change-pct">\n                                                                ').concat(a[r]["1d"]?(100*a[r]["7d"].price_change_pct).toFixed(2)+"%":"N/A",'\n                                                            </p>\n                                                        </div>\n                                                        <div class="price-change">\n                                                            <b class="price-change-timeframe">Year To Date</b>\n                                                            <p class="price-change-pct">\n                                                                ').concat(a[r].ytd?(100*a[r].ytd.price_change_pct).toFixed(2)+"%":"N/A",'\n                                                            </p>\n                                                        </div>\n                                                        <div class="market-cap">\n                                                            <b class="price-change-timeframe">Marketcap</b>\n                                                            <p>\n                                                                ').concat(a[r].market_cap?e.abbreviateNumber(a[r].market_cap):"N/A",'\n                                                            </p>\n                                                        </div>\n                                                        <div class="volume">\n                                                            <b class="price-change-timeframe">Volume</b>\n                                                            <p>\n                                                                ').concat(a[r]["1d"]?e.abbreviateNumber(a[r]["1d"].volume):"N/A",'\n                                                            </p>\n                                                        </div>\n                                                        <i class="add-favorite_btn fas fa-star"></i>\n                                                    </div>\n                                                </div>\n                                            '),e.cards_container.insertAdjacentHTML("beforeend",n),e.setPriceChangeBgColor())}else e.cards_container.insertAdjacentHTML("beforeend","<h1 class='favorites_msg'>You haven't added anything yet!</h1>");else for(var t=0;t<100;t++)n='\n                            <div class="cards__item">\n                                <div class="wrapper">\n                                    <div class="item__symbol-price">\n                                        <b class="symbol-price__symbol">'.concat(t+1+". "+a[t].symbol,'</b>\n                                        <b class="symbol-price__price">$').concat(e.formatNumber(parseFloat(a[t].price).toFixed(3)),'</b>\n                                    </div>\n                                    <div class="price-change">\n                                        <b class="price-change-timeframe">1hr</b>\n                                        <p class="price-change-pct">\n                                            ').concat(a[t]["1d"]?(100*a[t]["1d"].price_change_pct).toFixed(2)+"%":"N/A",'\n                                        </p>\n                                    </div>\n                                    <div class="price-change">\n                                        <b class="price-change-timeframe">24hr</b>\n                                        <p class="price-change-pct">\n                                            ').concat(a[t]["1d"]?(100*a[t]["7d"].price_change_pct).toFixed(2)+"%":"N/A",'\n                                        </p>\n                                    </div>\n                                    <div class="price-change">\n                                        <b class="price-change-timeframe">Year To Date</b>\n                                        <p class="price-change-pct">\n                                            ').concat(a[t].ytd?(100*a[t].ytd.price_change_pct).toFixed(2)+"%":"N/A",'\n                                        </p>\n                                    </div>\n                                    <div class="market-cap">\n                                        <b class="price-change-timeframe">Marketcap</b>\n                                        <p>\n                                            ').concat(a[t].market_cap?e.abbreviateNumber(a[t].market_cap):"N/A",'\n                                        </p>\n                                    </div>\n                                    <div class="volume">\n                                        <b class="price-change-timeframe">Volume</b>\n                                        <p>\n                                            ').concat(a[t]["1d"]?e.abbreviateNumber(a[t]["1d"].volume):"N/A",'\n                                        </p>\n                                    </div>\n                                    <i class="add-favorite_btn"></i>\n                                </div>\n                            </div>\n                        '),e.cards_container.insertAdjacentHTML("beforeend",n),e.setFavoritesBtnStyle(a,t);e.setPriceChangeBgColor()}).catch(function(e){console.error(e)})}}]),e}(),i=t;exports.default=i;
},{"dotenv":"YF8F","./Favorites":"SFr2"}],"MfRc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./MarketStatus")),t=n(require("./Cards")),r=n(require("./Favorites"));function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}var f=function(){function n(){u(this,n),new e.default,new t.default,new r.default,setTimeout(this.refresh(),1e4)}return o(n,[{key:"refresh",value:function(){setInterval(function(){new e.default,new t.default},1e4)}}]),n}(),i=f;exports.default=i;
},{"./MarketStatus":"dLYZ","./Cards":"tNo4","./Favorites":"SFr2"}],"LDUH":[function(require,module,exports) {

},{}],"g2Hq":[function(require,module,exports) {
"use strict";var e=r(require("./modules/Api"));function r(e){return e&&e.__esModule?e:{default:e}}require("../styles/main.scss");var s=new e.default;
},{"./modules/Api":"MfRc","../styles/main.scss":"rDCW"}]},{},["g2Hq"], null)
//# sourceMappingURL=scripts.42bad360.js.map