"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,k=p["".concat(m,".").concat(c)]||p[c]||u[c]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"ambari-metrics-emitter",title:"Ambari Metrics Emitter"},m=void 0,d={unversionedId:"development/extensions-contrib/ambari-metrics-emitter",id:"development/extensions-contrib/ambari-metrics-emitter",title:"Ambari Metrics Emitter",description:"\x3c!--",source:"@site/docs/27.0.0/development/extensions-contrib/ambari-metrics-emitter.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/ambari-metrics-emitter",permalink:"/docs/27.0.0/development/extensions-contrib/ambari-metrics-emitter",draft:!1,tags:[],version:"current",frontMatter:{id:"ambari-metrics-emitter",title:"Ambari Metrics Emitter"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Druid to Ambari Metrics Timeline Event Converter",id:"druid-to-ambari-metrics-timeline-event-converter",level:3},{value:"Send-All converter",id:"send-all-converter",level:4},{value:"White-list based converter",id:"white-list-based-converter",level:4}],u={toc:p},c="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use this Apache Druid extension, ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ambari-metrics-emitter")," in the extensions load list."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This extension emits Druid metrics to an ambari-metrics carbon server. Events are sent after been pickled (i.e., batched). The size of the batch is configurable."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"All the configuration parameters for ambari-metrics emitter are under ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.emitter.ambari-metrics"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"),(0,i.kt)("th",{parentName:"tr",align:null},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.hostname")),(0,i.kt)("td",{parentName:"tr",align:null},"The hostname of the ambari-metrics server."),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.port")),(0,i.kt)("td",{parentName:"tr",align:null},"The port of the ambari-metrics server."),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.protocol")),(0,i.kt)("td",{parentName:"tr",align:null},"The protocol used to send metrics to ambari metrics collector. One of http/https"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"http")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.trustStorePath")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to trustStore to be used for https"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.trustStoreType")),(0,i.kt)("td",{parentName:"tr",align:null},"trustStore type to be used for https"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.trustStoreType")),(0,i.kt)("td",{parentName:"tr",align:null},"trustStore password to be used for https"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.batchSize")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of events to send as one batch."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.eventConverter")),(0,i.kt)("td",{parentName:"tr",align:null},"Filter and converter of druid events to ambari-metrics timeline event(please see next section)."),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"none")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.flushPeriod")),(0,i.kt)("td",{parentName:"tr",align:null},"Queue flushing period in milliseconds."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"1 minute")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.maxQueueSize")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum size of the queue used to buffer events."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"MAX_INT"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.alertEmitters")),(0,i.kt)("td",{parentName:"tr",align:null},"List of emitters where alerts will be forwarded to."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"empty list (no forwarding)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.emitWaitTime")),(0,i.kt)("td",{parentName:"tr",align:null},"wait time in milliseconds to try to send the event otherwise emitter will throwing event."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.emitter.ambari-metrics.waitForEventTime")),(0,i.kt)("td",{parentName:"tr",align:null},"waiting time in milliseconds if necessary for an event to become available."),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"1000 (1 sec)")))),(0,i.kt)("h3",{id:"druid-to-ambari-metrics-timeline-event-converter"},"Druid to Ambari Metrics Timeline Event Converter"),(0,i.kt)("p",null,"Ambari Metrics Timeline Event Converter defines a mapping between druid metrics name plus dimensions to a timeline event metricName.\nambari-metrics metric path is organized using the following schema:\n",(0,i.kt)("inlineCode",{parentName:"p"},"<namespacePrefix>.[<druid service name>].[<druid hostname>].<druid metrics dimensions>.<druid metrics name>"),"\nProperly naming the metrics is critical to avoid conflicts, confusing data and potentially wrong interpretation later on."),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.historical.hist-host1:8080.MyDataSourceName.GroupBy.query/time"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid")," -> namespace prefix"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"historical")," -> service name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hist-host1:8080")," -> druid hostname"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MyDataSourceName")," -> dimension value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GroupBy")," -> dimension value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query/time")," -> metric name")),(0,i.kt)("p",null,"We have two different implementation of event converter:"),(0,i.kt)("h4",{id:"send-all-converter"},"Send-All converter"),(0,i.kt)("p",null,"The first implementation called ",(0,i.kt)("inlineCode",{parentName:"p"},"all"),", will send all the druid service metrics events.\nThe path will be in the form ",(0,i.kt)("inlineCode",{parentName:"p"},"<namespacePrefix>.[<druid service name>].[<druid hostname>].<dimensions values ordered by dimension's name>.<metric>"),"\nUser has control of ",(0,i.kt)("inlineCode",{parentName:"p"},"<namespacePrefix>.[<druid service name>].[<druid hostname>].")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\ndruid.emitter.ambari-metrics.eventConverter={"type":"all", "namespacePrefix": "druid.test", "appName":"druid"}\n\n')),(0,i.kt)("h4",{id:"white-list-based-converter"},"White-list based converter"),(0,i.kt)("p",null,"The second implementation called ",(0,i.kt)("inlineCode",{parentName:"p"},"whiteList"),", will send only the white listed metrics and dimensions.\nSame as for the ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," converter user has control of ",(0,i.kt)("inlineCode",{parentName:"p"},"<namespacePrefix>.[<druid service name>].[<druid hostname>]."),"\nWhite-list based converter comes with the following  default white list map located under resources in ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/main/resources/defaultWhiteListMap.json")),(0,i.kt)("p",null,"Although user can override the default white list map by supplying a property called ",(0,i.kt)("inlineCode",{parentName:"p"},"mapPath"),".\nThis property is a String containing  the path for the file containing ",(0,i.kt)("strong",{parentName:"p"},"white list map JSON object"),".\nFor example the following converter will read the map from the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/pathPrefix/fileName.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\ndruid.emitter.ambari-metrics.eventConverter={"type":"whiteList", "namespacePrefix": "druid.test", "ignoreHostname":true, "appName":"druid", "mapPath":"/pathPrefix/fileName.json"}\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Druid emits a huge number of metrics we highly recommend to use the ",(0,i.kt)("inlineCode",{parentName:"strong"},"whiteList")," converter")))}k.isMDXComponent=!0}}]);