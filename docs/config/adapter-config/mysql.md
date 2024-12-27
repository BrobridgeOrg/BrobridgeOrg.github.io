# MySQL Adapter 

## `config.toml` Explanation

##### Example of `configs/config.toml`
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
> GRAVITY_ADAPTER_MYSQL_[SECTION]_[KEY]
> ```
> All letters are uppercase, and underscores (`_`) separate the sections and keys.  
> Example for `gravity.host`:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_MYSQL_GRAVITY_HOST
>   value: 192.168.8.227
> ```

---

## `settings.json` Explanation

##### Example of `settings/sources.json`
```json
{
    "sources": {
        "mysql_example": {
            "disabled": false,
            "host": "192.168.8.227",
            "port": 3306,
            "username": "root",
            "password": "1qaz@WSXROOT",
            "dbname": "gravity",
            "initialLoad": false,
            "tables": {
                "accounts": {
                    "event": {
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

| Parameter                              | Description                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------|
| `sources.SOURCE_NAME.disabled`         | Whether to disable this source                                              |
| `sources.SOURCE_NAME.host`             | Sets the MySQL server IP address                                            |
| `sources.SOURCE_NAME.port`             | Sets the MySQL server port                                                  |
| `sources.SOURCE_NAME.username`         | Sets the MySQL login username                                               |
| `sources.SOURCE_NAME.password`         | Sets the MySQL login password                                               |
| `sources.SOURCE_NAME.dbname`           | Sets the MySQL database name                                                |
| `sources.SOURCE_NAME.initialLoad`      | Whether to synchronize existing records during initialization               |
| `sources.SOURCE_NAME.tables.TABLE_NAME` | Name of the table to capture events                                         |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.snapshot` | Event name for initial load                                           |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.create`   | Event name for record creation                                              |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.update`   | Event name for record updates                                               |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.delete`   | Event name for record deletion                                              |

> **INFO**
>
> The database password can be provided via environment variables using AES encryption.  
> Environment variable format:
>
> ```
> [SOURCE_NAME]_PASSWORD
> ```
> Example:
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_MYSQL_SOURCE_SETTINGS
>   value: |
>     {
>         "sources": {
>             "mysql_example": {
>                 "disabled": false,
>                 "host": "192.168.8.227",
>                 "port": 3306,
>                 "username": "root",
>                 "password": "1qaz@WSXROOT",
>                 "dbname": "gravity",
>                 "initialLoad": false,
>                 "tables": {
>                     "accounts": {
>                         "event": {
>                             "snapshot": "accountInitialized",
>                             "create": "accountCreated",
>                             "update": "accountUpdated",
>                             "delete": "accountDeleted"
>                         }
>                     }
>                 }
>             }
>         }
>     }
> ```

---

## Build

To build the adapter image, use the following command:
```bash
podman buildx build --platform linux/amd64 --build-arg="AES_KEY=**********" -t docker.io/brobridgehub/gravity-adapter-mysql:v3.0.0 -f build/docker/Dockerfile .
```

---

## Enable Database CDC

### Enable Binlog for MySQL 8.0
```bash
vim /etc/mysql/mysql.conf.d/mysqld.cnf

[mysqld]
...
log-bin=/var/lib/mysql/binlog
binlog-format=row
```

### Enable Binlog for MySQL 5.7
```bash
vim /etc/mysql/mysql.conf.d/mysqld.cnf

[mysqld]
...
server-id=1
log-bin=/var/lib/mysql/mysql-bin.log
binlog-format=row
max_allowed_packet=100M
```

### Check if Binlog is Enabled
```bash
mysql> show variables like 'log_bin';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| log_bin       | ON    |
+---------------+-------+
1 row in set (0.00 sec)

mysql> show variables like 'binlog_format';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| binlog_format | ROW   |
+---------------+-------+
1 row in set (0.00 sec)
```

