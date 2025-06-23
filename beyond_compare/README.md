破解bcompare

下载链接
https://www.scootersoftware.com/download/download

如果是在官网下载好乐安装包的同学，可使用 sudo dpkg -i 安装包.deb 命令安装

```
$ sudo dpkg -i 安装包.deb
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

