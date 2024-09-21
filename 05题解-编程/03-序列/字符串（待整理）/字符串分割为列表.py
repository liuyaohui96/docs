
# Detail: string split into two string
# Example:
# Tags: string, split
# Expertise: beginner

import re


str1 = 'info:liuyaohui 22 shenzhen'
str2 = re.split(r':|\s', str1)
print(str2)  # => ['info', 'liuyaohui', '22', 'shenzhen']
