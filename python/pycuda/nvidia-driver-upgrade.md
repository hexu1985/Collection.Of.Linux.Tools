### NVIDIA显卡驱动升级

如果已经安装了NVIDIA显卡驱动，需要升级到更新的版本，那么就需要如下步骤：
1. 下载更新的驱动安装程序
2. 将系统切换到命令行模式
3. 安装新的显卡驱动
4. 将系统切回图形界面模式

#### 下载更新的驱动安装程序

从该网址下载与显卡型号对应的显卡驱动程序：[英伟达驱动下载](https://www.nvidia.cn/geforce/drivers/)


#### 将系统切换到命令行模式 

1. 备份/etc/default/grub配置文件

2. 修改/etc/default/grub配置文件：
将**GRUB_CMDLINE_LINUX_DEFAULT**一行改为"quiet splash 3"
保存退出后，使用`update-grub`命令来基于这些更改重新生成/boot下的GRUB2配置文件。
重启系统。

3. 安装显卡驱动

```
$ sudo bash NVIDIA-Linux-x86_64-535.179.run # 驱动文件名替换成你下载的文件名
```

4. 恢复/etc/default/grub配置文件，并重启系统，然后执行`nvidia-smi`：

```shell
$ nvidia-smi
Mon May 27 15:37:34 2024
+---------------------------------------------------------------------------------------+
| NVIDIA-SMI 535.179                Driver Version: 535.179      CUDA Version: 12.2     |
|-----------------------------------------+----------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |
|                                         |                      |               MIG M. |
|=========================================+======================+======================|
|   0  NVIDIA GeForce RTX 2060        Off | 00000000:01:00.0  On |                  N/A |
| N/A   42C    P8               6W /  80W |    677MiB /  6144MiB |      8%      Default |
|                                         |                      |                  N/A |
+-----------------------------------------+----------------------+----------------------+

+---------------------------------------------------------------------------------------+
| Processes:                                                                            |
|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |
|        ID   ID                                                             Usage      |
|=======================================================================================|
|    0   N/A  N/A      1758      G   /usr/lib/xorg/Xorg                           36MiB |
|    0   N/A  N/A      1914      G   /usr/bin/gnome-shell                         99MiB |
|    0   N/A  N/A      2862      G   /usr/lib/xorg/Xorg                          283MiB |
|    0   N/A  N/A      3001      G   /usr/bin/gnome-shell                         60MiB |
|    0   N/A  N/A      3735      G   ...4260248,12525359504492599676,262144       48MiB |
|    0   N/A  N/A      5649      G   ...rker,SpareRendererForSitePerProcess      144MiB |
+---------------------------------------------------------------------------------------+
```
