#!/usr/bin/python3

import paramiko
import getpass

hostname="192.168.70.128"
port=22

tran = paramiko.Transport((hostname, port))
password=getpass.getpass()
tran.connect(username='hexu', password=password)

sftp = paramiko.SFTPClient.from_transport(tran)

remote_path = '/tmp'

results = sftp.listdir(remote_path)
print(results)

tran.close()
