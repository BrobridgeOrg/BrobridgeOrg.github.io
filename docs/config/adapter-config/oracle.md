#  Oracle 11g Adapter

## `config.toml` Explanation

##### Example of `configs/config.toml`
```toml
[gravity]
domain = "default"
host = "0.0.0.0"
port = 4222
pingInterval = 10
maxPingsOutstanding = 3
maxReconnects = -1
accessToken = ""
publishBatchSize = 1000
rateLimit = 0

[source]
config = "./settings/sources.json"

[store]
enabled = false
path = "./statestore"
```

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
> GRAVITY_ADAPTER_ORACLE_[SECTION]_[KEY]
> ```
> All letters are uppercase, and underscores (`_`) separate the sections and keys.  
> Example for `gravity.host`:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_ORACLE_GRAVITY_HOST
>   value: 192.168.0.1
> ```

## `settings.json` Explanation

##### Example of `settings/sources.json`
```json
{
   "sources": {
      "myoracle11g": {
         "disabled": false,
         "host": "172.17.0.1",
         "port": 1521,
         "username": "logminer",
         "password": "logminer",
         "dbname": "XE",
         "mode": "logminer",
         "initialLoad": true,
         "initialLoadBatchSize": 100000,
         "interval": 1,
         "tables": {
            "gravity.account": {
               "events": {
                  "snapshot": "accountInitialized",
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

| Parameter                             | Description                                                                 |
|---------------------------------------|-----------------------------------------------------------------------------|
| `sources.SOURCE_NAME.disabled`        | Whether to disable this source                                              |
| `sources.SOURCE_NAME.host`            | Sets the Oracle server IP address                                           |
| `sources.SOURCE_NAME.port`            | Sets the Oracle server port                                                 |
| `sources.SOURCE_NAME.username`        | Sets the Oracle login username                                              |
| `sources.SOURCE_NAME.password`        | Sets the Oracle login password                                              |
| `sources.SOURCE_NAME.dbname`          | Sets the Oracle database name                                               |
| `sources.SOURCE_NAME.pdbName`         | Sets the Oracle PDB name (not required for 11g)                             |
| `sources.SOURCE_NAME.mode`            | Sets the mode (`logminer` or `batch`)                                       |
| `sources.SOURCE_NAME.initialLoad`     | Whether to synchronize existing records during initialization               |
| `sources.SOURCE_NAME.initialLoadBatchSize` | Number of records per batch during initial load                           |
| `sources.SOURCE_NAME.interval`        | Synchronization interval for initial load events (in seconds)              |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.create` | Event name for record creation                                  |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.update` | Event name for record updates                                   |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.delete` | Event name for record deletion                                   |

> **INFO**
>
> The database password can be provided via environment variables using AES encryption.  
> Environment variable format:
>
> ```
> [SOURCE_NAME]_PASSWORD
> ```
> If both the environment variable and `settings.json` specify a password, the environment variable takes precedence.  
> Example:
> ```yaml
> env:
> - name: MYORACLE_PASSWORD
>   value: f737540b75550a17af98cd3e640f61fd
> ```

## Build

To build the adapter image, use the following command:
```bash
podman buildx build --platform linux/amd64 --build-arg="AES_KEY=**********" -t hb.k8sbridge.com/gravity/gravity-adapter-oracle:v4.0.21 -f build/docker/Dockerfile .
```

