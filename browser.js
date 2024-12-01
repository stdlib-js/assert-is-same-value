// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",c=t()?function(e){var r,t,o,c,l;if(null==e)return n.call(e);t=e[a],l=a,r=null!=(c=e)&&i.call(c,l);try{e[a]=void 0}catch(r){return n.call(e)}return o=n.call(e),r?e[a]=t:delete e[a],o}:function(e){return n.call(e)},l="function"==typeof Float64Array,u="function"==typeof Float64Array?Float64Array:null,s="function"==typeof Float64Array?Float64Array:void 0,p=function(){var e,r,t;if("function"!=typeof u)return!1;try{r=new u([1,3.14,-3.14,NaN]),t=r,e=(l&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?s:function(){throw new Error("not implemented")};function f(e){var r=new p(2);return r[0]=e.re,r[1]=e.im,r}var g="function"==typeof Object.defineProperty?Object.defineProperty:null,h=Object.defineProperty;function y(e){return"number"==typeof e}function d(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function m(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+d(i):d(i)+e,n&&(e="-"+e)),e}var b=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function v(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=m(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=m(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===w.call(e.specifier)?w.call(t):b.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var E=Math.abs,_=String.prototype.toLowerCase,S=String.prototype.toUpperCase,T=String.prototype.replace,F=/e\+(\d)$/,x=/e-(\d)$/,A=/^(\d+)$/,k=/^(\d+)e/,j=/\.0$/,V=/\.0*e/,I=/(\..*[^0])0*e/;function N(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!y(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":E(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=T.call(t,I,"$1e"),t=T.call(t,V,"e"),t=T.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=T.call(t,F,"e+0$1"),t=T.call(t,x,"e-0$1"),e.alternate&&(t=T.call(t,A,"$1."),t=T.call(t,k,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===S.call(e.specifier)?S.call(t):_.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var P=String.fromCharCode,R=Array.isArray;function C(e){return e!=e}function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function L(e){var r,t,n,i,o,a,c,l,u,s,p,f,g;if(!R(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))a+=n;else{if(r=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,C(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=v(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!C(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(o)?String(n.arg):P(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,p=n.width,f=n.padRight,g=void 0,(g=p-s.length)<0?s:s=f?s+O(g):O(g)+s)),a+=n.arg||"",c+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,t,n,i;for(t=[],i=0,n=M.exec(e);n;)(r=e.slice(i,M.lastIndex-n[0].length)).length&&t.push(r),t.push(Y(n)),i=M.lastIndex,n=M.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function B(e){var r,t;if("string"!=typeof e)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Z(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return L.apply(null,r)}var G=Object.prototype,W=G.toString,J=G.__defineGetter__,U=G.__defineSetter__,X=G.__lookupGetter__,z=G.__lookupSetter__,q=function(){try{return g({},"x",{}),!0}catch(e){return!1}}()?h:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=G,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&J&&J.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e};function D(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(e){return"number"==typeof e}var K=Number,Q=K.prototype.toString,ee=t();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===c(e)))}function te(e){return H(e)||re(e)}function ne(e,r){if(!(this instanceof ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!H(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!H(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}D(te,"isPrimitive",H),D(te,"isObject",re),D(ne,"BYTES_PER_ELEMENT",8),D(ne.prototype,"BYTES_PER_ELEMENT",8),D(ne.prototype,"byteLength",16),D(ne.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),D(ne.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var ie="function"==typeof Math.fround?Math.fround:null,oe="function"==typeof Float32Array,ae=Number.POSITIVE_INFINITY,ce="function"==typeof Float32Array?Float32Array:null,le="function"==typeof Float32Array?Float32Array:void 0,ue=new(function(){var e,r,t;if("function"!=typeof ce)return!1;try{r=new ce([1,3.14,-3.14,5e40]),t=r,e=(oe&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ae}catch(r){e=!1}return e}()?le:function(){throw new Error("not implemented")})(1),se="function"==typeof ie?ie:function(e){return ue[0]=e,ue[0]};function pe(e,r){if(!(this instanceof pe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!H(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!H(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:se(e)}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:se(r)}),this}function fe(e){return e instanceof ne||e instanceof pe||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}return D(pe,"BYTES_PER_ELEMENT",4),D(pe.prototype,"BYTES_PER_ELEMENT",4),D(pe.prototype,"byteLength",8),D(pe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),D(pe.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),function(r,t){return r===t?0!==r||1/r==1/t:r!=r&&t!=t||!(!fe(r)||!fe(t))&&(n=t,i=f(r),o=f(n),e(i[0],o[0])&&e(i[1],o[1]));var n,i,o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isSameValue=r();
//# sourceMappingURL=browser.js.map
