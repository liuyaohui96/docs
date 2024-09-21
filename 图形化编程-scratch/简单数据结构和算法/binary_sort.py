
# binary_search must be sorted
def binary_search(list, target):
    low = 0
    high = len(list) -1
    while low <= high:
        # get the integer of mid by //
        mid = (low + high)//2
        if target == list[mid]:
            return mid
        if target > list[mid]:
            low = mid + 1
        if target < list[mid]:
            high = mid - 1
    

def select_sort(list):
    for i in range(0, len(list)):
        min = i
        for j in range(i+1, len(list)):
            if(list[j] < list[min]):
                min = j
        if min != i:
            list[min], list[i] = list[i], list[min]

list = [1,7,9,5,3]
print(list)
select_sort(list)
print(list)
print(binary_search(list, 5))
print(binary_search(list, 7))