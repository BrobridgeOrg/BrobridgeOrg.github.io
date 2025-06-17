# Application Scenarios

**Gravity** can immediately resolve a variety of issues in existing database systems without the need to modify applications or build complex, hard-to-maintain database clusters. Data system architects can adopt different Gravity reference architectures based on application scenarios, freely combining them into tailored solutions.

## Common Application Scenarios

- [Legacy database systems under heavy load](#legacy-database-systems-under-heavy-load)  
- [Massive data writes in a short time](#massive-data-writes-in-a-short-time)  
- [High concurrency query demands](#high-concurrency-query-demands)  
- [Data caching](#data-caching)  
- [Large-scale concurrent queries across multiple database systems ](#large-scale-concurrent-queries-across-multiple-database-systems)  
- [Integration and replication of heterogeneous databases](#integration-and-replication-of-heterogeneous-databases)  
- [Cross-cloud data migration, caching, and concurrent queries](#cross-cloud-data-migration-caching-and-concurrent-queries)  
- [Data governance across organizational units, data mesh management](#data-governance-across-organizational-units-data-mesh-management)  
- [Hot standby for databases](#hot-standby-for-databases)  


---

## Legacy Database Systems Under Heavy Load

As digital transformation increases the demand for data and applications multiply, legacy database systems often become overwhelmed. Due to the high risk of modifying legacy systems—and the lack of expertise with outdated technologies—enhancing these systems becomes a major pain point. **Gravity** enhances the concurrent query and write capabilities of legacy systems in a non-intrusive way, enabling them to meet the demands of modern applications.

---

## Massive Data Writes in a Short Time

Large volumes of data writes can overwhelm databases, leading to poor write performance and potential data loss. **Gravity's** data orchestration capabilities enable write sharding and routing, allowing for horizontal scaling to improve write efficiency. This can be achieved without modifying how applications connect to the database, making the enhancement process seamless.

---

## High Concurrency Query Demands

Whether it’s due to a large number of users accessing the system simultaneously or multiple applications querying data across systems, high concurrency can crash a database. **Gravity** provides faster, more flexible architectures to handle this. With just a few settings, multiple data replicas can be created within minutes to scale up query capacity.

---

## Data Caching

For applications that frequently query specific data or perform complex queries, **Gravity** can filter and aggregate selected fields, significantly accelerating query performance. Combined with Gravity’s replica expansion mechanism, it can also support highly concurrent cached queries.

---

## Large-Scale Concurrent Queries Across Multiple Database Systems

Normally, performing correlated queries across multiple databases is highly inefficient and places tremendous load on both the network and the data sources. **Gravity's** data aggregation feature can extract and merge data from various databases, allowing applications to access related data without querying the original sources. If high concurrency is also needed, Gravity's replication features can further scale the system.

---

## Integration and Replication of Heterogeneous Databases

Different applications often require data to be stored in various types of databases for easier processing, or they may need to access data from different databases for integration. **Gravity** enables easy replication, synchronization, and aggregation of data across heterogeneous database systems, addressing such integration needs effectively.

---

## Cross-Cloud Data Migration, Caching, and Concurrent Queries

Cross-cloud data demands often cause serious network strain, and cross-region or cross-network data queries are usually inefficient. **Gravity** can serve as an intermediary node to compress data traffic between clouds, relieving the pressure from round-trip queries. When combined with its data scheduling mechanisms, Gravity supports cross-cloud data caching, publishing, and aggregation to meet the needs of applications on other cloud platforms.

---

## Data Governance Across Organizational Units, Data Mesh Management

Managing data access across organizational units or third parties is notoriously difficult. Not only does it stress the source systems due to large query volumes, but implementing authorization mechanisms is also time-consuming for administrators and developers. **Gravity** uses proxy nodes to form a data mesh, unifying cross-organization data subscription mechanisms. This eliminates direct query-related access stress and builds an additional layer of protection outside organizational databases with strict access control on datasets.

---

## Hot Standby for Databases

Database backups and redundancy are essential components of enterprise data systems. In the digital era, every piece of data is valuable. Hot standby and backup ensure that data is preserved in real time, so that when the primary database system fails or is damaged, recovery can occur without data loss. **Gravity** supports real-time data replication for any database system, achieving hot standby without the need for traditional master-slave cluster architectures.
