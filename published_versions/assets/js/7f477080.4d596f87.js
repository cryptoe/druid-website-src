"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||s;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={id:"kafka-supervisor-operations",title:"Apache Kafka supervisor operations reference",sidebar_label:"Apache Kafka operations",description:"Reference topic for running and maintaining Apache Kafka supervisors"},l=void 0,p={unversionedId:"development/extensions-core/kafka-supervisor-operations",id:"development/extensions-core/kafka-supervisor-operations",title:"Apache Kafka supervisor operations reference",description:"Reference topic for running and maintaining Apache Kafka supervisors",source:"@site/docs/latest/development/extensions-core/kafka-supervisor-operations.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/kafka-supervisor-operations",permalink:"/docs/latest/development/extensions-core/kafka-supervisor-operations",draft:!1,tags:[],version:"current",frontMatter:{id:"kafka-supervisor-operations",title:"Apache Kafka supervisor operations reference",sidebar_label:"Apache Kafka operations",description:"Reference topic for running and maintaining Apache Kafka supervisors"},sidebar:"docs",previous:{title:"Apache Kafka supervisor",permalink:"/docs/latest/development/extensions-core/kafka-supervisor-reference"},next:{title:"Amazon Kinesis",permalink:"/docs/latest/development/extensions-core/kinesis-ingestion"}},u={},d=[{value:"Getting Supervisor Status Report",id:"getting-supervisor-status-report",level:2},{value:"Getting Supervisor Ingestion Stats Report",id:"getting-supervisor-ingestion-stats-report",level:2},{value:"Supervisor Health Check",id:"supervisor-health-check",level:2},{value:"Updating Existing Supervisors",id:"updating-existing-supervisors",level:2},{value:"Suspending and Resuming Supervisors",id:"suspending-and-resuming-supervisors",level:2},{value:"Resetting Supervisors",id:"resetting-supervisors",level:2},{value:"Terminating Supervisors",id:"terminating-supervisors",level:2},{value:"Capacity Planning",id:"capacity-planning",level:2},{value:"Supervisor Persistence",id:"supervisor-persistence",level:2},{value:"Schema/Configuration Changes",id:"schemaconfiguration-changes",level:3},{value:"Deployment Notes on Kafka partitions and Druid segments",id:"deployment-notes-on-kafka-partitions-and-druid-segments",level:2}],h={toc:d},c="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This topic contains operations reference information to run and maintain Apache Kafka supervisors for Apache Druid. It includes descriptions of how some supervisor APIs work within Kafka Indexing Service."),(0,s.kt)("p",null,"For all supervisor APIs, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/operations/api-reference#supervisors"},"Supervisor APIs"),"."),(0,s.kt)("h2",{id:"getting-supervisor-status-report"},"Getting Supervisor Status Report"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET /druid/indexer/v1/supervisor/<supervisorId>/status")," returns a snapshot report of the current state of the tasks managed by the given supervisor. This includes the latest\noffsets as reported by Kafka, the consumer lag per partition, as well as the aggregate lag of all partitions. The\nconsumer lag per partition may be reported as negative values if the supervisor has not received a recent latest offset\nresponse from Kafka. The aggregate lag value will always be >= 0."),(0,s.kt)("p",null,"The status report also contains the supervisor's state and a list of recently thrown exceptions (reported as\n",(0,s.kt)("inlineCode",{parentName:"p"},"recentErrors"),", whose max size can be controlled using the ",(0,s.kt)("inlineCode",{parentName:"p"},"druid.supervisor.maxStoredExceptionEvents")," configuration).\nThere are two fields related to the supervisor's state - ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"detailedState"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," field will always be\none of a small number of generic states that are applicable to any type of supervisor, while the ",(0,s.kt)("inlineCode",{parentName:"p"},"detailedState")," field\nwill contain a more descriptive, implementation-specific state that may provide more insight into the supervisor's\nactivities than the generic ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," field."),(0,s.kt)("p",null,"The list of possible ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," values are: ","[",(0,s.kt)("inlineCode",{parentName:"p"},"PENDING"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"RUNNING"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"SUSPENDED"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"STOPPING"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"UNHEALTHY_SUPERVISOR"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"UNHEALTHY_TASKS"),"]"),(0,s.kt)("p",null,"The list of ",(0,s.kt)("inlineCode",{parentName:"p"},"detailedState")," values and their corresponding ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," mapping is as follows:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Detailed State"),(0,s.kt)("th",{parentName:"tr",align:null},"Corresponding State"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"UNHEALTHY_SUPERVISOR"),(0,s.kt)("td",{parentName:"tr",align:null},"UNHEALTHY_SUPERVISOR"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor has encountered errors on the past ",(0,s.kt)("inlineCode",{parentName:"td"},"druid.supervisor.unhealthinessThreshold")," iterations")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"UNHEALTHY_TASKS"),(0,s.kt)("td",{parentName:"tr",align:null},"UNHEALTHY_TASKS"),(0,s.kt)("td",{parentName:"tr",align:null},"The last ",(0,s.kt)("inlineCode",{parentName:"td"},"druid.supervisor.taskUnhealthinessThreshold")," tasks have all failed")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"UNABLE_TO_CONNECT_TO_STREAM"),(0,s.kt)("td",{parentName:"tr",align:null},"UNHEALTHY_SUPERVISOR"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor is encountering connectivity issues with Kafka and has not successfully connected in the past")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"LOST_CONTACT_WITH_STREAM"),(0,s.kt)("td",{parentName:"tr",align:null},"UNHEALTHY_SUPERVISOR"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor is encountering connectivity issues with Kafka but has successfully connected in the past")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"PENDING (first iteration only)"),(0,s.kt)("td",{parentName:"tr",align:null},"PENDING"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor has been initialized and hasn't started connecting to the stream")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"CONNECTING_TO_STREAM (first iteration only)"),(0,s.kt)("td",{parentName:"tr",align:null},"RUNNING"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor is trying to connect to the stream and update partition data")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"DISCOVERING_INITIAL_TASKS (first iteration only)"),(0,s.kt)("td",{parentName:"tr",align:null},"RUNNING"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor is discovering already-running tasks")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"CREATING_TASKS (first iteration only)"),(0,s.kt)("td",{parentName:"tr",align:null},"RUNNING"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor is creating tasks and discovering state")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"RUNNING"),(0,s.kt)("td",{parentName:"tr",align:null},"RUNNING"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor has started tasks and is waiting for taskDuration to elapse")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"IDLE"),(0,s.kt)("td",{parentName:"tr",align:null},"IDLE"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor is not creating tasks since the input stream has not received any new data and all the existing data is read.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"SUSPENDED"),(0,s.kt)("td",{parentName:"tr",align:null},"SUSPENDED"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor has been suspended")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"STOPPING"),(0,s.kt)("td",{parentName:"tr",align:null},"STOPPING"),(0,s.kt)("td",{parentName:"tr",align:null},"The supervisor is stopping")))),(0,s.kt)("p",null,"On each iteration of the supervisor's run loop, the supervisor completes the following tasks in sequence:\n1) Fetch the list of partitions from Kafka and determine the starting offset for each partition (either based on the\nlast processed offset if continuing, or starting from the beginning or ending of the stream if this is a new topic).\n2) Discover any running indexing tasks that are writing to the supervisor's datasource and adopt them if they match\nthe supervisor's configuration, else signal them to stop.\n3) Send a status request to each supervised task to update our view of the state of the tasks under our supervision.\n4) Handle tasks that have exceeded ",(0,s.kt)("inlineCode",{parentName:"p"},"taskDuration")," and should transition from the reading to publishing state.\n5) Handle tasks that have finished publishing and signal redundant replica tasks to stop.\n6) Handle tasks that have failed and clean up the supervisor's internal state.\n7) Compare the list of healthy tasks to the requested ",(0,s.kt)("inlineCode",{parentName:"p"},"taskCount")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"replicas")," configurations and create additional tasks if required in case supervisor is not idle."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"detailedState")," field will show additional values (those marked with \"first iteration only\") the first time the\nsupervisor executes this run loop after startup or after resuming from a suspension. This is intended to surface\ninitialization-type issues, where the supervisor is unable to reach a stable state (perhaps because it can't connect to\nKafka, it can't read from the Kafka topic, or it can't communicate with existing tasks). Once the supervisor is stable -\nthat is, once it has completed a full execution without encountering any issues - ",(0,s.kt)("inlineCode",{parentName:"p"},"detailedState")," will show a ",(0,s.kt)("inlineCode",{parentName:"p"},"RUNNING"),"\nstate until it is idle, stopped, suspended, or hits a task failure threshold and transitions to an unhealthy state."),(0,s.kt)("h2",{id:"getting-supervisor-ingestion-stats-report"},"Getting Supervisor Ingestion Stats Report"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET /druid/indexer/v1/supervisor/<supervisorId>/stats")," returns a snapshot of the current ingestion row counters for each task being managed by the supervisor, along with moving averages for the row counters."),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/tasks#row-stats"},"Task Reports: Row Stats")," for more information."),(0,s.kt)("h2",{id:"supervisor-health-check"},"Supervisor Health Check"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET /druid/indexer/v1/supervisor/<supervisorId>/health")," returns ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")," if the supervisor is healthy and\n",(0,s.kt)("inlineCode",{parentName:"p"},"503 Service Unavailable")," if it is unhealthy. Healthiness is determined by the supervisor's ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," (as returned by the\n",(0,s.kt)("inlineCode",{parentName:"p"},"/status")," endpoint) and the ",(0,s.kt)("inlineCode",{parentName:"p"},"druid.supervisor.*")," Overlord configuration thresholds."),(0,s.kt)("h2",{id:"updating-existing-supervisors"},"Updating Existing Supervisors"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/supervisor")," can be used to update existing supervisor spec.\nCalling this endpoint when there is already an existing supervisor for the same dataSource will cause:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The running supervisor to signal its managed tasks to stop reading and begin publishing."),(0,s.kt)("li",{parentName:"ul"},"The running supervisor to exit."),(0,s.kt)("li",{parentName:"ul"},"A new supervisor to be created using the configuration provided in the request body. This supervisor will retain the\nexisting publishing tasks and will create new tasks starting at the offsets the publishing tasks ended on.")),(0,s.kt)("p",null,"Seamless schema migrations can thus be achieved by simply submitting the new schema using this endpoint."),(0,s.kt)("h2",{id:"suspending-and-resuming-supervisors"},"Suspending and Resuming Supervisors"),(0,s.kt)("p",null,"You can suspend and resume a supervisor using ",(0,s.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/supervisor/<supervisorId>/suspend")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/supervisor/<supervisorId>/resume"),", respectively."),(0,s.kt)("p",null,"Note that the supervisor itself will still be operating and emitting logs and metrics,\nit will just ensure that no indexing tasks are running until the supervisor is resumed."),(0,s.kt)("h2",{id:"resetting-supervisors"},"Resetting Supervisors"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/supervisor/<supervisorId>/reset")," operation clears stored\noffsets, causing the supervisor to start reading offsets from either the earliest or latest\noffsets in Kafka (depending on the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"useEarliestOffset"),"). After clearing stored\noffsets, the supervisor kills and recreates any active tasks, so that tasks begin reading\nfrom valid offsets. "),(0,s.kt)("p",null,"Use care when using this operation! Resetting the supervisor may cause Kafka messages\nto be skipped or read twice, resulting in missing or duplicate data. "),(0,s.kt)("p",null,"The reason for using this operation is to recover from a state in which the supervisor\nceases operating due to missing offsets. The indexing service keeps track of the latest\npersisted Kafka offsets in order to provide exactly-once ingestion guarantees across\ntasks. Subsequent tasks must start reading from where the previous task completed in\norder for the generated segments to be accepted. If the messages at the expected\nstarting offsets are no longer available in Kafka (typically because the message retention\nperiod has elapsed or the topic was removed and re-created) the supervisor will refuse\nto start and in flight tasks will fail. This operation enables you to recover from this condition. "),(0,s.kt)("p",null,"Note that the supervisor must be running for this endpoint to be available."),(0,s.kt)("h2",{id:"terminating-supervisors"},"Terminating Supervisors"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/supervisor/<supervisorId>/terminate")," operation terminates a supervisor and causes all\nassociated indexing tasks managed by this supervisor to immediately stop and begin\npublishing their segments. This supervisor will still exist in the metadata store and its history may be retrieved\nwith the supervisor history API, but will not be listed in the 'get supervisors' API response nor can it's configuration\nor status report be retrieved. The only way this supervisor can start again is by submitting a functioning supervisor\nspec to the create API."),(0,s.kt)("h2",{id:"capacity-planning"},"Capacity Planning"),(0,s.kt)("p",null,"Kafka indexing tasks run on MiddleManagers and are thus limited by the resources available in the MiddleManager\ncluster. In particular, you should make sure that you have sufficient worker capacity (configured using the\n",(0,s.kt)("inlineCode",{parentName:"p"},"druid.worker.capacity")," property) to handle the configuration in the supervisor spec. Note that worker capacity is\nshared across all types of indexing tasks, so you should plan your worker capacity to handle your total indexing load\n(e.g. batch processing, realtime tasks, merging tasks, etc.). If your workers run out of capacity, Kafka indexing tasks\nwill queue and wait for the next available worker. This may cause queries to return partial results but will not result\nin data loss (assuming the tasks run before Kafka purges those offsets)."),(0,s.kt)("p",null,"A running task will normally be in one of two states: ",(0,s.kt)("em",{parentName:"p"},"reading")," or ",(0,s.kt)("em",{parentName:"p"},"publishing"),". A task will remain in reading state for\n",(0,s.kt)("inlineCode",{parentName:"p"},"taskDuration"),", at which point it will transition to publishing state. A task will remain in publishing state for as long\nas it takes to generate segments, push segments to deep storage, and have them be loaded and served by a Historical process\n(or until ",(0,s.kt)("inlineCode",{parentName:"p"},"completionTimeout")," elapses)."),(0,s.kt)("p",null,"The number of reading tasks is controlled by ",(0,s.kt)("inlineCode",{parentName:"p"},"replicas")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"taskCount"),". In general, there will be ",(0,s.kt)("inlineCode",{parentName:"p"},"replicas * taskCount"),"\nreading tasks, the exception being if taskCount > {numKafkaPartitions} in which case {numKafkaPartitions} tasks will\nbe used instead. When ",(0,s.kt)("inlineCode",{parentName:"p"},"taskDuration")," elapses, these tasks will transition to publishing state and ",(0,s.kt)("inlineCode",{parentName:"p"},"replicas * taskCount"),"\nnew reading tasks will be created. Therefore to allow for reading tasks and publishing tasks to run concurrently, there\nshould be a minimum capacity of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"workerCapacity = 2 * replicas * taskCount\n")),(0,s.kt)("p",null,"This value is for the ideal situation in which there is at most one set of tasks publishing while another set is reading.\nIn some circumstances, it is possible to have multiple sets of tasks publishing simultaneously. This would happen if the\ntime-to-publish (generate segment, push to deep storage, loaded on Historical) > ",(0,s.kt)("inlineCode",{parentName:"p"},"taskDuration"),". This is a valid\nscenario (correctness-wise) but requires additional worker capacity to support. In general, it is a good idea to have\n",(0,s.kt)("inlineCode",{parentName:"p"},"taskDuration")," be large enough that the previous set of tasks finishes publishing before the current set begins."),(0,s.kt)("h2",{id:"supervisor-persistence"},"Supervisor Persistence"),(0,s.kt)("p",null,"When a supervisor spec is submitted via the ",(0,s.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/supervisor")," endpoint, it is persisted in the\nconfigured metadata database. There can only be a single supervisor per dataSource, and submitting a second spec for\nthe same dataSource will overwrite the previous one."),(0,s.kt)("p",null,"When an Overlord gains leadership, either by being started or as a result of another Overlord failing, it will spawn\na supervisor for each supervisor spec in the metadata database. The supervisor will then discover running Kafka indexing\ntasks and will attempt to adopt them if they are compatible with the supervisor's configuration. If they are not\ncompatible because they have a different ingestion spec or partition allocation, the tasks will be killed and the\nsupervisor will create a new set of tasks. In this way, the supervisors are persistent across Overlord restarts and\nfail-overs."),(0,s.kt)("p",null,"A supervisor is stopped via the ",(0,s.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/supervisor/<supervisorId>/terminate")," endpoint. This places a\ntombstone marker in the database (to prevent the supervisor from being reloaded on a restart) and then gracefully\nshuts down the currently running supervisor. When a supervisor is shut down in this way, it will instruct its\nmanaged tasks to stop reading and begin publishing their segments immediately. The call to the shutdown endpoint will\nreturn after all tasks have been signaled to stop but before the tasks finish publishing their segments."),(0,s.kt)("h3",{id:"schemaconfiguration-changes"},"Schema/Configuration Changes"),(0,s.kt)("p",null,"Schema and configuration changes are handled by submitting the new supervisor spec via the same\n",(0,s.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/supervisor")," endpoint used to initially create the supervisor. The Overlord will initiate a\ngraceful shutdown of the existing supervisor which will cause the tasks being managed by that supervisor to stop reading\nand begin publishing their segments. A new supervisor will then be started which will create a new set of tasks that\nwill start reading from the offsets where the previous now-publishing tasks left off, but using the updated schema.\nIn this way, configuration changes can be applied without requiring any pause in ingestion."),(0,s.kt)("h2",{id:"deployment-notes-on-kafka-partitions-and-druid-segments"},"Deployment Notes on Kafka partitions and Druid segments"),(0,s.kt)("p",null,"Druid assigns each Kafka indexing task Kafka partitions. A task writes the events it consumes from Kafka into a single segment for the segment granularity interval until it reaches one of the following: ",(0,s.kt)("inlineCode",{parentName:"p"},"maxRowsPerSegment"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"maxTotalRows")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"intermediateHandoffPeriod")," limit. At this point, the task creates a new partition for this segment granularity to contain subsequent events."),(0,s.kt)("p",null,"The Kafka Indexing Task also does incremental hand-offs. Therefore segments become available as they are ready and you do not have to wait for all segments until the end of  the task duration.  When the task reaches one of ",(0,s.kt)("inlineCode",{parentName:"p"},"maxRowsPerSegment"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"maxTotalRows"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"intermediateHandoffPeriod"),", it hands off all the segments and creates a new new set of segments will be created for further events. This allows the task to run for longer durations without accumulating old segments locally on Middle Manager processes."),(0,s.kt)("p",null,"The Kafka Indexing Service may still produce some small segments. For example, consider the following scenario:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Task duration is 4 hours"),(0,s.kt)("li",{parentName:"ul"},"Segment granularity is set to an HOUR"),(0,s.kt)("li",{parentName:"ul"},"The supervisor was started at 9:10\nAfter 4 hours at 13:10, Druid starts a new set of tasks. The events for the interval 13:00 - 14:00 may be split across existing tasks and the new set of tasks which could result in small segments. To merge them together into new segments of an ideal size (in the range of ~500-700 MB per segment), you can schedule re-indexing tasks, optionally with a different segment granularity.")),(0,s.kt)("p",null,"For more detail, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/operations/segment-optimization"},"Segment size optimization"),".\nThere is also ongoing work to support automatic segment compaction of sharded segments as well as compaction not requiring\nHadoop (see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/pull/5102"},"here"),")."))}m.isMDXComponent=!0}}]);