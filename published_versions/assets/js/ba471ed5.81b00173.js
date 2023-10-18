"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4084],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=n,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},70429:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"tutorial-sql-query-view",title:"Get to know Query view",sidebar_label:"Get to know Query view"},s=void 0,u={unversionedId:"tutorials/tutorial-sql-query-view",id:"tutorials/tutorial-sql-query-view",title:"Get to know Query view",description:"\x3c!--",source:"@site/docs/latest/tutorials/tutorial-sql-query-view.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-sql-query-view",permalink:"/docs/latest/tutorials/tutorial-sql-query-view",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-sql-query-view",title:"Get to know Query view",sidebar_label:"Get to know Query view"},sidebar:"docs",previous:{title:"Kerberized HDFS deep storage",permalink:"/docs/latest/tutorials/tutorial-kerberos-hadoop"},next:{title:"Unnesting arrays",permalink:"/docs/latest/tutorials/tutorial-unnest-arrays"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run a demo query to ingest data",id:"run-a-demo-query-to-ingest-data",level:2},{value:"View and filter query results",id:"view-and-filter-query-results",level:2},{value:"Run aggregate queries",id:"run-aggregate-queries",level:2},{value:"Generate an explain plan",id:"generate-an-explain-plan",level:2},{value:"Try out a few more features",id:"try-out-a-few-more-features",level:2},{value:"Use calculator mode",id:"use-calculator-mode",level:3},{value:"Download query results",id:"download-query-results",level:3},{value:"View query history",id:"view-query-history",level:3},{value:"Further reading",id:"further-reading",level:2}],d={toc:m},c="wrapper";function k(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)(c,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial demonstrates some useful features built into Query view in Apache Druid."),(0,i.kt)("p",null,"Query view lets you run ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL queries")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native (JSON-based) queries")," against ingested data. Try out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/tutorial-jupyter-index#tutorials"},"Introduction to Druid SQL")," tutorial to learn more about Druid SQL."),(0,i.kt)("p",null,"You can use Query view to test and tune queries before you use them in API requests","\u2014","for example, to perform ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/api-reference/sql-ingestion-api"},"SQL-based ingestion"),". You can also ingest data directly in Query view."),(0,i.kt)("p",null,"The tutorial guides you through the steps to ingest sample data and query the ingested data using some Query view features."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you follow the steps in this tutorial, download Druid as described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/"},"quickstart")," and have it running on your local machine. You don't need to have loaded any data."),(0,i.kt)("h2",{id:"run-a-demo-query-to-ingest-data"},"Run a demo query to ingest data"),(0,i.kt)("p",null,"Druid includes demo queries that each demonstrate a different Druid feature","\u2014","for example transforming data during ingestion and sorting ingested data. Each query has detailed comments to help you learn more."),(0,i.kt)("p",null,"In this section you load the demo queries and run a SQL task to ingest sample data into a ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/datasource#table"},"table datasource"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the Druid console at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888"},"http://localhost:8888")," and click ",(0,i.kt)("strong",{parentName:"p"},"Query"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ellipsis at the bottom of the query window and select ",(0,i.kt)("strong",{parentName:"p"},"Load demo queries"),". Note that loading the demo queries replaces all of your current query tabs. The demo queries load in several tabs:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"demo queries",src:a(24461).Z,width:"1250",height:"640"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("strong",{parentName:"p"},"Demo 1")," tab. This query ingests sample data into a datasource called ",(0,i.kt)("strong",{parentName:"p"},"kttm_simple"),". Click the ",(0,i.kt)("strong",{parentName:"p"},"Demo 1")," tab heading again and note the options","\u2014","you can rename, copy, and duplicate tabs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Run")," to ingest the data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When ingestion is complete, Druid displays the time it took to complete the insert query, and the new datasource ",(0,i.kt)("strong",{parentName:"p"},"kttm_simple")," displays in the left pane."))),(0,i.kt)("h2",{id:"view-and-filter-query-results"},"View and filter query results"),(0,i.kt)("p",null,"In this section you run some queries against the new datasource and perform some operations on the query results."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"+")," to the right of the existing tabs to open a new query tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the name of the datasource ",(0,i.kt)("strong",{parentName:"p"},"kttm_simple")," in the left pane to display some automatically generated queries:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"auto queries",src:a(18625).Z,width:"1250",height:"640"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"SELECT * FROM kttm_simple")," and run the query.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the query results pane, click ",(0,i.kt)("strong",{parentName:"p"},"Chrome")," anywhere it appears in the ",(0,i.kt)("strong",{parentName:"p"},"browser")," column then click ",(0,i.kt)("strong",{parentName:"p"},"Filter on: browser = 'Chrome'")," to filter the results."))),(0,i.kt)("h2",{id:"run-aggregate-queries"},"Run aggregate queries"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-aggregations"},"Aggregate functions")," allow you to perform a calculation on a set of values and return a single value."),(0,i.kt)("p",null,"In this section you run some queries using aggregate functions and perform some operations on the results, using shortcut features designed to help you build your query."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a new query tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"kttm_simple")," in the left pane to display the generated queries.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},'SELECT COUNT(*) AS "Count" FROM kttm_simple')," and run the query.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you run a query that contains an aggregate function, additional Query view options become available. "),(0,i.kt)("p",{parentName:"li"},"Click the arrow to the left of the ",(0,i.kt)("strong",{parentName:"p"},"kttm_simple")," datasource to display the columns, then click the ",(0,i.kt)("strong",{parentName:"p"},"country")," column. Several options appear to apply country-based filters and aggregate functions to the query:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"count distinct",src:a(54302).Z,width:"1250",height:"640"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},'Aggregate > COUNT(DISTINCT "country")')," to add this clause to the query. The query now appears as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT COUNT(*) AS "Count",\n   COUNT(DISTINCT "country") AS "dist_country"\nFROM "kttm_simple"\nGROUP BY ()\n')),(0,i.kt)("p",{parentName:"li"},"Note that you can use column names such as ",(0,i.kt)("inlineCode",{parentName:"p"},"dist_country")," in this example as shortcuts when building your query.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the updated query:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"aggregate-query",src:a(89127).Z,width:"1250",height:"640"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Engine: auto (sql-native)")," to display the engine options","\u2014",(0,i.kt)("strong",{parentName:"p"},"native")," for native (JSON-based) queries, ",(0,i.kt)("strong",{parentName:"p"},"sql-native")," for Druid SQL queries, and ",(0,i.kt)("strong",{parentName:"p"},"sql-msq-task")," for SQL-based ingestion. "),(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"auto")," to let Druid select the most efficient engine based on your query input.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the engine menu you can also edit the query context and turn off some query defaults. "),(0,i.kt)("p",{parentName:"li"},"Deselect ",(0,i.kt)("strong",{parentName:"p"},"Use approximate COUNT(DISTINCT)")," and rerun the query. The country count in the results decreases because the computation has become more exact. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-aggregations"},"SQL aggregation functions")," for more information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Query view can provide information about a function, in case you aren't sure exactly what it does."),(0,i.kt)("p",{parentName:"li"},"Delete the contents of the query line ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT(DISTINCT country) AS dist_country")," and type ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT(DISTINCT)")," to replace it. A help dialog for the function displays:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"count distinct help",src:a(50285).Z,width:"1250",height:"640"})),(0,i.kt)("p",{parentName:"li"},"Click outside the help window to close it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can perform actions on calculated columns in the results pane."),(0,i.kt)("p",{parentName:"li"},"Click the results column heading ",(0,i.kt)("strong",{parentName:"p"},'dist_country COUNT(DISTINCT "country")')," to see the available options:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"result columns actions",src:a(4131).Z,width:"1250",height:"640"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Edit column")," and change the ",(0,i.kt)("strong",{parentName:"p"},"Output name")," to ",(0,i.kt)("strong",{parentName:"p"},"Distinct countries"),"."))),(0,i.kt)("h2",{id:"generate-an-explain-plan"},"Generate an explain plan"),(0,i.kt)("p",null,"In this section you generate an explain plan for a query. An explain plan shows the full query details and all of the operations Druid performs to execute it. "),(0,i.kt)("p",null,"Druid optimizes queries of certain ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-translation#query-types"},"types"),"\u2014","see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-translation"},"SQL query translation")," for information on how to interpret an explain plan and use the details to improve query performance."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a new query tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"kttm_simple")," in the left pane to display the generated queries.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"SELECT * FROM kttm_simple")," and run the query.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ellipsis at the bottom of the query window and select ",(0,i.kt)("strong",{parentName:"p"},"Explain SQL query"),". The query plan opens in a new window:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"query plan",src:a(1233).Z,width:"1250",height:"640"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Open in new tab"),". You can review the query details and modify it as required.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the limit from 1001 to 2001:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'"Limit": 2001,\n')),(0,i.kt)("p",{parentName:"li"},"and run the query to confirm that the updated query returns 2,001 results."))),(0,i.kt)("h2",{id:"try-out-a-few-more-features"},"Try out a few more features"),(0,i.kt)("p",null,"In this section you try out a few more useful Query view features."),(0,i.kt)("h3",{id:"use-calculator-mode"},"Use calculator mode"),(0,i.kt)("p",null,"Queries without a FROM clause run in calculator mode","\u2014","this can be useful to help you understand how functions work. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-functions"},"Druid SQL functions")," reference for more information."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a new query tab and enter the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT SQRT(49)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the query to produce the result ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),"."))),(0,i.kt)("h3",{id:"download-query-results"},"Download query results"),(0,i.kt)("p",null,"You can download query results in CSV, TSV, or newline-delimited JSON format."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a new query tab and run a query, for example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT platform\nFROM kttm_simple\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Above the results pane, click the down arrow and select ",(0,i.kt)("strong",{parentName:"p"},"Download results as\u2026 CSV"),". "))),(0,i.kt)("h3",{id:"view-query-history"},"View query history"),(0,i.kt)("p",null,"In any query tab, click the ellipsis at the bottom of the query window and select ",(0,i.kt)("strong",{parentName:"p"},"Query history"),". "),(0,i.kt)("p",null,"You can click the links on the left to view queries run at a particular date and time, and open a previously run query in a new query tab."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,"For more information on ingestion and querying data, see the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/"},"Quickstart")," for information on getting started with Druid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/tutorial-query"},"Tutorial: Querying data")," for example queries to run on Druid data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/"},"Ingestion")," for an overview of ingestion and the ingestion methods available in Druid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/multi-stage-query/"},"SQL-based ingestion")," for an overview of SQL-based ingestion."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/multi-stage-query/examples"},"SQL-based ingestion query examples")," for examples of SQL-based ingestion for various use cases.")))}k.isMDXComponent=!0},89127:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial-sql-aggregate-query-cda2de57ff7e679c2ebb5d1373b3ff62.png"},18625:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial-sql-auto-queries-eb62d0f4f2bb563fddf353a7afbd18a2.png"},50285:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial-sql-count-distinct-help-4c7ab10ef4a68ccd07adc09287bbe3e5.png"},54302:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial-sql-count-distinct-d6020a15c19fff26ed0570fb2a7c7a64.png"},24461:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial-sql-demo-queries-18b129cf96aca4bf1f61903039a0d462.png"},1233:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial-sql-query-plan-f9aae6d8f66389766c16b59aadd1a2f0.png"},4131:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tutorial-sql-result-column-actions-f40697022055f14315241ca973c0847d.png"}}]);