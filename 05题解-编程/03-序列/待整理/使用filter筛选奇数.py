
# Detail: filter odd number
# Example: [1, ... 10] -> [1, 3, 5, 7, 9]
# Tags: filter, list
# Expertise: beginner

number_list = list(range(1, 11))
print(number_list)

filter_list = list(filter(lambda x: x % 2 != 0, number_list))
print(filter_list)  # => [1, 3, 5, 7, 9]


# list comprehension
print([x for x in range(1, 11) if x % 2 != 0])
# => [1, 3, 5, 7, 9]
