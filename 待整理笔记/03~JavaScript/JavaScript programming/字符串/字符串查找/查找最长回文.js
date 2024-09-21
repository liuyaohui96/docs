function findLonglestSubStr(str){
    // 将字符串转换为数组
    let arr=str.split('');
    let result=[];
    
    // 对长度为0和1的字符串直接返回
    if(arr.length<2) return arr.join('');

    for(let i=0;i<arr.length;i++){
        // 从arr截取下标i到结尾的数组给arr2
        let arr2=arr.slice(i);
        
        // 找到以该字母为起始点的最长回文串
        while(arr2.join('')!==[...arr2].reverse().join('')){
            arr2.pop();
        }
        // console.log(arr2);
        /* 
        如果最终这个数组剩下超过1的长度，而且比最终要返回的结果数组长度要大，则返回结果数组指向这个回文数组
        */
        if(arr2.length!==1 && arr2.length>result.length) result=arr2; 
    }
    return result.join('');
}

console.log(findLonglestSubStr('abbaad')); // abbaa
console.log(findLonglestSubStr('a')); // a
console.log(findLonglestSubStr('abccbd')); //bccb