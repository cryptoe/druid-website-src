"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"standalone-realtime",layout:"doc_page",title:"Realtime Process"},l=void 0,c={unversionedId:"ingestion/standalone-realtime",id:"ingestion/standalone-realtime",title:"Realtime Process",description:"\x3c!--",source:"@site/docs/latest/ingestion/standalone-realtime.md",sourceDirName:"ingestion",slug:"/ingestion/standalone-realtime",permalink:"/docs/latest/ingestion/standalone-realtime",draft:!1,tags:[],version:"current",frontMatter:{id:"standalone-realtime",layout:"doc_page",title:"Realtime Process"},sidebar:"docs",previous:{title:"Amazon Kinesis",permalink:"/docs/latest/development/extensions-core/kinesis-ingestion"},next:{title:"Native batch",permalink:"/docs/latest/ingestion/native-batch"}},p={},d=[],u={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Older versions of Apache Druid supported a standalone 'Realtime' process to query and index 'stream pull'\nmodes of real-time ingestion. These processes would periodically build segments for the data they had collected over\nsome span of time and then set up hand-off to ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/design/historical"},"Historical")," servers."),(0,a.kt)("p",null,"This processes could be invoked by"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server realtime\n")),(0,a.kt)("p",null,"This model of stream pull ingestion was deprecated for a number of both operational and architectural reasons, and\nremoved completely in Druid 0.16.0. Operationally, realtime nodes were difficult to configure, deploy, and scale because\neach node required an unique configuration. The design of the stream pull ingestion system for realtime nodes also\nsuffered from limitations which made it not possible to achieve exactly once ingestion."),(0,a.kt)("p",null,"The extensions ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-kafka-eight"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-kafka-eight-simpleConsumer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-rabbitmq"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-rocketmq")," were also\nremoved at this time, since they were built to operate on the realtime nodes."),(0,a.kt)("p",null,"Please consider using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/kafka-ingestion"},"Kafka Indexing Service")," or\n",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/kinesis-ingestion"},"Kinesis Indexing Service")," for stream pull ingestion instead."))}f.isMDXComponent=!0}}]);