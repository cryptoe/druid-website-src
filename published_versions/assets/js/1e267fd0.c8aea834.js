"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8259],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),y=i,d=p["".concat(u,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},51552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={id:"tranquility",title:"Tranquility"},u=void 0,s={unversionedId:"ingestion/tranquility",id:"ingestion/tranquility",title:"Tranquility",description:"\x3c!--",source:"@site/docs/latest/ingestion/tranquility.md",sourceDirName:"ingestion",slug:"/ingestion/tranquility",permalink:"/docs/latest/ingestion/tranquility",draft:!1,tags:[],version:"current",frontMatter:{id:"tranquility",title:"Tranquility"}},c={},p=[],f={toc:p},y="wrapper";function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/druid-io/tranquility/"},"Tranquility")," is a separately distributed package for pushing\nstreams to Druid in real-time. "),(0,a.kt)("p",null,"Tranquility has not been built against a version of Druid later than Druid 0.9.2\nrelease. It may still work with the latest Druid servers, but not all features and functionality will be available\ndue to limitations of older Druid APIs on the Tranquility side."),(0,a.kt)("p",null,"For new projects that require streaming ingestion, we recommend using Druid's native support for\n",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/kafka-ingestion"},"Apache Kafka")," or\n",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/kinesis-ingestion"},"Amazon Kinesis"),"."),(0,a.kt)("p",null,"For more details, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/druid-io/tranquility/"},"Tranquility GitHub page"),"."))}d.isMDXComponent=!0}}]);