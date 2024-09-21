

# Detail: Fibonacci sequence
# Example: 1, 1, 2, 3, 5, 8
# Tags: List, Math
# Expertise: beginner

def fibonacci(n):
    a, b = 0, 1
    list = []
    for i in range(n):
        a, b = b, a+b
        list.append(a)
    print(list)


fibonacci(10)  # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
