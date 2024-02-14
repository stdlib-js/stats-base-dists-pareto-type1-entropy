// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";function r(r){return r!=r}var t=Math.floor,e=Math.ceil;function n(r){return r<0?e(r):t(r)}var i=Number,a=i.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,f=i.NEGATIVE_INFINITY,u=1023,l=Number.POSITIVE_INFINITY,p=i.NEGATIVE_INFINITY;function s(r){return r===l||r===p}var y="function"==typeof Object.defineProperty?Object.defineProperty:null,d=Object.defineProperty;function g(r){return"number"==typeof r}function h(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function w(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+h(i):h(i)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function A(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!g(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=w(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=w(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===b.call(r.specifier)?b.call(e):v.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function m(r){return"string"==typeof r}var F=Math.abs,I=String.prototype.toLowerCase,N=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,T=/e-(\d)$/,S=/^(\d+)$/,U=/^(\d+)e/,j=/\.0$/,x=/\.0*e/,k=/(\..*[^0])0*e/;function V(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!g(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":F(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=E.call(e,k,"$1e"),e=E.call(e,x,"e"),e=E.call(e,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=E.call(e,_,"e+0$1"),e=E.call(e,T,"e-0$1"),r.alternate&&(e=E.call(e,S,"$1."),e=E.call(e,U,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===N.call(r.specifier)?N.call(e):I.call(e)}function O(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function G(r,t,e){var n=t-r.length;return n<0?r:r=e?r+O(n):O(n)+r}var H=String.fromCharCode,W=isNaN,$=Array.isArray;function L(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function P(r){var t,e,n,i,a,o,c,f,u;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(m(n=r[f]))o+=n;else{if(t=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,u=0;u<e.length;u++)switch(i=e.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,W(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=A(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!W(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(a)?String(n.arg):H(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=w(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=G(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function R(r){var t,e,n,i;for(e=[],i=0,n=C.exec(r);n;)(t=r.slice(i,C.lastIndex-n[0].length)).length&&e.push(t),e.push(Y(n)),i=C.lastIndex,n=C.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function Z(r){return"string"==typeof r}function M(r){var t,e;if(!Z(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[R(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return P.apply(null,t)}var X=Object.prototype,z=X.toString,q=X.__defineGetter__,B=X.__defineSetter__,D=X.__lookupGetter__,J=X.__lookupSetter__,K=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?d:function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(D.call(r,t)||J.call(r,t)?(n=r.__proto__,r.__proto__=X,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&q&&q.call(r,t,e.get),o&&B&&B.call(r,t,e.set),r};function Q(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var rr,tr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),er=Object.prototype.toString,nr=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=tr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,a;if(null==r)return er.call(r);e=r[ar],a=ar,t=null!=(i=r)&&nr.call(i,a);try{r[ar]=void 0}catch(t){return er.call(r)}return n=er.call(r),t?r[ar]=e:delete r[ar],n}:function(r){return er.call(r)},cr="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,t,e;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(cr&&e instanceof Uint32Array||"[object Uint32Array]"===or(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var lr,pr=rr,sr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,dr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,t,e;if("function"!=typeof yr)return!1;try{t=new yr([1,3.14,-3.14,NaN]),e=t,r=(sr&&e instanceof Float64Array||"[object Float64Array]"===or(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var gr,hr=lr,wr="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,br="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,t,e;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),e=t,r=(wr&&e instanceof Uint8Array||"[object Uint8Array]"===or(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?br:function(){throw new Error("not implemented")};var Ar,mr=gr,Fr="function"==typeof Uint16Array,Ir="function"==typeof Uint16Array?Uint16Array:null,Nr="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,t,e;if("function"!=typeof Ir)return!1;try{t=new Ir(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Fr&&e instanceof Uint16Array||"[object Uint16Array]"===or(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Er,_r={uint16:Ar,uint8:mr};(Er=new _r.uint16(1))[0]=4660;var Tr,Sr,Ur=52===new _r.uint8(Er.buffer)[0];!0===Ur?(Tr=1,Sr=0):(Tr=0,Sr=1);var jr={HIGH:Tr,LOW:Sr},xr=new hr(1),kr=new pr(xr.buffer),Vr=jr.HIGH,Or=jr.LOW;function Gr(r,t,e,n){return xr[0]=r,t[n]=kr[Vr],t[n+e]=kr[Or],t}function Hr(r){return Gr(r,[0,0],1,0)}Q(Hr,"assign",Gr);var Wr,$r="function"==typeof Float64Array,Lr="function"==typeof Float64Array?Float64Array:null,Pr="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Lr)return!1;try{t=new Lr([1,3.14,-3.14,NaN]),e=t,r=($r&&e instanceof Float64Array||"[object Float64Array]"===or(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Cr=!0===Ur?1:0,Yr=new Wr(1),Rr=new pr(Yr.buffer);function Zr(r){return Yr[0]=r,Rr[Cr]}var Mr,Xr,zr,qr="function"==typeof Float64Array,Br="function"==typeof Float64Array?Float64Array:null,Dr="function"==typeof Float64Array?Float64Array:void 0;Mr=function(){var r,t,e;if("function"!=typeof Br)return!1;try{t=new Br([1,3.14,-3.14,NaN]),e=t,r=(qr&&e instanceof Float64Array||"[object Float64Array]"===or(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Dr:function(){throw new Error("not implemented")},!0===Ur?(Xr=1,zr=0):(Xr=0,zr=1);var Jr={HIGH:Xr,LOW:zr},Kr=new Mr(1),Qr=new pr(Kr.buffer),rt=Jr.HIGH,tt=Jr.LOW;function et(r,t){return Qr[rt]=r,Qr[tt]=t,Kr[0]}var nt=[0,0];function it(t,e,n,i){return r(t)||s(t)?(e[i]=t,e[i+n]=0,e):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(e[i]=4503599627370496*t,e[i+n]=-52,e):(e[i]=t,e[i+n]=0,e)}Q((function(r){return it(r,[0,0],1,0)}),"assign",it);var at,ot,ct,ft="function"==typeof Float64Array,ut="function"==typeof Float64Array?Float64Array:null,lt="function"==typeof Float64Array?Float64Array:void 0;at=function(){var r,t,e;if("function"!=typeof ut)return!1;try{t=new ut([1,3.14,-3.14,NaN]),e=t,r=(ft&&e instanceof Float64Array||"[object Float64Array]"===or(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?lt:function(){throw new Error("not implemented")},!0===Ur?(ot=1,ct=0):(ot=0,ct=1);var pt={HIGH:ot,LOW:ct},st=new at(1),yt=new pr(st.buffer),dt=pt.HIGH,gt=pt.LOW;function ht(r,t,e,n){return st[0]=r,t[n]=yt[dt],t[n+e]=yt[gt],t}function wt(r){return ht(r,[0,0],1,0)}Q(wt,"assign",ht);var vt=[0,0],bt=[0,0];function At(t,e){var n,i,a,o,l,p;return 0===e||0===t||r(t)||s(t)?t:(it(t,vt,1,0),e+=vt[1],e+=function(r){var t=Zr(r);return(t=(2146435072&t)>>>20)-u|0}(t=vt[0]),e<-1074?(a=0,o=t,Hr.assign(a,nt,1,0),l=nt[0],l&=2147483647,p=Zr(o),et(l|=p&=2147483648,nt[1])):e>1023?t<0?f:c:(e<=-1023?(e+=52,i=2220446049250313e-31):i=1,wt.assign(t,bt,1,0),n=bt[0],n&=2148532223,i*et(n|=e+u<<20,bt[1])))}var mt=1.4426950408889634,Ft=1/(1<<28);function It(t){var e;return r(t)||t===o?t:t===a?0:t>709.782712893384?o:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Ft?1+t:function(r,t,e){var n,i,a,o;return At(1-(t-(n=r-t)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(t-.6931471803691238*(e=n(t<0?mt*t-.5:mt*t+.5)),1.9082149292705877e-10*e,e)}var Nt,Et="function"==typeof Float64Array,_t="function"==typeof Float64Array?Float64Array:null,Tt="function"==typeof Float64Array?Float64Array:void 0;Nt=function(){var r,t,e;if("function"!=typeof _t)return!1;try{t=new _t([1,3.14,-3.14,NaN]),e=t,r=(Et&&e instanceof Float64Array||"[object Float64Array]"===or(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Tt:function(){throw new Error("not implemented")};var St=!0===Ur?1:0,Ut=new Nt(1),jt=new pr(Ut.buffer),xt=i.NEGATIVE_INFINITY,kt=.6931471803691238,Vt=1.9082149292705877e-10,Ot=1048575;function Gt(t){var e,n,i,a,o,c,f,l,p,s,y,d;return 0===t?xt:r(t)||t<0?NaN:(o=0,(n=Zr(t))<1048576&&(o-=54,n=Zr(t*=0x40000000000000)),n>=2146435072?t+t:(o+=(n>>20)-u|0,o+=(l=614244+(n&=Ot)&1048576|0)>>20|0,f=(t=function(r,t){return Ut[0]=r,jt[St]=t>>>0,Ut[0]}(t,n|1072693248^l))-1,(Ot&2+n)<3?0===f?0===o?0:o*kt+o*Vt:(c=f*f*(.5-.3333333333333333*f),0===o?f-c:o*kt-(c-o*Vt-f)):(l=n-398458|0,p=440401-n|0,a=(y=(d=(s=f/(2+f))*s)*d)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),i=d*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),c=i+a,(l|=p)>0?(e=.5*f*f,0===o?f-(e-s*(e+c)):o*kt-(e-(s*(e+c)+o*Vt)-f)):0===o?f-s*(f-c):o*kt-(s*(f-c)-o*Vt-f))))}return function(t,e){return r(t)||t<=0||r(e)||e<=0?NaN:Gt(e/t*It(1+1/t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=t();
//# sourceMappingURL=browser.js.map
