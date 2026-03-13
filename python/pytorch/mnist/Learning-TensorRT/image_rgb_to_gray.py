import sys
import numpy as np
import torchvision.transforms as transforms
from PIL import Image


def image_RGB2Gray(image_path):
    # 读取图片
    image = Image.open(image_path)
    # 输出维度
    print("RGB图像的维度：", np.array(image).shape)
    # 显示原图
    image.show()
    # RGB转换我灰度图像
    image_transforms = transforms.Compose([
        transforms.Grayscale(1)
    ])
    image = image_transforms(image)
    # 输出灰度图像的维度
    print("灰度图像维度： ", np.array(image).shape)
    # 显示灰度图像
    image.show()


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: {} image_path".format(sys.argv[0]))
        sys.exit(1)

    image_RGB2Gray(sys.argv[1])
