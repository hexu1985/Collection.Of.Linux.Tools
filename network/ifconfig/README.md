
性能之巅10.6.3

```
$ ifconfig
br-94c1c0d8d0b3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.42.128  netmask 255.255.255.0  broadcast 10.0.42.255
        inet6 fe80::42:ddff:fe85:f537  prefixlen 64  scopeid 0x20<link>
        ether 02:42:dd:85:f5:37  txqueuelen 0  (以太网)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 144  bytes 28059 (28.0 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        inet6 fe80::42:44ff:feb9:223  prefixlen 64  scopeid 0x20<link>
        ether 02:42:44:b9:02:23  txqueuelen 0  (以太网)
        RX packets 2  bytes 56 (56.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 945  bytes 186016 (186.0 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

enp7s0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 8c:8c:aa:45:03:ab  txqueuelen 1000  (以太网)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (本地环回)
        RX packets 34339  bytes 4264940 (4.2 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 34339  bytes 4264940 (4.2 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

veth521ec13: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet6 fe80::1083:60ff:fee8:3bc7  prefixlen 64  scopeid 0x20<link>
        ether 12:83:60:e8:3b:c7  txqueuelen 0  (以太网)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 179  bytes 33221 (33.2 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlp0s20f3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.30.191  netmask 255.255.255.0  broadcast 192.168.30.255
        inet6 fe80::1cd5:febb:5cf2:3dfe  prefixlen 64  scopeid 0x20<link>
        ether 38:fc:98:60:a2:cf  txqueuelen 1000  (以太网)
        RX packets 1390534  bytes 963333600 (963.3 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 659510  bytes 84748917 (84.7 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

