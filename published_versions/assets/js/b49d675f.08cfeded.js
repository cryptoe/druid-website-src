"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5631],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?t.createElement(g,a(a({ref:r},c),{},{components:n})):t.createElement(g,a({ref:r},c))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11841:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"overlord",title:"Overlord service",sidebar_label:"Overlord"},s=void 0,d={unversionedId:"design/overlord",id:"design/overlord",title:"Overlord service",description:"\x3c!--",source:"@site/docs/29.0.1/design/overlord.md",sourceDirName:"design",slug:"/design/overlord",permalink:"/docs/29.0.1/design/overlord",draft:!1,tags:[],version:"current",frontMatter:{id:"overlord",title:"Overlord service",sidebar_label:"Overlord"},sidebar:"docs",previous:{title:"Coordinator",permalink:"/docs/29.0.1/design/coordinator"},next:{title:"Broker",permalink:"/docs/29.0.1/design/broker"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP endpoints",id:"http-endpoints",level:2},{value:"Blacklisted workers",id:"blacklisted-workers",level:2},{value:"Autoscaling",id:"autoscaling",level:2}],p={toc:u},f="wrapper";function g(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(f,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Overlord service is responsible for accepting tasks, coordinating task distribution, creating locks around tasks, and returning statuses to callers. The Overlord can be configured to run in one of two modes - local or remote (local being default).\nIn local mode, the Overlord is also responsible for creating Peons for executing tasks. When running the Overlord in local mode, all MiddleManager and Peon configurations must be provided as well.\nLocal mode is typically used for simple workflows. In remote mode, the Overlord and MiddleManager are run in separate services and you can run each on a different server.\nThis mode is recommended if you intend to use the indexing service as the single endpoint for all Druid indexing."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For Apache Druid Overlord service configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/configuration/#overlord"},"Overlord Configuration"),"."),(0,i.kt)("p",null,"For basic tuning guidance for the Overlord service, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/basic-cluster-tuning#overlord"},"Basic cluster tuning"),"."),(0,i.kt)("h2",{id:"http-endpoints"},"HTTP endpoints"),(0,i.kt)("p",null,"For a list of API endpoints supported by the Overlord, please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/api-reference/service-status-api#overlord"},"Service status API reference"),"."),(0,i.kt)("h2",{id:"blacklisted-workers"},"Blacklisted workers"),(0,i.kt)("p",null,"If a MiddleManager has task failures above a threshold, the Overlord will blacklist these MiddleManagers. No more than 20% of the MiddleManagers can be blacklisted. Blacklisted MiddleManagers will be periodically whitelisted."),(0,i.kt)("p",null,"The following variables can be used to set the threshold and blacklist timeouts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"druid.indexer.runner.maxRetriesBeforeBlacklist\ndruid.indexer.runner.workerBlackListBackoffTime\ndruid.indexer.runner.workerBlackListCleanupPeriod\ndruid.indexer.runner.maxPercentageBlacklistWorkers\n")),(0,i.kt)("h2",{id:"autoscaling"},"Autoscaling"),(0,i.kt)("p",null,"The autoscaling mechanisms currently in place are tightly coupled with our deployment infrastructure but the framework should be in place for other implementations. We are highly open to new implementations or extensions of the existing mechanisms. In our own deployments, MiddleManager services are Amazon AWS EC2 nodes and they are provisioned to register themselves in a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ning/galaxy"},"galaxy")," environment."),(0,i.kt)("p",null,"If autoscaling is enabled, new MiddleManagers may be added when a task has been in pending state for too long. MiddleManagers may be terminated if they have not run any tasks for a period of time."))}g.isMDXComponent=!0}}]);