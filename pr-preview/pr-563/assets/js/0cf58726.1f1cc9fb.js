"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Mocha testnet"},i="Mocha testnet",s={unversionedId:"nodes/mocha-testnet",id:"nodes/mocha-testnet",title:"Mocha testnet",description:"mocha-testnet",source:"@site/docs/nodes/mocha-testnet.md",sourceDirName:"nodes",slug:"/nodes/mocha-testnet",permalink:"/pr-preview/pr-563/nodes/mocha-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/mocha-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Mocha testnet"},sidebar:"nodes",previous:{title:"Arabica devnet",permalink:"/pr-preview/pr-563/nodes/arabica-devnet"},next:{title:"Quick start",permalink:"/pr-preview/pr-563/nodes/quick-start"}},l={},p=[{value:"RPC endpoints",id:"rpc-endpoints",level:2},{value:"API endpoints",id:"api-endpoints",level:2},{value:"gRPC endpoints",id:"grpc-endpoints",level:2},{value:"Mocha testnet faucet",id:"mocha-testnet-faucet",level:2},{value:"Explorers",id:"explorers",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mocha-testnet"},"Mocha testnet"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mocha-testnet",src:n(1514).Z,width:"3000",height:"1500"})),(0,a.kt)("p",null,"This guide contains the relevant sections for how to connect to Mocha,\ndepending on the type of node you are running. Mocha testnet is designed\nto help validators test out their infrastructure and node software.\nDevelopers are encouraged to deploy their\nsovereign rollups on Mocha, but we also recommend ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-563/nodes/arabica-devnet"},"Arabica devnet"),"\nfor that as it is designed for development purposes."),(0,a.kt)("p",null,"Mocha is a milestone in Celestia, allowing everyone to test out\ncore functionalities on the network. Read the announcement ",(0,a.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-testnet-introduces-alpha-data-availability-api"},"here"),".\nYour best approach to participating is to first determine which node\nyou would like to run. Each node guides will link to the relevant network\nin order to show you how to connect to them."),(0,a.kt)("p",null,"You have a list of options on the type of nodes you can run in order to\nparticipate in Mocha:"),(0,a.kt)("p",null,"Consensus:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-563/nodes/validator-node"},"Validator node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-563/nodes/consensus-full-node"},"Consensus full node"))),(0,a.kt)("p",null,"Data Availability:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-563/nodes/bridge-node"},"Bridge node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-563/nodes/full-storage-node"},"Full storage node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-563/nodes/light-node"},"Light node"))),(0,a.kt)("p",null,"Select the type of node you would like to run and follow the instructions\non each respective page. Whenever you are asked to select the type of network\nyou want to connect to in those guides, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Mocha")," in order to refer\nto the correct instructions on this page on how to connect to Mocha."),(0,a.kt)("h2",{id:"rpc-endpoints"},"RPC endpoints"),(0,a.kt)("p",null,"The RPC endpoint is to allow users to interact with Celestia's nodes by\nquerying the node's state and broadcasting transactions on the\nCelestia network. The default port is 26657."),(0,a.kt)("p",null,"Below is a list of RPC endpoints you can use to connect to Mocha testnet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rpc-mocha.pops.one"},"https://rpc-mocha.pops.one")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rpc.mocha.celestia.counterpoint.software"},"https://rpc.mocha.celestia.counterpoint.software"))),(0,a.kt)("h2",{id:"api-endpoints"},"API endpoints"),(0,a.kt)("p",null,"The API endpoint is to allow users to interact with the REST API in Cosmos\nSDK which is implemented using gRPC-gateway, which exposes gRPC endpoints\nas REST endpoints. This allows for communication with the node using REST\ncalls, which can be useful if the client does not support gRPC or HTTP2.\nThe default port is 1317."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api-mocha.pops.one"},"https://api-mocha.pops.one")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.mocha.celestia.counterpoint.software"},"https://api.mocha.celestia.counterpoint.software"))),(0,a.kt)("h2",{id:"grpc-endpoints"},"gRPC endpoints"),(0,a.kt)("p",null,"The gRPC endpoint is to allow users to interact with a celestia-node using\ngRPC, a modern open-source and high-performance RPC framework. The default\nport is 9090. In the Cosmos SDK, gRPC is used to define state queries and\nbroadcast transactions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://grpc-mocha.pops.one"},"https://grpc-mocha.pops.one")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://grpc.mocha.celestia.counterpoint.software"},"https://grpc.mocha.celestia.counterpoint.software"))),(0,a.kt)("h2",{id:"mocha-testnet-faucet"},"Mocha testnet faucet"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER\nDISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS\nDO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC\nDISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.")),(0,a.kt)("p",null,"You can request from Mocha Testnet Faucet on the #mocha-faucet channel on\nCelestia's Discord server with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$request <CELESTIA-ADDRESS>\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<CELESTIA-ADDRESS>")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia1******")," generated address."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Faucet has a limit of 10 tokens per week per address/Discord ID")),(0,a.kt)("h2",{id:"explorers"},"Explorers"),(0,a.kt)("p",null,"There are several explorers you can use for Mocha:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testnet.mintscan.io/celestia-testnet"},"https://testnet.mintscan.io/celestia-testnet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://celestia.explorers.guru"},"https://celestia.explorers.guru/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://celestiascan.vercel.app"},"https://celestiascan.vercel.app/"))))}d.isMDXComponent=!0},1514:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mocha-57e8627f3a1ad8d70c559a19553f439d.jpg"}}]);