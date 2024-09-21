
# 需求分析：
# house:
# house_type 户型
# area 总面积
# free_area 剩余面积
# item_list 家具列表

# __init__
# __str__
# add_item

# house_item:
# name
# area

# __init__
# __str__

# 将table桌子 1平方米 char 0.5平方米 添加到house中
# 打印房子时候，输出户型，总面积，剩余面积，家具名称列表

class House:
    def __init__(self, house_type, area):
        self.house_type = house_type
        self.area = area
        self.free_area = area
        self.house_item = []

    def add_item(self, house_item):
        if self.free_area < house_item.area:
            print(
                f'The free area of house is not enouth to place {house_item.name}')
            return
        self.house_item.append(house_item)
        self.free_area -= house_item.area

    def __str__(self):
        return (f'House type: {self.house_type}\n'
                f'Area: {self.area} m^2\n'
                f'Free area: {self.free_area} m^2\n'
                f'House_item: {[x.name for x in self.house_item]}\n')


class House_item:
    def __init__(self, name, area):
        self.name = name
        self.area = area

    def __str__(self):
        return f'{self.name}'


house = House('三房一厅', 20)
print(house)

char = House_item('椅子', .5)
table = House_item('桌子', 1)
house.add_item(char)
house.add_item(table)


print(house)
