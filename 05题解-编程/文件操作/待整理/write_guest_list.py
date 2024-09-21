
file_name = 'python_how_to_code/easy/file/txt/guest_list.txt'

while True:
    name = input("What's your name?(input quit to exit)\n")
    if name.lower() == 'quit':
        break
    with open(file_name, 'a') as file:
        file.write(f'{name}\n')
    print(f'Hi, {name}, you have been added to the guest list')
