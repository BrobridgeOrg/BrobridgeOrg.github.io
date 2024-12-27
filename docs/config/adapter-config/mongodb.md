# MongoDB Adapter

## *1.* Requirements

- MongoDB version 3.6 and higher.
- MongoDB must be in **replica set** or **shard mode**.

---

## *2.* `config.toml` Explanation

### *2.1* Example of `configs/config.toml`
```toml
[gravity]
domain = "default"
host = "localhost"
port = 4222
pingInterval = 10
maxPingsOutstanding = 3
maxReconnects = -1
accessToken = ""
publishBatchSize = 1000
rateLimit = 0

[adapter]
adapterID = "mongodb_adapter"
adapterName = "Mongodb Adapter"

[source]
config = "./settings/sources.json"

[store]
enabled = true
path = "./statestore"
```
### *2.2* Parameters
| Parameter                  | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `gravity.domain`           | Sets the Gravity domain                                                    |
| `gravity.host`             | Sets the Gravity NATS IP address                                           |
| `gravity.port`             | Sets the Gravity NATS port                                                 |
| `gravity.pingInterval`     | Sets the Gravity ping interval                                             |
| `gravity.maxPingsOutstanding` | Sets the maximum outstanding pings                                      |
| `gravity.maxReconnects`    | Sets the maximum number of reconnections                                   |
| `gravity.accessToken`      | Sets the Gravity access token (for authentication)                        |
| `gravity.publishBatchSize` | Sets the batch size for events sent to NATS                                |
| `gravity.rateLimit`        | Sets the maximum rate (per second) for events sent to NATS (0 = no limit)  |
| `source.config`            | Path to the source configuration file                                      |
| `store.enabled`            | Enables persistent volume mounting (for state storage)                    |
| `store.path`               | Path for mounting the persistent volume                                    |

> **INFO**
>
> The `config.toml` settings can also be provided via environment variables. The naming convention is as follows:
>
> ```
> GRAVITY_ADAPTER_MONGODB_[SECTION]_[KEY]
> ```
> All letters are uppercase, and underscores (`_`) separate the sections and keys.  
> Example for `gravity.host`:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_MONGODB_GRAVITY_HOST
>   value: 192.168.0.1
> ```

---

## *3.* `settings.json` Explanation

### *3.1* Example of `settings/sources.json`
```json
{
  "sources": {
    "my_mongo": {
      "disabled": false,
      "uri": "mongodb://mongodb-0:27017,mongodb-1:27017,mongodb-2:27017/?replicaSet=mongodb&tls=true",
      "ca_file": "rootCA.pem",
      "username": "admin",
      "password": "1qaz@WSX",
      "authSource": "admin",
      "dbname": "admin",
      "initialLoad": false,
      "tables": {
        "account": {
          "events": {
            "//comment": "snapshot events are not supported; initialLoad events are create, update, and delete",
            "create": "accountCreated",
            "update": "accountUpdated",
            "delete": "accountDeleted"
          }
        }
      }
    }
  }
}
```
### *3.2* Parameters
| Parameter                              | Description                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------|
| `sources.SOURCE_NAME.disabled`         | Whether to disable this source                                              |
| `sources.SOURCE_NAME.uri`              | MongoDB connection URI. See [Connection URI](https://www.mongodb.com/docs/drivers/go/current/fundamentals/connections/connection-guide/#connection-uri) for details. |
| `sources.SOURCE_NAME.ca_file`          | Path to the CA certificate when `tls=true` is enabled                       |
| `sources.SOURCE_NAME.username`         | MongoDB login username                                                      |
| `sources.SOURCE_NAME.password`         | MongoDB login password                                                      |
| `sources.SOURCE_NAME.authSource`       | Database for user authentication                                            |
| `sources.SOURCE_NAME.dbname`           | MongoDB database name                                                       |
| `sources.SOURCE_NAME.initialLoad`      | Whether to synchronize existing records during initialization               |
| `sources.SOURCE_NAME.tables.COLLECTION_NAME` | Name of the MongoDB collection to capture events                           |
| `sources.SOURCE_NAME.tables.COLLECTION_NAME.event.create` | Event name for record creation                                   |
| `sources.SOURCE_NAME.tables.COLLECTION_NAME.event.update` | Event name for record updates                                    |
| `sources.SOURCE_NAME.tables.COLLECTION_NAME.event.delete` | Event name for record deletion                                    |

> **INFO**
>
> Database passwords can be provided via environment variables using AES encryption.  
> Example format:
>
> ```
> [SOURCE_NAME]_PASSWORD
> ```
> Kubernetes example using a secret:
> ```yaml
> env:
> - name: MONGODB_SOURCE_PASSWORD
>   valueFrom:
>     secretKeyRef:
>       name: mongodb-password
>       key: db_source_mongodb_password
> ```
> Secret definition:
> ```yaml
> apiVersion: v1
> kind: Secret
> metadata:
>   name: mongodb-password
> type: Opaque
> stringData:
>   db_source_mongodb_password: 8e5ca8439ddebbac9bf2b83caf4bef7a
> ```

---

## *4.* Build

To build the adapter image, use the following command:
```bash
podman buildx build --platform linux/amd64 --build-arg="AES_KEY=**********" -t hb.k8sbridge.com/gravity/gravity-adapter-mongodb:v2.0.0 -f build/docker/Dockerfile .
```

---

## *5.* Deploy MongoDB Replica Set Using Docker

### *5.1* Start MongoDB Instances
```bash
docker run -d --name mongo1 -p 27017:27017 mongo --replSet rs0 --bind_ip_all
```

### *5.2* Initiate the Replica Set
```bash
docker exec -it mongo1 mongosh --eval "rs.initiate({
 _id: \"rs0\",
 members: [
   {_id: 0, host: \"mongo1\"}
 ]
})"
```

### *5.3* Test and Verify the Replica Set
```bash
docker exec -it mongo1 mongosh --eval "rs.status()"
```

---

## *6.* Deploy `gravity-adapter-mongodb` on Kubernetes

### *6.1* Deploy the Adapter
1. Modify `GRAVITY_ADAPTER_MONGODB_SOURCE_SETTINGS` in `samples/gravity-adapter-mongodb.yaml` with the desired settings.
2. Apply the configuration:
   ```bash
   kubectl --namespace <my-namespace> apply -f samples/gravity-adapter-mongodb.yaml
   ```
3. Verify deployment:
   ```bash
   kubectl --namespace <my-namespace> get pods
   ```

### *6.2* Enable MongoDB TLS Connections
1. Create a config map for the CA certificate:
   ```bash
   kubectl --namespace <your-namespace> create configmap ca-config-map --from-file=ca.crt=<path-to-ca.crt>
   ```
2. Modify `samples/gravity-adapter-mongodb_tls.yaml`:
   - Add `tls=true` to the connection URI.
   - Set the `ca_file` parameter to the certificate path.
3. Deploy:
   ```bash
   kubectl --namespace <my-namespace> apply -f samples/gravity-adapter-mongodb_tls.yaml
   ```
4. Check logs for successful connection:
   ```bash
   kubectl --namespace <my-namespace> logs gravity-adapter-example-0
   ```

