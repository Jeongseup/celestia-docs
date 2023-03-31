"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=s.createContext({}),c=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return n?s.createElement(g,r(r({ref:t},d),{},{components:n})):s.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"SystemD"},r="Setting up your node as a background process with SystemD",i={unversionedId:"nodes/systemd",id:"nodes/systemd",title:"Setting up your node as a background process with SystemD",description:"SystemD is a daemon service useful for running applications as background processes.",source:"@site/docs/nodes/systemd.md",sourceDirName:"nodes",slug:"/nodes/systemd",permalink:"/pr-preview/pr-608/nodes/systemd",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/systemd.md",tags:[],version:"current",frontMatter:{sidebar_label:"SystemD"},sidebar:"nodes",previous:{title:"Helpful CLI commands",permalink:"/pr-preview/pr-608/nodes/celestia-app-commands"},next:{title:"Hardfork Process",permalink:"/pr-preview/pr-608/nodes/hardfork-process"}},o={},c=[{value:"Consensus nodes",id:"consensus-nodes",level:2},{value:"Start the celestia-app with SystemD",id:"start-the-celestia-app-with-systemd",level:3},{value:"Data availability nodes",id:"data-availability-nodes",level:2},{value:"Celestia full storage node",id:"celestia-full-storage-node",level:3},{value:"Celestia bridge node",id:"celestia-bridge-node",level:3},{value:"Celestia light node",id:"celestia-light-node",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-your-node-as-a-background-process-with-systemd"},"Setting up your node as a background process with SystemD"),(0,a.kt)("p",null,"SystemD is a daemon service useful for running applications as background processes."),(0,a.kt)("h2",{id:"consensus-nodes"},"Consensus nodes"),(0,a.kt)("p",null,"If you are running a validator or consensus full node, here are\nthe steps to setting up ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-appd")," as a background process."),(0,a.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the celestia-app with SystemD"),(0,a.kt)("p",null,"SystemD is a daemon service useful for running applications as background processes."),(0,a.kt)("p",null,"Create Celestia-App systemd file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-appd.service\n[Unit]\nDescription=celestia-appd Cosmos daemon\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which celestia-appd) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,a.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-appd.service\n")),(0,a.kt)("p",null,"Enable and start celestia-appd daemon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable celestia-appd\nsudo systemctl start celestia-appd\n")),(0,a.kt)("p",null,"Check if daemon has been started correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status celestia-appd\n")),(0,a.kt)("p",null,"Check daemon logs in real time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -u celestia-appd.service -f\n")),(0,a.kt)("p",null,"To check if your node is in sync before going forward:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s localhost:26657/status | jq .result | jq .sync_info\n")),(0,a.kt)("p",null,"Make sure that you have ",(0,a.kt)("inlineCode",{parentName:"p"},'"catching_up": false'),", otherwise leave it running\nuntil it is in sync."),(0,a.kt)("h2",{id:"data-availability-nodes"},"Data availability nodes"),(0,a.kt)("h3",{id:"celestia-full-storage-node"},"Celestia full storage node"),(0,a.kt)("p",null,"Create Celestia Full Storage Node systemd file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-full.service\n[Unit]\nDescription=celestia-full Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which celestia) full start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,a.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-full.service\n")),(0,a.kt)("p",null,"Enable and start celestia-full daemon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable celestia-full\nsudo systemctl start celestia-full && sudo journalctl -u \\\ncelestia-full.service -f\n")),(0,a.kt)("p",null,"You should be seeing logs coming through of the full storage node syncing."),(0,a.kt)("h3",{id:"celestia-bridge-node"},"Celestia bridge node"),(0,a.kt)("p",null,"Create Celestia Bridge systemd file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-bridge.service\n[Unit]\nDescription=celestia-bridge Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which celestia) bridge start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,a.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-bridge.service\n")),(0,a.kt)("p",null,"Enable and start celestia-bridge daemon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable celestia-bridge\nsudo systemctl start celestia-bridge && sudo journalctl -u \\\ncelestia-bridge.service -f\n")),(0,a.kt)("p",null,"Now, the Celestia bridge node will start syncing headers and storing blocks\nfrom celestia-app."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: At startup, we can see the ",(0,a.kt)("inlineCode",{parentName:"p"},"multiaddress")," from Celestia Bridge Node.\nThis is ",(0,a.kt)("strong",{parentName:"p"},"needed for future Light Node")," connections and communication between\nCelestia Bridge Nodes")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"NODE_IP=<ip-address>\n/ip4/$NODE_IP/tcp/2121/p2p/12D3KooWD5wCBJXKQuDjhXFjTFMrZoysGVLtVht5hMoVbSLCbV22\n")),(0,a.kt)("p",null,"You should be seeing logs coming through of the bridge node syncing."),(0,a.kt)("h3",{id:"celestia-light-node"},"Celestia light node"),(0,a.kt)("p",null,"Start the Light Node as daemon process in the background"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-lightd.service\n[Unit]\nDescription=celestia-lightd Light Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which celestia) light start --core.ip <ip-address>\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,a.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-lightd.service\n")),(0,a.kt)("p",null,"Enable and start celestia-lightd daemon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable celestia-lightd\nsudo systemctl start celestia-lightd\n")),(0,a.kt)("p",null,"Check if daemon has been started correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status celestia-lightd\n")),(0,a.kt)("p",null,"Check daemon logs in real time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -u celestia-lightd.service -f\n")),(0,a.kt)("p",null,"Now, the Celestia Light Node will start syncing headers.\nAfter sync is finished, Light Node will do Data Availability\nSampling (DAS) from the Bridge Node."))}p.isMDXComponent=!0}}]);