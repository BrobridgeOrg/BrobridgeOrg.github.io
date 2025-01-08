# Postgre SQL Adapter

## *1.* `config.toml` Explanation

### *1.1* Example of `configs/config.toml`
```toml
[gravity]
domain = "default"
host = "192.168.8.227"
port = 32803
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
### *1.2* Parameters
| Parameter              | Description                                                      |
|------------------------|------------------------------------------------------------------|
| `gravity.domain`       | Set the gravity domain                                          |
| `gravity.host`         | Set the Gravity NATS IP address                                 |
| `gravity.port`         | Set the Gravity NATS port                                       |
| `gravity.pingInterval` | Set the Gravity ping interval                                   |
| `gravity.maxPingsOutstanding` | Set the maximum outstanding pings                       |
| `gravity.maxReconnects` | Set the maximum number of reconnections                       |
| `gravity.accessToken`  | Set the Gravity access token (for authentication)              |
| `gravity.publishBatchSize` | Set the number of events to batch before publishing        |
| `gravity.rateLimit`    | Set the maximum rate of event publishing per second (0 = no limit) |
| `source.config`        | Path to the source configuration file                          |
| `store.enabled`        | Whether to mount a persistent volume (for state storage)       |
| `store.path`           | Path for mounting the persistent volume                        |

> :bulb: **INFO**
>
> The `config.toml` settings can be provided via environment variables. The naming convention is as follows:
> `GRAVITY_ADAPTER_POSTGRES_[SECTION]_[KEY]`
>
> All letters are uppercase, and underscores (`_`) are used to separate sections and keys.  
> Example for `gravity.host`:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_POSTGRES_GRAVITY_HOST
>   value: 192.168.0.1
> ```

## *2.* `settings.json` Explanation

### *2.1* Example of `settings/sources.json`
```json
{
    "sources": {
        "my_postgres": {
            "disabled": false,
            "host": "192.168.8.227",
            "port": 5432,
            "username": "postgres",
            "password": "1qaz@WSX",
            "dbname": "gravity",
            "param": "sslmode=disable",
            "initialLoad": true,
            "initialLoadBatchSize": 10000,
            "//_comment_interval": "query interval unit: seconds",
            "interval": 1,
            "slotName": "regression_slot",
            "//_comment_public.account": "schema.tableName",
            "tables": {
                "public.account": {
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
### *2.2* Parameters
| Parameter                        | Description                                               |
|----------------------------------|-----------------------------------------------------------|
| `sources.SOURCE_NAME.disabled`   | Whether to disable this source                            |
| `sources.SOURCE_NAME.host`       | PostgreSQL server IP                                      |
| `sources.SOURCE_NAME.port`       | PostgreSQL server port                                    |
| `sources.SOURCE_NAME.username`   | PostgreSQL username                                       |
| `sources.SOURCE_NAME.password`   | PostgreSQL password                                       |
| `sources.SOURCE_NAME.dbname`     | PostgreSQL database name                                  |
| `sources.SOURCE_NAME.param`      | Additional connection parameters (e.g., `"sslmode=disable"`) |
| `sources.SOURCE_NAME.initialLoad` | Whether to synchronize existing records initially       |
| `sources.SOURCE_NAME.initialLoadBatchSize` | Number of records per batch during initial sync   |
| `sources.SOURCE_NAME.interval`  | Sync interval for initial load events (in seconds)        |
| `sources.SOURCE_NAME.slotName`  | Name of the replication slot                              |
| `sources.SOURCE_NAME.tables.TABLE_NAME` | Name of the table to capture events (e.g., `"public.account"`) |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.snapshot` | Event name for initial load    |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.create` | Event name for record creation  |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.update` | Event name for record updates   |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.delete` | Event name for record deletion  |

> **INFO**
>
> The database password can be provided via environment variables using AES encryption.  
> Environment variable format:
> `[SOURCE_NAME]_PASSWORD`

