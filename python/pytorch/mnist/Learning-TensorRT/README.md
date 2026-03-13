
### conda安装onnx

```
$ conda install -c conda-forge onnx
```

### 模型训练

```
$ python train.py
```

### pytorch模型推理

```
$ python eval.py
```

或者

```
$ bash eval.sh
```

### pytorch模型 转 onnx模型

```
$ python torch2onnx.py
```

### onnx模型推理

```
$ cd onnx
$ bash build_by_cmake.sh
$ ./build/onnx_eval
```

### onnx模型 转 tensorrt模型

```
$ cd tensorrt
$ bash build_by_cmake.sh
$ build/onnx2tensorrt
```

### tensorrt模型推理

```
$ cd tensorrt
$ bash build_by_cmake.sh
$ build/tensorrt_eval
```

### nsight systems性能分析tensorrt模型推理

```
$ cd tensorrt
$ bash build_by_cmake.sh
$ build/tensorrt_eval
$ nsys profile --stats=true --force-overwrite true -o ./tensorrt_eval_profile build/tensorrt_eval
```
