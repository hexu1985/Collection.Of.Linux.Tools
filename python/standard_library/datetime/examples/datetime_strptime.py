from datetime import datetime

datestr = "2012-01-02"

date = datetime.strptime(datestr, "%Y-%m-%d")

print("date: {}".format(date))
print("type of date: ", type(date))
print(datetime.date(date).isoformat())

