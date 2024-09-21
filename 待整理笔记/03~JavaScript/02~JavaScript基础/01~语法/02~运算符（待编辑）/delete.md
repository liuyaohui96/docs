# delete的运用
1. 删除对象构造体内的属性
    ```JS
    let obj={name: 'liu'};
    delete obj.name;
    console.log(obj);
    ```
2. 当删除`non-configurable`属性时，`delete`没有作用

    ```JavaScript
    var Employee = {};
    Object.defineProperty(Employee, 'name', {configurable: false});

    console.log(delete Employee.name);  // returns false
    ```
3.` var, let and const` create non-configurable properties that cannot be deleted with the delete operator
    
    ```JavaScript
    let name='liu';
    delete name; //false

    age=21;
    delete age; // true
    ```

4. When in strict mode, if delete is used on a direct reference to a variable, 
a function argument or a function name, it will throw a SyntaxError instead of return false
    ```JavaScript
    "use strict";

    function Employee() {
        delete salary;  // SyntaxError not false
        var salary;        
    }
    ```

5. delete does not affect built-in static properties.
    ```JS
    delete Math.PI; // returns false 
    ```

6. delete and the prototype chain
    ```JS
    function Foo() {
        this.bar = 10;
    }

    Foo.prototype.bar = 42;

    var foo = new Foo();

    // foo.bar is associated with the own property. 
    console.log(foo.bar); // 10 

    // Delete the own property within the foo object. 
    delete foo.bar; // returns true 

    // foo.bar is still available in the prototype chain. 
    console.log(foo.bar); // 42 

    // Delete the property on the prototype.
    delete Foo.prototype.bar; // returns true 

    // The "bar" property can no longer be inherited from Foo since it has been deleted. 
    console.log(foo.bar); // undefined
    ```
7. When the delete operator removes an array element, that element is no longer in the array，the array length is not affected, so use `splice()` instead.