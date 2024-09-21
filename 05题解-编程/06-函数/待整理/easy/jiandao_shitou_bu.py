
from random import Random, random, uniform


def jiandao_shitou_bu():
    # 剪刀石头布
    player = int(input('输入剪刀（0），石头（1），布（2）\n'))
    computer = int(uniform(0, 3))
    player_str = get_str_from_count(player)
    computer_str = get_str_from_count(computer)

    if player == computer:
        print(f"平局，你出的是{player_str}, 电脑出的是{computer_str}")
    elif (player == 0 and computer == 2) or (
            player == 1 and computer == 0) or (player == 2 and computer == 1):
        print(f"胜利，你出的是{player_str}, 电脑出的是{computer_str}")
    else:
        print(f"输了，你出的是{player_str}, 电脑出的是{computer_str}")


def get_str_from_count(count):
    if count == 0:
        return '剪刀'
    if count == 1:
        return '石头'
    if count == 2:
        return '布'


jiandao_shitou_bu()
