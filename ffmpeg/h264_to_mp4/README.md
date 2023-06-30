### 视频文件处理转换工具

1. h264转mp4

    ```
    $ ffmpeg -r 20 -i camera_left-20230627-140109.h264 -ss 10 -to 70 1.mp4
    ```

2. 合并两个mp4文件

    ```
    $ cat 1.txt
    file 1.mp4
    file 2.mp4
    $ ffmpeg -f concat -i 1.txt -c copy out.mp4
    ```
