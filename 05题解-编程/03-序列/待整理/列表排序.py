

# Detail: list sort
# Example:
# Tags: list, sort
# Expertise: beginner

list1 = ['ab', 'a', 'abcde', 'abcd']
print(sorted(list1, key=lambda x: len(x)))
# => ['a', 'ab', 'abcd', 'abcde']
