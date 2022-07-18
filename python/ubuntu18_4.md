### 使用Apt在Ubuntu上安装Python 3.9
更新软件包列表并安装必备组件：

```
$ sudo apt update
$ sudo apt install software-properties-common
```

将Deadsnakes PPA添加到系统的源列表中：

```
$ sudo add-apt-repository ppa:deadsnakes/ppa
```

出现提示时，按[Enter]以继续。

启用存储库后，您可以通过执行以下命令安装Python 3.9：

```
$ sudo apt install python3.9
```
通过键入以下命令验证安装是否成功

```
$ python3.9 --version
```
输出(视安装版本而定)：

3.9.13

如果要使用virtualenv的话, 需要安装

```
$ sudo apt-get install python3.9-venv
```

创建virtualenv

```
$ python3.9 -m venv venv
$ source venv/bin/activate
```

