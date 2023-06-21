"use strict";(self.webpackChunkbrobridge_org_github_io=self.webpackChunkbrobridge_org_github_io||[]).push([[5776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(r),y=l,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return r?a.createElement(m,n(n({ref:t},i),{},{components:r})):a.createElement(m,n({ref:t},i))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:l,n[1]=p;for(var c=2;c<o;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(7462),l=(r(7294),r(3905));const o={sidebar_position:1},n="Deploy on Kubernetes",p={unversionedId:"deploy/deploy-k8s",id:"version-2.0.0/deploy/deploy-k8s",title:"Deploy on Kubernetes",description:"Get assets",source:"@site/versioned_docs/version-2.0.0/deploy/deploy-k8s.md",sourceDirName:"deploy",slug:"/deploy/deploy-k8s",permalink:"/docs/deploy/deploy-k8s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.0/deploy/deploy-k8s.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deploy ",permalink:"/docs/category/deploy-"},next:{title:"Reference",permalink:"/docs/category/reference"}},s={},c=[{value:"Get assets",id:"get-assets",level:2},{value:"Deploy Source/Tartget Database",id:"deploy-sourcetartget-database",level:2},{value:"Source",id:"source",level:3},{value:"Target",id:"target",level:3},{value:"Deploy NATS/JetStream",id:"deploy-natsjetstream",level:2},{value:"Deploy Dispatcher",id:"deploy-dispatcher",level:2},{value:"Deploy Adapter",id:"deploy-adapter",level:2},{value:"Deploy Atomic",id:"deploy-atomic",level:2}],i={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-on-kubernetes"},"Deploy on Kubernetes"),(0,l.kt)("h2",{id:"get-assets"},"Get assets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/BrobridgeOrg/gravity-k8s.git\ncd gravity-k8s\n")),(0,l.kt)("h2",{id:"deploy-sourcetartget-database"},"Deploy Source/Tartget Database"),(0,l.kt)("h3",{id:"source"},"Source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f k8s/source.yaml\n")),(0,l.kt)("h3",{id:"target"},"Target"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f k8s/target.yaml\n")),(0,l.kt)("h2",{id:"deploy-natsjetstream"},"Deploy NATS/JetStream"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f k8s/jetstream.yaml\n")),(0,l.kt)("h2",{id:"deploy-dispatcher"},"Deploy Dispatcher"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f k8s/dispatcher.yaml\n")),(0,l.kt)("h2",{id:"deploy-adapter"},"Deploy Adapter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f k8s/adapter.yaml\n")),(0,l.kt)("h2",{id:"deploy-atomic"},"Deploy Atomic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f k8s/atomic.yaml\n")))}u.isMDXComponent=!0}}]);