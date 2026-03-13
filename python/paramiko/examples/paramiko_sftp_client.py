#!/usr/bin/python3

import paramiko
import getpass

hostname="192.168.70.128"
port=22

tran = paramiko.Transport((hostname, port))
password=getpass.getpass()
tran.connect(username='hexu', password=password)

sftp = paramiko.SFTPClient.from_transport(tran)

local_path = __file__
remote_path = '/tmp/paramiko_sftp_client.py'

put_info = sftp.put(local_path, remote_path, confirm=True)
print(put_info)
print(f"上传{local_path}完成")

save_path = '/tmp/paramiko_sftp_client.py'
sftp.get(remotepath=remote_path, localpath=save_path)
print(f'下载{save_path}完成')

tran.close()
