#!/usr/bin/env bash

./test &

sleep 1

killall -11 test

ls /corefile

# gdb test /corefile/core-test-xxx-xxxx
# bt
