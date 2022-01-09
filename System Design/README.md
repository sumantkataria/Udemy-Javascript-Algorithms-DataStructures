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
# Normalized data - less storage space, more lookups, updates in 1 place
# Denormalized data(perforamce & scalability) = more storage space, one lookup, updates are hard

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
# 