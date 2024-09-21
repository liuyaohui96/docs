Array.prototype.myReduce=function(callback, initialValue){
    let accumulator=(initialValue===undefined)?undefined:initialValue;

    this.forEach( item => {
        if(accumulator===undefined) accumulator=item;
        else{
            accumulator=callback(accumulator, item);
        }
    });
    return accumulator;
}

let arr=[1,2, 3,4];
let result=arr.myReduce((a, b) => a+b); 
console.log(result); // 10
result=arr.myReduce((a, b) => a+b, 5);
console.log(result); // 15

