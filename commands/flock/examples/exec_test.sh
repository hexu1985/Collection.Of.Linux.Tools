#!/bin/bash

for i in {1..10}
do
    echo "exec_test.sh $$: hello $i"
    sleep 1
done
