#### 增加子模块

- github

```
$ mkdir github
$ git submodule add https://github.com/hexu1985/Cpp.GUI.Programming.with.Qt.git github/Cpp.GUI.Programming.with.Qt

```

- gitee

```
$ mkdir gitee
$ git submodule add https://gitee.com/hexu1985/Cpp.GUI.Programming.with.Qt.git gitee/Cpp.GUI.Programming.with.Qt
```

#### 仓库克隆和检出子模块

```
$ git clone https://github.com/hexu1985/qt_code.git
$ cd qt_code
$ git submodule init
$ git submodule update
```

或者clone时直接检出子模块
```
$ git clone --recursive https://github.com/hexu1985/qt_code.git
```

#### 删除子模块

```
$ git rm -r github  # 删除一个目录
$ git rm github/Cpp.GUI.Programming.with.Qt # 删除某一个子仓库
```
