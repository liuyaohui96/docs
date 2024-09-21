
def personal_info():
    # variable input & output
    # collect name & age & gender & height & weight
    name = input("What's your name?\n")
    age = int(input('How old are you?\n'))
    gender = input("What's your gender?\n")
    height = float(input("What's your height?(m)\n"))
    weight = float(input("What's your weight(kg)\n"))

    print(f'name: {name}\n'
          f'age: {age}\n'
          f'gender: {gender}\n'
          f'height: {height}m\n'
          f'weight: {weight}kg')


personal_info()
