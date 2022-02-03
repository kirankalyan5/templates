"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1743],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3354:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var t=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"API - Error Handling",sidebar_label:"Error Handling",slug:"/API/Error-Handling",sidebar_position:3},l=void 0,p={unversionedId:"API/errorHandling",id:"API/errorHandling",title:"API - Error Handling",description:"Error Handling",source:"@site/express/API/errorHandling.mdx",sourceDirName:"API",slug:"/API/Error-Handling",permalink:"/express/API/Error-Handling",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/API/errorHandling.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"API - Error Handling",sidebar_label:"Error Handling",slug:"/API/Error-Handling",sidebar_position:3},sidebar:"express",previous:{title:"Database",permalink:"/express/API/Database"},next:{title:"Swagger",permalink:"/express/API/Swagger"}},u=[{value:"Error Handling",id:"error-handling",children:[],level:2}],c={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This assumes that you have an implementation of an Express server in your project")),(0,a.kt)("p",null,"Most of what we do in an API is asynchronous and express does not support asynchronous error handling out of the box. We will use an external dependency for this instead of handling this ourself."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/express-async-errors"},"express-async-errors")," - ES6 async/await support hack for ExpressJS")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm i express-async-errors")),(0,a.kt)("p",null,"Next up is importing this package. On the top of your index.ts file add this import statement ",(0,a.kt)("strong",{parentName:"p"},"above")," the app-import."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import 'express-async-errors';\nimport app from './config/app';\n")),(0,a.kt)("p",null,"Next up is creating the error handler middleware. Create an new folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"middlewares")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder. and inside here a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"errorHandler.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Request, Response, NextFunction } from "express"\n\nconst errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {\n    return res.status(500).json({\n        message: err.message\n    })\n}\n\nexport default errorHandler;\n\n')),(0,a.kt)("p",null,"Next go to the file where you initialize the express server and add the following code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Where you initialize the express server\n// const app = express();\n\n// where you registerer the routes\n\n// It is important that this is below the point where you registerer the routes. \napp.use(errorHandler)\n")),(0,a.kt)("p",null,"Now you will be able to throw Node.js Errors wherever you want in your codebase."),(0,a.kt)("p",null,"To read more about this visit Express' API Documentation here: ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/error-handling.html"},"Express Error Handling")))}d.isMDXComponent=!0}}]);