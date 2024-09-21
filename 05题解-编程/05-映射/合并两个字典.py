
# Detail: merge two dict
# Example:
# Tags: dict, update
# Expertise: beginner

dict1 = {'name': 'liuyaohui'}
dict2 = {'age': 24}

dict1.update(dict2)

print(dict1)  # => {'name': 'liuyaohui', 'age': 24}

dict3 = {'name': 'liuyaohui'}
dict4 = {'age': 24}
dict3 |= dict4
print(dict3)  # => {'name': 'liuyaohui', 'age': 24}
