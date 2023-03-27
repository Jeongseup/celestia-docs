"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5139],{3905:(a,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>b});var i=e(7294);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function o(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function s(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t){if(null==a)return{};var e,i,n=function(a,t){if(null==a)return{};var e,i,n={},o=Object.keys(a);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var r=i.createContext({}),c=function(a){var t=i.useContext(r),e=t;return a&&(e="function"==typeof a?a(t):s(s({},t),a)),e},d=function(a){var t=c(a.components);return i.createElement(r.Provider,{value:t},a.children)},h="mdxType",u={inlineCode:"code",wrapper:function(a){var t=a.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(a,t){var e=a.components,n=a.mdxType,o=a.originalType,r=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),h=c(e),p=n,b=h["".concat(r,".").concat(p)]||h[p]||u[p]||o;return e?i.createElement(b,s(s({ref:t},d),{},{components:e})):i.createElement(b,s({ref:t},d))}));function b(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var o=e.length,s=new Array(o);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=a,l[h]="string"==typeof a?a:n,s[1]=l;for(var c=2;c<o;c++)s[c]=e[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},2044:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=e(7462),n=(e(7294),e(3905));const o={sidebar_label:"Data Availability FAQ"},s="Data availability FAQ",l={unversionedId:"concepts/data-availability-faq",id:"concepts/data-availability-faq",title:"Data availability FAQ",description:"What is data availability?",source:"@site/docs/concepts/data-availability-faq.md",sourceDirName:"concepts",slug:"/concepts/data-availability-faq",permalink:"/pr-preview/pr-564/fr/concepts/data-availability-faq",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/data-availability-faq.md",tags:[],version:"current",frontMatter:{sidebar_label:"Data Availability FAQ"},sidebar:"concepts",previous:{title:"The lifecycle of a celestia-app transaction",permalink:"/pr-preview/pr-564/fr/concepts/how-celestia-works/transaction-lifecycle"},next:{title:"Specifications",permalink:"/pr-preview/pr-564/fr/category/specifications"}},r={},c=[{value:"What is data availability?",id:"what-is-data-availability",level:2},{value:"What is the data availability problem?",id:"what-is-the-data-availability-problem",level:2},{value:"How do nodes verify data availability in Celestia?",id:"how-do-nodes-verify-data-availability-in-celestia",level:2},{value:"What is data availability sampling?",id:"what-is-data-availability-sampling",level:2},{value:"What are some of the security assumptions that Celestia makes for data availability sampling?",id:"what-are-some-of-the-security-assumptions-that-celestia-makes-for-data-availability-sampling",level:2},{value:"Why is block reconstruction necessary for security?",id:"why-is-block-reconstruction-necessary-for-security",level:2},{value:"What is data storage?",id:"what-is-data-storage",level:2},{value:"What is the problem around data storage?",id:"what-is-the-problem-around-data-storage",level:2},{value:"What is the difference between data availability and data storage?",id:"what-is-the-difference-between-data-availability-and-data-storage",level:2},{value:"Where does blockchain state fit into this?",id:"where-does-blockchain-state-fit-into-this",level:2},{value:"Why doesn\u2019t Celestia incentivize storage of historical data?",id:"why-doesnt-celestia-incentivize-storage-of-historical-data",level:2},{value:"Who may store historical data if there is no reward?",id:"who-may-store-historical-data-if-there-is-no-reward",level:2},{value:"What are some things blockchains can do to provide stronger assurances of data retrievability?",id:"what-are-some-things-blockchains-can-do-to-provide-stronger-assurances-of-data-retrievability",level:2}],d={toc:c},h="wrapper";function u(a){let{components:t,...o}=a;return(0,n.kt)(h,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-availability-faq"},"Data availability FAQ"),(0,n.kt)("h2",{id:"what-is-data-availability"},"What is data availability?"),(0,n.kt)("p",null,"Data availability answers the question, has this data been published?\nSpecifically, a node will verify data availability when it receives a\nnew block that is getting added to the chain. The node will attempt to\ndownload all the transaction data for the new block to verify availability.\nIf the node can download all the transaction data, then it successfully\nverified data availability, proving that the block data was actually\npublished to the network."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modular VS Monolithic",src:e(5421).Z,width:"3000",height:"1500"})),(0,n.kt)("p",null,"As you\u2019ll see, modular blockchains like Celestia employ other primitives\nthat allow nodes to verify data availability more efficiently. Data\navailability is critical to the security of any blockchain because it\nensures that anyone can inspect the ledger of transactions and verify it.\nData availability becomes particularly problematic when scaling blockchains.\nAs the blocks get bigger, it becomes impractical for normal users to\ndownload all the data, and therefore users can no longer verify the chain."),(0,n.kt)("h2",{id:"what-is-the-data-availability-problem"},"What is the data availability problem?"),(0,n.kt)("p",null,"The problem with data availability occurs when the transaction data for\na newly proposed block cannot be downloaded and verified. This type of\nattack by a block producer is called a data withholding attack, which\nsees the block producer withhold transaction data of a new block."),(0,n.kt)("p",null,"Since transaction data is withheld, nodes cannot update to the latest state.\nSuch an attack can have numerous consequences, from halting a chain to\ngaining the ability to steal funds. The severity of the consequences will\ndepend on the type of blockchain (L1 or L2) and whether data availability\nis kept on-chain or off-chain. The data availability problem commonly\narises around L2 scaling solutions like rollups and validiums."),(0,n.kt)("h2",{id:"how-do-nodes-verify-data-availability-in-celestia"},"How do nodes verify data availability in Celestia?"),(0,n.kt)("p",null,"In most blockchains, nodes that verify data availability do so by downloading\nall transaction data for a block. If they are able to download all the data,\nthey have verified its availability. In Celestia, light nodes have access to\na new mechanism to verify data availability without needing to download all\nthe data for a block. This new primitive for verifying data availability is\ncalled data availability sampling."),(0,n.kt)("h2",{id:"what-is-data-availability-sampling"},"What is data availability sampling?"),(0,n.kt)("p",null,"Data availability sampling is a mechanism for light nodes to verify data\navailability without having to download all data for a block. Data availability\nsampling (DAS) works by having light nodes conduct multiple rounds of random\nsampling for small portions of block data. As a light node completes more\nrounds of sampling for block data, it increases its confidence that data is\navailable. Once the light node successfully reaches a predetermined confidence\nlevel (e.g. 99%) it will consider the block data as available."),(0,n.kt)("p",null,"Want a simpler explanation? Check out ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/nickwh8te/status/1559977957195751424"},"this thread"),"\non how data availability sampling is like flipping a coin."),(0,n.kt)("h2",{id:"what-are-some-of-the-security-assumptions-that-celestia-makes-for-data-availability-sampling"},"What are some of the security assumptions that Celestia makes for data availability sampling?"),(0,n.kt)("p",null,"Celestia assumes that there is a minimum number of light nodes that are\nconducting data availability sampling for a given block size. This assumption\nis necessary so that a full node can reconstruct an entire block from the\nportions of data light nodes sampled and stored. The amount of light nodes\nthat are needed will depend on the block size - for bigger blocks more light\nnodes are assumed to be running."),(0,n.kt)("p",null,"A second notable assumption that is made by light nodes is that they are\nconnected to at least one honest full node. This ensures that they can receive\nfraud proofs for incorrectly erasure coded blocks. If a light node is not\nconnected to an honest full node, such as during an eclipse attack, it can\u2019t\nverify that the block is improperly constructed."),(0,n.kt)("h2",{id:"why-is-block-reconstruction-necessary-for-security"},"Why is block reconstruction necessary for security?"),(0,n.kt)("p",null,"In Celestia, blocks need to be erasure coded so that there is redundant\ndata to aid the data availability sampling process. However, nodes tasked\nwith erasure coding the data could do so incorrectly. Since Celestia uses\nfraud proofs to verify that erasure coding is incorrect, the full block\ndata is needed to generate a bad encoding fraud proof."),(0,n.kt)("p",null,"There could be a situation where validators only provide data to light nodes\nand not full nodes. If the full nodes don\u2019t have the ability to reconstruct the\nfull block from the portions of data stored by light nodes, they wouldn\u2019t be\nable to generate a bad encoding fraud proof."),(0,n.kt)("h2",{id:"what-is-data-storage"},"What is data storage?"),(0,n.kt)("p",null,"Data storage is concerned with the ability to store and access past transaction data."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Modular VS Monolithic",src:e(943).Z,width:"3000",height:"1500"})),(0,n.kt)("p",null,"Data storage and retrieval is needed for multiple purposes, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reading the information of a previous transaction"),(0,n.kt)("li",{parentName:"ul"},"Syncing a node"),(0,n.kt)("li",{parentName:"ul"},"Indexing and serving transaction data"),(0,n.kt)("li",{parentName:"ul"},"Retrieving NFT information")),(0,n.kt)("h2",{id:"what-is-the-problem-around-data-storage"},"What is the problem around data storage?"),(0,n.kt)("p",null,"The issue with data storage is whether past transaction data can be stored and\nsuccessfully retrieved at a later time. The inability to retrieve historical\ntransaction data can cause problems, such as users being unable to access\ninformation about their past transactions or nodes that cannot sync from genesis.\nLuckily, the assumptions around storing and accessing past data are weak.\nOnly a single copy of a blockchain\u2019s history needs to be accessible for users\nto gain access to historical transaction data. In other words, data storage\nsecurity is a 1 of N honesty assumption."),(0,n.kt)("h2",{id:"what-is-the-difference-between-data-availability-and-data-storage"},"What is the difference between data availability and data storage?"),(0,n.kt)("p",null,"Data availability is about verifying that transaction data for a new block is\npublic and available. In contrast, data storage involves storing and accessing\npast transaction data from old blocks. Data availability is fundamental to the\nsecurity of a blockchain because it requires an honest majority assumption,\nwhereas data storage only requires a 1 of N assumption. So, it is crucial to\nsolve the data availability problem, while the problem with data storage is\nless critical to blockchain security."),(0,n.kt)("h2",{id:"where-does-blockchain-state-fit-into-this"},"Where does blockchain state fit into this?"),(0,n.kt)("p",null,"Up until now it\u2019s been all about transaction data, but blockchain state is a\nrelated topic. The state is different from transaction data. Specifically, the\nstate is like a current snapshot of the network, which includes information\nabout account balances, smart contract balances, and validator set info.\n",(0,n.kt)("a",{parentName:"p",href:"https://forum.celestia.org/t/the-state-growth-problem-in-a-modular-blockchain-ecosystem/325"},"Problems that arise"),"\nfrom the size of the state are different in nature than those around\ndata availability and retrievability."),(0,n.kt)("h2",{id:"why-doesnt-celestia-incentivize-storage-of-historical-data"},"Why doesn\u2019t Celestia incentivize storage of historical data?"),(0,n.kt)("p",null,"Most blockchains don\u2019t incentivize storage of data because it shouldn\u2019t be the\nresponsibility of a blockchain to guarantee past data will be retrievable forever.\nIn addition, the data storage problem only requires a single party to store and\nprovide the data for users, which is not a strong problem. As such, Celestia\u2019s\npurpose is to provide a secure and scalable way to verify the availability of data.\nOnce data has been verified as available, the job of storing and retrieving\nhistorical data is left up to other entities that require the data. Luckily, there\nare natural incentives for outside parties to store and serve historical data to users."),(0,n.kt)("h2",{id:"who-may-store-historical-data-if-there-is-no-reward"},"Who may store historical data if there is no reward?"),(0,n.kt)("p",null,"There are multiple types of actors that may be likely to store historical data.\nSome of those include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Block explorers that provide access to past transaction data."),(0,n.kt)("li",{parentName:"ul"},"Indexers that provide API queries for past data."),(0,n.kt)("li",{parentName:"ul"},"Applications or rollups that require historical data for certain processes."),(0,n.kt)("li",{parentName:"ul"},"Users that want to guarantee that they will have access to their transaction history.")),(0,n.kt)("h2",{id:"what-are-some-things-blockchains-can-do-to-provide-stronger-assurances-of-data-retrievability"},"What are some things blockchains can do to provide stronger assurances of data retrievability?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reward nodes based on the amount of transaction data they store and requests for data\nthey serve (this is the case with some data storage blockchains, like ",(0,n.kt)("a",{parentName:"li",href:"https://filecoin.io"},"Filecoin"),")."),(0,n.kt)("li",{parentName:"ul"},"Publish transaction data onto a data storage blockchain that incentives storing and\nserving requests for historical data.")))}u.isMDXComponent=!0},5421:(a,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/Data-availability-6efd3c1f84655972bae9f36a58eb4124.png"},943:(a,t,e)=>{e.d(t,{Z:()=>i});const i=e.p+"assets/images/Data-storage-154b75e12581f9ee83a1120ee1ca1c1e.png"}}]);