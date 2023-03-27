"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Metrics, Visualization and Alerts"},i="Metrics",s={unversionedId:"nodes/celestia-app-metrics",id:"nodes/celestia-app-metrics",title:"Metrics",description:"Metrics are a powerful tool for monitoring the health",source:"@site/docs/nodes/celestia-app-metrics.md",sourceDirName:"nodes",slug:"/nodes/celestia-app-metrics",permalink:"/pr-preview/pr-564/nodes/celestia-app-metrics",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-app-metrics.md",tags:[],version:"current",frontMatter:{sidebar_label:"Metrics, Visualization and Alerts"},sidebar:"nodes",previous:{title:"celestia-app",permalink:"/pr-preview/pr-564/category/celestia-app"},next:{title:"Create a Celestia testnet",permalink:"/pr-preview/pr-564/nodes/instantiate-testnet"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Node exporter",id:"node-exporter",level:2},{value:"Alerts",id:"alerts",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"Metrics are a powerful tool for monitoring the health\nand performance of a system. Celestia provides support\nfor metrics to make sure, as an operator, your system\ncontinues to remain up and running. Metrics can also\nprovide critical insight into how Celestia is used and\nhow it can be improved."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Celestia uses ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," to\npublish metrics. It can be enabled through the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#######################################################\n###       Instrumentation Configuration Options     ###\n#######################################################\n[instrumentation]\n\n# When true, Prometheus metrics are served under /metrics on\n# PrometheusListenAddr.\n# Check out the documentation for the list of available metrics.\nprometheus = true\n\n# Address to listen for Prometheus collector(s) connections\nprometheus_listen_addr = ":26660"\n\n# Maximum number of simultaneous connections.\n# If you want to accept a larger number than the default, make sure\n# you increase your OS limits.\n# 0 - unlimited.\nmax_open_connections = 3\n\n# Instrumentation namespace\nnamespace = "celestia"\n')),(0,r.kt)("p",null,"If you restart your node, you can check to see it's working\nby running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:26660/metrics\n")),(0,r.kt)("h2",{id:"visualization"},"Visualization"),(0,r.kt)("p",null,"Now your nodes are publishing metrics, we need something to\nscrape it and a visualizer to create a dashboard. Commonly,\nPrometheus is paired with Grafana."),(0,r.kt)("p",null,"First, you will need to install Prometheus either from their\n",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"Downloads")," page or through\na package manager like ",(0,r.kt)("inlineCode",{parentName:"p"},"brew"),"."),(0,r.kt)("p",null,"Next, create a config file ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/prometheus.yml"),"\nand fill out some basic settings as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"global:\n  scrape_interval:     15s # By default, scrape targets every 15 seconds.\n\n  # Attach these labels to any time series or alerts when communicating with\n  # external systems (federation, remote storage, Alertmanager).\n  external_labels:\n    monitor: 'codelab-monitor'\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # Override the global default and scrape targets from this job every 5 seconds.\n    scrape_interval: 5s\n\n    static_configs:\n      # Point to the same endpoint that Celestia is publishing on\n      - targets: ['localhost:26660']\n")),(0,r.kt)("p",null,"Note, that Prometheus by default runs its server on ",(0,r.kt)("inlineCode",{parentName:"p"},":9090"),".\nIf you are running this on the same machine as your consensus\nnode, it will collide with gRPC which runs on the same port.\nTo avoid this, either switch off gRPC (if it's not needed),\nchange the gRPC port in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml"),", or run Prometheus on a\ndifferent port e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'--web.listen-address="0.0.0.0:8000"')),(0,r.kt)("p",null,"To run the prometheus server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'prometheus --config.file="$HOME/.celestia-app/config/prometheus.yml"\n')),(0,r.kt)("p",null,"A prometheus server can scrape metrics from multiple nodes at once;\na good way of bringing together information from many machines to one place."),(0,r.kt)("p",null,"To visualize the information, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),":\neither with their cloud option or run the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download?pg=graf&platform=linux&plcmt=deploy-box-1"},"open source code"),"\nyourself."),(0,r.kt)("p",null,"Once setup, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grafana server\n")),(0,r.kt)("p",null,"which will begin a server on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),".\nIf you open the url on your browser you will\nsee the Grafana login page. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," for both\nthe user and password to log in."),(0,r.kt)("p",null,'You will need to link the prometheus server as a\ndata source. To do that go to "Configuration" in\nthe sidebar and then "Data Sources". Add a new data\nsource specifying the URL of the Prometheus instance\n(default at ',(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9090"),'). Click "Save & test" to confirm.'),(0,r.kt)("p",null,'Lastly, you will need to setup a dashboard. You can\nchoose to do this yourself, handpicking the metrics\nthat are important or you can simply export an existing\ndesign. Fortunately the cosmos ecosystem has conjured a\n"Cosmos Dashboard". On the sidebar, click "Dashboards"\nand then "import". Enter the following dashboard ID: 11036\nand then link it to the "Prometheus" data source you just set up.\nFinally click the "Import" button and the "Cosmos Dashboard" should appear.'),(0,r.kt)("h2",{id:"node-exporter"},"Node exporter"),(0,r.kt)("p",null,"Celestia's metrics include a plethora of application specific\ntrackers but it's also important to keep an eye on system level\nmetrics such as memory usage and disk space. This can be best\nachieved by running ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/guides/node-exporter/"},"Node Exporter"),".\nFollow the guide in the link to get set up, adding the port\nnumber to the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.yml")," file."),(0,r.kt)("h2",{id:"alerts"},"Alerts"),(0,r.kt)("p",null,"The final cherry on the cake is to integrate your monitoring\nsystem with a mechanism for producing alerts to warn you if\nyour node has crashed or is no longer able to stay at the head\nof the chain."),(0,r.kt)("p",null,"Since we're already using Grafana, we can install the\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/plugins/grafana-oncall-app"},"Grafana OnCall"),"\nplugin. OnCall allows you to setup integrations. It could be a\nwebhook or a direct integration into Telegram or Slack.\nYou can find more information on Grafana's ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/oncall/latest/integrations/"},"Docs Page"),"."))}m.isMDXComponent=!0}}]);