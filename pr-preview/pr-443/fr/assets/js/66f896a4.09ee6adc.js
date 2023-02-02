"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8981],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var i=n(3117),r=(n(7294),n(3905));const o={},a="Setting Up Your Environment for Ethermint on Celestia",l={unversionedId:"developers/instantiate-ethermint",id:"developers/instantiate-ethermint",title:"Setting Up Your Environment for Ethermint on Celestia",description:"Now the ethermintd binary is built, we need to setup a local network",source:"@site/docs/developers/instantiate-ethermint.md",sourceDirName:"developers",slug:"/developers/instantiate-ethermint",permalink:"/pr-preview/pr-443/fr/developers/instantiate-ethermint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/instantiate-ethermint.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Rollmint Installation",permalink:"/pr-preview/pr-443/fr/developers/rollmint-on-ethermint"},next:{title:"Deploy to Ethermint",permalink:"/pr-preview/pr-443/fr/developers/deploy-solidity-ethermint-foundry"}},s={},c=[{value:"Run A Celestia Light Node",id:"run-a-celestia-light-node",level:2},{value:"Instantiating the Ethermint Rollup",id:"instantiating-the-ethermint-rollup",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-your-environment-for-ethermint-on-celestia"},"Setting Up Your Environment for Ethermint on Celestia"),(0,r.kt)("p",null,"Now the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethermintd")," binary is built, we need to setup a local network\nthat communicates between ",(0,r.kt)("inlineCode",{parentName:"p"},"ethermintd")," and Rollmint."),(0,r.kt)("h2",{id:"run-a-celestia-light-node"},"Run A Celestia Light Node"),(0,r.kt)("p",null,"All sovereign rollups need to submit their transaction data to\nCelestia."),(0,r.kt)("p",null,"Here, we must first setup a Celestia Light Node with testnet tokens."),(0,r.kt)("p",null,"You can do this by following this tutorial ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-443/fr/developers/node-tutorial"},"here"),"."),(0,r.kt)("h2",{id:"instantiating-the-ethermint-rollup"},"Instantiating the Ethermint Rollup"),(0,r.kt)("p",null,"With a Celestia Light Node running in one terminal session,\nwe can proceed to generate the Ethermint rollup."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethermint")," directory, we have a helpful bash script that\nallows you to instantiate a local Ethermint sovereign rollup on Celestia."),(0,r.kt)("admonition",{title:"caution",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you are on macOS, you will need to install md5sha1sum before starting your\nrollup:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install md5sha1sum\n"))),(0,r.kt)("p",null,"Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ethermint\nbash init.sh\n")),(0,r.kt)("p",null,"This bash script does everything needed to initialize your Ethermint\nrollup."),(0,r.kt)("p",null,"First, we need to setup some environment variables."),(0,r.kt)("admonition",{title:"Networks",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The commands below are for Arabica. If you're using Mocha, you'll need to\nreplace the RPC endpoint with ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-443/fr/nodes/mocha-testnet#rpc-endpoints"},"one for Mocha"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NAMESPACE_ID=$(echo $RANDOM | md5sum | head -c 16; echo;)\nDA_BLOCK_HEIGHT=$(curl https://rpc.limani.celestia-devops.dev/block | jq -r '.result.block.header.height')\n")),(0,r.kt)("p",null,"If you are running this on Arabica devnet, you need to run your light node with\nan account that has Arabica devnet tokens. Visit the faucet ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-443/fr/nodes/arabica-devnet#arabica-devnet-faucet"},"here"),"."),(0,r.kt)("p",null,"With this setup complete, we can now start our Ethermint Rollup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ethermintd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://localhost:26659","timeout":60000000000,"gas_limit":6000000,"fee":6000}\' --rollmint.namespace_id $NAMESPACE_ID --rollmint.da_start_height $DA_BLOCK_HEIGHT \n')),(0,r.kt)("p",null,"You should start seeing logs about the chain starting.\nThey will look similar to below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'1:27AM INF Unlocking keyring\n1:27AM INF starting ABCI with Tendermint\n1:27AM INF service start impl=EventBus module=events msg={}\n1:27AM INF service start impl=PubSub module=pubsub msg={}\nbadger 2022/11/23 01:27:54 INFO: All 0 tables opened in 0s\nbadger 2022/11/23 01:27:54 INFO: Discard stats nextEmptySlot: 0\nbadger 2022/11/23 01:27:54 INFO: Set nextTxnTs to 0\n1:27AM INF service start impl=IndexerService module=txindex msg={}\n1:27AM INF WARNING: using default DA block time DABlockTime=30000 module=BlockManager\n1:27AM INF initializing blockchain state from genesis.json\n1:27AM INF created new capability module=ibc name=ports/transfer\n1:27AM INF port binded module=x/ibc/port port=transfer\n1:27AM INF claimed capability capability=1 module=transfer name=ports/transfer\n1:27AM INF asserting crisis invariants inv=1/11 module=x/crisis name=gov/module-account\n1:27AM INF asserting crisis invariants inv=2/11 module=x/crisis name=staking/module-accounts\n1:27AM INF asserting crisis invariants inv=3/11 module=x/crisis name=staking/nonnegative-power\n1:27AM INF asserting crisis invariants inv=4/11 module=x/crisis name=staking/positive-delegation\n1:27AM INF asserting crisis invariants inv=5/11 module=x/crisis name=staking/delegator-shares\n1:27AM INF asserting crisis invariants inv=6/11 module=x/crisis name=bank/nonnegative-outstanding\n1:27AM INF asserting crisis invariants inv=7/11 module=x/crisis name=bank/total-supply\n1:27AM INF asserting crisis invariants inv=8/11 module=x/crisis name=distribution/nonnegative-outstanding\n1:27AM INF asserting crisis invariants inv=9/11 module=x/crisis name=distribution/can-withdraw\n1:27AM INF asserting crisis invariants inv=10/11 module=x/crisis name=distribution/reference-count\n1:27AM INF asserting crisis invariants inv=11/11 module=x/crisis name=distribution/module-account\n1:27AM INF asserted all invariants duration=3.783918 height=0 module=x/crisis\n1:27AM INF service start impl=RPC msg={}\n1:27AM INF service start impl=Node msg={}\n1:27AM INF serving HTTP listen address={"IP":"127.0.0.1","Port":26657,"Zone":""}\n1:27AM INF starting P2P client\n1:27AM INF listening on address=/ip4/143.244.145.92/tcp/26656/p2p/12D3KooWCrCqYheUBURCzzUqgxWFVFvFYPJ6nonTPN9uVQ4cXK5H module=p2p\n1:27AM INF listening on address=/ip4/127.0.0.1/tcp/26656/p2p/12D3KooWCrCqYheUBURCzzUqgxWFVFvFYPJ6nonTPN9uVQ4cXK5H module=p2p\n1:27AM INF no seed nodes - only listening for connections module=p2p\n1:27AM INF starting Celestia Data Availability Layer Client baseURL=http://localhost:26659 module=da_client\n1:27AM INF working in aggregator mode block time=30000\n1:27AM INF Creating and publishing block height=1 module=BlockManager\n1:27AM INF minted coins from module account amount=2059726034250856481aphoton from=mint module=x/bank\n1:27AM INF submitting block to DA layer height=1 module=BlockManager\n1:28AM INF Starting JSON-RPC server address=0.0.0.0:8545\n1:28AM INF Starting JSON WebSocket server address=0.0.0.0:8546\n1:28AM INF successfully submitted rollmint block to DA layer daHeight=25422 module=BlockManager rollmintHeight=1\n1:28AM INF commit synced commit=436F6D6D697449447B5B323130203138352031373920362035322031333820373020313032203135322038302032323920313232203132342036332031382032313920313039203337203832203631203334203139302031323520393020323133203835203232382032323420323232203134203739203131305D3A317D\n1:28AM INF indexed block height=1 module=txindex\n1:28AM INF Creating and publishing block height=2 module=BlockManager\n1:28AM INF minted coins from module account amount=2059726403014551280aphoton from=mint module=x/bank\n1:28AM INF submitting block to DA layer height=2 module=BlockManager\n1:28AM INF successfully submitted rollmint block to DA layer daHeight=25423 module=BlockManager rollmintHeight=2\n1:28AM INF commit synced commit=436F6D6D697449447B5B3630203231332038372032313820383920313920323034203230322031363320383120323235203235352036352032323820313530203232392032333320323139203233322032343420313334203337203134342031303320313634203138382031393720323339203230342032303120323138203130325D3A327D\n1:28AM INF indexed block height=2 module=txindex\n1:28AM INF Creating and publishing block height=3 module=BlockManager\n1:28AM INF minted coins from module account amount=2059726771778267119aphoton from=mint module=x/bank\n1:28AM INF submitting block to DA layer height=3 module=BlockManager\n1:29AM INF successfully submitted rollmint block to DA layer daHeight=25424 module=BlockManager rollmintHeight=3\n1:29AM INF commit synced commit=436F6D6D697449447B5B313520323038203831203131203235332032322037322031393020333220323130203634203235332032303920313839203934203137203431203135203230302039362031383920323820313736203132332037352032392031393320313831203134312032303520323231203232325D3A337D\n1:29AM INF indexed block height=3 module=txindex\n1:29AM INF Creating and publishing block height=4 module=BlockManager\n1:29AM INF minted coins from module account amount=2059727140542003996aphoton from=mint module=x/bank\n1:29AM INF submitting block to DA layer height=4 module=BlockManager\n1:29AM INF successfully submitted rollmint block to DA layer daHeight=25425 module=BlockManager rollmintHeight=4\n1:29AM INF commit synced commit=436F6D6D697449447B5B313433203332203639203732203134342034352037302034302032392032303120393720313137203235312031393320313738203137362031353920323038203231372036312032362031353720353320393820323234203230352031373020313920313034203138372031323220385D3A347D\n1:29AM INF indexed block height=4 module=txindex\n1:29AM INF Creating and publishing block height=5 module=BlockManager\n')),(0,r.kt)("p",null,"With that, we have kickstarted our ",(0,r.kt)("inlineCode",{parentName:"p"},"ethermintd")," network!"))}m.isMDXComponent=!0}}]);