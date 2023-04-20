### linux ldconfig命令

dconfig主要是在默认搜寻目录/lib和/usr/lib以及动态库配置文件/etc/ld.so.conf内所列的目录下，  
搜索出可共享的动态链接库（格式如lib*.so*）,进而创建出动态装入程序(ld.so)所需的连接和缓存文件，  
缓存文件默认为/etc/ld.so.cache，此文件保存已排好序的动态链接库名字列表。  
linux下的共享库机制采用了类似高速缓存机制，将库信息保存在/etc/ld.so.cache，  
程序连接的时候首先从这个文件里查找，然后再到ld.so.conf的路径中查找。  
为了让动态链接库为系统所共享，需运行动态链接库的管理命令ldconfig，此执行程序存放在/sbin目录下。

**ldconfig命令参数：**

- -v或–verbose:ldconfig将显示正在扫描的目录及搜索到的动态链接库,还有它所创建的连接的名字
- -f CONF：此选项指定动态链接库的配置文件为CONF，系统默认为/etc/ld.so.conf
- -p或–print-cache：此选项指示ldconfig打印出当前缓存文件所保存的所有共享库的名字。
    ```
    $ ldconfig -p | grep pcap
    ```

- -V：此选项打印出ldconfig的版本信息，而后退出。


从以上可知：

- 在/lib和/usr/lib里面添加库文件，是无需将路径添加到/etc/ld.so.conf中去的，但是需要使用命令sudo ldconfig,否则无法找到库文件。  
    在上述两个目录之外的路径添加库文件，需要先将将库文件的路径追加入/etc/ld.so.conf，假设库文件在/usr/local/mysql/lib中，可以使用命令：

    ```
    $ echo "/usr/local/mysql/lib" >> /etc/ld.so.conf
    $ sudo ldconfig -v | grep mysql  # 查看mysql库文件是否被找到。
    ```

- 若在/lib和/usr/lib之外的目录中添加库文件，而又不在/etc/ld.so.conf中写入路径，此时可以用添加环境变量LD_LIBRARY_PATH的做法让系统识别到库文件。

    ```
    $ export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/mysql/lib
    ```

- 可以在/etc/ld.so.conf.d/目录下创建.conf文件来添加库路径。在默认的/etc/ld.so.conf文件中，可以看到有如下内容：

    ```
    $ include /etc/ld.so.conf.d/*.conf
    ```

    说明/etc/ld.so.conf.d/目录下所有的.conf文件都被包含，文件中所有的路径都会被搜索到。
    例如：
    ```
    $ touch opencv.conf
    $ echo "/user/local/lib" > opencv.conf
    $ sudo ldconfig
    ```
