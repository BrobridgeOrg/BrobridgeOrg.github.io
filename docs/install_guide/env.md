# Context

In the next few chapters, all the example operations are performed in the provided context.

Assume our data source came from MSSQL, and we are loading our data into a target (downstream) database MySQL
![image](/img/env1.png)


The figure below depicts a **Atomic Flow**, where we use `bdl_id` as basis to perform partition on data tables. We then use MySQL module to insert data into database.
![image](/img/env2.png)
