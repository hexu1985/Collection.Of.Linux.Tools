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
$ sudo apt install python3.9-dev
```
通过键入以下命令验证安装是否成功

```
$ python3.9 --version
```

### 使用pyenv在Ubuntu上安装Python 3.9.9
首先安装pyenv
然后执行:
```
$ pyenv versions # 显示所有已经安装的python版本
$ pyenv install --list # 显示可以安装的python版本
$ pyenv install 3.9.9 # 安装3.9.9版本的CPython，嘿嘿！
$ pyenv global 3.9.9 # 设置全局状态的python版本，即当前目录下没有 .python-version 文件
$ pyenv local 3.9.9 # 会在目录下生成 .python-version 文件，用来指定当前目录下使用python的版本
```
