nvcc -o single-thread-vector-add vector-add.cu -run
# nvcc  -arch=sm_70 -O3 -Xcompiler="-march=native -fopenmp" vector-add.cu  -o baseline
nsys profile --stats=true ./single-thread-vector-add

# nsys profile --stats=true --force-overwrite=true  -o baseline-report ./single-thread-vector-add
