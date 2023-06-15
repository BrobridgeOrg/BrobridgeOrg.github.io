"use strict";(self.webpackChunkbrobridge_org_github_io=self.webpackChunkbrobridge_org_github_io||[]).push([[1725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(m,n(n({ref:t},u),{},{components:r})):a.createElement(m,n({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,n[1]=c;for(var l=2;l<o;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),i=(r(7294),r(3905));const o={sidebar_position:2},n="Gravity Architecture",c={unversionedId:"concept/gravity-architecture",id:"version-2.0.0/concept/gravity-architecture",title:"Gravity Architecture",description:"This page primarily introduces the workflow and architecture of Gravity. The workflow mainly explains the operational logic of Gravity, while the architecture section is dedicated to illustrating how various components of Gravity interact and collaborate with each other.",source:"@site/versioned_docs/version-2.0.0/concept/gravity-architecture.md",sourceDirName:"concept",slug:"/concept/gravity-architecture",permalink:"/docs/concept/gravity-architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.0/concept/gravity-architecture.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data Mesh",permalink:"/docs/concept/data-mesh"},next:{title:"Data Product",permalink:"/docs/concept/data-product"}},s={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Infrastructure Layer",id:"infrastructure-layer",level:3},{value:"Platform Layer",id:"platform-layer",level:3},{value:"Application Layer",id:"application-layer",level:3},{value:"Workflow",id:"workflow",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gravity-architecture"},"Gravity Architecture"),(0,i.kt)("p",null,"This page primarily introduces the workflow and architecture of Gravity. The workflow mainly explains the operational logic of Gravity, while the architecture section is dedicated to illustrating how various components of Gravity interact and collaborate with each other."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5673).Z,width:"1152",height:"691"})),(0,i.kt)("h3",{id:"infrastructure-layer"},"Infrastructure Layer"),(0,i.kt)("p",null,"The infrastructure layer of Gravity is primarily composed of NATS JetStream cluster. In addition to serving as the Event Store for Data Products, related metadata, such as rules, tokens, and configurations, are also stored here."),(0,i.kt)("h3",{id:"platform-layer"},"Platform Layer"),(0,i.kt)("p",null,"The platform layer of Gravity is composed of the following components: CLI, Dispatcher, and Adapter. Each of them interacts with the underlying Infrastructure through the Gravity API."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CLI: This is Gravity's main command-line tool for managing resources. It facilitates Product Management, Rule Management, and Token Management."),(0,i.kt)("li",{parentName:"ul"},"Dispatcher: This component is specifically designed to collect and handle incoming messages in accordance with product rules."),(0,i.kt)("li",{parentName:"ul"},"Adapter: The Adapter primarily monitors various data sources (you can view different data source adapters on the component page) and writes corresponding Data Product events into Gravity.")),(0,i.kt)("h3",{id:"application-layer"},"Application Layer"),(0,i.kt)("p",null,"The application layer primarily forms the abstract layer of the Gravity Data Mesh. Here, you can browse the Data Products of each Domain Team, which includes their respective Schemas and Rules, among others. Simultaneously, it also provides visibility into which Data Products are currently being consumed by which Domain Teams, as well as the adapters that are currently in operation."),(0,i.kt)("h2",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(1466).Z,width:"2938",height:"1361"}),"\nOnce Gravity is fully installed, all domain teams can publish their own Data Products according to their needs.\nUsing the above diagram for illustration, Domain Team A and Domain Team B can publish their own Data Products in response to cross-team requirements. Once a Data Product is published, the rest of the domain teams can consume these Data Products based on their specific needs."),(0,i.kt)("p",null,"For example, as depicted in the diagram, Domain Team C consumes Data Products from both Domain Team A and Domain Team B. At the same time, Domain Team C also has the freedom to utilize the Data Products available on the Gravity platform to publish their own Data Products."))}d.isMDXComponent=!0},5673:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/arch-2589f56f261613c11064b5227f41b3e4.webp"},1466:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/workflow-766379f505351d6ff7d787caa6efdbaa.png"}}]);