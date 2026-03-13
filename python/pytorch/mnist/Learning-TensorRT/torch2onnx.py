import torch
from model import CNN

net = CNN()
net.load_state_dict(torch.load('mnist_net.pt'))
net.eval()

torch_input = torch.randn(1, 1, 28, 28)
onnx_program = torch.onnx.export(net, torch_input, "MNIST.onnx", export_params=True,
    input_names = ["input"],   # the model's input names
    output_names = ["output"], # the model's output names
    )
