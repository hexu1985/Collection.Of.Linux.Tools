#!/usr/bin/python3

import paramiko
import pathlib

private_key = paramiko.RSAKey.from_private_key_file(pathlib.Path.home()/'.ssh'/'id_rsa')

ssh_client = paramiko.SSHClient()

ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh_client.connect(hostname="192.168.199.102", port=8007, username='apollo', pkey=private_key)

stdin, stdout, stderr = ssh_client.exec_command('df -hT') 

# 输出返回信息
stdout_info = stdout.read().decode('utf8')
print("-"*80)
print(stdout_info)

# 输出返回的错误信息
stderr_info = stderr.read().decode('utf8')
print("-"*80)
print(stderr_info)

ssh_client.close()
