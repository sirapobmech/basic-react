var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.7`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),k=`__reactFiber$`+ht,gt=`__reactProps$`+ht,_t=`__reactContainer$`+ht,vt=`__reactEvents$`+ht,yt=`__reactListeners$`+ht,bt=`__reactHandles$`+ht,xt=`__reactResources$`+ht,St=`__reactMarker$`+ht;function Ct(e){delete e[k],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[k];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[k]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[k])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[k]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[St]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Ae.call(Pt,e)?!0:Ae.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&tn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&tn(e,a,t[a])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[gt]||null;if(!i)throw Error(s(90));qt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Et(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)_i(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=gi(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return xi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=gi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=gi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=gi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case w:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=gi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-qe(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(s(519));function Gi(e){throw Zi(Ei(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[k]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=me(null),$i=null,ea=null;function ta(e,t,n){O(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,D(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ra(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ra(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function aa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Ar(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(s(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=T.S;T.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=me(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?O(wa,wa.current):O(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(s(460)),ka=Error(s(474)),Aa=Error(s(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(s(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(s(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Pa(a)===t.type)?(t=i(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=xi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case w:return t=Pa(t),f(e,t,n)}if(ue(t)||se(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Pa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Pa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),M&&Ii(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),M&&Ii(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Pa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Va(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=xi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=bi(a.type,a.key,a.props,null,e.mode,c),Va(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(a,e.mode,c),c.return=e,e=c}return o(e);case w:return a=Pa(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ba(a),c);if(a.$$typeof===S)return b(e,r,la(e,a),c);Ha(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=Si(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=me(null),ao=me(0);function oo(e,t){e=Gl,O(ao,e),O(io,t),Gl=e|t.baseLanes}function so(){O(ao,Gl),O(io,io.current)}function co(){Gl=ao.current,D(io),D(ao)}var lo=me(null),uo=null;function fo(e){var t=e.alternate;O(P,P.current&1),O(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){O(P,P.current),O(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(O(P,P.current),O(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){O(P,P.current),O(lo,lo.current)}function go(e){D(lo),uo===e&&(uo=null),D(P)}var P=me(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){T.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(s(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var i=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=i)throw Error(s(301));if(i+=1,L=I=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Gs,a=t(n,r)}while(bo);return a}function Ao(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(s(467)):Error(s(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Ar(a,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ar(a,t.memoizedState)||(B=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Uo(e,t,n){var r=F,i=z(),a=M;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Ar((I||i).memoizedState,n);if(o&&(i.memoizedState=n,B=!0),i=i.queue,ms(Ko.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,i){if(zs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Qo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Rs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=ks(e).queue;Es(e,i,t,de,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(s(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=Po();if(M){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Wo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ps(Ko.bind(null,r,a,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,i,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(s(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ei(r,n),i=nc(e.stateNode,r,i),Qa(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Wi&&(e=Error(s(422),{cause:r}),Zi(Ei(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ei(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=rc(i),ic(i,e,n,r),Qa(n,i),!1}n=n.return}while(n!==null);return!1}var oc=Error(s(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(po(t),i)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(B||aa(e,t,n,!1),i=(n&e.childLanes)!==0,B||i){if(r=G,r!==null&&(o=ut(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,di(e,o),hu(r,e,o),oc;Du(),t=hc(e,t,n)}else e=a.treeContext,j=cf(o.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(i?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(ho(t),i=t.mode,c=Dc({mode:`hidden`,children:c},i),r=xi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,i=t.mode,r=Dc({mode:`visible`,children:r.children},i),c=xi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,o,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),o=(n&e.childLanes)!==0,B||o){if(o=G,o!==null&&(r=ut(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(o,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return i?(ho(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,i,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(i=c.cachePool,i===null?i=Da():(l=N._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=wc(e,o,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=cc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Xs(r,t.pendingProps),bc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ja(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0),eo(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==i){i=Ei(Error(s(424)),t),Zi(i),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===i){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[k]=t,r[gt]=e,Pd(r,n,e),A(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Vi=t,Ui=!0,i=j,Zd(t.type)?(lf=i,j=cf(r.firstChild)):j=i),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((i=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?i=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,i=!0)),i||Gi(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Ao,null,null,n),Qf._currentValue=i),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,sa(t),i=ca(i),r=r(i),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(i=Ta(),i===null&&(i=G,a=ma(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},qa(t),ta(t,N,i)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ta(t,N,r),r!==i.cache&&ia(t,[N],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ic(t),a===null?(V(t),Lc(t,i,null,r,n)):(V(t),Rc(t,a))):a?a===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,a)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}e=he.current,Ji(t)?Ki(t,e):(e=ff(i,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return V(t),null}if(a=he.current,Ji(t))Ki(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[k]=t,a[gt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Vi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[k]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[k]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[k]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(s(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[k]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),i=!1}else i=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(D(P),r=t.memoizedState,r===null)return V(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_o(e),a!==null){for(t.flags|=128,Bc(r,!1),e=a.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return O(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304)}else{if(!i)if(e=_o(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!M)return V(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=P.current,O(P,i?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(P),null;case 4:return be(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&D(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:D(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&D(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[k]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Xs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[St]||a[k]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[k]=e,A(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[k]=e,A(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){i=e.stateNode;try{$t(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Zc(e,i,n===null?i:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||i,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;tl(e,$c(e),i);break;case 5:var a=n.stateNode;n.flags&32&&($t(a,``),n.flags&=-33),tl(e,$c(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;el(e,$c(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Fe(),10<i)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,T.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=T.H;return T.H=Hs,e===null?Hs:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Ma(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,T.H=r,T.A=i,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=si,st(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,E.p=i,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=di(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=wt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),o=[];a:{var s=ti.get(e);if(s!==void 0){var c=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:u=`focus`,c=Rn;break;case`focusout`:u=`blur`,c=Rn;break;case`beforeblur`:case`afterblur`:c=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Jr:case Yr:case Xr:c=zn;break;case ei:c=Xn;break;case`scroll`:case`scrollend`:c=jn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn;break;case`toggle`:case`beforetoggle`:c=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?wt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Et(c),h=u==null?s:Et(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Et(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=vr;else if(fr(s))if(yr)v=Or;else{v=Er;var y=Tr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Yt(s,`number`,s.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,a);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:nn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[gt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Qt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),A(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);A(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),A(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,A(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),A(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,A(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),A(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[k]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,A(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.7`)throw Error(s(527,Lp,`19.2.7`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Zs,a=Qs,o=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=e((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),f=e(((e,t)=>{t.exports=d()}))();function p({code:e,lang:t=`jsx`}){let[n,r]=(0,l.useState)(!1);return(0,f.jsxs)(`div`,{className:`code-block`,children:[(0,f.jsxs)(`div`,{className:`code-block-header`,children:[(0,f.jsx)(`span`,{className:`code-lang`,children:t}),(0,f.jsx)(`button`,{className:`copy-btn ${n?`copied`:``}`,onClick:()=>{navigator.clipboard.writeText(e),r(!0),setTimeout(()=>r(!1),2e3)},children:n?`✓ Copied`:`Copy`})]}),(0,f.jsx)(`pre`,{children:(0,f.jsx)(`code`,{children:e})})]})}function m({question:e,answer:t}){let[n,r]=(0,l.useState)(!1);return(0,f.jsxs)(`div`,{className:`qa-item`,children:[(0,f.jsxs)(`div`,{className:`qa-question ${n?`open`:``}`,onClick:()=>r(!n),children:[(0,f.jsxs)(`span`,{children:[`💬 `,e]}),(0,f.jsx)(`span`,{className:`qa-chevron ${n?`open`:``}`,children:`▼`})]}),n&&(0,f.jsx)(`div`,{className:`qa-answer`,dangerouslySetInnerHTML:{__html:t}})]})}function h({items:e}){return(0,f.jsx)(`div`,{children:e.map((e,t)=>(0,f.jsx)(m,{question:e.q,answer:e.a},t))})}var g=`// map / filter / find / some / every

interface User {
  id: number
  name: string
  age: number
  active: boolean
}

const users: User[] = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob',   age: 30, active: false },
  { id: 3, name: 'Carol', age: 22, active: true },
]

// map — แปลงแต่ละ item เป็น type ใหม่
const names: string[] = users.map(u => u.name)
// ['Alice', 'Bob', 'Carol']

// filter — กรองเฉพาะที่ตรงเงื่อนไข
const activeUsers: User[] = users.filter(u => u.active)
// [Alice, Carol]

// find — หา item แรกที่ตรง (return T | undefined)
const found: User | undefined = users.find(u => u.id === 2)
// { id: 2, name: 'Bob', ... }

// findIndex — หา index (return -1 ถ้าไม่เจอ)
const idx: number = users.findIndex(u => u.id === 2)
// 1

// some — มี item ไหนที่ตรงเงื่อนไขบ้าง? (return boolean)
const hasInactive: boolean = users.some(u => !u.active)
// true

// every — ทุก item ตรงเงื่อนไขไหม? (return boolean)
const allActive: boolean = users.every(u => u.active)
// false`,_=`// reduce / flat / flatMap

interface Order {
  id: number
  userId: number
  items: string[]
  total: number
}

const orders: Order[] = [
  { id: 1, userId: 1, items: ['book', 'pen'], total: 150 },
  { id: 2, userId: 2, items: ['bag'],          total: 500 },
  { id: 3, userId: 1, items: ['pen', 'paper'], total: 80  },
]

// reduce — รวม array เป็นค่าเดียว
const grandTotal: number = orders.reduce((sum, o) => sum + o.total, 0)
// 730

// reduce — group by userId
const byUser = orders.reduce<Record<number, Order[]>>((acc, o) => {
  acc[o.userId] = [...(acc[o.userId] ?? []), o]
  return acc
}, {})
// { 1: [order1, order3], 2: [order2] }

// flat — กระจาย array ซ้อน array ออกมาชั้นเดียว
const nested: string[][] = orders.map(o => o.items)
// [['book','pen'], ['bag'], ['pen','paper']]

const flat: string[] = nested.flat()
// ['book','pen','bag','pen','paper']

// flatMap — map + flat ในขั้นตอนเดียว
const allItems: string[] = orders.flatMap(o => o.items)
// ['book','pen','bag','pen','paper']`,v=`// sort / slice / includes / Set

const nums: number[] = [3, 1, 4, 1, 5, 9, 2, 6]

// sort — เรียงลำดับ ⚠️ แก้ไข array เดิม ต้อง spread ก่อน
const asc  = [...nums].sort((a, b) => a - b)  // [1,1,2,3,4,5,6,9]
const desc = [...nums].sort((a, b) => b - a)  // [9,6,5,4,3,2,1,1]

// sort object array
const users = [
  { name: 'Carol', age: 22 },
  { name: 'Alice', age: 25 },
  { name: 'Bob',   age: 30 },
]
const byAge = [...users].sort((a, b) => a.age - b.age)
// [Carol(22), Alice(25), Bob(30)]

// sort string
const byName = [...users].sort((a, b) => a.name.localeCompare(b.name))
// [Alice, Bob, Carol]

// slice — ตัด array ออกมา (ไม่แก้ array เดิม)
nums.slice(0, 3)   // [3, 1, 4]   → ตำแหน่ง 0,1,2
nums.slice(-2)     // [2, 6]      → 2 ตัวสุดท้าย

// includes — เช็คว่ามีค่าไหม
nums.includes(9)   // true
nums.includes(99)  // false

// Set — กรอง duplicate ออก
const withDupes = [1, 2, 2, 3, 3, 3]
const unique: number[] = [...new Set(withDupes)]
// [1, 2, 3]`,y=`// Pattern ที่ใช้บ่อยใน React State

interface Product {
  id: number
  name: string
  price: number
  category: string
}

// ✅ ทุก operation ต้องคืน array ใหม่ — ห้ามแก้ array เดิม
// เพราะ React ต้องการ reference ใหม่ถึงจะ re-render

// เพิ่ม item
const add = (list: Product[], item: Product): Product[] =>
  [...list, item]

// แก้ไข item ด้วย id
const update = (list: Product[], updated: Product): Product[] =>
  list.map(p => p.id === updated.id ? updated : p)

// ลบ item ด้วย id
const remove = (list: Product[], id: number): Product[] =>
  list.filter(p => p.id !== id)

// group by category
const groupBy = (list: Product[]): Record<string, Product[]> =>
  list.reduce<Record<string, Product[]>>((acc, p) => {
    acc[p.category] = [...(acc[p.category] ?? []), p]
    return acc
  }, {})

// ราคาสูงสุด / ต่ำสุด
const maxPrice = (list: Product[]) => Math.max(...list.map(p => p.price))
const minPrice = (list: Product[]) => Math.min(...list.map(p => p.price))

// pagination
const getPage = (list: Product[], page: number, size: number): Product[] =>
  list.slice((page - 1) * size, page * size)`,b=[{q:`map กับ forEach ต่างกันอย่างไร?`,a:`<strong>map</strong> — คืน array ใหม่ ใช้เมื่อต้องการผลลัพธ์<br>
    <strong>forEach</strong> — ไม่คืนค่า ใช้เมื่อต้องการทำ side effect เช่น log, push<br><br>
    ใน React ใช้ <code>map</code> เสมอตอน render list เพราะต้องการ JSX array กลับมา`},{q:`ทำไมต้อง spread [...arr] ก่อน sort?`,a:`<code>sort()</code> แก้ไข array เดิม (mutate) โดยตรง<br><br>
    ถ้าใช้กับ React state จะไม่ trigger re-render เพราะ reference เดิม<br><br>
    <code>[...arr].sort(...)</code> สร้าง array ใหม่ก่อน แล้วค่อย sort — ปลอดภัยเสมอ`},{q:`find กับ filter ต่างกันอย่างไร?`,a:`<strong>find</strong> — คืน item แรกที่เจอ (T | undefined) หยุดทันทีที่เจอ<br>
    <strong>filter</strong> — คืน array ของทุก item ที่ตรง วนทั้งหมดเสมอ<br><br>
    ถ้าต้องการแค่ item เดียว ใช้ <code>find</code> — เร็วกว่า`},{q:`reduce ใช้ทำอะไรได้บ้าง?`,a:`reduce ทำได้ทุกอย่างที่ array method อื่นทำได้ + งานซับซ้อนกว่านั้น:<br><br>
    • รวมตัวเลข (sum, total)<br>
    • Group by — จัด array เป็น object ตาม key<br>
    • แปลง array เป็น object/Map<br>
    • ทำ pipeline หลาย step ในรอบเดียว<br><br>
    ข้อระวัง: อ่านยากถ้าซับซ้อนเกิน — แยกเป็น step ถ้าทำได้`},{q:`flatMap ต่างจาก map().flat() อย่างไร?`,a:`ผลลัพธ์เหมือนกัน แต่ <code>flatMap</code> เร็วกว่า — วนรอบเดียว<br><br>
    <code>map().flat()</code> วน 2 รอบ (map ก่อน แล้วค่อย flat)<br><br>
    ใช้ <code>flatMap</code> เมื่อ map แต่ละ item คืน array และต้องการ flatten ออกมา`}];function x(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`JavaScript`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`การจัดการ Array`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`Array methods ที่ใช้บ่อยใน JavaScript/TypeScript พร้อม pattern การใช้งานจริงใน React`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`map / filter / find / some / every`}),(0,f.jsx)(p,{code:g,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`reduce / flat / flatMap`}),(0,f.jsx)(p,{code:_,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`sort / slice / includes / Set`}),(0,f.jsxs)(`div`,{className:`callout callout-warning`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚠️`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`code`,{children:`sort()`}),` และ `,(0,f.jsx)(`code`,{children:`splice()`}),` แก้ไข array เดิมโดยตรง — ใช้ `,(0,f.jsx)(`code`,{children:`[...arr].sort()`}),` เสมอเมื่อทำงานกับ React state`]})]}),(0,f.jsx)(p,{code:v,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Pattern ใน React (Immutable Update)`}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`💡`}),(0,f.jsx)(`span`,{children:`React ตรวจจาก reference — ถ้า array เดิมถูกแก้โดยตรงจะไม่ re-render ต้องสร้าง array ใหม่เสมอ`})]}),(0,f.jsx)(p,{code:y,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:b})]})]})}var ee=`// src/App.jsx — สิ่งที่ developer เขียน
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
    </div>
  )
}`,S=`// JSX ที่เขียน
return (
  <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
  </div>
)

// SWC/Babel แปลงเป็น JS จริง
return _jsx('div', {
  children: [
    _jsx('h1', { children: count }),
    _jsx('button', {
      onClick: () => setCount(count + 1),
      children: 'เพิ่ม'
    })
  ]
})`,C=`// ก่อน bundle — หลายไฟล์แยกกัน
src/main.jsx
src/App.jsx
src/pages/Home.jsx
src/components/Button.jsx
node_modules/react/...

// หลัง bundle — รวมเป็นก้อนเดียว
dist/assets/index-D4uMfRRk.js   ← JS ทั้งหมดรวมกัน
dist/assets/index-D4uMfRRk.css  ← CSS ทั้งหมดรวมกัน`,te=`// Minify — ลบ space, comment, ย่อชื่อตัวแปร
// ก่อน
function handleClick() {
  setCount(count + 1)
}
// หลัง
function h(){s(c+1)}

// Tree Shaking — ตัด code ที่ไม่ได้ใช้ทิ้ง
import { useState, useEffect, useRef } from 'react'
// ถ้าใช้แค่ useState → useEffect, useRef ถูกตัดออก

// ผลลัพธ์
// index.js 2MB → หลัง optimize → 200KB`,ne=`// โครงสร้าง dist/ หลัง build
dist/
  index.html               ← HTML หลัก (เกือบว่างเปล่า)
  assets/
    index-D4uMfRRk.js      ← JS ทั้งหมด
    index-D4uMfRRk.css     ← CSS ทั้งหมด

// hash ในชื่อไฟล์ เช่น D4uMfRRk
// ถ้า code เปลี่ยน → hash เปลี่ยน → browser โหลดไฟล์ใหม่
// ถ้า code เหมือนเดิม → hash เหมือนเดิม → browser ใช้ cache ได้เลย`,re=`<!-- dist/index.html — สิ่งที่ browser ได้รับ -->
<html>
  <head>
    <link rel="stylesheet" href="/assets/index-D4uMfRRk.css">
  </head>
  <body>
    <div id="root"></div>  <!-- ว่างเปล่า React จะมาใส่เอง -->
    <script src="/assets/index-D4uMfRRk.js"><\/script>
  </body>
</html>`,w=`// React รัน App() และได้ Virtual DOM
// Virtual DOM คือ JS object ธรรมดา — ไม่ใช่ DOM จริง

{
  type: 'div',
  children: [
    { type: 'h1', children: 0 },
    { type: 'button', onClick: fn, children: 'เพิ่ม' }
  ]
}

// ReactDOM แปลง Virtual DOM → DOM จริง
// แล้วใส่เข้าไปใน <div id="root">
<div id="root">
  <div>
    <h1>0</h1>
    <button>เพิ่ม</button>
  </div>
</div>`,ie=`// ผู้ใช้กด button
onClick รัน → setCount(1)

// React สร้าง Virtual DOM ใหม่
{
  type: 'div',
  children: [
    { type: 'h1', children: 1 },   ← เปลี่ยน (0 → 1)
    { type: 'button', ... }         ← เหมือนเดิม
  ]
}

// Diffing — เปรียบ Virtual DOM ใหม่กับเก่า
// พบว่า h1 text เปลี่ยน, button ไม่เปลี่ยน

// แก้เฉพาะส่วนที่เปลี่ยนใน DOM จริง
document.querySelector('h1').textContent = '1'
// ไม่ได้ redraw ทั้งหน้า`;function ae(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`DevOps`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`Build → Deploy → Browser`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`ขั้นตอนทั้งหมดตั้งแต่เขียน React code จนถึงผู้ใช้เห็นหน้าเว็บ และเกิดอะไรขึ้นเมื่อผู้ใช้กดปุ่ม`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ภาพรวม`}),(0,f.jsx)(`div`,{className:`flow-steps`,children:[{n:`1`,label:`เขียน Code`,sub:`JSX + Hooks`},{n:`2`,label:`npm run build`,sub:`Vite + SWC`},{n:`3`,label:`ได้ dist/`,sub:`JS + CSS + HTML`},{n:`4`,label:`Deploy`,sub:`Server / CDN`},{n:`5`,label:`Browser Request`,sub:`โหลด HTML`},{n:`6`,label:`React รัน`,sub:`สร้าง DOM`},{n:`7`,label:`ผู้ใช้เห็นหน้าเว็บ`,sub:`Paint`},{n:`8`,label:`กด / พิมพ์`,sub:`Re-render`}].map((e,t,n)=>(0,f.jsxs)(`div`,{className:`flow-step-row`,children:[(0,f.jsxs)(`div`,{className:`flow-step-box`,children:[(0,f.jsx)(`span`,{className:`flow-step-num`,children:e.n}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{className:`flow-step-label`,children:e.label}),(0,f.jsx)(`div`,{className:`flow-step-sub`,children:e.sub})]})]}),t<n.length-1&&(0,f.jsx)(`div`,{className:`flow-step-arrow`,children:`↓`})]},e.n))})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ขั้นที่ 1 — เขียน Code`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Developer เขียน JSX และ Hooks ตามปกติ — แต่ browser อ่านไฟล์นี้ไม่ได้โดยตรง ทั้ง JSX syntax และ `,(0,f.jsx)(`code`,{children:`import`}),` แบบ ES Module ต้องผ่านการแปลงก่อน`]}),(0,f.jsx)(p,{code:ee,lang:`jsx`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ขั้นที่ 2 — npm run build`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Vite ทำงาน 3 อย่างพร้อมกัน — แปลง JSX, รวมไฟล์, และ optimize ขนาด`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`แปลง JSX → JS`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`SWC (หรือ Babel) แปลง JSX ให้เป็น JS ล้วนๆ เพราะ browser ไม่รู้จัก JSX แต่รู้จัก `,(0,f.jsx)(`code`,{children:`_jsx()`}),` ซึ่งเป็น function call ธรรมดา`]}),(0,f.jsx)(p,{code:S,lang:`jsx`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Bundle — รวมทุกไฟล์`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`ไฟล์ที่เขียนแยกกันหลายร้อยไฟล์ + library ใน node_modules ถูกรวมเป็นไฟล์เดียว ให้ browser โหลดครั้งเดียว`}),(0,f.jsx)(p,{code:C,lang:`js`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Optimize — ลดขนาด`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Minify ย่อ code ให้สั้นที่สุด, Tree Shaking ตัด code ที่ import มาแต่ไม่ได้ใช้ทิ้ง ทำให้ไฟล์เล็กลงมาก โหลดเร็วขึ้น`}),(0,f.jsx)(p,{code:te,lang:`js`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ขั้นที่ 3 — ผลลัพธ์ใน dist/`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`หลัง build เสร็จได้โฟลเดอร์ `,(0,f.jsx)(`code`,{children:`dist/`}),` ที่มีแค่ HTML, JS, CSS hash ในชื่อไฟล์ช่วยให้ browser cache ได้อย่างถูกต้อง — ถ้า code เปลี่ยน hash เปลี่ยน browser โหลดใหม่ ถ้าไม่เปลี่ยนใช้ cache เดิม`]}),(0,f.jsx)(p,{code:ne,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ขั้นที่ 4 — Deploy`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`copy โฟลเดอร์ `,(0,f.jsx)(`code`,{children:`dist/`}),` ทั้งหมดขึ้น server — server มีหน้าที่แค่ส่งไฟล์เหล่านี้ให้ browser ไม่ต้องรัน Node.js หรือ logic อะไรเลย (เพราะเป็น static file ล้วน)`]}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`📋`}),(0,f.jsxs)(`div`,{children:[`ตัวเลือกยอดนิยม: `,(0,f.jsx)(`strong`,{children:`GitHub Pages`}),` (ฟรี), `,(0,f.jsx)(`strong`,{children:`Vercel`}),` (ฟรี + auto deploy),`,(0,f.jsx)(`strong`,{children:` Netlify`}),` (ฟรี), `,(0,f.jsx)(`strong`,{children:`nginx บน VPS`}),` (ควบคุมได้เต็ม)`]})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ขั้นที่ 5 — Browser Request`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`ผู้ใช้พิมพ์ URL → DNS แปลง domain เป็น IP → browser ส่ง request ไปที่ server → server ส่ง `,(0,f.jsx)(`code`,{children:`index.html`}),` กลับมา → browser เริ่มอ่าน HTML และโหลด JS/CSS ตามที่ระบุ`]}),(0,f.jsx)(p,{code:re,lang:`html`}),(0,f.jsxs)(`div`,{className:`callout callout-warning`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚠️`}),(0,f.jsxs)(`span`,{children:[`ตอนนี้หน้าจอผู้ใช้ยังว่างเปล่า — `,(0,f.jsx)(`code`,{children:`<div id="root">`}),` ไม่มีอะไรข้างใน ต้องรอ JS โหลดและรันก่อน นี่คือข้อเสียของ CSR (Client Side Rendering)`]})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ขั้นที่ 6 — React เริ่มทำงาน`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`JS โหลดเสร็จ React รัน `,(0,f.jsx)(`code`,{children:`App()`}),` และสร้าง Virtual DOM ก่อน — Virtual DOM คือ JS object ธรรมดาที่แทน HTML เบากว่าสร้าง DOM จริงมาก จากนั้น ReactDOM แปลงเป็น DOM จริงและใส่เข้า `,(0,f.jsx)(`code`,{children:`#root`})]}),(0,f.jsx)(p,{code:w,lang:`js`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ขั้นที่ 7 — ผู้ใช้เห็นหน้าเว็บ`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`DOM พร้อม → browser วาดหน้าจอ (Paint) → ผู้ใช้เห็นหน้าเว็บครั้งแรก ทั้งกระบวนการตั้งแต่พิมพ์ URL จนเห็นหน้าเว็บ เรียกว่า `,(0,f.jsx)(`strong`,{children:`First Contentful Paint (FCP)`}),`— ยิ่ง JS ขนาดเล็กและ server ตอบเร็ว FCP ยิ่งเร็ว`]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ขั้นที่ 8 — ผู้ใช้กดปุ่ม (Re-render)`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`เมื่อ state เปลี่ยน React ไม่ได้ redraw ทั้งหน้า — สร้าง Virtual DOM ใหม่ แล้วเปรียบกับของเดิม (Diffing) แก้เฉพาะส่วนที่เปลี่ยนใน DOM จริง ทำให้ UI อัปเดตเร็วและไม่กระตุก`}),(0,f.jsx)(p,{code:ie,lang:`js`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`สรุปจุดสำคัญ`}),(0,f.jsxs)(`table`,{className:`comparison-table`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`จุด`}),(0,f.jsx)(`th`,{children:`รายละเอียด`})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Browser อ่าน JSX ไม่ได้`}),(0,f.jsx)(`td`,{children:`ต้องผ่าน build ก่อนเสมอ — browser เห็นแค่ JS ล้วน`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`index.html ว่างเปล่า`}),(0,f.jsx)(`td`,{children:`CSR — content ถูกสร้างโดย JS หลังโหลด ไม่ใช่จาก server`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Virtual DOM`}),(0,f.jsx)(`td`,{children:`JS object แทน HTML ช่วยให้รู้ว่าต้องแก้แค่ไหน ไม่ต้อง redraw ทั้งหน้า`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Hash ในชื่อไฟล์`}),(0,f.jsx)(`td`,{children:`ป้องกัน browser ใช้ cache เก่า เมื่อ deploy version ใหม่`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`dist/ คือ static file`}),(0,f.jsx)(`td`,{children:`server ไม่ต้องรัน Node.js — แค่ส่งไฟล์ให้ browser`})]})]})]})]})]})}var oe=`// Rules of Hooks — ต้องทำตามเสมอ!

// ✅ Rule 1: เรียก Hooks ที่ top level เท่านั้น
// ❌ Wrong — Hook ใน condition
function App() {
  if (isLoggedIn) {
    const [user, setUser] = useState(null) // ❌ Error!
  }
}

// ✅ Correct
function App() {
  const [user, setUser] = useState(null) // top level
  if (isLoggedIn) {
    // ใช้ user ได้ตรงนี้
  }
}

// ✅ Rule 2: เรียก Hooks จาก Function Component หรือ Custom Hook เท่านั้น
// ❌ Wrong — Hook ใน regular function
function helper() {
  const [value] = useState(0) // ❌ ใช้ไม่ได้
}

// ✅ Custom Hook (ชื่อต้องขึ้นต้นด้วย "use")
function useHelper() {
  const [value] = useState(0) // ✅ ใช้ได้
  return value
}`,se=`// Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // Lazy init — อ่านจาก localStorage ครั้งเดียว
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setStoredValue = useCallback((newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }, [key])

  return [value, setStoredValue]
}

// การใช้งาน
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  const [user, setUser] = useLocalStorage('user', null)

  return (
    <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
      Theme: {theme}
    </button>
  )
}`,ce=`// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return
    const controller = new AbortController()

    setLoading(true)
    setError(null)

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`)
        return res.json()
      })
      .then(data => setData(data))
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

// การใช้งาน
function UserProfile({ id }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${id}\`)

  if (loading) return <Spinner />
  if (error) return <Error message={error} />
  return <div>{user.name}</div>
}`,le=`// Custom Hook: useDebounce
// ทำให้ค่าเปลี่ยนหลังจากผู้ใช้หยุดพิมพ์ (ไม่ call API ทุกตัวอักษร)

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer) // cancel เมื่อ value เปลี่ยนก่อน delay
  }, [value, delay])

  return debouncedValue
}

// การใช้งาน
function SearchBox() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Searching for:', debouncedQuery)
      // fetch('/api/search?q=' + debouncedQuery)
    }
  }, [debouncedQuery]) // เรียกเฉพาะเมื่อ debouncedQuery เปลี่ยน

  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)} // อัปเดตทันที
      placeholder="Search..."
    />
  )
}`,ue=[{q:`Custom Hook คืออะไร และต้องตั้งชื่ออย่างไร?`,a:`Custom Hook คือ JavaScript function ที่:<br>
    • ชื่อขึ้นต้นด้วย <code>use</code> (เช่น <code>useLocalStorage</code>, <code>useFetch</code>)<br>
    • เรียกใช้ React hooks อื่นๆ ภายใน<br>
    • Extract reusable stateful logic ออกจาก component<br><br>
    ทำไมต้องขึ้นต้นด้วย <code>use</code>: เพื่อให้ React (และ ESLint plugin) รู้ว่าเป็น Hook และ enforce Rules of Hooks`},{q:`Rules of Hooks คืออะไร ทำไมต้องตาม?`,a:`<strong>Rule 1:</strong> เรียก Hooks ที่ top level เท่านั้น ห้ามใน loops, conditions, nested functions<br>
    <strong>Rule 2:</strong> เรียก Hooks จาก React Function Component หรือ Custom Hook เท่านั้น<br><br>
    ทำไม: React track ลำดับการเรียก Hook ด้วย linked list ทุก render ถ้าลำดับเปลี่ยน React จะ map state ผิดตัว<br><br>
    ถ้าต้องการ conditional logic ใส่ condition ภายใน Hook แทน ไม่ใช่ wrap Hook ด้วย condition`}];function T(e,t=500){let[n,r]=(0,l.useState)(e);return(0,l.useEffect)(()=>{let n=setTimeout(()=>r(e),t);return()=>clearTimeout(n)},[e,t]),n}function E(){let[e,t]=(0,l.useState)(``),[n,r]=(0,l.useState)(0),i=T(e,500);return(0,l.useEffect)(()=>{i&&r(e=>e+1)},[i]),(0,f.jsxs)(`div`,{className:`demo-content`,children:[(0,f.jsx)(`div`,{className:`demo-row`,style:{marginBottom:10},children:(0,f.jsx)(`input`,{className:`demo-input`,value:e,onChange:e=>t(e.target.value),placeholder:`พิมพ์เพื่อค้นหา...`,style:{flex:1}})}),(0,f.jsxs)(`div`,{className:`demo-label`,children:[`Input (live): `,(0,f.jsx)(`strong`,{style:{color:`#e2e8f0`},children:e||`...`})]}),(0,f.jsxs)(`div`,{className:`demo-label`,style:{marginTop:6},children:[`Debounced (หลังหยุด 500ms): `,(0,f.jsx)(`strong`,{style:{color:`#61dafb`},children:i||`...`})]}),(0,f.jsxs)(`div`,{className:`demo-label`,style:{marginTop:6},children:[`API calls ที่จะถูกเรียก: `,(0,f.jsxs)(`strong`,{style:{color:`#4ade80`},children:[n,` ครั้ง`]}),(0,f.jsx)(`span`,{style:{color:`#4b5563`,marginLeft:8},children:`(ประหยัดกว่าเรียกทุก keystroke)`})]})]})}function de(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Advanced`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`Custom Hooks`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`สร้าง reusable logic ด้วย Custom Hooks และ Rules of Hooks ที่ต้องรู้`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Rules of Hooks`}),(0,f.jsxs)(`div`,{className:`callout callout-warn`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚠️`}),(0,f.jsx)(`span`,{children:`Rules of Hooks ละเมิดไม่ได้! React ใช้ call order ของ hooks ในการ map state — ถ้าลำดับเปลี่ยน state จะผิดตัว`})]}),(0,f.jsx)(p,{code:oe})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useLocalStorage`}),(0,f.jsx)(p,{code:se})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useFetch`}),(0,f.jsx)(p,{code:ce})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useDebounce`}),(0,f.jsx)(p,{code:le}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`useDebounce Demo`}),(0,f.jsx)(E,{})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:ue})]})]})}var fe=`# Docker มี 3 ส่วนหลักที่ต้องรู้

# 1. Dockerfile — สูตรสร้าง image
# 2. Image — template ที่ build จาก Dockerfile
# 3. Container — instance ที่รันจาก image

# เปรียบเหมือน:
# Dockerfile = สูตรอาหาร
# Image      = อาหารที่ปรุงเสร็จแล้ว
# Container  = อาหารที่กำลังเสิร์ฟอยู่`,pe=`# ==================== Stage 1: Build ====================
FROM node:22-alpine AS builder
# FROM    = เริ่มจาก base image ไหน
# alpine  = Linux ขนาดเล็ก (~5MB)
# AS builder = ตั้งชื่อ stage นี้

WORKDIR /app
# กำหนด folder ทำงานใน container
# เหมือนพิม cd /app

COPY package*.json ./
# copy เฉพาะ package.json ก่อน
# เพื่อ cache — ถ้า package.json ไม่เปลี่ยน
# Docker จะใช้ cache แทน npm install ใหม่

RUN npm install
# ติดตั้ง dependencies
# RUN = รันคำสั่งตอน build

COPY . .
# copy โค้ดที่เหลือทั้งหมด
# ทำหลัง npm install เพื่อ cache optimization

RUN npm run build
# build React → ได้ไฟล์ HTML/CSS/JS ใน dist/

# ==================== Stage 2: Serve ====================
FROM nginx:alpine
# เริ่ม stage ใหม่ด้วย nginx
# ทิ้ง Node.js ไว้ใน stage 1 → image เล็กลงมาก

COPY --from=builder /app/dist /usr/share/nginx/html
# copy เฉพาะ dist/ จาก stage builder
# ใส่ใน folder ที่ nginx เสิร์ฟไฟล์

EXPOSE 80
# บอกว่า container เปิด port 80
# แค่ documentation — ต้องใช้ -p ตอน run`,me=`# .dockerignore — บอก Docker ว่าอย่า copy อะไรเข้า container
# เหมือน .gitignore แต่สำหรับ Docker

node_modules   # มีแสนไฟล์ Docker install ใหม่เองอยู่ดี
dist           # Docker build ใหม่เอง
.git           # git history ไม่จำเป็น
*.md           # README ไม่จำเป็น
.env           # ไม่ควร copy secret เข้า image!`,D=`# ==================== Image ====================

# Build image จาก Dockerfile
docker build -t my-app .
#             ↑          ↑
#          ชื่อ image   Dockerfile อยู่ที่นี่

# ดู image ทั้งหมดในเครื่อง
docker images

# ลบ image
docker rmi my-app

# ==================== Container ====================

# รัน container
docker run -p 8080:80 my-app
#           ↑    ↑
#     เครื่องเรา container

# รัน background (ไม่ค้าง terminal)
docker run -d -p 8080:80 my-app

# ดู container ที่รันอยู่
docker ps

# ดูทั้งหมด (รวมที่หยุดแล้ว)
docker ps -a

# หยุด container
docker stop <container_id>

# ลบ container
docker rm <container_id>

# ดู log
docker logs <container_id>

# เข้าไปใน container (เหมือน SSH)
docker exec -it <container_id> sh`,O=`# Port Mapping — เชื่อม port เครื่องเรากับ container

docker run -p 8080:80 my-app
#           ↑     ↑
#     เครื่องเรา  container

# เครื่องเรา              Container
# ┌──────────┐            ┌──────────┐
# │          │            │          │
# │  :8080───┼────────────┼──► :80   │
# │          │            │  nginx   │
# └──────────┘            └──────────┘
#        ↑
# Browser เปิด localhost:8080

# รัน 3 container จาก image เดียวกัน
docker run -p 8080:80 my-app   # container 1
docker run -p 8081:80 my-app   # container 2
docker run -p 8082:80 my-app   # container 3
# แต่ละตัวใช้ port 80 ใน container — ไม่ชนกัน!`,he=`# docker-compose.yml — รันหลาย container พร้อมกัน

services:

  frontend:                    # container 1: React
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend                # รอ backend ขึ้นก่อน

  backend:                     # container 2: Node API
    build: ./backend
    ports:
      - "4000:4000"
    environment:
      - DB_HOST=database       # ชื่อ service ใช้เป็น hostname ได้เลย
      - DB_PORT=5432
    depends_on:
      - database               # รอ database ขึ้นก่อน

  database:                    # container 3: PostgreSQL
    image: postgres:16         # ใช้ image สำเร็จรูปจาก Docker Hub
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - db_data:/var/lib/postgresql/data  # เก็บข้อมูลถาวร

volumes:
  db_data:                     # named volume`,ge=`# คำสั่ง Docker Compose

docker compose up          # เปิดทุก container
docker compose up -d       # เปิด background
docker compose down        # ปิดทุก container
docker compose up --build  # rebuild แล้วเปิด
docker compose logs        # ดู log ทุก container
docker compose ps          # ดูสถานะทุก container`,_e=`# Volume — เก็บข้อมูลถาวร

# ปัญหา: Container ถูกลบ → ข้อมูลหายหมด!
docker rm my-db    # ← ข้อมูล database หายเลย 😱

# แก้ด้วย Volume
docker run -v db_data:/var/lib/postgresql/data postgres
#              ↑                    ↑
#         ชื่อ volume          path ใน container

# ข้อมูลเก็บอยู่ใน volume — ลบ container ไม่หาย ✅

# ดู volume ทั้งหมด
docker volume ls

# ลบ volume
docker volume rm db_data`,ve=`# CI/CD Flow กับ Docker

# 1. Developer push code
git push origin main

# 2. GitHub Actions ทำงานอัตโนมัติ
# .github/workflows/deploy.yml:

name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build Docker image
        run: docker build -t my-app .

      - name: Push to Docker Hub
        run: |
          docker login -u \${{ secrets.DOCKER_USER }} -p \${{ secrets.DOCKER_TOKEN }}
          docker push my-app

# 3. Server pull image มารัน
# docker pull my-app
# docker run -p 80:80 my-app`,ye=[{q:`Docker คืออะไร แก้ปัญหาอะไร?`,a:`Docker คือ platform สำหรับ package และ run application ใน container<br><br>
    ปัญหาที่แก้:<br>
    • "รันได้บนเครื่องฉัน แต่เครื่องเพื่อนพัง" — environment ต่างกัน<br>
    • ติดตั้ง environment ยาก — ใช้แค่ <code>docker compose up</code><br>
    • Deploy บน server ยาก — build ครั้งเดียว รันได้ทุกที่<br>
    • App หลายตัวชนกัน — แยก container อิสระจากกัน`},{q:`Image กับ Container ต่างกันอย่างไร?`,a:`<strong>Image:</strong><br>
    • Template หรือ blueprint ของ app<br>
    • Immutable — เปลี่ยนแปลงไม่ได้<br>
    • เหมือน Class ใน OOP<br><br>
    <strong>Container:</strong><br>
    • Instance ที่รันจาก image<br>
    • Mutable — เปลี่ยนแปลงได้ระหว่างรัน<br>
    • ข้อมูลหายเมื่อหยุด (ถ้าไม่มี volume)<br>
    • เหมือน Object ใน OOP<br><br>
    1 Image → สร้าง Container ได้ไม่จำกัด`},{q:`Multi-stage Build คืออะไร ทำไมต้องใช้?`,a:`Multi-stage Build แบ่ง Dockerfile เป็นหลาย stage<br><br>
    ตัวอย่าง project นี้:<br>
    • <strong>Stage 1 (builder):</strong> ใช้ Node.js build React app → ได้ dist/<br>
    • <strong>Stage 2 (serve):</strong> ใช้ nginx เสิร์ฟเฉพาะ dist/<br><br>
    ทำไมต้องใช้:<br>
    • Image สุดท้ายไม่มี Node.js ติดมาด้วย<br>
    • ขนาดเล็กลงมาก: Node ~300MB → nginx ~25MB<br>
    • ปลอดภัยขึ้น: ไม่มี build tools ใน production`},{q:`Docker Compose ใช้เมื่อไหร่?`,a:`ใช้เมื่อ project มีมากกว่า 1 service<br><br>
    ตัวอย่าง:<br>
    • React + Node API + PostgreSQL<br>
    • App + Redis cache<br>
    • Microservices หลายตัว<br><br>
    ข้อดี:<br>
    • รันทุก service ด้วย <code>docker compose up</code> คำสั่งเดียว<br>
    • สร้าง network ให้ container คุยกันอัตโนมัติ<br>
    • กำหนด depends_on เพื่อควบคุมลำดับการขึ้น`},{q:`Volume คืออะไร ทำไมต้องใช้?`,a:`Volume คือพื้นที่เก็บข้อมูลถาวรนอก container<br><br>
    ปัญหา: container ถูกลบ → ข้อมูลทั้งหมดหาย<br><br>
    Volume แก้ปัญหานี้โดย:<br>
    • เก็บข้อมูลไว้นอก container<br>
    • ลบ container ไปก็ยังมีข้อมูล<br>
    • หลาย container แชร์ข้อมูลกันได้<br><br>
    ใช้กับ: database, file uploads, logs`},{q:`.dockerignore คืออะไร ทำไมต้องมี?`,a:`เหมือน <code>.gitignore</code> แต่สำหรับ Docker<br><br>
    บอก Docker ว่าอย่า copy ไฟล์ไหนเข้า container<br><br>
    ไฟล์ที่ควรใส่:<br>
    • <code>node_modules</code> — มีแสนไฟล์ ทำให้ build ช้ามาก<br>
    • <code>dist</code> — Docker build ใหม่เองอยู่ดี<br>
    • <code>.git</code> — git history ไม่จำเป็น<br>
    • <code>.env</code> — ห้าม copy secret เข้า image เด็ดขาด!`}],be=`# ขั้นตอนที่ 1: docker build -t interview-react .
# Docker อ่าน Dockerfile ทีละ step:

Step 1: FROM node:22-alpine AS builder
  → โหลด Node.js 22 image จาก Docker Hub

Step 2: WORKDIR /app
  → สร้าง folder /app ใน container

Step 3: COPY package*.json ./
  → /app/package.json
  → /app/package-lock.json

Step 4: RUN npm install
  → ติดตั้ง react, vite และ library ทั้งหมด
  → /app/node_modules/ (มีแสนไฟล์)

Step 5: COPY . .
  → /app/src/
  → /app/index.html
  → /app/vite.config.js

Step 6: RUN npm run build
  → vite build → ได้ไฟล์ที่ /app/dist/
  → /app/dist/index.html
  → /app/dist/assets/index-xxx.js   (React ทั้งหมดรวมเป็นไฟล์เดียว)
  → /app/dist/assets/index-xxx.css

# ==================== เปลี่ยน Stage ====================

Step 7: FROM nginx:alpine
  → เริ่มใหม่ด้วย nginx
  → ทิ้ง Node.js + node_modules ทั้งหมด (~300MB → ~25MB)

Step 8: COPY --from=builder /app/dist /usr/share/nginx/html
  → copy เฉพาะ dist/ มาใส่ nginx`,xe=`# Image ที่ได้หลัง build เสร็จ
# ดูได้ด้วย: docker images

REPOSITORY        TAG      SIZE
interview-react   latest   25MB   ← เล็กมาก ไม่มี Node.js ติดมา

# ข้างใน image มีแค่:
interview-react (image)
├── Linux alpine
├── nginx
└── /usr/share/nginx/html/
    ├── index.html              ← หน้าเว็บหลัก
    └── assets/
        ├── index-xxx.js        ← React ทั้งหมด
        │   (รวม HomePage, DockerPage,
        │    JSXPage, PropsStatePage ฯลฯ)
        └── index-xxx.css       ← Style ทั้งหมด

# ไม่มี: src/, node_modules/, package.json`,Se=`# ขั้นตอนที่ 2: docker run -p 8080:80 interview-react

1. Docker หา image ชื่อ "interview-react" ในเครื่อง
2. สร้าง Container จาก image นั้น
3. nginx เริ่มทำงาน listen port 80
4. เจาะรู port 8080 (เครื่องเรา) → 80 (container)
5. พร้อมรับ request ✅

# Container ที่รันอยู่มีหน้าตาแบบนี้:
┌──────────────────────────────────────┐
│  nginx (process กำลังทำงาน)          │
│                                      │
│  /usr/share/nginx/html/              │
│  ├── index.html                      │
│  └── assets/                         │
│      ├── index-xxx.js  (React app)   │
│      └── index-xxx.css               │
│                                      │
│  port 80 ──────────────► port 8080   │
│        (ใน container)    (เครื่องเรา) │
└──────────────────────────────────────┘

# ดู container ที่รันอยู่
docker ps

CONTAINER ID   IMAGE             STATUS        PORTS
a1b2c3d4e5f6   interview-react   Up 5 minutes  0.0.0.0:8080->80/tcp`,Ce=`# เปิด Browser localhost:8080 — เกิดอะไรขึ้น?

Browser พิม localhost:8080
       │
       ▼
Docker mapping 8080 → 80
       │
       ▼
nginx รับ request
       │
       ├── ขอ /             → ส่ง index.html
       ├── ขอ /assets/xx.js → ส่ง React bundle
       └── ขอ /assets/xx.css → ส่ง CSS
       │
       ▼
Browser รัน React
       │
       ├── แสดง Sidebar
       ├── แสดง HomePage
       └── คลิก Docker → แสดง DockerPage ✅`;function we(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`DevOps`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`Docker`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`ทำความเข้าใจ Docker ตั้งแต่ concept พื้นฐาน จนถึงการใช้งานจริงใน project`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Docker คืออะไร?`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🐳`}),(0,f.jsxs)(`span`,{children:[`Docker แก้ปัญหา `,(0,f.jsx)(`strong`,{children:`"รันได้บนเครื่องฉัน แต่เครื่องเพื่อนพัง"`}),` ด้วยการ package app พร้อม environment ทุกอย่างไว้ใน container`]})]}),(0,f.jsx)(p,{code:fe,lang:`bash`}),(0,f.jsxs)(`table`,{className:`comparison-table`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Docker`}),(0,f.jsx)(`th`,{children:`เปรียบเหมือน`})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{children:`Dockerfile`})}),(0,f.jsx)(`td`,{children:`สูตรอาหาร`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{children:`Image`})}),(0,f.jsx)(`td`,{children:`อาหารที่ปรุงเสร็จแล้ว`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{children:`Container`})}),(0,f.jsx)(`td`,{children:`อาหารที่กำลังเสิร์ฟอยู่`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{children:`Docker Hub`})}),(0,f.jsx)(`td`,{children:`ร้านสูตรอาหารสำเร็จรูป (online)`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{children:`Volume`})}),(0,f.jsx)(`td`,{children:`กล่องเก็บของที่อยู่นอกร้าน`})]})]})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Dockerfile — อธิบายทุกบรรทัด`}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`✅`}),(0,f.jsxs)(`span`,{children:[`Project นี้ใช้ `,(0,f.jsx)(`strong`,{children:`Multi-stage Build`}),` — แบ่งเป็น 2 stage ทำให้ image สุดท้ายเล็กมาก (~25MB แทนที่จะเป็น ~300MB)`]})]}),(0,f.jsx)(p,{code:pe,lang:`dockerfile`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`.dockerignore`}),(0,f.jsx)(p,{code:me,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`คำสั่งที่ใช้บ่อย`}),(0,f.jsx)(p,{code:D,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Port Mapping`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🔌`}),(0,f.jsxs)(`span`,{children:[`Container เป็น "โลกปิด" — ต้องเจาะรูเชื่อม port เครื่องเรากับ container ด้วย `,(0,f.jsx)(`code`,{children:`-p เครื่องเรา:container`})]})]}),(0,f.jsx)(p,{code:O,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Volume — เก็บข้อมูลถาวร`}),(0,f.jsxs)(`div`,{className:`callout callout-warn`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚠️`}),(0,f.jsx)(`span`,{children:`ข้อมูลใน container หายเมื่อหยุด — ต้องใช้ Volume ถ้าต้องการเก็บข้อมูลถาวร เช่น database`})]}),(0,f.jsx)(p,{code:_e,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Docker Compose — รันหลาย Service`}),(0,f.jsx)(p,{code:he,lang:`yaml`}),(0,f.jsx)(p,{code:ge,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`CI/CD กับ Docker`}),(0,f.jsx)(p,{code:ve,lang:`yaml`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Build Flow — ทีละ Step`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🔨`}),(0,f.jsxs)(`span`,{children:[`ทุกครั้งที่รัน `,(0,f.jsx)(`code`,{children:`docker build`}),` Docker ทำตาม Dockerfile ทีละบรรทัด จนได้ image สำเร็จ`]})]}),(0,f.jsx)(p,{code:be,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Image ที่ได้ — มีอะไรข้างใน?`}),(0,f.jsx)(p,{code:xe,lang:`bash`}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`✅`}),(0,f.jsx)(`span`,{children:`Multi-stage Build ทำให้ image เล็กมาก — มีแค่ nginx + ไฟล์ที่ต้องใช้จริงๆ ไม่มี Node.js หรือ node_modules ติดมา`})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Run Flow — Container ทำงานยังไง?`}),(0,f.jsx)(p,{code:Se,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Browser → Container — Flow ทั้งหมด`}),(0,f.jsx)(p,{code:Ce,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:ye})]})]})}var Te=[{icon:`⚛️`,title:`JSX & Components`,desc:`JSX syntax, Function components, Fragments`,id:`jsx`},{icon:`📦`,title:`Props & State`,desc:`Passing data, useState, controlled components`,id:`props`},{icon:`🎣`,title:`useEffect`,desc:`Side effects, cleanup, dependency array`,id:`useeffect`},{icon:`🔗`,title:`useContext`,desc:`Context API, sharing state globally`,id:`usecontext`},{icon:`📎`,title:`useRef`,desc:`DOM refs, mutable values without re-render`,id:`useref`},{icon:`⚡`,title:`useMemo & useCallback`,desc:`Memoization, performance optimization`,id:`memo`},{icon:`🔄`,title:`useReducer`,desc:`Complex state management, Redux-like pattern`,id:`usereducer`},{icon:`🪝`,title:`Custom Hooks`,desc:`Reusable logic, composition pattern`,id:`customhooks`},{icon:`🚀`,title:`React 19 Features`,desc:`use(), Actions, Compiler, Server Components`,id:`react19`},{icon:`📋`,title:`Array Methods`,desc:`map, filter, reduce, sort, flatMap, React patterns`,id:`array`},{icon:`📘`,title:`TypeScript`,desc:`Types, Interface, Generics, Utility Types, React+TS`,id:`typescript`},{icon:`🟩`,title:`Node.js`,desc:`Express, REST API, Middleware, JWT, Error Handling`,id:`nodejs`},{icon:`🗄️`,title:`SQL`,desc:`SELECT, JOIN, GROUP BY, CTE, Window Functions, Index`,id:`sql`},{icon:`🚢`,title:`Build → Deploy → Browser`,desc:`JSX compile, bundle, optimize, deploy, Virtual DOM, re-render`,id:`builddeploy`},{icon:`🐳`,title:`Docker`,desc:`Container, Image, Dockerfile, Compose, CI/CD`,id:`docker`},{icon:`❓`,title:`Interview Q&A`,desc:`คำถามสัมภาษณ์ที่พบบ่อย พร้อมคำตอบ`,id:`interview`}];function Ee({onNavigate:e}){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`React 19`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`React Interview Review`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`ทบทวนความรู้ React ที่จำเป็นสำหรับการสัมภาษณ์ Frontend Developer ครอบคลุมตั้งแต่พื้นฐานจนถึงฟีเจอร์ใหม่ใน React 19`})]}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`💡`}),(0,f.jsx)(`span`,{children:`เลือกหัวข้อที่ต้องการทบทวนจาก sidebar ด้านซ้าย หรือคลิกที่ card ด้านล่างได้เลย แต่ละหัวข้อมีตัวอย่าง code และ demo แบบ interactive`})]}),(0,f.jsx)(`div`,{className:`home-grid`,children:Te.map(t=>(0,f.jsxs)(`div`,{className:`home-card`,onClick:()=>e(t.id),children:[(0,f.jsx)(`div`,{className:`home-card-icon`,children:t.icon}),(0,f.jsx)(`div`,{className:`home-card-title`,children:t.title}),(0,f.jsx)(`div`,{className:`home-card-desc`,children:t.desc})]},t.id))}),(0,f.jsxs)(`div`,{className:`section`,style:{marginTop:`40px`},children:[(0,f.jsx)(`div`,{className:`section-title`,children:`React Version ที่ใช้ในโปรเจกต์นี้`}),(0,f.jsxs)(`div`,{className:`tag-list`,children:[(0,f.jsx)(`span`,{className:`tag-item tag-blue`,children:`React 19.2.6`}),(0,f.jsx)(`span`,{className:`tag-item tag-green`,children:`Vite 8.0`}),(0,f.jsx)(`span`,{className:`tag-item tag-purple`,children:`Node 22`}),(0,f.jsx)(`span`,{className:`tag-item tag-orange`,children:`ESModule`})]})]})]})}var De=[{id:`fundamental`,label:`⚛️ Fundamentals`,items:[{q:`Virtual DOM คืออะไร และทำงานอย่างไร?`,a:`Virtual DOM คือ representation ของ UI ที่เก็บใน memory ในรูปแบบ JavaScript object<br><br>
    กระบวนการทำงาน (Reconciliation):<br>
    1. เมื่อ state เปลี่ยน React สร้าง Virtual DOM ใหม่<br>
    2. Diff กับ Virtual DOM เก่า (Diffing algorithm)<br>
    3. Calculate minimum changes ที่ต้องทำกับ Real DOM<br>
    4. Batch apply changes ไปยัง Real DOM (Commit phase)<br><br>
    ข้อดี: Real DOM manipulation แพง (reflow, repaint) — Virtual DOM ช่วยลด DOM operations ที่ไม่จำเป็น`},{q:`React Reconciliation คืออะไร?`,a:`Reconciliation คือ process ที่ React ใช้เปรียบเทียบ Virtual DOM tree ใหม่กับเก่า แล้วอัปเดตเฉพาะส่วนที่เปลี่ยน<br><br>
    React ใช้ Heuristics:<br>
    • Elements ต่าง type → destroy ทิ้ง สร้างใหม่ทั้งหมด<br>
    • Elements type เดิม → update attributes เฉพาะที่เปลี่ยน<br>
    • Lists → ใช้ <code>key</code> prop เพื่อ track แต่ละ element<br><br>
    React Fiber (React 16+) ทำให้ reconciliation สามารถ pause/resume ได้ → ไม่ block main thread`},{q:`key prop ใน list คืออะไร และทำไมต้องใส่?`,a:`<code>key</code> ช่วย React ระบุ element ใน list ว่า element ไหนเปลี่ยน ถูกเพิ่ม หรือถูกลบ<br><br>
    ❌ ไม่ควรใช้ array index เป็น key เมื่อ list อาจ reorder:<br>
    → State ของ component อาจ map ผิดตัว เช่น input value อยู่ผิด item<br><br>
    ✅ ใช้ unique, stable ID:<br>
    <code>{items.map(item => &lt;Item key={item.id} /&gt;)}</code><br><br>
    ถ้าไม่มี ID: ใช้ crypto.randomUUID() ตอนสร้าง item (ไม่ใช่ตอน render!)`},{q:`React Re-render เกิดเมื่อไหร่?`,a:`Component re-render เมื่อ:<br>
    1. <strong>State เปลี่ยน</strong> — ผ่าน setState หรือ dispatch<br>
    2. <strong>Props เปลี่ยน</strong> — parent ส่ง prop ใหม่<br>
    3. <strong>Context เปลี่ยน</strong> — value ของ Provider เปลี่ยน<br>
    4. <strong>Parent re-render</strong> — ทุก child re-render ด้วย (ถ้าไม่มี memo)<br><br>
    ลด unnecessary re-renders:<br>
    • <code>React.memo</code> — memoize component<br>
    • <code>useMemo/useCallback</code> — stable references<br>
    • Split context — แยก context ที่เปลี่ยนบ่อย`}]},{id:`hooks`,label:`🎣 Hooks`,items:[{q:`useState vs useReducer — เลือกอันไหน?`,a:`<strong>useState:</strong> เหมาะกับ state simple, เป็น primitive (string, number, boolean) หรือ object ที่ logic ไม่ซับซ้อน<br><br>
    <strong>useReducer:</strong> เหมาะกับ:<br>
    • State object ที่มีหลาย fields เปลี่ยนพร้อมกัน<br>
    • Logic update ซับซ้อน (ขึ้นอยู่กับ action หลายประเภท)<br>
    • ต้องการ test logic แยกออกจาก component<br>
    • State ถัดไปขึ้นอยู่กับ state ปัจจุบันหลายๆ ส่วน`},{q:`Closure ใน Hook เป็นปัญหาอย่างไร (Stale Closure)?`,a:`Stale Closure เกิดเมื่อ Hook closure จับค่าเก่าของ state หรือ props<br><br>
    ตัวอย่าง:<br>
    <code>useEffect(() => {<br>
    &nbsp;&nbsp;const id = setInterval(() => console.log(count), 1000)<br>
    &nbsp;&nbsp;return () => clearInterval(id)<br>
    }, []) // count ถูก capture ค่า 0 ตลอดเวลา!</code><br><br>
    แก้ด้วย:<br>
    • ใส่ dependency ให้ครบ: <code>}, [count])</code><br>
    • Functional update: <code>setCount(prev => prev + 1)</code><br>
    • useRef เก็บ latest value`},{q:`ความแตกต่างระหว่าง useEffect และ useLayoutEffect?`,a:`<strong>useEffect:</strong><br>
    • ทำงานหลัง browser paint (asynchronous)<br>
    • UI แสดงผลก่อน effect ทำงาน<br>
    • ใช้กับ: fetch, subscriptions, timers<br><br>
    <strong>useLayoutEffect:</strong><br>
    • ทำงานหลัง DOM update แต่ก่อน browser paint (synchronous)<br>
    • Block browser จน effect เสร็จ<br>
    • ใช้กับ: วัด DOM size/position, animation ที่ต้องไม่กระพริบ<br><br>
    Rule: ใช้ useEffect เป็น default, switch เป็น useLayoutEffect เมื่อเห็น flickering`}]},{id:`performance`,label:`⚡ Performance`,items:[{q:`Code Splitting คืออะไร ทำใน React อย่างไร?`,a:`Code Splitting แบ่ง JavaScript bundle เป็นหลายไฟล์ โหลดเฉพาะที่ต้องการ<br><br>
    ใน React ใช้ <code>React.lazy</code> + <code>Suspense</code>:<br>
    <code>const Dashboard = React.lazy(() => import('./Dashboard'))</code><br><br>
    <code>function App() {<br>
    &nbsp;&nbsp;return (<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Suspense fallback={&lt;Loading /&gt;}&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Dashboard /&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Suspense&gt;<br>
    &nbsp;&nbsp;)<br>
    }</code><br><br>
    ผลลัพธ์: Dashboard.js โหลดเฉพาะเมื่อ component ถูก render ครั้งแรก`},{q:`ทำไม prop เป็น object/array ถึงทำให้ React.memo ไม่ทำงาน?`,a:`เพราะ JavaScript เปรียบเทียบ object/array ด้วย reference ไม่ใช่ value<br><br>
    <code>{ a: 1 } === { a: 1 } // false! คนละ reference</code><br><br>
    ทุก render parent สร้าง object ใหม่ → memo เห็นว่า props "เปลี่ยน" → re-render<br><br>
    แก้ด้วย:<br>
    • <code>useMemo</code> สำหรับ object/array<br>
    • <code>useCallback</code> สำหรับ function<br>
    • ย้าย constant ออกนอก component (ถ้าไม่ขึ้นกับ state)`}]},{id:`architecture`,label:`🏗️ Architecture`,items:[{q:`Controlled vs Uncontrolled Component คืออะไร?`,a:`<strong>Controlled Component:</strong><br>
    • React state เป็น "source of truth" ของ input<br>
    • ต้องมี <code>value</code> + <code>onChange</code><br>
    • ทำ validation, formatting ได้ทันที<br>
    • Code เยอะกว่าเล็กน้อย<br><br>
    <strong>Uncontrolled Component:</strong><br>
    • DOM จัดการ state เอง<br>
    • ใช้ ref เพื่อดึงค่า<br>
    • เหมาะกับ file input, หรือ integrate กับ non-React library<br>
    • Code น้อยกว่า แต่ control น้อยกว่า`},{q:`Compound Component Pattern คืออะไร?`,a:`Pattern ที่ component หลายตัวทำงานร่วมกันผ่าน shared state (ผ่าน Context)<br><br>
    เช่น HTML <code>&lt;select&gt;</code> + <code>&lt;option&gt;</code><br><br>
    <code>// การใช้งาน<br>
    &lt;Tabs&gt;<br>
    &nbsp;&nbsp;&lt;Tabs.List&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tabs.Tab&gt;Home&lt;/Tabs.Tab&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tabs.Tab&gt;Settings&lt;/Tabs.Tab&gt;<br>
    &nbsp;&nbsp;&lt;/Tabs.List&gt;<br>
    &nbsp;&nbsp;&lt;Tabs.Panel&gt;Home content&lt;/Tabs.Panel&gt;<br>
    &lt;/Tabs&gt;</code><br><br>
    ข้อดี: Flexible API, consumer control layout เอง, state ซ่อนอยู่ใน parent`},{q:`Error Boundary คืออะไร?`,a:`Error Boundary คือ Class Component ที่ catch JavaScript errors ใน subtree<br><br>
    ใช้ <code>componentDidCatch</code> และ <code>getDerivedStateFromError</code><br><br>
    ในปัจจุบันต้องเป็น Class Component (ยังไม่มี Hook version)<br>
    แต่ library เช่น <code>react-error-boundary</code> ทำให้ใช้ง่ายขึ้น<br><br>
    React 19 มี <code>useErrorBoundary</code> Hook ที่ยังอยู่ในการพัฒนา`}]}];function Oe(){let[e,t]=(0,l.useState)(`fundamental`),n=De.find(t=>t.id===e);return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Interview Prep`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`Interview Q&A`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`คำถามสัมภาษณ์ Frontend Developer ที่พบบ่อย พร้อมคำตอบที่ครอบคลุม`})]}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`💡`}),(0,f.jsx)(`span`,{children:`คลิกที่คำถามเพื่อดูคำตอบ ลองตอบเองก่อนเปิดดู`})]}),(0,f.jsx)(`div`,{className:`tag-list`,style:{marginBottom:24},children:De.map(n=>(0,f.jsx)(`button`,{className:`tag-item`,style:{cursor:`pointer`,background:e===n.id?`rgba(97,218,251,0.15)`:`rgba(97,218,251,0.05)`,color:e===n.id?`#61dafb`:`#4b5563`,border:e===n.id?`1px solid rgba(97,218,251,0.4)`:`1px solid #1e2535`,fontFamily:`inherit`,fontSize:13,padding:`6px 14px`,transition:`all 0.15s`},onClick:()=>t(n.id),children:n.label},n.id))}),(0,f.jsx)(h,{items:n.items}),(0,f.jsxs)(`div`,{className:`section`,style:{marginTop:40},children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Tips สำหรับการสัมภาษณ์`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🎯`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`strong`,{children:`STAR Method:`}),` Situation → Task → Action → Result`,(0,f.jsx)(`br`,{}),`อธิบายด้วยตัวอย่างจากประสบการณ์จริงเสมอ ไม่ใช่แค่ theory`]})]}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`✅`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`strong`,{children:`ถ้าไม่แน่ใจ:`}),` พูดสิ่งที่รู้ก่อน แล้วบอกว่า "ถ้าผมจำไม่ผิด..." หรือ "ผมจะต้องตรวจสอบเพิ่มเติม"`,(0,f.jsx)(`br`,{}),`Interviewer ประเมิน thinking process ไม่ใช่แค่คำตอบ`]})]}),(0,f.jsxs)(`div`,{className:`callout callout-warn`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚠️`}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`strong`,{children:`Avoid:`}),` ท่อง API โดยไม่เข้าใจ concept — Interviewer จะถามต่อเสมอ`,(0,f.jsx)(`br`,{}),`ควรเข้าใจ "ทำไม" มากกว่า "อย่างไร"`]})]})]})]})}var ke=`// JSX คือ syntax extension ของ JavaScript
// ถูกแปลงโดย Babel เป็น React.createElement()

// JSX
const element = <h1 className="title">Hello World</h1>

// เทียบเท่ากับ
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello World'
)`,Ae=`// Function Component (แนะนำ - modern React)
function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  )
}

// Arrow Function Component
const Button = ({ onClick, children, disabled = false }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
)

// การใช้งาน
function App() {
  return (
    <>
      <Greeting name="Sirapob" />
      <Button onClick={() => alert('clicked!')}>
        Click me
      </Button>
    </>
  )
}`,je=`// Fragment ใช้เมื่อต้องการ return หลาย element
// โดยไม่ต้องมี wrapper div

// วิธีที่ 1: React.Fragment
function List() {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
    </React.Fragment>
  )
}

// วิธีที่ 2: Short syntax (แนะนำ)
function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  )
}

// Fragment กับ key (ต้องใช้ React.Fragment)
function KeyedList({ items }) {
  return items.map((item) => (
    <React.Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </React.Fragment>
  ))
}`,Me=`function UserStatus({ isLoggedIn, username }) {
  return (
    <div>
      {/* Ternary operator */}
      {isLoggedIn ? (
        <p>Welcome back, {username}!</p>
      ) : (
        <p>Please log in</p>
      )}

      {/* Short-circuit (&&) */}
      {isLoggedIn && <button>Logout</button>}

      {/* Nullish - ซ่อน element */}
      {isLoggedIn && username && (
        <span>👤 {username}</span>
      )}
    </div>
  )
}`,Ne=`// JSX Rules ที่ต้องจำ

// 1. ต้อง return element เดียว (ใช้ Fragment ถ้าต้องการหลาย)
// ❌ Wrong
return <h1>Title</h1><p>Content</p>
// ✅ Correct
return <><h1>Title</h1><p>Content</p></>

// 2. ใช้ className แทน class
// ❌ Wrong
return <div class="box">...</div>
// ✅ Correct
return <div className="box">...</div>

// 3. Self-closing tags ต้องมี /
// ❌ Wrong
return <img src="photo.jpg">
// ✅ Correct
return <img src="photo.jpg" />

// 4. camelCase สำหรับ attributes
// ❌ Wrong
return <div onclick={fn} tabindex="0">...</div>
// ✅ Correct
return <div onClick={fn} tabIndex={0}>...</div>

// 5. JavaScript expression ใน {}
const name = "React"
return <h1>Hello {name.toUpperCase()}!</h1>`,Pe=[{q:`JSX คืออะไร และทำไม React ถึงใช้ JSX?`,a:`JSX (JavaScript XML) คือ syntax extension ที่ทำให้เราเขียน HTML-like syntax ใน JavaScript ได้
    <br><br>
    React ใช้ JSX เพราะ:<br>
    • ทำให้ UI code อ่านเข้าใจง่ายขึ้น มองเห็น structure ได้ชัด<br>
    • รวม logic และ UI ไว้ในที่เดียวกัน (component)<br>
    • Babel จะ compile JSX เป็น <code>React.createElement()</code> calls<br><br>
    JSX ไม่ใช่ HTML แต่คล้ายกัน ต้องใช้ <code>className</code> แทน <code>class</code> และ <code>htmlFor</code> แทน <code>for</code>`},{q:`ความแตกต่างระหว่าง Function Component และ Class Component คืออะไร?`,a:`<strong>Function Component</strong> (แนะนำใน modern React):<br>
    • เขียนง่ายกว่า เป็น plain function<br>
    • ใช้ Hooks (useState, useEffect, etc.)<br>
    • ไม่มี <code>this</code> keyword ทำให้ logic ง่ายขึ้น<br>
    • Performance ดีกว่าเล็กน้อย<br><br>
    <strong>Class Component</strong> (legacy):<br>
    • ต้อง extend <code>React.Component</code><br>
    • มี lifecycle methods (componentDidMount, etc.)<br>
    • ใช้ <code>this.state</code> และ <code>this.setState()</code><br>
    • ยังใช้ได้แต่ไม่แนะนำสำหรับ code ใหม่`},{q:`React Fragment คืออะไร ใช้เมื่อไหร่?`,a:`Fragment คือ wrapper พิเศษที่ไม่สร้าง DOM element จริงๆ<br><br>
    ใช้เมื่อ:<br>
    • Component ต้อง return หลาย element แต่ไม่อยาก wrap ด้วย <code>&lt;div&gt;</code><br>
    • อยู่ใน table (ไม่สามารถมี div กลางได้)<br>
    • ต้องการหลีกเลี่ยง extra DOM nodes<br><br>
    วิธีใช้: <code>&lt;&gt;...&lt;/&gt;</code> หรือ <code>&lt;React.Fragment&gt;...&lt;/React.Fragment&gt;</code><br>
    ถ้าต้องการ <code>key</code> prop ต้องใช้ <code>React.Fragment</code> ยาว`}];function Fe(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Fundamentals`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`JSX & Components`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`พื้นฐานของ React: JSX syntax, การสร้าง Component, และกฎต่างๆ ที่ต้องรู้`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`JSX คืออะไร?`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚛️`}),(0,f.jsxs)(`span`,{children:[`JSX ถูก compile โดย Babel เป็น `,(0,f.jsx)(`code`,{children:`React.createElement()`}),` — ไม่ใช่ HTML และไม่ใช่ string`]})]}),(0,f.jsx)(p,{code:ke})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Function Components`}),(0,f.jsx)(p,{code:Ae}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`✅`}),(0,f.jsx)(`span`,{children:`ใช้ Function Component เสมอในโปรเจกต์ใหม่ — ทำงานได้ดีกับ Hooks และอ่านง่ายกว่า Class Component`})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Fragments`}),(0,f.jsx)(p,{code:je})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Conditional Rendering`}),(0,f.jsx)(p,{code:Me})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`JSX Rules ที่ต้องจำ`}),(0,f.jsx)(p,{code:Ne})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:Pe})]})]})}var Ie=`import { memo } from 'react'

// React.memo — memoize component
// ป้องกัน re-render เมื่อ props ไม่เปลี่ยน

// ❌ ไม่มี memo — re-render ทุกครั้งที่ parent render
function ExpensiveList({ items }) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
}

// ✅ มี memo — re-render เฉพาะเมื่อ items เปลี่ยน
const ExpensiveList = memo(function ExpensiveList({ items }) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
})

// memo กับ comparison function (custom equality)
const Component = memo(MyComponent, (prevProps, nextProps) => {
  // return true = props same = ไม่ re-render
  // return false = props changed = re-render
  return prevProps.id === nextProps.id
})`,Le=`import { useMemo } from 'react'

// useMemo — memoize expensive calculation result
// Re-calculate เฉพาะเมื่อ dependencies เปลี่ยน

function FilteredList({ items, query }) {
  // ❌ ไม่มี useMemo — คำนวณใหม่ทุก render
  const filtered = items.filter(i =>
    i.name.toLowerCase().includes(query.toLowerCase())
  )

  // ✅ มี useMemo — คำนวณใหม่เฉพาะเมื่อ items หรือ query เปลี่ยน
  const filtered = useMemo(() => {
    console.log('Filtering...')
    return items.filter(i =>
      i.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [items, query])

  return <ul>{filtered.map(i => <li key={i.id}>{i.name}</li>)}</ul>
}

// useMemo ยัง stable reference ของ object/array ด้วย
// ป้องกัน child re-render เมื่อ parent สร้าง object ใหม่ทุก render
function Parent() {
  const [count, setCount] = useState(0)

  // ❌ สร้าง object ใหม่ทุก render → child ที่รับ options จะ re-render เสมอ
  const options = { theme: 'dark', lang: 'th' }

  // ✅ object เดิมทุก render → child ไม่ re-render โดยไม่จำเป็น
  const options = useMemo(() => ({ theme: 'dark', lang: 'th' }), [])

  return <Child options={options} />
}`,Re=`import { useCallback } from 'react'

// useCallback — memoize function reference
// ป้องกัน function ถูกสร้างใหม่ทุก render

function Parent() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

  // ❌ สร้าง function ใหม่ทุก render
  // MemoChild จะ re-render ทุกครั้งที่ Parent render
  const handleAdd = (item) => {
    setItems(prev => [...prev, item])
  }

  // ✅ function เดิมทุก render (ไม่มี deps เปลี่ยน)
  const handleAdd = useCallback((item) => {
    setItems(prev => [...prev, item])
  }, []) // ไม่มี dep เพราะใช้ functional update

  const handleRemove = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Re-render parent</button>
      <MemoChild onAdd={handleAdd} onRemove={handleRemove} />
    </>
  )
}

const MemoChild = memo(function Child({ onAdd, onRemove }) {
  console.log('Child rendered') // ไม่ log เมื่อ parent re-render เพราะ props เหมือนเดิม
  return <div>...</div>
})`,ze=`// เมื่อไหรควรใช้ useMemo / useCallback?

// ✅ ใช้เมื่อ:
// 1. Expensive computation (sorting, filtering ข้อมูลเยอะ)
// 2. ส่ง function ให้ memo() component
// 3. ส่งเป็น dependency ของ useEffect

// ❌ ไม่จำเป็นเมื่อ:
// 1. Computation เร็วอยู่แล้ว (add 2 numbers)
// 2. Component ไม่ได้ wrap ด้วย memo()
// 3. Re-render ไม่ส่งผลต่อ performance จริงๆ

// 🎯 React 19: React Compiler ทำ memoization อัตโนมัติ!
// ในอนาคต อาจไม่ต้องเขียน useMemo/useCallback เองอีกต่อไป`,Be=[{q:`useMemo กับ useCallback ต่างกันอย่างไร?`,a:`<code>useMemo</code> — memoize <strong>value</strong> (ผลลัพธ์ของ function)<br>
    <code>useCallback</code> — memoize <strong>function</strong> (reference ของ function เอง)<br><br>
    <code>useCallback(fn, deps)</code> เทียบเท่ากับ <code>useMemo(() => fn, deps)</code><br><br>
    ใช้ useMemo เมื่อต้องการ cache ผลการคำนวณ<br>
    ใช้ useCallback เมื่อต้องการ stable function reference (ส่งให้ child component)`},{q:`React.memo คืออะไร แตกต่างจาก useMemo อย่างไร?`,a:`<code>React.memo</code> — HOC ที่ wrap <strong>component</strong> ป้องกัน re-render เมื่อ props เหมือนเดิม<br>
    <code>useMemo</code> — Hook ที่ใช้ใน <strong>function body</strong> cache ผลการคำนวณ<br><br>
    React.memo ใช้ shallow comparison ของ props<br>
    ถ้า props เป็น object/function ต้องใช้ร่วมกับ useMemo/useCallback`},{q:`Over-optimization คืออะไร ทำไมถึงเป็นปัญหา?`,a:`การใส่ useMemo/useCallback ทุกที่โดยไม่จำเป็น<br><br>
    ปัญหา:<br>
    • Code อ่านยากขึ้น<br>
    • Overhead ของ useMemo เอง (เก็บ deps array, compare)<br>
    • ถ้า deps เปลี่ยนทุก render ก็ไม่ได้ประโยชน์<br><br>
    แนวทาง: Profile ก่อน Optimize ด้วย React DevTools Profiler<br>
    และใน React 19 React Compiler จะ optimize ให้อัตโนมัติ`}],Ve=(0,l.memo)(function({onIncrement:e}){return(0,l.useMemo)(()=>{let e=0;return()=>++e},[]),(0,f.jsxs)(`div`,{style:{padding:`12px 16px`,background:`#1e2535`,borderRadius:8,fontSize:13,color:`#9ca3af`,marginTop:10},children:[(0,f.jsx)(`span`,{style:{color:`#4ade80`},children:`MemoChild`}),` (ไม่ re-render เมื่อ parent count เปลี่ยน)`,(0,f.jsx)(`button`,{className:`demo-btn-sm`,style:{marginLeft:12},onClick:e,children:`Add Item`})]})});function He(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)([]),i=(0,l.useCallback)(()=>{r(e=>[...e,`Item ${e.length+1}`])},[]);return(0,f.jsxs)(`div`,{className:`demo-content`,children:[(0,f.jsx)(`div`,{className:`demo-row`,children:(0,f.jsxs)(`button`,{className:`demo-btn`,onClick:()=>t(e=>e+1),children:[`Re-render Parent (`,e,`)`]})}),(0,f.jsx)(Ve,{onIncrement:i}),n.length>0&&(0,f.jsx)(`ul`,{className:`demo-list`,style:{marginTop:8},children:n.map((e,t)=>(0,f.jsx)(`li`,{className:`demo-list-item`,style:{padding:`6px 12px`},children:e},t))})]})}function Ue(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Performance`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`useMemo & useCallback`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`Memoization เพื่อลด unnecessary re-renders และ expensive calculations`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`React.memo — Component Memoization`}),(0,f.jsx)(p,{code:Ie})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useMemo — Value Memoization`}),(0,f.jsx)(p,{code:Le})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useCallback — Function Memoization`}),(0,f.jsx)(p,{code:Re})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interactive Demo`}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`memo + useCallback Demo`}),(0,f.jsx)(He,{})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`เมื่อไหรควรใช้?`}),(0,f.jsx)(p,{code:ze}),(0,f.jsxs)(`div`,{className:`callout callout-new`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🚀`}),(0,f.jsxs)(`span`,{children:[`React 19 มี `,(0,f.jsx)(`strong`,{children:`React Compiler`}),` ที่ memoize code อัตโนมัติ — ในอนาคตอาจไม่ต้องเขียน useMemo/useCallback เองเลย`]})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:Be})]})]})}var We=`// Props คือ read-only data ที่ส่งจาก parent ไป child

// Parent Component
function App() {
  return (
    <UserCard
      name="Sirapob"
      age={25}
      isAdmin={true}
      tags={['React', 'TypeScript']}
      onDelete={() => console.log('deleted')}
    />
  )
}

// Child Component - รับ props ผ่าน destructuring
function UserCard({ name, age, isAdmin, tags, onDelete }) {
  return (
    <div>
      <h2>{name} {isAdmin && '⭐'}</h2>
      <p>Age: {age}</p>
      <ul>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

// Default Props ด้วย default parameter values
function Button({ label = 'Click', variant = 'primary', disabled = false }) {
  return <button className={variant} disabled={disabled}>{label}</button>
}`,Ge=`import { useState } from 'react'

// useState returns [currentValue, setterFunction]
function Counter() {
  const [count, setCount] = useState(0) // initial value = 0

  return (
    <div>
      <p>Count: {count}</p>
      {/* Direct value */}
      <button onClick={() => setCount(count + 1)}>+</button>

      {/* Functional update (แนะนำเมื่อ state ใหม่ขึ้นอยู่กับ state เก่า) */}
      <button onClick={() => setCount(prev => prev - 1)}>-</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

// Object State
function UserForm() {
  const [user, setUser] = useState({ name: '', email: '' })

  const updateField = (field, value) => {
    // ต้อง spread เพราะ setState แทนที่ทั้ง object
    setUser(prev => ({ ...prev, [field]: value }))
  }

  return (
    <form>
      <input
        value={user.name}
        onChange={e => updateField('name', e.target.value)}
      />
      <input
        value={user.email}
        onChange={e => updateField('email', e.target.value)}
      />
    </form>
  )
}`,Ke=`// React 18+ batches multiple setState calls automatically!
// ทุก setState ใน event handler จะถูก batch เป็น 1 re-render

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const handleClick = () => {
    setCount(c => c + 1) // ไม่ re-render ทันที
    setText('updated')   // ไม่ re-render ทันที
    // React batch ทั้งสองเป็น 1 re-render
  }

  // ถ้าต้องการ state ใหม่ทันที ใช้ flushSync
  import { flushSync } from 'react-dom'

  const handleSync = () => {
    flushSync(() => setCount(c => c + 1)) // re-render ทันที
    flushSync(() => setText('updated'))   // re-render อีกครั้ง
  }
}`,qe=`// Lifting State Up - เมื่อหลาย Component ต้องใช้ state เดียวกัน
// ย้าย state ขึ้นไปที่ parent แล้วส่งลงมาผ่าน props

function Parent() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
      <ItemList
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <ItemDetail id={selectedId} />
    </>
  )
}

function ItemList({ selectedId, onSelect }) {
  return items.map(item => (
    <div
      key={item.id}
      className={item.id === selectedId ? 'active' : ''}
      onClick={() => onSelect(item.id)}
    >
      {item.name}
    </div>
  ))
}`,Je=[{q:`Props และ State ต่างกันอย่างไร?`,a:`<strong>Props:</strong><br>
    • ส่งจาก parent ไป child<br>
    • Read-only — child ห้ามแก้ไข props โดยตรง<br>
    • เปลี่ยนได้เมื่อ parent re-render ด้วย props ใหม่<br><br>
    <strong>State:</strong><br>
    • เป็น "memory" ของ component ตัวเอง<br>
    • เปลี่ยนได้ด้วย setter function (setState)<br>
    • การเปลี่ยน state ทำให้ component re-render`},{q:`ทำไม setState ถึงไม่ควรแก้ state โดยตรง?`,a:`React track การเปลี่ยนแปลงผ่าน setter function เท่านั้น<br><br>
    ❌ Wrong: <code>state.name = "new"</code> — React ไม่รู้ว่า state เปลี่ยน, ไม่ re-render<br>
    ✅ Correct: <code>setState({ ...state, name: "new" })</code> — React detect การเปลี่ยน, re-render<br><br>
    State ต้อง immutable — สร้าง object ใหม่เสมอ ไม่แก้ของเดิม`},{q:`Controlled Component กับ Uncontrolled Component ต่างกันอย่างไร?`,a:`<strong>Controlled Component:</strong><br>
    • React เป็น "single source of truth" ของ input value<br>
    • ใช้ <code>value</code> prop + <code>onChange</code> handler<br>
    • ข้อมูลถูก store ใน state<br>
    <code>&lt;input value={text} onChange={e => setText(e.target.value)} /&gt;</code><br><br>
    <strong>Uncontrolled Component:</strong><br>
    • DOM จัดการ state เอง<br>
    • ใช้ <code>ref</code> เพื่อดึงค่า เช่น <code>inputRef.current.value</code><br>
    • เหมาะกับ file input หรือกรณีที่ไม่ต้องการ validation`}];function Ye(){let[e,t]=(0,l.useState)(0);return(0,f.jsxs)(`div`,{className:`demo-content`,children:[(0,f.jsxs)(`div`,{className:`demo-row`,children:[(0,f.jsx)(`button`,{className:`demo-btn`,onClick:()=>t(e=>e-1),children:`−`}),(0,f.jsx)(`span`,{className:`demo-value`,children:e}),(0,f.jsx)(`button`,{className:`demo-btn`,onClick:()=>t(e=>e+1),children:`+`}),(0,f.jsx)(`button`,{className:`demo-btn-sm`,onClick:()=>t(0),children:`Reset`})]}),(0,f.jsx)(`p`,{className:`demo-label`,style:{marginTop:12},children:e===0?`Start counting!`:e>0?`Positive: ${e}`:`Negative: ${e}`})]})}function Xe(){let[e,t]=(0,l.useState)({name:``,email:``});return(0,f.jsxs)(`div`,{className:`demo-content`,children:[(0,f.jsxs)(`div`,{className:`demo-row`,style:{marginBottom:10},children:[(0,f.jsx)(`span`,{className:`demo-label`,children:`Name:`}),(0,f.jsx)(`input`,{className:`demo-input`,value:e.name,onChange:e=>t(t=>({...t,name:e.target.value})),placeholder:`กรอกชื่อ...`})]}),(0,f.jsxs)(`div`,{className:`demo-row`,style:{marginBottom:10},children:[(0,f.jsx)(`span`,{className:`demo-label`,children:`Email:`}),(0,f.jsx)(`input`,{className:`demo-input`,value:e.email,onChange:e=>t(t=>({...t,email:e.target.value})),placeholder:`กรอก email...`})]}),(0,f.jsx)(`div`,{className:`demo-output`,children:e.name||e.email?`👤 ${e.name||`...`} | 📧 ${e.email||`...`}`:`กรอกข้อมูลเพื่อดูผลลัพธ์`})]})}function Ze(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Core Concepts`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`Props & State`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`การส่งข้อมูลระหว่าง component ด้วย Props และการจัดการ state ด้วย useState`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Props — การส่งข้อมูล`}),(0,f.jsx)(p,{code:We})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useState Hook`}),(0,f.jsx)(p,{code:Ge}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`Counter Demo — useState`}),(0,f.jsx)(Ye,{})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Controlled Form Demo`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`📝`}),(0,f.jsx)(`span`,{children:`Controlled Component: React state เป็น single source of truth ของ input`})]}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`Form Demo — Controlled Component`}),(0,f.jsx)(Xe,{})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`State Batching (React 18+)`}),(0,f.jsx)(p,{code:Ke}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚡`}),(0,f.jsx)(`span`,{children:`React 18+ batch setState calls ทั้งใน event handlers, async functions, setTimeout, และ Promise — ลด re-renders โดยอัตโนมัติ`})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Lifting State Up`}),(0,f.jsx)(p,{code:qe})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:Je})]})]})}var Qe=`// React 19: use() Hook
// ใช้แทน useEffect + useState สำหรับ async data

// ✅ React 19: use() hook
import { use, Suspense } from 'react'

// สร้าง promise ไว้นอก component
const userPromise = fetch('/api/user').then(r => r.json())

function UserProfile() {
  // use() suspend component จนกว่า promise จะ resolve
  const user = use(userPromise) // ไม่ต้องมี useEffect!

  return <div>{user.name}</div>
}

// ใช้กับ Suspense boundary
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile />
    </Suspense>
  )
}

// use() ยังใช้กับ Context ได้ด้วย (แทน useContext)
function Component() {
  const theme = use(ThemeContext) // เหมือน useContext แต่เรียกใน condition ได้!
  if (someCondition) {
    const user = use(UserContext) // ✅ ได้!
  }
}`,$e=`// React 19: Actions — Form handling แบบใหม่
// ไม่ต้องมี onSubmit handler แยก

// ✅ React 19: Server Action / Client Action
function ContactForm() {
  async function submitAction(formData) {
    'use server' // หรือ 'use client'
    const name = formData.get('name')
    const email = formData.get('email')
    await sendEmail({ name, email })
  }

  return (
    <form action={submitAction}>
      <input name="name" />
      <input name="email" type="email" />
      <button type="submit">Send</button>
    </form>
  )
}

// useActionState — track pending state ของ Action
import { useActionState } from 'react'

function LoginForm() {
  const [error, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const result = await login(formData)
      if (!result.ok) return result.error // return error message
      redirect('/dashboard')
    },
    null // initial state
  )

  return (
    <form action={submitAction}>
      {error && <p className="error">{error}</p>}
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button disabled={isPending}>
        {isPending ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}`,et=`// React 19: useOptimistic — Optimistic UI Updates
// อัปเดต UI ทันที ก่อน server response

import { useOptimistic } from 'react'

function TodoList({ todos }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentTodos, newTodo) => [...currentTodos, newTodo]
  )

  async function addAction(formData) {
    const text = formData.get('text')
    const newTodo = { id: 'temp', text, done: false }

    // อัปเดต UI ทันที (optimistic)
    addOptimisticTodo(newTodo)

    // ส่งไป server (อาจใช้เวลา)
    await createTodo(text)
    // ถ้า server error → revert อัตโนมัติ!
  }

  return (
    <>
      <form action={addAction}>
        <input name="text" />
        <button>Add</button>
      </form>
      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id} style={{ opacity: todo.id === 'temp' ? 0.5 : 1 }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  )
}`,tt=`// React 19: React Compiler (Beta)
// Auto-memoization — ไม่ต้องเขียน useMemo/useCallback เอง!

// Before React Compiler (ต้อง optimize เอง)
function SearchResults({ query, results }) {
  const filtered = useMemo(
    () => results.filter(r => r.title.includes(query)),
    [results, query]
  )

  const handleClick = useCallback(
    (id) => console.log('clicked', id),
    []
  )

  return (
    <ul>
      {filtered.map(r => (
        <ResultItem key={r.id} item={r} onClick={handleClick} />
      ))}
    </ul>
  )
}

// After React Compiler (เขียน code ธรรมดา compiler จัดการให้)
function SearchResults({ query, results }) {
  const filtered = results.filter(r => r.title.includes(query))
  // Compiler auto-memoize filtered ให้!

  const handleClick = (id) => console.log('clicked', id)
  // Compiler auto-memoize handleClick ให้!

  return (
    <ul>
      {filtered.map(r => (
        <ResultItem key={r.id} item={r} onClick={handleClick} />
      ))}
    </ul>
  )
}`,nt=`// React 19: ref เป็น regular prop แล้ว!
// ไม่ต้องใช้ forwardRef อีกต่อไป

// Before React 19 — ต้องใช้ forwardRef
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />
})

// React 19 — ref เป็น prop ธรรมดา
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />
}

// ใช้งานเหมือนเดิม
function App() {
  const ref = useRef(null)
  return <Input ref={ref} placeholder="Hello" />
}`,rt=[{q:`React 19 มีอะไรใหม่ที่สำคัญบ้าง?`,a:`<strong>1. use() Hook:</strong> ใช้แทน useEffect+useState สำหรับ async data และ Context<br>
    <strong>2. Actions:</strong> Form action ที่รองรับ async functions โดยตรง<br>
    <strong>3. useActionState:</strong> Track state ของ form action (error, pending)<br>
    <strong>4. useOptimistic:</strong> Optimistic UI updates ที่ revert อัตโนมัติ<br>
    <strong>5. ref as prop:</strong> ไม่ต้องใช้ forwardRef อีกต่อไป<br>
    <strong>6. React Compiler (Beta):</strong> Auto-memoization, ไม่ต้องเขียน useMemo/useCallback`},{q:`useTransition คืออะไร?`,a:`<code>useTransition</code> ช่วยให้ state update บางอย่าง "non-urgent" ทำให้ UI ยังตอบสนองได้ระหว่าง heavy update<br><br>
    <code>const [isPending, startTransition] = useTransition()</code><br><br>
    ใช้เมื่อ:<br>
    • Navigation ไปยังหน้าใหม่<br>
    • Search filter ที่ต้อง render หลาย items<br>
    • Tab switching ที่มี heavy content<br><br>
    React จะ render urgent updates (typing) ก่อน แล้วค่อย render transition updates`}];function it(){let[e,t]=(0,l.useState)(`A`),[n,r]=(0,l.useTransition)();return(0,f.jsxs)(`div`,{className:`demo-content`,children:[(0,f.jsxs)(`div`,{className:`demo-row`,style:{marginBottom:12},children:[[`A`,`B`,`C`].map(i=>(0,f.jsxs)(`button`,{className:`demo-btn-sm`,style:{background:e===i?`rgba(97,218,251,0.2)`:void 0,borderColor:e===i?`#61dafb`:void 0,opacity:n?.6:1},onClick:()=>r(()=>t(i)),children:[`Tab `,i]},i)),n&&(0,f.jsx)(`span`,{className:`demo-label`,children:`🔄 Loading...`})]}),(0,f.jsxs)(`div`,{className:`demo-output`,children:[`Tab `,e,` content — startTransition ป้องกัน UI ค้างระหว่าง switch`]})]})}function at(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`React 19`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`React 19 New Features`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`ฟีเจอร์ใหม่ใน React 19 ที่ต้องรู้สำหรับ Frontend Developer ในปี 2025-2026`})]}),(0,f.jsxs)(`div`,{className:`callout callout-new`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🆕`}),(0,f.jsx)(`span`,{children:`Project นี้ใช้ React 19.2.6 — ฟีเจอร์ใหม่ทั้งหมดนี้พร้อมใช้งานได้เลย!`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`use() Hook`}),(0,f.jsx)(p,{code:Qe})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Actions & useActionState`}),(0,f.jsx)(p,{code:$e})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useOptimistic — Optimistic UI`}),(0,f.jsx)(p,{code:et}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚡`}),(0,f.jsx)(`span`,{children:`useOptimistic ทำให้ UI ตอบสนองทันที แล้วค่อย sync กับ server — ถ้า server error จะ revert อัตโนมัติ`})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useTransition — Demo`}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`useTransition Demo`}),(0,f.jsx)(it,{})]}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`ℹ️`}),(0,f.jsx)(`span`,{children:`useTransition ให้ React รู้ว่า update นี้ไม่ urgent — React จะ render urgent updates (เช่น typing) ก่อนเสมอ`})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ref as Regular Prop`}),(0,f.jsx)(p,{code:nt})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`React Compiler — Auto Memoization`}),(0,f.jsx)(p,{code:tt})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:rt})]})]})}var ot=`CREATE TABLE users (
  id       INT PRIMARY KEY,
  name     VARCHAR(100),
  email    VARCHAR(100),
  age      INT,
  dept_id  INT
);

CREATE TABLE departments (
  id    INT PRIMARY KEY,
  name  VARCHAR(100)
);

CREATE TABLE orders (
  id         INT PRIMARY KEY,
  user_id    INT,
  product    VARCHAR(100),
  amount     DECIMAL(10,2),
  created_at DATE
);`,st=`-- ดึงทุกคอลัมน์
SELECT * FROM users;

-- ดึงเฉพาะบางคอลัมน์
SELECT name, email FROM users;

-- WHERE กรองแถวตามเงื่อนไข
SELECT * FROM users WHERE age > 25;
SELECT * FROM users WHERE age BETWEEN 20 AND 30;

-- LIKE ค้นหาด้วย pattern
-- % = ตัวอักษรกี่ตัวก็ได้   _ = หนึ่งตัวอักษร
SELECT * FROM users WHERE name LIKE 'A%';    -- ขึ้นต้นด้วย A
SELECT * FROM users WHERE name LIKE '%son';  -- ลงท้ายด้วย son

-- IN ตรวจหลายค่าในคราวเดียว
SELECT * FROM users WHERE dept_id IN (1, 2, 3);

-- IS NULL ตรวจค่าที่ว่าง (ใช้ = NULL ไม่ได้!)
SELECT * FROM users WHERE dept_id IS NULL;`,ct=`-- ORDER BY เรียงผลลัพธ์
SELECT * FROM users ORDER BY age ASC;          -- น้อยไปมาก
SELECT * FROM users ORDER BY age DESC;         -- มากไปน้อย
SELECT * FROM users ORDER BY dept_id, age DESC; -- เรียงหลายคอลัมน์

-- DISTINCT กรองผลซ้ำออก
SELECT DISTINCT dept_id FROM users;

-- LIMIT + OFFSET ใช้ทำ pagination
-- หน้า 1: LIMIT 10 OFFSET 0
-- หน้า 2: LIMIT 10 OFFSET 10
-- หน้า 3: LIMIT 10 OFFSET 20
SELECT * FROM users
ORDER BY id
LIMIT 10 OFFSET 20;  -- แถวที่ 21-30`,lt=`--  ตาราง users          ตาราง departments
--  +---------+-------+   +----+-----------+
--  | id|name |dept_id|   | id | name      |
--  +---+-----+-------+   +----+-----------+
--  | 1 |Alice|  1    |   |  1 | Engineer  |
--  | 2 |Bob  |  2    |   |  2 | Marketing |
--  | 3 |Carol| NULL  |   |  3 | HR        |
--  +---+-----+-------+   +----+-----------+

-- INNER JOIN — เอาเฉพาะที่ match ทั้งสองฝั่ง
-- Carol (dept_id = NULL) และ HR (ไม่มีใคร) จะหายไป
SELECT u.name, d.name AS dept
FROM users u
INNER JOIN departments d ON u.dept_id = d.id;
-- ผล: Alice-Engineer, Bob-Marketing

-- LEFT JOIN — เอาทุกแถวจากตารางซ้าย (users)
-- Carol จะยังแสดง แต่ dept = NULL
SELECT u.name, d.name AS dept
FROM users u
LEFT JOIN departments d ON u.dept_id = d.id;
-- ผล: Alice-Engineer, Bob-Marketing, Carol-NULL

-- RIGHT JOIN — เอาทุกแถวจากตารางขวา (departments)
-- HR จะยังแสดง แต่ name = NULL
SELECT u.name, d.name AS dept
FROM users u
RIGHT JOIN departments d ON u.dept_id = d.id;
-- ผล: Alice-Engineer, Bob-Marketing, NULL-HR`,ut=`-- Aggregate Functions — คำนวณจากหลายแถว

SELECT COUNT(*)    FROM orders;  -- นับทุกแถว (รวม NULL)
SELECT COUNT(user_id) FROM orders;  -- นับเฉพาะที่ไม่ NULL
SELECT SUM(amount) FROM orders;  -- รวม
SELECT AVG(amount) FROM orders;  -- เฉลี่ย
SELECT MIN(amount) FROM orders;  -- น้อยสุด
SELECT MAX(amount) FROM orders;  -- มากสุด`,dt=`-- GROUP BY จัดกลุ่มแถวที่ค่าเท่ากันไว้ด้วยกัน
-- แล้ว aggregate แต่ละกลุ่ม

-- ยอดซื้อรวมของแต่ละ user
SELECT user_id,
       COUNT(*)     AS จำนวน_order,
       SUM(amount)  AS ยอดรวม,
       AVG(amount)  AS ค่าเฉลี่ย
FROM orders
GROUP BY user_id;

-- HAVING กรองกลุ่มหลัง GROUP BY
-- (ใช้ WHERE ไม่ได้เพราะ SUM ยังไม่มีก่อน group)
SELECT user_id, SUM(amount) AS total
FROM orders
GROUP BY user_id
HAVING SUM(amount) > 1000;  -- เอาเฉพาะคนที่ซื้อมากกว่า 1000

-- ⚠️ ลำดับการทำงาน SQL
-- FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`,ft=`-- Subquery คือ query ที่ซ้อนอยู่ใน query อื่น
-- ผลของ inner query จะถูกใช้โดย outer query

-- หา user ที่เคยสั่งของมากกว่า 1000
SELECT name FROM users
WHERE id IN (
  SELECT user_id FROM orders WHERE amount > 1000
);

-- EXISTS — เช็คว่ามีแถวไหนใน subquery ตรงเงื่อนไขไหม
-- เร็วกว่า IN เพราะหยุดทันทีที่เจอแถวแรก
SELECT name FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.user_id = u.id
);`,pt=`-- CTE (Common Table Expression) คือการตั้งชื่อ query ชั่วคราว
-- ช่วยให้ query ซับซ้อนอ่านง่ายขึ้น แทน subquery ซ้อนหลายชั้น

-- เขียนแบบ subquery ซ้อน — อ่านยาก
SELECT u.name, t.total
FROM users u
JOIN (SELECT user_id, SUM(amount) AS total
      FROM orders GROUP BY user_id
      HAVING SUM(amount) > 1000) t
ON u.id = t.user_id;

-- เขียนแบบ CTE — อ่านง่ายกว่า
WITH high_spenders AS (
  SELECT user_id, SUM(amount) AS total
  FROM orders
  GROUP BY user_id
  HAVING SUM(amount) > 1000
)
SELECT u.name, hs.total
FROM users u
JOIN high_spenders hs ON u.id = hs.user_id;`,mt=`-- Window Function คำนวณโดยไม่ยุบแถว
-- ต่างจาก GROUP BY ที่ทำให้แถวหายไป

-- GROUP BY ยุบเหลือแถวเดียวต่อกลุ่ม
SELECT dept_id, AVG(age) FROM users GROUP BY dept_id;
-- ผล: 3 แถว (ต่อ dept)

-- Window Function คำนวณแต่ยังคงทุกแถว
SELECT name, dept_id, age,
  AVG(age) OVER (PARTITION BY dept_id) AS avg_age_in_dept
FROM users;
-- ผล: ทุกแถว + คอลัมน์ avg_age_in_dept ของ dept ตัวเอง

-- ROW_NUMBER — ให้เลขลำดับในแต่ละ dept
SELECT name, dept_id,
  ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY age DESC) AS rank
FROM users;
-- ใช้หา top-N ต่อกลุ่ม เช่น คนอายุมากสุด 3 อันดับแรกในแต่ละ dept

-- Running Total — ยอดสะสม
SELECT created_at, amount,
  SUM(amount) OVER (ORDER BY created_at) AS ยอดสะสม
FROM orders;`,ht=`-- Index คือโครงสร้างข้อมูลพิเศษที่ทำให้ค้นหาเร็วขึ้น
-- เปรียบเหมือน index ของหนังสือ — ไม่ต้องอ่านทุกหน้าเพื่อหาเนื้อหา

-- ไม่มี index: DB ต้องอ่านทุกแถว (Full Table Scan)
SELECT * FROM users WHERE email = 'alice@test.com';
-- มี 1,000,000 แถว → อ่าน 1,000,000 แถว

-- สร้าง index บน email
CREATE INDEX idx_users_email ON users(email);

-- มี index: DB กระโดดไปยังแถวที่ตรงได้เลย
SELECT * FROM users WHERE email = 'alice@test.com';
-- 1,000,000 แถว → อ่านไม่กี่แถว (เร็วกว่ามาก)

-- Composite Index — หลายคอลัมน์
-- เหมาะเมื่อ query กรองด้วยหลายคอลัมน์พร้อมกัน
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- ตรวจสอบว่า query ใช้ index ไหม
EXPLAIN SELECT * FROM users WHERE email = 'alice@test.com';`,k=`-- Transaction คือการรวมหลาย query ให้เป็นหน่วยเดียว
-- ถ้า query ใดพลาด ทุกอย่างจะถูกยกเลิก ไม่มีสถานะค้างกลางๆ

-- ตัวอย่าง: โอนเงิน
-- ถ้าหักเงิน A แล้วระบบล่มก่อนเพิ่มเงิน B
-- โดยไม่มี transaction → เงินหายไป 500

BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;    -- สำเร็จทั้งคู่ → บันทึก

-- ถ้า error เกิดก่อน COMMIT
BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  -- ระบบล่ม หรือ error อะไรก็ตาม
ROLLBACK;  -- ยกเลิกทุกอย่าง → เงิน A ไม่หายไป`,gt=[{q:`WHERE กับ HAVING ต่างกันอย่างไร?`,a:`ทั้งคู่ใช้กรองข้อมูล แต่ทำงานคนละช่วง<br><br>
    <strong>WHERE</strong> — กรองแถวก่อน GROUP BY ทำงานกับค่าในแต่ละแถว<br>
    <strong>HAVING</strong> — กรองหลัง GROUP BY ทำงานกับค่า aggregate เช่น SUM, COUNT<br><br>
    ตัวอย่าง: หา dept ที่มีพนักงานเฉลี่ยอายุ > 30<br>
    <code>WHERE age > 30</code> → กรองพนักงานออกก่อน (ผิด — เปลี่ยนคนที่นับ)<br>
    <code>HAVING AVG(age) > 30</code> → กรอง dept ที่ค่าเฉลี่ย > 30 (ถูก)`},{q:`INNER JOIN กับ LEFT JOIN ต่างกันอย่างไร?`,a:`<strong>INNER JOIN</strong> — คืนเฉพาะแถวที่ match ทั้งสองตาราง แถวที่ไม่มีคู่จะหายไป<br><br>
    <strong>LEFT JOIN</strong> — คืนทุกแถวจากตารางซ้ายเสมอ ถ้าไม่มี match ฝั่งขวาจะเป็น NULL<br><br>
    เลือกใช้: ถ้าต้องการ "user ทุกคน แม้ยังไม่มี order" → LEFT JOIN<br>
    ถ้าต้องการเฉพาะ "user ที่มี order" → INNER JOIN`},{q:`Index คืออะไร ควรสร้างเมื่อไหร่?`,a:`Index คือโครงสร้างข้อมูลพิเศษ ช่วยให้ DB ค้นหาเร็วขึ้น ไม่ต้องอ่านทุกแถว<br><br>
    <strong>ควรสร้างเมื่อ:</strong><br>
    • คอลัมน์ที่ใช้ใน WHERE, JOIN, ORDER BY บ่อย<br>
    • Foreign key เช่น user_id ใน orders<br><br>
    <strong>ไม่ควรสร้างเมื่อ:</strong><br>
    • ตารางเล็ก — full scan เร็วกว่า overhead ของ index<br>
    • คอลัมน์ที่ INSERT/UPDATE บ่อย เพราะ index ต้อง rebuild ทุกครั้ง ทำให้เขียนช้าลง`},{q:`Window Function ต่างจาก GROUP BY อย่างไร?`,a:`<strong>GROUP BY</strong> — ยุบหลายแถวเป็นแถวเดียวต่อกลุ่ม ข้อมูลรายแถวหายไป<br>
    <strong>Window Function</strong> — คำนวณค่า aggregate แต่ยังคงทุกแถวไว้<br><br>
    ตัวอย่าง: อยากรู้ว่าแต่ละคนมีอายุเท่าไหร่ เทียบกับค่าเฉลี่ยของ dept ตัวเอง<br>
    GROUP BY ทำไม่ได้เพราะยุบแถวไปแล้ว — Window Function ทำได้`},{q:`Transaction คืออะไร ทำไมต้องใช้?`,a:`Transaction คือการรวมหลาย query ให้เป็นหน่วยเดียว — สำเร็จทั้งหมดหรือล้มเหลวทั้งหมด<br><br>
    ทำไมต้องใช้: ป้องกันสถานะข้อมูลค้างกลางๆ<br>
    เช่น โอนเงิน: หักเงิน A แล้วระบบล่มก่อนเพิ่มให้ B → เงินหายไป<br>
    ถ้าใช้ Transaction: ระบบล่มก่อน COMMIT → ROLLBACK อัตโนมัติ → เงิน A ไม่หาย<br><br>
    ACID คือคุณสมบัติที่ transaction ต้องมี:<br>
    Atomicity · Consistency · Isolation · Durability`},{q:`CTE กับ Subquery ต่างกันอย่างไร?`,a:`ผลลัพธ์เหมือนกัน แต่ CTE อ่านง่ายกว่ามาก<br><br>
    <strong>Subquery</strong> — ซ้อนอยู่ใน query ถ้ามีหลายชั้นอ่านยากมาก<br>
    <strong>CTE (WITH)</strong> — ตั้งชื่อ query ชั่วคราว อ่านเป็นขั้นตอน ใช้ชื่อซ้ำได้<br><br>
    แนะนำ: ใช้ CTE แทน subquery ซ้อนเกิน 1 ชั้น ทีมอ่านง่ายกว่ามาก`}];function _t(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Database`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`SQL`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`ทบทวน SQL ตั้งแต่พื้นฐานจนถึงขั้นสูง พร้อม pattern ที่เจอในการสัมภาษณ์งาน`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Schema ตัวอย่าง`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`ใช้ 3 ตารางนี้เป็น reference ตลอดหน้า — `,(0,f.jsx)(`code`,{children:`users`}),` เชื่อมกับ `,(0,f.jsx)(`code`,{children:`departments`}),` ผ่าน `,(0,f.jsx)(`code`,{children:`dept_id`}),` และเชื่อมกับ `,(0,f.jsx)(`code`,{children:`orders`}),` ผ่าน `,(0,f.jsx)(`code`,{children:`user_id`})]}),(0,f.jsx)(p,{code:ot,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`SELECT / WHERE`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[(0,f.jsx)(`code`,{children:`SELECT`}),` เลือกคอลัมน์, `,(0,f.jsx)(`code`,{children:`WHERE`}),` กรองแถวตามเงื่อนไข — ใช้ `,(0,f.jsx)(`code`,{children:`LIKE`}),` สำหรับ pattern matching และ `,(0,f.jsx)(`code`,{children:`IS NULL`}),` ตรวจค่าว่าง (ใช้ `,(0,f.jsx)(`code`,{children:`= NULL`}),` ไม่ได้)`]}),(0,f.jsx)(p,{code:st,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ORDER BY / LIMIT / DISTINCT`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[(0,f.jsx)(`code`,{children:`ORDER BY`}),` เรียงผลลัพธ์, `,(0,f.jsx)(`code`,{children:`LIMIT`}),` + `,(0,f.jsx)(`code`,{children:`OFFSET`}),` ใช้ทำ pagination — หน้าที่ n ใช้ `,(0,f.jsx)(`code`,{children:`OFFSET (n-1) * pageSize`})]}),(0,f.jsx)(p,{code:ct,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`JOIN`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`JOIN ใช้ดึงข้อมูลจากหลายตารางมารวมกัน โดยระบุเงื่อนไขการเชื่อม (`,(0,f.jsx)(`code`,{children:`ON`}),`) — ประเภทของ JOIN กำหนดว่าจะเอาแถวไหนบ้างเมื่อไม่มี match`]}),(0,f.jsx)(p,{code:lt,lang:`sql`}),(0,f.jsxs)(`table`,{className:`comparison-table`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`JOIN`}),(0,f.jsx)(`th`,{children:`คืนอะไร`})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`INNER JOIN`}),(0,f.jsx)(`td`,{children:`เฉพาะแถวที่ match ทั้งสองฝั่ง`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`LEFT JOIN`}),(0,f.jsx)(`td`,{children:`ทุกแถวจากซ้าย + match จากขวา (NULL ถ้าไม่มี)`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`RIGHT JOIN`}),(0,f.jsx)(`td`,{children:`ทุกแถวจากขวา + match จากซ้าย (NULL ถ้าไม่มี)`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`FULL OUTER JOIN`}),(0,f.jsx)(`td`,{children:`ทุกแถวทั้งสองฝั่ง (NULL ถ้าไม่มี match)`})]})]})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Aggregate Functions`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Aggregate function คำนวณค่าจากหลายแถวให้เป็นค่าเดียว เช่น รวม นับ หาค่าเฉลี่ย — มักใช้คู่กับ `,(0,f.jsx)(`code`,{children:`GROUP BY`})]}),(0,f.jsx)(p,{code:ut,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`GROUP BY / HAVING`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[(0,f.jsx)(`code`,{children:`GROUP BY`}),` จัดกลุ่มแถวที่ค่าคอลัมน์เหมือนกันไว้ด้วยกัน แล้ว aggregate แต่ละกลุ่ม — `,(0,f.jsx)(`code`,{children:`HAVING`}),` ใช้กรองกลุ่มหลัง GROUP BY (ต่างจาก WHERE ที่กรองก่อน)`]}),(0,f.jsx)(p,{code:dt,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Subquery`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Subquery คือ query ซ้อนใน query — ผลของ subquery ถูกใช้เป็น input ให้ outer query ใช้ใน WHERE, FROM, หรือ SELECT ก็ได้`}),(0,f.jsx)(p,{code:ft,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`CTE — WITH clause`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`CTE คือการตั้งชื่อให้ query ชั่วคราว ทำให้อ่านง่ายกว่า subquery ซ้อนหลายชั้น — ผลของ CTE จะถูก reuse ได้ใน query เดียวกัน`}),(0,f.jsx)(p,{code:pt,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Window Functions`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Window Function คำนวณค่าโดยพิจารณา "หน้าต่าง" ของแถวรอบข้าง (`,(0,f.jsx)(`code`,{children:`OVER`}),`) — ต่างจาก GROUP BY ตรงที่ไม่ยุบแถว ทุกแถวยังอยู่ครบ`]}),(0,f.jsx)(p,{code:mt,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Index`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Index คือโครงสร้างข้อมูลพิเศษที่สร้างขึ้นมาเพิ่มเติม ช่วยให้ DB กระโดดไปหาแถวที่ต้องการได้โดยตรง ไม่ต้องอ่านทุกแถว — แต่ทำให้ write ช้าลงเล็กน้อยเพราะต้อง update index ด้วย`}),(0,f.jsx)(p,{code:ht,lang:`sql`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Transaction & ACID`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Transaction รวม query หลายตัวให้เป็นหน่วยเดียว — ถ้า query ใดล้มเหลว ทุกอย่างถูกยกเลิก (ROLLBACK) ป้องกันข้อมูลค้างกลางๆ ระหว่างการทำงาน`}),(0,f.jsx)(p,{code:k,lang:`sql`}),(0,f.jsxs)(`table`,{className:`comparison-table`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`ACID`}),(0,f.jsx)(`th`,{children:`หมายถึง`})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Atomicity`}),(0,f.jsx)(`td`,{children:`ทำครบหรือไม่ทำเลย ไม่มีครึ่งๆ กลางๆ`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Consistency`}),(0,f.jsx)(`td`,{children:`ข้อมูลถูกต้องตาม constraint ก่อนและหลัง transaction`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Isolation`}),(0,f.jsx)(`td`,{children:`หลาย transaction รันพร้อมกันต้องไม่กระทบกัน`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Durability`}),(0,f.jsx)(`td`,{children:`COMMIT แล้วข้อมูลถาวร แม้ระบบล่ม`})]})]})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:gt})]})]})}var vt=`// Node.js คือ JavaScript runtime บน server
// ก่อนหน้านี้ JS รันได้แค่ใน browser
// Node.js ทำให้ JS รันบน server ได้

// ตัวอย่างง่ายสุด — server ที่ตอบ Hello World
const http = require('http')

const server = http.createServer((req, res) => {
  res.write('Hello World')
  res.end()
})

server.listen(3000)
// เปิด browser ไปที่ localhost:3000 → เห็น Hello World`,yt=`// ❌ Blocking — PHP / Python แบบดั้งเดิม
// แต่ละ request ต้องรอคิว

// request 1 เข้ามา → อ่านไฟล์ 100ms → ตอบกลับ
// request 2 ต้องรอ request 1 เสร็จก่อน
// request 3 ต้องรอ request 1, 2 เสร็จก่อน

// ถ้ามี 100 request พร้อมกัน → คนสุดท้ายรอ 10 วินาที

// Node.js แบบ Blocking (readFileSync) — มีปัญหาเหมือนกัน
const data = fs.readFileSync('bigfile.txt')  // หยุดรอ 500ms
console.log(data)
// ระหว่าง 500ms นั้น request อื่นเข้ามาก็ต้องค้างรอหมด`,bt=`// ✅ Non-blocking — Node.js
// ส่งงานไปทำข้างหลัง แล้วทำอย่างอื่นต่อได้เลย

console.log('1. รับ request มา')

fs.readFile('bigfile.txt', (err, data) => {
  // callback นี้จะรันเมื่ออ่านเสร็จ (500ms ต่อมา)
  console.log('3. อ่านไฟล์เสร็จแล้ว')
})

// Node.js ไม่รอ readFile — วิ่งต่อได้เลย
console.log('2. รับ request อื่นระหว่างรอได้เลย')

// Output:
// 1. รับ request มา
// 2. รับ request อื่นระหว่างรอได้เลย
// 3. อ่านไฟล์เสร็จแล้ว  ← มาทีหลัง`,xt=`// async/await — เขียนง่ายกว่า callback แต่ยัง non-blocking

// แบบ callback — อ่านยากเมื่อซ้อนหลายชั้น (Callback Hell)
fs.readFile('a.txt', (err, a) => {
  fs.readFile('b.txt', (err, b) => {
    fs.readFile('c.txt', (err, c) => {
      console.log(a, b, c)  // ซ้อน 3 ชั้น อ่านยาก
    })
  })
})

// async/await — อ่านง่ายเหมือน synchronous แต่ยัง non-blocking
async function readFiles() {
  const a = await fs.promises.readFile('a.txt')
  const b = await fs.promises.readFile('b.txt')
  const c = await fs.promises.readFile('c.txt')
  console.log(a, b, c)
}

// อ่านพร้อมกันทั้งหมด (เร็วกว่า)
async function readAllAtOnce() {
  const [a, b, c] = await Promise.all([
    fs.promises.readFile('a.txt'),
    fs.promises.readFile('b.txt'),
    fs.promises.readFile('c.txt'),
  ])
  console.log(a, b, c)
}`,St=`// Event Loop ทำงานยังไง

// Node.js มี thread เดียว แต่มี "คิว" ไว้เก็บงานที่รอ

// สมมติมี 3 request เข้ามาพร้อมกัน

// request A: ต้องอ่านไฟล์ใช้เวลา 300ms
// request B: ต้องอ่านไฟล์ใช้เวลา 100ms
// request C: คำนวณเลข ไม่ต้อง I/O

// Event Loop ทำงาน:
// t=0ms   รับ A → ส่งให้ OS อ่านไฟล์ → ไปรับ B
// t=0ms   รับ B → ส่งให้ OS อ่านไฟล์ → ไปรับ C
// t=0ms   รับ C → คำนวณเสร็จ → ตอบกลับ C ทันที
// t=100ms OS อ่านไฟล์ B เสร็จ → ตอบกลับ B
// t=300ms OS อ่านไฟล์ A เสร็จ → ตอบกลับ A

// รวมเวลา: 300ms (ไม่ใช่ 300+100 = 400ms)
// เพราะ A และ B อ่านพร้อมกัน ไม่ได้รอคิว

// เปรียบเหมือนพนักงานเสิร์ฟ 1 คน
// รับออเดอร์โต๊ะ 1 → ส่งครัว → รับออเดอร์โต๊ะ 2 → ส่งครัว
// ไม่ได้ยืนรอครัวทำอาหารโต๊ะ 1 เสร็จก่อน`,Ct=`// Express — framework ยอดนิยมสำหรับทำ API

import express from 'express'
const app = express()

// Middleware — แปลง body จาก JSON string เป็น JS object
app.use(express.json())

// Route พื้นฐาน
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

// Route Parameter — รับค่าจาก URL
app.get('/users/:id', (req, res) => {
  const { id } = req.params    // /users/42 → id = '42'
  res.json({ userId: id })
})

// Query String — รับค่าจาก ?key=value
app.get('/users', (req, res) => {
  const { page = 1, limit = 10 } = req.query  // /users?page=2&limit=5
  res.json({ page, limit })
})

// POST — รับข้อมูลจาก body
app.post('/users', (req, res) => {
  const { name, email } = req.body
  res.status(201).json({ id: 1, name, email })
})

app.listen(3000, () => console.log('Server running on port 3000'))`,wt=`// REST API — มาตรฐานการออกแบบ API

// ใช้ HTTP Method บอกว่าจะทำอะไร
// GET    → ดึงข้อมูล  (อ่าน)
// POST   → สร้างใหม่  (เพิ่ม)
// PUT    → แก้ทั้งหมด (แทนที่)
// PATCH  → แก้บางส่วน (อัปเดต)
// DELETE → ลบ

// ตัวอย่าง User API
GET    /users          → ดึง user ทั้งหมด
GET    /users/:id      → ดึง user คนเดียว
POST   /users          → สร้าง user ใหม่
PUT    /users/:id      → แก้ไข user ทั้งหมด
PATCH  /users/:id      → แก้ไข user บางฟิลด์
DELETE /users/:id      → ลบ user

// HTTP Status Code ที่ใช้บ่อย
200 OK           → สำเร็จ
201 Created      → สร้างสำเร็จ
400 Bad Request  → ข้อมูลที่ส่งมาผิด
401 Unauthorized → ยังไม่ได้ login
403 Forbidden    → ไม่มีสิทธิ์
404 Not Found    → ไม่เจอข้อมูล
500 Server Error → server พัง`,Tt=`// Middleware — function ที่ทำงานระหว่าง request → response

// Middleware คือ function ที่รับ (req, res, next)
// next() = ส่งต่อให้ middleware ถัดไป

// ตัวอย่าง middleware log
function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`)
  next()   // ถ้าไม่เรียก next() request จะค้างตรงนี้
}

// Middleware ตรวจ token
function authMiddleware(req, res, next) {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: 'No token' })
    // ไม่เรียก next() → หยุดตรงนี้เลย
  }

  req.user = { id: 1, name: 'Alice' }  // แนบข้อมูลไปกับ request
  next()
}

// ใช้ middleware
app.use(logger)                         // ทุก route ใช้

app.get('/profile', authMiddleware, (req, res) => {
  res.json(req.user)                    // เฉพาะ route นี้
})`,Et=`// Router — แยก route ออกเป็นไฟล์ย่อย

// routes/users.js
import { Router } from 'express'
const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router

// app.js — นำ router มาใช้
import userRouter from './routes/users.js'
import orderRouter from './routes/orders.js'

app.use('/users', userRouter)    // /users, /users/:id
app.use('/orders', orderRouter)  // /orders, /orders/:id`,Dt=`// Error Handling

// ใช้ try/catch กับ async route
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user)
  } catch (err) {
    next(err)   // ส่ง error ไปให้ error handler
  }
})

// Error Handler Middleware — ต้องมี 4 parameter (err, req, res, next)
// Express รู้ว่านี่คือ error handler จาก parameter 4 ตัว
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  })
})`,A=`// Environment Variables — ค่าที่ต่างกันในแต่ละ env

// .env (ไม่ commit ขึ้น git!)
PORT=3000
DB_URL=postgres://localhost:5432/myapp
JWT_SECRET=supersecretkey
NODE_ENV=development

// ใช้ใน code
import 'dotenv/config'   // โหลด .env เข้า process.env

const port = process.env.PORT || 3000
const dbUrl = process.env.DB_URL
const secret = process.env.JWT_SECRET

// ทำไมต้องใช้ env var แทนใส่ตรงๆ ใน code
// ✅ dev ต่อ DB ทดสอบ, prod ต่อ DB จริง — เปลี่ยนแค่ .env
// ✅ password ไม่ขึ้น GitHub
// ✅ deploy บน server ต่างๆ ใช้ค่าต่างกันได้`,Ot=`// JWT Authentication — ระบบ login ที่นิยมที่สุด

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// Login — ตรวจ password แล้วออก token
app.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(401).json({ error: 'Invalid credentials' })

  // bcrypt เปรียบ password กับที่ hash เก็บไว้ใน DB
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

  // สร้าง token อายุ 7 วัน
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )

  res.json({ token })
})

// Middleware ตรวจ token ทุก request
function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'No token' })

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload   // { userId, email }
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// Route ที่ต้อง login ก่อน
app.get('/me', authenticate, (req, res) => {
  res.json(req.user)
})`,kt=`// 1. ติดตั้ง
// npm install prisma @prisma/client
// npx prisma init   ← สร้าง prisma/schema.prisma + .env

// prisma/schema.prisma — กำหนดโครงสร้าง DB
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      String   @default("user")
  createdAt DateTime @default(now())
  posts     Post[]   // relation — User มีหลาย Post
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

// 2. สร้าง DB และ generate client
// npx prisma migrate dev --name init   ← สร้างตาราง
// npx prisma generate                  ← generate Prisma Client`,At=`// prisma.js — สร้าง instance เดียวใช้ทั้งโปรเจกต์
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

// CREATE
const user = await prisma.user.create({
  data: {
    name:     'Alice',
    email:    'alice@example.com',
    password: hashedPassword,
  }
})

// READ — หาหลายคน
const users = await prisma.user.findMany({
  where:   { role: 'admin' },
  orderBy: { createdAt: 'desc' },
  select:  { id: true, name: true, email: true },  // ไม่ดึง password
})

// READ — หาคนเดียว
const user = await prisma.user.findUnique({
  where:   { id: 42 },
  include: { posts: true },   // JOIN กับ posts อัตโนมัติ
})

// UPDATE
const updated = await prisma.user.update({
  where: { id: 42 },
  data:  { name: 'Alice Smith' },
})

// DELETE
await prisma.user.delete({
  where: { id: 42 },
})

// นับ
const total = await prisma.user.count({
  where: { role: 'user' }
})`,jt=`// Helmet — ตั้งค่า HTTP Security Headers อัตโนมัติ
// npm install helmet

import helmet from 'helmet'

// ✅ บรรทัดเดียว ป้องกันช่องโหว่ได้หลายอย่าง
app.use(helmet())

// Helmet เพิ่ม header เหล่านี้ให้อัตโนมัติ:

// X-Content-Type-Options: nosniff
//   → ป้องกัน browser เดา content-type ผิด (ป้องกัน XSS ผ่าน file upload)

// X-Frame-Options: DENY
//   → ป้องกัน Clickjacking — ไม่ให้คนอื่น embed เว็บเราใน iframe

// Strict-Transport-Security
//   → บังคับใช้ HTTPS เท่านั้น

// Content-Security-Policy
//   → กำหนดว่าโหลด script/style ได้จาก domain ไหนบ้าง

// ✅ ลำดับการใช้ — Helmet ต้องอยู่บนสุด
app.use(helmet())
app.use(cors({ ... }))
app.use(express.json())
// ... routes`,Mt=`// CORS — อนุญาตให้ frontend domain อื่นเรียก API ได้
// ถ้าไม่ตั้ง CORS browser จะบล็อก request จาก frontend ทันที

import cors from 'cors'

// ❌ อนุญาตทุก origin — ไม่ปลอดภัยสำหรับ production
app.use(cors())

// ✅ ระบุ origin ที่อนุญาต
app.use(cors({
  origin: [
    'http://localhost:5173',        // dev
    'https://myapp.com',            // production
  ],
  methods:     ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,                // อนุญาต cookie ข้าม domain
}))

// ทำไม browser ถึงบล็อก?
// Browser มีกฎ Same-Origin Policy — ป้องกัน website อื่น
// เรียก API ของเราโดยไม่ได้รับอนุญาต
// CORS คือการบอก browser ว่า "origin นี้ไว้ใจได้"`,Nt=`// Input Validation ด้วย Zod — ตรวจข้อมูลก่อนเข้า DB
import { z } from 'zod'

// กำหนด schema ว่าข้อมูลต้องเป็นแบบไหน
const createUserSchema = z.object({
  name:     z.string().min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
  email:    z.string().email('รูปแบบ email ไม่ถูกต้อง'),
  password: z.string().min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'),
  age:      z.number().min(18).optional(),
})

// ใช้ใน route
app.post('/users', async (req, res, next) => {
  try {
    // ถ้าข้อมูลผิด parse จะ throw error ทันที
    const data = createUserSchema.parse(req.body)
    // data ผ่านมาแล้วมั่นใจว่า type ถูกต้องทุก field

    const user = await prisma.user.create({ data })
    res.status(201).json(user)
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors })
      // [{ path: ['email'], message: 'รูปแบบ email ไม่ถูกต้อง' }]
    }
    next(err)
  }
})

// Middleware แยกออกมาใช้ซ้ำ
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors })
    }
    req.body = result.data   // ข้อมูลที่ผ่าน validate แล้ว
    next()
  }
}

app.post('/users', validate(createUserSchema), createUser)
app.patch('/users/:id', validate(updateUserSchema), updateUser)`,Pt=`// Logging — บันทึก request และ error
import morgan from 'morgan'
import winston from 'winston'

// Morgan — log HTTP request อัตโนมัติ
app.use(morgan('dev'))
// output: GET /users 200 15ms - 2kb
// output: POST /login 401 8ms - 45b

// Winston — log ภายใน app (error, info, debug)
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),           // แสดงใน terminal
    new winston.transports.File({               // บันทึกลงไฟล์
      filename: 'logs/error.log',
      level: 'error'
    }),
  ]
})

// ใช้แทน console.log ใน production
logger.info('Server started on port 3000')
logger.error('DB connection failed', { error: err.message })

// Error handler — log error ทุกอันก่อนส่ง response
app.use((err, req, res, next) => {
  logger.error(err.message, {
    method: req.method,
    url:    req.url,
    stack:  err.stack,
  })
  res.status(500).json({ error: 'Internal Server Error' })
})`,Ft=`// Authentication — ตรวจว่าคุณเป็นใคร
// Authorization  — ตรวจว่าคุณทำอะไรได้บ้าง

// 1. Authentication Middleware — ตรวจ token ว่าถูกต้องไหม
function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'กรุณา login ก่อน' })

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    // req.user = { id: 42, name: 'สมชาย', role: 'editor' }
    next()
  } catch {
    res.status(401).json({ error: 'Token ไม่ถูกต้อง' })
  }
}

// 2. Authorization Middleware — ตรวจว่า role มีสิทธิ์ไหม
function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'ไม่มีสิทธิ์ทำสิ่งนี้' })
    }
    next()
  }
}

// ใช้งาน — ลำดับสำคัญ: authenticate ก่อนเสมอ แล้วค่อย authorize
app.delete('/users/:id',
  authenticate,              // 1. รู้ก่อนว่าใคร
  authorize('admin'),        // 2. เช็คว่า admin ไหม
  deleteUser                 // 3. ถึงจะทำได้
)

app.patch('/posts/:id',
  authenticate,
  authorize('admin', 'editor'),   // admin หรือ editor ทำได้
  updatePost
)`,It=`// Error ที่ได้ต่างกัน

// 401 Unauthorized — ไม่รู้ว่าเป็นใคร (Authentication ล้มเหลว)
// เกิดเมื่อ: ไม่มี token, token หมดอายุ, token ผิด
res.status(401).json({ error: 'กรุณา login ก่อน' })

// 403 Forbidden — รู้ว่าเป็นใคร แต่ทำไม่ได้ (Authorization ล้มเหลว)
// เกิดเมื่อ: login แล้ว แต่ไม่มีสิทธิ์
res.status(403).json({ error: 'ไม่มีสิทธิ์ทำสิ่งนี้' })

// ตัวอย่าง:
// user ทั่วไป พยายามลบ post คนอื่น
// → authenticate ผ่าน (รู้ว่าเป็นใคร)
// → authorize ไม่ผ่าน (role ไม่ใช่ admin)
// → 403 Forbidden`,Lt=`// Caching ด้วย Redis — อย่าดึงข้อมูลเดิมซ้ำทุก request
import Redis from 'ioredis'
const redis = new Redis(process.env.REDIS_URL)

// ❌ ไม่มี cache — ทุก request ไป query DB
app.get('/products', async (req, res) => {
  const products = await prisma.product.findMany()  // ~200ms ทุกครั้ง
  res.json(products)
})

// ✅ มี cache — ไปถึง DB เฉพาะครั้งแรก
app.get('/products', async (req, res, next) => {
  try {
    // 1. เช็ค cache ก่อน
    const cached = await redis.get('products')
    if (cached) return res.json(JSON.parse(cached))   // ~1ms

    // 2. ถ้าไม่มีใน cache ถึงจะไป DB
    const products = await prisma.product.findMany()  // ~200ms

    // 3. เก็บใน cache ไว้ 60 วินาที
    await redis.setex('products', 60, JSON.stringify(products))

    res.json(products)
  } catch (err) {
    next(err)
  }
})

// ถ้าแก้ข้อมูล ต้องล้าง cache ด้วย
app.post('/products', async (req, res, next) => {
  try {
    const product = await prisma.product.create({ data: req.body })
    await redis.del('products')   // ล้าง cache เพื่อให้ครั้งต่อไปดึงใหม่
    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
})`,Rt=`// Rate Limiting — จำกัดจำนวน request ต่อ IP
import rateLimit from 'express-rate-limit'

// กฎทั่วไป — ทุก route
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // ช่วงเวลา 15 นาที
  max:      100,               // รับได้สูงสุด 100 req ต่อ IP
  message:  { error: 'Too many requests, please try again later' }
})

// กฎเข้มงวดสำหรับ login — ป้องกัน brute force
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max:      5,                 // login ผิดได้แค่ 5 ครั้งใน 15 นาที
  message:  { error: 'Too many login attempts' }
})

// ใช้งาน
app.use('/api', generalLimiter)          // ทุก route ใน /api
app.post('/login', loginLimiter, login)  // เข้มงวดเฉพาะ login

// ถ้าเกิน limit — ได้รับ 429 Too Many Requests กลับมา`,zt=`// db.js — ตั้งค่า Pool ครั้งเดียวตอนเริ่ม server
import pg from 'pg'

const db = new pg.Pool({
  connectionString: process.env.DB_URL,
  max: 10,              // สูงสุด 10 connection พร้อมกัน
  idleTimeoutMillis: 30000,
})

export default db

// ทุกไฟล์ที่ต้องการ query แค่ import db มาใช้
// ไม่ต้องเปิด/ปิด connection เอง Pool จัดการให้`,Bt=`// controllers/productController.js — raw SQL (pg)
import db from '../db.js'

export async function getProducts(req, res, next) {
  try {
    const page   = parseInt(req.query.page)  || 1
    const limit  = parseInt(req.query.limit) || 10
    const offset = (page - 1) * limit

    // ดึงข้อมูลและนับพร้อมกัน
    const [products, countResult] = await Promise.all([
      db.query(
        \`SELECT * FROM products
         ORDER BY created_at DESC
         LIMIT $1 OFFSET $2\`,
        [limit, offset]
      ),
      db.query('SELECT COUNT(*) FROM products'),
    ])

    const total = parseInt(countResult.rows[0].count)

    res.json({
      data:       products.rows,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (err) {
    next(err)
  }
}`,Vt=`// controllers/productController.js — Prisma
import { prisma } from '../prisma.js'

export async function getProducts(req, res, next) {
  try {
    const page  = parseInt(req.query.page)  || 1
    const limit = parseInt(req.query.limit) || 10
    const skip  = (page - 1) * limit

    // ดึงข้อมูลและนับพร้อมกัน
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        skip,
        take:    limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count(),
    ])

    res.json({
      data: products,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (err) {
    next(err)
  }
}

// prisma.js — สร้างครั้งเดียว (Prisma มี pool built-in)
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()`,Ht=`// ❌ รอทีละอัน — 330ms
const user    = await db.query('SELECT * FROM users WHERE id=$1', [id])
const orders  = await db.query('SELECT * FROM orders WHERE user_id=$1', [id])
const reviews = await db.query('SELECT * FROM reviews WHERE user_id=$1', [id])

// ✅ ทำพร้อมกัน — 150ms (แค่อันที่นานสุด)
const [userRes, ordersRes, reviewsRes] = await Promise.all([
  db.query('SELECT * FROM users WHERE id=$1', [id]),
  db.query('SELECT * FROM orders WHERE user_id=$1', [id]),
  db.query('SELECT * FROM reviews WHERE user_id=$1', [id]),
])

const user    = userRes.rows[0]
const orders  = ordersRes.rows
const reviews = reviewsRes.rows

// Prisma version
const [user, orders, reviews] = await Promise.all([
  prisma.user.findUnique({ where: { id } }),
  prisma.order.findMany({ where: { userId: id } }),
  prisma.review.findMany({ where: { userId: id } }),
])`,Ut=[{q:`Node.js คืออะไร ต่างจาก Browser JavaScript ยังไง?`,a:`Node.js คือ JavaScript runtime บน server — ทำให้ JS รันนอก browser ได้<br><br>
    <strong>Browser JS:</strong> เข้าถึง DOM, window, localStorage ได้ แต่เข้า filesystem ไม่ได้<br>
    <strong>Node.js:</strong> เข้าถึง filesystem, network, OS ได้ แต่ไม่มี DOM<br><br>
    ทั้งคู่ใช้ภาษา JavaScript เหมือนกัน แค่ environment ต่างกัน`},{q:`Event Loop คืออะไร ทำไม Node.js ถึงรับ request หลายอันได้ทั้งที่ single thread?`,a:`Node.js รัน thread เดียว แต่งาน I/O (อ่านไฟล์, query DB, เรียก API) จะถูกส่งไปทำข้างหลัง<br><br>
    ระหว่างรอ Node.js ไม่ได้ค้างอยู่ — Event Loop วนรับ request ใหม่ต่อไปเรื่อยๆ<br>
    พอ I/O เสร็จ Event Loop เอา callback มารันต่อ<br><br>
    เหมือนพนักงานคนเดียวรับ order หลายโต๊ะ ส่ง order ให้ครัวแล้วไปรับโต๊ะถัดไปได้เลย ไม่ต้องยืนรอครัว`},{q:`Middleware คืออะไร?`,a:`Middleware คือ function ที่นั่งอยู่ระหว่าง request กับ response<br><br>
    ทุก request ที่เข้ามาจะผ่าน middleware ก่อนถึง route handler<br><br>
    ใช้ทำ: log, ตรวจ token, validate input, จัดการ error<br><br>
    สำคัญ: ต้องเรียก <code>next()</code> เพื่อส่งต่อ ถ้าไม่เรียก request จะค้างตรงนั้น`},{q:`JWT คืออะไร ทำงานยังไง?`,a:`JWT (JSON Web Token) คือ token ที่ใช้ยืนยันตัวตน<br><br>
    <strong>flow:</strong><br>
    1. User login → server ตรวจ password → ออก JWT token ให้<br>
    2. User เก็บ token ไว้ (localStorage หรือ cookie)<br>
    3. ทุก request ส่ง token มาใน header<br>
    4. Server ตรวจ token → รู้ว่าใครส่งมา<br><br>
    Server ไม่ต้องเก็บ session — token มีข้อมูลครบในตัวเอง`},{q:`ทำไมต้อง hash password ก่อนเก็บลง DB?`,a:`ถ้าเก็บ password ตรงๆ และ DB โดน hack → password ทุกคนหลุดทันที<br><br>
    bcrypt hash password เป็น string ที่ย้อนกลับไม่ได้<br>
    ตอนล็อกอิน bcrypt เปรียบ password ที่พิมพ์กับ hash ที่เก็บไว้<br><br>
    แม้ DB โดน hack — ได้แค่ hash ไม่สามารถรู้ password จริงได้`},{q:`Authentication กับ Authorization ต่างกันอย่างไร?`,a:`<strong>Authentication</strong> — ตรวจว่าคุณเป็นใคร เช่น login, ตรวจ JWT token<br>
    <strong>Authorization</strong> — ตรวจว่าคุณมีสิทธิ์ทำสิ่งนั้นไหม เช่น role admin เท่านั้นลบได้<br><br>
    ต้องผ่าน Authentication ก่อนเสมอ เพราะถ้าไม่รู้ว่าเป็นใคร จะตรวจสิทธิ์ไม่ได้<br><br>
    <strong>Error ที่ได้:</strong><br>
    401 Unauthorized → Authentication ล้มเหลว (ยังไม่ได้ login)<br>
    403 Forbidden → Authorization ล้มเหลว (login แล้วแต่ไม่มีสิทธิ์)`},{q:`PUT กับ PATCH ต่างกันยังไง?`,a:`<strong>PUT</strong> — แทนที่ทั้ง resource ต้องส่งข้อมูลทุก field มา<br>
    ถ้าไม่ส่ง field ไหน field นั้นจะถูกลบ/reset<br><br>
    <strong>PATCH</strong> — อัปเดตแค่บางส่วน ส่งมาแค่ field ที่อยากเปลี่ยน<br>
    field ที่ไม่ส่งมาจะยังคงค่าเดิม<br><br>
    ในทางปฏิบัติส่วนใหญ่ใช้ PATCH เพราะ flexible กว่า`}];function Wt(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Backend`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`Node.js Backend`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`ทบทวน Node.js และ Express สำหรับทำ REST API พร้อม pattern ที่ใช้จริงในงาน`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Node.js คืออะไร`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Node.js คือ JavaScript runtime ที่ทำให้ JS รันบน server ได้ ก่อนหน้านี้ JS รันได้แค่ใน browser เท่านั้น`}),(0,f.jsx)(p,{code:vt,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Event Loop — Non-blocking I/O`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Node.js รัน thread เดียว แต่รับ request พร้อมกันได้เยอะ เพราะงาน I/O (อ่านไฟล์, query DB, เรียก API) จะถูกส่งให้ OS ทำแทน Node.js ไม่รอ — วิ่งรับ request ถัดไปได้เลย`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`ปัญหาของ Blocking`}),(0,f.jsx)(p,{code:yt,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Non-blocking แก้ยังไง`}),(0,f.jsx)(p,{code:bt,lang:`javascript`}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`💡`}),(0,f.jsxs)(`span`,{children:[`สังเกตว่า output ไม่ได้เรียงตามลำดับที่เขียน — เพราะ Node.js ไม่รอ `,(0,f.jsx)(`code`,{children:`readFile`}),` แต่วิ่งต่อไปก่อน แล้วค่อยกลับมารัน callback ทีหลังเมื่อเสร็จ`]})]}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`async/await — เขียนง่ายขึ้น`}),(0,f.jsx)(p,{code:xt,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Event Loop ภาพรวม`}),(0,f.jsx)(p,{code:St,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Express — ทำ API`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Express คือ framework ยอดนิยมของ Node.js สำหรับทำ web server และ API ให้โครงสร้าง routing และ middleware ที่ใช้งานง่าย`}),(0,f.jsx)(p,{code:Ct,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`REST API Design`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`REST คือมาตรฐานการออกแบบ API โดยใช้ HTTP Method บอกว่าจะทำอะไร และ URL บอกว่าทำกับอะไร — ทำให้ API อ่านง่ายและคาดเดาได้`}),(0,f.jsx)(p,{code:wt,lang:`bash`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Middleware`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Middleware คือ function ที่ทำงานระหว่าง request เข้ามาและ response ออกไป ทุก request ผ่าน middleware ตามลำดับก่อนถึง route handler`}),(0,f.jsx)(p,{code:Tt,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Prisma ORM`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Prisma คือ ORM ยอดนิยมของ Node.js — แทน raw SQL ด้วย TypeScript-friendly API มี schema ที่อ่านง่าย, auto-generate migration, และ type-safe query`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Setup & Schema`}),(0,f.jsx)(p,{code:kt,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`CRUD Operations`}),(0,f.jsx)(p,{code:At,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Helmet — Security Headers`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Helmet ตั้งค่า HTTP header ที่เกี่ยวกับความปลอดภัยให้อัตโนมัติ ป้องกัน XSS, Clickjacking, และช่องโหว่พื้นฐานด้วยบรรทัดเดียว`}),(0,f.jsx)(p,{code:jt,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`CORS`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`CORS คือการบอก browser ว่า frontend domain ไหนเรียก API นี้ได้บ้าง ถ้าไม่ตั้งค่า browser จะบล็อก request จาก frontend ทันที แม้ API ทำงานได้ปกติ`}),(0,f.jsx)(p,{code:Mt,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Input Validation — Zod`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`ตรวจข้อมูลที่ user ส่งมาก่อนนำเข้า DB เสมอ — ป้องกันข้อมูลผิด type, ค่าว่าง, หรือ format ผิด Zod เป็น library ยอดนิยมที่ตรวจ type และ validate พร้อมกันในขั้นตอนเดียว`}),(0,f.jsx)(p,{code:Nt,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Logging — Morgan & Winston`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Morgan บันทึก HTTP request ทุกอันอัตโนมัติ — Winston บันทึก event ภายใน app ใช้ทั้งคู่เพื่อ debug และ monitor ปัญหาใน production โดยไม่ต้องเดา`}),(0,f.jsx)(p,{code:Pt,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Router — แยกไฟล์`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`เมื่อโปรเจกต์ใหญ่ขึ้น ควรแยก route ออกเป็นไฟล์ย่อยตาม resource ทำให้ code อ่านง่ายและจัดการได้ง่ายขึ้น`}),(0,f.jsx)(p,{code:Et,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Error Handling`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`ทุก async route ต้องมี try/catch และส่ง error ไปให้ error handler middleware Express มี error handler พิเศษที่รับ 4 parameter (err, req, res, next)`}),(0,f.jsx)(p,{code:Dt,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Environment Variables`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`ค่าที่ต่างกันในแต่ละ environment เช่น DB URL, API key, password ต้องเก็บใน .env ไม่ใส่ตรงๆ ใน code และไม่ commit ขึ้น Git`}),(0,f.jsx)(p,{code:A,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`JWT Authentication`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`JWT คือ token ที่ใช้ยืนยันตัวตน — server ออก token ให้หลัง login client ส่ง token มาทุก request แทนการ login ซ้ำ`}),(0,f.jsx)(p,{code:Ot,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Authentication vs Authorization`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Authentication คือ `,(0,f.jsx)(`strong`,{children:`ตรวจว่าคุณเป็นใคร`}),` (login, ตรวจ token) — Authorization คือ `,(0,f.jsx)(`strong`,{children:`ตรวจว่าคุณทำอะไรได้บ้าง`}),` (role, permission) ต้องผ่าน Authentication ก่อนเสมอ ถึงจะทำ Authorization ได้`]}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`💡`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`strong`,{children:`จำง่าย:`}),` Authentication = ยืนยันตัวตน (เป็นใคร) \xA0·\xA0 Authorization = ยืนยันสิทธิ์ (ทำได้ไหม)`]})]}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Middleware แยกหน้าที่ชัดเจน`}),(0,f.jsx)(p,{code:Ft,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Error ที่ได้กลับมาต่างกัน`}),(0,f.jsx)(p,{code:It,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Performance — ทำให้ Backend เร็วขึ้น`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`ปัญหาหลักของ backend ช้าคือ query DB ซ้ำ, รองาน I/O ทีละอัน, และส่งข้อมูลเยอะเกินจำเป็น — แก้ได้ด้วย Connection Pool, Pagination, และ Promise.all`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Caching — อย่าดึงข้อมูลเดิมซ้ำทุก request`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`เก็บผลลัพธ์ที่ดึงมาแล้วไว้ใน Redis — request ถัดไปอ่านจาก cache แทน DB เร็วกว่าเกือบ 200 เท่า (~1ms vs ~200ms) ถ้าแก้ข้อมูลต้องล้าง cache ด้วยเสมอ`}),(0,f.jsx)(p,{code:Lt,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Rate Limiting — จำกัด request ต่อ IP`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`ป้องกัน server ล่มเมื่อมีคนยิง request เยอะๆ และป้องกัน brute force login ใช้ express-rate-limit ตั้งค่าได้แยกตาม route`}),(0,f.jsx)(p,{code:Rt,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Connection Pool — ตั้งค่าครั้งเดียว ใช้ซ้ำได้เลย`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Pool คือกลุ่ม connection ที่เปิดรอไว้ล่วงหน้า ทุก query หยิบมาใช้แล้วคืนกลับ ไม่ต้องเปิด/ปิดทุก request — Prisma มี pool built-in อยู่แล้ว ไม่ต้องตั้งค่าเพิ่ม`}),(0,f.jsx)(p,{code:zt,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Pagination — ส่งข้อมูลทีละหน้า`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`ไม่ควรดึงข้อมูลทั้งหมดในครั้งเดียว ใช้ LIMIT/OFFSET (raw SQL) หรือ skip/take (Prisma) เพื่อส่งแค่ข้อมูลที่ user ต้องการในหน้านั้น`}),(0,f.jsx)(`div`,{className:`sub-section-title`,style:{fontSize:`12px`},children:`Raw SQL (pg Pool)`}),(0,f.jsx)(p,{code:Bt,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,style:{fontSize:`12px`},children:`Prisma`}),(0,f.jsx)(p,{code:Vt,lang:`javascript`}),(0,f.jsx)(`div`,{className:`sub-section-title`,children:`Promise.all — ทำงานพร้อมกัน`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`ถ้า query หลายอันไม่ได้ depend กัน ให้รันพร้อมกันด้วย Promise.all เวลารวมเท่ากับอันที่นานที่สุด ไม่ใช่ผลรวมทั้งหมด`}),(0,f.jsx)(p,{code:Ht,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:Ut})]})]})}var Gt=`// Basic Types — ประเภทพื้นฐาน

// Primitive Types
let name: string = 'Sirapob'
let age: number = 25
let isAdmin: boolean = true

// Array
let tags: string[] = ['React', 'TypeScript']
let scores: Array<number> = [90, 85, 100]

// Tuple — array ที่กำหนดจำนวนและชนิดตายตัว
let pair: [string, number] = ['age', 25]

// Any — ปิด type checking (หลีกเลี่ยงถ้าทำได้)
let anything: any = 'hello'
anything = 42       // ไม่ error แต่เสียประโยชน์ TS

// Unknown — ปลอดภัยกว่า any ต้อง check type ก่อนใช้
let value: unknown = 'hello'
if (typeof value === 'string') {
  console.log(value.toUpperCase()) // ✅ ต้อง check ก่อน
}

// Never — function ที่ไม่มีวัน return
function throwError(msg: string): never {
  throw new Error(msg)
}

// Void — function ที่ไม่ return ค่า
function log(msg: string): void {
  console.log(msg)
}`,Kt=`// Type vs Interface — ต่างกันยังไง?

// ==================== Interface ====================
interface User {
  id: number
  name: string
  email: string
  age?: number     // optional property
}

// extends — รับ property ทั้งหมดจาก User มา
interface Admin extends User {
  role: 'admin' | 'superadmin'
}
// Admin มี: id, name, email, age?, role

// ==================== Type ====================
// flexible กว่า — ใช้ได้กับทุกอย่าง
type ID = string | number       // Union (interface ทำไม่ได้)
type Status = 'on' | 'off'     // String Literal Union

// & (Intersection) — รับ property ทั้งหมดจากทุก type
type AdminUser = User & {
  role: 'admin' | 'superadmin'
}
// AdminUser มี: id, name, email, age?, role

// ==================== Declaration Merging ====================
// Interface พิเศษตรงที่ประกาศชื่อเดิมซ้ำได้ — TS จะ merge ให้อัตโนมัติ

interface Car {
  brand: string
}

interface Car {           // ประกาศซ้ำ — ไม่ error!
  color: string
}

// ผลลัพธ์: Car ได้ทั้ง brand และ color
const myCar: Car = {
  brand: 'Toyota',
  color: 'red'            // ✅ ต้องใส่ทั้งคู่
}

// ใช้จริงเมื่อไหร่? — extend library type ที่เราแก้ไม่ได้
// เช่น เพิ่ม property ให้ Window ของ browser
interface Window {
  analytics: { track: (event: string) => void }
}
// ตอนนี้ window.analytics ใช้ได้เลย ไม่มี TS error

// ❌ Type ทำแบบนี้ไม่ได้
type Car = { brand: string }
type Car = { color: string }  // Error: Duplicate identifier 'Car'`,qt=`// Union Type — ค่าเป็นได้หลาย type
type StringOrNumber = string | number
type Status = 'active' | 'inactive' | 'pending'  // String Literal Union

function formatId(id: string | number) {
  if (typeof id === 'string') {
    return id.toUpperCase()
  }
  return id.toFixed(0)
}

// Intersection Type — รวมทุก property เข้าด้วยกัน
type Employee = { name: string; salary: number }
type Manager = { department: string; reports: number }

type ManagerEmployee = Employee & Manager
// ต้องมีทั้ง name, salary, department, reports

// Discriminated Union — pattern ที่ใช้บ่อยมาก
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'rectangle'; width: number; height: number }

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle': return Math.PI * shape.radius ** 2
    case 'square': return shape.side ** 2
    case 'rectangle': return shape.width * shape.height
  }
}`,Jt=`// Generics — เขียน code ที่ flexible แต่ยังมี type safety

// ❌ ไม่มี Generic — ต้องเขียน function แยกสำหรับแต่ละ type
function getFirstString(arr: string[]): string { return arr[0] }
function getFirstNumber(arr: number[]): number { return arr[0] }

// ✅ มี Generic — function เดียวรองรับทุก type
function getFirst<T>(arr: T[]): T {
  return arr[0]
}

getFirst<string>(['a', 'b', 'c'])  // return type: string
getFirst<number>([1, 2, 3])        // return type: number
getFirst([true, false])            // TS infer เอง → boolean

// Generic Interface
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

// ใช้งาน
const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'Sirapob', email: 'test@test.com' },
  status: 200,
  message: 'success'
}

// Generic Constraints — จำกัดว่า T ต้องมี property อะไร
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { name: 'Sirapob', age: 25 }
getProperty(user, 'name')  // ✅ string
getProperty(user, 'xxx')   // ❌ Error: ไม่มี key นี้`,Yt=`// Utility Types — TypeScript built-in helpers

interface User {
  id: number
  name: string
  email: string
  password: string
  age: number
}

// Partial<T> — ทุก property เป็น optional
type UserUpdate = Partial<User>
// { id?: number; name?: string; email?: string; ... }

// Required<T> — ทุก property เป็น required
type UserRequired = Required<User>

// Pick<T, K> — เลือกเฉพาะ property ที่ต้องการ
type UserProfile = Pick<User, 'id' | 'name' | 'email'>
// { id: number; name: string; email: string }

// Omit<T, K> — เอาออกบาง property
type UserWithoutPassword = Omit<User, 'password'>
// { id: number; name: string; email: string; age: number }

// Record<K, V> — สร้าง object type จาก key และ value
type UserMap = Record<string, User>
// { [key: string]: User }

type StatusMap = Record<'active' | 'inactive', number>
// { active: number; inactive: number }

// Readonly<T> — ทุก property เปลี่ยนไม่ได้
type ReadonlyUser = Readonly<User>
const u: ReadonlyUser = { id: 1, name: 'A', email: '', password: '', age: 0 }
u.name = 'B'  // ❌ Error: Cannot assign to 'name'

// ReturnType<T> — ดึง return type ของ function
function getUser() { return { id: 1, name: 'Sirapob' } }
type UserReturn = ReturnType<typeof getUser>
// { id: number; name: string }`,Xt=`// Type Narrowing — บอก TS ว่าตอนนี้ type คืออะไร

// 1. typeof
function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase()  // TS รู้ว่าเป็น string
  }
  return value.toFixed(2)       // TS รู้ว่าเป็น number
}

// 2. instanceof — ใช้กับ Class
// ตรวจว่า object นั้นถูกสร้างจาก Class ไหน

// ปัญหา: date เป็นได้ทั้ง Date object และ string
function formatDate(date: Date | string) {

  // instanceof ถามว่า "date ถูกสร้างจาก Date class ไหม?"
  if (date instanceof Date) {
    // ✅ ใน block นี้ TS รู้ว่า date เป็น Date object
    // จึงใช้ method ของ Date ได้เลย
    return date.toLocaleDateString()   // เช่น "20/6/2026"
  }

  // ถ้าไม่เข้า if → date ต้องเป็น string แน่นอน
  // TS narrow เหลือแค่ string อัตโนมัติ
  return new Date(date).toLocaleDateString() // แปลง string → Date ก่อน
}

// เรียกใช้งาน
formatDate(new Date())      // ส่ง Date object → เข้า if
formatDate('2026-06-20')    // ส่ง string → ข้าม if

// instanceof ใช้กับ class อื่นได้ด้วย
class ApiError {
  constructor(public status: number, public message: string) {}
}
class NetworkError {
  constructor(public code: string) {}
}

function handleError(err: ApiError | NetworkError) {
  if (err instanceof ApiError) {
    console.log(err.status)    // TS รู้ว่าเป็น ApiError
  } else {
    console.log(err.code)      // TS รู้ว่าเป็น NetworkError
  }
}

// ⚠️ instanceof ใช้กับ Class เท่านั้น
// ถ้าเป็น plain object ใช้ไม่ได้ → ต้องใช้ "in" แทน

// 3. in operator — ใช้กับ plain object
type Cat = { meow: () => string }
type Dog = { bark: () => string }

function makeSound(animal: Cat | Dog) {
  if ('meow' in animal) {
    animal.meow()   // TS รู้ว่าเป็น Cat
  } else {
    animal.bark()   // TS รู้ว่าเป็น Dog
  }
}

// 4. Type Guard — custom function
function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
}

// 5. Nullish check
function greet(name: string | null | undefined) {
  if (!name) return 'Hello, Guest'
  return \`Hello, \${name}\`    // TS รู้ว่า name เป็น string
}`,Zt=`// TypeScript กับ React

import { useState, useEffect, useRef, FC } from 'react'

// Typing Props
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  children?: React.ReactNode
}

// FC (Function Component) type
const Button: FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false
}) => (
  <button className={variant} onClick={onClick} disabled={disabled}>
    {label}
  </button>
)

// Typing useState
const [user, setUser] = useState<User | null>(null)
const [count, setCount] = useState<number>(0)
const [items, setItems] = useState<string[]>([])

// Typing useRef
const inputRef = useRef<HTMLInputElement>(null)
const divRef = useRef<HTMLDivElement>(null)

// Typing Event
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget)
}

// Typing useEffect
useEffect(() => {
  const controller = new AbortController()

  async function fetchUser(): Promise<void> {
    const res = await fetch('/api/user', { signal: controller.signal })
    const data: User = await res.json()
    setUser(data)
  }

  fetchUser()
  return () => controller.abort()
}, [])`,Qt=[{q:`TypeScript คืออะไร ทำไมต้องใช้?`,a:`TypeScript คือ JavaScript + Static Type System<br><br>
    ทำไมต้องใช้:<br>
    • จับ bug ได้ตั้งแต่ตอน code ไม่ต้องรอ runtime<br>
    • IDE autocomplete ดีขึ้นมาก<br>
    • Code อ่านง่ายขึ้น — รู้ทันทีว่า function รับ/return อะไร<br>
    • Refactor ได้ปลอดภัย — TS บอกเมื่อเปลี่ยน type แล้วมีที่ไหนพัง<br><br>
    TS compile เป็น JS ธรรมดา — browser ไม่รู้จัก TS เลย`},{q:`Type กับ Interface ต่างกันอย่างไร ใช้อันไหนดีกว่า?`,a:`<strong>Interface:</strong><br>
    • เหมาะกับ Object shape<br>
    • extend ได้ด้วย <code>extends</code><br>
    • Declaration Merging ได้ (เพิ่ม property ทีหลังได้)<br><br>
    <strong>Type:</strong><br>
    • ใช้ได้กับทุกอย่าง — Union, Intersection, Primitive<br>
    • extend ได้ด้วย <code>&</code><br>
    • ทำ Declaration Merging ไม่ได้<br><br>
    แนะนำ: ใช้ <code>interface</code> สำหรับ Object, ใช้ <code>type</code> สำหรับ Union/Intersection`},{q:`any กับ unknown ต่างกันอย่างไร?`,a:`<strong>any:</strong><br>
    • ปิด type checking ทั้งหมด<br>
    • ใช้ได้เลยโดยไม่ต้อง check<br>
    • อันตราย — error อาจเกิดตอน runtime<br><br>
    <strong>unknown:</strong><br>
    • ปลอดภัยกว่า — ต้อง narrow type ก่อนใช้<br>
    • TS บังคับให้ check type ก่อนเสมอ<br><br>
    Rule: หลีกเลี่ยง <code>any</code> ให้มากที่สุด ใช้ <code>unknown</code> แทนเมื่อไม่รู้ type`},{q:`Generics คืออะไร ใช้เมื่อไหร่?`,a:`Generics คือ "type parameter" — ทำให้ function/class/interface flexible แต่ยังมี type safety<br><br>
    ใช้เมื่อ:<br>
    • Logic เหมือนกัน แต่ type ต่างกัน<br>
    • สร้าง reusable component/function<br>
    • ไม่อยากใช้ <code>any</code> แต่ไม่รู้ type ล่วงหน้า<br><br>
    ตัวอย่างที่เจอบ่อย: <code>useState&lt;User | null&gt;(null)</code>,
    <code>ApiResponse&lt;User[]&gt;</code>`},{q:`Utility Types ที่ใช้บ่อยมีอะไรบ้าง?`,a:`• <code>Partial&lt;T&gt;</code> — ทุก property เป็น optional (เหมาะกับ update API)<br>
    • <code>Required&lt;T&gt;</code> — ทุก property เป็น required<br>
    • <code>Pick&lt;T, K&gt;</code> — เลือกเฉพาะบาง property<br>
    • <code>Omit&lt;T, K&gt;</code> — เอาบาง property ออก<br>
    • <code>Record&lt;K, V&gt;</code> — สร้าง object type จาก key/value<br>
    • <code>Readonly&lt;T&gt;</code> — ป้องกันการแก้ไข property<br>
    • <code>ReturnType&lt;T&gt;</code> — ดึง return type ของ function`},{q:`Type Narrowing คืออะไร?`,a:`Type Narrowing คือการบอก TypeScript ว่า "ตอนนี้ type คือ X" ใน block นี้<br><br>
    วิธีที่ใช้บ่อย:<br>
    • <code>typeof</code> — check primitive type<br>
    • <code>instanceof</code> — check class instance<br>
    • <code>in</code> — check ว่ามี property ไหม<br>
    • Type Guard function — <code>obj is Type</code><br>
    • Nullish check — <code>if (value)</code><br><br>
    TS จะ narrow type ให้อัตโนมัติหลัง check`}];function $t(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`TypeScript`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`TypeScript`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`ทบทวน TypeScript ตั้งแต่พื้นฐานจนถึงการใช้งานจริงใน React เพื่อเตรียมสัมภาษณ์ Frontend Developer`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Basic Types`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`📘`}),(0,f.jsx)(`span`,{children:`TypeScript = JavaScript + Type System — compile เป็น JS ธรรมดา browser ไม่รู้จัก TS เลย`})]}),(0,f.jsx)(p,{code:Gt,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Type vs Interface`}),(0,f.jsx)(p,{code:Kt,lang:`typescript`}),(0,f.jsxs)(`table`,{className:`comparison-table`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Feature`}),(0,f.jsx)(`th`,{children:`Interface`}),(0,f.jsx)(`th`,{children:`Type`})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Object shape`}),(0,f.jsx)(`td`,{children:`✅`}),(0,f.jsx)(`td`,{children:`✅`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Union / Intersection`}),(0,f.jsx)(`td`,{children:`❌`}),(0,f.jsx)(`td`,{children:`✅`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`extends`}),(0,f.jsx)(`td`,{children:`✅ extends`}),(0,f.jsx)(`td`,{children:`✅ &`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Declaration Merging`}),(0,f.jsx)(`td`,{children:`✅`}),(0,f.jsx)(`td`,{children:`❌`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Primitive alias`}),(0,f.jsx)(`td`,{children:`❌`}),(0,f.jsx)(`td`,{children:`✅`})]})]})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Union & Intersection Types`}),(0,f.jsx)(p,{code:qt,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Generics`}),(0,f.jsxs)(`div`,{className:`callout callout-tip`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`💡`}),(0,f.jsx)(`span`,{children:`Generics คือ "type parameter" — เหมือน function parameter แต่สำหรับ type ทำให้ reusable และ type-safe พร้อมกัน`})]}),(0,f.jsx)(p,{code:Jt,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Utility Types`}),(0,f.jsx)(p,{code:Yt,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Type Narrowing`}),(0,f.jsx)(p,{code:Xt,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`TypeScript กับ React`}),(0,f.jsxs)(`div`,{className:`callout callout-new`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚛️`}),(0,f.jsx)(`span`,{children:`React 19 + TypeScript รองรับดีมาก — type ของ Props, Hooks, และ Events ครอบคลุมทุกอย่าง`})]}),(0,f.jsx)(p,{code:Zt,lang:`typescript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:Qt})]})]})}var en=`import { createContext, useContext, useState } from 'react'

// 1. สร้าง Context
const ThemeContext = createContext('light') // default value

// 2. Provider — wrap components ที่ต้องการ access
function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
      <Content />
    </ThemeContext.Provider>
  )
}

// 3. Consumer — ใช้ useContext hook
function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      Toggle Theme (current: {theme})
    </button>
  )
}

// Component ลึกแค่ไหนก็ access ได้
function Content() {
  const { theme } = useContext(ThemeContext)
  return <div className={theme}>Content here</div>
}`,tn=`// Pattern: Custom Context Hook
// ป้องกัน useContext ถูกเรียกนอก Provider

// 1. สร้าง Context
const AuthContext = createContext(null)

// 2. Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (credentials) => {
    const userData = await api.login(credentials)
    setUser(userData)
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 3. Custom Hook — ใช้แทน useContext โดยตรง
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

// 4. การใช้งาน
function Navbar() {
  const { user, logout } = useAuth() // สะอาดกว่า

  return user ? (
    <div>Welcome, {user.name} <button onClick={logout}>Logout</button></div>
  ) : (
    <a href="/login">Login</a>
  )
}`,nn=`// เมื่อไหรควรใช้ Context vs Props

// ✅ ใช้ Props เมื่อ:
// - ข้อมูลเปลี่ยนบ่อย (re-render ทุก consumer)
// - ส่งให้ component ใกล้ๆ (1-2 ชั้น)
// - Explicit data flow ดีกว่า

// ✅ ใช้ Context เมื่อ:
// - Prop drilling หลายชั้น (3+ levels)
// - Global state: theme, language, auth, cart
// - ข้อมูลที่ค่อนข้าง static

// ⚡ Performance Note:
// Context re-renders ทุก consumer เมื่อ value เปลี่ยน
// แก้ด้วยการ split context หรือใช้ memo

// Split Context Pattern
const UserContext = createContext(null)      // user info
const ThemeContext = createContext('light')  // theme only

// ไม่ re-render UserContext consumers เมื่อ theme เปลี่ยน`,rn=[{q:`Context API คืออะไร และใช้แก้ปัญหาอะไร?`,a:`Context API ใช้แก้ปัญหา <strong>Prop Drilling</strong> — การส่ง props ผ่านหลาย level component ที่ไม่ได้ใช้ข้อมูลนั้นจริงๆ<br><br>
    ตัวอย่าง: App → Header → Nav → UserMenu ต้องการ user data<br>
    โดยไม่มี Context: ส่ง user prop ทุก level<br>
    มี Context: UserMenu เรียก <code>useContext(UserContext)</code> ได้เลย`},{q:`Context API มีข้อเสียอะไรบ้าง?`,a:`• ทุก component ที่ใช้ context จะ re-render เมื่อ value เปลี่ยน<br>
    • ทำให้ component reusability ลดลง (ต้องอยู่ใน Provider)<br>
    • Debug ยากกว่า props<br><br>
    สำหรับ complex state ควรพิจารณา:<br>
    • Split contexts (แยก context ตามความถี่ในการเปลี่ยน)<br>
    • Zustand / Jotai (lightweight state managers)<br>
    • Redux Toolkit (สำหรับ enterprise)`},{q:`Context กับ Redux ต่างกันอย่างไร?`,a:`<strong>Context API:</strong><br>
    • Built-in React ไม่ต้องติดตั้งเพิ่ม<br>
    • เหมาะกับ simple global state (theme, auth, language)<br>
    • ไม่มี middleware, devtools<br>
    • Re-render ทุก consumer เมื่อ value เปลี่ยน<br><br>
    <strong>Redux / Zustand:</strong><br>
    • Selective subscription — component re-render เฉพาะส่วนที่ใช้<br>
    • Devtools, middleware (logging, persistence)<br>
    • เหมาะกับ complex state, large apps<br><br>
    React 19+ แนะนำ: Context สำหรับ simple, Zustand/Jotai สำหรับ complex`}],an=(0,l.createContext)(null);function on({children:e}){let[t,n]=(0,l.useState)(`dark`);return(0,f.jsx)(an.Provider,{value:{theme:t,setTheme:n},children:e})}function sn(){let{theme:e,setTheme:t}=(0,l.useContext)(an);return(0,f.jsx)(`button`,{className:`demo-btn`,onClick:()=>t(e=>e===`dark`?`light`:`dark`),children:e===`dark`?`🌙 Dark Mode`:`☀️ Light Mode`})}function cn(){let{theme:e}=(0,l.useContext)(an);return(0,f.jsxs)(`div`,{style:{padding:`16px`,borderRadius:`8px`,background:e===`dark`?`#1e2535`:`#f1f5f9`,color:e===`dark`?`#e2e8f0`:`#1e293b`,border:`1px solid ${e===`dark`?`#2d3748`:`#cbd5e1`}`,marginTop:10,fontSize:14},children:[`🃏 Card component ใช้ theme จาก Context: `,(0,f.jsx)(`strong`,{children:e})]})}function ln(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Hooks`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`useContext — Context API`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`แชร์ state ข้าม component โดยไม่ต้องส่ง props ทุก level (แก้ Prop Drilling)`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Context Basics`}),(0,f.jsx)(p,{code:en})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Context Pattern ที่แนะนำ`}),(0,f.jsx)(p,{code:tn})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interactive Demo`}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`Theme Context Demo`}),(0,f.jsx)(`div`,{className:`demo-content`,children:(0,f.jsxs)(on,{children:[(0,f.jsx)(sn,{}),(0,f.jsx)(cn,{})]})})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Context vs Props — เลือกอันไหน?`}),(0,f.jsx)(p,{code:nn})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:rn})]})]})}var un=`import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // 1. ทำงานทุกครั้งที่ render (ไม่มี dependency array)
  useEffect(() => {
    console.log('Rendered!')
  })

  // 2. ทำงานครั้งเดียว (dependency array ว่าง)
  useEffect(() => {
    console.log('Mounted!')
    // เช่น fetch initial data, add event listeners
  }, [])

  // 3. ทำงานเมื่อ dependency เปลี่ยน
  useEffect(() => {
    console.log('count changed:', count)
    document.title = \`Count: \${count}\`
  }, [count]) // ทำงานเมื่อ count เปลี่ยน

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}`,dn=`// Cleanup Function — ป้องกัน memory leak
// React เรียก cleanup ก่อน effect ครั้งถัดไป และตอน unmount

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)

    // Cleanup: clear interval เมื่อ component unmount
    return () => clearInterval(interval)
  }, [])

  return <p>Time: {seconds}s</p>
}

// Event Listener cleanup
function MouseTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)

    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return <p>Mouse: {pos.x}, {pos.y}</p>
}`,fn=`// Data Fetching Pattern ที่ถูกต้อง
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Abort controller ป้องกัน race condition
    const controller = new AbortController()

    async function fetchUser() {
      try {
        setLoading(true)
        const res = await fetch(\`/api/users/\${userId}\`, {
          signal: controller.signal
        })
        const data = await res.json()
        setUser(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUser()

    // Cleanup: abort request เมื่อ userId เปลี่ยน หรือ unmount
    return () => controller.abort()
  }, [userId]) // refetch เมื่อ userId เปลี่ยน

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return <div>{user?.name}</div>
}`,pn=`// useEffect ลำดับการทำงาน:
// 1. React render UI
// 2. Browser paint (อัปเดต DOM จริง)
// 3. useEffect cleanup (ถ้ามี effect เก่า)
// 4. useEffect callback ทำงาน

// ⚠️ useLayoutEffect ทำงานก่อน browser paint
// ใช้เมื่อต้องการวัด DOM หรือ animate ก่อนที่ user เห็น

useLayoutEffect(() => {
  // ทำงานหลัง DOM update แต่ก่อน browser paint
  const width = divRef.current.getBoundingClientRect().width
  setWidth(width)
}, [])`,mn=[{q:`Dependency Array ใน useEffect คืออะไร?`,a:`Dependency Array บอก React ว่าให้ run effect เมื่อค่าใดค่าหนึ่งเปลี่ยน<br><br>
    • <code>useEffect(fn)</code> — run ทุก render<br>
    • <code>useEffect(fn, [])</code> — run ครั้งเดียวตอน mount<br>
    • <code>useEffect(fn, [a, b])</code> — run เมื่อ <code>a</code> หรือ <code>b</code> เปลี่ยน<br><br>
    ⚠️ ต้องใส่ทุก value ที่ใช้ใน effect เป็น dependency (ESLint จะเตือนถ้าลืม)`},{q:`Cleanup function ใน useEffect คืออะไร ใช้เมื่อไหร่?`,a:`Cleanup function คือ function ที่ return ออกจาก useEffect<br>
    React จะเรียกมันก่อน run effect ครั้งถัดไป และตอน component unmount<br><br>
    ใช้เพื่อ:<br>
    • Clear timers (<code>clearInterval</code>, <code>clearTimeout</code>)<br>
    • Remove event listeners<br>
    • Cancel API requests (AbortController)<br>
    • Unsubscribe from subscriptions<br><br>
    ถ้าไม่ cleanup → memory leak และ unexpected behavior`},{q:`useEffect กับ useLayoutEffect ต่างกันอย่างไร?`,a:`<strong>useEffect:</strong><br>
    • ทำงานหลัง browser paint (async)<br>
    • ใช้กับ data fetching, subscriptions, timers<br>
    • ไม่ block browser paint — UI ไม่กระตุก<br><br>
    <strong>useLayoutEffect:</strong><br>
    • ทำงานหลัง DOM update แต่ก่อน browser paint (sync)<br>
    • ใช้เมื่อต้องวัด DOM, animate, scroll position<br>
    • อาจทำให้ UI กระตุกถ้าใช้ผิดที่<br><br>
    Rule of thumb: ใช้ <code>useEffect</code> ก่อนเสมอ switch ไป <code>useLayoutEffect</code> เมื่อมีปัญหา flickering`}];function hn(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(!n)return;let e=setInterval(()=>t(e=>e+1),1e3);return()=>clearInterval(e)},[n]),(0,f.jsxs)(`div`,{className:`demo-content`,children:[(0,f.jsxs)(`div`,{className:`demo-row`,children:[(0,f.jsxs)(`span`,{className:`demo-value`,style:{fontSize:24,minWidth:80},children:[String(Math.floor(e/60)).padStart(2,`0`),`:`,String(e%60).padStart(2,`0`)]}),(0,f.jsx)(`button`,{className:`demo-btn`,onClick:()=>r(e=>!e),children:n?`⏸ Pause`:`▶ Start`}),(0,f.jsx)(`button`,{className:`demo-btn-sm`,onClick:()=>{t(0),r(!1)},children:`Reset`})]}),(0,f.jsx)(`p`,{className:`demo-label`,style:{marginTop:10},children:`useEffect cleanup ป้องกัน interval leak`})]})}function gn(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Hooks`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`useEffect`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`จัดการ side effects: data fetching, subscriptions, timers, และ DOM manipulation`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useEffect Basics`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🎣`}),(0,f.jsx)(`span`,{children:`useEffect ทำงานหลัง render เสมอ ใช้สำหรับ side effects ที่ไม่ใช่ rendering เช่น API calls, subscriptions`})]}),(0,f.jsx)(p,{code:un})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Cleanup Function`}),(0,f.jsx)(p,{code:dn}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`Timer Demo — useEffect + Cleanup`}),(0,f.jsx)(hn,{})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Data Fetching Pattern`}),(0,f.jsxs)(`div`,{className:`callout callout-warn`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`⚠️`}),(0,f.jsxs)(`span`,{children:[`ใน React 19 ควรพิจารณาใช้ `,(0,f.jsx)(`code`,{children:`use()`}),` hook หรือ library เช่น TanStack Query แทนการ fetch ใน useEffect เพื่อจัดการ loading/error states ได้ดีกว่า`]})]}),(0,f.jsx)(p,{code:fn})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Effect Execution Order`}),(0,f.jsx)(p,{code:pn})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:mn})]})]})}var _n=`import { useReducer } from 'react'

// useReducer — alternative to useState สำหรับ complex state
// Pattern: (state, action) => newState

// 1. Define Reducer Function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + (action.payload ?? 1) }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      throw new Error(\`Unknown action: \${action.type}\`)
  }
}

// 2. ใช้ใน Component
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}`,vn=`// Real-world example: Todo List with useReducer

const initialState = {
  todos: [],
  filter: 'all', // 'all' | 'active' | 'done'
}

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          done: false
        }]
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, done: !todo.done }
            : todo
        )
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'SET_FILTER':
      return { ...state, filter: action.payload }

    default:
      return state
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const add = (text) => dispatch({ type: 'ADD_TODO', payload: text })
  const toggle = (id) => dispatch({ type: 'TOGGLE_TODO', payload: id })
  const remove = (id) => dispatch({ type: 'DELETE_TODO', payload: id })

  const filtered = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.done
    if (state.filter === 'done') return todo.done
    return true
  })

  return <TodoUI todos={filtered} onAdd={add} onToggle={toggle} onDelete={remove} />
}`,yn=`// useReducer vs useState — เลือกอันไหน?

// ✅ useState เมื่อ:
const [count, setCount] = useState(0)
const [name, setName] = useState('')
// - State simple, แยกกัน
// - Logic ไม่ซับซ้อน

// ✅ useReducer เมื่อ:
// - State เป็น object ที่มีหลาย fields
// - State updates ซับซ้อน, ขึ้นอยู่กับกัน
// - Logic เยอะ ต้องการ centralize
// - ต้องการ test reducer logic แยก

// เปรียบ useReducer กับ Redux:
// useReducer = local Redux (ไม่มี global store)
// Redux = global store ที่แชร์ระหว่าง components`,bn=[{q:`useReducer คืออะไร เมื่อไหรควรใช้แทน useState?`,a:`useReducer เป็น hook ที่ใช้ pattern <code>(state, action) => newState</code> แบบเดียวกับ Redux<br><br>
    ควรใช้ useReducer เมื่อ:<br>
    • State มีหลาย fields ที่เปลี่ยนพร้อมกัน<br>
    • State updates ซับซ้อน (เช่น todo: add, toggle, delete, filter)<br>
    • ต้องการ centralize logic และทดสอบแยก<br>
    • Next state ขึ้นอยู่กับ previous state หลายส่วน`},{q:`Reducer function ต้องเป็น Pure Function คืออะไร?`,a:`Pure function คือ function ที่:<br>
    • Input เดิมให้ output เดิมเสมอ (deterministic)<br>
    • ไม่มี side effects (ไม่เปลี่ยน external state, ไม่ fetch API)<br>
    • ไม่แก้ไข argument โดยตรง (immutable)<br><br>
    ❌ Wrong: <code>state.todos.push(newTodo)</code> — mutates state<br>
    ✅ Correct: <code>[...state.todos, newTodo]</code> — creates new array<br><br>
    React ใช้ strict mode run reducer 2 ครั้งเพื่อ detect side effects`}],xn={todos:[],filter:`all`};function Sn(e,t){switch(t.type){case`ADD`:return t.payload.trim()?{...e,todos:[...e.todos,{id:Date.now(),text:t.payload,done:!1}]}:e;case`TOGGLE`:return{...e,todos:e.todos.map(e=>e.id===t.payload?{...e,done:!e.done}:e)};case`DELETE`:return{...e,todos:e.todos.filter(e=>e.id!==t.payload)};case`FILTER`:return{...e,filter:t.payload};default:return e}}function Cn(){let[e,t]=(0,l.useReducer)(Sn,xn),[n,r]=(0,l.useState)(``),i=e.todos.filter(t=>e.filter===`active`?!t.done:e.filter===`done`?t.done:!0);return(0,f.jsxs)(`div`,{className:`demo-content`,children:[(0,f.jsxs)(`div`,{className:`demo-row`,style:{marginBottom:10},children:[(0,f.jsx)(`input`,{className:`demo-input`,value:n,onChange:e=>r(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(t({type:`ADD`,payload:n}),r(``))},placeholder:`Add todo... (Enter)`,style:{flex:1}}),(0,f.jsx)(`button`,{className:`demo-btn-sm`,onClick:()=>{t({type:`ADD`,payload:n}),r(``)},children:`Add`})]}),(0,f.jsxs)(`div`,{className:`demo-row`,style:{marginBottom:10},children:[[`all`,`active`,`done`].map(n=>(0,f.jsx)(`button`,{className:`demo-btn-sm`,style:{background:e.filter===n?`rgba(97,218,251,0.2)`:void 0,borderColor:e.filter===n?`#61dafb`:void 0},onClick:()=>t({type:`FILTER`,payload:n}),children:n},n)),(0,f.jsxs)(`span`,{className:`demo-label`,children:[e.todos.filter(e=>!e.done).length,` remaining`]})]}),(0,f.jsxs)(`ul`,{className:`demo-list`,children:[i.length===0&&(0,f.jsx)(`li`,{className:`demo-list-item`,style:{color:`#4b5563`,justifyContent:`center`},children:`No todos`}),i.map(e=>(0,f.jsxs)(`li`,{className:`demo-list-item`,children:[(0,f.jsxs)(`span`,{style:{textDecoration:e.done?`line-through`:`none`,color:e.done?`#4b5563`:`#e2e8f0`,cursor:`pointer`,flex:1},onClick:()=>t({type:`TOGGLE`,payload:e.id}),children:[e.done?`✅`:`⬜`,` `,e.text]}),(0,f.jsx)(`button`,{className:`demo-btn-sm`,style:{background:`rgba(248,113,113,0.1)`,borderColor:`rgba(248,113,113,0.3)`,color:`#f87171`},onClick:()=>t({type:`DELETE`,payload:e.id}),children:`Delete`})]},e.id))]})]})}function wn(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Hooks`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`useReducer`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`จัดการ complex state ด้วย Reducer pattern — เหมือน Redux แต่อยู่ใน component`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useReducer Basics`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🔄`}),(0,f.jsxs)(`span`,{children:[`Pattern: `,(0,f.jsx)(`code`,{children:`dispatch(action)`}),` → `,(0,f.jsx)(`code`,{children:`reducer(currentState, action)`}),` → `,(0,f.jsx)(`code`,{children:`newState`})]})]}),(0,f.jsx)(p,{code:_n})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Todo App — Real World Example`}),(0,f.jsx)(p,{code:vn}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`Todo Demo — useReducer`}),(0,f.jsx)(Cn,{})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useReducer vs useState`}),(0,f.jsx)(p,{code:yn})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:bn})]})]})}var Tn=`import { useRef } from 'react'

// useRef returns mutable object: { current: initialValue }
// การเปลี่ยน ref.current ไม่ทำให้ re-render!

// 1. DOM Reference
function InputFocus() {
  const inputRef = useRef(null)

  const focus = () => inputRef.current.focus()
  const clear = () => { inputRef.current.value = '' }

  return (
    <>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={focus}>Focus</button>
      <button onClick={clear}>Clear</button>
    </>
  )
}

// 2. Mutable value (ไม่ trigger re-render)
function Timer() {
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  const start = () => {
    setRunning(true)
    intervalRef.current = setInterval(() => {
      // update something
    }, 1000)
  }

  const stop = () => {
    setRunning(false)
    clearInterval(intervalRef.current) // ใช้ ref เพื่อ clear interval
  }

  return (
    <button onClick={running ? stop : start}>
      {running ? 'Stop' : 'Start'}
    </button>
  )
}`,En=`// useRef vs useState

// useState:
// ✅ Re-renders component เมื่อค่าเปลี่ยน
// ✅ ใช้เมื่อ UI ต้องแสดงค่านั้น
// ❌ ไม่ควรเก็บค่าที่เปลี่ยนบ่อยโดยไม่ต้อง render

// useRef:
// ✅ ไม่ re-render เมื่อค่าเปลี่ยน
// ✅ เก็บ DOM reference
// ✅ เก็บ previous value, timers, intervals
// ❌ อย่าใช้เพื่อแสดงค่าใน UI

// ตัวอย่าง: render count (ต้องการไม่ re-render)
function RenderTracker() {
  const renderCount = useRef(0)
  renderCount.current++ // เพิ่มทุก render ไม่ trigger re-render เพิ่ม

  return <p>Rendered {renderCount.current} times</p>
}

// ตัวอย่าง: previous value
function PreviousValue({ value }) {
  const prevRef = useRef(value)

  useEffect(() => {
    prevRef.current = value // อัปเดต ref หลัง render
  })

  return (
    <p>
      Current: {value} | Previous: {prevRef.current}
    </p>
  )
}`,Dn=`import { forwardRef, useImperativeHandle } from 'react'

// forwardRef — ส่ง ref จาก parent ไปถึง child component
const FancyInput = forwardRef((props, ref) => {
  return <input ref={ref} className="fancy" {...props} />
})

// Parent ใช้งาน
function App() {
  const ref = useRef(null)
  return (
    <>
      <FancyInput ref={ref} placeholder="Fancy input" />
      <button onClick={() => ref.current.focus()}>Focus</button>
    </>
  )
}

// useImperativeHandle — กำหนด API ที่ expose ให้ parent
const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(null)

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    // expose เฉพาะ method ที่ต้องการ ไม่ expose ทั้ง DOM element
  }))

  return <video ref={videoRef} {...props} />
})`,On=[{q:`useRef กับ useState ต่างกันอย่างไร?`,a:`<strong>useState:</strong> เมื่อ setter ถูกเรียก React จะ re-render component<br>
    <strong>useRef:</strong> การเปลี่ยน <code>ref.current</code> ไม่ trigger re-render เลย<br><br>
    ใช้ <code>useRef</code> เมื่อต้องการ:<br>
    • Reference ไปยัง DOM element<br>
    • เก็บ interval/timeout ID<br>
    • เก็บค่า previous state<br>
    • มีข้อมูลที่ต้องการระหว่าง renders แต่ไม่ต้องแสดงใน UI`},{q:`forwardRef คืออะไร?`,a:`<code>forwardRef</code> ช่วยให้ parent component ส่ง ref เข้าไปใน child component ได้<br><br>
    ปกติ React ไม่อนุญาตให้ส่ง <code>ref</code> เป็น prop — ต้องใช้ <code>forwardRef</code> wrapper<br><br>
    Use case: Custom input, button, หรือ component ที่ parent ต้องการ access DOM หรือ methods ภายใน<br><br>
    ใน React 19: ไม่จำเป็นต้องใช้ <code>forwardRef</code> อีกต่อไป!<br>
    <code>ref</code> กลายเป็น regular prop ได้เลย`}];function kn(){let e=(0,l.useRef)(null),t=(0,l.useRef)(0),[n,r]=(0,l.useState)(``);return t.current++,(0,f.jsxs)(`div`,{className:`demo-content`,children:[(0,f.jsxs)(`div`,{className:`demo-row`,style:{marginBottom:10},children:[(0,f.jsx)(`input`,{ref:e,className:`demo-input`,value:n,onChange:e=>r(e.target.value),placeholder:`Type something...`}),(0,f.jsx)(`button`,{className:`demo-btn-sm`,onClick:()=>e.current.focus(),children:`Focus`}),(0,f.jsx)(`button`,{className:`demo-btn-sm`,onClick:()=>r(``),children:`Clear`})]}),(0,f.jsxs)(`div`,{className:`demo-label`,children:[`Render count (via ref, no re-render): `,(0,f.jsx)(`strong`,{style:{color:`#61dafb`},children:t.current})]})]})}function An(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Hooks`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`useRef`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`เก็บค่า mutable และ DOM references โดยไม่ trigger re-render`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useRef Basics`}),(0,f.jsxs)(`div`,{className:`callout callout-info`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`📎`}),(0,f.jsxs)(`span`,{children:[(0,f.jsx)(`code`,{children:`useRef`}),` คือ "กล่อง" ที่เก็บค่า — เปลี่ยนค่าใน `,(0,f.jsx)(`code`,{children:`.current`}),` ได้ตลอดเวลาโดยไม่ทำให้ re-render`]})]}),(0,f.jsx)(p,{code:Tn})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`useRef vs useState`}),(0,f.jsx)(p,{code:En}),(0,f.jsxs)(`table`,{className:`comparison-table`,children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:`Feature`}),(0,f.jsx)(`th`,{children:`useState`}),(0,f.jsx)(`th`,{children:`useRef`})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Triggers re-render`}),(0,f.jsx)(`td`,{children:`✅ Yes`}),(0,f.jsx)(`td`,{children:`❌ No`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Mutable`}),(0,f.jsx)(`td`,{children:`No (use setter)`}),(0,f.jsx)(`td`,{children:`✅ Yes (.current)`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`DOM access`}),(0,f.jsx)(`td`,{children:`❌ No`}),(0,f.jsx)(`td`,{children:`✅ Yes`})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:`Persists across renders`}),(0,f.jsx)(`td`,{children:`✅ Yes`}),(0,f.jsx)(`td`,{children:`✅ Yes`})]})]})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interactive Demo`}),(0,f.jsxs)(`div`,{className:`demo-box`,children:[(0,f.jsx)(`div`,{className:`demo-box-header`,children:`DOM Ref + Render Counter`}),(0,f.jsx)(kn,{})]})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`forwardRef & useImperativeHandle`}),(0,f.jsxs)(`div`,{className:`callout callout-new`,children:[(0,f.jsx)(`span`,{className:`callout-icon`,children:`🆕`}),(0,f.jsxs)(`span`,{children:[`React 19: `,(0,f.jsx)(`code`,{children:`forwardRef`}),` ไม่จำเป็นแล้ว! สามารถส่ง `,(0,f.jsx)(`code`,{children:`ref`}),` เป็น regular prop ได้เลย`]})]}),(0,f.jsx)(p,{code:Dn})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:On})]})]})}var jn=`<!-- Single File Component (.vue) — โครงสร้างพื้นฐาน -->
<!-- ทุกอย่างอยู่ในไฟล์เดียว แยกเป็น 3 ส่วน -->

<template>
  <!-- HTML ของ component นี้ -->
  <h1>{{ message }}</h1>
  <button @click="changeMessage">เปลี่ยน</button>
</template>

<script setup>
// JavaScript — ใช้ Composition API
import { ref } from 'vue'

const message = ref('Hello Vue!')

function changeMessage() {
  message.value = 'สวัสดี Vue!'
}
<\/script>

<style scoped>
/* CSS เฉพาะ component นี้ — ไม่รั่วออกไปนอก */
h1 { color: #42b883; }
</style>`,Mn=`// ref — ใช้กับค่าเดี่ยว (primitive)
import { ref, reactive } from 'vue'

const count  = ref(0)          // number
const name   = ref('Alice')    // string
const isOpen = ref(false)      // boolean
const items  = ref([])         // array

// ต้องใช้ .value ใน script
count.value++
name.value = 'Bob'
items.value = [...items.value, 'new item']

// ใน template ไม่ต้องใส่ .value — Vue แกะให้อัตโนมัติ
// <p>{{ count }}</p>   → แสดงค่า count ได้เลย

// reactive — ใช้กับ object ที่มีหลาย property
const form = reactive({
  username: '',
  password: '',
  remember: false
})

// แก้ตรงได้เลย ไม่มี .value
form.username = 'alice'
form.remember = true`,Nn=`<!-- Template Syntax — วิธีเขียน HTML ใน Vue -->

<template>
  <!-- แสดงค่าตัวแปร -->
  <p>{{ message }}</p>
  <p>{{ count * 2 }}</p>
  <p>{{ isAdmin ? 'Admin' : 'User' }}</p>

  <!-- v-bind — bind ค่าให้ attribute (:คือ shorthand) -->
  <img :src="imageUrl" :alt="imageAlt">
  <button :disabled="isLoading">Submit</button>
  <div :class="{ active: isActive, hidden: !isVisible }">...</div>

  <!-- v-on — bind event (@คือ shorthand) -->
  <button @click="handleClick">คลิก</button>
  <button @click="count++">เพิ่ม</button>
  <input @keyup.enter="submit">

  <!-- v-model — two-way binding (แทน value + onChange ใน React) -->
  <input v-model="name">
  <input type="checkbox" v-model="isChecked">
  <select v-model="selected">
    <option value="a">A</option>
    <option value="b">B</option>
  </select>

  <!-- v-if / v-else — แสดง/ซ่อน (ลบออกจาก DOM) -->
  <p v-if="count > 0">มีค่า</p>
  <p v-else-if="count === 0">เป็นศูนย์</p>
  <p v-else>ติดลบ</p>

  <!-- v-show — แสดง/ซ่อน (แค่ display:none ยังอยู่ใน DOM) -->
  <p v-show="isVisible">ยังอยู่ใน DOM แค่ซ่อน</p>

  <!-- v-for — loop (ต้องมี :key เสมอ) -->
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>`,Pn=`// Computed — คำนวณค่าจาก reactive data (เหมือน useMemo ใน React)
import { ref, computed, watch, watchEffect } from 'vue'

const firstName = ref('John')
const lastName  = ref('Doe')

// computed คำนวณใหม่เมื่อ dependency เปลี่ยน
// cache ไว้ — ถ้า firstName/lastName ไม่เปลี่ยน ไม่คำนวณซ้ำ
const fullName = computed(() => \`\${firstName.value} \${lastName.value}\`)

// ใน template: {{ fullName }}  → 'John Doe'

const items = ref([1, 2, 3, 4, 5])
const evenItems = computed(() => items.value.filter(i => i % 2 === 0))

// watch — ดูการเปลี่ยนแปลงของ reactive value (เหมือน useEffect ใน React)
const count = ref(0)

// รันเมื่อ count เปลี่ยน
watch(count, (newVal, oldVal) => {
  console.log(\`เปลี่ยนจาก \${oldVal} → \${newVal}\`)
})

// watchEffect — track อัตโนมัติ ไม่ต้องระบุ dependency
watchEffect(() => {
  console.log('count ตอนนี้คือ:', count.value)
  // Vue รู้เองว่า depend on count
})`,Fn=`// Lifecycle Hooks — เหมือน useEffect แต่แยกชัดเจน
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount
} from 'vue'

// onMounted — หลัง DOM พร้อม (เหมือน useEffect(() => {}, []))
onMounted(() => {
  console.log('component mount แล้ว DOM พร้อม')
  fetchData()   // เหมาะกับการดึงข้อมูลครั้งแรก
})

// onUpdated — หลัง reactive data เปลี่ยนและ DOM update แล้ว
onUpdated(() => {
  console.log('มีอะไรเปลี่ยนและ DOM update แล้ว')
})

// onUnmounted — ก่อน component ถูกลบออกจาก DOM
// ใช้ cleanup เช่น clearInterval, removeEventListener
onUnmounted(() => {
  clearInterval(timer)
  console.log('component ถูกลบออกแล้ว')
})

// เปรียบกับ React
// onMounted    ≈ useEffect(() => {}, [])
// onUpdated    ≈ useEffect(() => {})
// onUnmounted  ≈ return () => {} ใน useEffect`,In=`<!-- Parent Component -->
<template>
  <UserCard
    :name="userName"
    :age="userAge"
    @delete="handleDelete"
    @update="handleUpdate"
  />
</template>

<script setup>
import UserCard from './UserCard.vue'
const userName = ref('Alice')
const userAge  = ref(25)

function handleDelete(id) { console.log('ลบ user:', id) }
function handleUpdate(data) { console.log('อัปเดต:', data) }
<\/script>

<!-- UserCard.vue — Child Component -->
<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>อายุ: {{ age }}</p>
    <button @click="emit('delete', userId)">ลบ</button>
    <button @click="emit('update', { name, age })">บันทึก</button>
  </div>
</template>

<script setup>
// defineProps — รับ props จาก parent (เหมือน interface Props ใน React)
const props = defineProps({
  name: { type: String, required: true },
  age:  { type: Number, default: 0 }
})

// defineEmits — ประกาศ event ที่ส่งออกไปหา parent
const emit = defineEmits(['delete', 'update'])

// เข้าถึง props
console.log(props.name)
<\/script>`,Ln=`// Composable — เหมือน Custom Hook ใน React
// แยก logic ที่ใช้ซ้ำออกเป็นไฟล์

// composables/useFetch.js
import { ref } from 'vue'

export function useFetch(url) {
  const data    = ref(null)
  const loading = ref(false)
  const error   = ref(null)

  async function fetch() {
    loading.value = true
    try {
      const res  = await window.fetch(url)
      data.value = await res.json()
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  fetch()   // เรียกทันทีที่ composable ถูกใช้

  return { data, loading, error, refetch: fetch }
}

// ใช้งานใน component
import { useFetch } from '@/composables/useFetch'

const { data: users, loading, error } = useFetch('/api/users')

// เปรียบกับ React Custom Hook
// const { data, loading, error } = useFetch('/api/users')`,Rn=`// Pinia — Global State (เหมือน Zustand ใน React)

// stores/userStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const user    = ref(null)
  const isLogin = ref(false)

  // Getter (computed)
  const displayName = computed(() =>
    user.value ? user.value.name : 'Guest'
  )

  // Action
  async function login(email, password) {
    const res  = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    user.value    = await res.json()
    isLogin.value = true
  }

  function logout() {
    user.value    = null
    isLogin.value = false
  }

  return { user, isLogin, displayName, login, logout }
})

// ใช้งานใน component
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
userStore.login('alice@test.com', '1234')
console.log(userStore.displayName)`,zn=`// Vue Router — จัดการ URL (เหมือน React Router)

// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',         component: HomePage },
    { path: '/about',    component: AboutPage },
    { path: '/users/:id', component: UserDetailPage },

    // Protected route — ต้อง login ก่อน
    {
      path: '/dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true }
    }
  ]
})

// Navigation Guard — ตรวจก่อนเข้า route
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return '/login'   // redirect ไป login
  }
})

export default router

<!-- ใช้ใน template -->
<template>
  <RouterLink to="/">หน้าหลัก</RouterLink>
  <RouterLink :to="\`/users/\${userId}\`">Profile</RouterLink>
  <RouterView />   <!-- render component ของ route ปัจจุบัน -->
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route  = useRoute()

console.log(route.params.id)    // ค่าจาก URL
router.push('/dashboard')       // navigate ด้วย code
<\/script>`,Bn=[{q:`Vue 3 กับ React ต่างกันอย่างไร?`,a:`<strong>ความเหมือน:</strong> Component-based, Virtual DOM, Reactivity, Lifecycle<br><br>
    <strong>Vue:</strong> Template แยกจาก JS, <code>v-model</code> two-way binding, Reactivity อัตโนมัติ (Proxy)<br>
    <strong>React:</strong> JSX รวม JS กับ HTML, one-way data flow, ต้องเรียก setter เอง<br><br>
    Vue เรียนรู้ง่ายกว่าสำหรับคนใหม่ React flexible กว่าสำหรับโปรเจกต์ซับซ้อน`},{q:`ref กับ reactive ต่างกันอย่างไร?`,a:`<strong>ref</strong> — ใช้กับ primitive (number, string, boolean, array) ต้องใช้ <code>.value</code> ใน script<br>
    <strong>reactive</strong> — ใช้กับ object แก้ property ตรงได้เลยไม่มี <code>.value</code><br><br>
    ทั้งคู่ใช้ Vue Proxy ดัก property เหมือนกัน แค่ API ต่างกัน<br>
    หลายทีมเลือกใช้ <code>ref</code> อย่างเดียวเพื่อความ consistent`},{q:`v-if กับ v-show ต่างกันอย่างไร?`,a:`<strong>v-if</strong> — ลบ element ออกจาก DOM เลย ถ้าเงื่อนไขเป็น false<br>
    render ใหม่ทุกครั้งที่เงื่อนไขเปลี่ยน — cost สูงกว่า<br><br>
    <strong>v-show</strong> — element ยังอยู่ใน DOM แค่เพิ่ม <code>display: none</code><br>
    toggle เร็วกว่า เพราะไม่ต้อง create/destroy element<br><br>
    ใช้ <code>v-if</code> เมื่อเงื่อนไขไม่ค่อยเปลี่ยน<br>
    ใช้ <code>v-show</code> เมื่อต้อง toggle บ่อย เช่น dropdown, modal`},{q:`Composable คืออะไร ต่างจาก Component ยังไง?`,a:`<strong>Component</strong> — มี template (UI) + logic รวมกัน<br>
    <strong>Composable</strong> — มีแค่ logic ไม่มี UI ใช้ซ้ำได้ในหลาย component<br><br>
    เหมือน Custom Hook ใน React — แยก logic ออกมาเป็นฟังก์ชัน<br>
    เช่น <code>useFetch</code>, <code>useLocalStorage</code>, <code>useWindowSize</code>`},{q:`Props กับ Emit คืออะไร?`,a:`การสื่อสารระหว่าง component<br><br>
    <strong>Props</strong> — parent ส่งข้อมูลลงไปหา child (one-way, read-only)<br>
    <strong>Emit</strong> — child ส่ง event ขึ้นไปหา parent<br><br>
    เหมือน React ที่ส่ง props ลง แต่แทนที่จะส่ง callback function เป็น prop
    Vue ใช้ event system แยก (<code>emit('eventName', data)</code>)`},{q:`Pinia คืออะไร ใช้เมื่อไหร่?`,a:`Pinia คือ global state management ของ Vue 3 (ทำงานคล้าย Zustand)<br><br>
    ใช้เมื่อ:<br>
    • ข้อมูลต้องแชร์ระหว่างหลาย component ที่ไม่ได้เป็น parent-child กัน<br>
    • เช่น ข้อมูล user ที่ login, ตะกร้าสินค้า, theme<br><br>
    ถ้าข้อมูลใช้แค่ใน component เดียวหรือ parent-child → ใช้ props/emit ธรรมดาพอ`}];function Vn(){return(0,f.jsxs)(`div`,{className:`page-container`,children:[(0,f.jsxs)(`div`,{className:`page-header`,children:[(0,f.jsx)(`div`,{className:`page-badge`,children:`Frontend`}),(0,f.jsx)(`h1`,{className:`page-title`,children:`Vue 3`}),(0,f.jsx)(`p`,{className:`page-desc`,children:`เรียนรู้ Vue 3 Composition API สำหรับ React developer แนวคิดเหมือนกัน แค่ syntax และวิธีคิดต่างออกไป`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Single File Component (SFC)`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Vue ใช้ไฟล์ `,(0,f.jsx)(`code`,{children:`.vue`}),` ที่รวม HTML, JS, CSS ไว้ในไฟล์เดียว แบ่งเป็น 3 ส่วนชัดเจน — ต่างจาก React ที่รวม HTML ไว้ใน JS ผ่าน JSX`]}),(0,f.jsx)(p,{code:jn,lang:`html`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`ref & reactive — Reactivity System`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Vue track การเปลี่ยนแปลงด้วย Proxy — ต้องห่อค่าด้วย `,(0,f.jsx)(`code`,{children:`ref`}),` หรือ `,(0,f.jsx)(`code`,{children:`reactive`}),`ก่อน Vue จึงจะรู้ว่าค่าเปลี่ยนและ re-render ให้อัตโนมัติ`]}),(0,f.jsx)(p,{code:Mn,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Template Syntax`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Vue ใช้ directive (`,(0,f.jsx)(`code`,{children:`v-if`}),`, `,(0,f.jsx)(`code`,{children:`v-for`}),`, `,(0,f.jsx)(`code`,{children:`v-model`}),`) แทน JSX expression —`,(0,f.jsx)(`code`,{children:`v-model`}),` พิเศษตรงที่ bind ค่าเข้า-ออกในบรรทัดเดียว ไม่ต้องเขียน onChange เอง`]}),(0,f.jsx)(p,{code:Nn,lang:`html`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Computed & Watch`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[(0,f.jsx)(`code`,{children:`computed`}),` คำนวณค่าจาก reactive data แล้ว cache ไว้ (เหมือน useMemo) —`,(0,f.jsx)(`code`,{children:`watch`}),` ดูการเปลี่ยนแปลงแล้วทำ side effect (เหมือน useEffect)`]}),(0,f.jsx)(p,{code:Pn,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Lifecycle Hooks`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Vue มี lifecycle hook แยกชัดเจนแต่ละจังหวะ ต่างจาก React ที่ใช้ `,(0,f.jsx)(`code`,{children:`useEffect`}),`ทำทุกอย่างโดยควบคุมผ่าน dependency array`]}),(0,f.jsx)(p,{code:Fn,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Props & Emit`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Props ส่งข้อมูลจาก parent → child, Emit ส่ง event จาก child → parent — แทนที่จะส่ง callback function เป็น prop แบบ React, Vue ใช้ event system แยก`}),(0,f.jsx)(p,{code:In,lang:`html`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Composables`}),(0,f.jsxs)(`p`,{className:`section-desc`,children:[`Composable คือ function ที่แยก logic ที่ใช้ซ้ำออกมา — เหมือน Custom Hook ใน React ตั้งชื่อขึ้นต้นด้วย `,(0,f.jsx)(`code`,{children:`use`}),` เสมอ`]}),(0,f.jsx)(p,{code:Ln,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Pinia — Global State`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Pinia คือ state management ของ Vue 3 ทำงานคล้าย Zustand — ใช้เมื่อข้อมูลต้องแชร์ระหว่าง component ที่ไม่ได้เป็น parent-child กัน`}),(0,f.jsx)(p,{code:Rn,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Vue Router`}),(0,f.jsx)(`p`,{className:`section-desc`,children:`Vue Router จัดการ URL และ navigation — คล้าย React Router มี Navigation Guard ไว้ตรวจสอบสิทธิ์ก่อนเข้า route`}),(0,f.jsx)(p,{code:zn,lang:`javascript`})]}),(0,f.jsxs)(`div`,{className:`section`,children:[(0,f.jsx)(`div`,{className:`section-title`,children:`Interview Q&A`}),(0,f.jsx)(h,{items:Bn})]})]})}var Hn=[{id:`home`,label:`หน้าหลัก`,icon:`🏠`},{section:`พื้นฐาน`},{id:`jsx`,label:`JSX & Components`,icon:`⚛️`},{id:`props`,label:`Props & State`,icon:`📦`},{section:`Hooks`},{id:`useeffect`,label:`useEffect`,icon:`🎣`},{id:`usecontext`,label:`useContext`,icon:`🔗`},{id:`useref`,label:`useRef`,icon:`📎`},{id:`memo`,label:`useMemo & useCallback`,icon:`⚡`},{id:`usereducer`,label:`useReducer`,icon:`🔄`},{section:`Advanced`},{id:`customhooks`,label:`Custom Hooks`,icon:`🪝`},{id:`react19`,label:`React 19 Features`,icon:`🚀`},{section:`JavaScript`},{id:`array`,label:`Array Methods`,icon:`📋`},{section:`Backend`},{id:`nodejs`,label:`Node.js`,icon:`🟩`},{section:`Database`},{id:`sql`,label:`SQL`,icon:`🗄️`},{section:`TypeScript`},{id:`typescript`,label:`TypeScript`,icon:`📘`},{section:`DevOps`},{id:`builddeploy`,label:`Build → Deploy → Browser`,icon:`🚢`},{id:`docker`,label:`Docker`,icon:`🐳`},{section:`Vue.js`},{id:`vue`,label:`Vue 3`,icon:`💚`},{section:`สัมภาษณ์`},{id:`interview`,label:`Interview Q&A`,icon:`❓`}],Un={home:Ee,jsx:Fe,props:Ze,useeffect:gn,usecontext:ln,useref:An,memo:Ue,usereducer:wn,customhooks:de,react19:at,array:x,nodejs:Wt,sql:_t,builddeploy:ae,typescript:$t,docker:we,vue:Vn,interview:Oe};function Wn(){let[e,t]=(0,l.useState)(`home`),n=e=>{t(e),window.scrollTo(0,0)},r=Un[e]||Ee;return(0,f.jsxs)(`div`,{className:`app`,children:[(0,f.jsxs)(`aside`,{className:`sidebar`,children:[(0,f.jsxs)(`div`,{className:`sidebar-header`,children:[(0,f.jsxs)(`div`,{className:`sidebar-title`,children:[(0,f.jsx)(`span`,{children:`⚛️`}),` React Interview`]}),(0,f.jsx)(`div`,{className:`sidebar-subtitle`,children:`Welcome to Basic Web Developer Prep · React`})]}),(0,f.jsx)(`nav`,{className:`sidebar-nav`,children:Hn.map((t,r)=>t.section?(0,f.jsx)(`div`,{className:`nav-section-label`,children:t.section},r):(0,f.jsxs)(`div`,{className:`nav-item ${e===t.id?`active`:``}`,onClick:()=>n(t.id),children:[(0,f.jsx)(`span`,{className:`nav-icon`,children:t.icon}),(0,f.jsx)(`span`,{children:t.label})]},t.id))})]}),(0,f.jsx)(`main`,{className:`main-content`,children:(0,f.jsx)(r,{onNavigate:n})})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,f.jsx)(l.StrictMode,{children:(0,f.jsx)(Wn,{})}));