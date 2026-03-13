import torch
import torch.onnx
from torchvision.models import resnet18
 
# 定义你的ResNet18模型
model = resnet18(pretrained=False)  # 如果你想要预训练权重，可以设置pretrained=True
 
# 创建一个示例输入
example = torch.randn(1, 3, 224, 224)  # 假设输入尺寸为3x224x224
 
# 导出模型
torch.onnx.export(model, example, "resnet18.onnx", verbose=True, input_names=["input"], output_names=["output"])
