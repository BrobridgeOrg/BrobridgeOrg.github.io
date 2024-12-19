# Informix DB Adapter

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

[service]
port = 8080

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
| `service.port`             | Sets the RESTful API service port                                          |
| `source.config`            | Path to the source configuration file                                      |
| `store.enabled`            | Enables persistent volume mounting (required for batch mode)              |
| `store.path`               | Path for mounting the persistent volume (required for batch mode)          |

> **INFO**
>
> The `config.toml` settings can also be provided via environment variables. The naming convention is as follows:
>
> ```
> GRAVITY_ADAPTER_INFORMIX_[SECTION]_[KEY]
> ```
> All letters are uppercase, and underscores (`_`) separate the sections and keys.  
> Example for `gravity.host`:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_INFORMIX_GRAVITY_HOST
>   value: 192.168.0.1
> ```

---

## `settings.json` Explanation

##### Example of `settings/sources.json`
```json
{
   "sources": {
      "informix1": {
         "uri": "/dataInput",
         "disabled": false,
         "batch_mode": true,
         "dbs": {
            "dfedemo_ifx": {
               "tables": {
                  "customer": {
                     "events": {
                        "create": "accountCreated",
                        "update": "accountUpdated",
                        "delete": "accountDeleted"
                     }
                  },
                  "user": {
                     "events": {
                        "create": "userCreated",
                        "update": "userUpdated",
                        "delete": "userDeleted"
                     }
                  }
               }
            },
            "TestDB": {
               "tables": {
                  "account": {
                     "events": {
                        "create": "accountCreated",
                        "update": "accountUpdated",
                        "delete": "accountDeleted"
                     }
                  },
                  "user": {
                     "events": {
                        "create": "userCreated",
                        "update": "userUpdated",
                        "delete": "userDeleted"
                     }
                  }
               }
            }
         }
      },
      "informix2": {
         "uri": "/dataInput2",
         "disabled": false,
         "batch_mode": false,
         "dbs": {
            "dfedemo_ifx": {
               "tables": {
                  "customer": {
                     "events": {
                        "create": "accountCreated",
                        "update": "accountUpdated",
                        "delete": "accountDeleted"
                     }
                  },
                  "user": {
                     "events": {
                        "create": "userCreated",
                        "update": "userUpdated",
                        "delete": "userDeleted"
                     }
                  }
               }
            },
            "TestDB": {
               "tables": {
                  "account": {
                     "events": {
                        "create": "accountCreated",
                        "update": "accountUpdated",
                        "delete": "accountDeleted"
                     }
                  },
                  "user": {
                     "events": {
                        "create": "userCreated",
                        "update": "userUpdated",
                        "delete": "userDeleted"
                     }
                  }
               }
            }
         }
      }
   }
}
```

| Parameter                              | Description                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------|
| `sources.SOURCE_NAME.uri`              | Sets the RESTful API URI (e.g., `POST http://127.0.0.1:8080/dataInput`)      |
| `sources.SOURCE_NAME.disabled`         | Whether to disable this source                                              |
| `sources.SOURCE_NAME.batch_mode`       | Enables batch mode; if true, persistent volume must be mounted (refer to `config.toml`) |
| `sources.SOURCE_NAME.dbs.DB_NAME`      | Sets the Informix database name                                             |
| `sources.SOURCE_NAME.dbs.DB_NAME.tables.TABLE_NAME.event.create` | Event name for record creation                                   |
| `sources.SOURCE_NAME.dbs.DB_NAME.tables.TABLE_NAME.event.update` | Event name for record updates                                    |
| `sources.SOURCE_NAME.dbs.DB_NAME.tables.TABLE_NAME.event.delete` | Event name for record deletion                                    |

> **INFO**
>
> The `settings.json` configuration can also be provided via environment variables.  
> Environment variable format:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_INFORMIX_SOURCE_SETTINGS
>   value: |
>     {
>       "sources": {
>         "informix1": {
>           "uri": "/dataInput",
>           "disabled": false,
>           "batch_mode": true,
>           ...
>         }
>       }
>     }
> ```

---

## Build

To build the adapter image, use the following command:
```bash
podman buildx build --platform linux/amd64 -t hb.k8sbridge.com/gravity/gravity-adapter-informix:v0.0.3 -f build/docker/Dockerfile .
```

---

## Log Levels

Log levels can be configured using environment variables (default: `info`).  
Available levels: **trace**, **debug**, **info**, **error**.

```yaml
env:
- name: GRAVITY_DEBUG
  value: debug
```

