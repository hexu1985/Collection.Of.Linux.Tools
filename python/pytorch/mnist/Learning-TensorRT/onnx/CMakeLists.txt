# 项目名称，随便写
PROJECT(onnx_eval)
# cmake版本，根据自己的写
cmake_minimum_required(VERSION 3.10)

# find required opencv
find_package(OpenCV REQUIRED)
# directory of opencv headers
include_directories(${OpenCV_INCLUDE_DIRS})

# 根据自己的onnxruntime存放路径编写
set(ONNXRUNTIME_ROOT_PATH /usr/local/onnxruntime)
set(ONNXRUNTIME_INCLUDE_DIRS ${ONNXRUNTIME_ROOT_PATH}/include)
set(ONNXRUNTIME_LIB ${ONNXRUNTIME_ROOT_PATH}/lib/libonnxruntime.so)

# 需要编译的cpp文件所在路径，前面是编译好的可执行文件名
add_executable(onnx_eval onnx_eval.cpp)

# directory of opencv library
link_directories(${OpenCV_LIBRARY_DIRS})
# opencv libraries
target_link_libraries(onnx_eval ${OpenCV_LIBS})

include_directories(${ONNXRUNTIME_INCLUDE_DIRS})
target_link_libraries(onnx_eval ${ONNXRUNTIME_LIB})


# 需要编译的cpp文件所在路径，前面是编译好的可执行文件名
add_executable(onnx_eval_gpu onnx_eval_gpu.cpp)

# directory of opencv library
link_directories(${OpenCV_LIBRARY_DIRS})
# opencv libraries
target_link_libraries(onnx_eval_gpu ${OpenCV_LIBS})

include_directories(${ONNXRUNTIME_INCLUDE_DIRS})
target_link_libraries(onnx_eval_gpu ${ONNXRUNTIME_LIB})

