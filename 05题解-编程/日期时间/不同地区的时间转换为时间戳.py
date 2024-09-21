

# Detail: datetime transfer into timestap
# Example: '2015-6-1 08:10:30' 'UTC+7:00' -> 1433121030.0
# Tags: datetime, timezone, str(regular expression)
# Expertise: beginner


from datetime import datetime, timedelta, timezone
import re


def to_timestamp(dt_str, tz_str):
    d = datetime.strptime(dt_str, '%Y-%m-%d %H:%M:%S')
    re_group = re.match(r'\w+(.\d+):\d+', tz_str)
    h = int(re_group.group(1))

    # 注意，d.replace返回新的经过替换的感知型datetime对象
    d2 = d.replace(tzinfo=timezone(timedelta(hours=h)))

    return d2.timestamp()


t1 = to_timestamp('2015-6-1 08:10:30', 'UTC+7:00')
assert t1 == 1433121030.0, t1

t2 = to_timestamp('2015-5-31 16:10:30', 'UTC-09:00')
assert t2 == 1433121030.0, t2
