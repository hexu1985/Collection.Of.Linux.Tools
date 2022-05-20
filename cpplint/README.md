## cpplint - static code checker for C++ - C++ 静态代码审查工具

cpplint
<https://github.com/cpplint/cpplint>

Google C++ Style Guide
<https://google.github.io/styleguide/cppguide.html>

Google C++ 风格指南
<https://zh-google-styleguide.readthedocs.io/en/latest/google-cpp-styleguide/>


Cpplint is a command-line tool to check C/C++ files for style issues following Google’s C++ style guide.
Cpplint 是一个命令行工具，可按照 Google 的 C++ 样式指南检查 C/C++ 文件中的样式问题。


### 1. Installation

To install cpplint from PyPI, run:
```
$ pip install cpplint
```

Then run it with:
```
$ cpplint [OPTIONS] files
```

For full usage instructions, run:
```
$ cpplint --help
```

```
$ pip --version
pip 20.0.2 from /home/yongqiang/miniconda3/lib/python3.7/site-packages/pip (python 3.7)
$
$ pip install cpplint
Collecting cpplint
  Downloading cpplint-1.5.4-py3-none-any.whl (76 kB)
     |████████████████████████████████| 76 kB 201 kB/s
Installing collected packages: cpplint
Successfully installed cpplint-1.5.4
$
$ cpplint --version
Cpplint fork (https://github.com/cpplint/cpplint)
cpplint 1.5.4
Python 3.7.6 (default, Jan  8 2020, 19:59:22)
[GCC 7.3.0]
$
$ pip list | grep cpplint
cpplint                1.5.4
$
```

### 2. usage

#### 2.1 cpplint main.cpp

```
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

```
$ cpplint main.cpp
main.cpp:0:  No copyright message found.  You should have a line: "Copyright [year] <Copyright Owner>"  [legal/copyright] [5]
Done processing main.cpp
Total errors found: 1
$
```

```
/*
 * Copyright 2020 Yongqiang Cheng. All Rights Reserved.
 */

#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

```
$ cpplint main.cpp
Done processing main.cpp
$
```

#### 2.2 cpplint --linelength=120 main.cpp

每行允许的最长长度，默认是 80 字符。

```
--linelength=digits
This is the allowed line length for the project. The default value is 80 characters.

Examples: --linelength=120
```

```
$ cpplint --linelength=120 main.cpp
Done processing main.cpp
$
```

#### 2.3 cpplint --linelength=120 --verbose=3 main.cpp


--verbose=#
Specify a number 0-5 to restrict errors to certain verbosity levels. Errors with lower verbosity levels have lower confidence and are more likely to be false positives.

指定数字 0-5，以将错误限制在某些详细程度上。详细程度较低的错误的置信度较低，更有可能是误报。

指定输出的错误级别。对于发现的每个问题，cpplint 都会给出 1，2，3，4，5 的置信度评分，分数越高就代表问题越肯定，可以通过 --verbose=# 选项控制输出哪些级别。

--verbose=3 置信度评分为 1、2 的将不会再输出。


