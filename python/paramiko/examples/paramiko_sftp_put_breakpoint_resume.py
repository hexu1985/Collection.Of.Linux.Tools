#!/usr/bin/python3

import paramiko
import getpass
import pathlib
import errno

hostname="192.168.70.116"
port=22

tran = paramiko.Transport((hostname, port))
password=getpass.getpass()
tran.connect(username='hexu', password=password)

sftp = paramiko.SFTPClient.from_transport(tran)

local_path = "/tmp/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"
remote_path = "/tmp/white-rhino-031.20240303.small_bag.1709437214-1709437264.bag"

stat = None
try:
    stat = sftp.stat(str(remote_path))
    print(stat)
except IOError as e:
    if e.errno == errno.ENOENT:
        print("{} not exists!".format(remote_path))
    else:
        raise

seek_pos = 0
if stat:
    seek_pos = stat.st_size

f_local = open(local_path, "rb")
f_local.seek(seek_pos)
f_remote = sftp.open(str(remote_path), "a")
tmp_buffer = f_local.read(100000)
while tmp_buffer:
    f_remote.write(tmp_buffer)
    tmp_buffer = f_local.read(100000)
f_remote.close()
f_local.close()

print(f"上传{local_path}完成")

tran.close()
