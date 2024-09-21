

def travel_record():
    """旅游记录，记录旅游者名称和目的地"""
    record = {}
    while True:
        name = input("What 's your name?\n")
        address = input("Where you want to go?\n")
        record[name] = address

        repeat = input('Would you want to let someone repeat again?(yes/no)\n')
        if repeat.lower() != 'yes':
            break

    for name, address in record.items():
        print(f'{name}: {address}')


travel_record()
