"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"delete",title:"Data deletion"},s=void 0,d={unversionedId:"data-management/delete",id:"data-management/delete",title:"Data deletion",description:"\x3c!--",source:"@site/docs/latest/data-management/delete.md",sourceDirName:"data-management",slug:"/data-management/delete",permalink:"/docs/latest/data-management/delete",draft:!1,tags:[],version:"current",frontMatter:{id:"delete",title:"Data deletion"},sidebar:"docs",previous:{title:"Data updates",permalink:"/docs/latest/data-management/update"},next:{title:"Schema changes",permalink:"/docs/latest/data-management/schema-changes"}},p={},m=[{value:"By time range, manually",id:"by-time-range-manually",level:2},{value:"By time range, automatically",id:"by-time-range-automatically",level:2},{value:"Specific records",id:"specific-records",level:2},{value:"Entire table",id:"entire-table",level:2},{value:"Permanently (<code>kill</code> task)",id:"permanently-kill-task",level:2}],u={toc:m},c="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"by-time-range-manually"},"By time range, manually"),(0,i.kt)("p",null,"Apache Druid stores data ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design/architecture#datasources-and-segments"},"partitioned by time chunk")," and supports\ndeleting data for time chunks by dropping segments. This is a fast, metadata-only operation."),(0,i.kt)("p",null,"Deletion by time range happens in two steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Segments to be deleted must first be marked as ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/design/architecture#segment-lifecycle"},'"unused"'),". This can\nhappen when a segment is dropped by a ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/operations/rule-configuration"},"drop rule")," or when you manually mark a\nsegment unused through the Coordinator API or web console. This is a soft delete: the data is not available for\nquerying, but the segment files remains in deep storage, and the segment records remains in the metadata store."),(0,i.kt)("li",{parentName:"ol"},'Once a segment is marked "unused", you can use a ',(0,i.kt)("a",{parentName:"li",href:"#kill-task"},(0,i.kt)("inlineCode",{parentName:"a"},"kill")," task")," to permanently delete the segment file from\ndeep storage and remove its record from the metadata store. This is a hard delete: the data is unrecoverable unless\nyou have a backup.")),(0,i.kt)("p",null,"For documentation on disabling segments using the Coordinator API, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/api-reference#coordinator-datasources"},"Coordinator API reference"),"."),(0,i.kt)("p",null,"A data deletion tutorial is available at ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/tutorial-delete-data"},"Tutorial: Deleting data"),"."),(0,i.kt)("h2",{id:"by-time-range-automatically"},"By time range, automatically"),(0,i.kt)("p",null,"Druid supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/rule-configuration"},"load and drop rules"),", which are used to define intervals of time\nwhere data should be preserved, and intervals where data should be discarded. Data that falls under a drop rule is\nmarked unused, in the same manner as if you ",(0,i.kt)("a",{parentName:"p",href:"#by-time-range-manually"},"manually mark that time range unused"),". This is a\nfast, metadata-only operation."),(0,i.kt)("p",null,"Data that is dropped in this way is marked unused, but remains in deep storage. To permanently delete it, use a\n",(0,i.kt)("a",{parentName:"p",href:"#kill-task"},(0,i.kt)("inlineCode",{parentName:"a"},"kill")," task"),"."),(0,i.kt)("h2",{id:"specific-records"},"Specific records"),(0,i.kt)("p",null,"Druid supports deleting specific records using ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/data-management/update#reindex"},"reindexing")," with a filter. The filter specifies which\ndata remains after reindexing, so it must be the inverse of the data you want to delete. Because segments must be\nrewritten to delete data in this way, it can be a time-consuming operation."),(0,i.kt)("p",null,"For example, to delete records where ",(0,i.kt)("inlineCode",{parentName:"p"},"userName")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"'bob'")," with native batch indexing, use a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#transformspec"},(0,i.kt)("inlineCode",{parentName:"a"},"transformSpec"))," with filter ",(0,i.kt)("inlineCode",{parentName:"p"},'{"type": "not", "field": {"type":\n"selector", "dimension": "userName", "value": "bob"}}'),"."),(0,i.kt)("p",null,"To delete the same records using SQL, use ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/multi-stage-query/concepts#replace"},"REPLACE")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE userName <> 'bob'"),"."),(0,i.kt)("p",null,"To reindex using ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/native-batch"},"native batch"),", use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/native-batch-input-sources#druid-input-source"},(0,i.kt)("inlineCode",{parentName:"a"},"druid")," input\nsource"),". If needed,\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#transformspec"},(0,i.kt)("inlineCode",{parentName:"a"},"transformSpec"))," can be used to filter or modify data during the\nreindexing job. To reindex with SQL, use ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/multi-stage-query/reference#replace"},(0,i.kt)("inlineCode",{parentName:"a"},"REPLACE <table> OVERWRITE")),"\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT ... FROM <table>"),". (Druid does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statements.) Any SQL SELECT query can be\nused to filter, modify, or enrich the data during the reindexing job."),(0,i.kt)("p",null,"Data that is deleted in this way is marked unused, but remains in deep storage. To permanently delete it, use a ",(0,i.kt)("a",{parentName:"p",href:"#kill-task"},(0,i.kt)("inlineCode",{parentName:"a"},"kill"),"\ntask"),"."),(0,i.kt)("h2",{id:"entire-table"},"Entire table"),(0,i.kt)("p",null,"Deleting an entire table works the same way as ",(0,i.kt)("a",{parentName:"p",href:"#by-time-range-manually"},"deleting part of a table by time range"),". First,\nmark all segments unused using the Coordinator API or web console. Then, optionally, delete it permanently using a\n",(0,i.kt)("a",{parentName:"p",href:"#kill-task"},(0,i.kt)("inlineCode",{parentName:"a"},"kill")," task"),"."),(0,i.kt)("a",{name:"kill-task"}),(0,i.kt)("h2",{id:"permanently-kill-task"},"Permanently (",(0,i.kt)("inlineCode",{parentName:"h2"},"kill")," task)"),(0,i.kt)("p",null,"Data that has been overwritten or soft-deleted still remains as segments that have been marked unused. You can use a\n",(0,i.kt)("inlineCode",{parentName:"p"},"kill")," task to permanently delete this data."),(0,i.kt)("p",null,"The available grammar is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "kill",\n    "id": <task_id>,\n    "dataSource": <task_datasource>,\n    "interval" : <all_unused_segments_in_this_interval_will_die!>,\n    "context": <task context>\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WARNING:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"kill")," task permanently removes all information about the affected segments from the metadata store and\ndeep storage. This operation cannot be undone."))}k.isMDXComponent=!0}}]);