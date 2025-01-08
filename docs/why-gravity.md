# Why Gravity?

## *1.* Abstract

**Gravity** by Brobridge is a modern data middleware solution designed to meet the demands of high performance, scalability, and distributed systems with real-time data transmission and event-driven architecture. With the rapid advancement of digital transformation and cloud-native applications, traditional messaging middleware solutions such as IBM MQ, TIBCO EMS, Apache ActiveMQ, and JMS struggle to handle the growing complexity of enterprise needs. Brobridge Gravity, with its emphasis on real-time data transmission, event-driven architecture, and efficient integration, has emerged as a strong contender for the next generation of data infrastructure.

Similar to modern messaging systems like Apache Kafka, Gravity leverages a distributed architecture to achieve high-efficiency transmission. However, Gravity emphasizes flexibility and low-barrier integration, enabling enterprises to implement real-time data processing and flow for applications more effortlessly.

Gravity is designed to address the data processing challenges enterprises face during digital transformation, maximizing the value of data and empowering engineering teams with greater productivity and innovation.

---

## *2.* Conventional Data Middleware

### Monolithic Architecture

In a centralized system, source data is processed in one location, and its speed is limited by the host’s performance, often requiring high-spec hardware to maintain efficiency. As data demands grow, significant expenses are incurred to upgrade hardware. Additionally, data must be processed in batch integrations, with large-scale data transfers causing longer update times.

![image](/img/why-gravity/flowchart0.jpg)

## *3.* Gravity Features

### *3.1* Distributed Architecture

Distributed systems, widely adopted in Silicon Valley software industries, are designed to ensure high availability and fault tolerance. A key benefit of distributed architecture is horizontal scalability, which allows businesses to expand software services with ease. Brobridge brings this cutting-edge technology to data governance, and Gravity leverages its benefits to achieve high availability, fault tolerance, and scalability.

As illustrated below, Gravity separates "read" and "write" operations (a.k.a. CQRS) from diverse data sources, including various message queues, SQL, and NoSQL databases, reducing system runtime pressure.

![image](/img/why-gravity/flowchart1.jpg)

Distributed architecture not only enables read-write separation but also disperses the load of complex data pipeline processing. Gravity segments data into **Data Products (DP)** to supply data to **Atomic** (a Brobridge-developed ETL tool) or other post-processing services. These pipelines allocate computational resources across multiple hosts as needed, achieving a distributed architecture. Moreover, in cases of unexpected component failures, Gravity quickly establishes new services to rectify errors, ensuring data accuracy and minimizing downtime.


### *3.2* Data Product

The **Data Product (DP)** is a cornerstone of Brobridge Gravity. By organizing incoming data into customizable, serviceable products, Gravity allows front-end database backups, downstream processing, or external applications to access data through its API. 

![image](/img/why-gravity/flowchart2.jpg)


Data Products can simultaneously provide data to multiple services while supporting subscriptions from multiple products, forming a **Data Mesh** architecture. Unlike traditional ETL systems, Gravity minimizes pressure on the data source by managing subscriptions independently.


### *3.3* Event-Driven Architecture

A common pain point in the industry is the slow pace of business processes, often due to traditional middleware's reliance on batch processing by database administrators (DBAs). This involves clarifying which data needs to be processed and scheduling batch operations, which leads to delays in large-scale data transfers.

Gravity employs **Change Data Capture (CDC)** technology to enable real-time data transmission and synchronization without requiring pre-scheduled batch processes. Users only need to define the data to be synchronized, and Gravity handles updates—including additions, modifications, and deletions—in real-time, whether for synchronization to databases or computation, achieving immediate results.


### *3.4* Atomic

Complemented by Brobridge’s technical consultancy and proprietary modules, **Atomic** features an intuitive graphical interface, allowing users to design business logic workflows through drag-and-drop operations. 

![image](/img/why-gravity/intro4.png)

Atomic includes a wide range of built-in modules, and for users requiring more customization, external modules can be downloaded, or JavaScript can be used for tailored solutions.


### *3.5* Multi-Layered Computation

In business scenarios, multi-tiered and parallel processing of data is a common requirement. For example, customers often want data to be processed in layers, with results from each layer backed up for reuse in other applications. Without a middleware solution, addressing such requirements can be challenging.


![image](/img/why-gravity/flowchart3.jpg)

Traditional middleware systems require data to be imported into a database first and then exported for use, increasing system load. Gravity not only meets these needs effortlessly but also leverages its distributed architecture to significantly reduce system strain while achieving multi-layered computation seamlessly.

---

## TL;DR

Brobridge Gravity is an innovative and efficient distributed data transmission and event-driven architecture solution, designed to meet modern enterprises’ digital needs. Compared to traditional messaging middleware, Gravity emphasizes real-time capabilities, scalability, and flexible integration. By leveraging distributed architecture, it ensures high availability, fault tolerance, and efficient data processing.

Key features include the innovative application of **Data Products**, real-time data synchronization via CDC, and the visual development tool Atomic, enabling businesses to quickly deploy solutions and address complex data governance challenges. Furthermore, Gravity’s multi-layered computation capabilities, combined with the benefits of distributed architecture, reduce system burden while enhancing computational efficiency and reliability.

With these technological advantages, Gravity equips enterprises with a flexible, efficient data infrastructure, overcoming the efficiency bottlenecks of traditional middleware, unlocking the value of data, and enabling businesses to excel in digital transformation.
