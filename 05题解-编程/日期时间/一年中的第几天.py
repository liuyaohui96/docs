
# Detail: the day of year
# Example: 2022/2/20 => 51
# Tags: math，datetime
# Expertise: beginner

from datetime import date


def count_day():
    year = int(input('year:'))
    month = int(input('month:'))
    day = int(input('day:'))

    date1 = date(year, month, day)
    date2 = date(year, 1, 1)
    return (date1 - date2).days + 1


print(count_day())  # => 51
