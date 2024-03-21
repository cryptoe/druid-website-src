"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9382],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(a),d=n,f=l["".concat(s,".").concat(d)]||l[d]||u[d]||i;return a?o.createElement(f,r(r({ref:t},m),{},{components:a})):o.createElement(f,r({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:n,r[1]=c;for(var p=2;p<i;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),r=["components"],c={id:"automatic-compaction",title:"Automatic compaction"},s=void 0,p={unversionedId:"data-management/automatic-compaction",id:"data-management/automatic-compaction",title:"Automatic compaction",description:"\x3c!--",source:"@site/docs/29.0.1/data-management/automatic-compaction.md",sourceDirName:"data-management",slug:"/data-management/automatic-compaction",permalink:"/docs/29.0.1/data-management/automatic-compaction",draft:!1,tags:[],version:"current",frontMatter:{id:"automatic-compaction",title:"Automatic compaction"},sidebar:"docs",previous:{title:"Compaction",permalink:"/docs/29.0.1/data-management/compaction"},next:{title:"Manual compaction",permalink:"/docs/29.0.1/data-management/manual-compaction"}},m={},l=[{value:"How Druid manages automatic compaction",id:"how-druid-manages-automatic-compaction",level:2},{value:"Enable automatic compaction",id:"enable-automatic-compaction",level:2},{value:"Web console",id:"web-console",level:3},{value:"Compaction configuration API",id:"compaction-configuration-api",level:3},{value:"Configure automatic compaction",id:"configure-automatic-compaction",level:2},{value:"Set frequency of compaction runs",id:"set-frequency-of-compaction-runs",level:3},{value:"Avoid conflicts with ingestion",id:"avoid-conflicts-with-ingestion",level:2},{value:"Enable concurrent append and replace",id:"enable-concurrent-append-and-replace",level:3},{value:"Skip compaction for latest segments",id:"skip-compaction-for-latest-segments",level:3},{value:"View automatic compaction statistics",id:"view-automatic-compaction-statistics",level:2},{value:"Examples",id:"examples",level:2},{value:"Change segment granularity",id:"change-segment-granularity",level:3},{value:"Update partitioning scheme",id:"update-partitioning-scheme",level:3},{value:"Learn more",id:"learn-more",level:2}],u={toc:l},d="wrapper";function f(e){var t=e.components,c=(0,n.Z)(e,r);return(0,i.kt)(d,(0,o.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Apache Druid, compaction is a special type of ingestion task that reads data from a Druid datasource and writes it back into the same datasource. A common use case for this is to ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/segment-optimization"},"optimally size segments")," after ingestion to improve query performance. Automatic compaction, or auto-compaction, refers to the system for automatic execution of compaction tasks managed by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/coordinator"},"Druid Coordinator"),".\nThis topic guides you through setting up automatic compaction for your Druid cluster. See the ",(0,i.kt)("a",{parentName:"p",href:"#examples"},"examples")," for common use cases for automatic compaction."),(0,i.kt)("h2",{id:"how-druid-manages-automatic-compaction"},"How Druid manages automatic compaction"),(0,i.kt)("p",null,"The Coordinator ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/configuration/#coordinator-operation"},"indexing period"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.coordinator.period.indexingPeriod"),", controls the frequency of compaction tasks.\nThe default indexing period is 30 minutes, meaning that the Coordinator first checks for segments to compact at most 30 minutes from when auto-compaction is enabled.\nThis time period affects other Coordinator duties including merge and conversion tasks.\nTo configure the auto-compaction time period without interfering with ",(0,i.kt)("inlineCode",{parentName:"p"},"indexingPeriod"),", see ",(0,i.kt)("a",{parentName:"p",href:"#set-frequency-of-compaction-runs"},"Set frequency of compaction runs"),"."),(0,i.kt)("p",null,"At every invocation of auto-compaction, the Coordinator initiates a ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/coordinator#segment-search-policy-in-automatic-compaction"},"segment search")," to determine eligible segments to compact.\nWhen there are eligible segments to compact, the Coordinator issues compaction tasks based on available worker capacity.\nIf a compaction task takes longer than the indexing period, the Coordinator waits for it to finish before resuming the period for segment search."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Auto-compaction skips datasources that have a segment granularity of ",(0,i.kt)("inlineCode",{parentName:"p"},"ALL"),".")),(0,i.kt)("p",null,"As a best practice, you should set up auto-compaction for all Druid datasources. You can run compaction tasks manually for cases where you want to allocate more system resources. For example, you may choose to run multiple compaction tasks in parallel to compact an existing datasource for the first time. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/data-management/compaction"},"Compaction")," for additional details and use cases."),(0,i.kt)("h2",{id:"enable-automatic-compaction"},"Enable automatic compaction"),(0,i.kt)("p",null,"You can enable automatic compaction for a datasource using the web console or programmatically via an API.\nThis process differs for manual compaction tasks, which can be submitted from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/web-console"},"Tasks view of the web console")," or the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/api-reference/tasks-api"},"Tasks API"),"."),(0,i.kt)("h3",{id:"web-console"},"Web console"),(0,i.kt)("p",null,"Use the web console to enable automatic compaction for a datasource as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Datasources")," in the top-level navigation."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Compaction")," column, click the edit icon for the datasource to compact."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Compaction config")," dialog, configure the auto-compaction settings. The dialog offers a form view as well as a JSON view. Editing the form updates the JSON specification, and editing the JSON updates the form field, if present. Form fields not present in the JSON indicate default values. You may add additional properties to the JSON for auto-compaction settings not displayed in the form. See ",(0,i.kt)("a",{parentName:"li",href:"#configure-automatic-compaction"},"Configure automatic compaction")," for supported settings for auto-compaction."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Submit"),"."),(0,i.kt)("li",{parentName:"ol"},"Refresh the ",(0,i.kt)("strong",{parentName:"li"},"Datasources")," view. The ",(0,i.kt)("strong",{parentName:"li"},"Compaction")," column for the datasource changes from \u201cNot enabled\u201d to \u201cAwaiting first run.\u201d")),(0,i.kt)("p",null,"The following screenshot shows the compaction config dialog for a datasource with auto-compaction enabled.\n",(0,i.kt)("img",{alt:"Compaction config in web console",src:a(73206).Z,width:"1250",height:"640"})),(0,i.kt)("p",null,"To disable auto-compaction for a datasource, click ",(0,i.kt)("strong",{parentName:"p"},"Delete")," from the ",(0,i.kt)("strong",{parentName:"p"},"Compaction config")," dialog. Druid does not retain your auto-compaction configuration."),(0,i.kt)("h3",{id:"compaction-configuration-api"},"Compaction configuration API"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/api-reference/automatic-compaction-api#manage-automatic-compaction"},"Automatic compaction API")," to configure automatic compaction.\nTo enable auto-compaction for a datasource, create a JSON object with the desired auto-compaction settings.\nSee ",(0,i.kt)("a",{parentName:"p",href:"#configure-automatic-compaction"},"Configure automatic compaction")," for the syntax of an auto-compaction spec.\nSend the JSON object as a payload in a ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/api-reference/automatic-compaction-api#create-or-update-automatic-compaction-configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"POST")," request")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/config/compaction"),".\nThe following example configures auto-compaction for the ",(0,i.kt)("inlineCode",{parentName:"p"},"wikipedia")," datasource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'curl --location --request POST \'http://localhost:8081/druid/coordinator/v1/config/compaction\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "dataSource": "wikipedia",\n    "granularitySpec": {\n        "segmentGranularity": "DAY"\n    }\n}\'\n')),(0,i.kt)("p",null,"To disable auto-compaction for a datasource, send a ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/api-reference/automatic-compaction-api#remove-automatic-compaction-configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"DELETE")," request")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/config/compaction/{dataSource}"),". Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"{dataSource}")," with the name of the datasource for which to disable auto-compaction. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl --location --request DELETE 'http://localhost:8081/druid/coordinator/v1/config/compaction/wikipedia'\n")),(0,i.kt)("h2",{id:"configure-automatic-compaction"},"Configure automatic compaction"),(0,i.kt)("p",null,"You can configure automatic compaction dynamically without restarting Druid.\nThe automatic compaction system uses the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dataSource": <task_datasource>,\n    "ioConfig": <IO config>,\n    "dimensionsSpec": <custom dimensionsSpec>,\n    "transformSpec": <custom transformSpec>,\n    "metricsSpec": <custom metricsSpec>,\n    "tuningConfig": <parallel indexing task tuningConfig>,\n    "granularitySpec": <compaction task granularitySpec>,\n    "skipOffsetFromLatest": <time period to avoid compaction>,\n    "taskPriority": <compaction task priority>,\n    "taskContext": <task context>\n}\n')),(0,i.kt)("p",null,"Most fields in the auto-compaction configuration correlate to a typical ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/ingestion/ingestion-spec"},"Druid ingestion spec"),".\nThe following properties only apply to auto-compaction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skipOffsetFromLatest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"taskPriority")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"taskContext"))),(0,i.kt)("p",null,"Since the automatic compaction system provides a management layer on top of manual compaction tasks,\nthe auto-compaction configuration does not include task-specific properties found in a typical Druid ingestion spec.\nThe following properties are automatically set by the Coordinator:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": Set to ",(0,i.kt)("inlineCode",{parentName:"li"},"compact"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": Generated using the task type, datasource name, interval, and timestamp. The task ID is prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"coordinator-issued"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context"),": Set according to the user-provided ",(0,i.kt)("inlineCode",{parentName:"li"},"taskContext"),".")),(0,i.kt)("p",null,"Compaction tasks typically fetch all ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/data-management/manual-compaction#compaction-io-configuration"},"relevant segments")," prior to launching any subtasks,\n",(0,i.kt)("em",{parentName:"p"},"unless")," the following properties are all set to non-null values. It is strongly recommended to set them to non-null values to\nmaximize performance and minimize disk usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"compact")," tasks launched by auto-compaction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.1/data-management/manual-compaction#compaction-granularity-spec"},(0,i.kt)("inlineCode",{parentName:"a"},"granularitySpec")),", with non-null values for each of ",(0,i.kt)("inlineCode",{parentName:"li"},"segmentGranularity"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"queryGranularity"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"rollup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.1/data-management/manual-compaction#compaction-dimensions-spec"},(0,i.kt)("inlineCode",{parentName:"a"},"dimensionsSpec"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metricsSpec"))),(0,i.kt)("p",null,"For more details on each of the specs in an auto-compaction configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/configuration/#automatic-compaction-dynamic-configuration"},"Automatic compaction dynamic configuration"),"."),(0,i.kt)("h3",{id:"set-frequency-of-compaction-runs"},"Set frequency of compaction runs"),(0,i.kt)("p",null,"If you want the Coordinator to check for compaction more frequently than its indexing period, create a separate group to handle compaction duties.\nSet the time period of the duty group in the ",(0,i.kt)("inlineCode",{parentName:"p"},"coordinator/runtime.properties")," file.\nThe following example shows how to create a duty group named ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction")," and set the auto-compaction period to 1 minute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.coordinator.dutyGroups=["compaction"]\ndruid.coordinator.compaction.duties=["compactSegments"]\ndruid.coordinator.compaction.period=PT60S\n')),(0,i.kt)("h2",{id:"avoid-conflicts-with-ingestion"},"Avoid conflicts with ingestion"),(0,i.kt)("p",null,"Compaction tasks may be interrupted when they interfere with ingestion. For example, this occurs when an ingestion task needs to write data to a segment for a time interval locked for compaction. If there are continuous failures that prevent compaction from making progress, consider one of the following strategies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"#enable-concurrent-append-and-replace"},"concurrent append and replace tasks")," on your datasource and on the ingestion tasks."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"skipOffsetFromLatest")," to reduce the chance of conflicts between ingestion and compaction. See more details in ",(0,i.kt)("a",{parentName:"li",href:"#skip-compaction-for-latest-segments"},"Skip compaction for latest segments"),"."),(0,i.kt)("li",{parentName:"ul"},"Increase the priority value of compaction tasks relative to ingestion tasks. Only recommended for advanced users. This approach can cause ingestion jobs to fail or lag. To change the priority of compaction tasks, set ",(0,i.kt)("inlineCode",{parentName:"li"},"taskPriority")," to the desired priority value in the auto-compaction configuration. For details on the priority values of different task types, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.1/ingestion/tasks#lock-priority"},"Lock priority"),".")),(0,i.kt)("h3",{id:"enable-concurrent-append-and-replace"},"Enable concurrent append and replace"),(0,i.kt)("p",null,"You can use concurrent append and replace to safely replace the existing data in an interval of a datasource while new data is being appended to that interval even during compaction."),(0,i.kt)("p",null,"To do this, you need to update your datasource to allow concurrent append and replace tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you're using the API, include the following ",(0,i.kt)("inlineCode",{parentName:"li"},"taskContext")," property in your API call: ",(0,i.kt)("inlineCode",{parentName:"li"},'"useConcurrentLocks": true')),(0,i.kt)("li",{parentName:"ul"},"If you're using the UI, enable ",(0,i.kt)("strong",{parentName:"li"},"Use concurrent locks (experimental)")," in the ",(0,i.kt)("strong",{parentName:"li"},"Compaction config")," for your datasource.")),(0,i.kt)("p",null,"You'll also need to update your ingestion jobs for the datasource to include the task context ",(0,i.kt)("inlineCode",{parentName:"p"},'"useConcurrentLocks": true'),"."),(0,i.kt)("p",null,"For information on how to do this, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/ingestion/concurrent-append-replace"},"Concurrent append and replace"),"."),(0,i.kt)("h3",{id:"skip-compaction-for-latest-segments"},"Skip compaction for latest segments"),(0,i.kt)("p",null,"The Coordinator compacts segments from newest to oldest. In the auto-compaction configuration, you can set a time period, relative to the end time of the most recent segment, for segments that should not be compacted. Assign this value to ",(0,i.kt)("inlineCode",{parentName:"p"},"skipOffsetFromLatest"),". Note that this offset is not relative to the current time but to the latest segment time. For example, if you want to skip over segments from five days prior to the end time of the most recent segment, assign ",(0,i.kt)("inlineCode",{parentName:"p"},'"skipOffsetFromLatest": "P5D"'),"."),(0,i.kt)("p",null,"To set ",(0,i.kt)("inlineCode",{parentName:"p"},"skipOffsetFromLatest"),", consider how frequently you expect the stream to receive late arriving data. If your stream only occasionally receives late arriving data, the auto-compaction system robustly compacts your data even though data is ingested outside the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipOffsetFromLatest")," window. For most realtime streaming ingestion use cases, it is reasonable to set ",(0,i.kt)("inlineCode",{parentName:"p"},"skipOffsetFromLatest")," to a few hours or a day."),(0,i.kt)("h2",{id:"view-automatic-compaction-statistics"},"View automatic compaction statistics"),(0,i.kt)("p",null,"After the Coordinator has initiated auto-compaction, you can view compaction statistics for the datasource, including the number of bytes, segments, and intervals already compacted and those awaiting compaction. The Coordinator also reports the total bytes, segments, and intervals not eligible for compaction in accordance with its ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/coordinator#segment-search-policy-in-automatic-compaction"},"segment search policy"),"."),(0,i.kt)("p",null,"In the web console, the Datasources view displays auto-compaction statistics. The Tasks view shows the task information for compaction tasks that were triggered by the automatic compaction system."),(0,i.kt)("p",null,"To get statistics by API, send a ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/api-reference/automatic-compaction-api#view-automatic-compaction-status"},(0,i.kt)("inlineCode",{parentName:"a"},"GET")," request")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/compaction/status"),". To filter the results to a particular datasource, pass the datasource name as a query parameter to the request\u2014for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/compaction/status?dataSource=wikipedia"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following examples demonstrate potential use cases in which auto-compaction may improve your Druid performance. See more details in ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/data-management/compaction#compaction-guidelines"},"Compaction strategies"),". The examples in this section do not change the underlying data."),(0,i.kt)("h3",{id:"change-segment-granularity"},"Change segment granularity"),(0,i.kt)("p",null,"You have a stream set up to ingest data with ",(0,i.kt)("inlineCode",{parentName:"p"},"HOUR")," segment granularity into the ",(0,i.kt)("inlineCode",{parentName:"p"},"wikistream")," datasource. You notice that your Druid segments are smaller than the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/segment-optimization"},"recommended segment size")," of 5 million rows per segment. You wish to automatically compact segments to ",(0,i.kt)("inlineCode",{parentName:"p"},"DAY")," granularity while leaving the latest week of data ",(0,i.kt)("em",{parentName:"p"},"not")," compacted because your stream consistently receives data within that time period."),(0,i.kt)("p",null,"The following auto-compaction configuration compacts existing ",(0,i.kt)("inlineCode",{parentName:"p"},"HOUR")," segments into ",(0,i.kt)("inlineCode",{parentName:"p"},"DAY")," segments while leaving the latest week of data not compacted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dataSource": "wikistream",\n  "granularitySpec": {\n    "segmentGranularity": "DAY"\n  },\n  "skipOffsetFromLatest": "P1W",\n}\n')),(0,i.kt)("h3",{id:"update-partitioning-scheme"},"Update partitioning scheme"),(0,i.kt)("p",null,"For your ",(0,i.kt)("inlineCode",{parentName:"p"},"wikipedia")," datasource, you want to optimize segment access when regularly ingesting data without compromising compute time when querying the data. Your ingestion spec for batch append uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/ingestion/native-batch#dynamic-partitioning"},"dynamic partitioning")," to optimize for write-time operations, while your stream ingestion partitioning is configured by the stream service. You want to implement auto-compaction to reorganize the data with a suitable read-time partitioning using ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/ingestion/native-batch#multi-dimension-range-partitioning"},"multi-dimension range partitioning"),". Based on the dimensions frequently accessed in queries, you wish to partition on the following dimensions: ",(0,i.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"countryName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),"."),(0,i.kt)("p",null,"The following auto-compaction configuration compacts updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"wikipedia")," segments to use multi-dimension range partitioning:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dataSource": "wikipedia",\n  "tuningConfig": {\n    "partitionsSpec": {\n      "type": "range",\n      "partitionDimensions": [\n        "channel",\n        "countryName",\n        "namespace"\n      ],\n      "targetRowsPerSegment": 5000000\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,"See the following topics for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.1/data-management/compaction"},"Compaction")," for an overview of compaction in Druid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.1/data-management/manual-compaction"},"Manual compaction")," for how to manually perform compaction tasks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.1/operations/segment-optimization"},"Segment optimization")," for guidance on evaluating and optimizing Druid segment size."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/29.0.1/design/coordinator#automatic-compaction"},"Coordinator process")," for details on how the Coordinator plans compaction tasks.")))}f.isMDXComponent=!0},73206:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/compaction-config-2d5e391fe681a9c978060c383357b531.png"}}]);