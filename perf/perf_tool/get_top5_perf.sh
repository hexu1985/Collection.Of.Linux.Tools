#!/bin/bash
# 检查 FlameGraph 工具是否存在
stackcollapse_script="./flamegraph/stackcollapse-perf.pl"
flamegraph_script="./flamegraph/flamegraph.pl"
if [ ! -f "$stackcollapse_script" ] || [ ! -f "$flamegraph_script" ]; then
    echo "FlameGraph 工具未找到，请确保已将其放在当前目录下的 flamegraph 文件夹中。"
    exit 1
fi

# 创建存放数据和结果的目录
mkdir -p perf_result
mkdir -p perf_fold
mkdir -p perf_svg

for i in {1..10}; do

    echo "开始第 $i 次采样..."
    timestamp=$(date +"%Y%m%d_%H%M%S")

    # 获取 CPU 使用率最高的前 5 个进程号
    processes=($(ps -eo pid --sort=-%cpu | head -n 6 | tail -n +2 | awk '{print $1}')) # 获取 PID 列表

    # 遍历进程列表
    for pid in "${processes[@]}"; do
        # 获取进程名称和 CPU 使用率
        name=$(ps -p "$pid" -o comm=)
        cpu_usage=$(ps -p "$pid" -o %cpu= | awk '{print $1}')
        process="${name}_CPU${cpu_usage//./_}" # 替换小数点为下划线以避免文件名问题

        data_file="perf_result/${process}_${timestamp}.perf.data"
        fold_file="perf_fold/${process}_${timestamp}.perf.fold"
        svg_file="perf_svg/${process}_${timestamp}.perf.svg"

        echo "Recording performance data for process $process (PID: $pid)..."
        # 使用./perf 命令记录性能数据
        ./perf record -F 99 -p "$pid" -g -o "$data_file" -- sleep 10
        #./perf record -F 99 -p "$pid" -g --call-graph dwarf -o "$data_file" -- sleep 5
        if [ $? -eq 0 ]; then
            echo "Performance data recording for process $process (PID: $pid) completed. Data saved to $data_file"

            # 生成折叠文件
            echo "Generating folded stack trace for process $process (PID: $pid)..."
            ./perf script -i "$data_file" | "$stackcollapse_script" > "$fold_file"
            if [ $? -eq 0 ]; then
                echo "Generated $fold_file"

                # 生成火焰图
                echo "Generating flame graph for process $process (PID: $pid)..."
                "$flamegraph_script" "$fold_file" > "$svg_file"
                if [ $? -eq 0 ]; then
                    echo "Flame graph for process $process (PID: $pid) generated: $svg_file"
                else
                    echo "Failed to generate $svg_file"
                fi
            else
                echo "Failed to generate $fold_file"
            fi
        else
            echo "Failed to record performance data for $process (PID: $pid)"
        fi
    
    done

    sleep 60 # 每隔 120 秒采样一次
done


    
