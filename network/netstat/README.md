
性能之巅10.6.1

```
$ netstat -i 
Kernel Interface table
Iface      MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
br-94c1c  1500        0      0      0 0            76      0      0      0 BMRU
docker0   1500        2      0      0 0           945      0      0      0 BMU
enp7s0    1500        0      0      0 0             0      0      0      0 BMU
lo       65536    33761      0      0 0         33761      0      0      0 LRU
veth521e  1500        0      0      0 0           107      0      0      0 BMRU
wlp0s20f  1500  1370225      0      0 0        648344      0      0      0 BMRU
```

```
$ netstat -s
Ip:
    Forwarding: 1
    902174 total packets received
    1 with invalid addresses
    0 forwarded
    0 incoming packets discarded
    898819 incoming packets delivered
    680703 requests sent out
    2 outgoing packets dropped
    2 dropped because of missing route
Icmp:
    82 ICMP messages received
    3 input ICMP message failed
    ICMP接收历史
        destination unreachable: 74
        echo requests: 8
    189 ICMP messages sent
    0 ICMP messages failed
    ICMP发出历史
        destination unreachable: 181
        echo replies: 8
IcmpMsg:
        InType3: 74
        InType8: 8
        OutType0: 8
        OutType3: 181
Tcp:
    8122 active connection openings
    191 passive connection openings
    2271 failed connection attempts
    1050 connection resets received
    2 connections established
    717291 segments received
    631965 segments sent out
    25525 segments retransmitted
    22 bad segments received
    1532 resets sent
Udp:
    474282 packets received
    188 packets to unknown port received
    0 packet receive errors
    29905 packets sent
    0 receive buffer errors
    0 send buffer errors
    IgnoredMulti: 16125
UdpLite:
TcpExt:
    224 packets pruned from receive queue because of socket buffer overrun
    1574 TCP sockets finished time wait in fast timer
    1133 delayed acks sent
    2 delayed acks further delayed because of locked socket
    Quick ack mode was activated 1450 times
    175557 packet headers predicted
    187385 acknowledgments not containing data payload received
    74622 predicted acknowledgments
    TCPSackRecovery: 48
    Detected reordering 146 times using SACK
    TCPDSACKUndo: 32
    26 congestion windows recovered without slow start after partial ack
    TCPLostRetransmit: 19866
    TCPSackFailures: 2
    54 fast retransmits
    1 retransmits in slow start
    TCPTimeouts: 26817
    TCPLossProbes: 1095
    TCPLossProbeRecovery: 48
    TCPSackRecoveryFail: 9
    355 packets collapsed in receive queue due to low socket buffer
    TCPBacklogCoalesce: 499
    TCPDSACKOldSent: 1498
    TCPDSACKOfoSent: 126
    TCPDSACKRecv: 521
    TCPDSACKOfoRecv: 11
    277 connections reset due to unexpected data
    536 connections reset due to early user close
    2435 connections aborted due to timeout
    TCPDSACKIgnoredNoUndo: 120
    TCPSpuriousRTOs: 6
    TCPSackShifted: 17
    TCPSackMerged: 18
    TCPSackShiftFallback: 317
    TCPRcvCoalesce: 268112
    TCPOFOQueue: 197853
    TCPOFOMerge: 107
    TCPChallengeACK: 17
    TCPSYNChallenge: 22
    TCPSpuriousRtxHostQueues: 14
    TCPAutoCorking: 49159
    TCPWantZeroWindowAdv: 118
    TCPSynRetrans: 22628
    TCPOrigDataSent: 146203
    TCPHystartTrainDetect: 14
    TCPHystartTrainCwnd: 289
    TCPHystartDelayDetect: 15
    TCPHystartDelayCwnd: 551
    TCPACKSkippedSeq: 10
    TCPACKSkippedChallenge: 7
    TCPKeepAlive: 172124
    TCPDelivered: 149931
    TCPAckCompressed: 149485
IpExt:
    InMcastPkts: 143212
    OutMcastPkts: 7689
    InBcastPkts: 16134
    OutBcastPkts: 222
    InOctets: 888691509
    OutOctets: 60046259
    InMcastOctets: 26812362
    OutMcastOctets: 1446494
    InBcastOctets: 1622154
    OutBcastOctets: 10596
    InNoECTPkts: 1232684
```
