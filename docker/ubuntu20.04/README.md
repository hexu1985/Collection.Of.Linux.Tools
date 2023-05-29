### 构建Ubuntu20.04+gcc+gdb环境

1. 手动拉取镜像:
    ```
    $ docker pull ubuntu:20.04
    ```

2. 手动启动和停止容器:
    ```
    $ docker run -itd --name cont_gdb --rm ubuntu:20.04 
    d7d23cf6ff8784f01c1e6636311a2a8cdcf8c57d8464bcc56b46dfd9ebf78fbc
    $ docker stop cont_gdb # 或者 d7d23cf6ff
    ```

3. bash登录和退出容器:
    ```
    $ docker exec -it cont_gdb /bin/bash
    root@68c79f28dee1:/# exit   # 或者Ctrl-D
    exit
    ```

4. 安装vim, make, gcc, gdb
    ```
    # cp sources.list to docker container
    $ docker cp sources.list cont_gdb:/etc/apt/
    $ docker exec -it cont_gdb /bin/bash
    root@d7d23cf6ff87:/# apt update
    root@d7d23cf6ff87:/# apt install -y vim make gcc g++ gdb
    root@d7d23cf6ff87:/# exit
    exit
    ```

5. 验证gcc和gdb
    ```
    $ docker cp xxx.c cont_gdb:/home/
    $ docker exec -it cont_gdb /bin/bash
    $ gcc -o xxx xxx.c
    $ gdb xxx
    ```

6. 制作成Dockerfile
    新建一个Dockerfile, 内容如下:
    ```
    FROM ubuntu:20.04
    COPY sources.list /etc/apt
    RUN apt update; \
            apt install -y vim make gcc g++ gdb; \
            apt clean;
    
    # add user if need
    RUN useradd -ms /bin/bash hexu
    USER hexu
    WORKDIR /home/hexu
    ```

7. 从Dockerfile创建镜像
    ```
    $ docker build -t image_gdb -f Dockerfile .
    ```

8. 启动容器并bind volumn
    ```
    # stop old container first if reuse container tag
    $ docker stop cont_gdb
    $ docker run -itd --name cont_gdb \
        --mount type=bind,src=/home/hexu,dst=/home/hexu \
        --rm image_gdb
    ```

至此, 就可以通过bash登录的方式, 访问ubuntu20.04的docker容器了.
