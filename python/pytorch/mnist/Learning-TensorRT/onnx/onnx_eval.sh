#!/bin/bash

for img_file in $(ls -1 img/)
do
    img_path="img/$img_file"
    echo -n "$img_path 推理结果: "
    build/onnx_eval $img_path
done

