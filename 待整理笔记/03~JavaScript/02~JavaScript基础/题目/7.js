
// 这道题也很绕,函数递归调用的


function test(a,b){
  console.log(b);
  return {
    test:function(c){
       return test(c,a);
    }
};

// 这道题的理解,拆成这样就好理解了
/*function test(a,b){
  console.log("a:"+a,"b:"+b);
  return {
    test:function(c){
       console.log("a:"+a,"b:"+b,"c"+c);
       return test(c,a);
    }
  }

}*/



var a = test(100); // undefined, 这个是不言而喻的;
a.test(200); //  100;
a.test(300); // 100;

var b =  test(101).test(201).test(301); // undefined/101/201


var c =  test(102).test(202); // undefined / 102

c.test(302); // 202


