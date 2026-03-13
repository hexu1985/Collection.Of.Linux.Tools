#!/usr/bin/python3

import paramiko
import getpass

def translate_byte(B):
    B = float(B)
    KB = float(1024)
    MB = float(KB ** 2)
    GB = float(MB ** 2)
    TB = float(GB ** 2)
    if B < KB:
        return '{} {}'.format(B, 'bytes' if B > 1 else byte)
    elif KB < B < MB:
        return '{:.2f} KB'.format(B / KB)
    elif MB < B < GB:
        return '{:.2f} MB'.format(B / MB)
    elif GB < B < TB:
        return '{:.2f} GB'.format(B / GB)
    else:
        return '{:.2f} TB'.format(B / TB)

#def call_back(curr=100, total=100):
#    bar_length = 100
#    percents = '\033[32;1m%s\033[0m' % round(float(curr) * 100 / float(total), 2)
#    filled = int(bar_length * curr / float(total))
#    bar = '\033[32;1m%s\033[0m' % '=' * filled + '-' * (bar_length - filled)
#    print('translating: [{}] {}% already complete: {}, total: {}\r'.format(bar, percents, translate_byte(curr), translate_byte(total)), end='')

def call_back(curr=100, total=100):
    bar_length = 100
    percents = round(float(curr) * 100 / float(total), 2)
    filled = int(bar_length * curr / float(total))
    bar = '=' * filled + '-' * (bar_length - filled)
    print('translating: [{}] {}% already complete: {}, total: {}\r'.format(bar, percents, translate_byte(curr), translate_byte(total)), end='')

hostname="192.168.70.128"
port=22

tran = paramiko.Transport((hostname, port))
password=getpass.getpass()
tran.connect(username='hexu', password=password)

sftp = paramiko.SFTPClient.from_transport(tran)

local_path = '/home/hexu/white-rhino-046.20231011-134220.00013.1697003447.zip'
remote_path = '/tmp/white-rhino-046.20231011-134220.00013.1697003447.zip'

put_info = sftp.put(local_path, remote_path, confirm=True, callback=call_back)
print()
print(put_info)
print(f"上传{local_path}完成")

save_path = '/tmp/white-rhino-046.20231011-134220.00013.1697003447.zip'
sftp.get(remotepath=remote_path, localpath=save_path, callback=call_back)
print()
print(f'下载{save_path}完成')

tran.close()
