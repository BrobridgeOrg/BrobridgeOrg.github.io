# Microsoft SQL Adapter

## `config.toml` Explanation

##### Example of `configs/config.toml`
```toml
[gravity]
domain = "default"
host = "192.168.8.227"
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
enabled = true
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
> GRAVITY_ADAPTER_MSSQL_[SECTION]_[KEY]
> ```
> All letters are uppercase, and underscores (`_`) separate the sections and keys.  
> Example for `gravity.host`:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_MSSQL_GRAVITY_HOST
>   value: 192.168.0.1
> ```

## `settings.json` Explanation

##### Example of `settings/sources.json`
```json
{
    "sources": {
        "my_mssql": {
            "disabled": false,
            "host": "192.168.8.227",
            "port": 1433,
            "username": "SA",
            "password": "1qaz@WSX",
            "dbname": "TestDB",
            "param": "",
            "initialLoad": true,
            "initialLoadBatchSize": 100000,
            "//_comment_interval": "query interval unit: seconds",
            "interval": 5,
            "tables": {
                "dbo.Inventory": {
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

| Parameter                              | Description                                                                             |
|----------------------------------------|-----------------------------------------------------------------------------------------|
| `sources.SOURCE_NAME.disabled`         | Whether to disable this source                                                         |
| `sources.SOURCE_NAME.host`             | Sets the MSSQL server IP address                                                       |
| `sources.SOURCE_NAME.port`             | Sets the MSSQL server port                                                             |
| `sources.SOURCE_NAME.username`         | Sets the MSSQL login username                                                          |
| `sources.SOURCE_NAME.password`         | Sets the MSSQL login password                                                          |
| `sources.SOURCE_NAME.dbname`           | Sets the MSSQL database name                                                           |
| `sources.SOURCE_NAME.param`            | Additional connection parameters. See [go-mssqldb common parameters](https://github.com/denisenkom/go-mssqldb#less-common-parameters). |
| `sources.SOURCE_NAME.initialLoad`      | Whether to synchronize existing records during initialization                          |
| `sources.SOURCE_NAME.initialLoadBatchSize` | Number of records per batch during initial load                                       |
| `sources.SOURCE_NAME.interval`         | Synchronization interval for CDC events (in seconds)                                   |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.snapshot` | Event name for initial load                                           |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.create`   | Event name for record creation                                                         |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.update`   | Event name for record updates                                                          |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.delete`   | Event name for record deletion                                                         |

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
> - name: MY_MSSQL_PASSWORD
>   value: f737540b75550a17af98cd3e640f61fd
> ```

> A password encryption tool is included in the `hb.k8sbridge.com/gravity/gravity-adapter-mssql:v3.0.6` image. Use the following commands:
> ```bash
> $ /pwd-encrypt --plaintext 123456
> f737540b75550a17af98cd3e640f61fd
>
> $ /pwd-encrypt --ciphertext f737540b75550a17af98cd3e640f61fd
> 123456
> ```

Let me know if you'd like me to translate or adjust additional sections!
