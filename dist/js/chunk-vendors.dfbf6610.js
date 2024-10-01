(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"04f8":function(e,t,n){"use strict";var r=n("1212"),i=n("d039"),s=n("cfe9"),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"06cf":function(e,t,n){"use strict";var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),l=n("1a2d"),u=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!i(s.f,e,t),e[t])}},"07fa":function(e,t,n){"use strict";var r=n("50c4");e.exports=function(e){return r(e.length)}},"0cfb":function(e,t,n){"use strict";var r=n("83ab"),i=n("d039"),s=n("cc12");e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){"use strict";var r=String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},1212:function(e,t,n){"use strict";var r,i,s=n("cfe9"),o=n("b5db"),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"13d2":function(e,t,n){"use strict";var r=n("e330"),i=n("d039"),s=n("1626"),o=n("1a2d"),a=n("83ab"),c=n("5e77").CONFIGURABLE,l=n("8925"),u=n("69f3"),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),_=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),y=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=_(b,"string"==typeof t?t:"")),e};Function.prototype.toString=y((function(){return s(this)&&d(this).source||l(this)}),"toString")},"14d9":function(e,t,n){"use strict";var r=n("23e7"),i=n("7b0b"),s=n("07fa"),o=n("3a34"),a=n("3511"),c=n("d039"),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},1626:function(e,t,n){"use strict";var r="object"==typeof document&&document.all;e.exports="undefined"==typeof r&&void 0!==r?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}},"1a2d":function(e,t,n){"use strict";var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},"1d80":function(e,t,n){"use strict";var r=n("7234"),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},"1fd5":function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return D})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return U})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return q})),n.d(t,"i",(function(){return V})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return H})),n.d(t,"l",(function(){return y})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return b})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return J})),n.d(t,"q",(function(){return T})),n.d(t,"r",(function(){return S})),n.d(t,"s",(function(){return A})),n.d(t,"t",(function(){return F})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return R})),n.d(t,"w",(function(){return k})),n.d(t,"x",(function(){return I})),n.d(t,"y",(function(){return C})),n.d(t,"z",(function(){return $})),n.d(t,"A",(function(){return z})),n.d(t,"B",(function(){return j}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const c=i<e.length,l=c?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==l||null==h)throw new a;const d=t<<2|o>>4;if(r.push(d),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==h){const e=l<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(e){const t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return c(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&d(n)&&(e[n]=h(e[n],t[n]));return e}function d(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof e)return e;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=()=>f().__FIREBASE_DEFAULTS__,m=()=>{if("undefined"===typeof r)return;const e=Object({NODE_ENV:"production",BASE_URL:"/"}).__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},g=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},_=()=>{try{return p()||m()||g()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},v=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},b=e=>{const t=v(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},w=e=>{var t;return null===(t=_())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function k(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function I(){var t;const n=null===(t=_())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(r){return!1}}function S(){return"object"===typeof self&&self.self===self}function A(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function x(){const e=T();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){try{return"object"===typeof indexedDB}catch(e){return!1}}function j(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P="FirebaseError";class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=P,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?L(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new N(r,o,n);return a}}function L(e,t){return e.replace(M,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(B(n)&&B(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function B(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function z(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function H(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){const n=new W(e,t);return n.subscribe.bind(n)}class W{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=G),void 0===r.error&&(r.error=G),void 0===r.complete&&(r.complete=G);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"),n("4362"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){"use strict";var r=n("5926"),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},"23e7":function(e,t,n){"use strict";var r=n("cfe9"),i=n("06cf").f,s=n("9112"),o=n("cb2d"),a=n("6374"),c=n("e893"),l=n("94ca");e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,_=e.stat;if(u=g?r:_?r[m]||a(m,{}):r[m]&&r[m].prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(_?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},"241c":function(e,t,n){"use strict";var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},"31dc":function(e,t,n){"use strict";var r=n("7ded"),i=n("589b"),s=n("1fd5"),o=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",l=12e4,u=6e5,h=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d extends s["c"]{constructor(e,t,n=0){super(m(e),`Firebase Storage: ${t} (${m(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return m(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var f,p;function m(e){return"storage/"+e}function g(){const e="An unknown error occurred, please check the error payload for server response.";return new d(f.UNKNOWN,e)}function _(e){return new d(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function v(e){return new d(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function b(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(f.UNAUTHENTICATED,e)}function y(){return new d(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(e){return new d(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function O(){return new d(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function E(){return new d(f.CANCELED,"User canceled the upload/download.")}function T(e){return new d(f.INVALID_URL,"Invalid URL '"+e+"'.")}function k(e){return new d(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function I(){return new d(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function S(){return new d(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function A(){return new d(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function C(){return new d(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x(e){return new d(f.UNSUPPORTED_ENVIRONMENT,e+" is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.")}function R(e){return new d(f.INVALID_ARGUMENT,e)}function j(){return new d(f.APP_DELETED,"The Firebase app was deleted.")}function P(e){return new d(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function N(e,t){return new d(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function D(e){throw new d(f.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(f||(f={}));class L{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=L.makeFromUrl(e,t)}catch(r){return new L(e,"")}if(""===n.path)return n;throw k(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",_=new RegExp(`^https?://${m}/${r}/${g}`,"i"),v={bucket:1,path:2},b=[{regex:o,indices:c,postModify:i},{regex:f,indices:p,postModify:l},{regex:_,indices:v,postModify:l}];for(let a=0;a<b.length;a++){const t=b[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new L(e,i),t.postModify(n);break}}if(null==n)throw T(e);return n}}class M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);const n=c()||o;if(n)return d(),void u.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),l||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function F(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return void 0!==e}function B(e){return"function"===typeof e}function $(e){return"object"===typeof e&&!Array.isArray(e)}function z(e){return"string"===typeof e||e instanceof String}function H(e){return q()&&e instanceof Blob}function q(){return"undefined"!==typeof Blob&&!Object(s["x"])()}function W(e,t,n,r){if(r<t)throw R(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw R(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function G(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(p||(p={}));class X{constructor(e,t,n,r,i,s,o,a,c,l,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new Y(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===p.NO_ERROR,i=n.getStatus();if(!t||J(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===p.ABORT;return void e(!1,new Y(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Y(s,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());V(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=g();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?j():E();r(e)}else{const e=O();r(e)}};this.canceled_?t(!1,new Y(!1,null,!0)):this.backoffId_=U(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&F(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Y{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Q(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Z(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function ee(e,t){t&&(e["X-Firebase-GMPID"]=t)}function te(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function ne(e,t,n,r,i,s,o=!0){const a=G(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return ee(l,t),Q(l,n),Z(l,s),te(l,r),new X(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ie(...e){const t=re();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(q())return new Blob(e);throw new d(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function se(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){if("undefined"===typeof atob)throw x("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ce{constructor(e,t){this.data=e,this.contentType=t||null}}function le(e,t){switch(e){case ae.RAW:return new ce(ue(t));case ae.BASE64:case ae.BASE64URL:return new ce(de(e,t));case ae.DATA_URL:return new ce(pe(t),me(t))}throw g()}function ue(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function he(e){let t;try{t=decodeURIComponent(e)}catch(n){throw N(ae.DATA_URL,"Malformed data URL.")}return ue(t)}function de(e,t){switch(e){case ae.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw N(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ae.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw N(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oe(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw N(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class fe{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw N(ae.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=ge(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function pe(e){const t=new fe(e);return t.base64?de(ae.BASE64,t.rest):he(t.rest)}function me(e){const t=new fe(e);return t.contentType}function ge(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){let n=0,r="";H(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(H(this.data_)){const n=this.data_,r=se(n,e,t);return null===r?null:new _e(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new _e(n,!0)}}static getBlob(...e){if(q()){const t=e.map(e=>e instanceof _e?e.data_:e);return new _e(ie.apply(null,t))}{const t=e.map(e=>z(e)?le(ae.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new _e(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){let t;try{t=JSON.parse(e)}catch(n){return null}return $(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ye(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function we(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t){return t}class Ee{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Oe}}let Te=null;function ke(e){return!z(e)||e.length<2?e:we(e)}function Ie(){if(Te)return Te;const e=[];function t(e,t){return ke(t)}e.push(new Ee("bucket")),e.push(new Ee("generation")),e.push(new Ee("metageneration")),e.push(new Ee("name","fullPath",!0));const n=new Ee("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new Ee("size");return i.xform=r,e.push(i),e.push(new Ee("timeCreated")),e.push(new Ee("updated")),e.push(new Ee("md5Hash",null,!0)),e.push(new Ee("cacheControl",null,!0)),e.push(new Ee("contentDisposition",null,!0)),e.push(new Ee("contentEncoding",null,!0)),e.push(new Ee("contentLanguage",null,!0)),e.push(new Ee("contentType",null,!0)),e.push(new Ee("metadata","customMetadata",!0)),Te=e,Te}function Se(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new L(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ae(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return Se(r,e),r}function Ce(e,t,n){const r=ve(t);if(null===r)return null;const i=r;return Ae(e,i,n)}function xe(e,t,n,r){const i=ve(t);if(null===i)return null;if(!z(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=K(a,n,r),l=G({alt:"media",token:t});return c+l});return c[0]}function Re(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="prefixes",Pe="items";function Ne(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[je])for(const i of n[je]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new L(t,n));r.prefixes.push(s)}if(n[Pe])for(const i of n[Pe]){const n=e._makeStorageReference(new L(t,i["name"]));r.items.push(n)}return r}function De(e,t,n){const r=ve(n);if(null===r)return null;const i=r;return Ne(e,t,i)}class Le{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){if(!e)throw g()}function Ue(e,t){function n(n,r){const i=Ce(e,r,t);return Me(null!==i),i}return n}function Fe(e,t){function n(n,r){const i=De(e,t,r);return Me(null!==i),i}return n}function Ve(e,t){function n(n,r){const i=Ce(e,r,t);return Me(null!==i),xe(i,r,e.host,e._protocol)}return n}function Be(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?y():b():402===t.getStatus()?v(e.bucket):403===t.getStatus()?w(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function $e(e){const t=Be(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=_(e.path)),i.serverResponse=r.serverResponse,i}return n}function ze(e,t,n){const r=t.fullServerUrl(),i=K(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Le(i,s,Ue(e,n),o);return a.errorHandler=$e(t),a}function He(e,t,n,r,i){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=t.bucketOnlyServerUrl(),a=K(o,e.host,e._protocol),c="GET",l=e.maxOperationRetryTime,u=new Le(a,c,Fe(e,t.bucket),l);return u.urlParams=s,u.errorHandler=Be(t),u}function qe(e,t,n){const r=t.fullServerUrl(),i=K(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Le(i,s,Ve(e,n),o);return a.errorHandler=$e(t),a}function We(e,t,n,r){const i=t.fullServerUrl(),s=K(i,e.host,e._protocol),o="PATCH",a=Re(n,r),c={"Content-Type":"application/json; charset=utf-8"},l=e.maxOperationRetryTime,u=new Le(s,o,Ue(e,r),l);return u.headers=c,u.body=a,u.errorHandler=$e(t),u}function Ke(e,t){const n=t.fullServerUrl(),r=K(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new Le(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=$e(t),a}function Ge(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Je(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Ge(null,t)),r}function Xe(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Je(t,r,i),u=Re(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=_e.getBlob(h,r,d);if(null===f)throw S();const p={name:l["fullPath"]},m=K(s,e.host,e._protocol),g="POST",_=e.maxUploadRetryTime,v=new Le(m,g,Ue(e,n),_);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Be(t),v}class Ye{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Qe(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){Me(!1)}const r=t||["active"];return Me(!!n&&-1!==r.indexOf(n)),n}function Ze(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=Je(t,r,i),a={name:o["fullPath"]},c=K(s,e.host,e._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Re(o,n),d=e.maxUploadRetryTime;function f(e){let t;Qe(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Me(!1)}return Me(z(t)),t}const p=new Le(c,l,f,d);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=Be(t),p}function et(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(e){const t=Qe(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Me(!1)}n||Me(!1);const i=Number(n);return Me(!isNaN(i)),new Ye(i,r.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new Le(n,o,s,a);return c.headers=i,c.errorHandler=Be(t),c}const tt=262144;function nt(e,t,n,r,i,s,o,a){const c=new Ye(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw A();const l=c.total-c.current;let u=l;i>0&&(u=Math.min(u,i));const h=c.current,d=h+u;let f="";f=0===u?"finalize":l===u?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},m=r.slice(h,d);if(null===m)throw S();function g(e,n){const i=Qe(e,["active","final"]),o=c.current+u,a=r.size();let l;return l="final"===i?Ue(t,s)(e,n):null,new Ye(o,a,"final"===i,l)}const _="POST",v=t.maxUploadRetryTime,b=new Le(n,_,g,v);return b.headers=p,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Be(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={STATE_CHANGED:"state_changed"},it={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function st(e){switch(e){case"running":case"pausing":case"canceling":return it.RUNNING;case"paused":return it.PAUSED;case"success":return it.SUCCESS;case"canceled":return it.CANCELED;case"error":return it.ERROR;default:return it.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,n){const r=B(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=null;class lt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=p.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=p.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw D("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ut extends lt{initXhr(){this.xhr_.responseType="text"}}function ht(){return ct?ct():new ut}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Ie(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(J(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,h),this._needToFetchStatus=!0,void this.completeTransitions_();e=O()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=Ze(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ht,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=et(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,ht,t,n);this._request=i,i.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=tt*this._chunkMultiplier,t=new Ye(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=nt(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ht,r,i,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const e=tt*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=ze(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ht,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=Xe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ht,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=E(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=st(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new ot(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(st(this._state)){case it.SUCCESS:at(this._resolve.bind(null,this.snapshot))();break;case it.CANCELED:case it.ERROR:const t=this._reject;at(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=st(this._state);switch(t){case it.RUNNING:case it.PAUSED:e.next&&at(e.next.bind(e,this.snapshot))();break;case it.SUCCESS:e.complete&&at(e.complete.bind(e))();break;case it.CANCELED:case it.ERROR:e.error&&at(e.error.bind(e,this._error))();break;default:e.error&&at(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this._service=e,this._location=t instanceof L?t:L.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ft(e,t)}get root(){const e=new L(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return we(this._location.path)}get storage(){return this._service}get parent(){const e=be(this._location.path);if(null===e)return null;const t=new L(this._location.bucket,e);return new ft(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw P(e)}}function pt(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new dt(e,new _e(t),n)}function mt(e){const t={prefixes:[],items:[]};return gt(e,t).then(()=>t)}async function gt(e,t,n){const r={pageToken:n},i=await _t(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await gt(e,t,i.nextPageToken)}function _t(e,t){null!=t&&"number"===typeof t.maxResults&&W("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=He(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,ht)}function vt(e){e._throwIfRoot("getMetadata");const t=ze(e.storage,e._location,Ie());return e.storage.makeRequestWithTokens(t,ht)}function bt(e,t){e._throwIfRoot("updateMetadata");const n=We(e.storage,e._location,t,Ie());return e.storage.makeRequestWithTokens(n,ht)}function yt(e){e._throwIfRoot("getDownloadURL");const t=qe(e.storage,e._location,Ie());return e.storage.makeRequestWithTokens(t,ht).then(e=>{if(null===e)throw C();return e})}function wt(e){e._throwIfRoot("deleteObject");const t=Ke(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ht)}function Ot(e,t){const n=ye(e._location.path,t),r=new L(e._location.bucket,n);return new ft(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){return/^[A-Za-z]+:\/\//.test(e)}function Tt(e,t){return new ft(e,t)}function kt(e,t){if(e instanceof Ct){const n=e;if(null==n._bucket)throw I();const r=new ft(n,n._bucket);return null!=t?kt(r,t):r}return void 0!==t?Ot(e,t):e}function It(e,t){if(t&&Et(t)){if(e instanceof Ct)return Tt(e,t);throw R("To use ref(service, url), the first argument must be a Storage instance.")}return kt(e,t)}function St(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:L.makeFromBucketSpec(n,e)}function At(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:Object(s["g"])(i,e.app.options.projectId))}class Ct{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?L.makeFromBucketSpec(r,this._host):St(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=L.makeFromBucketSpec(this._url,e):this._bucket=St(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ft(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new M(j());{const s=ne(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const xt="@firebase/storage",Rt="0.11.2",jt="storage";function Pt(e,t,n){return e=Object(s["p"])(e),pt(e,t,n)}function Nt(e){return e=Object(s["p"])(e),vt(e)}function Dt(e,t){return e=Object(s["p"])(e),bt(e,t)}function Lt(e,t){return e=Object(s["p"])(e),_t(e,t)}function Mt(e){return e=Object(s["p"])(e),mt(e)}function Ut(e){return e=Object(s["p"])(e),yt(e)}function Ft(e){return e=Object(s["p"])(e),wt(e)}function Vt(e,t){return e=Object(s["p"])(e),It(e,t)}function Bt(e,t){return Ot(e,t)}function $t(e,t,n,r={}){At(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Ct(n,r,s,t,i["SDK_VERSION"])}function Ht(){Object(i["_registerComponent"])(new o["a"](jt,zt,"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(xt,Rt,""),Object(i["registerVersion"])(xt,Rt,"esm2017")}Ht();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new qt(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new qt(t,this,this._ref))},t)}on(e,t,n,r){let i=void 0;return t&&(i="function"===typeof t?e=>t(new qt(e,this,this._ref)):{next:t.next?e=>t.next(new qt(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class Kt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Gt(e,this._service))}get items(){return this._delegate.items.map(e=>new Gt(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Bt(this._delegate,e);return new Gt(t,this.storage)}get root(){return new Gt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Gt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Wt(Pt(this._delegate,e,t),this)}putString(e,t=ae.RAW,n){this._throwIfRoot("putString");const r=le(t,e),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new Wt(new dt(this._delegate,new _e(r.data,!0),i),this)}listAll(){return Mt(this._delegate).then(e=>new Kt(e,this.storage))}list(e){return Lt(this._delegate,e||void 0).then(e=>new Kt(e,this.storage))}getMetadata(){return Nt(this._delegate)}updateMetadata(e){return Dt(this._delegate,e)}getDownloadURL(){return Ut(this._delegate)}delete(){return this._throwIfRoot("delete"),Ft(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw P(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Xt(e))throw R("ref() expected a child path but got a URL, use refFromURL instead.");return new Gt(Vt(this._delegate,e),this)}refFromURL(e){if(!Xt(e))throw R("refFromURL() expected a full URL but got a child path, use ref() instead.");try{L.makeFromUrl(e,this._delegate.host)}catch(t){throw R("refFromUrl() expected a valid full URL but got an invalid one.")}return new Gt(Vt(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){$t(this._delegate,e,t,n)}}function Xt(e){return/^[A-Za-z]+:\/\//.test(e)}const Yt="@firebase/storage-compat",Qt="0.3.2",Zt="storage-compat";function en(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new Jt(n,r);return i}function tn(e){const t={TaskState:it,TaskEvent:rt,StringFormat:ae,Storage:Jt,Reference:Gt};e.INTERNAL.registerComponent(new o["a"](Zt,en,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Yt,Qt)}tn(r["a"])},3511:function(e,t,n){"use strict";var r=TypeError,i=9007199254740991;e.exports=function(e){if(e>i)throw r("Maximum allowed index exceeded");return e}},"3a34":function(e,t,n){"use strict";var r=n("83ab"),i=n("e8b5"),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},"3a9b":function(e,t,n){"use strict";var r=n("e330");e.exports=r({}.isPrototypeOf)},"3f4e":function(e,t,n){"use strict";function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:{}}n.d(t,"a",(function(){return f}));const s="function"===typeof Proxy,o="devtools-plugin:setup",a="plugin:settings:set";let c,l;function u(){var e;return void 0!==c||("undefined"!==typeof window&&window.performance?(c=!0,l=window.performance):"undefined"!==typeof globalThis&&(null===(e=globalThis.perf_hooks)||void 0===e?void 0:e.performance)?(c=!0,l=globalThis.perf_hooks.performance):c=!1),c}function h(){return u()?l.now():Date.now()}class d{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e},now(){return h()}},t&&t.on(a,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function f(e,t){const n=e,a=i(),c=r(),l=s&&n.enableEarlyProxy;if(!c||!a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new d(n,c):null,r=a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else c.emit(o,e,t)}},"40d5":function(e,t,n){"use strict";var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){"use strict";var r=n("e330"),i=n("d039"),s=n("c6b6"),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},"485a":function(e,t,n){"use strict";var r=n("c65b"),i=n("1626"),s=n("861d"),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},"4d64":function(e,t,n){"use strict";var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var l,u=i(o,c);if(e&&n!==n){while(c>u)if(l=a[u++],l!==l)return!0}else for(;c>u;u++)if((e||u in a)&&a[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"50c4":function(e,t,n){"use strict";var r=n("5926"),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return Hn})),n.d(t,"b",(function(){return cn})),n.d(t,"c",(function(){return zn})),n.d(t,"d",(function(){return ln})),n.d(t,"e",(function(){return Vn})),n.d(t,"f",(function(){return Bn})),n.d(t,"g",(function(){return nn})),n.d(t,"h",(function(){return $n}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new s["b"]("@firebase/firestore");function u(e,...t){if(l.logLevel<=s["a"].DEBUG){const n=t.map(f);l.debug(`Firestore (${c}): ${e}`,...n)}}function h(e,...t){if(l.logLevel<=s["a"].ERROR){const n=t.map(f);l.error(`Firestore (${c}): ${e}`,...n)}}function d(e,...t){if(l.logLevel<=s["a"].WARN){const n=t.map(f);l.warn(`Firestore (${c}): ${e}`,...n)}}function f(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const t=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+e;throw h(t),new Error(t)}function m(e,t){e||p()}function g(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="ok",v="cancelled",b="unknown",y="invalid-argument",w="deadline-exceeded",O="not-found",E="permission-denied",T="unauthenticated",k="resource-exhausted",I="failed-precondition",S="aborted",A="out-of-range",C="unimplemented",x="internal",R="unavailable";class j extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(a.UNAUTHENTICATED))}shutdown(){}}class D{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class L{constructor(e){this.auth=null,e.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(m("string"==typeof e.accessToken),new P(e.accessToken,new a(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class M{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=a.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class U{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new M(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(a.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V{constructor(e){this.l=e,this.appCheck=null,e.onInit(e=>{this.appCheck=e})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(m("string"==typeof e.token),new F(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ${constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof $&&e.projectId===this.projectId&&e.database===this.database}}class z{constructor(e,t,n){void 0===t?t=0:t>e.length&&p(),void 0===n?n=e.length-t:n>e.length-t&&p(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===z.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class H extends z{construct(e,t,n){return new H(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new j(y,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new H(t)}static emptyPath(){return new H([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends z{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new j(y,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new j(y,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new j(y,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new j(y,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(H.fromString(e))}static fromName(e){return new K(H.fromString(e).popFirst(5))}static empty(){return new K(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===H.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new H(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t,n){if(!n)throw new j(y,`Function ${e}() cannot be called with an empty ${t}.`)}function J(e){if(!K.isDocumentKey(e))throw new j(y,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function X(e){if(K.isDocumentKey(e))throw new j(y,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Y(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":p()}function Q(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new j(y,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Y(e);throw new j(y,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let ee=null;function te(){return null===ee?ee=268435456+Math.round(2147483648*Math.random()):ee++,"0x"+ee.toString(16)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function ne(e){return null==e}function re(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se,oe;function ae(e){if(void 0===e)return h("RPC_ERROR","HTTP error has no status"),b;switch(e){case 200:return _;case 400:return I;case 401:return T;case 403:return E;case 404:return O;case 409:return S;case 416:return A;case 429:return k;case 499:return v;case 500:return b;case 501:return C;case 503:return R;case 504:return w;default:return e>=200&&e<300?_:e>=400&&e<500?I:e>=500&&e<600?x:b}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(oe=se||(se={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";class ce extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.m=t+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,t,n,r,i){const s=te(),o=this.I(e,t);u("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.T(a,r,i),this.A(e,o,a,n).then(t=>(u("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw d("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}R(e,t,n,r,i,s){return this.v(e,t,n,r,i)}T(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+c,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}I(e,t){const n=ie[e];return`${this.m}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.P=t}V(e,t){throw new Error("Not supported by FetchConnection")}async A(e,t,n,r){var i;const s=JSON.stringify(r);let o;try{o=await this.P(t,{method:"POST",headers:n,body:s})}catch(e){const t=e;throw new j(ae(t.status),"Request failed with error: "+t.statusText)}if(!o.ok){let e=await o.json();Array.isArray(e)&&(e=e[0]);const t=null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message;throw new j(ae(o.status),"Request failed with error: "+(null!=t?t:o.statusText))}return o.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=le(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function he(e,t){return e<t?-1:e>t?1:0}function de(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function pe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new me("Invalid base64 string: "+e):e}}(e);return new ge(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const _e=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ve(e){if(m(!!e),"string"==typeof e){let t=0;const n=_e.exec(e);if(m(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:be(e.seconds),nanos:be(e.nanos)}}function be(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ye(e){return"string"==typeof e?ge.fromBase64String(e):ge.fromUint8Array(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(y,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(y,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(y,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(y,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new we(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ee(e){const t=e.mapValue.fields.__previous_value__;return Oe(t)?Ee(t):t}function Te(e){const t=ve(e.mapValue.fields.__local_write_time__.timestampValue);return new we(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke={fields:{__type__:{stringValue:"__max__"}}};function Ie(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Oe(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:10:p()}function Se(e,t){if(e===t)return!0;const n=Ie(e);if(n!==Ie(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Te(e).isEqual(Te(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ve(e.timestampValue),r=ve(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ye(e.bytesValue).isEqual(ye(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return be(e.geoPointValue.latitude)===be(t.geoPointValue.latitude)&&be(e.geoPointValue.longitude)===be(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return be(e.integerValue)===be(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=be(e.doubleValue),r=be(t.doubleValue);return n===r?re(n)===re(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return de(e.arrayValue.values||[],t.arrayValue.values||[],Se);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(fe(n)!==fe(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Se(n[i],r[i])))return!1;return!0}(e,t);default:return p()}}function Ae(e,t){return void 0!==(e.values||[]).find(e=>Se(e,t))}function Ce(e,t){if(e===t)return 0;const n=Ie(e),r=Ie(t);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=be(e.integerValue||e.doubleValue),r=be(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return xe(e.timestampValue,t.timestampValue);case 4:return xe(Te(e),Te(t));case 5:return he(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ye(e),r=ye(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=he(n[i],r[i]);if(0!==e)return e}return he(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=he(be(e.latitude),be(t.latitude));return 0!==n?n:he(be(e.longitude),be(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Ce(n[i],r[i]);if(e)return e}return he(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ke&&t===ke)return 0;if(e===ke)return 1;if(t===ke)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=he(r[o],s[o]);if(0!==e)return e;const t=Ce(n[r[o]],i[s[o]]);if(0!==t)return t}return he(r.length,s.length)}(e.mapValue,t.mapValue);default:throw p()}}function xe(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return he(e,t);const n=ve(e),r=ve(t),i=he(n.seconds,r.seconds);return 0!==i?i:he(n.nanos,r.nanos)}function Re(e){return!!e&&"arrayValue"in e}function je(e){return!!e&&"nullValue"in e}function Pe(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ne(e){return!!e&&"mapValue"in e}function De(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return pe(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=De(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=De(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Le{constructor(e,t){this.position=e,this.inclusive=t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{}class Ue extends Me{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ve(e,t,n):"array-contains"===t?new He(e,n):"in"===t?new qe(e,n):"not-in"===t?new We(e,n):"array-contains-any"===t?new Ke(e,n):new Ue(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Be(e,n):new $e(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ce(t,this.value)):null!==t&&Ie(this.value)===Ie(t)&&this.matchesComparison(Ce(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return p()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fe extends Me{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new Fe(e,t)}matches(e){return"and"===this.op?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.D||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(e=>e.isInequality());return null!==e?e.field:null}F(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class Ve extends Ue{constructor(e,t,n){super(e,t,n),this.key=K.fromName(n.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class Be extends Ue{constructor(e,t){super(e,"in",t),this.keys=ze("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $e extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=ze("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ze(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>K.fromName(e.referenceValue))}class He extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Re(t)&&Ae(t.arrayValue,this.value)}}class qe extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ae(this.value.arrayValue,t)}}class We extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ae(this.value.arrayValue,t)}}class Ke extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Re(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Ae(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t="asc"){this.field=e,this.dir=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Je(e)}static min(){return new Je(new we(0,0))}static max(){return new Je(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.comparator=e,this.root=t||Qe.EMPTY}insert(e,t){return new Xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ye(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ye(this.root,e,this.comparator,!0)}}class Ye{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Qe.RED,this.left=null!=r?r:Qe.EMPTY,this.right=null!=i?i:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Qe(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Qe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const e=this.left.check();if(e!==this.right.check())throw p();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1,Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new et(this.data.getIterator())}getIteratorFrom(e){return new et(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ze))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class et{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new tt([])}unionWith(e){let t=new Ze(W.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new tt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return de(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ne(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=De(t)}setAll(e){let t=W.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=De(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ne(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Se(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ne(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){pe(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new nt(De(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rt(e,0,Je.min(),Je.min(),Je.min(),nt.empty(),0)}static newFoundDocument(e,t,n,r){return new rt(e,1,t,Je.min(),n,r,0)}static newNoDocument(e,t){return new rt(e,2,t,Je.min(),Je.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,Je.min(),Je.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Je.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Je.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.S=null}}function st(e,t=null,n=[],r=[],i=null,s=null,o=null){return new it(e,t,n,r,i,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.q=null,this.O=null,this.startAt,this.endAt}}function at(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ct(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function lt(e){const t=g(e);if(null===t.q){t.q=[];const e=ct(t),n=at(t);if(null!==e&&null===n)e.isKeyField()||t.q.push(new Ge(e)),t.q.push(new Ge(W.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.q.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.q.push(new Ge(W.keyField(),e))}}}return t.q}function ut(e){const t=g(e);if(!t.O)if("F"===t.limitType)t.O=st(t.path,t.collectionGroup,lt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of lt(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Ge(i.field,t))}const n=t.endAt?new Le(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Le(t.startAt.position,t.startAt.inclusive):null;t.O=st(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.O}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!re(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:re(t)?"-0":t}}(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this._=void 0}}class ft extends dt{}class pt extends dt{constructor(e){super(),this.elements=e}}class mt extends dt{constructor(e){super(),this.elements=e}}class gt extends dt{constructor(e,t){super(),this.serializer=e,this.k=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _t}static exists(e){return new _t(void 0,e)}static updateTime(e){return new _t(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class vt{}class bt extends vt{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class yt extends vt{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class wt extends vt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ot extends vt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Tt=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),kt=(()=>{const e={and:"AND",or:"OR"};return e})();class It{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function St(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function At(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ct(e,t){return St(e,t.toTimestamp())}function xt(e){return m(!!e),Je.fromTimestamp(function(e){const t=ve(e);return new we(t.seconds,t.nanos)}(e))}function Rt(e,t){return function(e){return new H(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function jt(e,t){return Rt(e.databaseId,t.path)}function Pt(e,t){const n=function(e){const t=H.fromString(e);return m(Wt(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new j(y,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new j(y,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new K((m((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)));var r}function Nt(e,t){return Rt(e.databaseId,t)}function Dt(e){return new H(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Lt(e,t,n){return{name:jt(e,t),fields:n.value.mapValue.fields}}function Mt(e,t){return"found"in t?function(e,t){m(!!t.found),t.found.name,t.found.updateTime;const n=Pt(e,t.found.name),r=xt(t.found.updateTime),i=t.found.createTime?xt(t.found.createTime):Je.min(),s=new nt({mapValue:{fields:t.found.fields}});return rt.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){m(!!t.missing),m(!!t.readTime);const n=Pt(e,t.missing),r=xt(t.readTime);return rt.newNoDocument(n,r)}(e,t):p()}function Ut(e,t){let n;if(t instanceof bt)n={update:Lt(e,t.key,t.value)};else if(t instanceof wt)n={delete:jt(e,t.key)};else if(t instanceof yt)n={update:Lt(e,t.key,t.data),updateMask:qt(t.fieldMask)};else{if(!(t instanceof Ot))return p();n={verify:jt(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof ft)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof pt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof mt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof gt)return{fieldPath:t.field.canonicalString(),increment:n.k};throw p()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ct(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:p()}(e,t.precondition)),n}function Ft(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Nt(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Nt(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Ht(Fe.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:zt(e.field),direction:Vt(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.useProto3Json||ne(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Vt(e){return Et[e]}function Bt(e){return Tt[e]}function $t(e){return kt[e]}function zt(e){return{fieldPath:e.canonicalString()}}function Ht(e){return e instanceof Ue?function(e){if("=="===e.op){if(Pe(e.value))return{unaryFilter:{field:zt(e.field),op:"IS_NAN"}};if(je(e.value))return{unaryFilter:{field:zt(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Pe(e.value))return{unaryFilter:{field:zt(e.field),op:"IS_NOT_NAN"}};if(je(e.value))return{unaryFilter:{field:zt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(e.field),op:Bt(e.op),value:e.value}}}(e):e instanceof Fe?function(e){const t=e.getFilters().map(e=>Ht(e));return 1===t.length?t[0]:{compositeFilter:{op:$t(e.op),filters:t}}}(e):p()}function qt(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wt(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e){return new It(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.J=!1}X(){if(this.J)throw new j(I,"The client has already been terminated.")}v(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.v(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new j(b,e.toString())})}R(e,t,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new j(b,e.toString())})}terminate(){this.J=!0}}async function Jt(e,t){const n=g(e),r=Dt(n.serializer)+"/documents",i={writes:t.map(e=>Ut(n.serializer,e))};await n.v("Commit",r,i)}async function Xt(e,t){const n=g(e),r=Dt(n.serializer)+"/documents",i={documents:t.map(e=>jt(n.serializer,e))},s=await n.R("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach(e=>{const t=Mt(n.serializer,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());m(!!t),a.push(t)}),a}async function Yt(e,t){const n=g(e),r=Ft(n.serializer,ut(t));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(e=>!!e.document).map(e=>function(e,t,n){const r=Pt(e,t.name),i=xt(t.updateTime),s=t.createTime?xt(t.createTime):Je.min(),o=new nt({mapValue:{fields:t.fields}}),a=rt.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}(n.serializer,e.document,void 0))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qt=new Map;function Zt(e){if(e._terminated)throw new j(I,"The client has already been terminated.");if(!Qt.has(e)){u("ComponentProvider","Initializing Datastore");const s=function(e){return new ce(e,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new B(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Z(i.experimentalLongPollingOptions),i.useFetchStreams))),o=Kt(e._databaseId),a=function(e,t,n,r){return new Gt(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,s,o);Qt.set(e,a)}var t,n,r,i;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return Qt.get(e)}class en{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new j(y,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new j(y,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}!function(e,t,n,r){if(!0===t&&!0===r)throw new j(y,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new j(y,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new j(y,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new j(y,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class tn{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new en({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(I,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new j(I,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new en(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new N;switch(e.type){case"firstParty":return new U(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new j(y,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Qt.get(e);t&&(u("ComponentProvider","Removing Datastore"),Qt.delete(e),t.terminate())}(this),Promise.resolve()}}function nn(e,t){const n="object"==typeof e?e:Object(r["getApp"])(),i="string"==typeof e?e:t||"(default)",s=Object(r["_getProvider"])(n,"firestore/lite").getImmediate({identifier:i});if(!s._initialized){const e=Object(o["n"])("firestore");e&&rn(s,...e)}return s}function rn(e,t,n,r={}){var i;const s=(e=Q(e,tn))._getSettings(),c=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==c&&d("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:c,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=a.MOCK_USER;else{t=Object(o["g"])(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new j(y,"mockUserToken must contain 'sub' or 'user_id' field!");n=new a(s)}e._authCredentials=new D(new P(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class on{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new on(this.firestore,e,this._query)}}class an extends on{constructor(e,t,n){super(e,t,new ot(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new K(e))}withConverter(e){return new an(this.firestore,e,this._path)}}function cn(e,t,...n){if(e=Object(o["p"])(e),G("collection","path",t),e instanceof tn){const r=H.fromString(t,...n);return X(r),new an(e,null,r)}{if(!(e instanceof sn||e instanceof an))throw new j(y,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(H.fromString(t,...n));return X(r),new an(e.firestore,null,r)}}function ln(e,t,...n){if(e=Object(o["p"])(e),1===arguments.length&&(t=ue.N()),G("doc","path",t),e instanceof tn){const r=H.fromString(t,...n);return J(r),new sn(e,null,new K(r))}{if(!(e instanceof sn||e instanceof an))throw new j(y,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(H.fromString(t,...n));return J(r),new sn(e.firestore,e instanceof an?e.converter:null,new K(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new un(ge.fromBase64String(e))}catch(e){throw new j(y,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new un(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new j(y,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(y,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(y,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=/^__.*__$/;class mn{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new bt(e,this.data,t,this.fieldTransforms)}}class gn{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new yt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _n(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class vn{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new vn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,st:!1});return r.it(e),r}ot(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,st:!1});return r.tt(),r}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return jn(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(0===e.length)throw this.ct("Document fields must not be empty");if(_n(this.et)&&pn.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class bn{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Kt(e)}ft(e,t,n,r=!1){return new vn({et:e,methodName:t,lt:n,path:W.emptyPath(),st:!1,ht:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yn(e){const t=e._freezeSettings(),n=Kt(e._databaseId);return new bn(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wn(e,t,n,r,i,s={}){const o=e.ft(s.merge||s.mergeFields?2:0,t,n,i);An("Data must be an object, but it was:",o,r);const a=In(r,o);let c,l;if(s.merge)c=new tt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Cn(t,r,n);if(!o.contains(i))throw new j(y,`Field '${i}' is specified in your field mask but missing from your input data.`);Pn(e,i)||e.push(i)}c=new tt(e),l=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,l=o.fieldTransforms;return new mn(new nt(a),c,l)}class On extends dn{_toFieldTransform(e){if(2!==e.et)throw 1===e.et?e.ct(this._methodName+"() can only appear at the top level of your update data"):e.ct(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof On}}function En(e,t,n,r){const i=e.ft(1,t,n);An("Data must be an object, but it was:",i,r);const s=[],a=nt.empty();pe(r,(e,r)=>{const c=Rn(t,e,n);r=Object(o["p"])(r);const l=i.ot(c);if(r instanceof On)s.push(c);else{const e=kn(r,l);null!=e&&(s.push(c),a.set(c,e))}});const c=new tt(s);return new gn(a,c,i.fieldTransforms)}function Tn(e,t,n,r,i,s){const a=e.ft(1,t,n),c=[Cn(t,r,n)],l=[i];if(s.length%2!=0)throw new j(y,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Cn(t,s[o])),l.push(s[o+1]);const u=[],h=nt.empty();for(let f=c.length-1;f>=0;--f)if(!Pn(u,c[f])){const e=c[f];let t=l[f];t=Object(o["p"])(t);const n=a.ot(e);if(t instanceof On)u.push(e);else{const r=kn(t,n);null!=r&&(u.push(e),h.set(e,r))}}const d=new tt(u);return new gn(h,d,a.fieldTransforms)}function kn(e,t){if(Sn(e=Object(o["p"])(e)))return An("Unsupported field value:",t,e),In(e,t);if(e instanceof dn)return function(e,t){if(!_n(t.et))throw t.ct(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ct(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.st&&4!==t.et)throw t.ct("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=kn(i,t.ut(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["p"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ht(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=we.fromDate(e);return{timestampValue:St(t.serializer,n)}}if(e instanceof we){const n=new we(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:St(t.serializer,n)}}if(e instanceof fn)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof un)return{bytesValue:At(t.serializer,e._byteString)};if(e instanceof sn){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ct(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Rt(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ct("Unsupported field value: "+Y(e))}(e,t)}function In(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(e,(e,r)=>{const i=kn(r,t.rt(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Sn(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof we||e instanceof fn||e instanceof un||e instanceof sn||e instanceof dn)}function An(e,t,n){if(!Sn(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Y(n);throw"an object"===r?t.ct(e+" a custom object"):t.ct(e+" "+r)}}function Cn(e,t,n){if((t=Object(o["p"])(t))instanceof hn)return t._internalPath;if("string"==typeof t)return Rn(e,t);throw jn("Field path arguments must be of type string or ",e,!1,void 0,n)}const xn=new RegExp("[~\\*/\\[\\]]");function Rn(e,t,n){if(t.search(xn)>=0)throw jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hn(...t.split("."))._internalPath}catch(r){throw jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jn(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new j(y,a+e+c)}function Pn(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Dn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mn("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Dn extends Nn{data(){return super.data()}}class Ln{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function Mn(e,t){return"string"==typeof t?Rn(e,t):t instanceof hn?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Un(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Fn extends class{convertValue(e,t="none"){switch(Ie(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ye(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw p()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return pe(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new fn(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ee(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Te(e));default:return null}}convertTimestamp(e){const t=ve(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=H.fromString(e);m(Wt(n));const r=new $(n.get(1),n.get(3)),i=new K(n.popFirst(5));return r.isEqual(t)||h(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new un(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,t)}}function Vn(e){const t=Zt((e=Q(e,sn)).firestore),n=new Fn(e.firestore);return Xt(t,[e._key]).then(t=>{m(1===t.length);const r=t[0];return new Nn(e.firestore,n,e._key,r.isFoundDocument()?r:null,e.converter)})}function Bn(e){!function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new j(C,"limitToLast() queries require specifying at least one orderBy() clause")}((e=Q(e,on))._query);const t=Zt(e.firestore),n=new Fn(e.firestore);return Yt(t,e._query).then(t=>{const r=t.map(t=>new Dn(e.firestore,n,t.key,t,e.converter));return"L"===e._query.limitType&&r.reverse(),new Ln(e,r)})}function $n(e,t,n,...r){const i=yn((e=Q(e,sn)).firestore);let s;return s="string"==typeof(t=Object(o["p"])(t))||t instanceof hn?Tn(i,"updateDoc",e._key,t,n,r):En(i,"updateDoc",e._key,t),Jt(Zt(e.firestore),[s.toMutation(e._key,_t.exists(!0))])}function zn(e){return Jt(Zt((e=Q(e,sn)).firestore),[new wt(e._key,_t.none())])}function Hn(e,t){const n=ln(e=Q(e,an)),r=Un(e.converter,t),i=wn(yn(e.firestore),"addDoc",n._key,r,null!==n.converter,{});return Jt(Zt(e.firestore),[i.toMutation(n._key,_t.exists(!1))]).then(()=>n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){c=e}(r["SDK_VERSION"]+"_lite"),Object(r["_registerComponent"])(new i["a"]("firestore/lite",(e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new tn(new L(e.getProvider("auth-internal")),new V(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new j(y,'"projectId" not provided in firebase.initializeApp.');return new $(e.options.projectId,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),Object(r["registerVersion"])("firestore-lite","3.13.0",""),Object(r["registerVersion"])("firestore-lite","3.13.0","esm2017")},55028:function(e,t,n){"use strict";n.d(t,"a",(function(){return J})),n.d(t,"b",(function(){return Q}));var r=n("7a23"),i=n("3f4e"),s="store";function o(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function u(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state,s=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,c={},l={},h=Object(r["k"])(!0);h.run((function(){o(a,(function(t,n){c[n]=u(t,e),l[n]=Object(r["b"])((function(){return c[n]()})),Object.defineProperty(e.getters,n,{get:function(){return l[n].value},enumerable:!0})}))})),e._state=Object(r["u"])({data:t}),e._scope=h,e.strict&&y(e),i&&n&&e._withCommit((function(){i.data=null})),s&&s.stop()}function p(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[o]=r),!s&&!i){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var l=r.context=m(e,o,n);r.forEachMutation((function(t,n){var r=o+n;_(e,r,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;v(e,r,i,l)})),r.forEachGetter((function(t,n){var r=o+n;b(e,r,t,l)})),r.forEachChild((function(r,s){p(e,t,n.concat(s),r,i)}))}function m(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,c=s.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,o);console.error("[vuex] unknown local action type: "+s.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,n)}}}),i}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function _(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function v(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function b(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function y(e){Object(r["E"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var E="vuex bindings",T="vuex:mutations",k="vuex:actions",I="vuex",S=0;function A(e,t){Object(i["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:T,label:"Vuex Mutations",color:C}),n.addTimelineLayer({id:k,label:"Vuex Actions",color:C}),n.addInspector({id:I,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===I)if(n.filter){var r=[];D(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[N(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===I){var r=n.nodeId;g(t,r),n.state=L(U(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===I){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(I),n.sendInspectorState(I),n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=S++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:k,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var C=8702998,x=6710886,R=16777215,j={label:"namespaced",textColor:R,backgroundColor:x};function P(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N(e,t){return{id:t||"root",label:P(t),tags:e.namespaced?[j]:[],children:Object.keys(e._children).map((function(n){return N(e._children[n],t+n+"/")}))}}function D(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[j]:[]}),Object.keys(t._children).forEach((function(i){D(e,t._children[i],n,r+i+"/")}))}function L(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=M(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?P(e):e,editable:!1,value:F((function(){return s[e]}))}}))}return i}function M(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=F((function(){return e[n]}))}else t[n]=F((function(){return e[n]}))})),t}function U(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function F(e){try{return e()}catch(t){return t}}var V=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(e,t){this._children[e]=t},V.prototype.removeChild=function(e){delete this._children[e]},V.prototype.getChild=function(e){return this._children[e]},V.prototype.hasChild=function(e){return e in this._children},V.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},V.prototype.forEachChild=function(e){o(this._children,e)},V.prototype.forEachGetter=function(e){this._rawModule.getters&&o(this._rawModule.getters,e)},V.prototype.forEachAction=function(e){this._rawModule.actions&&o(this._rawModule.actions,e)},V.prototype.forEachMutation=function(e){this._rawModule.mutations&&o(this._rawModule.mutations,e)},Object.defineProperties(V.prototype,B);var $=function(e){this.register([],e,!1)};function z(e,t,n){if(K(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");z(e.concat(r),t.getChild(r),n.modules[r])}}$.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},$.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},$.prototype.update=function(e){z([],this.root,e)},$.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),K(e,t);var i=new V(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&o(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},$.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},$.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var H={assert:function(e){return"function"===typeof e},expected:"function"},q={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},W={getters:H,mutations:H,actions:q};function K(e,t){Object.keys(W).forEach((function(n){if(t[n]){var r=W[n];o(t[n],(function(t,i){l(r.assert(t),G(e,n,i,t,r.expected))}))}}))}function G(e,t,n,r,i){var s=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(s+=' in module "'+e.join(".")+'"'),s+=" is "+JSON.stringify(r)+".",s}function J(e){return new X(e)}var X=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new $(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(o,e,t)},this.commit=function(e,t,n){return u.call(o,e,t,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),r.forEach((function(e){return e(n)}))},Y={state:{configurable:!0}};X.prototype.install=function(e,t){e.provide(t||s,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&A(e,this)},Y.state.get=function(){return this._state.data},Y.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),s=i.type,o=i.payload,a=i.options,c={type:s,payload:o},l=this._mutations[s];l?(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+s)},X.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){console.warn("[vuex] error in before action subscribers: "),console.error(l)}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){console.warn("[vuex] error in after action subscribers: "),console.error(l)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){console.warn("[vuex] error in error action subscribers: "),console.error(l)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},X.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},X.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},X.prototype.watch=function(e,t,n){var i=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(r["E"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},X.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},X.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},X.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},X.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},X.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},X.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(X.prototype,Y);te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ne(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=ne(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));var Q=te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ne(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n}));te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=ne(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function Z(e){return ee(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ee(e){return Array.isArray(e)||a(e)}function te(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ne(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5692:function(e,t,n){"use strict";var r=n("c6cd");e.exports=function(e,t){return r[e]||(r[e]=t||{})}},"56ef":function(e,t,n){"use strict";var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return s["c"]})),n.d(t,"SDK_VERSION",(function(){return ve})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return se})),n.d(t,"_addComponent",(function(){return le})),n.d(t,"_addOrOverwriteComponent",(function(){return ue})),n.d(t,"_apps",(function(){return ae})),n.d(t,"_clearComponents",(function(){return pe})),n.d(t,"_components",(function(){return ce})),n.d(t,"_getProvider",(function(){return de})),n.d(t,"_registerComponent",(function(){return he})),n.d(t,"_removeServiceInstance",(function(){return fe})),n.d(t,"deleteApp",(function(){return Oe})),n.d(t,"getApp",(function(){return ye})),n.d(t,"getApps",(function(){return we})),n.d(t,"initializeApp",(function(){return be})),n.d(t,"onLog",(function(){return Te})),n.d(t,"registerVersion",(function(){return Ee})),n.d(t,"setLogLevel",(function(){return ke}));var r=n("22e5"),i=n("e691"),s=n("1fd5");const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(O(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),m.set(t,e),t}function _(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){v=e(v)}function y(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(E(this),t),O(h.get(this))}:function(...t){return O(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),O(r)}}function w(e){return"function"===typeof e?y(e):(e instanceof IDBTransaction&&_(e),o(e,l())?new Proxy(e,v):e)}function O(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=O(o);return r&&o.addEventListener("upgradeneeded",e=>{r(O(o.result),e.oldVersion,e.newVersion,O(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const k=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],S=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!k.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return S.set(t,s),s}b(e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",j="0.9.13",P=new i["b"]("@firebase/app"),N="@firebase/app-compat",D="@firebase/analytics-compat",L="@firebase/analytics",M="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",z="@firebase/functions",H="@firebase/functions-compat",q="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.23.0",se="[DEFAULT]",oe={[R]:"fire-core",[N]:"fire-core-compat",[L]:"fire-analytics",[D]:"fire-analytics-compat",[U]:"fire-app-check",[M]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[z]:"fire-fn",[H]:"fire-fn-compat",[q]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s["b"]("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s["l"])()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if(Object(s["i"])(n,a.options)&&Object(s["i"])(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r["b"](o);for(const r of ce.values())c.addComponent(r);const l=new _e(n,i,c);return ae.set(o,l),l}function ye(e=se){const t=ae.get(e);if(!t&&e===se&&Object(s["l"])())return be();if(!t)throw ge.create("no-app",{appName:e});return t}function we(){return Array.from(ae.values())}async function Oe(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}he(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");Object(i["d"])(e,t)}function ke(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="firebase-heartbeat-database",Se=1,Ae="firebase-heartbeat-store";let Ce=null;function xe(){return Ce||(Ce=T(Ie,Se,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch(e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})})),Ce}async function Re(e){try{const t=await xe(),n=await t.transaction(Ae).objectStore(Ae).get(Pe(e));return n}catch(t){if(t instanceof s["c"])P.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});P.warn(e.message)}}}async function je(e,t){try{const n=await xe(),r=n.transaction(Ae,"readwrite"),i=r.objectStore(Ae);await i.put(t,Pe(e)),await r.done}catch(n){if(n instanceof s["c"])P.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});P.warn(e.message)}}}function Pe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=1024,De=2592e6;class Le{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=De}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Ue(this._heartbeatsCache.heartbeats),r=Object(s["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Ue(e,t=Ne){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Ve(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ve(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["v"])()&&Object(s["B"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Re(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return je(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ve(e){return Object(s["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){he(new r["a"]("platform-logger",e=>new C(e),"PRIVATE")),he(new r["a"]("heartbeat",e=>new Le(e),"PRIVATE")),Ee(R,j,e),Ee(R,j,"esm2017"),Ee("fire-js","")}Be("")},5926:function(e,t,n){"use strict";var r=n("b42e");e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},"59ed":function(e,t,n){"use strict";var r=n("1626"),i=n("0d51"),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},"5c6c":function(e,t,n){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){"use strict";var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},6374:function(e,t,n){"use strict";var r=n("cfe9"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6605:function(e,t,n){"use strict";n.d(t,"a",(function(){return rt})),n.d(t,"b",(function(){return ce}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof document;function s(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&s(e.default)}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const l=()=>{},u=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,m=/\?/g,g=/\+/g,_=/%5B/g,v=/%5D/g,b=/%5E/g,y=/%60/g,w=/%7B/g,O=/%7C/g,E=/%7D/g,T=/%20/g;function k(e){return encodeURI(""+e).replace(O,"|").replace(_,"[").replace(v,"]")}function I(e){return k(e).replace(w,"{").replace(E,"}").replace(b,"^")}function S(e){return k(e).replace(g,"%2B").replace(T,"+").replace(h,"%23").replace(d,"%26").replace(y,"`").replace(w,"{").replace(E,"}").replace(b,"^")}function A(e){return S(e).replace(p,"%3D")}function C(e){return k(e).replace(h,"%23").replace(m,"%3F")}function x(e){return null==e?"":C(e).replace(f,"%2F")}function R(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const j=/\/$/,P=e=>e.replace(j,"");function N(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=$(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:R(o)}}function D(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function L(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function M(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&U(t.matched[r],n.matched[i])&&F(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function F(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!V(e[n],t[n]))return!1;return!0}function V(e,t){return u(e)?B(e,t):u(t)?B(t,e):e===t}function B(e,t){return u(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function $(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var H,q;(function(e){e["pop"]="pop",e["push"]="push"})(H||(H={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(q||(q={}));function W(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),P(e)}const K=/^[^#]+#/;function G(e,t){return e.replace(K,"#")+t}function J(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=J(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Q(e,t){const n=history.state?history.state.position-t:-1;return n+e}const Z=new Map;function ee(e,t){Z.set(e,t)}function te(e){const t=Z.get(e);return Z.delete(e),t}let ne=()=>location.protocol+"//"+location.host;function re(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),L(n,"")}const o=L(n,e);return o+r+i}function ie(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=re(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:u,type:H.pop,direction:u?u>0?q.forward:q.back:q.unknown})})};function l(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:X()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function se(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?X():null}}function oe(e){const{history:t,location:n}=window,r={value:re(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:ne()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,se(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:X()});s(o.current,o,!0);const c=a({},se(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function ae(e){e=W(e);const t=oe(e),n=ie(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:G.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ce(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ae(e)}function le(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const he=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function fe(e,t){return a(new Error,{type:e,[he]:!0},t)}function pe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const me="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},_e=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=a({},ge,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(_e,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:l}=r;s.push({name:e,repeatable:n,optional:c});const u=l||me;if(u!==me){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:l}}function be(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ye(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=be(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Oe={type:0,value:""},Ee=/[a-zA-Z0-9_]/;function Te(e){if(!e)return[[]];if("/"===e)return[[Oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ee.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function ke(e,t,n){const r=ve(Te(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=Ae(e);c.aliasOf=r&&r.record;const h=je(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(Ae(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c})))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ke(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!xe(f)&&o(e.name)),De(f)&&u(f),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{o(p)}:l}function o(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function u(e){const t=Pe(e,n);n.splice(t,0,e),e.record.name&&!xe(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw fe(1,{location:e});0,o=i.record.name,c=a(Se(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Se(e.params,i.keys.map(e=>e.name))),s=i.stringify(c)}else if(null!=e.path)s=e.path,i=n.find(e=>e.re.test(s)),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw fe(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:c,matched:l,meta:Re(l)}}function d(){n.length=0,r.clear()}return t=je({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:i}}function Se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ae(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function xe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Re(e){return e.reduce((e,t)=>a(e,t.meta),{})}function je(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Pe(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1,s=ye(e,t[i]);s<0?r=i:n=i+1}const i=Ne(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Ne(e){let t=e;while(t=t.parent)if(De(t)&&0===ye(e,t))return t}function De({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(g," "),n=e.indexOf("="),s=R(n<0?e:e.slice(0,n)),o=n<0?null:R(e.slice(n+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=A(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=u(r)?r.map(e=>e&&S(e)):[r&&S(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}const Fe=Symbol(""),Ve=Symbol(""),Be=Symbol(""),$e=Symbol(""),ze=Symbol("");function He(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function qe(e,t,n,r,i,s=(e=>e())){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const l=e=>{!1===e?c(fe(4,{from:n,to:t})):e instanceof Error?c(e):le(e)?c(fe(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},u=s(()=>e.call(r&&r.instances[i],t,n,l));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch(e=>c(e))})}function We(e,t,n,r,i=(e=>e())){const a=[];for(const c of e){0;for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(s(l)){const s=l.__vccOpts||l,o=s[t];o&&a.push(qe(o,n,r,c,e,i))}else{let s=l();0,a.push(()=>s.then(s=>{if(!s)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const a=o(s)?s.default:s;c.mods[e]=s,c.components[e]=a;const l=a.__vccOpts||a,u=l[t];return u&&qe(u,n,r,c,e,i)()}))}}}return a}function Ke(e){const t=Object(r["n"])(Be),n=Object(r["n"])($e);const i=Object(r["b"])(()=>{const n=Object(r["B"])(e.to);return t.resolve(n)}),s=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(U.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&s[s.length-1].path!==a?s.findIndex(U.bind(null,e[t-2])):o}),o=Object(r["b"])(()=>s.value>-1&&Ye(n.params,i.value.params)),a=Object(r["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&F(n.params,i.value.params));function c(n={}){return Xe(n)?t[Object(r["B"])(e.replace)?"replace":"push"](Object(r["B"])(e.to)).catch(l):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:c}}const Ge=Object(r["j"])({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=Object(r["u"])(Ke(e)),{options:i}=Object(r["n"])(Be),s=Object(r["b"])(()=>({[Ze(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ze(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["m"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Je=Ge;function Xe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ze=(e,t,n)=>null!=e?e:null!=t?t:n,et=Object(r["j"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Object(r["n"])(ze),s=Object(r["b"])(()=>e.route||i.value),o=Object(r["n"])(Ve,0),c=Object(r["b"])(()=>{let e=Object(r["B"])(o);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e}),l=Object(r["b"])(()=>s.value.matched[c.value]);Object(r["t"])(Ve,Object(r["b"])(()=>c.value+1)),Object(r["t"])(Fe,l),Object(r["t"])(ze,s);const u=Object(r["v"])();return Object(r["E"])(()=>[u.value,l.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&U(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=s.value,o=e.name,c=l.value,h=c&&c.components[o];if(!h)return tt(n.default,{Component:h,route:i});const d=c.props[o],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[o]=null)},m=Object(r["m"])(h,a({},f,t,{onVnodeUnmounted:p,ref:u}));return tt(n.default,{Component:m,route:i})||m}}});function tt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const nt=et;function rt(e){const t=Ie(e.routes,e),n=e.parseQuery||Le,s=e.stringifyQuery||Me,o=e.history;const h=He(),d=He(),f=He(),p=Object(r["z"])(z);let m=z;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=c.bind(null,e=>""+e),_=c.bind(null,x),v=c.bind(null,R);function b(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function y(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function w(){return t.getRoutes().map(e=>e.record)}function O(e){return!!t.getRecordMatcher(e)}function E(e,r){if(r=a({},r||p.value),"string"===typeof e){const i=N(n,e,r.path),s=t.resolve({path:i.path},r),c=o.createHref(i.fullPath);return a(i,s,{params:v(s.params),hash:R(i.hash),redirectedFrom:void 0,href:c})}let i;if(null!=e.path)i=a({},e,{path:N(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(t)}),r.params=_(r.params)}const c=t.resolve(i,r),l=e.hash||"";c.params=g(v(c.params));const u=D(s,a({},e,{hash:I(l),path:c.path})),h=o.createHref(u);return a({fullPath:u,hash:l,query:s===Me?Ue(e.query):e.query||{}},c,{redirectedFrom:void 0,href:h})}function T(e){return"string"===typeof e?N(n,e,p.value.path):a({},e)}function k(e,t){if(m!==e)return fe(8,{from:t,to:e})}function S(e){return j(e)}function A(e){return S(a(T(e),{replace:!0}))}function C(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=T(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function j(e,t){const n=m=E(e),r=p.value,i=e.state,o=e.force,c=!0===e.replace,l=C(n);if(l)return j(a(T(l),{state:"object"===typeof l?a({},i,l.state):i,force:o,replace:c}),t||n);const u=n;let h;return u.redirectedFrom=t,!o&&M(s,r,n)&&(h=fe(16,{to:u,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):U(u,r)).catch(e=>pe(e)?pe(e,2)?e:Z(e):G(e,u,r)).then(e=>{if(e){if(pe(e,2))return j(a({replace:c},T(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||u)}else e=V(u,r,!0,c,i);return F(u,r,e),e})}function P(e,t){const n=k(e,t);return n?Promise.reject(n):Promise.resolve()}function L(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function U(e,t){let n;const[r,i,s]=it(e,t);n=We(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach(r=>{n.push(qe(r,e,t))});const o=P.bind(null,e,t);return n.push(o),ae(n).then(()=>{n=[];for(const r of h.list())n.push(qe(r,e,t));return n.push(o),ae(n)}).then(()=>{n=We(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(qe(r,e,t))});return n.push(o),ae(n)}).then(()=>{n=[];for(const r of s)if(r.beforeEnter)if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),ae(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=We(s,"beforeRouteEnter",e,t,L),n.push(o),ae(n))).then(()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),ae(n)}).catch(e=>pe(e,8)?e:Promise.reject(e))}function F(e,t,n){f.list().forEach(r=>L(()=>r(e,t,n)))}function V(e,t,n,r,s){const c=k(e,t);if(c)return c;const l=t===z,u=i?history.state:{};n&&(r||l?o.replace(e.fullPath,a({scroll:l&&u&&u.scroll},s)):o.push(e.fullPath,s)),p.value=e,ne(e,t,n,l),Z()}let B;function $(){B||(B=o.listen((e,t,n)=>{if(!oe.listening)return;const r=E(e),s=C(r);if(s)return void j(a(s,{replace:!0}),r).catch(l);m=r;const c=p.value;i&&ee(Q(c.fullPath,n.delta),X()),U(r,c).catch(e=>pe(e,12)?e:pe(e,2)?(j(e.to,r).then(e=>{pe(e,20)&&!n.delta&&n.type===H.pop&&o.go(-1,!1)}).catch(l),Promise.reject()):(n.delta&&o.go(-n.delta,!1),G(e,r,c))).then(e=>{e=e||V(r,c,!1),e&&(n.delta&&!pe(e,8)?o.go(-n.delta,!1):n.type===H.pop&&pe(e,20)&&o.go(-1,!1)),F(r,c,e)}).catch(l)}))}let q,W=He(),K=He();function G(e,t,n){Z(e);const r=K.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function J(){return q&&p.value!==z?Promise.resolve():new Promise((e,t)=>{W.add([e,t])})}function Z(e){return q||(q=!e,$(),W.list().forEach(([t,n])=>e?n(e):t()),W.reset()),e}function ne(t,n,s,o){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const c=!s&&te(Q(t.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return Object(r["o"])().then(()=>a(t,n,c)).then(e=>e&&Y(e)).catch(e=>G(e,t,n))}const re=e=>o.go(e);let ie;const se=new Set,oe={currentRoute:p,listening:!0,addRoute:b,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:O,getRoutes:w,resolve:E,options:e,push:S,replace:A,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:h.add,beforeResolve:d.add,afterEach:f.add,onError:K.add,isReady:J,install(e){const t=this;e.component("RouterLink",Je),e.component("RouterView",nt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["B"])(p)}),i&&!ie&&p.value===z&&(ie=!0,S(o.location).catch(e=>{0}));const n={};for(const r in z)Object.defineProperty(n,r,{get:()=>p.value[r],enumerable:!0});e.provide(Be,t),e.provide($e,Object(r["y"])(n)),e.provide(ze,p);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=z,B&&B(),B=null,p.value=z,ie=!1,q=!1),s()}}};function ae(e){return e.reduce((e,t)=>e.then(()=>L(t)),Promise.resolve())}return oe}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>U(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>U(e,a))||i.push(a))}return[n,r,i]}},"69f3":function(e,t,n){"use strict";var r,i,s,o=n("cdce"),a=n("cfe9"),c=n("861d"),l=n("9112"),u=n("1a2d"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",m=a.TypeError,g=a.WeakMap,_=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new m(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},s=function(e){return b.has(e)}}else{var y=d("state");f[y]=!0,r=function(e,t){if(u(e,y))throw new m(p);return t.facade=e,l(e,y,t),t},i=function(e){return u(e,y)?e[y]:{}},s=function(e){return u(e,y)}}e.exports={set:r,get:i,has:s,enforce:_,getterFor:v}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},7234:function(e,t,n){"use strict";e.exports=function(e){return null===e||void 0===e}},7418:function(e,t,n){"use strict";t.f=Object.getOwnPropertySymbols},7839:function(e,t,n){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"u",(function(){return Ae})),n.d(t,"v",(function(){return Be})),n.d(t,"y",(function(){return Ce})),n.d(t,"z",(function(){return $e})),n.d(t,"B",(function(){return qe})),n.d(t,"A",(function(){return r["V"]})),n.d(t,"a",(function(){return xr})),n.d(t,"b",(function(){return Si})),n.d(t,"d",(function(){return $r})),n.d(t,"e",(function(){return Zr})),n.d(t,"f",(function(){return Br})),n.d(t,"g",(function(){return Kr})),n.d(t,"h",(function(){return Qr})),n.d(t,"i",(function(){return Gr})),n.d(t,"j",(function(){return Nt})),n.d(t,"l",(function(){return li})),n.d(t,"m",(function(){return Ai})),n.d(t,"n",(function(){return Ln})),n.d(t,"o",(function(){return mt})),n.d(t,"p",(function(){return Vt})),n.d(t,"q",(function(){return Bt})),n.d(t,"r",(function(){return Zt})),n.d(t,"s",(function(){return Lr})),n.d(t,"t",(function(){return Dn})),n.d(t,"w",(function(){return un})),n.d(t,"x",(function(){return on})),n.d(t,"E",(function(){return pr})),n.d(t,"F",(function(){return St})),n.d(t,"G",(function(){return At})),n.d(t,"c",(function(){return Is})),n.d(t,"C",(function(){return bs})),n.d(t,"D",(function(){return $i})),n.d(t,"H",(function(){return Os}));var r=n("9ff4");
/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e){return new o(e)}function c(){return i}const l=new WeakSet;class u{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,l.has(this)&&(l.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,I(this),g(this);const e=s,t=O;s=this,O=!0;try{return this.fn()}finally{0,_(this),s=e,O=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)y(e);this.deps=this.depsTail=void 0,I(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let h,d=0;function f(e){e.flags|=8,e.next=h,h=e}function p(){d++}function m(){if(--d>0)return;let e;while(h){let n,r=h;while(r)1&r.flags||(r.flags&=-9),r=r.next;r=h,h=void 0;while(r){if(n=r.next,r.next=void 0,r.flags&=-9,1&r.flags)try{r.trigger()}catch(t){e||(e=t)}r=n}}if(e)throw e}function g(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),y(r),w(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function v(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(b(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function b(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===S)return;e.globalVersion=S;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!v(e))return void(e.flags&=-3);const n=s,i=O;s=e,O=!0;try{g(e);const o=e.fn(e._value);(0===t.version||Object(r["k"])(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{s=n,O=i,_(e),e.flags&=-3}}function y(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)y(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function w(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let O=!0;const E=[];function T(){E.push(O),O=!1}function k(){const e=E.pop();O=void 0===e||e}function I(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let S=0;class A{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class C{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!s||!O||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new A(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,x(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,S++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{m()}}}function x(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)x(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const R=new WeakMap,j=Symbol(""),P=Symbol(""),N=Symbol("");function D(e,t,n){if(O&&s){let t=R.get(e);t||R.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new C),r.target=e,r.map=t,r.key=n),r.track()}}function L(e,t,n,i,s,o){const a=R.get(e);if(!a)return void S++;const c=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(c);else{const s=Object(r["p"])(e),o=s&&Object(r["v"])(n);if(s&&"length"===n){const e=Number(i);a.forEach((t,n)=>{("length"===n||n===N||!Object(r["M"])(n)&&n>=e)&&c(t)})}else switch(void 0!==n&&c(a.get(n)),o&&c(a.get(N)),t){case"add":s?o&&c(a.get("length")):(c(a.get(j)),Object(r["y"])(e)&&c(a.get(P)));break;case"delete":s||(c(a.get(j)),Object(r["y"])(e)&&c(a.get(P)));break;case"set":Object(r["y"])(e)&&c(a.get(j));break}}m()}function M(e){const t=Le(e);return t===e?t:(D(t,"iterate",N),Ne(e)?t:t.map(Ue))}function U(e){return D(e=Le(e),"iterate",N),e}const F={__proto__:null,[Symbol.iterator](){return V(this,Symbol.iterator,Ue)},concat(...e){return M(this).concat(...e.map(e=>Object(r["p"])(e)?M(e):e))},entries(){return V(this,"entries",e=>(e[1]=Ue(e[1]),e))},every(e,t){return $(this,"every",e,t,void 0,arguments)},filter(e,t){return $(this,"filter",e,t,e=>e.map(Ue),arguments)},find(e,t){return $(this,"find",e,t,Ue,arguments)},findIndex(e,t){return $(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $(this,"findLast",e,t,Ue,arguments)},findLastIndex(e,t){return $(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $(this,"forEach",e,t,void 0,arguments)},includes(...e){return H(this,"includes",e)},indexOf(...e){return H(this,"indexOf",e)},join(e){return M(this).join(e)},lastIndexOf(...e){return H(this,"lastIndexOf",e)},map(e,t){return $(this,"map",e,t,void 0,arguments)},pop(){return q(this,"pop")},push(...e){return q(this,"push",e)},reduce(e,...t){return z(this,"reduce",e,t)},reduceRight(e,...t){return z(this,"reduceRight",e,t)},shift(){return q(this,"shift")},some(e,t){return $(this,"some",e,t,void 0,arguments)},splice(...e){return q(this,"splice",e)},toReversed(){return M(this).toReversed()},toSorted(e){return M(this).toSorted(e)},toSpliced(...e){return M(this).toSpliced(...e)},unshift(...e){return q(this,"unshift",e)},values(){return V(this,"values",Ue)}};function V(e,t,n){const r=U(e),i=r[t]();return r===e||Ne(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const B=Array.prototype;function $(e,t,n,r,i,s){const o=U(e),a=o!==e&&!Ne(e),c=o[t];if(c!==B[t]){const t=c.apply(e,s);return a?Ue(t):t}let l=n;o!==e&&(a?l=function(t,r){return n.call(this,Ue(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));const u=c.call(o,l,r);return a&&i?i(u):u}function z(e,t,n,r){const i=U(e);let s=n;return i!==e&&(Ne(e)?n.length>3&&(s=function(t,r,i){return n.call(this,t,r,i,e)}):s=function(t,r,i){return n.call(this,t,Ue(r),i,e)}),i[t](s,...r)}function H(e,t,n){const r=Le(e);D(r,"iterate",N);const i=r[t](...n);return-1!==i&&!1!==i||!De(n[0])?i:(n[0]=Le(n[0]),r[t](...n))}function q(e,t,n=[]){T(),p();const r=Le(e)[t].apply(e,n);return m(),k(),r}const W=Object(r["Q"])("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(r["M"]));function G(e){Object(r["M"])(e)||(e=String(e));const t=Le(this);return D(t,"has",e),t.hasOwnProperty(e)}class J{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?ke:Te:s?Ee:Oe).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Object(r["p"])(e);if(!i){let e;if(o&&(e=F[t]))return e;if("hasOwnProperty"===t)return G}const a=Reflect.get(e,t,Ve(e)?e:n);return(Object(r["M"])(t)?K.has(t):W(t))?a:(i||D(e,"get",t),s?a:Ve(a)?o&&Object(r["v"])(t)?a:a.value:Object(r["B"])(a)?i?xe(a):Ae(a):a)}}class X extends J{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=Pe(s);if(Ne(n)||Pe(n)||(s=Le(s),n=Le(n)),!Object(r["p"])(e)&&Ve(s)&&!Ve(n))return!t&&(s.value=n,!0)}const o=Object(r["p"])(e)&&Object(r["v"])(t)?Number(t)<e.length:Object(r["l"])(e,t),a=Reflect.set(e,t,n,Ve(e)?e:i);return e===Le(i)&&(o?Object(r["k"])(n,s)&&L(e,"set",t,n,s):L(e,"add",t,n)),a}deleteProperty(e,t){const n=Object(r["l"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&L(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return Object(r["M"])(t)&&K.has(t)||D(e,"has",t),n}ownKeys(e){return D(e,"iterate",Object(r["p"])(e)?"length":j),Reflect.ownKeys(e)}}class Y extends J{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Q=new X,Z=new Y,ee=new X(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function re(e,t,n=!1,i=!1){e=e["__v_raw"];const s=Le(e),o=Le(t);n||(Object(r["k"])(t,o)&&D(s,"get",t),D(s,"get",o));const{has:a}=ne(s),c=i?te:n?Fe:Ue;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function ie(e,t=!1){const n=this["__v_raw"],i=Le(n),s=Le(e);return t||(Object(r["k"])(e,s)&&D(i,"has",e),D(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function se(e,t=!1){return e=e["__v_raw"],!t&&D(Le(e),"iterate",j),Reflect.get(e,"size",e)}function oe(e,t=!1){t||Ne(e)||Pe(e)||(e=Le(e));const n=Le(this),r=ne(n),i=r.has.call(n,e);return i||(n.add(e),L(n,"add",e,e)),this}function ae(e,t,n=!1){n||Ne(t)||Pe(t)||(t=Le(t));const i=Le(this),{has:s,get:o}=ne(i);let a=s.call(i,e);a||(e=Le(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,t),a?Object(r["k"])(t,c)&&L(i,"set",e,t,c):L(i,"add",e,t),this}function ce(e){const t=Le(this),{has:n,get:r}=ne(t);let i=n.call(t,e);i||(e=Le(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&L(t,"delete",e,void 0,s),o}function le(){const e=Le(this),t=0!==e.size,n=void 0,r=e.clear();return t&&L(e,"clear",void 0,void 0,n),r}function ue(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Le(s),a=t?te:e?Fe:Ue;return!e&&D(o,"iterate",j),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function he(e,t,n){return function(...i){const s=this["__v_raw"],o=Le(s),a=Object(r["y"])(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?te:t?Fe:Ue;return!t&&D(o,"iterate",l?P:j),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function de(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function fe(){const e={get(e){return re(this,e)},get size(){return se(this)},has:ie,add:oe,set:ae,delete:ce,clear:le,forEach:ue(!1,!1)},t={get(e){return re(this,e,!1,!0)},get size(){return se(this)},has:ie,add(e){return oe.call(this,e,!0)},set(e,t){return ae.call(this,e,t,!0)},delete:ce,clear:le,forEach:ue(!1,!0)},n={get(e){return re(this,e,!0)},get size(){return se(this,!0)},has(e){return ie.call(this,e,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:ue(!0,!1)},r={get(e){return re(this,e,!0,!0)},get size(){return se(this,!0)},has(e){return ie.call(this,e,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:ue(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=he(i,!1,!1),n[i]=he(i,!0,!1),t[i]=he(i,!1,!0),r[i]=he(i,!0,!0)}),[e,n,t,r]}const[pe,me,ge,_e]=fe();function ve(e,t){const n=t?e?_e:ge:e?me:pe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["l"])(n,i)&&i in t?n:t,i,s)}const be={get:ve(!1,!1)},ye={get:ve(!1,!0)},we={get:ve(!0,!1)};const Oe=new WeakMap,Ee=new WeakMap,Te=new WeakMap,ke=new WeakMap;function Ie(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Se(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ie(Object(r["Y"])(e))}function Ae(e){return Pe(e)?e:Re(e,!1,Q,be,Oe)}function Ce(e){return Re(e,!1,ee,ye,Ee)}function xe(e){return Re(e,!0,Z,we,Te)}function Re(e,t,n,i,s){if(!Object(r["B"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Se(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function je(e){return Pe(e)?je(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Pe(e){return!(!e||!e["__v_isReadonly"])}function Ne(e){return!(!e||!e["__v_isShallow"])}function De(e){return!!e&&!!e["__v_raw"]}function Le(e){const t=e&&e["__v_raw"];return t?Le(t):e}function Me(e){return!Object(r["l"])(e,"__v_skip")&&Object.isExtensible(e)&&Object(r["g"])(e,"__v_skip",!0),e}const Ue=e=>Object(r["B"])(e)?Ae(e):e,Fe=e=>Object(r["B"])(e)?xe(e):e;function Ve(e){return!!e&&!0===e["__v_isRef"]}function Be(e){return ze(e,!1)}function $e(e){return ze(e,!0)}function ze(e,t){return Ve(e)?e:new He(e,t)}class He{constructor(e,t){this.dep=new C,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Le(e),this._value=t?e:Ue(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ne(e)||Pe(e);e=n?e:Le(e),Object(r["k"])(e,t)&&(this._rawValue=e,this._value=n?e:Ue(e),this.dep.trigger())}}function qe(e){return Ve(e)?e.value:e}const We={get:(e,t,n)=>"__v_raw"===t?e:qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ke(e){return je(e)?e:new Proxy(e,We)}class Ge{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new C(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=S-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return f(this),!0}get value(){const e=this.dep.track();return b(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Je(e,t,n=!1){let i,s;Object(r["s"])(e)?i=e:(i=e.get,s=e.set);const o=new Ge(i,s,n);return o}const Xe={},Ye=new WeakMap;let Qe=void 0;function Ze(e,t=!1,n=Qe){if(n){let t=Ye.get(n);t||Ye.set(n,t=[]),t.push(e)}else 0}function et(e,t,n=r["b"]){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:l,call:h}=n,d=e=>s?e:Ne(e)||!1===s||0===s?tt(e,1):tt(e);let f,p,m,g,_=!1,v=!1;if(Ve(e)?(p=()=>e.value,_=Ne(e)):je(e)?(p=()=>d(e),_=!0):Object(r["p"])(e)?(v=!0,_=e.some(e=>je(e)||Ne(e)),p=()=>e.map(e=>Ve(e)?e.value:je(e)?d(e):Object(r["s"])(e)?h?h(e,2):e():void 0)):p=Object(r["s"])(e)?t?h?()=>h(e,2):e:()=>{if(m){T();try{m()}finally{k()}}const t=Qe;Qe=f;try{return h?h(e,3,[g]):e(g)}finally{Qe=t}}:r["d"],t&&s){const e=p,t=!0===s?1/0:s;p=()=>tt(e(),t)}const b=c(),y=()=>{f.stop(),b&&Object(r["T"])(b.effects,f)};if(o&&t){const e=t;t=(...t)=>{e(...t),y()}}let w=v?new Array(e.length).fill(Xe):Xe;const O=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(s||_||(v?e.some((e,t)=>Object(r["k"])(e,w[t])):Object(r["k"])(e,w))){m&&m();const n=Qe;Qe=f;try{const r=[e,w===Xe?void 0:v&&w[0]===Xe?[]:w,g];h?h(t,3,r):t(...r),w=e}finally{Qe=n}}}else f.run()};return l&&l(O),f=new u(p),f.scheduler=a?()=>a(O,!1):O,g=e=>Ze(e,!1,f),m=f.onStop=()=>{const e=Ye.get(f);if(e){if(h)h(e,4);else for(const t of e)t();Ye.delete(f)}},t?i?O(!0):w=f.run():a?a(O.bind(null,!0),!0):f.run(),y.pause=f.pause.bind(f),y.resume=f.resume.bind(f),y.stop=y,y}function tt(e,t=1/0,n){if(t<=0||!Object(r["B"])(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Ve(e))tt(e.value,t,n);else if(Object(r["p"])(e))for(let r=0;r<e.length;r++)tt(e[r],t,n);else if(Object(r["J"])(e)||Object(r["y"])(e))e.forEach(e=>{tt(e,t,n)});else if(Object(r["D"])(e)){for(const r in e)tt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&tt(e[r],t,n)}return e}
/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nt(e,t,n,r){try{return r?e(...r):e()}catch(i){it(i,t,n)}}function rt(e,t,n,i){if(Object(r["s"])(e)){const s=nt(e,t,n,i);return s&&Object(r["E"])(s)&&s.catch(e=>{it(e,t,n)}),s}if(Object(r["p"])(e)){const r=[];for(let s=0;s<e.length;s++)r.push(rt(e[s],t,n,i));return r}}function it(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||r["b"];if(t){let r=t.parent;const i=t.proxy,s="https://vuejs.org/error-reference/#runtime-"+n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}if(o)return T(),nt(o,null,10,[e,i,s]),void k()}st(e,n,s,i,a)}function st(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}let ot=!1,at=!1;const ct=[];let lt=0;const ut=[];let ht=null,dt=0;const ft=Promise.resolve();let pt=null;function mt(e){const t=pt||ft;return e?t.then(this?e.bind(this):e):t}function gt(e){let t=ot?lt+1:0,n=ct.length;while(t<n){const r=t+n>>>1,i=ct[r],s=Ot(i);s<e||s===e&&2&i.flags?t=r+1:n=r}return t}function _t(e){if(!(1&e.flags)){const t=Ot(e),n=ct[ct.length-1];!n||!(2&e.flags)&&t>=Ot(n)?ct.push(e):ct.splice(gt(t),0,e),e.flags|=1,vt()}}function vt(){ot||at||(at=!0,pt=ft.then(Et))}function bt(e){Object(r["p"])(e)?ut.push(...e):ht&&-1===e.id?ht.splice(dt+1,0,e):1&e.flags||(ut.push(e),e.flags|=1),vt()}function yt(e,t,n=(ot?lt+1:0)){for(0;n<ct.length;n++){const t=ct[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,ct.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function wt(e){if(ut.length){const e=[...new Set(ut)].sort((e,t)=>Ot(e)-Ot(t));if(ut.length=0,ht)return void ht.push(...e);for(ht=e,dt=0;dt<ht.length;dt++){const e=ht[dt];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}ht=null,dt=0}}const Ot=e=>null==e.id?2&e.flags?-1:1/0:e.id;function Et(e){at=!1,ot=!0;r["d"];try{for(lt=0;lt<ct.length;lt++){const e=ct[lt];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),nt(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;lt<ct.length;lt++){const e=ct[lt];e&&(e.flags&=-2)}lt=0,ct.length=0,wt(e),ot=!1,pt=null,(ct.length||ut.length)&&Et(e)}}let Tt=null,kt=null;function It(e){const t=Tt;return Tt=e,kt=e&&e.type.__scopeId||null,t}function St(e,t=Tt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Fr(-1);const i=It(t);let s;try{s=e(...n)}finally{It(i),r._d&&Fr(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function At(e,t){if(null===Tt)return e;const n=Ti(Tt),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=r["b"]]=t[s];e&&(Object(r["s"])(e)&&(e={mounted:e,updated:e}),e.deep&&tt(o),i.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ct(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(T(),rt(c,n,8,[e.el,a,e,t]),k())}}const xt=Symbol("_vte"),Rt=e=>e.__isTeleport;Symbol("_leaveCb"),Symbol("_enterCb");const jt=[Function,Array];Boolean,Boolean;function Pt(e,t){6&e.shapeFlag&&e.component?(e.transition=t,Pt(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}
/*! #__NO_SIDE_EFFECTS__ */
function Nt(e,t){return Object(r["s"])(e)?(()=>Object(r["h"])({name:e.name},t,{setup:e}))():e}function Dt(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Lt(e,t,n,i,s=!1){if(Object(r["p"])(e))return void e.forEach((e,o)=>Lt(e,t&&(Object(r["p"])(t)?t[o]:t),n,i,s));if(Mt(i)&&!s)return;const o=4&i.shapeFlag?Ti(i.component):i.el,a=s?null:o,{i:c,r:l}=e;const u=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState,f=Le(d),p=d===r["b"]?()=>!1:e=>Object(r["l"])(f,e);if(null!=u&&u!==l&&(Object(r["L"])(u)?(h[u]=null,p(u)&&(d[u]=null)):Ve(u)&&(u.value=null)),Object(r["s"])(l))nt(l,c,12,[a,h]);else{const t=Object(r["L"])(l),i=Ve(l);if(t||i){const c=()=>{if(e.f){const n=t?p(l)?d[l]:h[l]:l.value;s?Object(r["p"])(n)&&Object(r["T"])(n,o):Object(r["p"])(n)?n.includes(o)||n.push(o):t?(h[l]=[o],p(l)&&(d[l]=h[l])):(l.value=[o],e.k&&(h[e.k]=l.value))}else t?(h[l]=a,p(l)&&(d[l]=a)):i&&(l.value=a,e.k&&(h[e.k]=a))};a?(c.id=-1,nr(c,n)):c()}else 0}}const Mt=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Ut=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ft(e,t){return Object(r["p"])(e)?e.some(e=>Ft(e,t)):Object(r["L"])(e)?e.split(",").includes(t):!!Object(r["F"])(e)&&(e.lastIndex=0,e.test(t))}function Vt(e,t){$t(e,"a",t)}function Bt(e,t){$t(e,"da",t)}function $t(e,t,n=ci){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Wt(t,r,n),n){let e=n.parent;while(e&&e.parent)Ut(e.parent.vnode)&&zt(r,t,n,e),e=e.parent}}function zt(e,t,n,i){const s=Wt(t,e,i,!0);Zt(()=>{Object(r["T"])(i[t],s)},n)}function Ht(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function qt(e){return 128&e.shapeFlag?e.ssContent:e}function Wt(e,t,n=ci,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{T();const i=di(n),s=rt(t,n,e,r);return i(),k(),s});return r?i.unshift(s):i.push(s),s}}const Kt=e=>(t,n=ci)=>{_i&&"sp"!==e||Wt(e,(...e)=>t(...e),n)},Gt=Kt("bm"),Jt=Kt("m"),Xt=Kt("bu"),Yt=Kt("u"),Qt=Kt("bum"),Zt=Kt("um"),en=Kt("sp"),tn=Kt("rtg"),nn=Kt("rtc");function rn(e,t=ci){Wt("ec",e,t)}const sn="components";function on(e,t){return cn(sn,e,!0,t)||e}const an=Symbol.for("v-ndc");function cn(e,t,n=!0,i=!1){const s=Tt||ci;if(s){const n=s.type;if(e===sn){const e=ki(n,!1);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const o=ln(s[e]||n[e],t)||ln(s.appContext[e],t);return!o&&i?n:o}}function ln(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}function un(e,t,n,i){let s;const o=n&&n[i],a=Object(r["p"])(e);if(a||Object(r["L"])(e)){const n=a&&je(e);let r=!1;n&&(r=!Ne(e),e=U(e)),s=new Array(e.length);for(let i=0,a=e.length;i<a;i++)s[i]=t(r?Ue(e[i]):e[i],i,void 0,o&&o[i])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(r["B"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const hn=e=>e?pi(e)?Ti(e):hn(e.parent):null,dn=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hn(e.parent),$root:e=>hn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wn(e),$forceUpdate:e=>e.f||(e.f=()=>{_t(e.update)}),$nextTick:e=>e.n||(e.n=mt.bind(e.proxy)),$watch:e=>gr.bind(e)}),fn=(e,t)=>e!==r["b"]&&!e.__isScriptSetup&&Object(r["l"])(e,t),pn={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(fn(i,t))return a[t]=1,i[t];if(s!==r["b"]&&Object(r["l"])(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&Object(r["l"])(u,t))return a[t]=3,o[t];if(n!==r["b"]&&Object(r["l"])(n,t))return a[t]=4,n[t];gn&&(a[t]=0)}}const h=dn[t];let d,f;return h?("$attrs"===t&&D(e.attrs,"get",""),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["l"])(n,t)?(a[t]=4,n[t]):(f=l.config.globalProperties,Object(r["l"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return fn(s,t)?(s[t]=n,!0):i!==r["b"]&&Object(r["l"])(i,t)?(i[t]=n,!0):!Object(r["l"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["l"])(e,a)||fn(t,a)||(c=o[0])&&Object(r["l"])(c,a)||Object(r["l"])(i,a)||Object(r["l"])(dn,a)||Object(r["l"])(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(r["l"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function mn(e){return Object(r["p"])(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let gn=!0;function _n(e){const t=wn(e),n=e.proxy,i=e.ctx;gn=!1,t.beforeCreate&&bn(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:b,destroyed:y,unmounted:w,render:O,renderTracked:E,renderTriggered:T,errorCaptured:k,serverPrefetch:I,expose:S,inheritAttrs:A,components:C,directives:x,filters:R}=t,j=null;if(u&&vn(u,i,j),a)for(const N in a){const e=a[N];Object(r["s"])(e)&&(i[N]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(r["B"])(t)&&(e.data=Ae(t))}if(gn=!0,o)for(const N in o){const e=o[N],t=Object(r["s"])(e)?e.bind(n,n):Object(r["s"])(e.get)?e.get.bind(n,n):r["d"];0;const s=!Object(r["s"])(e)&&Object(r["s"])(e.set)?e.set.bind(n):r["d"],a=Si({get:t,set:s});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)yn(c[r],i,n,r);if(l){const e=Object(r["s"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Dn(t,e[t])})}function P(e,t){Object(r["p"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&bn(h,e,"c"),P(Gt,d),P(Jt,f),P(Xt,p),P(Yt,m),P(Vt,g),P(Bt,_),P(rn,k),P(nn,E),P(tn,T),P(Qt,b),P(Zt,w),P(en,I),Object(r["p"])(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=A&&(e.inheritAttrs=A),C&&(e.components=C),x&&(e.directives=x),I&&Dt(e)}function vn(e,t,n=r["d"]){Object(r["p"])(e)&&(e=In(e));for(const i in e){const n=e[i];let s;s=Object(r["B"])(n)?"default"in n?Ln(n.from||i,n.default,!0):Ln(n.from||i):Ln(n),Ve(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function bn(e,t,n){rt(Object(r["p"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function yn(e,t,n,i){let s=i.includes(".")?_r(n,i):()=>n[i];if(Object(r["L"])(e)){const n=t[e];Object(r["s"])(n)&&pr(s,n)}else if(Object(r["s"])(e))pr(s,e.bind(n));else if(Object(r["B"])(e))if(Object(r["p"])(e))e.forEach(e=>yn(e,t,n,i));else{const i=Object(r["s"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["s"])(i)&&pr(s,i,e)}else 0}function wn(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||i?(l={},s.length&&s.forEach(e=>On(l,e,a,!0)),On(l,t,a)):l=t,Object(r["B"])(t)&&o.set(t,l),l}function On(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&On(e,s,n,!0),i&&i.forEach(t=>On(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=En[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const En={data:Tn,props:Cn,emits:Cn,methods:An,computed:An,beforeCreate:Sn,created:Sn,beforeMount:Sn,mounted:Sn,beforeUpdate:Sn,updated:Sn,beforeDestroy:Sn,beforeUnmount:Sn,destroyed:Sn,unmounted:Sn,activated:Sn,deactivated:Sn,errorCaptured:Sn,serverPrefetch:Sn,components:An,directives:An,watch:xn,provide:Tn,inject:kn};function Tn(e,t){return t?e?function(){return Object(r["h"])(Object(r["s"])(e)?e.call(this,this):e,Object(r["s"])(t)?t.call(this,this):t)}:t:e}function kn(e,t){return An(In(e),In(t))}function In(e){if(Object(r["p"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Sn(e,t){return e?[...new Set([].concat(e,t))]:t}function An(e,t){return e?Object(r["h"])(Object.create(null),e,t):t}function Cn(e,t){return e?Object(r["p"])(e)&&Object(r["p"])(t)?[...new Set([...e,...t])]:Object(r["h"])(Object.create(null),mn(e),mn(null!=t?t:{})):t}function xn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Sn(e[r],t[r]);return n}function Rn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jn=0;function Pn(e,t){return function(n,i=null){Object(r["s"])(n)||(n=Object(r["h"])({},n)),null==i||Object(r["B"])(i)||(i=null);const s=Rn(),o=new WeakSet,a=[];let c=!1;const l=s.app={_uid:jn++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Ci,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(r["s"])(e.install)?(o.add(e),e.install(l,...t)):Object(r["s"])(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(r,o,a){if(!c){0;const u=l._ceVNode||Gr(n,i);return u.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(u,r):e(u,r,a),c=!0,l._container=r,r.__vue_app__=l,Ti(u.component)}},onUnmount(e){a.push(e)},unmount(){c&&(rt(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l},runWithContext(e){const t=Nn;Nn=l;try{return e()}finally{Nn=t}}};return l}}let Nn=null;function Dn(e,t){if(ci){let n=ci.provides;const r=ci.parent&&ci.parent.provides;r===n&&(n=ci.provides=Object.create(r)),n[e]=t}else 0}function Ln(e,t,n=!1){const i=ci||Tt;if(i||Nn){const s=Nn?Nn._context.provides:i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(r["s"])(t)?t.call(i&&i.proxy):t}else 0}const Mn={},Un=()=>Object.create(Mn),Fn=e=>Object.getPrototypeOf(e)===Mn;function Vn(e,t,n,r=!1){const i={},s=Un();e.propsDefaults=Object.create(null),$n(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Ce(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Bn(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=Le(s),[l]=e.propsOptions;let u=!1;if(!(i||a>0)||16&a){let i;$n(e,t,s,o)&&(u=!0);for(const o in c)t&&(Object(r["l"])(t,o)||(i=Object(r["m"])(o))!==o&&Object(r["l"])(t,i))||(l?!n||void 0===n[o]&&void 0===n[i]||(s[o]=zn(l,c,o,void 0,e,!0)):delete s[o]);if(o!==c)for(const e in o)t&&Object(r["l"])(t,e)||(delete o[e],u=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];if(wr(e.emitsOptions,a))continue;const h=t[a];if(l)if(Object(r["l"])(o,a))h!==o[a]&&(o[a]=h,u=!0);else{const t=Object(r["e"])(a);s[t]=zn(l,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,u=!0)}}u&&L(e.attrs,"set","")}function $n(e,t,n,i){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let l in t){if(Object(r["H"])(l))continue;const u=t[l];let h;s&&Object(r["l"])(s,h=Object(r["e"])(l))?o&&o.includes(h)?(a||(a={}))[h]=u:n[h]=u:wr(e.emitsOptions,l)||l in i&&u===i[l]||(i[l]=u,c=!0)}if(o){const t=Le(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=zn(s,t,c,i[c],e,!Object(r["l"])(i,c))}}return c}function zn(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=Object(r["l"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&!a.skipFactory&&Object(r["s"])(e)){const{propsDefaults:r}=s;if(n in r)i=r[n];else{const o=di(s);i=r[n]=e.call(null,t),o()}}else i=e;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["m"])(n)||(i=!0))}return i}const Hn=new WeakMap;function qn(e,t,n=!1){const i=n?Hn:t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!Object(r["s"])(e)){const i=e=>{l=!0;const[n,i]=qn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!l)return Object(r["B"])(e)&&i.set(e,r["a"]),r["a"];if(Object(r["p"])(o))for(let h=0;h<o.length;h++){0;const e=Object(r["e"])(o[h]);Wn(e)&&(a[e]=r["b"])}else if(o){0;for(const e in o){const t=Object(r["e"])(e);if(Wn(t)){const n=o[e],i=a[t]=Object(r["p"])(n)||Object(r["s"])(n)?{type:n}:Object(r["h"])({},n),s=i.type;let l=!1,u=!0;if(Object(r["p"])(s))for(let e=0;e<s.length;++e){const t=s[e],n=Object(r["s"])(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=Object(r["s"])(s)&&"Boolean"===s.name;i[0]=l,i[1]=u,(l||Object(r["l"])(i,"default"))&&c.push(t)}}}const u=[a,c];return Object(r["B"])(e)&&i.set(e,u),u}function Wn(e){return"$"!==e[0]&&!Object(r["H"])(e)}const Kn=e=>"_"===e[0]||"$stable"===e,Gn=e=>Object(r["p"])(e)?e.map(ei):[ei(e)],Jn=(e,t,n)=>{if(t._n)return t;const r=St((...e)=>Gn(t(...e)),n);return r._c=!1,r},Xn=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Kn(s))continue;const n=e[s];if(Object(r["s"])(n))t[s]=Jn(s,n,i);else if(null!=n){0;const e=Gn(n);t[s]=()=>e}}},Yn=(e,t)=>{const n=Gn(t);e.slots.default=()=>n},Qn=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},Zn=(e,t,n)=>{const i=e.slots=Un();if(32&e.vnode.shapeFlag){const e=t._;e?(Qn(i,t,n),n&&Object(r["g"])(i,"_",e,!0)):Xn(t,i)}else t&&Yn(e,t)},er=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:Qn(s,t,n):(o=!t.$stable,Xn(t,s)),a=t}else t&&(Yn(e,t),a={default:1});if(o)for(const r in s)Kn(r)||null!=a[r]||delete s[r]};function tr(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&(Object(r["j"])().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const nr=Cr;function rr(e){return ir(e)}function ir(e,t){tr();const n=Object(r["j"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=r["d"],insertStaticContent:g}=e,_=(e,t,n,r=null,i=null,s=null,o,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Hr(e,t)&&(r=K(e),$(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Rr:v(e,t,n,r);break;case jr:b(e,t,n,r);break;case Pr:null==e&&y(t,n,r,o);break;case xr:j(e,t,n,r,i,s,o,a,c);break;default:1&h?E(e,t,n,r,i,s,o,a,c):6&h?P(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,X)}null!=u&&i&&Lt(u,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},y=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},w=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=p(e),i(e,n,r),e=s;i(t,n,r)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},E=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?I(t,n,r,i,s,o,a,c):C(e,t,i,s,o,a,c)},I=(e,t,n,s,c,l,u,h)=>{let f,p;const{props:m,shapeFlag:g,transition:_,dirs:v}=e;if(f=e.el=a(e.type,l,m&&m.is,m),8&g?d(f,e.children):16&g&&A(e.children,f,null,s,c,sr(e,l),u,h),v&&Ct(e,null,s,"created"),S(f,e,e.scopeId,u,s),m){for(const e in m)"value"===e||Object(r["H"])(e)||o(f,e,null,m[e],l,s);"value"in m&&o(f,"value",null,m.value,l),(p=m.onVnodeBeforeMount)&&ii(p,s,e)}v&&Ct(e,null,s,"beforeMount");const b=ar(c,_);b&&_.beforeEnter(f),i(f,t,n),((p=m&&m.onVnodeMounted)||b||v)&&nr(()=>{p&&ii(p,s,e),b&&_.enter(f),v&&Ct(e,null,s,"mounted")},c)},S=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n||Ar(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;S(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?ti(e[l]):ei(e[l]);_(null,c,t,n,r,i,s,o,a)}},C=(e,t,n,i,s,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let g;if(n&&or(n,!1),(g=m.onVnodeBeforeUpdate)&&ii(g,n,t,e),f&&Ct(t,e,n,"beforeUpdate"),n&&or(n,!0),(p.innerHTML&&null==m.innerHTML||p.textContent&&null==m.textContent)&&d(l,""),h?x(e.dynamicChildren,h,l,n,i,sr(t,s),a):c||U(e,t,l,null,n,i,sr(t,s),a,!1),u>0){if(16&u)R(l,p,m,n,s);else if(2&u&&p.class!==m.class&&o(l,"class",null,m.class,s),4&u&&o(l,"style",p.style,m.style,s),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],a=m[r];a===i&&"value"!==r||o(l,r,i,a,s,n)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||R(l,p,m,n,s);((g=m.onVnodeUpdated)||f)&&nr(()=>{g&&ii(g,n,t,e),f&&Ct(t,e,n,"updated")},i)},x=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===xr||!Hr(c,l)||70&c.shapeFlag)?f(c.el):n;_(c,l,u,null,r,i,s,o,!0)}},R=(e,t,n,i,s)=>{if(t!==n){if(t!==r["b"])for(const a in t)Object(r["H"])(a)||a in n||o(e,a,t[a],null,s,i);for(const a in n){if(Object(r["H"])(a))continue;const c=n[a],l=t[a];c!==l&&"value"!==a&&o(e,a,l,c,s,i)}"value"in n&&o(e,"value",t.value,n.value,s)}},j=(e,t,n,r,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(i(h,n,r),i(d,n,r),A(t.children||[],n,d,s,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&cr(e,t,!0)):U(e,t,n,d,s,o,a,l,u)},P=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):N(t,n,r,i,s,o,c):D(e,t,c)},N=(e,t,n,r,i,s,o)=>{const a=e.component=ai(e,r,i);if(Ut(e)&&(a.ctx.renderer=X),vi(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,L,o),!e.el){const e=a.subTree=Gr(jr);b(null,e,t,n)}}else L(a,e,t,n,i,s,o)},D=(e,t,n)=>{const r=t.component=e.component;if(kr(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void M(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},L=(e,t,n,i,s,o,a)=>{const c=()=>{if(e.isMounted){let{next:t,bu:n,u:i,parent:l,vnode:u}=e;{const n=ur(e);if(n)return t&&(t.el=u.el,M(e,t,a)),void n.asyncDep.then(()=>{e.isUnmounted||c()})}let h,d=t;0,or(e,!1),t?(t.el=u.el,M(e,t,a)):t=u,n&&Object(r["o"])(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&ii(h,l,t,u),or(e,!0);const p=Or(e);0;const m=e.subTree;e.subTree=p,_(m,p,f(m.el),K(m),e,s,o),t.el=p.el,null===d&&Sr(e,p.el),i&&nr(i,s),(h=t.props&&t.props.onVnodeUpdated)&&nr(()=>ii(h,l,t,u),s)}else{let a;const{el:c,props:l}=t,{bm:u,m:h,parent:d,root:f,type:p}=e,m=Mt(t);if(or(e,!1),u&&Object(r["o"])(u),!m&&(a=l&&l.onVnodeBeforeMount)&&ii(a,d,t),or(e,!0),c&&Q){const t=()=>{e.subTree=Or(e),Q(c,e.subTree,e,s,null)};m&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{f.ce&&f.ce._injectChildStyle(p);const r=e.subTree=Or(e);0,_(null,r,n,i,e,s,o),t.el=r.el}if(h&&nr(h,s),!m&&(a=l&&l.onVnodeMounted)){const e=t;nr(()=>ii(a,d,e),s)}(256&t.shapeFlag||d&&Mt(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&nr(e.a,s),e.isMounted=!0,t=n=i=null}};e.scope.on();const l=e.effect=new u(c);e.scope.off();const h=e.update=l.run.bind(l),d=e.job=l.runIfDirty.bind(l);d.i=e,d.id=e.uid,l.scheduler=()=>_t(d),or(e,!0),h()},M=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Bn(e,t.props,r,n),er(e,t.children,n),T(),yt(e),k()},U=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void V(l,h,n,r,i,s,o,a,c);if(256&f)return void F(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&W(l,i,s),h!==l&&d(n,h)):16&u?16&p?V(l,h,n,r,i,s,o,a,c):W(l,i,s,!0):(8&u&&d(n,""),16&p&&A(h,n,r,i,s,o,a,c))},F=(e,t,n,i,s,o,a,c,l)=>{e=e||r["a"],t=t||r["a"];const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?ti(t[f]):ei(t[f]);_(e[f],r,n,null,s,o,a,c,l)}u>h?W(e,s,o,!0,!1,d):A(t,n,i,s,o,a,c,l,d)},V=(e,t,n,i,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?ti(t[u]):ei(t[u]);if(!Hr(r,i))break;_(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?ti(t[f]):ei(t[f]);if(!Hr(r,i))break;_(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,r=e<h?t[e].el:i;while(u<=f)_(null,t[u]=l?ti(t[u]):ei(t[u]),n,r,s,o,a,c,l),u++}}else if(u>f)while(u<=d)$(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?ti(t[u]):ei(t[u]);null!=e.key&&g.set(e.key,u)}let v,b=0;const y=f-m+1;let w=!1,O=0;const E=new Array(y);for(u=0;u<y;u++)E[u]=0;for(u=p;u<=d;u++){const r=e[u];if(b>=y){$(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===E[v-m]&&Hr(r,t[v])){i=v;break}void 0===i?$(r,s,o,!0):(E[i-m]=u+1,i>=O?O=i:w=!0,_(r,t[i],n,null,s,o,a,c,l),b++)}const T=w?lr(E):r["a"];for(v=T.length-1,u=y-1;u>=0;u--){const e=m+u,r=t[e],d=e+1<h?t[e+1].el:i;0===E[u]?_(null,r,n,d,s,o,a,c,l):w&&(v<0||u!==T[v]?B(r,n,d,2):v--)}}},B=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void B(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,X);if(a===xr){i(o,t,n);for(let e=0;e<l.length;e++)B(l[e],t,n,r);return void i(e.anchor,t,n)}if(a===Pr)return void w(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),nr(()=>c.enter(o),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),l=()=>{e(o,()=>{a(),s&&s()})};r?r(o,a,l):l()}else i(o,t,n)},$=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d,cacheIndex:f}=e;if(-2===h&&(i=!1),null!=a&&Lt(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,m=!Mt(e);let g;if(m&&(g=o&&o.onVnodeBeforeUnmount)&&ii(g,t,e),6&u)q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&Ct(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,X,r):l&&!l.hasOnce&&(s!==xr||h>0&&64&h)?W(l,t,n,!1,!0):(s===xr&&384&h||!i&&16&u)&&W(c,t,n),r&&z(e)}(m&&(g=o&&o.onVnodeUnmounted)||p)&&nr(()=>{g&&ii(g,t,e),p&&Ct(e,null,t,"unmounted")},n)},z=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===xr)return void H(n,r);if(t===Pr)return void O(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},H=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},q=(e,t,n)=>{const{bum:i,scope:s,job:o,subTree:a,um:c,m:l,a:u}=e;hr(l),hr(u),i&&Object(r["o"])(i),s.stop(),o&&(o.flags|=8,$(a,e,t,n)),c&&nr(c,t),nr(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},W=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)$(e[o],t,n,r,i)},K=e=>{if(6&e.shapeFlag)return K(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[xt];return n?p(n):t};let G=!1;const J=(e,t,n)=>{null==e?t._vnode&&$(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),t._vnode=e,G||(G=!0,yt(),wt(),G=!1)},X={p:_,um:$,m:B,r:z,mt:N,mc:A,pc:U,pbc:x,n:K,o:e};let Y,Q;return t&&([Y,Q]=t(X)),{render:J,hydrate:Y,createApp:Pn(J,Y)}}function sr({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function or({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ar(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function cr(e,t,n=!1){const i=e.children,s=t.children;if(Object(r["p"])(i)&&Object(r["p"])(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=ti(s[r]),t.el=e.el),n||-2===t.patchFlag||cr(e,t)),t.type===Rr&&(t.el=e.el)}}function lr(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function ur(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ur(t)}function hr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const dr=Symbol.for("v-scx"),fr=()=>{{const e=Ln(dr);return e}};function pr(e,t,n){return mr(e,t,n)}function mr(e,t,n=r["b"]){const{immediate:i,deep:s,flush:o,once:a}=n;const c=Object(r["h"])({},n);let l;if(_i)if("sync"===o){const e=fr();l=e.__watcherHandles||(e.__watcherHandles=[])}else{if(t&&!i){const e=()=>{};return e.stop=r["d"],e.resume=r["d"],e.pause=r["d"],e}c.once=!0}const u=ci;c.call=(e,t,n)=>rt(e,u,t,n);let h=!1;"post"===o?c.scheduler=e=>{nr(e,u&&u.suspense)}:"sync"!==o&&(h=!0,c.scheduler=(e,t)=>{t?e():_t(e)}),c.augmentJob=e=>{t&&(e.flags|=4),h&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};const d=et(e,t,c);return l&&l.push(d),d}function gr(e,t,n){const i=this.proxy,s=Object(r["L"])(e)?e.includes(".")?_r(i,e):()=>i[e]:e.bind(i,i);let o;Object(r["s"])(t)?o=t:(o=t.handler,n=t);const a=di(this),c=mr(s,o.bind(i),n);return a(),c}function _r(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const vr=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[t+"Modifiers"]||e[Object(r["e"])(t)+"Modifiers"]||e[Object(r["m"])(t)+"Modifiers"];function br(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r["b"];let s=n;const o=t.startsWith("update:"),a=o&&vr(i,t.slice(7));let c;a&&(a.trim&&(s=n.map(e=>Object(r["L"])(e)?e.trim():e)),a.number&&(s=n.map(r["P"])));let l=i[c=Object(r["W"])(t)]||i[c=Object(r["W"])(Object(r["e"])(t))];!l&&o&&(l=i[c=Object(r["W"])(Object(r["m"])(t))]),l&&rt(l,e,6,s);const u=i[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,rt(u,e,6,s)}}function yr(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(r["s"])(e)){const i=e=>{const n=yr(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?(Object(r["p"])(o)?o.forEach(e=>a[e]=null):Object(r["h"])(a,o),Object(r["B"])(e)&&i.set(e,a),a):(Object(r["B"])(e)&&i.set(e,null),null)}function wr(e,t){return!(!e||!Object(r["C"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["l"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["l"])(e,Object(r["m"])(t))||Object(r["l"])(e,t))}function Or(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,props:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e,_=It(e);let v,b;try{if(4&n.shapeFlag){const e=s||i,t=e;v=ei(u.call(t,e,h,d,p,f,m)),b=c}else{const e=t;0,v=ei(e.length>1?e(d,{attrs:c,slots:a,emit:l}):e(d,null)),b=t.props?c:Er(c)}}catch(w){Nr.length=0,it(w,e,1),v=Gr(jr)}let y=v;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=y;e.length&&7&t&&(o&&e.some(r["A"])&&(b=Tr(b,o)),y=Yr(y,b,!1,!0))}return n.dirs&&(y=Yr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Pt(y,n.transition),v=y,It(_),v}const Er=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["C"])(n))&&((t||(t={}))[n]=e[n]);return t},Tr=(e,t)=>{const n={};for(const i in e)Object(r["A"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function kr(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Ir(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Ir(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!wr(l,n))return!0}}return!1}function Ir(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!wr(n,s))return!0}return!1}function Sr({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const Ar=e=>e.__isSuspense;function Cr(e,t){t&&t.pendingBranch?Object(r["p"])(e)?t.effects.push(...e):t.effects.push(e):bt(e)}const xr=Symbol.for("v-fgt"),Rr=Symbol.for("v-txt"),jr=Symbol.for("v-cmt"),Pr=Symbol.for("v-stc"),Nr=[];let Dr=null;function Lr(e=!1){Nr.push(Dr=e?null:[])}function Mr(){Nr.pop(),Dr=Nr[Nr.length-1]||null}let Ur=1;function Fr(e){Ur+=e,e<0&&Dr&&(Dr.hasOnce=!0)}function Vr(e){return e.dynamicChildren=Ur>0?Dr||r["a"]:null,Mr(),Ur>0&&Dr&&Dr.push(e),e}function Br(e,t,n,r,i,s){return Vr(Kr(e,t,n,r,i,s,!0))}function $r(e,t,n,r,i){return Vr(Gr(e,t,n,r,i,!0))}function zr(e){return!!e&&!0===e.__v_isVNode}function Hr(e,t){return e.type===t.type&&e.key===t.key}const qr=({key:e})=>null!=e?e:null,Wr=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?Object(r["L"])(e)||Ve(e)||Object(r["s"])(e)?{i:Tt,r:e,k:t,f:!!n}:e:null);function Kr(e,t=null,n=null,i=0,s=null,o=(e===xr?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qr(t),ref:t&&Wr(t),scopeId:kt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return c?(ni(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=Object(r["L"])(n)?8:16),Ur>0&&!a&&Dr&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Dr.push(l),l}const Gr=Jr;function Jr(e,t=null,n=null,i=0,s=null,o=!1){if(e&&e!==an||(e=jr),zr(e)){const r=Yr(e,t,!0);return n&&ni(r,n),Ur>0&&!o&&Dr&&(6&r.shapeFlag?Dr[Dr.indexOf(e)]=r:Dr.push(r)),r.patchFlag=-2,r}if(Ii(e)&&(e=e.__vccOpts),t){t=Xr(t);let{class:e,style:n}=t;e&&!Object(r["L"])(e)&&(t.class=Object(r["R"])(e)),Object(r["B"])(n)&&(De(n)&&!Object(r["p"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["S"])(n))}const a=Object(r["L"])(e)?1:Ar(e)?128:Rt(e)?64:Object(r["B"])(e)?4:Object(r["s"])(e)?2:0;return Kr(e,t,n,i,s,a,o,!0)}function Xr(e){return e?De(e)||Fn(e)?Object(r["h"])({},e):e:null}function Yr(e,t,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=e,u=t?ri(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&qr(u),ref:t&&t.ref?n&&o?Object(r["p"])(o)?o.concat(Wr(t)):[o,Wr(t)]:Wr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xr?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yr(e.ssContent),ssFallback:e.ssFallback&&Yr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Pt(h,l.clone(h)),h}function Qr(e=" ",t=0){return Gr(Rr,null,e,t)}function Zr(e="",t=!1){return t?(Lr(),$r(jr,null,e)):Gr(jr,null,e)}function ei(e){return null==e||"boolean"===typeof e?Gr(jr):Object(r["p"])(e)?Gr(xr,null,e.slice()):zr(e)?ti(e):Gr(Rr,null,String(e))}function ti(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Yr(e)}function ni(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["p"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),ni(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Fn(t)?3===r&&Tt&&(1===Tt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Tt}}else Object(r["s"])(t)?(t={default:t,_ctx:Tt},n=32):(t=String(t),64&i?(n=16,t=[Qr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ri(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["R"])([t.class,i.class]));else if("style"===e)t.style=Object(r["S"])([t.style,i.style]);else if(Object(r["C"])(e)){const n=t[e],s=i[e];!s||n===s||Object(r["p"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function ii(e,t,n,r=null){rt(e,t,7,[n,r])}const si=Rn();let oi=0;function ai(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||si,a={uid:oi++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qn(i,s),emitsOptions:yr(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=br.bind(null,a),e.ce&&e.ce(a),a}let ci=null;const li=()=>ci||Tt;let ui,hi;{const e=Object(r["j"])(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ui=t("__VUE_INSTANCE_SETTERS__",e=>ci=e),hi=t("__VUE_SSR_SETTERS__",e=>_i=e)}const di=e=>{const t=ci;return ui(e),e.scope.on(),()=>{e.scope.off(),ui(t)}},fi=()=>{ci&&ci.scope.off(),ui(null)};function pi(e){return 4&e.vnode.shapeFlag}let mi,gi,_i=!1;function vi(e,t=!1,n=!1){t&&hi(t);const{props:r,children:i}=e.vnode,s=pi(e);Vn(e,r,s,t),Zn(e,i,n);const o=s?bi(e,t):void 0;return t&&hi(!1),o}function bi(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,pn);const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Ei(e):null,s=di(e);T();const o=nt(i,e,0,[e.props,n]);if(k(),s(),Object(r["E"])(o)){if(Mt(e)||Dt(e),o.then(fi,fi),t)return o.then(n=>{yi(e,n,t)}).catch(t=>{it(t,e,0)});e.asyncDep=o}else yi(e,o,t)}else wi(e,t)}function yi(e,t,n){Object(r["s"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["B"])(t)&&(e.setupState=Ke(t)),wi(e,n)}function wi(e,t,n){const i=e.type;if(!e.render){if(!t&&mi&&!i.render){const t=i.template||wn(e).template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=mi(t,c)}}e.render=i.render||r["d"],gi&&gi(e)}{const t=di(e);T();try{_n(e)}finally{k(),t()}}}const Oi={get(e,t){return D(e,"get",""),e[t]}};function Ei(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Oi),slots:e.slots,emit:e.emit,expose:t}}function Ti(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ke(Me(e.exposed)),{get(t,n){return n in t?t[n]:n in dn?dn[n](e):void 0},has(e,t){return t in e||t in dn}})):e.proxy}function ki(e,t=!0){return Object(r["s"])(e)?e.displayName||e.name:e.name||t&&e.__name}function Ii(e){return Object(r["s"])(e)&&"__vccOpts"in e}const Si=(e,t)=>{const n=Je(e,t,_i);return n};function Ai(e,t,n){const i=arguments.length;return 2===i?Object(r["B"])(t)&&!Object(r["p"])(t)?zr(t)?Gr(e,null,[t]):Gr(e,t):Gr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&zr(n)&&(n=[n]),Gr(e,t,n))}const Ci="3.5.10";r["d"];
/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xi=void 0;const Ri="undefined"!==typeof window&&window.trustedTypes;if(Ri)try{xi=Ri.createPolicy("vue",{createHTML:e=>e})}catch(Cs){}const ji=xi?e=>xi.createHTML(e):e=>e,Pi="http://www.w3.org/2000/svg",Ni="http://www.w3.org/1998/Math/MathML",Di="undefined"!==typeof document?document:null,Li=Di&&Di.createElement("template"),Mi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?Di.createElementNS(Pi,e):"mathml"===t?Di.createElementNS(Ni,e):n?Di.createElement(e,{is:n}):Di.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Di.createTextNode(e),createComment:e=>Di.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Di.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{Li.innerHTML=ji("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=Li.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ui=Symbol("_vtc");Boolean;function Fi(e,t,n){const r=e[Ui];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Vi=Symbol("_vod"),Bi=Symbol("_vsh"),$i={beforeMount(e,{value:t},{transition:n}){e[Vi]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):zi(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),zi(e,!0),r.enter(e)):r.leave(e,()=>{zi(e,!1)}):zi(e,t))},beforeUnmount(e,{value:t}){zi(e,t)}};function zi(e,t){e.style.display=t?e[Vi]:"none",e[Bi]=!t}const Hi=Symbol("");const qi=/(^|;)\s*display\s*:/;function Wi(e,t,n){const i=e.style,s=Object(r["L"])(n);let o=!1;if(n&&!s){if(t)if(Object(r["L"])(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&Gi(i,t,"")}else for(const e in t)null==n[e]&&Gi(i,e,"");for(const e in n)"display"===e&&(o=!0),Gi(i,e,n[e])}else if(s){if(t!==n){const e=i[Hi];e&&(n+=";"+e),i.cssText=n,o=qi.test(n)}}else t&&e.removeAttribute("style");Vi in e&&(e[Vi]=o?i.display:"",e[Bi]&&(i.display="none"))}const Ki=/\s*!important$/;function Gi(e,t,n){if(Object(r["p"])(n))n.forEach(n=>Gi(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Yi(e,t);Ki.test(n)?e.setProperty(Object(r["m"])(i),n.replace(Ki,""),"important"):e[i]=n}}const Ji=["Webkit","Moz","ms"],Xi={};function Yi(e,t){const n=Xi[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Xi[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ji.length;r++){const n=Ji[r]+i;if(n in e)return Xi[t]=n}return t}const Qi="http://www.w3.org/1999/xlink";function Zi(e,t,n,i,s,o=Object(r["K"])(t)){i&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(Qi,t.slice(6,t.length)):e.setAttributeNS(Qi,t,n):null==n||o&&!Object(r["n"])(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Object(r["M"])(n)?String(n):n)}function es(e,t,n,i){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?ji(n):n));const s=e.tagName;if("value"===t&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let o=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=Object(r["n"])(n):null==n&&"string"===i?(n="",o=!0):"number"===i&&(n=0,o=!0)}try{e[t]=n}catch(Cs){0}o&&e.removeAttribute(t)}function ts(e,t,n,r){e.addEventListener(t,n,r)}function ns(e,t,n,r){e.removeEventListener(t,n,r)}const rs=Symbol("_vei");function is(e,t,n,r,i=null){const s=e[rs]||(e[rs]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=os(t);if(r){const o=s[t]=us(r,i);ts(e,n,o,a)}else o&&(ns(e,n,o,a),s[t]=void 0)}}const ss=/(?:Once|Passive|Capture)$/;function os(e){let t;if(ss.test(e)){let n;t={};while(n=e.match(ss))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):Object(r["m"])(e.slice(2));return[n,t]}let as=0;const cs=Promise.resolve(),ls=()=>as||(cs.then(()=>as=0),as=Date.now());function us(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();rt(hs(e,n.value),t,5,[e])};return n.value=e,n.attached=ls(),n}function hs(e,t){if(Object(r["p"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const ds=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,fs=(e,t,n,i,s,o)=>{const a="svg"===s;"class"===t?Fi(e,i,a):"style"===t?Wi(e,n,i):Object(r["C"])(t)?Object(r["A"])(t)||is(e,t,n,i,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ps(e,t,i,a))?(es(e,t,i),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||Zi(e,t,i,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&Object(r["L"])(i)?("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Zi(e,t,i,a)):es(e,Object(r["e"])(t),i)};function ps(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&ds(t)&&Object(r["s"])(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ds(t)||!Object(r["L"])(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const ms=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Object(r["p"])(t)?e=>Object(r["o"])(t,e):t};function gs(e){e.target.composing=!0}function _s(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vs=Symbol("_assign"),bs={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[vs]=ms(s);const o=i||s.props&&"number"===s.props.type;ts(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=Object(r["P"])(i)),e[vs](i)}),n&&ts(e,"change",()=>{e.value=e.value.trim()}),t||(ts(e,"compositionstart",gs),ts(e,"compositionend",_s),ts(e,"change",_s))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:o}},a){if(e[vs]=ms(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:Object(r["P"])(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(i&&t===n)return;if(s&&e.value.trim()===l)return}e.value=l}}};const ys=["ctrl","shift","alt","meta"],ws={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ys.some(n=>e[n+"Key"]&&!t.includes(n))},Os=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=ws[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Es=Object(r["h"])({patchProp:fs},Mi);let Ts;function ks(){return Ts||(Ts=rr(Es))}const Is=(...e)=>{const t=ks().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=As(e);if(!i)return;const s=t._component;Object(r["s"])(s)||s.render||s.template||(s.template=i.innerHTML),1===i.nodeType&&(i.textContent="");const o=n(i,!1,Ss(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Ss(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function As(e){if(Object(r["L"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){"use strict";var r=n("1d80"),i=Object;e.exports=function(e){return i(r(e))}},"7b17":function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"top",(function(){return i})),n.d(r,"bottom",(function(){return s})),n.d(r,"right",(function(){return o})),n.d(r,"left",(function(){return a})),n.d(r,"auto",(function(){return c})),n.d(r,"basePlacements",(function(){return l})),n.d(r,"start",(function(){return u})),n.d(r,"end",(function(){return h})),n.d(r,"clippingParents",(function(){return d})),n.d(r,"viewport",(function(){return f})),n.d(r,"popper",(function(){return p})),n.d(r,"reference",(function(){return m})),n.d(r,"variationPlacements",(function(){return g})),n.d(r,"placements",(function(){return _})),n.d(r,"beforeRead",(function(){return v})),n.d(r,"read",(function(){return b})),n.d(r,"afterRead",(function(){return y})),n.d(r,"beforeMain",(function(){return w})),n.d(r,"main",(function(){return O})),n.d(r,"afterMain",(function(){return E})),n.d(r,"beforeWrite",(function(){return T})),n.d(r,"write",(function(){return k})),n.d(r,"afterWrite",(function(){return I})),n.d(r,"modifierPhases",(function(){return S})),n.d(r,"applyStyles",(function(){return D})),n.d(r,"arrow",(function(){return ae})),n.d(r,"computeStyles",(function(){return fe})),n.d(r,"eventListeners",(function(){return ge})),n.d(r,"flip",(function(){return Ue})),n.d(r,"hide",(function(){return $e})),n.d(r,"offset",(function(){return qe})),n.d(r,"popperOffsets",(function(){return Ke})),n.d(r,"preventOverflow",(function(){return Xe})),n.d(r,"popperGenerator",(function(){return at})),n.d(r,"detectOverflow",(function(){return Ne})),n.d(r,"createPopperBase",(function(){return ct})),n.d(r,"createPopper",(function(){return ut})),n.d(r,"createPopperLite",(function(){return dt}));var i="top",s="bottom",o="right",a="left",c="auto",l=[i,s,o,a],u="start",h="end",d="clippingParents",f="viewport",p="popper",m="reference",g=l.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+h])}),[]),_=[].concat(l,[c]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+h])}),[]),v="beforeRead",b="read",y="afterRead",w="beforeMain",O="main",E="afterMain",T="beforeWrite",k="write",I="afterWrite",S=[v,b,y,w,O,E,T,k,I];function A(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=C(e).Element;return e instanceof t||e instanceof Element}function R(e){var t=C(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function j(e){if("undefined"===typeof ShadowRoot)return!1;var t=C(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function P(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];R(i)&&A(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function N(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});R(r)&&A(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var D={name:"applyStyles",enabled:!0,phase:"write",fn:P,effect:N,requires:["computeStyles"]};function L(e){return e.split("-")[0]}var M=Math.max,U=Math.min,F=Math.round;function V(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function B(){return!/^((?!chrome|android).)*safari/i.test(V())}function $(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),i=1,s=1;t&&R(e)&&(i=e.offsetWidth>0&&F(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&F(r.height)/e.offsetHeight||1);var o=x(e)?C(e):window,a=o.visualViewport,c=!B()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/i,u=(r.top+(c&&a?a.offsetTop:0))/s,h=r.width/i,d=r.height/s;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function z(e){var t=$(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function H(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&j(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function q(e){return C(e).getComputedStyle(e)}function W(e){return["table","td","th"].indexOf(A(e))>=0}function K(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function G(e){return"html"===A(e)?e:e.assignedSlot||e.parentNode||(j(e)?e.host:null)||K(e)}function J(e){return R(e)&&"fixed"!==q(e).position?e.offsetParent:null}function X(e){var t=/firefox/i.test(V()),n=/Trident/i.test(V());if(n&&R(e)){var r=q(e);if("fixed"===r.position)return null}var i=G(e);j(i)&&(i=i.host);while(R(i)&&["html","body"].indexOf(A(i))<0){var s=q(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function Y(e){var t=C(e),n=J(e);while(n&&W(n)&&"static"===q(n).position)n=J(n);return n&&("html"===A(n)||"body"===A(n)&&"static"===q(n).position)?t:n||X(e)||t}function Q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e,t,n){return M(e,U(t,n))}function ee(e,t,n){var r=Z(e,t,n);return r>n?n:r}function te(){return{top:0,right:0,bottom:0,left:0}}function ne(e){return Object.assign({},te(),e)}function re(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ie=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ne("number"!==typeof e?e:re(e,l))};function se(e){var t,n=e.state,r=e.name,c=e.options,l=n.elements.arrow,u=n.modifiersData.popperOffsets,h=L(n.placement),d=Q(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(l&&u){var m=ie(c.padding,n),g=z(l),_="y"===d?i:a,v="y"===d?s:o,b=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],y=u[d]-n.rects.reference[d],w=Y(l),O=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,E=b/2-y/2,T=m[_],k=O-g[p]-m[v],I=O/2-g[p]/2+E,S=Z(T,I,k),A=d;n.modifiersData[r]=(t={},t[A]=S,t.centerOffset=S-I,t)}}function oe(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&H(t.elements.popper,i)&&(t.elements.arrow=i)}var ae={name:"arrow",enabled:!0,phase:"main",fn:se,effect:oe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(e){return e.split("-")[1]}var le={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ue(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:F(n*i)/i||0,y:F(r*i)/i||0}}function he(e){var t,n=e.popper,r=e.popperRect,c=e.placement,l=e.variation,u=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,g=e.isFixed,_=u.x,v=void 0===_?0:_,b=u.y,y=void 0===b?0:b,w="function"===typeof m?m({x:v,y:y}):{x:v,y:y};v=w.x,y=w.y;var O=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),T=a,k=i,I=window;if(p){var S=Y(n),A="clientHeight",x="clientWidth";if(S===C(n)&&(S=K(n),"static"!==q(S).position&&"absolute"===d&&(A="scrollHeight",x="scrollWidth")),S=S,c===i||(c===a||c===o)&&l===h){k=s;var R=g&&S===I&&I.visualViewport?I.visualViewport.height:S[A];y-=R-r.height,y*=f?1:-1}if(c===a||(c===i||c===s)&&l===h){T=o;var j=g&&S===I&&I.visualViewport?I.visualViewport.width:S[x];v-=j-r.width,v*=f?1:-1}}var P,N=Object.assign({position:d},p&&le),D=!0===m?ue({x:v,y:y},C(n)):{x:v,y:y};return v=D.x,y=D.y,f?Object.assign({},N,(P={},P[k]=E?"0":"",P[T]=O?"0":"",P.transform=(I.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",P)):Object.assign({},N,(t={},t[k]=E?y+"px":"",t[T]=O?v+"px":"",t.transform="",t))}function de(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:L(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,he(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,he(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var fe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:de,data:{}},pe={passive:!0};function me(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=C(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,pe)})),a&&c.addEventListener("resize",n.update,pe),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,pe)})),a&&c.removeEventListener("resize",n.update,pe)}}var ge={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:me,data:{}},_e={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(e){return e.replace(/left|right|bottom|top/g,(function(e){return _e[e]}))}var be={start:"end",end:"start"};function ye(e){return e.replace(/start|end/g,(function(e){return be[e]}))}function we(e){var t=C(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Oe(e){return $(K(e)).left+we(e).scrollLeft}function Ee(e,t){var n=C(e),r=K(e),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var l=B();(l||!l&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+Oe(e),y:c}}function Te(e){var t,n=K(e),r=we(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=M(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Oe(e),c=-r.scrollTop;return"rtl"===q(i||n).direction&&(a+=M(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function ke(e){var t=q(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Ie(e){return["html","body","#document"].indexOf(A(e))>=0?e.ownerDocument.body:R(e)&&ke(e)?e:Ie(G(e))}function Se(e,t){var n;void 0===t&&(t=[]);var r=Ie(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=C(r),o=i?[s].concat(s.visualViewport||[],ke(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(Se(G(o)))}function Ae(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ce(e,t){var n=$(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function xe(e,t,n){return t===f?Ae(Ee(e,n)):x(t)?Ce(t,n):Ae(Te(K(e)))}function Re(e){var t=Se(G(e)),n=["absolute","fixed"].indexOf(q(e).position)>=0,r=n&&R(e)?Y(e):e;return x(r)?t.filter((function(e){return x(e)&&H(e,r)&&"body"!==A(e)})):[]}function je(e,t,n,r){var i="clippingParents"===t?Re(e):[].concat(t),s=[].concat(i,[n]),o=s[0],a=s.reduce((function(t,n){var i=xe(e,n,r);return t.top=M(i.top,t.top),t.right=U(i.right,t.right),t.bottom=U(i.bottom,t.bottom),t.left=M(i.left,t.left),t}),xe(e,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Pe(e){var t,n=e.reference,r=e.element,c=e.placement,l=c?L(c):null,d=c?ce(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(l){case i:t={x:f,y:n.y-r.height};break;case s:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var m=l?Q(l):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case u:t[m]=t[m]-(n[g]/2-r[g]/2);break;case h:t[m]=t[m]+(n[g]/2-r[g]/2);break;default:}}return t}function Ne(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.strategy,u=void 0===c?e.strategy:c,h=n.boundary,g=void 0===h?d:h,_=n.rootBoundary,v=void 0===_?f:_,b=n.elementContext,y=void 0===b?p:b,w=n.altBoundary,O=void 0!==w&&w,E=n.padding,T=void 0===E?0:E,k=ne("number"!==typeof T?T:re(T,l)),I=y===p?m:p,S=e.rects.popper,A=e.elements[O?I:y],C=je(x(A)?A:A.contextElement||K(e.elements.popper),g,v,u),R=$(e.elements.reference),j=Pe({reference:R,element:S,strategy:"absolute",placement:a}),P=Ae(Object.assign({},S,j)),N=y===p?P:R,D={top:C.top-N.top+k.top,bottom:N.bottom-C.bottom+k.bottom,left:C.left-N.left+k.left,right:N.right-C.right+k.right},L=e.modifiersData.offset;if(y===p&&L){var M=L[a];Object.keys(D).forEach((function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[i,s].indexOf(e)>=0?"y":"x";D[e]+=M[n]*t}))}return D}function De(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?_:c,h=ce(r),d=h?a?g:g.filter((function(e){return ce(e)===h})):l,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Ne(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[L(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Le(e){if(L(e)===c)return[];var t=ve(e);return[ye(e),t,ye(t)]}function Me(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var l=n.mainAxis,h=void 0===l||l,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,g=n.boundary,_=n.rootBoundary,v=n.altBoundary,b=n.flipVariations,y=void 0===b||b,w=n.allowedAutoPlacements,O=t.options.placement,E=L(O),T=E===O,k=p||(T||!y?[ve(O)]:Le(O)),I=[O].concat(k).reduce((function(e,n){return e.concat(L(n)===c?De(t,{placement:n,boundary:g,rootBoundary:_,padding:m,flipVariations:y,allowedAutoPlacements:w}):n)}),[]),S=t.rects.reference,A=t.rects.popper,C=new Map,x=!0,R=I[0],j=0;j<I.length;j++){var P=I[j],N=L(P),D=ce(P)===u,M=[i,s].indexOf(N)>=0,U=M?"width":"height",F=Ne(t,{placement:P,boundary:g,rootBoundary:_,altBoundary:v,padding:m}),V=M?D?o:a:D?s:i;S[U]>A[U]&&(V=ve(V));var B=ve(V),$=[];if(h&&$.push(F[N]<=0),f&&$.push(F[V]<=0,F[B]<=0),$.every((function(e){return e}))){R=P,x=!1;break}C.set(P,$)}if(x)for(var z=y?3:1,H=function(e){var t=I.find((function(t){var n=C.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},q=z;q>0;q--){var W=H(q);if("break"===W)break}t.placement!==R&&(t.modifiersData[r]._skip=!0,t.placement=R,t.reset=!0)}}var Ue={name:"flip",enabled:!0,phase:"main",fn:Me,requiresIfExists:["offset"],data:{_skip:!1}};function Fe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ve(e){return[i,o,s,a].some((function(t){return e[t]>=0}))}function Be(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=Ne(t,{elementContext:"reference"}),a=Ne(t,{altBoundary:!0}),c=Fe(o,r),l=Fe(a,i,s),u=Ve(c),h=Ve(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var $e={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Be};function ze(e,t,n){var r=L(e),s=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*s,[a,o].indexOf(r)>=0?{x:u,y:l}:{x:l,y:u}}function He(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=_.reduce((function(e,n){return e[n]=ze(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var qe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:He};function We(e){var t=e.state,n=e.name;t.modifiersData[n]=Pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ke={name:"popperOffsets",enabled:!0,phase:"read",fn:We,data:{}};function Ge(e){return"x"===e?"y":"x"}function Je(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,l=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,_=n.tether,v=void 0===_||_,b=n.tetherOffset,y=void 0===b?0:b,w=Ne(t,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),O=L(t.placement),E=ce(t.placement),T=!E,k=Q(O),I=Ge(k),S=t.modifiersData.popperOffsets,A=t.rects.reference,C=t.rects.popper,x="function"===typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"===typeof x?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(S){if(l){var N,D="y"===k?i:a,F="y"===k?s:o,V="y"===k?"height":"width",B=S[k],$=B+w[D],H=B-w[F],q=v?-C[V]/2:0,W=E===u?A[V]:C[V],K=E===u?-C[V]:-A[V],G=t.elements.arrow,J=v&&G?z(G):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:te(),ne=X[D],re=X[F],ie=Z(0,A[V],J[V]),se=T?A[V]/2-q-ie-ne-R.mainAxis:W-ie-ne-R.mainAxis,oe=T?-A[V]/2+q+ie+re+R.mainAxis:K+ie+re+R.mainAxis,ae=t.elements.arrow&&Y(t.elements.arrow),le=ae?"y"===k?ae.clientTop||0:ae.clientLeft||0:0,ue=null!=(N=null==j?void 0:j[k])?N:0,he=B+se-ue-le,de=B+oe-ue,fe=Z(v?U($,he):$,B,v?M(H,de):H);S[k]=fe,P[k]=fe-B}if(d){var pe,me="x"===k?i:a,ge="x"===k?s:o,_e=S[I],ve="y"===I?"height":"width",be=_e+w[me],ye=_e-w[ge],we=-1!==[i,a].indexOf(O),Oe=null!=(pe=null==j?void 0:j[I])?pe:0,Ee=we?be:_e-A[ve]-C[ve]-Oe+R.altAxis,Te=we?_e+A[ve]+C[ve]-Oe-R.altAxis:ye,ke=v&&we?ee(Ee,_e,Te):Z(v?Ee:be,_e,v?Te:ye);S[I]=ke,P[I]=ke-_e}t.modifiersData[r]=P}}var Xe={name:"preventOverflow",enabled:!0,phase:"main",fn:Je,requiresIfExists:["offset"]};function Ye(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Qe(e){return e!==C(e)&&R(e)?Ye(e):we(e)}function Ze(e){var t=e.getBoundingClientRect(),n=F(t.width)/e.offsetWidth||1,r=F(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function et(e,t,n){void 0===n&&(n=!1);var r=R(t),i=R(t)&&Ze(t),s=K(t),o=$(e,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==A(t)||ke(s))&&(a=Qe(t)),R(t)?(c=$(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Oe(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function tt(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function nt(e){var t=tt(e);return S.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function rt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function it(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function ot(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function at(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?st:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;u(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:x(e)?Se(e):e.contextElement?Se(e.contextElement):[],popper:Se(t)};var a=nt(it([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(ot(t,n)){i.rects={reference:et(t,Y(n),"fixed"===i.options.strategy),popper:z(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(i=o({state:i,options:u,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:rt((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){u(),a=!0}};if(!ot(e,t))return c;function l(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ct=at(),lt=[ge,Ke,fe,D,qe,Ue,Xe,ae,$e],ut=at({defaultModifiers:lt}),ht=[ge,Ke,fe,D],dt=at({defaultModifiers:ht});
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ft=new Map,pt={set(e,t,n){ft.has(e)||ft.set(e,new Map);const r=ft.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return ft.has(e)&&ft.get(e).get(t)||null},remove(e,t){if(!ft.has(e))return;const n=ft.get(e);n.delete(t),0===n.size&&ft.delete(e)}},mt=1e6,gt=1e3,_t="transitionend",vt=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>"#"+CSS.escape(t))),e),bt=e=>null===e||void 0===e?""+e:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),yt=e=>{do{e+=Math.floor(Math.random()*mt)}while(document.getElementById(e));return e},wt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*gt):0},Ot=e=>{e.dispatchEvent(new Event(_t))},Et=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),Tt=e=>Et(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(vt(e)):null,kt=e=>{if(!Et(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},It=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),St=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?St(e.parentNode):null},At=()=>{},Ct=e=>{e.offsetHeight},xt=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Rt=[],jt=e=>{"loading"===document.readyState?(Rt.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Rt)e()}),Rt.push(e)):e()},Pt=()=>"rtl"===document.documentElement.dir,Nt=e=>{jt(()=>{const t=xt();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},Dt=(e,t=[],n=e)=>"function"===typeof e?e(...t):n,Lt=(e,t,n=!0)=>{if(!n)return void Dt(e);const r=5,i=wt(t)+r;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(_t,o),Dt(e))};t.addEventListener(_t,o),setTimeout(()=>{s||Ot(t)},i)},Mt=(e,t,n,r)=>{const i=e.length;let s=e.indexOf(t);return-1===s?!n&&r?e[i-1]:e[0]:(s+=n?1:-1,r&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},Ut=/[^.]*(?=\..*)\.|.*/,Ft=/\..*/,Vt=/::\d+$/,Bt={};let $t=1;const zt={mouseenter:"mouseover",mouseleave:"mouseout"},Ht=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function qt(e,t){return t&&`${t}::${$t++}`||e.uidEvent||$t++}function Wt(e){const t=qt(e);return e.uidEvent=t,Bt[t]=Bt[t]||{},Bt[t]}function Kt(e,t){return function n(r){return nn(r,{delegateTarget:e}),n.oneOff&&tn.off(e,r.type,t),t.apply(e,[r])}}function Gt(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return nn(i,{delegateTarget:o}),r.oneOff&&tn.off(e,i.type,t,n),n.apply(o,[i])}}function Jt(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function Xt(e,t,n){const r="string"===typeof t,i=r?n:t||n;let s=en(e);return Ht.has(s)||(s=e),[r,i,s]}function Yt(e,t,n,r,i){if("string"!==typeof t||!e)return;let[s,o,a]=Xt(t,n,r);if(t in zt){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const c=Wt(e),l=c[a]||(c[a]={}),u=Jt(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=qt(o,t.replace(Ut,"")),d=s?Gt(e,n,o):Kt(e,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function Qt(e,t,n,r,i){const s=Jt(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function Zt(e,t,n,r){const i=t[n]||{};for(const[s,o]of Object.entries(i))s.includes(r)&&Qt(e,t,n,o.callable,o.delegationSelector)}function en(e){return e=e.replace(Ft,""),zt[e]||e}const tn={on(e,t,n,r){Yt(e,t,n,r,!1)},one(e,t,n,r){Yt(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=Xt(t,n,r),a=o!==t,c=Wt(e),l=c[o]||{},u=t.startsWith(".");if("undefined"===typeof s){if(u)for(const n of Object.keys(c))Zt(e,c,n,t.slice(1));for(const[n,r]of Object.entries(l)){const i=n.replace(Vt,"");a&&!t.includes(i)||Qt(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return;Qt(e,c,o,s,i?n:null)}},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=xt(),i=en(t),s=t!==i;let o=null,a=!0,c=!0,l=!1;s&&r&&(o=r.Event(t,n),r(e).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=nn(new Event(t,{bubbles:a,cancelable:!0}),n);return l&&u.preventDefault(),c&&e.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function nn(e,t={}){for(const[r,i]of Object.entries(t))try{e[r]=i}catch(n){Object.defineProperty(e,r,{configurable:!0,get(){return i}})}return e}function rn(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function sn(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}const on={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+sn(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+sn(t))},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=rn(e.dataset[r])}return t},getDataAttribute(e,t){return rn(e.getAttribute("data-bs-"+sn(t)))}};class an{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=Et(t)?on.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...Et(t)?on.getDataAttributes(t):{},..."object"===typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,r]of Object.entries(t)){const t=e[n],i=Et(t)?"element":bt(t);if(!new RegExp(r).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`)}}}const cn="5.3.3";class ln extends an{constructor(e,t){super(),e=Tt(e),e&&(this._element=e,this._config=this._getConfig(t),pt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){pt.remove(this._element,this.constructor.DATA_KEY),tn.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Lt(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return pt.get(Tt(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return cn}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}static eventName(e){return`${e}${this.EVENT_KEY}`}}const un=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t?t.split(",").map(e=>vt(e)).join(","):null},hn={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const n=[];let r=e.parentNode.closest(t);while(r)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(",");return this.find(t,e).filter(e=>!It(e)&&kt(e))},getSelectorFromElement(e){const t=un(e);return t&&hn.findOne(t)?t:null},getElementFromSelector(e){const t=un(e);return t?hn.findOne(t):null},getMultipleElementsFromSelector(e){const t=un(e);return t?hn.find(t):[]}},dn=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,r=e.NAME;tn.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),It(this))return;const i=hn.getElementFromSelector(this)||this.closest("."+r),s=e.getOrCreateInstance(i);s[t]()}))},fn="alert",pn="bs.alert",mn="."+pn,gn="close"+mn,_n="closed"+mn,vn="fade",bn="show";class yn extends ln{static get NAME(){return fn}close(){const e=tn.trigger(this._element,gn);if(e.defaultPrevented)return;this._element.classList.remove(bn);const t=this._element.classList.contains(vn);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),tn.trigger(this._element,_n),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=yn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(yn,"close"),Nt(yn);const wn="button",On="bs.button",En="."+On,Tn=".data-api",kn="active",In='[data-bs-toggle="button"]',Sn=`click${En}${Tn}`;class An extends ln{static get NAME(){return wn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(kn))}static jQueryInterface(e){return this.each((function(){const t=An.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}tn.on(document,Sn,In,e=>{e.preventDefault();const t=e.target.closest(In),n=An.getOrCreateInstance(t);n.toggle()}),Nt(An);const Cn="swipe",xn=".bs.swipe",Rn="touchstart"+xn,jn="touchmove"+xn,Pn="touchend"+xn,Nn="pointerdown"+xn,Dn="pointerup"+xn,Ln="touch",Mn="pen",Un="pointer-event",Fn=40,Vn={endCallback:null,leftCallback:null,rightCallback:null},Bn={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class $n extends an{constructor(e,t){super(),this._element=e,e&&$n.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Vn}static get DefaultType(){return Bn}static get NAME(){return Cn}dispose(){tn.off(this._element,xn)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Dt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Fn)return;const t=e/this._deltaX;this._deltaX=0,t&&Dt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(tn.on(this._element,Nn,e=>this._start(e)),tn.on(this._element,Dn,e=>this._end(e)),this._element.classList.add(Un)):(tn.on(this._element,Rn,e=>this._start(e)),tn.on(this._element,jn,e=>this._move(e)),tn.on(this._element,Pn,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Mn||e.pointerType===Ln)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const zn="carousel",Hn="bs.carousel",qn="."+Hn,Wn=".data-api",Kn="ArrowLeft",Gn="ArrowRight",Jn=500,Xn="next",Yn="prev",Qn="left",Zn="right",er="slide"+qn,tr="slid"+qn,nr="keydown"+qn,rr="mouseenter"+qn,ir="mouseleave"+qn,sr="dragstart"+qn,or=`load${qn}${Wn}`,ar=`click${qn}${Wn}`,cr="carousel",lr="active",ur="slide",hr="carousel-item-end",dr="carousel-item-start",fr="carousel-item-next",pr="carousel-item-prev",mr=".active",gr=".carousel-item",_r=mr+gr,vr=".carousel-item img",br=".carousel-indicators",yr="[data-bs-slide], [data-bs-slide-to]",wr='[data-bs-ride="carousel"]',Or={[Kn]:Zn,[Gn]:Qn},Er={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Tr={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class kr extends ln{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=hn.findOne(br,this._element),this._addEventListeners(),this._config.ride===cr&&this.cycle()}static get Default(){return Er}static get DefaultType(){return Tr}static get NAME(){return zn}next(){this._slide(Xn)}nextWhenVisible(){!document.hidden&&kt(this._element)&&this.next()}prev(){this._slide(Yn)}pause(){this._isSliding&&Ot(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?tn.one(this._element,tr,()=>this.cycle()):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void tn.one(this._element,tr,()=>this.to(e));const n=this._getItemIndex(this._getActive());if(n===e)return;const r=e>n?Xn:Yn;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&tn.on(this._element,nr,e=>this._keydown(e)),"hover"===this._config.pause&&(tn.on(this._element,rr,()=>this.pause()),tn.on(this._element,ir,()=>this._maybeEnableCycle())),this._config.touch&&$n.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of hn.find(vr,this._element))tn.on(n,sr,e=>e.preventDefault());const e=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Jn+this._config.interval))},t={leftCallback:()=>this._slide(this._directionToOrder(Qn)),rightCallback:()=>this._slide(this._directionToOrder(Zn)),endCallback:e};this._swipeHelper=new $n(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Or[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=hn.findOne(mr,this._indicatorsElement);t.classList.remove(lr),t.removeAttribute("aria-current");const n=hn.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(lr),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),r=e===Xn,i=t||Mt(this._getItems(),n,r,this._config.wrap);if(i===n)return;const s=this._getItemIndex(i),o=t=>tn.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:s}),a=o(er);if(a.defaultPrevented)return;if(!n||!i)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const l=r?dr:hr,u=r?fr:pr;i.classList.add(u),Ct(i),n.classList.add(l),i.classList.add(l);const h=()=>{i.classList.remove(l,u),i.classList.add(lr),n.classList.remove(lr,u,l),this._isSliding=!1,o(tr)};this._queueCallback(h,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(ur)}_getActive(){return hn.findOne(_r,this._element)}_getItems(){return hn.find(gr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Pt()?e===Qn?Yn:Xn:e===Qn?Xn:Yn}_orderToDirection(e){return Pt()?e===Yn?Qn:Zn:e===Yn?Zn:Qn}static jQueryInterface(e){return this.each((function(){const t=kr.getOrCreateInstance(this,e);if("number"!==typeof e){if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}tn.on(document,ar,yr,(function(e){const t=hn.getElementFromSelector(this);if(!t||!t.classList.contains(cr))return;e.preventDefault();const n=kr.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");return r?(n.to(r),void n._maybeEnableCycle()):"next"===on.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),tn.on(window,or,()=>{const e=hn.find(wr);for(const t of e)kr.getOrCreateInstance(t)}),Nt(kr);const Ir="collapse",Sr="bs.collapse",Ar="."+Sr,Cr=".data-api",xr="show"+Ar,Rr="shown"+Ar,jr="hide"+Ar,Pr="hidden"+Ar,Nr=`click${Ar}${Cr}`,Dr="show",Lr="collapse",Mr="collapsing",Ur="collapsed",Fr=`:scope .${Lr} .${Lr}`,Vr="collapse-horizontal",Br="width",$r="height",zr=".collapse.show, .collapse.collapsing",Hr='[data-bs-toggle="collapse"]',qr={parent:null,toggle:!0},Wr={parent:"(null|element)",toggle:"boolean"};class Kr extends ln{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=hn.find(Hr);for(const r of n){const e=hn.getSelectorFromElement(r),t=hn.find(e).filter(e=>e===this._element);null!==e&&t.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return qr}static get DefaultType(){return Wr}static get NAME(){return Ir}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(zr).filter(e=>e!==this._element).map(e=>Kr.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning)return;const t=tn.trigger(this._element,xr);if(t.defaultPrevented)return;for(const o of e)o.hide();const n=this._getDimension();this._element.classList.remove(Lr),this._element.classList.add(Mr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Mr),this._element.classList.add(Lr,Dr),this._element.style[n]="",tn.trigger(this._element,Rr)},i=n[0].toUpperCase()+n.slice(1),s="scroll"+i;this._queueCallback(r,this._element,!0),this._element.style[n]=this._element[s]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;const e=tn.trigger(this._element,jr);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",Ct(this._element),this._element.classList.add(Mr),this._element.classList.remove(Lr,Dr);for(const r of this._triggerArray){const e=hn.getElementFromSelector(r);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Mr),this._element.classList.add(Lr),tn.trigger(this._element,Pr)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Dr)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=Tt(e.parent),e}_getDimension(){return this._element.classList.contains(Vr)?Br:$r}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Hr);for(const t of e){const e=hn.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=hn.find(Fr,this._config.parent);return hn.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(Ur,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Kr.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}tn.on(document,Nr,Hr,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of hn.getMultipleElementsFromSelector(this))Kr.getOrCreateInstance(t,{toggle:!1}).toggle()})),Nt(Kr);const Gr="dropdown",Jr="bs.dropdown",Xr="."+Jr,Yr=".data-api",Qr="Escape",Zr="Tab",ei="ArrowUp",ti="ArrowDown",ni=2,ri="hide"+Xr,ii="hidden"+Xr,si="show"+Xr,oi="shown"+Xr,ai=`click${Xr}${Yr}`,ci=`keydown${Xr}${Yr}`,li=`keyup${Xr}${Yr}`,ui="show",hi="dropup",di="dropend",fi="dropstart",pi="dropup-center",mi="dropdown-center",gi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',_i=`${gi}.${ui}`,vi=".dropdown-menu",bi=".navbar",yi=".navbar-nav",wi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Oi=Pt()?"top-end":"top-start",Ei=Pt()?"top-start":"top-end",Ti=Pt()?"bottom-end":"bottom-start",ki=Pt()?"bottom-start":"bottom-end",Ii=Pt()?"left-start":"right-start",Si=Pt()?"right-start":"left-start",Ai="top",Ci="bottom",xi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ri={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ji extends ln{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=hn.next(this._element,vi)[0]||hn.prev(this._element,vi)[0]||hn.findOne(vi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return xi}static get DefaultType(){return Ri}static get NAME(){return Gr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(It(this._element)||this._isShown())return;const e={relatedTarget:this._element},t=tn.trigger(this._element,si,e);if(!t.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(yi))for(const e of[].concat(...document.body.children))tn.on(e,"mouseover",At);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ui),this._element.classList.add(ui),tn.trigger(this._element,oi,e)}}hide(){if(It(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=tn.trigger(this._element,ri,e);if(!t.defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))tn.off(e,"mouseover",At);this._popper&&this._popper.destroy(),this._menu.classList.remove(ui),this._element.classList.remove(ui),this._element.setAttribute("aria-expanded","false"),on.removeDataAttribute(this._menu,"popper"),tn.trigger(this._element,ii,e)}}_getConfig(e){if(e=super._getConfig(e),"object"===typeof e.reference&&!Et(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(Gr.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_createPopper(){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:Et(this._config.reference)?e=Tt(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=ut(e,this._menu,t)}_isShown(){return this._menu.classList.contains(ui)}_getPlacement(){const e=this._parent;if(e.classList.contains(di))return Ii;if(e.classList.contains(fi))return Si;if(e.classList.contains(pi))return Ai;if(e.classList.contains(mi))return Ci;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(hi)?t?Ei:Oi:t?ki:Ti}_detectNavbar(){return null!==this._element.closest(bi)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(on.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Dt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const n=hn.find(wi,this._menu).filter(e=>kt(e));n.length&&Mt(n,t,e===ti,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=ji.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e.button===ni||"keyup"===e.type&&e.key!==Zr)return;const t=hn.find(_i);for(const n of t){const t=ji.getInstance(n);if(!t||!1===t._config.autoClose)continue;const r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||"inside"===t._config.autoClose&&!i||"outside"===t._config.autoClose&&i)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===Zr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Qr,r=[ei,ti].includes(e.key);if(!r&&!n)return;if(t&&!n)return;e.preventDefault();const i=this.matches(gi)?this:hn.prev(this,gi)[0]||hn.next(this,gi)[0]||hn.findOne(gi,e.delegateTarget.parentNode),s=ji.getOrCreateInstance(i);if(r)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),i.focus())}}tn.on(document,ci,gi,ji.dataApiKeydownHandler),tn.on(document,ci,vi,ji.dataApiKeydownHandler),tn.on(document,ai,ji.clearMenus),tn.on(document,li,ji.clearMenus),tn.on(document,ai,gi,(function(e){e.preventDefault(),ji.getOrCreateInstance(this).toggle()})),Nt(ji);const Pi="backdrop",Ni="fade",Di="show",Li="mousedown.bs."+Pi,Mi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ui={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Fi extends an{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Mi}static get DefaultType(){return Ui}static get NAME(){return Pi}show(e){if(!this._config.isVisible)return void Dt(e);this._append();const t=this._getElement();this._config.isAnimated&&Ct(t),t.classList.add(Di),this._emulateAnimation(()=>{Dt(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(Di),this._emulateAnimation(()=>{this.dispose(),Dt(e)})):Dt(e)}dispose(){this._isAppended&&(tn.off(this._element,Li),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Ni),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Tt(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),tn.on(e,Li,()=>{Dt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Lt(e,this._getElement(),this._config.isAnimated)}}const Vi="focustrap",Bi="bs.focustrap",$i="."+Bi,zi="focusin"+$i,Hi="keydown.tab"+$i,qi="Tab",Wi="forward",Ki="backward",Gi={autofocus:!0,trapElement:null},Ji={autofocus:"boolean",trapElement:"element"};class Xi extends an{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Gi}static get DefaultType(){return Ji}static get NAME(){return Vi}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),tn.off(document,$i),tn.on(document,zi,e=>this._handleFocusin(e)),tn.on(document,Hi,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tn.off(document,$i))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=hn.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===Ki?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===qi&&(this._lastTabNavDirection=e.shiftKey?Ki:Wi)}}const Yi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Qi=".sticky-top",Zi="padding-right",es="margin-right";class ts{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Zi,t=>t+e),this._setElementAttributes(Yi,Zi,t=>t+e),this._setElementAttributes(Qi,es,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Zi),this._resetElementAttributes(Yi,Zi),this._resetElementAttributes(Qi,es)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,n(Number.parseFloat(i))+"px")};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&on.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=on.getDataAttribute(e,t);null!==n?(on.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(Et(e))t(e);else for(const n of hn.find(e,this._element))t(n)}}const ns="modal",rs="bs.modal",is="."+rs,ss=".data-api",os="Escape",as="hide"+is,cs="hidePrevented"+is,ls="hidden"+is,us="show"+is,hs="shown"+is,ds="resize"+is,fs="click.dismiss"+is,ps="mousedown.dismiss"+is,ms="keydown.dismiss"+is,gs=`click${is}${ss}`,_s="modal-open",vs="fade",bs="show",ys="modal-static",ws=".modal.show",Os=".modal-dialog",Es=".modal-body",Ts='[data-bs-toggle="modal"]',ks={backdrop:!0,focus:!0,keyboard:!0},Is={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ss extends ln{constructor(e,t){super(e,t),this._dialog=hn.findOne(Os,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ts,this._addEventListeners()}static get Default(){return ks}static get DefaultType(){return Is}static get NAME(){return ns}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=tn.trigger(this._element,us,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(_s),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;const e=tn.trigger(this._element,as);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(bs),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){tn.off(window,is),tn.off(this._dialog,is),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Fi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Xi({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=hn.findOne(Es,this._dialog);t&&(t.scrollTop=0),Ct(this._element),this._element.classList.add(bs);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tn.trigger(this._element,hs,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){tn.on(this._element,ms,e=>{e.key===os&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),tn.on(window,ds,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),tn.on(this._element,ps,e=>{tn.one(this._element,fs,t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(_s),this._resetAdjustments(),this._scrollBar.reset(),tn.trigger(this._element,ls)})}_isAnimated(){return this._element.classList.contains(vs)}_triggerBackdropTransition(){const e=tn.trigger(this._element,cs);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(ys)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ys),this._queueCallback(()=>{this._element.classList.remove(ys),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=Pt()?"paddingLeft":"paddingRight";this._element.style[e]=t+"px"}if(!n&&e){const e=Pt()?"paddingRight":"paddingLeft";this._element.style[e]=t+"px"}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=Ss.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}tn.on(document,gs,Ts,(function(e){const t=hn.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tn.one(t,us,e=>{e.defaultPrevented||tn.one(t,ls,()=>{kt(this)&&this.focus()})});const n=hn.findOne(ws);n&&Ss.getInstance(n).hide();const r=Ss.getOrCreateInstance(t);r.toggle(this)})),dn(Ss),Nt(Ss);const As="offcanvas",Cs="bs.offcanvas",xs="."+Cs,Rs=".data-api",js=`load${xs}${Rs}`,Ps="Escape",Ns="show",Ds="showing",Ls="hiding",Ms="offcanvas-backdrop",Us=".offcanvas.show",Fs="show"+xs,Vs="shown"+xs,Bs="hide"+xs,$s="hidePrevented"+xs,zs="hidden"+xs,Hs="resize"+xs,qs=`click${xs}${Rs}`,Ws="keydown.dismiss"+xs,Ks='[data-bs-toggle="offcanvas"]',Gs={backdrop:!0,keyboard:!0,scroll:!1},Js={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Xs extends ln{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Gs}static get DefaultType(){return Js}static get NAME(){return As}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=tn.trigger(this._element,Fs,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new ts).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ds);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ns),this._element.classList.remove(Ds),tn.trigger(this._element,Vs,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=tn.trigger(this._element,Bs);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ls),this._backdrop.hide();const t=()=>{this._element.classList.remove(Ns,Ls),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new ts).reset(),tn.trigger(this._element,zs)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{"static"!==this._config.backdrop?this.hide():tn.trigger(this._element,$s)},t=Boolean(this._config.backdrop);return new Fi({className:Ms,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Xi({trapElement:this._element})}_addEventListeners(){tn.on(this._element,Ws,e=>{e.key===Ps&&(this._config.keyboard?this.hide():tn.trigger(this._element,$s))})}static jQueryInterface(e){return this.each((function(){const t=Xs.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}tn.on(document,qs,Ks,(function(e){const t=hn.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),It(this))return;tn.one(t,zs,()=>{kt(this)&&this.focus()});const n=hn.findOne(Us);n&&n!==t&&Xs.getInstance(n).hide();const r=Xs.getOrCreateInstance(t);r.toggle(this)})),tn.on(window,js,()=>{for(const e of hn.find(Us))Xs.getOrCreateInstance(e).show()}),tn.on(window,Hs,()=>{for(const e of hn.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&Xs.getOrCreateInstance(e).hide()}),dn(Xs),Nt(Xs);const Ys=/^aria-[\w-]*$/i,Qs={"*":["class","dir","id","lang","role",Ys],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Zs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),eo=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,to=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Zs.has(n)||Boolean(eo.test(e.nodeValue)):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))};function no(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const o of s){const e=o.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){o.remove();continue}const n=[].concat(...o.attributes),r=[].concat(t["*"]||[],t[e]||[]);for(const t of n)to(t,r)||o.removeAttribute(t.nodeName)}return i.body.innerHTML}const ro="TemplateFactory",io={allowList:Qs,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},so={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},oo={entry:"(string|element|function|null)",selector:"(string|element)"};class ao extends an{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return io}static get DefaultType(){return so}static get NAME(){return ro}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(e,i,r);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},oo)}_setContent(e,t,n){const r=hn.findOne(n,e);r&&(t=this._resolvePossibleFunction(t),t?Et(t)?this._putElementInTemplate(Tt(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?no(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Dt(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const co="tooltip",lo=new Set(["sanitize","allowList","sanitizeFn"]),uo="fade",ho="modal",fo="show",po=".tooltip-inner",mo="."+ho,go="hide.bs.modal",_o="hover",vo="focus",bo="click",yo="manual",wo="hide",Oo="hidden",Eo="show",To="shown",ko="inserted",Io="click",So="focusin",Ao="focusout",Co="mouseenter",xo="mouseleave",Ro={AUTO:"auto",TOP:"top",RIGHT:Pt()?"left":"right",BOTTOM:"bottom",LEFT:Pt()?"right":"left"},jo={allowList:Qs,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Po={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class No extends ln{constructor(e,t){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return jo}static get DefaultType(){return Po}static get NAME(){return co}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),tn.off(this._element.closest(mo),go,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=tn.trigger(this._element,this.constructor.eventName(Eo)),t=St(this._element),n=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),tn.trigger(this._element,this.constructor.eventName(ko))),this._popper=this._createPopper(r),r.classList.add(fo),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))tn.on(o,"mouseover",At);const s=()=>{tn.trigger(this._element,this.constructor.eventName(To)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const e=tn.trigger(this._element,this.constructor.eventName(wo));if(e.defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(fo),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))tn.off(r,"mouseover",At);this._activeTrigger[bo]=!1,this._activeTrigger[vo]=!1,this._activeTrigger[_o]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),tn.trigger(this._element,this.constructor.eventName(Oo)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(uo,fo),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=yt(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(uo),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new ao({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[po]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(uo)}_isShown(){return this.tip&&this.tip.classList.contains(fo)}_createPopper(e){const t=Dt(this._config.placement,[this,e,this._element]),n=Ro[t.toUpperCase()];return ut(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return Dt(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...Dt(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)tn.on(this._element,this.constructor.eventName(Io),this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t.toggle()});else if(t!==yo){const e=t===_o?this.constructor.eventName(Co):this.constructor.eventName(So),n=t===_o?this.constructor.eventName(xo):this.constructor.eventName(Ao);tn.on(this._element,e,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?vo:_o]=!0,t._enter()}),tn.on(this._element,n,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?vo:_o]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},tn.on(this._element.closest(mo),go,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=on.getDataAttributes(this._element);for(const n of Object.keys(t))lo.has(n)&&delete t[n];return e={...t,..."object"===typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:Tt(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=No.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Nt(No);const Do="popover",Lo=".popover-header",Mo=".popover-body",Uo={...No.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Fo={...No.DefaultType,content:"(null|string|element|function)"};class Vo extends No{static get Default(){return Uo}static get DefaultType(){return Fo}static get NAME(){return Do}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Lo]:this._getTitle(),[Mo]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=Vo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Nt(Vo);const Bo="scrollspy",$o="bs.scrollspy",zo="."+$o,Ho=".data-api",qo="activate"+zo,Wo="click"+zo,Ko=`load${zo}${Ho}`,Go="dropdown-item",Jo="active",Xo='[data-bs-spy="scroll"]',Yo="[href]",Qo=".nav, .list-group",Zo=".nav-link",ea=".nav-item",ta=".list-group-item",na=`${Zo}, ${ea} > ${Zo}, ${ta}`,ra=".dropdown",ia=".dropdown-toggle",sa={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},oa={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class aa extends ln{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sa}static get DefaultType(){return oa}static get NAME(){return Bo}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Tt(e.target)||document.body,e.rootMargin=e.offset?e.offset+"px 0px -30%":e.rootMargin,"string"===typeof e.threshold&&(e.threshold=e.threshold.split(",").map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(tn.off(this._config.target,Wo),tn.on(this._config.target,Wo,Yo,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:"smooth"});n.scrollTop=r}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){const t=e=>this._targetLinks.get("#"+e.target.id),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(s),!r)return}else i||e||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=hn.find(Yo,this._config.target);for(const t of e){if(!t.hash||It(t))continue;const e=hn.findOne(decodeURI(t.hash),this._element);kt(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Jo),this._activateParents(e),tn.trigger(this._element,qo,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Go))hn.findOne(ia,e.closest(ra)).classList.add(Jo);else for(const t of hn.parents(e,Qo))for(const e of hn.prev(t,na))e.classList.add(Jo)}_clearActiveClass(e){e.classList.remove(Jo);const t=hn.find(`${Yo}.${Jo}`,e);for(const n of t)n.classList.remove(Jo)}static jQueryInterface(e){return this.each((function(){const t=aa.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(window,Ko,()=>{for(const e of hn.find(Xo))aa.getOrCreateInstance(e)}),Nt(aa);const ca="tab",la="bs.tab",ua="."+la,ha="hide"+ua,da="hidden"+ua,fa="show"+ua,pa="shown"+ua,ma="click"+ua,ga="keydown"+ua,_a="load"+ua,va="ArrowLeft",ba="ArrowRight",ya="ArrowUp",wa="ArrowDown",Oa="Home",Ea="End",Ta="active",ka="fade",Ia="show",Sa="dropdown",Aa=".dropdown-toggle",Ca=".dropdown-menu",xa=`:not(${Aa})`,Ra='.list-group, .nav, [role="tablist"]',ja=".nav-item, .list-group-item",Pa=`.nav-link${xa}, .list-group-item${xa}, [role="tab"]${xa}`,Na='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Da=`${Pa}, ${Na}`,La=`.${Ta}[data-bs-toggle="tab"], .${Ta}[data-bs-toggle="pill"], .${Ta}[data-bs-toggle="list"]`;class Ma extends ln{constructor(e){super(e),this._parent=this._element.closest(Ra),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),tn.on(this._element,ga,e=>this._keydown(e)))}static get NAME(){return ca}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?tn.trigger(t,ha,{relatedTarget:e}):null,r=tn.trigger(e,fa,{relatedTarget:t});r.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Ta),this._activate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),tn.trigger(e,pa,{relatedTarget:t})):e.classList.add(Ia)};this._queueCallback(n,e,e.classList.contains(ka))}_deactivate(e,t){if(!e)return;e.classList.remove(Ta),e.blur(),this._deactivate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),tn.trigger(e,da,{relatedTarget:t})):e.classList.remove(Ia)};this._queueCallback(n,e,e.classList.contains(ka))}_keydown(e){if(![va,ba,ya,wa,Oa,Ea].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(e=>!It(e));let n;if([Oa,Ea].includes(e.key))n=t[e.key===Oa?0:t.length-1];else{const r=[ba,wa].includes(e.key);n=Mt(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Ma.getOrCreateInstance(n).show())}_getChildren(){return hn.find(Da,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=hn.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",""+e.id))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(Sa))return;const r=(e,r)=>{const i=hn.findOne(e,n);i&&i.classList.toggle(r,t)};r(Aa,Ta),r(Ca,Ia),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Ta)}_getInnerElement(e){return e.matches(Da)?e:hn.findOne(Da,e)}_getOuterElement(e){return e.closest(ja)||e}static jQueryInterface(e){return this.each((function(){const t=Ma.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(document,ma,Na,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),It(this)||Ma.getOrCreateInstance(this).show()})),tn.on(window,_a,()=>{for(const e of hn.find(La))Ma.getOrCreateInstance(e)}),Nt(Ma);const Ua="toast",Fa="bs.toast",Va="."+Fa,Ba="mouseover"+Va,$a="mouseout"+Va,za="focusin"+Va,Ha="focusout"+Va,qa="hide"+Va,Wa="hidden"+Va,Ka="show"+Va,Ga="shown"+Va,Ja="fade",Xa="hide",Ya="show",Qa="showing",Za={animation:"boolean",autohide:"boolean",delay:"number"},ec={animation:!0,autohide:!0,delay:5e3};class tc extends ln{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ec}static get DefaultType(){return Za}static get NAME(){return Ua}show(){const e=tn.trigger(this._element,Ka);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ja);const t=()=>{this._element.classList.remove(Qa),tn.trigger(this._element,Ga),this._maybeScheduleHide()};this._element.classList.remove(Xa),Ct(this._element),this._element.classList.add(Ya,Qa),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=tn.trigger(this._element,qa);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Xa),this._element.classList.remove(Qa,Ya),tn.trigger(this._element,Wa)};this._element.classList.add(Qa),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ya),super.dispose()}isShown(){return this._element.classList.contains(Ya)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tn.on(this._element,Ba,e=>this._onInteraction(e,!0)),tn.on(this._element,$a,e=>this._onInteraction(e,!1)),tn.on(this._element,za,e=>this._onInteraction(e,!0)),tn.on(this._element,Ha,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=tc.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(tc),Nt(tc)},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:u,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["f"])(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["f"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function u(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["j"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){Object(r["j"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["h"],ErrorFactory:r["b"],deepExtend:r["j"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.13";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(s["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["r"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const _=d;g()},"825a":function(e,t,n){"use strict";var r=n("861d"),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},"83ab":function(e,t,n){"use strict";var r=n("d039");e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){"use strict";var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){"use strict";var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"90e3":function(e,t,n){"use strict";var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9112:function(e,t,n){"use strict";var r=n("83ab"),i=n("9bf2"),s=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){"use strict";var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===u||n!==l&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},"9bf2":function(e,t,n){"use strict";var r=n("83ab"),i=n("0cfb"),s=n("aed9"),o=n("825a"),a=n("a04b"),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ff4":function(e,t,n){"use strict";(function(e){
/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return P})),n.d(t,"f",(function(){return L})),n.d(t,"g",(function(){return V})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return pe})),n.d(t,"j",(function(){return H})),n.d(t,"k",(function(){return U})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return D})),n.d(t,"n",(function(){return le})),n.d(t,"o",(function(){return F})),n.d(t,"p",(function(){return p})),n.d(t,"q",(function(){return ce})),n.d(t,"r",(function(){return x})),n.d(t,"s",(function(){return b})),n.d(t,"t",(function(){return W})),n.d(t,"u",(function(){return re})),n.d(t,"v",(function(){return A})),n.d(t,"w",(function(){return ue})),n.d(t,"x",(function(){return he})),n.d(t,"y",(function(){return m})),n.d(t,"z",(function(){return se})),n.d(t,"A",(function(){return l})),n.d(t,"B",(function(){return O})),n.d(t,"C",(function(){return c})),n.d(t,"D",(function(){return S})),n.d(t,"E",(function(){return E})),n.d(t,"F",(function(){return v})),n.d(t,"G",(function(){return de})),n.d(t,"H",(function(){return C})),n.d(t,"I",(function(){return ie})),n.d(t,"J",(function(){return g})),n.d(t,"K",(function(){return ae})),n.d(t,"L",(function(){return y})),n.d(t,"M",(function(){return w})),n.d(t,"N",(function(){return ge})),n.d(t,"O",(function(){return _e})),n.d(t,"P",(function(){return B})),n.d(t,"Q",(function(){return r})),n.d(t,"R",(function(){return Z})),n.d(t,"S",(function(){return K})),n.d(t,"T",(function(){return h})),n.d(t,"U",(function(){return Q})),n.d(t,"V",(function(){return be})),n.d(t,"W",(function(){return M})),n.d(t,"X",(function(){return $})),n.d(t,"Y",(function(){return I}));const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>"[object Map]"===k(e),g=e=>"[object Set]"===k(e),_=e=>"[object Date]"===k(e),v=e=>"[object RegExp]"===k(e),b=e=>"function"===typeof e,y=e=>"string"===typeof e,w=e=>"symbol"===typeof e,O=e=>null!==e&&"object"===typeof e,E=e=>(O(e)||b(e))&&b(e.then)&&b(e.catch),T=Object.prototype.toString,k=e=>T.call(e),I=e=>k(e).slice(8,-1),S=e=>"[object Object]"===k(e),A=e=>y(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,C=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),R=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},j=/-(\w)/g,P=R(e=>e.replace(j,(e,t)=>t?t.toUpperCase():"")),N=/\B([A-Z])/g,D=R(e=>e.replace(N,"-$1").toLowerCase()),L=R(e=>e.charAt(0).toUpperCase()+e.slice(1)),M=R(e=>{const t=e?"on"+L(e):"";return t}),U=(e,t)=>!Object.is(e,t),F=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},V=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=y(e)?Number(e):NaN;return isNaN(t)?e:t};let z;const H=()=>z||(z="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{});const q="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",W=r(q);function K(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=y(r)?Y(r):K(r);if(i)for(const e in i)t[e]=i[e]}return t}if(y(e)||O(e))return e}const G=/;(?![^(]*\))/g,J=/:([^]+)/,X=/\/\*[^]*?\*\//g;function Y(e){const t={};return e.replace(X,"").split(G).forEach(e=>{if(e){const n=e.split(J);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Q(e){let t="";if(!e||y(e))return t;for(const n in e){const r=e[n];if(y(r)||"number"===typeof r){const e=n.startsWith("--")?n:D(n);t+=`${e}:${r};`}}return t}function Z(e){let t="";if(y(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Z(e[n]);r&&(t+=r+" ")}else if(O(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ee="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",te="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",ne="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",re=r(ee),ie=r(te),se=r(ne),oe="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ae=r(oe),ce=r(oe+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function le(e){return!!e||""===e}const ue=r("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),he=r("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");function de(e){if(null==e)return!1;const t=typeof e;return"string"===t||"number"===t||"boolean"===t}const fe=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function pe(e,t){return e.replace(fe,e=>t?'"'===e?'\\\\\\"':"\\\\"+e:"\\"+e)}function me(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ge(e[r],t[r]);return n}function ge(e,t){if(e===t)return!0;let n=_(e),r=_(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&me(e,t);if(n=O(e),r=O(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ge(e[n],t[n]))return!1}}return String(e)===String(t)}function _e(e,t){return e.findIndex(e=>ge(e,t))}const ve=e=>!(!e||!0!==e["__v_isRef"]),be=e=>y(e)?e:null==e?"":p(e)||O(e)&&(e.toString===T||!b(e.toString))?ve(e)?be(e.value):JSON.stringify(e,ye,2):String(e),ye=(e,t)=>ve(t)?ye(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[we(t,r)+" =>"]=n,e),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>we(e))}:w(t)?we(t):!O(t)||p(t)||S(t)?t:String(t),we=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}}).call(this,n("c8ba"))},a04b:function(e,t,n){"use strict";var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},ab8b:function(e,t,n){},aed9:function(e,t,n){"use strict";var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},aedf:function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},b42e:function(e,t,n){"use strict";var r=Math.ceil,i=Math.floor;e.exports=Math.trunc||function(e){var t=+e;return(t>0?i:r)(t)}},b5db:function(e,t,n){"use strict";var r=n("cfe9"),i=r.navigator,s=i&&i.userAgent;e.exports=s?String(s):""},b622:function(e,t,n){"use strict";var r=n("cfe9"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("04f8"),c=n("fdbf"),l=r.Symbol,u=i("wks"),h=c?l["for"]||l:l&&l.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(l,e)?l[e]:h("Symbol."+e)),u[e]}},bc7b:function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["initializeApp"]}));var i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["registerVersion"])(i,s,"app")},be8c:function(e,t,n){"use strict";n.d(t,"a",(function(){return kt})),n.d(t,"b",(function(){return Ur})),n.d(t,"c",(function(){return Ct})),n.d(t,"d",(function(){return It})),n.d(t,"e",(function(){return xt}));var r=n("1fd5"),i=n("589b");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(e,...t){h.logLevel<=o["a"].WARN&&h.warn(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}function f(e,...t){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw _(e,...t)}function m(e,...t){return _(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw _(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function y(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===E()||"https:"===E()}function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||Object(r["s"])()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["w"])()||Object(r["y"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,n,i,s={}){return P(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["z"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(D(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function P(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},C),t);try{const t=new L(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw M(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw M(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw M(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw M(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);p(e,a)}}catch(s){if(s instanceof r["c"])throw s;p(e,"network-request-failed",{message:String(s)})}}async function N(e,t,n,r,i={}){const s=await j(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function D(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?S(e.config,i):`${e.config.apiScheme}://${i}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(m(this.auth,"network-request-failed")),x.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function M(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return j(e,"POST","/v1/accounts:delete",t)}async function F(e,t){return j(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t=!1){const n=Object(r["p"])(e),i=await n.getIdToken(t),s=z(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:V($(s.auth_time)),issuedAtTime:V($(s.iat)),expirationTime:V($(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function $(e){return 1e3*Number(e)}function z(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function H(e){const t=z(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&W(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function W({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){var t;const n=e.auth,r=await e.getIdToken(),i=await q(e,F(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Q(s.providerUserInfo):[],a=Y(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new G(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function X(e){const t=Object(r["p"])(e);await J(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Y(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function Q(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t){const n=await P(e,{},async()=>{const n=Object(r["z"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=D(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):H(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ee;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new G(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return B(this,e)}reload(){return X(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:O,stsTokenManager:E}=t;v(b&&E,e,"internal-error");const T=ee.fromJSON(this.name,E);v("string"===typeof b,e,"internal-error"),te(u,e.name),te(h,e.name),v("boolean"===typeof y,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),te(d,e.name),te(f,e.name),te(p,e.name),te(m,e.name),te(g,e.name),te(_,e.name);const k=new ne({uid:b,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:_});return O&&Array.isArray(O)&&(k.providerData=O.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new ee;r.updateFromServerResponse(t);const i=new ne({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Map;function ie(e){y(e instanceof Function,"Expected a class definition");let t=re.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,re.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const oe=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(ie(oe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||ie(oe);const s=ae(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=ne._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new ce(i,e,n)):new ce(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=Object(r["q"])()){return/firefox\//i.test(e)}function he(e=Object(r["q"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=Object(r["q"])()){return/crios\//i.test(e)}function fe(e=Object(r["q"])()){return/iemobile/i.test(e)}function pe(e=Object(r["q"])()){return/android/i.test(e)}function me(e=Object(r["q"])()){return/blackberry/i.test(e)}function ge(e=Object(r["q"])()){return/webos/i.test(e)}function _e(e=Object(r["q"])()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=Object(r["q"])()){var t;return _e(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return Object(r["u"])()&&10===document.documentMode}function ye(e=Object(r["q"])()){return _e(e)||pe(e)||ge(e)||me(e)||/windows phone/i.test(e)||fe(e)}function we(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["q"])());break;case"Worker":n=`${le(Object(r["q"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e,t){return j(e,"GET","/v2/recaptchaConfig",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){return void 0!==e&&void 0!==e.enterprise}class ke{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Se(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Ie().appendChild(r)})}function Ae(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ce="https://www.google.com/recaptcha/enterprise.js?render=",xe="recaptcha-enterprise",Re="NO_RECAPTCHA";class je{constructor(e){this.type=xe,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Ee(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new ke(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;Te(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Re)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&Te(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Se(Ce+n).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function Pe(e,t,n,r=!1){const i=new je(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Me(this),this.idTokenSubscription=new Me(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await J(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["p"])(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ie(e))})}async initializeRecaptchaConfig(){const e=await Ee(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ke(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new je(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d("Error while retrieving App Check token: "+t.error),null===t||void 0===t?void 0:t.token}}function Le(e){return Object(r["p"])(e)}class Me{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["h"])(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e,t){const n=Object(i["_getProvider"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["i"])(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Fe(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ie);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ve(e,t,n){const r=Le(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Be(t),{host:o,port:a}=$e(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||He()}function Be(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $e(e){const t=Be(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ze(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ze(t)}}}function ze(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function He(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t){return j(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ke(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ge(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function Je(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Pe(e,n,"signInWithPassword");return Ke(e,t)}return Ke(e,n).catch(async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Pe(e,n,"signInWithPassword");return Ke(e,t)}return Promise.reject(t)});case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return We(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="http://localhost";class Ze extends qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ze(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:Qe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["z"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function tt(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function nt(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw M(e,"account-exists-with-different-credential",n);return n}const rt={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),rt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(r["A"])(Object(r["k"])(e))["link"],n=t?Object(r["A"])(Object(r["k"])(t))["deep_link_id"]:null,i=Object(r["A"])(Object(r["k"])(e))["deep_link_id"],s=i?Object(r["A"])(Object(r["k"])(i))["link"]:null;return s||i||n||t||e}class ct{constructor(e){var t,n,i,s,o,a;const c=Object(r["A"])(Object(r["k"])(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(i=c["mode"])&&void 0!==i?i:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return v(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends ut{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch(t){return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com",dt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ft.credential(t,n)}catch(r){return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com",ft.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com",pt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gt(e,t){return N(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.TWITTER_SIGN_IN_METHOD="twitter.com",mt.PROVIDER_ID="twitter.com";class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ne._fromIdTokenResponse(e,n,r),s=vt(n),o=new _t({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=vt(n);return new _t({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function vt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,bt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new bt(e,t,n,r)}}function yt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw bt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(e,t,n=!1){const r=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await q(e,yt(r,i,t,e),n);v(s.idToken,r,"internal-error");const o=z(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),_t._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e,t,n=!1){const r="signIn",i=await yt(e,r,t),s=await _t._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Tt(e,t){return Et(Le(e),t)}async function kt(e,t,n){var r;const i=Le(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Pe(i,s,"signUpPassword");o=gt(i,e)}else o=gt(i,s).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Pe(i,s,"signUpPassword");return gt(i,e)}return Promise.reject(e)});const a=await o.catch(e=>Promise.reject(e)),c=await _t._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function It(e,t,n){return Tt(Object(r["p"])(e),lt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t,n,i){return Object(r["p"])(e).onIdTokenChanged(t,n,i)}function At(e,t,n){return Object(r["p"])(e).beforeAuthStateChanged(t,n)}function Ct(e,t,n,i){return Object(r["p"])(e).onAuthStateChanged(t,n,i)}function xt(e){return Object(r["p"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function jt(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}function Pt(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}function Nt(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",R(e,t))}new WeakMap;const Dt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dt,"1"),this.storage.removeItem(Dt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){const e=Object(r["q"])();return he(e)||_e(e)}const Ut=1e3,Ft=10;class Vt extends Lt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mt()&&we(),this.fallbackToPolling=ye(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ft):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ut)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vt.type="LOCAL";const Bt=Vt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Lt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$t.type="SESSION";const zt=$t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new qt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Ht(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.receivers=[];class Kt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Wt("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function Jt(e){Gt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return"undefined"!==typeof Gt()["WorkerGlobalScope"]&&"function"===typeof Gt()["importScripts"]}async function Yt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Qt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Zt(){return Xt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="firebaseLocalStorageDb",tn=1,nn="firebaseLocalStorage",rn="fbase_key";class sn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function on(e,t){return e.transaction([nn],t?"readwrite":"readonly").objectStore(nn)}function an(){const e=indexedDB.deleteDatabase(en);return new sn(e).toPromise()}function cn(){const e=indexedDB.open(en,tn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(nn,{keyPath:rn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(nn)?t(n):(n.close(),await an(),t(await cn()))})})}async function ln(e,t,n){const r=on(e,!0).put({[rn]:t,value:n});return new sn(r).toPromise()}async function un(e,t){const n=on(e,!1).get(t),r=await new sn(n).toPromise();return void 0===r?null:r.value}function hn(e,t){const n=on(e,!0).delete(t);return new sn(n).toPromise()}const dn=800,fn=3;class pn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await cn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>fn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qt._getInstance(Zt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Yt(),!this.activeServiceWorker)return;this.sender=new Kt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Qt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cn();return await ln(e,Dt,"1"),await hn(e,Dt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ln(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>un(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=on(e,!1).getAll();return new sn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}pn.type="LOCAL";const mn=pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}function _n(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}function vn(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ae("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn="recaptcha";async function yn(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,e,"argument-error"),v(n.type===bn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await Rt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await gn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{constructor(e){this.providerId=wn.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return yn(this.auth,e,Object(r["p"])(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wn.credentialFromTaggedObject(t)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(e,t){return t?ie(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn.PROVIDER_ID="phone",wn.PHONE_SIGN_IN_METHOD="phone";class En extends qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tn(e){return Et(e.auth,new En(e),e.bypassAuthState)}function kn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Ot(n,new En(e),e.bypassAuthState)}async function In(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),wt(n,new En(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tn;case"linkViaPopup":case"linkViaRedirect":return In;case"reauthViaPopup":case"reauthViaRedirect":return kn;default:p(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new I(2e3,1e4);class Cn extends Sn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=Wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,An.get())};e()}}Cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xn="pendingRedirect",Rn=new Map;class jn extends Sn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Rn.get(this.auth._key());if(!e){try{const t=await Pn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Rn.set(this.auth._key(),e)}return this.bypassAuthState||Rn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Pn(e,t){const n=Ln(t),r=Dn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Nn(e,t){Rn.set(e._key(),t)}function Dn(e){return ie(e._redirectPersistence)}function Ln(e){return ae(xn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e,t,n=!1){const r=Le(e),i=On(r,t),s=new jn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un=6e5;class Fn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$n(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Bn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Un&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vn(e))}saveEventToCache(e){this.cachedEventUids.add(Vn(e)),this.lastProcessedEventTime=Date.now()}}function Vn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Bn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function $n(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t={}){return j(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qn=/^https?/;async function Wn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await zn(e);for(const r of t)try{if(Kn(r))return}catch(n){}p(e,"unauthorized-domain")}function Kn(e){const t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!qn.test(n))return!1;if(Hn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new I(3e4,6e4);function Jn(){const e=Gt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Xn(e){return new Promise((t,n)=>{var r,i,s;function o(){Jn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jn(),n(m(e,"network-request-failed"))},timeout:Gn.get()})}if(null===(i=null===(r=Gt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Gt().gapi)||void 0===s?void 0:s.load)){const t=Ae("iframefcb");return Gt()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},Se("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Yn=null,e})}let Yn=null;function Qn(e){return Yn=Yn||Xn(e),Yn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new I(5e3,15e3),er="__/auth/iframe",tr="emulator/auth/iframe",nr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ir(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?S(t,tr):`https://${e.config.authDomain}/${er}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=rr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["z"])(s).slice(1)}`}async function sr(e){const t=await Qn(e),n=Gt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:ir(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nr,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=m(e,"network-request-failed"),s=Gt().setTimeout(()=>{r(i)},Zn.get());function o(){Gt().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ar=500,cr=600,lr="_blank",ur="http://localhost";class hr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function dr(e,t,n,i=ar,s=cr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},or),{width:i.toString(),height:s.toString(),top:o,left:a}),u=Object(r["q"])().toLowerCase();n&&(c=de(u)?lr:n),ue(u)&&(t=t||ur,l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ve(u)&&"_self"!==c)return fr(t||"",c),new hr(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new hr(d)}function fr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="__/auth/handler",mr="emulator/auth/handler",gr=encodeURIComponent("fac");async function _r(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof ut){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["t"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];const u=await e._getAppCheckToken(),h=u?`#${gr}=${encodeURIComponent(u)}`:"";return`${vr(e)}?${Object(r["z"])(l).slice(1)}${h}`}function vr({config:e}){return e.emulator?S(e,mr):`https://${e.authDomain}/${pr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="webStorageSupport";class yr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zt,this._completeRedirectFn=Mn,this._overrideRedirectResult=Nn}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await _r(e,t,n,w(),r);return dr(e,s,Wt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await _r(e,t,n,w(),r);return Jt(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await sr(e),n=new Fn(e);return t.register("authEvent",t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(br,{type:br},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[br];void 0!==i&&t(!!i),p(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ye()||he()||_e()}}const wr=yr;class Or{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Er extends Or{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Er(e)}_finalizeEnroll(e,t,n){return jt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _n(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Tr{constructor(){}static assertion(e){return Er._fromCredential(e)}}Tr.FACTOR_ID="phone";class kr{static assertionForEnrollment(e,t){return Ir._fromSecret(e,t)}static assertionForSignIn(e,t){return Ir._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;v("undefined"!==typeof t.auth,"internal-error");const n=await Pt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Sr._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}kr.FACTOR_ID="totp";class Ir extends Or{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ir(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ir(t,e)}async _finalizeEnroll(e,t,n){return v("undefined"!==typeof this.secret,e,"argument-error"),Nt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return vn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Sr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Sr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Ar(e)||Ar(t))&&(r=!0),r&&(Ar(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ar(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ar(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Cr="@firebase/auth",xr="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pr(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oe(e)},l=new De(r,i,s,c);return Fe(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new Rr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Cr,xr,jr(e)),Object(i["registerVersion"])(Cr,xr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=300,Dr=Object(r["o"])("authIdTokenMaxAge")||Nr;let Lr=null;const Mr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Dr)return;const i=null===n||void 0===n?void 0:n.token;Lr!==i&&(Lr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:"Bearer "+i}:{}}))};function Ur(e=Object(i["getApp"])()){const t=Object(i["_getProvider"])(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ue(e,{popupRedirectResolver:wr,persistence:[mn,Bt,zt]}),s=Object(r["o"])("authTokenSyncURL");if(s){const e=Mr(s);At(n,e,()=>e(n.currentUser)),St(n,t=>e(t))}const o=Object(r["m"])("auth");return o&&Ve(n,"http://"+o),n}Pr("Browser")},c04e:function(e,t,n){"use strict";var r=n("c65b"),i=n("861d"),s=n("d9b5"),o=n("dc4a"),a=n("485a"),c=n("b622"),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},c430:function(e,t,n){"use strict";e.exports=!1},c65b:function(e,t,n){"use strict";var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){"use strict";var r=n("e330"),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},c6cd:function(e,t,n){"use strict";var r=n("c430"),i=n("cfe9"),s=n("6374"),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.38.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"})},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){"use strict";var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=s(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~o(u,n)||c(u,n));return u}},cb2d:function(e,t,n){"use strict";var r=n("1626"),i=n("9bf2"),s=n("13d2"),o=n("6374");e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&s(n,l,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},cc12:function(e,t,n){"use strict";var r=n("cfe9"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cdce:function(e,t,n){"use strict";var r=n("cfe9"),i=n("1626"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},cfe9:function(e,t,n){"use strict";(function(t){var n=function(e){return e&&e.Math===Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||n("object"==typeof this&&this)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},d012:function(e,t,n){"use strict";e.exports={}},d039:function(e,t,n){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){"use strict";var r=n("cfe9"),i=n("1626"),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);t.f=s?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d9b5:function(e,t,n){"use strict";var r=n("d066"),i=n("1626"),s=n("3a9b"),o=n("fdbf"),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},dc4a:function(e,t,n){"use strict";var r=n("59ed"),i=n("7234");e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var l=[];for(c=a;c<i.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e330:function(e,t,n){"use strict";var r=n("40d5"),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e893:function(e,t,n){"use strict";var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},e8b5:function(e,t,n){"use strict";var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"===r(e)}},f772:function(e,t,n){"use strict";var r=n("5692"),i=n("90e3"),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},fc6a:function(e,t,n){"use strict";var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbf:function(e,t,n){"use strict";var r=n("04f8");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=chunk-vendors.dfbf6610.js.map