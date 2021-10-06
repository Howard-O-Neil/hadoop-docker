#!/bin/bash

service ssh start && hdfs namenode -format

/bin/bash # keep container run with -Td option
