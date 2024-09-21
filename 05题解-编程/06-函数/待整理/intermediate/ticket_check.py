
# 彩票分析
# 可能性：[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# get_win_ticket => [1, 2, 3, 4] 返回4位随机元素不一样的list
# get_ticket => [1, 2, 3, 4] 返回4位随机元素不一样的list
# check_ticket => 检测win_ticket 和ticket是否一致
# max_check = 1_000_000 最大检测次数


from random import choice


class Ticket:
    """彩票分析"""

    def __init__(self, possibilities, ticket_len=4, max_check=1_000_000):
        self.possiblities = possibilities
        self.tiket_len = ticket_len
        self.max_check = max_check

    def analyze_ticket(self):
        win_ticket = self.get_ticket()
        ticket = self.get_ticket()
        check_count = 0
        while True:
            # success
            if self.check_ticket(ticket, win_ticket):
                print(f'Tried {check_count} times, successful finally')
                print(f'Your finally ticket is {ticket}')
                print(f'Winning ticket is {win_ticket}')
                return
            check_count += 1
            if check_count >= self.max_check:
                print(f'Tried {check_count} times, failed finally')
                print(f'Your finally ticket is {ticket}')
                print(f'Winning ticket is {win_ticket}')
                return
            # update ticket
            ticket = self.get_ticket()

    def get_ticket(self):
        ticket = []
        # get a ticket item from random choice
        # from possiblities list
        while len(ticket) < self.tiket_len:
            ticket_item = choice(self.possiblities)
            if ticket_item not in ticket:
                ticket.append(ticket_item)
        return ticket

    def check_ticket(self, ticket, win_ticket):
        for item in ticket:
            if item not in win_ticket:
                return False

        return True


possiblities = [x for x in range(1, 11)]
ticket = Ticket(possiblities)
ticket.analyze_ticket()
