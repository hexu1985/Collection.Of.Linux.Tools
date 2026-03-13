#!/usr/bin/python3

import paramiko
import getpass

ssh_client = paramiko.SSHClient()

ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
password=getpass.getpass()
#ssh_client.connect(hostname="192.168.70.128", port=22, username='hexu', password=password, look_for_keys=False, allow_agent=False)
ssh_client.connect(hostname="192.168.70.128", port=22, username='hexu', password=password)

sftp = ssh_client.open_sftp()
put_info = sftp.put("./test.sh", "/tmp/test.sh", confirm=True)
print(put_info)
print("上传test.sh完成")
sftp.close()

stdin, stdout, stderr = ssh_client.exec_command('TEST_VAR=abc bash /tmp/test.sh') 

# 输出返回信息
stdout_info = stdout.read().decode('utf8')
print("-"*80)
print(stdout_info)

# 输出返回的错误信息
stderr_info = stderr.read().decode('utf8')
print("-"*80)
print(stderr_info)

ssh_client.close()
