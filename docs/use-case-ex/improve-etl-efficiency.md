# Improving ETL Efficiency Issues

Organizations commonly use ETL (Extract, Transform, Load) processes to extract, transform, consolidate, filter, or link data—typically collecting it from one or multiple systems and storing it in a target data repository for further use. These ETL pipelines are often complex and time-consuming. When issues arise in the output data, the entire process must be restarted, which is inefficient and costly. Furthermore, heavy ETL workloads can place substantial pressure on systems, potentially impacting the performance of data source systems and further degrading ETL efficiency.

<figure style={{ textAlign: "center" }}>
  <img src="/img/use-case-ex/improve-etl-efficiency-1.png" alt="image" style={{ maxWidth: "100%" }} />
  <figcaption>**ETL imposes heavy load on data sources, which can degrade overall system efficiency**</figcaption>
</figure>

---

## Common ETL Efficiency Issues

Cross-system data collection and extraction inevitably require ETL pipelines, but poorly implemented ETL solutions often suffer from the following issues:

1. Significant pressure on data sources during execution
2. Data is not real-time
3. Due to performance constraints, only a few ETL jobs can run against a single data source at any given time
4. Long occupation of data source computing resources
5. High cost of re-execution in case of unexpected errors

---

## Improvement with GRAVITY

GRAVITY’s data agent nodes eliminate the need for external systems to directly access the source database when retrieving data. This completely isolates the ETL process from impacting the source systems. Since GRAVITY collects real-time data events, ETL processes can also operate on real-time data, eliminating data latency issues.

<figure style={{ textAlign: "center" }}>
  <img src="/img/use-case-ex/improve-etl-efficiency-2.png" alt="image" style={{ maxWidth: "100%" }} />
  <figcaption>**Using GRAVITY proxy nodes to build a real-time caching mechanism enables parallel ETL processing**</figcaption>
</figure>

With this architecture, data can be simultaneously supplied and stored in multiple replicas for use by multiple ETL processes. This enables the workload to be distributed across different independent systems. Additionally, the expansion of cache replicas allows more ETL jobs to run concurrently.
