function isBalanced(str){
    let result=[];
    for(let i=0; i<str.length;i++){
        if(/\{/.test(str[i])) result.push(str[i]);
        
        if(/\}/.test(str[i])){
            if(result.length===0) return false;
            result.pop();
        }
    }
    return result.length===0?true:false;
    
}

let result=isBalanced('foo { bar } }');  // false
console.log(result);

result=isBalanced('foo { bar { baz }');  // false
console.log(result);

result=isBalanced('foo { bar { baz } boo }') // true
console.log(result);


