
# Detail: 删除列表重复元素
# Example: ['a','a','b','c','d','c'] => ['a', 'b', 'c', 'd']
# Expertise: beginner

list1 = ['a', 'a', 'b', 'c', 'd', 'c']
list2 = list(set(list1))
print(sorted(list2))  # => ['a', 'b', 'c', 'd']


# 遍历
list3 = ['a', 'a', 'b', 'c', 'd', 'c']
list4 = []
for item in list3:
    if item not in list4:
        list4.append(item)

print(list4)  # = > ['a', 'b', 'c', 'd']
