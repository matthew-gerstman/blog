function Hu(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(o,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Ou(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},Or={},cc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),$u=Symbol.for("react.portal"),Uu=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),qu=Symbol.for("react.provider"),Vu=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Ku=Symbol.for("react.suspense"),Qu=Symbol.for("react.memo"),Xu=Symbol.for("react.lazy"),Fs=Symbol.iterator;function Zu(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uc=Object.assign,pc={};function Ln(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||dc}Ln.prototype.isReactComponent={};Ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hc(){}hc.prototype=Ln.prototype;function Fi(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||dc}var Bi=Fi.prototype=new hc;Bi.constructor=Fi;uc(Bi,Ln.prototype);Bi.isPureReactComponent=!0;var Bs=Array.isArray,mc=Object.prototype.hasOwnProperty,Hi={current:null},gc={key:!0,ref:!0,__self:!0,__source:!0};function fc(e,t,n){var o,r={},a=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)mc.call(t,o)&&!gc.hasOwnProperty(o)&&(r[o]=t[o]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)r[o]===void 0&&(r[o]=l[o]);return{$$typeof:Eo,type:e,key:a,ref:i,props:r,_owner:Hi.current}}function ep(e,t){return{$$typeof:Eo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Eo}function tp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hs=/\/+/g;function da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tp(""+e.key):t.toString(36)}function rr(e,t,n,o,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Eo:case $u:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+da(i,0):o,Bs(r)?(n="",e!=null&&(n=e.replace(Hs,"$&/")+"/"),rr(r,t,n,"",function(d){return d})):r!=null&&(Oi(r)&&(r=ep(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(Hs,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",Bs(e))for(var l=0;l<e.length;l++){a=e[l];var c=o+da(a,l);i+=rr(a,t,n,c,r)}else if(c=Zu(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=o+da(a,l++),i+=rr(a,t,n,c,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Do(e,t,n){if(e==null)return e;var o=[],r=0;return rr(e,o,"","",function(a){return t.call(n,a,r++)}),o}function np(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},ar={transition:null},op={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:ar,ReactCurrentOwner:Hi};function yc(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Do,forEach:function(e,t,n){Do(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Do(e,function(){t++}),t},toArray:function(e){return Do(e,function(t){return t})||[]},only:function(e){if(!Oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ln;F.Fragment=Uu;F.Profiler=Yu;F.PureComponent=Fi;F.StrictMode=Gu;F.Suspense=Ku;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;F.act=yc;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=uc({},e.props),r=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Hi.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)mc.call(t,c)&&!gc.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:Eo,type:e.type,key:r,ref:a,props:o,_owner:i}};F.createContext=function(e){return e={$$typeof:Vu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qu,_context:e},e.Consumer=e};F.createElement=fc;F.createFactory=function(e){var t=fc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Ju,render:e}};F.isValidElement=Oi;F.lazy=function(e){return{$$typeof:Xu,_payload:{_status:-1,_result:e},_init:np}};F.memo=function(e,t){return{$$typeof:Qu,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ar.transition;ar.transition={};try{e()}finally{ar.transition=t}};F.unstable_act=yc;F.useCallback=function(e,t){return ve.current.useCallback(e,t)};F.useContext=function(e){return ve.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};F.useEffect=function(e,t){return ve.current.useEffect(e,t)};F.useId=function(){return ve.current.useId()};F.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ve.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};F.useRef=function(e){return ve.current.useRef(e)};F.useState=function(e){return ve.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ve.current.useTransition()};F.version="18.3.1";cc.exports=F;var k=cc.exports;const Jt=Ou(k),rp=Hu({__proto__:null,default:Jt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=k,ip=Symbol.for("react.element"),sp=Symbol.for("react.fragment"),lp=Object.prototype.hasOwnProperty,cp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dp={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,t,n){var o,r={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)lp.call(t,o)&&!dp.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:ip,type:e,key:a,ref:i,props:r,_owner:cp.current}}Or.Fragment=sp;Or.jsx=wc;Or.jsxs=wc;lc.exports=Or;var s=lc.exports,Da={},vc={exports:{}},Re={},bc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,A){var L=_.length;_.push(A);e:for(;0<L;){var Q=L-1>>>1,re=_[Q];if(0<r(re,A))_[Q]=A,_[L]=re,L=Q;else break e}}function n(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var A=_[0],L=_.pop();if(L!==A){_[0]=L;e:for(var Q=0,re=_.length,Lo=re>>>1;Q<Lo;){var Ut=2*(Q+1)-1,ca=_[Ut],Gt=Ut+1,Wo=_[Gt];if(0>r(ca,L))Gt<re&&0>r(Wo,ca)?(_[Q]=Wo,_[Gt]=L,Q=Gt):(_[Q]=ca,_[Ut]=L,Q=Ut);else if(Gt<re&&0>r(Wo,L))_[Q]=Wo,_[Gt]=L,Q=Gt;else break e}}return A}function r(_,A){var L=_.sortIndex-A.sortIndex;return L!==0?L:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],d=[],g=1,m=null,f=3,b=!1,S=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var A=n(d);A!==null;){if(A.callback===null)o(d);else if(A.startTime<=_)o(d),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(d)}}function w(_){if(y=!1,p(_),!S)if(n(c)!==null)S=!0,sa(x);else{var A=n(d);A!==null&&la(w,A.startTime-_)}}function x(_,A){S=!1,y&&(y=!1,h(z),z=-1),b=!0;var L=f;try{for(p(A),m=n(c);m!==null&&(!(m.expirationTime>A)||_&&!ge());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,f=m.priorityLevel;var re=Q(m.expirationTime<=A);A=e.unstable_now(),typeof re=="function"?m.callback=re:m===n(c)&&o(c),p(A)}else o(c);m=n(c)}if(m!==null)var Lo=!0;else{var Ut=n(d);Ut!==null&&la(w,Ut.startTime-A),Lo=!1}return Lo}finally{m=null,f=L,b=!1}}var I=!1,j=null,z=-1,M=5,R=-1;function ge(){return!(e.unstable_now()-R<M)}function st(){if(j!==null){var _=e.unstable_now();R=_;var A=!0;try{A=j(!0,_)}finally{A?Ze():(I=!1,j=null)}}else I=!1}var Ze;if(typeof u=="function")Ze=function(){u(st)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Bu=je.port2;je.port1.onmessage=st,Ze=function(){Bu.postMessage(null)}}else Ze=function(){v(st,0)};function sa(_){j=_,I||(I=!0,Ze())}function la(_,A){z=v(function(){_(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){S||b||(S=!0,sa(x))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var L=f;f=A;try{return _()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var L=f;f=_;try{return A()}finally{f=L}},e.unstable_scheduleCallback=function(_,A,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,_){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=L+re,_={id:g++,callback:A,priorityLevel:_,startTime:L,expirationTime:re,sortIndex:-1},L>Q?(_.sortIndex=L,t(d,_),n(c)===null&&_===n(d)&&(y?(h(z),z=-1):y=!0,la(w,L-Q))):(_.sortIndex=re,t(c,_),S||b||(S=!0,sa(x))),_},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(_){var A=f;return function(){var L=f;f=A;try{return _.apply(this,arguments)}finally{f=L}}}})(kc);bc.exports=kc;var up=bc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=k,Me=up;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xc=new Set,po={};function sn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(po[e]=t,e=0;e<t.length;e++)xc.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fa=Object.prototype.hasOwnProperty,hp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Os={},$s={};function mp(e){return Fa.call($s,e)?!0:Fa.call(Os,e)?!1:hp.test(e)?$s[e]=!0:(Os[e]=!0,!1)}function gp(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fp(e,t,n,o){if(t===null||typeof t>"u"||gp(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,o,r,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var $i=/[\-:]([a-z])/g;function Ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($i,Ui);ce[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($i,Ui);ce[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($i,Ui);ce[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gi(e,t,n,o){var r=ce.hasOwnProperty(t)?ce[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fp(t,n,r,o)&&(n=null),o||r===null?mp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var wt=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fo=Symbol.for("react.element"),un=Symbol.for("react.portal"),pn=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),Sc=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),Ha=Symbol.for("react.suspense"),Oa=Symbol.for("react.suspense_list"),Vi=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Ic=Symbol.for("react.offscreen"),Us=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ua;function Qn(e){if(ua===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ua=t&&t[1]||""}return`
`+ua+e}var pa=!1;function ha(e,t){if(!e||pa)return"";pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),a=o.stack.split(`
`),i=r.length-1,l=a.length-1;1<=i&&0<=l&&r[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(r[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||r[i]!==a[l]){var c=`
`+r[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qn(e):""}function yp(e){switch(e.tag){case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return e=ha(e.type,!1),e;case 11:return e=ha(e.type.render,!1),e;case 1:return e=ha(e.type,!0),e;default:return""}}function $a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pn:return"Fragment";case un:return"Portal";case Ba:return"Profiler";case Yi:return"StrictMode";case Ha:return"Suspense";case Oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tc:return(e.displayName||"Context")+".Consumer";case Sc:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vi:return t=e.displayName||null,t!==null?t:$a(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return $a(e(t))}catch{}}return null}function wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $a(t);case 8:return t===Yi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=zc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bo(e){e._valueTracker||(e._valueTracker=vp(e))}function jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=zc(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ua(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gs(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pc(e,t){t=t.checked,t!=null&&Gi(e,"checked",t,!1)}function Ga(e,t){Pc(e,t);var n=Dt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ya(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ya(e,t,n){(t!=="number"||fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xn=Array.isArray;function Sn(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Xn(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function _c(e,t){var n=Dt(t.value),o=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Vs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ho,Ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bp=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(e){bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),no[t]=no[e]})});function Nc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||no.hasOwnProperty(e)&&no[e]?(""+t).trim():t+"px"}function Mc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=Nc(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var kp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ja(e,t){if(t){if(kp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xa=null,Tn=null,In=null;function Js(e){if(e=Ro(e)){if(typeof Xa!="function")throw Error(T(280));var t=e.stateNode;t&&(t=qr(t),Xa(e.stateNode,e.type,t))}}function Rc(e){Tn?In?In.push(e):In=[e]:Tn=e}function Ac(){if(Tn){var e=Tn,t=In;if(In=Tn=null,Js(e),t)for(e=0;e<t.length;e++)Js(t[e])}}function Lc(e,t){return e(t)}function Wc(){}var ma=!1;function Dc(e,t,n){if(ma)return e(t,n);ma=!0;try{return Lc(e,t,n)}finally{ma=!1,(Tn!==null||In!==null)&&(Wc(),Ac())}}function mo(e,t){var n=e.stateNode;if(n===null)return null;var o=qr(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Za=!1;if(mt)try{var $n={};Object.defineProperty($n,"passive",{get:function(){Za=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{Za=!1}function xp(e,t,n,o,r,a,i,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var oo=!1,yr=null,wr=!1,ei=null,Sp={onError:function(e){oo=!0,yr=e}};function Tp(e,t,n,o,r,a,i,l,c){oo=!1,yr=null,xp.apply(Sp,arguments)}function Ip(e,t,n,o,r,a,i,l,c){if(Tp.apply(this,arguments),oo){if(oo){var d=yr;oo=!1,yr=null}else throw Error(T(198));wr||(wr=!0,ei=d)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(ln(e)!==e)throw Error(T(188))}function zp(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Ks(r),e;if(a===o)return Ks(r),t;a=a.sibling}throw Error(T(188))}if(n.return!==o.return)n=r,o=a;else{for(var i=!1,l=r.child;l;){if(l===n){i=!0,n=r,o=a;break}if(l===o){i=!0,o=r,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,o=r;break}if(l===o){i=!0,o=a,n=r;break}l=l.sibling}if(!i)throw Error(T(189))}}if(n.alternate!==o)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Bc(e){return e=zp(e),e!==null?Hc(e):null}function Hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hc(e);if(t!==null)return t;e=e.sibling}return null}var Oc=Me.unstable_scheduleCallback,Qs=Me.unstable_cancelCallback,jp=Me.unstable_shouldYield,Pp=Me.unstable_requestPaint,X=Me.unstable_now,_p=Me.unstable_getCurrentPriorityLevel,Ki=Me.unstable_ImmediatePriority,$c=Me.unstable_UserBlockingPriority,vr=Me.unstable_NormalPriority,Cp=Me.unstable_LowPriority,Uc=Me.unstable_IdlePriority,$r=null,at=null;function Ep(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot($r,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Rp,Np=Math.log,Mp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Np(e)/Mp|0)|0}var Oo=64,$o=4194304;function Zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function br(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~r;l!==0?o=Zn(l):(a&=i,a!==0&&(o=Zn(a)))}else i=n&~r,i!==0?o=Zn(i):a!==0&&(o=Zn(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Je(t),r=1<<n,o|=e[n],t&=~r;return o}function Ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Je(a),l=1<<i,c=r[i];c===-1?(!(l&n)||l&o)&&(r[i]=Ap(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function ti(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gc(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function No(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Wp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Je(n),a=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~a}}function Qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Je(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var H=0;function Yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qc,Xi,Vc,Jc,Kc,ni=!1,Uo=[],_t=null,Ct=null,Et=null,go=new Map,fo=new Map,Tt=[],Dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xs(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(t.pointerId)}}function Un(e,t,n,o,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[r]},t!==null&&(t=Ro(t),t!==null&&Xi(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Fp(e,t,n,o,r){switch(t){case"focusin":return _t=Un(_t,e,t,n,o,r),!0;case"dragenter":return Ct=Un(Ct,e,t,n,o,r),!0;case"mouseover":return Et=Un(Et,e,t,n,o,r),!0;case"pointerover":var a=r.pointerId;return go.set(a,Un(go.get(a)||null,e,t,n,o,r)),!0;case"gotpointercapture":return a=r.pointerId,fo.set(a,Un(fo.get(a)||null,e,t,n,o,r)),!0}return!1}function Qc(e){var t=Kt(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Fc(n),t!==null){e.blockedOn=t,Kc(e.priority,function(){Vc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Qa=o,n.target.dispatchEvent(o),Qa=null}else return t=Ro(n),t!==null&&Xi(t),e.blockedOn=n,!1;t.shift()}return!0}function Zs(e,t,n){ir(e)&&n.delete(t)}function Bp(){ni=!1,_t!==null&&ir(_t)&&(_t=null),Ct!==null&&ir(Ct)&&(Ct=null),Et!==null&&ir(Et)&&(Et=null),go.forEach(Zs),fo.forEach(Zs)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,ni||(ni=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Bp)))}function yo(e){function t(r){return Gn(r,e)}if(0<Uo.length){Gn(Uo[0],e);for(var n=1;n<Uo.length;n++){var o=Uo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(_t!==null&&Gn(_t,e),Ct!==null&&Gn(Ct,e),Et!==null&&Gn(Et,e),go.forEach(t),fo.forEach(t),n=0;n<Tt.length;n++)o=Tt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)Qc(n),n.blockedOn===null&&Tt.shift()}var zn=wt.ReactCurrentBatchConfig,kr=!0;function Hp(e,t,n,o){var r=H,a=zn.transition;zn.transition=null;try{H=1,Zi(e,t,n,o)}finally{H=r,zn.transition=a}}function Op(e,t,n,o){var r=H,a=zn.transition;zn.transition=null;try{H=4,Zi(e,t,n,o)}finally{H=r,zn.transition=a}}function Zi(e,t,n,o){if(kr){var r=oi(e,t,n,o);if(r===null)Ia(e,t,o,xr,n),Xs(e,o);else if(Fp(r,e,t,n,o))o.stopPropagation();else if(Xs(e,o),t&4&&-1<Dp.indexOf(e)){for(;r!==null;){var a=Ro(r);if(a!==null&&qc(a),a=oi(e,t,n,o),a===null&&Ia(e,t,o,xr,n),a===r)break;r=a}r!==null&&o.stopPropagation()}else Ia(e,t,o,null,n)}}var xr=null;function oi(e,t,n,o){if(xr=null,e=Ji(o),e=Kt(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xr=e,null}function Xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_p()){case Ki:return 1;case $c:return 4;case vr:case Cp:return 16;case Uc:return 536870912;default:return 16}default:return 16}}var zt=null,es=null,sr=null;function Zc(){if(sr)return sr;var e,t=es,n=t.length,o,r="value"in zt?zt.value:zt.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[a-o];o++);return sr=r.slice(e,1<o?1-o:void 0)}function lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function el(){return!1}function Ae(e){function t(n,o,r,a,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Go:el,this.isPropagationStopped=el,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Ae(Wn),Mo=J({},Wn,{view:0,detail:0}),$p=Ae(Mo),fa,ya,Yn,Ur=J({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(fa=e.screenX-Yn.screenX,ya=e.screenY-Yn.screenY):ya=fa=0,Yn=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),tl=Ae(Ur),Up=J({},Ur,{dataTransfer:0}),Gp=Ae(Up),Yp=J({},Mo,{relatedTarget:0}),wa=Ae(Yp),qp=J({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=Ae(qp),Jp=J({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kp=Ae(Jp),Qp=J({},Wn,{data:0}),nl=Ae(Qp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eh[e])?!!t[e]:!1}function ns(){return th}var nh=J({},Mo,{key:function(e){if(e.key){var t=Xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oh=Ae(nh),rh=J({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ol=Ae(rh),ah=J({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),ih=Ae(ah),sh=J({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=Ae(sh),ch=J({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=Ae(ch),uh=[9,13,27,32],os=mt&&"CompositionEvent"in window,ro=null;mt&&"documentMode"in document&&(ro=document.documentMode);var ph=mt&&"TextEvent"in window&&!ro,ed=mt&&(!os||ro&&8<ro&&11>=ro),rl=" ",al=!1;function td(e,t){switch(e){case"keyup":return uh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function hh(e,t){switch(e){case"compositionend":return nd(t);case"keypress":return t.which!==32?null:(al=!0,rl);case"textInput":return e=t.data,e===rl&&al?null:e;default:return null}}function mh(e,t){if(hn)return e==="compositionend"||!os&&td(e,t)?(e=Zc(),sr=es=zt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gh[e.type]:t==="textarea"}function od(e,t,n,o){Rc(o),t=Sr(t,"onChange"),0<t.length&&(n=new ts("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var ao=null,wo=null;function fh(e){md(e,0)}function Gr(e){var t=fn(e);if(jc(t))return e}function yh(e,t){if(e==="change")return t}var rd=!1;if(mt){var va;if(mt){var ba="oninput"in document;if(!ba){var sl=document.createElement("div");sl.setAttribute("oninput","return;"),ba=typeof sl.oninput=="function"}va=ba}else va=!1;rd=va&&(!document.documentMode||9<document.documentMode)}function ll(){ao&&(ao.detachEvent("onpropertychange",ad),wo=ao=null)}function ad(e){if(e.propertyName==="value"&&Gr(wo)){var t=[];od(t,wo,e,Ji(e)),Dc(fh,t)}}function wh(e,t,n){e==="focusin"?(ll(),ao=t,wo=n,ao.attachEvent("onpropertychange",ad)):e==="focusout"&&ll()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gr(wo)}function bh(e,t){if(e==="click")return Gr(t)}function kh(e,t){if(e==="input"||e==="change")return Gr(t)}function xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:xh;function vo(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Fa.call(t,r)||!Qe(e[r],t[r]))return!1}return!0}function cl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dl(e,t){var n=cl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cl(n)}}function id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sd(){for(var e=window,t=fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fr(e.document)}return t}function rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sh(e){var t=sd(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&id(n.ownerDocument.documentElement,n)){if(o!==null&&rs(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(o.start,r);o=o.end===void 0?a:Math.min(o.end,r),!e.extend&&a>o&&(r=o,o=a,a=r),r=dl(n,a);var i=dl(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Th=mt&&"documentMode"in document&&11>=document.documentMode,mn=null,ri=null,io=null,ai=!1;function ul(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ai||mn==null||mn!==fr(o)||(o=mn,"selectionStart"in o&&rs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&vo(io,o)||(io=o,o=Sr(ri,"onSelect"),0<o.length&&(t=new ts("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=mn)))}function Yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},ka={},ld={};mt&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Yr(e){if(ka[e])return ka[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ld)return ka[e]=t[n];return e}var cd=Yr("animationend"),dd=Yr("animationiteration"),ud=Yr("animationstart"),pd=Yr("transitionend"),hd=new Map,pl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){hd.set(e,t),sn(t,[e])}for(var xa=0;xa<pl.length;xa++){var Sa=pl[xa],Ih=Sa.toLowerCase(),zh=Sa[0].toUpperCase()+Sa.slice(1);Bt(Ih,"on"+zh)}Bt(cd,"onAnimationEnd");Bt(dd,"onAnimationIteration");Bt(ud,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(pd,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function hl(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Ip(o,t,void 0,e),e.currentTarget=null}function md(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var i=o.length-1;0<=i;i--){var l=o[i],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&r.isPropagationStopped())break e;hl(r,l,d),a=c}else for(i=0;i<o.length;i++){if(l=o[i],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&r.isPropagationStopped())break e;hl(r,l,d),a=c}}}if(wr)throw e=ei,wr=!1,ei=null,e}function U(e,t){var n=t[di];n===void 0&&(n=t[di]=new Set);var o=e+"__bubble";n.has(o)||(gd(t,e,2,!1),n.add(o))}function Ta(e,t,n){var o=0;t&&(o|=4),gd(n,e,o,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[qo]){e[qo]=!0,xc.forEach(function(n){n!=="selectionchange"&&(jh.has(n)||Ta(n,!1,e),Ta(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,Ta("selectionchange",!1,t))}}function gd(e,t,n,o){switch(Xc(t)){case 1:var r=Hp;break;case 4:r=Op;break;default:r=Zi}n=r.bind(null,t,n,e),r=void 0,!Za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Ia(e,t,n,o,r){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;i=i.return}for(;l!==null;){if(i=Kt(l),i===null)return;if(c=i.tag,c===5||c===6){o=a=i;continue e}l=l.parentNode}}o=o.return}Dc(function(){var d=a,g=Ji(n),m=[];e:{var f=hd.get(e);if(f!==void 0){var b=ts,S=e;switch(e){case"keypress":if(lr(n)===0)break e;case"keydown":case"keyup":b=oh;break;case"focusin":S="focus",b=wa;break;case"focusout":S="blur",b=wa;break;case"beforeblur":case"afterblur":b=wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=tl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=ih;break;case cd:case dd:case ud:b=Vp;break;case pd:b=lh;break;case"scroll":b=$p;break;case"wheel":b=dh;break;case"copy":case"cut":case"paste":b=Kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ol}var y=(t&4)!==0,v=!y&&e==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var u=d,p;u!==null;){p=u;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,h!==null&&(w=mo(u,h),w!=null&&y.push(ko(u,w,p)))),v)break;u=u.return}0<y.length&&(f=new b(f,S,null,n,g),m.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==Qa&&(S=n.relatedTarget||n.fromElement)&&(Kt(S)||S[gt]))break e;if((b||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,b?(S=n.relatedTarget||n.toElement,b=d,S=S?Kt(S):null,S!==null&&(v=ln(S),S!==v||S.tag!==5&&S.tag!==6)&&(S=null)):(b=null,S=d),b!==S)){if(y=tl,w="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=ol,w="onPointerLeave",h="onPointerEnter",u="pointer"),v=b==null?f:fn(b),p=S==null?f:fn(S),f=new y(w,u+"leave",b,n,g),f.target=v,f.relatedTarget=p,w=null,Kt(g)===d&&(y=new y(h,u+"enter",S,n,g),y.target=p,y.relatedTarget=v,w=y),v=w,b&&S)t:{for(y=b,h=S,u=0,p=y;p;p=cn(p))u++;for(p=0,w=h;w;w=cn(w))p++;for(;0<u-p;)y=cn(y),u--;for(;0<p-u;)h=cn(h),p--;for(;u--;){if(y===h||h!==null&&y===h.alternate)break t;y=cn(y),h=cn(h)}y=null}else y=null;b!==null&&ml(m,f,b,y,!1),S!==null&&v!==null&&ml(m,v,S,y,!0)}}e:{if(f=d?fn(d):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var x=yh;else if(il(f))if(rd)x=kh;else{x=vh;var I=wh}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=bh);if(x&&(x=x(e,d))){od(m,x,n,g);break e}I&&I(e,f,d),e==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&Ya(f,"number",f.value)}switch(I=d?fn(d):window,e){case"focusin":(il(I)||I.contentEditable==="true")&&(mn=I,ri=d,io=null);break;case"focusout":io=ri=mn=null;break;case"mousedown":ai=!0;break;case"contextmenu":case"mouseup":case"dragend":ai=!1,ul(m,n,g);break;case"selectionchange":if(Th)break;case"keydown":case"keyup":ul(m,n,g)}var j;if(os)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else hn?td(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(ed&&n.locale!=="ko"&&(hn||z!=="onCompositionStart"?z==="onCompositionEnd"&&hn&&(j=Zc()):(zt=g,es="value"in zt?zt.value:zt.textContent,hn=!0)),I=Sr(d,z),0<I.length&&(z=new nl(z,e,null,n,g),m.push({event:z,listeners:I}),j?z.data=j:(j=nd(n),j!==null&&(z.data=j)))),(j=ph?hh(e,n):mh(e,n))&&(d=Sr(d,"onBeforeInput"),0<d.length&&(g=new nl("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=j))}md(m,t)})}function ko(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sr(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=mo(e,n),a!=null&&o.unshift(ko(e,a,r)),a=mo(e,t),a!=null&&o.push(ko(e,a,r))),e=e.return}return o}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ml(e,t,n,o,r){for(var a=t._reactName,i=[];n!==null&&n!==o;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===o)break;l.tag===5&&d!==null&&(l=d,r?(c=mo(n,a),c!=null&&i.unshift(ko(n,c,l))):r||(c=mo(n,a),c!=null&&i.push(ko(n,c,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Ph=/\r\n?/g,_h=/\u0000|\uFFFD/g;function gl(e){return(typeof e=="string"?e:""+e).replace(Ph,`
`).replace(_h,"")}function Vo(e,t,n){if(t=gl(t),gl(e)!==t&&n)throw Error(T(425))}function Tr(){}var ii=null,si=null;function li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ci=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,fl=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof fl<"u"?function(e){return fl.resolve(null).then(e).catch(Nh)}:ci;function Nh(e){setTimeout(function(){throw e})}function za(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),yo(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);yo(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Dn,xo="__reactProps$"+Dn,gt="__reactContainer$"+Dn,di="__reactEvents$"+Dn,Mh="__reactListeners$"+Dn,Rh="__reactHandles$"+Dn;function Kt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yl(e);e!==null;){if(n=e[ot])return n;e=yl(e)}return t}e=n,n=e.parentNode}return null}function Ro(e){return e=e[ot]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function qr(e){return e[xo]||null}var ui=[],yn=-1;function Ht(e){return{current:e}}function G(e){0>yn||(e.current=ui[yn],ui[yn]=null,yn--)}function $(e,t){yn++,ui[yn]=e.current,e.current=t}var Ft={},me=Ht(Ft),Te=Ht(!1),tn=Ft;function Cn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ie(e){return e=e.childContextTypes,e!=null}function Ir(){G(Te),G(me)}function wl(e,t,n){if(me.current!==Ft)throw Error(T(168));$(me,t),$(Te,n)}function fd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(T(108,wp(e)||"Unknown",r));return J({},n,o)}function zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,tn=me.current,$(me,e),$(Te,Te.current),!0}function vl(e,t,n){var o=e.stateNode;if(!o)throw Error(T(169));n?(e=fd(e,t,tn),o.__reactInternalMemoizedMergedChildContext=e,G(Te),G(me),$(me,e)):G(Te),$(Te,n)}var ct=null,Vr=!1,ja=!1;function yd(e){ct===null?ct=[e]:ct.push(e)}function Ah(e){Vr=!0,yd(e)}function Ot(){if(!ja&&ct!==null){ja=!0;var e=0,t=H;try{var n=ct;for(H=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}ct=null,Vr=!1}catch(r){throw ct!==null&&(ct=ct.slice(e+1)),Oc(Ki,Ot),r}finally{H=t,ja=!1}}return null}var wn=[],vn=0,jr=null,Pr=0,We=[],De=0,nn=null,ut=1,pt="";function qt(e,t){wn[vn++]=Pr,wn[vn++]=jr,jr=e,Pr=t}function wd(e,t,n){We[De++]=ut,We[De++]=pt,We[De++]=nn,nn=e;var o=ut;e=pt;var r=32-Je(o)-1;o&=~(1<<r),n+=1;var a=32-Je(t)+r;if(30<a){var i=r-r%5;a=(o&(1<<i)-1).toString(32),o>>=i,r-=i,ut=1<<32-Je(t)+r|n<<r|o,pt=a+e}else ut=1<<a|n<<r|o,pt=e}function as(e){e.return!==null&&(qt(e,1),wd(e,1,0))}function is(e){for(;e===jr;)jr=wn[--vn],wn[vn]=null,Pr=wn[--vn],wn[vn]=null;for(;e===nn;)nn=We[--De],We[De]=null,pt=We[--De],We[De]=null,ut=We[--De],We[De]=null}var Ne=null,Ee=null,Y=!1,Ve=null;function vd(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Ee=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:ut,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Ee=null,!0):!1;default:return!1}}function pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hi(e){if(Y){var t=Ee;if(t){var n=t;if(!bl(e,t)){if(pi(e))throw Error(T(418));t=Nt(n.nextSibling);var o=Ne;t&&bl(e,t)?vd(o,n):(e.flags=e.flags&-4097|2,Y=!1,Ne=e)}}else{if(pi(e))throw Error(T(418));e.flags=e.flags&-4097|2,Y=!1,Ne=e}}}function kl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Jo(e){if(e!==Ne)return!1;if(!Y)return kl(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!li(e.type,e.memoizedProps)),t&&(t=Ee)){if(pi(e))throw bd(),Error(T(418));for(;t;)vd(e,t),t=Nt(t.nextSibling)}if(kl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=Ne?Nt(e.stateNode.nextSibling):null;return!0}function bd(){for(var e=Ee;e;)e=Nt(e.nextSibling)}function En(){Ee=Ne=null,Y=!1}function ss(e){Ve===null?Ve=[e]:Ve.push(e)}var Lh=wt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var o=n.stateNode}if(!o)throw Error(T(147,e));var r=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=r.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xl(e){var t=e._init;return t(e._payload)}function kd(e){function t(h,u){if(e){var p=h.deletions;p===null?(h.deletions=[u],h.flags|=16):p.push(u)}}function n(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function o(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function r(h,u){return h=Lt(h,u),h.index=0,h.sibling=null,h}function a(h,u,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<u?(h.flags|=2,u):p):(h.flags|=2,u)):(h.flags|=1048576,u)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,u,p,w){return u===null||u.tag!==6?(u=Ra(p,h.mode,w),u.return=h,u):(u=r(u,p),u.return=h,u)}function c(h,u,p,w){var x=p.type;return x===pn?g(h,u,p.props.children,w,p.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===xt&&xl(x)===u.type)?(w=r(u,p.props),w.ref=qn(h,u,p),w.return=h,w):(w=gr(p.type,p.key,p.props,null,h.mode,w),w.ref=qn(h,u,p),w.return=h,w)}function d(h,u,p,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Aa(p,h.mode,w),u.return=h,u):(u=r(u,p.children||[]),u.return=h,u)}function g(h,u,p,w,x){return u===null||u.tag!==7?(u=en(p,h.mode,w,x),u.return=h,u):(u=r(u,p),u.return=h,u)}function m(h,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ra(""+u,h.mode,p),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Fo:return p=gr(u.type,u.key,u.props,null,h.mode,p),p.ref=qn(h,null,u),p.return=h,p;case un:return u=Aa(u,h.mode,p),u.return=h,u;case xt:var w=u._init;return m(h,w(u._payload),p)}if(Xn(u)||On(u))return u=en(u,h.mode,p,null),u.return=h,u;Ko(h,u)}return null}function f(h,u,p,w){var x=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:l(h,u,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fo:return p.key===x?c(h,u,p,w):null;case un:return p.key===x?d(h,u,p,w):null;case xt:return x=p._init,f(h,u,x(p._payload),w)}if(Xn(p)||On(p))return x!==null?null:g(h,u,p,w,null);Ko(h,p)}return null}function b(h,u,p,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(p)||null,l(u,h,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fo:return h=h.get(w.key===null?p:w.key)||null,c(u,h,w,x);case un:return h=h.get(w.key===null?p:w.key)||null,d(u,h,w,x);case xt:var I=w._init;return b(h,u,p,I(w._payload),x)}if(Xn(w)||On(w))return h=h.get(p)||null,g(u,h,w,x,null);Ko(u,w)}return null}function S(h,u,p,w){for(var x=null,I=null,j=u,z=u=0,M=null;j!==null&&z<p.length;z++){j.index>z?(M=j,j=null):M=j.sibling;var R=f(h,j,p[z],w);if(R===null){j===null&&(j=M);break}e&&j&&R.alternate===null&&t(h,j),u=a(R,u,z),I===null?x=R:I.sibling=R,I=R,j=M}if(z===p.length)return n(h,j),Y&&qt(h,z),x;if(j===null){for(;z<p.length;z++)j=m(h,p[z],w),j!==null&&(u=a(j,u,z),I===null?x=j:I.sibling=j,I=j);return Y&&qt(h,z),x}for(j=o(h,j);z<p.length;z++)M=b(j,h,z,p[z],w),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?z:M.key),u=a(M,u,z),I===null?x=M:I.sibling=M,I=M);return e&&j.forEach(function(ge){return t(h,ge)}),Y&&qt(h,z),x}function y(h,u,p,w){var x=On(p);if(typeof x!="function")throw Error(T(150));if(p=x.call(p),p==null)throw Error(T(151));for(var I=x=null,j=u,z=u=0,M=null,R=p.next();j!==null&&!R.done;z++,R=p.next()){j.index>z?(M=j,j=null):M=j.sibling;var ge=f(h,j,R.value,w);if(ge===null){j===null&&(j=M);break}e&&j&&ge.alternate===null&&t(h,j),u=a(ge,u,z),I===null?x=ge:I.sibling=ge,I=ge,j=M}if(R.done)return n(h,j),Y&&qt(h,z),x;if(j===null){for(;!R.done;z++,R=p.next())R=m(h,R.value,w),R!==null&&(u=a(R,u,z),I===null?x=R:I.sibling=R,I=R);return Y&&qt(h,z),x}for(j=o(h,j);!R.done;z++,R=p.next())R=b(j,h,z,R.value,w),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?z:R.key),u=a(R,u,z),I===null?x=R:I.sibling=R,I=R);return e&&j.forEach(function(st){return t(h,st)}),Y&&qt(h,z),x}function v(h,u,p,w){if(typeof p=="object"&&p!==null&&p.type===pn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Fo:e:{for(var x=p.key,I=u;I!==null;){if(I.key===x){if(x=p.type,x===pn){if(I.tag===7){n(h,I.sibling),u=r(I,p.props.children),u.return=h,h=u;break e}}else if(I.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===xt&&xl(x)===I.type){n(h,I.sibling),u=r(I,p.props),u.ref=qn(h,I,p),u.return=h,h=u;break e}n(h,I);break}else t(h,I);I=I.sibling}p.type===pn?(u=en(p.props.children,h.mode,w,p.key),u.return=h,h=u):(w=gr(p.type,p.key,p.props,null,h.mode,w),w.ref=qn(h,u,p),w.return=h,h=w)}return i(h);case un:e:{for(I=p.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(h,u.sibling),u=r(u,p.children||[]),u.return=h,h=u;break e}else{n(h,u);break}else t(h,u);u=u.sibling}u=Aa(p,h.mode,w),u.return=h,h=u}return i(h);case xt:return I=p._init,v(h,u,I(p._payload),w)}if(Xn(p))return S(h,u,p,w);if(On(p))return y(h,u,p,w);Ko(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(h,u.sibling),u=r(u,p),u.return=h,h=u):(n(h,u),u=Ra(p,h.mode,w),u.return=h,h=u),i(h)):n(h,u)}return v}var Nn=kd(!0),xd=kd(!1),_r=Ht(null),Cr=null,bn=null,ls=null;function cs(){ls=bn=Cr=null}function ds(e){var t=_r.current;G(_r),e._currentValue=t}function mi(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Cr=e,ls=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(ls!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(Cr===null)throw Error(T(308));bn=e,Cr.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var Qt=null;function us(e){Qt===null?Qt=[e]:Qt.push(e)}function Sd(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,us(t)):(n.next=r.next,r.next=n),t.interleaved=n,ft(e,o)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,B&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,ft(e,n)}return r=o.interleaved,r===null?(t.next=t,us(o)):(t.next=r.next,r.next=t),o.interleaved=t,ft(e,n)}function cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Qi(e,n)}}function Sl(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Er(e,t,n,o){var r=e.updateQueue;St=!1;var a=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,i===null?a=d:i.next=d,i=c;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==i&&(l===null?g.firstBaseUpdate=d:l.next=d,g.lastBaseUpdate=c))}if(a!==null){var m=r.baseState;i=0,g=d=c=null,l=a;do{var f=l.lane,b=l.eventTime;if((o&f)===f){g!==null&&(g=g.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,y=l;switch(f=t,b=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){m=S.call(b,m,f);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,f=typeof S=="function"?S.call(b,m,f):S,f==null)break e;m=J({},m,f);break e;case 2:St=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else b={eventTime:b,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(d=g=b,c=m):g=g.next=b,i|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(g===null&&(c=m),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=g,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);rn|=i,e.lanes=i,e.memoizedState=m}}function Tl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(T(191,r));r.call(o)}}}var Ao={},it=Ht(Ao),So=Ht(Ao),To=Ht(Ao);function Xt(e){if(e===Ao)throw Error(T(174));return e}function hs(e,t){switch($(To,t),$(So,e),$(it,Ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Va(t,e)}G(it),$(it,t)}function Mn(){G(it),G(So),G(To)}function Id(e){Xt(To.current);var t=Xt(it.current),n=Va(t,e.type);t!==n&&($(So,e),$(it,n))}function ms(e){So.current===e&&(G(it),G(So))}var q=Ht(0);function Nr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pa=[];function gs(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var dr=wt.ReactCurrentDispatcher,_a=wt.ReactCurrentBatchConfig,on=0,V=null,ne=null,ae=null,Mr=!1,so=!1,Io=0,Wh=0;function de(){throw Error(T(321))}function fs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function ys(e,t,n,o,r,a){if(on=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,dr.current=e===null||e.memoizedState===null?Hh:Oh,e=n(o,r),so){a=0;do{if(so=!1,Io=0,25<=a)throw Error(T(301));a+=1,ae=ne=null,t.updateQueue=null,dr.current=$h,e=n(o,r)}while(so)}if(dr.current=Rr,t=ne!==null&&ne.next!==null,on=0,ae=ne=V=null,Mr=!1,t)throw Error(T(300));return e}function ws(){var e=Io!==0;return Io=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?V.memoizedState=ae=e:ae=ae.next=e,ae}function Oe(){if(ne===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ae===null?V.memoizedState:ae.next;if(t!==null)ae=t,ne=e;else{if(e===null)throw Error(T(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ae===null?V.memoizedState=ae=e:ae=ae.next=e}return ae}function zo(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=Oe(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var o=ne,r=o.baseQueue,a=n.pending;if(a!==null){if(r!==null){var i=r.next;r.next=a.next,a.next=i}o.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,o=o.baseState;var l=i=null,c=null,d=a;do{var g=d.lane;if((on&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,i=o):c=c.next=m,V.lanes|=g,rn|=g}d=d.next}while(d!==null&&d!==a);c===null?i=o:c.next=l,Qe(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do a=r.lane,V.lanes|=a,rn|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=Oe(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do a=e(a,i.action),i=i.next;while(i!==r);Qe(a,t.memoizedState)||(Se=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function zd(){}function jd(e,t){var n=V,o=Oe(),r=t(),a=!Qe(o.memoizedState,r);if(a&&(o.memoizedState=r,Se=!0),o=o.queue,vs(Cd.bind(null,n,o,e),[e]),o.getSnapshot!==t||a||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,jo(9,_d.bind(null,n,o,r,t),void 0,null),ie===null)throw Error(T(349));on&30||Pd(n,t,r)}return r}function Pd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,o){t.value=n,t.getSnapshot=o,Ed(t)&&Nd(e)}function Cd(e,t,n){return n(function(){Ed(t)&&Nd(e)})}function Ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function Nd(e){var t=ft(e,1);t!==null&&Ke(t,e,1,-1)}function Il(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=Bh.bind(null,V,e),[t.memoizedState,e]}function jo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Md(){return Oe().memoizedState}function ur(e,t,n,o){var r=nt();V.flags|=e,r.memoizedState=jo(1|t,n,void 0,o===void 0?null:o)}function Jr(e,t,n,o){var r=Oe();o=o===void 0?null:o;var a=void 0;if(ne!==null){var i=ne.memoizedState;if(a=i.destroy,o!==null&&fs(o,i.deps)){r.memoizedState=jo(t,n,a,o);return}}V.flags|=e,r.memoizedState=jo(1|t,n,a,o)}function zl(e,t){return ur(8390656,8,e,t)}function vs(e,t){return Jr(2048,8,e,t)}function Rd(e,t){return Jr(4,2,e,t)}function Ad(e,t){return Jr(4,4,e,t)}function Ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wd(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4,4,Ld.bind(null,t,e),n)}function bs(){}function Dd(e,t){var n=Oe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&fs(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Fd(e,t){var n=Oe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&fs(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Bd(e,t,n){return on&21?(Qe(n,t)||(n=Gc(),V.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Dh(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var o=_a.transition;_a.transition={};try{e(!1),t()}finally{H=n,_a.transition=o}}function Hd(){return Oe().memoizedState}function Fh(e,t,n){var o=At(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Od(e))$d(t,n);else if(n=Sd(e,t,n,o),n!==null){var r=we();Ke(n,e,o,r),Ud(n,t,o)}}function Bh(e,t,n){var o=At(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Od(e))$d(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(r.hasEagerState=!0,r.eagerState=l,Qe(l,i)){var c=t.interleaved;c===null?(r.next=r,us(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}n=Sd(e,t,r,o),n!==null&&(r=we(),Ke(n,e,o,r),Ud(n,t,o))}}function Od(e){var t=e.alternate;return e===V||t!==null&&t===V}function $d(e,t){so=Mr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ud(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Qi(e,n)}}var Rr={readContext:He,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Hh={readContext:He,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:zl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ur(4194308,4,Ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return ur(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=nt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Fh.bind(null,V,e),[o.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:Il,useDebugValue:bs,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=Il(!1),t=e[0];return e=Dh.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=V,r=nt();if(Y){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ie===null)throw Error(T(349));on&30||Pd(o,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,zl(Cd.bind(null,o,a,e),[e]),o.flags|=2048,jo(9,_d.bind(null,o,a,n,t),void 0,null),n},useId:function(){var e=nt(),t=ie.identifierPrefix;if(Y){var n=pt,o=ut;n=(o&~(1<<32-Je(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Io++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Oh={readContext:He,useCallback:Dd,useContext:He,useEffect:vs,useImperativeHandle:Wd,useInsertionEffect:Rd,useLayoutEffect:Ad,useMemo:Fd,useReducer:Ca,useRef:Md,useState:function(){return Ca(zo)},useDebugValue:bs,useDeferredValue:function(e){var t=Oe();return Bd(t,ne.memoizedState,e)},useTransition:function(){var e=Ca(zo)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:zd,useSyncExternalStore:jd,useId:Hd,unstable_isNewReconciler:!1},$h={readContext:He,useCallback:Dd,useContext:He,useEffect:vs,useImperativeHandle:Wd,useInsertionEffect:Rd,useLayoutEffect:Ad,useMemo:Fd,useReducer:Ea,useRef:Md,useState:function(){return Ea(zo)},useDebugValue:bs,useDeferredValue:function(e){var t=Oe();return ne===null?t.memoizedState=e:Bd(t,ne.memoizedState,e)},useTransition:function(){var e=Ea(zo)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:zd,useSyncExternalStore:jd,useId:Hd,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gi(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Kr={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=we(),r=At(e),a=ht(o,r);a.payload=t,n!=null&&(a.callback=n),t=Mt(e,a,r),t!==null&&(Ke(t,e,r,o),cr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=we(),r=At(e),a=ht(o,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Mt(e,a,r),t!==null&&(Ke(t,e,r,o),cr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),o=At(e),r=ht(n,o);r.tag=2,t!=null&&(r.callback=t),t=Mt(e,r,o),t!==null&&(Ke(t,e,o,n),cr(t,e,o))}};function jl(e,t,n,o,r,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,i):t.prototype&&t.prototype.isPureReactComponent?!vo(n,o)||!vo(r,a):!0}function Gd(e,t,n){var o=!1,r=Ft,a=t.contextType;return typeof a=="object"&&a!==null?a=He(a):(r=Ie(t)?tn:me.current,o=t.contextTypes,a=(o=o!=null)?Cn(e,r):Ft),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Kr,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function Pl(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Kr.enqueueReplaceState(t,t.state,null)}function fi(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},ps(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=He(a):(a=Ie(t)?tn:me.current,r.context=Cn(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(gi(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Kr.enqueueReplaceState(r,r.state,null),Er(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",o=t;do n+=yp(o),o=o.return;while(o);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function Na(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uh=typeof WeakMap=="function"?WeakMap:Map;function Yd(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Lr||(Lr=!0,ji=o),yi(e,t)},n}function qd(e,t,n){n=ht(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){yi(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){yi(e,t),typeof o!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function _l(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Uh;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=rm.bind(null,e,t,n),t.then(e,e))}function Cl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function El(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Gh=wt.ReactCurrentOwner,Se=!1;function ye(e,t,n,o){t.child=e===null?xd(t,null,n,o):Nn(t,e.child,n,o)}function Nl(e,t,n,o,r){n=n.render;var a=t.ref;return jn(t,r),o=ys(e,t,n,o,a,r),n=ws(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,yt(e,t,r)):(Y&&n&&as(t),t.flags|=1,ye(e,t,o,r),t.child)}function Ml(e,t,n,o,r){if(e===null){var a=n.type;return typeof a=="function"&&!Ps(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Vd(e,t,a,o,r)):(e=gr(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(i,o)&&e.ref===t.ref)return yt(e,t,r)}return t.flags|=1,e=Lt(a,o),e.ref=t.ref,e.return=t,t.child=e}function Vd(e,t,n,o,r){if(e!==null){var a=e.memoizedProps;if(vo(a,o)&&e.ref===t.ref)if(Se=!1,t.pendingProps=o=a,(e.lanes&r)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,yt(e,t,r)}return wi(e,t,n,o,r)}function Jd(e,t,n){var o=t.pendingProps,r=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(xn,_e),_e|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(xn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:n,$(xn,_e),_e|=o}else a!==null?(o=a.baseLanes|n,t.memoizedState=null):o=n,$(xn,_e),_e|=o;return ye(e,t,r,n),t.child}function Kd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wi(e,t,n,o,r){var a=Ie(n)?tn:me.current;return a=Cn(t,a),jn(t,r),n=ys(e,t,n,o,a,r),o=ws(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,yt(e,t,r)):(Y&&o&&as(t),t.flags|=1,ye(e,t,n,r),t.child)}function Rl(e,t,n,o,r){if(Ie(n)){var a=!0;zr(t)}else a=!1;if(jn(t,r),t.stateNode===null)pr(e,t),Gd(t,n,o),fi(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=He(d):(d=Ie(n)?tn:me.current,d=Cn(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==o||c!==d)&&Pl(t,i,o,d),St=!1;var f=t.memoizedState;i.state=f,Er(t,o,i,r),c=t.memoizedState,l!==o||f!==c||Te.current||St?(typeof g=="function"&&(gi(t,n,g,o),c=t.memoizedState),(l=St||jl(t,n,l,o,f,c,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),i.props=o,i.state=c,i.context=d,o=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Td(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ye(t.type,l),i.props=d,m=t.pendingProps,f=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=He(c):(c=Ie(n)?tn:me.current,c=Cn(t,c));var b=n.getDerivedStateFromProps;(g=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==m||f!==c)&&Pl(t,i,o,c),St=!1,f=t.memoizedState,i.state=f,Er(t,o,i,r);var S=t.memoizedState;l!==m||f!==S||Te.current||St?(typeof b=="function"&&(gi(t,n,b,o),S=t.memoizedState),(d=St||jl(t,n,d,o,f,S,c)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,S,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,S,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),i.props=o,i.state=S,i.context=c,o=d):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return vi(e,t,n,o,a,r)}function vi(e,t,n,o,r,a){Kd(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&vl(t,n,!1),yt(e,t,a);o=t.stateNode,Gh.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=Nn(t,e.child,null,a),t.child=Nn(t,null,l,a)):ye(e,t,l,a),t.memoizedState=o.state,r&&vl(t,n,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?wl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wl(e,t.context,!1),hs(e,t.containerInfo)}function Al(e,t,n,o,r){return En(),ss(r),t.flags|=256,ye(e,t,n,o),t.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xd(e,t,n){var o=t.pendingProps,r=q.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),$(q,r&1),e===null)return hi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,a?(o=t.mode,a=t.child,i={mode:"hidden",children:i},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Zr(i,o,0,null),e=en(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ki(n),t.memoizedState=bi,e):ks(t,i));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Yh(e,t,i,o,l,r,n);if(a){a=o.fallback,i=t.mode,r=e.child,l=r.sibling;var c={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Lt(r,c),o.subtreeFlags=r.subtreeFlags&14680064),l!==null?a=Lt(l,a):(a=en(a,i,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,i=e.child.memoizedState,i=i===null?ki(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=bi,o}return a=e.child,e=a.sibling,o=Lt(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function ks(e,t){return t=Zr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qo(e,t,n,o){return o!==null&&ss(o),Nn(t,e.child,null,n),e=ks(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yh(e,t,n,o,r,a,i){if(n)return t.flags&256?(t.flags&=-257,o=Na(Error(T(422))),Qo(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,r=t.mode,o=Zr({mode:"visible",children:o.children},r,0,null),a=en(a,r,i,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&Nn(t,e.child,null,i),t.child.memoizedState=ki(i),t.memoizedState=bi,a);if(!(t.mode&1))return Qo(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var l=o.dgst;return o=l,a=Error(T(419)),o=Na(a,o,void 0),Qo(e,t,i,o)}if(l=(i&e.childLanes)!==0,Se||l){if(o=ie,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,ft(e,r),Ke(o,e,r,-1))}return js(),o=Na(Error(T(421))),Qo(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=am.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,Ee=Nt(r.nextSibling),Ne=t,Y=!0,Ve=null,e!==null&&(We[De++]=ut,We[De++]=pt,We[De++]=nn,ut=e.id,pt=e.overflow,nn=t),t=ks(t,o.children),t.flags|=4096,t)}function Ll(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),mi(e.return,t,n)}function Ma(e,t,n,o,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=n,a.tailMode=r)}function Zd(e,t,n){var o=t.pendingProps,r=o.revealOrder,a=o.tail;if(ye(e,t,o.children,n),o=q.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ll(e,n,t);else if(e.tag===19)Ll(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if($(q,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Nr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ma(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Nr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ma(t,!0,n,null,a);break;case"together":Ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qh(e,t,n){switch(t.tag){case 3:Qd(t),En();break;case 5:Id(t);break;case 1:Ie(t.type)&&zr(t);break;case 4:hs(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;$(_r,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?($(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Xd(e,t,n):($(q,q.current&1),e=yt(e,t,n),e!==null?e.sibling:null);$(q,q.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Zd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$(q,q.current),o)break;return null;case 22:case 23:return t.lanes=0,Jd(e,t,n)}return yt(e,t,n)}var eu,xi,tu,nu;eu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xi=function(){};tu=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Xt(it.current);var a=null;switch(n){case"input":r=Ua(e,r),o=Ua(e,o),a=[];break;case"select":r=J({},r,{value:void 0}),o=J({},o,{value:void 0}),a=[];break;case"textarea":r=qa(e,r),o=qa(e,o),a=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Tr)}Ja(n,o);var i;n=null;for(d in r)if(!o.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(po.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in o){var c=o[d];if(l=r!=null?r[d]:void 0,o.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(po.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&U("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};nu=function(e,t,n,o){n!==o&&(t.flags|=4)};function Vn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Vh(e,t,n){var o=t.pendingProps;switch(is(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return Ie(t.type)&&Ir(),ue(t),null;case 3:return o=t.stateNode,Mn(),G(Te),G(me),gs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Ci(Ve),Ve=null))),xi(e,t),ue(t),null;case 5:ms(t);var r=Xt(To.current);if(n=t.type,e!==null&&t.stateNode!=null)tu(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(T(166));return ue(t),null}if(e=Xt(it.current),Jo(t)){o=t.stateNode,n=t.type;var a=t.memoizedProps;switch(o[ot]=t,o[xo]=a,e=(t.mode&1)!==0,n){case"dialog":U("cancel",o),U("close",o);break;case"iframe":case"object":case"embed":U("load",o);break;case"video":case"audio":for(r=0;r<eo.length;r++)U(eo[r],o);break;case"source":U("error",o);break;case"img":case"image":case"link":U("error",o),U("load",o);break;case"details":U("toggle",o);break;case"input":Gs(o,a),U("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},U("invalid",o);break;case"textarea":qs(o,a),U("invalid",o)}Ja(n,a),r=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?o.textContent!==l&&(a.suppressHydrationWarning!==!0&&Vo(o.textContent,l,e),r=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Vo(o.textContent,l,e),r=["children",""+l]):po.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&U("scroll",o)}switch(n){case"input":Bo(o),Ys(o,a,!0);break;case"textarea":Bo(o),Vs(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Tr)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[ot]=t,e[xo]=o,eu(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ka(n,o),n){case"dialog":U("cancel",e),U("close",e),r=o;break;case"iframe":case"object":case"embed":U("load",e),r=o;break;case"video":case"audio":for(r=0;r<eo.length;r++)U(eo[r],e);r=o;break;case"source":U("error",e),r=o;break;case"img":case"image":case"link":U("error",e),U("load",e),r=o;break;case"details":U("toggle",e),r=o;break;case"input":Gs(e,o),r=Ua(e,o),U("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=J({},o,{value:void 0}),U("invalid",e);break;case"textarea":qs(e,o),r=qa(e,o),U("invalid",e);break;default:r=o}Ja(n,r),l=r;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Mc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ec(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ho(e,c):typeof c=="number"&&ho(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(po.hasOwnProperty(a)?c!=null&&a==="onScroll"&&U("scroll",e):c!=null&&Gi(e,a,c,i))}switch(n){case"input":Bo(e),Ys(e,o,!1);break;case"textarea":Bo(e),Vs(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Dt(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Sn(e,!!o.multiple,a,!1):o.defaultValue!=null&&Sn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Tr)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)nu(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(T(166));if(n=Xt(To.current),Xt(it.current),Jo(t)){if(o=t.stateNode,n=t.memoizedProps,o[ot]=t,(a=o.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Vo(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vo(o.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[ot]=t,t.stateNode=o}return ue(t),null;case 13:if(G(q),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ee!==null&&t.mode&1&&!(t.flags&128))bd(),En(),t.flags|=98560,a=!1;else if(a=Jo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(T(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(T(317));a[ot]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),a=!1}else Ve!==null&&(Ci(Ve),Ve=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):js())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return Mn(),xi(e,t),e===null&&bo(t.stateNode.containerInfo),ue(t),null;case 10:return ds(t.type._context),ue(t),null;case 17:return Ie(t.type)&&Ir(),ue(t),null;case 19:if(G(q),a=t.memoizedState,a===null)return ue(t),null;if(o=(t.flags&128)!==0,i=a.rendering,i===null)if(o)Vn(a,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Nr(e),i!==null){for(t.flags|=128,Vn(a,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)a=n,e=o,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(q,q.current&1|2),t.child}e=e.sibling}a.tail!==null&&X()>An&&(t.flags|=128,o=!0,Vn(a,!1),t.lanes=4194304)}else{if(!o)if(e=Nr(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Y)return ue(t),null}else 2*X()-a.renderingStartTime>An&&n!==1073741824&&(t.flags|=128,o=!0,Vn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=X(),t.sibling=null,n=q.current,$(q,o?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return zs(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?_e&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Jh(e,t){switch(is(t),t.tag){case 1:return Ie(t.type)&&Ir(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),G(Te),G(me),gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(G(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(q),null;case 4:return Mn(),null;case 10:return ds(t.type._context),null;case 22:case 23:return zs(),null;case 24:return null;default:return null}}var Xo=!1,he=!1,Kh=typeof WeakSet=="function"?WeakSet:Set,P=null;function kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){K(e,t,o)}else n.current=null}function Si(e,t,n){try{n()}catch(o){K(e,t,o)}}var Wl=!1;function Qh(e,t){if(ii=kr,e=sd(),rs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,c=-1,d=0,g=0,m=e,f=null;t:for(;;){for(var b;m!==n||r!==0&&m.nodeType!==3||(l=i+r),m!==a||o!==0&&m.nodeType!==3||(c=i+o),m.nodeType===3&&(i+=m.nodeValue.length),(b=m.firstChild)!==null;)f=m,m=b;for(;;){if(m===e)break t;if(f===n&&++d===r&&(l=i),f===a&&++g===o&&(c=i),(b=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=b}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(si={focusedElem:e,selectionRange:n},kr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,v=S.memoizedState,h=t.stateNode,u=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),v);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return S=Wl,Wl=!1,S}function lo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Si(t,n,a)}r=r.next}while(r!==o)}}function Qr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Ti(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ou(e){var t=e.alternate;t!==null&&(e.alternate=null,ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[xo],delete t[di],delete t[Mh],delete t[Rh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return e.tag===5||e.tag===3||e.tag===4}function Dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tr));else if(o!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function zi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(zi(e,t,n),e=e.sibling;e!==null;)zi(e,t,n),e=e.sibling}var se=null,qe=!1;function bt(e,t,n){for(n=n.child;n!==null;)au(e,t,n),n=n.sibling}function au(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount($r,n)}catch{}switch(n.tag){case 5:he||kn(n,t);case 6:var o=se,r=qe;se=null,bt(e,t,n),se=o,qe=r,se!==null&&(qe?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(qe?(e=se,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),yo(e)):za(se,n.stateNode));break;case 4:o=se,r=qe,se=n.stateNode.containerInfo,qe=!0,bt(e,t,n),se=o,qe=r;break;case 0:case 11:case 14:case 15:if(!he&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var a=r,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&Si(n,t,i),r=r.next}while(r!==o)}bt(e,t,n);break;case 1:if(!he&&(kn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){K(n,t,l)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(he=(o=he)||n.memoizedState!==null,bt(e,t,n),he=o):bt(e,t,n);break;default:bt(e,t,n)}}function Fl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kh),t.forEach(function(o){var r=im.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function $e(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:se=l.stateNode,qe=!1;break e;case 3:se=l.stateNode.containerInfo,qe=!0;break e;case 4:se=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(se===null)throw Error(T(160));au(a,i,r),se=null,qe=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){K(r,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)iu(t,e),t=t.sibling}function iu(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),et(e),o&4){try{lo(3,e,e.return),Qr(3,e)}catch(y){K(e,e.return,y)}try{lo(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:$e(t,e),et(e),o&512&&n!==null&&kn(n,n.return);break;case 5:if($e(t,e),et(e),o&512&&n!==null&&kn(n,n.return),e.flags&32){var r=e.stateNode;try{ho(r,"")}catch(y){K(e,e.return,y)}}if(o&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Pc(r,a),Ka(l,i);var d=Ka(l,a);for(i=0;i<c.length;i+=2){var g=c[i],m=c[i+1];g==="style"?Mc(r,m):g==="dangerouslySetInnerHTML"?Ec(r,m):g==="children"?ho(r,m):Gi(r,g,m,d)}switch(l){case"input":Ga(r,a);break;case"textarea":_c(r,a);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Sn(r,!!a.multiple,b,!1):f!==!!a.multiple&&(a.defaultValue!=null?Sn(r,!!a.multiple,a.defaultValue,!0):Sn(r,!!a.multiple,a.multiple?[]:"",!1))}r[xo]=a}catch(y){K(e,e.return,y)}}break;case 6:if($e(t,e),et(e),o&4){if(e.stateNode===null)throw Error(T(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(y){K(e,e.return,y)}}break;case 3:if($e(t,e),et(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:$e(t,e),et(e);break;case 13:$e(t,e),et(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Ts=X())),o&4&&Fl(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(he=(d=he)||g,$e(t,e),he=d):$e(t,e),et(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(m=P=g;P!==null;){switch(f=P,b=f.child,f.tag){case 0:case 11:case 14:case 15:lo(4,f,f.return);break;case 1:kn(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){o=f,n=f.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(y){K(o,n,y)}}break;case 5:kn(f,f.return);break;case 22:if(f.memoizedState!==null){Hl(m);continue}}b!==null?(b.return=f,P=b):Hl(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{r=m.stateNode,d?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,c=m.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nc("display",i))}catch(y){K(e,e.return,y)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(y){K(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:$e(t,e),et(e),o&4&&Fl(e);break;case 21:break;default:$e(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ru(n)){var o=n;break e}n=n.return}throw Error(T(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(ho(r,""),o.flags&=-33);var a=Dl(e);zi(e,a,r);break;case 3:case 4:var i=o.stateNode.containerInfo,l=Dl(e);Ii(e,l,i);break;default:throw Error(T(161))}}catch(c){K(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xh(e,t,n){P=e,su(e)}function su(e,t,n){for(var o=(e.mode&1)!==0;P!==null;){var r=P,a=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||Xo;if(!i){var l=r.alternate,c=l!==null&&l.memoizedState!==null||he;l=Xo;var d=he;if(Xo=i,(he=c)&&!d)for(P=r;P!==null;)i=P,c=i.child,i.tag===22&&i.memoizedState!==null?Ol(r):c!==null?(c.return=i,P=c):Ol(r);for(;a!==null;)P=a,su(a),a=a.sibling;P=r,Xo=l,he=d}Bl(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,P=a):Bl(e)}}function Bl(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Qr(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!he)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Tl(t,a,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tl(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&yo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}he||t.flags&512&&Ti(t)}catch(f){K(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Hl(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ol(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qr(4,t)}catch(c){K(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(c){K(t,r,c)}}var a=t.return;try{Ti(t)}catch(c){K(t,a,c)}break;case 5:var i=t.return;try{Ti(t)}catch(c){K(t,i,c)}}}catch(c){K(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Zh=Math.ceil,Ar=wt.ReactCurrentDispatcher,xs=wt.ReactCurrentOwner,Be=wt.ReactCurrentBatchConfig,B=0,ie=null,te=null,le=0,_e=0,xn=Ht(0),oe=0,Po=null,rn=0,Xr=0,Ss=0,co=null,xe=null,Ts=0,An=1/0,lt=null,Lr=!1,ji=null,Rt=null,Zo=!1,jt=null,Wr=0,uo=0,Pi=null,hr=-1,mr=0;function we(){return B&6?X():hr!==-1?hr:hr=X()}function At(e){return e.mode&1?B&2&&le!==0?le&-le:Lh.transition!==null?(mr===0&&(mr=Gc()),mr):(e=H,e!==0||(e=window.event,e=e===void 0?16:Xc(e.type)),e):1}function Ke(e,t,n,o){if(50<uo)throw uo=0,Pi=null,Error(T(185));No(e,n,o),(!(B&2)||e!==ie)&&(e===ie&&(!(B&2)&&(Xr|=n),oe===4&&It(e,le)),ze(e,o),n===1&&B===0&&!(t.mode&1)&&(An=X()+500,Vr&&Ot()))}function ze(e,t){var n=e.callbackNode;Lp(e,t);var o=br(e,e===ie?le:0);if(o===0)n!==null&&Qs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Qs(n),t===1)e.tag===0?Ah($l.bind(null,e)):yd($l.bind(null,e)),Eh(function(){!(B&6)&&Ot()}),n=null;else{switch(Yc(o)){case 1:n=Ki;break;case 4:n=$c;break;case 16:n=vr;break;case 536870912:n=Uc;break;default:n=vr}n=gu(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if(hr=-1,mr=0,B&6)throw Error(T(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var o=br(e,e===ie?le:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Dr(e,o);else{t=o;var r=B;B|=2;var a=du();(ie!==e||le!==t)&&(lt=null,An=X()+500,Zt(e,t));do try{nm();break}catch(l){cu(e,l)}while(!0);cs(),Ar.current=a,B=r,te!==null?t=0:(ie=null,le=0,t=oe)}if(t!==0){if(t===2&&(r=ti(e),r!==0&&(o=r,t=_i(e,r))),t===1)throw n=Po,Zt(e,0),It(e,o),ze(e,X()),n;if(t===6)It(e,o);else{if(r=e.current.alternate,!(o&30)&&!em(r)&&(t=Dr(e,o),t===2&&(a=ti(e),a!==0&&(o=a,t=_i(e,a))),t===1))throw n=Po,Zt(e,0),It(e,o),ze(e,X()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(T(345));case 2:Vt(e,xe,lt);break;case 3:if(It(e,o),(o&130023424)===o&&(t=Ts+500-X(),10<t)){if(br(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){we(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ci(Vt.bind(null,e,xe,lt),t);break}Vt(e,xe,lt);break;case 4:if(It(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-Je(o);a=1<<i,i=t[i],i>r&&(r=i),o&=~a}if(o=r,o=X()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Zh(o/1960))-o,10<o){e.timeoutHandle=ci(Vt.bind(null,e,xe,lt),o);break}Vt(e,xe,lt);break;case 5:Vt(e,xe,lt);break;default:throw Error(T(329))}}}return ze(e,X()),e.callbackNode===n?lu.bind(null,e):null}function _i(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=Dr(e,t),e!==2&&(t=xe,xe=n,t!==null&&Ci(t)),e}function Ci(e){xe===null?xe=e:xe.push.apply(xe,e)}function em(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],a=r.getSnapshot;r=r.value;try{if(!Qe(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~Ss,t&=~Xr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),o=1<<n;e[n]=-1,t&=~o}}function $l(e){if(B&6)throw Error(T(327));Pn();var t=br(e,0);if(!(t&1))return ze(e,X()),null;var n=Dr(e,t);if(e.tag!==0&&n===2){var o=ti(e);o!==0&&(t=o,n=_i(e,o))}if(n===1)throw n=Po,Zt(e,0),It(e,t),ze(e,X()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vt(e,xe,lt),ze(e,X()),null}function Is(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(An=X()+500,Vr&&Ot())}}function an(e){jt!==null&&jt.tag===0&&!(B&6)&&Pn();var t=B;B|=1;var n=Be.transition,o=H;try{if(Be.transition=null,H=1,e)return e()}finally{H=o,Be.transition=n,B=t,!(B&6)&&Ot()}}function zs(){_e=xn.current,G(xn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ch(n)),te!==null)for(n=te.return;n!==null;){var o=n;switch(is(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ir();break;case 3:Mn(),G(Te),G(me),gs();break;case 5:ms(o);break;case 4:Mn();break;case 13:G(q);break;case 19:G(q);break;case 10:ds(o.type._context);break;case 22:case 23:zs()}n=n.return}if(ie=e,te=e=Lt(e.current,null),le=_e=t,oe=0,Po=null,Ss=Xr=rn=0,xe=co=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,a=n.pending;if(a!==null){var i=a.next;a.next=r,o.next=i}n.pending=o}Qt=null}return e}function cu(e,t){do{var n=te;try{if(cs(),dr.current=Rr,Mr){for(var o=V.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}Mr=!1}if(on=0,ae=ne=V=null,so=!1,Io=0,xs.current=null,n===null||n.return===null){oe=1,Po=t,te=null;break}e:{var a=e,i=n.return,l=n,c=t;if(t=le,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=l,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var b=Cl(i);if(b!==null){b.flags&=-257,El(b,i,l,a,t),b.mode&1&&_l(a,d,t),t=b,c=d;var S=t.updateQueue;if(S===null){var y=new Set;y.add(c),t.updateQueue=y}else S.add(c);break e}else{if(!(t&1)){_l(a,d,t),js();break e}c=Error(T(426))}}else if(Y&&l.mode&1){var v=Cl(i);if(v!==null){!(v.flags&65536)&&(v.flags|=256),El(v,i,l,a,t),ss(Rn(c,l));break e}}a=c=Rn(c,l),oe!==4&&(oe=2),co===null?co=[a]:co.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Yd(a,c,t);Sl(a,h);break e;case 1:l=c;var u=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Rt===null||!Rt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=qd(a,l,t);Sl(a,w);break e}}a=a.return}while(a!==null)}pu(n)}catch(x){t=x,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function du(){var e=Ar.current;return Ar.current=Rr,e===null?Rr:e}function js(){(oe===0||oe===3||oe===2)&&(oe=4),ie===null||!(rn&268435455)&&!(Xr&268435455)||It(ie,le)}function Dr(e,t){var n=B;B|=2;var o=du();(ie!==e||le!==t)&&(lt=null,Zt(e,t));do try{tm();break}catch(r){cu(e,r)}while(!0);if(cs(),B=n,Ar.current=o,te!==null)throw Error(T(261));return ie=null,le=0,oe}function tm(){for(;te!==null;)uu(te)}function nm(){for(;te!==null&&!jp();)uu(te)}function uu(e){var t=mu(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?pu(e):te=t,xs.current=null}function pu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jh(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(n=Vh(n,t,_e),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function Vt(e,t,n){var o=H,r=Be.transition;try{Be.transition=null,H=1,om(e,t,n,o)}finally{Be.transition=r,H=o}return null}function om(e,t,n,o){do Pn();while(jt!==null);if(B&6)throw Error(T(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Wp(e,a),e===ie&&(te=ie=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,gu(vr,function(){return Pn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Be.transition,Be.transition=null;var i=H;H=1;var l=B;B|=4,xs.current=null,Qh(e,n),iu(n,e),Sh(si),kr=!!ii,si=ii=null,e.current=n,Xh(n),Pp(),B=l,H=i,Be.transition=a}else e.current=n;if(Zo&&(Zo=!1,jt=e,Wr=r),a=e.pendingLanes,a===0&&(Rt=null),Ep(n.stateNode),ze(e,X()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(Lr)throw Lr=!1,e=ji,ji=null,e;return Wr&1&&e.tag!==0&&Pn(),a=e.pendingLanes,a&1?e===Pi?uo++:(uo=0,Pi=e):uo=0,Ot(),null}function Pn(){if(jt!==null){var e=Yc(Wr),t=Be.transition,n=H;try{if(Be.transition=null,H=16>e?16:e,jt===null)var o=!1;else{if(e=jt,jt=null,Wr=0,B&6)throw Error(T(331));var r=B;for(B|=4,P=e.current;P!==null;){var a=P,i=a.child;if(P.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(P=d;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:lo(8,g,a)}var m=g.child;if(m!==null)m.return=g,P=m;else for(;P!==null;){g=P;var f=g.sibling,b=g.return;if(ou(g),g===d){P=null;break}if(f!==null){f.return=b,P=f;break}P=b}}}var S=a.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}P=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,P=i;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:lo(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,P=h;break e}P=a.return}}var u=e.current;for(P=u;P!==null;){i=P;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,P=p;else e:for(i=u;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qr(9,l)}}catch(x){K(l,l.return,x)}if(l===i){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(B=r,Ot(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot($r,e)}catch{}o=!0}return o}finally{H=n,Be.transition=t}}return!1}function Ul(e,t,n){t=Rn(n,t),t=Yd(e,t,1),e=Mt(e,t,1),t=we(),e!==null&&(No(e,1,t),ze(e,t))}function K(e,t,n){if(e.tag===3)Ul(e,e,n);else for(;t!==null;){if(t.tag===3){Ul(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Rt===null||!Rt.has(o))){e=Rn(n,e),e=qd(t,e,1),t=Mt(t,e,1),e=we(),t!==null&&(No(t,1,e),ze(t,e));break}}t=t.return}}function rm(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(le&n)===n&&(oe===4||oe===3&&(le&130023424)===le&&500>X()-Ts?Zt(e,0):Ss|=n),ze(e,t)}function hu(e,t){t===0&&(e.mode&1?(t=$o,$o<<=1,!($o&130023424)&&($o=4194304)):t=1);var n=we();e=ft(e,t),e!==null&&(No(e,t,n),ze(e,n))}function am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hu(e,n)}function im(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(T(314))}o!==null&&o.delete(t),hu(e,n)}var mu;mu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,qh(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Y&&t.flags&1048576&&wd(t,Pr,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;pr(e,t),e=t.pendingProps;var r=Cn(t,me.current);jn(t,n),r=ys(null,t,o,e,r,n);var a=ws();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(o)?(a=!0,zr(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ps(t),r.updater=Kr,t.stateNode=r,r._reactInternals=t,fi(t,o,e,n),t=vi(null,t,o,!0,a,n)):(t.tag=0,Y&&a&&as(t),ye(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(pr(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=lm(o),e=Ye(o,e),r){case 0:t=wi(null,t,o,e,n);break e;case 1:t=Rl(null,t,o,e,n);break e;case 11:t=Nl(null,t,o,e,n);break e;case 14:t=Ml(null,t,o,Ye(o.type,e),n);break e}throw Error(T(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ye(o,r),wi(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ye(o,r),Rl(e,t,o,r,n);case 3:e:{if(Qd(t),e===null)throw Error(T(387));o=t.pendingProps,a=t.memoizedState,r=a.element,Td(e,t),Er(t,o,null,n);var i=t.memoizedState;if(o=i.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=Rn(Error(T(423)),t),t=Al(e,t,o,n,r);break e}else if(o!==r){r=Rn(Error(T(424)),t),t=Al(e,t,o,n,r);break e}else for(Ee=Nt(t.stateNode.containerInfo.firstChild),Ne=t,Y=!0,Ve=null,n=xd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),o===r){t=yt(e,t,n);break e}ye(e,t,o,n)}t=t.child}return t;case 5:return Id(t),e===null&&hi(t),o=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,li(o,r)?i=null:a!==null&&li(o,a)&&(t.flags|=32),Kd(e,t),ye(e,t,i,n),t.child;case 6:return e===null&&hi(t),null;case 13:return Xd(e,t,n);case 4:return hs(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Nn(t,null,o,n):ye(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ye(o,r),Nl(e,t,o,r,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,a=t.memoizedProps,i=r.value,$(_r,o._currentValue),o._currentValue=i,a!==null)if(Qe(a.value,i)){if(a.children===r.children&&!Te.current){t=yt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var c=l.firstContext;c!==null;){if(c.context===o){if(a.tag===1){c=ht(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),mi(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(T(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),mi(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}ye(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,jn(t,n),r=He(r),o=o(r),t.flags|=1,ye(e,t,o,n),t.child;case 14:return o=t.type,r=Ye(o,t.pendingProps),r=Ye(o.type,r),Ml(e,t,o,r,n);case 15:return Vd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:Ye(o,r),pr(e,t),t.tag=1,Ie(o)?(e=!0,zr(t)):e=!1,jn(t,n),Gd(t,o,r),fi(t,o,r,n),vi(null,t,o,!0,e,n);case 19:return Zd(e,t,n);case 22:return Jd(e,t,n)}throw Error(T(156,t.tag))};function gu(e,t){return Oc(e,t)}function sm(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,o){return new sm(e,t,n,o)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lm(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Vi)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gr(e,t,n,o,r,a){var i=2;if(o=e,typeof e=="function")Ps(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case pn:return en(n.children,r,a,t);case Yi:i=8,r|=8;break;case Ba:return e=Fe(12,n,t,r|2),e.elementType=Ba,e.lanes=a,e;case Ha:return e=Fe(13,n,t,r),e.elementType=Ha,e.lanes=a,e;case Oa:return e=Fe(19,n,t,r),e.elementType=Oa,e.lanes=a,e;case Ic:return Zr(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sc:i=10;break e;case Tc:i=9;break e;case qi:i=11;break e;case Vi:i=14;break e;case xt:i=16,o=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Fe(i,n,t,r),t.elementType=e,t.type=o,t.lanes=a,t}function en(e,t,n,o){return e=Fe(7,e,o,t),e.lanes=n,e}function Zr(e,t,n,o){return e=Fe(22,e,o,t),e.elementType=Ic,e.lanes=n,e.stateNode={isHidden:!1},e}function Ra(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Aa(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cm(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _s(e,t,n,o,r,a,i,l,c){return e=new cm(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Fe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(a),e}function dm(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function fu(e){if(!e)return Ft;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ie(n))return fd(e,n,t)}return t}function yu(e,t,n,o,r,a,i,l,c){return e=_s(n,o,!0,e,r,a,i,l,c),e.context=fu(null),n=e.current,o=we(),r=At(n),a=ht(o,r),a.callback=t??null,Mt(n,a,r),e.current.lanes=r,No(e,r,o),ze(e,o),e}function ea(e,t,n,o){var r=t.current,a=we(),i=At(r);return n=fu(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(a,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Mt(r,t,i),e!==null&&(Ke(e,r,i,a),cr(e,r,i)),i}function Fr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cs(e,t){Gl(e,t),(e=e.alternate)&&Gl(e,t)}function um(){return null}var wu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}ta.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));ea(e,t,null,null)};ta.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){ea(null,e,null,null)}),t[gt]=null}};function ta(e){this._internalRoot=e}ta.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&Qc(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yl(){}function pm(e,t,n,o,r){if(r){if(typeof o=="function"){var a=o;o=function(){var d=Fr(i);a.call(d)}}var i=yu(t,o,e,0,null,!1,!1,"",Yl);return e._reactRootContainer=i,e[gt]=i.current,bo(e.nodeType===8?e.parentNode:e),an(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var l=o;o=function(){var d=Fr(c);l.call(d)}}var c=_s(e,0,!1,null,null,!1,!1,"",Yl);return e._reactRootContainer=c,e[gt]=c.current,bo(e.nodeType===8?e.parentNode:e),an(function(){ea(t,c,n,o)}),c}function oa(e,t,n,o,r){var a=n._reactRootContainer;if(a){var i=a;if(typeof r=="function"){var l=r;r=function(){var c=Fr(i);l.call(c)}}ea(t,i,e,r)}else i=pm(n,t,e,r,o);return Fr(i)}qc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zn(t.pendingLanes);n!==0&&(Qi(t,n|1),ze(t,X()),!(B&6)&&(An=X()+500,Ot()))}break;case 13:an(function(){var o=ft(e,1);if(o!==null){var r=we();Ke(o,e,1,r)}}),Cs(e,1)}};Xi=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=we();Ke(t,e,134217728,n)}Cs(e,134217728)}};Vc=function(e){if(e.tag===13){var t=At(e),n=ft(e,t);if(n!==null){var o=we();Ke(n,e,t,o)}Cs(e,t)}};Jc=function(){return H};Kc=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Xa=function(e,t,n){switch(t){case"input":if(Ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=qr(o);if(!r)throw Error(T(90));jc(o),Ga(o,r)}}}break;case"textarea":_c(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};Lc=Is;Wc=an;var hm={usingClientEntryPoint:!1,Events:[Ro,fn,qr,Rc,Ac,Is]},Jn={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mm={bundleType:Jn.bundleType,version:Jn.version,rendererPackageName:Jn.rendererPackageName,rendererConfig:Jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bc(e),e===null?null:e.stateNode},findFiberByHostInstance:Jn.findFiberByHostInstance||um,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!er.isDisabled&&er.supportsFiber)try{$r=er.inject(mm),at=er}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(T(200));return dm(e,t,null,n)};Re.createRoot=function(e,t){if(!Ns(e))throw Error(T(299));var n=!1,o="",r=wu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=_s(e,1,!1,null,null,n,!1,o,r),e[gt]=t.current,bo(e.nodeType===8?e.parentNode:e),new Es(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Bc(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return an(e)};Re.hydrate=function(e,t,n){if(!na(t))throw Error(T(200));return oa(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(T(405));var o=n!=null&&n.hydratedSources||null,r=!1,a="",i=wu;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=yu(t,null,e,1,n??null,r,!1,a,i),e[gt]=t.current,bo(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new ta(t)};Re.render=function(e,t,n){if(!na(t))throw Error(T(200));return oa(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!na(e))throw Error(T(40));return e._reactRootContainer?(an(function(){oa(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Re.unstable_batchedUpdates=Is;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!na(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return oa(e,t,n,!1,o)};Re.version="18.3.1-next-f1338f8080-20240426";function vu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vu)}catch(e){console.error(e)}}vu(),vc.exports=Re;var gm=vc.exports,Ei,ql=gm;Ei=Da.createRoot=ql.createRoot,Da.hydrateRoot=ql.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_o.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const Vl="popstate";function fm(e){e===void 0&&(e={});function t(o,r){let{pathname:a,search:i,hash:l}=o.location;return Ni("",{pathname:a,search:i,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(o,r){return typeof r=="string"?r:Br(r)}return wm(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ym(){return Math.random().toString(36).substr(2,8)}function Jl(e,t){return{usr:e.state,key:e.key,idx:t}}function Ni(e,t,n,o){return n===void 0&&(n=null),_o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fn(t):t,{state:n,key:t&&t.key||o||ym()})}function Br(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Fn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function wm(e,t,n,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:a=!1}=o,i=r.history,l=Pt.Pop,c=null,d=g();d==null&&(d=0,i.replaceState(_o({},i.state,{idx:d}),""));function g(){return(i.state||{idx:null}).idx}function m(){l=Pt.Pop;let v=g(),h=v==null?null:v-d;d=v,c&&c({action:l,location:y.location,delta:h})}function f(v,h){l=Pt.Push;let u=Ni(y.location,v,h);d=g()+1;let p=Jl(u,d),w=y.createHref(u);try{i.pushState(p,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(w)}a&&c&&c({action:l,location:y.location,delta:1})}function b(v,h){l=Pt.Replace;let u=Ni(y.location,v,h);d=g();let p=Jl(u,d),w=y.createHref(u);i.replaceState(p,"",w),a&&c&&c({action:l,location:y.location,delta:0})}function S(v){let h=r.location.origin!=="null"?r.location.origin:r.location.href,u=typeof v=="string"?v:Br(v);return u=u.replace(/ $/,"%20"),Z(h,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,h)}let y={get action(){return l},get location(){return e(r,i)},listen(v){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Vl,m),c=v,()=>{r.removeEventListener(Vl,m),c=null}},createHref(v){return t(r,v)},createURL:S,encodeLocation(v){let h=S(v);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:b,go(v){return i.go(v)}};return y}var Kl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Kl||(Kl={}));function vm(e,t,n){return n===void 0&&(n="/"),bm(e,t,n)}function bm(e,t,n,o){let r=typeof t=="string"?Fn(t):t,a=Ms(r.pathname||"/",n);if(a==null)return null;let i=ku(e);km(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let d=Mm(a);l=Cm(i[c],d)}return l}function ku(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let r=(a,i,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Wt([o,c.relativePath]),g=n.concat(c);a.children&&a.children.length>0&&(Z(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ku(a.children,t,g,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Pm(d,a.index),routesMeta:g})};return e.forEach((a,i)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))r(a,i);else for(let c of xu(a.path))r(a,i,c)}),t}function xu(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(o.length===0)return r?[a,""]:[a];let i=xu(o.join("/")),l=[];return l.push(...i.map(c=>c===""?a:[a,c].join("/"))),r&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function km(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_m(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const xm=/^:[\w-]+$/,Sm=3,Tm=2,Im=1,zm=10,jm=-2,Ql=e=>e==="*";function Pm(e,t){let n=e.split("/"),o=n.length;return n.some(Ql)&&(o+=jm),t&&(o+=Tm),n.filter(r=>!Ql(r)).reduce((r,a)=>r+(xm.test(a)?Sm:a===""?Im:zm),o)}function _m(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function Cm(e,t,n){let{routesMeta:o}=e,r={},a="/",i=[];for(let l=0;l<o.length;++l){let c=o[l],d=l===o.length-1,g=a==="/"?t:t.slice(a.length)||"/",m=Em({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},g),f=c.route;if(!m)return null;Object.assign(r,m.params),i.push({params:r,pathname:Wt([a,m.pathname]),pathnameBase:Wm(Wt([a,m.pathnameBase])),route:f}),m.pathnameBase!=="/"&&(a=Wt([a,m.pathnameBase]))}return i}function Em(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Nm(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],i=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:o.reduce((d,g,m)=>{let{paramName:f,isOptional:b}=g;if(f==="*"){let y=l[m]||"";i=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const S=l[m];return b&&!S?d[f]=void 0:d[f]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:i,pattern:e}}function Nm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(o.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function Mm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ms(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function Rm(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:r=""}=typeof e=="string"?Fn(e):e;return{pathname:n?n.startsWith("/")?n:Am(n,t):t,search:Dm(o),hash:Fm(r)}}function Am(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function La(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Rs(e,t){let n=Lm(e);return t?n.map((o,r)=>r===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function As(e,t,n,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=Fn(e):(r=_o({},e),Z(!r.pathname||!r.pathname.includes("?"),La("?","pathname","search",r)),Z(!r.pathname||!r.pathname.includes("#"),La("#","pathname","hash",r)),Z(!r.search||!r.search.includes("#"),La("#","search","hash",r)));let a=e===""||r.pathname==="",i=a?"/":r.pathname,l;if(i==null)l=n;else{let m=t.length-1;if(!o&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),m-=1;r.pathname=f.join("/")}l=m>=0?t[m]:"/"}let c=Rm(r,l),d=i&&i!=="/"&&i.endsWith("/"),g=(a||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||g)&&(c.pathname+="/"),c}const Wt=e=>e.join("/").replace(/\/\/+/g,"/"),Wm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Bm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Su=["post","put","patch","delete"];new Set(Su);const Hm=["get",...Su];new Set(Hm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Co.apply(this,arguments)}const Ls=k.createContext(null),Om=k.createContext(null),$t=k.createContext(null),ra=k.createContext(null),vt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Tu=k.createContext(null);function $m(e,t){let{relative:n}=t===void 0?{}:t;Bn()||Z(!1);let{basename:o,navigator:r}=k.useContext($t),{hash:a,pathname:i,search:l}=zu(e,{relative:n}),c=i;return o!=="/"&&(c=i==="/"?o:Wt([o,i])),r.createHref({pathname:c,search:l,hash:a})}function Bn(){return k.useContext(ra)!=null}function Xe(){return Bn()||Z(!1),k.useContext(ra).location}function Iu(e){k.useContext($t).static||k.useLayoutEffect(e)}function Hn(){let{isDataRoute:e}=k.useContext(vt);return e?ng():Um()}function Um(){Bn()||Z(!1);let e=k.useContext(Ls),{basename:t,future:n,navigator:o}=k.useContext($t),{matches:r}=k.useContext(vt),{pathname:a}=Xe(),i=JSON.stringify(Rs(r,n.v7_relativeSplatPath)),l=k.useRef(!1);return Iu(()=>{l.current=!0}),k.useCallback(function(d,g){if(g===void 0&&(g={}),!l.current)return;if(typeof d=="number"){o.go(d);return}let m=As(d,JSON.parse(i),a,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Wt([t,m.pathname])),(g.replace?o.replace:o.push)(m,g.state,g)},[t,o,i,a,e])}function aa(){let{matches:e}=k.useContext(vt),t=e[e.length-1];return t?t.params:{}}function zu(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=k.useContext($t),{matches:r}=k.useContext(vt),{pathname:a}=Xe(),i=JSON.stringify(Rs(r,o.v7_relativeSplatPath));return k.useMemo(()=>As(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function Gm(e,t){return Ym(e,t)}function Ym(e,t,n,o){Bn()||Z(!1);let{navigator:r}=k.useContext($t),{matches:a}=k.useContext(vt),i=a[a.length-1],l=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let d=Xe(),g;if(t){var m;let v=typeof t=="string"?Fn(t):t;c==="/"||(m=v.pathname)!=null&&m.startsWith(c)||Z(!1),g=v}else g=d;let f=g.pathname||"/",b=f;if(c!=="/"){let v=c.replace(/^\//,"").split("/");b="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let S=vm(e,{pathname:b}),y=Qm(S&&S.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Wt([c,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:Wt([c,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),a,n,o);return t&&y?k.createElement(ra.Provider,{value:{location:Co({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Pt.Pop}},y):y}function qm(){let e=tg(),t=Bm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:r},n):null,null)}const Vm=k.createElement(qm,null);class Jm extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(vt.Provider,{value:this.props.routeContext},k.createElement(Tu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Km(e){let{routeContext:t,match:n,children:o}=e,r=k.useContext(Ls);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(vt.Provider,{value:t},o)}function Qm(e,t,n,o){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=o)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let g=i.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);g>=0||Z(!1),i=i.slice(0,Math.min(i.length,g+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let g=0;g<i.length;g++){let m=i[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=g),m.route.id){let{loaderData:f,errors:b}=n,S=m.route.loader&&f[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||S){c=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((g,m,f)=>{let b,S=!1,y=null,v=null;n&&(b=l&&m.route.id?l[m.route.id]:void 0,y=m.route.errorElement||Vm,c&&(d<0&&f===0?(og("route-fallback"),S=!0,v=null):d===f&&(S=!0,v=m.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,f+1)),u=()=>{let p;return b?p=y:S?p=v:m.route.Component?p=k.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=g,k.createElement(Km,{match:m,routeContext:{outlet:g,matches:h,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?k.createElement(Jm,{location:n.location,revalidation:n.revalidation,component:y,error:b,children:u(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):u()},null)}var ju=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ju||{}),Pu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pu||{});function Xm(e){let t=k.useContext(Ls);return t||Z(!1),t}function Zm(e){let t=k.useContext(Om);return t||Z(!1),t}function eg(e){let t=k.useContext(vt);return t||Z(!1),t}function _u(e){let t=eg(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function tg(){var e;let t=k.useContext(Tu),n=Zm(),o=_u();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function ng(){let{router:e}=Xm(ju.UseNavigateStable),t=_u(Pu.UseNavigateStable),n=k.useRef(!1);return Iu(()=>{n.current=!0}),k.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Co({fromRouteId:t},a)))},[e,t])}const Xl={};function og(e,t,n){Xl[e]||(Xl[e]=!0)}function rg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hr(e){let{to:t,replace:n,state:o,relative:r}=e;Bn()||Z(!1);let{future:a,static:i}=k.useContext($t),{matches:l}=k.useContext(vt),{pathname:c}=Xe(),d=Hn(),g=As(t,Rs(l,a.v7_relativeSplatPath),c,r==="path"),m=JSON.stringify(g);return k.useEffect(()=>d(JSON.parse(m),{replace:n,state:o,relative:r}),[d,m,r,n,o]),null}function ke(e){Z(!1)}function ag(e){let{basename:t="/",children:n=null,location:o,navigationType:r=Pt.Pop,navigator:a,static:i=!1,future:l}=e;Bn()&&Z(!1);let c=t.replace(/^\/*/,"/"),d=k.useMemo(()=>({basename:c,navigator:a,static:i,future:Co({v7_relativeSplatPath:!1},l)}),[c,l,a,i]);typeof o=="string"&&(o=Fn(o));let{pathname:g="/",search:m="",hash:f="",state:b=null,key:S="default"}=o,y=k.useMemo(()=>{let v=Ms(g,c);return v==null?null:{location:{pathname:v,search:m,hash:f,state:b,key:S},navigationType:r}},[c,g,m,f,b,S,r]);return y==null?null:k.createElement($t.Provider,{value:d},k.createElement(ra.Provider,{children:n,value:y}))}function ig(e){let{children:t,location:n}=e;return Gm(Mi(t),n)}new Promise(()=>{});function Mi(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(o,r)=>{if(!k.isValidElement(o))return;let a=[...t,r];if(o.type===k.Fragment){n.push.apply(n,Mi(o.props.children,a));return}o.type!==ke&&Z(!1),!o.props.index||!o.props.children||Z(!1);let i={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=Mi(o.props.children,a)),n.push(i)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ri(){return Ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ri.apply(this,arguments)}function sg(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,a;for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function lg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function cg(e,t){return e.button===0&&(!t||t==="_self")&&!lg(e)}function Ai(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let o=e[n];return t.concat(Array.isArray(o)?o.map(r=>[n,r]):[[n,o]])},[]))}function dg(e,t){let n=Ai(e);return t&&t.forEach((o,r)=>{n.has(r)||t.getAll(r).forEach(a=>{n.append(r,a)})}),n}const ug=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],pg="6";try{window.__reactRouterVersion=pg}catch{}const hg="startTransition",Zl=rp[hg];function mg(e){let{basename:t,children:n,future:o,window:r}=e,a=k.useRef();a.current==null&&(a.current=fm({window:r,v5Compat:!0}));let i=a.current,[l,c]=k.useState({action:i.action,location:i.location}),{v7_startTransition:d}=o||{},g=k.useCallback(m=>{d&&Zl?Zl(()=>c(m)):c(m)},[c,d]);return k.useLayoutEffect(()=>i.listen(g),[i,g]),k.useEffect(()=>rg(o),[o]),k.createElement(ag,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:o})}const gg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=k.forwardRef(function(t,n){let{onClick:o,relative:r,reloadDocument:a,replace:i,state:l,target:c,to:d,preventScrollReset:g,viewTransition:m}=t,f=sg(t,ug),{basename:b}=k.useContext($t),S,y=!1;if(typeof d=="string"&&fg.test(d)&&(S=d,gg))try{let p=new URL(window.location.href),w=d.startsWith("//")?new URL(p.protocol+d):new URL(d),x=Ms(w.pathname,b);w.origin===p.origin&&x!=null?d=x+w.search+w.hash:y=!0}catch{}let v=$m(d,{relative:r}),h=yg(d,{replace:i,state:l,target:c,preventScrollReset:g,relative:r,viewTransition:m});function u(p){o&&o(p),p.defaultPrevented||h(p)}return k.createElement("a",Ri({},f,{href:S||v,onClick:y||a?o:u,ref:n,target:c}))});var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ec||(ec={}));var tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tc||(tc={}));function yg(e,t){let{target:n,replace:o,state:r,preventScrollReset:a,relative:i,viewTransition:l}=t===void 0?{}:t,c=Hn(),d=Xe(),g=zu(e,{relative:i});return k.useCallback(m=>{if(cg(m,n)){m.preventDefault();let f=o!==void 0?o:Br(d)===Br(g);c(e,{replace:f,state:r,preventScrollReset:a,relative:i,viewTransition:l})}},[d,c,g,o,r,n,e,a,i,l])}function wg(e){let t=k.useRef(Ai(e)),n=k.useRef(!1),o=Xe(),r=k.useMemo(()=>dg(o.search,n.current?null:t.current),[o.search]),a=Hn(),i=k.useCallback((l,c)=>{const d=Ai(typeof l=="function"?l(r):l);n.current=!0,a("?"+d,c)},[a,r]);return[r,i]}const Li="stickyJobTitle";function Cu(e){const t=new CustomEvent(Li,{detail:e});window.dispatchEvent(t)}function vg(e){const t=n=>{e(n.detail)};return window.addEventListener(Li,t),()=>{window.removeEventListener(Li,t)}}function bg(){Cu({title:"",color:"",visible:!1})}const kg="_header_1fpxe_1",xg="_inner_1fpxe_15",Sg="_logo_1fpxe_26",Tg="_nav_1fpxe_50",Ig="_active_1fpxe_64",zg="_themeToggle_1fpxe_90",jg="_themeIcon_1fpxe_106",Pg="_stickyTitle_1fpxe_110",_g="_visible_1fpxe_125",Le={header:kg,inner:xg,logo:Sg,nav:Tg,active:Ig,themeToggle:zg,themeIcon:jg,stickyTitle:Pg,visible:_g};function Cg({theme:e,onToggleTheme:t}){const n=Xe(),[o,r]=k.useState(null);k.useEffect(()=>vg(l=>{r(l.visible?l:null)}),[]);const a=i=>!!(i==="/"&&n.pathname==="/"||i==="/writing"&&n.pathname==="/"||i!=="/"&&n.pathname.startsWith(i));return s.jsx("header",{className:Le.header,children:s.jsxs("div",{className:Le.inner,children:[s.jsx(dt,{to:"/",className:Le.logo,children:"Matthew Gerstman"}),s.jsxs("nav",{className:Le.nav,children:[s.jsx(dt,{to:"/resume",className:a("/resume")?Le.active:"",children:"Resume"}),s.jsx(dt,{to:"/writing",className:a("/writing")?Le.active:"",children:"Writing"}),s.jsx(dt,{to:"/talks",className:a("/talks")?Le.active:"",children:"Talks"}),s.jsx(dt,{to:"/about",className:a("/about")?Le.active:"",children:"About"}),s.jsx("button",{className:Le.themeToggle,onClick:t,"aria-label":"Toggle theme",children:s.jsx("span",{className:Le.themeIcon,children:e==="dark"?"🌙":"☀️"})})]}),o&&s.jsx("div",{className:`${Le.stickyTitle} ${Le.visible}`,style:{color:o.color},children:o.title})]})})}function rt(e,t){if(e=e.toLowerCase(),t=t.toLowerCase(),e.length<=3){if(t.includes(e)){const d=t.indexOf(e);return{matched:!0,score:100*(d===0||/\s/.test(t[d-1])?2:1)/(d+1)}}return{matched:!1,score:0}}let n=0,o=0,r=0,a=0,i=-1;const l=2;for(;n<e.length&&o<t.length;){if(e[n]===t[o]){if(i!==-1&&o-i>l+1)return{matched:!1,score:0};r+=1+a,a++,i=o,n++}else a=0;o++}if(n!==e.length)return{matched:!1,score:0};const c=t.length/e.length;return r=r/Math.max(1,c*.5),{matched:!0,score:r}}function Eg(e,t){return t?e.map(n=>{const o=rt(t,n.title),r=n.excerpt?rt(t,n.excerpt):{matched:!1,score:0},a=(o.matched?o.score*2:0)+(r.matched?r.score:0);return{post:n,matched:o.matched||r.matched,score:a}}).filter(n=>n.matched).sort((n,o)=>o.score-n.score).map(n=>n.post):e}function Ng(e,t){return t?e.map(n=>{const o=rt(t,n.title),a=n.technologies.map(c=>rt(t,c)).reduce((c,d)=>d.score>c.score?d:c,{matched:!1,score:0}),i=n.description?rt(t,n.description):{matched:!1,score:0},l=(o.matched?o.score*3:0)+(a.matched?a.score*2:0)+(i.matched?i.score:0);return{project:n,matched:o.matched||a.matched||i.matched,score:l}}).filter(n=>n.matched).sort((n,o)=>o.score-n.score).map(n=>n.project):e}function Mg(e,t){return t?e.map(n=>{const o=rt(t,n.title),r=n.subtitle?rt(t,n.subtitle):{matched:!1,score:0},i=n.tags.map(g=>rt(t,g)).reduce((g,m)=>m.score>g.score?m:g,{matched:!1,score:0}),l=n.description?rt(t,n.description):{matched:!1,score:0},c=n.venue?rt(t,n.venue):{matched:!1,score:0},d=(o.matched?o.score*3:0)+(r.matched?r.score*2.5:0)+(i.matched?i.score*2:0)+(l.matched?l.score:0)+(c.matched?c.score*.5:0);return{talk:n,matched:o.matched||r.matched||i.matched||l.matched||c.matched,score:d}}).filter(n=>n.matched).sort((n,o)=>o.score-n.score).map(n=>n.talk):e}function Ws(e){return!e||e===0?0:Math.ceil(e/200)}const Rg="_overlay_npiux_1",Ag="_modal_npiux_16",Lg="_input_npiux_26",Wg="_results_npiux_41",Dg="_resultItem_npiux_46",Fg="_selected_npiux_61",Bg="_icon_npiux_65",Hg="_placeholder_npiux_74",Og="_content_npiux_83",$g="_title_npiux_88",Ug="_meta_npiux_98",Gg="_empty_npiux_103",W={overlay:Rg,modal:Ag,input:Lg,results:Wg,resultItem:Dg,selected:Fg,icon:Bg,placeholder:Hg,content:Og,title:$g,meta:Ug,empty:Gg},Yg=[{title:"Resume",path:"/resume",icon:"💼",description:"Experience, projects, and skills"},{title:"Writing",path:"/writing",icon:"✍️",description:"Technical articles and blog posts"},{title:"Talks",path:"/talks",icon:"🎤",description:"Conference talks and presentations"},{title:"About",path:"/about",icon:"👋",description:"About me and contact information"}];function qg(e){return`https://img.youtube.com/vi/${e.split("?")[0]}/hqdefault.jpg`}function Vg({isOpen:e,onClose:t,posts:n,projects:o=[],talks:r=[]}){const[a,i]=k.useState(""),[l,c]=k.useState([]),[d,g]=k.useState(0),m=["Start typing... I promise I'm faster than Cmd+F","Your search begins here... no pressure though","Type something. Anything. I'm not picky.","Waiting patiently for your keystrokes...","Go ahead, I've indexed everything. Try me.","Nothing to see here... yet."],[f,b]=k.useState(m[0]),S=k.useRef(null),y=Hn(),v=Xe();k.useEffect(()=>{e&&(i(""),c([]),g(0),b(m[Math.floor(Math.random()*m.length)]),setTimeout(()=>{var p;return(p=S.current)==null?void 0:p.focus()},100))},[e]),k.useEffect(()=>{if(!a){c([]),g(0);return}const p=Yg.filter(je=>je.title.toLowerCase().includes(a.toLowerCase())||je.description.toLowerCase().includes(a.toLowerCase())),w=v.pathname.startsWith("/writing"),x=v.pathname.startsWith("/talks"),I=Eg(n,a),j=Ng(o,a),z=Mg(r,a),M=p.map(je=>({type:"page",item:je})),R=I.map(je=>({type:"post",item:je})),ge=j.map(je=>({type:"project",item:je})),st=z.map(je=>({type:"talk",item:je}));let Ze;w?Ze=[...M,...R.slice(0,5),...st.slice(0,2),...ge.slice(0,2)]:x?Ze=[...M,...st.slice(0,5),...R.slice(0,2),...ge.slice(0,2)]:Ze=[...M,...ge.slice(0,5),...R.slice(0,2),...st.slice(0,2)],c(Ze.slice(0,8)),g(0)},[a,n,o,r,v.pathname]);const h=p=>{if(p.key==="ArrowDown")p.preventDefault(),g(w=>Math.min(w+1,l.length-1));else if(p.key==="ArrowUp")p.preventDefault(),g(w=>Math.max(w-1,0));else if(p.key==="Enter"&&l[d]){p.preventDefault();const w=l[d];w.type==="page"?y(w.item.path):w.type==="post"?y(`/writing/${w.item.slug}`):w.type==="project"?y(`/resume?project=${w.item.key}`):w.type==="talk"&&y(`/talks/${w.item.id}`),t()}else p.key==="Escape"&&t()},u=p=>{p.type==="page"?y(p.item.path):p.type==="post"?y(`/writing/${p.item.slug}`):p.type==="project"?y(`/resume?project=${p.item.key}`):p.type==="talk"&&y(`/talks/${p.item.id}`),t()};return e?s.jsx("div",{className:W.overlay,onClick:t,children:s.jsxs("div",{className:W.modal,onClick:p=>p.stopPropagation(),children:[s.jsx("input",{ref:S,type:"text",className:W.input,placeholder:"Search pages, articles, talks, and projects...",value:a,onChange:p=>i(p.target.value),onKeyDown:h,autoComplete:"off"}),s.jsxs("div",{className:W.results,children:[!a&&s.jsx("div",{className:W.empty,children:f}),a&&l.length===0&&s.jsx("div",{className:W.empty,children:"No results found"}),l.map((p,w)=>{if(p.type==="page"){const x=p.item;return s.jsxs("div",{className:`${W.resultItem} ${w===d?W.selected:""}`,onClick:()=>u(p),children:[s.jsx("div",{className:`${W.icon} ${W.placeholder}`,children:x.icon}),s.jsxs("div",{className:W.content,children:[s.jsx("div",{className:W.title,children:x.title}),s.jsxs("div",{className:W.meta,children:["Page · ",x.description]})]})]},`page-${x.path}`)}else if(p.type==="post"){const x=p.item,I=x.banner_img,j=Ws(x.content);return s.jsxs("div",{className:`${W.resultItem} ${w===d?W.selected:""}`,onClick:()=>u(p),children:[I?s.jsx("img",{src:I,alt:x.title,className:W.icon}):s.jsx("div",{className:`${W.icon} ${W.placeholder}`,children:"📝"}),s.jsxs("div",{className:W.content,children:[s.jsx("div",{className:W.title,children:x.title}),s.jsxs("div",{className:W.meta,children:["Article · ",x.date," · ",j," min read"]})]})]},`post-${x.id}`)}else if(p.type==="talk"){const x=p.item,I=qg(x.video);return s.jsxs("div",{className:`${W.resultItem} ${w===d?W.selected:""}`,onClick:()=>u(p),children:[s.jsx("img",{src:I,alt:x.title,className:W.icon}),s.jsxs("div",{className:W.content,children:[s.jsxs("div",{className:W.title,children:[x.title,x.subtitle&&` - ${x.subtitle}`]}),s.jsxs("div",{className:W.meta,children:["Talk · ",x.date," · ",x.venue,x.tags.length>0&&` · ${x.tags.slice(0,2).join(", ")}`]})]})]},`talk-${x.id}`)}else{const x=p.item,I=x.image?s.jsx("img",{src:x.image,alt:x.title,className:W.icon}):x.emoji?s.jsx("div",{className:`${W.icon} ${W.placeholder}`,children:x.emoji}):s.jsx("div",{className:`${W.icon} ${W.placeholder}`,children:"💼"});return s.jsxs("div",{className:`${W.resultItem} ${w===d?W.selected:""}`,onClick:()=>u(p),children:[I,s.jsxs("div",{className:W.content,children:[s.jsx("div",{className:W.title,children:x.title}),s.jsxs("div",{className:W.meta,children:["Project · ",x.year,x.technologies.length>0&&` · ${x.technologies.slice(0,3).join(", ")}`]})]})]},`project-${x.key}`)}})]})]})}):null}const Jg="_container_vb88l_1",Kg="_input_vb88l_16",Qg="_matches_vb88l_33",Xg="_controls_vb88l_38",Zg="_button_vb88l_43",Yt={container:Jg,input:Kg,matches:Qg,controls:Xg,button:Zg};function ef({isOpen:e,onClose:t}){const[n,o]=k.useState(""),[r,a]=k.useState(0),[i,l]=k.useState(0),[c,d]=k.useState([]),g=k.useRef(null);k.useEffect(()=>{e?(o(""),a(0),l(0),d([]),setTimeout(()=>{var v;return(v=g.current)==null?void 0:v.focus()},100)):document.querySelectorAll(".find-match").forEach(v=>{v.classList.remove("find-match","find-current")})},[e]),k.useEffect(()=>{if(document.querySelectorAll(".find-match").forEach(h=>{h.classList.remove("find-match","find-current")}),!n){l(0),a(0),d([]);return}const v=m(n);d(v),l(v.length),v.length>0&&(a(1),f(v,0))},[n]);const m=v=>{const h=document.querySelector(".article-body");if(!h)return[];const u=[],p=v.toLowerCase(),w=document.createTreeWalker(h,NodeFilter.SHOW_TEXT,{acceptNode:j=>{const z=j.parentElement;return z&&(z.tagName==="SCRIPT"||z.tagName==="STYLE")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),x=[];let I;for(;I=w.nextNode();)I.textContent&&I.textContent.toLowerCase().includes(p)&&x.push(I);return x.forEach(j=>{const z=j.parentElement;z&&z.textContent&&z.textContent.toLowerCase().includes(p)&&(z.classList.contains("find-match")||(z.classList.add("find-match"),u.push(z)))}),u},f=(v,h)=>{if(!v[h])return;v.forEach(x=>x.classList.remove("find-current")),v[h].classList.add("find-current");const w=v[h].getBoundingClientRect().top+window.pageYOffset+-100;window.scrollTo({top:w,behavior:"smooth"}),setTimeout(()=>{var x;return(x=g.current)==null?void 0:x.focus()},100)},b=()=>{if(c.length===0)return;const v=r>=c.length?1:r+1;a(v),f(c,v-1)},S=()=>{if(c.length===0)return;const v=r<=1?c.length:r-1;a(v),f(c,v-1)},y=v=>{v.key==="Enter"?(v.preventDefault(),v.shiftKey?S():b()):v.key==="Escape"&&t()};return e?s.jsxs("div",{className:Yt.container,children:[s.jsx("input",{ref:g,type:"text",className:Yt.input,placeholder:"Find in page...",value:n,onChange:v=>o(v.target.value),onKeyDown:y,autoComplete:"off"}),i>0&&s.jsxs("div",{className:Yt.matches,children:[r," / ",i]}),s.jsxs("div",{className:Yt.controls,children:[s.jsx("button",{className:Yt.button,onClick:S,disabled:i===0,title:"Previous",onMouseDown:v=>v.preventDefault(),children:"↑"}),s.jsx("button",{className:Yt.button,onClick:b,disabled:i===0,title:"Next",onMouseDown:v=>v.preventDefault(),children:"↓"}),s.jsx("button",{className:Yt.button,onClick:t,title:"Close",onMouseDown:v=>v.preventDefault(),children:"✕"})]})]}):null}function tf(){const{slug:e}=aa();return s.jsx(Hr,{to:`/writing/${e}`,replace:!0})}const nf={id:23,slug:"what-ive-been-working-on",title:"What I've Been Working On",date:"January 31, 2026",excerpt:"Last fall I joined a startup called Obvious. This is the most ambitious thing I've worked on and I'm so excited to share it.",content:`
<p>Last fall I joined a startup called Obvious. This is the most ambitious thing I've worked on and I'm so excited to share it.</p>
<p><em>Obvious creates things.</em> It reasons through complex problems, breaks them into steps, and produces real work: documents, images, websites, spreadsheets, whatever you need. It's an engine for building a business, a wedding, and day to day stuff around the house.</p>
<h2 id="what-does-that-actually-mean">What does that actually mean?</h2>
<p>Let me tell you what my family has been up to.</p>
<p>My mother-in-law teaches Hebrew school. She's been using Obvious to create learning materials—flash cards <em>in Hebrew</em> with AI-generated images, formatted as printable PDFs she sends to Staples. It builds her students <a href="https://prj_JIiGrCzH-8050.hosted.obvious.ai/jewish-communities-map.html">interactive maps</a>. It makes personalized study guides.</p>
<p>My wife opened an <a href="https://www.etsy.com/shop/SimsyWhimsy">Etsy store</a>, where she's selling greeting cards. The cards were made by Obvious.</p>
<p>Obvious is the tool that drives our kitchen renovation, our smart home, and all of the projects you can imagine an old house needs. When we planned our honeymoon, it searched for reviews in French and Italian and found restaurants.</p>
<p>You will be surprised by how many problems Obvious can solve for you.</p>
<h2 id="how-i-got-here">How I got here</h2>
<p>I got access to Obvious in early October. I was immediately blown away. I'd been using AI coding tools and had a rough sense of what a force multiplier AI could be—but I didn't have <em><span class="shimmer">the aha moment</span></em> until I tried this.</p>
<p>The team had figured out how to get an agent to break down complex problems and actually solve them. They'd figured out how to put this in a web interface anyone could use. The agent has access to a shell and it's incredibly creative when you ask it to solve a problem.</p>
<p>I visited my brother-in-law and he suggested an app that could check if a phone number is fraudulent. We built it in two hours—without reading or writing any code. I later learned Obvious is happy to take a GitHub token and push its work wherever you want.</p>
<p>I got addicted to the product. I knew I had to work on it. I modeled myself after Tony Fadell trying to get into <a href="https://www.generalmagicthemovie.com">General Magic</a>.</p>
<p>I rebuilt my blog with Obvious to prove I belonged there. I wrote an introduction, <a href="https://matthewgerstman.com/obvious">built a landing page</a> mapping my resume to the job requirements. It felt like interviewing to work on the iPhone or the Mac. Something that mattered.</p>
<h2 id="what-were-building">What we're building</h2>
<p>We're trying to do for AI what Apple did for the personal computer. We want to make AI accessible for everyone, we want it to be easy.</p>
<p>This is the most fun I've had working on something since Dance Marathon in college. If you know, you know.</p>
<h2 id="try-it">Try it</h2>
<p>We imagine a world of abundance, and I'm giving everything I've got to make that possible. If you try this product and feel the urge to spend 80 hours/week making this the best thing it can be, let me know. If you just enjoy using it, I wanna hear that too.</p>
<p><a href="https://obvious.ai">Click here to try Obvious</a></p>
`.trim(),wordCount:508,tags:["Personal","Obvious","AI"],banner_img:"/images/blog/what-ive-been-working-on/hero.png"},of={id:22,slug:"hi-im-matthew",title:"Hi I'm Matthew",date:"October 15, 2025",excerpt:"Learn more about Matthew Gerstman",content:"",wordCount:1165,tags:["About"],banner_img:"/images/blog/hero-library-cats.png",banner_position:"center",externalLink:"/about"},rf={id:17,slug:"performance-testing-anonymous-functions",title:"Performance Testing React With Anonymous Functions",date:"September 26, 2019",excerpt:`Over the past couple of years, anonymous functions have really taken off the React community.

There have been a lot of claims of "this might affect performance." Up until now I haven't seen any real `,content:`
<p>Over the past couple of years, anonymous functions have really taken off the React community. A few days ago, I was on twitter and saw the following exchange:</p>
<figure class="kg-card kg-embed-card">
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">inline functions <a href="https://t.co/ISOsnigUtg">pic.twitter.com/ISOsnigUtg</a></p>
&mdash; Kitze (@thekitze) <a href="https://twitter.com/thekitze/status/1175822194565361665?ref_src=twsrc%5Etfw">September 22, 2019</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>
</figure>
<p>Kitze was kidding (I hope), but for a while this was a very real debate. Especially when render props were first taking off. Since then, Hooks have made anonymous (inline) functions even more popular.</p>
<p>There have been a lot of claims of "this might affect performance" which is often countered with "well that's a micro-optimization." Up until now I haven't seen any real numbers, so I decided to get them on my own.</p>
<p>At first, I did this just by running a simple node script with various numbers for NUM_EXECUTIONS.</p>
<pre><code class="language-Javascript">function runAnonymous() {
  for (let i = 0; i &lt; NUM_EXECUTIONS; i++) {
    (() =&gt; {
      // noop
    })();
  }
}

function named() {
  // noop
}

function runNamed() {
  for (let i = 0; i &lt; NUM_EXECUTIONS; i++) {
    named();
  }
}

const startNamed = new Date();
runNamed();
const endNamed = new Date();
const diffNamed = endNamed - startNamed;
console.log(\`Named took \${diffNamed} ms\`);

const startAnonymous = new Date();
runAnonymous();
const endAnonymous = new Date();
const diffAnonymous = endAnonymous - startAnonymous;
console.log(\`Anonymous took \${diffAnonymous} ms\`);

const factor = diffAnonymous / diffNamed;
console.log(\`Thats a factor of \${factor.toFixed(2)}x!\`);
</code></pre>
<p>This code is hopefully straightforward. First it runs a loop where it generates an anonymous function and executes it, second it creates a named function then loops over it and runs it the same number of times.</p>
<p>For anything less than 10,000 executions I couldn't profile a difference. Both the named and anonymous executions took 0 ms.</p>
<p>At 10,000 executions we start to get some results</p>
<pre><code>Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 0 ms
Anonymous took 4 ms
Thats a factor of Infinityx!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 0 ms
Anonymous took 4 ms
Thats a factor of Infinityx!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 0 ms
Anonymous took 3 ms
Thats a factor of Infinityx!</code></pre>
<p>Creating an anonymous function 10,000 times took about 3-4 ms to execute. I decided to crank it up a notch and see how many executions it took to see a real difference.</p>
<p>At a million executions I was able to see the named function actually take some time to run.</p>
<pre><code>Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 1 ms
Anonymous took 3 ms
Thats a factor of 3.00x!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 2 ms
Anonymous took 4 ms
Thats a factor of 2.00x!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 2 ms
Anonymous took 3 ms
Thats a factor of 1.50x!</code></pre>
<p>These results were pretty inconsistent ranging from 1.5x to 3.0x. Just for fun, I decided to crank it up to a billion.</p>
<pre><code>Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 1240 ms
Anonymous took 4117 ms
Thats a factor of 3.32x!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 1053 ms
Anonymous took 4153 ms
Thats a factor of 3.94x!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 1054 ms
Anonymous took 3798 ms
Thats a factor of 3.60x!</code></pre>
<p>Now we're getting some meaningful data. Creating an anonymous function and executing it takes roughly 3.5 times as long as calling a function that already exists.</p>
<p>This initial data tells me that anonymous functions don't make a meaningful difference to the performance of your application. In the above example we're averaging around 3 <strong>nanoseconds </strong>to allocate an anonymous function. For that to matter, we need to be operating at an unimaginably large scale.</p>
<h1 id="moving-on-to-react">Moving On To React</h1>
<p>The above example is pretty contrived. In a vacuum we see that anonymous functions have a negligible impact on performance, but what about in a real React application?</p>
<p>I decided to throw together a simple React application to see if anonymous functions made any difference to rendering a simple component. That looks roughly like this</p>
<pre><code class="language-Javascript">function AnonymousNumberList({count}) {
  let list = [];
  for (let i = 0; i &lt; count; i++) {
    list.push(&lt;Number getNumber={() =&gt; i} key={i} /&gt;);
  }
  return list;
}

function NumberList({count}) {
  let list = [];
  for (let i = 0; i &lt; count; i++) {
    list.push(&lt;Number number={i} key={i} /&gt;);
  }
  return list;
}

function Number({number, getNumber}) {
  return (
    &lt;h1 style={{color: number != null ? 'red' : 'blue'}}&gt;
      {number != null ? number : getNumber()}
    &lt;/h1&gt;
  );
}</code></pre>
<p>In this example, we can render a large number of <code>h1</code> tags and see if using an anonymous function makes any difference from just passing a raw prop. I opened up the React DevTools and profiled how long it took to render each set of elements.</p>
<h3 id="without-anonymous-functions">Without Anonymous Functions</h3>
<!--kg-card-begin: html-->
<table>
    
<thead>
    
<th>Number of Elements</th>

        
<th>Time to Render</th>

    </thead>


<tr>
<td>100</td>
<td>5.1 ms</td>
</tr>


<tr>
<td>1000</td>
<td>41.7ms</td>
</tr>


<tr>
<td>10000</td>
<td>201.8ms</td>
</tr>


<tr>
<td>25000</td>
<td>518ms</td>
</tr>

</table>
<!--kg-card-end: html-->
<h3 id="with-anonymous-functions">With Anonymous Functions</h3>
<!--kg-card-begin: html-->
<table>
    
<thead>
    
<th>Number of Elements</th>

        
<th>Time to Render</th>

    </thead>

    
<tr>
<td>100</td>
<td>6.1 ms</td>
</tr>


<tr>
<td>1000</td>
<td>43 ms</td>
</tr>


<tr>
<td>10000</td>
<td>210.9 ms</td>
</tr>


<tr>
<td>25000</td>
<td>453 ms</td>
</tr>

</table>
<!--kg-card-end: html-->
<p>This data is not at all scientific, but it was pretty representative of what I've found. Having a single anonymous function as a prop makes no meaningful difference to React performance.</p>
<p>I did have one serious takeaway though.</p>
<figure class="kg-card kg-embed-card">
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">FWIW I was trying  to profile if anonymous functions in a render make any difference to performance.
<br>
<br>The short answer I found was &quot;not until you&#39;ve reached a scale where you have a lot of other lower hanging fruit to fix&quot;</p>
&mdash; Matthew Trevor Gerstman (@MatthewGerstman) <a href="https://twitter.com/MatthewGerstman/status/1175897335378927621?ref_src=twsrc%5Etfw">September 22, 2019</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>
</figure>
<p>I thought my experiment was over, but Rick Hanlon had other thoughts.</p>
<h1 id="let-s-play-with-react-memo">Let's Play With React.memo</h1>
<figure class="kg-card kg-embed-card">
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">I was thinking about doing the same today
<br>
<br>What about
<br>
<br>&lt;Root&gt;
<br>&lt;Parent&gt; &lt;-- anon function
<br>&lt;ExpensiveChild&gt; &lt;-- expensive render
<br>
<br>Child should be pure/memo, the expensive render could be sorting a large array of todo items. Compare with/without passing anon function into the child</p>
&mdash; Ricky (@rickhanlonii) <a href="https://twitter.com/rickhanlonii/status/1175907744299327489?ref_src=twsrc%5Etfw">September 22, 2019</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>
</figure>
<p>I thought this was pretty interesting and decided to take this experiment a step further. How does React behave when you give it a really expensive component to render?</p>
<pre><code class="language-Javascript">function sleep(seconds) {
  const startTime = new Date();
  const endTime = startTime.setSeconds(startTime.getSeconds() + seconds);
  console.log({startTime, endTime});
  while (new Date() &lt; endTime) {
    // wait;
    continue;
  }

  return;
}

const ExpensiveComponent = React.memo(() =&gt; {
  sleep(1);
  return 'expensive';
});
</code></pre>
<p>To do this, I made a sleep function that blocks the main thread for a full second and a component that calls it. I then memoized that component.</p>
<p>I quickly discovered that React.memo is memoization per instance as opposed to per set of props for that component. For 10 components, this code will always take roughly 10 seconds for the first render.</p>
<pre><code class="language-Javascript">function NumberList({count}) {
  let list = [];
  for (let i = 0; i &lt; count; i++) {
    list.push(&lt;Number number={i} key={i} /&gt;);
  }
  return list;
}

function Number({number, getNumber}) {
  return (
    &lt;h1 style={{color: number != null ? 'red' : 'blue'}}&gt;
      {number != null ? number : getNumber()}
      &lt;ExpensiveComponent  /&gt;
    &lt;/h1&gt;
  );
}</code></pre>
<p>We haven't learned anything new yet, or at least nothing that isn't mentioned in the React docs.</p>
<p>Next up was profiling the overhead of React.memo. I decided to generate a big object with the following code.</p>
<pre><code>const bigObject = {};
for (let i = 0; i &lt; n; i++) {
  bigObject[\`\${i}\`] = \`\${i}\`;
}

&lt;ExpensiveComponent {...bigObject} /&gt;</code></pre>
<!--kg-card-begin: html-->
<table>
    
<thead>
<th>Value of n</th>
<th>Overhead for React.memo</th>
</thead>

    
<tr>
<td>100</td>
<td>0.1 ms</td>
</tr>


<tr>
<td>1,000</td>
<td>0.5 ms</td>
</tr>


<tr>
<td>10,000</td>
<td>3 ms</td>
</tr>


<tr>
<td>100,000</td>
<td>100 ms</td>
</tr>


<tr>
<td>1,000,000</td>
<td>675 ms</td>
</tr>

</table>
<!--kg-card-end: html-->
<p>These results were promising. I can't imagine a production scenario with more than 1,000 individual props. The overhead for memo is negligible for reasonable quantities.</p>
<p>In fact, I quickly realized that this isn't just the overhead for React.memo, <strong>this is also the overhead for prop spreading on the component.</strong></p>
<p>As a sanity check I ran the 1,000,000 prop approach again on a non memoized component. It took roughly 300ms to render that component. We can approximate that it takes 375 ms for React.memo to check 1,000,000 props.</p>
<h1 id="combining-with-anonymous-functions">Combining With Anonymous Functions</h1>
<p>As a final followup, I rendered my expensive, memoized component with an anonymous function as a prop</p>
<pre><code class="language-javascript">&lt;ExpensiveComponent anon={() =&gt; {}} /&gt;</code></pre>
<p>This did what I expected, it broke memoization. It once again took a full second for each render of each <code>ExpensiveComponent</code>.</p>
<p>While the overhead of using React.memo is negligible, this is a footgun to watch out for. An inexperienced developer could easily break memoization without realizing it.</p>
<p>To be clear, this has nothing to do with the anonymous function. This is because we're passing a new reference on each render to a memoized component. This code would also cause repeated rerenders.</p>
<pre><code class="language-javascript">&lt;ExpensiveComponent obj={{ foo: 'bar'}} /&gt;</code></pre>
<h2 id="a-note-on-science">A Note On Science</h2>
<p>This data isn't terribly scientific. I ran this experiment a small number of times on a single machine. In order to really collect data, we would need to run this code in a wide variety of environments many many times. I'm not a statistician, so I'll leave it to the experts to run a truly conclusive experiment.</p>
<h2 id="conclusions">Conclusions</h2>
<p>That said, I am very comfortable with the statement that <strong>inline anonymous functions have a negligible impact on application performance. </strong>Use all the hooks and render props you'd like.</p>
<p>You can see my full source <a href="http://github.com/matthew-gerstman/react-perf">here</a>. Also feel free to tweet me <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a> with questions.</p>
`.trim(),tags:["Tech","react"],banner_img:"/images/blog/hero-mountains-night.jpg",wordCount:1579},af={id:16,slug:"surviving-the-technical-interview",title:"Surviving The Technical Interview",date:"September 25, 2019",excerpt:`I've found myself giving a bunch of advise on technical interviews lately and thought it'd make for a good blog post. 

Here's my guide to surviving interviews.`,content:`
<p>I've found myself giving a bunch of advise on technical interviews lately and thought it'd make for a good blog post. While most of us acknowledge that technical interviews have a lot of false negatives, the industry as a whole hasn't come up with a better alternative. Here's my guide to surviving interviews.</p>
<h1 id="practice">Practice</h1>
<p>This one seems obvious, but I need to say it up front. Practice, practice, practice. <em>Proper planning prevents poor performance</em>. I've personally done almost every problem in <a href="https://amzn.to/2l8CeGG">Cracking The Coding Interview</a> and I can't recommend that book enough. It helps you get into the mindset of interviewing.</p>
<p>A big failure mode with this book though is how it's organized. The problems are all neatly organized by what tool you need to solve them. For example theres a chapter with array problems and a chapter with tree problems. Real interviews won't be like this. You'll have to identify what tools to use on the problem when it's given to you.</p>
<p>The advanced chapters in the back are really helpful here because they don't provide any context, they're just problems to solve.</p>
<h1 id="turn-your-inner-monologue-inside-out">Turn Your Inner Monologue Inside Out</h1>
<p>This is so important. As an interviewer I need to get a sense of how you solve the problem. If you silently struggle, I can't give you the hint you need to succeed. Talk to yourself as you work through the practice problems. It may feel silly at first, but you need to practice saying out loud what's going through your head. Really say out loud everything going through your head.</p>
<p>Even say out loud the bad ideas and why they won't work. During the interview, I'm looking for <strong>signal</strong>, either positive or negative that we should hire you. If you mention something that won't work and why, that's really positive signal. It shows me that you can think through multiple solutions and know their tradeoffs.</p>
<p>It's also important to state your assumptions. Sometimes it might seem like you intuitively figured out a key part of the problem, but I need to verify that. Often if a candidate seems to just know something I'll ask some followup questions that seem really simple, just to confirm we're on the same page.</p>
<h1 id="if-you-re-stuck-make-a-magic-function">If You're Stuck, Make a Magic Function</h1>
<p>This one took me years to learn. When you're stuck on part of a problem, for example you don't know how to sort something, or organize a data structure, just pretend you have a function that does it for you. You will need to implement that magic function later, but this will help you get unstuck for the time being.</p>
<p>In fact, this is really positive signal for me. It shows me you can break down the problem into multiple steps, and that you can write clean code. It's often difficult to parse giant single-function solutions.</p>
<h1 id="take-a-deep-breath">Take a Deep Breath</h1>
<p>During some interview somewhere, you'll probably get stuck and flustered. Don't go into panic mode. Getting stuck on a small part of the problem is totally okay, and expected. Take a deep breath and go back to the basics to wrap your head around it.</p>
<p>For on-sites, you'll often do several interviews back to back. Remember that each interview has no bearing on the next one. You can fail one interview, pass the rest, and that interview becomes an outlier. When you finish an interview put it in the past, and move onto the next one.</p>
<h1 id="i-m-taking-notes">I'm Taking Notes</h1>
<p>This is important. I take notes throughout the whole interview to make sure I'm giving a fair evaluation. Here's what they might look like. </p>
<blockquote>5:06 PM Explained question
<br>5:08 PM Candidate asked if they can assume a type of input, I say yes.
<br>5:10 PM Candidate started writing error checking, i told them to assume it's valid input.
<br>5:13 PM Candidate has the first part of the implementation.
<br>5:14 PM Asked candidate to walk me through at a high level.
<br>5:14 PM Candidates solution works like this ____________________
<br>5:16 PM I asked what their data structure looks like.
<br>5:18 PM They showed me they know what it looks like, now I can give them a sample input.
<br>5:19 PM They're very caught up on this section. I'm asking them what would happen if they had a magic function to do it for them.
<br>5:24 PM I asked what the code looks like for this simpler case.
<br>5:29 PM Algo works for simple case, I told them I see a bug.
<br>5:31 PM I told them "I would wager they could make this function work for the advanced case"
<br>5:31 PM They figured out the advanced case.
<br>5:35 PM There's a bug on line 33.
<br>5:36 PM They found the bug on line 33 on their own.
<br>5:40 PM I suggest a big scary edge case.
<br>5:43 PM Candidate has a high level solution for edge case.
<br>5:48 PM Candidate has implemented psuedocode around this.
<br>5:53 PM We hit a good stopping point for questions.</blockquote>
<p>These are intentionally vague, but it's encapsulates the things I need to remember:</p>
<ol>
<li>How long did each part of the problem take the candidate?</li>
<li>When did they get stuck?</li>
<li>Were they able to figure it out the bugs on their own?</li>
</ol>
<p>After doing the same question dozens (or sometimes hundreds) of times, I have a pretty good sense of how the interview should go, what types of solutions a candidate may have, and when they're likely to get stuck.</p>
<h1 id="be-honest">Be Honest</h1>
<p>It's very likely at some point you'll be asked a question you've seen before. There are only so many interview questions out there. When this happens, tell the interviewer! I can usually tell if a candidate knows the question in advance and it feels like I'm being lied to. When this happens, I have to flag this suspicion and recommend we reinterview them.</p>
<h1 id="it-s-a-numbers-game">It's a Numbers Game</h1>
<p>Interviewing is it's own skill you need to hone; it can take years of practice. When I was going from my first to my second job I talked to 50 tech companies (and failed a lot of interviews). The more interviews you do, the better you'll get at it.</p>
<p>If you're just ramping up on a job search, consider scheduling the companies you're less excited about earlier. This will help you practice with less pressure. You'll feel more ready when you get to the interview you really care about.</p>
`.trim(),tags:["Tech"],banner_img:"/images/blog/hero-technical-interview.jpg",heroImage:"",wordCount:1067},sf={id:13,slug:"reduce-reduce-reduce",title:"Reduce, Reduce, Reduce",date:"March 18, 2019",excerpt:"After my last article on map, filter, and reduce there was an outpour of requests to do an article on just reduce. This time let’s dive into all the fun things you can do with reduce.",content:`
<p>After my last article on <a href="http://matthewgerstman.com/map-filter-reduce/" rel="noreferrer nofollow noopener">map, filter, and reduce</a> there was an outpour of requests to do an article on just reduce. This time let’s dive into all the fun things you can do with reduce. Before we do that though, let’s make sure we really understand how it works.</p>
<h1 id="why-s-it-called-reduce">Why’s it Called Reduce?</h1>
<p>I find it helpful if we look at the dictionary definition for the word reduce <a href="https://www.merriam-webster.com/dictionary/reduce" rel="noreferrer nofollow noopener"><strong>[1]</strong></a></p>
<blockquote><strong><em>a: </em></strong><em>To draw together or cause to converge, or consolidate</em>
<br>Example: reduce all the questions to one
<br>
<br><strong><em>b: </em></strong><em>To diminish in size, amount, extent, or number</em>
<br>Example: reduce taxes
<br>Example: reduce the likelihood of war
<br>
<br><strong>c: </strong>To<em> decrease the volume and concentrate the flavor of by boiling</em>
<br>Example: add the wine and <em>reduce </em>the sauce for two minutes</blockquote>
<p>In all three of these, we’re taking a group of things and consolidating, or shrinking them through some process.</p>
<p>In programming it’s the same. We’re taking a <strong>list</strong> of <strong>items</strong> and consolidating the list into to one new <strong>value</strong> using an <strong>accumulator</strong>.</p>
<h1 id="function-signature">Function Signature</h1>
<p>Now let’s take look at the function signature for reduce.</p>
<pre><code class="language-javascript">list.reduce(callback, initialValue)</code></pre>
<p>This part is pretty straightforward, reduce takes a <strong>callback</strong>, and an <strong>initialValue</strong> to seed the <strong>accumulator</strong>. Most of the complexity here is in the function signature for the callback. Let’s dive into that.</p>
<pre><code class="language-javascript">const callback = (accumulator, currentValue, currentIndex, list) =&gt; accumulator;</code></pre>
<p>This is a bit more intimidating, so let’s break it down.</p>
<p>The <strong>accumulator </strong>is thing we’re trying to reduce our list down to. It <em>accumulates </em>the list of items into one value. That value could be an object or even a new array, but it’s considered one value.</p>
<p>Whatever gets returned from the callback is passed in as the <strong>accumulator </strong>to the next iteration. When we're done, the final state of the <strong>accumulator </strong>is returned as the <strong>value.</strong></p>
<p><strong>currentValue </strong>is less scary, it’s the current item in the list we’re iterating over. This might be more familiar if we use <code>for loop</code> syntax.</p>
<pre><code class="language-javascript">for (let i = 0; i &lt; list.length; i++) {
  currentValue = list[i];
}</code></pre>
<p>Next is <strong>currentIndex</strong>. In the example above this would be <code>i</code>. We can make this a bit more explicit though.</p>
<pre><code class="language-javascript">for (let currentIndex = 0; currentIndex &lt; list.length; currentIndex++) {
  currentValue = list[currentIndex];
}</code></pre>
<p>Lastly, <strong>list. </strong>This is the entire list we’re iterating over. This can be useful if you want to access some other element in the original list. To be honest, I’ve never needed to access the original <strong>list</strong>, but it’s available.</p>
<h1 id="implementation">Implementation</h1>
<p>Now that we understand the function signature, let’s implement it from scratch. </p>
<p>One caveat, to avoid complexity this implementation takes the list as an argument as opposed to adding it to the prototype of array. You can see a proper polyfill at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">MDN [2].</a></p>
<pre><code class="language-javascript">function reduce(list, callback, initialValue) {
  if (list == null || !Array.isArray(list)) {
    throw new TypeError("list is not a valid array");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (initialValue === undefined &amp;&amp; list.length === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue;
  for (let currentIndex = 0; currentIndex &lt; list.length; currentIndex++) {
    currentValue = list[currentIndex];
    accumulator = callback(accumulator, currentValue, currentIndex, list);
  }
  return accumulator;
}
</code></pre>
<p>As you can see, the bulk of this function is error checking. We check to make sure we have a valid <strong>list </strong>and <strong>callback</strong>. We also ensure the user has either provided an <strong>initialValue</strong> or we can derive one from the list.</p>
<p>In fact if we assume that the user always provides valid input this is the entire function.</p>
<pre><code class="language-javascript">function reduce(list, callback, initialValue) {
  let accumulator = initialValue;
  for (let currentIndex = 0; currentIndex &lt; list.length; currentIndex++) {
    currentValue = list[currentIndex];
    accumulator = callback(accumulator, currentValue, currentIndex, list);
  }
  return accumulator;
}
</code></pre>
<p>This function takes a <strong>list</strong>, iterates over it, and calls a <strong>callback</strong> on the previous value along with each item in the list. it then returns the final <strong>value</strong>.</p>
<h1 id="all-of-the-examples">All of The Examples</h1>
<p>Hopefully you now understand <strong>how </strong>reduce works, but it may not be clear <strong>why </strong>you would want to use it. First, let’s get the sample data out of the way. This is the same <a href="/writing/map-filter-reduce" rel="noreferrer nofollow noopener">data as last time.</a></p>
<pre><code class="language-javascript">const HarryPotter = {
  name: "Harry Potter",
  house: "Gryffindor",
  points: 40
};
const HermioneGranger = {
  name: "Hermione Granger",
  house: "Gryffindor",
  points: 140
};
const DracoMalfoy = {
  name: "Draco Malfoy",
  house: "Slytherin",
  points: -20
};
const TaylorSwift = {
  name: "Taylor Swift",
  house: "Slytherin",
  points: 100
};
const LinManuelMiranda = {
  name: "Lin Manuel Miranda",
  house: "Slytherin",
  points: 5000
};
const CedricDiggory = {
  name: "Cedric Diggory",
  house: "Hufflepuff",
  points: 12
};
const SallyPerks = {
  name: "Sally Perks",
  house: "Hufflepuff",
  points: 15
};
const LunaLovegood = {
  name: "Luna Lovegood",
  house: "Ravenclaw",
  points: 100
};
const ChoChang = {
  name: "Cho Chang",
  house: "Ravenclaw",
  points: 100
};
const wizards = [
  HarryPotter,
  HermioneGranger,
  DracoMalfoy,
  LinManuelMiranda,
  TaylorSwift,
  CedricDiggory,
  SallyPerks,
  LunaLovegood,
  ChoChang
];</code></pre>
<h2 id="keyby">keyBy</h2>
<p>Now that we have the sample data out of the way, let’s look at our first example, <code>keyBy</code>.</p>
<pre><code class="language-javascript">function keyBy(list, key) {
  return list.reduce((acc, item) =&gt; {
    const index = item[key];
    acc[index] = item;
    return acc;
  }, {});
}</code></pre>
<p>This function takes a list of objects and a key, and keys those objects by a property on them. In this example our <strong>initialValue </strong>is <code>{}</code>.We iterate over each item in the list, get <code>item[key]</code> and use it as our key in the accumulator.</p>
<p>As an aside, this implementation is naive and will overwrite on conflict.</p>
<p>Given the list of <code>wizards</code> above, we could call <code>keyBy(wizards, 'name')</code> and get the following output.</p>
<pre><code class="language-javascript">{
  "Harry Potter": {name: "Harry Potter", house: "Gryffindor", points: 40},
  "Hermione Granger": {name: "Hermione Granger", house: "Gryffindor", points: 140},
  "Draco Malfoy": {name: "Draco Malfoy", house: "Slytherin", points: -20},
  "Lin Manuel Miranda": {name: "Lin Manuel Miranda", house: "Slytherin", points: 5000},
  "Taylor Swift": {name: "Taylor Swift", house: "Slytherin", points: 100},
  "Cedric Diggory": {name: "Cedric Diggory", house: "Hufflepuff", points: 12},
  "Sally Perks": {name: "Sally Perks", house: "Hufflepuff", points: 15},
  "Luna Lovegood": {name: "Luna Lovegood", house: "Ravenclaw", points: 100},
  "Cho Chang": {name: "Cho Chang", house: "Ravenclaw", points: 10 }
}</code></pre>
<h2 id="groupby">groupBy</h2>
<p>Next up is <code>groupBy</code>, this function takes a <strong>list</strong> and groups the <strong>items</strong> by the output of a given function<strong>,</strong> or <code>iteratee</code>.</p>
<pre><code class="language-javascript">function groupBy(list, iteratee) {
  return list.reduce((acc, item) =&gt; {
    const index = iteratee(item);
    if (!acc[index]) {
      acc[index] = [];
    }
    acc[index].push(item);
    return acc;
  }, {});
}
</code></pre>
<p>Again, we take a list, but this time we take a function, or <code>iteratee</code>. We call <code>iteratee</code> on each <code>item</code> in the list and use this to determine what key on the <strong>accumulator,</strong> or <code>acc</code>, we place the item in.</p>
<p>We then make sure there’s an array allocated at the key and push the item onto that array.</p>
<p>If we call <code>groupBy(wizards, wizard =&gt; wizard.house)</code>, we’ll get the following output.</p>
<pre><code class="language-javascript">{
  Gryffindor: [
    { name: "Harry Potter", house: "Gryffindor", points: 40 },
    { name: "Hermione Granger", house: "Gryffindor", points: 140 }
  ],
  Slytherin: [
    { name: "Draco Malfoy", house: "Slytherin", points: -20 },
    { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
    { name: "Taylor Swift", house: "Slytherin", points: 100 }
  ],
  Hufflepuff: [
    { name: "Cedric Diggory", house: "Hufflepuff", points: 12 },
    { name: "Sally Perks", house: "Hufflepuff", points: 15 }
  ],
  Ravenclaw: [
    { name: "Luna Lovegood", house: "Ravenclaw", points: 100 },
    { name: "Cho Chang", house: "Ravenclaw", points: 100 }
  ]
};</code></pre>
<h2 id="chunk">chunk</h2>
<p>Another popular example, <code>chunk</code>. In this case we want to take a big <strong>list</strong> and split it into a <strong>list</strong> of smaller lists.</p>
<pre><code class="language-javascript">function chunk(list, size) {
  return list.reduce(
    (acc, item) =&gt; {
      let lastIndex = acc.length - 1;
      if (acc[lastIndex].length &gt;= size) {
        acc.push([]);
        lastIndex++;
      }
      acc[lastIndex].push(item);
      return acc;
    },
    [[]]
  );
}</code></pre>
<p>Above, we take a <code>list</code> and a <code>size</code> for our sub-lists. Our <strong>initialValue </strong>is an array with a single empty array inside of it.</p>
<p>We then iterate over the list and make our smaller lists. Every time one of our sub-lists reaches <code>size</code>, we move on to the next one.</p>
<p>If we call const <code>chunkedWizards = chunk(wizards, 3)</code>, we’ll get the following value for <code>chunkedWizards</code>.</p>
<pre><code class="language-javascript">[
  [
    { name: "Harry Potter", house: "Gryffindor", points: 40 },
    { name: "Hermione Granger", house: "Gryffindor", points: 140 },
    { name: "Draco Malfoy", house: "Slytherin", points: -20 }
  ],
  [
    { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
    { name: "Taylor Swift", house: "Slytherin", points: 100 },
    { name: "Cedric Diggory", house: "Hufflepuff", points: 12 }
  ],
  [
    { name: "Sally Perks", house: "Hufflepuff", points: 15 },
    { name: "Luna Lovegood", house: "Ravenclaw", points: 100 },
    { name: "Cho Chang", house: "Ravenclaw", points: 100 }
  ]
];</code></pre>
<p>We now have 3 lists of 3 wizards. It’s worth noting that this worked out nicely because we had exactly 9 wizards. If we had 8 total wizards, our final list would be of size 2. If we had 10 total wizards, our final list would be of size 1.</p>
<h1 id="flatten">flatten</h1>
<p>We’ve chunked <code>wizards</code> into <code>chunkedWizards</code>, but what if we want to undo that? Well that’s what flatten is for.</p>
<pre><code class="language-javascript">function flatten(list) {
  return list.reduce((acc, item) =&gt; {
    if (Array.isArray(item)) {
      acc = acc.concat(item);
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}</code></pre>
<p>In this example we take a <code>list</code> and iterate over it. Whenever we see an array, we <code>concat</code> it with the <strong>accumulator, </strong>or <code>acc</code>. Whenever we see anything else we push it onto the <strong>accumulator</strong>. Our <strong>initialValue </strong>for our <strong>accumulator</strong> this time is an empty array or <code>[]</code>.</p>
<p>If we call <code>flatten(chunkedWizards)</code> we get our original list.</p>
<pre><code class="language-javascript">[
  { name: "Harry Potter", house: "Gryffindor", points: 40 },
  { name: "Hermione Granger", house: "Gryffindor", points: 140 },
  { name: "Draco Malfoy", house: "Slytherin", points: -20 },
  { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
  { name: "Taylor Swift", house: "Slytherin", points: 100 },
  { name: "Cedric Diggory", house: "Hufflepuff", points: 12 },
  { name: "Sally Perks", house: "Hufflepuff", points: 15 },
  { name: "Luna Lovegood", house: "Ravenclaw", points: 100 },
  { name: "Cho Chang", house: "Ravenclaw", points: 100 }
];</code></pre>
<h2 id="flatmap">flatMap</h2>
<p>We can take this a step further with flatMap. This <a href="/writing/map-filter-reduce"><strong>maps</strong></a> over the list and flattens any results from the given function.</p>
<pre><code class="language-javascript">function flatMap(list, func) {
  return list.reduce((acc, item) =&gt; {
    const mappedItem = func(item);
    if (Array.isArray(mappedItem)) {
      acc = acc.concat(mappedItem);
    } else {
      acc.push(mappedItem);
    }
    return acc;
  }, []);
}</code></pre>
<p>Hopefully by now you’re getting the hang of it. We iterate over the <code>list</code> and call <code>func</code> on each item. We then <code>flatten</code> the output of <code>func</code>.</p>
<p>Let’s look at a function call:</p>
<p><code>flatMap(wizards, wizard =&gt; [wizard.name, wizard.house, wizard.points])</code></p>
<p>This takes a wizard and returns all of it’s properties as items in an array. The output of this is one big array.</p>
<pre><code class="language-javascript">[
  "Harry Potter",
  "Gryffindor",
  40,
  "Hermione Granger",
  "Gryffindor",
  140,
  "Draco Malfoy",
  "Slytherin",
  -20,
  "Lin Manuel Miranda",
  "Slytherin",
  5000,
  "Taylor Swift",
  "Slytherin",
  100,
  "Cedric Diggory",
  "Hufflepuff",
  12,
  "Sally Perks",
  "Hufflepuff",
  15,
  "Luna Lovegood",
  "Ravenclaw",
  100,
  "Cho Chang",
  "Ravenclaw",
  100
];</code></pre>
<h1 id="map-and-filter">Map and Filter</h1>
<p>One last fun fact, we can implement <a href="/writing/map-filter-reduce" rel="noreferrer nofollow noopener"><strong>map</strong></a><strong> </strong>and <a href="/writing/map-filter-reduce" rel="noreferrer nofollow noopener"><strong>filter</strong></a><strong> </strong>with reduce.</p>
<pre><code class="language-javascript">function map(list, func) {
  return list.reduce((acc, item) =&gt; {
    acc.push(func(item));
    return acc;
  }, []);
}</code></pre>
<pre><code class="language-javascript">function filter(list, predicate) {
  return list.reduce((acc, item) =&gt; {
    if (predicate(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}</code></pre>
<p>If you're looking for reasons to use map or filter, check out my previous article, <a href="/writing/map-filter-reduce">map, filter, reduce</a>.</p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>Reduce is one of the most powerful functions built into JavaScript. While most of the functions above are available in <a href="http://lodash.com/" rel="noreferrer nofollow noopener">lodash</a> <a href="http://lodash.com/" rel="noreferrer nofollow noopener">[3]</a>, they’re good examples of when you may want to use reduce. Give them a try and feel free to tweet questions <a href="https://twitter.com/MatthewGerstman" rel="noreferrer nofollow noopener">@MatthewGerstman.</a></p>
<hr>
<h1 id="references">References</h1>
<ol>
<li><a href="https://www.merriam-webster.com/dictionary/reduce" rel="noreferrer nofollow noopener">https://www.merriam-webster.com/dictionary/reduce</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="noreferrer nofollow noopener">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce</a></li>
<li><a href="http://lodash.com/" rel="noreferrer nofollow noopener">http://lodash.com</a></li>
</ol>
`.trim(),tags:["Tech","functional-programming"],banner_img:"/images/blog/reduce-reduce-reduce/reduce-function-hero.jpg",heroImage:"",wordCount:1959},lf={id:11,slug:"map-filter-reduce",title:"Map, Filter, Reduce",date:"March 03, 2019",excerpt:"In this article we'll go back to basics and cover three of the most important functions in functional programming, map, filter, and reduce.",content:`
<p>In this article we'll go <a href="/writing/functional-programming-fundamentals">back to basics</a> and cover three of the most important functions in <a href="/writing/functional-programming-fundamentals">functional programming</a>, map, filter, and reduce.</p>
<p>All three of these are useful functions for iterating over a list (or array) and doing some kind of transformation or computation. This will then produce a new list or the result of the computation done across the previous list.</p>
<h1 id="types">Types</h1>
<p>Before we dive into map, filter, and reduce, let's set up the list.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const enum House {
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
  Slytherin = "Slytherin"
}

type Wizard = {
  name: string;
  house: House;
  points: number;
};</code></pre>
<!--kg-card-end: html-->
<p>As per usual, we're going to be operating on wizards. Each wizard object has a name, a house, and the number of points they've earned for their house. Let's declare a bunch of wizards and put them in a list.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const HarryPotter: Wizard = {
  name: "Harry Potter",
  house: House.Gryffindor,
  points: 40
};

const HermioneGranger: Wizard = {
  name: "Hermione Granger",
  house: House.Gryffindor,
  points: 140
};

const DracoMalfoy: Wizard = {
  name: "Draco Malfoy",
  house: House.Slytherin,
  points: -20
};

const TaylorSwift: Wizard = {
  name: "Taylor Swift",
  house: House.Slytherin,
  points: 100
};

const LinManuelMiranda: Wizard = {
  name: "Lin Manuel Miranda",
  house: House.Slytherin,
  points: 5000
};

const CedricDiggory: Wizard = {
  name: "Cedric Diggory",
  house: House.Hufflepuff,
  points: 12
};

const SallyPerks: Wizard = {
  name: "Sally Perks",
  house: House.Hufflepuff,
  points: 15
};

const LunaLovegood: Wizard = {
  name: "Luna Lovegood",
  house: House.Ravenclaw,
  points: 100
};

const ChoChang: Wizard = {
  name: "Cho Chang",
  house: House.Ravenclaw,
  points: 100
};

const wizards: Wizard[] = [
  HarryPotter,
  HermioneGranger,
  DracoMalfoy,
  LinManuelMiranda,
  TaylorSwift,
  CedricDiggory,
  SallyPerks,
  LunaLovegood,
  ChoChang
];</code></pre>
<!--kg-card-end: html-->
<h1 id="map-function map() { [native code] }1">Map</h1>
<p>Now that we've got the boilerplate out of the way, let's dive in. The first function is the simplest one, map. Map iterates (or loops) over a list, applies a function to each item in that list and then returns a new list of the transformed items. Let's look at an example.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const wizardNames = wizards.map(wizard => wizard.name);</code></pre>
<!--kg-card-end: html-->
<p>This function iterates over the list of wizards, gets their name, and puts it into a new array. The result of this looks something like this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">[
  "Harry Potter",
  "Hermione Granger",
  "Draco Malfoy",
  "Lin Manuel Miranda",
  "Taylor Swift",
  "Cedric Diggory",
  "Sally Perks",
  "Luna Lovegood",
  "Cho Chang"
];</code></pre>
<!--kg-card-end: html-->
<p>Now in this example we were using a <a href="/writing/mary-had-a-little-lambda">lambda</a> (aka an anonymous function), but we can also use a named function.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">function wizardToString({ name, house, points }: Wizard) {
  return \`\${name}, \${house}, \${points}\`;
}
const wizardStrings = wizards.map(wizardToString);
</code></pre>
<!--kg-card-end: html-->
<p>In this example we have a function called <code>wizardToString</code> and we pass that directly to map. It will then return a new list that looks like this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">[
  "Harry Potter, Gryffindor, 40",
  "Hermione Granger, Gryffindor, 140",
  "Draco Malfoy, Slytherin, -20",
  "Lin Manuel Miranda, Slytherin, 5000",
  "Taylor Swift, Slytherin, 100",
  "Cedric Diggory, Hufflepuff, 12",
  "Sally Perks, Hufflepuff, 15",
  "Luna Lovegood, Ravenclaw, 100",
  "Cho Chang, Ravenclaw, 100"
];</code></pre>
<!--kg-card-end: html-->
<h1 id="filter-function filter() { [native code] }1">Filter</h1>
<p>Next up is filter. Filter behaves like map in that it iterates over the list, but it instead of transforming each item, it transforms the whole list. Filter takes a function that returns true or false or <a href="/writing/mary-had-a-little-lambda">predicate</a>. It then returns a new list with items where the predicate returns <code>true</code>. Let's look at an example.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const slytherins = wizards.filter(wizard => wizard.house === House.Slytherin);</code></pre>
<!--kg-card-end: html-->
<p>In this example we filter over the list and only include wizards who are in the house Slytherin. The result would be this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">[
  { name: "Draco Malfoy", house: "Slytherin", points: -20 },
  { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
  { name: "Taylor Swift", house: "Slytherin", points: 100 }
];</code></pre>
<!--kg-card-end: html-->
<p>As an aside, Taylor and Lin are two of the most acclaimed Slytherins of our day.</p>
<p>Just like with map, we don't need to use a <a href="/writing/mary-had-a-little-lambda">lambda</a>, we can also use a predefined function.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">function isWinner({ points }: Wizard) {
  return points > 0;
}
function isLoser(wizard: Wizard) {
  return !isWinner(wizard);
}
const winners = slytherins.filter(isWinner);
const losers = slytherins.filter(isLoser);
</code></pre>
<!--kg-card-end: html-->
<p>In this example we make two lists, the list of Slytherins who have earned points (winners), and the list of Slytherins who have lost points (losers). We can see those results below.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const winnersResult = [
  { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
  { name: "Taylor Swift", house: "Slytherin", points: 100 }
];
const losersResult = [
  { name: "Draco Malfoy", house: "Slytherin", points: -20 }
];</code></pre>
<!--kg-card-end: html-->
<h1 id="reduce-function reduce() { [native code] }1">Reduce</h1>
<p>Now we get to the most interesting function, reduce. Reduce iterates over a list and produces a single value. Let's look at an example.</p>
<p>Suppose we want to get the total number of points across all wizards. We can use reduce to do that.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const totalPoints = wizards.reduce(
  (accumulator, { points }) => accumulator + points,
  0
);</code></pre>
<!--kg-card-end: html-->
<p>What's going on here? Well reduce is a function that takes two arguments, a function and an initial value for the accumulator. The accumulator is the name of the thing reduce returns. In this case we start our point count at 0.</p>
<p>Now the function takes the current state of the accumulator and the item in the list it's supposed to process. For the first wizard, it will pass 0 for the accumulator. This function then returns <code>accumulator + points</code>. This will eventually sum up all the points. If you're curious, the result is 5487.</p>
<p>Now the accumulator can be anything, we can even use reduce to produce an object. Let's look at an example where we add up the points for each house.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const pointsPerHouse = wizards.reduce((acc, { house, points }) => {
  if (!acc[house]) {
    acc[house] = 0;
  }
  acc[house] += points;
  return acc;
}, {});</code></pre>
<!--kg-card-end: html-->
<p>In this case, we initialize our accumulator or <code>acc</code> with <code>{}</code>. Then for each wizard we call a function that adds the number of points that wizard has earned for their house. If you're curious that result looks like this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">{
  Gryffindor: 180,
  Slytherin: 5080,
  Hufflepuff: 27,
  Ravenclaw: 200
};</code></pre>
<!--kg-card-end: html-->
<p>Let's look at one more example, let's say we want the best wizard for each house. We can tweak our previous function to use the best wizard for each house.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const bestPerHouse = wizards.reduce((acc, wizard) => {
  const { house, points } = wizard;
  if (!acc[house]) {
    acc[house] = wizard;
  }

  if (acc[house].points < points) {
    acc[house] = wizard;
  }

  return acc;
}, {});</code></pre>
<!--kg-card-end: html-->
<p>If you're curious, the result of that looks like this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">{
  Gryffindor: { name: "Hermione Granger", house: "Gryffindor", points: 140 },
  Slytherin: { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
  Hufflepuff: { name: "Sally Perks", house: "Hufflepuff", points: 15 },
  Ravenclaw: { name: "Luna Lovegood", house: "Ravenclaw", points: 100 }
};</code></pre>
<!--kg-card-end: html-->
<p>Just a little more fun now, we can use <code>Object.values</code> to transform this map.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const bestNamesPerHouse = Object.values(bestPerHouse).map(wizardToString);
[
  "Hermione Granger, Gryffindor, 140",
  "Lin Manuel Miranda, Slytherin, 5000",
  "Sally Perks, Hufflepuff, 15",
  "Luna Lovegood, Ravenclaw, 100"
];
</code></pre>
<!--kg-card-end: html-->
<p>Now we have nice strings for the best person in each house.</p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>Hopefully you're more comfortable with map, filter, and reduce now. If you'd like a deeper dive into practical FP check out my article, <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamentals</strong></a>.</p>
<p>If you're looking for more abstract stuff check out <a href="/writing/what-the-functor"><strong>What the Functor?</strong></a><strong> </strong>and <strong><a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda.</a> </strong></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
`.trim(),tags:["Tech","functional-programming"],banner_img:"/images/blog/map-filter-reduce/map-filter-reduce-hero.jpg",heroImage:"",wordCount:1227},cf={id:12,slug:"throttle-and-debounce",title:"Throttle and Debounce",date:"March 03, 2019",excerpt:"In this article, we're going to talk about two of the most important functions in frontend development, throttle and debounce.",content:`
<p>In this article, we're going to talk about two of the most important functions in frontend development, throttle and debounce.</p>
<p>Both of these functions are commonly used to deal with situations where a user is causing an event handler to fire on repeat and we want to slow down the underlying function call. Think scroll handlers, keyboard events, or even just clicking a button rapidly.</p>
<h1 id="throttle">Throttle</h1>
<p>Throttle is a <a href="http://matthewgerstman.com/functional-programming-fundamentals/">higher order function</a> that takes a function and a timeout and only allows that function at most once per the amount of time specified.</p>
<p>Before we use throttle. Let's start with an example.</p>
<pre><code class="language-tsx">export class CastSpellsBasic extends Component&lt;{}, {numSpells: number}&gt; {
  state = {numSpells: 0};

  castSpell = () =&gt; this.setState({numSpells: this.state.numSpells + 1});

  render() {
    return (
      &lt;div className="spells-wrapper"&gt;
        {this.state.numSpells} Spells Cast!
        &lt;div&gt;
          &lt;button onClick={this.castSpell}&gt;Cast Spell!&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}
</code></pre>
<p>In this example above we have a piece of state <code>numSpells</code> and a function that can increment this state <code>castSpell</code>. We have a button we can click that increments <code>numSpells</code>. You can play with it below.</p>
<!--kg-card-begin: html-->
<div data-demo="throttle-debounce-basic"></div>
<!--kg-card-end: html-->
<p>Now you can click this button as quickly as you want and it will increment the number of spells cast. Now spells take some time to recharge, so we can use throttle to slow down the user.</p>
<pre><code class="language-tsx">export class CastSpellsThrottle extends Component&lt;{}, {numSpells: number}&gt; {
  state = {numSpells: 0};

  castSpell = () =&gt; this.setState({numSpells: this.state.numSpells + 1});
  castSpellThrottled = throttle(this.castSpell, timeout);

  render() {
    return (
      &lt;div className="spells-wrapper"&gt;
        {this.state.numSpells} Spells Cast!
        &lt;div&gt;
          &lt;button onClick={this.castSpell}&gt;Cast Spell!&lt;/button&gt;
          &lt;button onClick={this.castSpellThrottled}&gt;
            Cast Spell Throttled!
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}</code></pre>
<p>We now have a button that call <code>castSpellThrottled</code> when the user clicks it. Try it out below.</p>
<!--kg-card-begin: html-->
<div data-demo="throttle-debounce-throttle"></div>
<!--kg-card-end: html-->
<p>Now that we understand what it does, lets dive into the source of throttle.</p>
<pre><code class="language-typescript">function throttle(func, timeout) {
  let ready: boolean = true;
  return (...args) =&gt; {
    if (!ready) {
      return;
    }

    ready = false;
    func(...args);
    setTimeout(() =&gt; {
      ready = true;
    }, timeout);
  };
}
</code></pre>
<p>What's going on here? Throttle is a function that takes a function and a timeout. Throttle returns a new function that forms a closure around the original one.</p>
<p>We keep track of a <code>boolean</code> called <code>ready</code> that stops the inner function from firing unless the timeout has elapsed. If we fire the function we also fire a timeout that will set <code>ready</code> to true when the timeout has elapsed. Pretty cool, huh?</p>
<h1 id="debounce">Debounce</h1>
<p>Debounce is a bit different from throttle. With throttle we slow down function calls as they happen, with debounce we don't fire at all until the user has stopped calling it.</p>
<p>This is really useful if you want to perform a computation or hit an api when the user is done typing or done scrolling. Let's play with another example.</p>
<!--kg-card-begin: html-->
<div data-demo="throttle-debounce-debounce"></div>
<!--kg-card-end: html-->
<p>You'll notice, you can click Cast Spell Debounced as many times as you'd like, but it will only fire after you've stopped clicking it. The source for this is similar to the previous component.</p>
<pre><code class="language-tsx">export class CastSpells extends Component&lt;{}, {numSpells: number}&gt; {
  state = {numSpells: 0};

  castSpell = () =&gt; this.setState({numSpells: this.state.numSpells + 1});
  castSpellThrottled = throttle(this.castSpell, timeout);
  castSpellDebounced = debounce(this.castSpell, timeout);

  render() {
    return (
      &lt;div className="spells-wrapper"&gt;
        {this.state.numSpells} Spells Cast!
        &lt;div&gt;
          &lt;button onClick={this.castSpell}&gt;Cast Spell!&lt;/button&gt;
          &lt;button onClick={this.castSpellThrottled}&gt;
            Cast Spell Throttled!
          &lt;/button&gt;
          &lt;button onClick={this.castSpellDebounced}&gt;
            Cast Spell Debounced!
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}</code></pre>
<p>Now that we know what it does, let's see how it works.</p>
<pre><code class="language-typescript">export function debounce(func: Function, timeout: number) {
  let timer: NodeJS.Timeout;
  return (...args: any) =&gt; {
    clearTimeout(timer);
    timer = setTimeout(() =&gt; {
      func(...args);
    }, timeout);
  };
}
</code></pre>
<p>While the last one relied on a simple boolean, with this one we need to maintain access to the timer. We do this because we need to clear the previous timeout every time the function gets called again. We then set a new timeout to call the inner function.</p>
<h1 id="real-world">Real World</h1>
<p>Now these implementations of throttle and debounce were both very naive. If you take a look at the <a href="https://github.com/lodash/lodash/blob/master/debounce.js">lodash source</a> you can see a much more advanced version of debounce that considers things like calling the function before or after we set the timeout.</p>
<p>It also allows fancy things like a <code>maxWait</code> and a <code>cancel</code>. They even implement <a href="https://github.com/lodash/lodash/blob/master/throttle.js">throttle with debounce.</a></p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>Hopefully you've learned a bit about debounce and throttle. For more real world code, check out some of my other articles <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamental</strong></a><strong> </strong>or <a href="/writing/map-filter-reduce"><strong>Map, Filter, Reduce</strong></a><strong>.</strong></p>
<p>If you're looking for more abstract stuff check out <a href="/writing/what-the-functor"><strong>What the Functor?</strong></a><strong> </strong>and <strong><a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda.</a> </strong></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
`.trim(),tags:["Tech"],banner_img:"/images/blog/throttle-and-debounce/throttle-debounce-hero.jpg",heroImage:"",wordCount:769},df={id:19,slug:"history-of-the-web",title:"History of the Web: Part 1",date:"June 01, 2021",excerpt:"Today I'm going to share twenty years of context on the web. We'll talk about how the web evolved into what we have today, and why it makes building web applications so hard in 2021. ",content:`
<p>Hey Technical Friends! It's been a while since I wrote anything. 2020 was well, 2020. Anyway, I started working at Bluecore! I've been tasked with leading frontend. As a result, I've been teaching a whole lot of people about the web.</p>
<p>If you didn't know, I've been toying with the web for over twenty years now. I started as a kid sometime around the year 2000. I remember learning about HTML 4 when it was brand new. As a teenager, I built websites for local businesses.</p>
<p>I started in the industry in 2012, working for <a href="https://blogs.gartner.com/martin-kihn/cookies-chaos-and-the-browser-meet-lou-montulli/">Lou Montulli</a> and I've been doing one thing or another on the web ever since.</p>
<p>As I get ramped up on a new job, I keep thinking about the sheer number of tools we take the time to configure. I've been writing proposals for frontend architecture and laying out a vision for a north star.</p>
<p>In the process of this, I've realized how important all this context on the web is. Knowing where we came from can help us figure out where we should go. It's also a mountain of technical debt, and we're collectively building on top of it.</p>
<p>Forgive me if I skip the wonderful stories of Macromedia Flash, Java in the browser, or whatever other detour you can think of. While those were important to development of the web, most of us will never run into them again.</p>
<hr>
<h1 id="back-to-basics">Back to Basics</h1>
<p>The first <strong>Hyper Text Markup Language (HTML)</strong> spec was released in <strong>1993</strong> as a way to represent web pages, then documents. Initially, HTML was completely static, requiring a full page reload to change. </p>
<pre><code class="language-html">&lt;!-- An entire web page could look like this: --&gt;
&lt;form action="/api/doctor"&gt;
  &lt;div class="row"&gt;
      &lt;label for="actor"&gt;Actor: &lt;/label&gt;
      &lt;input id="actor" placeholder="David Tennant"/&gt;
  &lt;/div&gt;
  &lt;div class="row"&gt;
      &lt;label for="companions"&gt;Companions: &lt;/label&gt;
      &lt;input id="companions" placeholder="Rose, Martha, Donna"/&gt;
  &lt;/div&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;!-- Note: Many of these tags were unavailable in HTML 1.0 --&gt;</code></pre>
<p><strong>JavaScript </strong>appeared in <strong>1995</strong> and provided a weakly typed scripting language for handling events. It was only occasionally used to change the contents of the page. </p>
<p><strong>CSS</strong> arrived in <strong>1996</strong> and provided a new way of declaring the look and feel of a website, separate from the primary content in the document.</p>
<p>For dynamically rendered pages, we would use a language like <strong>PHP (1995)</strong> that could provide a server generated HTML document in response to a request. JavaScript was mostly sprinkled in to add interactivity to the page.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/mosaic-browser.png" class="kg-image" alt loading="lazy" width="550" height="518"><figcaption><em>Mosaic, One of the first browsers</em></figcaption></figure>
<h2 id="the-dom">The DOM</h2>
<p>Things really got interesting when the<strong> Document Object Model (DOM)</strong> was introduced in <strong>1998. </strong>The DOM<strong> </strong>is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure. Each node is an object representing a part of the document. (<em><a href="https://en.wikipedia.org/wiki/Document_Object_Model">Thanks Wikipedia</a>)</em></p>
<p>This provided a <em>mostly</em> consistent interface across browsers for JavaScript based applications to make changes to the content being displayed in the browser. Before the DOM, we had similar tree-based structures, but they weren't yet standardized across browsers. As a result, the APIs were wildly inconsistent. The function <code>getElementById</code> wasn't standardized until 2000. Keyboard event handling wasn't standard until 2004.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/dom-tree.png" class="kg-image" alt loading="lazy" width="500" height="600"></figure>
<h2 id="s-websites-web-applications-g">s/Websites/Web Applications/g</h2>
<p>In the early 2000s websites began to go from simple pages to complex applications. Some of the most notable first web applications were Myspace (2003), Gmail (2004), Digg (2004), Google Maps (2005), </p>
<p>These were some of the first applications to use AJAX (<a href="https://web.archive.org/web/20050222032831/http://www.adaptivepath.com/publications/essays/archives/000385.php">Asynchronous JavaScript and XML</a>). This was a watershed moment for the web, as we were finally able to update an app without reloading the whole page.</p>
<p>Each browser implemented the JavaScript spec, <strong>ECMAScript (1997), </strong>slightly differently.<em> Aside, If you must know, it was previously the European Computer Manufacturers Association, but now its just Ecma.</em></p>
<p>This meant that application developers were constantly writing hacks like this:</p>
<pre><code>if (isIE()) {
  // ie.stuff()
} else {
  alert("Sorry, please use Internet Explorer");
}</code></pre>
<p>You can bet that <code>// ie.stuff()</code> was a thousand lines of code inside of an if else block.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/netscape-navigator.png" class="kg-image" alt loading="lazy" width="450" height="300"></figure>
<h2 id="browser-history">Browser History</h2>
<p>To understand how fragmented the web was, we need to discuss some browser history.</p>
<p>Netscape was the original market leader in 1994.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/netscape-ask-jeeves.png" class="kg-image" alt loading="lazy" width="1023" height="576" srcset="/images/blog/size/w600/2021/05/image-4.png 600w, /images/blog/size/w1000/2021/05/image-4.png 1000w, /images/blog/history-of-the-web/netscape-ask-jeeves.png 1023w" sizes="(min-width: 720px) 720px"><figcaption>Netscape showing the Ask Jeeves homepage.</figcaption></figure>
<p></p>
<p>Internet Explorer gained relevance in 1996 with their plugin architecture ActiveX.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/ie-browser.png" class="kg-image" alt loading="lazy" width="920" height="576" srcset="/images/blog/size/w600/2021/05/image-6.png 600w, /images/blog/history-of-the-web/ie-browser.png 920w" sizes="(min-width: 720px) 720px"></figure>
<p>Internet explorer was the clear leader for a very long time. Its market share didn't go under 50% until 2010!</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://cdn.statcdn.com/Infographic/images/normal/1438.jpeg" class="kg-image" alt loading="lazy"><figcaption><em>Taken from <a href="https://www.statista.com/chart/1438/browser-market-share-since-2008/">Statista</a></em></figcaption></figure>
<p>Even the Mac ran Internet Explorer until 2003 when Apple released Safari.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/safari-mac-os.png" class="kg-image" alt loading="lazy" width="770" height="433" srcset="/images/blog/size/w600/2021/05/image-10.png 600w, /images/blog/history-of-the-web/safari-mac-os.png 770w" sizes="(min-width: 720px) 720px"><figcaption>Safari 1.0 on Mac OS</figcaption></figure>
<p>Internet Explorer's demise began when Netscape was reborn as Mozilla Firefox in 2004. Firefox was considered much more secure than Internet Explorer and included features like tabs and an integrated pop-up blocker.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/firefox-windows-xp.png" class="kg-image" alt loading="lazy" width="410" height="293"><figcaption>Mozilla Firefox 1.0 on Windows XP</figcaption></figure>
<p>We didn't see Chrome until 2008 – amusingly, it was considered a big deal that Google was creating a browser. </p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/chrome-announcement.png" class="kg-image" alt loading="lazy" width="770" height="526" srcset="/images/blog/size/w600/2021/05/image-8.png 600w, /images/blog/history-of-the-web/chrome-announcement.png 770w" sizes="(min-width: 720px) 720px"></figure>
<p>For a while we had four browsers with meaningful marketshare. This meant the web had to standardize on the open source ECMAScript as opposed to something proprietary. </p>
<h2 id="web-2-0">Web 2.0</h2>
<p>While all this browser nonsense was happening, application complexity was going up. Web 2.0 brought about new expectations with regards to interactivity. Instead of statically generated sites, users uploaded their own content. This required lots of client-side business logic that was previously unnecessary.</p>
<p>Two of my favorite Web 2.0 era sites were Digg and Meebo.</p>
<p>Digg was one of the first social news sites, featuring user submitted stories and upvotes. It even spun off one of the very first podcasts, Diggnation.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/digg-website.png" class="kg-image" alt loading="lazy" width="400" height="300"></figure>
<p>Meebo was a popular messaging app that allowed users to sign into multiple messaging services at once, from anywhere.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/meebo-messenger.png" class="kg-image" alt loading="lazy" width="560" height="460"></figure>
<hr>
<h2 id="jquery">jQuery</h2>
<p>We now have increasing feature requirements built on a language spec that no one could agree to. This meant application developers were left to deal with it.</p>
<p>jQuery abstracted that problem away. Instead of writing different code for two or three browsers, you could write once using a simple library. jQuery 1.0 was a decent amount of code, but we weren't concerned about bundle size yet, and we needed our stuff to work.</p>
<p>Code looked like this:</p>
<pre><code>var doctor = $('.doctor').attr('data-actor').value()
if (doctor === "David Tennant") {
  callRoseTyler();
} else if (doctor === "Matt Smith") {
  callAmyPond();
}</code></pre>
<p>Furthermore it provided a simple interface for making API requests against a server, now we could do things like make API requests and issue callbacks in response to those requests.</p>
<p>This was revolutionary, and kicked off the next wave of complex web applications. Here's what the source of one of those applications might look like.</p>
<figure class="kg-card kg-code-card">
<pre><code>var companions = [];
var enemies = [];
var number = 10;

$.get("/api/companion/1", function (companion) {
  $('.name', companion.name); // Rose Tyler
  $('.seasons', companion.seasons); // Seasons 1 and 2
  companions.push(companion);
});

$(document).on("click", ".display_tardis", function (e) {
  e.preventDefault();
  $(".container").html("&lt;img src=/tardis /&gt;");
});

// Another thousand lines of code that looks like this.</code></pre>
<figcaption>f</figcaption></figure>
<p>We're now hitting APIs, storing state, and changing page markup – sometimes at the response of a button. As these apps grew in size we had to figure out how to provide some structure. From there, we started to see MVC frameworks.</p>
<h2 id="mvc">MVC</h2>
<p>The Model View Controller pattern was widely popular on the backend and it seemed logical to bring it to the frontend. Most engineers were used to working with a backend MVC framework, and they could reason with the way frontend worked.</p>
<p>The two most popular frontend frameworks were Backbone and Angular.</p>
<p>In an MVC world we have a model for storing data, a view for presenting it, and a controller for the business logic in between. MVC is object oriented, with different objects having different functions. For example, models could sync their state against a REST api.</p>
<p><em>Aside: we were collectively really into the full REST pattern for a while, but we're mostly back to GETs and POSTs.</em></p>
<p>These frameworks were very much a precursor to the modern React ecosystem. They featured built in templating languages and separated the logic of updating the DOM and manipulating application state.</p>
<p>That said, state management was still difficult. Different models were constantly falling out of sync with each other and imperative DOM mutations meant race-conditions galore.</p>
<h2 id="bundle-size">Bundle Size</h2>
<p>This is when bundle size became a problem. While the dependencies weren't huge, we were writing so much code on top of it. We also weren't consistently serving minified or even gzipped files. It was also expensive to make a round trip to the server to serve some JS only to fetch some more.</p>
<p>To solve this, we needed to concatenate the files to reduce requests, minify them to reduce file size, and gzip them to reduce size over the wire. &nbsp;This would often lower the payload size by 5x.</p>
<p>However the client still had to parse it! A few years ago, I profiled this and it took roughly 1 millisecond per uncompressed kilobyte of javascript to parse it and run it for the first time. Even with modern frameworks, each file has to execute at least once before the page is interactive to put all the functions in place.</p>
<p>Regardless. We focused on reducing the amount of code sent over the wire. That could mean shrinking it, or optimizing when we loaded it. It's important to remember that before this, we would serve each unminified source file separately.</p>
<p><strong>This was how we became obsessed with tooling.</strong> We needed to do a bunch of things to our code before we shipped it down. We needed to concatenate source files into bundles grouped by functionality, minify them, and put a hash in the filename for cache busting. It got complicated, and this lead to an entire ecosystem of tools: npm, grunt, gulp, and eventually webpack.</p>
<h2 id="language">Language</h2>
<p>After we introduced a build step, we were able to begin tweaking the language itself. In 2009 CoffeeScript was released. It was a brand new langauge that compiled to JavaScript and had new features like arrow functions, optional chaining, and modern string interpolation.</p>
<p>Much like jQuery ascended into modern DOM apis, CoffeeScript ascended into JavaScript. Many of its more novel features made their way into ECMAScript and we moved off of it.</p>
<p>In addition, we had libraries like underscore and lodash influencing JavaScript. ES6 gave us map, filter, and reduce right in the language. This rendered the bulk of these libraries obsolete.</p>
<p>In 2014, 6to5 (later babel) was introduced. This allowed us to write source code using the new ES6 (ECMAScript 6) spec without dropping support for older browsers. It worked by transpiling newer ES6 into ES5. </p>
<p>This was one of the biggest developments the web has ever seen. The ability to improve the language without worrying about old browsers. Development on ES6 was accelerated and <a href="/writing/es-everything">TC39</a> were able to move to yearly releases.</p>
<p>CSS and HTML evolved as well. HTML 5 was released in 2014 and brought about a whole set of new tags we could implement against. CSS saw new dialects like SASS (2006) and LESS (2009) that were supported by the same build tooling we used for JavaScript.</p>
<h1 id="almost-there">Almost There</h1>
<p>We've reached the point where the JavaScript ecosystem looked a lot like the modern web. Let's take a look at a very common stack in 2015.</p>
<ul>
<li><strong>Language: </strong>ES6 was new and CoffeeScript was still heavily in use. New codebases were using babel, but many were still in CoffeeScript or even ES5.</li>
<li><strong>Libraries: </strong>jQuery was evolving into everyone's favorite piece of tech debt. Lodash was still very popular.</li>
<li><strong>Tooling: </strong>Build tools like Grunt and Gulp were largely task runners. One was config heavy the other was code heavy.</li>
<li><strong>Performance: </strong>Serving had gotten faster, but we were still doing DOM mutations by hand which was slow and error prone.</li>
<li><strong>Styling: </strong>LESS and SASS were actually pretty good for their time.</li>
</ul>
<h1 id="modules">Modules</h1>
<p>We haven't discussed modules yet. For a very long time we would include JavaScript on a page via a series of <code>&lt;script /&gt;</code> tags and make sure to load it in the right order.</p>
<p>For a while there were two competing standards/tools for modularizing JavaScript: commonJS, and AMD (asynchronous module definition). ESModules weren't <a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">standard until 2018.</a></p>
<p>There were also a number of tools that shipped between 2009-2013, most notably requireJS. These tools provided a mechanism for isolating JavaScript and declaring dependencies within projects.</p>
<p>The problem was it was a nightmare to write. Here's what a standard file looked like with requireJS.</p>
<pre><code>requirejs(["jQuery", "underscore", "backbone"], function($, _, Backbone) {
  // This function is called when all of its dependencies have loaded.
  // Above, we have a 1:1 mapping of path to module export.
});</code></pre>
<p>These require statements got sufficiently large and they were written by hand for a long time. </p>
<p>Webpack was first released in 2014 and it was the first mainstream tool to combine building and dependency management all-in-one. It included the new <code>import</code> statement which compiled down to whatever <code>require</code> statement was necessary.</p>
<p>We haven't even discussed Node, but around this time isomorphic JavaScript was becoming popular (running the same code on the client and the server).</p>
<h1 id="react">React</h1>
<p>Seemingly out of nowhere, Facebook released React at the end of 2013. There were a bunch of problems with the current state of web development and React aimed to solve them:</p>
<ol>
<li>We were intermingling business logic with DOM mutations.</li>
<li>We were storing data on actual DOM nodes.</li>
<li>Reading/writing to the DOM was expensive.</li>
<li>State management was a nightmare, everything was constantly falling out of sync with everything.</li>
</ol>
<p>In 2014 Facebook gave a now legendary talk titled: <em>Hacker Way: Rethinking Web App Development at Facebook. </em></p>
<figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/nYkdrAPrdcw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>
<p>This talk detailed how they introduced React and adopted the Flux pattern to simplify web development. React made one simple promise, UI is a function of state.</p>
<p>The flux pattern works as follows. We have a datastore sitting at the top of our application, React would read from that datastore and render UI, whenever it needed a state change it would issue an action that updated the data store. This would trigger a rerender of the entire application.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/flux-data-flow.png" class="kg-image" alt loading="lazy" width="1280" height="866" srcset="/images/blog/size/w600/2021/05/image-15.png 600w, /images/blog/size/w1000/2021/05/image-15.png 1000w, /images/blog/history-of-the-web/flux-data-flow.png 1280w" sizes="(min-width: 720px) 720px"><figcaption><em>Taken from the<a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts"> Redux Docs</a></em></figcaption></figure>
<p>But there was magic! React introduced the virtual DOM which effectively eliminated the imperative DOM mutation problem.</p>
<p>React provides an interface for writing declarative components. This means you tell React <em>take this state and turn it into this UI. </em>What it doesn't do is tell you how to get from (State A, UI A) to (State B, UI B); React did all of that under the hood.</p>
<p>React would do a full render of State A, later it would do a full render of State B and then it would do a diff on two virtual DOMs (as opposed to the slow real DOM) and determine the minimum set of changes to make to the DOM.</p>
<p>React also introduced a syntax called JSX, a way to write html-like markup directly inside a JavaScript module. This allowed developers to create components with business logic adjacent to markup, without actually putting HTML strings in code.</p>
<p>This made applications both faster and more predictable, a win for everyone. Eventually, Redux became the most popular flux implementation. This led to the popularity of &nbsp;<a href="/writing/functional-programming-fundamentals">functional programming</a> on the web.</p>
<p>Here's what some React code might look like.</p>
<pre><code class="language-javascript">import React from "react";

function TheDoctor({ number, actor, companions }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;The {number} Doctor&lt;/h1&gt;
      &lt;h2&gt;Played by {actor}&lt;/h2&gt;
      &lt;div className="companions"&gt;
        {companions.map((companion) =&gt; (
          &lt;Companion {...companion} /&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
&lt;TheDoctor
  number="Twelfth"
  actor="Peter Capaldi"
  companions={["Clara Oswald", "Nardole", "Bill Potts"]}
/&gt;;
</code></pre>
<h1 id="typescript">TypeScript</h1>
<p>Over the years JavaScript kept getting better. We moved from big releases like ES6 to iterative yearly releases like ES2021. It only made sense that someone would add types.</p>
<p>TypeScript is a statically typed language that compiles down to traditional JavaScript. It enforces type checking at compile time however the runtime code is still untyped. This works well enough even if it's not perfect.</p>
<p>While TypeScript was first released in 2008, it didn't get mainstream adoption until a decade later, in 2019. As far as I'm aware, Dropbox was one of the first companies to adopt <a href="https://dropbox.tech/frontend/the-great-coffeescript-to-typescript-migration-of-2017">TypeScript at scale in 2015</a>, or maybe I'm just really proud of the migration we did.</p>
<p>TypeScript started to get good during the 2.x phase. These versions brought strict null checks, async functions, enums, <code>Pick</code>, and a whole range of utilities we take for granted today. Since then, it's become more and more powerful, and has quickly rose to be the most popular dialect of Javascript.</p>
<p>With the advent of types, we could now enforce contracts between different parts of the codebase.</p>
<pre><code>type DoctorProps = {
  number: string;
  actor: string;
  companions: string[];
}

function TheDoctor({ number, actor, companions }: DoctorProps) {
  // Function Body
}

&lt;TheDoctor
  // Type 'number' is not assignable to type 'string'. ts(2322)
  number={13}
  actor="Jodie Whittaker"
  companions={["Graham", "Ryan", "Yasmin"]}
 /&gt;</code></pre>
<p>If you're curious, I once gave a talk on why TypeScript is amazing.</p>
<figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/KdvEGPiULAQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>
<hr>
<h1 id="the-mountain-of-technical-debt">The Mountain of Technical Debt</h1>
<p>All of that history, and we've reached web development in 2021. We also skipped a lot: GraphQL, advancements in CSS (modules, styled components, etc), and the entire node ecosystem.</p>
<p>When looked through the lens that <a href="https://blog.professorbeekums.com/all-code-is-debt/">all code is technical debt</a>, there's a mountain. We're still building web applications using fundamentally the same tools we were 20 years ago: JavaScript, HTML, and CSS.</p>
<p>They've evolved quite a bit, but they continue to maintain support for every website ever built. Furthermore, any sufficiently large codebase will include artifacts from its past. How many of us claim to be running TypeScript + React, but secretly have some backbone, some jQuery, or some checked-in-decaffeinated CoffeeScript? And that's just the stuff I can think of.</p>
<p>Even with the latest features in ES2021, the vast majority of websites are still targeting ES5, a language released in 2009. We can add types and declarative runtimes, but it will eventually execute in a typeless and imperative environment.</p>
<p>Our obsession with tools has reached new heights. Let's take a look at a pretty standard setup for a modern application:</p>
<ul>
<li><strong>TypeScript </strong>- Adds support for types and newer ES features. Usually compiles to ES5.</li>
<li><strong>React 17 + React DOM &nbsp;- </strong>About 35kb gzipped runtime that allows for declarative programming.</li>
<li><strong>Apollo - </strong>Popular graphql library for API requests. About 33kb gzipped.</li>
<li><strong>NPM - </strong>Package manager, supports pulling in third party dependencies (including the ones listed here).</li>
<li><strong>Webpack - </strong>Build tool, runs the underlying TypeScript compiler and handles minification, bundle splitting, etc.</li>
<li><strong>ESLint - </strong>Lints code for style and potentially runtime errors.</li>
<li><strong>Prettier </strong>- Code formatter, standardizes whitespace, quotes, and semicolons.</li>
<li><strong>CSS Modules - </strong>Allows importing CSS directly in JavaScript files.</li>
<li><strong>Jest - </strong>Unit test runner.</li>
<li><strong>Cypress - </strong>End to end test runner.</li>
</ul>
<p>That's a lot of tools! Today's web developers need to know about all of them, how they interact with each other, and how they interact with all that <em>legacy</em> code that isn't going anywhere.</p>
<p>The list keeps going, and the worst part, all of these tools are written in JavaScript, which leads to extended build times, test runtimes, and one dragged out feedback loop.</p>
<p>In fact, most of the recent developments in performance have been achieved by writing JavaScript tooling in other languages! The esbuild team saw 150x performance gains over webpack 5 by writing their bundler in go.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/esbuild-benchmark.png" class="kg-image" alt loading="lazy" width="800" height="150" srcset="/images/blog/size/w600/2021/05/image-16.png 600w, /images/blog/history-of-the-web/esbuild-benchmark.png 800w" sizes="(min-width: 720px) 720px"><figcaption>Taken from the <a href="l">esbuild docs</a></figcaption></figure>
<h2 id="page-loads">Page Loads</h2>
<p>This is just in our terminal! Even if we fix the tools, we still have to ship code down to the browser. Here's what an average pageload might look like.</p>
<ul>
<li>Http requests comes in to server</li>
<li>Server provides initial HTML markup</li>
<li>HTML is scanned, <code>&lt;script /&gt;</code> tags are loaded.</li>
<li>JavaScript comes down over the wire, is parsed and executed for the first time.</li>
<li>JavaScript code makes a network request for content over a JSON API.</li>
<li>API request comes back, JavaScript renders page, the page is finally interactive.</li>
<li>Lazy loaded code begins loading.</li>
<li>Modules pop into the page as we fetch and render code/content asyncronously.</li>
</ul>
<p>There are tons and tons of performance optimizations we can do here, but at the end of the day we either have to pay this cost in the form of time or complexity. Any performance optimization we do makes serving more complex and creates more places for our stuff to break.</p>
<hr>
<h1 id="the-future">The Future</h1>
<p>The two projects I find most interesting are <a href="https://svelte.dev/">Svelte</a> and <a href="https://deno.land/">Deno</a>. There are a number of competitors to React, most notably Vue and Angular 2. While they have their own approaches to application development, they still ship a runtime down to the browser.</p>
<p>Svelte is different, it has no runtime. It does all of its work at compile time so that you can send down as little code as possible. While Svelte hasn't been meaningfully adopted at scale, I believe whatever takes the throne from React won't have a runtime.</p>
<p>Deno is a secure runtime for TypeScript. Its built in rust and totally overhauls how we run v8 in the server. While it still runs V8, they've largely abstracted that away from the user, allowing it to be swapped out in the future.</p>
<p>I believe we've found the correct interfaces for web development. TypeScript and React provide an incredible developer experience with the constraints they're built on. What if we took TypeScript and React and honest-to-god compiled it. What if we could ship the React runtime as part of the browser? What if we took advantage of type data at runtime?</p>
<p>If we started to do this, we would take the existing paradigms frontend engineers are familiar with, but turbocharge their implementation. Until then, we're going to keep executing our code in the same environment we were in 1998.</p>
`.trim(),tags:["Tech","frontend","javascript","typescript"],banner_img:"/images/blog/hero-northern-lights.jpg",heroImage:"",wordCount:3583},uf={id:7,slug:"how-redux-works-2",title:"How Redux Works - Part 2",date:"January 30, 2019",excerpt:"In this post we'll cover the various other files in the library. While some of these contain simple utilities, others are much more complex. We'll also cover the infamous redux-thunk.",content:`
<p><em><em>This is part </em>two <em>of a two part series. For part </em>one<em> </em><a href="/writing/how-redux-works">see here.</a></em></p>
<p>In our <a href="/writing/how-redux-works">last post</a> we covered the bulk of how Redux works with <code><a href="https://www.matthewgerstman.com/how-redux-works/">createStore</a></code>. In this post we'll cover the various other files in the library. While some of these contain simple utilities, others are much more complex. We'll also cover the infamous redux-thunk. Before we get to redux-thunk though we need to cover <strong>applyMiddleware.</strong></p>
<p><em><em>A note on embedded source: The most up to date redux source is <a href="https://github.com/reduxjs/redux/tree/master/src">available here</a>. I'll be embedding source code as of when this post was written</em>.</em></p>
<h1 id="applymiddleware">applyMiddleware</h1>
<p>Now you might remember from <a href="/writing/how-redux-works"><a href="/writing/how-redux-works">part </a>one</a> that we have the notion of a store enhancer. These wrap the store and can modify it's exported functions. In this case, <code>applyMiddleware</code> is a store enhancer that wraps <code>dispatch</code>.</p>
<p>So when we create our store, we pass <code>applyMiddleware</code> with a middleware as the second argument.</p>
<pre><code class="language-javascript">import {createStore, applyMiddleware} from &#x27;redux&#x27;;
import thunk from &#x27;redux-thunk&#x27;;

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
</code></pre>
<p>This second argument triggers the following block from <code>createStore</code>:</p>
<pre><code class="language-javascript">if (typeof enhancer !== &#x27;undefined&#x27;) {
  if (typeof enhancer !== &#x27;function&#x27;) {
    throw new Error(&#x27;Expected the enhancer to be a function.&#x27;)
  }

  return enhancer(createStore)(reducer, preloadedState)
}</code></pre>
<p>Once again we're gonna be looking at functions all the way down. Enhancer is a function that takes <code>createStore</code> and returns a new version of <code>createStore</code>. </p>
<p>Upstream we've passed <code>applyMiddleware(thunk)</code> as the <code>enhancer</code>.</p>
<p>Let's take a look at just the function signature of <code>applyMiddleware</code>.</p>
<pre><code class="language-javascript">export default function applyMiddleware(...middlewares) {
  return createStore =&gt; (...args) =&gt; {</code></pre>
<p>The first layer of <code>applyMiddleware</code> takes a list of functions, or middleware, that we're going to apply. Here's how we might call <code>applyMiddleware</code> in our application.</p>
<p>In this case we're only passing <code>thunk</code> but in another application we may want to pass more. <code>applyMiddleware</code> then returns a new function that takes <code>createStore</code> as it's argument. </p>
<p>This then returns a third function which takes the arguments that we would pass to <code>createStore</code>. In the code sample above, that would be <code>reducer</code> and <code>preloadedState</code>.</p>
<p>As an aside, the process of returning functions that each require a single argument is called currying. You can read more about that in <a href="/writing/functional-programming-fundamentals">Functional Programming Fundamentals</a>.</p>
<p>Okay this third function is now the bulk of <code>applyMiddleware</code>. It has a bound copy of <code>middlewares</code> and <code>createStore</code> and takes whatever arguments we're going to pass to <code>createStore</code>.</p>
<p>Let's examine the body of this function, or at least the first half of it.</p>
<pre><code class="language-javascript">export default function applyMiddleware(...middlewares) {
  return createStore =&gt; (...args) =&gt; {
    const store = createStore(...args)
      let dispatch = () =&gt; {
        throw new Error(
          \`Dispatching while constructing your middleware is not allowed. \` +
            \`Other middleware would not be applied to this dispatch.\`
        )
      }</code></pre>
<p>The first thing it does is, surprise, calls <code>createStore</code> with these arguments. Then it temporarily overwrites <code>dispatch</code> to make sure our consumers don't accidentally call it while we're setting up the store. This pattern should look familiar from <a href="/writing/how-redux-works"><a href="/writing/how-redux-works">part </a>one</a>, we're validating before doing business logic.</p>
<p>Okay now let's look at the entire function.</p>
<pre><code class="language-javascript">import compose from &#x27;./compose&#x27;

export default function applyMiddleware(...middlewares) {
  return createStore =&gt; (...args) =&gt; {
    const store = createStore(...args)
    let dispatch = () =&gt; {
      throw new Error(
        \`Dispatching while constructing your middleware is not allowed. \` +
          \`Other middleware would not be applied to this dispatch.\`
      )
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) =&gt; dispatch(...args)
    }
    const chain = middlewares.map(middleware =&gt; middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}</code></pre>
<p>This function then loops over the list of middleware, which are functions, and calls them with the <code>middlewareAPI</code>. This gives those functions a bound reference to dispatch and <code>getState</code>. It then <code>composes</code> the list of middleware together (more on that later) and gives this new function access to the original <code>dispatch</code> that can only take a plain object.</p>
<p>Finally, it returns a new object with all the old methods on the store plus this new, wrapped dispatch.</p>
<h2 id="redux-thunk">Redux Thunk</h2>
<p>While we're composing middleware, this is a great time to take a look at my personal favorite, Redux Thunk.</p>
<pre><code class="language-javascript">function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) =&gt; next =&gt; action =&gt; {
    if (typeof action === &#x27;function&#x27;) {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;</code></pre>
<p>Wow, thats a dense 14 lines of code, and once again it's functions all the way down. Now might be a good time to refresh on <a href="/writing/functional-programming-fundamentals">currying</a>. Let's step through this line by line.</p>
<p>The first bit is <code>createThunkMiddleware</code>, this function allows us to bind an extra argument to all thunks. This can be used as a way to inject dependencies into all of your action creators at runtime. For example, you might want to only allow API calls from within an action creator. This would let you enforce that.</p>
<p>You'll notice that by default this function exports a thunk middleware with no extra argument. Most people just use thunk without an extra argument.</p>
<p>Lines 2-8 are the bulk of the logic here. We return a function that takes <code>{dispatch, getState</code>. This is the same <code>middlewareAPI</code> you saw above. So now we have a bound function with <code>dispatch</code>, <code>getState</code>, and maybe an <code>extraArgument</code>.</p>
<p>Two more functions to go. This returns a function that takes the <code>next</code> middleware to call. This is effectively calling a chain of middlewares until we get to the plain <code>dispatch</code>. Finally, this returns a function that takes an <code>action</code>.</p>
<p>Lines 3-7 are now the actual <code>thunk</code> logic. If the action is a function, we call it and pass it <code>dispatch</code>, <code>getState</code>, and <code>extraArgument</code>. If it's a plain action, we just pass &nbsp;that on to the next middleware or the original <code>dispatch</code>. </p>
<p>As an aside, this process is called trampolining in computer science.</p>
<h1 id="compose">Compose</h1>
<p>Okay we've now seen <code>applyMiddleware</code> and <code>redux-thunk</code>. Let's zero back in on a section of <code>applyMiddleware</code> that should make a little more sense now.</p>
<pre><code class="language-javascript">const middlewareAPI = {
  getState: store.getState,
  dispatch: (...args) =&gt; dispatch(...args)
}
const chain = middlewares.map(middleware =&gt; middleware(middlewareAPI))
dispatch = compose(...chain)(store.dispatch)</code></pre>
<p>This section calls each middleware with the <code>middlewareAPI</code> and then composes that chain together, with a final call to the original <code>store.dispatch</code>. Let's take a look at compose.</p>
<pre><code class="language-javascript">export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg =&gt; arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) =&gt; (...args) =&gt; a(b(...args)))
}</code></pre>
<p>What's this doing? Well compose takes a list of <strong>single argument </strong>functions and passes them to each other from right to left. So <code>compose(f, g, h)</code>would be the same as <code>(...args) =&gt; f(g(h(...args)))</code>.</p>
<p>You'll remember each middleware only takes a single argument at each phase, in this case that's <code>next</code>. </p>
<p>The first 8 lines are just optimizations. If we don't have any functions return an identity function and if we only have one function return that.</p>
<p>This last bit is the intimidating part:</p>
<p><code>return funcs.reduce((a, b) =&gt; (...args) =&gt; a(b(...args)))</code></p>
<p>What's going on here? Well, it's a reduce, another FP paradigm. It loops over <code>funcs</code> and then calls the function given to it with two arguments <code>accumulator</code> and <code>value</code>. In this case <code>a</code> is <code>accumulator</code> and <code>b</code> is <code>value</code>. <code>accumulator</code> is the return value of the previous function call.</p>
<p>Let's say we call <code>compose(f, g, h)</code>. First it loops over the array <code>[f, g, h]</code>. Then this logic happens <code>accumulator = (..args) = &gt; f(..args)</code>. Then we get to <code>g</code> and call <code>accumulator = accumulator(g)</code> or <code>accumulator = (...args) =&gt; f(g(..args))</code>. Finally it gets to <code>h</code> and calls <code>accumulator(h)</code> which is equivalent to <code>accumulator = (...args) =&gt; f(g(h(..args)))</code>.</p>
<p>If this is difficult to reason follow, don't stress. It took me a few hours to wrap my head around it.</p>
<h1 id="bindactioncreators">bindActionCreators</h1>
<p>While we're on the subject of actions. Let's talk about how our actions actually get access to <code>dispatch</code>. If you're using <code>react-redux</code> you probably just pass your action creators to <code>mapDispatchToProps</code> and let it take care of things for you. Well under the hood it's calling a function called <code>bindActionCreators</code>. Let's take a look:</p>
<pre><code class="language-javascript">export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === &#x27;function&#x27;) {
    return bindActionCreator(actionCreators, dispatch)
  }

  if (typeof actionCreators !== &#x27;object&#x27; || actionCreators === null) {
    throw new Error(
      \`bindActionCreators expected an object or a function, instead received \${
        actionCreators === null ? &#x27;null&#x27; : typeof actionCreators
      }. \` +
        \`Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?\`
    )
  }

  const keys = Object.keys(actionCreators)
  const boundActionCreators = {}
  for (let i = 0; i &lt; keys.length; i++) {
    const key = keys[i]
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === &#x27;function&#x27;) {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}</code></pre>
<p>Holy validation batman. Guess what, thats virtually all this function is doing. <code>bindActionCreators</code> either takes a map of action creators or a function that returns one. If it gets a function it just calls the singular <code>bindActionCreator</code> which we'll get to.</p>
<p>Otherwise it does a whole bunch of validation to make sure that our map is in the correct format.</p>
<p>Assuming that goes well, lines 15-23 loop over the map and create a new map with each function passed to <code>bindActionCreator</code>. Let's dig into that inner function now.</p>
<pre><code class="language-javascript">function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}</code></pre>
<p>Were you expecting something other than a closure? <code>bindActionCreator</code> returns an anonymous function that calls the original function <code>actionCreator</code> with whatever arguments the anonymous function got and then passes the result of <code>actionCreator</code> to dispatch. Crazy, huh?</p>
<h2 id="combinereducers">combineReducers</h2>
<p>There's one file left in <code>src</code> and that's <code>combineReducers.js</code>. It's a relatively big one, 178 lines, so we'll break it down. Much like the rest of redux, there's a lot of validation however it only exports one function <code>combineReducers</code>.</p>
<p>This function takes a map of keys to <code>reducer</code> and returns a new <code>rootReducer</code> that slices up the redux state amongst these keys. The callsite looks like this</p>
<pre><code class="language-javascript">import {combineReducers, createStore} from &#x27;redux&#x27;;
import {muggleReducer, wizardReducer} from &#x27;./reducers&#x27;;

const rootReducer = combineReducers({
  muggle: muggleReducer,
  wizard: wizardReducer, 
});

const store = createStore(rootReducer);</code></pre>
<p>In this case the <code>wizardReducer</code> will receive the slice of the store from the <code>wizard</code> key down and the <code>muggleReducer</code> will receive the slice of the store from the <code>muggle</code> key down.</p>
<p>Back to the actual redux source, let's take a look at the declaration for <code>combineReducers</code>.</p>
<pre><code class="language-javascript">export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}
  for (let i = 0; i &lt; reducerKeys.length; i++) {
    const key = reducerKeys[i]

    if (process.env.NODE_ENV !== &#x27;production&#x27;) {
      if (typeof reducers[key] === &#x27;undefined&#x27;) {
        warning(\`No reducer provided for key "\${key}"\`)
      }
    }

    if (typeof reducers[key] === &#x27;function&#x27;) {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducerKeys = Object.keys(finalReducers)

  // This is used to make sure we don&#x27;t warn about the same
  // keys multiple times.
  let unexpectedKeyCache
  if (process.env.NODE_ENV !== &#x27;production&#x27;) {
    unexpectedKeyCache = {}
  }

  let shapeAssertionError
  try {
    assertReducerShape(finalReducers)
  } catch (e) {
    shapeAssertionError = e
  }</code></pre>
<p>These 29 lines are once again validation on our arguments. Redux loops over all the keys, makes sure they're all defined and point to a function. Interestingly, if it's not a function it doesn't bother complaining.</p>
<p>It also sets up the <code>unexpectedKeyCache</code> which is a reference to any unexpected keys we've warned about. </p>
<p>It then calls <code>assertReducerShape</code> our first big validation function.</p>
<pre><code class="language-javascript">function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(key =&gt; {
    const reducer = reducers[key]
    const initialState = reducer(undefined, { type: ActionTypes.INIT })

    if (typeof initialState === &#x27;undefined&#x27;) {
      throw new Error(
        \`Reducer "\${key}" returned undefined during initialization. \` +
          \`If the state passed to the reducer is undefined, you must \` +
          \`explicitly return the initial state. The initial state may \` +
          \`not be undefined. If you don&#x27;t want to set a value for this reducer, \` +
          \`you can use null instead of undefined.\`
      )
    }

    if (
      typeof reducer(undefined, {
        type: ActionTypes.PROBE_UNKNOWN_ACTION()
      }) === &#x27;undefined&#x27;
    ) {
      throw new Error(
        \`Reducer "\${key}" returned undefined when probed with a random type. \` +
          \`Don&#x27;t try to handle \${
            ActionTypes.INIT
          } or other actions in "redux/*" \` +
          \`namespace. They are considered private. Instead, you must return the \` +
          \`current state for any unknown actions, unless it is undefined, \` +
          \`in which case you must return the initial state, regardless of the \` +
          \`action type. The initial state may not be undefined, but can be null.\`
      )
    }
  })
}</code></pre>
<p>This is a pretty nifty function, it loops over each key and makes sure they handle an <code>INIT</code> action and a randomly generated <code>PROBE_UNKNOWN_ACTION</code> properly. This ensures that all reduces return a <code>defaultState</code> when given no <code>initialState</code> and return <em>something </em>when they get an unknown action.</p>
<p>Back to <code>combineReducers</code>, after the validation phase it returns our new <code>rootReducer</code>.</p>
<pre><code class="language-javascript">  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError
    }

    if (process.env.NODE_ENV !== &#x27;production&#x27;) {
      const warningMessage = getUnexpectedStateShapeWarningMessage(
        state,
        finalReducers,
        action,
        unexpectedKeyCache
      )
      if (warningMessage) {
        warning(warningMessage)
      }
    }
    </code></pre>
<p>But obviously, our <code>rootReducer</code> must do some validation of it's own! First off, if <code>assertReducerShape</code> threw an error, it throws that error on every single invocation. It doesn't allow us to fail silently here.</p>
<p>Second, if we're in dev mode it calls <code>getUnexpectedStateShapeWarningMessage</code>.</p>
<pre><code class="language-javascript">function getUnexpectedStateShapeWarningMessage(
  inputState,
  reducers,
  action,
  unexpectedKeyCache
) {
  const reducerKeys = Object.keys(reducers)
  const argumentName =
    action &amp;&amp; action.type === ActionTypes.INIT
      ? &#x27;preloadedState argument passed to createStore&#x27;
      : &#x27;previous state received by the reducer&#x27;

  if (reducerKeys.length === 0) {
    return (
      &#x27;Store does not have a valid reducer. Make sure the argument passed &#x27; +
      &#x27;to combineReducers is an object whose values are reducers.&#x27;
    )
  }

  if (!isPlainObject(inputState)) {
    return (
      \`The \${argumentName} has unexpected type of "\` +
      {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] +
      \`". Expected argument to be an object with the following \` +
      \`keys: "\${reducerKeys.join(&#x27;", "&#x27;)}"\`
    )
  }

  const unexpectedKeys = Object.keys(inputState).filter(
    key =&gt; !reducers.hasOwnProperty(key) &amp;&amp; !unexpectedKeyCache[key]
  )

  unexpectedKeys.forEach(key =&gt; {
    unexpectedKeyCache[key] = true
  })

  if (action &amp;&amp; action.type === ActionTypes.REPLACE) return

  if (unexpectedKeys.length &gt; 0) {
    return (
      \`Unexpected \${unexpectedKeys.length &gt; 1 ? &#x27;keys&#x27; : &#x27;key&#x27;} \` +
      \`"\${unexpectedKeys.join(&#x27;", "&#x27;)}" found in \${argumentName}. \` +
      \`Expected to find one of the known reducer keys instead: \` +
      \`"\${reducerKeys.join(&#x27;", "&#x27;)}". Unexpected keys will be ignored.\`
    )
  }
}
</code></pre>
<p>This is a big function but the bulk of the logic is right here.</p>
<pre><code class="language-javascript">const unexpectedKeys = Object.keys(inputState).filter(
  key =&gt; !reducers.hasOwnProperty(key) &amp;&amp; !unexpectedKeyCache[key]
)</code></pre>
<p>Basically, loop over the reducer keys and make sure they're identical to the state keys. Also remember any keys we've warned about in the past so we don't warn about the same issue repeatedly.</p>
<p>Finally, we get to the real logic below.</p>
<pre><code class="language-javascript">return function combination(state = {}, action) {
  /* Validation */

  let hasChanged = false
  const nextState = {}
  for (let i = 0; i &lt; finalReducerKeys.length; i++) {
    const key = finalReducerKeys[i]
    const reducer = finalReducers[key]
    const previousStateForKey = state[key]
    const nextStateForKey = reducer(previousStateForKey, action)
    if (typeof nextStateForKey === &#x27;undefined&#x27;) {
      const errorMessage = getUndefinedStateErrorMessage(key, action)
      throw new Error(errorMessage)
    }
    nextState[key] = nextStateForKey
    hasChanged = hasChanged || nextStateForKey !== previousStateForKey
  }
  return hasChanged ? nextState : state
}</code></pre>
<p>This loop takes every action and passes it to each reducer with the state it previously generated. It then does a simple reference check on each reducer's new state. If any of them are different, it returns a new object. Otherwise it just returns the previous state so upstream functions can memoize.</p>
<p>And that's redux! I hope you enjoyed this.</p>
`.trim(),tags:["Tech","redux"],banner_img:"/images/blog/hero-mountain-valley.jpg",wordCount:2575},pf={id:2,slug:"how-redux-works",title:"How Redux Works - Part 1",date:"January 29, 2019",excerpt:"In this article we'll be covering createStore. This is the function that sets up the redux store and provides access to getState, dispatch, subscribe, and replaceReducer. ",content:`
<p><em>This is part one of a two part series. For part two <a href="/writing/how-redux-works-2">see here</a>.</em></p>
<h1 id="create-store">Create Store</h1>
<p>I spend a lot of time walking people through Redux best practices and how to use it, and throughout this process I've found it really helpful to dive into the source itself. While this source is very readable and well commented, I thought I'd put together a blog post to break it down and add some more context.</p>
<p>In this article we'll be covering <code><a href="https://github.com/reduxjs/redux/blob/master/src/createStore.js">createStore</a></code>. This is the function that sets up the redux store and provides access to <code>getState</code>, <code>dispatch</code>, <code>subscribe</code>, and <code>replaceReducer</code>. </p>
<p><em>A note on embedded source: The most up to date redux source is <a href="https://github.com/reduxjs/redux/tree/master/src">available here</a>. I'll be embedding source code as of when this post was written.</em></p>
<h1 id="three-principals">Three Principals</h1>
<p>Before we get started we should reexamine the <a href="https://redux.js.org/introduction/three-principles">three principals</a> of redux. Below is an excerpt from the redux docs.</p>
<h3 id="single-source-of-truth">Single source of truth</h3>
<p>The <a href="https://redux.js.org/glossary#state">state</a> of your whole application is stored in an object tree within a single <a href="https://redux.js.org/glossary#store">store</a>.</p>
<h3 id="state-is-read-only">State is read-only</h3>
<p>The only way to change the state is to emit an <a href="https://redux.js.org/glossary#action">action</a>, an object describing what happened.</p>
<h3 id="changes-are-made-with-pure-functions">Changes are made with pure functions</h3>
<p>To specify how the state tree is transformed by actions, you write pure <a href="https://redux.js.org/glossary#reducer">reducers</a>.</p>
<h3 id="takeaway">Takeaway</h3>
<p>The important bit here is that everything is done with pure functions. As a result of this we prevent consumers from doing things like calling <code>dispatch</code> or <code>getState</code> from within a reducer.</p>
<p>As we talk about <code>createStore</code> we'll notice that the majority of the code enforces these constraints.</p>
<h1 id="function-signature">Function Signature</h1>
<p>Now that we've introduced this, let's dive into <code>createStore</code>. We'll start with the function signature.</p>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>This takes three arguments <code>reducer</code> <code>preloadedState</code> and <code>enhancer</code>.</p>
<h2 id="reducer">Reducer</h2>
<p>The first one is hopefully straightforward. This is the <code>rootReducer</code> for your application. It's a pure function that takes a <code>state</code> and an <code>action</code> and returns a new <code>state</code>. It's most likely generated by <code><a href="https://github.com/reduxjs/redux/blob/master/src/combineReducers.js">combineReducers</a></code> which we'll cover in part 2.</p>
<h2 id="preloadedstate">preloadedState</h2>
<p>This is simply the state you'd like to start with. Most likely if you're using <code>preloadedState</code> you're doing one of two things. You have a server side rendered the page, or you have a data payload coming down with your source. Either way you &nbsp;have data you want loaded into redux as soon as the app is instantiated.</p>
<p>If you're not doing one of these you should probably just dispatch an action after the store is created.</p>
<h2 id="enhancer">enhancer</h2>
<p>I sometimes like to call this the <em>enchanter </em>because it really does some magic. The most common uses for this are the <a href="https://github.com/zalmoxisus/redux-devtools-extension">redux devtools</a> or adding <a href="https://github.com/reduxjs/redux/blob/master/src/applyMiddleware.js">middleware</a>, another thing we'll see in part 2.</p>
<h1 id="argument-validation-and-enhancing">Argument Validation and Enhancing</h1>
<p>The next lines of code are mostly argument validation. You can read the full source below but here's what it's doing:</p>
<ol>
<li>Ensures you've passed at most three arguments</li>
<li>Allow the user to only pass <code>reducer</code> and <code>enhancer</code>. If this happens it swaps the argument order.</li>
<li>Ensures the reducer is an actual function.</li>
</ol>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>There is one <em>very interesting </em>thing going on here though. You can see it on line 22 in the gist above.</p>
<p><code>enhancer(createStore)(reducer, preloadedState)</code></p>
<p>If an <code>enhancer</code> function is provided it calls it with <code>createStore</code> as an argument. This function then returns a new <code>createStore</code> function which only takes <code>reducer</code> and <code>preloadedState</code>.</p>
<p>This pattern is very common in the redux source, wrapping functions in other functions. In fact I like to say it's functions all the way down.</p>
<p>This is also how <a href="https://github.com/zalmoxisus/redux-devtools-extension">redux devtools</a> works. It wraps the createStore function so it can inject wrappers around every exported function and listen to their inputs and outputs. We won't dive too deeply into this, but you can check out <a href="https://github.com/zalmoxisus/redux-devtools-extension/blob/7b0be59e5b28162ca00e99dcd2f092b8df493a47/src/browser/extension/inject/pageScript.js">that source here</a>.</p>
<h1 id="internal-state">Internal State</h1>
<p>Before we get to the function declarations, <code>createStore</code> needs to set up some internal state.</p>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>Let's walk through each of these.</p>
<ul>
<li><code>currentReducer</code> - The root reducer redux calls.</li>
<li><code>currentState</code> - A reference to the key/value object that represents state</li>
<li><code>currentListeners</code> - This is a list of functions that have subscribed to redux.</li>
<li><code>nextListeners</code> - This is a reference to the updated listeners before a dispatch.</li>
<li><code>isDispatching</code> - Effectively a semaphore to block us from dispatching more than one action at a time.</li>
</ul>
<p>If these don't make total sense yet, especially the latter three, don't worry. We'll cover these more later.</p>
<h1 id="function-declarations">Function Declarations</h1>
<p>We're still inside of <code>createStore</code> but now we're declaring functions that will be used throughout the lifecycle of the store. Some of these will be returned as part of the store, others will only be used internally. I'll label each as we're going.</p>
<h2 id="ensurecanmutatenextlisteners">ensureCanMutateNextListeners</h2>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>This function seems inconsequential but it's actually very important. Redux supports pub-sub or publish-subscribe. We have no invariants around when a consumer may decide to subscribe to our store or unsubscribe from it. As a result <code>nextListeners</code> needs to be mutable at all times. </p>
<p>Consider, a listener might even unsubscribe as a result of being called!</p>
<p>As a result of this we only call listeners in <code>currentListeners</code> and let any new subscriptions modify <code>nextListeners</code>. </p>
<p>Under the hood, this works because <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">Array.prototype.slice</a></code> returns a new reference to the list so <code>currentListeners</code> and <code>nextListeners</code> point to different arrays.</p>
<h2 id="getstate">getState</h2>
<p>This is a fan favorite, this is the function that returns <code>state</code>. It get's returned as part of the store and returns a reference to the current underlying <code>state</code> object.</p>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>You'll notice there's an invariant here that prevents us from calling this function during a dispatch. There's a good reason for this. When reducers are combined they only get a slice of the state, more on that in part 2. We don't want a reducer to get access to this function and derive it's state from another namespace state tree. As a result this throws if we're in the middle of a dispatch.</p>
<p>You may be thinking, but I call <code>getState</code> from a thunk! We're specifically referring to the plain action <code>dispatch</code>, not thunk <code>dispatch</code>. We'll cover thunks in part 2.</p>
<h2 id="subscribe">Subscribe</h2>
<p>The next function created is <code>subscribe</code>. This is what notifies listeners that something in the store has changed. This function is returned as part of the store.</p>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>Hopefully this pattern is starting to look familiar. Subscribe takes a function that gets called every time the internal <code>state</code> updates. It also does the following validation:</p>
<ol>
<li>Make sure the argument is actually a function.</li>
<li>Make sure we're not attaching a subscribe in the middle of a dispatch.</li>
<li>Make sure we can mutate listeners, otherwise we couldn't subscribe!</li>
</ol>
<p>It also creates some internal state, <code>isSubscribed</code>. This is used in the <code>unsubscribe</code> function it returns.</p>
<h2 id="unsubscribe-">Unsubscribe.</h2>
<p>We've covered how we start listening to things, we call <code>subscribe</code>. But how do we stop? Well <code>subscribe</code> conveniently returns a function called <code>unsubscribe</code> that allows us to stop paying attention to redux.</p>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>This function is very similar to <code>subscribe</code>. It checks <code>isSubscribed</code> (internal state) to see if it's already been called, and does some validation to make sure we're not currently <code>dispatching</code>. </p>
<p>Then it removes listener from the list.</p>
<h2 id="mapstatetoprops">mapStateToProps</h2>
<p>You might be thinking. I've been using redux for years, I've never called these functions. That's because most integration libraries will abstract all this away for us. In the case of the react-redux library this is taken care of in the <code><a href="https://github.com/reduxjs/react-redux/blob/85fb553ba8e3f4b0efc158d2e48aafb4c18a04d4/src/components/Provider.js">&lt;Provider /&gt;</a></code> component. We won't delve too far into that library but you can check out the <a href="https://github.com/reduxjs/react-redux">full source here</a>.</p>
<h1 id="dispatch">Dispatch</h1>
<p>It's worth a reminder that all of this is still being done in the context of the <code>createStore</code> function. The next function is the most important one, <code>dispatch</code>. This is the thing that updates the store and notifies listeners. Let's walk through it.</p>
<h2 id="validation">Validation</h2>
<p>Like every other function we've encountered. <code>dispatch</code> starts with a bunch of validation.</p>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>You can see above it's enforcing the following rules</p>
<ol>
<li>We're only dispatching a plain object.</li>
<li>That object has a property called <code>type</code>.</li>
<li>We are not currently dispatching.</li>
</ol>
<p>But once again you might be thinking, but I dispatch functions! This is taken care of by the thunk middleware, something to look forward to in part 2 of this article.</p>
<h2 id="business-logic">Business Logic</h2>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>Now that we've made it this far, this function is probably much less impressive than you expected. Here's what it's doing.</p>
<ol>
<li>Set the <code>isDispatching</code> semaphore to <code>true</code></li>
<li>Call <code>currentReducer</code> with <code>currentState</code> and <code>action</code>. This returns a brand new state for our listeners.</li>
<li>Update listeners with the next set.</li>
<li>Loop through the list of listeners and call each of them.</li>
</ol>
<p>This is also where it's important that we keep <code>currentListeners</code> and <code>nextListeners</code> separate. While the reducer must be a synchronous pure function, there is no such invariant around any given listeners.</p>
<p>A listener may be async, take a long time, modify some global state, etc. It might even unsubscribe as a result of being called.</p>
<h1 id="two-more-functions">Two More Functions</h1>
<p>We've now covered the bulk of the business logic in <code>createStore</code>. There are now just two functions we need to mention, <code>replaceReducer</code> and <code>observable</code>.</p>
<h3 id="replacereducer">replaceReducer</h3>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>The function itself seems pretty straightforward, we take a new reducer and replace the one we use in the store. Then we dispatch an action announcing this has happened.</p>
<p>This action will also have the "side effect" of copying over any state that the new reducer needs to know about.</p>
<p>Why would you need this? This function is particularly useful for <a href="http://matthewgerstman.com/redux-code-split-typecheck/">code splitting. </a>I wrote an entire article about how to <a href="http://matthewgerstman.com/redux-code-split-typecheck/">code split a redux store</a> so I'll leave that as a followup.</p>
<h2 id="observable">Observable</h2>
<p>This last bit I've never actually used, so I don't think I'm qualified to go into too much detail about it. Effectively it adds support for to support <code>observables</code>, a proposal to ecmascript. It's &nbsp;just a simple wrapper around <code>subscribe</code>/<code>unsubscribe</code>.</p>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<h1 id="wrapping-up">Wrapping Up</h1>
<p>The very last bit in <code>createStore</code> is initializing the state tree and exporting functions.</p>
<!--kg-card-begin: html-->
<!--kg-card-begin: html-->
<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-f6e25add23b42c0d.css">
<!--kg-card-end: html-->
<!--kg-card-end: html-->
<p>This is how users get access to <code>store.getState</code>, <code>store.dispatch</code>, <code>store.subscribe</code>, and <code>replaceReducer</code>. </p>
<h1 id="next-time-">Next Time!</h1>
<p>In our next article we'll be covering a lot of the tooling around redux. We'll talk about <code>applyMiddleware</code>, <code>bindActionCreators</code>, thunks, and more!</p>
<p>Part two is now available <a href="/writing/how-redux-works-2">here</a>!</p>
`.trim(),tags:["Tech","redux"],banner_img:"/images/blog/how-redux-works/redux-architecture-hero.jpeg",heroImage:"",wordCount:1667},hf={id:6,slug:"ts-tricks-higher-order-components",title:"TS Tricks: Higher Order Components",date:"January 27, 2019",excerpt:"",content:`
<p>Higher order components are a useful pattern for creating composable logic within a React application. While they're not as popular as other tools like render props or hooks, they're still worth knowing.</p>
<p>How do higher order components work? Well as we discussed in <a href="/writing/functional-programming-fundamentals">Functional Programming Fundamentals</a>, higher order functions take a function as an argument and/or returns an argument as it's result.</p>
<p>In this case, higher order components are functions that take a component as an argument and return a new supercharged component as a result. This poses an interesting problem for typing.</p>
<p>We want to expose a component that only needs require the props <em>not</em> provided by the HOC, but we still want to be able to access the original uncomposed component.</p>
<p>Let's walk through an example.</p>
<pre><code class="language-typescript">type TomRiddleProps = {
  isEvil: boolean;
};

const TomRiddle: React.FunctionComponent&lt;TomRiddleProps&gt; = ({ isEvil }) =&gt; {
  return (
    &lt;div&gt;
      {isEvil ? &lt;h1&gt;Tom Marvolo Riddle&lt;/h1&gt; : &lt;h1&gt;I am Lord Voldemort&lt;/h1&gt;}
    &lt;/div&gt;
  );
};</code></pre>
<p>We start with a super basic component, <code>TomRiddle</code>. Now it matters not what someone is born, but what they chose to be. <code>TomRiddle</code> takes an <code>isEvil</code> prop that determines if it renders "Tom Marvolo Riddle" or "I am Lord Voldemort".</p>
<p>Tom isn't such a great guy and wants to learn how to make horcruxes. How do we teach him? Well we could make him into a class component and add some state. Let's see what that looks like.</p>
<pre><code class="language-typescript">type TomRiddleProps = {
  isEvil: boolean;
};

type TomRiddleState = {
  numHorcruxes: number;
};

class TomRiddle extends React.Component&lt;TomRiddleProps, TomRiddleState&gt; {
  state = {
    numHorcruxes: 0
  };
  makeHorcrux = () =&gt; {
    this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
  };
  render() {
    const { isEvil } = this.props;
    const { numHorcruxes } = this.state;
    return (
      &lt;div&gt;
        {isEvil ? &lt;h1&gt;Tom Marvolo Riddle&lt;/h1&gt; : &lt;h1&gt;I am Lord Voldemort&lt;/h1&gt;}
        &lt;span&gt;I have {numHorcruxes} Horcruxes!&lt;/span&gt;
        &lt;button onClick={this.makeHorcrux}&gt;Make Horcrux&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}</code></pre>
<p>This totally works. We've taught Tom how to make horcruxes. Now Tom wants to recruit some followers, he calls those Death Eaters. Let's add another prop for those. While we're at it, let's derive <code>isEvil</code> &nbsp;from the number of horcruxes the wizard has. </p>
<pre><code class="language-typescript">import * as React from "react";

type TomRiddleProps = {
  deathEaters: string[];
};

type TomRiddleState = {
  numHorcruxes: number;
};

class TomRiddle extends React.Component&lt;TomRiddleProps, TomRiddleState&gt; {
  state = {
    numHorcruxes: 0
  };
  makeHorcrux = () =&gt; {
    this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
  };
  render() {
    const { deathEaters } = this.props;
    const { numHorcruxes } = this.state;

    const isEvil = numHorcruxes &gt; 0;
    return (
      &lt;div&gt;
        {isEvil ? &lt;h1&gt;Tom Marvolo Riddle&lt;/h1&gt; : &lt;h1&gt;I am Lord Voldemort&lt;/h1&gt;}
        &lt;span&gt;I have {numHorcruxes} Horcruxes!&lt;/span&gt;
        &lt;button onClick={this.makeHorcrux}&gt;Make Horcrux&lt;/button&gt;
        {deathEaters != null ? (
          &lt;&gt;
            &lt;h2&gt;These are my Death Eaters&lt;/h2&gt;
            &lt;ul&gt;
              {deathEaters.map(deathEater =&gt; (
                &lt;li key={deathEater}&gt;{deathEater}&lt;/li&gt;
              ))}
            &lt;/ul&gt;
          &lt;/&gt;
        ) : null}
      &lt;/div&gt;
    );
  }
}</code></pre>
<p>Now this component is doing a bit too much. It's rendering to the DOM and it's managing state. Also, anyone can learn to make horcruxes, what if we take that functionality and make it into a higher order component. </p>
<p>Before we get to typing this, let's take a look at what this would look like in vanilla JS.</p>
<pre><code class="language-typescript">function EvilWizard(Wizard) {
  class WithEvilWizard extends React.Component {
    displayName = \`WithEvilWizard(\${Wizard.displayName})\`;
    state = {
      numHorcruxes: 0
    };
    makeHorcrux = () =&gt; {
      this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
    };
    render() {
      const { numHorcruxes } = this.state;
      return (
        &lt;Wizard
          isEvil={numHorcruxes &gt; 0}
          numHorcruxes={numHorcruxes}
          makeHorcrux={this.makeHorcrux}
          {...this.props}
        /&gt;
      );
    }
  }
  return hoistNonReactStatics(WithEvilWizard, Wizard);
}</code></pre>
<p><code>EvilWizard</code> is a function that takes a component, <code>Wizard</code>, and passes that component the following props <code>numHorcruxes</code>, and <code>makeHorcrux</code>. It also manages this state for them.</p>
<p>Now, two minor gotchas with HOCs, we need to set the <code>displayName</code> and <code>hoistNonReactStatics</code>.</p>
<p>Okay now let's type this thing. </p>
<pre><code class="language-typescript">import * as React from "react";
import hoistNonReactStatics = require("hoist-non-react-statics");

type WithEvilWizardProps&lt;T&gt; = T &amp; EvilWizardInnerProps;

type EvilWizardInnerProps = {
  numHorcruxes: number;
  makeHorcrux: () =&gt; void;
};

type EvilWizardState = {
  numHorcruxes: number;
};

function EvilWizard&lt;T&gt;(
  Wizard:
    | React.ComponentClass&lt;WithEvilWizardProps&lt;T&gt;, {}&gt;
    | React.FunctionComponent&lt;WithEvilWizardProps&lt;T&gt;&gt;,
): React.ComponentClass&lt;T&gt; {
  class WithEvilWizard extends React.Component&lt;T, EvilWizardState&gt; {
    displayName = \`WithEvilWizard(\${Wizard.displayName})\`;
    state = {
      numHorcruxes: 0,
    };
    makeHorcrux = () =&gt; {
      this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
    };
    render() {
      return (
        &lt;Wizard
          {...this.props}
          numHorcruxes={this.state.numHorcruxes}
          makeHorcrux={this.makeHorcrux}
        /&gt;
      );
    }
  }
  return hoistNonReactStatics(WithEvilWizard, Wizard);
}</code></pre>
<p>What's going on here? A lot actually. Let's break it down. We export a type called <code>WithEvilWizardProps</code>. This type takes <code>T</code>, a generic, and returns an intersection type of <code>T</code> and <code>EvilWizardInnerProps</code>.</p>
<p>The function <code>EvilWizard</code> takes a <code>Wizard</code> that is either a <code>ComponentClass</code> or a <code>FunctionComponent</code>. The props of this component is of type <code>EvilWizardInnerProps &amp; T</code>. Now here's the real magic. The component we're returning is a class of type <code>React.ComponentClass&lt;T&gt;</code>. </p>
<p>What does this mean? Well because we're using an intersection type, Typescript is smart enough to unpack this and return a component that only requires the props <strong>not</strong> provided by the HOC.</p>
<p>One last thing, let's update <code>TomRiddle</code> to use this new HOC.</p>
<pre><code class="language-typescript">type TomRiddleProps = WithEvilWizardProps&lt;{
  deathEaters: string[];
}&gt;;

const TomRiddle: React.FunctionComponent&lt;TomRiddleProps&gt; = ({
  deathEaters,
  numHorcruxes,
  makeHorcrux,
}) =&gt; {
  const isEvil = numHorcruxes &gt; 0;
  return (
    &lt;div&gt;
      {isEvil ? &lt;h1&gt;Tom Marvolo Riddle&lt;/h1&gt; : &lt;h1&gt;I am Lord Voldemort&lt;/h1&gt;}
      &lt;span&gt;I have {numHorcruxes} Horcruxes!&lt;/span&gt;
      &lt;button onClick={makeHorcrux}&gt;Make Horcrux&lt;/button&gt;
      {deathEaters != null ? (
        &lt;&gt;
          &lt;h2&gt;These are my Death Eaters&lt;/h2&gt;
          &lt;ul&gt;
            {deathEaters.map(deathEater =&gt; (
              &lt;li key={deathEater}&gt;{deathEater}&lt;/li&gt;
            ))}
          &lt;/ul&gt;
        &lt;/&gt;
      ) : null}
    &lt;/div&gt;
  );
};

const LordVoldemort = EvilWizard(TomRiddle);</code></pre>
<p>We've now extracted all that state back out and we're using <code>WithEvilWizardProps</code> when declaring <code>TomRiddleProps</code>. Now let's use our components!</p>
<pre><code class="language-typescript">function BothRiddles() {
  return (
    &lt;div&gt;
      &lt;TomRiddle
        deathEaters={[]}
        numHorcruxes={0}
        makeHorcrux={() =&gt; undefined}
      /&gt;
      &lt;LordVoldemort deathEaters={["Bellatrix Lestrange", "Lucius Malfoy"]} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
<p>As you can see above, we have the option of using <code>LordVoldemort</code> the output of <code>EvilWizard(TomRiddle)</code> or we can just call <code>TomRiddle</code> directly. This is particularly useful if you want to test the behavior of the inner component without the HOC.</p>
`.trim(),tags:["Tech"],banner_img:"/images/blog/ts-tricks-higher-order-components/higher-order-components-hero.jpg",heroImage:"",wordCount:986},mf={id:4,slug:"ts-tricks-type-guards",title:"TS Tricks: Type Guards",date:"January 23, 2019",excerpt:"With everyone getting excited about Typescript I thought it'd be fun to do a walkthrough of one of my favorite features, type guards. These are type-safe functions that allow us to assert that an argu",content:`
<p>With everyone getting excited about Typescript I thought it'd be fun to do a walkthrough of one of my favorite features, <strong>type guards. </strong>These are type-safe functions that allow us to assert that an argument matches a certain type. The best part is these work at runtime!</p>
<p>Let's start with a basic example below:</p>
<pre><code class="language-typescript">enum PersonType {
  Muggle = &#x27;Muggle&#x27;,
  Wizard = &#x27;Wizard&#x27;,
}

interface Person {
  type: PersonType;
  name: string;
}

interface Wizard extends Person {
  type: PersonType.Wizard;
  spells: string[];
}

interface Muggle extends Person {
  type: PersonType.Muggle;
  dursley: boolean;
}
</code></pre>
<p>We've declared some interfaces here: <code>Person</code>, <code>Wizard</code>, and <code>Muggle</code>. <code>Wizard</code> and <code>Muggle</code> are both instances of <code>Person</code>, however they have an extra property. Pretty standard so far.</p>
<p>But now let's create a type guard!</p>
<pre><code class="language-typescript">function isWizard(person: Person): person is Wizard {
  return person.type === PersonType.Wizard;
}

function isMuggle(person: Person): person is Muggle {
  return person.type === PersonType.Muggle;
}
</code></pre>
<p>We now have functions called <code>isWizard</code> and <code>isMuggle</code>. These functions return a boolean at runtime, but in Typescript land they return <code>person is Wizard</code> or <code>person is Muggle</code>. &nbsp;At compile time we'll get static type checking on our instances.</p>
<pre><code class="language-typescript">function getSpellsForPerson(person: Person) {
  if (!isWizard(person)) {
    return [];
  }
  return person.spells;
}

function isDursley(person: Person) {
  if (!isMuggle(person)) {
    return false;
  }
  return person.dursley;
}
</code></pre>
<p>These functions are all 100% type-safe. In fact, if we were to try to get spells off a <code>Muggle</code> we would get a type error.</p>
<pre><code class="language-typescript">const HarryPotter: Wizard = {
  type: PersonType.Wizard,
  name: &#x27;Harry Potter&#x27;,
  spells: [&#x27;Expelliarmus&#x27;, &#x27;Expecto Patronum&#x27;, &#x27;Imperio&#x27;],
};

const DudleyDursely: Muggle = {
  type: PersonType.Muggle,
  name: &#x27;Dudley Dursley&#x27;,
  dursley: true,
};

getSpellsForPerson(HarryPotter);
// [&#x27;Expelliarmus&#x27;, &#x27;Expecto Patronum&#x27;, &#x27;Imperio&#x27;]
getSpellsForPerson(DudleyDursely);
// []

isDursley(HarryPotter);
// false
isDursley(DudleyDursely);
// true
</code></pre>
<p>These functions always return the right thing because we have validation at both runtime and compile time. It's basically a free unit test! </p>
<p>Note: It's <em>one</em> free unit test per function, you should write others.</p>
<p>Let's make this more complicated now, let's extend <code>Wizard</code>.</p>
<pre><code class="language-typescript">enum HogwartsHouse {
  &#x27;Slytherin&#x27;,
  &#x27;Ravenclaw&#x27;,
  &#x27;Hufflepuff&#x27;,
  &#x27;Gryffindor&#x27;,
}

interface Wizard extends Person {
  type: PersonType.Wizard;
  spells: string[];
  house: HogwartsHouse;
}
</code></pre>
<p>Now each <code>Wizard</code> has a <code>house</code> property for a Hogwarts house. Just like before we could make new interfaces for each house.</p>
<pre><code class="language-typescript">interface Slytherin extends Wizard {
  house: HogwartsHouse.Slytherin;
  darkArts: string[];
}

interface Ravenclaw extends Wizard {
  house: HogwartsHouse.Ravenclaw;
  extraKnowledge: string[];
}

interface Hufflepuff extends Wizard {
  house: HogwartsHouse.Hufflepuff;
  badgerFriends: string[];
}

interface Gryffindor extends Wizard {
  house: HogwartsHouse.Gryffindor;
  peopleLoyalTo: string[];
}
</code></pre>
<p>And once again, we can make simple type guards for each house. But this time we'll also reuse our <code>isWizard</code> guard. After all, only wizards can go to Hogwarts!</p>
<pre><code class="language-typescript">function isGryffindor(person: Person): person is Gryffindor {
  return isWizard(person) &amp;&amp; person.house === HogwartsHouse.Gryffindor;
}

function isRavenclaw(person: Person): person is Ravenclaw {
  return isWizard(person) &amp;&amp; person.house === HogwartsHouse.Ravenclaw;
}

function isSlytherin(person: Person): person is Slytherin {
  return isWizard(person) &amp;&amp; person.house === HogwartsHouse.Slytherin;
}

function isHufflepuff(person: Person): person is Hufflepuff {
  return isWizard(person) &amp;&amp; person.house === HogwartsHouse.Hufflepuff;
}
</code></pre>
<p>Let's have some fun now, let's throw together a makeshift datastore and do some functional programming. If you're new to FP you can check out my <a href="http://matthewgerstman.com/functional-programming-fundamentals/">previous article here</a>.</p>
<pre><code class="language-typescript">const HarryPotter: Gryffindor = {
  type: PersonType.Wizard,
  name: &#x27;Harry Potter&#x27;,
  spells: [&#x27;Expelliarmus&#x27;, &#x27;Expecto Patronum&#x27;, &#x27;Imperio&#x27;],
  house: HogwartsHouse.Gryffindor,
  peopleLoyalTo: [&#x27;Ronald Weasley&#x27;, &#x27;Hermione Granger&#x27;],
};

const DracoMalfoy: Slytherin = {
  type: PersonType.Wizard,
  name: &#x27;Draco Malfoy&#x27;,
  spells: [&#x27;Serpensortia&#x27;],
  house: HogwartsHouse.Slytherin,
  darkArts: [&#x27;Crucio&#x27;, &#x27;Avada Kedavra&#x27;],
};

const CedricDiggory: Hufflepuff = {
  type: PersonType.Wizard,
  name: &#x27;Cedric Diggory&#x27;,
  spells: [&#x27;Transfiguring Things&#x27;],
  house: HogwartsHouse.Hufflepuff,
  badgerFriends: [&#x27;Wayne&#x27;],
};

const LunaLovegood: Ravenclaw = {
  type: PersonType.Wizard,
  name: &#x27;Luna Lovegood&#x27;,
  spells: [&#x27;Expecto Patronum&#x27;],
  house: HogwartsHouse.Ravenclaw,
  extraKnowledge: [&#x27;&#x27;],
};

const DudleyDursely: Muggle = {
  type: PersonType.Muggle,
  name: &#x27;Dudley Dursley&#x27;,
  dursley: true,
};

const PetuniaDursely: Muggle = {
  type: PersonType.Muggle,
  name: &#x27;Petunia Dursley&#x27;,
  dursley: true,
};

const FrankBryce: Muggle = {
  type: PersonType.Muggle,
  name: &#x27;Frank Bryce&#x27;,
  dursley: false,
};

const people: Person[] = [
  CedricDiggory,
  DracoMalfoy,
  DudleyDursely,
  FrankBryce,
  HarryPotter,
  LunaLovegood,
  PetuniaDursely,
];
</code></pre>
<p>Now we have an array of people. These people may or may not be Wizards and their Hogwarts houses vary. </p>
<pre><code class="language-typescript">function getGryffindors(people: Person[]) {
  return people.filter(isGryffindor);
}
function getRavenclaws(people: Person[]) {
  return people.filter(isRavenclaw);
}
function getHufflepuffs(people: Person[]) {
  return people.filter(isHufflepuff);
}
function getSlytherins(people: Person[]) {
  return people.filter(isSlytherin);
}
</code></pre>
<p>We can now make functions that <code>filter</code> over the list of people and return the ones that match a type.</p>
<pre><code class="language-typescript">getGryffindors(people);
// [{
//   type: PersonType.Wizard,
//   name: &#x27;Harry Potter&#x27;,
//   spells: [&#x27;Expelliarmus&#x27;, &#x27;Expecto Patronum&#x27;, &#x27;Imperio&#x27;],
//   house: HogwartsHouse.Gryffindor,
//   peopleLoyalTo: [&#x27;Ronald Weasley&#x27;, &#x27;Hermione Granger&#x27;],
// }]
getRavenclaws(people);
// [{
//   type: PersonType.Wizard,
//   name: &#x27;Luna Lovegood&#x27;,
//   spells: [&#x27;Expecto Patronum&#x27;],
//   house: HogwartsHouse.Ravenclaw,
//   extraKnowledge: [&#x27;&#x27;],
// }]

getHufflepuffs(people);
// [{
//   type: PersonType.Wizard,
//   name: &#x27;Cedric Diggory&#x27;,
//   spells: [&#x27;Transfiguring Things&#x27;],
//   house: HogwartsHouse.Hufflepuff,
//   badgerFriends: [&#x27;Wayne&#x27;],
// }]
getSlytherins(people);
// [{
//   type: PersonType.Wizard,
//   name: &#x27;Draco Malfoy&#x27;,
//   spells: [&#x27;Serpensortia&#x27;],
//   house: HogwartsHouse.Slytherin,
//   darkArts: [&#x27;Crucio&#x27;, &#x27;Avada Kedavra&#x27;],
// }]
</code></pre>
<p>We can also combine these with a <code>map</code> to get data we care about.</p>
<pre><code class="language-typescript">function getName(person: Person) {
  return person.name;
}

function getNamesOfWizards(people: Person[]) {
  return people.filter(isWizard).map(getName);
}

function getNamesOfMuggles(people: Person[]) {
  return people.filter(isMuggle).map(getName);
}

getNamesOfWizards(people);
// [&#x27;Harry Potter&#x27;, &#x27;Cedric Diggory&#x27;, &#x27;Draco Malfoy&#x27;, &#x27;Luna Lovegood&#x27;]
getNamesOfMuggles(people);
// [&#x27;Dudley Dursely&#x27;, &#x27;Petunia Dursely&#x27;, &#x27;Frank Bryce&#x27;]
</code></pre>
<p>If these look like redux selectors, it's because this pattern is very commonly used to get data out of a typed redux store. If you want to know more about that, I wrote an article about <a href="http://matthewgerstman.com/redux-code-split-typecheck/">building a typed and code-split</a> redux store.</p>
`.trim(),tags:["Tech","typescript"],banner_img:"/images/blog/ts-tricks-type-guards/type-guards-hero.jpg",heroImage:"",wordCount:912},gf={id:5,slug:"ts-tricks-type-safe-reducers",title:"TS Tricks: Type-safe Reducers",date:"January 23, 2019",excerpt:" We're going to talk about how to build a type-safe reducer. Now, I use these for redux reducers, but these principles could apply to any function.",content:`
<p>If you enjoyed my post on <a href="/writing/ts-tricks-type-guards">type guards</a>, this one might tickle your fancy. We're going to talk about how to build a type-safe reducer. Now, I use these for redux reducers, but these principles could apply to any function.</p>
<p>Let's start by typing some actions.</p>
<pre><code class="language-typescript">enum ActionTypes {
  MakeFriend = &#x27;MakeFriend&#x27;,
  LearnSpell = &#x27;LearnSpell&#x27;,
}
interface MakeFriend {
  type: ActionTypes.MakeFriend;
  payload: {friend: string};
}

interface LearnSpell {
  type: ActionTypes.LearnSpell;
  payload: {spell: string};
}

type WizardActions = MakeFriend | LearnSpell;
</code></pre>
<p>You'll notice we've created two action types <code>MakeFriend</code> and <code>LearnSpell</code>. Each of these has a <code>type</code> and a <code>payload</code>. The <code>payload</code> of each however is a different shape. In this case it's an object with a single key, but you can imagine a much more complex scenario.</p>
<p>Now at the bottom we have a type called <code>WizardActions</code>. This is what's called a <em>discriminated union. </em>What this means is that we can take an argument of type <code>WizardActions</code> and it will be exactly <em>one</em> the types in the union. Let's look at some more code to elaborate.</p>
<pre><code class="language-typescript">interface StateShape {
  name: string;
  friends: string[];
  spells: string[];
}

const initialState = {
  name: &#x27;Harry Potter&#x27;,
  friends: [],
  spells: [],
};

function reducer(state: StateShape = initialState, action: WizardActions) {
  return state;
}
</code></pre>
<p>We now have a reducer that takes a <code>state</code> and an <code>action</code> and returns the current state. Don't worry, we'll handle these actions later. Now the <code>action</code> argument is of type <code>WizardActions</code> which means it's going to be of type <code>MakeFriend</code> or of type <code>LearnSpell</code>.</p>
<p>Let's expand on our reducer and keep going.</p>
<pre><code class="language-typescript">function reducer(state: StateShape, action: WizardActions) {
  switch (action.type) {
    case ActionTypes.MakeFriend: {
      return {...state, friends: [...state.friends, action.payload.friend]};
    }
    case ActionTypes.LearnSpell: {
      return {...state, spells: [...state.spells, action.payload.spell]};
    }
    default: {
      return state;
    }
  }
}
</code></pre>
<p>If you're used to redux, this should look familiar. We have a switch statement on the action type and we're handling each payload differently. For <code>MakeFriend</code> actions we append a friend to the list of friends. For <code>LearnSpell</code> actions we append a spell to the list of spells.</p>
<p>We actually don't need the default case because this is an exhaustive type-check, but it's still good to be defensive in case someone upstream uses an <code>any</code>. It's also necessary if we integrate this with redux.</p>
<p>How does this work? Well Typescript is pretty smart. It figures out on it's own that checking <code>type</code> will guarantee the payload is a certain shape. When we go to access that payload, it knows what properties to expect. If we attempted to check the <code>spell</code> of a <code>MakeFriend</code> action we would get a type error.</p>
<p>Let's have some fun now and call our reducer. First let's make some friends.</p>
<pre><code class="language-typescript">const MeetRon: MakeFriend = {
  type: ActionTypes.MakeFriend,
  payload: {friend: &#x27;Ronald Weasley&#x27;},
};
const HarryOnTheTrain = reducer(undefined, MeetRon);
// {
//   name: "Harry Potter",
//   friends: ["Ronald Weasley"],
//   spells: [],
// }

const MeetHermione: MakeFriend = {
  type: ActionTypes.MakeFriend,
  payload: {friend: &#x27;Hermione Granger&#x27;},
};
const HarryFiveMinutesLater = reducer(HarryOnTheTrain, MeetHermione);
// {
//   name: "Harry Potter",
//   friends: ["Ronald Weasley", "Hermione Granger"],
//   spells: [],
// }
</code></pre>
<p>This reducer works how we expect at runtime; Harry meets Ron, then he meets Hermione. Let's learn some spells.</p>
<pre><code class="language-typescript">const LearnExpelliarmus: LearnSpell = {
  type: ActionTypes.LearnSpell,
  payload: {spell: &#x27;Expelliarmus&#x27;},
};
const HarryInDuelingClub = reducer(HarryFiveMinutesLater, LearnExpelliarmus);
// {
//   name: "Harry Potter",
//   friends: ["Ronald Weasley", "Hermione Granger"],
//   spells: ["Expelliarmus"],
// }

const LearnExpectoPatronum: LearnSpell = {
  type: ActionTypes.LearnSpell,
  payload: {spell: &#x27;Expecto Patronum&#x27;},
};
const HarryWithLupin = reducer(HarryInDuelingClub, LearnExpectoPatronum);
// {
//   name: "Harry Potter",
//   friends: ["Ronald Weasley", "Hermione Granger"],
//   spells: ["Expelliarmus", "Expecto Patronum"],
// }
</code></pre>
<p>Now Harry learns <em>Expelliarmus </em>and <em>Expecto Patronum!</em></p>
<p>If you want to know more about typing redux, I wrote an article about <a href="http://matthewgerstman.com/redux-code-split-typecheck/">building a typed and code-split</a> redux store.</p>
`.trim(),tags:["Tech","typescript","redux"],banner_img:"/images/blog/ts-tricks-type-safe-reducers/type-safe-reducers-hero.jpg",heroImage:"",wordCount:632},ff={id:3,slug:"functional-programming-fundamentals",title:"Functional Programming Fundamentals",date:"January 21, 2019",excerpt:"In this post, we’ll discuss the fundamentals of Functional Programming and how they apply to modern JavaScript. We’ll also avoid unnecessary jargon like monads and functors and stick to concepts that ",content:`
<p>In the past few years, React and Redux have generated a surge of Functional Programming which we often take for granted. However many of us never got a chance to learn the fundamentals.</p>
<p>In this post, we’ll cover the fundamentals of Functional Programming and how they apply to modern JavaScript. We’ll also avoid unnecessary jargon like monads and functors and stick to concepts that will make our code better.</p>
<p>If you'd like to learn all the unnecessary jargon, check out my other posts, <a href="/writing/what-the-functor">What The Functor</a> and <a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda</a>. I also have an article on <a href="/writing/map-filter-reduce">map, filter, and reduce.</a></p>
<p><em>Note: If you wanna see this post in talk form you can <a href="https://www.youtube.com/watch?v=kkRyjXDpYqg">here</a>.</em></p>
<hr>
<h1 id="none-of-this-is-new">None of this is new</h1>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/functional-programming-fundamentals/fp-concepts-diagram.png" class="kg-image" alt loading="lazy"><figcaption>https://xkcd.com/297/</figcaption></figure>
<p>Before we dive into actual concepts, I want to lead by saying that none of this is new. Functional Programming as existed for over 60 years. <a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)">Lisp</a>, a popular FP programming language, was first developed in 1958.</p>
<p>What is new is the popularity of FP, which has surged in the past few years.</p>
<hr>
<h1 id="when-is-functional-programming-most-useful">When is Functional Programming most useful?</h1>
<p>Before we cover <em>what</em> functional programming is. I think it's helpful to define when we use it.</p>
<p>Functional Programming is most useful when we’re doing 1 to 1 data transformations.</p>
<pre><code class="language-typescript">// This is the data store
type UserMap = {[userId: number]: User}
// This is the functional layer
type convertUserMapToArray: (userMap: UserMap) =&gt; User[];
// This is the presentation layer.
type Component = ({ users: User[] }) =&gt; JSX.Element</code></pre>
<p>In the code snipped above we have some types listed for a data store, a component, and a functional layer in between them.</p>
<p>This functional layer, <code>convertUserMapToArray</code>, converts the data from a format that makes sense to the store to a format that makes sense for the UI. This is what we're going to zero in on today.</p>
<hr>
<h1 id="what-is-functional-programming">What is Functional Programming?</h1>
<p><strong>Functional programming </strong>(often abbreviated FP) is the process of building software by composing <strong>pure functions. </strong>A <strong>pure function </strong>is a function which given the same inputs, always returns the same output, and has no side-effects. <a href="https://jetpacmonkey.github.io/fp-slides/" rel="noreferrer nofollow noopener">[9]</a></p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.dropbox.com/s/wj4p4s1bvvzc9o4/image%20(12).png?raw=1" class="kg-image" alt loading="lazy"><figcaption><a href="https://www.fpcomplete.com/blog/2017/04/pure-functional-programming" rel="noreferrer nofollow noopener">[3]</a></figcaption></figure>
<p>For example, we can trust that 2 + 2 is always 4 and 3 x 3 is always 9.</p>
<hr>
<h1 id="side-effects">Side Effects</h1>
<p>The no side-effects bit is particularly important, because this is what allows us to trust that a function will always behave the same in any environment. This will help with future concepts.</p>
<p>Now side-effects aren't inherently bad, but you should isolate them to parts of your codebase where you can easily identify them.</p>
<p>Let's take a look a some examples of side effects.</p>
<h2 id="mutation">Mutation</h2>
<p>Modifying the argument that’s passed in <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noreferrer nofollow noopener">[1]</a>.</p>
<pre><code class="language-javascript">// Mutates the given array
function pop(arr) {
  return arr.splice(0, 1);
}

const arr = [1,2,3,4];
pop(arr);
console.log(arr); // [2, 3, 4]; </code></pre>
<p>In this example above, we're changing the value of <code>arr</code> at the reference it lives at. As a result, we can't predict what this function will return at any point. What happens when <code>arr</code> runs out of values? </p>
<h2 id="shared-state">Shared State</h2>
<p>Using some form of global state <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noreferrer nofollow noopener">[1]</a>.</p>
<pre><code class="language-javascript">// These have different values every time you call them.
let i = 0;
function increment() {
 return i++;
}

function decrement() {
  return i--;
}</code></pre>
<p>In this example, we can't predict what these functions will return because they depend on some external value. The order of the function calls will matter.</p>
<p>Furthermore what happens if someone else changes the value of <code>i</code>? Do you feel like googling what <code>string++</code> is? </p>
<h2 id="asynchronous-code">Asynchronous Code</h2>
<p>Code that doesn't execute immediately <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noreferrer nofollow noopener">[1]</a>.</p>
<pre><code class="language-javascript">let i = 0;
function incrementAsync(obj) {
  setTimeout(() =&gt; {
    i++;
  }, 0)
}
incrementAsync();
console.log(i); // 0
// later
console.log(i); // 1</code></pre>
<p>This one deserves an extra mention because its a necessity. We have to do some things asynchronously. We have to hit APIs; we have to fetch data.</p>
<p>This brings me back to my earlier point. Side effects aren't inherently bad, but they should be properly isolated to make your code more predictable.</p>
<hr>
<h1 id="example-time">Example Time</h1>
<pre><code class="language-javascript">// This is a pure function
function clone(obj) {
  return {...obj};
}

// This mutates the given object
function killParents(wizard) {
  wizard.parents = "Dead";
  return wizard;
}

// This mutates the given object
function addScar(wizard) {
  wizard.scar = true;
}

const a = {name: "Harry Potter"};
const b = clone(a);
const c = killParents(b);
const d = addScar(c);</code></pre>
<p>Looking at the code above, we would expect it to produce the following:</p>
<pre><code class="language-javascript">// In a pure function world.

console.log(a) // {Name: "Harry Potter"};
console.log(b) // {Name: "Harry Potter"};
console.log(c) // {Name: "Harry Potter", parents: "Dead"};
console.log(d) // {Name: "Harry Potter", scar: true, parents: "Dead"};</code></pre>
<p>Unfortunately, this isn't what we get. This is:</p>
<pre><code class="language-javascript">// Actual results
console.log(a) // {Name: "Harry Potter"};
console.log(b) // {Name: "Harry Potter", scar: true, parents: "Dead"};
console.log(c) // {Name: "Harry Potter", scar: true, parents: "Dead"};
console.log(d) // undefined</code></pre>
<p>What happened?</p>
<p>Well the first function, <code>clone</code> is a pure function and works as expected. It produced a new object at a new reference.</p>
<p><code>killParents</code> is not a pure function. It mutates the given argument and marks the parent as dead. It does however return the object so it <em>appears</em> we're getting a new copy.</p>
<p><code>addScar</code> really doesn't care. It mutates the original object, and then returns nothing, so <code>addScar(c)</code> returns <code>undefined</code> even though it also modifies <code>c</code>.</p>
<p>As a result <code>a</code> is pointing to the original reference, <code>b</code> and <code>c</code> are pointing to the cloned copy (with dead parents and a scar), and <code>d</code> is pointing to nothing.</p>
<hr>
<h1 id="declarative-and-imperative">Declarative and Imperative</h1>
<p><strong>Declarative code describes what it does.</strong></p>
<pre><code class="language-javascript">function ReactComponent({counter}) {
  return &lt;span&gt;{counter}&lt;/span&gt;
}</code></pre>
<h3 id="imperative-code-describes-how-it-does-it-">Imperative code describes how it does it.</h3>
<pre><code class="language-javascript">function UpdateCounter({counter}) {
  document.getElementById('counter').innerHTML(
    \`&lt;span&gt;\${counter}&lt;span&gt;\`
  );
}</code></pre>
<p>Looking at the two code samples above, we can see a stark contrast. The top block is written using React and just says "we want a counter on the page." This code trusts React, the declarative library, to get it right.</p>
<p>The bottom block is using vanilla JS. It explicitly finds a DOM node and updates it. While this is fine for such a simple example this won't scale well. What happens when we want multiple counters in multiple locations? React is ready for that, with vanilla JS we have a lot of work to do.</p>
<p>Now it's worth noting that declarative code will always end up either compiling down to or being processed by something imperative. What do I mean by that? Well <em>something</em> has to do the DOM mutation. In this case that's React. Even with functional languages like Lisp or Haskell they <em>eventually</em> get compiled to imperative machine code.</p>
<h2 id="example">Example</h2>
<h3 id="imperative">Imperative</h3>
<pre><code class="language-javascript">function getFileMapById(files) {
  const fileMap = {};
  for (let i=0; i&lt;files.length; i++) {
    const file = files[i];
    fileMap[file.id] = file;
  }
  return fileMap;
}</code></pre>
<h3 id="declarative">Declarative</h3>
<pre><code class="language-javascript">function getFileMapById(files) {
  return lodash.keyBy(files, 'id');
}</code></pre>
<p>Now these two functions achieve the exact same thing. They take a list of <code>files</code> and return a dictionary of files where the key is <code>file.id</code>.</p>
<p>But the imperative one is sloppier. It's 8 lines of code instead of 3. It also leaves a lot of room for error.</p>
<p>What happens if a file doesn't have an <code>id</code>? What happens if we get our exit clause wrong? And fun fact, there are faster ways to do for loops (they're ugly), but we can trust lodash to do those under the hood.</p>
<hr>
<h1 id="functional-concepts">Functional Concepts</h1>
<p>It's now time to move onto functional concepts. Let's take these in pairs, the first two <strong>separation </strong>and <strong>composition.</strong></p>
<h2 id="separation">Separation</h2>
<blockquote><em>If you try to perform effects and logic at the same time, you may create hidden side effects which cause bugs in the logic. Keep functions small. Do one thing at a time, and do it well. </em><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" rel="noreferrer nofollow noopener"><em>[4]</em></a></blockquote>
<h2 id="composition">Composition</h2>
<blockquote><em>Plan for composition. Write functions whose outputs will naturally work as inputs to many other functions. Keep function signatures as simple as possible. </em><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" rel="noreferrer nofollow noopener"><em>[4]</em></a></blockquote>
<p>I pulled these quotes from an article called <em><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd">The Dao of Immutability</a>. </em>What we're saying here is we want small functions that easily chain together to make larger ones. Let's take a look at an example:</p>
<pre><code class="language-javascript">function sortFilesByName(files) {
  return lodash.sortBy(files, 'name');
}

function getPdfFiles(files) {
  return lodash.filter(files, {extension: PDF});
}

function getFileNames(files) {
  return lodash.map(files, 'name');
}</code></pre>
<p>These three functions are all super simple. They take one argument and do a transformation on that argument. The first function sorts the list of files.</p>
<p>The second function is a <code>filter</code>. &nbsp;<code>filter</code> is an FP term for filtering in, as opposed to filtering out. So this code returning an array of files who's extensions are PDFs.</p>
<p>The last function is just a <code>map</code>. <code>map</code> is another FP term, a 1:1 transformation over a list to a new version of that list. In this case we're looping over the list of files and returning the key <code>name</code> from each of them.</p>
<p>Now we can combine them together:</p>
<pre><code class="language-javascript">const getSortedPDFFileNames = lodash.flow(
  getPdfFiles,
  getFileNames,
  lodash.sortBy
);

// Alternative
const getSortedPdfFileNames = (files) =&gt; (
  lodash.sortBy(
    getFileNames(
      getPdfFiles(files)
    )
  )
);</code></pre>
<p>Now both of these functions are equivalent. They take a list of files, filter for pdfs, get their names, and return a sorted list of file names.</p>
<p><code>lodash.flow</code> does have some optimizations under the hood, but the second syntax might be more readable to you. Do whatever you think is best.</p>
<p>Let's move on to the next set of concepts.</p>
<h2 id="immutability">Immutability</h2>
<blockquote><em>The true constant is change. Mutation hides change. Hidden change manifests chaos. Therefore, the wise embrace history. </em><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" rel="noreferrer nofollow noopener"><em>[4]</em></a></blockquote>
<h2 id="memoization">Memoization</h2>
<blockquote><em>Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. </em><a href="https://en.wikipedia.org/wiki/Memoization" rel="noreferrer nofollow noopener"><em>[5]</em></a></blockquote>
<p>These pair really nicely. Immutability says we're never gonna mutate an argument only return a new one, and memoization allows us to remember outputs. Let's look at an example combining them.</p>
<pre><code class="language-javascript">function killSibling(wizard) {
  return {
    ...wizard,
    numSiblings: wizard.numSiblings - 1,
  };
}
const killSiblingMemoized = lodash.memoize(killSibling);
const ron = { name: "Ron Weasley", siblings: 6 };
const ronAfterFredDies = killSiblingMemoized(ron);
ron === ronAfterFredDies // false, he's a different person now.

const ronAfterFredDiesAgain = killSiblingMemoized(ron);
ronAfterFredDies === ronAfterFredDiesAgain // true</code></pre>
<p>What's going on here? Well we have a function called <code>killSibling</code> (dark I know), that takes a wizard. It copies over the wizard and decrements the number of siblings that wizard has. Please ignore any glaring bugs here, I wanted to keep this simple.</p>
<p>We then pass <code>killSibling</code> to <code>lodash.memoize</code>, this produces a new function called <code>killSiblingMemoized</code>. Now when we call <code>killSiblingMemoized</code> on <code>ron</code>, it returns a brand new object. If we do a strict equality check it returns false. Of course it does, his brother died, he's a different person now.</p>
<p>Because we've memoized this, if we repeat this call to <code>killSiblingMemoized</code> we'll get the exact same version of <code>ron</code> we got after the first call.</p>
<p>We've covered a lot, now let's move onto some advanced topics.</p>
<hr>
<h1 id="higher-order-functions">Higher Order Functions</h1>
<p>In mathematics and computer science, a <strong>higher-order function </strong>is a function that does at least one of the following:</p>
<ul>
<li>takes one or more functions as arguments(i.e.,procedural parameters),</li>
<li>returns a function as its result. <a href="https://en.wikipedia.org/wiki/Higher-order_function" rel="noreferrer nofollow noopener">[6]</a></li>
</ul>
<p>This seems much more intimidating than it actually is. In fact I bet you've written some of these before without realizing it.</p>
<h2 id="function-that-takes-a-function">Function that takes a function</h2>
<pre><code class="language-javascript">fetch('user', {userId: 1}).then((response) =&gt; {
  persistUser(response);
})</code></pre>
<p>These are just <strong>callbacks.</strong> In this case <code>then</code> is the higher order function that takes an anonymous function as its argument.</p>
<h2 id="function-that-returns-a-function">Function that returns a function</h2>
<pre><code class="language-javascript">function counterGenerator() {
  let i = 0;
  return function() {
    console.log(++i);
  }
}

// Usage
const counter = counterGenerator();
counter(); // =&gt; 1
counter(); // =&gt; 2
counter(); // =&gt; 3</code></pre>
<p>Another thing you've probably done before, <strong>closures. </strong>In this case <code>counterGenerator</code> is the higher order function because it returns a function.</p>
<h2 id="function-that-takes-a-function-and-returns-a-function">Function that takes a function and returns a function</h2>
<p>Last, the final form, a function that does both. But you've already seen these.</p>
<pre><code class="language-javascript">const killSiblingMemoized = lodash.memoize(killSibling);

const getSortedPDFFileNames = lodash.flow(
  getPdfFiles,
  getFileNames,
  lodash.sortBy
);</code></pre>
<p>Both <code>memoize</code> and <code>flow</code> were higher order functions that take a function (or several) as arguments and return a new function.</p>
<hr>
<h1 id="currying">Currying</h1>
<blockquote><em>Currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument. </em><a href="https://en.wikipedia.org/wiki/Currying" rel="noreferrer nofollow noopener"><em>[7]</em></a></blockquote>
<p>This seems a little intimidating but I think an example will help.</p>
<pre><code class="language-javascript">function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = lodash.curry(sum);

curriedSum(1,2,3) // 6

const addFive = curriedSum(2,3);
addFive(7) // 12
addFive(8) // 13

const addOne = curriedSum(1)
addOne(2,3) // 6
const addThree = addOne(2);
addThree(3) // 6;
addThree(4) // 7;</code></pre>
<p>We have a function <code>sum</code> which takes arguments <code>a</code>, <code>b</code>, and <code>c</code>. When we pass <code>sum</code> to <code>lodash.curry</code> (a higher order function), it becomes a new function that keeps returning functions until <code>a</code>, <code>b</code>, and <code>c</code> have all been filled.</p>
<p>If we give it arguments <code>1,2,3</code> then it executes immediately and returns 6. If we give it just <code>2,3</code> it returns a new function waiting for one more argument.</p>
<p>This works for all permutations of arguments.</p>
<hr>
<h1 id="partial-application">Partial Application</h1>
<blockquote><em>Partial application (or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity. </em><a href="https://en.wikipedia.org/wiki/Partial_application" rel="noreferrer nofollow noopener"><em>[8]</em></a></blockquote>
<p><em>Note: Arity is just a term for the number of arguments a function takes. <a href="https://github.com/hemanth/functional-programming-jargon" rel="noreferrer nofollow noopener">[2]</a></em></p>
<p>With partial application, we can take a function and bind arguments to it. Let's take a look at an example.</p>
<pre><code class="language-javascript">function learnSpell(spell, wizard) {
  return {
    ...wizard,
    spells: [
      ...wizard.spells,
      spell
    ],
  };
}

const learnExpelliarmus = lodash.partial(learnSpell, "Expelliarmus");
const learnExpectoPatronum = lodash.partial(learnSpell, "Expecto Patronum!");

let harry = {name: "Harry Potter", spells: []};
harry = learnExpelliarmus(harry);
// {name: "Harry Potter", spells: ["Expelliarmus"]}
harry = learnExpectoPatronum(harry);
// {name: "Harry Potter", spells: ["Expelliarmus", "Expecto Patronum"]}</code></pre>
<p>In this case we have a function called <code>learnSpell</code> that takes a <code>spell</code> and a <code>wizard</code>. If we pass these functions to <code>lodash.partial</code> with a spell, it will create a new function that teaches a wizard a predefined spell. In this case we can generate <code>learnExpelliarmus</code> and <code>learnExpectoPatronum</code>.</p>
<p>We actually saw some examples of this earlier when we were talking about composition. </p>
<pre><code class="language-javascript">function sortFilesByName(files) {
  return lodash.sortBy(files, 'name');
}
function getPdfFiles(files) {
  return lodash.filter(files, {extension: PDF});
}
function getFileNames(files) {
  return lodash.map(files, 'name');
}</code></pre>
<p>All of these functions are partially applying an argument to a lodash function. In fact it's functionally equivalent to this block.</p>
<pre><code class="language-javascript">const sortFilesByName = lodash.partialRight(lodash.sortBy, 'name'));
const getPdfFiles = lodash.partialRight(lodash.filter, {extension: PDF}));
const getFileNames = lodash.partialRight(lodash.map, 'name');</code></pre>
<p>Much like with <code>flow</code> you should do what you're comfortable with here. Both methods works well.</p>
<hr>
<h1 id="what-are-we-optimizing-for">What Are We Optimizing For?</h1>
<ol>
<li>Make our code more readable</li>
<li>Make our code easier to reason about</li>
<li>Make our code easier to test</li>
<li>Make our users happier </li>
</ol>
<p>We're not trying to reduce lines of code.</p>
<hr>
<h1 id="thanks">Thanks</h1>
<p>Thanks so much for reading! If you'd like to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
<p>If you'd like to learn all the scary jargon check out my other posts <a href="/writing/what-the-functor">What The Functor</a>, <a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda</a>, and <a href="/writing/map-filter-reduce">Map, Filter, Reduce.</a></p>
<hr>
<h1 id="references">References</h1>
<ol>
<li><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noreferrer nofollow noopener">https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0</a></li>
<li><a href="https://github.com/hemanth/functional-programming-jargon" rel="noreferrer nofollow noopener">https://github.com/hemanth/functional-programming-jargon</a></li>
<li><a href="https://www.fpcomplete.com/blog/2017/04/pure-functional-programming" rel="noreferrer nofollow noopener">https://www.fpcomplete.com/blog/2017/04/pure-functional-programming</a></li>
<li><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" rel="noreferrer nofollow noopener">https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd</a></li>
<li><a href="https://en.wikipedia.org/wiki/Memoization" rel="noreferrer nofollow noopener">https://en.wikipedia.org/wiki/Memoization</a></li>
<li><a href="https://en.wikipedia.org/wiki/Higher-order_function" rel="noreferrer nofollow noopener">https://en.wikipedia.org/wiki/Higher-order_function</a></li>
<li><a href="https://en.wikipedia.org/wiki/Currying" rel="noreferrer nofollow noopener">https://en.wikipedia.org/wiki/Currying</a></li>
<li><a href="https://en.wikipedia.org/wiki/Partial_application" rel="noreferrer nofollow noopener">https://en.wikipedia.org/wiki/Partial_application</a></li>
<li><a href="https://jetpacmonkey.github.io/fp-slides/" rel="noreferrer nofollow noopener">https://jetpacmonkey.github.io/fp-slides/</a></li>
<li><a href="https://xkcd.com/297/" rel="noreferrer nofollow noopener">https://xkcd.com/297/</a></li>
<li><a href="https://xkcd.com/1270/" rel="noreferrer nofollow noopener">https://xkcd.com/1270/</a></li>
<li><a href="https://xkcd.com/1312/" rel="noreferrer nofollow noopener">https://xkcd.com/1312/</a></li>
</ol>
<h1></h1>
`.trim(),tags:["Tech","functional-programming"],banner_img:"/images/blog/functional-programming-fundamentals/functional-programming-hero.jpg",heroImage:"",wordCount:2536},yf={id:1,slug:"redux-code-split-typecheck",title:"Redux with Code-Splitting and Type Checking",date:"January 17, 2019",excerpt:"How do you code-split your store so you’re not serving unnecessary JavaScript on a single page? And while you’re working on code splitting, how do you get it to play nicely with TypeScript so that you",content:`
<h1 id="before-we-get-started">Before We Get Started</h1>
<p>This article assumes a working knowledge of Redux, React, React-Redux, TypeScript, and uses a little bit of Lodash for convenience. If you’re not familiar with those subjects, you might need to do some Googling. You can find the final version of all the code <a href="https://github.com/matthew-gerstman/redux-codesplit-typechecl-example/tree/master" rel="noopener">here</a>. Also, follow me on Twitter <a href="https://twitter.com/matthewgerstman" rel="noopener">@MatthewGerstman.</a></p>
<h1 id="introduction">Introduction</h1>
<p>Redux has become the go-to state management system for React applications. While plenty of material exists about Redux best practices in Single Page Applications (SPAs), there isn’t a lot of material on putting together a store for a large, monolithic application.</p>
<p>What happens when you only need a few reducers on each page, but it could be any permutation of the total number of reducers you support? How do you code-split your store so you’re not serving unnecessary JavaScript on a single page? And while you’re working on code splitting, how do you get it to play nicely with TypeScript so that you can trust what’s going in and coming out of the store?</p>
<h1 id="the-architecture">The Architecture</h1>
<p>Before we dive into code, let’s outline the architecture we’re about to build.</p>
<p><strong>We need to create the store in such a way that we can register reducers asynchronously. </strong>This allows us to async load code associated with those reducers.</p>
<p><strong>We need to type the store in such a way that it knows about all possible reducers we can register. </strong>This allows us to ensure static typing of all components at runtime.</p>
<h1 id="creating-the-store">Creating the Store</h1>
<p>In order to code split, we need to instantiate the store in a way that allows us to register reducers after store creation. We start with the following code:</p>
<pre><code class="language-typescript">// redux-utils/store.ts

import { combineReducers, createStore, Store } from "redux";
import { ReducerMap, StoreShape } from "./types";

let reducerMap: ReducerMap = {};
const store = createStore(combineReducers(reducerMap));

export function getStore() {
  return store;
}

export function registerReducer(newReducers: ReducerMap): Store&lt;StoreShape&gt; {
  reducerMap = { ...reducerMap, ...newReducers };
  // We probably want to validate we're not replacing reducers that already
  // exist here but that exercise is left up to the reader.
  store.replaceReducer(combineReducers(reducerMap));
  return store;
}</code></pre>
<p>What’s going on here? We’re instantiating the store with the file and we’ve also exported two functions. One called <code>getStore</code>, which is simply a wrapper around the store and doesn’t need much further explanation, and <code>registerReducer</code>.</p>
<p><code>registerReducer</code> is the more interesting function. We maintain a map of existing reducers internal to the module and then replace add new ones as they come in. We then call <code><a href="https://redux.js.org/api/store#replaceReducer" rel="noopener">replaceReducer</a></code> on the store and replace it wholesale. <code><a href="https://redux.js.org/api/store#replaceReducer" rel="noopener">replaceReducer</a></code> is smart enough to maintain the state of the reducers that were previously there and fires an <code>INIT</code> action for the new ones to populate their default state.</p>
<p>This is what makes code-splitting possible. We don’t care when the reducer is registered and all of that code can be loaded after the store is created.</p>
<h1 id="type-safety">Type Safety</h1>
<p>Now let’s dig into what makes this type safe. Well, let’s dig into our <code>types.ts</code> file.</p>
<pre><code class="language-typescript">// redux-utils/types.ts

import { MuggleNamespaceShape } from "../data/muggles/types";
import { WizardNamespaceShape } from "../data/wizards/types";
import { Reducer } from "redux";
export const MUGGLE_NAMESPACE_KEY = "MUGGLE_NAMESPACE";
export const WIZARD_NAMESPACE_KEY = "WIZARD_NAMESPACE";

export type FullStoreShape = {
  [MUGGLE_NAMESPACE_KEY]: MuggleNamespaceShape;
  [WIZARD_NAMESPACE_KEY]: WizardNamespaceShape;
};
export type StoreShape = Partial&lt;FullStoreShape&gt;;
export type NamespaceKey = keyof StoreShape;
export type ReducerMap = Partial&lt;
  { [k in NamespaceKey]: Reducer&lt;FullStoreShape[k]&gt; }
&gt;;</code></pre>
<p>You’ll notice we import <code>MuggleNamespaceShape</code> and <code>WizardNamespaceShape</code>from elsewhere in the codebase. This is okay. Because these are type-only imports, most build systems won’t actually bundle them in when building packages. This is where the statically typed code splitting magic happens.</p>
<p>We then export types <code>StoreShape</code> and <code>ReducerMap</code>, which allow us to register all possible types on the actual state object in advance. Because we colocate the namespace keys in the types file, our developers can ensure that there are no key conflicts.</p>
<p>You’ll notice these types are both <code>Partial</code>, so how do we enforce that a reducer is actually registered? Well, we do that in the selector layer.</p>
<h1 id="selectors">Selectors</h1>
<p>Our selector layer is what ensures that we always have the reducers registered that we need. We can do this with a simple helper function.</p>
<pre><code class="language-typescript">// redux-utils/selectors.ts

import { FullStoreShape, NamespaceKey, StoreShape } from "./types";
export function getStateAtNamespaceKey&lt;T extends NamespaceKey&gt;(
  state: StoreShape,
  namespace: T
): FullStoreShape[T] {
  const namespaceState = state[namespace];
  if (!namespaceState) {
    throw new Error(
      \`Attempted to access state for an unregistered namespace at key \${namespace}\`
    );
  }
  // We need to explicitly say this is not undefined because TypeScript doesn't 
  // recognize the thrown error will prevent us from ever getting here.
  return namespaceState!;
}</code></pre>
<p>In short, <code>getStateAtNamespaceKey</code> complains <strong>very loudly </strong>if you attempt to access a namespace that hasn’t been registered yet. This is the only way we should access our data. As long as you call <code>registerReducer</code> in the same part of your tree as your <code><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store" rel="noopener">&lt;Provider /&gt;</a></code> component, your namespace should be registered by the time you get down to a <code><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options]" rel="noopener">connect</a></code>. We’ll elaborate on this in a moment.</p>
<h1 id="writing-actual-product-code">Writing Actual Product Code</h1>
<p>This is is all well and good, but let’s talk about what our product code looks like.</p>
<pre><code class="language-tsx">// wizards.tsx

import * as React from "react";
import { connect, Provider } from "react-redux";
import { getStoreForWizardApp } from "./data/wizards/store";
import { Wizard } from "./data/wizards/types";
import { getWizards } from "./data/wizards/selectors";
export function WizardApp() {
  return (
    &lt;Provider store={getStoreForWizardApp()}&gt;
      &lt;ConnectedWizards /&gt;
    &lt;/Provider&gt;
  );
}
function Wizard({ name, spells, parentsAlive }: Wizard) {
  return (
    &lt;&gt;
      &lt;span&gt;Name: {name}&lt;/span&gt;
      &lt;span&gt;Parents: {parentsAlive ? "Alive" : "Dead"}&lt;/span&gt;
      &lt;span&gt;Learned Spells: {spells.map(spell =&gt; \`\${spell} \`)}&lt;/span&gt;
    &lt;/&gt;
  );
}
type WizardsProps = { wizards: Wizard[] };
function Wizards({ wizards }: WizardsProps) {
  return (
    &lt;&gt;
      {wizards.map(wizardProps =&gt; (
        &lt;Wizard {...wizardProps} /&gt;
      ))}
    &lt;/&gt;
  );
}
const mapStateToProps = state =&gt; ({
  wizards: getWizards(state)
});
const ConnectedWizards = connect&lt;WizardsProps, {}, {}&gt;(mapStateToProps)(
  Wizards
);</code></pre>
<p>The code above is (hopefully) straightforward. We connect to the Redux store using <code>react-redux</code>and use the <code><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store" rel="noopener">&lt;Provider /</a>&gt;</code>and <code><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options" rel="noopener">connect</a></code>component/HOC respectively. We take a list of wizards and render them out to the screen, along with information about what spells they know and the status of their parents. Spoiler: We’re getting to a certain boy wizard with a lightning scar.</p>
<p>The two novel bits of code here are <code>getStoreForWizardApp</code>and <code>getWizards</code>. Let’s dig into them both.</p>
<h2 id="getstoreforwizardapp">getStoreForWizardApp</h2>
<pre><code class="language-typescript">// data/wizards/store.ts

import { getStore, registerReducer } from "../../redux-utils/store";
import { WIZARD_NAMESPACE_KEY } from "../../redux-utils/types";
import { once } from "lodash";
import wizardReducer from "./reducer";
export const getStoreForWizardApp = once(() =&gt; {
  registerReducer({ [WIZARD_NAMESPACE_KEY]: wizardReducer });
  return getStore();
});</code></pre>
<p>In the above code, you saw what we call the <code>registerReducer</code>and <code>getStore</code>functions that we declared before. We pass <code>registerReducer</code>a map with the key for the Wizard namespace and the Wizard reducer. Another important note: if we try to pass the wrong key or even the wrong reducer to <code>registerReducer</code>, type checking will complain about it.</p>
<p>One last but crucial bit. We wrap <code>getStoreForWizardApp</code> in <code><a href="https://lodash.com/docs/4.17.10#once" rel="noopener">lodash.once</a></code>. This ensures that we only register the reducer once and then always return the same instance of the store. While this isn’t <em>strictly</em>required, <code>replaceReducer</code>is an expensive noop, if called repeatedly.</p>
<h2 id="getwizards">getWizards</h2>
<pre><code class="language-typescript">// data/wizards/selectors.ts

import { getStateAtNamespaceKey } from "../../redux-utils/selectors";
import { StoreShape, WIZARD_NAMESPACE_KEY } from "../../redux-utils/types";
import { mapValues } from "lodash";
import { Wizard } from "./types";

const getWizards = (state: StoreShape) =&gt; (
  getStateAtNamespaceKey(state, WIZARD_NAMESPACE_KEY)
);</code></pre>
<p>This one is much more straightforward. We call <code>getStateAtNamespaceKey</code>and spit out the wizards to the user.</p>
<h2 id="actions">Actions</h2>
<p>Sweet! We’ve set up the store, registered our reducer, and even built some components. Now let’s talk about how we can strongly type our actions. We do this in both the action layer and the reducer layer.</p>
<pre><code class="language-typescript">// data/wizards/actions.ts

import { AnyAction } from "redux";
export type Wizard = {
  name: string;
  parentsAlive: boolean;
  spells: string[];
};
export const enum WizardActionTypes {
  LearnSpell = "WIZARD/LEARN_SPELL",
  KillParents = "WIZARD/KILL_PARENTS"
}
export type WizardNamespaceShape = {
  [id: string]: Wizard;
};
export interface LearnSpellAction extends AnyAction {
  type: WizardActionTypes.LearnSpell;
  payload: { id: string; spell: string };
}
export interface KillParentsAction extends AnyAction {
  type: WizardActionTypes.KillParents;
  payload: { id: string };
}
export type WizardAction = LearnSpellAction | KillParentsAction;</code></pre>
<p>You’ll notice that we have two action types: <code>LearnSpellAction</code>and <code>KillParentsAction</code>. These actions each have a strongly-typed payload and their type is a predetermined string enum. We also export <code>WizardAction</code>, which is useful in our reducer.</p>
<pre><code class="language-typescript">// data/wizards/reducer.ts

import { WizardAction, WizardActionTypes, WizardNamespaceShape } from "./types";
const defaultState: WizardNamespaceShape = {
  harryPotter: {
    name: "Harry Potter",
    parentsAlive: false,
    spells: []
  }
};
export default function reducer(
  state: WizardNamespaceShape,
  action: WizardAction
) {
  switch (action.type) {
    case WizardActionTypes.KillParents: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          parentsAlive: false
        }
      };
    }
    case WizardActionTypes.LearnSpell: {
      const { id, spell } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          spells: [...state[id].spells, spell]
        }
      };
    }
    default: {
      return state;
    }
  }
}</code></pre>
<p>This is one of those occasions where TypeScript is truly brilliant. Our given action type is any of the <code>WizardActionTypes</code>. Because each of them has their own defined <code>type</code>property, our switch statement will actually strongly type <code>action.payload</code>after we determine its type. If we were to put any invalid code here, TypeScript would complain.</p>
<h2 id="store-hydration">Store Hydration</h2>
<p>The last question to answer here is: “How do we get initial data into the store?” That’s done through a process called store hydration. What this means is that we’re going to dispatch an action that sets the state. Let’s take a look at this code.</p>
<p>First, we update our <code>actions.ts</code>file as shown.</p>
<pre><code class="language-typescript">export const enum WizardActionTypes {
  Hydrate = "WIZARD/HYDRATE",
  LearnSpell = "WIZARD/LEARN_SPELL",
  KillParents = "WIZARD/KILL_PARENTS"
}

export interface HydrateWizardsAction extends AnyAction {
  type: WizardActionTypes.Hydrate;
  payload: WizardNamespaceShape;
}
export type WizardAction =
  | HydrateWizardsAction
  | LearnSpellAction
  | KillParentsAction;
</code></pre>
<p>Second, we add another switch statement to our reducer.</p>
<pre><code class="language-typescript">switch (action.type) {
  case WizardActionTypes.Hydrate: {
    return {
      ...action.payload
    };
  }
  case WizardActionTypes.KillParents: {</code></pre>
<p>Third, we need to make an action creator.</p>
<pre><code class="language-typescript">// data/wizards/actions.ts

import { WizardActionTypes, WizardNamespaceShape } from "./types";

export function hydrateWizardNamespace(initialData: WizardNamespaceShape) {
  return {
    type: WizardActionTypes.Hydrate,
    payload: initialData
  };
}
// LearnSpell and KillParents are exercises left up to the reader</code></pre>
<p>Finally, we dispatch the hydration action from our store creation function.</p>
<pre><code class="language-typescript">import { getStore, registerReducer } from "../../redux-utils/store";
import { WIZARD_NAMESPACE_KEY } from "../../redux-utils/types";
import { once } from "lodash";
import wizardReducer from "./reducer";
import { WizardNamespaceShape } from "./types";
import { hydrateWizardNamespace } from "./actions";
export const getStoreForWizardApp = once(
  (initialData?: WizardNamespaceShape) =&gt; {
    registerReducer({ [WIZARD_NAMESPACE_KEY]: wizardReducer });
    const store = getStore();
    if (initialData) {
      store.dispatch(hydrateWizardNamespace(initialData));
    }
    return store;
  }
);
</code></pre>
<p>The <code><a href="https://lodash.com/docs/4.17.10#once" rel="noopener">lodash.once</a></code>is now extra useful because we will only ever populate the store once.</p>
<h1 id="conclusions">Conclusions</h1>
<p>I hope this article helped you get started with Redux. At compile time, our store is strongly typed and has knowledge of the entire system. At runtime, we can code split however we’d like.</p>
<h1 id="glossary-of-functions">Glossary of Functions</h1>
<p>This is a list of the core functions and types and the roles they serve in this architecture.</p>
<h2 id="types">Types</h2>
<ul>
<li><strong>NamespaceKey </strong>— A key for a reducer or namespace within the state object.</li>
<li><strong>ReducerMap </strong>— Object of all possible keys we can have on our store and their matching reducers. Is declared as a partial because it is not guaranteed that any given namespace is on the store.</li>
<li><strong>StoreShape </strong>— Object of all possible keys we can have on our store and their state shapes. Is declared as a partial because it is not guaranteed that any given namespace is on the store.</li>
</ul>
<h2 id="functions">Functions</h2>
<ul>
<li><strong>hydrateWizardNamespace </strong>— Product layer function that provides initial state for the wizard namespace after the reducer is registered.</li>
<li><strong>getStoreForWizardApp </strong>— Product layer function that registers the “wizard” namespace within the store.</li>
<li><strong>getStateAtNamespaceKey </strong>— Function that grabs a namespace from the state object and fails quickly if that namespace is unregistered. Used to make our selectors type safe.</li>
<li><strong>registerReducer</strong> — Function that injects a reducer into the store after page load. Ensures that we only register known reducers at the typing layer.</li>
</ul>
<h1 id="thanks">Thanks</h1>
<p>Publishing an article like this takes a village. I want thank a whole bunch of people for their contributions.</p>
<p><a href="https://twitter.com/acemarke" rel="noopener">@acemarke</a> — For maintaining Redux and inspiring me to write this article.</p>
<p><a href="https://twitter.com/brianlink" rel="noopener">@brianlink</a> — Typo patrol.</p>
<p><a href="https://twitter.com/donavon" rel="noopener">@donavon</a> — For adding and removing commas like a boss.</p>
<p><a href="https://twitter.com/goingglacial" rel="noopener">@goingglacial</a> — For a thorough code review before merging the source this is based on.</p>
<p><a href="https://twitter.com/hswolff" rel="noopener">@hswolff</a> — For teaching me Redux in the first place.</p>
<p><a href="https://twitter.com/jetpacmonkey" rel="noopener">@jetpacmonkey</a> — For finding a bug in this article.</p>
<p><a href="https://twitter.com/peterpme" rel="noopener">@peterpme</a> — For code reviewing the article.</p>
<p><a href="https://twitter.com/swyx" rel="noopener">@swyx</a> — For providing technical feedback on this article.</p>
<p>Andrew H — For article feedback</p>
<p>Justin K — For copy editing and fixing my atrocious grammar.</p>
<p>Matt S — For relevant life advice.</p>
<p>Yoeun P — For pair programming with me when I wrote the source this is based on.</p>
<h1></h1>
`.trim(),tags:["Tech","redux","typescript","code-splitting"],banner_img:"/images/blog/hero-mountain-lake.jpg",wordCount:2127},wf={id:14,slug:"hello-there",title:"Hello There",date:"January 15, 2019",excerpt:"I have a habit of rambling on the internet and thought it'd be nice to consolidate all these ramblings into one place.",content:`
<p>My name is Matthew Gerstman, I'm a software engineer with a bunch of hobbies. What hobbies you ask? Well, I see a lot of theater, give tech talks regularly, and travel so much I'm writing this from an airplane. I'm also a Harry Potter enthusiast, long time Green Day listener, and I adore New York City.</p>
<p>I have a habit of rambling on the internet and thought it'd be nice to consolidate all these ramblings into one place. </p>
<h1 id="theater">Theater</h1>
<p>Last year I saw about 50 shows. On Broadway, off Broadway, everything from tiny one-person shows to Hamilton in London. If the show has something that looks like a Playbill I'll probably get around to seeing it. In fact here's a gif of everything I have that looks like a Playbill from 2018.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/hello-there/hello-there-kenobi.gif" class="kg-image" alt loading="lazy"><figcaption>For those wondering, I use this <a href="https://amzn.to/2DgdXok">playbill binder</a> with <a href="https://amzn.to/2suwkzL">these sheets</a>.</figcaption></figure>
<p>I'm hoping to do reviews of the shows I see on here, and if a miracle occurs, get asked to write them.</p>
<h1 id="tech">Tech</h1>
<p>By day I'm a software engineer at Dropbox. Now would be a good time to note opinions on this blog are mine, not theirs. I also spend a lot of time in the greater JavaScript community.</p>
<p>I'm hella active on Twitter and enjoy external validation quite a bit. Please follow me <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman. </a></p>
<figure class="kg-card kg-embed-card">
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">This guy says follow me on Twitter. <a href="https://twitter.com/ken_wheeler?ref_src=twsrc%5Etfw">@ken_wheeler</a> <a href="https://t.co/lLX3nAw2M6">pic.twitter.com/lLX3nAw2M6</a></p>
&mdash; Matthew Gerstman (Slytherin) (@MatthewGerstman) <a href="https://twitter.com/MatthewGerstman/status/1075207374552662016?ref_src=twsrc%5Etfw">December 19, 2018</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>
</figure>
<p>I also give tech talks on everything ranging from <a href="https://www.youtube.com/watch?v=m1XdasrstCc&amp;t=2s">salary negotiation</a> to <a href="https://www.youtube.com/watch?v=kkRyjXDpYqg&amp;t=534s">functional programming</a>. Last year I got the opportunity to speak at <a href="https://www.youtube.com/watch?v=Pjc1AnBLG8c">ReactNext in Tel Aviv</a> and this summer you can catch me at React Norway.</p>
<p>One more thing! I'm a co-host on the popular podcast <a href="https://theconsolelog.com">The Console Log!</a> Every week we talk about the latest in the JavaScript world and make some pretty great puns (if I do say so myself).</p>
<h1 id="travel">Travel</h1>
<p>I imagine I'll blog the least about this but Theater, Tech, and Travel sounds much better with the third T. Or maybe this will be the unexpected star of the blog. Anything is possible on the internet!</p>
<p>I get on an airplane about 15 times a year and go somewhere. Most of the time its San Francisco (work) or Florida (family), but I'm known to pick random spots in the US. Once or twice a year I feel adventurous and hop over the Atlantic or Pacific. This year it might be more.</p>
<p>Being on a plane inspired me to write this blog so really it's earned this mention.</p>
<h1 id="harry-potter">Harry Potter</h1>
<p>Harry Potter has had a profound impact on my life. So much that I've been sitting on a very personal letter to JK Rowling I've never had the courage to send. One day I'll get to it.</p>
<p>Aside from that I collect copies of the series, I have about 90 books these days. I've also seen <a href="https://amzn.to/2suNvRI">Puffs</a> 10ish times, and even <em>liked</em> Cursed Child when I saw it on stage. MuggleNet is a long standing member of my bookmarks bar and I find nothing more soothing than the voice of Jim Dale reading the series.</p>
<p>Here's a picture of me at Hogwarts in Japan.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/hello-there/matthew-speaking-1.jpg" class="kg-image" alt loading="lazy"></figure>
<h1 id="green-day">Green Day</h1>
<p>When I was eight years old I decided Green Day was going to be my favorite band. I'm very good at keeping my commitments. 20 years later and nothing makes me happier than hearing Green Day when I'm not expecting it.</p>
<p>I actually love music as a whole though. My record collection is around 250 records now, and my day to day listening is mostly <a href="https://www.amazon.com/Frank-Turner/e/B001LHXD5K/digital/ref=ntt_mp3_rdr?_encoding=UTF8&amp;amp;sn=d&amp;_encoding=UTF8&amp;tag=mtg06-20&amp;linkCode=ur2&amp;linkId=754e625d523c4b3cbad801b972e21d7e&amp;camp=1789&amp;creative=9325">Frank Turner</a>, <a href="https://www.amazon.com/Taylor-Swift/e/B0017PE36O/digital/ref=ntt_mp3_rdr?_encoding=UTF8&amp;amp;sn=d&amp;_encoding=UTF8&amp;tag=mtg06-20&amp;linkCode=ur2&amp;linkId=44320b27d000550fcda6add6243d1363&amp;camp=1789&amp;creative=9325">Taylor Swift</a>, and showtunes.</p>
<p>Last year I met Billie Joe Armstrong for the first time; we made extremely awkward small talk.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/hello-there/matthew-speaking-2.jpg" class="kg-image" alt loading="lazy"></figure>
<p>Surprisingly less awkward, dancing on stage with <a href="https://www.amazon.com/Frank-Turner/e/B001LHXD5K/digital/ref=ntt_mp3_rdr?_encoding=UTF8&amp;amp;sn=d&amp;_encoding=UTF8&amp;tag=mtg06-20&amp;linkCode=ur2&amp;linkId=754e625d523c4b3cbad801b972e21d7e&amp;camp=1789&amp;creative=9325">Frank Turner.</a></p>
<figure class="kg-card kg-embed-card"><iframe width="459" height="344" src="https://www.youtube.com/embed/HlLkJ_YDFkU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>
<h1 id="new-york">New York</h1>
<p>Finally, I'd be remise not to mention that I adore New York City. I moved here in December of 2015 and I immediately realized I was home. I'm never moving, please don't ask me to consider it.</p>
<h1 id="thanks-">Thanks!</h1>
<p>I'm shocked anyone made it this far in a self-indulgent blog post where I talk about all the things I love, but thanks for reading. I hope to start blogging regularly about all the things I mentioned above and we'll see what comes of it. ‌‌</p>
`.trim(),tags:["Tech","Theater","Travel"],banner_img:"/images/blog/hello-there/bay-bridge-sf.jpg",heroImage:"",wordCount:708},vf={id:18,slug:"es-everything",title:"ES-Everything: an ECMA Explainer",date:"January 06, 2020",excerpt:`Whats ES6? What about ESNext? TC39? ECMA? Transpilers? 

There's an entire ecosystem around shipping new-ish JavaScript to older browsers and how we decide what features get added to JavaScript in the`,content:`
<p>You've done it, you've built your first web application. It does everything you expect. You've tested it rigorously. It works everywhere, your Macbook, your iPhone, your friend's android. You're so proud of yourself, you send it to your parents; they tell you it's just a blank page.</p>
<p>You poke around and realize they're still using that Dell desktop they bought in 2006. It's running Windows 7. They're using Internet Explorer 10. Your web-app doesn't work on this machine.</p>
<p>So you Google how to make your app work in IE 10, or 11, or whatever. You're quickly flooded with acronyms and terms you've never heard before ES5, ES6, ESNext, ES2020, TC39, ECMA. What's a transpiler? People are debating about polyfills and ponyfills; is there a difference?</p>
<p>If you're overwhelmed, that's okay, it's a lot. This article will attempt to cover the entire ecosystem around shipping new-ish JavaScript to older browsers and how the community decides what features get added to JavaScript in the first place; let's dive in.</p>
<h1 id="let-s-talk-about-ecma">Let's Talk About ECMA</h1>
<p>ECMA is the European Computer Manufacturers Association. They have many committees that handle many things. One of these committees is TC39 or Technical Committee 39. They maintain a specification, or spec, called ECMAScript. Whenever you hear ES5, ES6, or ESAnything, the ES refers to ECMAScript.</p>
<p>ECMAScript is the spec which JavaScript is built upon. It's a formal in-writing agreement of how JavaScript should work. Each browser has their own implementation of JavaScript but they all conform to the same spec (or they do their best). This is why your code may run slightly differently in Safari or Firefox or Chrome. The browser vendors are implementing an engine that takes your JavaScript and runs it on the machine.</p>
<h2 id="es5-es6-esnext">ES5, ES6, ESNext</h2>
<p>Now, this underlying spec is constantly changing. JavaScript gets new features and browsers evolve. In 2009, ES5 was standardized across browsers. This was the largest release for a long time. If you've ever read <a href="https://amzn.to/2MWOggZ">JavaScript: The Good Parts</a> it was based on ES5. </p>
<p>It wasn't until 2015 that ES6 was released with major changes to the language. Some of the bigger features in ES6 included Promises, Arrow Functions, and Classes.</p>
<p>ES6 was a massive release. It was so big, and took so long, that TC39 decided to stop numbering ECMAScript altogether. At this point they decided to rebrand ES6 as ES2015 and brand all future versions by year. Examples include ES2016, ES2017, etc.</p>
<p>They also introduced the concept of ESNext, a living breathing version of the latest JavaScript. ESNext includes all the features that have been formally agreed upon by the committee.</p>
<h3 id="a-note-on-es6">A Note On ES6</h3>
<p>You may be thinking: I thought ES6 was the latest version of JavaScript. This is a misnomer. For a number of reasons, people often refer to anything after ES5 as ES6. This is mostly due to the fact that ES6 was a very large release, and the last one to have a simple version number.</p>
<p>If you hear someone say ES6, they likely mean ESNext.</p>
<h2 id="tc39">TC39</h2>
<p>Technical Committee 39 meet semi-regularly, usually on the West Coast of the United States, but sometimes elsewhere. You can see all their meeting agendas <a href="https://github.com/tc39/agendas">here</a>. They're made up of individuals from major tech companies who are members of ECMA. For most large companies, for example Google or Facebook, it costs about $70,000 for membership. There are significant discounts for very small or non-profit companies. You can see the full list of members <a href="https://www.ecma-international.org/memento/members.htm">here</a>.</p>
<h2 id="new-javascript-features">New JavaScript Features</h2>
<p>Anybody can submit a proposal for a new JavaScript feature, but every proposal eventually needs a "champion" from the committee in order to be adopted. Proposals are submitted by opening a pull request on the <a href="https://github.com/tc39/proposals">proposals repo</a>.</p>
<p>Features go through stages from 0 to 4. At the end of the year, all features in Stage 4 are considered in that year's version of ECMAScript. You can see the full list of finished proposals <a href="https://github.com/tc39/proposals/blob/master/finished-proposals.md">here</a>.</p>
<h3 id="stage-0-strawperson">Stage 0: Strawperson</h3>
<p>These are strawperson proposals. This is the idea stage. The only requirement to get to Stage 0 is the initial PR.</p>
<h3 id="stage-1-proposal">Stage 1: Proposal</h3>
<p>This is the stage where the committee agrees they will spend time discussing on the feature. They assign a champion to the proposal, determine the high level API, and potentially implement a demo. It is expected that a feature will spend a good chunk of time being worked on in Stage 1 before reaching Stage 2.</p>
<h3 id="stage-2-draft">Stage 2: Draft</h3>
<p>At this point, a there should be a formal specification for the feature. It may still have lots of TODOs and room for improvement, but it's mostly there. If a significant issue is discovered, the feature may have to go back to Stage 1.</p>
<h3 id="stage-3-candidate">Stage 3: Candidate</h3>
<p>This is when the feature is mostly complete. The committee agrees that they are unable to find any issues until someone attempts to implement the feature. If a browser vendor attempts to implement the feature and finds an issue, the feature may go back to Stage 2.</p>
<h3 id="stage-4-finished">Stage 4: Finished</h3>
<p>A feature is considered done when it's been implemented in not one, but two different browsers. For example, if a feature becomes stable in both Firefox and Chrome, it's considered finished. The committee will then merge in a pull request to the ECMAScript spec.</p>
<p>The full ECMAScript spec is available <a href="https://tc39.es/ecma262/">here</a>.</p>
<h1 id="running-your-code">Running Your Code</h1>
<p>We often want to use the latest features in our code, but older browsers won't support them. To do this, we use transpilers and polyfills.</p>
<h2 id="transpilers">Transpilers</h2>
<p>A transpiler is a type of compiler that takes source code written in a high level language and produces equivalent source code in another high level language. This is in contrast to a compiler, which takes source code written in a high level language and compiles it to a low level language like assembly.</p>
<p>Transpilers can also be used to convert from one version of a language to another one. This is how we can write JavaScript using the newest features but still execute our code in browsers that don't support them natively.</p>
<p>For example we can compile an arrow function to a traditional one.</p>
<pre><code class="language-javascript">const func = () =&gt; {
  console.log('foo');
}

const func = function () {
  console.log('foo');
}
</code></pre>
<h3 id="babel">Babel</h3>
<p>One of the most popular transpilers is <a href="https://babeljs.io">Babel</a>. Babel is the go-to test environment for early JavaScript features. It does this by implementing a rich plugin architecture that allows developers to test syntax while it is still in it's earliest stages.</p>
<h3 id="typescript">TypeScript</h3>
<p>TypeScript goes a step further and adds type-checking to JavaScript. As part of this, it offers a built in transpiler to build your ESNext code for older browsers. While Babel has the ecosystem to support Stage 2 and below features, Typescript does not.</p>
<p>Sometimes developers will chose to use both so they can get type-checking and the latest features.</p>
<h3 id="targets">Targets</h3>
<p>When building our code we'll pick a target version of JavaScript. This is most commonly ES5 however we could compile to any arbitrary version of the ECMAScript spec. The tradeoff is that older targets generate more source code, but newer targets will run in fewer browsers.</p>
<p>The reason we often want to generate less source is performance. Fewer bytes means less to send over the network, less to parse, and less to execute.</p>
<h2 id="polyfills">Polyfills</h2>
<p>Transpiling is enough for syntax changes, but what about new functions and classes? That's where polyfills come in. A polyfill is the implementation of a newer feature written in an older version of ES. The polyfill usually check if the browser has it's own version of the feature and if not inject it.</p>
<p>For example a fetch polyfill might look like this:</p>
<pre><code class="language-javascript">if (window.fetch === undefined) {
  window.fetch = function() {
   // Implementation of fetch here
  }
}
</code></pre>
<p>Babel and Typescript will support a configuration to automatically include any necessary polyfills in your source code.</p>
<p>Under the hood, most most polyfills rely on a project called <a href="https://github.com/zloirock/core-js">core-js</a>.</p>
<h3 id="ponyfill">Ponyfill</h3>
<p>While polyfills automatically inject an implementation of the feature, ponyfills will treat them as any other dependency. There are a few advantages to this. Ponyfills don't polute the global scope. In addition, the implementation of a feature may vary between browsers and the polyfill. This allows engineers to use a consistent implementation of a feature.</p>
<p>For example a fetch ponyfill might look like this:</p>
<pre><code class="language-javascript">const fetch = window.fetch || require('fetch-ponyfill');
</code></pre>
<p>It is commonly debated which approach is better. I'll leave that exercise up to the reader.</p>
<h2 id="where-you-run-your-code-matters">Where You Run Your Code Matters</h2>
<p>When deciding what version of ES to target and what polyfills to include, it's important to consider where your code is running.</p>
<p>We often focus on which browsers and which versions of those browsers we support, but JavaScript can run many places. For example, if you're building an Electron application, you may not need to transpile/polyfill at all. The same thing applies to node applications. If you're building for one specific environment, you only need to worry about how your code runs in that environment.</p>
<h1 id="thanks">Thanks</h1>
<p>I hope this post was useful! Follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a> for more content like this.</p>
<h1 id="references">References</h1>
<ul>
<li><a href="https://www.ecma-international.org/memento/tc39-m.htm">https://www.ecma-international.org/memento/tc39-m.htm</a></li>
<li><a href="https://github.com/tc39/proposals/blob/master/finished-proposals.md">https://github.com/tc39/proposals/blob/master/finished-proposals.md</a></li>
<li><a href="https://en.wikipedia.org/wiki/ECMAScript#ES2019">https://en.wikipedia.org/wiki/ECMAScript</a></li>
<li><a href="https://tc39.es/process-document/">https://tc39.es/process-document/</a></li>
<li><a href="https://en.wikipedia.org/wiki/Source-to-source_compiler">https://en.wikipedia.org/wiki/Source-to-source_compiler</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Polyfill">https://developer.mozilla.org/en-US/docs/Glossary/Polyfill</a></li>
</ul>
`.trim(),tags:["javascript","tc39","ecmascript","Tech"],banner_img:"/images/blog/hero-mountain-sunset.jpg",wordCount:1523},bf={id:20,slug:"all-in-on-homekit",title:"All in on HomeKit",date:"January 04, 2022",excerpt:`I've shared a lot of pictures of my apartment, but I haven't spent a whole lot of time talking about how automated this place is. I put a lot of work into automating it and thought I'd do a writeup.

`,content:`
<p>I've shared a lot of pictures of my apartment, but I haven't spent a whole lot of time talking about how automated this place is. I put a lot of work into automating it and thought I'd do a writeup. Also all of the amazon links are affiliate links so I might make a dollar if you buy something.</p>
<p>I'm an Apple Enthusiast and I consistently opt in to whatever they provide in their ecosystem. We're up to two HomePod Classics, four HomePod Minis, multiple Macs, and several dozen iPods. Also the latest iPhone, iPad Pro, and the Apple Watch.</p>
<p>To put simply, if Apple has a product category, I've opted in. It's no surprise I went with HomeKit for my home operating system. HomeKit presents different challenges from the Alexa and Google ecosystems. For example, HomeKit requires developers register with Apple and meet certain hardware requirements on their products. As a result there are significantly fewer accessories that work with HomeKit. I do however find they generally perform better than non-HomeKit equivalents I've set up in other homes.</p>
<h2 id="layout">Layout</h2>
<p>We've got three main rooms in the apartment: The Office (or Guest Room), The Living Room, and The Bedroom. The bulk of the equipment is in The Office, so we'll start there.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/floorplan-markup.jpg" class="kg-image" alt loading="lazy" width="775" height="595"><figcaption><em>Marked up floorplan I used when planning.</em></figcaption></figure>
<h1 id="the-office">The Office</h1>
<p>The Office or The Guest Room, is where I spend the bulk of my day working from home. I picked green because it's a color that helps me stay awake and focus. Also it goes nicely with plants.</p>
<p>My work machine is a 2020 16" intel MacBook, a <a href="https://amzn.to/3EOlw2c">Dell 27" monitor</a>, and a <a href="https://amzn.to/337e992">Dell 24" monitor</a> vertically oriented. I also have my personal iMac which is a plex server for the apartment. Behind the iMac I use a <a href="https://amzn.to/3zq4HJK">variety</a> of <a href="https://amzn.to/3HE2a1k">cable management</a> boxes to hide the wires and a pair of <a href="https://amzn.to/3eOib8P">Philips Hue Play Bars</a> and <a href="https://amzn.to/3ztY9dk">Philips Hue Blooms</a> for lighting. Below is what it looks like on an average day.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/office-doorway.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Office Doorway</figcaption></figure>
<p>There's a pair of HomePod Minis as a studio pair I can use with either of the Macs. I also use my Airpods Max while working and for conference calls. </p>
<p>Behind the closet I've got a FreeNas, networking equipment, and hubs for the hue lights, shades, and overhead lights. I recently added a smart power switch so I can power cycle these from my phone. </p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/server-closet.jpeg" class="kg-image" alt loading="lazy" width="2000" height="2667"><figcaption>Server Closet</figcaption></figure>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/office-bed-bookshelf.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Office - Bed and Bookshelf</figcaption></figure>
<p>This room has a few lamps, most notably the <a href="https://amzn.to/3GbaPbD">hydra lamp</a>, and the <a href="https://amzn.to/3eSkUOA">hotel style usb lamp</a>. I also have a <a href="https://amzn.to/3mVrwQu">charging station</a> at the bed for guests. The various lamps in the room are all <a href="https://amzn.to/3t1W7Qe">Philips Hue White bulbs</a> with <a href="https://amzn.to/3pVRvcG">VOCOLinc smart plugs</a> for the bookshelf lights and lava lamp. </p>
<h2 id="networking">Networking</h2>
<p>The apartment network is powered by a Ubiquity Dream Machine, a ton of <a href="https://amzn.to/3F7jjzb">UniFi switches</a>, and a few <a href="https://amzn.to/3eVBvRi">WiFi 6 access points</a>. The Dream Machine lives behind the iMac with the bulk of the switches in the server closet. I also have a <a href="https://amzn.to/3mVla3A">Raspberry Pi</a> running <a href="https://pi-hole.net">Pi-hole</a> as a DNS level ad-blocker.</p>
<p>I drilled a small hole in the walls against the Living Room and Bedroom to send an ethernet cable to the other room.</p>
<h1 id="the-living-room">The Living Room</h1>
<p>The Living Room is where I watch TV with the cats or hangout with friends I'm entertaining. <a href="https://amzn.to/3mRqtBd">AppleTV</a> was a no-brainer. The display is a <a href="https://amzn.to/3JKwc5t">LG GX65 OLED</a>. Theres a <a href="https://amzn.to/3JH08zz">Philips Hue Gradient Strip</a> along with <a href="https://amzn.to/3qIxSUu">two Play Bar lights</a> synced with the <a href="https://amzn.to/3pSpZws">Hue Play Sync Box</a>.</p>
<p>This is hooked up to a <a href="https://amzn.to/3pQ0j3z">Sonos Arc</a>, Two Rear <a href="https://amzn.to/3EUDxMl">Sonos One SLs</a>, and a <a href="https://amzn.to/3zr4PIT">Sonos Sub</a>. Each of these is connected via ethernet using wires running under and behind the furniture. I use these <a href="https://amzn.to/3pU8UCh">cord protectors</a> to keep the cables neat and protected from the cats. I have <a href="https://amzn.to/3r7548z">this charging station</a> on the end table, along with chargers next to the AC unit for on-couch charging.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/living-room.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Living Room</figcaption></figure>
<h2 id="lighting">Lighting</h2>
<p>Separate from the television lighting system, every light in the apartment is smart. </p>
<p>Most of the Living Room bulbs are <a href="https://amzn.to/3t1W7Qe">Philips Hue White bulbs</a>, however the <a href="https://amzn.to/32ZhBSU">couch lamps</a> are using <a href="https://amzn.to/3pSLXPS">Philips Hue Color bulbs</a> for fun scenes. I tried syncing these with the TV but it ended up being more annoying than fun.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/living-room-behind-couch.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Living Room - Behind the couch</figcaption></figure>
<p>In the dining room I have this <a href="https://amzn.to/334npKL">larger lamp</a> along with the three bulb unit I got at a local hardware store. The overhead lights are using <a href="https://amzn.to/3JBbDsl">Caseta Lutron</a> switches. The water fountain for the cats is hooked up to a <a href="https://amzn.to/3nimFJB">VOCOLinc smart plug</a> so I can turn it on/off with the lights.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/dining-room.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Dining Room</figcaption></figure>
<h1 id="kitchen">Kitchen</h1>
<p>The kitchen has a surprising amount of tech packed into it. Under the cabinets are <a href="https://amzn.to/3EPLsdD">Philips Hue lightstrips</a> that can change color. I mostly use these to light the countertops. I attempted to use these for the office bookshelf but it was a nightmare splicing them and I went with a cheaper IKEA solution. There's a HomePod mini in the kitchen that I use mostly for siri but occasionally for music. </p>
<p>I also have a <a href="https://amzn.to/31r0J77">GE Opal ice maker</a> that I adore. It's a nightmare to clean though.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/kitchen.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Kitchen</figcaption></figure>
<h1 id="the-entryway">The Entryway</h1>
<p>The first thing you see when you walk into the apartment is a television hooked up to a raspberry pi. I use <a href="https://dakboard.com/site">DakboardOS</a> to power a display that shows me my daily calendar along with updating news. This is exceptionally useful when I'm pacing between my office and the kitchen during the work day.</p>
<p>Most of the panels were available out of the box, but I had to roll my own <a href="http://github.com/matthew-gerstman/tweetonescreen">tweet visualizer</a> in the lower left hand corner.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/entryway-dakboard.jpeg" class="kg-image" alt loading="lazy" width="2000" height="2667"><figcaption>Entryway Dakboard</figcaption></figure>
<p>I also have <a href="https://amzn.to/3pWhdxm">Eufy Pan and Tilt cameras</a> here and in every other room so I can watch the cats or check on the apartment when I'm out of town. </p>
<h2 id="the-bedroom">The Bedroom</h2>
<p>In the the bedroom I took things up a notch with <a href="https://amzn.to/3324wYS">White Ambiance</a> bulbs. I like these because the temperature is warmer at night and easier on the eyes. The television is connected to an Apple TV with two HomePod Classics in a stereo pair. I connected my vintage turntable to the Homepods with <a href="https://amzn.to/3zshGuH">this adapter</a>, a <a href="https://amzn.to/3pSkOfY">Behringer USB preamp</a> and <a href="https://www.airchordapp.com">AirChord</a> running on my old iPad.</p>
<p>There are a pair of <a href="https://amzn.to/3sYnMkX">Philips Hue Edison Bulbs</a> in <a href="https://amzn.to/3pUGDvC">these lamps</a>. </p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/bedroom.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Bedroom</figcaption></figure>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/bedroom-media.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Bedroom Media</figcaption></figure>
<h1 id="scenes">Scenes</h1>
<p>All this integration means I can do a lot of nifty things with scenes. First, theres some simple automation. The couch lamps and the steel lamp both turn off at 5 PM every day. The bedroom shade automatically lifts at 7:30 AM on weekdays which abruptly informs the cats its time to wake me up.</p>
<p>The AC is controlled with a <a href="https://amzn.to/3FV8AZv">Sensibo Air</a> to make the window units smart.</p>
<p>The scenes I use every day are Good Morning and Good Night. Good Morning opens every shade, turns on every light to 100%, and boots the entryway TV up. Good Night turns off every light. There's another scene: Make it Dark, that turns off every light and closes every shade. </p>
<p>Each room has a <a href="https://amzn.to/31oY8dQ">hue dimmer switch</a> that controls the whole room. I made two scenes for each room, Room One and Room Zero. Those turn off every light and control the shades. In between those I have scenes that brings an assorted set of lights on. For example in the kitchen I have a scene that only turns on the countertop lights.</p>
<p>My favorite scene is Lullaby which turns off my TV, closes my shades, and begins playing a playlist in the bedroom currently composed of The Postal Service, Taylor Swift, The Postal Service again, and Billie Eilish. There's also Nap Time which does all this and turns off the bedroom lights.</p>
<p>In the same vein, Nightlight turns on a dim light in the master bathroom, kitchen, and living room. </p>
<p>For anything Marvel, I put on TV Time which closes the shades and turns off any light that I can see from the Living Room, including the entryway TV. It's counterspell is Chill, which opens all shades and turns every light in the apartment to 50%. I used <a href="http://leviosashades.com">Leviosa Shades</a> which integrate with HomeKit, although I wish the bridge was more reliable.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/home-app-overview.png" class="kg-image" alt loading="lazy" width="2000" height="1397"><figcaption>Home App Screenshot</figcaption></figure>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/home-app-bedroom.png" class="kg-image" alt loading="lazy" width="2000" height="1397"><figcaption>Home App Screenshot - Bedroom</figcaption></figure>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/home-app-kitchen.png" class="kg-image" alt loading="lazy" width="2000" height="1397"><figcaption>Home App Screenshot - Kitchen</figcaption></figure>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/home-app-living-room.png" class="kg-image" alt loading="lazy" width="2000" height="1397"><figcaption>Home App Screenshot - Living Room</figcaption></figure>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/home-app-office.png" class="kg-image" alt loading="lazy" width="2000" height="1397"><figcaption>Home App Screenshot - Office</figcaption></figure>
<h1 id="speakers-and-music">Speakers and Music</h1>
<p>I've already touched on the speakers but I'll reiterate and be a bit more thorough this time. The Office has a paired set of HomePod mini's that I use with the computers. The bookshelf has a <a href="https://amzn.to/31tr0lo">Sonos Five</a> connected to a <a href="https://amzn.to/3mZjuGj">Fluance RT85</a> turntable for vinyl. This can stream vinyl throughout the entire apartment.</p>
<p>The Bedroom has a pair of HomePod Classics for primary listening. The turntable is a vintage Sanyo with an <a href="https://amzn.to/331ORsA">Ortofon Blue cartridge</a>. I like to read and listen to records on this setup. I occasionally put the <a href="https://amzn.to/3pSzN9K">Sonos roam</a> in here if I'm doing a project where I'm running between rooms and want to listen to vinyl.</p>
<p>I've also got one of two iPod displays in the Bedroom. I love iPods, they were iconic during my formative years and are a form of Apple Nostalgia for me. The iPod Mini display includes one of each color with a different artist on each. They are from left to right Green Day, Taylor Swift, Coldplay, Blink 182, and Frank Turner. They also work! I stream them to an old Zenith radio using an iTrip.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/ipod-mini-display.jpeg" class="kg-image" alt loading="lazy" width="2000" height="2667"><figcaption>iPod Mini Display</figcaption></figure>
<p>The Living Room is where the magic happens. The main system is a <a href="https://amzn.to/3pQ0j3z">Sonos Arc</a>, two rear <a href="https://amzn.to/3EUDxMl">Sonos One SLs</a>, and a <a href="https://amzn.to/3zr4PIT">Sonos Sub</a>. This sounds fantastic for movies and is also a great party system.</p>
<p>To the right I have the iPod Classic display. This contains each generation of iPod and the first five generations of iPhone. All of these devices work and are loaded with content.</p>
<p>There's also an iPod Hi-Fi that can accept any of the iPods with dock connectors and play their music. Inside the box is an Airport Express to pair this speaker to AirPlay 2. I mostly use this speaker when I'm working out in the landing strip between the carpet and the display or when I'm drunk and feel like dancing.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/photo-wall-ipod-display.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>Photo Wall With iPod Display</figcaption></figure>
<p>Finally, there's a HomePod mini tucked away in the back that I exclusively use for Siri.</p>
<h1 id="legacy-macs">Legacy Macs</h1>
<p>Behind the couch is my legacy mac setup. There's a few machines here. There's a 2014 Macbook Pro I use to manage all of my devices. A 2009 Macbook Pro I use to manage some legacy iPads. and my favorite, a 2007 Black Macbook that's dual booting Snow Leopard and Windows XP.</p>
<p>These are mostly toys, but they all work and I use them for projects.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/macbook-windows-xp.jpeg" class="kg-image" alt loading="lazy" width="2000" height="1500"><figcaption>2007 Macbook running WIndows XP</figcaption></figure>
<h1 id="bugs">Bugs</h1>
<p>I'm really proud of this thing I built, but it definitely has it's quirks. The various bridges all need to be reset from time to time, and I once just turned off the circuit breaker to turn off everything at once and reboot the whole apartment. Recently, I added a <a href="https://amzn.to/3HvAuvy">smart power switch</a> so I could power cycle the bridges from my phone. The Pi-hole DNS is one of the most likely things to crash so I have that plugged into it as well.</p>
<p>Scenes featuring music are particularly unreliable. Lullaby and Nightlight will work for a while and then stop. I used to have a scene called Tunes that would play a playlist on every speaker in the house, but I gave up after too many failures.</p>
<p>There's also an issue where the living room AppleTV is slightly out of sync with other AirPlay devices. I work around this by unplugging the Sonos Arc and airplaying directly to it when I want to use multiple speakers at once.</p>
<p>Another issue is Siri always feels the need to tell me when one or more devices didn't respond. This is great in theory, but is almost never useful. I consistently repeat the request and it works the second time. It also doesn't give me any insight into which device failed. Many of my scenes are controlling 30+ accessories so I have no way of knowing if a bridge is down or the bathroom light is just off. It'd be nice if the home app gave me this info.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/all-in-on-homekit/home-app-misc.png" class="kg-image" alt loading="lazy" width="2000" height="1397"><figcaption>Home App Screenshot - Misc</figcaption></figure>
<p></p>
<h1 id="wrap-up-and-feature-requests">Wrap Up and Feature Requests</h1>
<p>The main tools I used to make this apartment smart were Philips Hue bulbs and fixtures, Apple devices, the Leviosa Shades, and a bunch of VOCOLinc adapters. From there it was a massive time investment to get everything working the way I wanted it to.</p>
<p>Scenes are a small nightmare to compose. Any time I add or move I light I need to modify every single scene it's in. I would love to see composable scenes where I can say "this is the office in chill mode" or "this is the bedroom 100%". This way I could make Good Morning the composition of Bedroom One, Living Room One, and Office One.</p>
<p>I would also love a guest mode. Whenever I have someone visiting I need to be careful with apartment-wide scenes while they're sleeping. It would be great if I could just make a room automonmous for a period.</p>
<p>The home app is overdue for a makeover. It was perfect when I lived in a 350 sqft studio apartment, but now that I have multiple rooms, many accessories, and many scenes it's unweildy and unreliable. I'm hoping that Apple improves this in a future release.</p>
<p>Overall though, I'm happy I went with HomeKit. It integrates with everything else I own and Apple's track record on privacy is next to none. I really hope Apple improves the stability of HomeKit and HomePods over the next few years, but until then I'll keep tinkering.</p>
`.trim(),tags:["Tech"],banner_img:"/images/blog/living-room.jpeg",heroImage:"/images/blog/all-in-on-homekit/homekit-hero.jpeg",wordCount:2315},kf={id:9,slug:"what-the-functor",title:"What the Functor?",date:"February 24, 2019",excerpt:"A monad is just a monoid in the category of endofunctors, what's the problem? Hopefully, you'll understand this when we're done.",content:`
<p>My <a href="/writing/functional-programming-fundamentals">last post</a> aimed to make <a href="/writing/functional-programming-fundamentals">functional programming</a> as straightforward as possible. An explicit goal of that article was to <em>avoid unnecessary jargon like monads and functors and stick to concepts that will make our code better. </em></p>
<p>This time around let's dive into all the scary terms and make them not so scary. While knowing these terms might not make your code better, they're fun to know. </p>
<p>The one thing we skip in this article is <a href="/writing/mary-had-a-little-lambda">lambda calculus</a>, check out <a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda</a> for more on that. I also have an article called <a href="/writing/map-filter-reduce">Map, Filter, Reduce</a> that is more practical.</p>
<p>As a warning, we're gonna be diving into some abstract mathematics. This XKCD is now more relevant than ever.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/what-the-functor/xkcd-functional-programming.png" class="kg-image" alt loading="lazy"><figcaption>Functional programming combines the flexibility and power of abstract mathematics with the intuitive clarity of abstract mathematics.<a href="https://xkcd.com/1270/" rel="noreferrer nofollow noopener">[11]</a></figcaption></figure>
<p>A monad is just a monoid in the category of endofunctors, what's the problem? <a href="http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html">[7]</a> <a href="https://stackoverflow.com/questions/3870088/a-monad-is-just-a-monoid-in-the-category-of-endofunctors-whats-the-problem/3870310#3870310">[8]</a>. Hopefully, you'll understand this when we're done.</p>
<p>One final disclaimer, I didn't know any of this when I set out to write this article. I've heavily annotated this post with resources I used to learn this stuff as I was going. If you're already knowledgeable on category theory, please be gentle when correcting me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
<hr>
<h1 id="functors">Functors</h1>
<p>What fun would it be if we didn't start with the titular term, functor.</p>
<p>A <em>functor </em>is anything that can be mapped over. This is most commonly a list, but really it's any object that can be mapped over.</p>
<p>For example, we can make a <code>Wizard</code> that can be mapped over.</p>
<pre><code class="language-typescript">type Wizard = {
  name: string;
  house: string;
};

const wizard: Wizard = {
  name: &#x27;Harry&#x27;,
  house: &#x27;Gryffindor&#x27;,
};

type Mappable&lt;T&gt; = {
  map&lt;U&gt;(fn: (val: T) =&gt; U): Mappable&lt;U&gt;;
};

const mappableWizard: Mappable&lt;Wizard&gt; = {
  map: function&lt;U&gt;(fn: (val: Wizard) =&gt; U) {
    return {
      map: function&lt;V&gt;(fn2: (val: U) =&gt; V) {
        return mappableWizard.map(w =&gt; fn2(fn(w)));
      }
    };
  }
};</code></pre>
<p><em>Note: in most practical situations, a functor would be parametric (containing a type parameter like <code>String</code> in <code>Array&lt;String&gt;</code>), but <code>Wizard</code> does fulfill the basic definition of a functor.</em></p>
<p>Now the <code>map</code> function also needs to meet the following criteria.</p>
<h2 id="identity-law-1-">Identity Law &nbsp;<a href="https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6">[1]</a></h2>
<p>If map is given an identity function it must return the exact same object. Like so:</p>
<p><code>functor.map(x =&gt; x) === functor</code></p>
<p>This one is hopefully straightforward.</p>
<h2 id="composition-law-1-">Composition Law &nbsp;<a href="https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6">[1]</a></h2>
<p><code>functor.map(x =&gt; f(g(x))) === functor.map(g).map(f)</code></p>
<p>Woah that's intimidating. What does this actually mean? Let's look at an example.</p>
<pre><code class="language-typescript">const joinGryffindor = (w: Wizard): Wizard =&gt; ({
  ...w,
  house: &#x27;Gryffindor&#x27;
});

const learnExpelliarmous = (w: Wizard): Wizard =&gt; ({
  ...w,
  spells: [...(w.spells || []), &#x27;Expelliarmous&#x27;]
});</code></pre>
<p>We have <code>joinGryffindor</code> and <code>learnExpelliarmous</code>. If we call </p>
<p><code>wizard.map(joinGryffindor).map(learnExpelliarmous)</code> it needs to be equivalent to &nbsp;<code>wizard.map(w =&gt; learnExpelliarmous(joinGryffindor(w)))</code>. </p>
<p>Now it's worth calling out, it needs to be functionally equivalent. In abstract mathematics we're not worried about pointers and references so we can consider this good enough. This is also known as "Fast and Loose Reasoning is morally correct." <a href="http://www.cse.chalmers.se/~nad/publications/danielsson-et-al-popl2006.html">[13]</a></p>
<hr>
<h1 id="category">Category</h1>
<p>The next term we need to dive into is a category. A category is an algebraic structure that models objects and their relationships with each other.</p>
<p>Below we can see a category of int, string, and float. </p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/what-the-functor/category-diagram.png" class="kg-image" alt loading="lazy"><figcaption>Taken from article by Nikolay Grozev <a href="https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/">[5]</a>.</figcaption></figure>
<p>The category is the entire chart. It's how we convert from int to string, float to string, or int to float, or float to int. </p>
<p>Now while in practice, a functor is just a thing we can map over, it has a more advanced explanation. In category theory, a functor is a transformation between two categories <a href="https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/">[5]</a>. This is a transformation of the <strong>entire category.</strong> </p>
<p>For example, we can transform the entire category above with a <code>List</code> functor. The relationships between all of the types goes from a function like <code>toString</code> to <code>map(func)</code> or &nbsp;<code>map(toString)</code>. This also applies to <code>toFloat</code>, <code>round</code>, and any other functions in our category.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/what-the-functor/functor-diagram.png" class="kg-image" alt loading="lazy"><figcaption>Taken from article by Nikolay Grozev <a href="https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/">[5].</a></figcaption></figure>
<hr>
<h1 id="endofunctor">Endofunctor</h1>
<p>Now that we have functors and categories, let's discuss endofunctors. An endofunctor is a functor that transforms a category into itself. </p>
<p>I spent several hours trying to grok this, and more importantly, understand how it's relevant in software. After reading <em>many</em> articles I stumbled on <a href="https://www.youtube.com/watch?v=8XGFFMPHG0o"><a href="https://www.youtube.com/watch?v=8XGFFMPHG0o">this talk [6]</a> </a>by <a href="https://twitter.com/DanielaSfregola">@<a href="https://twitter.com/DanielaSfregola">DanielaSfregola</a></a> and it clicked.</p>
<p>For all intents and purposes, all functors in programming are endofunctors. A functor is really just metadata around a value that allows us to map over it.</p>
<p>The objects in our category are our types, and the arrows are the relationships between those types. These relationships are fundamental to the language so we can't just create a wrapper (functor) that changes how these types are interrelated. </p>
<p>We can't change how types are related unless we change the definition of the type altogether. Even in JavaScript, which has gnarly behaviors around <code>NaN</code>, <code>undefined</code>, and other types, the relationship between them is still defined in the spec and can't be changed with a simple functor.</p>
<p>Practically speaking, all functors in programming are endofunctors. There are all sorts of nuanced exceptions to this rule but those are out of scope here. Think of it like physics 101 when we pretended friction wasn't a thing.</p>
<p>Seriously though, watch <a href="https://www.youtube.com/watch?v=8XGFFMPHG0o">that talk</a>, I closed so many tabs after watching that talk.</p>
<hr>
<h1 id="monoid">Monoid</h1>
<p>Cool cool, cool cool cool. We've defined some of the scariest terms in functional programming, let's move on to monoids. </p>
<p>A monoid is a category with one object. A monoid has three important rules: identity, composition, and associativity. In programming, it's a wrapper around an object that enforces these rules.</p>
<ul>
<li><strong>Identity: </strong>This states that there must be a way to use the monoid such that it returns itself.</li>
<li><strong>Composition: </strong>This states that we must be able to combine values using the monoid.</li>
<li><strong>Associative: </strong>This states that the order of operations remains constant so <code>(a +b) + c === a + (b + c)</code>.</li>
</ul>
<p>If these seem vague and generalized, well thats how abstract math works. Let's look at a practical example, a string monoid. <a href="http://s3.amazonaws.com/erlang-conferences-production/media/files/000/000/760/original/Daniela_Sfregola_-_A_Pragmatic_Introduction_to_Category_Theory.pdf?1510238446">[9]</a></p>
<pre><code class="language-typescript">type StringMonoid = {
  identity: string;
  compose: (a: string, b: string) =&gt; string;
};

const stringMonoid: StringMonoid = {
  identity: &#x27;&#x27;,
  compose: (a: string, b: string) =&gt; a + b
};</code></pre>
<p>Above, we can see our <code>StringMonoid</code> with an <code>identity</code> value and a <code>compose</code> function.</p>
<p>We can use the compose function to produce a new string.</p>
<pre><code class="language-typescript">const result1 = stringMonoid.compose(
  stringMonoid.compose(&#x27;Hello&#x27;, &#x27; &#x27;),
  &#x27;World&#x27;
);
// &#x27;Hello World&#x27;</code></pre>
<p>If we compose with the identity value we get the same value.</p>
<pre><code class="language-typescript">const result2 = stringMonoid.compose(
  stringMonoid.identity,
  &#x27;Hello&#x27;
);
// &#x27;Hello&#x27;</code></pre>
<p>Finally, if we call compose on the same arguments it doesn't matter which pair we do first.</p>
<pre><code class="language-typescript">const result3a = stringMonoid.compose(
  stringMonoid.compose(&#x27;a&#x27;, &#x27;b&#x27;),
  &#x27;c&#x27;
);

const result3b = stringMonoid.compose(
  &#x27;a&#x27;,
  stringMonoid.compose(&#x27;b&#x27;, &#x27;c&#x27;)
);

// result3a === result3b === &#x27;abc&#x27;</code></pre>
<p>Here are some other examples of monoids in JavaScript:</p>
<ul>
<li>Adding and multiplying numbers (with 0 and 1 as the identity value respectively).</li>
<li>Joining multiple arrays.</li>
<li>Composing multiple functions together.</li>
</ul>
<hr>
<h1 id="monads">Monads</h1>
<p>We did it! We made it to Monads.</p>
<p>Before we dive in let's take a step back. Functors and monoids were both wrappers around a value that allow us to execute operations on them. In the case of functors it was <code>map</code> in the case of monoids it was <code>compose</code>, where compose is a single operation.</p>
<p>Now monads. Monad's are both a functor and a monoid. That doesn't make this any simpler though. Let's define this in simpler terms.</p>
<p>A monad is a wrapper around some value that makes it easier to compose functions around it. This is often used to abstract away things like API calls or IO. In fact a <code>Promise</code> is a monad.</p>
<pre><code class="language-typescript">type Wizard = {
  name: string;
  house: string;
};

const fetchWizard = (id: number): Promise&lt;Wizard&gt; =&gt; {
  return fetch(\`/api/wizards/\${id}\`).then(r =&gt; r.json());
};</code></pre>
<p>If we look at these &nbsp;types above, we have a <code>Wizard</code> and a function that returns a <code>Promise&lt;Wizard&gt;</code>. This promise allows us to compose functions on top of it without worrying about the underlying IO needed to go fetch a <code>Wizard</code> from the server.</p>
<p>Lets break down further.</p>
<p>A monad is based on a simple symmetry — A way to wrap a value into a context, and a way to unwrap the value from the context <a href="https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8">[10]</a>.</p>
<h3 id="lift">Lift</h3>
<p>A monad allows us to <em>lift</em> a type into the monad context. In this case we're going from <code>Wizard</code> to <code>Promise&lt;Wizard&gt;</code>. The process of wrapping the <code>Wizard</code> in a <code>Promise</code> is called lifting.</p>
<h3 id="map-function map() { [native code] }1">Map</h3>
<p>A monad also allows us to map from one wrapped type to another. So we can call <code>wizardPromise.then(joinGryffindor).then(learnExpelliarmous)</code> to update the underlying wizard in the promise. </p>
<p>I should mention that the monad <code>map</code> is the same <code>map</code> we get with a functor. This is because monads are a type of functor.</p>
<p>Now it's worth noting that Promises don't explicitly provide a <code>map</code> function, but <code>then</code> gets us close enough.</p>
<h3 id="flatmap">FlatMap</h3>
<p>Finally, monads give us a way of going from <code>Promise&lt;Promise&lt;Wizard&gt;&gt;</code> to <code>Promise&lt;Wizard&gt;</code>. We should be able to have an arbitrarily nested monad and get to the original underlying value. We should also be able to do a <code>flatMap</code> on it. This is commonly done with a <code>chain</code> function.</p>
<h2 id="back-to-monads">Back to Monads</h2>
<p>Now it's worth noting that Promises don't perfectly map to monads, but they're close enough to understand the data type.</p>
<p>This also seems like a good time to reiterate, monads are an advanced abstract mathematical type. We're bringing these into our understanding of programming. They don't always line up perfectly with every construct in JavaScript. That's okay! </p>
<p>The point here isn't to make our code perfectly mathematical, we're just trying to understand some of the advanced math that powers our languages.</p>
<hr>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>I'm going to admit. This article was challenging to write. I learned a lot in the process. I'd like to reiterate, none of this is important to your day to day code. But if you were curious what all those scary FP terms mean hopefully this satisfied that curiosity.</p>
<p>If you'd like something that will make your code better, check out <a href="http://matthewgerstman.com/functional-programming-fundamentals/">Functional Programming Fundamentals</a>. You can also check out <a href="/writing/map-filter-reduce">Map, Filter, Reduce.</a> If you want to learn about <a href="/writing/mary-had-a-little-lambda">lambda calculus</a> check out <a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda</a>.</p>
<p>Special thank you to <a href="https://twitter.com/glittershark1">@glittershark1</a> and <a href="https://twitter.com/jetpacmonkey">@<a href="https://twitter.com/jetpacmonkey">jetpacmonkey</a></a> for reviewing this.</p>
<p>Thank you to <a href="https://twitter.com/drboolean">@drboolean</a> for correcting my functor <a href="https://twitter.com/drboolean/status/1104145856452677633">example on Twitter.</a></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
<hr>
<h1 id="references">References</h1>
<p><em>Note: I didn't end up quoting all of these directly, but I consulted all of them while writing this article.</em></p>
<ol>
<li><a href="https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6">https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6</a></li>
<li><a href="https://medium.com/javascript-scene/functors-categories-61e031bac53f">https://medium.com/javascript-scene/functors-categories-61e031bac53f</a></li>
<li><a href="https://medium.com/@l.mugnaini/functors-applicatives-and-monads-in-pictures-784c2b5786f7">https://medium.com/@l.mugnaini/functors-applicatives-and-monads-in-pictures-784c2b5786f7</a></li>
<li><a href="https://medium.com/@lettier/your-easy-guide-to-monads-applicatives-functors-862048d61610">https://medium.com/@lettier/your-easy-guide-to-monads-applicatives-functors-862048d61610</a></li>
<li><a href="https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/">https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/</a></li>
<li><a href="https://www.youtube.com/watch?v=8XGFFMPHG0o">https://www.youtube.com/watch?v=8XGFFMPHG0o</a></li>
<li><a href="http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html">http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html</a></li>
<li><a href="https://stackoverflow.com/questions/3870088/a-monad-is-just-a-monoid-in-the-category-of-endofunctors-whats-the-problem/3870310#3870310">https://stackoverflow.com/questions/3870088/a-monad-is-just-a-monoid-in-the-category-of-endofunctors-whats-the-problem/</a></li>
<li><a href="http://s3.amazonaws.com/erlang-conferences-production/media/files/000/000/760/original/Daniela_Sfregola_-_A_Pragmatic_Introduction_to_Category_Theory.pdf?1510238446">http://s3.amazonaws.com/erlang-conferences-production/media/files/000/000/760/original/Daniela_Sfregola_-_A_Pragmatic_Introduction_to_Category_Theory.pdf?1510238446</a></li>
<li><a href="https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8">https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8</a></li>
<li><a href="https://xkcd.com/1270/">https://xkcd.com/1270/</a></li>
<li><a href="https://gist.github.com/ericelliott/ea925c58410f0ae74aef">https://gist.github.com/ericelliott/ea925c58410f0ae74aef</a></li>
<li><a href="http://www.cse.chalmers.se/~nad/publications/danielsson-et-al-popl2006.html">http://www.cse.chalmers.se/~nad/publications/danielsson-et-al-popl2006.html</a></li>
</ol>
`.trim(),tags:["Tech","functional-programming"],banner_img:"/images/blog/what-the-functor/functor-hero.jpg",heroImage:"",wordCount:1778},xf={id:10,slug:"mary-had-a-little-lambda",title:"Mary Had a Little Lambda",date:"February 24, 2019",excerpt:`Originally I set out to write a sequel to Functional Programming Fundamentals that covered all of the scary jargon.  This quickly evolved into What the Functor? 

In that article I covered monads, mon`,content:`
<p>Originally I set out to write a sequel to <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamentals</strong></a> that covered all of the scary jargon. &nbsp;This quickly evolved into <strong><a href="/writing/what-the-functor">What the Functor?</a> </strong></p>
<p>In that article I covered monads, monoids, and functors. Now we have one last bit of scary functional jargon, lambdas.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/mary-had-a-little-lambda/lambda-diagram.png" class="kg-image" alt loading="lazy"></figure>
<h1 id="lambda">Lambda</h1>
<p>A lambda is an anonymous function that can be treated like a value.<a href="https://github.com/hemanth/functional-programming-jargon"> [2]</a></p>
<p>We actually saw some of these in the <a href="/writing/what-the-functor">previous post</a>. These were <code>learnExpelliarmous</code> and <code>joinGryffindor</code>. </p>
<pre><code class="language-typescript">const joinGryffindor = (wizard: Wizard) =&gt; {
  return {
    ...wizard,
    house: &#x27;Gryffindor&#x27;,
  };
};

const learnExpelliarmous = (wizard: Wizard) =&gt; {
  return {
    ...wizard,
    spells: [...wizard.spells, &#x27;Expelliarmous&#x27;],
  };
};</code></pre>
<p>In this case we create an anonymous function and assign it to the variable <code>joinGryffindor</code>. We then pass this as an argument to <code>map</code>. We could also just pass this anonymous function directly like so:</p>
<pre><code class="language-typescript">const map = wizard.map((wizard: Wizard) =&gt; {
  return {
    ...wizard,
    house: &#x27;Gryffindor&#x27;,
  };
});
</code></pre>
<p>This is a common pattern, passing a lambda, or an anonymous function to a <a href="http://matthewgerstman.com/functional-programming-fundamentals/">higher order function</a>.</p>
<h1 id="lambda-calculus">Lambda Calculus</h1>
<p>Now the scarier term Lambda Calculus. Let's break this down. Lambdas are anonymous functions, we just learned that. </p>
<p>Why don't we define calculus now? If we pull up the dictionary definition we get the following</p>
<blockquote><em>A method of computation or calculation in a special notation (as of logic or symbolic logic. <a href="https://www.merriam-webster.com/dictionary/calculus">[3]</a></em></blockquote>
<p><strong>Lambda Calculus is just a formal way of defining functions using special notation. Less scary now, right?</strong></p>
<p>Let's dive just a little more into it. Lambda Calculus, or the formal notation for defining functions, is composed of three elements <strong>variables, functions, </strong>and <strong>applications</strong>. <a href="https://learnxinyminutes.com/docs/lambda-calculus/">[4]</a></p>
<p>I'm going to go ahead and heavily paraphrase <a href="https://learnxinyminutes.com/docs/lambda-calculus/">this great article from learn x in y minutes</a>.</p>
<h2 id="variables">Variables </h2>
<p>We know these, variables are used in programming all the time, and we can name them anything. Lets go with one named <code>x</code>. <a href="https://learnxinyminutes.com/docs/lambda-calculus/">[4]</a></p>
<h2 id="function">Function</h2>
<p>We know these too! We use functions in our code, and that's why you're reading an article on functional programming. In lambda calculus they use a special syntax: <code>λ&lt;parameters&gt;.&lt;body&gt;</code>. As an example <code>λx.x</code> is the identity function. <a href="https://learnxinyminutes.com/docs/lambda-calculus/">[4]</a></p>
<h2 id="application">Application</h2>
<p>This is a new word, but we see this all the time too. This is the act of calling a function. So if a function is the function declaration, this is the actual function call.</p>
<p>The syntax for this even involves parentheses! <code>(λx.x)a</code> calls the identity function with the argument <code>a</code>.</p>
<p>Here's a useful table taken from the <a href="https://learnxinyminutes.com/docs/lambda-calculus/">article mentioned above.</a> <a href="https://learnxinyminutes.com/docs/lambda-calculus/">[4]</a></p>
<!--kg-card-begin: html-->
<table>
<thead>

<tr>

<th>Name</th>


<th>Syntax</th>


<th>Example</th>


<th>Explanation</th>

</tr>

</thead>
<tbody>

<tr>

<td>Variable</td>


<td><code>&lt;name&gt;</code></td>


<td><code>x</code></td>


<td>a variable named “x”</td>

</tr>


<tr>

<td>Function</td>


<td><code>λ&lt;parameters&gt;.&lt;body&gt;</code></td>


<td><code>λx.x</code></td>


<td>a function with parameter “x” and body “x”</td>

</tr>


<tr>

<td>Application</td>


<td><code>&lt;function&gt;&lt;variable or function&gt;</code></td>


<td><code>(λx.x)a</code></td>


<td>calling the function “λx.x” with argument “a”</td>

</tr>

</tbody>
</table>
<!--kg-card-end: html-->
<p>This took me a while to grok. If you're looking for more resources I recommend Computerphiles <a href="https://www.youtube.com/watch?v=eis11j_iGMs">excellent video on Lambda Calculus</a> and the sequel on <a href="https://www.youtube.com/watch?v=9T8A89jgeTI">Y Combinators.</a></p>
<hr>
<h1 id="predicate">Predicate</h1>
<p>Let's finish up with a comparatively straightforward term. What is a predicate? A predicate is just a function that returns true or false [<a href="https://stackoverflow.com/questions/3230944/what-does-predicate-mean-in-the-context-of-computer-science">5</a>]. It's most commonly used as criteria for a filter.</p>
<p>Here's a predicate:</p>
<pre><code class="language-typescript">const isGryffindor = (wizard: Wizard) =&gt; wizard.house === &#x27;Gryffindor&#x27;;
</code></pre>
<hr>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>I'd like to reiterate, none of this is important to your day to day code. But if you were curious what all those scary FP terms mean hopefully this satisfied that curiosity.</p>
<p>If you'd like something that will make your code better, check out <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamentals</strong></a>. If you want even scarier terms check out <strong><a href="/writing/what-the-functor">What the Functor?</a></strong></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
<hr>
<h1 id="ads">Ads</h1>
<p>These ads help me pay to keep this site up. Feel free to buy, watch, listen or ignore these like any other ad.</p>
<!--kg-card-begin: html-->
<div id="amzn-assoc-ad-28dd1412-99f1-4930-a348-0d0afedbb7ce"></div>
<script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=28dd1412-99f1-4930-a348-0d0afedbb7ce"><\/script>
<!--kg-card-end: html-->
<hr>
<h1 id="references">References</h1>
<ol>
<li><a href="https://www.youtube.com/watch?v=eis11j_iGMs">https://www.youtube.com/watch?v=eis11j_iGMs</a></li>
<li><a href="https://github.com/hemanth/functional-programming-jargon">https://github.com/hemanth/functional-programming-jargon</a></li>
<li><a href="https://www.merriam-webster.com/dictionary/calculus">https://www.merriam-webster.com/dictionary/calculus</a></li>
<li><a href="https://learnxinyminutes.com/docs/lambda-calculus/">https://learnxinyminutes.com/docs/lambda-calculus/</a></li>
<li><a href="https://stackoverflow.com/questions/3230944/what-does-predicate-mean-in-the-context-of-computer-science">https://stackoverflow.com/questions/3230944/what-does-predicate-mean-in-the-context-of-computer-science</a></li>
</ol>
`.trim(),tags:["Tech","functional-programming"],banner_img:"/images/blog/mary-had-a-little-lambda/lambda-calculus-hero.jpg",heroImage:"",wordCount:632},Sf={id:8,slug:"everything-i-wish-i-knew-before-my-first-bay-area-internship",title:"Everything I Wish I Knew Before My First Internship",date:"February 18, 2019",excerpt:`In 2012 I spent my first summer as an intern in the Bay Area. While it was a invaluable experience, there's so much I wish I knew before then. Here's a run-through of everything I wish I knew.
`,content:`
<p>In 2012 I spent my first summer as an intern in the Bay Area. While it was a invaluable experience, there's so much I wish I knew before then. Here's a run-through of everything I wish I knew.</p>
<p><em>Note: While I mention the Bay Area a few times in this post, this is really relevant to any location.</em></p>
<h1 id="application-process">Application Process</h1>
<p>Apply early and often. Interviews are a numbers game. The more companies you apply to, the better chance you’ll have. Interview processes for internships range in difficulty, but most will put you through a technical interview.</p>
<p>Most technical interviews focus on data structures. If you haven't taken that course yet, I would recommend getting ahead as most of it directly translates to the interview process. I also highly recommend the book <a href="https://amzn.to/2DQP0Pt">Cracking the Coding Interview</a> for practice. </p>
<p>Also I would definitely recommend applying to all of the big companies (Google, Apple, Facebook, Amazon, etc). Even if you don’t get the internship this summer, you’ll put yourself on their radar in the future.</p>
<p>I do have some more advice on the subject though.</p>
<h3 id="real-interviews-don-t-tell-you-what-kind-of-problem-it-is-in-advance-">Real interviews don't tell you what kind of problem it is in advance.</h3>
<p>In <a href="https://amzn.to/2DQP0Pt">Cracking the Coding Interview</a>, problems are broken down by strings, arrays, trees, searches, sorts, etc. In a real interview you're going to get a vague prompt and have to figure out what kind of problem it is.</p>
<h3 id="failure">Failure</h3>
<p>You're going to fail a lot of interviews before you pass one. Technical interviews are hard and require a lot of practice, don't get discouraged. Do <a href="https://amzn.to/2DQP0Pt">practice problems</a> with your friends and keep your head up. Interviewing is a skillset completely separate from day to day coding, and unfortunately it's one you need to master.</p>
<h3 id="your-last-interview-has-no-bearing-on-the-current-one-">Your last interview has no bearing on the current one.</h3>
<p>If you bombed the last interview, shrug it off and move on. I know it's a stressful situation but do your best. This is doubly true for onsite interviews where you have multiple rounds in a row.</p>
<p>Here's a tip on interviews, you really only need to get one person excited about hiring you. The rest can be lukewarm. If you pass that bar you'll probably get an offer.</p>
<h2 id="number-of-internships">Number of Internships</h2>
<p>I recommend most people try and get two internships while they're in college. Usually it's the summers before Junior and Senior year.</p>
<p>You should still look for ways to write code during your first Summer (before Sophomore year). Apply to small (and big) companies, volunteer at a nonprofit, or just build an app and publish it. </p>
<p>Get <em>something </em>to put on your resume each summer.</p>
<h1 id="big-vs-small-companies">Big vs Small Companies</h1>
<p>One of the bigger decisions you’ll make is whether to go to a big or small company. Here are some of the pros of each.</p>
<h2 id="small-company">Small Company</h2>
<ul>
<li><strong>Wide variety of projects.</strong> Startups have more projects than they have resources. You’ll be able to work on projects across the entire tech stack and learn what they like.</li>
<li><strong><strong><strong>Access to leadership. </strong></strong></strong>At a startup you’ll much more access to the leadership than you would at a company like google.</li>
</ul>
<h2 id="big-company">Big Company</h2>
<ul>
<li><strong><strong><strong>Structured internship programs. </strong></strong></strong>The big companies essentially create a summer camp for their interns. They make sure you’re constantly entertained with activities. They’ll also set you up with a mentor.</li>
<li><strong><strong><strong>Pay/Housing.</strong></strong></strong> The bigger companies will usually pay you more and set you up with housing.</li>
<li><strong><strong><strong>Resume.</strong></strong></strong> People are shallow, Google will always look great on your resume.</li>
</ul>
<h1 id="resume">Resume</h1>
<p>Your resume should always fit on one page. Most recruiters will go through dozens of resumes at once and spend 30 seconds on each of them. A short resume that’s all quality content will sell better than a long one with a lot of fluff.</p>
<p>I know the one page thing seems daunting at first, but trust me on this one. Here’s <a href="https://www.businessinsider.com/elons-musk-resume-all-on-one-page-2016-4">an example of Elon Musk’s resume</a> shortened to one page. Google Docs has a ton of great templates these days.</p>
<p>Also, always submit your resume as a PDF. You never know how a <code>.docx</code> or <code>.pages</code> file is going be displayed on someone else's machine, or even worse, their printer.</p>
<p>One last thing, use your personal email. You won’t have your school email forever and you never know who you’re going to want to reach out to in 5 years. If it’s not already, I recommend your email be some version of firstname.lastname@gmail.com.</p>
<h1 id="once-you-start-your-internship">Once You Start Your Internship</h1>
<p>Always be aware that your internship is a 3 month long interview process. People will be submitting feedback on you. If they like you they’ll often extend an offer for when you graduate. Also remember that the interview process is a two way street. I’d recommend paying attention to how happy the full time employees are.</p>
<h1 id="intern-community">Intern Community</h1>
<p>The Bay Area brings in over 5,000 interns every summer. Some of the friends you make now will be both friends and industry connections you have for the rest of your career.</p>
<p>There will also be lots of intern focused events that are great for both social and professional networking. Keep in mind when attending these, the hosts always have their own motives. Usually they’re looking to recruit engineers. You’ll still get a lot of value out of attending these events, but be aware no one is hosting it out of kindness of their heart.</p>
<h1 id="some-general-advice">Some General Advice</h1>
<p><strong>Always be learning. </strong>The tech industry moves incredibly quickly and you should always make sure you’re keeping up. If you ever feel like you’ve stopped learning at your job, it’s probably time to look for a new one.</p>
<p><strong>Find Mentors</strong>. The best thing you can do for your career is to find people you look up to. They don't need to be that far ahead of you, 2-3 years is enough. But they should have seen enough of the road ahead to give you direction. But remember this is your life, do what you think is best.</p>
<p><strong>Don’t Drop Out. </strong>You’ll find a lot of people trying to convince you to drop out and join their startup, don’t. Your CS degree will be valuable for at least the first 10 years of your career. I see lots of candidates who know how to code but can’t handle real engineering tasks, you’ll learn that in school.</p>
<p><strong>Ship Code. </strong>Build apps, web-apps or whatever you feel like, but get the experience of writing something that people actually use. I meet lots of recent college grads who can pass a technical interview but have never watched someone use their software. It’s humbling to say the least. Also, try adding features to something you wrote a year ago. You’ll learn a lot about writing maintainable code that way.</p>
<p><strong>Learn Git</strong>. Learn how git works and upload everything you write to github. Github will eventually be your second resume. Don’t be embarrassed about publishing your code. Git is one of the most important tools you’ll use in the industry and most schools don’t teach it. <em>Disclaimer: Make sure you’re allowed to upload your class projects.</em></p>
<h1 id="the-most-important-advice">The Most Important Advice</h1>
<p><strong>You are in charge of your own happiness.</strong> Remember this forever. I grew up on the east coast and firmly belong here. I spent years trying to convince myself to like the Bay Area, when really it just wasn't a good fit.</p>
<p>Try everything once, live somewhere you're not used to, but when it comes time to figure out what makes you happy, do what you think is best.</p>
`.trim(),tags:["Tech","internship","bay-area"],banner_img:"/images/blog/hello-there/bay-bridge-sf.jpg",wordCount:1246},Tf={id:15,slug:"how-i-prepare-a-talk",title:"How I Prepare A Tech Talk",date:"April 01, 2019",excerpt:"Almost weekly someone will ask me how do I put together a tech talk. I'd like to think I've gotten pretty good at answering. In fact I've gotten so used to sharing The Matthew Gerstman Method that it ",content:`
<p>Almost weekly someone will ask me <em>how do I put together a tech talk.</em> I'd like to think I've gotten pretty good at answering. In fact I've gotten so used to sharing <em>The Matthew Gerstman Method </em>that it might as well be it's own talk.</p>
<p>That's too meta for me, so I went with a blog post. This probably isn't that different from anyone else's strategy, but it works for me.</p>
<h1 id="figuring-out-the-topic">Figuring Out The Topic</h1>
<p>The very first step is figuring out what I actually want to talk about. Different talks will come from variou sources of inspiration.</p>
<p>My <a href="https://www.youtube.com/watch?v=kkRyjXDpYqg">Functional Programming talk</a> came out of a desire to evangelize Lodash after we migrated from <a href="https://blogs.dropbox.com/tech/2018/09/migrating-from-underscore-to-lodash/">Underscore at Dropbox</a>. I gave a talk on <a href="https://www.youtube.com/watch?v=m1XdasrstCc">Salary Negotiation </a>that is filled with advice I've given on repeat.</p>
<p>Currently I'm developing three talks. Building a Typed and Code Split React App, TypeScript: Seeing Past The Hype, and Nothing Generic About It. All three of these came directly out things I've learned at Dropbox. More importantly, these are things I'm passionate about and that should come through when I'm delivering them.</p>
<h1 id="outlining">Outlining</h1>
<p>The next step is the rough technical outline. I usually do this offline, walking around Manhattan, running errands, or cleaning my apartment. I generally try to get myself into a headspace where my thoughts can run wild and I can think about the general structure for the talk.</p>
<p>I might think a little bit about how I want to handle certain subjects, and ideas for code samples may come up, but overall it's high level.</p>
<p>When I get home I start to type it up. I plug away into <a href="http://paper.dropbox.com">Paper</a> and build a proper outline. Seeing it in front of me, I can reorganize topics and start to add more detail as it comes to me.</p>
<h1 id="research">Research</h1>
<p>This is often the hardest part of the talk. Researching the topic.</p>
<p>I try to learn everything I can about the subject I'm talking about and I make sure to cite sources. At this point it's more of a blog post than a tech talk. It's a lot of information in a Paper doc that I can share.</p>
<p>At this point I'm generally just copy pasting from articles I find into Paper and saving where I got the info.</p>
<p>Slowly this mass of content will become actual slides. I'll put in line breaks and figure out the flow of my talk. This is also where I write any relevant sample code.</p>
<p>Also, this is when jokes usually start coming to me. I might start stockpiling gifs, although that's not necessarily important yet.</p>
<h1 id="starting-the-slides">Starting The Slides</h1>
<p>At this stage I export from Paper to markdown and switch over to <a href="https://github.com/jxnblk/mdx-deck">mdx-deck</a>. It's a really nice project that lets you write your slides in markdown and include live code samples. If you're curious, I host my slides on Netlify.</p>
<p>I'm not terribly concerned about getting my slides perfect. The most important thing for now is the content itself. Secondly, I like to make sure theres comic relief when things get too technical.</p>
<p>Arguably, you should avoid spending time refining your slides here because they're so likely to change. Fonts, colors, and alignment can all wait. </p>
<p>Instead, I start running through the slides at home. I time myself on each practice run. More often than not, I need to cut content rather than add more, but your mileage may vary.</p>
<h1 id="workshopping">Workshopping</h1>
<p>This is one of my favorite parts, testing the talk out with friends. I usually find a couple of co-workers and give the talk to them in private. This allows me to see how the talk flows when someone is listening, how they respond to various things I might say, and most importantly, gather feedback.</p>
<p>Often I'll get feedback that something was confusing, or a few slides could have been rearranged. I might also get feedback like <em>this is irrelevant,</em> or <em>you need to expand on this</em>. Most importantly, I get to see if my jokes are funny.</p>
<p>When I was first getting started, I would have someone count my <em>ums</em>. This is a really useful exercise, because it gets you in the habit of breaking your awkward mannerisms. We all have them, and it takes practice to fix them.</p>
<p>I also recommend timing yourself, and asking your friend(s) to hold feedback until the end. I usually give them a pen and paper to take notes that I can hold onto afterwards.</p>
<h1 id="refining">Refining</h1>
<p>After two or three of these one on one sessions I'm in refinement mode. Getting the talk down to a science, and making sure I have all my points together.</p>
<p>This is the stage when I start trying to make my slides perfect. I check that everything is aligned properly. I also start adding speaker notes. </p>
<p>There's one thing I don't do though; I don't memorize anything. I make it a point to speak naturally every time I give the talk. This makes the delivery feel much more organic. I avoid writing down full sentences in my speaker notes and stick to bullet points. If I miss something during any given speech it's not that big a deal.</p>
<p>I also make sure my gif game is on point. To be honest, I spend hours on Google images looking for the perfect gifs.</p>
<h1 id="practicing-in-public">Practicing In Public</h1>
<p>The talk is 90% done now, but it still hasn't been given to an audience. I'll set a date with a local meetup and give the talk to a smaller group, usually 50-100 people. This is my first chance to give the talk in public and see how it lands. Usually people will come up to me after the talk and ask questions or give feedback. This is very helpful for the final version.</p>
<p>From here on, I'll update my slides as necessary, change up any jokes that didn't get laughs, and really hone my delivery. These tend to be minor tweaks, but they make a difference.</p>
<h1 id="the-big-event">The Big Event</h1>
<p>The week of the conference or event I'm speaking at I'll practice my talk every day to stay fresh. In the hours before I give it for real, I'll practice it two-three times by myself just to make sure I'm on point. I tend to get pretty nervous the day of so I just keep practicing in my hotel room to fight my nerves.</p>
<h1 id="reusing-a-talk">Reusing a Talk</h1>
<p>Giving a talk multiple times is totally okay. You've done all that work, you should get as much out of it as you can. However, you should ask yourself the question, <em>is this audience different from the one I originally spoke to?</em></p>
<p>There are a lot of reasons that answer could be yes. There are React conferences, TypeScript conferences, and vanilla JavaScript conferences. It's a safe bet that those audiences will all have different levels of familiarity with parts of your talk.</p>
<p>You should also consider cultural differences. Last year I gave my Functional Programming talk in Israel. I made it a point to replace all my Taylor Swift references with Natalie Portman to localize.</p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>If this sounds like a lot of work, it is. I estimate I spend one to two hours on every minute I'm speaking. The point of this is to know how to spend those fourty to sixty hours and get the most for your time.</p>
<p>Good luck with your talk! Feel free to tweet <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a> with questions.</p>
<h2></h2>
`.trim(),tags:["Tech","public-speaking"],banner_img:"/images/blog/public-speaking.jpg",wordCount:1239},If={id:21,slug:"migrating-from-underscore-to-lodash",title:"Migrating from Underscore to Lodash",date:"September 5, 2018",excerpt:"How we successfully migrated the Dropbox web application from Underscore to Lodash, a comprehensive guide to large-scale JavaScript library migrations.",content:`
<p><em>Originally published on the <a href="https://dropbox.tech/frontend/migrating-from-underscore-to-lodash">Dropbox Tech Blog</a></em></p>



<p><strong>By Matthew Gerstman and Stacey Sern • September 5, 2018</strong></p>



<p>The core Dropbox web application is 10 years old and used by millions of users per day. Hundreds of front-end engineers across multiple cities actively work on it. Unsurprisingly, our codebase is very large and somewhat irregular. Recently written parts have thorough test coverage, other parts haven't been updated in years.</p>



<p>Over the past two years we've worked to modernize our front-end stack. We've successfully moved from CoffeeScript to TypeScript, from jQuery to React, and from a custom Flux implementation to Redux. Having completed these migrations we identified our utility library, Underscore, as one more candidate for migration.</p>



<h2>Why migrate?</h2>



<p>When we began our research, Underscore hadn't seen an update in 3 years. Newer developers were hesitant to use a deprecated library. We wanted to fill that need.</p>



<h3>Benefits of Lodash</h3>



<p>Lodash is a utility library composed of many individual modules. It can be used as a complete library, as individual modules, or as a custom build consisting of just the necessary functions. It's the single most used utility library on the web, and as a result is extremely battle tested. It heavily optimizes for front-end CPU performance in a way that Underscore doesn't. For example, Lodash is implemented to take advantage of JIT in JavaScript engines.</p>



<p>It also offers new features that promote functional programming. For example, it's well suited for building a functional selector layer between React and Redux, two technologies we use in our front-end codebase. Finally, Lodash is actively maintained, which is critical to long-term support of the library.</p>



<h2>Setting a strategy for migration</h2>



<p>We wanted to use a strategic migration approach. By gathering consensus from our internal community, doing research first, and constructing a bespoke build for our environment before migrating our entire codebase, we hoped to avoid surprises and ensure a smooth transition.</p>



<h3>Getting alignment with a Web Enhancement Proposal</h3>



<p>At Dropbox we have a process called Web Enhancement Proposals (WEPs). Similar to Python's PEPs or JavaScript's TC39 process, WEPs are a way to propose large-scale changes to our web infrastructure. They provide a forum for discussion and help us reach consensus before making major technical decisions.</p>



<p>We wrote a WEP proposing the migration from Underscore to Lodash. This gave the broader engineering team a chance to provide feedback and raise concerns. The proposal outlined our reasoning, the benefits we expected, and our migration strategy.</p>



<h3>Doing the research first</h3>



<p>Before writing any code, we did extensive research. We needed to understand:</p>



<ul>

<li>Which Underscore functions were actually being used in our codebase</li>


<li>How those functions mapped to Lodash equivalents</li>


<li>Whether any functions had different behavior between libraries</li>


<li>What our final bundle size would look like</li>

</ul>



<p>We wrote scripts to analyze our codebase and identify all Underscore usage. This gave us a complete picture of what we'd need to migrate.</p>



<h3>Choosing the right tools</h3>



<p>We evaluated several approaches for the migration:</p>



<ol>

<li><strong>Manual find-and-replace</strong>: Too error-prone and time-consuming</li>


<li><strong>Automated codemods</strong>: Promising, but needed careful testing</li>


<li><strong>Aliasing Underscore to Lodash</strong>: Quick but risky</li>

</ol>



<p>We ultimately chose a hybrid approach: automated codemods for the bulk of the work, with manual review for edge cases.</p>



<h3>Building the bundle</h3>



<p>One of our key concerns was bundle size. We didn't want to ship the entire Lodash library if we were only using a subset of functions.</p>



<p>We used Webpack to create a custom Lodash build containing only the functions we actually needed. This required some experimentation to get right.</p>



<p>We should note that the unminified Webpack bundle came with a fair amount of Webpack cruft: comments, dependency resolution, and other snippets Webpack needs to do its job. However we decided that letting Bazel minify and remove most of this was a reasonable tradeoff to make.</p>



<h2>Migrating the Codebase</h2>



<p>It was finally time for the big scary part: migrating the codebase. Everything until now had been implemented in a vacuum; we hadn't yet gone out and touched anyone else's code.</p>



<p>We constructed a comprehensive mapping table showing how each Underscore function mapped to its Lodash equivalent. Some functions had direct 1:1 mappings, others required slight modifications, and a few had no direct equivalent.</p>



<h3>Splitting the work</h3>



<p>Rather than attempt a big-bang migration, we split the work into phases:</p>



<ol>

<li><strong>Phase 1</strong>: Migrate functions with direct 1:1 mappings</li>


<li><strong>Phase 2</strong>: Migrate functions requiring slight modifications</li>


<li><strong>Phase 3</strong>: Handle edge cases and custom wrappers</li>


<li><strong>Phase 4</strong>: Remove Underscore entirely</li>

</ol>



<p>Each phase was deployed separately, giving us time to catch and fix any issues before moving on.</p>



<h3>Exactly one bug</h3>



<p>Despite migrating thousands of lines of code, we only encountered a single bug in production. It was related to a subtle difference in how Underscore and Lodash handle empty arrays in their <code>_.compact</code> function.</p>



<p>This speaks to the thoroughness of our preparation and testing. The research phase paid off.</p>



<h2>Conclusion</h2>



<p>Migrating from Underscore to Lodash was a significant undertaking, but it was worth it. We now have a modern, well-maintained utility library that's better suited to our needs.</p>



<p>The key lessons we learned:</p>



<ol>

<li><strong>Do your research first</strong>: Understanding the problem space saved us countless hours later</li>


<li><strong>Get organizational buy-in</strong>: The WEP process helped us build consensus</li>


<li><strong>Migrate incrementally</strong>: Phased rollouts are safer than big-bang changes</li>


<li><strong>Test thoroughly</strong>: Our extensive testing caught issues before they reached production</li>

</ol>



<p>If you're considering a similar migration, we hope our experience helps guide your approach.</p>



<hr>



<p><em>Read the original article on the <a href="https://dropbox.tech/frontend/migrating-from-underscore-to-lodash">Dropbox Tech Blog</a></em></p>
`.trim(),tags:["Tech","javascript","dropbox"],banner_img:"/images/blog/migrating-from-underscore-to-lodash/underscore-lodash-train.jpg",wordCount:909},zf={id:22,slug:"software-engineering-lifecycle-dropbox-plus",title:"The Software Engineering Lifecycle: How We Built the New Dropbox Plus",date:"September 15, 2020",excerpt:"A behind-the-scenes look at building Dropbox Plus, from problem scoping through launch, covering team dynamics, technical decisions, and lessons learned.",content:`
<p><em>Originally published on the <a href="https://dropbox.tech/frontend/the-software-engineering-lifecycle--how-we-built-the-new-dropbox">Dropbox Tech Blog</a></em></p>



<p><strong>By Matthew Gerstman • September 15, 2020</strong></p>



<p>A few weeks ago, we released <a href="https://blog.dropbox.com/topics/product-tips/new-dropbox-helps-manage-work-and-home">a whole bunch of new features</a> to Dropbox Plus, our paid plan for personal users. While we started as a storage company, we've grown to be a hub to manage your digital life. About 150 people worked on this launch: engineers, product managers, designers, copywriters, and many more.</p>



<p>Through a combination of luck and happenstance, I was fortunate enough to touch almost every part of this launch. I got to see how different teams work, as I joined each at different stages of the software engineering lifecycle.</p>



<p>In this post I'll distill my experience working on different parts of the launch, and discuss how we think about building software. I'll go into a few technical details, but mostly focus on how teams organize and operate.</p>



<h2>Problem Scoping</h2>



<p>Toward the end of 2019 we had a realization: while we had built incredible new products for our professional users like the <a href="https://blog.dropbox.com/topics/product-tips/new-dropbox">new Dropbox</a> and <a href="https://www.dropbox.com/transfer">Dropbox Transfer</a>, it had been a while since we delivered new value to our personal users.</p>



<p>We set out to change that. We put together a team focused exclusively on helping personal users manage their digital lives. At the time we didn't know how much those lives and needs would change the year to come, but in hindsight our timing was great.</p>



<p>Our contract with our customers is simple: We build products that people like so much that millions of them pay for it. As a rule, we aspire to be worthy of trust in all situations. You are our customer, not our product.</p>



<p>Merging our mission and our values, we came up with a simple plan: ship a bunch of timely, useful features to our most loyal users. After a lot of discussion about what to build, we came up with the new Dropbox Plus.</p>



<p>We knew our users wanted <a href="https://www.dropbox.com/features/cloud-storage/computer-backup">computer backup</a>. This was finally possible thanks to our <a href="https://dropbox.tech/infrastructure/rewriting-the-heart-of-our-sync-engine">brand new sync engine</a>, which we had just finished rolling out in June.</p>



<p>We did weeks of customer research and learned that users wanted a handful of specific new features from us. They wanted a special folder where they could store their most important files, this became <strong>Vault</strong>. They wanted to be able to rewind their entire Dropbox to recover from ransomware or accidental deletion, this became <strong>Rewind</strong>. They wanted a way to track down and free up space on their computer, this became <strong>Computer Backup</strong>.</p>



<h3>Family</h3>



<p>One feature stood out as particularly important: <strong>Family</strong>. We learned that many of our users were sharing their personal Dropbox accounts with family members. They'd share credentials, which was both insecure and inconvenient.</p>



<p>We decided to build a proper family plan. Each family member would get their own account with their own space, but they'd all be on one subscription. We'd build a special shared folder that the whole family could access.</p>



<h2>Plan Before Coding</h2>



<p>Before writing any code, we spent significant time in planning. This is critical for large projects with many dependencies.</p>



<p>We held design reviews where designers presented mockups and gathered feedback. We held technical design reviews where engineers proposed architectures and discussed tradeoffs. We wrote detailed specs outlining exactly what we'd build.</p>



<p>This upfront investment paid off. When we finally started coding, everyone knew what they were building and why.</p>



<h3>Team Dynamics</h3>



<p>Large projects require careful coordination between many teams. For Dropbox Plus, we had:</p>



<ul>

<li><strong>Desktop client team</strong>: Building the backup and sync features</li>


<li><strong>Web team</strong>: Building the web UI for all features</li>


<li><strong>API team</strong>: Building the backend services</li>


<li><strong>Vault team</strong>: Building the secure folder feature</li>


<li><strong>Rewind team</strong>: Building the recovery feature</li>


<li><strong>Family team</strong>: Building the family plan feature</li>

</ul>



<p>Each team had its own engineering lead, product manager, and designer. We held weekly syncs to keep everyone aligned.</p>



<h2>Speeding Up Development</h2>



<p>One of the biggest challenges in large projects is maintaining velocity. As teams grow and dependencies multiply, it's easy to slow down.</p>



<p>We used several strategies to stay fast:</p>



<ol>

<li><strong>Clear ownership</strong>: Each feature had a single team responsible for it</li>


<li><strong>Parallel workstreams</strong>: Teams worked independently where possible</li>


<li><strong>Integration points</strong>: We defined clear interfaces between systems early</li>


<li><strong>Regular demos</strong>: Teams showed progress weekly to catch issues early</li>


<li><strong>Automated testing</strong>: Comprehensive test coverage gave us confidence to move fast</li>

</ol>



<h3>Milestones</h3>



<p>We broke the project into clear milestones:</p>



<ol>

<li><strong>Internal Alpha</strong>: Get it working for Dropbox employees</li>


<li><strong>External Beta</strong>: Invite a small group of users to test</li>


<li><strong>Gradual Rollout</strong>: Slowly expand to all users</li>


<li><strong>General Availability</strong>: Launch to everyone</li>

</ol>



<p>Each milestone had specific success criteria. We wouldn't move to the next phase until we met them.</p>



<h2>Internal Alpha: Dogfooding</h2>



<p>Before releasing to users, we released to Dropbox employees. We call this "dogfooding" - eating our own dog food.</p>



<p>This was incredibly valuable. Employees found bugs, suggested improvements, and stress-tested the features in real-world scenarios. We got feedback from hundreds of internal users before a single external user saw the product.</p>



<p>The feedback was sometimes brutal but always helpful. Engineers on other teams would file detailed bug reports. Executives would question design decisions. Everyone had opinions, and we listened to all of them.</p>



<h3>Onboarding a new teammate</h3>



<p>Midway through the project, I joined the Vault team. Vault was the secure folder feature - a special folder that required an additional PIN to access.</p>



<p>The very first thing I did was set up a 1:1 with each and every person with whom I'd be working. We had engineers working on locking/unlocking the folder, serving APIs, updating the desktop app, and working on the existing frontend. We also had a product manager and a designer.</p>



<p>I knew it was important to establish these relationships early on if I were to become an effective member of the team.</p>



<h3>Joining Vault</h3>



<p>When I joined Vault, the team had already been working for months. They had working prototypes, clear designs, and a solid technical plan.</p>



<p>My job was to build the web frontend. I needed to create the UI for setting up Vault, accessing it, and managing it.</p>



<p>I started by reviewing all the existing design docs and technical specs. I attended the team's daily standups and weekly planning meetings. I paired with other engineers to understand the codebase.</p>



<p>Within two weeks, I had shipped my first feature: the Vault setup flow. Within a month, I was a fully productive member of the team.</p>



<h2>Class Dismissed</h2>



<p>By this point in the project, we were deep into implementation. The initial planning phase was over. Now it was all about execution.</p>



<p>We held these 1:1s over Zoom as soon as the company had sent us all to work from home, rather than waiting until April. It was a shift for everyone but it worked. Over time I figured out who I'd be working with the most. I set up weekly 1:1s with them to make sure we stayed in sync from afar.</p>



<h3>Shipping Our Team Coding Standards</h3>



<p>As I worked on Vault, I noticed our team had different coding styles. Some engineers preferred functional programming, others object-oriented. Some wrote detailed comments, others preferred self-documenting code.</p>



<p>I proposed we establish team coding standards. We held a meeting where everyone shared their preferences, then we voted on contentious points.</p>



<p>The result was a document outlining our team's conventions. It wasn't perfect, but it gave us consistency. New code looked like it was written by one person, not five.</p>



<h3>Nothing's Perfect</h3>



<p>During Vault development, we experimented with a new internal technology called API-QL, a GraphQL-like query language for our internal APIs.</p>



<p>It worked well in theory, but in practice it added complexity without enough benefit for our use case. After a few weeks, we decided to switch back to our standard REST APIs.</p>



<p>There was an important lesson here: Ideas that work flawlessly on one project might not transfer to another. API-QL is a fantastic technology and we're continuing to invest in it, but it wasn't the right fit for this project at this time.</p>



<h3>Reflecting</h3>



<p>Looking back, the key to our success was balance:</p>



<ul>

<li>Balance between planning and execution</li>


<li>Balance between speed and quality</li>


<li>Balance between individual autonomy and team coordination</li>


<li>Balance between shipping fast and getting it right</li>

</ul>



<p>We didn't always get the balance right, but we kept adjusting until we did.</p>



<h2>Entrypoints</h2>



<p>One technical challenge worth highlighting: entrypoints.</p>



<p>Dropbox has a massive web codebase. To keep page load times fast, we split our JavaScript into many small bundles. Each page loads only the code it needs.</p>



<p>For Dropbox Plus, we added many new pages: Vault setup, Rewind UI, Family management, etc. Each needed its own entrypoint.</p>



<p>We used Webpack's code splitting to create these entrypoints automatically. When a user navigated to a new page, we'd load just the code for that page. This kept our bundle sizes small and our app fast.</p>



<p>We also used dynamic imports to load code on-demand. For example, the Vault PIN entry dialog was loaded only when a user tried to access their Vault. This saved bandwidth for users who never used the feature.</p>



<p>The result: despite adding significant new functionality, our page load times actually improved.</p>



<h2>Conclusion</h2>



<p>Building Dropbox Plus was a massive undertaking. It required coordination between dozens of teams, careful planning, and disciplined execution.</p>



<p>The key lessons I learned:</p>



<ol>

<li><strong>Plan thoroughly before coding</strong>: The upfront investment pays off</li>


<li><strong>Break large projects into milestones</strong>: Celebrate progress along the way</li>


<li><strong>Dogfood your own products</strong>: Internal testing catches issues early</li>


<li><strong>Establish clear team norms</strong>: Consistency makes collaboration easier</li>


<li><strong>Stay flexible</strong>: Be willing to change course when something isn't working</li>


<li><strong>Build relationships</strong>: 1:1s and regular communication are critical</li>


<li><strong>Optimize for speed</strong>: Technical decisions should enable fast iteration</li>

</ol>



<p>If you're working on a large software project, I hope these lessons help you ship something great.</p>



<hr>



<p><em>Read the original article on the <a href="https://dropbox.tech/frontend/the-software-engineering-lifecycle--how-we-built-the-new-dropbox">Dropbox Tech Blog</a></em></p>
`.trim(),tags:["Tech","dropbox","product"],banner_img:"/images/blog/software-engineering-lifecycle-dropbox-plus/dropbox-plus-hero.jpg",wordCount:1639},to=[nf,of,rf,af,sf,lf,cf,df,uf,pf,hf,mf,gf,ff,yf,wf,vf,bf,kf,xf,Sf,Tf,If,zf];function jf(){const{slug:e}=aa();return to.some(n=>n.slug===e)?s.jsx(Hr,{to:`/writing/${e}`,replace:!0}):s.jsx(Hr,{to:"/",replace:!0})}const Pf="_container_1dxfq_1",_f="_image_1dxfq_6",Cf="_loading_1dxfq_13",Ef="_loaded_1dxfq_17",tr={container:Pf,image:_f,loading:Cf,loaded:Ef},Nf={"all-in-on-homekit/bedroom-media.jpeg":{original:"/images/blog/all-in-on-homekit/bedroom-media.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/bedroom-media.webp",medium:"/images/optimized/medium/all-in-on-homekit/bedroom-media.webp",large:"/images/optimized/large/all-in-on-homekit/bedroom-media.webp",full:"/images/optimized/full/all-in-on-homekit/bedroom-media.webp"}},"all-in-on-homekit/bedroom.jpeg":{original:"/images/blog/all-in-on-homekit/bedroom.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/bedroom.webp",medium:"/images/optimized/medium/all-in-on-homekit/bedroom.webp",large:"/images/optimized/large/all-in-on-homekit/bedroom.webp",full:"/images/optimized/full/all-in-on-homekit/bedroom.webp"}},"all-in-on-homekit/dining-room.jpeg":{original:"/images/blog/all-in-on-homekit/dining-room.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/dining-room.webp",medium:"/images/optimized/medium/all-in-on-homekit/dining-room.webp",large:"/images/optimized/large/all-in-on-homekit/dining-room.webp",full:"/images/optimized/full/all-in-on-homekit/dining-room.webp"}},"all-in-on-homekit/entryway-dakboard.jpeg":{original:"/images/blog/all-in-on-homekit/entryway-dakboard.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/entryway-dakboard.webp",medium:"/images/optimized/medium/all-in-on-homekit/entryway-dakboard.webp",large:"/images/optimized/large/all-in-on-homekit/entryway-dakboard.webp",full:"/images/optimized/full/all-in-on-homekit/entryway-dakboard.webp"}},"all-in-on-homekit/floorplan-markup.jpg":{original:"/images/blog/all-in-on-homekit/floorplan-markup.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/floorplan-markup.webp",medium:"/images/optimized/medium/all-in-on-homekit/floorplan-markup.webp",large:"/images/optimized/large/all-in-on-homekit/floorplan-markup.webp",full:"/images/optimized/full/all-in-on-homekit/floorplan-markup.webp"}},"all-in-on-homekit/home-app-bedroom.png":{original:"/images/blog/all-in-on-homekit/home-app-bedroom.png",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/home-app-bedroom.webp",medium:"/images/optimized/medium/all-in-on-homekit/home-app-bedroom.webp",large:"/images/optimized/large/all-in-on-homekit/home-app-bedroom.webp",full:"/images/optimized/full/all-in-on-homekit/home-app-bedroom.webp"}},"all-in-on-homekit/home-app-kitchen.png":{original:"/images/blog/all-in-on-homekit/home-app-kitchen.png",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/home-app-kitchen.webp",medium:"/images/optimized/medium/all-in-on-homekit/home-app-kitchen.webp",large:"/images/optimized/large/all-in-on-homekit/home-app-kitchen.webp",full:"/images/optimized/full/all-in-on-homekit/home-app-kitchen.webp"}},"all-in-on-homekit/home-app-living-room.png":{original:"/images/blog/all-in-on-homekit/home-app-living-room.png",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/home-app-living-room.webp",medium:"/images/optimized/medium/all-in-on-homekit/home-app-living-room.webp",large:"/images/optimized/large/all-in-on-homekit/home-app-living-room.webp",full:"/images/optimized/full/all-in-on-homekit/home-app-living-room.webp"}},"all-in-on-homekit/home-app-misc.png":{original:"/images/blog/all-in-on-homekit/home-app-misc.png",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/home-app-misc.webp",medium:"/images/optimized/medium/all-in-on-homekit/home-app-misc.webp",large:"/images/optimized/large/all-in-on-homekit/home-app-misc.webp",full:"/images/optimized/full/all-in-on-homekit/home-app-misc.webp"}},"all-in-on-homekit/home-app-office.png":{original:"/images/blog/all-in-on-homekit/home-app-office.png",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/home-app-office.webp",medium:"/images/optimized/medium/all-in-on-homekit/home-app-office.webp",large:"/images/optimized/large/all-in-on-homekit/home-app-office.webp",full:"/images/optimized/full/all-in-on-homekit/home-app-office.webp"}},"all-in-on-homekit/home-app-overview.png":{original:"/images/blog/all-in-on-homekit/home-app-overview.png",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/home-app-overview.webp",medium:"/images/optimized/medium/all-in-on-homekit/home-app-overview.webp",large:"/images/optimized/large/all-in-on-homekit/home-app-overview.webp",full:"/images/optimized/full/all-in-on-homekit/home-app-overview.webp"}},"all-in-on-homekit/homekit-hero.jpeg":{original:"/images/blog/all-in-on-homekit/homekit-hero.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/homekit-hero.webp",medium:"/images/optimized/medium/all-in-on-homekit/homekit-hero.webp",large:"/images/optimized/large/all-in-on-homekit/homekit-hero.webp",full:"/images/optimized/full/all-in-on-homekit/homekit-hero.webp"}},"all-in-on-homekit/ipod-mini-display.jpeg":{original:"/images/blog/all-in-on-homekit/ipod-mini-display.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/ipod-mini-display.webp",medium:"/images/optimized/medium/all-in-on-homekit/ipod-mini-display.webp",large:"/images/optimized/large/all-in-on-homekit/ipod-mini-display.webp",full:"/images/optimized/full/all-in-on-homekit/ipod-mini-display.webp"}},"all-in-on-homekit/kitchen.jpeg":{original:"/images/blog/all-in-on-homekit/kitchen.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/kitchen.webp",medium:"/images/optimized/medium/all-in-on-homekit/kitchen.webp",large:"/images/optimized/large/all-in-on-homekit/kitchen.webp",full:"/images/optimized/full/all-in-on-homekit/kitchen.webp"}},"all-in-on-homekit/living-room-behind-couch.jpeg":{original:"/images/blog/all-in-on-homekit/living-room-behind-couch.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/living-room-behind-couch.webp",medium:"/images/optimized/medium/all-in-on-homekit/living-room-behind-couch.webp",large:"/images/optimized/large/all-in-on-homekit/living-room-behind-couch.webp",full:"/images/optimized/full/all-in-on-homekit/living-room-behind-couch.webp"}},"all-in-on-homekit/living-room.jpeg":{original:"/images/blog/all-in-on-homekit/living-room.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/living-room.webp",medium:"/images/optimized/medium/all-in-on-homekit/living-room.webp",large:"/images/optimized/large/all-in-on-homekit/living-room.webp",full:"/images/optimized/full/all-in-on-homekit/living-room.webp"}},"all-in-on-homekit/macbook-windows-xp.jpeg":{original:"/images/blog/all-in-on-homekit/macbook-windows-xp.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/macbook-windows-xp.webp",medium:"/images/optimized/medium/all-in-on-homekit/macbook-windows-xp.webp",large:"/images/optimized/large/all-in-on-homekit/macbook-windows-xp.webp",full:"/images/optimized/full/all-in-on-homekit/macbook-windows-xp.webp"}},"all-in-on-homekit/office-bed-bookshelf.jpeg":{original:"/images/blog/all-in-on-homekit/office-bed-bookshelf.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/office-bed-bookshelf.webp",medium:"/images/optimized/medium/all-in-on-homekit/office-bed-bookshelf.webp",large:"/images/optimized/large/all-in-on-homekit/office-bed-bookshelf.webp",full:"/images/optimized/full/all-in-on-homekit/office-bed-bookshelf.webp"}},"all-in-on-homekit/office-doorway.jpeg":{original:"/images/blog/all-in-on-homekit/office-doorway.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/office-doorway.webp",medium:"/images/optimized/medium/all-in-on-homekit/office-doorway.webp",large:"/images/optimized/large/all-in-on-homekit/office-doorway.webp",full:"/images/optimized/full/all-in-on-homekit/office-doorway.webp"}},"all-in-on-homekit/photo-wall-ipod-display.jpeg":{original:"/images/blog/all-in-on-homekit/photo-wall-ipod-display.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/photo-wall-ipod-display.webp",medium:"/images/optimized/medium/all-in-on-homekit/photo-wall-ipod-display.webp",large:"/images/optimized/large/all-in-on-homekit/photo-wall-ipod-display.webp",full:"/images/optimized/full/all-in-on-homekit/photo-wall-ipod-display.webp"}},"all-in-on-homekit/server-closet.jpeg":{original:"/images/blog/all-in-on-homekit/server-closet.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/all-in-on-homekit/server-closet.webp",medium:"/images/optimized/medium/all-in-on-homekit/server-closet.webp",large:"/images/optimized/large/all-in-on-homekit/server-closet.webp",full:"/images/optimized/full/all-in-on-homekit/server-closet.webp"}},"apartment.jpeg":{original:"/images/blog/apartment.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/apartment.webp",medium:"/images/optimized/medium/apartment.webp",large:"/images/optimized/large/apartment.webp",full:"/images/optimized/full/apartment.webp"}},"everything-i-wish-i-knew-before-my-first-bay-area-internship/Bay-Bridge.jpg":{original:"/images/blog/everything-i-wish-i-knew-before-my-first-bay-area-internship/Bay-Bridge.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/everything-i-wish-i-knew-before-my-first-bay-area-internship/Bay-Bridge.webp",medium:"/images/optimized/medium/everything-i-wish-i-knew-before-my-first-bay-area-internship/Bay-Bridge.webp",large:"/images/optimized/large/everything-i-wish-i-knew-before-my-first-bay-area-internship/Bay-Bridge.webp",full:"/images/optimized/full/everything-i-wish-i-knew-before-my-first-bay-area-internship/Bay-Bridge.webp"}},"functional-programming-fundamentals/fp-concepts-diagram.png":{original:"/images/blog/functional-programming-fundamentals/fp-concepts-diagram.png",sizes:{thumbnail:"/images/optimized/thumbnail/functional-programming-fundamentals/fp-concepts-diagram.webp",medium:"/images/optimized/medium/functional-programming-fundamentals/fp-concepts-diagram.webp",large:"/images/optimized/large/functional-programming-fundamentals/fp-concepts-diagram.webp",full:"/images/optimized/full/functional-programming-fundamentals/fp-concepts-diagram.webp"}},"functional-programming-fundamentals/functional-programming-hero.jpg":{original:"/images/blog/functional-programming-fundamentals/functional-programming-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/functional-programming-fundamentals/functional-programming-hero.webp",medium:"/images/optimized/medium/functional-programming-fundamentals/functional-programming-hero.webp",large:"/images/optimized/large/functional-programming-fundamentals/functional-programming-hero.webp",full:"/images/optimized/full/functional-programming-fundamentals/functional-programming-hero.webp"}},"hello-there/bay-bridge-sf.jpg":{original:"/images/blog/hello-there/bay-bridge-sf.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hello-there/bay-bridge-sf.webp",medium:"/images/optimized/medium/hello-there/bay-bridge-sf.webp",large:"/images/optimized/large/hello-there/bay-bridge-sf.webp",full:"/images/optimized/full/hello-there/bay-bridge-sf.webp"}},"hello-there/matthew-speaking-1.jpg":{original:"/images/blog/hello-there/matthew-speaking-1.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hello-there/matthew-speaking-1.webp",medium:"/images/optimized/medium/hello-there/matthew-speaking-1.webp",large:"/images/optimized/large/hello-there/matthew-speaking-1.webp",full:"/images/optimized/full/hello-there/matthew-speaking-1.webp"}},"hello-there/matthew-speaking-2.jpg":{original:"/images/blog/hello-there/matthew-speaking-2.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hello-there/matthew-speaking-2.webp",medium:"/images/optimized/medium/hello-there/matthew-speaking-2.webp",large:"/images/optimized/large/hello-there/matthew-speaking-2.webp",full:"/images/optimized/full/hello-there/matthew-speaking-2.webp"}},"hero-library-cats.png":{original:"/images/blog/hero-library-cats.png",sizes:{thumbnail:"/images/optimized/thumbnail/hero-library-cats.webp",medium:"/images/optimized/medium/hero-library-cats.webp",large:"/images/optimized/large/hero-library-cats.webp",full:"/images/optimized/full/hero-library-cats.webp"}},"hero-mountain-lake.jpg":{original:"/images/blog/hero-mountain-lake.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hero-mountain-lake.webp",medium:"/images/optimized/medium/hero-mountain-lake.webp",large:"/images/optimized/large/hero-mountain-lake.webp",full:"/images/optimized/full/hero-mountain-lake.webp"}},"hero-mountain-sunset.jpg":{original:"/images/blog/hero-mountain-sunset.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hero-mountain-sunset.webp",medium:"/images/optimized/medium/hero-mountain-sunset.webp",large:"/images/optimized/large/hero-mountain-sunset.webp",full:"/images/optimized/full/hero-mountain-sunset.webp"}},"hero-mountain-valley.jpg":{original:"/images/blog/hero-mountain-valley.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hero-mountain-valley.webp",medium:"/images/optimized/medium/hero-mountain-valley.webp",large:"/images/optimized/large/hero-mountain-valley.webp",full:"/images/optimized/full/hero-mountain-valley.webp"}},"hero-mountains-night.jpg":{original:"/images/blog/hero-mountains-night.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hero-mountains-night.webp",medium:"/images/optimized/medium/hero-mountains-night.webp",large:"/images/optimized/large/hero-mountains-night.webp",full:"/images/optimized/full/hero-mountains-night.webp"}},"hero-northern-lights.jpg":{original:"/images/blog/hero-northern-lights.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hero-northern-lights.webp",medium:"/images/optimized/medium/hero-northern-lights.webp",large:"/images/optimized/large/hero-northern-lights.webp",full:"/images/optimized/full/hero-northern-lights.webp"}},"hero-technical-interview.jpg":{original:"/images/blog/hero-technical-interview.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/hero-technical-interview.webp",medium:"/images/optimized/medium/hero-technical-interview.webp",large:"/images/optimized/large/hero-technical-interview.webp",full:"/images/optimized/full/hero-technical-interview.webp"}},"history-of-the-web/chrome-announcement.png":{original:"/images/blog/history-of-the-web/chrome-announcement.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/chrome-announcement.webp",medium:"/images/optimized/medium/history-of-the-web/chrome-announcement.webp",large:"/images/optimized/large/history-of-the-web/chrome-announcement.webp",full:"/images/optimized/full/history-of-the-web/chrome-announcement.webp"}},"history-of-the-web/digg-website.png":{original:"/images/blog/history-of-the-web/digg-website.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/digg-website.webp",medium:"/images/optimized/medium/history-of-the-web/digg-website.webp",large:"/images/optimized/large/history-of-the-web/digg-website.webp",full:"/images/optimized/full/history-of-the-web/digg-website.webp"}},"history-of-the-web/dom-tree.png":{original:"/images/blog/history-of-the-web/dom-tree.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/dom-tree.webp",medium:"/images/optimized/medium/history-of-the-web/dom-tree.webp",large:"/images/optimized/large/history-of-the-web/dom-tree.webp",full:"/images/optimized/full/history-of-the-web/dom-tree.webp"}},"history-of-the-web/esbuild-benchmark.png":{original:"/images/blog/history-of-the-web/esbuild-benchmark.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/esbuild-benchmark.webp",medium:"/images/optimized/medium/history-of-the-web/esbuild-benchmark.webp",large:"/images/optimized/large/history-of-the-web/esbuild-benchmark.webp",full:"/images/optimized/full/history-of-the-web/esbuild-benchmark.webp"}},"history-of-the-web/firefox-windows-xp.png":{original:"/images/blog/history-of-the-web/firefox-windows-xp.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/firefox-windows-xp.webp",medium:"/images/optimized/medium/history-of-the-web/firefox-windows-xp.webp",large:"/images/optimized/large/history-of-the-web/firefox-windows-xp.webp",full:"/images/optimized/full/history-of-the-web/firefox-windows-xp.webp"}},"history-of-the-web/flux-data-flow.png":{original:"/images/blog/history-of-the-web/flux-data-flow.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/flux-data-flow.webp",medium:"/images/optimized/medium/history-of-the-web/flux-data-flow.webp",large:"/images/optimized/large/history-of-the-web/flux-data-flow.webp",full:"/images/optimized/full/history-of-the-web/flux-data-flow.webp"}},"history-of-the-web/ie-browser.png":{original:"/images/blog/history-of-the-web/ie-browser.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/ie-browser.webp",medium:"/images/optimized/medium/history-of-the-web/ie-browser.webp",large:"/images/optimized/large/history-of-the-web/ie-browser.webp",full:"/images/optimized/full/history-of-the-web/ie-browser.webp"}},"history-of-the-web/meebo-messenger.png":{original:"/images/blog/history-of-the-web/meebo-messenger.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/meebo-messenger.webp",medium:"/images/optimized/medium/history-of-the-web/meebo-messenger.webp",large:"/images/optimized/large/history-of-the-web/meebo-messenger.webp",full:"/images/optimized/full/history-of-the-web/meebo-messenger.webp"}},"history-of-the-web/mosaic-browser.png":{original:"/images/blog/history-of-the-web/mosaic-browser.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/mosaic-browser.webp",medium:"/images/optimized/medium/history-of-the-web/mosaic-browser.webp",large:"/images/optimized/large/history-of-the-web/mosaic-browser.webp",full:"/images/optimized/full/history-of-the-web/mosaic-browser.webp"}},"history-of-the-web/netscape-ask-jeeves.png":{original:"/images/blog/history-of-the-web/netscape-ask-jeeves.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/netscape-ask-jeeves.webp",medium:"/images/optimized/medium/history-of-the-web/netscape-ask-jeeves.webp",large:"/images/optimized/large/history-of-the-web/netscape-ask-jeeves.webp",full:"/images/optimized/full/history-of-the-web/netscape-ask-jeeves.webp"}},"history-of-the-web/netscape-navigator.png":{original:"/images/blog/history-of-the-web/netscape-navigator.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/netscape-navigator.webp",medium:"/images/optimized/medium/history-of-the-web/netscape-navigator.webp",large:"/images/optimized/large/history-of-the-web/netscape-navigator.webp",full:"/images/optimized/full/history-of-the-web/netscape-navigator.webp"}},"history-of-the-web/safari-mac-os.png":{original:"/images/blog/history-of-the-web/safari-mac-os.png",sizes:{thumbnail:"/images/optimized/thumbnail/history-of-the-web/safari-mac-os.webp",medium:"/images/optimized/medium/history-of-the-web/safari-mac-os.webp",large:"/images/optimized/large/history-of-the-web/safari-mac-os.webp",full:"/images/optimized/full/history-of-the-web/safari-mac-os.webp"}},"how-i-prepare-a-talk/Mic-Talks.jpg":{original:"/images/blog/how-i-prepare-a-talk/Mic-Talks.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/how-i-prepare-a-talk/Mic-Talks.webp",medium:"/images/optimized/medium/how-i-prepare-a-talk/Mic-Talks.webp",large:"/images/optimized/large/how-i-prepare-a-talk/Mic-Talks.webp",full:"/images/optimized/full/how-i-prepare-a-talk/Mic-Talks.webp"}},"how-redux-works/redux-architecture-hero.jpeg":{original:"/images/blog/how-redux-works/redux-architecture-hero.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/how-redux-works/redux-architecture-hero.webp",medium:"/images/optimized/medium/how-redux-works/redux-architecture-hero.webp",large:"/images/optimized/large/how-redux-works/redux-architecture-hero.webp",full:"/images/optimized/full/how-redux-works/redux-architecture-hero.webp"}},"how-redux-works-2/westboundary-photography-chris-gill-60180-unsplash.jpg":{original:"/images/blog/how-redux-works-2/westboundary-photography-chris-gill-60180-unsplash.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/how-redux-works-2/westboundary-photography-chris-gill-60180-unsplash.webp",medium:"/images/optimized/medium/how-redux-works-2/westboundary-photography-chris-gill-60180-unsplash.webp",large:"/images/optimized/large/how-redux-works-2/westboundary-photography-chris-gill-60180-unsplash.webp",full:"/images/optimized/full/how-redux-works-2/westboundary-photography-chris-gill-60180-unsplash.webp"}},"living-room.jpeg":{original:"/images/blog/living-room.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/living-room.webp",medium:"/images/optimized/medium/living-room.webp",large:"/images/optimized/large/living-room.webp",full:"/images/optimized/full/living-room.webp"}},"map-filter-reduce/map-filter-reduce-hero.jpg":{original:"/images/blog/map-filter-reduce/map-filter-reduce-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/map-filter-reduce/map-filter-reduce-hero.webp",medium:"/images/optimized/medium/map-filter-reduce/map-filter-reduce-hero.webp",large:"/images/optimized/large/map-filter-reduce/map-filter-reduce-hero.webp",full:"/images/optimized/full/map-filter-reduce/map-filter-reduce-hero.webp"}},"mary-had-a-little-lambda/lambda-calculus-hero.jpg":{original:"/images/blog/mary-had-a-little-lambda/lambda-calculus-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/mary-had-a-little-lambda/lambda-calculus-hero.webp",medium:"/images/optimized/medium/mary-had-a-little-lambda/lambda-calculus-hero.webp",large:"/images/optimized/large/mary-had-a-little-lambda/lambda-calculus-hero.webp",full:"/images/optimized/full/mary-had-a-little-lambda/lambda-calculus-hero.webp"}},"mary-had-a-little-lambda/lambda-diagram.png":{original:"/images/blog/mary-had-a-little-lambda/lambda-diagram.png",sizes:{thumbnail:"/images/optimized/thumbnail/mary-had-a-little-lambda/lambda-diagram.webp",medium:"/images/optimized/medium/mary-had-a-little-lambda/lambda-diagram.webp",large:"/images/optimized/large/mary-had-a-little-lambda/lambda-diagram.webp",full:"/images/optimized/full/mary-had-a-little-lambda/lambda-diagram.webp"}},"migrating-from-underscore-to-lodash/underscore-lodash-train.jpg":{original:"/images/blog/migrating-from-underscore-to-lodash/underscore-lodash-train.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/migrating-from-underscore-to-lodash/underscore-lodash-train.webp",medium:"/images/optimized/medium/migrating-from-underscore-to-lodash/underscore-lodash-train.webp",large:"/images/optimized/large/migrating-from-underscore-to-lodash/underscore-lodash-train.webp",full:"/images/optimized/full/migrating-from-underscore-to-lodash/underscore-lodash-train.webp"}},"misc-1438.jpeg":{original:"/images/blog/misc-1438.jpeg",sizes:{thumbnail:"/images/optimized/thumbnail/misc-1438.webp",medium:"/images/optimized/medium/misc-1438.webp",large:"/images/optimized/large/misc-1438.webp",full:"/images/optimized/full/misc-1438.webp"}},"misc-diagram.png":{original:"/images/blog/misc-diagram.png",sizes:{thumbnail:"/images/optimized/thumbnail/misc-diagram.webp",medium:"/images/optimized/medium/misc-diagram.webp",large:"/images/optimized/large/misc-diagram.webp",full:"/images/optimized/full/misc-diagram.webp"}},"performance-testing-anonymous-functions/ahmad-dirini-F7Sive0fwIg-unsplash.jpg":{original:"/images/blog/performance-testing-anonymous-functions/ahmad-dirini-F7Sive0fwIg-unsplash.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/performance-testing-anonymous-functions/ahmad-dirini-F7Sive0fwIg-unsplash.webp",medium:"/images/optimized/medium/performance-testing-anonymous-functions/ahmad-dirini-F7Sive0fwIg-unsplash.webp",large:"/images/optimized/large/performance-testing-anonymous-functions/ahmad-dirini-F7Sive0fwIg-unsplash.webp",full:"/images/optimized/full/performance-testing-anonymous-functions/ahmad-dirini-F7Sive0fwIg-unsplash.webp"}},"public-speaking.jpg":{original:"/images/blog/public-speaking.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/public-speaking.webp",medium:"/images/optimized/medium/public-speaking.webp",large:"/images/optimized/large/public-speaking.webp",full:"/images/optimized/full/public-speaking.webp"}},"reduce-reduce-reduce/reduce-function-hero.jpg":{original:"/images/blog/reduce-reduce-reduce/reduce-function-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/reduce-reduce-reduce/reduce-function-hero.webp",medium:"/images/optimized/medium/reduce-reduce-reduce/reduce-function-hero.webp",large:"/images/optimized/large/reduce-reduce-reduce/reduce-function-hero.webp",full:"/images/optimized/full/reduce-reduce-reduce/reduce-function-hero.webp"}},"software-engineering-lifecycle-dropbox-plus/dropbox-plus-hero.jpg":{original:"/images/blog/software-engineering-lifecycle-dropbox-plus/dropbox-plus-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/software-engineering-lifecycle-dropbox-plus/dropbox-plus-hero.webp",medium:"/images/optimized/medium/software-engineering-lifecycle-dropbox-plus/dropbox-plus-hero.webp",large:"/images/optimized/large/software-engineering-lifecycle-dropbox-plus/dropbox-plus-hero.webp",full:"/images/optimized/full/software-engineering-lifecycle-dropbox-plus/dropbox-plus-hero.webp"}},"throttle-and-debounce/throttle-debounce-hero.jpg":{original:"/images/blog/throttle-and-debounce/throttle-debounce-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/throttle-and-debounce/throttle-debounce-hero.webp",medium:"/images/optimized/medium/throttle-and-debounce/throttle-debounce-hero.webp",large:"/images/optimized/large/throttle-and-debounce/throttle-debounce-hero.webp",full:"/images/optimized/full/throttle-and-debounce/throttle-debounce-hero.webp"}},"ts-tricks-higher-order-components/higher-order-components-hero.jpg":{original:"/images/blog/ts-tricks-higher-order-components/higher-order-components-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/ts-tricks-higher-order-components/higher-order-components-hero.webp",medium:"/images/optimized/medium/ts-tricks-higher-order-components/higher-order-components-hero.webp",large:"/images/optimized/large/ts-tricks-higher-order-components/higher-order-components-hero.webp",full:"/images/optimized/full/ts-tricks-higher-order-components/higher-order-components-hero.webp"}},"ts-tricks-type-guards/type-guards-hero.jpg":{original:"/images/blog/ts-tricks-type-guards/type-guards-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/ts-tricks-type-guards/type-guards-hero.webp",medium:"/images/optimized/medium/ts-tricks-type-guards/type-guards-hero.webp",large:"/images/optimized/large/ts-tricks-type-guards/type-guards-hero.webp",full:"/images/optimized/full/ts-tricks-type-guards/type-guards-hero.webp"}},"ts-tricks-type-safe-reducers/type-safe-reducers-hero.jpg":{original:"/images/blog/ts-tricks-type-safe-reducers/type-safe-reducers-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/ts-tricks-type-safe-reducers/type-safe-reducers-hero.webp",medium:"/images/optimized/medium/ts-tricks-type-safe-reducers/type-safe-reducers-hero.webp",large:"/images/optimized/large/ts-tricks-type-safe-reducers/type-safe-reducers-hero.webp",full:"/images/optimized/full/ts-tricks-type-safe-reducers/type-safe-reducers-hero.webp"}},"what-ive-been-working-on/hero.png":{original:"/images/blog/what-ive-been-working-on/hero.png",sizes:{thumbnail:"/images/optimized/thumbnail/what-ive-been-working-on/hero.webp",medium:"/images/optimized/medium/what-ive-been-working-on/hero.webp",large:"/images/optimized/large/what-ive-been-working-on/hero.webp",full:"/images/optimized/full/what-ive-been-working-on/hero.webp"}},"what-the-functor/category-diagram.png":{original:"/images/blog/what-the-functor/category-diagram.png",sizes:{thumbnail:"/images/optimized/thumbnail/what-the-functor/category-diagram.webp",medium:"/images/optimized/medium/what-the-functor/category-diagram.webp",large:"/images/optimized/large/what-the-functor/category-diagram.webp",full:"/images/optimized/full/what-the-functor/category-diagram.webp"}},"what-the-functor/functor-diagram.png":{original:"/images/blog/what-the-functor/functor-diagram.png",sizes:{thumbnail:"/images/optimized/thumbnail/what-the-functor/functor-diagram.webp",medium:"/images/optimized/medium/what-the-functor/functor-diagram.webp",large:"/images/optimized/large/what-the-functor/functor-diagram.webp",full:"/images/optimized/full/what-the-functor/functor-diagram.webp"}},"what-the-functor/functor-hero.jpg":{original:"/images/blog/what-the-functor/functor-hero.jpg",sizes:{thumbnail:"/images/optimized/thumbnail/what-the-functor/functor-hero.webp",medium:"/images/optimized/medium/what-the-functor/functor-hero.webp",large:"/images/optimized/large/what-the-functor/functor-hero.webp",full:"/images/optimized/full/what-the-functor/functor-hero.webp"}},"what-the-functor/xkcd-functional-programming.png":{original:"/images/blog/what-the-functor/xkcd-functional-programming.png",sizes:{thumbnail:"/images/optimized/thumbnail/what-the-functor/xkcd-functional-programming.webp",medium:"/images/optimized/medium/what-the-functor/xkcd-functional-programming.webp",large:"/images/optimized/large/what-the-functor/xkcd-functional-programming.webp",full:"/images/optimized/full/what-the-functor/xkcd-functional-programming.webp"}}};function Wi({src:e,alt:t,size:n="large",className:o="",loading:r="lazy",style:a}){const[i,l]=k.useState(!1),[c,d]=k.useState(""),g=e.replace("/images/blog/",""),m=Nf[g];return k.useEffect(()=>{if(!m){d(e),l(!0);return}const f=m.sizes.thumbnail;f&&d(f);const b=m.sizes[n]||m.original,S=new Image;S.src=b,S.onload=()=>{d(b),l(!0)}},[e,n,m]),m?s.jsx("div",{className:tr.container,children:s.jsx("img",{src:c,alt:t,loading:r,className:`${tr.image} ${i?tr.loaded:tr.loading} ${o}`,style:a})}):s.jsx("img",{src:e,alt:t,className:o,loading:r,style:a})}const Mf="_shimmerTextSweep_1y5pd_11",Rf="_shimmerTextSweepPaused_1y5pd_29",Af="_shimmerTextWave_1y5pd_63",Lf="_shimmerTextWavePaused_1y5pd_72",Wf="_shimmerTextGlow_1y5pd_95",Df="_shimmerTextGlowPaused_1y5pd_104",Ff="_shimmerTextFlicker_1y5pd_147",Bf="_shimmerTextFlickerPaused_1y5pd_156",Hf="_shimmerTextRainbow_1y5pd_178",Of="_shimmerTextRainbowPaused_1y5pd_187",$f="_shimmerTextBounce_1y5pd_216",Uf="_shimmerTextBouncePaused_1y5pd_226",Gf="_shimmerTextPulse_1y5pd_250",Yf="_shimmerTextPulsePaused_1y5pd_259",qf="_shimmerSweep_1y5pd_301",Vf="_shimmerSweepPaused_1y5pd_308",Jf="_shimmerPulse_1y5pd_331",Kf="_shimmerPulsePaused_1y5pd_338",Qf="_shimmerBorderTop_1y5pd_359",Xf="_shimmerBorderBottom_1y5pd_360",Zf="_shimmerBorderFull_1y5pd_361",ey="_shimmerBorderRotating_1y5pd_366",ty="_shimmerBorderRotatingPaused_1y5pd_367",ny="_shimmerBorderTopPaused_1y5pd_385",oy="_shimmerBorderBottomPaused_1y5pd_418",ry="_shimmerBorderFullPaused_1y5pd_444",O={shimmerTextSweep:Mf,shimmerTextSweepPaused:Rf,shimmerTextWave:Af,shimmerTextWavePaused:Lf,shimmerTextGlow:Wf,shimmerTextGlowPaused:Df,shimmerTextFlicker:Ff,shimmerTextFlickerPaused:Bf,shimmerTextRainbow:Hf,shimmerTextRainbowPaused:Of,shimmerTextBounce:$f,shimmerTextBouncePaused:Uf,shimmerTextPulse:Gf,shimmerTextPulsePaused:Yf,shimmerSweep:qf,shimmerSweepPaused:Vf,shimmerPulse:Jf,shimmerPulsePaused:Kf,shimmerBorderTop:Qf,shimmerBorderBottom:Xf,shimmerBorderFull:Zf,shimmerBorderRotating:ey,shimmerBorderRotatingPaused:ty,shimmerBorderTopPaused:ny,shimmerBorderBottomPaused:oy,shimmerBorderFullPaused:ry};function ay(){const e=["text"],t=["sweep","pulse","wave","glow","flicker","rainbow","bounce"],n=["subtle","normal","bold"],o=["top","bottom","full","rotating"];return{type:e[Math.floor(Math.random()*e.length)],animationType:t[Math.floor(Math.random()*t.length)],intensity:n[Math.floor(Math.random()*n.length)],duration:Math.random()*4+2,position:o[Math.floor(Math.random()*o.length)]}}const D=({children:e,type:t="text",duration:n=3,colors:o,position:r="top",animationType:a=t==="text"?"sweep":"pulse",intensity:i="normal",className:l="",style:c,as:d,random:g=!1,autoplay:m=!1})=>{const[f]=Jt.useState(()=>g?ay():null),b=(f==null?void 0:f.type)??t,S=(f==null?void 0:f.duration)??n,y=(f==null?void 0:f.animationType)??(a||(b==="text"?"sweep":"pulse")),v=(f==null?void 0:f.intensity)??i,h=(f==null?void 0:f.position)??r,p=o||(()=>{switch(v){case"subtle":return["var(--text-muted)","var(--grappa)","var(--text-muted)"];case"bold":return["var(--text)","var(--grappa-bright)","var(--text)"];case"normal":default:return["var(--text)","var(--grappa-bright)","var(--text)"]}})(),w=p.map((M,R)=>`${M} ${R/(p.length-1)*100}%`).join(", "),x=()=>{const M=!m;if(b==="text")switch(y){case"sweep":return M?O.shimmerTextSweepPaused:O.shimmerTextSweep;case"wave":return M?O.shimmerTextWavePaused:O.shimmerTextWave;case"glow":return M?O.shimmerTextGlowPaused:O.shimmerTextGlow;case"flicker":return M?O.shimmerTextFlickerPaused:O.shimmerTextFlicker;case"rainbow":return M?O.shimmerTextRainbowPaused:O.shimmerTextRainbow;case"bounce":return M?O.shimmerTextBouncePaused:O.shimmerTextBounce;case"pulse":return M?O.shimmerTextPulsePaused:O.shimmerTextPulse}return y==="pulse"?M?O.shimmerPulsePaused:O.shimmerPulse:M?O.shimmerSweepPaused:O.shimmerSweep},I={...c,"--duration":`${S}s`,"--shimmer-gradient":`linear-gradient(90deg, ${w})`},z=d||(b==="text"?"span":"div");if(b==="text"){const M=x();return Jt.createElement(z,{className:`${M} ${l}`,style:I},e)}if(b==="border"){const M=!m,R=h==="rotating"?M?O.shimmerBorderRotatingPaused:O.shimmerBorderRotating:h==="full"?M?O.shimmerBorderFullPaused:O.shimmerBorderFull:h==="bottom"?M?O.shimmerBorderBottomPaused:O.shimmerBorderBottom:M?O.shimmerBorderTopPaused:O.shimmerBorderTop;return Jt.createElement(z,{className:`${R} ${l}`,style:I},e)}if(b==="background"){const M=x();return Jt.createElement(z,{className:`${M} ${l}`,style:I},e)}return s.jsx(s.Fragment,{children:e})},iy="_card_16n7s_12",sy="_cardInner_16n7s_22",ly="_link_16n7s_38",cy="_banner_16n7s_46",dy="_content_16n7s_58",uy="_title_16n7s_66",py="_metaBar_16n7s_81",hy="_date_16n7s_88",my="_badge_16n7s_95",gy="_excerpt_16n7s_104",Ue={card:iy,cardInner:sy,link:ly,banner:cy,content:dy,title:uy,metaBar:py,date:hy,badge:my,excerpt:gy};function fy(e){const t=["subtle","normal","bold"],n=[2,3,4];return{position:"rotating",intensity:t[e%t.length],duration:n[e%n.length],direction:e%2===0?"clockwise":"counter-clockwise"}}function yy({post:e,index:t}){const n=e.wordCount||0,o=Ws(n),r=e.banner_img,a=e.banner_position||"center",i=k.useRef(null),[l,c]=k.useState(0),d=e.externalLink||`/writing/${e.slug}`,g=fy(t),m=f=>{if(!i.current)return;const b=i.current.getBoundingClientRect(),S=b.left+b.width/2,y=b.top+b.height/2,v=f.clientX-S,h=f.clientY-y,p=(Math.atan2(h,v)*(180/Math.PI)+360)%360;c(p)};return s.jsx(D,{type:"border",position:g.position,intensity:g.intensity,duration:g.duration,as:"article",className:Ue.card,style:{"--start-angle":`${l}deg`,"--rotation-direction":g.direction==="clockwise"?"normal":"reverse"},children:s.jsx("div",{ref:i,className:Ue.cardInner,style:{animationDelay:`${Math.min(t*.05,.3)}s`},onMouseEnter:m,children:s.jsxs(dt,{to:d,className:Ue.link,children:[r&&s.jsx(Wi,{src:r,alt:e.title,size:"large",className:Ue.banner,loading:"lazy",style:{objectPosition:a}}),s.jsxs("div",{className:Ue.content,children:[s.jsx(D,{type:"text",random:!0,as:"h2",className:Ue.title,children:e.title}),s.jsxs("div",{className:Ue.metaBar,children:[s.jsx("span",{className:Ue.date,children:e.date}),s.jsxs("span",{className:Ue.badge,children:[o," min read"]}),s.jsxs("span",{className:Ue.badge,children:[n.toLocaleString()," words"]})]}),e.excerpt&&s.jsx("p",{className:Ue.excerpt,children:e.excerpt})]})]})})})}const wy="_container_pwt08_1",vy="_posts_pwt08_7",nc={container:wy,posts:vy};function oc({posts:e}){const t=[...e].sort((n,o)=>new Date(o.date).getTime()-new Date(n.date).getTime());return s.jsx("div",{className:nc.container,children:s.jsx("main",{className:nc.posts,children:t.map((n,o)=>s.jsx(yy,{post:n,index:o},n.id))})})}function Eu(e){k.useEffect(()=>{const t=n=>{var r,a,i,l,c,d,g;const o=n.target;if(o.tagName==="INPUT"||o.tagName==="TEXTAREA"){if(n.key==="Escape"){(r=e.onEscape)==null||r.call(e);return}if((n.metaKey||n.ctrlKey)&&n.key==="k"){n.preventDefault(),(a=e.onSearch)==null||a.call(e);return}return}if((n.metaKey||n.ctrlKey)&&n.key==="k"){n.preventDefault(),(i=e.onSearch)==null||i.call(e);return}if(n.key==="/"){n.preventDefault(),(l=e.onFindInPage)==null||l.call(e);return}if(n.key==="Escape"){(c=e.onEscape)==null||c.call(e);return}if(n.key==="j"&&!n.metaKey&&!n.ctrlKey){n.preventDefault(),(d=e.onNext)==null||d.call(e);return}if(n.key==="k"&&!n.metaKey&&!n.ctrlKey){n.preventDefault(),(g=e.onPrevious)==null||g.call(e);return}};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e])}function by(){return k.useEffect(()=>{var t;if(document.getElementById("twitter-wjs")){(t=window.twttr)!=null&&t.widgets&&window.twttr.widgets.load();return}const e=document.createElement("script");return e.id="twitter-wjs",e.src="https://platform.twitter.com/widgets.js",e.async=!0,e.charset="utf-8",document.body.appendChild(e),()=>{}},[]),null}function ky(e,t){let n=!0;return(...o)=>{n&&(n=!1,e(...o),setTimeout(()=>{n=!0},t))}}function xy(e,t){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>{e(...o)},t)}}const Sy="_demo_3g5yg_1",Ty="_counter_3g5yg_10",Iy="_buttons_3g5yg_18",zy="_button_3g5yg_18",jy="_buttonThrottled_3g5yg_26",Py="_buttonDebounced_3g5yg_27",Ce={demo:Sy,counter:Ty,buttons:Iy,button:zy,buttonThrottled:jy,buttonDebounced:Py},Nu=250;function _y(){const[e,t]=k.useState(0),n=k.useCallback(()=>t(o=>o+1),[]);return s.jsxs("div",{className:Ce.demo,children:[s.jsxs("div",{className:Ce.counter,children:[e," Spells Cast!"]}),s.jsx("button",{onClick:n,className:Ce.button,children:"Cast Spell!"})]})}function Cy(){const[e,t]=k.useState(0),n=k.useCallback(()=>t(r=>r+1),[]),o=k.useCallback(ky(n,Nu),[n]);return s.jsxs("div",{className:Ce.demo,children:[s.jsxs("div",{className:Ce.counter,children:[e," Spells Cast!"]}),s.jsxs("div",{className:Ce.buttons,children:[s.jsx("button",{onClick:n,className:Ce.button,children:"Cast Spell!"}),s.jsx("button",{onClick:o,className:Ce.buttonThrottled,children:"Cast Spell Throttled!"})]})]})}function Ey(){const[e,t]=k.useState(0),n=k.useCallback(()=>t(r=>r+1),[]),o=k.useCallback(xy(n,Nu),[n]);return s.jsxs("div",{className:Ce.demo,children:[s.jsxs("div",{className:Ce.counter,children:[e," Spells Cast!"]}),s.jsxs("div",{className:Ce.buttons,children:[s.jsx("button",{onClick:n,className:Ce.button,children:"Cast Spell!"}),s.jsx("button",{onClick:o,className:Ce.buttonDebounced,children:"Cast Spell Debounced!"})]})]})}const Ny="_article_qvjqk_1",My="_header_qvjqk_7",Ry="_title_qvjqk_13",Ay="_metaBar_qvjqk_22",Ly="_date_qvjqk_30",Wy="_badge_qvjqk_36",Dy="_banner_qvjqk_45",Fy="_body_qvjqk_54",By="_authorBio_qvjqk_183",Hy="_authorName_qvjqk_191",Oy="_authorTitle_qvjqk_198",$y="_authorText_qvjqk_204",Uy="_navigation_qvjqk_212",Gy="_navPost_qvjqk_221",Yy="_navLabel_qvjqk_236",qy="_navTitle_qvjqk_245",ee={article:Ny,header:My,title:Ry,metaBar:Ay,date:Ly,badge:Wy,banner:Dy,body:Fy,authorBio:By,authorName:Hy,authorTitle:Oy,authorText:$y,navigation:Uy,navPost:Gy,navLabel:Yy,navTitle:qy};function Vy({posts:e}){const{slug:t}=aa(),n=Hn(),[o,r]=k.useState(null),[a,i]=k.useState(!1);k.useEffect(()=>{if(!t){n("/");return}const b=e.find(y=>y.slug===t);if(!b){n("/");return}r(b);const S=b.content.includes("twitter-tweet")||b.content.toLowerCase().includes("twitter.com");i(S),window.scrollTo(0,0),setTimeout(()=>{window.hljs&&document.querySelectorAll("pre code").forEach(y=>{const v=y.textContent||"";!y.className&&(v.includes("$ ")||v.includes("Matthew at "))&&y.classList.add("language-bash"),window.hljs.highlightElement(y);const h=y.parentElement;if(h&&!h.querySelector(".copy-button")){const u=document.createElement("button");u.className="copy-button",u.textContent="Copy",u.onclick=()=>{navigator.clipboard.writeText(y.textContent||""),u.textContent="Copied!",setTimeout(()=>u.textContent="Copy",2e3)},h.style.position="relative",h.insertBefore(u,h.firstChild)}}),document.querySelectorAll(".article-body h2").forEach((y,v)=>{y.id=`heading-${v}`}),document.querySelectorAll('.article-body iframe[src*="youtube"]').forEach(y=>{var h;const v=document.createElement("div");v.className="responsive-embed",v.style.position="relative",v.style.paddingBottom="56.25%",v.style.height="0",v.style.overflow="hidden",v.style.margin="2rem 0",v.style.borderRadius="8px",(h=y.parentNode)==null||h.insertBefore(v,y),v.appendChild(y),y.style.position="absolute",y.style.top="0",y.style.left="0",y.style.width="100%",y.style.height="100%",y.style.border="none"}),document.querySelectorAll("[data-demo]").forEach(y=>{const v=y.getAttribute("data-demo");let h;switch(v){case"throttle-debounce-basic":h=_y;break;case"throttle-debounce-throttle":h=Cy;break;case"throttle-debounce-debounce":h=Ey;break;default:return}Ei(y).render(s.jsx(h,{}))}),document.querySelectorAll(".article-body img").forEach(y=>{var w;const v=y.getAttribute("src")||"",h=y.getAttribute("alt")||"";if(y.classList.contains("optimized-processed"))return;const u=document.createElement("div");u.className="optimized-image-wrapper",(w=y.parentNode)==null||w.insertBefore(u,y),Ei(u).render(s.jsx(Wi,{src:v,alt:h,size:"large",loading:"lazy",className:y.className})),y.remove()})},100)},[t,e,n]);const l=o?e.findIndex(b=>b.id===o.id):-1,c=l>0?e[l-1]:null,d=l<e.length-1?e[l+1]:null;if(Eu({onNext:()=>{d&&n(`/tech/${d.slug}`)},onPrevious:()=>{c&&n(`/tech/${c.slug}`)}}),!o)return null;const g=o.wordCount||0,m=Ws(g),f=o.banner_img;return s.jsxs("article",{className:ee.article,children:[a&&s.jsx(by,{}),s.jsxs("header",{className:ee.header,children:[s.jsx("h1",{className:ee.title,children:o.title}),s.jsxs("div",{className:ee.metaBar,children:[s.jsx("span",{className:ee.date,children:o.date}),s.jsxs("span",{className:ee.badge,children:[m," min read"]}),s.jsxs("span",{className:ee.badge,children:[g.toLocaleString()," words"]})]}),f&&s.jsx(Wi,{src:f,alt:o.title,className:ee.banner,size:"full",loading:"eager"})]}),s.jsx("div",{className:`${ee.body} article-body`,"data-reading-time":m,dangerouslySetInnerHTML:{__html:o.content}}),s.jsxs("div",{className:ee.authorBio,children:[s.jsx("div",{className:ee.authorName,children:"Matthew Gerstman"}),s.jsx("div",{className:ee.authorTitle,children:"Software Engineer - Obvious"}),s.jsx("p",{className:ee.authorText,children:"Matthew is a software engineer with over a decade of experience building web applications. He's passionate about TypeScript, React, and teaching others about web development. He lives in Syracuse, NY with his wife and three cats."})]}),s.jsxs("div",{className:ee.navigation,children:[c&&s.jsxs(dt,{to:`/tech/${c.slug}`,className:ee.navPost,children:[s.jsx("div",{className:ee.navLabel,children:"← Previous (k)"}),s.jsx("div",{className:ee.navTitle,children:c.title})]}),d&&s.jsxs(dt,{to:`/tech/${d.slug}`,className:ee.navPost,children:[s.jsx("div",{className:ee.navLabel,children:"Next (j) →"}),s.jsx("div",{className:ee.navTitle,children:d.title})]})]})]})}const Di=[{id:"functional-programming-fundamentals",title:"Functional Programming Fundamentals",subtitle:"React NYC Meetup",video:"kkRyjXDpYqg",date:"2018",venue:"NYC",description:"This was my first public tech talk. It was an introduction to functional programming concepts for JavaScript developers. I covered immutability, pure functions, composition, and higher-order functions",tags:["Functional Programming","JavaScript","Fundamentals"],slidesUrl:"https://www.dropbox.com/scl/fi/okj4pkxtb94bk19a0spv9/Functional-Programming-Fundamentals.paper?rlkey=0jbu7mra246ortssb3nopr4e7&dl=0"},{id:"typescript-seeing-past-the-hype-reactiveconf",title:"TypeScript: Seeing Past the Hype",subtitle:"ReactiveConf",video:"KdvEGPiULAQ",date:"2019",venue:"Prague, Czech Republic",description:"I gave this talk after I fell in love with TypeScript. It's meant to be a pragmatic look at TypeScript adoption beyond the buzz. This talk explores real-world benefits, common pitfalls, and strategies for introducing static types to existing JavaScript codebases without disrupting your team's velocity.",tags:["TypeScript","JavaScript","Developer Experience"],slidesUrl:"http://typescript.matthewgerstman.com/"},{id:"typesafe-code-split-react-redux",title:"Building a Typesafe Code Split React-Redux Application",subtitle:"",video:"Mumy5YZZ2gs",date:"2018",venue:"NYC",description:"This talk covers the work I did building out Dropbox's state management platform. Combining TypeScript with React and Redux while maintaining code splitting presents unique challenges. This talk demonstrates patterns for achieving full type safety across async boundaries without sacrificing bundle size or load performance.",tags:["React","Redux","Code Splitting","TypeScript"],slidesUrl:"https://slides.slytherin.dev/#0",demoUrl:"https://slytherin.dev/"},{id:"nothing-generic-about-it",title:"Nothing Generic About It",subtitle:"Advanced TypeScript",video:"1YWrc21Uv9g?start=530",date:"2020",venue:"Online",description:"Deep dive into TypeScript generics and advanced type patterns. Learn how to build type-safe, reusable abstractions that scale with your codebase while maintaining excellent developer ergonomics and autocomplete.",tags:["TypeScript","Generics","Type Systems"],slidesUrl:"https://generics.matthewgerstman.com/"},{id:"double-your-salary",title:"Double Your Salary With This One Simple Trick",subtitle:"",video:"m1XdasrstCc",date:"2020",venue:"NYC",description:"This is probably the most popular talk I've ever given.",tags:["Career","Negotiation","Compensation"],slidesUrl:"http://salary.matthewgerstman.com/"},{id:"typescript-seeing-past-the-hype-react-loop",title:"TypeScript: Seeing Past the Hype",subtitle:"React Loop",video:"veXkJq0Z2Qk",date:"2019",venue:"Chicago, IL",description:"An earlier iteration of the TypeScript adoption talk. I usually recomend the Prague version.",tags:["TypeScript","React","Migration"],slidesUrl:"http://typescript.matthewgerstman.com/"},{id:"functional-programming-fundamentals-tlv",title:"Functional Programming Fundamentals",subtitle:"",video:"Pjc1AnBLG8c",date:"2018",venue:"Tel Aviv, Israel",description:"Introduction to functional programming concepts for JavaScript developers. The original version of this talk was filled with Taylor Swift references but I replaced them with Natalie Portman for an Israeli audience.",tags:["Functional Programming","JavaScript","Fundamentals"],slidesUrl:"https://www.dropbox.com/scl/fi/acxjzwodxgbuw3iwtq675/.paper?rlkey=c9fufxxd9wpuqli3ty0zfn73l&dl=0"}],Jy="_top_1oo1o_1",Ky="_title_1oo1o_9",Qy="_expandIcon_1oo1o_26",Xy="_role_1oo1o_34",Zy="_subtitle_1oo1o_41",Kn={top:Jy,title:Ky,expandIcon:Qy,role:Xy,subtitle:Zy};function ia({title:e,subtitle:t,yearDisplay:n,role:o,hasExpand:r,isExpanded:a}){return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:Kn.top,children:[s.jsx("h4",{className:Kn.title,children:e}),r&&s.jsx("span",{className:Kn.expandIcon,children:a?"−":"+"})]}),s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:o&&s.jsxs("div",{className:Kn.role,children:[o," - ",n]})}),t&&s.jsx("div",{className:Kn.subtitle,children:t})]})}const ew="_meta_18q46_1",tw="_separator_18q46_13",nw="_item_18q46_17",Wa={meta:ew,separator:tw,item:nw};function Mu({items:e,className:t}){const n=e.filter(Boolean);return n.length===0?null:s.jsx("div",{className:`${Wa.meta} ${t||""}`,children:n.map((o,r)=>s.jsxs(Jt.Fragment,{children:[r>0&&s.jsx("span",{className:Wa.separator,children:"•"}),s.jsx("span",{className:Wa.item,children:o})]},r))})}const ow="_overlay_1oigv_1",rw="_modal_1oigv_26",aw="_closeButton_1oigv_49",iw="_videoWrapper_1oigv_74",sw="_content_1oigv_90",lw="_header_1oigv_94",cw="_headerLeft_1oigv_101",dw="_links_1oigv_109",uw="_link_1oigv_109",tt={overlay:ow,modal:rw,closeButton:aw,videoWrapper:iw,content:sw,header:lw,headerLeft:cw,links:dw,link:uw};function pw({talk:e,onClose:t}){k.useEffect(()=>{const o=r=>{r.key==="Escape"&&t()};return document.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",o),document.body.style.overflow="unset"}},[t]);const n=o=>{o.target===o.currentTarget&&t()};return s.jsx("div",{className:tt.overlay,onClick:n,children:s.jsxs("div",{className:tt.modal,children:[s.jsx("button",{className:tt.closeButton,onClick:t,"aria-label":"Close modal",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),s.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),s.jsx("div",{className:tt.videoWrapper,children:s.jsx("iframe",{src:`https://www.youtube.com/embed/${e.video}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:e.title})}),s.jsx("div",{className:tt.content,children:s.jsxs("div",{className:tt.header,children:[s.jsxs("div",{className:tt.headerLeft,children:[s.jsx(Mu,{items:[e.date,e.venue]}),s.jsx(ia,{title:e.title,hasExpand:!1})]}),(e.slidesUrl||e.demoUrl)&&s.jsxs("div",{className:tt.links,children:[e.slidesUrl&&s.jsxs("a",{href:e.slidesUrl,target:"_blank",rel:"noopener noreferrer",className:tt.link,children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),s.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),s.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),"Slides"]}),e.demoUrl&&s.jsxs("a",{href:e.demoUrl,target:"_blank",rel:"noopener noreferrer",className:tt.link,children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("polygon",{points:"10 8 16 12 10 16 10 8"})]}),"Demo"]})]})]})})]})})}const hw="_container_1k7ah_1",mw="_header_1k7ah_7",gw="_subtitle_1k7ah_21",fw="_talksGrid_1k7ah_30",yw="_talkCard_1k7ah_36",ww="_videoSection_1k7ah_53",vw="_thumbnail_1k7ah_58",bw="_playOverlay_1k7ah_81",kw="_content_1k7ah_95",xw="_description_1k7ah_103",Sw="_actions_1k7ah_113",Tw="_watchButton_1k7ah_121",Iw="_cardLinks_1k7ah_142",zw="_cardLink_1k7ah_142",fe={container:hw,header:mw,subtitle:gw,talksGrid:fw,talkCard:yw,videoSection:ww,thumbnail:vw,playOverlay:bw,content:kw,description:xw,actions:Sw,watchButton:Tw,cardLinks:Iw,cardLink:zw};function rc(){const e=Hn(),{talkId:t}=aa(),n=t?Di.find(a=>a.id===t):null,o=a=>{e(`/talks/${a}`)},r=()=>{e("/talks")};return s.jsxs("div",{className:fe.container,children:[s.jsxs("header",{className:fe.header,children:[s.jsx("h1",{children:"Talks"}),s.jsx("p",{className:fe.subtitle,children:"Conference talks and presentations on TypeScript, React, career growth, and software engineering."})]}),s.jsx("div",{className:fe.talksGrid,children:Di.map(a=>s.jsxs("div",{className:fe.talkCard,children:[s.jsx("div",{className:fe.videoSection,children:s.jsxs("div",{className:fe.thumbnail,onClick:()=>o(a.id),children:[s.jsx("img",{src:`https://img.youtube.com/vi/${a.video.split("?")[0]}/maxresdefault.jpg`,alt:a.title,onError:i=>{i.target.src=`https://img.youtube.com/vi/${a.video.split("?")[0]}/hqdefault.jpg`}}),s.jsx("div",{className:fe.playOverlay,children:s.jsxs("svg",{width:"68",height:"48",viewBox:"0 0 68 48",children:[s.jsx("path",{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}),s.jsx("path",{d:"M 45,24 27,14 27,34",fill:"#fff"})]})})]})}),s.jsxs("div",{className:fe.content,children:[s.jsx(Mu,{items:[a.date,a.venue]}),s.jsx(ia,{title:a.title,subtitle:a.subtitle,hasExpand:!1}),s.jsx("p",{className:fe.description,children:a.description}),s.jsxs("div",{className:fe.actions,children:[(a.slidesUrl||a.demoUrl)&&s.jsxs("div",{className:fe.cardLinks,children:[a.slidesUrl&&s.jsxs("a",{href:a.slidesUrl,target:"_blank",rel:"noopener noreferrer",className:fe.cardLink,onClick:i=>i.stopPropagation(),children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),s.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),s.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),"Slides"]}),a.demoUrl&&s.jsxs("a",{href:a.demoUrl,target:"_blank",rel:"noopener noreferrer",className:fe.cardLink,onClick:i=>i.stopPropagation(),children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("polygon",{points:"10 8 16 12 10 16 10 8"})]}),"Demo"]})]}),s.jsx("button",{className:fe.watchButton,onClick:()=>o(a.id),children:"Watch Talk"})]})]})]},a.id))}),n&&s.jsx(pw,{talk:n,onClose:r})]})}const jw="_gradientText_17m49_1",Pw={gradientText:jw};function Ru({children:e,as:t="span",className:n=""}){return s.jsx(t,{className:`${Pw.gradientText} ${n}`,children:e})}const _w="_tagList_1nrn1_1",Cw="_tag_1nrn1_1",ac={tagList:_w,tag:Cw};function Ds({tags:e,className:t=""}){return!e||e.length===0?null:s.jsx("div",{className:`${ac.tagList} ${t}`,children:e.map((n,o)=>s.jsx("span",{className:ac.tag,children:n},o))})}const Ew="_linkList_18fz2_1",Nw="_link_18fz2_1",ic={linkList:Ew,link:Nw};function Au({links:e}){return!e||e.length===0?null:s.jsx("div",{className:ic.linkList,children:e.map((t,n)=>s.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:ic.link,children:t.text},n))})}const Mw="_projectCard_1s36s_1",Rw="_expanded_1s36s_12",Aw="_projectHeader_1s36s_16",Lw="_projectDescription_1s36s_84",Ww="_projectImpact_1s36s_90",Dw="_projectTags_1s36s_97",Fw="_projectDetails_1s36s_123",Bw="_projectDetailsContent_1s36s_133",Hw="_detailSection_1s36s_149",Ow="_outcomeLabel_1s36s_206",$w="_contentPrefix_1s36s_213",Ge={projectCard:Mw,expanded:Rw,projectHeader:Aw,projectDescription:Lw,projectImpact:Ww,projectTags:Dw,projectDetails:Fw,projectDetailsContent:Bw,detailSection:Hw,outcomeLabel:Ow,contentPrefix:$w};function Uw({title:e,startYear:t,endYear:n,description:o,belowTheFold:r,impact:a,role:i,technologies:l,links:c,projectKey:d,shouldExpand:g=!1,shouldScroll:m=!1}){const[f,b]=k.useState(!1),S=k.useRef(null),y=r&&r.length>0,v=t===n?`${n}`:`${t}–${n}`;k.useEffect(()=>{g&&y&&(b(!0),m&&S.current&&setTimeout(()=>{if(S.current){const p=S.current.getBoundingClientRect().top+window.pageYOffset-125;window.scrollTo({top:p,behavior:"smooth"})}},100))},[g,m,y]);const h=u=>typeof u=="string"?u:s.jsxs(s.Fragment,{children:[u.prefix&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:Ge.contentPrefix,children:u.prefix})," — "]}),u.text]});return s.jsxs("div",{ref:S,"data-project-key":d,className:`${Ge.projectCard} ${f?Ge.expanded:""}`,children:[s.jsxs("div",{className:Ge.projectHeader,onClick:()=>y&&b(!f),style:{cursor:y?"pointer":"default"},children:[s.jsx(ia,{title:e,role:i,hasExpand:y,isExpanded:f,yearDisplay:v}),s.jsx("p",{className:Ge.projectDescription,children:o}),a&&s.jsxs("div",{className:Ge.projectImpact,children:[s.jsx("span",{className:Ge.outcomeLabel,children:"Outcome:"})," ",a]}),s.jsx(Au,{links:c}),s.jsx(Ds,{tags:l,className:Ge.projectTags})]}),y&&s.jsx("div",{className:Ge.projectDetails,children:s.jsx("div",{className:Ge.projectDetailsContent,children:r==null?void 0:r.map((u,p)=>{var w;return s.jsxs("div",{className:Ge.detailSection,children:[s.jsx("h5",{children:u.title}),u.content&&u.content.length===1&&typeof u.content[0]=="string"?s.jsx("p",{children:u.content[0]}):s.jsx("ul",{children:(w=u.content)==null?void 0:w.map((x,I)=>s.jsx("li",{children:h(x)},I))})]},p)})})})]})}const Gw="_timelineItem_1bzf4_1",Yw="_jobInfo_1bzf4_8",qw="_companyName_1bzf4_16",Vw="_role_1bzf4_24",Jw="_period_1bzf4_32",Kw="_companyDescription_1bzf4_40",Qw="_projects_1bzf4_46",kt={timelineItem:Gw,jobInfo:Yw,companyName:qw,role:Vw,period:Jw,companyDescription:Kw,projects:Qw};function Xw({job:e,expandAll:t=!1,targetProject:n}){const o=k.useRef(null),[r,a]=k.useState(!1);return k.useEffect(()=>{const i=new IntersectionObserver(([l])=>{const c=l.intersectionRatio<1;a(c),Cu({title:e.company,color:e.color,visible:c})},{threshold:[1],rootMargin:"-100px 0px 0px 0px"});return o.current&&i.observe(o.current),()=>{o.current&&i.unobserve(o.current),bg()}},[e.company,e.color]),s.jsxs("div",{className:kt.timelineItem,children:[s.jsxs("div",{ref:o,className:`${kt.jobInfo} ${r?kt.sticky:""}`,children:[s.jsx("h2",{className:kt.companyName,style:{color:e.color},children:e.company}),s.jsx("p",{className:kt.role,children:e.role}),s.jsx("span",{className:kt.period,children:e.period}),s.jsx("p",{className:kt.companyDescription,children:e.description})]}),s.jsx("div",{className:kt.projects,children:e.projects.map((i,l)=>{const c=i.key||`${e.id}-${l}`,d=n===c;return s.jsx(Uw,{projectKey:c,title:i.title,year:i.year,startYear:i.startYear,endYear:i.endYear,description:i.description,belowTheFold:i.belowTheFold,impact:i.impact,technologies:i.technologies||[],role:i.role,links:i.links||[],shouldExpand:d||t,shouldScroll:d},c)})})]})}const N={"datadog-notebooks-2-0":{title:"Notebooks 2.0",emoji:"📓",year:"2023-2024",startYear:2023,endYear:2024,role:"Engineering Manager",description:"First-time engineering manager leading the rebuild of Datadog's collaborative rich text editor. Focused on team growth, customer engagement, and enabling technical excellence. Built customer council with rapid feedback loop.",impact:"Shipped complete Notebooks 2.0 rebuild with rich text editing and real-time multiplayer collaboration. Grew team from 4 to 6 engineers with 2 promotions. Established customer council that accelerated feedback cycles.",technologies:["ProseMirror","CRDTs (Yjs)","WebSockets","React","Rich Text Editing","Multiplayer Collaboration","TypeScript","Team Leadership"],belowTheFold:[{title:"Details",content:[{prefix:"Team Culture & Development",text:"Grew team from 4 to 6 engineers with 2 promotions; established daily pairing and weekly learning sessions; created environment where people wanted to work together and help each other succeed. My favorite part of the job was coach, I aspired to be Ted Lasso."},{prefix:"Feature Development Oversight",text:"Oversaw development of: Rich text editor with ProseMirror; Real-time multiplayer with CRDTs (Yjs) and WebSockets; Inlined widgets; Copy/paste; Toolbar and formatting; List indentation; Code blocks with syntax highlighting; Comments and version history; Inline tables; Print mode (personally implemented); Markdown import/export for API users"},{prefix:"Customer Engagement",text:`Built customer council with shared Slack channels; identified high-usage customers and coordinated with CSMs. Spoke with multiple external customers per week during rollout. Rapidly implemented feedback—nothing a customer loves more than hearing their feature request was implemented in 48 hours. Product manager was focused elsewhere for 6 months; I handled prioritization and release management. Established principle: ship to someone new every week. We slowed down for customer feedback and sped up where it didn't apply. For example: released to 98% of customers while finishing API support for the remaining 2%. When a customer didn't like keyboard-first design, we paused for a week to implement "Bring Back Buttons" initiative.`}]}],key:"datadog-notebooks-2-0"},"datadog-dashboard-reporting-pdf-export":{title:"Dashboard Reporting & PDF Export",emoji:"📊",year:"2022-2023",startYear:2022,endYear:2023,role:"Software Engineer",description:"Built Datadog's report-printer node service from scratch—offline dashboard snapshots with 98%+ widget fidelity. Designed client/server rendering handshake, chose Puppeteer, established Node.js patterns now used across 15+ services.",impact:"Shipped to all customers with 95%+ widget fidelity (up from 70%). Created new revenue stream and permanent team. Node.js foundation code became company standard.",technologies:["Node.js","Puppeteer","React","TypeScript","PDF Generation","gRPC","Queue Systems","Smithing"],belowTheFold:[{title:"Details",content:[{prefix:"Architecture & Design",text:"Prototyped for 6 weeks with weekly reviews; designed stateless queue-based system with heartbeat monitoring; built client/server handshake to coordinate React rendering, data fetching, viewport resizing, and snapshot timing"},{prefix:"Rendering Engine Selection",text:"Evaluated Selenium, Puppeteer, and Cypress; chose Puppeteer for browser-fidelity PDFs and thin Chrome wrapper; interviewed engineers about Selenium pain to inform decision"},{prefix:"Quality & Fidelity",text:"Created PrintModeAdapter to aggregate widget status; collaborated with Univiz team to expose fetch completion signals; solved split graph rendering bugs with proxy context providers"},{prefix:"Service Foundation",text:"Wrote all Node.js HTTP/gRPC communication code, tests, and documentation (pre-AI era); established patterns now foundational for 15+ services; implemented OBO token authentication with Puppeteer request interception"},{prefix:"Smithing",text:"Reduced dev loop from 30min to 1min by automating tooling"},{prefix:"Performance & Constraints",text:"Navigated security restrictions on Node.js infrastructure access; optimized print mode rendering by disabling interactivity; handled edge cases (note widgets, image security risks, file size bloat)"}]},{title:"Leadership",content:["Built consensus through prototyping and stakeholder reviews","Mentored backend team on browser implementation","Transitioned to Notebooks management as project reached production"]}],key:"datadog-dashboard-reporting-pdf-export"},"datadog-integration-testing-framework":{title:"Integration Testing Framework",emoji:"🧪",year:"2023",startYear:2023,endYear:2023,role:"Software Engineer",description:"Pioneered integration testing framework for Datadog's dashboard platform, enabling reliable testing of complex multi-widget interactions (drag and drop, resizing) that were previously untestable. Built comprehensive test suite covering critical user workflows and edge cases.",impact:"Caught regressions before production that unit tests missed. Enabled confident refactoring of complex dashboard code. Set standard for integration testing across frontend teams. Reduced bug escape rate for dashboard features.",technologies:["TypeScript","React","Testing Frameworks","Integration Testing","Data Dense UIs"],belowTheFold:[{title:"Details",content:[{prefix:"Framework Design",text:"Built testing infrastructure supporting complex dashboard scenarios (widget interactions, time range changes, template variables, cross-widget dependencies)"},{prefix:"Test Coverage",text:"Wrote comprehensive integration tests for critical paths: dashboard loading, widget editing, template variable propagation, and multi-widget coordination"},{prefix:"Developer Experience",text:"Created clear patterns and documentation for writing integration tests, enabling other engineers to expand coverage. Balanced test reliability with execution speed"}]}],key:"datadog-integration-testing-framework"},"datadog-typescript-cleanup-initiative":{title:"TypeScript Cleanup Initiative",emoji:"🧹",year:"2023",startYear:2023,endYear:2023,role:"Software Engineer",description:"Led systematic TypeScript type safety improvements across dashboard codebase. Eliminated unsafe type assertions and established patterns for type-safe code development.",impact:"Reduced runtime type errors. Improved developer velocity through better IDE support. Set standard for TypeScript usage across frontend teams. Made codebase more maintainable for future engineers.",technologies:["TypeScript","React","Type Systems"],belowTheFold:[{title:"Details",content:[{prefix:"Systematic Audit",text:"Reviewed codebase for unsafe type usage patterns. Prioritized fixes by impact and risk"},{prefix:"Pattern Establishment",text:"Created reusable patterns for common type-safety scenarios. Documented best practices for team"},{prefix:"Team Enablement",text:"Reviewed PRs to maintain type safety standards. Mentored engineers on advanced TypeScript features"}]}],key:"datadog-typescript-cleanup-initiative"},"datadog-graphing-summit":{title:"Graphing Summit",emoji:"📈",year:"2024-2025",startYear:2024,endYear:2025,role:"Engineering Manager",description:"Organized Datadog's Graphing Summit to build cohesive culture within a newly-formed graphing org from a recent reorg. Led planning with 2 co-organizers, keeping execution lean—1/10 the time investment of typical summits with better relationship outcomes.",impact:'Transformed "kind of knew each other" relationships into "really knew each other" connections. Created foundation for cross-team collaboration in graphing org.',technologies:["Event Planning","Team Building","Cross-functional Coordination"],belowTheFold:[{title:"Details",content:[{prefix:"Pre-Summit Relationship Building",text:"Organized events leading up to the summit (IC1 class, org lunches, donut 1:1s) to increase relationship foundation"},{prefix:"Lean Planning",text:"Avoided committee bloat; 1/10 the time investment of other summits"},{prefix:"Outcome-Focused Design",text:"Prioritized relationships over presentations"},{prefix:"Logistics",text:"Managed CFP, ops, scheduling, speakers, budget, swag"}]}],key:"datadog-graphing-summit"},"datadog-ic1-class":{title:"IC1 Class",emoji:"🎓",year:"2024-2025",startYear:2024,endYear:2025,role:"Engineering Manager",description:"Designed and taught Datadog's first IC1 engineering class—a covering career development, technical leadership, and organizational impact for early-career engineers.",impact:"Graduated 12 engineers with stronger career frameworks and clearer growth paths. Created reusable curriculum adopted by other teams. Demonstrated leadership in engineer development and organizational culture building.",technologies:["Teaching","Career Development","Technical Leadership","Curriculum Design"],belowTheFold:[{title:"Details",content:[{prefix:"Curriculum Design",text:"Created 6-week program covering: technical decision-making, code review best practices, effective communication, project scoping, and career navigation. Balanced theory with practical exercises"},{prefix:"Interactive Teaching",text:"Led weekly 90-minute sessions with 15 engineers. Used real Datadog scenarios and case studies. Facilitated group discussions and peer learning"},{prefix:"Career Framework Development",text:"Built structured approach to career progression at IC1 level. Clarified expectations and growth paths. Provided actionable advice for advancement"},{prefix:"Organizational Impact",text:"Identified gap in early-career support and created solution. Collaborated with engineering leadership to align curriculum with company values. Set precedent for structured engineer development programs"}]}],key:"datadog-ic1-class"},"datadog-frontend-summit":{title:"Frontend Summit",emoji:"🎤",year:"2023",startYear:2023,endYear:2023,role:"Software Engineer",description:"Organized and ran Datadog's first-ever Frontend Summit—a multi-day conference bringing together frontend engineers across the company. Created venue for cross-team knowledge sharing, technical deep dives, and community building.",impact:"Established myself as a leader in the frontend community early in my tenure at the company",technologies:["Event Planning","Technical Leadership","Community Building"],key:"datadog-frontend-summit"},"bluecore-frontend-north-star-architecture-modernization":{title:"Frontend North Star & Architecture Modernization",emoji:"🌟",year:"2021-2022",startYear:2021,endYear:2022,role:"Staff Engineer / Frontend Lead",description:"Led frontend transformation at newly-minted unicorn. Wrote comprehensive RFC establishing 'composable LEGO blocks' philosophy and platform layer architecture.",impact:"Published engineering blog defining frontend strategy. Established TypeScript-first culture across engineering org. Built foundation for next-generation product workflows serving enterprise retail customers.",technologies:["TypeScript","React","Modern CSS","CSS Variables","Design Systems","gRPC","HTTP Transcoding","Code Generation","Accessibility"],links:[{text:"Frontend North Star Blog Post",url:"https://medium.com/bluecore-engineering/bluecores-frontend-north-star-eb7d2a04167a"}],belowTheFold:[{title:"Context",content:["Bluecore had invested heavily in data science and infrastructure while building a relatively light frontend. As the company reached unicorn status and needed to enable more complex customer workflows, the frontend needed to scale both technically and organizationally. Wrote Frontend North Star to align the team around modern practices and establish technical direction."]},{title:"Details",content:["Authored 'Bluecore's Frontend North Star' blog post establishing technical vision and principles for scaling frontend at unicorn-stage company","Wrote comprehensive RFC covering design system specifications, reusable components with embedded business logic, and API interface requirements with code generation","Led complete TypeScript migration of component library with modern CSS architecture and design system principles","Architected autogenerated API client system with gRPC/HTTP transcoding, eliminating manual client maintenance","Implemented CSS variables for theming and created responsive layout systems","Designed and taught comprehensive weekly training curriculum for entire engineering team covering TypeScript fundamentals and advanced React patterns","Improved accessibility and performance across component library","Established code generation pipeline from API definitions with type-safe clients and automatic updates","Created hands-on exercises and code review processes to upskill team","Established Frontend Platform team values: developer experience excellence, simplicity & usability, proactive support, trust & reliability, and collaborative problem-solving. Created 'One Bluecore' culture focused on user delight and systematic friction reduction"]},{title:"Leadership",content:["Defined frontend technical strategy for unicorn-stage company transitioning to product-led growth","Built TypeScript-first culture through teaching and hands-on mentorship","Collaborated with data science and infrastructure teams to align frontend with company mission","Published public engineering content representing company technical brand"]}],key:"bluecore-frontend-north-star-architecture-modernization"},"bluecore-frontend-interview-loop-design":{title:"Frontend Interview Loop Design",emoji:"💼",year:"2021-2022",startYear:2021,endYear:2022,role:"Staff Engineer",description:"Designed comprehensive frontend interview loop for Bluecore, creating structured questions, evaluation criteria, and interviewer guides. Built question bank covering system design (Design Instagram), JavaScript fundamentals (Event Emitter), and React patterns (Auto Suggest Input).",impact:"Standardized frontend hiring process with consistent evaluation criteria. Improved candidate experience through well-structured, fair questions. Enabled consistent bar-raising across all frontend interviews. Created reusable interview materials for scaling frontend hiring.",technologies:["System Design","JavaScript","React","Interview Design"],belowTheFold:[{title:"Details",content:[{prefix:"Question Design",text:"Created three comprehensive interview questions: system design (Instagram feed with infinite scroll, image optimization, caching), JavaScript fundamentals (Event Emitter with edge cases), and React practical (Auto Suggest with debouncing, accessibility)"},{prefix:"Evaluation Framework",text:"Built detailed rubrics for each question covering technical depth, problem-solving approach, communication, and trade-off analysis. Included follow-up questions and extension scenarios"},{prefix:"Interviewer Enablement",text:"Documented complete interviewer guides with question flow, evaluation criteria, common pitfalls, and calibration guidance. Enabled consistent interview quality across team"}]}],key:"bluecore-frontend-interview-loop-design"},"bluecore-nextserver-next-js-on-kubernetes":{title:"NextServer (Next.js on Kubernetes)",emoji:"☸️",year:"2022",startYear:2022,endYear:2022,role:"Staff Engineer",description:"Replaced expensive Google App Engine monolith running Python 2.7 (facing deprecation) with modern NextJS on Google Kubernetes Engine. Led technical architecture and milestone-based migration strategy.",impact:"Achieved significant cost savings from GAE to GKE migration. Improved performance with server-side rendering. Enabled modern frontend development practices. Zero downtime migration from legacy Python 2.7 system.",technologies:["Next.js","Kubernetes","Google Cloud","Node.js","Python 2.7 Migration"],belowTheFold:[{title:"Details",content:[{prefix:"Milestone-Based Development",text:"Created phased rollout strategy: M0 (prototype validation), M1 (QA infrastructure), M2 (internal tools), M3 (first customer route), M4 (complete migration). Enabled incremental validation and risk reduction"},{prefix:"Architecture & Infrastructure",text:"Designed NextJS server on Google Kubernetes Engine with Node.js runtime. Worked with DevOps on deployment strategy, scaling configuration, and production optimization"},{prefix:"Legacy Integration",text:"Managed transition from Python 2.7 App Engine monolith while maintaining API compatibility and zero downtime for customer-facing features"}]}],key:"bluecore-nextserver-next-js-on-kubernetes"},"bluecore-autogenerated-api-client":{title:"Autogenerated API Client",emoji:"🤖",year:"2022",startYear:2022,endYear:2022,role:"Staff Engineer",description:"Architected and led implementation of autogenerated API client system using gRPC with HTTP transcoding. Replaced manual Redux thunk creation for every API call with type-safe, automatically generated clients.",impact:"Eliminated manual client maintenance for dozens of API endpoints. Standardized loading and error state management across application. Improved developer experience for API integration. Reduced API integration time from hours to minutes.",technologies:["gRPC","HTTP Transcoding","Code Generation","TypeScript","Redux"],belowTheFold:[{title:"Details",content:[{prefix:"Code Generation Pipeline",text:"Designed system to automatically generate TypeScript clients from gRPC definitions with full type safety"},{prefix:"HTTP Transcoding Integration",text:"Implemented gRPC-Web transcoding layer enabling browser-compatible API calls"},{prefix:"Team Mentorship",text:"Architected solution via tech design doc, then mentored team members through implementation and ensured knowledge transfer for long-term ownership"}]}],key:"bluecore-autogenerated-api-client"},"bluecore-component-library-consolidation":{title:"Component Library Consolidation",emoji:"🧩",year:"2021-2022",startYear:2021,endYear:2022,role:"Staff Engineer",description:"Consolidated Bluecore's dual component libraries (VanillaJS and TypeScript with only 80% feature parity) into single TypeScript-based system. Led cross-functional migration effort eliminating code duplication and any type pollution from legacy components.",impact:"Eliminated entire class of type safety issues from VanillaJS any injection. Reduced component maintenance burden by 50% (one library vs two). Improved developer experience with consistent component API. Enabled full TypeScript adoption across frontend.",technologies:["TypeScript","React","VanillaJS Migration","Component Libraries"],belowTheFold:[{title:"Details",content:[{prefix:"Migration Strategy",text:"Created parallelization approach enabling multiple product teams to work simultaneously on different components without blocking each other"},{prefix:"Cross-Team Coordination",text:"Coordinated migration across product teams, establishing shared timeline and success criteria. Ensured consistent migration patterns"},{prefix:"Detail-Oriented Execution",text:"Methodical component-by-component migration ensuring type safety and feature parity. Validated each component before deprecating VanillaJS version"}]}],key:"bluecore-component-library-consolidation"},"bluecore-typescript-adoption-strict-types":{title:"TypeScript Adoption & Strict Types",emoji:"🔒",year:"2021",startYear:2021,endYear:2021,role:"Staff Engineer",description:"Led organization-wide TypeScript adoption, establishing strict type checking standards and migrating existing JavaScript codebase. Created training materials and mentorship program.",impact:"Achieved 100% TypeScript adoption across frontend codebase. Reduced runtime type errors significantly. Improved code maintainability and developer confidence. Established TypeScript-first culture.",technologies:["TypeScript","JavaScript","Type Systems"],belowTheFold:[{title:"Details",content:[{prefix:"Migration Strategy",text:"Designed incremental migration path from JavaScript to TypeScript with strict mode enabled"},{prefix:"Training & Education",text:"Created comprehensive weekly training curriculum covering TypeScript fundamentals through advanced patterns"},{prefix:"Tooling & Standards",text:"Established linting rules, type checking standards, and best practices documentation"}]}],key:"bluecore-typescript-adoption-strict-types"},"bluecore-tti-dashboard-frontend-monitoring":{title:"TTI Dashboard & Frontend Monitoring",emoji:"📡",year:"2021",startYear:2021,endYear:2022,role:"Staff Engineer",description:"Built Time to Interactive monitoring dashboard for Campaigns and Personalization routes. Improved frontend observability and performance tracking across customer-facing features.",impact:"Improved frontend observability and performance tracking. Enabled data-driven performance optimization decisions.",technologies:["Performance Monitoring","Time to Interactive","Frontend Observability"],belowTheFold:[{title:"Details",content:["Built Time to Interactive monitoring dashboard for Campaigns and Personalization routes","Improved frontend observability and performance tracking across customer-facing features","Enabled data-driven performance optimization decisions"]}],key:"bluecore-tti-dashboard-frontend-monitoring"},"bluecore-customer-360-revamp":{title:"Customer 360 Revamp",emoji:"👤",year:"2021",startYear:2021,endYear:2021,role:"Staff Engineer",description:"Revamped Customer 360 feature on Campaigns team. Proposed long-term improvement plan and handled BFCM (Black Friday/Cyber Monday) frontend readiness.",impact:"Improved Customer 360 feature performance and reliability. Successfully handled BFCM traffic spike.",technologies:["React","Performance Optimization","High Traffic Events","DOM Virtualization"],belowTheFold:[{title:"Details",content:["Added DOM virtualization to improve performance","Revamped Customer 360 feature on Campaigns team","Proposed long-term improvement plan","Handled BFCM (Black Friday/Cyber Monday) frontend readiness"]}],key:"bluecore-customer-360-revamp"},"dropbox-plus-plus-family-plans-life-vault":{title:"Plus Plus: Family Plans & Life Vault",emoji:"👨‍👩‍👧‍👦",year:"2020",startYear:2020,endYear:2020,role:"Software Engineer",description:"My work on Dropbox Plus followed a clear quarterly progression: I started on the Family team in Q1, then my manager and I were pulled to support the Vault team in Q2, and again to support the Backup team in Q3. By Q4, having touched all major feature areas, I joined the go-to-market integration squad. This unique progression made me the person who understood how all the product pieces fit together, enabling me to effectively coordinate across teams for a successful launch.",impact:"Successfully launched a new revenue-driving product with contributions from ~150 people across teams. Delivered a sophisticated family sharing experience enabling secure, credential-free family account management. Introduced a secure Vault feature with PIN access and comprehensive management UI. Contributed to robust computer backup functionality. Published engineering lifecycle insights on the Dropbox Tech Blog, highlighting effective team integration and pragmatic decision-making.",technologies:["React","Redux","TypeScript","Rust","Family Sharing","Vault","Computer Backup"],links:[{text:"Dropbox Tech Blog Post",url:"https://dropbox.tech/frontend/building-a-living-styleguide-at-dropbox"}],belowTheFold:[{title:"Details",content:[{prefix:"Family Plans (Q1)",text:"Joined the Family team, where I built the credential-free family sharing experience and the family account management UI. I established 1:1s with the team (engineers, PM, designer) and shipped my first feature within two weeks. Navigated remote work transition during COVID"},{prefix:"Vault (Q2)",text:"My manager and I were pulled in to support the Vault team. Led Vault web frontend development, mentoring another engineer through setup flow, PIN access system, and management interface implementation. I proposed team coding standards for consistency across five engineers"},{prefix:"Computer Backup (Q3)",text:"My manager and I were again pulled to support the Backup team. Built backup feature frontend and contributed to backend, including small change to Rust sync engine"},{prefix:"Go-to-Market Integration (Q4)",text:"Because I had touched all major feature areas (Family Plans, Vault, and Computer Backup), I became responsible for cross-functional coordination. I worked with approximately 150 people across various teams (engineering, product, design, marketing, legal) to successfully launch this new revenue-driving product. I also published engineering lifecycle insights on the Dropbox Tech Blog, sharing lessons learned from this large-scale product launch"}]}],key:"dropbox-plus-plus-family-plans-life-vault"},"dropbox-redux-state-management-system":{title:"Redux State Management System",emoji:"🗃️",year:"2018",startYear:2018,endYear:2018,role:"Software Engineer",description:"Designed and rolled out comprehensive Redux architecture with TypeScript type-safe patterns across Dropbox's frontend organization. Created reusable patterns, extensive documentation, and systematic team-by-team adoption strategy.",impact:"Adopted by ~10 teams across ~25 features, becoming company standard for state management. Reduced state-related bugs significantly. Improved developer velocity and code maintainability. Created foundation for future frontend architecture decisions. Presented approach in public talk 'Building a Typesafe Code Split React-Redux Application'.",technologies:["Redux","TypeScript","React","State Management","Architecture"],links:[{text:"Building a Typesafe Code Split React-Redux Application",url:"https://www.matthewgerstman.com/talks/"}],belowTheFold:[{title:"Details",content:[{prefix:"Architecture Design",text:"Built comprehensive Redux patterns with TypeScript type safety, covering common state operations and establishing best practices for complex state management"},{prefix:"Organizational Rollout",text:"Created extensive documentation and training materials. Systematic team-by-team adoption with direct support and code review guidelines"},{prefix:"Standards Establishment",text:"Set company-wide patterns for state management that influenced frontend direction across organization"}]}],key:"dropbox-redux-state-management-system"},"dropbox-underscore-lodash-migration":{title:"Underscore → Lodash Migration",emoji:"🔄",year:"2018",startYear:2018,endYear:2018,role:"Software Engineer",description:"Co-led migration of Dropbox's 10-year-old codebase from deprecated Underscore to Lodash, modernizing utility library used by millions daily. Built custom Webpack bundle, created comprehensive migration strategy, and executed phased rollout with only one production bug.",impact:"Modernized entire codebase dependency serving millions of users. Maintained bundle size targets through custom builds. Only one production bug despite thousands of lines migrated. Published migration approach on Dropbox Tech Blog. Established patterns for large-scale technical migrations.",technologies:["Lodash","Underscore","Webpack","Migration","Build Optimization"],belowTheFold:[{title:"Details",content:[{prefix:"Research & Alignment",text:"Wrote Web Enhancement Proposal (WEP) to build organizational consensus. Analyzed codebase to identify all Underscore usage and map to Lodash equivalents. Evaluated migration approaches and chose hybrid automated codemod + manual review strategy"},{prefix:"Custom Build Optimization",text:"Created custom Webpack Lodash bundle containing only needed functions to maintain bundle size. Built separate typings and treeshaking configs to optimize for production while preserving developer experience"},{prefix:"Phased Migration",text:"Split into four phases: direct 1:1 mappings, functions requiring modifications, edge cases, and final Underscore removal. Deployed each phase separately to catch issues incrementally. Thorough testing caught subtle differences (e.g., _.compact empty array handling)"}]}],key:"dropbox-underscore-lodash-migration"},"dropbox-file-viewer-sdk":{title:"File Viewer SDK",emoji:"👁️",year:"2018",startYear:2018,endYear:2018,role:"Software Engineer",description:"Led architecture and bootstrapping of cross-platform SDK for consistent file preview functionality across Dropbox web and desktop surfaces. Owned build pipeline, asset optimization, and API design for embedding file previews.",impact:"Infrastructure used across multiple Dropbox surfaces. Consistent file preview experience across platforms. Reusable component for future products. Optimized asset delivery and performance.",technologies:["SDK Development","Cross-Platform","File Preview","Build Pipeline"],belowTheFold:[{title:"Details",content:[{prefix:"Cross-Platform Architecture",text:"Designed SDK architecture supporting both web and desktop platforms with consistent API surface"},{prefix:"Build Pipeline",text:"Owned build pipeline and asset optimization for efficient file preview delivery"},{prefix:"Extensibility",text:"Built system for easily adding new file type support, enabling future expansion"}]}],key:"dropbox-file-viewer-sdk"},"dropbox-javascript-guild":{title:"JavaScript Guild",emoji:"🛠️",year:"2017-2020",startYear:2017,endYear:2020,role:"Software Engineer",description:"Founded JavaScript Guild as community of practice for frontend engineers across Dropbox. Organized knowledge-sharing sessions, published newsletters, coordinated cross-team initiatives, and established forum for frontend challenges.",impact:"Improved frontend culture and standards organization-wide. Created lasting community of practice across teams. Facilitated knowledge transfer and collaboration. Influenced organizational frontend direction through shared learning and discussion.",technologies:["Community Building","Knowledge Sharing","Frontend Culture"],belowTheFold:[{title:"Details",content:[{prefix:"Community Building",text:"Founded and nurtured frontend community across growing engineering organization with no centralized frontend coordination"},{prefix:"Knowledge Sharing",text:"Organized regular sessions and published newsletters with tips, updates, and best practices"},{prefix:"Cross-Team Coordination",text:"Created forum for discussing frontend challenges and coordinating initiatives across teams"}]}],key:"dropbox-javascript-guild"},"dropbox-javascript-guild-summit":{title:"JavaScript Guild Summit",emoji:"🎪",year:"2019-2020",startYear:2019,endYear:2020,role:"Software Engineer",description:"Organized multi-day technical summits (2019-2020) bringing together frontend engineers from across remote-first organization. Curated technical talks, workshops, and collaboration sessions for deep technical discussions and relationship building.",impact:"Strengthened cross-team relationships in remote-first organization. Enabled deeper technical collaboration. Created lasting organizational connections. Established model for future technical events.",technologies:["Event Planning","Technical Summits","Remote Collaboration"],belowTheFold:[{title:"Details",content:[{prefix:"Event Design",text:"Planned multi-day summits with curated technical content, workshops, and collaboration time"},{prefix:"Community Connection",text:"Created space for in-person connection and relationship building in remote-first company"},{prefix:"Knowledge Transfer",text:"Facilitated deep technical discussions and cross-team learning"}]}],key:"dropbox-javascript-guild-summit"},"dropbox-previews-mobile-web":{title:"Previews Mobile Web",emoji:"📱",year:"2017",startYear:2017,endYear:2017,role:"Software Engineer",description:"Built mobile web file preview experience for Dropbox, creating responsive preview interface optimized for mobile browsers. Early project at Dropbox establishing frontend patterns for mobile optimization and touch interactions.",impact:"Enabled file preview functionality for mobile web users without requiring app download. Improved mobile web experience for millions of users. Established mobile-first patterns for future Dropbox web features.",technologies:["Mobile Web","Responsive Design","File Preview","Touch Interactions"],belowTheFold:[{title:"Details",content:[{prefix:"Mobile Optimization",text:"Designed responsive preview interface optimized for mobile viewports, touch interactions, and varying network conditions"},{prefix:"Performance Focus",text:"Implemented progressive loading and optimized asset delivery for mobile bandwidth constraints"},{prefix:"Cross-Browser Support",text:"Ensured consistent experience across mobile browsers (Safari, Chrome, Firefox) with varying capabilities"}]}],key:"dropbox-previews-mobile-web"},"dropbox-showcase":{title:"Showcase",emoji:"🎨",year:"2017",startYear:2017,endYear:2017,role:"Software Engineer",description:"Contributed to Showcase product development, enabling professionals to create portfolio presentations from Dropbox files. Built frontend components for customizable layouts, branding, and file organization into professional showcases.",impact:"Enabled new use case for Dropbox files beyond storage—professional portfolio creation. Expanded Dropbox value proposition for creative professionals and freelancers.",technologies:["React","Product Development","Portfolio Creation"],belowTheFold:[{title:"Details",content:[{prefix:"Component Development",text:"Built frontend components for showcase creation, customization, and viewing experience"},{prefix:"File Integration",text:"Integrated with Dropbox file system to enable seamless file selection and organization into showcases"},{prefix:"Presentation Layer",text:"Created polished viewing experience for showcase recipients with responsive layouts and branding options"}]}],key:"dropbox-showcase"},"dropbox-zip-file-previews":{title:"ZIP File Previews",emoji:"📦",year:"2017",startYear:2017,endYear:2017,role:"Software Engineer",description:"Built ZIP file preview functionality allowing users to browse ZIP archive contents without downloading entire file. Created file tree navigation, preview support for contained files, and selective download capabilities.",impact:"Reduced unnecessary downloads by enabling preview-before-download workflow. Improved user experience for large ZIP files where users only need specific contents. Saved bandwidth and time for millions of users.",technologies:["File Preview","ZIP Parsing","File Tree UI"],belowTheFold:[{title:"Details",content:[{prefix:"Archive Parsing",text:"Implemented ZIP file parsing to extract directory structure and file metadata without full download"},{prefix:"Navigation Interface",text:"Built file tree UI for browsing ZIP contents with folder expansion, file preview, and selective download"},{prefix:"Preview Integration",text:"Integrated with existing file preview system to support previewing files within ZIP archives before downloading"},{prefix:"Performance Optimization",text:"Added DOM virtualization to improve performance for large ZIP files"}]}],key:"dropbox-zip-file-previews"},"todaytix-web-2-0-react-redux-rebuild":{title:"Web 2.0: React + Redux Rebuild",emoji:"⚛️",year:"Q3-Q4 2016",startYear:2016,endYear:2016,role:"Software Engineer",description:"Worked on team of 4 building greenfield React + Redux application from scratch. Learned modern React/Redux architecture and functional programming patterns by diving deep—read all of Lodash and Redux source code for fun. Built checkout flow, show landing pages, and authentication/SSR strategies. Integrated with new Swagger-based API client.",impact:"Shipped production app serving real customers. Deep-dive learning approach (reading source code) established strong foundation in React/Redux patterns that influenced entire career. Created scalable architecture enabling faster feature development.",technologies:["React","Redux","Lodash","Functional Programming","SSR","Swagger"],belowTheFold:[{title:"Details",content:[{prefix:"Deep Learning",text:"Learned React/Redux architecture through hands-on building and reading Lodash and Redux source code. Heavy functional programming focus shaped technical approach"},{prefix:"Feature Ownership",text:"Built checkout flow (core revenue path), show landing pages, and authentication/server-side rendering strategies. Integrated with new Swagger-based API client"},{prefix:"Greenfield Architecture",text:"Collaborated with team of 4 on greenfield architecture decisions, component patterns, and state management approach for production application"}]}],key:"todaytix-web-2-0-react-redux-rebuild"},"todaytix-special-offers-feature":{title:"Special Offers Feature",emoji:"🎟️",year:"Q2 2016",startYear:2016,endYear:2016,role:"Software Engineer",description:"Built feature converting lottery losers into buyers through personalized alternative show offers. Built APIs in a Groovy on Grails backend with complex SQL queries for offer matching, designed frontend offer selection experience, implemented business logic for eligibility.",impact:"Captured revenue from users who lost lotteries and would have left empty-handed. Turned user disappointment into conversion opportunity. Demonstrated end-to-end product engineering capability.",technologies:["Groovy on Grails","SQL","Backend APIs","Frontend"],belowTheFold:[{title:"Details",content:[{prefix:"Backend Development",text:"Built APIs in Groovy on Grails with complex SQL queries for matching alternative show offers based on user preferences and availability"},{prefix:"Frontend Experience",text:"Designed and implemented offer selection interface for lottery losers to browse and purchase alternative shows"},{prefix:"Business Logic",text:"Implemented eligibility rules and offer matching algorithms to personalize recommendations"}]}],key:"todaytix-special-offers-feature"},"todaytix-rush-ticketing":{title:"Rush Ticketing",emoji:"⏰",year:"Q1 2016",startYear:2016,endYear:2016,role:"Software Engineer",description:"Enabled same-day limited ticket purchases through new backend APIs and business logic. Built RESTful API design for rush ticket operations with complex availability and eligibility rules.",impact:"Expanded business model with same-day sales capability. Demonstrated backend architecture skills and successful cross-team collaboration with mobile engineers.",technologies:["RESTful APIs","Backend Development","Business Logic"],belowTheFold:[{title:"Details",content:[{prefix:"API Design",text:"Built RESTful APIs for rush ticket operations including availability checks, purchase flow, and eligibility verification"},{prefix:"Business Rules",text:"Implemented complex availability and eligibility logic for same-day limited ticket sales"},{prefix:"Cross-Team Collaboration",text:"Worked with mobile engineers to ensure consistent API behavior across platforms"}]}],key:"todaytix-rush-ticketing"},"todaytix-sentry-rollout":{title:"Sentry Rollout",emoji:"🔍",year:"Q4 2016",startYear:2016,endYear:2016,role:"Software Engineer",description:"Established production error monitoring with Sentry, moving from user-reported bugs to proactive error detection. Configured alerting, monitoring, and error triage processes.",impact:"Dramatically improved production visibility. Enabled proactive error detection before user reports. Reduced mean time to resolution. Established operational excellence culture.",technologies:["Sentry","Error Monitoring","Alerting","DevOps"],belowTheFold:[{title:"Details",content:[{prefix:"Monitoring Setup",text:"Configured Sentry for production error tracking with appropriate sampling and alert thresholds"},{prefix:"Process Establishment",text:"Created error triage processes and alerting workflows for team response"},{prefix:"Operational Excellence",text:"Shifted culture from reactive user-reported bugs to proactive error detection and resolution"}]}],key:"todaytix-sentry-rollout"},"todaytix-ansible-deployment-automation":{title:"Ansible Deployment Automation",emoji:"🤖",year:"Q1 2017",startYear:2017,endYear:2017,role:"Software Engineer",description:"Automated deployment process with Ansible playbooks for Node.js applications, replacing manual error-prone deployments. Created reliable, repeatable deployment process with Sentry integration.",impact:"Faster, more reliable deployments with reduced friction and errors. Enabled more frequent releases and improved team velocity.",technologies:["Ansible","Deployment Automation","Node.js","DevOps"],belowTheFold:[{title:"Details",content:[{prefix:"Automation",text:"Created Ansible playbooks for Node.js application deployments replacing manual processes"},{prefix:"Reliability",text:"Built repeatable deployment process reducing errors and deployment time"},{prefix:"Integration",text:"Integrated deployment automation with Sentry for immediate error detection post-deploy"}]}],key:"todaytix-ansible-deployment-automation"},"zetta-backbone-restful-apis-migration":{title:"Backbone + RESTful APIs Migration",emoji:"🔌",year:"2015",startYear:2015,endYear:2015,role:"Software Engineer",description:"Led complete backend migration to RESTful resource architecture and frontend migration to Backbone.js. Established API design standards, created documentation, and coordinated organization-wide adoption. Trained more senior engineers on REST paradigms.",impact:"Modernized entire API layer. Improved maintainability and developer experience. Reduced API-related bugs. Established patterns for future development. Trained other engineers in REST paradigm.",technologies:["Backbone.js","RESTful APIs","API Design","Documentation"],belowTheFold:[{title:"Details",content:[{prefix:"API Architecture",text:"Led complete backend migration to RESTful resource architecture with proper HTTP verbs and status codes"},{prefix:"Frontend Migration",text:"Migrated frontend to Backbone.js with proper MVC patterns and data binding"},{prefix:"Standards & Documentation",text:"Established API design standards and created comprehensive documentation for organization-wide adoption"},{prefix:"Training",text:"Trained more senior engineers on REST paradigms and best practices"}]}],key:"zetta-backbone-restful-apis-migration"},"zetta-ci-sentry-implementation":{title:"CI + Sentry Implementation",emoji:"🚨",year:"2015",startYear:2015,endYear:2015,role:"Software Engineer",description:"Set up continuous integration pipeline and implemented Sentry for production error tracking. Established quality standards, monitoring dashboards, and culture of observability.",impact:"Caught bugs before production deployment. Improved system visibility and reliability. Reduced customer-impacting incidents. Established operational excellence practices.",technologies:["CI/CD","Sentry","Error Monitoring","DevOps"],belowTheFold:[{title:"Details",content:[{prefix:"CI Pipeline",text:"Set up continuous integration pipeline for automated testing and quality checks"},{prefix:"Error Monitoring",text:"Implemented Sentry for production error tracking and alerting"},{prefix:"Observability Culture",text:"Established monitoring dashboards and culture of observability across team"}]}],key:"zetta-ci-sentry-implementation"},"zetta-svn-to-git-migration":{title:"SVN to Git Migration",emoji:"🌿",year:"2015",startYear:2015,endYear:2015,role:"Software Engineer",description:"Planned and executed organizational migration from SVN to Git. Established branching strategies, PR processes, and code review practices. Provided hands-on training for entire team.",impact:"Modernized development workflow. Improved collaboration through PR reviews. Enabled better branching and experimentation. Reduced merge conflicts.",technologies:["Git","SVN","Version Control","Code Review"],belowTheFold:[{title:"Details",content:[{prefix:"Migration Planning",text:"Planned and executed organizational migration from SVN to Git with minimal disruption"},{prefix:"Process Establishment",text:"Established branching strategies, PR processes, and code review practices"},{prefix:"Training",text:"Provided hands-on training for entire team on Git workflows"}]}],key:"zetta-svn-to-git-migration"},"zetta-data-restore-flow":{title:"Data Restore Flow",emoji:"♻️",year:"2014",startYear:2014,endYear:2014,role:"Software Engineer",description:"Built complete data restore flow enabling users to restore deleted or previous versions of data. Core revenue-driving feature (the money feature) for cloud storage product.",impact:"Critical differentiator for cloud storage product. Core revenue driver. Excellent user experience for complex operation. Demonstrated product engineering capability.",technologies:["Full-Stack","Cloud Storage","UX Design"],belowTheFold:[{title:"Details",content:[{prefix:"Full-Stack Development",text:"Built complete restore flow from file selection UI to backend restore operations"},{prefix:"UX Design",text:"Designed intuitive user experience for complex operations including version history and conflict resolution"},{prefix:"Backend Integration",text:"Integrated backend restore operations with proper error handling and edge cases"}]}],key:"zetta-data-restore-flow"},"zetta-user-enrollment-flow-refactor":{title:"User Enrollment Flow Refactor",emoji:"📝",year:"2014",startYear:2014,endYear:2014,role:"Software Engineer",description:"Refactored user enrollment and onboarding flow for improved conversion and user experience. Modernized legacy enrollment code.",impact:"Improved user onboarding experience. Better conversion rates. Cleaner, more maintainable enrollment code.",technologies:["User Onboarding","Conversion Optimization"],belowTheFold:[{title:"Details",content:[{prefix:"Flow Refactor",text:"Refactored user enrollment and onboarding flow for improved conversion"},{prefix:"Code Modernization",text:"Modernized legacy enrollment code for better maintainability"},{prefix:"UX Improvements",text:"Enhanced user experience throughout enrollment process"}]}],key:"zetta-user-enrollment-flow-refactor"},"zetta-performance-optimization-grunt-build-system":{title:"Performance Optimization & Grunt Build System",emoji:"⚡",year:"2014",startYear:2014,endYear:2014,role:"Software Engineer",description:"Systematically profiled and optimized web application performance, significantly reducing page load times. Simultaneously migrated the build system to Grunt, optimizing asset compilation and improving developer experience.",impact:"Achieved a dramatic reduction in initial page load time from 8 seconds to 500 milliseconds. Delivered faster, more efficient builds and significantly improved developer productivity through modern tooling and optimized workflows.",technologies:["Performance Optimization","Grunt","Build Systems","Profiling"],belowTheFold:[{title:"Details",content:[{prefix:"Build System Migration to Grunt",text:"Migrated the legacy build system to Grunt, implementing optimized asset compilation, bundling, and minification"},{prefix:"Page Load Optimization",text:"Performed systematic profiling and refactoring of critical paths, including asset loading, rendering, and data fetching, to drastically reduce initial page load times"},{prefix:"Developer Experience Improvements",text:"Enhanced the overall development workflow with faster builds, modern tooling, and a more efficient build pipeline"}]}],key:"zetta-performance-optimization-grunt-build-system"},"zetta-data-deletion-queue":{title:"Data Deletion Queue",emoji:"🗑️",year:"2014",startYear:2014,endYear:2014,role:"Software Engineer",description:"Built data deletion queue system for lifecycle management and compliance. Created UI for managing deletion requests with backend job processing.",impact:"Core product feature for cloud storage. Enabled compliance with data retention policies. Improved user control over storage. Demonstrated full-stack product development capability.",technologies:["Queue Systems","Lifecycle Management","Compliance"],belowTheFold:[{title:"Details",content:[{prefix:"Queue System",text:"Built data deletion queue with lifecycle management and scheduling"},{prefix:"Full-Stack Implementation",text:"Created UI for deletion requests and backend job processing"},{prefix:"Edge Cases",text:"Handled error scenarios and edge cases for reliable deletion"}]}],key:"zetta-data-deletion-queue"},"zetta-structured-logging":{title:"Structured Logging",emoji:"📋",year:"2013",startYear:2013,endYear:2013,role:"Software Engineer",description:"Implemented structured logging system during first three months at company. Established logging standards and practices for better system observability.",impact:"Improved system debugging and monitoring capabilities. Established foundation for operational excellence. Early impact as new engineer.",technologies:["Logging","Observability","DevOps"],belowTheFold:[{title:"Details",content:[{prefix:"Logging System",text:"Implemented structured logging system for better observability"},{prefix:"Standards",text:"Established logging standards and practices across codebase"},{prefix:"Early Impact",text:"Delivered significant infrastructure improvement in first three months"}]}],key:"zetta-structured-logging"},"zetta-release-gating":{title:"Release Gating",emoji:"🚦",year:"2013",startYear:2013,endYear:2013,role:"Software Engineer",description:"Built release gating system to ensure quality before production deployments. Created automated checks and manual approval workflows.",impact:"Improved release quality and reduced production incidents. Established quality gates for deployments.",technologies:["Release Management","Quality Assurance","Automation"],belowTheFold:[{title:"Details",content:[{prefix:"Gating System",text:"Built release gating system with automated quality checks"},{prefix:"Approval Workflows",text:"Created manual approval workflows for production releases"},{prefix:"Quality Improvement",text:"Reduced production incidents through systematic quality gates"}]}],key:"zetta-release-gating"},"dance-marathon-tweet-two-screens":{title:"Tweet Two Screens",emoji:"🐦",year:"2013",description:"Custom tweet visualizers optimized for Jumbotron display with real-time aggregation.",technologies:["Twitter API","jQuery","Real-time"],role:"",startYear:2013,endYear:2013,belowTheFold:[{title:"Details",content:["Built custom tweet visualizers optimized for Jumbotron display","Implemented real-time tweet aggregation via Twitter API","Created visual design specifically for large-screen viewing","Built content moderation system for appropriate messaging"]}],key:"dance-marathon-tweet-two-screens"},"dance-marathon-dmatuf-iphone-app":{title:"DMatUF iPhone App",emoji:"📲",year:"2013",description:"Native iOS event app with schedule, song requests, and arena map for offline-first usage.",technologies:["iOS","Objective-C","Native Mobile"],role:"",startYear:2013,endYear:2013,belowTheFold:[{title:"Details",content:["Built native iOS event app (pre-widespread adoption era)","Implemented event schedule and timing features","Created song request functionality","Designed locally hosted basketball arena map"]}],key:"dance-marathon-dmatuf-iphone-app"},"dance-marathon-dmassassins":{title:"DMAssassins",emoji:"🎯",year:"2012",description:"Real-life 'assassins' game with target assignment system keeping thousands engaged throughout 26.6-hour marathon.",impact:"Used by thousands for 5+ years",technologies:["PHP","MySQL","jQuery","Game Design"],role:"",startYear:2012,endYear:2012,belowTheFold:[{title:"Details",content:["Designed real-life 'assassins' game with target assignment system","Built pin verification system for 'hits'","Implemented automatic target reassignment upon elimination","Created MySQL backend for game state management","Built jQuery frontend for game interface"]}],key:"dance-marathon-dmassassins"},"early-programming-university-of-florida-computer-science-degree":{title:"University of Florida - Computer Science Degree",emoji:"🎓",year:"2009-2013",description:"Comprehensive computer science education covering programming, algorithms, systems, and mathematics.",technologies:["Java","C","PHP","MySQL","WordPress","CS Fundamentals"],role:"",startYear:2009,endYear:2013,belowTheFold:[{title:"Details",content:["Core CS: Data Structures, Algorithms, Operating Systems, Networks, Databases","Systems: Computer Organization, Digital Logic, Circuits","Mathematics: Calculus 1-3, Differential Equations, Linear Algebra, Statistics","Languages: Java, C, PHP, MySQL","Continued WordPress contracting work during college"]}],key:"early-programming-university-of-florida-computer-science-degree"},"early-programming-body-logic-md-it-support":{title:"Body Logic MD - IT Support",emoji:"💻",year:"2008-2009",description:"First 'real' job in office environment during high school, supporting workplace users.",technologies:["IT Support","QA Testing"],role:"",startYear:2008,endYear:2009,belowTheFold:[{title:"Details",content:["Supported systems people depended on for their jobs","Learned professional work skills","Handled non-technical workplace users","Organized group of friends to QA company's new website on weekend"]},{title:"Leadership",content:["Team leadership: Organized QA testing weekend with friends"]}],key:"early-programming-body-logic-md-it-support"},"early-programming-johns-hopkins-summer-program":{title:"Johns Hopkins Summer Program",emoji:"🏫",year:"2008",description:"Programming 1 course providing deeper dive into computer science fundamentals, plus philosophy course developing critical thinking.",technologies:["Computer Science Fundamentals","Philosophy"],role:"",startYear:2008,endYear:2008,key:"early-programming-johns-hopkins-summer-program"},"early-programming-freelance-computer-repair-web-design":{title:"Freelance Computer Repair & Web Design",emoji:"🔧",year:"2006-2009",description:"High school freelance work doing computer repair, virus removal, and building simple websites.",technologies:["Computer Repair","Web Design","Customer Service"],role:"",startYear:2006,endYear:2009,belowTheFold:[{title:"Details",content:["Computer repair and troubleshooting","Virus removal during 'era of constant malware'","Software installation and configuration","Teaching people how to use computers","Designing and building simple websites"]}],key:"early-programming-freelance-computer-repair-web-design"},"early-programming-don-estridge-high-tech-middle-school":{title:"Don Estridge High Tech Middle School",emoji:"🏫",year:"2005",description:"Programming in Pascal, hardware assembly, field support, and early security research.",technologies:["Pascal","Hardware Assembly","Field Support"],role:"",startYear:2005,endYear:2005,belowTheFold:[{title:"Details",content:["Wrote programs for fun in Pascal classes","Built command line interactive Periodic Table for science project","Discovered and reported printer security vulnerability","Learned computer assembly, BIOS configuration, and hardware troubleshooting","Fixed computers for students and teachers","Developed skills explaining technical concepts to non-technical users"]}],key:"early-programming-don-estridge-high-tech-middle-school"},"early-programming-first-programs-websites":{title:"First Programs & Websites",emoji:"🌐",year:"1999-2000",description:"Started with Visual Basic guest book, then built websites with HTML and JavaScript including the legendary 'DBZ dance party site'.",technologies:["Visual Basic","HTML","JavaScript"],role:"",startYear:1999,endYear:2e3,belowTheFold:[{title:"Details",content:["First program: Generic guest book using Visual Basic 5","Built websites to show classmates at school","Created site with personalized message prompts","Made 'DBZ dance party' site with Dragon Ball Z gifs and Ocarina of Time music"]}],key:"early-programming-first-programs-websites"}},Lu={jobs:[{id:"datadog",company:"Datadog",role:`Senior Software Engineer 
 Engineering Manager`,period:"Aug 2022 - Sep 2025",startDate:"2022-09",description:"Worked on complex collaborative apps. Talked directly to customers.",color:"#632CA6",projects:[N["datadog-notebooks-2-0"],N["datadog-dashboard-reporting-pdf-export"],N["datadog-integration-testing-framework"],N["datadog-typescript-cleanup-initiative"],N["datadog-graphing-summit"],N["datadog-ic1-class"],N["datadog-frontend-summit"]]},{id:"bluecore",company:"Bluecore",role:"Staff Engineer",period:"June 2021 - September 2022",startDate:"2021-06",endDate:"2022-09",description:"Owned the frontend platform.",color:"#0A7EA4",projects:[N["bluecore-frontend-north-star-architecture-modernization"],N["bluecore-frontend-interview-loop-design"],N["bluecore-nextserver-next-js-on-kubernetes"],N["bluecore-autogenerated-api-client"],N["bluecore-component-library-consolidation"],N["bluecore-typescript-adoption-strict-types"],N["bluecore-tti-dashboard-frontend-monitoring"],N["bluecore-customer-360-revamp"]]},{id:"dropbox",company:"Dropbox",startDate:"April 2017",endDate:"April 2021",period:"April 2017 - April 2021",role:"Software Engineer → Senior Software Engineer",description:"Architected state management systems and founded JavaScript Guild for organizational best practices.",color:"#0061FF",projects:[N["dropbox-plus-plus-family-plans-life-vault"],N["dropbox-redux-state-management-system"],N["dropbox-underscore-lodash-migration"],N["dropbox-file-viewer-sdk"],N["dropbox-javascript-guild"],N["dropbox-javascript-guild-summit"],N["dropbox-previews-mobile-web"],N["dropbox-showcase"],N["dropbox-zip-file-previews"]]},{id:"todaytix",company:"TodayTix",role:"Senior Software Engineer",period:"2015 - 2017",startDate:"2015-01",endDate:"2017-12",description:"Led frontend development and architecture.",color:"#E94C89",projects:[N["todaytix-web-2-0-react-redux-rebuild"],N["todaytix-special-offers-feature"],N["todaytix-rush-ticketing"],N["todaytix-sentry-rollout"],N["todaytix-ansible-deployment-automation"]]},{id:"zetta",company:"Zetta.net",role:"Software Engineer",period:"2013 - 2015",startDate:"2013-01",endDate:"2015-12",description:"Full-stack web development.",color:"#EA6A47",projects:[N["zetta-backbone-restful-apis-migration"],N["zetta-ci-sentry-implementation"],N["zetta-svn-to-git-migration"],N["zetta-data-restore-flow"],N["zetta-user-enrollment-flow-refactor"],N["zetta-performance-optimization-grunt-build-system"],N["zetta-data-deletion-queue"],N["zetta-structured-logging"],N["zetta-release-gating"]]},{id:"dance-marathon",company:"Dance Marathon at UF",role:"Technology Captain → Technology Overall Director",period:"September 2010 - April 2013",startDate:"2010-09",endDate:"2013-04",description:"Led technology strategy for one of the largest student-run philanthropies.",color:"#FFD93D",projects:[N["dance-marathon-tweet-two-screens"],N["dance-marathon-dmatuf-iphone-app"],N["dance-marathon-dmassassins"]]},{id:"early-programming",company:"Early Programming & Education",role:"Student & Freelance Developer",period:"1999 - 2013",startDate:"1999",endDate:"2013",description:"From first Visual Basic program at age 11 to computer science degree, building websites, fixing computers, and developing deep technical foundations.",color:"#95E1D3",projects:[N["early-programming-university-of-florida-computer-science-degree"],N["early-programming-body-logic-md-it-support"],N["early-programming-johns-hopkins-summer-program"],N["early-programming-freelance-computer-repair-web-design"],N["early-programming-don-estridge-high-tech-middle-school"],N["early-programming-first-programs-websites"]]}]},Wu=Lu.jobs.reduce((e,t)=>(e[t.id]=t,e),{}),Zw="_container_1y9on_1",ev="_hero_1y9on_7",tv="_subtitle_1y9on_19",nv="_timeline_1y9on_24",nr={container:Zw,hero:ev,subtitle:tv,timeline:nv},or=Lu,ov=()=>{const[e]=wg(),t=e.has("expandAll"),n=e.get("project");return s.jsxs("div",{className:nr.container,children:[or.hero&&s.jsxs("header",{className:nr.hero,children:[s.jsx(Ru,{as:"h1",children:or.hero.title}),s.jsx("p",{className:nr.subtitle,children:or.hero.subtitle})]}),s.jsx("div",{className:nr.timeline,children:or.jobs.map(o=>s.jsx(Xw,{job:o,expandAll:t,targetProject:n},o.id))})]})},rv="_container_1beyv_1",av="_header_1beyv_8",iv="_title_1beyv_15",sv="_lead_1beyv_29",lv="_sectionTitle_1beyv_37",cv="_zetta_1beyv_59",dv="_todaytix_1beyv_67",uv="_dropbox_1beyv_75",pv="_bluecore_1beyv_83",hv="_datadog_1beyv_91",mv="_paragraph_1beyv_99",E={container:rv,header:av,title:iv,lead:sv,sectionTitle:lv,zetta:cv,todaytix:dv,dropbox:uv,bluecore:pv,datadog:hv,paragraph:mv},sc=()=>s.jsxs("div",{className:E.container,children:[s.jsxs("div",{className:E.header,children:[s.jsx("h1",{className:E.title,children:"About Me"}),s.jsx("p",{className:E.lead,children:"I'm Matthew Gerstman, and I've been building things on the internet since I was 9 years old."})]}),s.jsx("h2",{className:E.sectionTitle,children:"Early Programming"}),s.jsx("p",{className:E.paragraph,children:"I got started when my friend's older brother was building a game called 'Falldown' in C++. I thought it was the coolest thing in the world. He gave me a learn Visual Basic 5 CD set and I built my first program, a generic guest book for websites."}),s.jsx("p",{className:E.paragraph,children:"At ten I started learning HTML and JavaScript to build websites to show people at school. I built interactive sites where users could enter their name and get personalized messages."}),s.jsxs("p",{className:E.paragraph,children:["My favorite site I built was a DBZ dance party site. It was like the"," ",s.jsx("a",{href:"https://originalhampster.ytmnd.com/",target:"_blank",rel:"noopener noreferrer",children:"hamster dance"}),", but with Dragon Ball Z gifs and music from Ocarina of Time. I wish I still had that code."]}),s.jsxs("p",{className:E.paragraph,children:[s.jsx("a",{href:"https://en.wikipedia.org/wiki/TechTV",target:"_blank",rel:"noopener noreferrer",children:"TechTV"})," ","had a huge impact on me. I loved"," ",s.jsx("a",{href:"https://en.wikipedia.org/wiki/The_Screen_Savers",target:"_blank",rel:"noopener noreferrer",children:"The Screen Savers"})," ","and even called in a few times. I saw Kevin Mitnick talk about"," ",s.jsx("a",{href:"https://en.wikipedia.org/wiki/The_Art_of_Deception",target:"_blank",rel:"noopener noreferrer",children:"the art of deception"})," ","and how social engineering works. I watched"," ",s.jsx("a",{href:"https://en.wikipedia.org/wiki/Pirates_of_Silicon_Valley",target:"_blank",rel:"noopener noreferrer",children:"Pirates of Silicon Valley"})," ","repeatedly. My childhood heroes were Jobs and Wozniak."]}),s.jsx("p",{className:E.paragraph,children:"Going into 8th grade a new school opened up, Don Estridge High Tech Middle. I was only there for one year, but it gave me opportunities I never would have dreamed of. I got to take programming in Pascal, Computer Hardware, and a class where I did IT support for teachers."}),s.jsx("p",{className:E.paragraph,children:"I kept it up in high school. I charged adults to fix their computers and had about 10 clients. I had a job doing IT for a local medical company. I organized a team to QA their new website."}),s.jsx("p",{className:E.paragraph,children:"In summer 2008 I was lucky enough to attend a program at Johns Hopkins University. I took two courses: Programming 1 and Philosophy. Programming 1 was a deeper dive into computer science fundamentals, solidifying my academic understanding. The Philosophy course, surprisingly, taught me critical thinking and logical reasoning skills that proved invaluable in approaching complex technical problems."}),s.jsx("h2",{className:E.sectionTitle,children:"College"}),s.jsx("p",{className:E.paragraph,children:"From 2009 to 2013, I pursued a Computer Science degree at the University of Florida. I also continued to apply my skills by contracting WordPress websites for various clients."}),s.jsx("p",{className:E.paragraph,children:"The highlight of my college career was Dance Marathon."}),s.jsxs("p",{className:E.paragraph,children:["Dance Marathon was an event where thousands of students would stand and stay awake for 26.2 hours. I got increasingly involved over a 4 year period. By my senior year I was running technology for the whole event. I got to write some cool stuff. I built a website to handle real life games of"," ",s.jsx("a",{href:"https://github.com/matthew-gerstman/dmassassins",target:"_blank",rel:"noopener noreferrer",children:"assassins"}),", an"," ",s.jsx("a",{href:"https://github.com/matthew-gerstman/DMatUF-iPhone-App",target:"_blank",rel:"noopener noreferrer",children:"iOS app"})," ","for the event, and a"," ",s.jsx("a",{href:"https://github.com/matthew-gerstman/TweetTwoScreens",target:"_blank",rel:"noopener noreferrer",children:"tweet visualizer"})," ","for the jumbotron. This was the first time I got to write real software used by real people."]}),s.jsx("h2",{className:`${E.sectionTitle} ${E.zetta}`,children:"Zetta"}),s.jsxs("p",{className:E.paragraph,children:["My first internship and real job was at"," ",s.jsx("a",{href:"https://en.wikipedia.org/wiki/Zetta_(cloud_backup)",target:"_blank",rel:"noopener noreferrer",children:"Zetta"}),", a startup that did cloud backup for enterprise in Sunnyvale California. The most senior people came from Netscape and I got to hear lots of cool war stories from that era. I was hungry to learn and took time outside of work to learn Go and Backbone. I brought these technologies into work."]}),s.jsx("p",{className:E.paragraph,children:"The job was good, but I desperately wanted to live in New York City. I started the hunt for my next job."}),s.jsx("h2",{className:E.sectionTitle,children:"Interviewing"}),s.jsx("p",{className:E.paragraph,children:"Going from Job #1 to Job #2 was one of the most intense periods of my career. I woke up at 5 AM every day to do practice problems in Cracking the Coding Interview. This was the whiteboard era, so I did them by hand in a notebook. Around 8AM I would take an east coast interview, and then head to my dayjob. I spoke to 50 companies over the phone, planned a week with 6 onsites, and moved myself to New York within 3 months."}),s.jsx("h2",{className:`${E.sectionTitle} ${E.todaytix}`,children:"TodayTix"}),s.jsx("p",{className:E.paragraph,children:"I was so excited to land at TodayTix. This was a consumer focused product, and something I could explain to non technical friends. I also got really into theater. During my 10 years in NYC I saw 250 performances. I still have the playbills in binders."}),s.jsx("p",{className:E.paragraph,children:"TodayTix is also where I learned frontend. In 2016 I got to work on a greenfield webapp using all the latest technologies of the time: React, Redux, and Lodash. We were really into functional programming and played code golf trying to get things down to as few lines as possible."}),s.jsx("p",{className:E.paragraph,children:"Overall I had a great time there, but one day I saw an online ad for a Dropbox meetup."}),s.jsx("h2",{className:`${E.sectionTitle} ${E.dropbox}`,children:"Dropbox"}),s.jsx("p",{className:E.paragraph,children:"I loved Dropbox from the moment it was released. As a kid I wanted the ability to keep all my devices in sync. I envisioned a world where we could all pick up any device and it would show the same stuff on a different screen size. Dropbox was the first product to bring this vision to life in the cloud."}),s.jsx("p",{className:E.paragraph,children:'I pitched myself as a frontend expert. The company was historically infra-heavy and they did not have a lot of in house frontend expertise. I had so much imposter syndrome when I joined. I remember my manager asked me how I wanted to grow and I was thinking "I just spent the last 3 years trying to get a job at a big tech company." I had no idea what the next goalpost was. My manager taught me about levels and what a Staff Engineer was, that became the new goal.'}),s.jsx("p",{className:E.paragraph,children:"I worked on a lot of cool projects at Dropbox, but the thing I am still proudest of is the JS Guild. When I joined all of the frontend engineers were in silos and there was no community for them. Me and a couple of other people built it."}),s.jsx("p",{className:E.paragraph,children:"After Covid, Dropbox went fully remote which I was not ready for. In 2021 it was time for something new."}),s.jsx("h2",{className:`${E.sectionTitle} ${E.bluecore}`,children:"Bluecore"}),s.jsx("p",{className:E.paragraph,children:'I had a really ambitious mandate at Bluecore. "Go build out a frontend platform team." I got a lot done in the time I was there. I built features, wrote their frontend north star, migrated their component library to typescript, shipped an autogenerated API client, and began a migration from a python monolith to NextJS.'}),s.jsx("p",{className:E.paragraph,children:"Unfortunately there was a leadership shakeup. The person who recruited me was pushed out and I lost funding to hire for my team. I had a friend at Datadog and he pitched me on joining."}),s.jsx("h2",{className:`${E.sectionTitle} ${E.datadog}`,children:"Datadog"}),s.jsx("p",{className:E.paragraph,children:"I wanted this job so bad. Datadog is doing some of the best frontend work in the industry. The UI is incredibly complex, data-dense, and interactive. This was the first time I was nowhere near the best frontend engineer at the company. I was thrilled to be in the middle of the pack."}),s.jsx("p",{className:E.paragraph,children:"I learned so much from so many brilliant people. The developer experience is magical and abstractions like Univiz around rendering graphs are brilliant."}),s.jsx("p",{className:E.paragraph,children:"I spent 2.5 years in the graphing org. The first half of that was as an engineer on Dashboards, the second half learning to manage on Notebooks. I loved my team, but I realized at some point I wanted to go back to building things myself. I wrapped up Notebooks 2.0 and planned a massive Graphing Summit. I taught an IC1 class and made so many wonderful connections. But I needed to go remote."}),s.jsx("p",{className:E.paragraph,children:"My wife and I decided to move to Syracuse, NY. In order to stay at Datadog I needed to join a remote friendly org. I wanted to go back to IC anyway so that helped. The new org was not the same. I went from shipping products to millions of users to working on internal tools that had gratuitous amounts of red tape. I was basically working for a different company."}),s.jsx("h2",{className:E.sectionTitle,children:"My Next Role"}),s.jsx("p",{className:E.paragraph,children:"I'm so grateful to be taking a few months off. But I'm also restless, so I'm lining up the next thing. I want to build something important and work with amazing people."}),s.jsx("p",{className:E.paragraph,children:"I want to own features end-to-end. Give me a problem, let me talk to users, and I will build and ship a solution that works. I thrive on impact, from conception to deployment."}),s.jsx("p",{className:E.paragraph,children:'I care about craft: robust systems, modern tech, and interfaces that feel right. I want to set a high bar for UX, especially in emerging spaces like agent products where we define "good."'}),s.jsx("p",{className:E.paragraph,children:"I identify what is broken and fix it. Whether it is enabling multi-threaded workflows, adding iPad support, or just building dark mode."}),s.jsxs("p",{className:E.paragraph,children:["You can see all of my projects ",s.jsx(dt,{to:"/resume",children:"here"})," and I am excited to roll up my sleeves on the next thing."]})]}),gv="_card_3z8fw_1",fv="_title_3z8fw_20",yv="_companyName_3z8fw_27",wv="_description_3z8fw_38",vv="_tags_3z8fw_45",bv="_clickHint_3z8fw_53",dn={card:gv,title:fv,companyName:yv,description:wv,tags:vv,clickHint:bv};function kv({project:e,companyName:t,companyColor:n,onClick:o}){return s.jsxs("div",{className:dn.card,onClick:o,children:[s.jsxs("h3",{className:dn.title,style:{color:n},children:[s.jsx("span",{className:dn.companyName,children:t})," — ",e.title]}),s.jsx("p",{className:dn.description,children:e.description}),e.technologies&&e.technologies.length>0&&s.jsx(Ds,{tags:e.technologies,className:dn.tags}),s.jsx("div",{className:dn.clickHint,children:s.jsx("span",{children:"View Details →"})})]})}const xv="_overlay_yyh1z_1",Sv="_modal_yyh1z_26",Tv="_closeButton_yyh1z_50",Iv="_modalHeader_yyh1z_76",zv="_companyBadge_yyh1z_81",jv="_modalContent_yyh1z_91",Pv="_description_yyh1z_95",_v="_impact_yyh1z_102",Cv="_outcomeLabel_yyh1z_113",Ev="_tags_yyh1z_120",Nv="_details_yyh1z_127",Mv="_detailSection_yyh1z_133",Rv="_contentPrefix_yyh1z_167",Pe={overlay:xv,modal:Sv,closeButton:Tv,modalHeader:Iv,companyBadge:zv,modalContent:jv,description:Pv,impact:_v,outcomeLabel:Cv,tags:Ev,details:Nv,detailSection:Mv,contentPrefix:Rv};function Av({project:e,companyName:t,companyColor:n,onClose:o}){const r=e.startYear===e.endYear?`${e.endYear}`:`${e.startYear}–${e.endYear}`;k.useEffect(()=>{const i=l=>{l.key==="Escape"&&o()};return document.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",i),document.body.style.overflow="unset"}},[o]);const a=i=>typeof i=="string"?i:s.jsxs(s.Fragment,{children:[i.prefix&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:Pe.contentPrefix,children:i.prefix})," — "]}),i.text]});return s.jsx("div",{className:Pe.overlay,onClick:o,children:s.jsxs("div",{className:Pe.modal,onClick:i=>i.stopPropagation(),children:[s.jsx("button",{className:Pe.closeButton,onClick:o,"aria-label":"Close",children:"×"}),s.jsx("div",{className:Pe.modalHeader,children:s.jsx("div",{className:Pe.companyBadge,style:{borderColor:n},children:s.jsx("span",{style:{color:n},children:t})})}),s.jsxs("div",{className:Pe.modalContent,children:[s.jsx(ia,{title:e.title,role:e.role,hasExpand:!1,isExpanded:!0,yearDisplay:r}),s.jsx("p",{className:Pe.description,children:e.description}),e.impact&&s.jsxs("div",{className:Pe.impact,children:[s.jsx("span",{className:Pe.outcomeLabel,children:"Outcome:"})," ",e.impact]}),s.jsx(Au,{links:e.links||[]}),s.jsx(Ds,{tags:e.technologies||[],className:Pe.tags}),e.belowTheFold&&e.belowTheFold.length>0&&s.jsx("div",{className:Pe.details,children:e.belowTheFold.map((i,l)=>{var c;return s.jsxs("div",{className:Pe.detailSection,children:[s.jsx("h5",{children:i.title}),i.content&&i.content.length===1&&typeof i.content[0]=="string"?s.jsx("p",{children:i.content[0]}):s.jsx("ul",{children:(c=i.content)==null?void 0:c.map((d,g)=>s.jsx("li",{children:a(d)},g))})]},l)})})]})]})})}const Lv="_container_faaiv_1",Wv="_hero_faaiv_7",Dv="_subtitle_faaiv_12",Fv="_personalStatement_faaiv_20",Bv="_statementText_faaiv_34",Hv="_requirementsContainer_faaiv_54",Ov="_sectionTitle_faaiv_60",$v="_requirementSection_faaiv_69",Uv="_requirementHeader_faaiv_75",Gv="_requirementTitle_faaiv_81",Yv="_requirementDescription_faaiv_91",qv="_projectsRow_faaiv_99",pe={container:Lv,hero:Wv,subtitle:Dv,personalStatement:Fv,statementText:Bv,requirementsContainer:Hv,sectionTitle:Ov,requirementSection:$v,requirementHeader:Uv,requirementTitle:Gv,requirementDescription:Yv,projectsRow:qv},Vv=[{title:"Complex React Components & Real-Time Collaboration",description:"Virtualized tables/lists, drag-and-drop editors, real-time collaborative cursors, rich text co-authoring, and low-latency conflict-aware UX",projectKeys:["datadog-notebooks-2-0","datadog-dashboard-reporting-pdf-export","dropbox-zip-file-previews"]},{title:"Performance Optimization & System-Level Thinking",description:"Bundle strategy, render paths, memoization, concurrent features, asset pipelines, code-splitting, hydration strategies, and profiling",projectKeys:["bluecore-frontend-north-star-architecture-modernization","dropbox-underscore-lodash-migration","zetta-performance-optimization-grunt-build-system"]},{title:"Full-Stack Feature Development & Product Ownership",description:"End-to-end ownership from conception to deployment, talking directly to users, and driving key product initiatives",projectKeys:["datadog-dashboard-reporting-pdf-export","dropbox-plus-plus-family-plans-life-vault","todaytix-special-offers-feature"]},{title:"Modern Frontend Technologies & Architecture",description:"Deep expertise in TypeScript, JavaScript, React, CSS (modern layout, animations, variables), and scalable web applications",projectKeys:["bluecore-typescript-adoption-strict-types","dropbox-redux-state-management-system","todaytix-web-2-0-react-redux-rebuild"]},{title:"Cross-Browser/Device Testing & Reliability",description:'Establishing state-of-the-art testing, operational excellence, and making experiences "just work" every time',projectKeys:["datadog-integration-testing-framework","dropbox-previews-mobile-web","todaytix-sentry-rollout"]},{title:"Technical Leadership & Standards",description:"Raising the bar for technical standards, performance, reliability, and influencing decisions across the organization",projectKeys:["datadog-graphing-summit","dropbox-javascript-guild","bluecore-frontend-interview-loop-design"]},{title:"High Velocity & Autonomy",description:"Operating at an unreasonable pace, doing large amounts of meaningful work quickly with little oversight, and defaulting to simple designs that scale",projectKeys:["datadog-typescript-cleanup-initiative","bluecore-component-library-consolidation","todaytix-ansible-deployment-automation"]},{title:"Design Partnership & User Experience",description:"Sweating the details (type, motion, density, affordances, empty states), collaborating on design, and protecting quality",projectKeys:["datadog-notebooks-2-0","dropbox-file-viewer-sdk","zetta-user-enrollment-flow-refactor"]}],Jv=()=>{const[e,t]=k.useState(null),n=o=>{const r=N[o];return r?{key:o,project:r,companyName:Kv(o),companyColor:Qv(o)}:(console.warn(`Project not found: ${o}`),null)};return s.jsxs("div",{className:pe.container,children:[s.jsxs("header",{className:pe.hero,children:[s.jsx(Ru,{as:"h1",children:"Why Obvious"}),s.jsx("p",{className:pe.subtitle,children:"Building ambitious products with rigor and craft"})]}),s.jsxs(D,{type:"border",position:"top",animationType:"pulse",className:pe.personalStatement,children:[s.jsx("p",{className:pe.statementText,children:"I've haven't been able to stop using Obvious since I got it. The product is thoughtfully designed and genuinely useful. Its so much fun to work with."}),s.jsx("p",{className:pe.statementText,children:"I bring the technical depth and leadership this role needs. At Datadog, I managed Notebooks 2.0 — a highly collaborative real-time editing product—and built the dashboard reporting service from scratch. At Bluecore, I picked the frontend technologies that set direction for years to come. At Dropbox, I designed patterns that became the org standard and co-led a massive utility library migration."}),s.jsx("p",{className:pe.statementText,children:"Beyond the code, I've built the connective tissue that makes teams better: founding JavaScript guilds, organizing technical summits, designing interview loops, teaching classes."}),s.jsx("p",{className:pe.statementText,children:"I want to work on Obvious because you're building something that matters. This is the coolest product I've seen in a very long time. I want to be part of that."}),s.jsx("p",{className:pe.statementText,children:"I hope this website demonstrates what it looks like when I sweat the details. It was built with Obvious."})]}),s.jsxs("div",{className:pe.requirementsContainer,children:[s.jsx("h2",{className:pe.sectionTitle,children:"Experience Mapped to Requirements"}),Vv.map((o,r)=>{const a=o.projectKeys.map(n).filter(i=>i!==null);return s.jsxs("section",{className:pe.requirementSection,children:[s.jsxs("div",{className:pe.requirementHeader,children:[s.jsx("h3",{className:pe.requirementTitle,children:o.title}),s.jsx("p",{className:pe.requirementDescription,children:o.description})]}),s.jsx("div",{className:pe.projectsRow,children:a.map(({key:i,project:l,companyName:c,companyColor:d})=>s.jsx(kv,{project:l,companyName:c,companyColor:d,onClick:()=>t({project:l,companyName:c,companyColor:d})},i))})]},r)})]}),e&&s.jsx(Av,{project:e.project,companyName:e.companyName,companyColor:e.companyColor,onClose:()=>t(null)})]})};function Kv(e){var n;const t=Du(e);return t?(n=Wu[t])==null?void 0:n.company:"Other"}function Qv(e){var n;const t=Du(e);return t?(n=Wu[t])==null?void 0:n.color:"#666666"}function Du(e){return e.startsWith("datadog-")?"datadog":e.startsWith("bluecore-")?"bluecore":e.startsWith("dropbox-")?"dropbox":e.startsWith("todaytix-")?"todaytix":e.startsWith("zetta-")?"zetta":e.startsWith("dance-marathon-")?"dance-marathon":e.startsWith("early-programming-")?"early-programming":null}const Xv="_container_1fg2e_1",Zv="_title_1fg2e_9",eb="_shimmerLine_1fg2e_16",tb="_borderLine_1fg2e_33",nb="_bgLine_1fg2e_46",ob="_randomLine_1fg2e_54",C={container:Xv,title:Zv,shimmerLine:eb,borderLine:tb,bgLine:nb,randomLine:ob},rb=()=>s.jsxs("div",{className:C.container,children:[s.jsx("h1",{className:C.title,children:"Shimmer Component Showcase"}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Text - Normal"}),s.jsx(D,{type:"text",animationType:"sweep",children:"Text shimmer effect with sweep animation"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Text - Bold"}),s.jsx(D,{type:"text",intensity:"bold",children:"Bold text shimmer effect"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Text - Subtle"}),s.jsx(D,{type:"text",intensity:"subtle",children:"Subtle text shimmer effect"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Text - 1s Duration"}),s.jsx(D,{type:"text",duration:1,children:"Fast shimmer animation"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Text - 6s Duration"}),s.jsx(D,{type:"text",duration:6,children:"Slow shimmer animation"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Border - Top"}),s.jsx(D,{type:"border",position:"top",className:C.borderLine,children:"Top border shimmer"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Border - Bottom"}),s.jsx(D,{type:"border",position:"bottom",className:C.borderLine,children:"Bottom border shimmer"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Border - Full"}),s.jsx(D,{type:"border",position:"full",className:C.borderLine,children:"Full border shimmer"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Border - Top Bold"}),s.jsx(D,{type:"border",position:"top",intensity:"bold",className:C.borderLine,children:"Bold top border"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Border - Top Subtle"}),s.jsx(D,{type:"border",position:"top",intensity:"subtle",className:C.borderLine,children:"Subtle top border"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Background - Sweep"}),s.jsx(D,{type:"background",animationType:"sweep",className:C.bgLine,children:"Background sweep shimmer"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Background - Pulse"}),s.jsx(D,{type:"background",animationType:"pulse",className:C.bgLine,children:"Background pulse shimmer"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Background - Bold"}),s.jsx(D,{type:"background",animationType:"pulse",intensity:"bold",className:C.bgLine,children:"Bold background shimmer"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Background - Subtle"}),s.jsx(D,{type:"background",animationType:"pulse",intensity:"subtle",className:C.bgLine,children:"Subtle background shimmer"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Heading h1"}),s.jsx(D,{type:"text",as:"h1",duration:2,children:"This is an H1 Heading"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Heading h2 - Bold"}),s.jsx(D,{type:"text",as:"h2",intensity:"bold",duration:2,children:"This is an H2 Heading"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Heading h3 - Subtle"}),s.jsx(D,{type:"text",as:"h3",intensity:"subtle",duration:2,children:"This is an H3 Heading"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Heading h4 - Border"}),s.jsx(D,{type:"border",as:"h4",position:"top",className:C.borderLine,duration:2,children:"This is an H4 with Border"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Heading h5 - Background"}),s.jsx(D,{type:"background",as:"h5",animationType:"pulse",className:C.bgLine,duration:2,children:"This is an H5 with Background"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Random #1"}),s.jsx(D,{random:!0,className:C.randomLine,children:"Random configuration"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Random #2"}),s.jsx(D,{random:!0,className:C.randomLine,children:"Random configuration"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Random #3"}),s.jsx(D,{random:!0,className:C.randomLine,children:"Random configuration"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Random #4"}),s.jsx(D,{random:!0,className:C.randomLine,children:"Random configuration"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Random #5"}),s.jsx(D,{random:!0,className:C.randomLine,children:"Random configuration"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Text - Hover to play"}),s.jsx(D,{type:"text",children:"Hover to see animation"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Text Bold - Hover to play"}),s.jsx(D,{type:"text",intensity:"bold",children:"Hover to see animation"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Border - Hover to play"}),s.jsx(D,{type:"border",position:"top",className:C.borderLine,children:"Hover to see animation"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Background - Hover to play"}),s.jsx(D,{type:"background",animationType:"pulse",className:C.bgLine,children:"Hover to see animation"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Random + Paused"}),s.jsx(D,{random:!0,className:C.randomLine,children:"Hover to animate random config"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"H1 + Paused"}),s.jsx(D,{type:"text",as:"h1",duration:2,children:"H1 with Pause"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Random + H2 + Paused"}),s.jsx(D,{random:!0,as:"h2",className:C.randomLine,children:"All Features Combined"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Text - Autoplay"}),s.jsx(D,{type:"text",autoplay:!0,children:"Always animating"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Border - Autoplay"}),s.jsx(D,{type:"border",position:"top",autoplay:!0,className:C.borderLine,children:"Always animating"})]}),s.jsxs("div",{className:C.shimmerLine,children:[s.jsx("label",{children:"Background - Autoplay"}),s.jsx(D,{type:"background",animationType:"pulse",autoplay:!0,className:C.bgLine,children:"Always animating"})]})]});function ab(){const[e,t]=k.useState(()=>{const o=localStorage.getItem("theme");return o==="light"||o==="dark"?o:"dark"});return k.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{t(o=>o==="dark"?"light":"dark")}}}function ib(){const e=Xe();k.useEffect(()=>{typeof window.gtag=="function"&&window.gtag("config","G-SNX7NS4QMW",{page_path:e.pathname+e.search})},[e])}function sb(){const e=Xe();return k.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e.pathname]),null}function lb(){const{theme:e,toggleTheme:t}=ab(),[n,o]=k.useState(!1),[r,a]=k.useState(!1),i=Xe();ib();const l=Object.values(N),c=i.pathname.startsWith("/writing/")&&i.pathname!=="/writing"&&i.pathname!=="/writing/";return Eu({onSearch:()=>o(!0),onEscape:()=>{o(!1),a(!1)},onFindInPage:c?()=>a(!0):void 0}),s.jsxs(s.Fragment,{children:[s.jsx(sb,{}),s.jsx(Cg,{theme:e,onToggleTheme:t}),s.jsx(Vg,{isOpen:n,onClose:()=>o(!1),posts:to,projects:l,talks:Di}),s.jsx(ef,{isOpen:r,onClose:()=>a(!1)}),s.jsxs(ig,{children:[s.jsx(ke,{path:"/",element:s.jsx(oc,{posts:to})}),s.jsx(ke,{path:"/writing",element:s.jsx(oc,{posts:to})}),s.jsx(ke,{path:"/writing/:slug",element:s.jsx(Vy,{posts:to})}),s.jsx(ke,{path:"/talks",element:s.jsx(rc,{})}),s.jsx(ke,{path:"/talks/:talkId",element:s.jsx(rc,{})}),s.jsx(ke,{path:"/resume",element:s.jsx(ov,{})}),s.jsx(ke,{path:"/about",element:s.jsx(sc,{})}),s.jsx(ke,{path:"/obvious",element:s.jsx(Jv,{})}),s.jsx(ke,{path:"/shimmer",element:s.jsx(rb,{})}),s.jsx(ke,{path:"/hello-there",element:s.jsx(sc,{})}),s.jsx(ke,{path:"/tech",element:s.jsx(Hr,{to:"/writing",replace:!0})}),s.jsx(ke,{path:"/tech/:slug",element:s.jsx(tf,{})}),s.jsx(ke,{path:"/:slug",element:s.jsx(jf,{})})]})]})}function cb(){return s.jsx(mg,{children:s.jsx(lb,{})})}const Fu=document.getElementById("root");if(!Fu)throw new Error("Root element not found");Da.createRoot(Fu).render(s.jsx(Jt.StrictMode,{children:s.jsx(cb,{})}));
