#!/bin/bash

service ssh start && service nginx start && hdfs namenode -format -nonInteractive

tail -f /container_share.log # keep container run
