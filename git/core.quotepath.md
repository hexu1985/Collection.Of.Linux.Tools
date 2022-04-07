在使用git的时候，经常会碰到有一些中文文件名或者路径被转义成\xx\xx\xx之类的，此时可以通过git的配置来改变默认转义
具体命令如下：
```
$ git config --global core.quotepath false
```
