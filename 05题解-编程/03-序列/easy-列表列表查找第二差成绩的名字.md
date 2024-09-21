

# 列表查找第二差成绩的名字


## 题目描述
给定一个班级中若干学生的名字和成绩，将其存储在嵌套列表中。要求打印出成绩为第二低的学生的名字。如果有多个学生成绩并列第二低，需按字母顺序排列他们的名字，并每行打印一个名字。

输入格式：
* 输入一个整数n，表示班级中学生的数量。
* 接下来输入的是学生的的名字和成绩，第一行是学生的名字，第二行是学生的成绩


示例输入：
5
Harry
37.21
Berry
37.21
Tina
37.2
Akriti
41
Harsh
39

示例输出：
Harry
Berry


## 解题方案
1. 输入n表示有n个学生要输入
2. 输入n数量的学生的名字和成绩
3. 找出第二低的成绩
    * 推导式筛选出grades
    * min(grades)获得min_grade
    * min(grades通过列表推导式筛选出大于min_grade的成绩)获得seconde_min_grade
4. 通过第二低成绩，用列表推导式创建第二低成绩学生列表
5. 遍历第二低成绩学生列表


```python
n = int(input("要输入多少个学生的成绩："))
students = []

for _ in range(n):
    name = input(f'输入第{n+1}个学生的名字')
    score = float(input(f'输入第{n+1}个学生的成绩：'))
    students.append([name, score])

scores = [student[1] for student in students]
min_score = min(scores)
second_min_score = min([student[1] for student in students if student[1] != min_score])

second_min_students = [student[0] for student in students if student[1] == second_min_score]
second_min_students.sort()

for student in second_min_students:
    print(student)
```