#!/usr/bin/env python3

import sys
import pathlib
import pdb

def get_name(path):
    return path.name

def list_dir(dir_path, pattern="*"):
    p = pathlib.Path(dir_path)
    lst = [f for f in p.glob(pattern)]
#    lst.sort(key=get_name)
    lst.sort(key=lambda path: path.name)
    return lst

def test_list_dir(dir_path, pattern='*'):
    for p in list_dir(dir_path, pattern):
        print(str(p))

if __name__ == "__main__":
    args_num = len(sys.argv)
    if args_num == 1:
        test_list_dir(".")
    elif args_num == 2:
        test_list_dir(sys.argv[1])
    elif args_num == 3:
        test_list_dir(sys.argv[1], sys.argv[2])
