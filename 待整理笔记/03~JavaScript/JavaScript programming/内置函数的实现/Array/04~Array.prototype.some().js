Array.prototype.mySome=function(callback){
    let result=false;
    this.forEach( item => {
        if(callback(item)) result=true;
    });
    return result;
}

let arr=[1, 2, 3, 4];
let result=arr.mySome((n) => n>4);
console.log(result); // false

result=arr.mySome((n) => n>=4);
console.log(result); // true