#!/usr/bin/python3

import paramiko
import getpass
import errno

hostname="192.168.100.176"
port=22

tran = paramiko.Transport((hostname, port))
password=getpass.getpass()
tran.connect(username='hexu', password=password)

sftp = paramiko.SFTPClient.from_transport(tran)

old_remote_path = '/tmp/config_carlist'
new_remote_path = '/tmp/config_servers'

results = sftp.posix_rename(oldpath=old_remote_path, newpath=new_remote_path)
print(results)

tran.close()
