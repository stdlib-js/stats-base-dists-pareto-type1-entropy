// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Math.floor,n=Math.ceil;function e(r){return r<0?n(r):t(r)}var o=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;function i(r){return r===a||r===o}var u="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty,c=Object.prototype,l=c.toString,y=c.__defineGetter__,v=c.__defineSetter__,p=c.__lookupGetter__,b=c.__lookupSetter__;var w=function(){try{return u({},"x",{}),!0}catch(r){return!1}}()?f:function(r,t,n){var e,o,a,i;if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===l.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(p.call(r,t)||b.call(r,t)?(e=r.__proto__,r.__proto__=c,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,i="set"in n,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&y&&y.call(r,t,n.get),i&&v&&v.call(r,t,n.set),r};function A(r,t,n){w(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var s=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var U=_&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return s.call(r);n=r[d],a=d,t=null!=(o=r)&&m.call(o,a);try{r[d]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[d]=n:delete r[d],e}:function(r){return s.call(r)},h="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null;var j,I="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(h&&n instanceof Uint32Array||"[object Uint32Array]"===U(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var N=j,O="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var E,F="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S([1,3.14,-3.14,NaN]),n=t,r=(O&&n instanceof Float64Array||"[object Float64Array]"===U(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=t,r=(T&&n instanceof Uint8Array||"[object Uint8Array]"===U(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V=P,W="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var M,k="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,65536,65537]),n=t,r=(W&&n instanceof Uint16Array||"[object Uint16Array]"===U(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?k:function(){throw new Error("not implemented")};var Y,C={uint16:M,uint8:V};(Y=new C.uint16(1))[0]=4660;var q,z,B=52===new C.uint8(Y.buffer)[0];!0===B?(q=1,z=0):(q=0,z=1);var D={HIGH:q,LOW:z},J=new H(1),K=new N(J.buffer),Q=D.HIGH,R=D.LOW;function X(r,t,n,e){return J[0]=r,t[e]=K[Q],t[e+n]=K[R],t}function Z(r){return X(r,[0,0],1,0)}A(Z,"assign",X);var $,rr,tr=!0===B?1:0,nr=new H(1),er=new N(nr.buffer);function or(r){return nr[0]=r,er[tr]}!0===B?($=1,rr=0):($=0,rr=1);var ar={HIGH:$,LOW:rr},ir=new H(1),ur=new N(ir.buffer),fr=ar.HIGH,cr=ar.LOW;function lr(r,t){return ur[fr]=r,ur[cr]=t,ir[0]}var yr=[0,0];function vr(t,n,e,o){return r(t)||i(t)?(n[o]=t,n[o+e]=0,n):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(n[o]=4503599627370496*t,n[o+e]=-52,n):(n[o]=t,n[o+e]=0,n)}A((function(r){return vr(r,[0,0],1,0)}),"assign",vr);var pr=[0,0],br=[0,0];function wr(t,n){var e,u,f,c,l,y;return 0===n||0===t||r(t)||i(t)?t:(vr(t,pr,1,0),n+=pr[1],n+=function(r){var t=or(r);return(t=(2146435072&t)>>>20)-1023|0}(t=pr[0]),n<-1074?(f=0,c=t,Z.assign(f,yr,1,0),l=yr[0],l&=2147483647,y=or(c),lr(l|=y&=2147483648,yr[1])):n>1023?t<0?o:a:(n<=-1023?(n+=52,u=2220446049250313e-31):u=1,Z.assign(t,br,1,0),e=br[0],e&=2148532223,u*lr(e|=n+1023<<20,br[1])))}function Ar(t){var n;return r(t)||t===a?t:t===o?0:t>709.782712893384?a:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(r,t,n){var e,o,a,i;return wr(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(t-.6931471803691238*(n=e(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*n,n)}var _r=!0===B?1:0,sr=new H(1),mr=new N(sr.buffer);var dr=.6931471803691238,Ur=1.9082149292705877e-10;function hr(t){var n,e,a,i,u,f,c,l,y,v,p,b;return 0===t?o:r(t)||t<0?NaN:(u=0,(e=or(t))<1048576&&(u-=54,e=or(t*=0x40000000000000)),e>=2146435072?t+t:(u+=(e>>20)-1023|0,u+=(l=(e&=1048575)+614244&1048576|0)>>20|0,c=(t=function(r,t){return sr[0]=r,mr[_r]=t>>>0,sr[0]}(t,e|1072693248^l))-1,(1048575&2+e)<3?0===c?0===u?0:u*dr+u*Ur:(f=c*c*(.5-.3333333333333333*c),0===u?c-f:u*dr-(f-u*Ur-c)):(l=e-398458|0,y=440401-e|0,i=(p=(b=(v=c/(2+c))*v)*b)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),a=b*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),f=a+i,(l|=y)>0?(n=.5*c*c,0===u?c-(n-v*(n+f)):u*dr-(n-(v*(n+f)+u*Ur)-c)):0===u?c-v*(c-f):u*dr-(v*(c-f)-u*Ur-c))))}function gr(t,n){return r(t)||t<=0||r(n)||n<=0?NaN:hr(n/t*Ar(1+1/t))}export{gr as default};
//# sourceMappingURL=mod.js.map
