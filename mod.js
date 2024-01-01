// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Math.floor,t=Math.ceil;function n(r){return r<0?t(r):e(r)}var i=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;function o(r){return r===a||r===i}var c="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=Object.defineProperty;function f(r){return"number"==typeof r}function s(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function l(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+s(i):s(i)+r,n&&(r="-"+r)),r}var p=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!f(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=l(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=l(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===y.call(r.specifier)?y.call(t):p.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function d(r){return"string"==typeof r}var v=Math.abs,h=String.prototype.toLowerCase,w=String.prototype.toUpperCase,b=String.prototype.replace,m=/e\+(\d)$/,A=/e-(\d)$/,_=/^(\d+)$/,E=/^(\d+)e/,U=/\.0$/,I=/\.0*e/,S=/(\..*[^0])0*e/;function x(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!f(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":v(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=b.call(t,S,"$1e"),t=b.call(t,I,"e"),t=b.call(t,U,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=b.call(t,m,"e+0$1"),t=b.call(t,A,"e-0$1"),r.alternate&&(t=b.call(t,_,"$1."),t=b.call(t,E,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===w.call(r.specifier)?w.call(t):h.call(t)}function k(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function F(r,e,t){var n=e-r.length;return n<0?r:r=t?r+k(n):k(n)+r}var j=String.fromCharCode,N=isNaN,T=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,i,a,o,c,u,f;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(d(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,N(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=F(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function H(r){var e,t,n,i;for(t=[],i=0,n=$.exec(r);n;)(e=r.slice(i,$.lastIndex-n[0].length)).length&&t.push(e),t.push(G(n)),i=$.lastIndex,n=$.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function W(r){return"string"==typeof r}function C(r){var e,t,n;if(!W(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=H(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var L=Object.prototype,P=L.toString,R=L.__defineGetter__,Z=L.__defineSetter__,M=L.__lookupGetter__,X=L.__lookupSetter__;var Y=function(){try{return c({},"x",{}),!0}catch(r){return!1}}()?u:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,e)||X.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};function z(r,e,t){Y(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return B.call(r);t=r[K],a=K,e=null!=(i=r)&&D.call(i,a);try{r[K]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[K]=t:delete r[K],n}:function(r){return B.call(r)},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var tr,nr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===Q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir=tr,ar="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var cr,ur="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,t;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,NaN]),t=e,r=(ar&&t instanceof Float64Array||"[object Float64Array]"===Q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=cr,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,yr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),t=e,r=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=pr,dr="function"==typeof Uint16Array;var vr="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===Q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:hr,uint8:gr};(br=new mr.uint16(1))[0]=4660;var Ar,_r,Er=52===new mr.uint8(br.buffer)[0];!0===Er?(Ar=1,_r=0):(Ar=0,_r=1);var Ur={HIGH:Ar,LOW:_r},Ir=new fr(1),Sr=new ir(Ir.buffer),xr=Ur.HIGH,kr=Ur.LOW;function Fr(r,e,t,n){return Ir[0]=r,e[n]=Sr[xr],e[n+t]=Sr[kr],e}function jr(r){return Fr(r,[0,0],1,0)}z(jr,"assign",Fr);var Nr,Tr,Or=!0===Er?1:0,Vr=new fr(1),$r=new ir(Vr.buffer);function Gr(r){return Vr[0]=r,$r[Or]}!0===Er?(Nr=1,Tr=0):(Nr=0,Tr=1);var Hr={HIGH:Nr,LOW:Tr},Wr=new fr(1),Cr=new ir(Wr.buffer),Lr=Hr.HIGH,Pr=Hr.LOW;function Rr(r,e){return Cr[Lr]=r,Cr[Pr]=e,Wr[0]}var Zr=[0,0];function Mr(e,t,n,i){return r(e)||o(e)?(t[i]=e,t[i+n]=0,t):0!==e&&function(r){return Math.abs(r)}(e)<22250738585072014e-324?(t[i]=4503599627370496*e,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}z((function(r){return Mr(r,[0,0],1,0)}),"assign",Mr);var Xr=[0,0],Yr=[0,0];function zr(e,t){var n,c,u,f,s,l;return 0===t||0===e||r(e)||o(e)?e:(Mr(e,Xr,1,0),t+=Xr[1],t+=function(r){var e=Gr(r);return(e=(2146435072&e)>>>20)-1023|0}(e=Xr[0]),t<-1074?(u=0,f=e,jr.assign(u,Zr,1,0),s=Zr[0],s&=2147483647,l=Gr(f),Rr(s|=l&=2147483648,Zr[1])):t>1023?e<0?i:a:(t<=-1023?(t+=52,c=2220446049250313e-31):c=1,jr.assign(e,Yr,1,0),n=Yr[0],n&=2148532223,c*Rr(n|=t+1023<<20,Yr[1])))}function qr(e){var t;return r(e)||e===a?e:e===i?0:e>709.782712893384?a:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(r,e,t){var n,i,a,o;return zr(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(e-.6931471803691238*(t=n(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*t,t)}var Br=!0===Er?1:0,Dr=new fr(1),Jr=new ir(Dr.buffer);var Kr=.6931471803691238,Qr=1.9082149292705877e-10;function re(e){var t,n,a,o,c,u,f,s,l,p,y,g;return 0===e?i:r(e)||e<0?NaN:(c=0,(n=Gr(e))<1048576&&(c-=54,n=Gr(e*=0x40000000000000)),n>=2146435072?e+e:(c+=(n>>20)-1023|0,c+=(s=(n&=1048575)+614244&1048576|0)>>20|0,f=(e=function(r,e){return Dr[0]=r,Jr[Br]=e>>>0,Dr[0]}(e,n|1072693248^s))-1,(1048575&2+n)<3?0===f?0===c?0:c*Kr+c*Qr:(u=f*f*(.5-.3333333333333333*f),0===c?f-u:c*Kr-(u-c*Qr-f)):(s=n-398458|0,l=440401-n|0,o=(y=(g=(p=f/(2+f))*p)*g)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),a=g*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),u=a+o,(s|=l)>0?(t=.5*f*f,0===c?f-(t-p*(t+u)):c*Kr-(t-(p*(t+u)+c*Qr)-f)):0===c?f-p*(f-u):c*Kr-(p*(f-u)-c*Qr-f))))}function ee(e,t){return r(e)||e<=0||r(t)||t<=0?NaN:re(t/e*qr(1+1/e))}export{ee as default};
//# sourceMappingURL=mod.js.map
