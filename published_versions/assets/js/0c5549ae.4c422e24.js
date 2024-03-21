"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],c={id:"index",title:"Data management",sidebar_label:"Overview"},l=void 0,s={unversionedId:"data-management/index",id:"data-management/index",title:"Data management",description:"\x3c!--",source:"@site/docs/latest/data-management/index.md",sourceDirName:"data-management",slug:"/data-management/",permalink:"/docs/latest/data-management/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Data management",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Troubleshooting FAQ",permalink:"/docs/latest/ingestion/faq"},next:{title:"Data updates",permalink:"/docs/latest/data-management/update"}},m={},p=[],d={toc:p},u="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Druid stores data ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/design/storage"},"partitioned by time chunk")," in immutable\nfiles called ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/design/segments"},"segments"),". Data management operations involving replacing, or deleting,\nthese segments include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/data-management/update"},"Updates")," to existing data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/data-management/delete"},"Deletion")," of existing data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/data-management/schema-changes"},"Schema changes")," for new and existing data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/data-management/compaction"},"Compaction")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/latest/data-management/automatic-compaction"},"automatic compaction"),", which reindex existing data to\noptimize storage footprint and performance.")))}f.isMDXComponent=!0}}]);