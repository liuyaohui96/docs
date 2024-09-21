
# Detail: sum 1 to 100
# Example:
# Tags: math, sum
# Expertise: beginner

print(sum(range(1, 101)))  # => 5050


# 递归求和
# 适合默认开始1的序列求和
def sum1(end):
    if end >= 1:
        s = end + sum1(end - 1)
    else:
        s = 0
    return s


print(sum1(100))  # => 5050
