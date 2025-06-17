# Improving Inefficient Multi-Source Data Aggregation

Aggregating and correlating data from multiple sources is a common task in traditional data processing. However, it's often inefficient and lacks parallel processing capabilities. This is because queries need to travel back and forth between multiple sources, resulting in significant overhead. The cost and complexity of these round-trips are much greater compared to single-source queries.

---

## Common Drawbacks of Traditional Multi-Source Aggregation

When handling multi-source data aggregation and correlation in traditional systems, the following problems often occur:

- **Hard to implement**: Whether it's a database administrator or an application developer, this task is burdensome.
- **High load**: Each requirement or behavior involves querying or scraping data, making all systems extremely busy.
- **Low efficiency**: Data is queried, aggregated, and transformed only when needed—like searching for a needle in a haystack.
- **Out of sync**: Asynchronous data input from different sources causes delays and retry loops.
- **High cost**: Cross-database join queries incur a large number of round-trip calls.
- **Heavy impact**: The more applications require the data, the greater the burden on the data sources, seriously affecting performance.

---

## Improvements with GRAVITY

After introducing GRAVITY, we can use different pipelines to pull data from each source into a cache, and synchronize changes in real time using CDC (Change Data Capture) event notifications. This allows GRAVITY's data platform to maintain the latest data from all sources. Based on subscription requests from applications (down to individual fields, if needed), the data is aggregated and a new pipeline is created to store the aggregated data in the application's dedicated database.

With this approach, data sources are no longer overwhelmed by heavy join queries, and developers don't need to design complex join logic—allowing them to focus on core business logic. More importantly, the improved data delivery efficiency from GRAVITY's data platform benefits the entire data system, including both databases and applications.

---

## Design Improvements Enabled by GRAVITY

With GRAVITY’s support as a central data platform, complex legacy query mechanisms and processes can be greatly simplified, resulting in:

- Parallel aggregation and correlation of data sources
- Data ready before execution on the application side
- Each requirement reads directly from a final Virtual Table
