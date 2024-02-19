### git 命令自动补全

下载 Git 的源代码
使用如下命令即可下载：

```
$ git clone https://github.com/git/git
```

复制 git-completion.bash
源代码下有个 contrib/completion 目录，有个 git-completion.bash 文件

```
$ cd git/contrib/completion/
```

将该文件复制到主目录(~)下

注意：复制时，文件名前加一个"点"（.），命令如下：

```
$ cp git-completion.bash ~/.git-completion.bash
```


修改主目录下的 .bashrc 文件

```
$ vi ~/.bashrc
```


在文件的最后一行，加上如下代码：

```
source ~/.git-completion.bash
```


OK，现在可以试一下，在输入 不完整的 git 命令后，再输入两个制表符（Tab）,就会看到与之匹配的相关命令，如输入如下代码：

```
$ git co<tab><tab>
```


就会得到如下提示

```
$ commit config
```

### 参考文档

- <https://www.cnblogs.com/memory4young/p/git-command-auto-completion.html>
