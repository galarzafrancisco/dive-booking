#!/bin/bash

docker exec -it roach1 ./cockroach init --insecure

docker exec -it roach1 ./cockroach sql --execute="CREATE DATABASE dive_booking;" --insecure
docker exec -it roach1 ./cockroach sql --execute="CREATE USER developer WITH LOGIN;" --insecure
docker exec -it roach1 ./cockroach sql --execute="GRANT ALL ON DATABASE dive_booking TO developer;" --insecure
