(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";require("./modules/shareButtons")();
},{"./modules/shareButtons":2}],2:[function(require,module,exports){
"use strict";module.exports=function(){function e(){var e=encodeURIComponent("https://www.xfive.co/blog/xhtmlized-has-rebranded-to-xfive/"),o="39204aafa6140ee754899617c7dd6736ff50e08b",n=new XMLHttpRequest;n.open("GET","//free.sharedcount.com/?apikey="+o+"&url="+e,!0),n.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);t(".js-fb-count",e.Facebook.total_count),t(".js-linkedin-count",e.LinkedIn),t(".js-googleplus-count",e.GooglePlusOne)}},n.send()}function t(e,t){var o=document.querySelector(e);o&&(t&&0!==t?o.innerHTML=t:o.style.display="none")}var o=document.querySelector(".js-share-buttons");o&&e()};
},{}]},{},[1])


//# sourceMappingURL=bundle.map.json