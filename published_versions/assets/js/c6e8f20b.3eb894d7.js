"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7006],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"datasketches-quantiles",title:"DataSketches Quantiles Sketch module"},l=void 0,u={unversionedId:"development/extensions-core/datasketches-quantiles",id:"development/extensions-core/datasketches-quantiles",title:"DataSketches Quantiles Sketch module",description:"\x3c!--",source:"@site/docs/27.0.0/development/extensions-core/datasketches-quantiles.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/datasketches-quantiles",permalink:"/docs/27.0.0/development/extensions-core/datasketches-quantiles",draft:!1,tags:[],version:"current",frontMatter:{id:"datasketches-quantiles",title:"DataSketches Quantiles Sketch module"}},p={},c=[{value:"Aggregator",id:"aggregator",level:2},{value:"Post aggregators",id:"post-aggregators",level:2},{value:"Quantile",id:"quantile",level:3},{value:"Quantiles",id:"quantiles",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Rank",id:"rank",level:3},{value:"CDF",id:"cdf",level:3},{value:"Sketch summary",id:"sketch-summary",level:3}],d={toc:c},h="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This module provides Apache Druid aggregators based on numeric quantiles DoublesSketch from ",(0,o.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/"},"Apache DataSketches")," library. Quantiles sketch is a mergeable streaming algorithm to estimate the distribution of values, and approximately answer queries about the rank of a value, probability mass function of the distribution (PMF) or histogram, cumulative distribution function (CDF), and quantiles (median, min, max, 95th percentile and such). See ",(0,o.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Quantiles/QuantilesOverview"},"Quantiles Sketch Overview"),"."),(0,o.kt)("p",null,"There are three major modes of operation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ingesting sketches built outside of Druid (say, with Pig or Hive)"),(0,o.kt)("li",{parentName:"ol"},"Building sketches from raw data during ingestion"),(0,o.kt)("li",{parentName:"ol"},"Building sketches from raw data at query time")),(0,o.kt)("p",null,"To use this aggregator, make sure you ",(0,o.kt)("a",{parentName:"p",href:"/docs/27.0.0/configuration/extensions#loading-extensions"},"include")," the extension in your config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-datasketches"]\n')),(0,o.kt)("p",null,"For additional sketch types supported in Druid, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/27.0.0/development/extensions-core/datasketches-extension"},"DataSketches extension"),"."),(0,o.kt)("h2",{id:"aggregator"},"Aggregator"),(0,o.kt)("p",null,"The result of the aggregation is a DoublesSketch that is the union of all sketches either built from raw data or read from the segments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "quantilesDoublesSketch",\n  "name" : <output_name>,\n  "fieldName" : <metric_name>,\n  "k": <parameter that controls size and accuracy>\n }\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:null},'This string should always be "quantilesDoublesSketch"'),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"String representing the output column to store sketch values."),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fieldName")),(0,o.kt)("td",{parentName:"tr",align:null},"A string for the name of the input field (can contain sketches or raw numeric values)."),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"k")),(0,o.kt)("td",{parentName:"tr",align:null},"Parameter that determines the accuracy and size of the sketch. Higher k means higher accuracy but more space to store sketches. Must be a power of 2 from 2 to 32768. See ",(0,o.kt)("a",{parentName:"td",href:"https://datasketches.apache.org/docs/Quantiles/OrigQuantilesSketch"},"accuracy information")," in the DataSketches documentation for details."),(0,o.kt)("td",{parentName:"tr",align:null},"no, defaults to 128")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"maxStreamLength")),(0,o.kt)("td",{parentName:"tr",align:null},"This parameter defines the number of items that can be presented to each sketch before it may need to move from off-heap to on-heap memory. This is relevant to query types that use off-heap memory, including ",(0,o.kt)("a",{parentName:"td",href:"/docs/27.0.0/querying/topnquery"},"TopN")," and ",(0,o.kt)("a",{parentName:"td",href:"/docs/27.0.0/querying/groupbyquery"},"GroupBy"),". Ideally, should be set high enough such that most sketches can stay off-heap."),(0,o.kt)("td",{parentName:"tr",align:null},"no, defaults to 1000000000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"shouldFinalize")),(0,o.kt)("td",{parentName:"tr",align:null},"Return the final double type representing the estimate rather than the intermediate sketch type itself. In addition to controlling the finalization of this aggregator, you can control whether all aggregators are finalized with the query context parameters ",(0,o.kt)("a",{parentName:"td",href:"/docs/27.0.0/querying/query-context"},(0,o.kt)("inlineCode",{parentName:"a"},"finalize"))," and ",(0,o.kt)("a",{parentName:"td",href:"/docs/27.0.0/querying/sql-query-context"},(0,o.kt)("inlineCode",{parentName:"a"},"sqlFinalizeOuterSketches")),"."),(0,o.kt)("td",{parentName:"tr",align:null},"no, defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"))))),(0,o.kt)("h2",{id:"post-aggregators"},"Post aggregators"),(0,o.kt)("h3",{id:"quantile"},"Quantile"),(0,o.kt)("p",null,"This returns an approximation to the value that would be preceded by a given fraction of a hypothetical sorted version of the input stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "quantilesDoublesSketchToQuantile",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>,\n  "fraction" : <fractional position in the hypothetical sorted stream, number from 0 to 1 inclusive>\n}\n')),(0,o.kt)("h3",{id:"quantiles"},"Quantiles"),(0,o.kt)("p",null,"This returns an array of quantiles corresponding to a given array of fractions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "quantilesDoublesSketchToQuantiles",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>,\n  "fractions" : <array of fractional positions in the hypothetical sorted stream, number from 0 to 1 inclusive>\n}\n')),(0,o.kt)("h3",{id:"histogram"},"Histogram"),(0,o.kt)("p",null,"This returns an approximation to the histogram given an array of split points that define the histogram bins or a number of bins (not both). An array of ",(0,o.kt)("i",null,"m")," unique, monotonically increasing split points divide the real number line into ",(0,o.kt)("i",null,"m+1")," consecutive disjoint intervals. The definition of an interval is inclusive of the left split point and exclusive of the right split point. If the number of bins is specified instead of split points, the interval between the minimum and maximum values is divided into the given number of equally-spaced bins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "quantilesDoublesSketchToHistogram",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>,\n  "splitPoints" : <array of split points (optional)>,\n  "numBins" : <number of bins (optional, defaults to 10)>\n}\n')),(0,o.kt)("h3",{id:"rank"},"Rank"),(0,o.kt)("p",null,"This returns an approximation to the rank of a given value that is the fraction of the distribution less than that value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "quantilesDoublesSketchToRank",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>,\n  "value" : <value>\n}\n')),(0,o.kt)("h3",{id:"cdf"},"CDF"),(0,o.kt)("p",null,"This returns an approximation to the Cumulative Distribution Function given an array of split points that define the edges of the bins. An array of ",(0,o.kt)("i",null,"m")," unique, monotonically increasing split points divide the real number line into ",(0,o.kt)("i",null,"m+1")," consecutive disjoint intervals. The definition of an interval is inclusive of the left split point and exclusive of the right split point. The resulting array of fractions can be viewed as ranks of each split point with one additional rank that is always 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "quantilesDoublesSketchToCDF",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>,\n  "splitPoints" : <array of split points>\n}\n')),(0,o.kt)("h3",{id:"sketch-summary"},"Sketch summary"),(0,o.kt)("p",null,"This returns a summary of the sketch that can be used for debugging. This is the result of calling toString() method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "quantilesDoublesSketchToString",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>\n}\n')))}m.isMDXComponent=!0}}]);