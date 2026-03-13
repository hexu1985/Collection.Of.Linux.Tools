#!/usr/bin/python3

import paramiko
import getpass

hostname="192.168.70.116"
port=22

tran = paramiko.Transport((hostname, port))
password=getpass.getpass()
tran.connect(username='hexu', password=password)

sftp = paramiko.SFTPClient.from_transport(tran)

remote_path = '/tmp/abcd'

results = sftp.stat(remote_path)
print(results)
print(results.st_mode)

tran.close()
