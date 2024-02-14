// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,e){return r===e?0!==r||1/r==1/e:r!=r&&e!=e}function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=e();var n=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var o="function"==typeof Symbol?Symbol:void 0,c="function"==typeof o?o.toStringTag:"";var l=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return n.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return n.call(r)}return i=n.call(r),e?r[c]=t:delete r[c],i}:function(r){return n.call(r)},u="function"==typeof Float64Array;var s="function"==typeof Float64Array?Float64Array:null;var p="function"==typeof Float64Array?Float64Array:void 0;var f=function(){var r,e,t;if("function"!=typeof s)return!1;try{e=new s([1,3.14,-3.14,NaN]),t=e,r=(u&&t instanceof Float64Array||"[object Float64Array]"===l(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?p:function(){throw new Error("not implemented")};function y(r){var e=new f(2);return e[0]=r.re,e[1]=r.im,e}var g="function"==typeof Object.defineProperty?Object.defineProperty:null;var h=Object.defineProperty;function d(r){return"number"==typeof r}function b(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function m(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+b(i):b(i)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function E(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=m(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=m(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _(r){return"string"==typeof r}var S=Math.abs,T=String.prototype.toLowerCase,F=String.prototype.toUpperCase,A=String.prototype.replace,k=/e\+(\d)$/,x=/e-(\d)$/,j=/^(\d+)$/,V=/^(\d+)e/,I=/\.0$/,N=/\.0*e/,O=/(\..*[^0])0*e/;function P(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":S(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=A.call(t,O,"$1e"),t=A.call(t,N,"e"),t=A.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=A.call(t,k,"e+0$1"),t=A.call(t,x,"e-0$1"),r.alternate&&(t=A.call(t,j,"$1."),t=A.call(t,V,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===F.call(r.specifier)?F.call(t):T.call(t)}function R(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function C(r,e,t){var n=e-r.length;return n<0?r:r=t?r+R(n):R(n)+r}var $=String.fromCharCode,L=isNaN,M=Array.isArray;function Y(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Z(r){var e,t,n,i,a,o,c,l,u;if(!M(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,l=0;l<r.length;l++)if(_(n=r[l]))o+=n;else{if(e=void 0!==n.precision,!(n=Y(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,L(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,L(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=E(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!L(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=L(a)?String(n.arg):$(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,t,n,i;for(t=[],i=0,n=B.exec(r);n;)(e=r.slice(i,B.lastIndex-n[0].length)).length&&t.push(e),t.push(G(n)),i=B.lastIndex,n=B.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function J(r){return"string"==typeof r}function U(r){var e,t;if(!J(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[W(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Z.apply(null,e)}var X=Object.prototype,z=X.toString,q=X.__defineGetter__,D=X.__defineSetter__,H=X.__lookupGetter__,K=X.__lookupSetter__;var Q=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?h:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,e)||K.call(r,e)?(n=r.__proto__,r.__proto__=X,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&q&&q.call(r,e,t.get),o&&D&&D.call(r,e,t.set),r};function rr(r,e,t){Q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function er(r){return"number"==typeof r}var tr=e();function nr(){return tr&&"symbol"==typeof Symbol.toStringTag}var ir=Object.prototype.toString;var ar="function"==typeof Symbol?Symbol:void 0,or="function"==typeof ar?ar.toStringTag:"";var cr=nr()?function(r){var e,t,n;if(null==r)return ir.call(r);t=r[or],e=a(r,or);try{r[or]=void 0}catch(e){return ir.call(r)}return n=ir.call(r),e?r[or]=t:delete r[or],n}:function(r){return ir.call(r)},lr=Number,ur=lr.prototype.toString;var sr=nr();function pr(r){return"object"==typeof r&&(r instanceof lr||(sr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===cr(r)))}function fr(r){return er(r)||pr(r)}function yr(r,e){if(!(this instanceof yr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!er(r))throw new TypeError(U("invalid argument. Real component must be a number. Value: `%s`.",r));if(!er(e))throw new TypeError(U("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}rr(fr,"isPrimitive",er),rr(fr,"isObject",pr),rr(yr,"BYTES_PER_ELEMENT",8),rr(yr.prototype,"BYTES_PER_ELEMENT",8),rr(yr.prototype,"byteLength",16),rr(yr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),rr(yr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var gr="function"==typeof Math.fround?Math.fround:null,hr="function"==typeof Float32Array;var dr=Number.POSITIVE_INFINITY,br="function"==typeof Float32Array?Float32Array:null;var mr="function"==typeof Float32Array?Float32Array:void 0;var vr=new(function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,5e40]),t=e,r=(hr&&t instanceof Float32Array||"[object Float32Array]"===cr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===dr}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")})(1);var wr="function"==typeof gr?gr:function(r){return vr[0]=r,vr[0]};function Er(r,e){if(!(this instanceof Er))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!er(r))throw new TypeError(U("invalid argument. Real component must be a number. Value: `%s`.",r));if(!er(e))throw new TypeError(U("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:wr(r)}),Q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:wr(e)}),this}function _r(r){return r instanceof yr||r instanceof Er||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Sr(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t||!(!_r(e)||!_r(t))&&(n=t,i=y(e),a=y(n),r(i[0],a[0])&&r(i[1],a[1]));var n,i,a}rr(Er,"BYTES_PER_ELEMENT",4),rr(Er.prototype,"BYTES_PER_ELEMENT",4),rr(Er.prototype,"byteLength",8),rr(Er.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),rr(Er.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));export{Sr as default};
//# sourceMappingURL=mod.js.map
