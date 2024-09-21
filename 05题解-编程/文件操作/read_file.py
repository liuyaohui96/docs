
with open('./test/1.txt') as file_obj:
    print(file_obj.read())


with open('./test/1.txt') as file_obj:
    lines = file_obj.readlines()
    for line in lines:
        print(line)


with open('./test/1.txt') as file_obj:
    for line in file_obj:
        print(line)
