"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"versioning",title:"Versioning"},l=void 0,c={unversionedId:"development/versioning",id:"development/versioning",title:"Versioning",description:"\x3c!--",source:"@site/docs/29.0.1/development/versioning.md",sourceDirName:"development",slug:"/development/versioning",permalink:"/docs/29.0.1/development/versioning",draft:!1,tags:[],version:"current",frontMatter:{id:"versioning",title:"Versioning"},sidebar:"docs",previous:{title:"Build from source",permalink:"/docs/29.0.1/development/build"},next:{title:"Contribute to Druid docs",permalink:"/docs/29.0.1/development/contribute-to-docs"}},u={},p=[{value:"Versioning Strategy",id:"versioning-strategy",level:2},{value:"Tagging strategy",id:"tagging-strategy",level:2}],d={toc:p},m="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page discusses how we do versioning and provides information on our stable releases."),(0,a.kt)("h2",{id:"versioning-strategy"},"Versioning Strategy"),(0,a.kt)("p",null,"We generally follow ",(0,a.kt)("a",{parentName:"p",href:"http://semver.org/"},"semantic versioning"),". The general idea is"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"Major" version (leftmost): backwards incompatible, no guarantees exist about APIs between the versions'),(0,a.kt)("li",{parentName:"ul"},'"Minor" version (middle number): you can move forward from a smaller number to a larger number, but moving backwards ',(0,a.kt)("em",{parentName:"li"},"might")," be incompatible."),(0,a.kt)("li",{parentName:"ul"},'"bug-fix" version ("patch" or the rightmost): Interchangeable. The higher the number, the more things are fixed (hopefully), but the programming interfaces are completely compatible and you should be able to just drop in a new jar and have it work.')),(0,a.kt)("p",null,"Note that this is defined in terms of programming API, ",(0,a.kt)("strong",{parentName:"p"},"not"),' in terms of functionality. It is possible that a brand new awesome way of doing something is introduced in a "bug-fix" release version if it doesn\u2019t add to the public API or change it.'),(0,a.kt)("p",null,'One exception for right now, while we are still in major version 0, we are considering the APIs to be in beta and are conflating "major" and "minor" so a minor version increase could be backwards incompatible for as long as we are at major version 0. These will be communicated via email on the group.'),(0,a.kt)("p",null,"For external deployments, we recommend running the stable release tag. Releases are considered stable after we have deployed them into our production environment and they have operated bug-free for some time."),(0,a.kt)("h2",{id:"tagging-strategy"},"Tagging strategy"),(0,a.kt)("p",null,"Tags of the codebase are equivalent to release candidates. We tag the code every time we want to take it through our release process, which includes some QA cycles and deployments. So, it is not safe to assume that a tag is a stable release, it is a solidification of the code as it goes through our production QA cycle and deployment. Tags will never change, but we often go through a number of iterations of tags before actually getting a stable release onto production. So, it is recommended that if you are not aware of what is on a tag, to stick to the stable releases listed on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/releases"},"Release")," page."))}g.isMDXComponent=!0}}]);