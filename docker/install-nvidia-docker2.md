### ubuntu18 安装nvidia-docker2

前提是宿主机上已经安装nvidia驱动, 安装cuda, 安装过docker

安装nvidia-docker2的具体步骤如下:

```
# 清理以前的。If you have nvidia-docker 1.0 installed: we need to remove it and all existing GPU containers
$ sudo docker volume ls -q -f driver=nvidia-docker | xargs -r -I{} -n1 docker ps -q -a -f volume={} | xargs -r docker rm -f
$ sudo apt-get purge -y nvidia-docker
$ sudo apt autoremove

# 执行命令。Add the package repositories
# command 1
$ curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | \
    sudo apt-key add -

# command 2
$ distribution=$(. /etc/os-release;echo $ID$VERSION_ID)

# command 3
# curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | \
    sudo tee /etc/apt/sources.list.d/nvidia-docker.list
$ sudo apt-get update

# 正式安装。Install nvidia-docker2 and reload the Docker daemon configuration
$ sudo apt-get install -y nvidia-docker2
$ sudo systemctl restart docker

# 测试一下。 Test nvidia-smi with the latest official CUDA image
$ sudo docker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi
```

Nvidia docker cuda 官方镜像：<https://hub.docker.com/r/nvidia/cuda>
