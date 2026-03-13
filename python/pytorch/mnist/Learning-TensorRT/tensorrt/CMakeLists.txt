cmake_minimum_required(VERSION 3.10)
project(MNIST LANGUAGES CXX CUDA)

list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake")
find_package(TensorRT REQUIRED)
find_package(OpenCV REQUIRED)

add_executable(onnx2tensorrt
    onnx2tensorrt.cu
)
target_link_libraries(onnx2tensorrt PUBLIC ${TensorRT_LIBRARIES})
target_include_directories(onnx2tensorrt PUBLIC ${TensorRT_INCLUDE_DIRS})

add_executable(tensorrt_eval
    tensorrt_eval.cu
)
target_link_libraries(tensorrt_eval PUBLIC ${TensorRT_LIBRARIES} ${OpenCV_LIBS})
target_include_directories(tensorrt_eval PUBLIC ${TensorRT_INCLUDE_DIRS} ${OpenCV_INCLUDE_DIRS})
