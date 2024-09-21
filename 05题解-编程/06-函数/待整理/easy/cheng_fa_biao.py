
def cheng_fa_biao():
    # 1*1=1
    # 1*2=2 2*2=4
    # ...
    # 1*9=9 2*9=18

    end = 1
    while end <= 9:
        result = ''
        start = 1
        while start <= end:
            result += f'{start}*{end}={start*end} '
            start += 1
        print(result)
        end += 1


cheng_fa_biao()
