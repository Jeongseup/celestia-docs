"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3797],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_label:"Mamaki Testnet"},i="Mamaki Testnet",l={unversionedId:"nodes/mamaki-testnet",id:"nodes/mamaki-testnet",title:"Mamaki Testnet",description:"mamaki-testnet",source:"@site/docs/nodes/mamaki-testnet.md",sourceDirName:"nodes",slug:"/nodes/mamaki-testnet",permalink:"/pr-preview/pr-326/fr/nodes/mamaki-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/mamaki-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Mamaki Testnet"},sidebar:"nodes",previous:{title:"Arabica Devnet",permalink:"/pr-preview/pr-326/fr/nodes/arabica-devnet"},next:{title:"Quick Start Guide",permalink:"/pr-preview/pr-326/fr/nodes/quick-start"}},s={},p=[{value:"RPC endpoints",id:"rpc-endpoints",level:2},{value:"Mamaki Testnet faucet",id:"mamaki-testnet-faucet",level:2},{value:"Explorers",id:"explorers",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mamaki-testnet"},"Mamaki Testnet"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mamaki-testnet",src:n(747).Z,width:"2000",height:"1000"})),(0,a.kt)("p",null,"This guide contains the relevant sections for how to connect to Mamaki,\ndepending on the type of node you are running. Mamaki Testnet is designed\nto help validators test out their infrastructure and node software\nwith the test network. Developers are encouraged to deploy their\nsovereign rollups on Mamaki, but we also recommend ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-326/fr/nodes/arabica-devnet"},"Arabica Devnet"),"\nfor that as it is designed for development purposes."),(0,a.kt)("p",null,"Mamaki is a milestone in Celestia, allowing everyone to test out\ncore functionalities on the network. Read the anouncement ",(0,a.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-testnet-introduces-alpha-data-availability-api/"},"here"),"."),(0,a.kt)("p",null,"Your best approach to participating is to first determine which node\nyou would like to run. Each node guides will link to the relevant network\nin order to show you how to connect to them."),(0,a.kt)("p",null,"You have a list of options on the type of nodes you can run in order to\nparticipate in Mamaki:"),(0,a.kt)("p",null,"Consensus:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-326/fr/nodes/validator-node"},"Validator Node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-326/fr/nodes/consensus-full-node"},"Consensus Full Node"))),(0,a.kt)("p",null,"Data Availability:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-326/fr/nodes/bridge-node"},"Bridge Node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-326/fr/nodes/full-storage-node"},"Full Storage Node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-326/fr/nodes/light-node"},"Light Node"))),(0,a.kt)("p",null,"Select the type of node you would like to run and follow the instructions\non each respective page. Whenever you are asked to select the type of network\nyou want to connect to in those guides, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Mamaki")," in order to refer\nto the correct instructions on this page on how to connect to Mamaki."),(0,a.kt)("h2",{id:"rpc-endpoints"},"RPC endpoints"),(0,a.kt)("p",null,"There is a list of RPC endpoints you can use to connect to Mamaki Testnet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rpc-mamaki.pops.one"},"https://rpc-mamaki.pops.one")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rpc-1.celestia.nodes.guru"},"https://rpc-1.celestia.nodes.guru")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://grpc-1.celestia.nodes.guru:10790"},"https://grpc-1.celestia.nodes.guru:10790")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://celestia-testnet-rpc.polkachu.com/"},"https://celestia-testnet-rpc.polkachu.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rpc.celestia.testnet.run/"},"https://rpc.celestia.testnet.run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rpc.mamaki.celestia.counterpoint.software"},"https://rpc.mamaki.celestia.counterpoint.software"))),(0,a.kt)("h2",{id:"mamaki-testnet-faucet"},"Mamaki Testnet faucet"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER\nDISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS\nDO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC\nDISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.")),(0,a.kt)("p",null,"You can request from Mamaki Testnet Faucet on the #mamaki-faucet channel on\nCelestia's Discord server with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$request <CELESTIA-ADDRESS>\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<CELESTIA-ADDRESS>")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia1******")," generated address."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Faucet has a limit of 10 tokens per week per address/Discord ID")),(0,a.kt)("h2",{id:"explorers"},"Explorers"),(0,a.kt)("p",null,"There are several explorers you can use for Mamaki:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://testnet.mintscan.io/celestia-testnet"},"https://testnet.mintscan.io/celestia-testnet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://celestia.explorers.guru/"},"https://celestia.explorers.guru/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://celestiascan.vercel.app/"},"https://celestiascan.vercel.app/"))))}u.isMDXComponent=!0},747:function(e,t,n){t.Z=n.p+"assets/images/mamaki-d63b2fa8215b512b0703a12df0d7d05d.png"}}]);