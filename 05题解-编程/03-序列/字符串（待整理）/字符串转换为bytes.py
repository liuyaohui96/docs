
# Detail: transfer str into bytes
# Example: 'hello' '你好' => bytes
# Tags:
# Expertise: beginner

# 只允许ascii字符使用b前缀
bytes1 = b'hello'

bytes2 = '你好'.encode()
print(type(bytes1), type(bytes1))
# => <class 'bytes'> <class 'bytes'>
