## Hands-On install pycuda

- install nvidia driver
- install cuda and cudnn
- install numpy and pycuda

我的安装环境：
- 操作系统：Ubuntu18.04
- 显卡：NVIDIA RTX 2060
- Python版本：2.7.1/3.6.9

---

### Linux下Nvidia驱动的安装

1.查看Linux系统是否已经安装了Nvidia驱动
命令行输入：nvidia-smi  进行查看：

```
$ nvidia-smi
```

如果输出以下信息，则Linux系统中已经安装了Nvidia驱动。

```
Tue Nov 14 15:29:52 2023
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 510.108.03   Driver Version: 510.108.03   CUDA Version: 11.6     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0  On |                  N/A |
| N/A   51C    P0    21W /  N/A |    876MiB /  6144MiB |      6%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|    0   N/A  N/A      1844      G   /usr/lib/xorg/Xorg                 36MiB |
|    0   N/A  N/A      1981      G   /usr/bin/gnome-shell              100MiB |
|    0   N/A  N/A      2734      G   /usr/lib/xorg/Xorg                367MiB |
|    0   N/A  N/A      2868      G   /usr/bin/gnome-shell               61MiB |
|    0   N/A  N/A      3159      G   /usr/lib/firefox/firefox           82MiB |
|    0   N/A  N/A      3357      G   ...290876582971142579,262144      119MiB |
|    0   N/A  N/A     18243      G   ...RendererForSitePerProcess      102MiB |
+-----------------------------------------------------------------------------+
```
如果没有以上的输出信息，则开始进行Nvidia驱动的安装。

2.下载Nvidia官方驱动程序
查看自己的显卡型号，下载对应的驱动。命令行输入：lspci | grep NVIDIA

```
$ lspci | grep -i nvidia
```
对应输出以下信息：

```
01:00.0 VGA compatible controller: NVIDIA Corporation Device 1f15 (rev a1)
01:00.1 Audio device: NVIDIA Corporation Device 10f9 (rev a1)
01:00.2 USB controller: NVIDIA Corporation Device 1ada (rev a1)
01:00.3 Serial bus controller [0c80]: NVIDIA Corporation Device 1adb (rev a1)
```

我这由于驱动问题，无法显示显卡的具体型号，在下面的网址输入上面第一行的数据1f15，可以看到显卡型号是 GeForce RTX 2060 Mobile

<https://admin.pci-ids.ucw.cz/mods/PC/10de?action=help?help=pci>

从该网址下载与显卡型号对应的显卡驱动程序：[英伟达驱动下载](https://www.nvidia.cn/geforce/drivers/)

3.安装Nvidia驱动程序的准备

(1) 禁用nouveau驱动：
打开禁用配置文件，命令行输入以下命令：

```
$ sudo vim /etc/modprobe.d/blacklist.conf
```

在最后一行添加以下文本：

```
blacklist nouveau
options nouveau modeset=0
```

保存并退出：

```
:qw!
```

修改完成之后，更新一下文件配置，命令行输入以下命令：

```
$ sudo update-initramfs -u
```
执行完毕需要进行电脑重启，重启电脑之后，命令行输入以下命令：

```
$ lsmod | grep nouveau
```
如果没有输出，则代表nouveau禁用成功。

(2) Bios禁用secure boot
根据不同电脑型号，进入Bios，将secure boot（有些电脑名称为：安全启动项）设置为disable

4.Nvidia驱动正式安装
给第2步下载的驱动程序安装文件增加可执行权限，驱动文件所在目录打开命令行，输入以下命令：

```
$ sudo chmod a+x NVIDIA-Linux-*******.run    //NVIDIA-Linux-*******.run 表示你下载的驱动程序安装文件
```
接着命令行输入以下命令：

```
$ sudo sh ./NVIDIA-Linux-*******.run //NVIDIA-Linux-*******.run 表示你下载的驱动程序安装文件
```
接着按照安装提示进行Nvidia驱动的安装。

```
see the file /usr/share/doc/NVIDIA_GLX-1.0/README.txt for details.
```

5.Nvidia驱动安装是否成功验证
命令行输入以下命令验证安装是否成功：

```
$ nvidia-smi
```
如果出现以下输出则安装成功：

```
Tue Nov 14 16:46:28 2023
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 470.223.02   Driver Version: 470.223.02   CUDA Version: 11.4     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0 Off |                  N/A |
| N/A   57C    P0    22W /  N/A |      0MiB /  5926MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

---

### Linux下安装cuda和对应版本的cudnn

1.首先在安装cuda与cudnn之前，系统需要成功安装Nvidia驱动

2.验证系统内部是否已经安装了cuda
打开命令行，输入以下命令：

```
$ nvcc -V
```
若出现以下输出，则系统内部没有安装cuda。

```
Command 'nvcc' not found, but can be installed with:

sudo apt install nvidia-cuda-toolkit
```

3.进行cuda安装包与cudnn的下载

- cuda的下载链接：[cuda下载链接](https://developer.nvidia.com/cuda-toolkit-archive)
- cudnn的下载链接：[cudnn下载链接](https://developer.nvidia.com/rdp/cudnn-archive)

在下载这两个文件的时候，需要注意cudnn的版本需要与cuda的版本相匹配。

NVIDIA显卡驱动版本和CUDA版本对应关系可以去下面网站检查：
<https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html>

4.进行cuda的安装
在进行cuda安装之前，我们需要先安装cuda的相关依赖库，防止cuda安装出现错误。命令行输入以下命令，进行相关依赖库的安装：

```
$ sudo apt-get install freeglut3-dev build-essential libx11-dev libxmu-dev libxi-dev libgl1-mesa-glx libglu1-mesa libglu1-mesa-dev
```

随后输入以下命令进行cuda的安装：

```
$ sudo sh cuda_XX.X.XX_XXX.XX_linux.run
```

正常情况输出类似：

```
$ sudo bash cuda_11.1.1_455.32.00_linux.run
===========
= Summary =
===========

Driver:   Not Selected
Toolkit:  Installed in /usr/local/cuda-11.1/
Samples:  Installed in /home/hexu/

Please make sure that
 -   PATH includes /usr/local/cuda-11.1/bin
 -   LD_LIBRARY_PATH includes /usr/local/cuda-11.1/lib64, or, add /usr/local/cuda-11.1/lib64 to /etc/ld.so.conf and run ldconfig as root

To uninstall the CUDA Toolkit, run cuda-uninstaller in /usr/local/cuda-11.1/bin
***WARNING: Incomplete installation! This installation did not install the CUDA Driver. A driver of version at least 455.00 is required for CUDA 11.1 functionality to work.
To install the driver using this installer, run the following command, replacing <CudaInstaller> with the name of this run file:
    sudo <CudaInstaller>.run --silent --driver

Logfile is /var/log/cuda-installer.log
```

如果系统可以运行nvidia-smi，说明已经安装好了cuda的驱动，此时一定要在下个界面通过按回车取消Driver的安装，
否则会出现[ERROR]: Install of driver component failed.的情况。

随后，我们开始进行环境变量的配置：

打开命令行输入以下命令进行～/.bashrc文件的修改：

```
$ vim ~/.bashrc
```

在文件的末尾加入下面三行：

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda/lib64
export PATH=$PATH:/usr/local/cuda/bin
export CUDA_HOME=$CUDA_HOME:/usr/local/cuda
```

随后命令行输入以下命令保存并退出：

```
:wq!
```

在添加完环境变量后，需要更新一下环境变量，命令行输入以下命令进行环境变量的更新：

```
source ~/.bashrc
```

此时再运行nvcc -V，即可发现cuda已安装成功：

```
$ nvcc -V
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2020 NVIDIA Corporation
Built on Mon_Oct_12_20:09:46_PDT_2020
Cuda compilation tools, release 11.1, V11.1.105
Build cuda_11.1.TC455_06.29190527_0
```

5. 进行cudnn的安装

安装 cuDNN为与安装 CUDA 类似，不过需要注册 Nvidia 账号：

[cuDNN官方下载](https://developer.nvidia.com/cudnn-downloads)

[cuDNN历史版本](https://developer.nvidia.com/rdp/cudnn-archive)


选择自己对应的系统以及 CUDA 版本下载即可，例如 Ubuntu18.04 + CUDA11.6

```shell
$ sudo dpkg -i cudnn-local-repo-ubuntu1804-8.9.7.29_1.0-1_amd64.deb
```

测试安装是否成功，下载cudnn_samples_v8：

```shell
$ cd cudnn_samples_v8/mnistCUDNN
$ make clean && make
$ ./mnistCUDNN
# 测试通过
Test passed!
```

---

### ubuntu安装pyCUDA

1.安装pyCUDA之前必须安装CUDA

2.安装anaconda

3.anaconda上安装pyCUDA：

只需要执行：

```
$ conda install -c conda-forge pycuda
```

---

### 参考资料

- [linux服务器上查看显卡(nvidia)型号](https://zhuanlan.zhihu.com/p/391087399)
- [Linux下Nvidia驱动的安装](https://blog.csdn.net/qq_44961869/article/details/115945912?utm_source=app&app_version=4.6.1)
- [Ubuntu 卸载 Nvidia 驱动和安装最新驱动](https://blog.csdn.net/wm9028/article/details/110268030)
- [Linux下安装cuda和对应版本的cudnn](https://blog.csdn.net/qq_44961869/article/details/115954258)
- [Linux（多用户下）查看cuda、cudnn版本、查看已经安装的cuda版本、切换不同版本cuda之间的切换等相关命令](https://blog.csdn.net/Kefenggewu_/article/details/117675079)
- [CUDA、cuDNN以及pytorch的版本选择和下载](https://blog.csdn.net/xiaozhu_daidai/article/details/122156601)
- [Ubuntu18.04安装cuda+ ERROR: Install of driver component failed.的解决](https://blog.csdn.net/dream6985/article/details/125124730)
- [ubuntu安装pyCUDA](https://blog.csdn.net/JohnJim0/article/details/100585885)
- [Installing PyCUDA on Linux](https://wiki.tiker.net/PyCuda/Installation/Linux/)
- [python3.6-pycuda-2021.1](https://github.com/jetson-nano-wheels/python3.6-pycuda-2021.1)
