### jupyter notebook转markdown

**安装 nbconvert**

nbconvert 已经在 pip 和 conda 中打包了，可以选择任意一个来安装：

```
$ pip3 install nbconvert

# OR

$ conda install nbconvert
```

**安装Pandoc**

将Notebook转换为除HTML外的所有其他格式都需要依赖Pandoc库

```
$ pip3 install pandoc
```

**使用方法**

在终端中输入命令：

```
$ jupyter nbconvert --to FORMAT notebook.ipynb
```

需要转成Markdown格式就将命令中的FORMAT换成markdown。
运行命令后会自动在目标文件的同一目录下生成一个.md格式的文件。

```
$ jupyter nbconvert test.ipynb --to markdown
```
