"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"middlemanager",title:"MiddleManager service",sidebar_label:"MiddleManager"},l=void 0,d={unversionedId:"design/middlemanager",id:"design/middlemanager",title:"MiddleManager service",description:"\x3c!--",source:"@site/docs/latest/design/middlemanager.md",sourceDirName:"design",slug:"/design/middlemanager",permalink:"/docs/latest/design/middlemanager",draft:!1,tags:[],version:"current",frontMatter:{id:"middlemanager",title:"MiddleManager service",sidebar_label:"MiddleManager"},sidebar:"docs",previous:{title:"Historical",permalink:"/docs/latest/design/historical"},next:{title:"Peon",permalink:"/docs/latest/design/peons"}},c={},p=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP endpoints",id:"http-endpoints",level:2},{value:"Running",id:"running",level:2}],u={toc:p},g="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The MiddleManager service is a worker service that executes submitted tasks. MiddleManagers forward tasks to ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design/peons"},"Peons")," that run in separate JVMs.\nDruid uses separate JVMs for tasks to isolate resources and logs. Each Peon is capable of running only one task at a time, wheres a MiddleManager may have multiple Peons."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For Apache Druid MiddleManager service configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#middlemanager-and-peons"},"MiddleManager and Peons"),"."),(0,i.kt)("p",null,"For basic tuning guidance for the MiddleManager service, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/basic-cluster-tuning#middlemanager"},"Basic cluster tuning"),"."),(0,i.kt)("h2",{id:"http-endpoints"},"HTTP endpoints"),(0,i.kt)("p",null,"For a list of API endpoints supported by the MiddleManager, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/api-reference/service-status-api#middlemanager"},"Service status API reference"),"."),(0,i.kt)("h2",{id:"running"},"Running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server middleManager\n")))}m.isMDXComponent=!0}}]);