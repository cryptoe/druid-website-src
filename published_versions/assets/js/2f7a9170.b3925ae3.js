"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"rule-configuration",title:"Using rules to drop and retain data"},d=void 0,s={unversionedId:"operations/rule-configuration",id:"operations/rule-configuration",title:"Using rules to drop and retain data",description:"\x3c!--",source:"@site/docs/26.0.0/operations/rule-configuration.md",sourceDirName:"operations",slug:"/operations/rule-configuration",permalink:"/docs/26.0.0/operations/rule-configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"rule-configuration",title:"Using rules to drop and retain data"},sidebar:"docs",previous:{title:"Rolling updates",permalink:"/docs/26.0.0/operations/rolling-updates"},next:{title:"Working with different versions of Apache Hadoop",permalink:"/docs/26.0.0/operations/other-hadoop"}},u={},p=[{value:"Set retention rules",id:"set-retention-rules",level:2},{value:"Use the web console",id:"use-the-web-console",level:3},{value:"Use the Coordinator API",id:"use-the-coordinator-api",level:3},{value:"Rule structure",id:"rule-structure",level:3},{value:"Load rules",id:"load-rules",level:2},{value:"Forever load rule",id:"forever-load-rule",level:3},{value:"Period load rule",id:"period-load-rule",level:3},{value:"Interval load rule",id:"interval-load-rule",level:3},{value:"Drop rules",id:"drop-rules",level:2},{value:"Forever drop rule",id:"forever-drop-rule",level:3},{value:"Period drop rule",id:"period-drop-rule",level:3},{value:"Period drop before rule",id:"period-drop-before-rule",level:3},{value:"Interval drop rule",id:"interval-drop-rule",level:3},{value:"Broadcast rules",id:"broadcast-rules",level:2},{value:"Forever broadcast rule",id:"forever-broadcast-rule",level:3},{value:"Period broadcast rule",id:"period-broadcast-rule",level:3},{value:"Interval broadcast rule",id:"interval-broadcast-rule",level:3},{value:"Permanently delete data",id:"permanently-delete-data",level:2},{value:"Reload dropped data",id:"reload-dropped-data",level:2},{value:"Learn more",id:"learn-more",level:2}],c={toc:p},h="wrapper";function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)(h,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data retention rules allow you to configure Apache Druid to conform to your data retention policies. Your data retention policies specify which data to retain and which data to drop from the cluster."),(0,o.kt)("p",null,"Druid supports ",(0,o.kt)("a",{parentName:"p",href:"#load-rules"},"load"),", ",(0,o.kt)("a",{parentName:"p",href:"#drop-rules"},"drop"),", and ",(0,o.kt)("a",{parentName:"p",href:"#broadcast-rules"},"broadcast")," rules. Each rule is a JSON object. See the ",(0,o.kt)("a",{parentName:"p",href:"#load-rules"},"rule definitions below")," for details."),(0,o.kt)("p",null,"You can configure a default set of rules to apply to all datasources, and/or you can set specific rules for specific datasources. See ",(0,o.kt)("a",{parentName:"p",href:"#rule-structure"},"rule structure")," to see how rule order impacts the way the Coordinator applies retention rules."),(0,o.kt)("p",null,"You can specify the data to retain or drop in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Forever: all data in the segment."),(0,o.kt)("li",{parentName:"ul"},"Period: segment data specified as an offset from the present time."),(0,o.kt)("li",{parentName:"ul"},"Interval: a fixed time range.")),(0,o.kt)("p",null,"Retention rules are persistent: they remain in effect until you change them. Druid stores retention rules in its ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/dependencies/metadata-storage"},"metadata store"),"."),(0,o.kt)("h2",{id:"set-retention-rules"},"Set retention rules"),(0,o.kt)("p",null,"You can use the Druid ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/web-console"},"web console")," or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/api-reference#coordinator"},"Coordinator API")," to create and manage retention rules."),(0,o.kt)("h3",{id:"use-the-web-console"},"Use the web console"),(0,o.kt)("p",null,"To set retention rules in the Druid web console:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the console home page, click ",(0,o.kt)("strong",{parentName:"li"},"Datasources"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the name of your datasource to open the data window."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Actions > Edit retention rules"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"+New rule"),"."),(0,o.kt)("li",{parentName:"ol"},"Select a rule type and set properties for the rule."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next")," and enter a description for the rule."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save")," to save and apply the rule to the datasource.")),(0,o.kt)("h3",{id:"use-the-coordinator-api"},"Use the Coordinator API"),(0,o.kt)("p",null,"To set one or more default retention rules for all datasources, send a POST request containing a JSON object for each rule to ",(0,o.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/rules/_default"),"."),(0,o.kt)("p",null,"The following example request sets a default forever broadcast rule for all datasources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'http://localhost:8888/druid/coordinator/v1/rules/_default' \\\n--header 'Content-Type: application/json' \\\n--data-raw '[{\n  \"type\": \"broadcastForever\"\n  }]'\n")),(0,o.kt)("p",null,"To set one or more retention rules for a specific datasource, send a POST request containing a JSON object for each rule to ",(0,o.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/rules/{datasourceName}"),"."),(0,o.kt)("p",null,"The following example request sets a period drop rule and a period broadcast rule for the ",(0,o.kt)("inlineCode",{parentName:"p"},"wikipedia")," datasource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8888/druid/coordinator/v1/rules/wikipedia\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'[{\n   "type": "dropByPeriod",\n   "period": "P1M",\n   "includeFuture": true\n   },\n   {\n    "type": "broadcastByPeriod",\n    "period": "P1M",\n    "includeFuture": true\n   }]\'\n')),(0,o.kt)("p",null,"To retrieve all rules for all datasources, send a GET request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/rules"),"\u2014","for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8888/druid/coordinator/v1/rules'\n")),(0,o.kt)("h3",{id:"rule-structure"},"Rule structure"),(0,o.kt)("p",null,"The rules API accepts an array of rules as JSON objects. The JSON object you send in the API request for each rule is specific to the rules types outlined below."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You must pass the entire array of rules, in your desired order, with each API request. Each POST request to the rules API overwrites the existing rules for the specified datasource.")),(0,o.kt)("p",null,"The order of rules is very important. The Coordinator reads rules in the order in which they appear in the rules list. For example, in the following screenshot the Coordinator evaluates data against rule 1, then rule 2, then rule 3:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"retention rules",src:r(5386).Z,width:"1244",height:"640"})),(0,o.kt)("p",null,"The Coordinator cycles through all used segments and matches each segment with the first rule that applies. Each segment can only match a single rule."),(0,o.kt)("p",null,"In the web console you can use the up and down arrows on the right side of the interface to change the order of the rules."),(0,o.kt)("h2",{id:"load-rules"},"Load rules"),(0,o.kt)("p",null,"Load rules define how Druid assigns segments to ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/mixed-workloads#historical-tiering"},"historical process tiers"),", and how many replicas of a segment exist in each tier."),(0,o.kt)("p",null,"If you have a single tier, Druid automatically names the tier ",(0,o.kt)("inlineCode",{parentName:"p"},"_default")," and loads all segments onto it. If you define an additional tier, you must define a load rule to specify which segments to load on that tier. Until you define a load rule, your new tier remains empty."),(0,o.kt)("h3",{id:"forever-load-rule"},"Forever load rule"),(0,o.kt)("p",null,"The forever load rule assigns all datasource segments to specified tiers. It is the default rule Druid applies to datasources. Forever load rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"loadForever"),"."),(0,o.kt)("p",null,"The following example places one replica of each segment on a custom tier named ",(0,o.kt)("inlineCode",{parentName:"p"},"hot"),", and another single replica on the default tier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "loadForever",\n  "tieredReplicants": {\n    "hot": 1,\n    "_default_tier": 1\n  }\n}\n')),(0,o.kt)("p",null,"Set the following property:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tieredReplicants"),": a map of tier names to the number of segment replicas for that tier.")),(0,o.kt)("h3",{id:"period-load-rule"},"Period load rule"),(0,o.kt)("p",null,"You can use a period load rule to assign segment data in a specific period to a tier. Druid compares a segment's interval to the period you specify in the rule and loads the matching data."),(0,o.kt)("p",null,"Period load rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"loadByPeriod"),". The following example places one replica of data in a one-month period on a custom tier named ",(0,o.kt)("inlineCode",{parentName:"p"},"hot"),", and another single replica on the default tier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "loadByPeriod",\n  "period": "P1M",\n  "includeFuture": true,\n  "tieredReplicants": {\n      "hot": 1,\n      "_default_tier": 1\n  }\n}\n')),(0,o.kt)("p",null,"Set the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"period"),": a JSON object representing ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," periods. The period is from some time in the past to the present, or into the future if ",(0,o.kt)("inlineCode",{parentName:"p"},"includeFuture")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"includeFuture"),": a boolean flag to instruct Druid to match a segment if:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the segment interval overlaps the rule interval, or"),(0,o.kt)("li",{parentName:"ul"},"the segment interval starts any time after the rule interval starts.")),(0,o.kt)("p",{parentName:"li"},'You can use this property to load segments with future start and end dates, where "future" is relative to the time when the Coordinator evaluates data against the rule. Defaults to ',(0,o.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"tieredReplicants"),": a map of tier names to the number of segment replicas for that tier."))),(0,o.kt)("h3",{id:"interval-load-rule"},"Interval load rule"),(0,o.kt)("p",null,"You can use an interval rule to assign a specific range of data to a tier. For example, analysts may typically work with the complete data set for all of last week and not so much with the data for the current week."),(0,o.kt)("p",null,"Interval load rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"loadByInterval"),". The following example places one replica of data matching the specified interval on a custom tier named ",(0,o.kt)("inlineCode",{parentName:"p"},"hot"),", and another single replica on the default tier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "loadByInterval",\n  "interval": "2012-01-01/2013-01-01",\n  "tieredReplicants": {\n    "hot": 1,\n    "_default_tier": 1\n  }\n}\n')),(0,o.kt)("p",null,"Set the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"interval"),": the load interval specified as an ISO-8601 ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," range encoded as a string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tieredReplicants"),": a map of tier names to the number of segment replicas for that tier.")),(0,o.kt)("h2",{id:"drop-rules"},"Drop rules"),(0,o.kt)("p",null,"Drop rules define when Druid drops segments from the cluster. Druid keeps dropped data in deep storage. Note that if you enable automatic cleanup of unused segments, or you run a kill task, Druid deletes the data from deep storage. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/data-management/delete"},"Data deletion")," for more information on deleting data."),(0,o.kt)("p",null,"If you want to use a ",(0,o.kt)("a",{parentName:"p",href:"#load-rules"},"load rule")," to retain only data from a defined period of time, you must also define a drop rule. If you don't define a drop rule, Druid retains data that doesn't lie within your defined period according to the default rule, ",(0,o.kt)("inlineCode",{parentName:"p"},"loadForever"),"."),(0,o.kt)("h3",{id:"forever-drop-rule"},"Forever drop rule"),(0,o.kt)("p",null,"The forever drop rule drops all segment data from the cluster. If you configure a set of rules with a forever drop rule as the last rule, Druid drops any segment data that remains after it evaluates the higher priority rules."),(0,o.kt)("p",null,"Forever drop rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"dropForever"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "dropForever",\n}\n')),(0,o.kt)("h3",{id:"period-drop-rule"},"Period drop rule"),(0,o.kt)("p",null,"Druid compares a segment's interval to the period you specify in the rule and drops the matching data. The rule matches if the period contains the segment interval. This rule always drops recent data."),(0,o.kt)("p",null,"Period drop rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"dropByPeriod")," and the following JSON structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "dropByPeriod",\n  "period": "P1M",\n  "includeFuture": true,\n}\n')),(0,o.kt)("p",null,"Set the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"period"),": a JSON object representing ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," periods. The period is from some time in the past to the future or to the current time, depending on the ",(0,o.kt)("inlineCode",{parentName:"p"},"includeFuture")," flag.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"includeFuture"),": a boolean flag to instruct Druid to match a segment if one of the following conditions apply:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the segment interval overlaps the rule interval"),(0,o.kt)("li",{parentName:"ul"},"the segment interval starts any time after the rule interval starts")),(0,o.kt)("p",{parentName:"li"},'You can use this property to drop segments with future start and end dates, where "future" is relative to the time when the Coordinator evaluates data against the rule. Defaults to ',(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,o.kt)("h3",{id:"period-drop-before-rule"},"Period drop before rule"),(0,o.kt)("p",null,"Druid compares a segment's interval to the period you specify in the rule and drops the matching data. The rule matches if the segment interval is before the specified period."),(0,o.kt)("p",null,"If you only want to retain recent data, you can use this rule to drop old data before a specified period, and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"loadForever")," rule to retain the data that follows it. Note that the rule combination ",(0,o.kt)("inlineCode",{parentName:"p"},"dropBeforeByPeriod")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"loadForever")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"loadByPeriod(includeFuture = true)")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"dropForever"),"."),(0,o.kt)("p",null,"Period drop rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"dropBeforeByPeriod")," and the following JSON structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "dropBeforeByPeriod",\n  "period": "P1M"\n}\n')),(0,o.kt)("p",null,"Set the following property:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"period"),": a JSON object representing ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," periods.")),(0,o.kt)("h3",{id:"interval-drop-rule"},"Interval drop rule"),(0,o.kt)("p",null,"You can use a drop interval rule to prevent Druid from loading a specified range of data onto any tier. The range is typically your oldest data. The dropped data resides in cold storage, but is not queryable. If you need to query the data, update or remove the interval drop rule so that Druid reloads the data."),(0,o.kt)("p",null,"Interval drop rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"dropByInterval")," and the following JSON structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "dropByInterval",\n  "interval": "2012-01-01/2013-01-01"\n}\n')),(0,o.kt)("p",null,"Set the following property:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"interval"),": the drop interval specified as an ISO-8601 ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," range encoded as a string.")),(0,o.kt)("h2",{id:"broadcast-rules"},"Broadcast rules"),(0,o.kt)("p",null,"Druid extensions use broadcast rules to load segment data onto all brokers in the cluster. Apply broadcast rules in a test environment, not in production."),(0,o.kt)("h3",{id:"forever-broadcast-rule"},"Forever broadcast rule"),(0,o.kt)("p",null,"The forever broadcast rule loads all segment data in your datasources onto all brokers in the cluster."),(0,o.kt)("p",null,"Forever broadcast rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastForever"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "broadcastForever",\n}\n')),(0,o.kt)("h3",{id:"period-broadcast-rule"},"Period broadcast rule"),(0,o.kt)("p",null,"Druid compares a segment's interval to the period you specify in the rule and loads the matching data onto the brokers in the cluster."),(0,o.kt)("p",null,"Period broadcast rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastByPeriod")," and the following JSON structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "broadcastByPeriod",\n  "period": "P1M",\n  "includeFuture": true,\n}\n')),(0,o.kt)("p",null,"Set the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"period"),": a JSON object representing ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," periods. The period is from some time in the past to the future or to the current time, depending on the ",(0,o.kt)("inlineCode",{parentName:"p"},"includeFuture")," flag.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"includeFuture"),": a boolean flag to instruct Druid to match a segment if one of the following conditions apply:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the segment interval overlaps the rule interval"),(0,o.kt)("li",{parentName:"ul"},"the segment interval starts any time after the rule interval starts.")),(0,o.kt)("p",{parentName:"li"},'You can use this property to broadcast segments with future start and end dates, where "future" is relative to the time when the Coordinator evaluates data against the rule. Defaults to ',(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,o.kt)("h3",{id:"interval-broadcast-rule"},"Interval broadcast rule"),(0,o.kt)("p",null,"An interval broadcast rule loads a specific range of data onto the brokers in the cluster."),(0,o.kt)("p",null,"Interval broadcast rules have type ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastByInterval")," and the following JSON structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "broadcastByInterval",\n  "interval": "2012-01-01/2013-01-01"\n}\n')),(0,o.kt)("p",null,"Set the following property:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"interval"),": the broadcast interval specified as an ISO-8601 ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," range encoded as a string.")),(0,o.kt)("h2",{id:"permanently-delete-data"},"Permanently delete data"),(0,o.kt)("p",null,"Druid can fully drop data from the cluster, wipe the metadata store entry, and remove the data from deep storage for any segments marked ",(0,o.kt)("inlineCode",{parentName:"p"},"unused"),". Note that Druid always marks segments dropped from the cluster by rules as ",(0,o.kt)("inlineCode",{parentName:"p"},"unused"),". You can submit a ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/ingestion/tasks"},"kill task")," to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/overlord"},"Overlord")," to do this."),(0,o.kt)("h2",{id:"reload-dropped-data"},"Reload dropped data"),(0,o.kt)("p",null,"You can't use a single rule to reload data Druid has dropped from a cluster."),(0,o.kt)("p",null,"To reload dropped data:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set your retention period","\u2014","for example, change the retention period from one month to two months."),(0,o.kt)("li",{parentName:"ol"},"Use the web console or the API to mark all segments belonging to the datasource as ",(0,o.kt)("inlineCode",{parentName:"li"},"used"),".")),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"For more information about using retention rules in Druid, see the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/tutorials/tutorial-retention"},"Tutorial: Configuring data retention")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/operations/mixed-workloads"},"Configure Druid for mixed workloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/router"},"Router process"))))}m.isMDXComponent=!0},5386:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/retention-rules-74b430b4f777a0bdcbb600e3b6cc4b61.png"}}]);