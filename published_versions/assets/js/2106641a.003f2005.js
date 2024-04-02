"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"docker",title:"Run with Docker",sidebar_label:"Run with Docker"},s=void 0,c={unversionedId:"tutorials/docker",id:"tutorials/docker",title:"Run with Docker",description:"\x3c!--",source:"@site/docs/29.0.1/tutorials/docker.md",sourceDirName:"tutorials",slug:"/tutorials/docker",permalink:"/docs/29.0.1/tutorials/docker",draft:!1,tags:[],version:"current",frontMatter:{id:"docker",title:"Run with Docker",sidebar_label:"Run with Docker"},sidebar:"docs",previous:{title:"Convert ingestion spec to SQL",permalink:"/docs/29.0.1/tutorials/tutorial-msq-convert-spec"},next:{title:"Kerberized HDFS deep storage",permalink:"/docs/29.0.1/tutorials/tutorial-kerberos-hadoop"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Docker memory requirements",id:"docker-memory-requirements",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Compose file",id:"compose-file",level:3},{value:"Environment file",id:"environment-file",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Launching the cluster",id:"launching-the-cluster",level:2},{value:"Using the cluster",id:"using-the-cluster",level:2}],u={toc:d},m="wrapper";function h(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This quickstart guides you through the steps to download the Apache Druid image from ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/druid"},"Docker Hub")," and deploy it on a single machine using ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"Docker")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),".\nAfter you finish the initial setup, the cluster will be ready to load data."),(0,i.kt)("p",null,"Before beginning the quickstart, it is helpful to read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/"},"general Druid overview")," and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/ingestion/"},"ingestion overview"),", because the tutorials refer to concepts discussed on those pages. It also helps to be familiar with ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"Docker"),"."),(0,i.kt)("p",null,"This tutorial assumes you will download the required files from GitHub. The files are also available in a Druid installation and in the Druid sources."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker"))),(0,i.kt)("h3",{id:"docker-memory-requirements"},"Docker memory requirements"),(0,i.kt)("p",null,"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," launches eight containers: Zookeeper, PostgreSQL, and six Druid containers based upon the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/single-server#single-server-reference-configurations-deprecated"},"micro quickstart configuration"),".\nEach Druid service is configured to use up to 7 GiB of memory (6 GiB direct memory and 1 GiB heap). However, the quickstart will not use all the available memory."),(0,i.kt)("p",null,"For this setup, Docker needs at least 6 GiB of memory available for the Druid cluster. For Docker Desktop on Mac OS, adjust the memory settings in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/mac/"},"Docker Desktop preferences"),". If you experience a crash with a 137 error code you likely don't have enough memory allocated to Docker."),(0,i.kt)("p",null,"You can modify the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"DRUID_SINGLE_NODE_CONF")," in the Docker ",(0,i.kt)("a",{parentName:"p",href:"#environment-file"},(0,i.kt)("inlineCode",{parentName:"a"},"environment"))," to use different single-server mode. For example to use the nano quickstart: ",(0,i.kt)("inlineCode",{parentName:"p"},"DRUID_SINGLE_NODE_CONF=nano-quickstart"),"."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Create a directory to hold the Druid Docker files."),(0,i.kt)("p",null,"The Druid source code contains ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/blob/29.0.1/distribution/docker/docker-compose.yml"},"an example ",(0,i.kt)("inlineCode",{parentName:"a"},"docker-compose.yml"))," which pulls an image from Docker Hub and is suited to be used as an example environment and to experiment with Docker based Druid configuration and deployments. ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/druid/29.0.1/distribution/docker/docker-compose.yml"},"Download")," this file to the directory created above."),(0,i.kt)("h3",{id:"compose-file"},"Compose file"),(0,i.kt)("p",null,"The example ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," will create a container for each Druid service, as well as ZooKeeper and a PostgreSQL container as the metadata store."),(0,i.kt)("p",null,"It will also create a named volume ",(0,i.kt)("inlineCode",{parentName:"p"},"druid_shared")," as deep storage to keep and share segments and task logs among Druid services. The volume is mounted as ",(0,i.kt)("inlineCode",{parentName:"p"},"opt/shared")," in the container."),(0,i.kt)("h3",{id:"environment-file"},"Environment file"),(0,i.kt)("p",null,"The Druid ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," example uses an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/environment-variables/#the-env_file-configuration-option"},"environment file")," to specify the complete Druid configuration, including the environment variables described in ",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"Configuration"),". This file is named ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," by default, and must be in the same directory as the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/druid/29.0.1/distribution/docker/environment"},"Download")," the example ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," file to the directory created above. The options in this file work well for trying Druid and for using the tutorial."),(0,i.kt)("p",null,"The single-file approach is inadequate for a production system. Instead we suggest using either ",(0,i.kt)("inlineCode",{parentName:"p"},"DRUID_COMMON_CONFIG")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DRUID_CONFIG_${service}")," or specially tailored, service-specific environment files."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuration of the Druid Docker container is done via environment variables set within the container. Docker Compose passes the values from the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment file")," into the container. The variables may additionally specify paths to ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/configuration/"},"the standard Druid configuration files")," which must be available within the container."),(0,i.kt)("p",null,"The default values are fine for the Quickstart. Production systems will want to modify the defaults."),(0,i.kt)("p",null,"Basic configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_MAXDIRECTMEMORYSIZE")," -- set Java max direct memory size. Default is 6 GiB."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_XMX")," -- set Java ",(0,i.kt)("inlineCode",{parentName:"li"},"Xmx"),", the maximum heap size. Default is 1 GB.")),(0,i.kt)("p",null,"Production configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_CONFIG_COMMON")," -- full path to a file for Druid common properties"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_CONFIG_${service}")," -- full path to a file for Druid service properties"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JAVA_OPTS")," -- set Java options")),(0,i.kt)("p",null,"Logging configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_LOG4J")," -- set the entire ",(0,i.kt)("a",{parentName:"li",href:"https://logging.apache.org/log4j/2.x/manual/configuration.html#XML"},(0,i.kt)("inlineCode",{parentName:"a"},"log4j.xml")," configuration file"),"  verbatim. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/druid/blob/29.0.1/distribution/docker/environment#L52"},"Example"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_LOG_LEVEL")," -- override the default ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Log4j#Log4j_log_levels"},"Log4j log level")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_SERVICE_LOG4J")," -- set the entire ",(0,i.kt)("a",{parentName:"li",href:"https://logging.apache.org/log4j/2.x/manual/configuration.html#XML"},(0,i.kt)("inlineCode",{parentName:"a"},"log4j.xml")," configuration file"),"  verbatim specific to a service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_SERVICE_LOG_LEVEL")," -- override the default ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Log4j#Log4j_log_levels"},"Log4j log level")," in the service specific log4j.")),(0,i.kt)("p",null,"Advanced memory configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_XMS")," -- set Java ",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E19900-01/819-4742/abeik/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Xms")),", the initial heap size. Default is 1 GB."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_MAXNEWSIZE")," -- set ",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E19900-01/819-4742/abeik/index.html"},"Java max new size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRUID_NEWSIZE")," -- set ",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E19900-01/819-4742/abeik/index.html"},"Java new size"))),(0,i.kt)("p",null,"In addition to the special environment variables, the script which launches Druid in the container will use any environment variable starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid_")," prefix as command-line configuration. For example, an environment variable"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"druid_metadata_storage_type=postgresql")),(0,i.kt)("p",null,"is translated into the following option in the Java launch command for the Druid process in the container:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-Ddruid.metadata.storage.type=postgresql")),(0,i.kt)("p",null,"Note that Druid uses port 8888 for the console. This port is also used by Jupyter and other tools. To avoid conflicts, you can change the port in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/blob/0.21.1/distribution/docker/docker-compose.yml#L125"},(0,i.kt)("inlineCode",{parentName:"a"},"ports"))," section of the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. For example, to expose the console on port 9999 of the host:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'    container_name: router\n    ...\n    ports:\n      - "9999:8888"\n')),(0,i.kt)("h2",{id:"launching-the-cluster"},"Launching the cluster"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the directory that contains the configuration files. This is the directory you created above, or the ",(0,i.kt)("inlineCode",{parentName:"p"},"distribution/docker/")," in your Druid installation directory if you installed Druid locally."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up")," to launch the cluster with a shell attached, or ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," to run the cluster in the background."),(0,i.kt)("p",null,"Once the cluster has started, you can navigate to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/operations/web-console"},"web console")," at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888"},"http://localhost:8888"),". The ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/design/router"},"Druid router process")," serves the UI."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"web console",src:n(36660).Z,title:"web console",width:"1250",height:"740"})),(0,i.kt)("p",null,"It takes a few seconds for all the Druid processes to fully start up. If you open the console immediately after starting the services, you may see some errors that you can safely ignore."),(0,i.kt)("h2",{id:"using-the-cluster"},"Using the cluster"),(0,i.kt)("p",null,"From here you can follow along with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/29.0.1/tutorials/#load-data"},"Quickstart"),". For production use, refine your ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to add any additional external service dependencies as necessary."),(0,i.kt)("p",null,"You can explore the Druid containers using Docker to start a shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker exec -ti <id> sh\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>")," is the container id found with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker ps"),". Druid is installed in ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/druid"),". The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/blob/29.0.1/distribution/docker/druid.sh"},"script")," which consumes the environment variables mentioned above, and which launches Druid, is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/druid.sh"),"."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose down")," to shut down the cluster. Your data is persisted as a set of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"Docker volumes")," and will be available when you restart your Druid cluster."))}h.isMDXComponent=!0},36660:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tutorial-quickstart-01-55397fb67d2b63fa55d39770575a846f.png"}}]);