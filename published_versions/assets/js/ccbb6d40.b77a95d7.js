"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"druid-vs-kudu",title:"Apache Druid vs Kudu"},u=void 0,d={unversionedId:"comparisons/druid-vs-kudu",id:"comparisons/druid-vs-kudu",title:"Apache Druid vs Kudu",description:"\x3c!--",source:"@site/docs/29.0.1/comparisons/druid-vs-kudu.md",sourceDirName:"comparisons",slug:"/comparisons/druid-vs-kudu",permalink:"/docs/29.0.1/comparisons/druid-vs-kudu",draft:!1,tags:[],version:"current",frontMatter:{id:"druid-vs-kudu",title:"Apache Druid vs Kudu"}},c={},p=[],l={toc:p},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kudu's storage format enables single row updates, whereas updates to existing Druid segments requires recreating the segment, so theoretically\nthe process for updating old values should be higher latency in Druid. However, the requirements in Kudu for maintaining extra head space to store\nupdates as well as organizing data by id instead of time has the potential to introduce some extra latency and accessing\nof data that is not needed to answer a query at query time."),(0,o.kt)("p",null,"Druid summarizes/rollups up data at ingestion time, which in practice reduces the raw data that needs to be\nstored significantly (up to 40 times on average), and increases performance of scanning raw data significantly.\nDruid segments also contain bitmap indexes for fast filtering, which Kudu does not currently support.\nDruid's segment architecture is heavily geared towards fast aggregates and filters, and for OLAP workflows. Appends are very\nfast in Druid, whereas updates of older data are higher latency. This is by design as the data Druid is good for is typically event data,\nand does not need to be updated too frequently. Kudu supports arbitrary primary keys with uniqueness constraints, and\nefficient lookup by ranges of those keys. Kudu chooses not to include the execution engine, but supports sufficient\noperations so as to allow node-local processing from the execution engines. This means that Kudu can support multiple frameworks on the same data (e.g., MR, Spark, and SQL).\nDruid includes its own query layer that allows it to push down aggregations and computations directly to data processes for faster query processing."))}m.isMDXComponent=!0}}]);