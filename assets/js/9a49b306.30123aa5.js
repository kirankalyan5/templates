(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[25],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=i,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8475:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(2778),l={title:"Configuration",sidebar_position:1},c={unversionedId:"topics/configuration",id:"topics/configuration",isDocsHomePage:!1,title:"Configuration",description:"Every feature exposes configuration through the standard dotnet core configuration infrastructure. This lets you, as the developer,",source:"@site/dotnet/topics/configuration.mdx",sourceDirName:"topics",slug:"/topics/configuration",permalink:"/dotnet/topics/configuration",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/topics/configuration.mdx",version:"current",sidebarPosition:1,frontMatter:{title:"Configuration",sidebar_position:1},sidebar:"cra",previous:{title:"Features",permalink:"/dotnet/features"},next:{title:"Logging",permalink:"/dotnet/topics/logging"}},s=[{value:"Azure AD Authentication",id:"azure-ad-authentication",children:[]},{value:"Swagger",id:"swagger",children:[]},{value:"Logging",id:"logging",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every feature exposes configuration through the standard dotnet core configuration infrastructure. This lets you, as the developer,\nto decide how to provide those configurations. Usually through the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," on your local\nmachine or through environment variables or secrets in CI or production environments."),(0,o.kt)("p",null,"Read more about available configuration providers in the official dotnet documentation."),(0,o.kt)(a.Z,{title:"Configuration in ASP.NET Core",subtitle:"~62 minutes to read",url:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0",width:"305px",mdxType:"MsDocsCard"}),(0,o.kt)("h2",{id:"azure-ad-authentication"},"Azure AD Authentication"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"TODO"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App Registrations"),(0,o.kt)("li",{parentName:"ul"},"The relationship between SPA App, Resource App "),(0,o.kt)("li",{parentName:"ul"},"How to configure them properly")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "AzureAd": {\n    // azure identity platform instance (should not be changed)\n    "Instance": "https://login.microsoftonline.com/",\n    // primary domain of your tenant\n    "Domain": "intility.onmicrosoft.com",\n    // tenant / directory id\n    "TenantId": "9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6",\n    // client id of your azure appReg\n    "ClientId": "11111111-1111-1111-11111111111111111"\n  }\n}\n\n')),(0,o.kt)("h2",{id:"swagger"},"Swagger"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"TODO"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Swagger authentication"),(0,o.kt)("li",{parentName:"ul"},"Swagger versioning relationship with API versioning")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Swagger": {\n    // Name of the service in Swagger definition and UI\n    "AppName": "Company.WebApplication1 Swagger",\n\n    // The client id to authenticate with. This should be an\n    // app registration with delegated permission to the API registration\n    "ClientId": "22222222-2222-2222-22222222222222222"\n  }\n}\n')),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Logging is provided by the external package ",(0,o.kt)("inlineCode",{parentName:"p"},"Intility.Logging.AspNetCore")," in conjunction with logger sink extensions. The goal with the external package is to enable\ncontinuous development of logging support centrally, as the infrastructure changes over time, alleviating you of this burden."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about logging configurations visit the ",(0,o.kt)("a",{parentName:"p",href:"./Logging"},"Logging")," section."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Serilog": {\n    "MinimumLevel": {\n      "Default": "Information",\n      "Override": {\n        "System": "Warning",\n        "Microsoft": "Warning",\n        "Microsoft.Hosting.Lifetime": "Information"\n      }\n    },\n    "Properties": {\n      "Application": "MyService"\n    }\n  }\n}\n')))}p.isMDXComponent=!0},2778:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function i(e){var t=e.width,n=e.height;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:"0 57 200 100",preserveAspectRatio:"xMidYMin slice"},r.createElement("g",{"data-name":"MS-symbol"},r.createElement("g",{"clip-path":"url(#a)"},r.createElement("path",{d:"M106.214 106.214H71.996V71.996h34.218z",fill:"#f25022"}),r.createElement("path",{d:"M143.993 106.214h-34.218V71.996h34.218z",fill:"#7fba00"}),r.createElement("path",{d:"M106.214 143.993H71.996v-34.218h34.218z",fill:"#00a4ef"}),r.createElement("path",{d:"M143.993 143.993h-34.218v-34.218h34.218z",fill:"#ffb900"}))))}function o(e){var t=e.children,n=e.url,o=e.title,a=e.subtitle,l=e.width;return r.createElement("a",{style:{width:l||"100%",color:"var(--ifm-font-color-base)",textDecoration:"none",display:"flex",alignItems:"center",border:"solid 1px var(--ifm-color-secondary-dark)",padding:"5px",boxShadow:"0px 0px 8px rgba(0,0,0,.1)",borderRadius:"2px"},href:n},r.createElement(i,{width:"50",height:"50"}),r.createElement("span",{style:{display:"flex",flexDirection:"column",margin:"0 0 0 15px"}},r.createElement("span",{style:{lineHeight:"1.1em"}},o),r.createElement("span",{style:{fontSize:".8em"}},a)),t)}}}]);