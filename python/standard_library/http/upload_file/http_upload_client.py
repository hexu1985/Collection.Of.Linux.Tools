#!/usr/bin/env python3

import requests
import os

# 指定服务器URL和要上传的文件路径
server_url = 'http://your web server:8000/upload'
file_path = '/your file path/file.bin'

testResponse = requests.get(server_url)
if testResponse.status_code == 200:
    print("与服务器的连接正常！")
else:
    print("无法连接到服务器！")

with open(file_path, 'rb') as file:
    file_data = file.read()

response = requests.post(server_url, files={'file': 'file'})

if response.status_code == 200:
    print("文件上传成功！")
else:
    print("文件上传失败！")
