

# Detail: find same & different element between two list
# Example: [1, 2, 3] [3, 4, 5]
# Tags: set
# Expertise: beginner

list1 = [1, 2, 3]
list2 = [3, 4, 5]

set1 = set(list1)
set2 = set(list2)

# 交集
print(set1.intersection(set2), set1 & set2)
# => {3} {3}

# 独有元素 异或
print(set1.symmetric_difference(set2), set1 ^ set2)
# => {1, 2, 4, 5} {1, 2, 4, 5}
