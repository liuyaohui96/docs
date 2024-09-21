
# Detail: filter english word & number
# Example: 'not 404 found 刘耀惠 99 深圳' => '刘耀惠 深圳'
# Tags: re, str
# Expertise: beginner

import re


str1 = 'not 404 found 刘耀惠 99 深圳'
str_list = re.findall(r'[^0-9\.a-zA-Z\s]+', str1)
print(str_list)  # => ['刘耀惠', '深圳']
print(" ".join(str_list))  # => 刘耀惠 深圳


# ===
# r'[\u4e00-\u9fa5]+'

str2 = 'not 404 found 刘耀惠 99 深圳'
str_list2 = re.findall(r'[\u4e00-\u9fa5]+', str2)
print(str_list2)  # => ['刘耀惠', '深圳']
