### 视频文件处理转换工具

1. h264转mp4

    ```
    $ ffmpeg -r 20 -i camera_front-20230628-140154.h264 -ss 10 -to 70 1.mp4
    ```

2. 合并两个mp4文件

    ```
    $ cat 1.txt
    file 1.mp4
    file 2.mp4
    $ ffmpeg -f concat -i 1.txt -c copy out.mp4
    ```

3. 查看mp4文件信息

    ```
    $ ffprobe 1.mp4
    ffprobe version 3.4.11-0ubuntu0.1 Copyright (c) 2007-2022 the FFmpeg developers
      built with gcc 7 (Ubuntu 7.5.0-3ubuntu1~18.04)
      configuration: --prefix=/usr --extra-version=0ubuntu0.1 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --enable-gpl --disable-stripping --enable-avresample --enable-avisynth --enable-gnutls --enable-ladspa --enable-libass --enable-libbluray --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libgme --enable-libgsm --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-libpulse --enable-librubberband --enable-librsvg --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libssh --enable-libtheora --enable-libtwolame --enable-libvorbis --enable-libvpx --enable-libwavpack --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzmq --enable-libzvbi --enable-omx --enable-openal --enable-opengl --enable-sdl2 --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-libopencv --enable-libx264 --enable-shared
      libavutil      55. 78.100 / 55. 78.100
      libavcodec     57.107.100 / 57.107.100
      libavformat    57. 83.100 / 57. 83.100
      libavdevice    57. 10.100 / 57. 10.100
      libavfilter     6.107.100 /  6.107.100
      libavresample   3.  7.  0 /  3.  7.  0
      libswscale      4.  8.100 /  4.  8.100
      libswresample   2.  9.100 /  2.  9.100
      libpostproc    54.  7.100 / 54.  7.100
    Input #0, mov,mp4,m4a,3gp,3g2,mj2, from '1.mp4':
      Metadata:
        major_brand     : isom
        minor_version   : 512
        compatible_brands: isomiso2avc1mp41
        encoder         : Lavf57.83.100
      Duration: 00:01:00.00, start: 0.000000, bitrate: 103 kb/s
        Stream #0:0(und): Video: h264 (High) (avc1 / 0x31637661), yuv420p, 320x240, 101 kb/s, 20 fps, 20 tbr, 10240 tbn, 40 tbc (default)
        Metadata:
          handler_name    : VideoHandler
    ```
