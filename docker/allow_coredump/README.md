### 允许在Docker容器内生成core dump，并导出到目录

操作步骤如下：
1. 首先创建docker镜像

build_image.sh

```
$ bash build_image.sh
```

2. 然后要打开宿主机core权限

```
$ source setup_coredump.bash
```

3. 接下来启动docker容器

```
$ bash start_container.sh
$ docker ps
CONTAINER ID   IMAGE               COMMAND       CREATED         STATUS         PORTS     NAMES
ce04d6727633   ubuntu:20.04-demo   "/bin/bash"   7 seconds ago   Up 6 seconds             cont_demo
...
```

4. 登录docker容器

```
$ docker exec -it cont_demo /bin/bash
hexu@ce04d6727633:~$ cd git/Collection.Of.Linux.Tools/docker/allow_coredump/abort/
hexu@ce04d6727633:~/git/Collection.Of.Linux.Tools/docker/allow_coredump/abort$ make
$ make
cc -g3 -Wall -Wextra -std=c99    abort.c   -o abort
hexu@ce04d6727633:~/git/Collection.Of.Linux.Tools/docker/allow_coredump/abort$ ./abort
Aborted (core dumped)
hexu@063656e3bca8:~/git/Collection.Of.Linux.Tools/docker/allow_coredump/abort$ ls ~/corefile/
core-abort-58-1710301917
```

5. 退出docker容器，查看宿主机上是否有core文件

```
$ ls /tmp/corefile/
core-abort-58-1710301917
```

6. 停止docker容器

```
$ bash stop_container.sh
```
