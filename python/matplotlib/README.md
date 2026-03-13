# Matplotlib Tutorial

## Matplotlib 简介

Matplotlib 是 Python 的绘图库，它能让使用者很轻松地将数据图形化，并且提供多样化的输出格式。

Matplotlib 可以用来绘制各种静态，动态，交互式的图表。

Matplotlib 是一个非常强大的 Python 画图工具，我们可以使用该工具将很多数据通过图表的形式更直观的呈现出来。

Matplotlib 可以绘制线图、散点图、等高线图、条形图、柱状图、3D 图形、甚至是图形动画等等。

## Matplotlib 应用

Matplotlib 通常与 NumPy 和 SciPy（Scientific Python）一起使用， 这种组合广泛用于替代 MatLab，是一个强大的科学计算环境，有助于我们通过 Python 学习数据科学或者机器学习。

SciPy 是一个开源的 Python 算法库和数学工具包。

SciPy 包含的模块有最优化、线性代数、积分、插值、特殊函数、快速傅里叶变换、信号处理和图像处理、常微分方程求解和其他科学与工程中常用的计算。

## Matplotlib 安装

### ubuntu下安装matplotlib

安装python3

```shell
$ sudo apt install python3
```

安装matplotlib相关库

```shell
$ sudo apt install python3-tk
$ sudo apt install python3-matplotlib
$ sudo apt install python3-numpy
$ sudo apt install python3-scipy
```

### 使用pip安装matplotlib

升级 pip：

```shell
$ python3 -m pip install -U pip
```

安装matplotlib相关库

```shell
$ python3 -m pip install -U numpy
$ python3 -m pip install -U matplotlib
$ python3 -m pip install -U scipy
```

如果访问过慢可以指定国内源:

```shell
$  python3 -m pip install -U pip -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 检查matplotlib版本

安装完成后，我们就可以通过 import 来导入 matplotlib 库：

```
$ python
Python 3.9.13 (main, May 23 2022, 22:02:02)
[GCC 7.5.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import matplotlib
>>> print(matplotlib.__version__)
3.6.3
>>>
```

### 参考链接:

https://www.runoob.com/w3cnote/matplotlib-tutorial.html
https://www.runoob.com/matplotlib/matplotlib-tutorial.html
https://www.runoob.com/numpy/numpy-tutorial.html

https://github.com/matplotlib/matplotlib
https://matplotlib.org/
