
def sum_even(end):
    if end < 0:
        return

    i = 0
    result = 0
    while i <= end:
        result += i
        i += 2
    return result


print(sum_even(100))  # => 2550
