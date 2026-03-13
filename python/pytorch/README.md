### Pytorch安装

在有anaconda之后我们可以先创建一个环境

```shell
$ conda create -n ML python=3.10
```

环境创建完成之后激活环境

```shell
$ conda activate ML
```

根据cuda版本，可以去pytorch的[START LOCALLY](https://pytorch.org/get-started/locally/)或者[PREVIOUS VERSIONS OF PYTORCH](https://pytorch.org/get-started/previous-versions/)网页看看有什么pytorch版本适配，

以cuda11.6为例， 我们使用如下命令安装Pytorch

```shell
$ pip install torch==1.13.1+cu116 torchvision==0.14.1+cu116 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu116
```

最后我们使用如下命令测试是否可以使用GPU

```shell
$ python -c "import torch; print(torch.cuda.is_available())"
```

### 参考文档

- https://pytorch1x.apachecn.org/1.4/blitz/autograd_tutorial/
