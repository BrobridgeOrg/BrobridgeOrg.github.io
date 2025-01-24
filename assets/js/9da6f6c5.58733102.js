"use strict";(self.webpackChunkgravity_doc=self.webpackChunkgravity_doc||[]).push([[153],{519:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(4848),t=s(8453);const i={},d="MySQL Adapter",l={id:"config/adapter-config/mysql",title:"MySQL Adapter",description:"1. config.toml Explanation",source:"@site/docs/config/adapter-config/mysql.md",sourceDirName:"config/adapter-config",slug:"/config/adapter-config/mysql",permalink:"/docs/config/adapter-config/mysql",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Oracle 11g Adapter",permalink:"/docs/config/adapter-config/oracle"},next:{title:"MongoDB Adapter",permalink:"/docs/config/adapter-config/mongodb"}},c={},a=[{value:"<em>1.</em> <code>config.toml</code> Explanation",id:"1-configtoml-explanation",level:2},{value:"<em>1.1</em> Example of <code>configs/config.toml</code>",id:"11-example-of-configsconfigtoml",level:3},{value:"<em>1.2</em> Parameters",id:"12-parameters",level:3},{value:"<em>2.</em> <code>settings.json</code> Explanation",id:"2-settingsjson-explanation",level:2},{value:"<em>2.1</em> Example of <code>settings/sources.json</code>",id:"21-example-of-settingssourcesjson",level:3},{value:"<em>2.2</em> Parameters",id:"22-parameters",level:3},{value:"<em>3.</em> Build",id:"3-build",level:2},{value:"<em>4.</em> Enable Database CDC",id:"4-enable-database-cdc",level:2},{value:"<em>4.1</em> Enable Binlog for MySQL 8.0",id:"41-enable-binlog-for-mysql-80",level:3},{value:"<em>4.2</em> Enable Binlog for MySQL 5.7",id:"42-enable-binlog-for-mysql-57",level:3},{value:"<em>4.3</em> Check if Binlog is Enabled",id:"43-check-if-binlog-is-enabled",level:3}];function o(e){const n={blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mysql-adapter",children:"MySQL Adapter"})}),"\n",(0,r.jsxs)(n.h2,{id:"1-configtoml-explanation",children:[(0,r.jsx)(n.em,{children:"1."})," ",(0,r.jsx)(n.code,{children:"config.toml"})," Explanation"]}),"\n",(0,r.jsxs)(n.h3,{id:"11-example-of-configsconfigtoml",children:[(0,r.jsx)(n.em,{children:"1.1"})," Example of ",(0,r.jsx)(n.code,{children:"configs/config.toml"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[gravity]\ndomain = "default"\nhost = "192.168.8.227"\nport = 32803\npingInterval = 10\nmaxPingsOutstanding = 3\nmaxReconnects = -1\naccessToken = ""\npublishBatchSize = 1000\nrateLimit = 0\n\n[source]\nconfig = "./settings/sources.json"\n\n[store]\nenabled = true\npath = "./statestore"\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"12-parameters",children:[(0,r.jsx)(n.em,{children:"1.2"})," Parameters"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.domain"})}),(0,r.jsx)(n.td,{children:"Sets the Gravity domain"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.host"})}),(0,r.jsx)(n.td,{children:"Sets the Gravity NATS IP address"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.port"})}),(0,r.jsx)(n.td,{children:"Sets the Gravity NATS port"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.pingInterval"})}),(0,r.jsx)(n.td,{children:"Sets the Gravity ping interval"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.maxPingsOutstanding"})}),(0,r.jsx)(n.td,{children:"Sets the maximum outstanding pings"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.maxReconnects"})}),(0,r.jsx)(n.td,{children:"Sets the maximum number of reconnections"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.accessToken"})}),(0,r.jsx)(n.td,{children:"Sets the Gravity access token (for authentication)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.publishBatchSize"})}),(0,r.jsx)(n.td,{children:"Sets the batch size for events sent to NATS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"gravity.rateLimit"})}),(0,r.jsx)(n.td,{children:"Sets the maximum rate (per second) for events sent to NATS (0 = no limit)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"source.config"})}),(0,r.jsx)(n.td,{children:"Path to the source configuration file"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"store.enabled"})}),(0,r.jsx)(n.td,{children:"Enables persistent volume mounting (for state storage)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"store.path"})}),(0,r.jsx)(n.td,{children:"Path for mounting the persistent volume"})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"INFO"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"config.toml"})," settings can also be provided via environment variables. The naming convention is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GRAVITY_ADAPTER_MYSQL_[SECTION]_[KEY]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["All letters are uppercase, and underscores (",(0,r.jsx)(n.code,{children:"_"}),") separate the sections and keys.",(0,r.jsx)(n.br,{}),"\n","Example for ",(0,r.jsx)(n.code,{children:"gravity.host"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"env:\n- name: GRAVITY_ADAPTER_MYSQL_GRAVITY_HOST\n  value: 192.168.8.227\n"})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"2-settingsjson-explanation",children:[(0,r.jsx)(n.em,{children:"2."})," ",(0,r.jsx)(n.code,{children:"settings.json"})," Explanation"]}),"\n",(0,r.jsxs)(n.h3,{id:"21-example-of-settingssourcesjson",children:[(0,r.jsx)(n.em,{children:"2.1"})," Example of ",(0,r.jsx)(n.code,{children:"settings/sources.json"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "sources": {\n        "mysql_example": {\n            "disabled": false,\n            "host": "192.168.8.227",\n            "port": 3306,\n            "username": "root",\n            "password": "1qaz@WSXROOT",\n            "dbname": "gravity",\n            "initialLoad": false,\n            "tables": {\n                "accounts": {\n                    "event": {\n                        "snapshot": "accountInitialized",\n                        "create": "accountCreated",\n                        "update": "accountUpdated",\n                        "delete": "accountDeleted"\n                    }\n                }\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"22-parameters",children:[(0,r.jsx)(n.em,{children:"2.2"})," Parameters"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.disabled"})}),(0,r.jsx)(n.td,{children:"Whether to disable this source"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.host"})}),(0,r.jsx)(n.td,{children:"Sets the MySQL server IP address"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.port"})}),(0,r.jsx)(n.td,{children:"Sets the MySQL server port"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.username"})}),(0,r.jsx)(n.td,{children:"Sets the MySQL login username"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.password"})}),(0,r.jsx)(n.td,{children:"Sets the MySQL login password"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.dbname"})}),(0,r.jsx)(n.td,{children:"Sets the MySQL database name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.initialLoad"})}),(0,r.jsx)(n.td,{children:"Whether to synchronize existing records during initialization"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME"})}),(0,r.jsx)(n.td,{children:"Name of the table to capture events"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.snapshot"})}),(0,r.jsx)(n.td,{children:"Event name for initial load"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.create"})}),(0,r.jsx)(n.td,{children:"Event name for record creation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.update"})}),(0,r.jsx)(n.td,{children:"Event name for record updates"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sources.SOURCE_NAME.tables.TABLE_NAME.event.delete"})}),(0,r.jsx)(n.td,{children:"Event name for record deletion"})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"INFO"})}),"\n",(0,r.jsxs)(n.p,{children:["The database password can be provided via environment variables using AES encryption.",(0,r.jsx)(n.br,{}),"\n","Environment variable format:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[SOURCE_NAME]_PASSWORD\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'env:\n- name: GRAVITY_ADAPTER_MYSQL_SOURCE_SETTINGS\n  value: |\n    {\n        "sources": {\n            "mysql_example": {\n                "disabled": false,\n                "host": "192.168.8.227",\n                "port": 3306,\n                "username": "root",\n                "password": "1qaz@WSXROOT",\n                "dbname": "gravity",\n                "initialLoad": false,\n                "tables": {\n                    "accounts": {\n                        "event": {\n                            "snapshot": "accountInitialized",\n                            "create": "accountCreated",\n                            "update": "accountUpdated",\n                            "delete": "accountDeleted"\n                        }\n                    }\n                }\n            }\n        }\n    }\n'})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"3-build",children:[(0,r.jsx)(n.em,{children:"3."})," Build"]}),"\n",(0,r.jsx)(n.p,{children:"To build the adapter image, use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'podman buildx build --platform linux/amd64 --build-arg="AES_KEY=**********" -t docker.io/brobridgehub/gravity-adapter-mysql:v3.0.0 -f build/docker/Dockerfile .\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"4-enable-database-cdc",children:[(0,r.jsx)(n.em,{children:"4."})," Enable Database CDC"]}),"\n",(0,r.jsxs)(n.h3,{id:"41-enable-binlog-for-mysql-80",children:[(0,r.jsx)(n.em,{children:"4.1"})," Enable Binlog for MySQL 8.0"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vim /etc/mysql/mysql.conf.d/mysqld.cnf\n\n[mysqld]\n...\nlog-bin=/var/lib/mysql/binlog\nbinlog-format=row\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"42-enable-binlog-for-mysql-57",children:[(0,r.jsx)(n.em,{children:"4.2"})," Enable Binlog for MySQL 5.7"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vim /etc/mysql/mysql.conf.d/mysqld.cnf\n\n[mysqld]\n...\nserver-id=1\nlog-bin=/var/lib/mysql/mysql-bin.log\nbinlog-format=row\nmax_allowed_packet=100M\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"43-check-if-binlog-is-enabled",children:[(0,r.jsx)(n.em,{children:"4.3"})," Check if Binlog is Enabled"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mysql> show variables like 'log_bin';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| log_bin       | ON    |\n+---------------+-------+\n1 row in set (0.00 sec)\n\nmysql> show variables like 'binlog_format';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| binlog_format | ROW   |\n+---------------+-------+\n1 row in set (0.00 sec)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);