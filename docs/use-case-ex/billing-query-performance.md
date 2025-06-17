# Improving Performance in Billing System Queries

When applications need to access large volumes of historical data for statistics, calculations, or presentation (e.g., billing inquiries, marketing agent commissions, etc.), querying the database and calculating results each time is extremely inefficient. This results in long wait times for users before they can receive the query results.

---

## Problems Caused by On-Demand Aggregation and Joins

Billing systems often provide extensive query mechanisms for end users. Even the smallest piece of information may have a dedicated API or UI interface. However, even when the amount of information is small, the query complexity can be unexpectedly high—often requiring joins across multiple tables. 

To meet the diverse needs of end users, most queries are simply aggregation tasks with no complex join conditions. Despite this, each API call results in cross-table or cross-database join queries, placing heavy load on the database and leading to poor system performance.


<figure style={{ textAlign: "center" }}>
  <img src="/img/use-case-ex/billing-query-performance-1.png" alt="Billing Query Diagram" style={{ maxWidth: "100%" }} />
  <figcaption>**Heavy concurrent join queries can severely impact performance**</figcaption>
</figure>

In summary, data is normalized and stored in separate tables according to the original schema. When the application needs data, it retrieves and merges it from different storage locations. This results in obvious performance issues, including:

1. Slow database response times
2. Inability to handle high-concurrency query traffic
3. Reduced write performance, affecting normal business operations
4. Poor user experience due to system latency

---

## How GRAVITY Solves the Problem

Using GRAVITY’s aggregation mechanism, data can be joined and aggregated in real-time and written to a designated physical table. Applications can then query this table quickly without performing any relational queries. Since GRAVITY only processes change events from the original tables once, there is no load on the source database.

If the aggregated data is stored in a separate database, this results in a **read-write separation** architecture. In a Microservice Architecture (MSA), this implementation is also known as **CQRS (Command and Query Responsibility Segregation)**.

<figure style={{ textAlign: "center" }}>
  <img src="/img/use-case-ex/billing-query-performance-2.png" alt="Billing Query Diagram" style={{ maxWidth: "100%" }} />
  <figcaption>**Pre-aggregating data helps minimize the impact of concurrent access and preserves scalability**</figcaption>
</figure>


For more complex billing logic (e.g., agent commission hierarchies, account settlement), you can insert a custom business logic layer before writing the data to storage. This allows you to calculate the result with real-time data for fast querying later.

<figure style={{ textAlign: "center" }}>
  <img src="/img/use-case-ex/billing-query-performance-3.png" alt="Billing Query Diagram" style={{ maxWidth: "100%" }} />
  <figcaption>**Apply custom data processing logic before writing data to storage**</figcaption>
</figure>

> **Handling Rule Changes in Calculations**  
> GRAVITY data nodes keep track of the final data state. If a calculation rule changes, simply clear the downstream data and recalculate from the source data. The entire data pipeline will automatically update each downstream node with the final results.
