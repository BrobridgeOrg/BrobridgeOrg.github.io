# Dispatcher Configuration


## *1.* Deployment
Dispatcher is designed to be deployed as is. Below is an example of a dispatcher .yaml file for kubernetes deployment.

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  labels:
    app: gravity
    component: dispatcher
    release: gravity
  name: gravity-dispatcher
  namespace: gravity2-lab
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gravity
      component: dispatcher
      release: gravity
  serviceName: ""
  template:
    metadata:
      labels:
        app: gravity
        component: dispatcher
        release: gravity
    spec:
      containers:
        - env:
            - name: GRAVITY_DISPATCHER_GRAVITY_HOST
              value: gravity-nats
            - name: GRAVITY_DISPATCHER_GRAVITY_PORT
              value: "4777"
            - name: GRAVITY_DISPATCHER_GRAVITY_DOMAIN
              value: "default"
          image: <your image registry>
          imagePullPolicy: IfNotPresent
          name: gravity-dispatcher
          resources:
            limits:
              cpu: "4"
              memory: 4Gi
            requests:
              cpu: 100m
              memory: 100Mi
      initContainers:
        - command:
            - sh
            - -c
            - until nc -z -w 2 gravity-nats 4777; do echo watting for gravity-nats:4777; sleep 1; done
          image: busybox:1.28
          imagePullPolicy: IfNotPresent
          name: init-gravity-dispatcher
      securityContext: {}

```

| Variable  | Description     |
|-----------| --------------------------------------------------------------------|
|GRAVITY_DISPATCHER_GRAVITY_HOST| NATs cluster of which dispatcher will operate on|
|GRAVITY_DISPATCHER_GRAVITY_PORT| Port of which the dispatcher will communicate on|
|GRAVITY_DISPATCHER_GRAVITY_DOMAIN| [Data Domain](../core-concepts.md) of which the dispatcher will operate on|

## *2.* Resources
You may also configure the amount of resources a dispatcher have access to. In this example, dispatcher will have access to 4 CPUs and 4 GiB of memory at most, 
and at minimum, the dispatcher will consume 100milli-CPUs (0.1 CPU) and 100MiB of memory.

```yaml
resources:
  limits:
    cpu: "4"
    memory: 4Gi
  requests:
    cpu: 100m
    memory: 100Mi
```



