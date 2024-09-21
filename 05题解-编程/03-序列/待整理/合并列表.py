
# Detail: merge list
# Example: [1, 5, 7, 9] [2, 2, 6, 8] => [1, 2, 2, 5, 6, 7, 8, 9]
# Tags: list
# Expertise: beginner

list1 = [1, 5, 7, 9]
list2 = [2, 2, 6, 8]
list1 += list2
list1.sort()
print(list1)
# => [1, 2, 2, 5, 6, 7, 8, 9]

# extend()
list3 = [1, 5, 7, 9]
list4 = [2, 2, 6, 8]
list3.extend(list4)
list3.sort()
print(list3)
# => [1, 2, 2, 5, 6, 7, 8, 9]
