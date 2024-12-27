"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[680],{689:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var t=s(4848),r=s(8453);const d={},i="Postgre SQL Adapter",c={id:"config/adapter-config/psql",title:"Postgre SQL Adapter",description:"config.toml Explanation",source:"@site/docs/config/adapter-config/psql.md",sourceDirName:"config/adapter-config",slug:"/config/adapter-config/psql",permalink:"/zh-TW/docs/config/adapter-config/psql",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"\u5efa\u7acb Atomic flow",permalink:"/zh-TW/docs/install_guide/atomic_guide"},next:{title:"Microsoft SQL Adapter",permalink:"/zh-TW/docs/config/adapter-config/mssql"}},o={},l=[{value:"<code>config.toml</code> Explanation",id:"configtoml-explanation",level:2},{value:"Example of <code>configs/config.toml</code>",id:"example-of-configsconfigtoml",level:5},{value:"<code>settings.json</code> Explanation",id:"settingsjson-explanation",level:2},{value:"Example of <code>settings/sources.json</code>",id:"example-of-settingssourcesjson",level:5}];function a(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"postgre-sql-adapter",children:"Postgre SQL Adapter"})}),"\n",(0,t.jsxs)(n.h2,{id:"configtoml-explanation",children:[(0,t.jsx)(n.code,{children:"config.toml"})," Explanation"]}),"\n",(0,t.jsxs)(n.h5,{id:"example-of-configsconfigtoml",children:["Example of ",(0,t.jsx)(n.code,{children:"configs/config.toml"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[gravity]\ndomain = "default"\nhost = "192.168.8.227"\nport = 32803\npingInterval = 10\nmaxPingsOutstanding = 3\nmaxReconnects = -1\naccessToken = ""\npublishBatchSize = 1000\nrateLimit = 0\n\n[source]\nconfig = "./settings/sources.json"\n\n[store]\nenabled = true\npath = "./statestore"\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.domain"})}),(0,t.jsx)(n.td,{children:"Set the gravity domain"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.host"})}),(0,t.jsx)(n.td,{children:"Set the Gravity NATS IP address"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.port"})}),(0,t.jsx)(n.td,{children:"Set the Gravity NATS port"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.pingInterval"})}),(0,t.jsx)(n.td,{children:"Set the Gravity ping interval"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.maxPingsOutstanding"})}),(0,t.jsx)(n.td,{children:"Set the maximum outstanding pings"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.maxReconnects"})}),(0,t.jsx)(n.td,{children:"Set the maximum number of reconnections"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.accessToken"})}),(0,t.jsx)(n.td,{children:"Set the Gravity access token (for authentication)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.publishBatchSize"})}),(0,t.jsx)(n.td,{children:"Set the number of events to batch before publishing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gravity.rateLimit"})}),(0,t.jsx)(n.td,{children:"Set the maximum rate of event publishing per second (0 = no limit)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"source.config"})}),(0,t.jsx)(n.td,{children:"Path to the source configuration file"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"store.enabled"})}),(0,t.jsx)(n.td,{children:"Whether to mount a persistent volume (for state storage)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"store.path"})}),(0,t.jsx)(n.td,{children:"Path for mounting the persistent volume"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"INFO"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"config.toml"})," settings can be provided via environment variables. The naming convention is as follows:\n",(0,t.jsx)(n.code,{children:"GRAVITY_ADAPTER_POSTGRES_[SECTION]_[KEY]"})]}),"\n",(0,t.jsxs)(n.p,{children:["All letters are uppercase, and underscores (",(0,t.jsx)(n.code,{children:"_"}),") are used to separate sections and keys.",(0,t.jsx)(n.br,{}),"\n","Example for ",(0,t.jsx)(n.code,{children:"gravity.host"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"env:\n- name: GRAVITY_ADAPTER_POSTGRES_GRAVITY_HOST\n  value: 192.168.0.1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"settingsjson-explanation",children:[(0,t.jsx)(n.code,{children:"settings.json"})," Explanation"]}),"\n",(0,t.jsxs)(n.h5,{id:"example-of-settingssourcesjson",children:["Example of ",(0,t.jsx)(n.code,{children:"settings/sources.json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "sources": {\n        "my_postgres": {\n            "disabled": false,\n            "host": "192.168.8.227",\n            "port": 5432,\n            "username": "postgres",\n            "password": "1qaz@WSX",\n            "dbname": "gravity",\n            "param": "sslmode=disable",\n            "initialLoad": true,\n            "initialLoadBatchSize": 10000,\n            "//_comment_interval": "query interval unit: seconds",\n            "interval": 1,\n            "slotName": "regression_slot",\n            "//_comment_public.account": "schema.tableName",\n            "tables": {\n                "public.account": {\n                    "events": {\n                        "snapshot": "accountInitialized",\n                        "create": "accountCreated",\n                        "update": "accountUpdated",\n                        "delete": "accountDeleted"\n                    }\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.disabled"})}),(0,t.jsx)(n.td,{children:"Whether to disable this source"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.host"})}),(0,t.jsx)(n.td,{children:"PostgreSQL server IP"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.port"})}),(0,t.jsx)(n.td,{children:"PostgreSQL server port"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.username"})}),(0,t.jsx)(n.td,{children:"PostgreSQL username"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.password"})}),(0,t.jsx)(n.td,{children:"PostgreSQL password"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.dbname"})}),(0,t.jsx)(n.td,{children:"PostgreSQL database name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.param"})}),(0,t.jsxs)(n.td,{children:["Additional connection parameters (e.g., ",(0,t.jsx)(n.code,{children:'"sslmode=disable"'}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.initialLoad"})}),(0,t.jsx)(n.td,{children:"Whether to synchronize existing records initially"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.initialLoadBatchSize"})}),(0,t.jsx)(n.td,{children:"Number of records per batch during initial sync"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.interval"})}),(0,t.jsx)(n.td,{children:"Sync interval for initial load events (in seconds)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.slotName"})}),(0,t.jsx)(n.td,{children:"Name of the replication slot"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME"})}),(0,t.jsxs)(n.td,{children:["Name of the table to capture events (e.g., ",(0,t.jsx)(n.code,{children:'"public.account"'}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.snapshot"})}),(0,t.jsx)(n.td,{children:"Event name for initial load"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.create"})}),(0,t.jsx)(n.td,{children:"Event name for record creation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.update"})}),(0,t.jsx)(n.td,{children:"Event name for record updates"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.delete"})}),(0,t.jsx)(n.td,{children:"Event name for record deletion"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"INFO"})}),"\n",(0,t.jsxs)(n.p,{children:["The database password can be provided via environment variables using AES encryption.",(0,t.jsx)(n.br,{}),"\n","Environment variable format:\n",(0,t.jsx)(n.code,{children:"[SOURCE_NAME]_PASSWORD"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);