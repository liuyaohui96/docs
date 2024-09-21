
# function 应用
# 制造车辆，包括车辆制造商manufacturer，型号model，还有其他设置
def make_car(manufacturer, model, **options):
    car = {
        'manufacturer': manufacturer,
        'model': model,
    }

    for option, value in options.items():
        car[option] = value

    return car


my_car = make_car('fengtian', 'x', color='red', year=1991)
print(my_car)
# => {'manufacturer': 'fengtian', 'model': 'x', 'color': 'red', 'year': 1991}
