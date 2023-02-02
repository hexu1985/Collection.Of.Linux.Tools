pip更新速度慢的解决办法

python安装库一般会用到pip，但是更新时经常会碰到超时的情况，在这里介绍一种加快更新的方法：

建议先更新pip工具：

pip3 install -i http://pypi.douban.com/simple --trusted-host pypi.douban.com --upgrade pip

在更新对应的应用：

pip3 install -i http://pypi.douban.com/simple --trusted-host pypi.douban.com psutil

