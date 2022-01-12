# System Design concepts -

# Scalability
# - handle more traffic add more servers
# 1. Separating out the database(little better from resiliency standpoint)
# 2. Horizontal scaling
#   - multiple servers handling requests via Load Balancers
#   - single database
#   - This is easier if Web servers are stateless
# 3. Vertical scaling
#   - adding a bigger server
#   - rather than a CPU running entire server
#   - database server bigger too
#   - single point of failure
#   - less nodes to take care of

# Failover Strategies
# 1. Cold Standby(scaling Database)
#   - periodic backup of database(manually store)
# 2. Warm Standby
#   - replication backup(auto store to another server)
# 3. Hot Standby
#   - duplicate calls(parallel running server)

# Sharding Databases
# - it lets us to route a given request to a given partition. So that, we can horizontally partition this database to some content. Maybe store different contents of the data on different shards through a hash function of some sort. And each shard has its own backup mechanism so that we can have not only scalability & resiliency.
# - sharded databases are sometimes called NoSQL. 
# Issue with NoSQL -
# - tough to do joins across Shards.
# - Resharding
# - Hotspots(more calls that other servers or celebrity problem)
# - Most NoSQL databases actually do support most SQL operations & use SQL as their API.
# - Still works best with simple key/value lookups
# - a formal schema may not be needed
# - examples - mongoDB, DynamoDB, Cassandra, HBase
#
# Normalized data - less storage space, more lookups, updates in 1 place(separate tables)
# Denormalized data(perforamce & scalability) = more storage space, one lookup, updates are hard(same table)

# Data Lakes
# Just throw all of your raw data into some big data repository or big distributed file storage system. And data organized as log files are raw. And it's called Data lake.
# Common approach for big data & unstructured data
# Eg. AWS S3 service,
# Another process (i.e. Amazon Glue) creates a schema for that data.
# Cloud based features allows to query that data e.g. Amazon Athena(serverless) & Amazon redshift(distributed data warehouse)

# ACID Compliance
# Atomicity - either the entire transaction succeeds or the entire thing fails.
# Consistency - all database rules are enforced OR the entire transaction is rolled back.
# Isolation - No transaction is affected by any other transaction that is still in progress
# Durability - once a transaction is committed it stays even after the system crashes immediately after.
#
# CAP theorem
# pick any 2 of below(required for trade-off's)
# Consistency - get back right away what we just wrote(if primary node goes down)
# Availability - single points of failure that can go down
# Partition Tolerance - horizontally scale the system easily

# Caching
# horizontally scaled servers
# appropriate for applications with more reads than writes
# expiration policy dictates how long data is cached
# hotspots can be a problem
#
# Cache Eviction policies
# 1. Least Recently Used(LRU)
# 2. Least Frequently Used(LFU)
# 3. First In First Out(FIFO)
#
# Caching technologies
# Memcached - in-memory key value store, open source
# Redis - adds more features, advanced data structures, snapshots replications
# NCache - made for .net, Java, Node.js
# EhCache - Java, just a distributed map
# ElastiCache - AWS solution, fully managed RedisCache or MemCache
#
# Content Delivery Networks(CDNs)
# allows to distribute the data serving globally from local resources
# geographically distributed fleet of servers that are serving mostly static data from the websites
# limited computation may be available too
# CDN providers - AWS CloudFront, Google Cloud CDN, Microsoft Azure CDN, Akamai, CloudFlare etc

# Resiliency
# surviving even if the entire system/region goes down
# handle the failure
# - secondary backup servers need to be spread across multiple racks, availability zones & regions.
# - make sure the system has enough capacity to handle a failure at any reasonable scale(means overprovisioning OR having more servers on hand than you need) 
# - need to balance budget vs availability(provisioning a new server from an offsite backup should be good enough)

# Scaling Data
# distributed storage solutions
# services for scalable, available, secure, fast object storage
# highly durable
# E.g. Amazon S3, Google Cloud Storage, Microsoft Azure, Hadoop HDFS

# Message Queue as Scaling tool
# mechanism for decoupling producers & consumers of data. It's sort of buffer we can use to make sure things don't get backed up in a larger system.
# - helpful as atleast the data gets backed up & not lost.
# E.g. Amazon SQS service

# Apache Spark
# important tool for processing, streaming & transforming large amounts of data either in a batch process or in real time.
# distributed processing framework for big data
# in-memory caching, optimized query execution
# supports Java, Scala, Python & R
# supports code reuse across
#   - batch processing
#   - interactive queries(Spark SQL)
#   - real-time analytics
#   - machine learning(MLLib)
#   - graph processing
# spark streaming (integrated with Kinesis, Kafka)
# spark is not meant for OLTP(online transaction processing)

# Cloud Computing
#                   AWS                 Google Cloud                        Microsoft Azure
# Storage -         S3                  Cloud Storage                       Disk, Blob or Data lake storage
# Compute -         EC2                 Compute Engine                      Virtual Machines
# NoSQL -           DynamoDB            Bigtable                            CosmosDB/Table Storage
# Containers -      Kubernetes/ECR/ECS  Kubernetes                          Kubernetes
# Data Streams -    Kinesis             Data Flow                           Stream Analytics
# Spark/Hadoop -    EMR                 Dataproc                            Databrics
# Data warehouse -  Redshift            BigQuery                            Azure SQL/Database
# Caching -         Elasticache(Redis)  Memorystore(redis or Memcached)     Redis
#
# Designing a Date WareHouse for Log data with AWS
# 1. Serverless -
#   - Server Logs --> Amazon Kinesis Data Firehouse --> Amazon S3 --> AWS Glue --> Amazon Athena
# 2. Managed -
#   - Server Logs --> Amazon Kinesis Data Firehouse --> Amazon S3 --> Amazon Redshift --> Amazon QuickSight
#
# Hybrid Cloud
# combine own data centers(on-prem or private cloud) with a public cloud(AWS, Google, Azure etc)
# allows easy scaling of on-prem systems
# allows for regulations that require certain data to be on-premises
# requires bridges between your data center & the cloud
# "multi cloud" - more than one public cloud provider

# Design Interview Strategies
# 1. Working Backwards
#   - starting from customer experience to define your requirements
#   - YouTube example:
#       -- How will users discover videos? Do we need to think about building a search engine? A recommender engine? An advertising engine?
#       -- Limit the scope.
#       -- Understand the customer experience
#       -- Identify WHO are the customers
#       -- WHAT are their use cases
#       -- WHICH use cases we need to concern us with
#       -- CLARIFY THE REQUIREMENTS
# 2. Defining scaling requirements
#   - Define the scale of the system. Hundered of users? Or millions?
#   - Scale of data. Hundreds of videos? Millions?
#   - YouTube example:
#       -- Need for horizontal partitioning
#       -- How often users are coming? Users frequency ratio? Transaction rate to support?
# 3. Defining latency requirements
#   - How fast is fast enough?
#       -- Need for caching & CDN usage. Also, a tool for scaling.
#   - YouTube example:
#       -- caching video recommendations
#       -- caching video metadata, descriptions etc
# 4. Defining availability requirements
#   - How much downtime can we tolerate?
#       -- Is being down a threat to the business? Or just an inconvenience?
#       -- If priority, then need to design for high availability. Opt for redundancy across many regions/racks/data centers rather for simplicity or frugality.
#       -- Look for single points of failure.
# 5. Think Out Loud
# 6. Sketching out your design
#   - Identify bottlenecks
#   - Maintainence costs
#   - Costs concerns
#   - Tradeoff's