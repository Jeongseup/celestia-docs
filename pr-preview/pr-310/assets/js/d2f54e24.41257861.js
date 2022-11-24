"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5877],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),o=n(4334),i=n(2389),l=n(7392),s=n(7094),p=n(2466),d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:m,groupId:h,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==w&&(O(t),C(a),null!=h&&N(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},6422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={sidebar_label:"Bridge Node"},s="Setting up a Celestia Bridge Node",p={unversionedId:"nodes/bridge-node",id:"nodes/bridge-node",title:"Setting up a Celestia Bridge Node",description:"This tutorial will go over the steps to setting up your Celestia Bridge node.",source:"@site/docs/nodes/bridge-node.mdx",sourceDirName:"nodes",slug:"/nodes/bridge-node",permalink:"/pr-preview/pr-310/nodes/bridge-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/bridge-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Bridge Node"},sidebar:"nodes",previous:{title:"Light Node",permalink:"/pr-preview/pr-310/nodes/light-node"},next:{title:"Full Storage Node",permalink:"/pr-preview/pr-310/nodes/full-storage-node"}},d={},u=[{value:"Overview of bridge nodes",id:"overview-of-bridge-nodes",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your bridge node",id:"setting-up-your-bridge-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Deploy the Celestia bridge node",id:"deploy-the-celestia-bridge-node",level:2},{value:"Install Celestia node",id:"install-celestia-node",level:3},{value:"Initialize the bridge node",id:"initialize-the-bridge-node",level:3},{value:"Run the bridge node",id:"run-the-bridge-node",level:3},{value:"Optional: run the bridge node with a custom key",id:"optional-run-the-bridge-node-with-a-custom-key",level:4},{value:"Optional: start the bridge node with SystemD",id:"optional-start-the-bridge-node-with-systemd",level:3}],c={toc:u};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-celestia-bridge-node"},"Setting up a Celestia Bridge Node"),(0,r.kt)("p",null,"This tutorial will go over the steps to setting up your Celestia Bridge node."),(0,r.kt)("p",null,"Bridge nodes connect the data availability layer and the consensus layer\nwhile also having the option of becoming a validator."),(0,r.kt)("p",null,"Validators do not have to run bridge nodes, but are encouraged to in order\nto relay blocks to the data availability network."),(0,r.kt)("h2",{id:"overview-of-bridge-nodes"},"Overview of bridge nodes"),(0,r.kt)("p",null,"A Celestia bridge node has the following properties:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import and process \u201craw\u201d headers & blocks from a trusted Core process\n(meaning a trusted RPC connection to a celestia-core node) in the\nConsensus network. Bridge Nodes can run this Core process internally\n(embedded) or simply connect to a remote endpoint. Bridge Nodes also\nhave the option of being an active validator in the Consensus network."),(0,r.kt)("li",{parentName:"ol"},"Validate and erasure code the \u201craw\u201d blocks"),(0,r.kt)("li",{parentName:"ol"},"Supply block shares with data availability headers to Light Nodes in the DA network.\n",(0,r.kt)("img",{alt:"bridge-node-diagram",src:n(8842).Z,width:"2802",height:"700"}))),(0,r.kt)("p",null,"From an implementation perspective, Bridge Nodes run two separate processes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Celestia App with Celestia Core\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"see repo"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Celestia App")," is the state machine where the application and the\nproof-of-stake logic is run. Celestia App is built on\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/"},"Cosmos SDK")," and also encompasses\n",(0,r.kt)("strong",{parentName:"li"},"Celestia Core"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Celestia Core")," is the state interaction, consensus and block production\nlayer. Celestia Core is built on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/"},"Tendermint Core"),",\nmodified to store data roots of erasure coded blocks among other changes\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/celestia-core/tree/master/docs/celestia-architecture"},"see ADRs"),")."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Celestia Node (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node"},"see repo"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Celestia Node")," augments the above with a separate libp2p network that\nserves data availability sampling requests. The team sometimes refer to\nthis as the \u201chalo\u201d network.")))),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nbridge node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,r.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,r.kt)("h2",{id:"setting-up-your-bridge-node"},"Setting up your bridge node"),(0,r.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,r.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,r.kt)("p",null,"Follow the tutorial here installing the dependencies ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/nodes/environment"},"here"),"."),(0,r.kt)("h2",{id:"deploy-the-celestia-bridge-node"},"Deploy the Celestia bridge node"),(0,r.kt)("h3",{id:"install-celestia-node"},"Install Celestia node"),(0,r.kt)("p",null,"Install the Celestia Node binary, which will be used to run the Bridge Node."),(0,r.kt)("p",null,"Follow the tutorial for installing Celestia Node ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/nodes/celestia-node"},"here"),"."),(0,r.kt)("h3",{id:"initialize-the-bridge-node"},"Initialize the bridge node"),(0,r.kt)(o.Z,{groupId:"networks",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("p",null,"  Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address> --core.rpc.port <port>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.rpc.port")," defaults to 26657, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/nodes/mamaki-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"Here is an example of initializing the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip https://limani.celestia-devops.dev/ --core.grpc.port 9090\n"))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.remote <ip-address>:<port>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.remote")," port defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/nodes/mamaki-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"Here is an example of initializing the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.remote https://rpc-mamaki.pops.one:9090\n")))),(0,r.kt)("h3",{id:"run-the-bridge-node"},"Run the bridge node"),(0,r.kt)(o.Z,{groupId:"networks",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("p",null,"Start the Bridge Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip-address> --core.grpc.port <port>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/nodes/mamaki-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"Here is an example of starting the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip https://limani.celestia-devops.dev/ --core.grpc.port 9090\n"))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("p",null,"Start the Bridge Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.remote <ip-address>:<port>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.remote")," port defaults to 9090, so if you do not specify it in the command line, it will default to that port. You can use the flag to specify another port if you prefer.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/nodes/mamaki-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"Here is an example of starting the bridge node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.remote https://rpc-mamaki.pops.one:26657\n")))),(0,r.kt)("p",null,"You can create your key for your node by following the ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/developers/celestia-node-key"},"here")),(0,r.kt)("p",null,"Once you start the Bridge Node, a wallet key will be generated for you.\nYou will need to fund that address with Testnet tokens to pay for\nPayForData transactions.\nYou can find the address by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type bridge --keyring-backend test\n")),(0,r.kt)("p",null,"You have two networks to get testnet tokens from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-310/nodes/arabica-devnet#arabica-devnet-faucet"},"Arabica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-310/nodes/mamaki-testnet#mamaki-testnet-faucet"},"Mamaki"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a bridge node for your validator\nit is highly recommended to request Mamaki testnet tokens\nas this is the testnet used to test out validator operations.")),(0,r.kt)("h4",{id:"optional-run-the-bridge-node-with-a-custom-key"},"Optional: run the bridge node with a custom key"),(0,r.kt)("p",null,"In order to run a bridge node using a custom key:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia bridge node directory at the\ncorrect path (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.celestia-bridge/keys/keyring-test"),")"),(0,r.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,r.kt)(o.Z,{groupId:"networks",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip> --core.grpc.port 9090 --keyring.accname <name_of_custom_key>\n"))),(0,r.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.remote <ip>:<port> --keyring.accname <name_of_custom_key>\n")))),(0,r.kt)("h3",{id:"optional-start-the-bridge-node-with-systemd"},"Optional: start the bridge node with SystemD"),(0,r.kt)("p",null,"Follow the tutorial on setting up the bridge node as a background process with\nSystemD ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/nodes/systemd#celestia-bridge-node"},"here"),"."),(0,r.kt)("p",null,"You have successfully set up a bridge node that is syncing with the network."))}m.isMDXComponent=!0},8842:function(e,t,n){t.Z=n.p+"assets/images/BridgeNodes-c9d5799bf588d3becaefb313bd03b0c2.png"}}]);