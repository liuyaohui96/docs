
# Detail: queue
# Example:
# Tags: data_structure
# Expertise: beginner


from collections import deque

# 在列表末尾添加和删除元素非常快，
# 但在列表开头插入或移除元素却很慢（因为所有其他元素都必须移动一位）

queue = deque([1, 2, 3])
queue.append(4)
print(queue)  # => deque([1, 2, 3, 4])
queue.popleft()
print(queue)  # => deque([2, 3, 4])
