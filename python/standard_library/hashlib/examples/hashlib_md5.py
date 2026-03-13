#!/usr/bin/env python3

import hashlib
import sys

def md5sum(filepath):
    with open(filepath, 'rb') as f:
        md5 = hashlib.md5()
        tmp_buffer = f.read(8192)
        while tmp_buffer:
            md5.update(tmp_buffer)
            tmp_buffer = f.read(8192)
        return md5.hexdigest()


if __name__ == "__main__":
    for filepath in sys.argv:
        print("{} {}".format(md5sum(filepath), filepath))
