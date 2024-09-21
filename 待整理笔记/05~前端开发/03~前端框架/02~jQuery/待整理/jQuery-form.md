
## form selector
```JavaScript
$(':input')
$(':text')
$(':password')
$(':radio')
$(':checkbox')
$(':submit')
$(':reset')
$(':image')
$(':button')
$(':file')
$(':hidden')

$(':checked')
$(':selected')
// etc.
```

## 表单简单操作
```JavaScript
// 获取和设置表单元素的值
$('selector').val([string]);

// 表单是否被选中
$('selector').prop('checked'); 
$('selector').attr('checked');

// 阻止submit事件提交
$('selector').submit(function(){
    // ...
    return false;
})
$('selector').submit(function(event){
    // ...
    event.preventDeault();
})

// 关闭打开字段
$('selector').prop('disabled', true);
$('selector').prop('disabled', false);

// 聚焦一个字段
$('selector').focus();
```

## 基础表单验证
使用jQuery验证插件，对表单元素添加相应类和title属性
| 验证类     | 描述           |
| ---------- | -------------- |
| required   | 必填           |
| date       | 日期           |
| email      | email          |
| number     | 数值           |
| digits     | 正整数         |
| creditcard | 格式有效信用卡 |
```JavaScript
// 对表单应用validate()函数
$('selector').validate();
```

## 验证高级规则
| 对象规则    | 值                     |
| ----------- | ---------------------- |
| email       | true                   |
| date        | true                   |
| required    | true                   |
| minlength   | number                 |
| maxlength   | number                 |
| rangelength | [minlength, maxlength] |
| min         | number                 |
| max         | number                 |
| range       | [min, max]             |
| equalTo     | '#passwordId'          |

```JavaScript

$('selector').validate({
    rules{
        filename: 'validationType';
    }
})

// e.g
$('selector').validate({
    rules{
        email:{required: true, email: true},
        name: 'required'
    }
})
```

## 验证高级错误信息
jQuery 自动为表单添加一个`error`类，然后自动在下方添加一个具有error类的label，如果需要修改label可以使用`label:error` 修改CSS样式
```JavaScript
// 基本语法
message:{
    Fieldname:{
        methodType: 'Error message';
    }
}

// e.g
$('selector').validate({
    rules{
        password:{required: true, rangelength: [8-16]}
    }, // end rules
    messages{
        password: {required: 'please enter the password'， rangelength: '8-16character'}
    } // end messages
}) // end validate
```

## 改变错误信息位置
```JavaScript
errorPlacement: function(error, element){
    if(element.is(":radio")||element.is(":checkbox")){
        error.appendTo(element.parent()); /// jQuery, 插入到目标元素最后面
    }else{
        error.insertAfter(element);
    }
}
```