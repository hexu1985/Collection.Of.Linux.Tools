#!/bin/bash

flock -x "/tmp/abc.lock" -c ./exec_test.sh

