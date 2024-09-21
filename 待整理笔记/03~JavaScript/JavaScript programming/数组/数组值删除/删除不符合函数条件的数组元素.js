// 直到遇到对的元素才返回其后的所有元素

function dropElements(arr, func){
    return arr.slice(arr.findIndex(func)>=0?arr.findIndex(func):arr.length
            , arr.length);
}

function dropElements2(arr, func){
    // 函数式编程不影响原参数
    let result=arr.slice();
    while(!func(result[0])&&result.length){
        result.shift();
    }
    return result;
}

let result=dropElements([1, 2, 3], n => n<3);
console.log(result);
result=dropElements2([1, 2, 3], n => n<3);
console.log(result);