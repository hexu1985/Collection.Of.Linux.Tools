#!/usr/bin/python3

import paramiko
import pathlib

private_key = paramiko.RSAKey.from_private_key_file(pathlib.Path.home()/'.ssh'/'id_rsa')
