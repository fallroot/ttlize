!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ttlize=t():e.ttlize=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){function t(){var t=Date.now();return(!d||t-d>o)&&(c=e.apply(arguments),d=t),a(result)?result.then(c):c}function r(){if(void 0===l)throw'"key" parameter is required.';var t=Date.now();if(c&&d&&t-d<=o)return c;var r=i["default"].getItem(l,{type:f});if(null===r){var u=e.apply(arguments);if(a(u))return u.then(n);n(u)}else{var s=JSON.parse(r);c=s.cache,d=s.timestamp}return c}function n(e){c=e,d=Date.now();var t=JSON.stringify({cache:c,timestamp:d});i["default"].setItem(l,t,{type:f,to:d+o})}var o=arguments.length<=1||void 0===arguments[1]?0:arguments[1],u=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],l=u.key,f=u.type,c=void 0,d=0,s="localStorage"===f||"sessionStorage"===f?r:t;return function(){return s(arguments)}}function a(e){return"function"==typeof e.then}Object.defineProperty(t,"__esModule",{value:!0});var u=r(2),i=n(u);t["default"]=o},function(e,t){"use strict";function r(){for(var e={},t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];for(var o=0,a=r.length;o<a;++o){var u=r[o];for(var i in u)u.hasOwnProperty(i)&&(e[i]=u[i])}return e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o),u={available:function(e){var t=window[e||"localStorage"],r="__sandstorage__";if(t.getItem(r))return!0;try{return t.setItem(r,!0),!0}catch(n){return!1}},setItem:function(e,t,r){if(r=(0,a["default"])({type:"localStorage"},r),!this.available(r.type))return null;var n=Date.now();if(r.to<n)return null;var o=r.type;delete r.type;var u=(0,a["default"])({data:t},r);return window[o].setItem(e,JSON.stringify(u))},getItem:function(e,t){if(t=(0,a["default"])({type:"localStorage"},t),!this.available(t.type))return null;var r=window[t.type].getItem(e);if(void 0===r)return r;var n=JSON.parse(r);if(null===n)return null;var o=Date.now();return n.from>o||n.to<o?null:n.data},removeItem:function(e,t){t=(0,a["default"])({type:"localStorage"},t);var r=t.type;return this.available(r)?window[r].removeItem(e):null}};t["default"]=u}])});