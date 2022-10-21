
性能之巅6.6.5
```
$ ps aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.0 169000 12932 ?        Ss   3月29   0:03 /sbin/init splash
root           2  0.0  0.0      0     0 ?        S    3月29   0:00 [kthreadd]
root           3  0.0  0.0      0     0 ?        I<   3月29   0:00 [rcu_gp]
root           4  0.0  0.0      0     0 ?        I<   3月29   0:00 [rcu_par_gp]
root           6  0.0  0.0      0     0 ?        I<   3月29   0:00 [kworker/0:0H-events_highpri]
root           9  0.0  0.0      0     0 ?        I<   3月29   0:00 [mm_percpu_wq]
root          10  0.0  0.0      0     0 ?        S    3月29   0:00 [rcu_tasks_rude_]
root          11  0.0  0.0      0     0 ?        S    3月29   0:00 [rcu_tasks_trace]
root          12  0.0  0.0      0     0 ?        S    3月29   0:00 [ksoftirqd/0]
root          13  0.0  0.0      0     0 ?        I    3月29   0:13 [rcu_sched]
root          14  0.0  0.0      0     0 ?        S    3月29   0:00 [migration/0]
root          15  0.0  0.0      0     0 ?        S    3月29   0:00 [idle_inject/0]
```

```
$ ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 3月29 ?       00:00:03 /sbin/init splash
root           2       0  0 3月29 ?       00:00:00 [kthreadd]
root           3       2  0 3月29 ?       00:00:00 [rcu_gp]
root           4       2  0 3月29 ?       00:00:00 [rcu_par_gp]
root           6       2  0 3月29 ?       00:00:00 [kworker/0:0H-events_highpri]
root           9       2  0 3月29 ?       00:00:00 [mm_percpu_wq]
root          10       2  0 3月29 ?       00:00:00 [rcu_tasks_rude_]
root          11       2  0 3月29 ?       00:00:00 [rcu_tasks_trace]
root          12       2  0 3月29 ?       00:00:00 [ksoftirqd/0]
root          13       2  0 3月29 ?       00:00:13 [rcu_sched]
root          14       2  0 3月29 ?       00:00:00 [migration/0]
```

性能之巅7.5.5
```
$ ps -eo pid,pmem,vsz,rss,comm
  PID %MEM    VSZ   RSS COMMAND
    1  0.0 225928  9500 systemd
    2  0.0      0     0 kthreadd
    3  0.0      0     0 rcu_gp
    4  0.0      0     0 rcu_par_gp
    6  0.0      0     0 kworker/0:0H-ev
    8  0.0      0     0 mm_percpu_wq
[...]
 3497  0.3 30028392 120672 code
 3503  0.6 21539640 210580 code
 3539  0.2 21550004 71952 code
 3617  0.2 21539368 83640 code
 3701  0.4 21894660 145312 tabby
 3705  0.0 17177448 26708 tabby
 3706  0.0 17177448 25260 tabby
 3824  0.0 16809192 2372 chrome_crashpad
 3929  2.9 17459204 955780 tabby
 3934  0.1 17241212 36980 tabby
 3945  1.8 36425584 600912 tabby
[...]
```

- - -

`ps -j`
```
$ ps -j
  PID  PGID   SID TTY          TIME CMD
 3435  3435  3435 pts/0    00:00:02 bash
17352 17352  3435 pts/0    00:00:00 python3
17384 17352  3435 pts/0    00:00:00 sh
17385 17352  3435 pts/0    00:00:00 run_forever.sh
17398 17352  3435 pts/0    00:00:00 sleep
17399 17399  3435 pts/0    00:00:00 ps
22756 22752  3435 pts/0    00:00:15 python3
22797 22752  3435 pts/0    00:00:00 uevent_monitor
```
