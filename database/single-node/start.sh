#!/bin/bash

docker run -d \
--restart always \
--name=roach1 \
--hostname=roach1 \
-p 26257:26257 -p 8080:8080  \
-v "${PWD}/cockroach-data/roach1:/cockroach/cockroach-data"  \
cockroachdb/cockroach:v21.1.2 start-single-node \
--insecure
