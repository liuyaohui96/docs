function findMissingNumber(arr){
    let sortedArray=arr.sort((a, b) => a-b);
    
    // 特殊的，首个项不是1，返回1
    if(sortedArray.length===0) return undefined;
    if(sortedArray[0]!=1) return 1;

    let len=sortedArray.length;
    for (let i = 0; i < len-2; i++) {
        if(sortedArray[i+1]-sortedArray[i]!==1)
            return sortedArray[i]+1;
    }
    // 或者从第一位开始，一直加1，如果不是后面的结果，返回这个missing的数
}

let result=findMissingNumber([2, 3, 4]); 
console.log(result); //1 
result=findMissingNumber([]); // undefined
console.log(result);
result=findMissingNumber([1, 4, 3]); // 2
console.log(result);
