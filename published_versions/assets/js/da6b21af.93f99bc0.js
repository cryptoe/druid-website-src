"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8321],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):d(d({},t),e)),o},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(o),h=r,g=p["".concat(l,".").concat(h)]||p[h]||c[h]||n;return o?a.createElement(g,d(d({ref:t},u),{},{components:o})):a.createElement(g,d({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,d=new Array(n);d[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,d[1]=i;for(var s=2;s<n;s++)d[s]=o[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},41927:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),d=["components"],i={id:"tutorial-batch-hadoop",title:"Load batch data using Apache Hadoop",sidebar_label:"Load from Apache Hadoop"},l=void 0,s={unversionedId:"tutorials/tutorial-batch-hadoop",id:"tutorials/tutorial-batch-hadoop",title:"Load batch data using Apache Hadoop",description:"\x3c!--",source:"@site/docs/29.0.1/tutorials/tutorial-batch-hadoop.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-batch-hadoop",permalink:"/docs/29.0.1/tutorials/tutorial-batch-hadoop",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-batch-hadoop",title:"Load batch data using Apache Hadoop",sidebar_label:"Load from Apache Hadoop"},sidebar:"docs",previous:{title:"Load from Apache Kafka",permalink:"/docs/29.0.1/tutorials/tutorial-kafka"},next:{title:"Query data",permalink:"/docs/29.0.1/tutorials/tutorial-query"}},u={},p=[{value:"Install Docker",id:"install-docker",level:2},{value:"Build the Hadoop docker image",id:"build-the-hadoop-docker-image",level:2},{value:"Setup the Hadoop docker cluster",id:"setup-the-hadoop-docker-cluster",level:2},{value:"Create temporary shared directory",id:"create-temporary-shared-directory",level:3},{value:"Configure /etc/hosts",id:"configure-etchosts",level:3},{value:"Start the Hadoop container",id:"start-the-hadoop-container",level:3},{value:"Accessing the Hadoop container shell",id:"accessing-the-hadoop-container-shell",level:4},{value:"Copy input data to the Hadoop container",id:"copy-input-data-to-the-hadoop-container",level:3},{value:"Setup HDFS directories",id:"setup-hdfs-directories",level:3},{value:"Configure Druid to use Hadoop",id:"configure-druid-to-use-hadoop",level:2},{value:"Copy Hadoop configuration to Druid classpath",id:"copy-hadoop-configuration-to-druid-classpath",level:3},{value:"Update Druid segment and log storage",id:"update-druid-segment-and-log-storage",level:3},{value:"Disable local deep storage and enable HDFS deep storage",id:"disable-local-deep-storage-and-enable-hdfs-deep-storage",level:4},{value:"Disable local log storage and enable HDFS log storage",id:"disable-local-log-storage-and-enable-hdfs-log-storage",level:4},{value:"Restart Druid cluster",id:"restart-druid-cluster",level:3},{value:"Load batch data",id:"load-batch-data",level:2},{value:"Querying your data",id:"querying-your-data",level:2},{value:"Cleanup",id:"cleanup",level:2},{value:"Further reading",id:"further-reading",level:2}],c={toc:p},h="wrapper";function g(e){var t=e.components,o=(0,r.Z)(e,d);return(0,n.kt)(h,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial shows you how to load data files into Apache Druid using a remote Hadoop cluster."),(0,n.kt)("p",null,"For this tutorial, we'll assume that you've already completed the previous\n",(0,n.kt)("a",{parentName:"p",href:"/docs/29.0.1/tutorials/tutorial-batch"},"batch ingestion tutorial")," using Druid's native batch ingestion system and are using the\nautomatic single-machine configuration as described in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/single-server"},"quickstart"),"."),(0,n.kt)("h2",{id:"install-docker"},"Install Docker"),(0,n.kt)("p",null,"This tutorial requires ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," to be installed on the tutorial machine."),(0,n.kt)("p",null,"Once the Docker install is complete, please proceed to the next steps in the tutorial."),(0,n.kt)("h2",{id:"build-the-hadoop-docker-image"},"Build the Hadoop docker image"),(0,n.kt)("p",null,"For this tutorial, we've provided a Dockerfile for a Hadoop 3.3.6 cluster, which we'll use to run the batch indexing task."),(0,n.kt)("p",null,"This Dockerfile and related files are located at ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/hadoop/docker"),"."),(0,n.kt)("p",null,'From the apache-druid-29.0.1 package root, run the following commands to build a Docker image named "druid-hadoop-demo" with version tag "3.3.6":'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd quickstart/tutorial/hadoop/docker\ndocker build -t druid-hadoop-demo:3.3.6 .\n")),(0,n.kt)("p",null,"This will start building the Hadoop image. Once the image build is done, you should see the message ",(0,n.kt)("inlineCode",{parentName:"p"},"Successfully tagged druid-hadoop-demo:3.3.6")," printed to the console."),(0,n.kt)("h2",{id:"setup-the-hadoop-docker-cluster"},"Setup the Hadoop docker cluster"),(0,n.kt)("h3",{id:"create-temporary-shared-directory"},"Create temporary shared directory"),(0,n.kt)("p",null,"We'll need a shared folder between the host and the Hadoop container for transferring some files."),(0,n.kt)("p",null,"Let's create some folders under ",(0,n.kt)("inlineCode",{parentName:"p"},"/tmp"),", we will use these later when starting the Hadoop container:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /tmp/shared\nmkdir -p /tmp/shared/hadoop_xml\n")),(0,n.kt)("h3",{id:"configure-etchosts"},"Configure /etc/hosts"),(0,n.kt)("p",null,"On the host machine, add the following entry to ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"127.0.0.1 druid-hadoop-demo\n")),(0,n.kt)("h3",{id:"start-the-hadoop-container"},"Start the Hadoop container"),(0,n.kt)("p",null,"Once the ",(0,n.kt)("inlineCode",{parentName:"p"},"/tmp/shared")," folder has been created and the ",(0,n.kt)("inlineCode",{parentName:"p"},"etc/hosts")," entry has been added, run the following command to start the Hadoop container."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it  -h druid-hadoop-demo --name druid-hadoop-demo -p 2049:2049 -p 2122:2122 -p 8020:8020 -p 8021:8021 -p 8030:8030 -p 8031:8031 -p 8032:8032 -p 8033:8033 -p 8040:8040 -p 8042:8042 -p 8088:8088 -p 8443:8443 -p 9000:9000 -p 10020:10020 -p 19888:19888 -p 34455:34455 -p 49707:49707 -p 50010:50010 -p 50020:50020 -p 50030:50030 -p 50060:50060 -p 50070:50070 -p 50075:50075 -p 50090:50090 -p 51111:51111 -v /tmp/shared:/shared druid-hadoop-demo:3.3.6 /etc/bootstrap.sh -bash\n")),(0,n.kt)("p",null,"Once the container is started, your terminal will attach to a bash shell running inside the container:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Starting sshd:                                             [  OK  ]\n18/07/26 17:27:15 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable\nStarting namenodes on [druid-hadoop-demo]\ndruid-hadoop-demo: starting namenode, logging to /usr/local/hadoop/logs/hadoop-root-namenode-druid-hadoop-demo.out\nlocalhost: starting datanode, logging to /usr/local/hadoop/logs/hadoop-root-datanode-druid-hadoop-demo.out\nStarting secondary namenodes [0.0.0.0]\n0.0.0.0: starting secondarynamenode, logging to /usr/local/hadoop/logs/hadoop-root-secondarynamenode-druid-hadoop-demo.out\n18/07/26 17:27:31 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable\nstarting yarn daemons\nstarting resourcemanager, logging to /usr/local/hadoop/logs/yarn--resourcemanager-druid-hadoop-demo.out\nlocalhost: starting nodemanager, logging to /usr/local/hadoop/logs/yarn-root-nodemanager-druid-hadoop-demo.out\nstarting historyserver, logging to /usr/local/hadoop/logs/mapred--historyserver-druid-hadoop-demo.out\nbash-4.1#\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Unable to load native-hadoop library for your platform... using builtin-java classes where applicable")," warning messages can be safely ignored."),(0,n.kt)("h4",{id:"accessing-the-hadoop-container-shell"},"Accessing the Hadoop container shell"),(0,n.kt)("p",null,"To open another shell to the Hadoop container, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker exec -it druid-hadoop-demo bash\n")),(0,n.kt)("h3",{id:"copy-input-data-to-the-hadoop-container"},"Copy input data to the Hadoop container"),(0,n.kt)("p",null,"From the apache-druid-29.0.1 package root on the host, copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/wikiticker-2015-09-12-sampled.json.gz")," sample data to the shared folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp quickstart/tutorial/wikiticker-2015-09-12-sampled.json.gz /tmp/shared/wikiticker-2015-09-12-sampled.json.gz\n")),(0,n.kt)("h3",{id:"setup-hdfs-directories"},"Setup HDFS directories"),(0,n.kt)("p",null,"In the Hadoop container's shell, run the following commands to setup the HDFS directories needed by this tutorial and copy the input data to HDFS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/local/hadoop/bin\n./hdfs dfs -mkdir /druid\n./hdfs dfs -mkdir /druid/segments\n./hdfs dfs -mkdir /quickstart\n./hdfs dfs -mkdir /user\n./hdfs dfs -chmod 777 /druid\n./hdfs dfs -chmod 777 /druid/segments\n./hdfs dfs -chmod 777 /quickstart\n./hdfs dfs -chmod -R 777 /tmp\n./hdfs dfs -chmod -R 777 /user\n./hdfs dfs -put /shared/wikiticker-2015-09-12-sampled.json.gz /quickstart/wikiticker-2015-09-12-sampled.json.gz\n")),(0,n.kt)("p",null,"If you encounter namenode errors when running this command, the Hadoop container may not be finished initializing. When this occurs, wait a couple of minutes and retry the commands."),(0,n.kt)("h2",{id:"configure-druid-to-use-hadoop"},"Configure Druid to use Hadoop"),(0,n.kt)("p",null,"Some additional steps are needed to configure the Druid cluster for Hadoop batch indexing."),(0,n.kt)("h3",{id:"copy-hadoop-configuration-to-druid-classpath"},"Copy Hadoop configuration to Druid classpath"),(0,n.kt)("p",null,"From the Hadoop container's shell, run the following command to copy the Hadoop .xml configuration files to the shared folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp /usr/local/hadoop/etc/hadoop/*.xml /shared/hadoop_xml\n")),(0,n.kt)("p",null,"From the host machine, run the following, where {PATH_TO_DRUID} is replaced by the path to the Druid package."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p {PATH_TO_DRUID}/conf/druid/single-server/micro-quickstart/_common/hadoop-xml\ncp /tmp/shared/hadoop_xml/*.xml {PATH_TO_DRUID}/conf/druid/single-server/micro-quickstart/_common/hadoop-xml/\n")),(0,n.kt)("h3",{id:"update-druid-segment-and-log-storage"},"Update Druid segment and log storage"),(0,n.kt)("p",null,"In your favorite text editor, open ",(0,n.kt)("inlineCode",{parentName:"p"},"conf/druid/auto/_common/common.runtime.properties"),", and make the following edits:"),(0,n.kt)("h4",{id:"disable-local-deep-storage-and-enable-hdfs-deep-storage"},"Disable local deep storage and enable HDFS deep storage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#\n# Deep storage\n#\n\n# For local disk (only viable in a cluster if this is a network mount):\n#druid.storage.type=local\n#druid.storage.storageDirectory=var/druid/segments\n\n# For HDFS:\ndruid.storage.type=hdfs\ndruid.storage.storageDirectory=/druid/segments\n")),(0,n.kt)("h4",{id:"disable-local-log-storage-and-enable-hdfs-log-storage"},"Disable local log storage and enable HDFS log storage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#\n# Indexing service logs\n#\n\n# For local disk (only viable in a cluster if this is a network mount):\n#druid.indexer.logs.type=file\n#druid.indexer.logs.directory=var/druid/indexing-logs\n\n# For HDFS:\ndruid.indexer.logs.type=hdfs\ndruid.indexer.logs.directory=/druid/indexing-logs\n\n")),(0,n.kt)("h3",{id:"restart-druid-cluster"},"Restart Druid cluster"),(0,n.kt)("p",null,"Once the Hadoop .xml files have been copied to the Druid cluster and the segment/log storage configuration has been updated to use HDFS, the Druid cluster needs to be restarted for the new configurations to take effect."),(0,n.kt)("p",null,"If the cluster is still running, CTRL-C to terminate the ",(0,n.kt)("inlineCode",{parentName:"p"},"bin/start-druid")," script, and re-run it to bring the Druid services back up."),(0,n.kt)("h2",{id:"load-batch-data"},"Load batch data"),(0,n.kt)("p",null,"We've included a sample of Wikipedia edits from September 12, 2015 to get you started."),(0,n.kt)("p",null,"To load this data into Druid, you can submit an ",(0,n.kt)("em",{parentName:"p"},"ingestion task")," pointing to the file. We've included\na task that loads the ",(0,n.kt)("inlineCode",{parentName:"p"},"wikiticker-2015-09-12-sampled.json.gz")," file included in the archive."),(0,n.kt)("p",null,"Let's submit the ",(0,n.kt)("inlineCode",{parentName:"p"},"wikipedia-index-hadoop3.json")," task:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/wikipedia-index-hadoop3.json --url http://localhost:8081\n")),(0,n.kt)("h2",{id:"querying-your-data"},"Querying your data"),(0,n.kt)("p",null,"After the data load is complete, please follow the ",(0,n.kt)("a",{parentName:"p",href:"/docs/29.0.1/tutorials/tutorial-query"},"query tutorial")," to run some example queries on the newly loaded data."),(0,n.kt)("h2",{id:"cleanup"},"Cleanup"),(0,n.kt)("p",null,"This tutorial is only meant to be used together with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/29.0.1/tutorials/tutorial-query"},"query tutorial"),"."),(0,n.kt)("p",null,"If you wish to go through any of the other tutorials, you will need to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Shut down the cluster and reset the cluster state by removing the contents of the ",(0,n.kt)("inlineCode",{parentName:"li"},"var")," directory under the druid package."),(0,n.kt)("li",{parentName:"ul"},"Revert the deep storage and task storage config back to local types in ",(0,n.kt)("inlineCode",{parentName:"li"},"conf/druid/auto/_common/common.runtime.properties")),(0,n.kt)("li",{parentName:"ul"},"Restart the cluster")),(0,n.kt)("p",null,'This is necessary because the other ingestion tutorials will write to the same "wikipedia" datasource, and later tutorials expect the cluster to use local deep storage.'),(0,n.kt)("p",null,"Example reverted config:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#\n# Deep storage\n#\n\n# For local disk (only viable in a cluster if this is a network mount):\ndruid.storage.type=local\ndruid.storage.storageDirectory=var/druid/segments\n\n# For HDFS:\n#druid.storage.type=hdfs\n#druid.storage.storageDirectory=/druid/segments\n\n#\n# Indexing service logs\n#\n\n# For local disk (only viable in a cluster if this is a network mount):\ndruid.indexer.logs.type=file\ndruid.indexer.logs.directory=var/druid/indexing-logs\n\n# For HDFS:\n#druid.indexer.logs.type=hdfs\n#druid.indexer.logs.directory=/druid/indexing-logs\n\n")),(0,n.kt)("h2",{id:"further-reading"},"Further reading"),(0,n.kt)("p",null,"For more information on loading batch data with Hadoop, please see ",(0,n.kt)("a",{parentName:"p",href:"/docs/29.0.1/ingestion/hadoop"},"the Hadoop batch ingestion documentation"),"."))}g.isMDXComponent=!0}}]);