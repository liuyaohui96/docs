
file_name = 'python_how_to_code/easy/file/txt/learning_python.txt'

print('--- Reading entire File')
with open(file_name) as file:
    print(file.read())

print('\n--- Looping file:')
with open(file_name) as file:
    for line in file:
        # 移除每一行右端的空白符，这里是换行符
        # print会自动换行
        print(line.rstrip())

print('\n--- Storing file in list by readline():')
with open(file_name) as file:
    lines = file.readlines()
for line in lines:
    print(line.rstrip())
