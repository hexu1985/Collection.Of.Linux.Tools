#!/bin/bash

# 定义要监控的进程列表
processes=(
    "syzk-daemon"
    "syzk-dds2file"
    "syzk-dds2mp4"
    "syzk-rte-dev"
    "syzk-pdriver"
    "syzk-lidar"
    "syzk-radar"
    "syzk-fusion"
    "syzk-camera"
    "syzk-lidar-ai"
    "syzk-boundary"
    "syzk-lidar-seg"
    "syzk-csvlog"
    "syzk-297"
    "syzk-task-mgt"
    "syzk-log"
    "syzk-local-plan"
    "syzk-dignose"
    "syzk-server-map"
    "syzk-safe"
    "syzk-broadcast"
    "syzk-faultdia"
    "syzk-vcutrans"
    "syzk-netcloud"
    "syzk-video"
    "syzk-upgrade"
    "syzk-rte-file"
    "syzk-control"
)

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

# 遍历进程列表
for process in "${processes[@]}"; do
    # 使用 pidof 获取进程的 PID，可能有多个
    pids=$(pidof "$process")
    if [ -n "$pids" ]; then
        for pid in $pids; do
            data_file="perf_result/${process}_${pid}.perf.data"
            fold_file="perf_fold/${process}_${pid}.perf.fold"
            svg_file="perf_svg/${process}_${pid}.perf.svg"

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
    else
        echo "Process $process not found."
    fi
done
    
