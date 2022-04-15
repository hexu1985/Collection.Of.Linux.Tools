1.使用命令sudo visudo，编辑/etc/sudoers文件

2.在%sudo ALL=(ALL:ALL) ALL 下面添加
```
hexu ALL=(ALL) NOPASSWD:ALL
```
注：hexu是我的用户名，改成你自己的，这行也可直接复制过去后修改用户名

3.CTRL + X退出，提示是否保存选Y，回车

4.重新打开一个终端测试

参考:

https://phpraxis.wordpress.com/2016/09/27/enable-sudo-without-password-in-ubuntudebian/
