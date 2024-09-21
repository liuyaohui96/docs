import pygame
import time

# 初始化 pygame
pygame.init()

# 定义屏幕的宽度和高度
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# 定义白色的颜色值
WHITE = (255, 255, 255)

# 创建屏幕，设置大小
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
# 设置屏幕标题
pygame.display.set_caption("四季更替")

# 加载四季的图片
spring_image = pygame.image.load("./static/0001/春天.png")
summer_image = pygame.image.load("./static/0001/夏天.png")
autumn_image = pygame.image.load("./static/0001/秋天.png")
winter_image = pygame.image.load("./static/0001/冬天.png")

# 主循环标志
running = True
# 初始季节设置为春天
current_season = "spring"  

while running:  # 主循环，只要 running 为 True 就一直运行
    for event in pygame.event.get():  # 遍历获取所有的事件
        if event.type == pygame.QUIT:  # 如果事件类型是退出
            running = False  # 设置 running 为 False，结束主循环

    screen.fill(WHITE)  # 用白色填充屏幕，清除之前的显示内容

    # 根据当前季节显示相应的图片，并切换到下一个季节
    if current_season == "spring":  # 如果当前季节是春天
        screen.blit(spring_image, (0, 0))  # 在屏幕左上角显示春天的图片
        current_season = "summer"  # 将当前季节切换为夏天
    elif current_season == "summer":  # 如果当前季节是夏天
        screen.blit(summer_image, (0, 0))  # 在屏幕左上角显示夏天的图片
        current_season = "autumn"  # 将当前季节切换为秋天
    elif current_season == "autumn":  # 如果当前季节是秋天
        screen.blit(autumn_image, (0, 0))  # 在屏幕左上角显示秋天的图片
        current_season = "winter"  # 将当前季节切换为冬天
    elif current_season == "winter":  # 如果当前季节是冬天
        screen.blit(winter_image, (0, 0))  # 在屏幕左上角显示冬天的图片
        current_season = "spring"  # 将当前季节切换回春天

    pygame.display.flip()  # 更新整个显示
    time.sleep(5)  # 暂停 5 秒

# 退出 pygame
pygame.quit()