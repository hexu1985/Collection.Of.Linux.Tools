import sys
from PIL import Image

def main():
    img_path = "./img/img0.png"
    if len(sys.argv) > 1:
        img_path = sys.argv[1]

    img = Image.open(img_path)
    img.show()

if __name__ == "__main__":
    main()
