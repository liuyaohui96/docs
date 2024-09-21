
# Detail: sorted by key
# Example: [{'name':'a','age':20},{'name':'b','age':30},{'name':'c','age':25}]
# Tags: dict, sort
# Expertise: beginner

d = [{'name': 'a', 'age': 20}, {'name': 'b', 'age': 30},
     {'name': 'c', 'age': 25}]
print(sorted(d, key=lambda x: x['age'], reverse=True))
# => [{'name': 'b', 'age': 30}, {'name': 'c', 'age': 25}, {'name': 'a', 'age': 20


# 另一个例子
# 先按年龄，再按名称
d1 = [{'name': 'd', 'age': 20}, {'name': 'b', 'age': 30},
      {'name': 'c', 'age': 25},  {'name': 'a', 'age': 20}]

print(sorted(d1, key=lambda x: (x['age'], x['name'])))
# => [{'name': 'a', 'age': 20}, {'name': 'd', 'age': 20},
# {'name': 'c', 'age': 25}, {'name': 'b', 'age': 30}]
