#!/usr/bin/python3

import paramiko
import pathlib

hostname="192.168.199.102"
port=8007

tran = paramiko.Transport((hostname, port))

private_key = paramiko.RSAKey.from_private_key_file(pathlib.Path.home()/'.ssh'/'id_rsa')
tran.connect(username='apollo', pkey=private_key)

sftp = paramiko.SFTPClient.from_transport(tran)

local_path = __file__
remote_path = '/tmp/paramiko_sftp_client.py'

put_info = sftp.put(local_path, remote_path, confirm=True)
print(put_info)
print(f"上传{local_path}完成")

save_path = 'paramiko_sftp_client.py.backup'
sftp.get(remotepath=remote_path, localpath=save_path)
print(f'下载{save_path}完成')

tran.close()
