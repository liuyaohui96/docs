
def select_sort(list):
    for i in range(0, len(list)):
        min = i
        for j in range(i+1, len(list)):
            if list[j] < list[min]:
                min = j
        if min != i:
            list[min], list[i] = list[i], list[min]


list = [1,7,9,5,3]
print(list)
select_sort(list)
print(list)