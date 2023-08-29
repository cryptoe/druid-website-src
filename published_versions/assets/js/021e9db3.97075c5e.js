"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={id:"metadata-storage",title:"Metadata storage"},i=void 0,d={unversionedId:"dependencies/metadata-storage",id:"dependencies/metadata-storage",title:"Metadata storage",description:"\x3c!--",source:"@site/docs/26.0.0/dependencies/metadata-storage.md",sourceDirName:"dependencies",slug:"/dependencies/metadata-storage",permalink:"/docs/26.0.0/dependencies/metadata-storage",draft:!1,tags:[],version:"current",frontMatter:{id:"metadata-storage",title:"Metadata storage"},sidebar:"docs",previous:{title:"Deep storage",permalink:"/docs/26.0.0/dependencies/deep-storage"},next:{title:"ZooKeeper",permalink:"/docs/26.0.0/dependencies/zookeeper"}},u={},p=[{value:"Available metadata stores",id:"available-metadata-stores",level:2},{value:"Derby",id:"derby",level:3},{value:"MySQL",id:"mysql",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Adding custom DBCP properties",id:"adding-custom-dbcp-properties",level:2},{value:"Metadata storage tables",id:"metadata-storage-tables",level:2},{value:"Segments table",id:"segments-table",level:3},{value:"Rule table",id:"rule-table",level:3},{value:"Config table",id:"config-table",level:3},{value:"Task-related tables",id:"task-related-tables",level:3},{value:"Audit table",id:"audit-table",level:3},{value:"Metadata storage access",id:"metadata-storage-access",level:2},{value:"Learn more",id:"learn-more",level:2}],c={toc:p},m="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Druid relies on an external dependency for metadata storage.\nDruid uses the metadata store to house various metadata about the system, but not to store the actual data.\nThe metadata store retains all metadata essential for a Druid cluster to work."),(0,o.kt)("p",null,"The metadata store includes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Segments records"),(0,o.kt)("li",{parentName:"ul"},"Rule records"),(0,o.kt)("li",{parentName:"ul"},"Configuration records"),(0,o.kt)("li",{parentName:"ul"},"Task-related tables"),(0,o.kt)("li",{parentName:"ul"},"Audit records")),(0,o.kt)("p",null,"Derby is the default metadata store for Druid, however, it is not suitable for production.\n",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions-core/mysql"},"MySQL")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions-core/postgresql"},"PostgreSQL")," are more production suitable metadata stores.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/#metadata-storage"},"Metadata storage configuration")," for the default configuration settings."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We also recommend you set up a high availability environment because there is no way to restore lost metadata.")),(0,o.kt)("h2",{id:"available-metadata-stores"},"Available metadata stores"),(0,o.kt)("p",null,"Druid supports Derby, MySQL, and PostgreSQL for storing metadata. "),(0,o.kt)("h3",{id:"derby"},"Derby"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For production clusters, consider using MySQL or PostgreSQL instead of Derby.")),(0,o.kt)("p",null,"Configure metadata storage with Derby by setting the following properties in your Druid configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"druid.metadata.storage.type=derby\ndruid.metadata.storage.connector.connectURI=jdbc:derby://localhost:1527//opt/var/druid_state/derby;create=true\n")),(0,o.kt)("h3",{id:"mysql"},"MySQL"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions-core/mysql"},"mysql-metadata-storage extension documentation"),"."),(0,o.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions-core/postgresql"},"postgresql-metadata-storage"),"."),(0,o.kt)("h2",{id:"adding-custom-dbcp-properties"},"Adding custom DBCP properties"),(0,o.kt)("p",null,"You can add custom properties to customize the database connection pool (DBCP) for connecting to the metadata store.\nDefine these properties with a ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.metadata.storage.connector.dbcp.")," prefix.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"druid.metadata.storage.connector.dbcp.maxConnLifetimeMillis=1200000\ndruid.metadata.storage.connector.dbcp.defaultQueryTimeout=30000\n")),(0,o.kt)("p",null,"Certain properties cannot be set through ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.metadata.storage.connector.dbcp.")," and must be set with the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.metadata.storage.connector."),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"username")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"password")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connectURI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"validationQuery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testOnBorrow"))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://commons.apache.org/proper/commons-dbcp/configuration"},"BasicDataSource Configuration")," for a full list of configurable properties."),(0,o.kt)("h2",{id:"metadata-storage-tables"},"Metadata storage tables"),(0,o.kt)("p",null,"This section describes the various tables in metadata storage."),(0,o.kt)("h3",{id:"segments-table"},"Segments table"),(0,o.kt)("p",null,"This is dictated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.metadata.storage.tables.segments")," property."),(0,o.kt)("p",null,'This table stores metadata about the segments that should be available in the system. (This set of segments is called\n"used segments" elsewhere in the documentation and throughout the project.) The table is polled by the\n',(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/coordinator"},"Coordinator")," to determine the set of segments that should be available for querying in the\nsystem. The table has two main functional columns, the other columns are for indexing purposes."),(0,o.kt)("p",null,"Value 1 in the ",(0,o.kt)("inlineCode",{parentName:"p"},"used"),' column means that the segment should be "used" by the cluster (i.e., it should be loaded and\navailable for requests). Value 0 means that the segment should not be loaded into the cluster. We do this as a means of\nunloading segments from the cluster without actually removing their metadata (which allows for simpler rolling back if\nthat is ever an issue).'),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," column stores a JSON blob that has all of the metadata for the segment.\nSome of the data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," column intentionally duplicates data from other columns in the segments table.\nAs an example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," column may take the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n "dataSource":"wikipedia",\n "interval":"2012-05-23T00:00:00.000Z/2012-05-24T00:00:00.000Z",\n "version":"2012-05-24T00:10:00.046Z",\n "loadSpec":{\n    "type":"s3_zip",\n    "bucket":"bucket_for_segment",\n    "key":"path/to/segment/on/s3"\n },\n "dimensions":"comma-delimited-list-of-dimension-names",\n "metrics":"comma-delimited-list-of-metric-names",\n "shardSpec":{"type":"none"},\n "binaryVersion":9,\n "size":size_of_segment,\n "identifier":"wikipedia_2012-05-23T00:00:00.000Z_2012-05-24T00:00:00.000Z_2012-05-23T00:10:00.046Z"\n}\n')),(0,o.kt)("h3",{id:"rule-table"},"Rule table"),(0,o.kt)("p",null,"The rule table stores the various rules about where segments should\nland. These rules are used by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/coordinator"},"Coordinator"),"\nwhen making segment (re-)allocation decisions about the cluster."),(0,o.kt)("h3",{id:"config-table"},"Config table"),(0,o.kt)("p",null,"The config table stores runtime configuration objects. We do not have\nmany of these yet and we are not sure if we will keep this mechanism going\nforward, but it is the beginnings of a method of changing some configuration\nparameters across the cluster at runtime."),(0,o.kt)("h3",{id:"task-related-tables"},"Task-related tables"),(0,o.kt)("p",null,"Task-related tables are created and used by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/overlord"},"Overlord")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/middlemanager"},"MiddleManager")," when managing tasks."),(0,o.kt)("h3",{id:"audit-table"},"Audit table"),(0,o.kt)("p",null,"The audit table stores the audit history for configuration changes\nsuch as rule changes done by ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/coordinator"},"Coordinator")," and other\nconfig changes."),(0,o.kt)("h2",{id:"metadata-storage-access"},"Metadata storage access"),(0,o.kt)("p",null,"Only the following processes access the metadata storage:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Indexing service processes (if any)"),(0,o.kt)("li",{parentName:"ol"},"Realtime processes (if any)"),(0,o.kt)("li",{parentName:"ol"},"Coordinator processes")),(0,o.kt)("p",null,"Thus you need to give permissions (e.g., in AWS security groups) for only these machines to access the metadata storage."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"See the following topics for more information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#metadata-storage"},"Metadata storage configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/operations/clean-metadata-store"},"Automated cleanup for metadata records"))))}g.isMDXComponent=!0}}]);