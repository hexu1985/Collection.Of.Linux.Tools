pip更新速度慢的解决办法

python安装库一般会用到pip，但是更新时经常会碰到超时的情况，在这里介绍一种加快更新的方法：

建议先更新pip工具：

pip3 install -i http://pypi.douban.com/simple --trusted-host pypi.douban.com --upgrade pip

在更新对应的应用：

pip3 install -i http://pypi.douban.com/simple --trusted-host pypi.douban.com psutil

常见pip镜像源（国内源）
- 清华：https://pypi.tuna.tsinghua.edu.cn/simple
- 阿里云：http://mirrors.aliyun.com/pypi/simple/
- 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/
- 华中理工大学：http://pypi.hustunique.com/
- 山东理工大学：http://pypi.sdutlinux.org/
- 豆瓣：http://pypi.douban.com/simple/
