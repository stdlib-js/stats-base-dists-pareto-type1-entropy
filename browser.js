// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}var n=Math.floor,r=Math.ceil;function e(t){return t<0?r(t):n(t)}var o=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,u=1023;function a(t){return t===i||t===o}var f="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty,l=Object.prototype,y=l.toString,p=l.__defineGetter__,b=l.__defineSetter__,v=l.__lookupGetter__,s=l.__lookupSetter__,d=function(){try{return f({},"x",{}),!0}catch(t){return!1}}()?c:function(t,n,r){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(v.call(t,n)||s.call(t,n)?(e=t.__proto__,t.__proto__=l,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&p&&p.call(t,n,r.get),u&&b&&b.call(t,n,r.set),t};function w(t,n,r){d(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var A,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",g=_&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return m.call(t);r=t[U],i=U,n=null!=(o=t)&&h.call(o,i);try{t[U]=void 0}catch(n){return m.call(t)}return e=m.call(t),n?t[U]=r:delete t[U],e}:function(t){return m.call(t)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,N="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(j&&r instanceof Uint32Array||"[object Uint32Array]"===g(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?N:function(){throw new Error("not implemented")};var O,S=A,E="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var t,n,r;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),r=n,t=(E&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),r=n,t=(P&&r instanceof Uint8Array||"[object Uint8Array]"===g(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?L:function(){throw new Error("not implemented")};var V,W=H,M="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,n,r;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),r=n,t=(M&&r instanceof Uint16Array||"[object Uint16Array]"===g(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:V,uint8:W};(C=new q.uint16(1))[0]=4660;var z,B,D=52===new q.uint8(C.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new S(K.buffer),R=J.HIGH,X=J.LOW;function Z(t,n,r,e){return K[0]=t,n[e]=Q[R],n[e+r]=Q[X],n}function $(t){return Z(t,[0,0],1,0)}w($,"assign",Z);var tt,nt,rt=!0===D?1:0,et=new G(1),ot=new S(et.buffer);function it(t){return et[0]=t,ot[rt]}!0===D?(tt=1,nt=0):(tt=0,nt=1);var ut={HIGH:tt,LOW:nt},at=new G(1),ft=new S(at.buffer),ct=ut.HIGH,lt=ut.LOW;function yt(t,n){return ft[ct]=t,ft[lt]=n,at[0]}var pt=[0,0];function bt(n,r,e,o){return t(n)||a(n)?(r[o]=n,r[o+e]=0,r):0!==n&&function(t){return Math.abs(t)}(n)<22250738585072014e-324?(r[o]=4503599627370496*n,r[o+e]=-52,r):(r[o]=n,r[o+e]=0,r)}w((function(t){return bt(t,[0,0],1,0)}),"assign",bt);var vt=[0,0],st=[0,0];function dt(n,r){var e,f,c,l,y,p;return 0===r||0===n||t(n)||a(n)?n:(bt(n,vt,1,0),r+=vt[1],r+=function(t){var n=it(t);return(n=(2146435072&n)>>>20)-u|0}(n=vt[0]),r<-1074?(c=0,l=n,$.assign(c,pt,1,0),y=pt[0],y&=2147483647,p=it(l),yt(y|=p&=2147483648,pt[1])):r>1023?n<0?o:i:(r<=-1023?(r+=52,f=2220446049250313e-31):f=1,$.assign(n,st,1,0),e=st[0],e&=2148532223,f*yt(e|=r+u<<20,st[1])))}var wt=1.4426950408889634,At=1/(1<<28);function _t(n){var r;return t(n)||n===i?n:n===o?0:n>709.782712893384?i:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<At?1+n:function(t,n,r){var e,o,i,u;return dt(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(n-.6931471803691238*(r=e(n<0?wt*n-.5:wt*n+.5)),1.9082149292705877e-10*r,r)}var mt=!0===D?1:0,ht=new G(1),Ut=new S(ht.buffer),gt=.6931471803691238,jt=1.9082149292705877e-10,It=1048575;function Nt(n){var r,e,i,a,f,c,l,y,p,b,v,s;return 0===n?o:t(n)||n<0?NaN:(f=0,(e=it(n))<1048576&&(f-=54,e=it(n*=0x40000000000000)),e>=2146435072?n+n:(f+=(e>>20)-u|0,f+=(y=614244+(e&=It)&1048576|0)>>20|0,l=(n=function(t,n){return ht[0]=t,Ut[mt]=n>>>0,ht[0]}(n,e|1072693248^y))-1,(It&2+e)<3?0===l?0===f?0:f*gt+f*jt:(c=l*l*(.5-.3333333333333333*l),0===f?l-c:f*gt-(c-f*jt-l)):(y=e-398458|0,p=440401-e|0,a=(v=(s=(b=l/(2+l))*b)*s)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(v),i=s*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(v),c=i+a,(y|=p)>0?(r=.5*l*l,0===f?l-(r-b*(r+c)):f*gt-(r-(b*(r+c)+f*jt)-l)):0===f?l-b*(l-c):f*gt-(b*(l-c)-f*jt-l))))}return function(n,r){return t(n)||n<=0||t(r)||r<=0?NaN:Nt(r/n*_t(1+1/n))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).entropy=n();
//# sourceMappingURL=browser.js.map
