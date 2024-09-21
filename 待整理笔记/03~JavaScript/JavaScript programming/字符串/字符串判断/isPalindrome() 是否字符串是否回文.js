function isPalindrome(str){
    let originStr=str.replace(/\W/g, '').toLowerCase();

    return originStr===originStr.split('').reverse().join('');
    
    // 或者传统的for loop
    /*
    for(let i=0;i<originStr.length/2;i++){
        if(originStr[i]!==originStr[originStr.length-1-i])
            return false
    }
    return true;
    */
}




let result=isPalindrome('');
console.log(result); // true
result=isPalindrome('abcdcba');
console.log(result); // true

result=isPalindrome('abcd');
console.log(result); // false

result=isPalindrome('Amana plan a canal Panama');
console.log(result); // true