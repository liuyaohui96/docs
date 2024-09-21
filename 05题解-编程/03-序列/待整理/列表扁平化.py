
# Detail: flat list
# Example: [[1, 2], [3, 4], [5, 6]] => [1, 2, 3, 4]
# Tags:
# Expertise: beginner

list1 = [[1, 2], [3, 4], [5, 6]]
list2 = [y for x in list1 for y in x]
print(list2)  # => [1, 2, 3, 4, 5, 6]
