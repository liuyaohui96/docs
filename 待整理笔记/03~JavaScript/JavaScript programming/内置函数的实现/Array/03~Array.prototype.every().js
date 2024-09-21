Array.prototype.myEvery=function(callback){
    let result=true;
    this.forEach( item => {
        if(!callback(item))  result=false;
    });
    return result;
}

let arr=[1, 2, 3, 4];
let result=arr.myEvery((n) => n<=4);
console.log(result); // true

result=arr.myEvery((n) => n>2);
console.log(result); // false