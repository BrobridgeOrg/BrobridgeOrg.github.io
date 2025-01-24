"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[486],{6170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(4848),r=t(8453);const a={},s="Dispatcher Configuration",c={id:"config/dispatcher-config",title:"Dispatcher Configuration",description:"1. Deployment",source:"@site/docs/config/dispatcher-config.md",sourceDirName:"config",slug:"/config/dispatcher-config",permalink:"/docs/config/dispatcher-config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Oracle Golden Gate to Kafka Adapter",permalink:"/docs/config/adapter-config/ogg"},next:{title:"Proprietiery Atomic Modules",permalink:"/docs/config/atomic_modules"}},o={},l=[{value:"<em>1.</em> Deployment",id:"1-deployment",level:2},{value:"<em>2.</em> Resources",id:"2-resources",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"dispatcher-configuration",children:"Dispatcher Configuration"})}),"\n",(0,i.jsxs)(n.h2,{id:"1-deployment",children:[(0,i.jsx)(n.em,{children:"1."})," Deployment"]}),"\n",(0,i.jsx)(n.p,{children:"Dispatcher is designed to be deployed as is. Below is an example of a dispatcher .yaml file for kubernetes deployment."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  labels:\n    app: gravity\n    component: dispatcher\n    release: gravity\n  name: gravity-dispatcher\n  namespace: gravity2-lab\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: gravity\n      component: dispatcher\n      release: gravity\n  serviceName: ""\n  template:\n    metadata:\n      labels:\n        app: gravity\n        component: dispatcher\n        release: gravity\n    spec:\n      containers:\n        - env:\n            - name: GRAVITY_DISPATCHER_GRAVITY_HOST\n              value: gravity-nats\n            - name: GRAVITY_DISPATCHER_GRAVITY_PORT\n              value: "4777"\n            - name: GRAVITY_DISPATCHER_GRAVITY_DOMAIN\n              value: "default"\n          image: <your image registry>\n          imagePullPolicy: IfNotPresent\n          name: gravity-dispatcher\n          resources:\n            limits:\n              cpu: "4"\n              memory: 4Gi\n            requests:\n              cpu: 100m\n              memory: 100Mi\n      initContainers:\n        - command:\n            - sh\n            - -c\n            - until nc -z -w 2 gravity-nats 4777; do echo watting for gravity-nats:4777; sleep 1; done\n          image: busybox:1.28\n          imagePullPolicy: IfNotPresent\n          name: init-gravity-dispatcher\n      securityContext: {}\n\n'})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GRAVITY_DISPATCHER_GRAVITY_HOST"}),(0,i.jsx)(n.td,{children:"NATs cluster of which dispatcher will operate on"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GRAVITY_DISPATCHER_GRAVITY_PORT"}),(0,i.jsx)(n.td,{children:"Port of which the dispatcher will communicate on"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"GRAVITY_DISPATCHER_GRAVITY_DOMAIN"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/core-concepts",children:"Data Domain"})," of which the dispatcher will operate on"]})]})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"2-resources",children:[(0,i.jsx)(n.em,{children:"2."})," Resources"]}),"\n",(0,i.jsx)(n.p,{children:"You may also configure the amount of resources a dispatcher have access to. In this example, dispatcher will have access to 4 CPUs and 4 GiB of memory at most,\nand at minimum, the dispatcher will consume 100milli-CPUs (0.1 CPU) and 100MiB of memory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'resources:\n  limits:\n    cpu: "4"\n    memory: 4Gi\n  requests:\n    cpu: 100m\n    memory: 100Mi\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);