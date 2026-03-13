#!/bin/bash

set -x

python -m tokenize hello.py

python -m tokenize -e hello.py
