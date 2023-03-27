
性能之巅10.6.10

```
$ sudo tcpdump -i wlp0s20f3 -w /tmp/out.tcpdump
tcpdump: listening on wlp0s20f3, link-type EN10MB (Ethernet), capture size 262144 bytes
^C55 packets captured
80 packets received by filter
0 packets dropped by kernel
```

```
$ sudo tcpdump -nr /tmp/out.tcpdump
reading from file /tmp/out.tcpdump, link-type EN10MB (Ethernet)
10:53:26.864229 IP 192.168.30.191.35552 > 203.119.169.22.443: Flags [.], ack 3050288305, win 501, length 0
10:53:26.867533 IP6 fe80::1c40:610a:7c29:8597.5353 > ff02::fb.5353: 0*- [0q] 25/0/1 (Cache flush) TXT "", PTR _ssh._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._ssh._tcp.local., TXT "model=MacBookPro17,1" "osxvers=21" "icolor=1", (Cache flush) TXT "", PTR _sftp-ssh._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._sftp-ssh._tcp.local., (Cache flush) TXT "", PTR _rfb._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._rfb._tcp.local., (Cache flush) SRV georgedeMacBook-Pro.local.:22 0 0, TXT "LKDC:SHA1.F16E7CFF468C93B4DFB0DD3F9B9089EE5F5B1D3B", (Cache flush) SRV georgedeMacBook-Pro.local.:5900 0 0, (Cache flush) SRV georgedeMacBook-Pro.local.:22 0 0, (Cache flush) TXT "act=2" "acl=0" "deviceid=B0:BE:83:51:9B:E8" "fex=1c9/St5PFbgG" "features=0x4A7FCFD5,0xB8154FDE" "rsf=0x8" "flags=0x204" "gid=A2294113-2A5E-4FDF-8B5C-EEA7708C866D" "igl=0" "gcgl=0" "model=MacBookPro17,1" "at=4" "protovers=1.1" "pi=ec51c932-7917-49f8-a0cd-0ab1ead47f5e" "psi=38CAAB8C-07F5-4DE4-AF2E-52781DA93A44" "pk=c8ee8807d1f64edebb71c236c8667c3488d7717ee549f748c6967507e4919efe" "srcvers=595.13.1", PTR _airplay._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._airplay._tcp.local., (Cache flush) TXT "cn=0,1,2,3" "da=true" "et=0,3,5" "ft=0x4A7FCFD5,0xB8154FDE" "sf=0x204" "md=0,1,2" "am=MacBookPro17,1" "pk=c8ee8807d1f64edebb71c236c8667c3488d7717ee549f748c6967507e4919efe" "tp=UDP" "vn=65537" "vs=595.13.1" "vv=0", PTR _raop._tcp.local., PTR B0BE83519BE8@georgeM-gM-^ZM-^DMacBook Pro._raop._tcp.local., (Cache flush) SRV georgedeMacBook-Pro.local.:7000 0 0, (Cache flush) SRV georgedeMacBook-Pro.local.:7000 0 0, (Cache flush) TXT "rpBA=E4:23:9A:16:74:B1" "rpAD=0ea006d34db6" "rpFl=0x20000" "rpHN=094ea43f6fae" "rpMac=0" "rpVr=310.7.1", PTR _companion-link._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._companion-link._tcp.local. (1437)
10:53:26.870185 IP6 fe80::1c40:610a:7c29:8597.5353 > ff02::fb.5353: 0*- [0q] 5/0/3 (Cache flush) SRV georgedeMacBook-Pro.local.:49360 0 0, (Cache flush) TXT "", PTR _net-assistant._udp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._net-assistant._udp.local., (Cache flush) SRV georgedeMacBook-Pro.local.:3283 0 0 (292)
10:53:26.878527 IP 203.119.169.22.443 > 192.168.30.191.35552: Flags [.], ack 1, win 83, length 0
10:53:26.878556 IP 192.168.30.104.5353 > 224.0.0.251.5353: 0*- [0q] 25/0/1 (Cache flush) TXT "", PTR _ssh._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._ssh._tcp.local., TXT "model=MacBookPro17,1" "osxvers=21" "icolor=1", (Cache flush) TXT "", PTR _sftp-ssh._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._sftp-ssh._tcp.local., (Cache flush) TXT "", PTR _rfb._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._rfb._tcp.local., (Cache flush) SRV georgedeMacBook-Pro.local.:22 0 0, TXT "LKDC:SHA1.F16E7CFF468C93B4DFB0DD3F9B9089EE5F5B1D3B", (Cache flush) SRV georgedeMacBook-Pro.local.:5900 0 0, (Cache flush) SRV georgedeMacBook-Pro.local.:22 0 0, (Cache flush) TXT "act=2" "acl=0" "deviceid=B0:BE:83:51:9B:E8" "fex=1c9/St5PFbgG" "features=0x4A7FCFD5,0xB8154FDE" "rsf=0x8" "flags=0x204" "gid=A2294113-2A5E-4FDF-8B5C-EEA7708C866D" "igl=0" "gcgl=0" "model=MacBookPro17,1" "at=4" "protovers=1.1" "pi=ec51c932-7917-49f8-a0cd-0ab1ead47f5e" "psi=38CAAB8C-07F5-4DE4-AF2E-52781DA93A44" "pk=c8ee8807d1f64edebb71c236c8667c3488d7717ee549f748c6967507e4919efe" "srcvers=595.13.1", PTR _airplay._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._airplay._tcp.local., (Cache flush) TXT "cn=0,1,2,3" "da=true" "et=0,3,5" "ft=0x4A7FCFD5,0xB8154FDE" "sf=0x204" "md=0,1,2" "am=MacBookPro17,1" "pk=c8ee8807d1f64edebb71c236c8667c3488d7717ee549f748c6967507e4919efe" "tp=UDP" "vn=65537" "vs=595.13.1" "vv=0", PTR _raop._tcp.local., PTR B0BE83519BE8@georgeM-gM-^ZM-^DMacBook Pro._raop._tcp.local., (Cache flush) SRV georgedeMacBook-Pro.local.:7000 0 0, (Cache flush) SRV georgedeMacBook-Pro.local.:7000 0 0, (Cache flush) TXT "rpBA=E4:23:9A:16:74:B1" "rpAD=0ea006d34db6" "rpFl=0x20000" "rpHN=094ea43f6fae" "rpMac=0" "rpVr=310.7.1", PTR _companion-link._tcp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._companion-link._tcp.local. (1437)
10:53:26.878559 IP 192.168.30.104.5353 > 224.0.0.251.5353: 0*- [0q] 5/0/3 (Cache flush) SRV georgedeMacBook-Pro.local.:49360 0 0, (Cache flush) TXT "", PTR _net-assistant._udp.local., PTR georgeM-gM-^ZM-^DMacBook Pro._net-assistant._udp.local., (Cache flush) SRV georgedeMacBook-Pro.local.:3283 0 0 (292)
10:53:27.083142 IP 103.229.206.241.443 > 192.168.30.191.56164: Flags [P.], seq 233748429:233748460, ack 2311030960, win 501, options [nop,nop,TS val 3038013090 ecr 2347022046], length 31
10:53:27.083147 IP 103.229.206.241.443 > 192.168.30.191.56164: Flags [F.], seq 31, ack 1, win 501, options [nop,nop,TS val 3038013090 ecr 2347022046], length 0
10:53:27.083193 IP 192.168.30.191.56164 > 103.229.206.241.443: Flags [.], ack 31, win 501, options [nop,nop,TS val 2347184084 ecr 3038013090], length 0
10:53:27.128401 IP 192.168.30.191.56164 > 103.229.206.241.443: Flags [.], ack 32, win 501, options [nop,nop,TS val 2347184129 ecr 3038013090], length 0
10:53:27.695270 IP 192.168.30.122.5353 > 224.0.0.251.5353: 0 [2q] [1au] PTR (QM)? lb._dns-sd._udp.local. PTR (QM)? _atc._tcp.local. (84)
[...]
```

```
$ sudo tcpdump -enr /tmp/out.tcpdump -vvv -X
reading from file /tmp/out.tcpdump, link-type EN10MB (Ethernet)
10:53:26.864229 38:fc:98:60:a2:cf > c4:2b:44:2b:32:26, ethertype IPv4 (0x0800), length 54: (tos 0x0, ttl 64, id 15708, offset 0, flags [DF], proto TCP (6), length 40)
    192.168.30.191.35552 > 203.119.169.22.443: Flags [.], cksum 0x5410 (incorrect -> 0xb923), seq 2577207308, ack 3050288305, win 501, length 0
        0x0000:  4500 0028 3d5c 4000 4006 a97e c0a8 1ebf  E..(=\@.@..~....
        0x0010:  cb77 a916 8ae0 01bb 999d 100c b5cf b4b1  .w..............
        0x0020:  5010 01f5 5410 0000                      P...T...
10:53:26.867533 b0:be:83:51:9b:e8 > 38:fc:98:60:a2:cf, ethertype IPv6 (0x86dd), length 1499: (flowlabel 0x70200, hlim 255, next-header UDP (17) payload length: 1445) fe80::1c40:610a:7c29:8597.5353 > ff02::fb.5353: [udp sum ok] 0*- [0q] 25/0/1 georgeM-gM-^ZM-^DMacBook Pro._ssh._tcp.local. (Cache flush) [1h15m] TXT "", _services._dns-sd._udp.local. [1h15m] PTR _ssh._tcp.local., _ssh._tcp.local. [1h15m] PTR georgeM-gM-^ZM-^DMacBook Pro._ssh._tcp.local., georgeM-gM-^ZM-^DMacBook Pro._device-info._tcp.local. [1h15m] TXT "model=MacBookPro17,1" "osxvers=21" "icolor=1", georgeM-gM-^ZM-^DMacBook Pro._sftp-ssh._tcp.local. (Cache flush) [1h15m] TXT "", _services._dns-sd._udp.local. [1h15m] PTR _sftp-ssh._tcp.local., _sftp-ssh._tcp.local. [1h15m] PTR georgeM-gM-^ZM-^DMacBook Pro._sftp-ssh._tcp.local., georgeM-gM-^ZM-^DMacBook Pro._rfb._tcp.local. (Cache flush) [1h15m] TXT "", _services._dns-sd._udp.local. [1h15m] PTR _rfb._tcp.local., _rfb._tcp.local. [1h15m] PTR georgeM-gM-^ZM-^DMacBook Pro._rfb._tcp.local., georgeM-gM-^ZM-^DMacBook Pro._ssh._tcp.local. (Cache flush) [2m] SRV georgedeMacBook-Pro.local.:22 0 0, _kerberos.georgedeMacBook-Pro.local. [1h15m] TXT "LKDC:SHA1.F16E7CFF468C93B4DFB0DD3F9B9089EE5F5B1D3B", georgeM-gM-^ZM-^DMacBook Pro._rfb._tcp.local. (Cache flush) [2m] SRV georgedeMacBook-Pro.local.:5900 0 0, georgeM-gM-^ZM-^DMacBook Pro._sftp-ssh._tcp.local. (Cache flush) [2m] SRV georgedeMacBook-Pro.local.:22 0 0, georgeM-gM-^ZM-^DMacBook Pro._airplay._tcp.local. (Cache flush) [1h15m] TXT "act=2" "acl=0" "deviceid=B0:BE:83:51:9B:E8" "fex=1c9/St5PFbgG" "features=0x4A7FCFD5,0xB8154FDE" "rsf=0x8" "flags=0x204" "gid=A2294113-2A5E-4FDF-8B5C-EEA7708C866D" "igl=0" "gcgl=0" "model=MacBookPro17,1" "at=4" "protovers=1.1" "pi=ec51c932-7917-49f8-a0cd-0ab1ead47f5e" "psi=38CAAB8C-07F5-4DE4-AF2E-52781DA93A44" "pk=c8ee8807d1f64edebb71c236c8667c3488d7717ee549f748c6967507e4919efe" "srcvers=595.13.1", _services._dns-sd._udp.local. [1h15m] PTR _airplay._tcp.local., _airplay._tcp.local. [1h15m] PTR georgeM-gM-^ZM-^DMacBook Pro._airplay._tcp.local., B0BE83519BE8@georgeM-gM-^ZM-^DMacBook Pro._raop._tcp.local. (Cache flush) [1h15m] TXT "cn=0,1,2,3" "da=true" "et=0,3,5" "ft=0x4A7FCFD5,0xB8154FDE" "sf=0x204" "md=0,1,2" "am=MacBookPro17,1" "pk=c8ee8807d1f64edebb71c236c8667c3488d7717ee549f748c6967507e4919efe" "tp=UDP" "vn=65537" "vs=595.13.1" "vv=0", _services._dns-sd._udp.local. [1h15m] PTR _raop._tcp.local., _raop._tcp.local. [1h15m] PTR B0BE83519BE8@georgeM-gM-^ZM-^DMacBook Pro._raop._tcp.local., georgeM-gM-^ZM-^DMacBook Pro._airplay._tcp.local. (Cache flush) [2m] SRV georgedeMacBook-Pro.local.:7000 0 0, B0BE83519BE8@georgeM-gM-^ZM-^DMacBook Pro._raop._tcp.local. (Cache flush) [2m] SRV georgedeMacBook-Pro.local.:7000 0 0, georgeM-gM-^ZM-^DMacBook Pro._companion-link._tcp.local. (Cache flush) [1h15m] TXT "rpBA=E4:23:9A:16:74:B1" "rpAD=0ea006d34db6" "rpFl=0x20000" "rpHN=094ea43f6fae" "rpMac=0" "rpVr=310.7.1", _services._dns-sd._udp.local. [1h15m] PTR _companion-link._tcp.local., _companion-link._tcp.local. [1h15m] PTR georgeM-gM-^ZM-^DMacBook Pro._companion-link._tcp.local. ar: . OPT UDPsize=1440 (1437)
        0x0000:  6007 0200 05a5 11ff fe80 0000 0000 0000  `...............
        0x0010:  1c40 610a 7c29 8597 ff02 0000 0000 0000  .@a.|)..........
        0x0020:  0000 0000 0000 00fb 14e9 14e9 05a5 adff  ................
        0x0030:  0000 8400 0000 0019 0000 0001 1467 656f  .............geo
        0x0040:  7267 65e7 9a84 4d61 6342 6f6f 6b20 5072  rge...MacBook.Pr
        0x0050:  6f04 5f73 7368 045f 7463 7005 6c6f 6361  o._ssh._tcp.loca
        0x0060:  6c00 0010 8001 0000 1194 0001 0009 5f73  l............._s
        0x0070:  6572 7669 6365 7307 5f64 6e73 2d73 6404  ervices._dns-sd.
        0x0080:  5f75 6470 c02b 000c 0001 0000 1194 0002  _udp.+..........
        0x0090:  c021 c021 000c 0001 0000 1194 0002 c00c  .!.!............
        0x00a0:  1467 656f 7267 65e7 9a84 4d61 6342 6f6f  .george...MacBoo
        0x00b0:  6b20 5072 6f0c 5f64 6576 6963 652d 696e  k.Pro._device-in
        0x00c0:  666f c026 0010 0001 0000 1194 0029 146d  fo.&.........).m
        0x00d0:  6f64 656c 3d4d 6163 426f 6f6b 5072 6f31  odel=MacBookPro1
        0x00e0:  372c 310a 6f73 7876 6572 733d 3231 0869  7,1.osxvers=21.i
        0x00f0:  636f 6c6f 723d 3114 6765 6f72 6765 e79a  color=1.george..
        0x0100:  844d 6163 426f 6f6b 2050 726f 095f 7366  .MacBook.Pro._sf
        0x0110:  7470 2d73 7368 c026 0010 8001 0000 1194  tp-ssh.&........
        0x0120:  0001 00c0 3d00 0c00 0100 0011 9400 02c0  ....=...........
        0x0130:  dcc0 dc00 0c00 0100 0011 9400 02c0 c714  ................
        0x0140:  6765 6f72 6765 e79a 844d 6163 426f 6f6b  george...MacBook
        0x0150:  2050 726f 045f 7266 62c0 2600 1080 0100  .Pro._rfb.&.....
        0x0160:  0011 9400 0100 c03d 000c 0001 0000 1194  .......=........
        0x0170:  0002 c124 c124 000c 0001 0000 1194 0002  ...$.$..........
        0x0180:  c10f c00c 0021 8001 0000 0078 001c 0000  .....!.....x....
        0x0190:  0000 0016 1367 656f 7267 6564 654d 6163  .....georgedeMac
        0x01a0:  426f 6f6b 2d50 726f c02b 095f 6b65 7262  Book-Pro.+._kerb
        0x01b0:  6572 6f73 c164 0010 0001 0000 1194 0033  eros.d.........3
        0x01c0:  324c 4b44 433a 5348 4131 2e46 3136 4537  2LKDC:SHA1.F16E7
[...]
```
