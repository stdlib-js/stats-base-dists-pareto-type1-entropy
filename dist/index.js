"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var u=s(function(f,n){
var i=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/math-base-special-ln/dist');function v(e,r){return i(e)||e<=0||i(r)||r<=0?NaN:q(r/e*o(1+1/e))}n.exports=v
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
