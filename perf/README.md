

性能之巅6.6.12
```
$ perf record -a -g -F 977 sleep 10
[ perf record: Woken up 2 times to write data ]
[ perf record: Captured and wrote 3.727 MB perf.data (8978 samples) ]

$ perf report --stdio
# To display the perf.data header info, please use --header/--header-only options.
#
#
# Total Lost Samples: 0
#
# Samples: 8K of event 'cycles'
# Event count (approx.): 4903884853
#
# Children      Self  Command          Shared Object                   Symbol
# ........  ........  ...............  ..............................  ............................................................................................................................................
#
    54.83%     0.00%  swapper          [kernel.kallsyms]               [k] 0xffffffffa92000d4
            |
            ---0xffffffffa92000d4
               |
               |--51.75%--0xffffffffa9264456
               |          |
               |           --51.75%--0xffffffffa92deb2d
               |                     |
               |                     |--46.70%--0xffffffffa92de926
```


```
$ perf sched record sleep 10
[ perf record: Woken up 1 times to write data ]
[ perf record: Captured and wrote 14.910 MB perf.data (113213 samples) ]

$ perf sched latency

 -----------------------------------------------------------------------------------------------------------------
  Task                  |   Runtime ms  | Switches | Average delay ms | Maximum delay ms | Maximum delay at       |
 -----------------------------------------------------------------------------------------------------------------
  packagekitd:2315      |      0.122 ms |        1 | avg:    0.075 ms | max:    0.075 ms | max at:   3403.995552 s
  systemd-udevd:399     |      0.227 ms |        1 | avg:    0.055 ms | max:    0.055 ms | max at:   3404.005308 s
  migration/9:65        |      0.000 ms |        2 | avg:    0.054 ms | max:    0.082 ms | max at:   3408.270645 s
  nv_queue:1812         |      1.081 ms |       10 | avg:    0.052 ms | max:    0.061 ms | max at:   3402.872831 s
  NetworkManager:1040   |      1.452 ms |        4 | avg:    0.050 ms | max:    0.065 ms | max at:   3406.994008 s
  kworker/u33:2-r:530   |      0.309 ms |        4 | avg:    0.049 ms | max:    0.063 ms | max at:   3407.426121 s
  systemd:1             |     12.603 ms |      208 | avg:    0.048 ms | max:    0.073 ms | max at:   3408.188373 s
  GpuMemoryThread:3741  |      0.414 ms |        2 | avg:    0.043 ms | max:    0.044 ms | max at:   3402.208493 s
  dbus-daemon:(2)       |      1.311 ms |        3 | avg:    0.042 ms | max:    0.045 ms | max at:   3408.734137 s
  Chrome_IOThread:(3)   |     50.086 ms |      342 | avg:    0.040 ms | max:    0.065 ms | max at:   3408.205821 s
  Chrome_ChildIOT:(7)   |    207.565 ms |     1796 | avg:    0.039 ms | max:    0.212 ms | max at:   3406.022804 s
```
