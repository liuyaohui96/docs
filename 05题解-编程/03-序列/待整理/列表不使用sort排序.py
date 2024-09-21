
# Detail: sort list, not use sort method
# Example: [2, 3, 5, 4, 9, 6] => [2, 3, 4, 5, 6, 9]
# Tags: list, sort
# Expertise: beginner

list1 = [2, 3, 5, 4, 9, 6]
list2 = []


def sort_list(l):
    min_value = min(l)
    list2.append(min_value)
    l.remove(min_value)

    if len(l) > 0:
        sort_list(l)


sort_list(list1)
print(list2)  # => [2, 3, 4, 5, 6, 9]
