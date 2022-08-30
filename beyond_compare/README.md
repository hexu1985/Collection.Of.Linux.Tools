破解bcompare

根据网上大家的建议，只需要将删除注册表就可以

```
$ rm -rf "${HOME}/.config/bcompare/registry.dat"
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
