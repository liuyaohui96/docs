
import json

file_name = 'python_how_to_code/easy/file/json/username.json'


def write_new_username():
    username = input("What's your name?\n")
    # 添加username到file
    with open(file_name, 'w') as file:
        json.dump(username, file)
    print(f'{username}, we already remembered your username')


try:
    with open(file_name) as file:
        username = json.load(file)
        correct = input(f'Are you {username}(y/n)\n')
        if correct.lower() == 'y':
            print(f'Welcome back, {username}')
        else:
            write_new_username()
# 如果不存在文件，则要求用户输入
except FileNotFoundError:
    write_new_username()
