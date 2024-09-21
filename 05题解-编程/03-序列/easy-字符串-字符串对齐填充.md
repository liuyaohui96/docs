

# 字符串对齐填充


## 题目描述
题目给出了部分用于生成不同厚度的 HackerRank 标志的代码，要求用rjust、ljust或center来替换代码中的空白部分，以实现正确生成 HackerRank 标志，需要输入一个整数n，代表标志的高度

例子：
    H
   HHH
  HHHHH
 HHHHHHH
HHHHHHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHHHHHHHHHHHHHHHHHHHHHH
  HHHHHHHHHHHHHHHHHHHHHHHHH
  HHHHHHHHHHHHHHHHHHHHHHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
  HHHHH               HHHHH
                    HHHHHHHHH
                     HHHHHHH
                      HHHHH
                       HHH
                        H

难度：easy


通过率：

## 解题思路
以下是这段代码的解题思路：

1. 首先从用户输入获取一个奇数的厚度值`thickness`，并定义字符`c`为`'H'`。
2. 然后通过五个不同的部分来构建 HackerRank 标志图案，分别是顶部锥形、顶部柱子、中间带子、底部柱子和底部锥形。
3. **顶部锥形（Top Cone）**：
   - 使用一个循环遍历从 0 到`thickness - 1`的范围。
   - 在每次循环中，先将`i`个`'H'`组成的字符串进行右对齐，宽度为`thickness - 1`，这使得随着循环的进行，字符串逐渐向右移动。
   - 然后加上一个单独的`'H'`字符。
   - 接着将`i`个`'H'`组成的字符串进行左对齐，宽度同样为`thickness - 1`。这样就形成了一个逐渐变大的三角形形状。
4. **顶部柱子（Top Pillars）**：
   - 循环`thickness + 1`次。
   - 在每次循环中，将`thickness`个`'H'`组成的字符串进行两次居中对齐，宽度分别为`thickness * 2`和`thickness * 6`，这就创建了两个宽度不同的柱子形状。
5. **中间带子（Middle Belt）**：
   - 循环`(thickness + 1) // 2`次。
   - 在每次循环中，将`thickness * 5`个`'H'`组成的字符串进行居中对齐，宽度为`thickness * 6`，形成了中间的带子部分。
6. **底部柱子（Bottom Pillars）**：
   - 与顶部柱子类似，循环`thickness + 1`次。
   - 在每次循环中，将`thickness`个`'H'`组成的字符串进行两次居中对齐，宽度分别为`thickness * 2`和`thickness * 6`。
7. **底部锥形（Bottom Cone）**：
   - 循环遍历从 0 到`thickness - 1`的范围。
   - 在每次循环中，先将`(thickness - i - 1)`个`'H'`组成的字符串进行右对齐，宽度为`thickness`。
   - 加上一个单独的`'H'`字符。
   - 再将`(thickness - i - 1)`个`'H'`组成的字符串进行左对齐，宽度为`thickness`。
   - 最后将整体进行右对齐，宽度为`thickness * 6`，形成了与顶部锥形对称的底部锥形。



```python

thickness = int(input("输入厚度"))  # 从用户输入获取厚度值，这个值必须是奇数
c = 'H'

#Top Cone
# 循环遍历从 0 到 thickness-1 的范围，生成上部分的锥形图案
for i in range(thickness):
    # (c*i).rjust(thickness-1)：将 i 个 'H' 组成的字符串进行右对齐，宽度为 thickness-1
    # c：单个字符 'H'
    # (c*i).ljust(thickness-1)：将 i 个 'H' 组成的字符串进行左对齐，宽度为 thickness-1
    print((c*i).rjust(thickness-1)+c+(c*i).ljust(thickness-1))

#Top Pillars
# 循环遍历 thickness+1 次，生成上方的柱子图案
for i in range(thickness+1):
    # (c*thickness).center(thickness*2)：将 thickness 个 'H' 组成的字符串居中对齐，宽度为 thickness*2
    # (c*thickness).center(thickness*6)：将 thickness 个 'H' 组成的字符串居中对齐，宽度为 thickness*6
    print((c*thickness).center(thickness*2)+(c*thickness).center(thickness*6))

#Middle Belt
# 循环遍历 (thickness+1)//2 次，生成中间的带子图案
for i in range((thickness+1)//2):
    # (c*thickness*5).center(thickness*6)：将 thickness*5 个 'H' 组成的字符串居中对齐，宽度为 thickness*6
    print((c*thickness*5).center(thickness*6))

#Bottom Pillars
# 循环遍历 thickness+1 次，生成下方的柱子图案
for i in range(thickness+1):
    # (c*thickness).center(thickness*2)：将 thickness 个 'H' 组成的字符串居中对齐，宽度为 thickness*2
    # (c*thickness).center(thickness*6)：将 thickness 个 'H' 组成的字符串居中对齐，宽度为 thickness*6
    print((c*thickness).center(thickness*2)+(c*thickness).center(thickness*6))

#Bottom Cone
# 循环遍历从 0 到 thickness-1 的范围，生成下部分的锥形图案
for i in range(thickness):
    # ((c*(thickness-i-1)).rjust(thickness)+c+(c*(thickness-i-1)).ljust(thickness))：
    #   将 (thickness-i-1) 个 'H' 组成的字符串先右对齐，再加一个 'H'，再将 (thickness-i-1) 个 'H' 组成的字符串左对齐，最后整体右对齐，宽度为 thickness*6
    print(((c*(thickness-i-1)).rjust(thickness)+c+(c*(thickness-i-1)).ljust(thickness)).rjust(thickness*6))


```