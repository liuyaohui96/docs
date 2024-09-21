# ===
# Detail: numbers to list
# Example：795843 => [7,9,5,8,4,3]
# Tags: Array, Number, Math
# Expertise: intermediate
# ===

# Solution1: list 推导
def numbers_to_digits(nums):
    return [int(x) for x in str(nums)]


# Solution2: procedure programming
def numbers_to_digits2(nums):
    result = []
    while nums >= 1:
        result.insert(0, nums % 10)
        nums //= 10
    return result


# test
print(numbers_to_digits(795843))  # => [7, 9, 5, 8, 4, 3]
print(numbers_to_digits2(795843))  # => [7, 9, 5, 8, 4, 3]
