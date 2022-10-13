

性能之巅7.5.3
```
$ slabtop -sc
 Active / Total Objects (% used)    : 6170389 / 6277640 (98.3%)
 Active / Total Slabs (% used)      : 173254 / 173254 (100.0%)
 Active / Total Caches (% used)     : 109 / 176 (61.9%)
 Active / Total Size (% used)       : 1835001.18K / 1870328.97K (98.1%)
 Minimum / Average / Maximum Object : 0.01K / 0.30K / 295.07K

  OBJS ACTIVE  USE OBJ SIZE  SLABS OBJ/SLAB CACHE SIZE NAME                   
941318 936425   0%    1.07K  47030       29   1504960K ext4_inode_cache
2328768 2328768 100%    0.10K  59712       39    238848K buffer_head
1121988 1121988 100%    0.19K  26714       42    213712K dentry
229348 200916   0%    0.57K   8191       28    131056K radix_tree_node
181428 164646   0%    0.20K   4652       39     37216K vm_area_struct
 33626  32287   0%    0.69K    731       46     23392K squashfs_inode_cache
 28968  28271   0%    0.66K   1207       24     19312K proc_inode_cache
 31278  31278 100%    0.59K   1203       26     19248K inode_cache
  2970   2651   0%    6.06K    594        5     19008K task_struct
  1028   1026   0%   12.00K    514        2     16448K nvidia_stack_cache
390354 382283   0%    0.04K   3827      102     15308K ext4_extent_status
  2952   2885   0%    4.00K    369        8     11808K kmalloc-4k
 33920  24429   0%    0.25K   1060       32      8480K filp
 56910  56910 100%    0.13K   1897       30      7588K kernfs_node_cache
121216 107642   0%    0.06K   1894       64      7576K anon_vma_chain
  3696   3526   0%    2.00K    231       16      7392K kmalloc-2k
  6912   6438   0%    1.00K    216       32      6912K kmalloc-1k
 78246  68576   0%    0.09K   1701       46      6804K anon_vma
101696 101696 100%    0.06K   1589       64      6356K kmalloc-rcl-64
 87424  79649   0%    0.06K   1366       64      5464K vmap_area
 57330  57330 100%    0.09K   1365       42      5460K kmalloc-rcl-96
   660    642   0%    8.00K    165        4      5280K kmalloc-8k
  7155   6943   0%    0.70K    159       45      5088K shmem_inode_cache
  9984   9898   0%    0.50K    312       32      4992K kmalloc-512
  5343   5343 100%    0.81K    137       39      4384K sock_inode_cache
  3168   3023   0%    1.00K     99       32      3168K PING
  2016   1989   0%    1.12K     72       28      2304K signal_cache
   568    550   0%    4.00K     71        8      2272K biovec-max
 35840  33562   0%    0.06K    560       64      2240K kmalloc-64
```
