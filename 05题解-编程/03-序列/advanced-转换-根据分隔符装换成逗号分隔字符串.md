

# 转换-列表根据分隔符转换成逗号字符串



## 题目描述
给定一个列表可能包含嵌套列表的列表，将其转换为一个字符串，列表中的每个元素，如果它本身是一个列表，将其内部元素也转换为字符串，加入到最终的结果字符串中，返回一个由所有元素组成、元素之间用逗号和空格分隔的字符串

例子：['a', 'b', ['c', 'd', ['e']]] --> 'a, b, c, d, e'

难度：advanced


## 解决方案
i指定列表的每一项元素，进行迭代操作
* 如果i是一个列表，递归调用函数，通过函数返回字符串
* 不是列表，加入到结果列表中
* 最终转换结果列表为字符串（通过分隔符调用join方法转换列表为字符串）

```python
def list_to_str(lst, seperator=', '):
    result = []

    for i in lst:
        if isinstance(i, list):
            result.append(list_to_str(i))
        else:
            # join方法的可迭代对象中的元素必须是字符串类型
            # 将元素强制转换成字符串，增强代码稳定性
            result.append(str(i))
    
    return seperator.join(result)

lst = ['a', 'b', ['c', 'd', ['e']]]
# => a, b, c, d, e
print(list_to_str(lst))



# 全用循环语句的方法
def list_to_str(lst, separator=', '):
    result = []
    queue = [lst]

    while queue:
        current_list = queue.pop(0)
        for item in current_list:
            if isinstance(item, list):
                queue.append(item)
            else:
                result.append(str(item))

    return separator.join(result)
```




## c++的题解


```c++
#include <iostream>
#include <string>
#include <vector>

/*
 * std::string
 * 表示这个函数 flattenList 的返回值类型是字符串
 *
 * std::vector<std::string>
 * 其中std::vector 是 C++ 标准库提供的一种动态数组类型-向量(可以动态增长或收缩的数组)，
 * 它可以方便地存储一系列相同类型的元素
 * 这个向量里存放的元素类型是字符串 std::string
 * 
 * &
 * 表示这是一个引用，通过引用传递可以避免复制整个向量，提高效率
 * 将一个参数声明为引用，传递给函数的不是变量的值的副本，而是变量本身
 * 在这个例子中，由于使用了 const 修饰，所以在函数内部不能对这个引用进行修改
 */
std::string flattenList(const std::vector<std::string>& list) {
    std::string result;
    /*
     * const 表示在循环体中，item 的值不能被修改
     * auto 表示编译器会自动推导出 item 的类型
     * & 表示引用，即 item 是 list 中元素的引用，而不是副本
     */
    for (const auto& item : list) {
        if (item.front() == '[' && item.back() == ']') {
            std::string subList = item.substr(1, item.size() - 2);
            std::vector<std::string> subItems;
            size_t start = 0;
            size_t commaPos;
            while ((commaPos = subList.find(',', start))!= std::string::npos) {
                subItems.push_back(subList.substr(start, commaPos - start));
                start = commaPos + 1;
            }
            subItems.push_back(subList.substr(start));
            result += flattenList(subItems);
        } else {
            result += item + ", ";
        }
    }
    if (!result.empty()) {
        result.pop_back();
        result.pop_back();
    }
    return result;
}

int main() {
    std::vector<std::string> input = {"a", "b", "['c', 'd', ['e']]" };
    std::string output = flattenList(input);
    std::cout << output << std::endl;
    return 0;
}
```