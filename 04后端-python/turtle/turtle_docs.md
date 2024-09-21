


# turtle_docs



## turtle基础

`turtle`模块，可以通过编程来控制一个小海龟在屏幕上绘制各种图形，常用方法有：
1. 基本使用
    ```python
    # 首先，需要导入turtle模块
    import turtle

    # 然后创建一个海龟对象
    t = turtle.Turtle()

    # 操作省略


    # 保持图形窗口显示
    turtle.done()
    ```


<br>
<br>
<br>

`turtle`模块方法：
1. 画笔控制相关的方法：`penup()`、`pendown()`、`pensize()`、`pencolor()`、`isdown()`
2. 移动相关的方法：`forward()`、`backward()`、`right()`、`left()`、`goto()`、`home()`
3. 图形绘制相关的方法：`circle()`、`dot()`、`square()`、`triangle()`
4. 填充相关的方法：`begin_fill()`、`end_fill()`、`filling()`
5. 位置距离相关的方法：`position()`、`xcor()`、`ycor()`、`heading()`、`distance()`
6. 速度控制相关的方法：`speed()`
7. 显示控制相关的方法：`showturtle()`、`hideturtle()`、`isvisible()`
8. 清空与重置相关的方法：`clear()`、`reset()`
9. 其他相关的方法：`write()` 


```python
# === 画笔控制
# 用途：抬起画笔，移动时不绘制线条
# 参数：无
# 返回值：无
def penup():-> None
    pass

# 用途：落下画笔，移动时绘制线条
# 参数：无
# 返回值：无
def pendown():-> None
    pass

# 用途：设置画笔的宽度
# 参数：
# - size：画笔的宽度值
# 返回值：无
def pensize(size):-> None
    pass

# 用途：设置画笔的颜色
# 参数：
# - color：颜色值，可以是字符串表示的颜色名称，也可以是 RGB 值
# 返回值：无
def pencolor(color):-> None
    pass

# 用途：判断画笔是否落下
# 参数：无
# 返回值：True 表示落下，False 表示抬起
def isdown():-> bool
    pass
# === end 画笔控制



# === 移动相关
# 用途：使海龟向前移动指定的距离
# 参数：
# - distance：要移动的距离
# 返回值：无
def forward(distance):-> None
    pass

# 用途：使海龟向后移动指定的距离
# 参数：
# - distance：要移动的距离
# 返回值：无
def backward(distance):-> None
    pass

# 用途：使海龟向右旋转指定的角度
# 参数：
# - angle：要旋转的角度
# 返回值：无
def right(angle):-> None
    pass

# 用途：使海龟向左旋转指定的角度
# 参数：
# - angle：要旋转的角度
# 返回值：无
def left(angle):-> None
    pass

# 用途：将海龟移动到指定的坐标
# 参数：
# - x：横坐标
# - y：纵坐标
# 返回值：无
def goto(x, y):-> None
    pass

# 用途：使海龟回到初始位置
# 参数：无
# 返回值：无
def home():-> None
    pass
# === end 移动相关



# === 图形绘制相关
# 用途：绘制指定半径的圆
# 参数：
# - radius：圆的半径
# - extent（可选）：绘制的角度，默认为 360 度
# - steps（可选）：用于绘制圆弧的线段数量
# 返回值：无
def circle(radius, extent=None, steps=None):-> None
    pass

# 用途：绘制一个点
# 参数：
# - size（可选）：点的大小
# - color（可选）：点的颜色
# 返回值：无
def dot(size=None, color=None):-> None
    pass

# 用途：绘制一个正方形
# 参数：
# - side_length：正方形的边长
# 返回值：无
def square(side_length):-> None
    pass

# 用途：绘制一个三角形
# 参数：
# - side_length：三角形的边长
# 返回值：无
def triangle(side_length):-> None
    pass
# === end 图形绘制相关



# === 填充相关
# 用途：开始填充图形
# 参数：无
# 返回值：无
def begin_fill():-> None
    pass

# 用途：结束填充图形
# 参数：无
# 返回值：无
def end_fill():-> None
    pass

# 用途：检查是否正在填充
# 参数：无
# 返回值：True 表示正在填充，False 表示未填充
def filling():-> bool
    pass
# === end 填充相关



# === 位置距离相关
# 用途：获取海龟的当前位置
# 参数：无
# 返回值：一个包含 x 和 y 坐标的元组
def position():-> tuple
    pass

# 用途：获取海龟的 x 坐标
# 参数：无
# 返回值：海龟的 x 坐标
def xcor():-> float
    pass

# 用途：获取海龟的 y 坐标
# 参数：无
# 返回值：海龟的 y 坐标
def ycor():-> float
    pass

# 用途：获取海龟当前的朝向角度
# 参数：无
# 返回值：海龟的朝向角度
def heading():-> float
    pass

# 用途：计算海龟与指定点之间的距离
# 参数：
# - x：指定点的 x 坐标
# - y：指定点的 y 坐标
# 返回值：海龟与指定点之间的距离
def distance(x, y):-> float
    pass
# === end 位置距离相关



# === 速度控制
# 用途：设置海龟的移动速度
# 参数：
# - speed：速度值，范围是 0 - 10 之间的整数
# 返回值：无
def speed(speed):-> None
    pass
# === end 速度控制



# === 显示控制
# 用途：显示海龟
# 参数：无
# 返回值：无
def showturtle():-> None
    pass

# 用途：隐藏海龟
# 参数：无
# 返回值：无
def hideturtle():-> None
    pass

# 用途：检查海龟是否可见
# 参数：无
# 返回值：True 表示可见，False 表示不可见
def isvisible():-> bool
    pass
# === end 显示控制



# === 清空与重置相关
# 用途：清空画布并保留海龟的状态
# 参数：无
# 返回值：无
def clear():-> None
    pass

# 用途：清空画布并将海龟的状态重置为初始值
# 参数：无
# 返回值：无
def reset():-> None
    pass
# === end 清空与重置相关



# === 其他相关
# 用途：在当前位置书写文本
# 参数：
# - text：要书写的文本
# - align（可选）：文本的对齐方式，可选值为 "left"、"center"、"right"
# - font（可选）：字体的属性，如 ("Arial", 10, "normal")
# 返回值：无
def write(text, align="left", font=None):-> None
    pass
# === end 其他相关
```

