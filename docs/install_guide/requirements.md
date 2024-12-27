# System Requirements 
## *1.* Hardware Prerequisites 

### *1.1* Single Node Virtual Machine Specs
Provided specs below estimate the resource usage for Gravity and staging DB

| Number of nodes | CPUs | Memory (GiB) | Storage (GiB)|
|------------|------|--------------|--------------|
|     1      |  12  |     48       |     900      |

* Storage size is adjustable, usually twice the size of the input data 



### *1.2* VM Specs for Multi-node Kubernetes Installation

| VM node           |Count| vCPU  | Memory (GiB) | Storage (GiB) |
| ------------------|-----|-------|--------------|---------------|
| Master node + NFS | 1   | 2     | 4           | 600           |
| Worker node       | 1   | 8     | 16          | 100           |
| Windows 跳板機    | 1   | 2     | 4           | 80            |

* Storage size is adjustable, usually twice the size of the input data 





## *2.* Environment 
* A Kubernetes cluster, capable of connecting to internet to pull images.
* A local image registry (e.g.,Docker, Harbor)
* A Linux jump server with the correct access rights to operate K8S cluster


> :memo: **A jump server could be any one of the following:**
>
> A master node in the kubernetes cluster
> 
> Any machine that can connect to the master node

## *3.* Acquire sample `.yaml` files and images 
Click --->  [here](https://drive.google.com/file/d/1iNOU-T-M3OC59shNI7lkkWZI8Mh-D12x/view?usp=drive_link) to install the official Gravity Image file (image files)

Click --->  [here](https://drive.google.com/file/d/1iNOU-T-M3OC59shNI7lkkWZI8Mh-D12x/view?usp=drive_link) to install the depndency files (Sample .yaml)

### *3.1* File Structure
Below is the file structure provided:
```
── 00-namespace.yaml
├── 10-lab-db
│   ├── source-mssql
│   │   ├── 01-create_src_db.sh
│   │   ├── 02-query_src.sh
│   │   ├── 03-drop_src_tb.sh
│   │   ├── DropTable.sql
│   │   ├── mssql.yaml
│   │   └── SrcTable.sql
│   ├── target2-mysql
│   │   ├── 01-create_target2_tb.sh
│   │   ├── 02-query_target2.sh
│   │   ├── 03-drop_target_tb.sh
│   │   ├── delete_target2.sh
│   │   ├── mysql.yaml
│   │   ├── query.sh
│   │   └── Target2Table.sql
│   └── target-mssql
│       ├── 01-create_tgt_db.sh
│       ├── 02-query_tgt.sh
│       ├── 03-drop_tgt_tb.sh
│       ├── DropTable.sql
│       ├── mssql.yaml
│       └── TargetTable.sql
├── 20-lab-gitea
│   ├── gitea.yaml
│   └── token.txt
├── 30-gravity
│   ├── 00-lab-configmap.yaml
│   ├── 01-lab-secret.yaml
│   ├── 10-lab-gravity-nats.yaml
│   ├── 20-lab-gravity-dispatcher.yaml
│   ├── 30-lab-adapter-mssql.yaml
│   ├── 40-lab-atomic.yaml
│   ├── data_product
│   │   ├── create_dp.sh
│   │   ├── delete_dp.sh
│   │   ├── handler.js
│   │   ├── list_token.sh
│   │   ├── schema.json
│   │   └── table-scanner_linux_amd64
│   └── flow
│       └── node_modules
├── atomic_build
│   ├── atomic
│   │   ├── pwd_encrypt
│   │   └── startup.sh
│   ├── Dockerfile.lab-atomic_test
│   └── README.md
├── db-test
│   ├── delete.sh
│   ├── delete_target2.sh
│   ├── error_retry.json
│   ├── flow.json
│   ├── insert.sh
│   ├── logic1.json
│   ├── logic2.json
│   ├── query.sh
│   ├── query_target2.sh
│   ├── source_1.txt
│   ├── source_2.txt
│   ├── update.sh
│   └── update.txt
├── README.md
└── tools
    ├── pwd_encrypt
    └── table-scanner_linux_amd64

```
