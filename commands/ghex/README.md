## Linux下查看二进制文件的工具Ghex

windows下查看二进制文件内容的软件工具如Ultra Edit，简称UE.

于是,相应的Linux下有一款查看二进制文件内容的软件工具Ghex.

### 一. Ghex简介：

GHex是一个简单的二进制文件编辑器。它允许用户使用多级撤消/重做机制查看和编辑hex和ascii中的二进制文件。
功能包括查找和替换功能，二进制，八进制，十进制和十六进制值之间的转换，以及使用另一种用户可配置的多文档界面概念，该概念允许用户使用多个视图编辑多个文档。

### 二. Ghex安装：

Linux终端输入命令即可：

```
$ sudo apt install ghex
```


### 三. Ghex启动方式：

Ghex启动方式有两种：

- 可以通过终端启动Ghex，并打开文件，
    ```
    $ ghex test.txt；
    ```

- 也可以通过启动图形界面后，点击菜单栏 -> file -> Open，选择要打开的文件

