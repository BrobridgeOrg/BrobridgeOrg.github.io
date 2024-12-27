# Oracle Golden Gate to Kafka Adapter
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

> **INFO**
>
> The `config.toml` settings can also be provided via environment variables. The naming convention is as follows:
>
> ```
> GRAVITY_ADAPTER_OGG_[SECTION]_[KEY]
> ```
> All letters are uppercase, and underscores (`_`) separate the sections and keys.  
> Example for `gravity.host`:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_OGG_GRAVITY_HOST
>   value: 192.168.0.1
> ```

---

## `settings.json` Explanation

##### Example of `settings/sources.json`
```json
{
   "sources": {
      "kafka_normal": {
         "hosts": [
            "192.168.8.227:9092",
            "192.168.8.227:9093",
            "192.168.8.227:9094"
         ],
         "groupId": "test-group",
         "topic": "example.accountevent",
         "disabled": false,
         "autoOffsetReset": "earliest",
         "tables": {
            "TEST_OGG.TEST_OGG": {
               "events": {
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
| `sources.SOURCE_NAME.hosts`            | Sets the Kafka cluster server IPs and ports                                 |
| `sources.SOURCE_NAME.groupId`          | Sets the Kafka client group ID                                              |
| `sources.SOURCE_NAME.topic`            | Sets the Kafka topic to subscribe to                                        |
| `sources.SOURCE_NAME.autoOffsetReset`  | Sets the starting point for consuming messages from the topic. Options: `earliest` or `latest`. |
| `sources.SOURCE_NAME.ssl`              | Configures TLS settings for secure connections                              |
| `sources.SOURCE_NAME.ssl.ssl.ca.location` | Path to the CA certificate                                                  |
| `sources.SOURCE_NAME.ssl.ssl.certificate.location` | Path to the client certificate                                            |
| `sources.SOURCE_NAME.ssl.ssl.key.location` | Path to the client private key                                              |
| `sources.SOURCE_NAME.sasl`             | Configures SASL authentication settings                                     |
| `sources.SOURCE_NAME.sasl.sasl.mechanisms` | Sets the SASL mechanism. Options: `PLAIN` or `GSSAPI`.                     |
| `sources.SOURCE_NAME.sasl.sasl.username` | SASL username (for `PLAIN` mechanism)                                       |
| `sources.SOURCE_NAME.sasl.sasl.password` | SASL password (for `PLAIN` mechanism)                                       |
| `sources.SOURCE_NAME.sasl.sasl.kerberos.service.name` | Kerberos service name (for `GSSAPI` mechanism)                             |
| `sources.SOURCE_NAME.sasl.sasl.kerberos.keytab` | Path to the Kerberos keytab file                                            |
| `sources.SOURCE_NAME.sasl.sasl.kerberos.principal` | Kerberos principal                                                         |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.create` | Event name for record creation                                             |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.update` | Event name for record updates                                              |
| `sources.SOURCE_NAME.tables.TABLE_NAME.event.delete` | Event name for record deletion                                             |

> **INFO**
>
> The `settings.json` configuration can also be provided via environment variables.  
> Environment variable format:
>
> ```yaml
> env:
> - name: GRAVITY_ADAPTER_OGG_SOURCE_SETTINGS
>   value: |
>     {
>        "sources": {
>           "kafka_normal": {
>              "hosts": ["192.168.8.227:9092", "192.168.8.227:9093", "192.168.8.227:9094"],
>              "groupId": "test-group",
>              "topic": "example.accountevent",
>              ...
>           }
>        }
>     }
> ```

---

## Build

To build the adapter image, use the following command:
```bash
podman buildx build --platform linux/amd64 -t hb.k8sbridge.com/gravity/gravity-adapter-ogg:v0.0.1 -f build/docker/Dockerfile .
```

---

## Log Levels

Log levels can be configured using environment variables.  
Available levels: **debug**, **info**, **error**.  
Default level: `info`.

```yaml
env:
- name: GRAVITY_DEBUG
  value: debug
```
