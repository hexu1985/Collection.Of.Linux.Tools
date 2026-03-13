#include <array>
#include <algorithm>
#include <opencv2/opencv.hpp>
#include <onnxruntime_cxx_api.h>

int main(int argc, char* argv[])
{
    // 模型设置和推理结果
    Ort::Env env(ORT_LOGGING_LEVEL_WARNING, "Default");

    // GPU
    Ort::SessionOptions session_options;
    OrtCUDAProviderOptions cuda_options;
    cuda_options.device_id = 0;
    cuda_options.arena_extend_strategy = 0;
    cuda_options.gpu_mem_limit = (std::size_t)2 * 1024 * 1024 * 1024;
    // cuda_options.cuda_mem_limit= (std::size_t)2 * 1024 * 1024 * 1024;
    cuda_options.cudnn_conv_algo_search =
        OrtCudnnConvAlgoSearch::OrtCudnnConvAlgoSearchHeuristic;
    // cuda_options.cudnn_conv_algo_search = OrtCudnnConvAlgoSearch::DEFAULT;
    cuda_options.do_copy_in_default_stream = 1;
    session_options.AppendExecutionProvider_CUDA(cuda_options);

    const char* model_path = "MNIST.onnx";
    Ort::Session session{env, model_path, session_options};


    // 模型输入尺寸
    static constexpr const int height = 28; //model input height
    static constexpr const int width = 28; //model input width
    Ort::Value input_tensor{nullptr};
    std::array<int64_t, 4> input_shape{1, 1, height, width}; //mode input shape NCHW = 1x1xHxW

    // 模型输出尺寸
    Ort::Value output_tensor{nullptr};
    std::array<int64_t, 2> output_shape{1, 10}; //model output shape,

    // 读取图片
    std::string file_name = "img/img0.png";
    if (argc >= 2) {
        file_name = argv[1];
    }
    cv::Mat image = cv::imread(file_name, 0);// 0为灰度图片
    if (image.empty())  //检测image有无数据，无数据 image.empty()返回 真
    {
        std::cout << "Could not open or find the image" << std::endl;
        return -1;
    }

    cv::Mat img;
    image.convertTo(img, CV_32F);

    std::array<float, width * height> input_image{};
    std::array<float, 10> results{};
    int result{0};

    // 将图像拷贝到input_image
    memcpy(input_image.data(), img.data, 1 * 28 * 28 * sizeof(float));

    // 模型输入输出张量设置
    auto memory_info = Ort::MemoryInfo::CreateCpu(OrtDeviceAllocator, OrtMemTypeDefault);
    input_tensor = Ort::Value::CreateTensor<float>(memory_info, input_image.data(), input_image.size(), input_shape.data(), input_shape.size());
    output_tensor = Ort::Value::CreateTensor<float>(memory_info, results.data(), results.size(), output_shape.data(), output_shape.size());

    // 查看模型输入输出的名称
    const char* input_names[] = {"input"};
    const char* output_names[] = {"output"};

    // 推理
    session.Run(Ort::RunOptions{nullptr}, input_names, &input_tensor, 1, output_names, &output_tensor, 1);

    // 获取结果
    result = std::distance(results.begin(), std::max_element(results.begin(), results.end()));

    std::cout << result << std::endl;

    return 0;
}
