
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
