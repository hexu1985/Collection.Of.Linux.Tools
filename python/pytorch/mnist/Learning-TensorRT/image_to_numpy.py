import sys
import numpy as np
from PIL import Image

def main():
    img_path = "./img/img0.png"
    if len(sys.argv) > 1:
        img_path = sys.argv[1]

    img = Image.open(img_path)
#    img.show()
    
    # 将PIL图像转换为numpy数组
    image_array = np.array(img)

    print(image_array.shape)
    print(image_array)

if __name__ == "__main__":
    main()
