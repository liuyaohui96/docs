# printf格式标签
[toc]
printf格式标签原型是

        %[flags][width][.precison][length]specifier

## flags
flags类型 | 描述
-|-
\-        | 在给定的字符宽度内左对齐。默认是右对齐
\+        | 给正数也添加前缀符号 '+' ，默认只有负数有前缀符号'-'
(space)   | 如果没有写入符号，在值前插入一个空格
\#        | 与o， x共同使用, 值前增加前缀o或者ox<br>与e, f 共同使用,值包含小数点
0         | 如果需要空格填充，以0代替

## width
width类型 | 描述
-|-
(number) | 最小数量的字符,如果输出的字符小于最小字符,以空格填充
\*       | 匹配整数值的参数作为width

## .precision
.precision 类型 | 描述
-|-
.number | 对于整数说明符(d, i, o, u, x),指示输出的最小位数,如果输出位数小与指定最小位数，以前导0填充。<br>对于浮点数说明符f和e,指定输出的小数位数。<br>对于字符串，指定最大的字符输出数量
.\*     | 匹配整数值参数作为.presision

## length
length类型 | 描述
-|-
h          | 与整数说明符(d, i, o, u, x)一起使用，将参数值解释为short int或者 unsigned short int
l          | 与整数说明符(d, i, o, u, x)一起使用，将参数解释为long int 或者 unsigned long long int
L          | 与浮点数说明符（e, f)一起使用，将参数解释为long double

## specifier
specifier类型 | 描述
-|-
c      | 指示参数表现为字符
d 或 i | 指示参数表现为有符号十进制整数
o      | 指示参数表现为有符号八进制整数
x      | 指示参数表现为有符号十六进制整数
u      | 指示参数表现为无符号十进制整数
f      | 指示参数表现为十进制浮点数
e      | 指示参数表现为科学计数
p      | 指示参数表现为指针