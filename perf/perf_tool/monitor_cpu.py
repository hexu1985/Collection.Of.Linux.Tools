# -*- coding: utf-8 -*-

import psutil
import csv
import time
import matplotlib.pyplot as plt
import os
from datetime import datetime

# 定义要监控的线程列表
process_names = [
    "syzk-daemon",
    "syzk-dds2file",
    "syzk-dds2mp4",
    "syzk-rte-dev",
    "syzk-pdriver",
    "syzk-lidar",
    "syzk-radar",
    "syzk-fusion",
    "syzk-camera",
    "syzk-lidar-ai",
    "syzk-boundary",
    "syzk-lidar-seg",
    "syzk-csvlog",
    "syzk-297",
    "syzk-task-mgt",
    "syzk-log",
    "syzk-local-plan",
    "syzk-dignose",
    "syzk-server-map",
    "syzk-safe",
    "syzk-broadcast",
    "syzk-faultdia",
    "syzk-vcutrans",
    "syzk-netcloud",
    "syzk-video",
    "syzk-upgrade",
    "syzk-rte-file",
    "syzk-control"
]

# 存储每个进程的 CPU 利用率历史数据
cpu_usage_history = {name: [] for name in process_names}
# 存储时间戳
timestamps = []

# 监控时长（秒）
monitoring_duration = 60
# 监控间隔（秒）
interval = 1

# 创建输出文件夹
output_folder = "output"
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# 开始监控
start_time = time.time()
while time.time() - start_time < monitoring_duration:
    current_cpu_usage = []
    for name in process_names:
        total_cpu_usage = 0
        count = 0
        for proc in psutil.process_iter(['name']):
            if proc.info['name'] == name:
                try:
                    cpu_percent = proc.cpu_percent(interval=0)
                    total_cpu_usage += cpu_percent
                    count += 1
                except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
                    pass
        if count > 0:
            avg_cpu_usage = total_cpu_usage / count
        else:
            avg_cpu_usage = 0
        current_cpu_usage.append((name, avg_cpu_usage))
        cpu_usage_history[name].append(avg_cpu_usage)

    # 按 CPU 利用率排序
    current_cpu_usage.sort(key=lambda x: x[1], reverse=True)

    # 打印当前排序后的 CPU 利用率
    print("Time: {}".format(time.strftime('%Y-%m-%d %H:%M:%S')))
    for name, usage in current_cpu_usage:
        print("{}: {:.2f}%".format(name, usage))
    print("-" * 50)

    timestamps.append(time.time())
    time.sleep(interval)

# 去掉第一次采集为 0 的数据
for name in process_names:
    if cpu_usage_history[name] and cpu_usage_history[name][0] == 0:
        cpu_usage_history[name] = cpu_usage_history[name][1:]
timestamps = timestamps[1:] if timestamps and len(cpu_usage_history[process_names[0]]) < len(timestamps) else timestamps

# 生成时间戳字符串
timestamp_str = datetime.now().strftime("%Y%m%d_%H%M%S")

# 将数据保存到 CSV 文件
csv_filename = os.path.join(output_folder, f"cpu_usage_{timestamp_str}.csv")
with open(csv_filename, 'w', newline='') as csvfile:
    fieldnames = ['Timestamp'] + process_names
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    # 写入表头
    writer.writeheader()

    # 写入数据行
    for i, timestamp in enumerate(timestamps):
        row = {'Timestamp': timestamp}
        for name in process_names:
            row[name] = cpu_usage_history[name][i]
        writer.writerow(row)

print(f"CPU 利用率数据已保存到 {csv_filename}")

# 生成曲线图
plt.figure(figsize=(12, 8))
for name, usage_list in cpu_usage_history.items():
    plt.plot(timestamps, usage_list, label=name)

plt.xlabel('Time')
plt.ylabel('CPU Usage (%)')
plt.title('CPU Usage of Monitored Processes')
# 调整图例位置到右上角，避免遮挡曲线图
plt.legend(loc='upper right')
plt.grid(True)
plt.tight_layout()

# 保存曲线图为图片
image_filename = os.path.join(output_folder, f"cpu_usage_plot_{timestamp_str}.png")
plt.savefig(image_filename)
print(f"CPU 利用率曲线图已保存到 {image_filename}")

# 计算每个进程的 CPU 利用率平均值
avg_cpu_usage = {name: sum(usage_list) / len(usage_list) if usage_list else 0 for name, usage_list in cpu_usage_history.items()}

# 对平均值进行排序
sorted_avg_cpu_usage = sorted(avg_cpu_usage.items(), key=lambda x: x[1], reverse=True)
sorted_names = [name for name, _ in sorted_avg_cpu_usage]
sorted_values = [usage for _, usage in sorted_avg_cpu_usage]

# 生成 CPU 利用率平均值的柱状图
plt.figure(figsize=(12, 8))
bars = plt.bar(sorted_names, sorted_values)
plt.xlabel('Processes')
plt.ylabel('Average CPU Usage (%)')
plt.title('Average CPU Usage of Monitored Processes')
plt.xticks(rotation=90)
plt.tight_layout()

# 在每个柱子上显示 CPU 利用率值
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width() / 2, height, f'{height:.2f}%', ha='center', va='bottom')

# 保存柱状图为图片
bar_image_filename = os.path.join(output_folder, f"avg_cpu_usage_bar_plot_{timestamp_str}.png")
plt.savefig(bar_image_filename)
print(f"CPU 利用率平均值柱状图已保存到 {bar_image_filename}")

