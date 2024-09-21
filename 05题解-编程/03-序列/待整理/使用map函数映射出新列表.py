
# Detail: map list then List comprehension
# Example: [1, 2, 3, 4, 5]  map => [1, 4, 9, 16, 25]
#         List comprehension > 10 => [16, 25]
# Tags: map, list
# Expertise: beginner

list1 = [1, 2, 3, 4, 5]
list2 = list(map(lambda x: x**2, list1))
print(list2)  # => [1, 4, 9, 16, 25]
print([x for x in list2 if x > 10])  # => [16, 25]
