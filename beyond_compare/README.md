破解bcompare

下载链接
https://www.scootersoftware.com/download/download

如果是在官网下载好乐安装包的同学，可使用 sudo dpkg -i 安装包.deb 命令安装

```
$ sudo dpkg -i 安装包.deb
```

如果没有在官网下载的同学，请使用以下步骤安装

```
$ wget https://www.scootersoftware.com/files/bcompare-5.1.0.31016_amd64.deb
$ sudo apt-get update
$ sudo apt-get install gdebi-core
$ sudo gdebi bcompare-5.1.0.31016_amd64.deb
```

根据网上大家的建议，只需要将删除注册表就可以

```
$ rm -rf "${HOME}/.config/bcompare/registry.dat"
# 对于bcompare5，路径变为${HOME}/.config/bcompare5/registry.dat
```

具体操作：

```
# cd /usr/local/share/bcompare/bin
# mv bcompare bcompare.real
# vi bcompare

#!/bin/sh
rm -rf "${HOME}/.config/bcompare/registry.dat"
bcompare.real $@
```

