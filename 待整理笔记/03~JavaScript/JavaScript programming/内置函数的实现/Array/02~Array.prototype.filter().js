Array.prototype.myFilter=function(callback){
    let result=[];
    this.forEach( item => {
        if(callback(item)) result.push(item);
    })
    return result;
}


let arr = [3,6,9,12];

let result=arr.myFilter( (n) => n<10);
console.log(result); // [ 3, 6, 9 ]