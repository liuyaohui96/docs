


## python待整理

以下是一个较为常见和合理的 Python 学习顺序建议：
* 基础语法
    * 变量、数据类型（数字、字符串、列表、字典等）
    * 控制结构（条件语句、循环）
    * 函数定义和使用
* 数据结构
    * 深入学习列表、字典、元组、集合等数据结构及其操作方法
* 面向对象编程（OOP）
    * 类和对象的概念
    * 封装、继承、多态
* 模块
    * 如何组织和使用模块
    * 熟悉一些常用的内置模块
* 异常处理
    * 学会捕获和处理各种异常情况
* 文件操作（IO 编程）
    * 文件的读取和写入
    * 处理不同的文件格式
* 数据库操作（可选）
    * 如果有需要，学习如何使用 Python 操作数据库
* 迭代器和生成器
    * 提高对数据处理的效率和灵活性
* 正则表达式
    * 用于文本模式匹配和处理
* 网络编程（可选）
    * 了解基本的网络请求和数据传输
* 多线程和多进程（可选）
    * 处理并发任务
* 高级主题（根据需求和兴趣）
* 装饰器、元类、上下文管理器等


### 总体待整理
1. 所有类的方法分类：如bytes字节串 的类方法待整理归类，bytearray类方法待整理归类等
2. python编码：没有编码声明时，默认编码为`UTF-8`，不是的话，文件的第一句要注释`# -*- coding: cp1252 -*-`



### 语句部分

#### return语句


return语句：
    * 在try语句块内，如果后续还有finally语句，执行完finally语句块再离开函数
    * 在生成器函数中，表示生成器已完成并将导致StopIteration引发，如果存在返回值，作为StopIteration.value的值
    * 异步生成器函数中，空的return语句表示异步生成器已完成并将导致StopAsyncIteration被引发。 一个非空的return语句在异步生成器函数中会导致语法错误

当 return 将控制流传出一个带有 finally 子句的 try 语句时，该 finally 子句会先被执行然后再真正离开该函数。

在一个生成器函数中，return 语句表示生成器已完成并将导致 StopIteration 被引发。 返回值（如果有的话）会被当作一个参数用来构建 StopIteration 并成为 StopIteration.value 属性。

在一个异步生成器函数中，一个空的 return 语句表示异步生成器已完成并将导致 StopAsyncIteration 被引发。 一个非空的 return 语句在异步生成器函数中会导致语法错误


#### yield语句yield表达式
https://docs.python.org/zh-cn/3/reference/expressions.html#yield-expressions

https://docs.python.org/zh-cn/3/reference/simple_stmts.html#the-yield-statement



#### import语句
https://docs.python.org/zh-cn/3/reference/simple_stmts.html#the-import-statement


#### with语句和match语句




https://docs.python.org/zh-cn/3/reference/compound_stmts.html#the-match-statement




1. match语句：用于进行模式匹配

    ```python
    # match
    def http_error(status):
        match status:
            case 400:
                return "Bad request"
            case 404:
                return "Not found"
            case 418:
                return "I'm a teapot"
            case _:
                return "Something's wrong with the internet"

    # match 表达式可以类似解包赋值，并可被用于绑定变量
    # point is an (x, y) tuple
    match point:
        case (0, 0):
            print("Origin")
        case (0, y):
            print(f"Y={y}")
        case (x, 0):
            print(f"X={x}")
        case (x, y):
            print(f"X={x}, Y={y}")
        case _:
            raise ValueError("Not a point")
    ```



#### 异常中的try语句
https://docs.python.org/zh-cn/3/reference/compound_stmts.html#the-try-statement






### 内置数据类型


#### number类型


其他数字类型，例如Decimal 或Fraction






##### Decimal内置类型
```python
# 基于习惯的浮点数模型进行计算
# 如1.1 + 1.2 = 二进制浮点数显示为 3.3000000000000003
# 对于 decimal 浮点数是精确 1.1 + 1.2 = 3.3
# 适合具有严格相等不变性的数学计算
# 通常使用 decimal 的方式是先导入该模块
# 通过 getcontext() 查看当前上下文
# 有必要可以getcontext().prec设置精度


# 可以基于整数、字符串、浮点数或元组构造Decimal实例
# 基于浮点数会自动进行浮点值的精确转换
# Decimal包括特殊值例如 NaN 表示“非数字”，正的和负的 Infinity 和 -0

class Decimal:
    def __new__(cls: type[Self], value: _DecimalNew = ..., 
        context: Context | None = ...) -> Self: ...
    
```


Decimal用例


```python
from decimal import *

getcontext().prec = 6
print(1.1 + 2.2)
print(Decimal(1.1) + Decimal(2.2))


# === 
Decimal(10) # Decimal('10')
Decimal('3.14') # Decimal('3.14')
Decimal(3.14) # Decimal('3.1400000000...')
```





##### Fraction
```python
# 支持分数运算
# 分数实例可以由一对整数，一个分数，或者一个字符串构建而成

```



fraction用例


```python
from fractions import Fraction

print(Fraction(16, -10))  # -8/5
print(Fraction('3/7'))  # 3/7
print(Fraction('-3/7'))  # -3/7
print(Fraction(2.25))  # 9/4

```






#### 序列

##### 字符串


###### 格式化输出字符串
printf 风格的字符串格式化
https://docs.python.org/zh-cn/3/library/stdtypes.html#printf-style-string-formatting

```python
# 字符串格式化
# 用例
txt = "For only {price:.2f} dollars!"
print(txt.format(price = 49)) # => 49.00

txt1 = "My name is {fname}, I'm {age}".format(fname = "John", age = 36)
#numbered indexes:
txt2 = "My name is {0}, I'm {1}".format("John",36)
#empty placeholders:
txt3 = "My name is {}, I'm {}".format("John",36)

quantity = 3
itemno = 567
price = 49.95
myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
print(myorder.format(quantity, itemno, price))
```


格式化输出字符串
    * 字符串中插入变量的值，在前引号前加上字母f，再将要插入的变量放在`{}`内，f是format（设置格式）的简写，可以把花括号内的变量替换为字符串
    * print配合`str.format()`使用
```python
print("liuyaohui") # => liuyaohui

first_name = "liu"
last_name = "yaohui"
print(f"fullname is {first_name}{last_name}")
# => fullname is liuyaohui

myorder = "I have a {carname}, it is a {model}."
print(myorder.format(carname = "Ford", model = "Mustang"))
```




##### 二进制序列类型memoryvie
memoryview

https://docs.python.org/zh-cn/3/library/stdtypes.html#binary-sequence-types-bytes-bytearray-memoryview


[回到顶部](#python_docs)



#### 集合


#### 映射


##### 字典


### 函数

函数定义
https://docs.python.org/zh-cn/3/reference/compound_stmts.html#function-definitions



在 Python 中，关键字参数是在函数调用时，通过指定参数名和对应的值来传递的参数





函数作用域，函数调用



函数嵌套

递归函数

内置函数




#### 函数式编程
函数式编程
1. 了解javascrpt基本了解函数函数式编程
2. 高阶函数：函数作为参数，返回值，赋值等
3. 一些常用的内置高阶函数：map，filter，all，any等
4. 装饰器函数：通过函数参数改变功能的函数，本质上，decorator就是一个返回函数的高阶函数
    ```python
    # 用例
    # 一个装饰器函数
    def log(func):
        def wrapper(*args, **kw):
            # 先打印函数名称
            print('call %s():' % func.__name__)
            # 再打印函数
            return func(*args, **kw)
        return wrapper

    # 通过@
    # 调用now()函数前调用log装饰器函数
    # 相当于now = log(now)
    @log
    def now():
        print('2015-3-25')
    ```
5. 偏函数：Python的functools模块提供了很多有用的功能，其中一个就是偏函数（Partial function），functools.partial的作用就是，把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单
    ```python
    import functools
    int2 = functools.partial(int, base=2)
    int2('1000000') # => 64
    int2('1000000', base=10) # => 1000000
    ```




### 类
类定义
https://docs.python.org/zh-cn/3/reference/compound_stmts.html#class-definitions


#### 私有变量名称改写
大多数 Python 代码都遵循这样一个约定，带有一个下划线的名称是API的非公有部分，由于存在对于类私有成员的有效使用场景（例如避免名称与子类所定义的名称相冲突），私有变量会发生`名称改写`，被替换为`_className_privaveVaraibleName`


#### 类的组合
一个类可以包含其他类的对象作为其属性，实现更复杂的结构

#### 修改实例属性的方式有
* 直接通过设置实例变量进行修改instance_name.attr_name = new_value`
* 通过方法进行修改`instance_name.update_method(new_value)`,通过方法修改实例属性，可以进行一些扩展，例如对修改值的判断是否合理
* 通过递增方法修改`instance_name.increament_method(increament_value)`


#### 辅助类
辅助类：
1. 辅助类：因为类行为越来越仿佛，属性和方法清单以及文件都越来越长，可以即将一个类实例作为另一个类的属性，作为辅助类

```python
class AssistClass():
    # snip 即省略

class ClassName():
    def __init(self...):
        # snip
        self.assist_attribute_name = AssistClass()

instance_name = AssistClass(args...)
# 调用实例属性中的方法
instance_name.assist_attribute_name.method_in_assist_class_name()
```

[回到顶部](#python_docs)



### 迭代器和生成器



##### 生成器
```python
# === Generator对象
class Generator(Iterator[_T_co], Generic[_T_co, _T_contra, _V_co]):
    # 开始一个生成器函数的执行或是从上次执行 yield 表达式的位置恢复执行
    # 常通过for循环或是内置的next()函数隐式调用
    def __next__(self) -> _T_co
    # 恢复执行并向生成器函数“发送”一个值
    # value 参数将成为当前 yield 表达式的结果
    # 当调用 send() 来启动生成器时，它必须以 None 作为调用参数，
    # 因为这时没有可以接收值的 yield 表达式
    def send(self, __value: _T_contra) -> _T_co

    def throw(
        self, __typ: Type[BaseException], __val: BaseException | object = ...,
        __tb: TracebackType | None = ...
    ) -> _T_co

    def throw(self, __typ: BaseException, __val: None = ...,
            __tb: TracebackType | None = ...) -> _T_co

    def close(self) -> None
    def __iter__(self) -> Generator[_T_co, _T_contra, _V_co]
# === Generator对象 end


# 生成器生成迭代器的例子
def reverse(data):
    for index in range(len(data)-1, -1, -1):
        yield data[index]

for char in reverse('golf'):
    print(char) # 依次输出flog
# 生成器生成迭代器的例子 end
```



### IO编程

#### 内存中的流
内存中的流：内存中的流（In-Memory Streams）是指在程序运行时，数据在内存中以类似于文件流的方式进行处理和操作
io.StringIO：用于在内存中模拟文本流操作，方便对文本数据进行处理和操作。
io.BytesIO：用于在内存中模拟二进制流操作。




#### 自问自答
3. 有了read，为什么还需要readline，readlines
    * read方法适合于整体读取内容，方便整体操作，但是内存损耗大
    * readline 方法每次只读取文件的一行内容，适用于大文件，节省内存或者每一行进行处理，但是相当于readlines，代码复杂一些，因为需要在循环中不断调用 readline 来获取下一行
    * readlines：读取文件的全部内容，并将每一行作为一个字符串元素存储在一个列表中返回，和read一样，大文件内存损耗大，适用于对每一行进行处理

    ```python
    # read适合读取全部内容，整体处理
    with open('large_file.txt', 'r') as file:
        content = file.read()
        # 例如，查找特定字符串在文件中的出现次数
        count = content.count('specific_string')
        print(f"特定字符串出现的次数: {count}")


    # readline适合对每一行进行处理
    with open('huge_file.txt', 'r') as file:
        line = file.readline()
        while line:
            # 例如，只处理包含特定关键字的行
            if 'keyword' in line:
                print(line.strip())
            line = file.readline()
    ```

4. 既然有了write，为什么要有wrilines，没有writeline：
    * write 方法用于将单个字符串写入文件。它适用于只需要写入一个字符串的情况
    * writelines 方法则适用于需要一次性写入多个字符串或一个字符串列表的情况
    * 因为写，只有写一个或多个字符串的需求，而且写一行可以通过加入`\n`就能实现

    ```python
    with open('example.txt', 'w') as file:
        file.write('Hello')
    ```



### 用户界面编程

### 多线程

### 网络编程


### 设计模式







### 标准库



### OS模块



os模块：
1. 用途：提供了与操作系统进行交互的功能
OS操作系统接口的方法在`os`模块中
1. 操作文件和目录的方法
    ```python
    # 'posix', 'nt', 'java'
    # nt，就是Windows系统
    # posix是linux等
    def name: -> str
    

    # 删除文件
    # path是目录，则会引发 IsADirectoryError
    # 使用 rmdir() 来删除目录
    # Windows 上，尝试删除正在使用的文件会抛出异常
    def remove(path, *, dir_fd=None): -> None


    # 返回一个包含由 path 指定目录中条目名称组成的列表
    def listdir(path='.'): -> [list]


    # 递归删除目录
    # removedirs() 会尝试依次删除path中提到的每个父目录
    def removedirs(name): -> None


    # 删除目录
    # 目录不存在或不为空，则会分别抛出 FileNotFoundError 或 OSError 异常
    def rmdir(path, *, dir_fd=None): -> None


    # 创建一个名为path的目录
    def mkdir(path, mode=0o777, *, dir_fd=None): -> None

    # 递归目录创建函数
    # 自动创建到达最后一级目录所需要的中间目录
    def makedirs(name, mode=0o777, exist_ok=False)

    # 将文件或目录 src 重命名为 dst
    def rename(src, dst, *, src_dir_fd=None, dst_dir_fd=None):-> ...

    # 移除（删除）文件 path
    def remove(path, *, dir_fd=None): -> ...
   
    ```
2. os.path下的常用路径操作
    ```python
    # 返回路径 path 的绝对路径
    def abspath(path): -> ...

    # 返回路径 path 的目录名称
    def dirname(path): -> ...


    # 如果 path 指向一个已存在的路径或已打开的文件描述符，返回 True
    # 否则返回 False
    def exists(path): -> ...


    # 智能地拼接一个或多个路径部分
    def join(path, *paths)


     # 路径 path 拆分为一对，返回(head, tail)元组
    # 其中，tail 是路径的最后一部分，
    # 而 head 里是除最后部分外的所有内容
    def split(path): -> ...

    # 将路径名称 path 拆分为(root, ext)元组
    # 扩展名 ext 为空或以句点打头并最多只包含一个句点
    def splitext(path): -> ...

    # path是现有的常规文件返回 True
    def isfile(path): -> bool

    # path 是现有的目录，则返回True
    def isdir(path): -> bool
    ```



[回到顶部](#python_docs)

#### 内置函数

1. 在类继承部分中，已经介绍`ininstance()`和`issubclass`，看看内容是在类继承中，还是在内置函数中介绍（目前在类继承部分）



### 装饰器


装饰器：
1. 概念：装饰器是 Python 中的一种高级特性，它允许在不修改原有函数代码的情况下，为函数添加额外的功能

2. 定义：装饰器本质上是一个函数，它接受一个函数作为参数，并返回一个新的函数

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function execution")
        result = func(*args, **kwargs)
        print("After function execution")
        return result
    return wrapper

@my_decorator
def my_function(name):
    print(f"Hello, {name}!")

# => Before function execution
# => Hello, Alice!
# => After function execution
my_function("Alice")
```

[回到顶部](#python_docs)



### 代码测试
参与工作量较大的项目时，你应该对自己所编写函数和类的重要行为进行测试，这样你就能够更加确定自己所做的工作不会破坏项目的其他部分，从而自由地改进既有代码

Python标准库中的模块unittest 提供了代码测试工具

* 单元测试 用于核实函数的某个方面没有问题
* 测试用例 是一组单元测试，它们一道核实函数在各种情形下的行为都符合要求。良好的测试用例考虑到了函数可能收到的各种输入，包含针对所有这些情形的测试
* 全覆盖 的测试用例包含一整套单元测试，涵盖了各种可能的函数使用方式。对于大型项目，要进行全覆盖测试可能很难

[回到顶部](#python_docs)


### 包管理器pip
python一般默认情况下会包含 PIP
```shell
# 查看版本
pip --version

# 安装包
pip install package_name

# 卸载包
pip uninstall package_name

# 列出包
pip list
```


[回到顶部](#python_docs)





### 基本自定义方法
https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__new__

[回到顶部](#python_docs)



### 模拟数字类型方法



```python
object.__add__(self, other)
object.__sub__(self, other)
object.__mul__(self, other)
object.__matmul__(self, other)
object.__truediv__(self, other)
object.__floordiv__(self, other)
object.__mod__(self, other)
object.__divmod__(self, other)
object.__pow__(self, other[, modulo])
object.__lshift__(self, other)
object.__rshift__(self, other)
object.__and__(self, other)
object.__xor__(self, other)
object.__or__(self, other)


object.__radd__(self, other)
object.__rsub__(self, other)
object.__rmul__(self, other)
object.__rmatmul__(self, other)¶
object.__rtruediv__(self, other)
object.__rfloordiv__(self, other)
object.__rmod__(self, other)
object.__rdivmod__(self, other)
object.__rpow__(self, other[, modulo])
object.__rlshift__(self, other)
object.__rrshift__(self, other)
object.__rand__(self, other)
object.__rxor__(self, other)
object.__ror__(self, other)


object.__iadd__(self, other)
object.__isub__(self, other)
object.__imul__(self, other)
object.__imatmul__(self, other)
object.__itruediv__(self, other)
object.__ifloordiv__(self, other)
object.__imod__(self, other)
object.__ipow__(self, other[, modulo])
object.__ilshift__(self, other)
object.__irshift__(self, other)
object.__iand__(self, other)
object.__ixor__(self, other)
object.__ior__(self, other)


object.__neg__(self)
object.__pos__(self)¶
object.__abs__(self)
object.__invert__(self)


object.__complex__(self)
object.__int__(self)
object.__float__(self


object.__index__(self)

object.__round__(self[, ndigits])
object.__trunc__(self)¶
object.__floor__(self)
object.__ceil__(self)
```



1. +（Unary plus）：通过`__pos__()`方法来重载
2. -（Unary minus）：通过`__neg__()`特殊方法来重载
3. ~（Bitwise NOT）：通过`__invert__()`定义
4. `<<`（Shift left）：使用`__lshift__()`方法自定义
5. `>>`（Shift right with sign）：使用`__rshift__()`方法自定义
6. `&`（Bitwise AND）：使用`__and__()`或者`__rand__()`方法自定义
7. `|`（Bitwise OR）：使用`__or__()`或则`__ror__()`方法自定义
8. `^`（Bitwise XOR）：使用`__xor__()`或则`__rxor__() `方法自定义
9. `+` （addition）：通过`__add__()`方法自定义
10. `-`（subtraction）：可以通过`__sub__()`方法自定义
11. `*` （multiplication）：可以通过`__mul__()`方法定义
12. `**` 乘方（exponentiation）：可以通过`__rmul__()`方法定义
13. `/` （division）：可以通过`__truediv__()`方法定义
14. `//`：可以通过`__floordiv__()`方法定义
15. `%`：可使用`__mod__()`方法定义
16. 成员检测运算符`in  | not in`：对于定义了`__contains__()`方法类说，如果`y.__contains__(x)`返回真值则`x in y`返回 True，否则返回False
17. 逻辑运算符（布尔运算符）`and or not`：通过`__bool__()`定义逻辑值




[回到顶部](#python_docs)




### 真假值
1. python中的假值
    * 数字0
    * 空字符串`''`
    * 空列表，空元组，空集合，空字典
    * None
    * False
2. 除了为数不多的假值，就都是真值


[回到顶部](#python_docs)


### 排序指南
排序指南：
1. 排序使用`list.sort()`或者`sorted()`内置函数
    ```python
    # 根据 iterable 中的项返回一个新的已排序列表
    # key形参用来指定在进行比较前要在每个列表元素上调用的函数
    # key形参的值应该是个函数，接受一个参数并返回一个用于排序的键
    # reverse 为一个布尔值。 如果设为 True，则每个列表元素将按反向顺序比较进行排序
    def sorted(iterable, /, *, key=None, reverse=False): -> sorted_list

    
    # 例子
    student_tuples = [
        ('john', 'A', 15),
        ('jane', 'B', 12),
        ('dave', 'B', 10), ]
    sorted(student_tuples, key=lambda student: student[2])
    # => [('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
    ```


[回到顶部](#python_docs)

### 循环的技巧
1. 序列的循环
    ```python
    # range() 和 len(sequence)循环
    a = ['Mary', 'had', 'a', 'little', 'lamb']
    for i in range(len(a)):
        print(i, a[i])

    # enumerated()函数可以同时取出位置索引和对应的值
    for i, v in enumerate(['tic', 'tac', 'toe']):
         print(i, v)

    # 同时循环两个或多个序列时， zip() 函数可以将其内的元素一一匹配
    questions = ['name', 'quest', 'favorite color']
    nswers = ['lancelot', 'the holy grail', 'blue']
        for q, a in zip(questions, answers):
            print(f'What is your {q}?  It is {a}.')

    # 逆向循环序列时候，使用reversed()函数
    for i in reversed(range(1, 10, 2)):
        print(i) # 9 7 ... 1

    
    # 用 sorted() 函数，在不改动原序列的基础上，返回一个重新的序列
    basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
    for i in sorted(basket):
        print(i)

    # 使用 set() 去除序列中的重复元素
    basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
    for f in set(basket):
        print(f)
    ```

[回到顶部](#python_docs)



### 值比较
比较运算符，比较的是两个对象的值：
1. 所有类型都是 object 的（直接或间接）子类型，它们都从 object 继承了默认的比较行为
    * 默认的一致性比较`== !=`是基于对象的标识号
    * 默认的次序比较`<, >, <= 和 >=`是没有提供，如果尝试比较会引发 TypeError
2. 类型可以通过实现比较方法，如`__lt()__`定义比较行为
3. 内置类型可能会实现自己的比较方法（大多数是继承默认比较行为）
    * 内置数字类型的比较根据数学（算法）规则正确进行比较；任何非数字值`float('NaN') 和 decimal.Decimal('NaN')`，都会返回false，还有一个反直觉的结果是非数字值不等于其自身，此行为是遵循 IEEE 754 标准
    * 字符串 (str 的实例) 使用其字符的 Unicode 码位数字值 (内置函数 ord() 的结果) 按字典顺序进行比较
    * 序列 (tuple, list 或 range 的实例) 只可进行类型内部的比较，序列比较是字典式顺序，对相应元素进行逐个比较，两个序列要相等，它们的内部元素必须为相同类型、相同长度，并且每对相应的元素都必须相等，排序结果与其第一个不相等元素的排序相同；对应元素不存在，较短的多项集排序在前；range类型不支持次序比较
    * 两个映射 (dict 的实例) 若要相等，必须当且仅当它们具有相同的 (键, 值) 对；次序比较 (<, >, <= 和 >=) 将引发 TypeError
    * 集合 (set 或 frozenset 的实例) 可进行类型内部和跨类型的比较，将比较运算符定义为子集和超集检测
    ```python
    (1, 2, 3) < (1, 2, 4)
    [1, 2, 3] < [1, 2, 4]
    'ABC' < 'C' < 'Pascal' < 'Python'
    (1, 2) < (1, 2, -1)
    ```

[回到顶部](#python_docs)



### python引用计数机制
python引用计数机制：垃圾回收以引用计数为主，当一个变量保存了对象的引用，该对象引用计数增加1，del删除变量指向的对象时候，引用计数减去1


[回到顶部](#python_docs)


### 进程和线程
1. 进程：现代计算机可以执行多任务操作，一个任务对于计算机来说就是一个进程
2. 线程：一个进程不止要做一件事，可以同时做多个“子任务”，进程里的子任务称为线程
3. python进程：multiprocessing模块是跨平台版本的多进程模块
    * 其中Process类来代表一个进程对象
    * 要启动大量的子进程，可以用进程池`Pool`的方式批量创建子进程
    ```python
    from multiprocessing import Process
    import os

    # 子进程要执行的代码
    def run_proc(name):
        print('Run child process %s (%s)...' % (name, os.getpid()))

    if __name__=='__main__':
        print('Parent process %s.' % os.getpid())
        p = Process(target=run_proc, args=('test',))
        print('Child process will start.')
        # 启动进程
        p.start()
        # join()方法可以等待子进程结束后再继续往下运行，
        # 通常用于进程间的同步
        p.join()
        print('Child process end.')

    # 进程池
    from multiprocessing import Pool
    import os
    import time
    import random


    def long_time_task(name):
        print('Run task %s (%s)...' % (name, os.getpid()))
        start = time.time()
        time.sleep(random.random() * 3)
        end = time.time()
        print('Task %s runs %0.2f seconds.' % (name, (end - start)))


    if __name__ == '__main__':
        print('Parent process %s.' % os.getpid())
        p = Pool(4)
        for i in range(5):
            p.apply_async(long_time_task, args=(i,))
        print('Waiting for all subprocesses done...')
        p.close()
        p.join()
        print('All subprocesses done.')
    ```
4. python子进程：subprocess模块
5. Python的multiprocessing模块包装了底层的机制，提供了Queue、Pipes等多种方式来交换数据
6. python线程：Python的标准库提供了两个模块：_thread和threading，_thread是低级模块，threading是高级模块，对_thread进行了封装，大多数情况下，只需要使用threading模块
    * 多线程和多进程最大的不同在于，多进程中，同一个变量，各自有一份拷贝存在于每个进程中，互不影响，而多线程中，所有变量都由所有线程共享，所以，任何一个变量都可以被任何一个线程修改，因此，线程之间共享数据最大的危险在于多个线程同时改一个变量，造成了冲突
    * 解决的办法是给线程上锁，无论多少线程，同一时刻最多只有一个线程持有该锁
    * 锁的好处就是确保了某段关键代码只能由一个线程从头到尾完整地执行，坏处当然也很多，首先是阻止了多线程并发执行，包含锁的某段代码实际上只能以单线程模式执行，效率就大大地下降了
    * 死锁：由于可以存在多个锁，不同的线程持有不同的锁，并试图获取对方持有的锁时，可能会造成死锁，导致多个线程全部挂起，既不能执行，也无法结束，只能靠操作系统强制终止
7. python解释器GIL锁（Global Interpreter Lock）：每个线程运行前，都会获得GIL锁，使得该进程内的其他线程无法执行，等线程结束后或者线程遇到耗时操作，GIL才解开。GIL的存在使得，多线程在python中只能交替执行，无法同时进行


[回到顶部](#python_docs)




### 其他

1. 协程
https://docs.python.org/zh-cn/3/reference/compound_stmts.html#coroutines

2. 类型形参列表
https://docs.python.org/zh-cn/3/reference/compound_stmts.html#type-parameter-lists






