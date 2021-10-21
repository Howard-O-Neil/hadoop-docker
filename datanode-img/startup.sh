#!/bin/bash

service ssh start && hdfs namenode -format -nonInteractive

tail -f /container_share.log # keep container run
