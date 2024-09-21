

# 查询学生成绩


## 题目描述
给定一系列学生的记录，以字典的形式存储，键为学生姓名，值为学生的成绩列表。首先输入一个整数表示学生记录的数量，接下来若干行输入学生的姓名和对应的成绩，每个值之间用空格分隔。最后一行输入一个学生的名字作为查询对象。要求输出查询学生的平均成绩，结果保留两位小数


例子：
输入
2
Harsh 25 26.5 28
Anurag 26 28 30
Harsh

输出：
26.50



难度：easy

通过率：97%


## 解题方案

```python
n = int(input("输入多少个学生的成绩："))
students_marks = {}

for _ in range(n):
    name, *scores_str_list = input(f"输入第{_+1}位学生的名字和成绩：").split()
    scores = list(map(float, scores_str_list))
    students_marks[name] = scores

student_name = input("输入查询成绩的学生名字：")
average = sum(students_marks[student_name]) / len(students_marks[student_name])
print(f'{average:.2f}')
```