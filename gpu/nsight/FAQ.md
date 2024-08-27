### FAQ

#### error 1

```
$ ncu ./sumArraysOnGPU-timer
/home/hexu/git/Professional.CUDA.C.Programming/CodeSamples/chapter02/./sumArraysOnGPU-timer Starting...
==PROF== Connected to process 20238 (/home/hexu/git/Professional.CUDA.C.Programming/CodeSamples/chapter02/sumArraysOnGPU-timer)
Using Device 0: NVIDIA GeForce RTX 2060
Vector size 16777216
initialData Time elapsed 0.401327 sec
sumArraysOnHost Time elapsed 0.010855 sec
==ERROR== Error: ERR_NVGPUCTRPERM - The user does not have permission to access NVIDIA GPU Performance Counters on the target device 0. For instructions on enabling permissions and to get more information see https://developer.nvidia.com/ERR_NVGPUCTRPERM
sumArraysOnGPU <<<  32768, 512  >>>  Time elapsed 0.001263 sec
Arrays match.

==PROF== Disconnected from process 20238
==ERROR== An error occurred while trying to profile.
==WARNING== No kernels were profiled.
==WARNING== Profiling kernels launched by child processes requires the --target-processes all option.
```

解决方法1：

```
$ sudo /usr/local/NVIDIA-Nsight-Compute/ncu ./sumArraysOnGPU-timer
```
