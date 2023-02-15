

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

性能之巅8.6.11
```
$ sudo slabtop -o
 Active / Total Objects (% used)    : 5253333 / 5280649 (99.5%)
 Active / Total Slabs (% used)      : 132325 / 132325 (100.0%)
 Active / Total Caches (% used)     : 102 / 159 (64.2%)
 Active / Total Size (% used)       : 2075639.98K / 2084678.66K (99.6%)
 Minimum / Average / Maximum Object : 0.01K / 0.39K / 295.07K

  OBJS ACTIVE  USE OBJ SIZE  SLABS OBJ/SLAB CACHE SIZE NAME                   
1416198 1405425   0%    0.19K  33719       42    269752K dentry                 
1296793 1294685   0%    1.07K  44717       29   1430944K ext4_inode_cache       
618834 618834 100%    0.04K   6067      102     24268K ext4_extent_status     
485121 483944   0%    0.10K  12439       39     49756K buffer_head            
166848 164759   0%    0.06K   2607       64     10428K kmalloc-rcl-64         
129168 128936   0%    0.20K   3312       39     26496K vm_area_struct         
126840 125323   0%    0.13K   4228       30     16912K kernfs_node_cache      
114816 114641   0%    0.06K   1794       64      7176K anon_vma_chain         
 92778  92274   0%    0.09K   2209       42      8836K kmalloc-rcl-96         
 68352  66039   0%    0.25K   2136       32     17088K filp                   
 68096  68096 100%    0.03K    532      128      2128K kmalloc-32             
 67520  66841   0%    0.06K   1055       64      4220K kmalloc-64             
 65912  64548   0%    0.57K   2354       28     37664K radix_tree_node        
 62946  62619   0%    0.10K   1614       39      6456K anon_vma               
 50048  50048 100%    0.03K    391      128      1564K fsnotify_mark_connector
 41340  41049   0%    0.59K   1590       26     25440K inode_cache            
 29016  28756   0%    0.66K   1209       24     19344K proc_inode_cache       
 24832  24381   0%    0.50K    776       32     12416K kmalloc-512            
 21504  21504 100%    0.01K     42      512       168K kmalloc-8              
 20480  20480 100%    0.02K     80      256       320K kmalloc-16             
 19194  19152   0%    0.19K    457       42      3656K cred_jar               
 18530  18530 100%    0.02K    109      170       436K lsm_file_cache         
 18048  18048 100%    0.12K    564       32      2256K pid                    
 16384  16384 100%    0.12K    512       32      2048K kmalloc-rcl-128        
 15456  15456 100%    0.25K    483       32      3864K skbuff_head_cache      
 14944  14664   0%    1.00K    467       32     14944K kmalloc-1k             
 13719  13719 100%    0.08K    269       51      1076K task_delay_info        
 12495  12495 100%    0.05K    147       85       588K ftrace_event_field     
 12480  12480 100%    0.81K    320       39     10240K sock_inode_cache       
 12342  12342 100%    0.04K    121      102       484K pde_opener             
 11368  11368 100%    0.07K    203       56       812K Acpi-Operand           
 11298  11298 100%    0.19K    269       42      2152K kmalloc-192            
 10710  10191   0%    0.09K    255       42      1020K kmalloc-96             
  9472   8167   0%    0.06K    148       64       592K vmap_area              
  9016   9016 100%    0.07K    161       56       644K eventpoll_pwq          
  7644   7644 100%    0.14K    273       28      1092K ext4_groupinfo_4k      
  7200   7200 100%    1.00K    225       32      7200K PING                   
  6660   6464   0%    0.70K    148       45      4736K shmem_inode_cache      
  5934   5934 100%    0.69K    129       46      4128K files_cache            
  5864   5812   0%    4.00K    733        8     23456K kmalloc-4k             
  5430   5430 100%    1.06K    181       30      5792K mm_struct              
  5152   5007   0%    2.00K    322       16     10304K kmalloc-2k             
  5068   5068 100%    1.12K    181       28      5792K signal_cache           
  4736   4736 100%    0.12K    148       32       592K kmalloc-128            
  3680   3680 100%    0.25K    115       32       920K kmalloc-256            
  3616   3299   0%    0.25K    113       32       904K pool_workqueue         
  3200   3200 100%    0.06K     50       64       200K kmem_cache_node        
  2880   2880 100%    0.44K     80       36      1280K kmem_cache             
  2820   2662   0%    6.06K    564        5     18048K task_struct            
  2438   2438 100%    0.09K     53       46       212K trace_event_file  
```
