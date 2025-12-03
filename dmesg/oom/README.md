
```bash
$ dmesg -T
...
[三 12月  3 14:24:02 2025] oom-kill:constraint=CONSTRAINT_NONE,nodemask=(null),cpuset=/,mems_allowed=0,global_oom,task_memcg=/user.slice/user-1000.slice/session-212.scope,task=cc1plus,pid=302600,uid=1000
[三 12月  3 14:24:02 2025] Out of memory: Killed process 302600 (cc1plus) total-vm:2121692kB, anon-rss:1543488kB, file-rss:0kB, shmem-rss:0kB, UID:1000 pgtables:4096kB oom_score_adj:0
```
