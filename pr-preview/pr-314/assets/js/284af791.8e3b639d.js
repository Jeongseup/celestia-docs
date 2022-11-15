"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8258],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6680:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Overview"},i="Overview to running nodes on Celestia",l={unversionedId:"nodes/overview",id:"nodes/overview",title:"Overview to running nodes on Celestia",description:"There are many ways you can participate in the Celestia network.",source:"@site/docs/nodes/overview.md",sourceDirName:"nodes",slug:"/nodes/overview",permalink:"/pr-preview/pr-314/nodes/overview",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/overview.md",tags:[],version:"current",frontMatter:{sidebar_label:"Overview"},sidebar:"nodes",next:{title:"Types of Nodes",permalink:"/pr-preview/pr-314/category/types-of-nodes"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview-to-running-nodes-on-celestia"},"Overview to running nodes on Celestia"),(0,o.kt)("p",null,"There are many ways you can participate in the Celestia network."),(0,o.kt)("p",null,"Celestia node operators can run several options on the network."),(0,o.kt)("p",null,"Consensus:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-314/nodes/validator-node"},"Validator Node"),": This type of node participates\nin consensus by producing and voting on blocks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-314/nodes/consensus-full-node"},"Consensus Full Node"),": A Celestia-App Full Node\nto sync blockchain history.")),(0,o.kt)("p",null,"Data Availability:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-314/nodes/bridge-node"},"Bridge Node"),": This node bridges blocks between the\nData-Availability network and the Consensus network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-314/nodes/full-storage-node"},"Full Storage Node"),": This node stores all\nthe data but does not connect to Consensus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-314/nodes/light-node"},"Light Node"),": Light clients conduct data availability\nsampling on the Data Availability network.")),(0,o.kt)("p",null,"You can learn more about how to setup each different node by going through\neach tutorial guide."),(0,o.kt)("p",null,"Please provide any feedback on the tutorials and guides. If you notice\na bug or issue, feel free to make a Pull Request or write up a Github\nIssue ticket!"))}p.isMDXComponent=!0}}]);