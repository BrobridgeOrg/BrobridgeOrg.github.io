"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[456],{2067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(4848),s=t(8453);const i={sidebar_position:4},l="Gravity \u90e8\u7f72\u6d41\u7a0b",a={id:"install_guide/deployment",title:"Gravity \u90e8\u7f72\u6d41\u7a0b",description:"\u672c\u7bc0\u5c07\u793a\u7bc4\u5982\u4f55\u5728\u4e00\u500b\u4e7e\u6de8\u7684 K8s cluster \u74b0\u5883\u5c55\u958b\u4e00\u500b\u5168\u65b0\u7684 Gravity \u90e8\u7f72\u3002",source:"@site/docs/install_guide/deployment.md",sourceDirName:"install_guide",slug:"/install_guide/deployment",permalink:"/zh-TW/docs/install_guide/deployment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"Prepare Kubernetes",permalink:"/zh-TW/docs/install_guide/install_k8"},next:{title:"Create Atomic flow",permalink:"/zh-TW/docs/install_guide/atomic_guide"}},c={},d=[{value:"\u6aa2\u67e5 Gravity \u8a2d\u5b9a\u6a94 (YAML \u683c\u5f0f)",id:"\u6aa2\u67e5-gravity-\u8a2d\u5b9a\u6a94-yaml-\u683c\u5f0f",level:2},{value:"Configmap",id:"configmap",level:3},{value:"Database \u5bc6\u78bc secret \u8a2d\u5b9a",id:"database-\u5bc6\u78bc-secret-\u8a2d\u5b9a",level:3},{value:"NATS (StatefulSet &amp; Service)",id:"nats-statefulset--service",level:3},{value:"Dispatcher",id:"dispatcher",level:3},{value:"Adapter",id:"adapter",level:3},{value:"Atomic",id:"atomic",level:3},{value:"\u4e0a\u50b3 flow \u81f3 Gitea",id:"\u4e0a\u50b3-flow-\u81f3-gitea",level:3},{value:"\u914d\u7f6e Configmap &amp; Secret",id:"\u914d\u7f6e-configmap--secret",level:3},{value:"\u90e8\u7f72 NATS",id:"\u90e8\u7f72-nats",level:2},{value:"\u90e8\u7f72 Dispatcher",id:"\u90e8\u7f72-dispatcher",level:2},{value:"\u5efa\u7acb\u8207\u7ba1\u7406 Data Product",id:"\u5efa\u7acb\u8207\u7ba1\u7406-data-product",level:2},{value:"Data Product \u8207\u4f86\u6e90\u8cc7\u6599\u5eab\u7684\u95dc\u4fc2\u8aaa\u660e",id:"data-product-\u8207\u4f86\u6e90\u8cc7\u6599\u5eab\u7684\u95dc\u4fc2\u8aaa\u660e",level:3},{value:"\u5efa\u7acb Data Product",id:"\u5efa\u7acb-data-product",level:3},{value:"\u7531 Event \u7522\u751f Data Product \u7684\u5167\u5bb9",id:"\u7531-event-\u7522\u751f-data-product-\u7684\u5167\u5bb9",level:3},{value:"\u7ba1\u7406 Data Product",id:"\u7ba1\u7406-data-product",level:3},{value:"\u90e8\u7f72 Adapter",id:"\u90e8\u7f72-adapter",level:2},{value:"\u90e8\u7f72 Atomic",id:"\u90e8\u7f72-atomic",level:2}];function o(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"gravity-\u90e8\u7f72\u6d41\u7a0b",children:"Gravity \u90e8\u7f72\u6d41\u7a0b"})}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u7bc0\u5c07\u793a\u7bc4\u5982\u4f55\u5728\u4e00\u500b\u4e7e\u6de8\u7684 K8s cluster \u74b0\u5883\u5c55\u958b\u4e00\u500b\u5168\u65b0\u7684 Gravity \u90e8\u7f72\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6aa2\u67e5-gravity-\u8a2d\u5b9a\u6a94-yaml-\u683c\u5f0f",children:"\u6aa2\u67e5 Gravity \u8a2d\u5b9a\u6a94 (YAML \u683c\u5f0f)"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u7522\u54c1\u5b89\u88dd\u9700\u8981\u7684\u8a2d\u5b9a\u6a94\u5982\u4e0b\uff1a(\u6a94\u6848\u540d\u7a31\u70ba\u7bc4\u4f8b\uff0c\u5be6\u969b\u540d\u7a31\u53ef\u80fd\u6709\u6240\u4e0d\u540c)"}),"\n",(0,r.jsx)(n.h3,{id:"configmap",children:"Configmap"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"03-bbg-configmap.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: labcm\n  namespace: bbg-gravity\ndata:\n  TZ: Asia/Taipei\n  SOURCE_DATABASE_NAME: source-mssql\n  SOURCE_DATABASE_HOST: source-mssql.lab-db\n  SOURCE_DATABASE_PORT: "1433"\n  SOURCE_DB_MSSQL_DB_NAME: TestDB\n  SOURCE_DB_MSSQL_TB1_NAME: mi_source\n  SOURCE_DATABASE_USER: SA\n  TARGET_DB_MYSQL_NAME: target2-mysql\n  TARGET_DB_MYSQL_HOST: target2-mysql.lab-db\n  TARGET_DB_MYSQL_PORT: "3306"\n  TARGET_DB_MYSQL_DB_NAME: testdb\n  TARGET_DB_MYSQL_TB1_NAME: target_id13\n  TARGET_DB_MYSQL_USER: mysql\n  GIT_BRANCH: master\n  GIT_USER: demo\n  GIT_REPO_URL: demo/gravity2-lab.git\n  GIT_TOKEN: 61bc6c9a2c17fe69c81fd5b0a460402637e76b8d\n  GIT_URL: gitea:3000\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63d0\u793a"})," \uff1a\u4e0a\u8ff0\u6709\u95dc\u8cc7\u6599\u5eab\u9023\u63a5\u8a2d\u5b9a\u7684\u6b04\u4f4d\u503c\u4f9d\u7167\u5be6\u969b\u8a2d\u5b9a\u800c\u6709\u6240\u4e0d\u540c"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GIT_TOKEN: \u7531 gitea-token.txt \u7684 Gitea \u9023\u7dda Token \u53d6\u4ee3"}),"\n",(0,r.jsx)(n.li,{children:"GIT_USER: \u7531\u4e0a\u4e00\u7ae0\u7bc0\u5b89\u88dd gitea \u6642\u6240\u8a3b\u518a\u7684\u5e33\u865f\u53d6\u4ee3"}),"\n",(0,r.jsx)(n.li,{children:"GIT_REPO_URL: \u7531\u4e0a\u4e00\u7ae0\u7bc0\u5b89\u88dd gitea \u6642\u6240\u8a3b\u518a\u7684\u5e33\u865f\u548cRepository\u540d\u7a31\u53d6\u4ee3"}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f\u70ba: \u5e33\u865f/Repository\u540d\u7a31.git"}),"\n",(0,r.jsx)(n.li,{children:"\u6b64\u4f8b\u7684 GIT_URL \u76f4\u63a5\u900f\u904e k8s service name \u8207 container port \u5167\u90e8\u53e2\u96c6\u7db2\u8def\u9023\u63a5\u800c\u975e\u900f\u904e nodePort"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"database-\u5bc6\u78bc-secret-\u8a2d\u5b9a",children:"Database \u5bc6\u78bc secret \u8a2d\u5b9a"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u70ba\u4e86\u907f\u514d\u76f4\u63a5 Password \u4ee5\u660e\u6587\u51fa\u73fe\u5728 yaml \u4e0a, \u6545\u9808\u900f\u904e\u5bec\u6a4b\u63d0\u4f9b\u7684 pwd_encrypt \u5de5\u5177\u4f86\u7522\u751fsecret"}),"\n",(0,r.jsxs)(n.li,{children:["\u6307\u4ee4: ",(0,r.jsx)(n.code,{children:"$ echo -n $(./pwd_encrypt --plaintext 'MyPassword') | base64 -w 0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4ee5\u4e0b\u5c07\u4ee5 ",(0,r.jsx)(n.code,{children:"1qaz@WSX"})," \u70ba\u4f8b\u4f5c\u70ba ",(0,r.jsx)(n.code,{children:"MyPassword"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"04-bbg-secret.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n    name: labsecret\n    namespace: bbg-gravity\ntype: Opaque\ndata:\n    db_source_mssql_password: OGU1Y2E4NDM5ZGRlYmJhYzliZjJiODNjYWY0YmVmN2E= \n    db_target_mysql_password: OGU1Y2E4NDM5ZGRlYmJhYzliZjJiODNjYWY0YmVmN2E=\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"OGU1Y2E4NDM5ZGRlYmJhYzliZjJiODNjYWY0YmVmN2E="})," \u660e\u6587\u70ba ",(0,r.jsx)(n.code,{children:"1qaz@WSX"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"nats-statefulset--service",children:"NATS (StatefulSet & Service)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"05-bbg-nats.yaml"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"StatefulSet \u91cd\u9ede"}),"\uff1a\u78ba\u8a8d NATS \u53e2\u96c6\u9593\u7684\u8def\u7531\u8a2d\u5b9a\u662f\u5426\u6b63\u78ba"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  replicas: 3\n...\n            - --routes=lab-gravity-nats-0.lab-gravity-nats-mgmt.gravity2-lab.svc.cluster.local:6222\n            - --routes=lab-gravity-nats-1.lab-gravity-nats-mgmt.gravity2-lab.svc.cluster.local:6222\n            - --routes=lab-gravity-nats-2.lab-gravity-nats-mgmt.gravity2-lab.svc.cluster.local:6222            \n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Service \u91cd\u9ede"}),"\uff1a\u78ba\u8a8d NATS \u53e2\u96c6\u9593\u6e9d\u901a\u7684 port \u8207\u5c0d\u5916\u9023\u7dda port"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    - name: tcp-lab-gravity-nats\n      port: 4222\n...\n    - name: tcp-lab-gravity-nats-mgmt\n      port: 6222\n"})}),"\n",(0,r.jsx)(n.h3,{id:"dispatcher",children:"Dispatcher"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"06-bbg-dispatcher.yaml (StatefulSet)"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u91cd\u9ede"}),"\uff1a\u78ba\u8a8d\u670d\u52d9\u540d\u7a31\u8207 port \u6709\u7121\u932f\u8aa4"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'        - env:\n            - name: GRAVITY_DISPATCHER_GRAVITY_HOST\n              value: lab-gravity-nats\n            - name: GRAVITY_DISPATCHER_GRAVITY_PORT\n              value: "4222"\n            - name: GRAVITY_DISPATCHER_GRAVITY_DOMAIN\n              value: "default"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"adapter",children:"Adapter"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"07-bbg-adapter-mssql.yaml (StatefulSet)"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u91cd\u9ede"}),"\uff1a\u8a2d\u5b9a\u4f86\u6e90\u8cc7\u6599\u5eab\u5c0d\u63a5\u8cc7\u8a0a (\u5bc6\u78bc\u9664\u5916)"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'              "sources": {\n                "mssql_source": {\n                  "disabled": false,\n                  "host": "source-mssql",\n                  "port": 1433,\n                  "username": "SA",\n                  "dbname": "TestDB",\n                  "param": "",\n                  "initialLoad": false,\n                  "interval": 1,\n                  "tables": {\n                    "dbo.mi_source":{\n                      "events": {\n                        "snapshot": "misrcInitialize",\n                        "create": "misrcCreate",\n                        "update": "misrcUpdate",\n                        "delete": "misrcDelete"\n                      }\n                    }\n                  }\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u91cd\u9ede"}),"\uff1a\u5728 \u201cenv\u201c \u5b9a\u7fa9\u7684 DB \u5bc6\u78bc\u74b0\u5883\u8b8a\u6578\u540d\u7a31\uff0c\u5fc5\u9808\u8207 \u201csource\u201c \u7684\u540d\u7a31\u4e00\u81f4 (\u898f\u5247\uff1a\u8b8a\u6578\u540d\u7a31\u70ba\u5927\u5beb\u518d\u52a0\u4e0a \u201d_PASSWORD\u201d)\n",(0,r.jsx)(n.img,{alt:"image",src:t(4463).A+"",width:"900",height:"366"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"atomic",children:"Atomic"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"08-bbg-atomic.yaml (Deployment & Service)"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u91cd\u9ede"}),"\uff1a\u78ba\u8a8d\u5f8c\u7e8c\u57f7\u884c git clone \u7684\u6307\u4ee4\u6240\u8f09\u5165\u7684\u74b0\u5883\u8b8a\u6578\u662f\u6b63\u78ba\u7684"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" - ......; test -d /data/atomic/.git && rm -rf /data/atomic; git clone -b ${GIT_BRANCH} --single-branch http://${GIT_USER}:${GIT_TOKEN}@${GIT_URL}/${GIT_REPO_URL} /data/atomic\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4e0a\u50b3-flow-\u81f3-gitea",children:"\u4e0a\u50b3 flow \u81f3 Gitea"}),"\n",(0,r.jsx)(n.p,{children:"\u53d6\u5f97 Gitea \u7684\u9023\u7dda Token\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat gitea-token.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5207\u63db\u5230 ",(0,r.jsx)(n.code,{children:"flow"})," \u76ee\u9304\u521d\u59cb\u5316\u4e26\u4e0a\u50b3 Atomic flow"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63d0\u793a"})," : \u6307\u4ee4\u4e2d\u7684 git remote add  origin \u9700\u4fee\u6539\u6210\u4e0a\u8ff0 gitea \u8a3b\u518a\u7684\u5e33\u865f\u4ee5\u53ca\u4e0a\u8ff0\u6b65\u9a5f\u53d6\u5f97\u7684 token\n\u683c\u5f0f\u5982 : ",(0,r.jsx)(n.code,{children:"http://<gitea_user>:<token>@<gitea_svc_ip:port>/<gitea_user>/<repository_name>.git"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd /flow\nrm -rf .git\ngit init\ngit add -A\ngit commit -m 'from scratch'\ngit remote add origin http://demo:4adc8cd4687c92769349df9fbc878e955b782b0a@192.168.100.154:31300/demo/gravity2-lab.git\ngit push -u origin master --force\ncd ../\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e-configmap--secret",children:"\u914d\u7f6e Configmap & Secret"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)("mark",{children:[(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u4ee5\u4e0b\u6307\u4ee4\u4e2d\u6240\u6709.yaml \u6a94\u7686\u70ba\u70ba\u7bc4\u4f8b\u540d\u7a31\uff0c\u53ef\u80fd\u6703\u8207\u5be6\u969b\u6a94\u6848\u540d\u7a31\u4e0d\u540c"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"configmap"})," \u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"GIT_TOKEN"})," \u70ba\u4e0a\u6b65\u9a5f\u6240\u7372\u5f97\u7684 gitea token \u4e26\u5957\u7528\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sed -i 's/GIT_TOKEN: .*/GIT_TOKEN: 4adc8cd4687c92769349df9fbc878e955b782b0a/' 03-bbg-configmap.yaml\nkubectl apply -f 03-bbg-configmap.yaml  -f 04-bbg-secret.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u90e8\u7f72-nats",children:"\u90e8\u7f72 NATS"}),"\n",(0,r.jsx)(n.p,{children:"\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f 05-bbg-nats.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u78ba\u8a8d pod \u904b\u4f5c\u72c0\u614b: lab-gravity-nats-[012] \u4e09\u500b pod \u6709\u6b63\u5e38 Running"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl -n bbg-gravity get pod \n"})}),"\n",(0,r.jsx)(n.p,{children:"\u78ba\u8a8d svc: lab-gravity-nats \u8207 lab-gravity-nats-mgmt \u670d\u52d9\u6709\u88ab\u5efa\u7acb\u4e14 port number \u6b63\u78ba"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl -n bbg-gravity get svc \n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u90e8\u7f72-dispatcher",children:"\u90e8\u7f72 Dispatcher"}),"\n",(0,r.jsx)(n.p,{children:"\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f 06-bbg-dispatcher.yaml \n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b lab-gravity-dispatcher-0 \u9019\u500b pod \u662f\u5426\u6709\u6b63\u5e38 Running"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl -n bbg-gravity get pod\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5efa\u7acb\u8207\u7ba1\u7406-data-product",children:"\u5efa\u7acb\u8207\u7ba1\u7406 Data Product"}),"\n",(0,r.jsx)(n.p,{children:"\u7ae0\u7bc0\u4e8c\u5df2\u5b9a\u7fa9 Data Product \u70ba Gravity \u7684\u57fa\u672c\u8cc7\u6599\u96c6 (Data Set) \u8655\u7406\u55ae\u5143\uff0c\u672c\u7ae0\u5c07\u4ecb\u7d39 Data Product \u7684\u5be6\u969b\u5167\u5bb9\u4ee5\u53ca\u5176\u5efa\u7acb\u8207\u7ba1\u7406\u7684\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"data-product-\u8207\u4f86\u6e90\u8cc7\u6599\u5eab\u7684\u95dc\u4fc2\u8aaa\u660e",children:"Data Product \u8207\u4f86\u6e90\u8cc7\u6599\u5eab\u7684\u95dc\u4fc2\u8aaa\u660e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7576\u8cc7\u6599\u5eab\u6709\u4efb\u4f55\u7570\u52d5\u6642\uff0c\u5c0d\u61c9\u7684 CDC \u6a21\u7d44\u5c07\u6703\u7522\u751f CDC \u4e8b\u4ef6 (event)\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7d93\u7531 Gravity Adapter\uff0cCDC event \u5c07\u6703\u8f49\u70ba Gravity \u80fd\u8fa8\u8b58\u7684\u683c\u5f0f\uff0c\u8b93 Gravity \u7cfb\u7d71\u9032\u884c\u9032\u4e00\u6b65\u8655\u7406\u4ee5\u7522\u751f Data Product\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5efa\u7acb-data-product",children:"\u5efa\u7acb Data Product"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u8005\u53ef\u900f\u904e\u5982\u4e0b\u6307\u4ee4\u5c07\u4e0a\u8ff0\u7531 CDC \u6a5f\u5236\u81ea\u8cc7\u6599\u5eab\u53d6\u5f97\u7684\u8cc7\u6599 (\u6b64\u6642\u4ee5 event \u5f62\u5f0f\u5448\u73fe) \u9032\u4e00\u6b65\u8f49\u63db\u70ba Data Product\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'/gravity-cli product create misrc --desc="misrc dp" --enabled --schema=./dp_schema.json -s lab-gravity-nats:4222\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u672c\u4f8b\u7528\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,r.jsx)(n.code,{children:"misrc"})," \u7684 data product\uff0c\u4e26\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"dp_schema.json"})," \u4f86\u5b9a\u7fa9 Data Product \u7684\u8cc7\u6599\u683c\u5f0f\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"Data Product \u7684 schema \u8207\u4f86\u6e90\u8cc7\u6599\u8868\u7684 schema \u901a\u5e38\u6709\u95dc\u806f\uff0c\u56e0\u6b64\u53ef\u7531\u5f8c\u8005\u70ba\u57fa\u790e\u4f86\u5efa\u7acb Data Product \u7684 schema\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4f86\u6e90\u8cc7\u6599\u8868\u7684 Schema \u5982\u4f55\u53d6\u5f97\uff1f"})}),"\n",(0,r.jsx)(n.p,{children:"\u5bec\u6a4b\u63d0\u4f9b table-scanner_linux_amd64 \u5de5\u5177\uff0c\u7528\u4f86\u6383\u63cf\u4f86\u6e90 DB \u4e26\u7522\u751f JSON \u683c\u5f0f\u7684 table schema (Tips: \u82e5\u4f86\u6e90 DB \u70ba oracle\uff0ctable-name \u9808\u5168\u90e8\u4f7f\u7528\u5927\u5beb\u5b57\u6bcd\u3002)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7531-event-\u7522\u751f-data-product-\u7684\u5167\u5bb9",children:"\u7531 Event \u7522\u751f Data Product \u7684\u5167\u5bb9"}),"\n",(0,r.jsx)(n.p,{children:"\u524d\u8ff0 CDC events \u900f\u904e Adapter \u8f49\u70ba Gravity \u80fd\u8fa8\u8b58\u7684\u683c\u5f0f\u5f8c\uff0c\u53ef\u900f\u904e\u6307\u5b9a\u7684\u898f\u5247 (Ruleset) \u5c07 events \u505a\u9032\u4e00\u6b65\u8655\u7406\u4ee5\u8f38\u51fa\u70ba\u5c0d\u61c9 Data Product \u7684\u5167\u5bb9\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Ruleset \u662f\u7528\u4f86\u6307\u5b9a\u6240\u8981\u8655\u7406\u7684 event \u7684\u540d\u7a31\u3001\u6a19\u5b9a\u8a72 event \u7684\u64cd\u4f5c\u65b9\u6cd5 (\u5982 Create/Insert/Update/Delete/Initialized)\u3001\u7d66\u5b9a\u7528\u65bc\u89e3\u8b80 event \u8cc7\u6599\u5167\u5bb9\u7684 schema \u683c\u5f0f\u3001\u4e26\u63d0\u4f9b\u8655\u7406\u7684\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Ruleset \u7684\u4f7f\u7528\u7bc4\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"/gravity-cli product ruleset add misrc misrcInitializeRule --enabled --event=misrcInitializeEvent --method=create --handler=./handler.js  --schema=./event_schema.json -s lab-gravity-nats:4222\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u672c\u4f8b\u70ba misrc \u7684 Data Product \u65b0\u589e\u4e00\u540d\u70ba miscrInitializedRule \u7684 Ruleset\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u8a72 Ruleset \u5c07\u91dd\u5c0d CDC \u6240\u7522\u751f\u540d\u70ba ",(0,r.jsx)(n.code,{children:"misrcInitializeEvent"})," \u7684 event \u9032\u884c\u8655\u7406\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u6a19\u5b9a\u8a72 event \u70ba create \u7684\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6839\u64da ",(0,r.jsx)(n.code,{children:"event_schema.json"})," \u4f86\u89e3\u8b80 event \u5167\u6240\u651c\u5e36\u7684\u8cc7\u6599\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u8abf\u7528 handler.js \u5c0d\u8a72 event \u9032\u884c\u8655\u7406"}),"\n",(0,r.jsx)(n.li,{children:"handler.js \u61c9\u56de\u50b3\u7b26\u5408\u5c0d\u61c9 Data Product \u683c\u5f0f\u7684\u8cc7\u6599\u8b93 Gravity \u5132\u5b58\u5165\u8a72 Data Product\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"return {\n  ...source,\n  gravity_pk: source.bdl_id + source.bdl_ipd_no + source.bdl_in_dtti + source.bdl_pat_no + source.bdl_in_dtti_v,\n}\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u95dc\u65bc handler.js\uff1a"})}),"\n",(0,r.jsx)(n.p,{children:"handler.js \u53ef\u7528\u4f86\u904e\u6ffe\u3001\u8abf\u6574\u3001\u6216\u7d44\u5408\u51fa\u65b0\u6b04\u4f4d\u4e26\u8f38\u51fa\u70ba\u7b26\u5408 Data Product schema \u7684\u8cc7\u6599\uff0c\u4f8b\u5982\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7ba1\u7406-data-product",children:"\u7ba1\u7406 Data Product"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u8005\u53ef\u900f\u904e gravity-cli \u6307\u4ee4\u7684 ",(0,r.jsx)(n.code,{children:"list"}),"\u3001",(0,r.jsx)(n.code,{children:"delete"}),"\u3001",(0,r.jsx)(n.code,{children:"info"}),"\u3001",(0,r.jsx)(n.code,{children:"update"})," \u7b49\u5b50\u547d\u4ee4\u4f86\u91dd\u5c0d Data Product \u4ee5\u53ca Ruleset \u9032\u884c\u66f4\u9032\u968e\u7684\u7ba1\u7406\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Data Product \u66f4\u65b0\u7bc4\u4f8b"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'/gravity-cli product update misrc --desc="misrc dp" --enabled \\\n--schema=./schema.json -s lab-gravity-nats:4222\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ruleset \u65b0\u589e\u7bc4\u4f8b"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/gravity-cli product ruleset add misrc misrcDelete --enabled \\\n--event=misrcDeleteEvent --method=delete --handler=./handler.js \\\n--schema=./event_schema.json -s lab-gravity-nats:4222\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u66f4\u9032\u4e00\u6b65\u7684\u64cd\u4f5c\u65b9\u5f0f\u53ef\u53c3\u8003 Appendix \u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u90e8\u7f72-adapter",children:"\u90e8\u7f72 Adapter"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5efa\u7acb\u5b8c Data Product \u4e4b\u5f8c, \u5373\u53ef\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u639b\u8f09\u5c0d\u61c9\u8cc7\u6599\u5eab\u7684 CDC Adapter \u4ee5\u53d6\u5f97\u8cc7\u6599\u5eab\u7684 CDC \u8cc7\u6599\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f 07-bbg-adapter-mssql.yaml\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u78ba\u8a8d lab-adapter-mssql-0 \u9019\u500b pod \u6709\u6b63\u5e38 Running"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl -n bbg-gravity get pod\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl -n bbg-gravity logs lab-adapter-mssql-0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u90e8\u7f72-atomic",children:"\u90e8\u7f72 Atomic"}),"\n",(0,r.jsx)(n.p,{children:"\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f 08-bbg-atomic.yaml\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kubectl -n bbg-gravity get pod"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u78ba\u8a8d lab-atomic \u670d\u52d9\u6709\u88ab\u5efa\u7acb\u4e14 port number \u6b63\u78ba"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"kubectl -n bbg-gravity get svc"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},4463:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/deployment1-4b502df42b7ab03545c9d207f7f79ae3.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);