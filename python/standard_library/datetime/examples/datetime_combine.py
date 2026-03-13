#!/usr/bin/env python3

from datetime import datetime, time

# 获取当前日期和时间
now = datetime.now()

# 创建一个时间对象
t = time(hour=12, minute=30, second=0)

# 拼接日期和时间
result = datetime.combine(now.date(), t)

# 输出结果
print(result)

