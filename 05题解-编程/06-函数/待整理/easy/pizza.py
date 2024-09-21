
def pizza():
    """循环pizza配料，直到quit退出"""
    pizza_list = []
    while True:
        topping = input('What topping would you want to add in pizze? \n')
        if(topping.lower() == 'quit'):
            break
        else:
            pizza_list.append(topping)

    print('\nYour pizza topping as follow:')
    for topping in pizza_list:
        print(f'{topping}')


pizza()
