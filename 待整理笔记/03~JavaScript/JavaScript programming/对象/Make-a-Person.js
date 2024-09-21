// Fill in the object constructor with the following methods below:
/*
getFirstName() getLastName() getFullName() 
setFirstName(first) setLastName(last) setFullName(firstAndLast)
*/

// 主要考察 比较旧的一种模拟私有变量，getter和setter
let Person=function(str){
    let firstName=str.split(' ')[0];
    let lastName=str.split(' ')[1];
    this.getFullName=function(){
        return firstName+' '+ lastName;
    };
    this.getFirstName=function(){
        return firstName;
    };
    this.getLastName=function(){
        return lastName;
    }
    this.setFirstName=function(name){
        firstName=name;
    }
    this.setLastName=function(name){
        lastName=name;
    }
    this.setFullName=function(name){
        firstName=name.split(' ')[0];
        lastName=name.split(' ')[1];
    }

}

let Bob=new Person('Bob Ross');
console.log(Bob.getFullName());