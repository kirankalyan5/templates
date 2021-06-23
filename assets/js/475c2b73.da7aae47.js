(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[248],{3905:function(e,t,A){"use strict";A.d(t,{Zo:function(){return s},kt:function(){return f}});var n=A(7294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function o(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function u(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),A=t;return e&&(A="function"==typeof e?e(t):o(o({},t),e)),A},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(A),f=r,l=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return A?n.createElement(l,o(o({ref:t},s),{},{components:A})):n.createElement(l,o({ref:t},s))}));function f(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=A.length,o=new Array(a);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<a;c++)o[c]=A[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,A)}p.displayName="MDXCreateElement"},1852:function(e,t,A){"use strict";A.r(t),A.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return i},default:function(){return s}});var n=A(2122),r=A(9756),a=(A(7294),A(3905)),o={title:"SonarQube",sidebar_position:5},u={unversionedId:"configuration/sonarqube",id:"configuration/sonarqube",isDocsHomePage:!1,title:"SonarQube",description:"A SonarQube analyzation job is included in the GitLab pipeline.",source:"@site/cra/configuration/sonarqube.mdx",sourceDirName:"configuration",slug:"/configuration/sonarqube",permalink:"/cra/configuration/sonarqube",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/configuration/sonarqube.mdx",version:"current",sidebarPosition:5,frontMatter:{title:"SonarQube",sidebar_position:5},sidebar:"cra",previous:{title:".gitlab-ci.yml Overview",permalink:"/cra/configuration/gitlab-ci"},next:{title:"Sentry",permalink:"/cra/configuration/sentry"}},i=[{value:"Badge",id:"badge",children:[]}],c={toc:i};function s(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A SonarQube analyzation job is included in the GitLab pipeline.\nTo set this up, we'll need to create a project in SonarQube, and a token."),(0,a.kt)("p",null,"First, we need to ",(0,a.kt)("a",{parentName:"p",href:"https://sonarqube.intility.no/projects/create"},"create a new project in SonarQube"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Project in SonarQube",src:A(6121).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","The project key should be the same as the project slug from GitLab."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you use something other than the GitLab project slug,\nyou'll need to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"SONAR_PROJECT")," variable in the top of the .gitlab-ci.yml file."))),(0,a.kt)("p",null,"Then in the next step, either generate a new token, or select an existing one.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Generate Token",src:A(6981).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","Copy the token and ",(0,a.kt)("a",{parentName:"p",href:"/cra/configuration/gitlab#adding-cicd-variables"},"add it to GitLab CI/CD variables")," with the key ",(0,a.kt)("inlineCode",{parentName:"p"},"SONAR_TOKEN"),"."),(0,a.kt)("h2",{id:"badge"},"Badge"),(0,a.kt)("p",null,"On your project dashboard, you can click ",(0,a.kt)("inlineCode",{parentName:"p"},"Get project badges")," in the bottom right corner."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Badge from SonarQube",src:A(9220).Z})),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Quality Gate Status"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Image URL only"),". You can then use the Image URL and project dashboard URL to ",(0,a.kt)("a",{parentName:"p",href:"/cra/configuration/gitlab#adding-badges"},"create a badge in GitLab"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SonarQube badge in GitLab",src:A(354).Z})))}s.isMDXComponent=!0},354:function(e,t,A){"use strict";t.Z=A.p+"assets/images/gitlab-badge-sonarqube-f5ee8fc6257198aed07fe11d7d16d626.png"},9220:function(e,t,A){"use strict";t.Z=A.p+"assets/images/sonarqube-badge-54f149d480e149737d52f7908352ae5c.png"},6121:function(e,t,A){"use strict";t.Z=A.p+"assets/images/sonarqube-new-0fa1cefb22968bd673186314bd25995c.png"},6981:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);