"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7440],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},78568:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"broker",title:"Broker service",sidebar_label:"Broker"},c=void 0,l={unversionedId:"design/broker",id:"design/broker",title:"Broker service",description:"\x3c!--",source:"@site/docs/29.0.1/design/broker.md",sourceDirName:"design",slug:"/design/broker",permalink:"/docs/29.0.1/design/broker",draft:!1,tags:[],version:"current",frontMatter:{id:"broker",title:"Broker service",sidebar_label:"Broker"},sidebar:"docs",previous:{title:"Overlord",permalink:"/docs/29.0.1/design/overlord"},next:{title:"Router",permalink:"/docs/29.0.1/design/router"}},u={},d=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP endpoints",id:"http-endpoints",level:2},{value:"Running",id:"running",level:2},{value:"Forwarding queries",id:"forwarding-queries",level:2},{value:"Caching",id:"caching",level:2}],p={toc:d},h="wrapper";function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)(h,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Broker service routes queries in a distributed cluster setup. It interprets the metadata published to ZooKeeper about segment distribution across services and routes queries accordingly. Additionally, the Broker service consolidates result sets from individual services."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"For Apache Druid Broker service configuration, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/29.0.1/configuration/#broker"},"Broker Configuration"),"."),(0,a.kt)("p",null,"For basic tuning guidance for the Broker service, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/basic-cluster-tuning#broker"},"Basic cluster tuning"),"."),(0,a.kt)("h2",{id:"http-endpoints"},"HTTP endpoints"),(0,a.kt)("p",null,"For a list of API endpoints supported by the Broker, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/29.0.1/api-reference/legacy-metadata-api#broker"},"Broker API"),"."),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server broker\n")),(0,a.kt)("h2",{id:"forwarding-queries"},"Forwarding queries"),(0,a.kt)("p",null,"Most Druid queries contain an interval object that indicates a span of time for which data is requested. Similarly, Druid partitions ",(0,a.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/segments"},"segments")," to contain data for some interval of time and distributes the segments across a cluster. Consider a simple datasource with seven segments where each segment contains data for a given day of the week. Any query issued to the datasource for more than one day of data will hit more than one segment. These segments will likely be distributed across multiple services, and hence, the query will likely hit multiple services."),(0,a.kt)("p",null,"To determine which services to forward queries to, the Broker service first builds a view of the world from information in ZooKeeper. ZooKeeper maintains information about ",(0,a.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/historical"},"Historical")," and streaming ingestion ",(0,a.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/peons"},"Peon")," services and the segments they are serving. For every datasource in ZooKeeper, the Broker service builds a timeline of segments and the services that serve them. When queries are received for a specific datasource and interval, the Broker service performs a lookup into the timeline associated with the query datasource for the query interval and retrieves the services that contain data for the query. The Broker service then forwards down the query to the selected services."),(0,a.kt)("h2",{id:"caching"},"Caching"),(0,a.kt)("p",null,"Broker services employ a cache with an LRU cache invalidation strategy. The Broker cache stores per-segment results. The cache can be local to each Broker service or shared across multiple services using an external distributed cache such as ",(0,a.kt)("a",{parentName:"p",href:"http://memcached.org/"},"memcached"),". Each time a Broker service receives a query, it first maps the query to a set of segments. A subset of these segment results may already exist in the cache and the results can be directly pulled from the cache. For any segment results that do not exist in the cache, the Broker service will forward the query to the\nHistorical services. Once the Historical services return their results, the Broker will store those results in the cache. Real-time segments are never cached and hence requests for real-time data will always be forwarded to real-time services. Real-time data is perpetually changing and caching the results would be unreliable."))}m.isMDXComponent=!0}}]);