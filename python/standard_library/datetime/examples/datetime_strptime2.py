from datetime import datetime

dt = datetime.strptime("2020-12-29 08:08:00",'%Y-%m-%d %H:%M:%S')

print("datetime: {}".format(dt))
print(datetime.date(dt).isoformat())

