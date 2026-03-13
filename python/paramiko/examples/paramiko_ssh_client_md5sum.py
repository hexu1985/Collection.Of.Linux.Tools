#!/usr/bin/python3

import paramiko
import getpass

ssh_client = paramiko.SSHClient()

ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
password=getpass.getpass()
ssh_client.connect(hostname="192.168.100.180", port=22, username='hexu', password=password)

remote_path = "/tmp/paramiko_sftp_client_breakpoint_resume.py"
stdin, stdout, stderr = ssh_client.exec_command('md5sum /tmp/paramiko_sftp_client_breakpoint_resume.py') 

# 输出返回信息
stdout_info = stdout.read().decode('utf8')
print("-"*80)
print(stdout_info)

# 输出返回的错误信息
stderr_info = stderr.read().decode('utf8')
print("-"*80)
print(stderr_info)

if stdout_info:
    remote_path_md5sum = stdout_info.split()[0]
    print("remote_path_md5sum: {}".format(remote_path_md5sum))

ssh_client.close()
