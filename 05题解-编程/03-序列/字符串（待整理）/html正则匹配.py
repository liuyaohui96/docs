
# Detail: html match
# Example: <div>liuyaohui</div> -> liuyaohui
# Tags:
# Expertise: beginner

import re

str1 = '<div>liuyaohui</div>'
match_groups = re.match(r'<\w+>(\w+)</\w+>', str1)
print(match_groups.group(1))  # => liuyaohui


# findall
str_list = re.findall(r'<\w+>(\w+)</\w+>', str1)
print(str_list)  # => ['liuyaohui']


# html标签是否匹配
str2 = '<html><div>liuyaohui</div></html>'
match_group = re.match(r'<(\w+)><(\w+)>.*</\2></\1>', str2)

if match_group:
    print(f'{match_group.group()} 符合html标签格式')
else:
    print(f'{str2} 不符合html标签格式')
