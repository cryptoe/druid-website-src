"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"cloudfiles",title:"Rackspace Cloud Files"},p=void 0,d={unversionedId:"development/extensions-contrib/cloudfiles",id:"development/extensions-contrib/cloudfiles",title:"Rackspace Cloud Files",description:"\x3c!--",source:"@site/docs/29.0.1/development/extensions-contrib/cloudfiles.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/cloudfiles",permalink:"/docs/29.0.1/development/extensions-contrib/cloudfiles",draft:!1,tags:[],version:"current",frontMatter:{id:"cloudfiles",title:"Rackspace Cloud Files"}},s={},u=[{value:"Deep Storage",id:"deep-storage",level:2},{value:"Firehose",id:"firehose",level:2},{value:"StaticCloudFilesFirehose",id:"staticcloudfilesfirehose",level:4}],c={toc:u},m="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To use this Apache Druid extension, ",(0,l.kt)("a",{parentName:"p",href:"/docs/29.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,l.kt)("inlineCode",{parentName:"p"},"druid-cloudfiles-extensions")," in the extensions load list."),(0,l.kt)("h2",{id:"deep-storage"},"Deep Storage"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.rackspace.com/cloud/files/"},"Rackspace Cloud Files")," is another option for deep storage. This requires some additional Druid configuration."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,l.kt)("td",{parentName:"tr",align:null},"cloudfiles"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.region")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud Files region."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.container")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud Files container name."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.basePath")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud Files base path to use in the container."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.operationMaxRetries")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of tries before cancel a Rackspace operation."),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.cloudfiles.userName")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud username"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.cloudfiles.apiKey")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Rackspace Cloud API key."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.cloudfiles.provider")),(0,l.kt)("td",{parentName:"tr",align:null},"rackspace-cloudfiles-us,rackspace-cloudfiles-uk"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the provider depending on the region."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.cloudfiles.useServiceNet")),(0,l.kt)("td",{parentName:"tr",align:null},"true,false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to use the internal service net."),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h2",{id:"firehose"},"Firehose"),(0,l.kt)("a",{name:"firehose"}),(0,l.kt)("h4",{id:"staticcloudfilesfirehose"},"StaticCloudFilesFirehose"),(0,l.kt)("p",null,"This firehose ingests events, similar to the StaticAzureBlobStoreFirehose, but from Rackspace's Cloud Files."),(0,l.kt)("p",null,"Data is newline delimited, with one JSON object per line and parsed as per the ",(0,l.kt)("inlineCode",{parentName:"p"},"InputRowParser")," configuration."),(0,l.kt)("p",null,"The storage account is shared with the one used for Rackspace's Cloud Files deep storage functionality, but blobs can be in a different region and container."),(0,l.kt)("p",null,"As with the Azure blobstore, it is assumed to be gzipped if the extension ends in .gz"),(0,l.kt)("p",null,"This firehose is ",(0,l.kt)("em",{parentName:"p"},"splittable")," and can be used by ",(0,l.kt)("a",{parentName:"p",href:"/docs/29.0.1/ingestion/native-batch"},"native parallel index tasks"),".\nSince each split represents an object in this firehose, each worker task of ",(0,l.kt)("inlineCode",{parentName:"p"},"index_parallel")," will read an object."),(0,l.kt)("p",null,"Sample spec:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"firehose" : {\n    "type" : "static-cloudfiles",\n    "blobs": [\n        {\n          "region": "DFW"\n          "container": "container",\n          "path": "/path/to/your/file.json"\n        },\n        {\n          "region": "ORD"\n          "container": "anothercontainer",\n          "path": "/another/path.json"\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"This firehose provides caching and prefetching features. In IndexTask, a firehose can be read twice if intervals or\nshardSpecs are not specified, and, in this case, caching can be useful. Prefetching is preferred when direct scan of objects is slow."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"This should be ",(0,l.kt)("inlineCode",{parentName:"td"},"static-cloudfiles"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blobs"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON array of Cloud Files blobs."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxCacheCapacityBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum size of the cache space in bytes. 0 means disabling cache."),(0,l.kt)("td",{parentName:"tr",align:null},"1073741824"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxCacheCapacityBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum size of the cache space in bytes. 0 means disabling cache. Cached files are not removed until the ingestion task completes."),(0,l.kt)("td",{parentName:"tr",align:null},"1073741824"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxFetchCapacityBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum size of the fetch space in bytes. 0 means disabling prefetch. Prefetched files are removed immediately once they are read."),(0,l.kt)("td",{parentName:"tr",align:null},"1073741824"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fetchTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout for fetching a Cloud Files object."),(0,l.kt)("td",{parentName:"tr",align:null},"60000"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxFetchRetry"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum retry for fetching a Cloud Files object."),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("p",null,"Cloud Files Blobs:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the Cloud Files container"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"The path where data is located."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))))}k.isMDXComponent=!0}}]);