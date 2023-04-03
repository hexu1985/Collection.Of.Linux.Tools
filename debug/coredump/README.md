### Ubuntu下coredump配置

1 首先在根目录下建立一个储存coredump文件的文件夹，命令如下：
    ```
    $ mkdir /corefile
    ```

2 设置产生coredump文件的大小，命令如下：
    ```
    $ ulimit -c unlimited
    ```

3  执行以下两条命令：
    ```
    $ sudo sh -c 'echo "1" > /proc/sys/kernel/core_uses_pid' //将1写入到该文件里
    $ sudo sh -c 'echo "/corefile/core-%e-%p-%t" > /proc/sys/kernel/core_pattern'
    ```
    将coredump产生的格式制定好写入core_pattern文件，这样当coredump产生时会直接以这种格式存入到根目录下的文件夹corefile中。

