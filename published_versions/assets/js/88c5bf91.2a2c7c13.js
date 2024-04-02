"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[738],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],s={id:"migrate-from-firehose",title:"Migrate from firehose to input source ingestion (legacy)",sidebar_label:"Migrate from firehose"},p=void 0,l={unversionedId:"operations/migrate-from-firehose",id:"operations/migrate-from-firehose",title:"Migrate from firehose to input source ingestion (legacy)",description:"\x3c!--",source:"@site/docs/29.0.1/operations/migrate-from-firehose-ingestion.md",sourceDirName:"operations",slug:"/operations/migrate-from-firehose",permalink:"/docs/29.0.1/operations/migrate-from-firehose",draft:!1,tags:[],version:"current",frontMatter:{id:"migrate-from-firehose",title:"Migrate from firehose to input source ingestion (legacy)",sidebar_label:"Migrate from firehose"},sidebar:"docs",previous:{title:"Using rules to drop and retain data",permalink:"/docs/29.0.1/operations/rule-configuration"},next:{title:"Working with different versions of Apache Hadoop",permalink:"/docs/29.0.1/operations/other-hadoop"}},u={},c=[{value:"Migrate from firehose ingestion to an input source",id:"migrate-from-firehose-ingestion-to-an-input-source",level:2},{value:"Use the Druid console",id:"use-the-druid-console",level:3},{value:"Update your ingestion spec manually",id:"update-your-ingestion-spec-manually",level:3},{value:"Example firehose ingestion spec",id:"example-firehose-ingestion-spec",level:3},{value:"Example ingestion spec after migration",id:"example-ingestion-spec-after-migration",level:3},{value:"Learn more",id:"learn-more",level:2}],m={toc:c},d="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)(d,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache deprecated support for Druid firehoses in version 0.17. Support for firehose ingestion will be removed in version 26.0."),(0,r.kt)("p",null,"If you're using a firehose for batch ingestion, we strongly recommend that you follow the instructions on this page to transition to using native batch ingestion input sources as soon as possible. "),(0,r.kt)("p",null,"Firehose ingestion doesn't work with newer Druid versions, so you must be using an ingestion spec with a defined input source before you upgrade. "),(0,r.kt)("h2",{id:"migrate-from-firehose-ingestion-to-an-input-source"},"Migrate from firehose ingestion to an input source"),(0,r.kt)("p",null,"To migrate from firehose ingestion, you can use the Druid console to update your ingestion spec, or you can update it manually."),(0,r.kt)("h3",{id:"use-the-druid-console"},"Use the Druid console"),(0,r.kt)("p",null,"To update your ingestion spec using the Druid console, open the console and copy your spec into the ",(0,r.kt)("strong",{parentName:"p"},"Edit spec")," stage of the data loader."),(0,r.kt)("p",null,"Druid converts the spec into one with a defined input source. For example, it converts the ",(0,r.kt)("a",{parentName:"p",href:"#example-firehose-ingestion-spec"},"example firehose ingestion spec")," below into the ",(0,r.kt)("a",{parentName:"p",href:"#example-ingestion-spec-after-migration"},"example ingestion spec after migration"),"."),(0,r.kt)("p",null,"If you're unable to use the console or you have problems with the console method, the alternative is to update your ingestion spec manually."),(0,r.kt)("h3",{id:"update-your-ingestion-spec-manually"},"Update your ingestion spec manually"),(0,r.kt)("p",null,"To update your ingestion spec manually, copy your existing spec into a new file. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/29.0.1/ingestion/native-batch-firehose"},"Native batch ingestion with firehose (Deprecated)")," for a description of firehose properties."),(0,r.kt)("p",null,"Edit the new file as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"ioConfig")," component, replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"firehose")," definition with an ",(0,r.kt)("inlineCode",{parentName:"li"},"inputSource")," definition for your chosen input source. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/29.0.1/ingestion/input-sources"},"Native batch input sources")," for details."),(0,r.kt)("li",{parentName:"ol"},"Move the ",(0,r.kt)("inlineCode",{parentName:"li"},"timeStampSpec")," definition from ",(0,r.kt)("inlineCode",{parentName:"li"},"parser.parseSpec")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"dataSchema")," component."),(0,r.kt)("li",{parentName:"ol"},"Move the ",(0,r.kt)("inlineCode",{parentName:"li"},"dimensionsSpec")," definition from ",(0,r.kt)("inlineCode",{parentName:"li"},"parser.parseSpec")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"dataSchema")," component."),(0,r.kt)("li",{parentName:"ol"},"Move the ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," definition from ",(0,r.kt)("inlineCode",{parentName:"li"},"parser.parseSpec")," to an ",(0,r.kt)("inlineCode",{parentName:"li"},"inputFormat")," definition in ",(0,r.kt)("inlineCode",{parentName:"li"},"ioConfig"),"."),(0,r.kt)("li",{parentName:"ol"},"Delete the ",(0,r.kt)("inlineCode",{parentName:"li"},"parser")," definition."),(0,r.kt)("li",{parentName:"ol"},"Save the file.\nYou can check the format of your new ingestion file against the ",(0,r.kt)("a",{parentName:"li",href:"#example-ingestion-spec-after-migration"},"migrated example")," below."),(0,r.kt)("li",{parentName:"ol"},"Test the new ingestion spec with a temporary data source."),(0,r.kt)("li",{parentName:"ol"},"Once you've successfully ingested sample data with the new spec, stop firehose ingestion and switch to the new spec.")),(0,r.kt)("p",null,"When the transition is complete, you can upgrade Druid to the latest version. See the ",(0,r.kt)("a",{parentName:"p",href:"https://druid.apache.org/downloads.html"},"Druid release notes")," for upgrade instructions."),(0,r.kt)("h3",{id:"example-firehose-ingestion-spec"},"Example firehose ingestion spec"),(0,r.kt)("p",null,"An example firehose ingestion spec is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "index",\n  "spec" : {\n     "dataSchema" : {\n        "dataSource" : "wikipedia",\n        "metricsSpec" : [\n           {\n              "type" : "count",\n              "name" : "count"\n           },\n           {\n              "type" : "doubleSum",\n              "name" : "added",\n              "fieldName" : "added"\n           },\n           {\n              "type" : "doubleSum",\n              "name" : "deleted",\n              "fieldName" : "deleted"\n           },\n           {\n              "type" : "doubleSum",\n              "name" : "delta",\n              "fieldName" : "delta"\n           }\n        ],\n        "granularitySpec" : {\n           "type" : "uniform",\n           "segmentGranularity" : "DAY",\n           "queryGranularity" : "NONE",\n           "intervals" : [ "2013-08-31/2013-09-01" ]\n        },\n        "parser": {\n           "type": "string",\n           "parseSpec": {\n              "format": "json",\n              "timestampSpec" : {\n                 "column" : "timestamp",\n                 "format" : "auto"\n              },\n              "dimensionsSpec" : {\n                 "dimensions": ["country", "page","language","user","unpatrolled","newPage","robot","anonymous","namespace","continent","region","city"],\n                 "dimensionExclusions" : []\n              }\n           }\n        }\n     },\n     "ioConfig" : {\n        "type" : "index",\n        "firehose" : {\n           "type" : "local",\n           "baseDir" : "examples/indexing/",\n           "filter" : "wikipedia_data.json"\n        }\n     },\n     "tuningConfig" : {\n        "type" : "index",\n        "partitionsSpec": {\n           "type": "single_dim",\n           "partitionDimension": "country",\n           "targetRowsPerSegment": 5000000\n        }\n     }\n  }\n}\n')),(0,r.kt)("h3",{id:"example-ingestion-spec-after-migration"},"Example ingestion spec after migration"),(0,r.kt)("p",null,"The following example illustrates the result of migrating the ",(0,r.kt)("a",{parentName:"p",href:"#example-firehose-ingestion-spec"},"example firehose ingestion spec")," to a spec with an input source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "type" : "index",\n "spec" : {\n   "dataSchema" : {\n     "dataSource" : "wikipedia",\n     "timestampSpec" : {\n       "column" : "timestamp",\n       "format" : "auto"\n     },\n     "dimensionsSpec" : {\n       "dimensions": ["country", "page","language","user","unpatrolled","newPage","robot","anonymous","namespace","continent","region","city"],\n       "dimensionExclusions" : []\n     },\n     "metricsSpec" : [\n       {\n         "type" : "count",\n         "name" : "count"\n       },\n       {\n         "type" : "doubleSum",\n         "name" : "added",\n         "fieldName" : "added"\n       },\n       {\n         "type" : "doubleSum",\n         "name" : "deleted",\n         "fieldName" : "deleted"\n       },\n       {\n         "type" : "doubleSum",\n         "name" : "delta",\n         "fieldName" : "delta"\n       }\n     ],\n     "granularitySpec" : {\n       "type" : "uniform",\n       "segmentGranularity" : "DAY",\n       "queryGranularity" : "NONE",\n       "intervals" : [ "2013-08-31/2013-09-01" ]\n     }\n   },\n   "ioConfig" : {\n     "type" : "index",\n     "inputSource" : {\n       "type" : "local",\n       "baseDir" : "examples/indexing/",\n       "filter" : "wikipedia_data.json"\n      },\n      "inputFormat": {\n        "type": "json"\n      }\n   },\n   "tuningConfig" : {\n     "type" : "index",\n     "partitionsSpec": {\n       "type": "single_dim",\n       "partitionDimension": "country",\n       "targetRowsPerSegment": 5000000\n     }\n   }\n }\n}\n')),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"For more information, see the following pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/29.0.1/ingestion/"},"Ingestion"),": Overview of the Druid ingestion process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/29.0.1/ingestion/native-batch"},"Native batch ingestion"),": Description of the supported native batch indexing tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/29.0.1/ingestion/ingestion-spec"},"Ingestion spec reference"),": Description of the components and properties in the ingestion spec.")))}f.isMDXComponent=!0}}]);