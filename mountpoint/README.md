### Linux命令学习手册-mountpoint命令

```
mountpoint [-q] [-d] /path/to/directory 

mountpoint -x /dev/device 
```


[功能] 

查看一个目录是不是挂载点。 


[描述] 

mountpoint查看一个目录是不是挂载点。 

选项如下： 

-q        安静模式，不会打印任何东西。 

-d        在标准输出上打印文件系统的主／次设备号。 

-x        在标准输出上打印块设备的主／次设备号。 

如果是挂载点返回0，如果不是就返回非0。 


[举例] 

*查看/mnt目录是不是挂载点： 

```
$mountpoint /mnt 
```

输入之后，输出如下： 

```
/mnt is a mountpoint 
```

这里，我在/mnt目录下面挂载了一些东西。 


*查看/usr/local是不是挂载点： 

```
$mountpoint /usr/local 
```

输入之后，输出如下： 

```
/usr/local is not a mountpoint 
```

这里，我没有把任何分区挂载到/usr/local目录上面。 


*查看挂载的/mnt的主／次设备号码： 

```
$mountpoint -d /mnt 
```

输入之后，输出如下： 

```
8:5 
```


*查看一个设备的主／次设备号: 

```
$mountpoint -x /dev/sda9 
```

输入之后，输出如下： 

```
8:9 
```
