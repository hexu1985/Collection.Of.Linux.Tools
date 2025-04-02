使用 arp-scan
arp-scan 通过 ARP 协议扫描本地网络，结果更准确（基于二层协议）。

```bash
$ sudo apt install arp-scan
$ sudo arp-scan --localnet
# --localnet 会自动检测本地网络范围。
```

输出包括 IP、MAC 地址和厂商信息。
