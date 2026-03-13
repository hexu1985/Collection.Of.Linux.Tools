import torch
import torchvision.transforms as transforms
import torch.nn.functional as F
import numpy as np
import sys
from PIL import Image

from model import CNN

def load_input_data(image_path):
    # open image file
    image = Image.open(image_path)
#    print("图像的原始维度：", np.array(image).shape)

    # convert to gray image
    image_transforms = transforms.Compose([
        transforms.Grayscale(1)
    ])
    image = image_transforms(image)

    # to numpy
    image_array = np.array(image)

    # reshape to 28x28
    image_array = image_array.reshape(28, 28)

    return image_array

def main():
    image_path = "./img/img0.png"
    if len(sys.argv) > 1:
        image_path = sys.argv[1]

    net = CNN()
    net.load_state_dict(torch.load('mnist_net.pt'))

    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
    net = net.to(device)
    net.eval()

    image_array = load_input_data(image_path)

    input_tensor = torch.as_tensor(image_array, dtype=torch.float32, device=device)
    input_tensor = input_tensor.reshape(1, 1, 28, 28)

    output_tensor = net(input_tensor)
    output_array = F.softmax(output_tensor, dim=1).detach().cpu().numpy()
    res = np.argmax(output_array)
    print(res)


if __name__ == "__main__":
    main()

