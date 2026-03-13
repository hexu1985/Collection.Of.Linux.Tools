#!/usr/bin/python3

import paramiko
import getpass
import errno

hostname="192.168.100.180"
port=22

tran = paramiko.Transport((hostname, port))
password=getpass.getpass()
tran.connect(username='hexu', password=password)

sftp = paramiko.SFTPClient.from_transport(tran)

remote_path = '/tmp/abcd'

try:
    results = sftp.stat(remote_path)
    print(results)
except IOError as e:
    if e.errno == errno.ENOENT:
        print("{} not exists!".format(remote_path))
    else:
        raise

tran.close()
