### Pytest安装

pytest 要求：Python 3.8+ 或 PyPy3。

在命令行中运行以下命令

```
$ pip install -U pytest
```

检查你是否安装了正确的版本

```
$ pytest --version
pytest 8.2.0
```

### 创建你的第一个测试

创建一个名为 test_sample.py 的新文件，其中包含一个函数和一个测试

```python
# content of test_sample.py
def func(x):
    return x + 1


def test_answer():
    assert func(3) == 5
```

测试

```
$ pytest
====================================================== test session starts ======================================================
platform linux -- Python 3.12.3, pytest-7.4.4, pluggy-1.4.0
rootdir: /home/hexu/git/Collection.Of.Python.Utility.Tools/pytest/examples
collected 1 item

test_sample.py F                                                                                                          [100%]

=========================================================== FAILURES ============================================================
__________________________________________________________ test_answer __________________________________________________________

    def test_answer():
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

test_sample.py:7: AssertionError
==================================================== short test summary info ====================================================
FAILED test_sample.py::test_answer - assert 4 == 5
======================================================= 1 failed in 0.04s =======================================================
```

### 参考文档

- https://pytest.cn/en/8.2.x/getting-started.html
