
# Detail: address match
# Example: match date -> 2022-09-01
# Tags:
# Expertise: beginner

import re

# http://sycm.taobao.com/tba/get_summary.json?dataRange=2022-0'
#        '9-01%7C2022-09-20&dateType=recent1
url_str = ('http://sycm.taobao.com/tba/get_summary.json?dataRange=2022-0'
           '9-01%7C2022-09-20&dateType=recent1')

str_list = re.findall(r'\d{4}-\d{2}-\d{2}', url_str)
print(str_list)
# => ['2022-09-01', '2022-09-20']
