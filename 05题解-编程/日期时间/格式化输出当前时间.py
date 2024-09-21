
# Detail: format datetime
# Example: 2022-09-07 18:00 星期三
# Tags: datetime, strftime
# Expertise: beginner

from datetime import datetime


now = datetime.now()
str1 = now.strftime('%Y-%m-%d %H:%M:%S')
print(f'{str1} 星期: {now.isoweekday()}')
# => 2022-09-07 00:32:59 星期: 3
