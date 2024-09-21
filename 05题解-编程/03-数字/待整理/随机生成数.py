

# Detail: random create int, float, [0, 1]
# Example:
# Tags: random, math
# Expertise: beginner

from random import choice, random, randrange


# 生成随机0到1之间的小数
print(random())

# 输出1到10的整数
list1 = []
for i in range(10):
    list1.append(choice(range(1, 11)))
print(list1)

list2 = []
for i in range(10):
    list2.append(randrange(1, 11))
print(list2)


# 随机生成1-10的小数
list3 = []
for i in range(10):
    list3.append(11 * random())
print(list3)
