# Gravity Deployment 

In this example, we are going to demonstrate how Gravity is installed in a clean Kubernetes environment.

## *1.* Configmap

Below is an example of a Gravity configuration file.

**03-bbg-configmap.yaml**

```yaml 
apiVersion: v1
kind: ConfigMap
metadata:
  name: labcm
  namespace: bbg-gravity
data:
  TZ: Asia/Taipei
  SOURCE_DATABASE_NAME: source-mssql
  SOURCE_DATABASE_HOST: source-mssql.lab-db
  SOURCE_DATABASE_PORT: "1433"
  SOURCE_DB_MSSQL_DB_NAME: TestDB
  SOURCE_DB_MSSQL_TB1_NAME: mi_source
  SOURCE_DATABASE_USER: SA
  TARGET_DB_MYSQL_NAME: target2-mysql
  TARGET_DB_MYSQL_HOST: target2-mysql.lab-db
  TARGET_DB_MYSQL_PORT: "3306"
  TARGET_DB_MYSQL_DB_NAME: testdb
  TARGET_DB_MYSQL_TB1_NAME: target_id13
  TARGET_DB_MYSQL_USER: mysql
  GIT_BRANCH: master
  GIT_USER: demo
  GIT_REPO_URL: demo/gravity2-lab.git
  GIT_TOKEN: 61bc6c9a2c17fe69c81fd5b0a460402637e76b8d
  GIT_URL: gitea:3000
```
> :bulb:**TIP**
> * GIT_TOKEN: Use gitea-token.txt instaed of having the token in the yaml file.
> * GIT_USER: Use the account created fromt he last chapter
> * GIT_REPO_URL: Replace the url with `user/repo_name.git`
> * GIT_URL: Connects directly through kubernetes service name and container port to communicate

## *2.* Database Password and Secret
> :bulb:**TIP**
>
> Use pwd_encrpyt tool provided by Brobridge to create secret, avoiding password being exposed in the yaml file
>
> Enter the following: `$ echo -n $(./pwd_encrypt --plaintext 'MyPassword') | base64 -w 1`
>
> `1qaz@WSX` is used as `MyPassword`

**04-bbg-secret.yaml**

```yaml 
apiVersion: v1
kind: Secret
metadata:
    name: labsecret
    namespace: bbg-gravity
type: Opaque
data:
    db_source_mssql_password: OGU1Y2E4NDM5ZGRlYmJhYzliZjJiODNjYWY0YmVmN2E= 
    db_target_mysql_password: OGU1Y2E4NDM5ZGRlYmJhYzliZjJiODNjYWY0YmVmN2E=
```

* ``OGU1Y2E4NDM5ZGRlYmJhYzliZjJiODNjYWY0YmVmN2E=`` is originally ``1qaz@WSX``

## *3.* NATS (StatefulSet & Service)
**05-bbg-nats.yaml**

> Make sure NATs cluster routing are correct

``` 
  replicas: 3
...
            - --routes=lab-gravity-nats-0.lab-gravity-nats-mgmt.gravity2-lab.svc.cluster.local:6222
            - --routes=lab-gravity-nats-1.lab-gravity-nats-mgmt.gravity2-lab.svc.cluster.local:6222
            - --routes=lab-gravity-nats-2.lab-gravity-nats-mgmt.gravity2-lab.svc.cluster.local:6222            
```
> **Service 重點**：確認 NATS 叢集間溝通的 port 與對外連線 port

``` 
    - name: tcp-lab-gravity-nats
      port: 4222
...
    - name: tcp-lab-gravity-nats-mgmt
      port: 6222
```

## *4.* Dispatcher

**06-bbg-dispatcher.yaml (StatefulSet)**

> **重點**：確認服務名稱與 port 有無錯誤
``` 
        - env:
            - name: GRAVITY_DISPATCHER_GRAVITY_HOST
              value: lab-gravity-nats
            - name: GRAVITY_DISPATCHER_GRAVITY_PORT
              value: "4222"
            - name: GRAVITY_DISPATCHER_GRAVITY_DOMAIN
              value: "default"
```

## *5.* Adapter

**07-bbg-adapter-mssql.yaml (StatefulSet)**

> **重點**：設定來源資料庫對接資訊 (密碼除外)
``` 
              "sources": {
                "mssql_source": {
                  "disabled": false,
                  "host": "source-mssql",
                  "port": 1433,
                  "username": "SA",
                  "dbname": "TestDB",
                  "param": "",
                  "initialLoad": false,
                  "interval": 1,
                  "tables": {
                    "dbo.mi_source":{
                      "events": {
                        "snapshot": "misrcInitialize",
                        "create": "misrcCreate",
                        "update": "misrcUpdate",
                        "delete": "misrcDelete"
                      }
                    }
                  }
```
> **重點**：在 “env“ 定義的 DB 密碼環境變數名稱，必須與 “source“ 的名稱一致 (規則：變數名稱為大寫再加上 ”_PASSWORD”)
![image](/img/deployment1.png)

## *6.* Atomic

**08-bbg-atomic.yaml (Deployment & Service)**

> **重點**：確認後續執行 git clone 的指令所載入的環境變數是正確的
``` 
 - ......; test -d /data/atomic/.git && rm -rf /data/atomic; git clone -b ${GIT_BRANCH} --single-branch http://${GIT_USER}:${GIT_TOKEN}@${GIT_URL}/${GIT_REPO_URL} /data/atomic
```

### 上傳 flow 至 Gitea

Acquire Gitea token

``` 
cat gitea-token.txt
```

切換到 `flow` 目錄初始化並上傳 Atomic flow

> **提示** : 指令中的 git remote add  origin 需修改成上述 gitea 註冊的帳號以及上述步驟取得的 token
> 格式如 : ``http://<gitea_user>:<token>@<gitea_svc_ip:port>/<gitea_user>/<repository_name>.git``

``` 
cd /flow
rm -rf .git
git init
git add -A
git commit -m 'from scratch'
git remote add origin http://demo:4adc8cd4687c92769349df9fbc878e955b782b0a@192.168.100.154:31300/demo/gravity2-lab.git
git push -u origin master --force
cd ../
```

## *7.* Configmap & Secret

> <mark>**注意**：以下指令中所有.yaml 檔皆為為範例名稱，可能會與實際檔案名稱不同</mark>

修改 `configmap` 中的 `GIT_TOKEN` 為上步驟所獲得的 gitea token 並套用：

``` 
sed -i 's/GIT_TOKEN: .*/GIT_TOKEN: 4adc8cd4687c92769349df9fbc878e955b782b0a/' 03-bbg-configmap.yaml
kubectl apply -f 03-bbg-configmap.yaml  -f 04-bbg-secret.yaml
```

## *8.* Install NATs Cluster 

Perform the following command

``` 
kubectl apply -f 05-bbg-nats.yaml
```

確認 pod 運作狀態: lab-gravity-nats-[012] 三個 pod 有正常 Running

``` 
kubectl -n bbg-gravity get pod 
```

確認 svc: lab-gravity-nats 與 lab-gravity-nats-mgmt 服務有被建立且 port number 正確

``` 
kubectl -n bbg-gravity get svc 
```

## *9.* Install Dispatcher

Perform the following command

``` 
kubectl apply -f 06-bbg-dispatcher.yaml 
```

查看 lab-gravity-dispatcher-0 這個 pod 是否有正常 Running

``` 
kubectl -n bbg-gravity get pod
```

## *10.* Data Product

章節二已定義 Data Product 為 Gravity 的基本資料集 (Data Set) 處理單元，本章將介紹 Data Product 的實際內容以及其建立與管理的方式。

### *10.1* Data Product relationships 
- 當資料庫有任何異動時，對應的 CDC 模組將會產生 CDC 事件 (event)。
- 經由 Gravity Adapter，CDC event 將會轉為 Gravity 能辨識的格式，讓 Gravity 系統進行進一步處理以產生 Data Product。

### *10.2* Create Data Product

使用者可透過如下指令將上述由 CDC 機制自資料庫取得的資料 (此時以 event 形式呈現) 進一步轉換為 Data Product。

```shell 
/gravity-cli product create misrc --desc="misrc dp" --enabled --schema=./dp_schema.json -s lab-gravity-nats:4222
```

- 本例用建立一個名為 `misrc` 的 data product，並使用 `dp_schema.json` 來定義 Data Product 的資料格式。
- Data Product 的 schema 與來源資料表的 schema 通常有關聯，因此可由後者為基礎來建立 Data Product 的 schema。

> **來源資料表的 Schema 如何取得？**
>
> 寬橋提供 table-scanner_linux_amd64 工具，用來掃描來源 DB 並產生 JSON 格式的 table schema (Tips: 若來源 DB 為 oracle，table-name 須全部使用大寫字母。)

### *10.3* Create Data Product from event

前述 CDC events 透過 Adapter 轉為 Gravity 能辨識的格式後，可透過指定的規則 (Ruleset) 將 events 做進一步處理以輸出為對應 Data Product 的內容。

Ruleset 是用來指定所要處理的 event 的名稱、標定該 event 的操作方法 (如 Create/Insert/Update/Delete/Initialized)、給定用於解讀 event 資料內容的 schema 格式、並提供處理的程序。

Ruleset 的使用範例如下：

```shell 
/gravity-cli product ruleset add misrc misrcInitializeRule --enabled --event=misrcInitializeEvent --method=create --handler=./handler.js  --schema=./event_schema.json -s lab-gravity-nats:4222
```

- 本例為 misrc 的 Data Product 新增一名為 miscrInitializedRule 的 Ruleset。
- 該 Ruleset 將針對 CDC 所產生名為 `misrcInitializeEvent` 的 event 進行處理。
- 標定該 event 為 create 的操作。
- 根據 `event_schema.json` 來解讀 event 內所攜帶的資料。
- 調用 handler.js 對該 event 進行處理
- handler.js 應回傳符合對應 Data Product 格式的資料讓 Gravity 儲存入該 Data Product。


``` 
return {
  ...source,
  gravity_pk: source.bdl_id + source.bdl_ipd_no + source.bdl_in_dtti + source.bdl_pat_no + source.bdl_in_dtti_v,
}
```
> **關於 handler.js：**
>
> handler.js 可用來過濾、調整、或組合出新欄位並輸出為符合 Data Product schema 的資料，例如：

### *10.4* Manage Data Product

See [Gravity CLI](../cli.md) for more detailed guide

## *11.* Install Adapter

在建立完 Data Product 之後, 即可執行以下指令掛載對應資料庫的 CDC Adapter 以取得資料庫的 CDC 資料。


``` 
kubectl apply -f 07-bbg-adapter-mssql.yaml
```

> **確認 lab-adapter-mssql-0 這個 pod 有正常 Running**

``` 
kubectl -n bbg-gravity get pod
```


``` 
kubectl -n bbg-gravity logs lab-adapter-mssql-0
```

## *12.* Install Atomic

執行以下指令


``` 
kubectl apply -f 08-bbg-atomic.yaml
```


- `kubectl -n bbg-gravity get pod`

> **確認 lab-atomic 服務有被建立且 port number 正確**

- `kubectl -n bbg-gravity get svc`
