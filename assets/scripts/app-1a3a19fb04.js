webpackJsonp([0],[function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function i(){var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}var o=n(3),r=t(o),s=n(8),a=t(s),u=n(10),c=t(u);e(document).ready(function(){var t=new r["default"]("#sidedrawer");e(".js-show-sidedrawer").on("click",function(){return t.show()}),e(".js-hide-sidedrawer").on("click",function(){return t.hide()});new c["default"](".q-toc__link",e("#header").outerHeight()),new a["default"]("#q-search","header");i()&&e(".q-sopros-list-func-preview").show()})}).call(t,n(1))},,,function(e,t,n){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(4),a=i(s),u=function(){function t(n){var i=this;o(this,t),this.$sidebarEl=e(n),Array.prototype.forEach.call(this.$sidebarEl.find("a"),function(e){e.href.indexOf("#")!=-1&&e.addEventListener("click",function(){i.$sidebarEl.hasClass("active")&&(0,a["default"])("off")})})}return r(t,[{key:"show",value:function(){var t=this,n={onclose:function(){t.$sidebarEl.removeClass("active").appendTo(document.body)}},i=e((0,a["default"])("on",n));this.$sidebarEl.appendTo(i),setTimeout(function(){t.$sidebarEl.addClass("active")},20)}},{key:"hide",value:function(){e("body").toggleClass("hide-sidedrawer")}}]),t}();t["default"]=u}).call(t,n(1))},function(e,t,n){"use strict";function i(e){var t;if("on"===e){for(var n,i,s,a=arguments.length-1;a>0;a--)n=arguments[a],"object"===p.type(n)&&(i=n),n instanceof Element&&1===n.nodeType&&(s=n);i=i||{},void 0===i.keyboard&&(i.keyboard=!0),void 0===i["static"]&&(i["static"]=!1),t=o(i,s)}else"off"===e?t=r():f.raiseError("Expecting 'on' or 'off'");return t}function o(e,t){var n=document.body,i=document.getElementById(h);if(f.enableScrollLock(),i){for(;i.firstChild;)i.removeChild(i.firstChild);t&&i.appendChild(t)}else i=document.createElement("div"),i.setAttribute("id",h),t&&i.appendChild(t),n.appendChild(i);return v.test(navigator.userAgent)&&p.css(i,"cursor","pointer"),e.keyboard?s():a(),e["static"]?l(i):c(i),i.muiOptions=e,i}function r(){var e,t=document.getElementById(h);if(t){for(;t.firstChild;)t.removeChild(t.firstChild);t.parentNode.removeChild(t),e=t.muiOptions.onclose,l(t)}return f.disableScrollLock(),a(),e&&e(),t}function s(){p.on(document,"keyup",u)}function a(){p.off(document,"keyup",u)}function u(e){27===e.keyCode&&r()}function c(e){p.on(e,"click",d)}function l(e){p.off(e,"click",d)}function d(e){e.target.id===h&&r()}var f=n(5),p=n(7),h="mui-overlay",v=/(iPad|iPhone|iPod)/g;e.exports=i},function(e,t,n){"use strict";function i(){var e=window;if(g.debug&&"undefined"!=typeof e.console)try{e.console.log.apply(e.console,arguments)}catch(t){var n=Array.prototype.slice.call(arguments);e.console.log(n.join("\n"))}}function o(e){var t,n=document;t=n.head||n.getElementsByTagName("head")[0]||n.documentElement;var i=n.createElement("style");return i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),t.insertBefore(i,t.firstChild),i}function r(e,t){if(!t)throw new Error("MUI: "+e);"undefined"!=typeof console&&console.error("MUI Warning: "+e)}function s(e){if(w.push(e),void 0===w._initialized){var t=document,n="animationstart mozAnimationStart webkitAnimationStart";y.on(t,n,a),w._initialized=!0}}function a(e){if("mui-node-inserted"===e.animationName)for(var t=e.target,n=w.length-1;n>=0;n--)w[n](t)}function u(e){var t="";for(var n in e)t+=e[n]?n+" ":"";return t.trim()}function c(){if(void 0!==m)return m;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",m="auto"===e.style.pointerEvents}function l(e,t){return function(){e[t].apply(e,arguments)}}function d(e,t,n,i,o){var r,s=document.createEvent("HTMLEvents"),n=void 0===n||n,i=void 0===i||i;if(s.initEvent(t,n,i),o)for(r in o)s[r]=o[r];return e&&e.dispatchEvent(s),s}function f(){if(b+=1,1===b){var e=window,t=document;v={left:y.scrollLeft(e),top:y.scrollTop(e)},y.addClass(t.body,x),e.scrollTo(v.left,v.top)}}function p(e){if(0!==b&&(b-=1,0===b)){var t=window,n=document;y.removeClass(n.body,x),e&&t.scrollTo(v.left,v.top)}}function h(e){var t=window.requestAnimationFrame;t?t(e):setTimeout(e,0)}var v,m,g=n(6),y=n(7),w=[],b=0,x="mui-body--scroll-lock";e.exports={callback:l,classNames:u,disableScrollLock:p,dispatchEvent:d,enableScrollLock:f,log:i,loadStyle:o,onNodeInserted:s,raiseError:r,requestAnimationFrame:h,supportsPointerEvents:c}},function(e,t){"use strict";e.exports={debug:!0}},function(e,t){"use strict";function n(e,t){if(t&&e.setAttribute){for(var n,i=h(e),o=t.split(" "),r=0;r<o.length;r++)n=o[r].trim(),i.indexOf(" "+n+" ")===-1&&(i+=n+" ");e.setAttribute("class",i.trim())}}function i(e,t,n){if(void 0===t)return getComputedStyle(e);var i=r(t);{if("object"!==i){"string"===i&&void 0!==n&&(e.style[v(t)]=n);var o=getComputedStyle(e),s="array"===r(t);if(!s)return m(e,t,o);for(var a,u={},c=0;c<t.length;c++)a=t[c],u[a]=m(e,a,o);return u}for(var a in t)e.style[v(a)]=t[a]}}function o(e,t){return!(!t||!e.getAttribute)&&h(e).indexOf(" "+t+" ")>-1}function r(e){if(void 0===e)return"undefined";var t=Object.prototype.toString.call(e);if(0===t.indexOf("[object "))return t.slice(8,-1).toLowerCase();throw new Error("MUI: Could not understand type: "+t)}function s(e,t,n,i){i=void 0!==i&&i;var o=e._muiEventCache=e._muiEventCache||{};t.split(" ").map(function(t){e.addEventListener(t,n,i),o[t]=o[t]||[],o[t].push([n,i])})}function a(e,t,n,i){i=void 0!==i&&i;var o,r,s,a=e._muiEventCache=e._muiEventCache||{};t.split(" ").map(function(t){for(o=a[t]||[],s=o.length;s--;)r=o[s],(void 0===n||r[0]===n&&r[1]===i)&&(o.splice(s,1),e.removeEventListener(t,r[0],r[1]))})}function u(e,t,n,i){t.split(" ").map(function(t){s(e,t,function o(i){n&&n.apply(this,arguments),a(e,t,o)},i)})}function c(e,t){var n=window;if(void 0===t){if(e===n){var i=document.documentElement;return(n.pageXOffset||i.scrollLeft)-(i.clientLeft||0)}return e.scrollLeft}e===n?n.scrollTo(t,l(n)):e.scrollLeft=t}function l(e,t){var n=window;if(void 0===t){if(e===n){var i=document.documentElement;return(n.pageYOffset||i.scrollTop)-(i.clientTop||0)}return e.scrollTop}e===n?n.scrollTo(c(n),t):e.scrollTop=t}function d(e){var t=window,n=e.getBoundingClientRect(),i=l(t),o=c(t);return{top:n.top+i,left:n.left+o,height:n.height,width:n.width}}function f(e){var t=!1,n=!0,i=document,o=i.defaultView,r=i.documentElement,s=i.addEventListener?"addEventListener":"attachEvent",a=i.addEventListener?"removeEventListener":"detachEvent",u=i.addEventListener?"":"on",c=function f(n){"readystatechange"==n.type&&"complete"!=i.readyState||(("load"==n.type?o:i)[a](u+n.type,f,!1),!t&&(t=!0)&&e.call(o,n.type||n))},l=function p(){try{r.doScroll("left")}catch(e){return void setTimeout(p,50)}c("poll")};if("complete"==i.readyState)e.call(o,"lazy");else{if(i.createEventObject&&r.doScroll){try{n=!o.frameElement}catch(d){}n&&l()}i[s](u+"DOMContentLoaded",c,!1),i[s](u+"readystatechange",c,!1),o[s](u+"load",c,!1)}}function p(e,t){if(t&&e.setAttribute){for(var n,i=h(e),o=t.split(" "),r=0;r<o.length;r++)for(n=o[r].trim();i.indexOf(" "+n+" ")>=0;)i=i.replace(" "+n+" "," ");e.setAttribute("class",i.trim())}}function h(e){var t=(e.getAttribute("class")||"").replace(/[\n\t]/g,"");return" "+t+" "}function v(e){return e.replace(g,function(e,t,n,i){return i?n.toUpperCase():n}).replace(y,"Moz$1")}function m(e,t,n){var i;return i=n.getPropertyValue(t),""!==i||e.ownerDocument||(i=e.style[v(t)]),i}var g=/([\:\-\_]+(.))/g,y=/^moz([A-Z])/;e.exports={addClass:n,css:i,hasClass:o,off:a,offset:d,on:s,one:u,ready:f,removeClass:p,type:r,scrollLeft:c,scrollTop:l}},function(e,t,n){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(9),a=i(s),u=function(){function t(n,i){var r=this;o(this,t),this.index=null,this.store=null,"undefined"==typeof i&&(i="body"),e.getJSON("/searchindex.json",function(e){r.index=a["default"].Index.load(e.index),r.store=e.store}),e(n).autocomplete({width:"auto",showNoSuggestionNotice:!0,appendTo:e(i),lookup:function(e,t){var n=r.index.search(e,{fields:{title:{boost:2},body:{boost:1}},bool:"OR"}),i={};i.suggestions=[];for(var o in n){var s=n[o].ref;i.suggestions.push({value:r.store[s].title,data:s})}return t(i)},onSelect:function(e){window.location="/"+e.data},formatResult:function(e,t){return e.value}})}return r(t,[{key:"show",value:function(){}},{key:"hide",value:function(){}}]),t}();t["default"]=u}).call(t,n(1))},function(e,t,n){var i,o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};/**
	 * elasticlunr - http://weixsong.github.io
	 * Lightweight full-text search engine in Javascript for browser search and offline search. - 0.9.0
	 *
	 * Copyright (C) 2016 Oliver Nightingale
	 * Copyright (C) 2016 Wei Song
	 * MIT Licensed
	 * @license
	 */
!function(){function s(e){if(null===e||"object"!==("undefined"==typeof e?"undefined":r(e)))return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}/*!
	   * elasticlunr.js
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Wei Song
	   */
var a=function u(e){var t=new u.Index;return t.pipeline.add(u.trimmer,u.stopWordFilter,u.stemmer),e&&e.call(t,t),t};a.version="0.9.0",/*!
	   * elasticlunr.utils
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Wei Song
	   */
a.utils={},a.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),a.utils.toString=function(e){return void 0===e||null===e?"":e.toString()},/*!
	   * elasticlunr.EventEmitter
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Wei Song
	   */
a.EventEmitter=function(){this.events={}},a.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),n=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");n.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)},this)},a.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var n=this.events[e].indexOf(t);n!==-1&&(this.events[e].splice(n,1),0==this.events[e].length&&delete this.events[e])}},a.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach(function(e){e.apply(void 0,t)},this)}},a.EventEmitter.prototype.hasHandler=function(e){return e in this.events},/*!
	   * elasticlunr.tokenizer
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Wei Song
	   */
a.tokenizer=function(e){if(!arguments.length||null===e||void 0===e)return[];if(Array.isArray(e)){var t=e.filter(function(e){return null!==e&&void 0!==e});t=t.map(function(e){return a.utils.toString(e).toLowerCase()});var n=[];return t.forEach(function(e){var t=e.split(a.tokenizer.seperator);n=n.concat(t)},this),n}return e.toString().trim().toLowerCase().split(a.tokenizer.seperator)},a.tokenizer.defaultSeperator=/[\s\-]+/,a.tokenizer.seperator=a.tokenizer.defaultSeperator,a.tokenizer.setSeperator=function(e){null!==e&&void 0!==e&&"object"===("undefined"==typeof e?"undefined":r(e))&&(a.tokenizer.seperator=e)},a.tokenizer.resetSeperator=function(){a.tokenizer.seperator=a.tokenizer.defaultSeperator},a.tokenizer.getSeperator=function(){return a.tokenizer.seperator},/*!
	   * elasticlunr.Pipeline
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Wei Song
	   */
a.Pipeline=function(){this._queue=[]},a.Pipeline.registeredFunctions={},a.Pipeline.registerFunction=function(e,t){t in a.Pipeline.registeredFunctions&&a.utils.warn("Overwriting existing registered function: "+t),e.label=t,a.Pipeline.registeredFunctions[t]=e},a.Pipeline.getRegisteredFunction=function(e){return e in a.Pipeline.registeredFunctions!=!0?null:a.Pipeline.registeredFunctions[e]},a.Pipeline.warnIfFunctionNotRegistered=function(e){var t=e.label&&e.label in this.registeredFunctions;t||a.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},a.Pipeline.load=function(e){var t=new a.Pipeline;return e.forEach(function(e){var n=a.Pipeline.getRegisteredFunction(e);if(!n)throw new Error("Cannot load un-registered function: "+e);t.add(n)}),t},a.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){a.Pipeline.warnIfFunctionNotRegistered(e),this._queue.push(e)},this)},a.Pipeline.prototype.after=function(e,t){a.Pipeline.warnIfFunctionNotRegistered(t);var n=this._queue.indexOf(e);if(n===-1)throw new Error("Cannot find existingFn");this._queue.splice(n+1,0,t)},a.Pipeline.prototype.before=function(e,t){a.Pipeline.warnIfFunctionNotRegistered(t);var n=this._queue.indexOf(e);if(n===-1)throw new Error("Cannot find existingFn");this._queue.splice(n,0,t)},a.Pipeline.prototype.remove=function(e){var t=this._queue.indexOf(e);t!==-1&&this._queue.splice(t,1)},a.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,i=this._queue.length,o=0;o<n;o++){for(var r=e[o],s=0;s<i&&(r=this._queue[s](r,o,e),void 0!==r&&null!==r);s++);void 0!==r&&null!==r&&t.push(r)}return t},a.Pipeline.prototype.reset=function(){this._queue=[]},a.Pipeline.prototype.get=function(){return this._queue},a.Pipeline.prototype.toJSON=function(){return this._queue.map(function(e){return a.Pipeline.warnIfFunctionNotRegistered(e),e.label})},/*!
	   * elasticlunr.Index
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Wei Song
	   */
a.Index=function(){this._fields=[],this._ref="id",this.pipeline=new a.Pipeline,this.documentStore=new a.DocumentStore,this.index={},this.eventEmitter=new a.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},a.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},a.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},a.Index.load=function(e){e.version!==a.version&&a.utils.warn("version mismatch: current "+a.version+" importing "+e.version);var t=new this;t._fields=e.fields,t._ref=e.ref,t.documentStore=a.DocumentStore.load(e.documentStore),t.pipeline=a.Pipeline.load(e.pipeline),t.index={};for(var n in e.index)t.index[n]=a.InvertedIndex.load(e.index[n]);return t},a.Index.prototype.addField=function(e){return this._fields.push(e),this.index[e]=new a.InvertedIndex,this},a.Index.prototype.setRef=function(e){return this._ref=e,this},a.Index.prototype.saveDocument=function(e){return this.documentStore=new a.DocumentStore(e),this},a.Index.prototype.addDoc=function(e,t){if(e){var t=void 0===t||t,n=e[this._ref];this.documentStore.addDoc(n,e),this._fields.forEach(function(t){var i=this.pipeline.run(a.tokenizer(e[t]));this.documentStore.addFieldLength(n,t,i.length);var o={};i.forEach(function(e){e in o?o[e]+=1:o[e]=1},this);for(var r in o){var s=o[r];s=Math.sqrt(s),this.index[t].addToken(r,{ref:n,tf:s})}},this),t&&this.eventEmitter.emit("add",e,this)}},a.Index.prototype.removeDocByRef=function(e,t){if(e&&this.documentStore.isDocStored()!==!1&&this.documentStore.hasDoc(e)){var n=this.documentStore.getDoc(e);this.removeDoc(n,!1)}},a.Index.prototype.removeDoc=function(e,t){if(e){var t=void 0===t||t,n=e[this._ref];this.documentStore.hasDoc(n)&&(this.documentStore.removeDoc(n),this._fields.forEach(function(t){var i=this.pipeline.run(a.tokenizer(e[t]));i.forEach(function(e){this.index[t].removeToken(e,n)},this)},this),t&&this.eventEmitter.emit("remove",e,this))}},a.Index.prototype.updateDoc=function(e,t){var t=void 0===t||t;this.removeDocByRef(e[this._ref],!1),this.addDoc(e,!1),t&&this.eventEmitter.emit("update",e,this)},a.Index.prototype.idf=function(e,t){var n="@"+t+"/"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,n))return this._idfCache[n];var i=this.index[t].getDocFreq(e),o=1+Math.log(this.documentStore.length/(i+1));return this._idfCache[n]=o,o},a.Index.prototype.getFields=function(){return this._fields.slice()},a.Index.prototype.search=function(e,t){if(!e)return[];var n=null;null!=t&&(n=JSON.stringify(t));var i=new a.Configuration(n,this.getFields()).get(),o=this.pipeline.run(a.tokenizer(e)),r={};for(var s in i){var u=this.fieldSearch(o,s,i),c=i[s].boost;for(var l in u)u[l]=u[l]*c;for(var l in u)l in r?r[l]+=u[l]:r[l]=u[l]}var d=[];for(var l in r)d.push({ref:l,score:r[l]});return d.sort(function(e,t){return t.score-e.score}),d},a.Index.prototype.fieldSearch=function(e,t,n){var i=n[t].bool,o=n[t].expand,r=null,s={};return e.forEach(function(e){var n=[e];1==o&&(n=this.index[t].expandToken(e));var a={};n.forEach(function(n){var o=this.index[t].getDocs(n),u=this.idf(n,t);if(r&&"AND"==i){var c={};for(var l in r)l in o&&(c[l]=o[l]);o=c}n==e&&this.fieldSearchStats(s,n,o);for(var l in o){var d=this.index[t].getTermFrequency(n,l),f=this.documentStore.getFieldLength(l,t),p=1;0!=f&&(p=1/Math.sqrt(f));var h=1;n!=e&&(h=.15*(1-(n.length-e.length)/n.length));var v=d*u*p*h;l in a?a[l]+=v:a[l]=v}},this),r=this.mergeScores(r,a,i)},this),r=this.coordNorm(r,s,e.length)},a.Index.prototype.mergeScores=function(e,t,n){if(!e)return t;if("AND"==n){var i={};for(var o in t)o in e&&(i[o]=e[o]+t[o]);return i}for(var o in t)o in e?e[o]+=t[o]:e[o]=t[o];return e},a.Index.prototype.fieldSearchStats=function(e,t,n){for(var i in n)i in e?e[i].push(t):e[i]=[t]},a.Index.prototype.coordNorm=function(e,t,n){for(var i in e)if(i in t){var o=t[i].length;e[i]=e[i]*o/n}return e},a.Index.prototype.toJSON=function(){var e={};return this._fields.forEach(function(t){e[t]=this.index[t].toJSON()},this),{version:a.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),index:e,pipeline:this.pipeline.toJSON()}},a.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},/*!
	   * elasticlunr.DocumentStore
	   * Copyright (C) 2016 Wei Song
	   */
a.DocumentStore=function(e){null===e||void 0===e?this._save=!0:this._save=e,this.docs={},this.docInfo={},this.length=0},a.DocumentStore.load=function(e){var t=new this;return t.length=e.length,t.docs=e.docs,t.docInfo=e.docInfo,t._save=e.save,t},a.DocumentStore.prototype.isDocStored=function(){return this._save},a.DocumentStore.prototype.addDoc=function(e,t){this.hasDoc(e)||this.length++,this._save===!0?this.docs[e]=s(t):this.docs[e]=null},a.DocumentStore.prototype.getDoc=function(e){return this.hasDoc(e)===!1?null:this.docs[e]},a.DocumentStore.prototype.hasDoc=function(e){return e in this.docs},a.DocumentStore.prototype.removeDoc=function(e){this.hasDoc(e)&&(delete this.docs[e],delete this.docInfo[e],this.length--)},a.DocumentStore.prototype.addFieldLength=function(e,t,n){null!==e&&void 0!==e&&0!=this.hasDoc(e)&&(this.docInfo[e]||(this.docInfo[e]={}),this.docInfo[e][t]=n)},a.DocumentStore.prototype.updateFieldLength=function(e,t,n){null!==e&&void 0!==e&&0!=this.hasDoc(e)&&this.addFieldLength(e,t,n)},a.DocumentStore.prototype.getFieldLength=function(e,t){return null===e||void 0===e?0:e in this.docs&&t in this.docInfo[e]?this.docInfo[e][t]:0},a.DocumentStore.prototype.toJSON=function(){return{docs:this.docs,docInfo:this.docInfo,length:this.length,save:this._save}},/*!
	   * elasticlunr.stemmer
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Wei Song
	   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
	   */
a.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[^aeiou]",i="[aeiouy]",o=n+"[^aeiouy]*",r=i+"[aeiou]*",s="^("+o+")?"+r+o,a="^("+o+")?"+r+o+"("+r+")?$",u="^("+o+")?"+r+o+r+o,c="^("+o+")?"+i,l=new RegExp(s),d=new RegExp(u),f=new RegExp(a),p=new RegExp(c),h=/^(.+?)(ss|i)es$/,v=/^(.+?)([^s])s$/,m=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,y=/.$/,w=/(at|bl|iz)$/,b=new RegExp("([^aeiouylsz])\\1$"),x=new RegExp("^"+o+i+"[^aeiouwxy]$"),E=/^(.+?[^aeiou])y$/,S=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,k=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,I=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,_=/^(.+?)(s|t)(ion)$/,C=/^(.+?)e$/,D=/ll$/,F=new RegExp("^"+o+i+"[^aeiouwxy]$"),z=function(n){var i,o,r,s,a,u,c;if(n.length<3)return n;if(r=n.substr(0,1),"y"==r&&(n=r.toUpperCase()+n.substr(1)),s=h,a=v,s.test(n)?n=n.replace(s,"$1$2"):a.test(n)&&(n=n.replace(a,"$1$2")),s=m,a=g,s.test(n)){var z=s.exec(n);s=l,s.test(z[1])&&(s=y,n=n.replace(s,""))}else if(a.test(n)){var z=a.exec(n);i=z[1],a=p,a.test(i)&&(n=i,a=w,u=b,c=x,a.test(n)?n+="e":u.test(n)?(s=y,n=n.replace(s,"")):c.test(n)&&(n+="e"))}if(s=E,s.test(n)){var z=s.exec(n);i=z[1],n=i+"i"}if(s=S,s.test(n)){var z=s.exec(n);i=z[1],o=z[2],s=l,s.test(i)&&(n=i+e[o])}if(s=k,s.test(n)){var z=s.exec(n);i=z[1],o=z[2],s=l,s.test(i)&&(n=i+t[o])}if(s=I,a=_,s.test(n)){var z=s.exec(n);i=z[1],s=d,s.test(i)&&(n=i)}else if(a.test(n)){var z=a.exec(n);i=z[1]+z[2],a=d,a.test(i)&&(n=i)}if(s=C,s.test(n)){var z=s.exec(n);i=z[1],s=d,a=f,u=F,(s.test(i)||a.test(i)&&!u.test(i))&&(n=i)}return s=D,a=d,s.test(n)&&a.test(n)&&(s=y,n=n.replace(s,"")),"y"==r&&(n=r.toLowerCase()+n.substr(1)),n};return z}(),a.Pipeline.registerFunction(a.stemmer,"stemmer"),/*!
	   * elasticlunr.stopWordFilter
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Wei Song
	   */
a.stopWordFilter=function(e){if(e&&a.stopWordFilter.stopWords[e]!==!0)return e},a.clearStopWords=function(){a.stopWordFilter.stopWords={}},a.addStopWords=function(e){null!=e&&Array.isArray(e)!==!1&&e.forEach(function(e){a.stopWordFilter.stopWords[e]=!0},this)},a.resetStopWords=function(){a.stopWordFilter.stopWords=a.defaultStopWords},a.defaultStopWords={"":!0,a:!0,able:!0,about:!0,across:!0,after:!0,all:!0,almost:!0,also:!0,am:!0,among:!0,an:!0,and:!0,any:!0,are:!0,as:!0,at:!0,be:!0,because:!0,been:!0,but:!0,by:!0,can:!0,cannot:!0,could:!0,dear:!0,did:!0,"do":!0,does:!0,either:!0,"else":!0,ever:!0,every:!0,"for":!0,from:!0,get:!0,got:!0,had:!0,has:!0,have:!0,he:!0,her:!0,hers:!0,him:!0,his:!0,how:!0,however:!0,i:!0,"if":!0,"in":!0,into:!0,is:!0,it:!0,its:!0,just:!0,least:!0,"let":!0,like:!0,likely:!0,may:!0,me:!0,might:!0,most:!0,must:!0,my:!0,neither:!0,no:!0,nor:!0,not:!0,of:!0,off:!0,often:!0,on:!0,only:!0,or:!0,other:!0,our:!0,own:!0,rather:!0,said:!0,say:!0,says:!0,she:!0,should:!0,since:!0,so:!0,some:!0,than:!0,that:!0,the:!0,their:!0,them:!0,then:!0,there:!0,these:!0,they:!0,"this":!0,tis:!0,to:!0,too:!0,twas:!0,us:!0,wants:!0,was:!0,we:!0,were:!0,what:!0,when:!0,where:!0,which:!0,"while":!0,who:!0,whom:!0,why:!0,will:!0,"with":!0,would:!0,yet:!0,you:!0,your:!0},a.stopWordFilter.stopWords=a.defaultStopWords,a.Pipeline.registerFunction(a.stopWordFilter,"stopWordFilter"),/*!
	   * elasticlunr.trimmer
	   * Copyright (C) 2016 Oliver Nightingale
	   * Copyright (C) 2016 Oliver Nightingale
	   */
a.trimmer=function(e){if(null===e||void 0===e)throw new Error("token should not be undefined");return e.replace(/^\W+/,"").replace(/\W+$/,"")},a.Pipeline.registerFunction(a.trimmer,"trimmer"),/*!
	   * elasticlunr.InvertedIndex
	   * Copyright (C) 2016 Wei Song
	   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
	   */
a.InvertedIndex=function(){this.root={docs:{},df:0}},a.InvertedIndex.load=function(e){var t=new this;return t.root=e.root,t},a.InvertedIndex.prototype.addToken=function(e,t,n){for(var n=n||this.root,i=0;i<=e.length-1;){var o=e[i];o in n||(n[o]={docs:{},df:0}),i+=1,n=n[o]}var r=t.ref;n.docs[r]?n.docs[r]={tf:t.tf}:(n.docs[r]={tf:t.tf},n.df+=1)},a.InvertedIndex.prototype.hasToken=function(e){if(!e)return!1;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return!1;t=t[e[n]]}return!0},a.InvertedIndex.prototype.getNode=function(e){if(!e)return null;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return null;t=t[e[n]]}return t},a.InvertedIndex.prototype.getDocs=function(e){var t=this.getNode(e);return null==t?{}:t.docs},a.InvertedIndex.prototype.getTermFrequency=function(e,t){var n=this.getNode(e);return null==n?0:t in n.docs?n.docs[t].tf:0},a.InvertedIndex.prototype.getDocFreq=function(e){var t=this.getNode(e);return null==t?0:t.df},a.InvertedIndex.prototype.removeToken=function(e,t){if(e){var n=this.getNode(e);null!=n&&t in n.docs&&(delete n.docs[t],n.df-=1)}},a.InvertedIndex.prototype.expandToken=function(e,t,n){if(null==e||""==e)return[];var t=t||[];if(void 0==n&&(n=this.getNode(e),null==n))return t;n.df>0&&t.push(e);for(var i in n)"docs"!==i&&"df"!==i&&this.expandToken(e+i,t,n[i]);return t},a.InvertedIndex.prototype.toJSON=function(){return{root:this.root}},/*!
	   * elasticlunr.Configuration
	   * Copyright (C) 2016 Wei Song
	   */
a.Configuration=function(e,t){var e=e||"";if(void 0==t||null==t)throw new Error("fields should not be null");this.config={};var n;try{n=JSON.parse(e),this.buildUserConfig(n,t)}catch(i){a.utils.warn("user configuration parse failed, will use default configuration"),this.buildDefaultConfig(t)}},a.Configuration.prototype.buildDefaultConfig=function(e){this.reset(),e.forEach(function(e){this.config[e]={boost:1,bool:"OR",expand:!1}},this)},a.Configuration.prototype.buildUserConfig=function(e,t){var n="OR",i=!1;if(this.reset(),"bool"in e&&(n=e.bool||n),"expand"in e&&(i=e.expand||i),"fields"in e)for(var o in e.fields)if(t.indexOf(o)>-1){var r=e.fields[o],s=i;void 0!=r.expand&&(s=r.expand),this.config[o]={boost:r.boost||1,bool:r.bool||n,expand:s}}else a.utils.warn("field name in user configuration not found in index instance fields");else this.addAllFields2UserConfig(n,i,t)},a.Configuration.prototype.addAllFields2UserConfig=function(e,t,n){n.forEach(function(n){this.config[n]={boost:1,bool:e,expand:t}},this)},a.Configuration.prototype.get=function(){return this.config},a.Configuration.prototype.reset=function(){this.config={}},function(r,s){i=s,o="function"==typeof i?i.call(t,n,t,e):i,!(void 0!==o&&(e.exports=o))}(this,function(){return a})}()},function(e,t,n){(function(e){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function t(i,o){var r=this;n(this,t),this.tocLinkSel=i||".q-toc__link",this.topOffset=o||0,this.didScroll=!1,this.lastId=null,this.menuItems=e(this.tocLinkSel),this.scrollItems=this.menuItems.map(function(t,n){var i=e(e(n).attr("href"));if(i.length)return i}),e(window).scroll(function(e){r.didScroll=!0}),setInterval(function(){r.didScroll&&(r.updateNavSelection(),r.didScroll=!1)},250)}return i(t,[{key:"updateNavSelection",value:function(){var t=e(document).height(),n=e(window).scrollTop(),i=e(window).height(),o=e(window).scrollTop()+this.topOffset+20,r=n+i==t,s=this.scrollItems.map(function(t,n){if(e(n).offset().top<o||r)return n});s=s[s.length-1];var a=s&&s.length?s[0].id:"";this.lastId!==a&&(this.lastId=a,this.menuItems.parent().removeClass("active").end().filter("[href='#"+a+"']").parent().addClass("active"))}}]),t}();t["default"]=o}).call(t,n(1))}]);