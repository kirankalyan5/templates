/*! For license information please see 486.075f4b6c.js.LICENSE.txt */
(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[486],{6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9756),o=n(7294),u=n(3727),i=n(3919),a=n(412),c=(0,o.createContext)({collectLink:function(){}}),s=n(4996);var f=function(e){var t,n,f,l=e.isNavLink,v=e.to,d=e.href,p=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,y=void 0===m||m,w=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),b=(0,s.C)().withBaseUrl,P=(0,o.useContext)(c),_=v||d,D=(0,i.Z)(_),A=null==_?void 0:_.replace("pathname://",""),E=void 0!==A?(n=A,y&&function(e){return e.startsWith("/")}(n)?b(n):n):void 0,O=(0,o.useRef)(!1),V=l?u.OL:u.rU,x=a.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!x&&D&&null!=E&&window.docusaurus.prefetch(E),function(){x&&f&&f.disconnect()}}),[E,x,D]);var S=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,j=!E||!D||S;return E&&D&&!S&&!h&&P.collectLink(E),j?o.createElement("a",Object.assign({href:E},_&&!D&&{target:"_blank",rel:"noopener noreferrer"},w)):o.createElement(V,Object.assign({},w,{onMouseEnter:function(){O.current||null==E||(window.docusaurus.preload(E),O.current=!0)},innerRef:function(e){var t,n;x&&e&&D&&(t=e,n=function(){null!=E&&window.docusaurus.prefetch(E)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:E||""},l&&{isActive:g,activeClassName:p}))}},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},I:function(){return f}});var r=n(7294),o=/{\w+}/g,u="{}";function i(e,t){var n=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return n.push(a),u}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function a(e){return i(e.children,e.values)}var c=n(4644);function s(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function f(e,t){var n,r=e.message;return i(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function l(e){var t,n=e.children,o=e.id,u=e.values,i=null!==(t=s({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(a,{values:u},i)}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},8143:function(e,t,n){"use strict";n.r(t),n.d(t,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=n(3727)},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return u},Z:function(){return i}});var r=n(2263),o=n(3919);function u(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,a=void 0!==i&&i,c=u.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+f:f}(u,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},8084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var r=n(2263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function u(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=u(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},8408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(8143);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return u};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,n){var o,u,i=t.getActiveVersion(e,n),a=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(u[e.name]=t)}))})),u):{}}};t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),u=o.activeVersion!==r;return{latestDocSuggestion:u?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:u?r:void 0}}},6730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(655),o=n(8143),u=r.__importStar(n(8084)),i=n(8408);t.useAllDocsData=function(){var e;return null!==(e=u.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:{}};t.useDocsData=function(e){return u.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=o.useLocation().pathname;return i.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=o.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)};t.useActiveVersion=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getActiveVersion(n,r)};t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getActiveDocContext(n,r)};t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getDocVersionSuggestions(n,r)}},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(9105),u=n(9732),i=n(4996);function a(e){var t=e.title,n=e.description,a=e.keywords,c=e.image,s=(0,u.LU)().image,f=(0,u.pe)(t),l=(0,i.Z)(c||s,{absolute:!0});return r.createElement(o.Z,null,t&&r.createElement("title",null,f),t&&r.createElement("meta",{property:"og:title",content:f}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),l&&r.createElement("meta",{property:"og:image",content:l}),l&&r.createElement("meta",{name:"twitter:image",content:l}),l&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},9732:function(e,t,n){"use strict";n.d(t,{HX:function(){return g},L5:function(){return j},kM:function(){return C},WA:function(){return s},os:function(){return h},Mg:function(){return w},_f:function(){return f},bc:function(){return p},l5:function(){return v},ru:function(){return A},J:function(){return k},LU:function(){return o},pe:function(){return b}});var r=n(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(n){return t=n,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),a=!0),null}var t}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);var n=i(null==t?void 0:t.persistence);return null===n?c:{get:function(){return n.getItem(e)},set:function(t){return n.setItem(e,t)},del:function(){return n.removeItem(e)}}};function f(e){void 0===e&&(e=u);var t=i(e);if(!t)return[];for(var n=[],r=0;r<t.length;r+=1){var o=t.key(r);null!==o&&n.push(o)}return n}var l=n(5977);function v(){var e=(0,r.Z)(),t=e.siteConfig,n=t.baseUrl,o=t.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,l.TH)().pathname,s=a===i?n:n.replace("/"+a+"/","/"),f=c.replace(n,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+s:""+s+e+"/"}(t)+f}}}var d=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(d))||void 0===t?void 0:t[2])&&void 0!==n?n:""}var g="default";function h(e,t){return"docs-"+e+"-"+t}var m=n(6730),y=!!m.useAllDocsData,w=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)},b=function(e){var t=(0,r.Z)().siteConfig,n=void 0===t?{}:t,o=n.title,u=n.titleDelimiter,i=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+i+" "+o:o},P=n(7294),_=["zero","one","two","few","many","other"];function D(e){return _.filter((function(t){return e.includes(t)}))}D(["one","other"]);function A(e){var t=(0,l.TH)().pathname,n=(0,P.useRef)(t);(0,P.useEffect)((function(){t!==n.current&&(n.current=t,e())}),[t,n,e])}var E=function(e){return"docs-preferred-version-"+e},O={save:function(e,t,n){s(E(e),{persistence:t}).set(n)},read:function(e,t){return s(E(e),{persistence:t}).get()},clear:function(e,t){s(E(e),{persistence:t}).del()}};function V(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=O.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(O.clear(e,n),{preferredVersionName:null})}(e)})),o}function x(){var e=(0,m.useAllDocsData)(),t=o().docs.versionPersistence,n=(0,P.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,P.useState)((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),u=r[0],i=r[1];return(0,P.useEffect)((function(){i(V({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[u,(0,P.useMemo)((function(){return{savePreferredVersion:function(e,n){O.save(e,t,n),i((function(t){var r;return Object.assign({},t,((r={})[e]={preferredVersionName:n},r))}))}}}),[i])]}var S=(0,P.createContext)(null);function j(e){var t=e.children;return y?P.createElement(L,null,t):P.createElement(P.Fragment,null,t)}function L(e){var t=e.children,n=x();return P.createElement(S.Provider,{value:n},t)}function k(e){void 0===e&&(e="default");var t=(0,m.useDocsData)(e),n=function(){var e=(0,P.useContext)(S);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}(),r=n[0],o=n[1],u=r[e].preferredVersionName;return{preferredVersion:u?t.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,P.useCallback)((function(t){o.savePreferredVersion(e,t)}),[o])}}var C={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},655:function(e,t,n){"use strict";n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return i},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return s},__awaiter:function(){return f},__generator:function(){return l},__createBinding:function(){return v},__exportStar:function(){return d},__values:function(){return p},__read:function(){return g},__spread:function(){return h},__spreadArrays:function(){return m},__spreadArray:function(){return y},__await:function(){return w},__asyncGenerator:function(){return b},__asyncDelegator:function(){return P},__asyncValues:function(){return _},__makeTemplateObject:function(){return D},__importStar:function(){return E},__importDefault:function(){return O},__classPrivateFieldGet:function(){return V},__classPrivateFieldSet:function(){return x}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){var o,u=arguments.length,i=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(u<3?o(i):u>3?o(t,n,i):o(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{c(r.next(e))}catch(t){u(t)}}function a(e){try{c(r.throw(e))}catch(t){u(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(a){u=[6,a],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var v=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function d(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||v(t,e,n)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,u=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r}function y(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){u.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof w?Promise.resolve(n.value.v).then(c,s):f(u[0][2],n)}catch(r){f(u[0][3],r)}var n}function c(e){a("next",e)}function s(e){a("throw",e)}function f(e,t){e(t),u.shift(),u.length&&a(u[0][0],u[0][1])}}function P(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:w(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var A=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&v(t,e,n);return A(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function V(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function x(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);