"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[209],{8366:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(4848),t=n(8453);const c={},d="Oracle Golden Gate to Kafka Adapter",i={id:"config/adapter-config/ogg",title:"Oracle Golden Gate to Kafka Adapter",description:"config.toml Explanation",source:"@site/docs/config/adapter-config/ogg.md",sourceDirName:"config/adapter-config",slug:"/config/adapter-config/ogg",permalink:"/docs/config/adapter-config/ogg",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Informix DB Adapter",permalink:"/docs/config/adapter-config/informix"},next:{title:"Dispatcher Configuration",permalink:"/docs/config/dispatcher-config"}},o={},l=[{value:"<code>config.toml</code> Explanation",id:"configtoml-explanation",level:2},{value:"Example of <code>configs/config.toml</code>",id:"example-of-configsconfigtoml",level:5},{value:"<code>settings.json</code> Explanation",id:"settingsjson-explanation",level:2},{value:"Example of <code>settings/sources.json</code>",id:"example-of-settingssourcesjson",level:5},{value:"Build",id:"build",level:2},{value:"Log Levels",id:"log-levels",level:2}];function a(e){const s={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"oracle-golden-gate-to-kafka-adapter",children:"Oracle Golden Gate to Kafka Adapter"})}),"\n",(0,r.jsxs)(s.h2,{id:"configtoml-explanation",children:[(0,r.jsx)(s.code,{children:"config.toml"})," Explanation"]}),"\n",(0,r.jsxs)(s.h5,{id:"example-of-configsconfigtoml",children:["Example of ",(0,r.jsx)(s.code,{children:"configs/config.toml"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-toml",children:'[gravity]\ndomain = "default"\nhost = "0.0.0.0"\nport = 4222\npingInterval = 10\nmaxPingsOutstanding = 3\nmaxReconnects = -1\naccessToken = ""\npublishBatchSize = 1000\nrateLimit = 0\n\n[source]\nconfig = "./settings/sources.json"\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.domain"})}),(0,r.jsx)(s.td,{children:"Sets the Gravity domain"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.host"})}),(0,r.jsx)(s.td,{children:"Sets the Gravity NATS IP address"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.port"})}),(0,r.jsx)(s.td,{children:"Sets the Gravity NATS port"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.pingInterval"})}),(0,r.jsx)(s.td,{children:"Sets the Gravity ping interval"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.maxPingsOutstanding"})}),(0,r.jsx)(s.td,{children:"Sets the maximum outstanding pings"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.maxReconnects"})}),(0,r.jsx)(s.td,{children:"Sets the maximum number of reconnections"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.accessToken"})}),(0,r.jsx)(s.td,{children:"Sets the Gravity access token (for authentication)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.publishBatchSize"})}),(0,r.jsx)(s.td,{children:"Sets the batch size for events sent to NATS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"gravity.rateLimit"})}),(0,r.jsx)(s.td,{children:"Sets the maximum rate (per second) for events sent to NATS (0 = no limit)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"source.config"})}),(0,r.jsx)(s.td,{children:"Path to the source configuration file"})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"INFO"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"config.toml"})," settings can also be provided via environment variables. The naming convention is as follows:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"GRAVITY_ADAPTER_OGG_[SECTION]_[KEY]\n"})}),"\n",(0,r.jsxs)(s.p,{children:["All letters are uppercase, and underscores (",(0,r.jsx)(s.code,{children:"_"}),") separate the sections and keys.",(0,r.jsx)(s.br,{}),"\n","Example for ",(0,r.jsx)(s.code,{children:"gravity.host"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"env:\n- name: GRAVITY_ADAPTER_OGG_GRAVITY_HOST\n  value: 192.168.0.1\n"})}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.h2,{id:"settingsjson-explanation",children:[(0,r.jsx)(s.code,{children:"settings.json"})," Explanation"]}),"\n",(0,r.jsxs)(s.h5,{id:"example-of-settingssourcesjson",children:["Example of ",(0,r.jsx)(s.code,{children:"settings/sources.json"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n   "sources": {\n      "kafka_normal": {\n         "hosts": [\n            "192.168.8.227:9092",\n            "192.168.8.227:9093",\n            "192.168.8.227:9094"\n         ],\n         "groupId": "test-group",\n         "topic": "example.accountevent",\n         "disabled": false,\n         "autoOffsetReset": "earliest",\n         "tables": {\n            "TEST_OGG.TEST_OGG": {\n               "events": {\n                  "create": "accountCreated",\n                  "update": "accountUpdated",\n                  "delete": "accountDeleted"\n               }\n            }\n         }\n      }\n   }\n}\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.disabled"})}),(0,r.jsx)(s.td,{children:"Whether to disable this source"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.hosts"})}),(0,r.jsx)(s.td,{children:"Sets the Kafka cluster server IPs and ports"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.groupId"})}),(0,r.jsx)(s.td,{children:"Sets the Kafka client group ID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.topic"})}),(0,r.jsx)(s.td,{children:"Sets the Kafka topic to subscribe to"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.autoOffsetReset"})}),(0,r.jsxs)(s.td,{children:["Sets the starting point for consuming messages from the topic. Options: ",(0,r.jsx)(s.code,{children:"earliest"})," or ",(0,r.jsx)(s.code,{children:"latest"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.ssl"})}),(0,r.jsx)(s.td,{children:"Configures TLS settings for secure connections"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.ssl.ssl.ca.location"})}),(0,r.jsx)(s.td,{children:"Path to the CA certificate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.ssl.ssl.certificate.location"})}),(0,r.jsx)(s.td,{children:"Path to the client certificate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.ssl.ssl.key.location"})}),(0,r.jsx)(s.td,{children:"Path to the client private key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.sasl"})}),(0,r.jsx)(s.td,{children:"Configures SASL authentication settings"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.sasl.sasl.mechanisms"})}),(0,r.jsxs)(s.td,{children:["Sets the SASL mechanism. Options: ",(0,r.jsx)(s.code,{children:"PLAIN"})," or ",(0,r.jsx)(s.code,{children:"GSSAPI"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.sasl.sasl.username"})}),(0,r.jsxs)(s.td,{children:["SASL username (for ",(0,r.jsx)(s.code,{children:"PLAIN"})," mechanism)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.sasl.sasl.password"})}),(0,r.jsxs)(s.td,{children:["SASL password (for ",(0,r.jsx)(s.code,{children:"PLAIN"})," mechanism)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.sasl.sasl.kerberos.service.name"})}),(0,r.jsxs)(s.td,{children:["Kerberos service name (for ",(0,r.jsx)(s.code,{children:"GSSAPI"})," mechanism)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.sasl.sasl.kerberos.keytab"})}),(0,r.jsx)(s.td,{children:"Path to the Kerberos keytab file"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.sasl.sasl.kerberos.principal"})}),(0,r.jsx)(s.td,{children:"Kerberos principal"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.create"})}),(0,r.jsx)(s.td,{children:"Event name for record creation"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.update"})}),(0,r.jsx)(s.td,{children:"Event name for record updates"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.delete"})}),(0,r.jsx)(s.td,{children:"Event name for record deletion"})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"INFO"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"settings.json"})," configuration can also be provided via environment variables.",(0,r.jsx)(s.br,{}),"\n","Environment variable format:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'env:\n- name: GRAVITY_ADAPTER_OGG_SOURCE_SETTINGS\n  value: |\n    {\n       "sources": {\n          "kafka_normal": {\n             "hosts": ["192.168.8.227:9092", "192.168.8.227:9093", "192.168.8.227:9094"],\n             "groupId": "test-group",\n             "topic": "example.accountevent",\n             ...\n          }\n       }\n    }\n'})}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"build",children:"Build"}),"\n",(0,r.jsx)(s.p,{children:"To build the adapter image, use the following command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"podman buildx build --platform linux/amd64 -t hb.k8sbridge.com/gravity/gravity-adapter-ogg:v0.0.1 -f build/docker/Dockerfile .\n"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"log-levels",children:"Log Levels"}),"\n",(0,r.jsxs)(s.p,{children:["Log levels can be configured using environment variables.",(0,r.jsx)(s.br,{}),"\n","Available levels: ",(0,r.jsx)(s.strong,{children:"debug"}),", ",(0,r.jsx)(s.strong,{children:"info"}),", ",(0,r.jsx)(s.strong,{children:"error"}),".",(0,r.jsx)(s.br,{}),"\n","Default level: ",(0,r.jsx)(s.code,{children:"info"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"env:\n- name: GRAVITY_DEBUG\n  value: debug\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>i});var r=n(6540);const t={},c=r.createContext(t);function d(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);