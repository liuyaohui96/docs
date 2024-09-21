/*
    一下两种情况：JavaScript会将数值转换为科学技术法表示
    1. 小于1且小数点后面带有6个0以上的浮点数值
    2. 整数位数字多于21位,

*/

function multipleTwoString(str1, str2){
    let str1Arr=str1.match(/[1-9][0-9]*/g);
    let str2Arr=str2.match(/[1-9][0-9]*/g);
    str1=str1Arr[0];
    str2=str2Arr[0];

    
    let result=Number.parseInt(str1)*Number.parseInt(str2);
    let arr=result.toString().split('');
    let eIndex=arr.indexOf('e');
    let dotIndex=arr.indexOf('.');
    
    if(eIndex>0){
        let beforeEArr=arr.slice(0,eIndex);
        let afterELength=Number.parseInt(arr.slice(eIndex+2).join(''));
        if(dotIndex>0){
            beforeEArr.splice(dotIndex, 1);
            
            let dotToELength=arr.slice(dotIndex+1, eIndex).length;
            afterELength-=dotToELength;
        }
        let temp=[];
        while(afterELength>0){
            temp.push('0');
            afterELength--;
        }
        return [...beforeEArr, ...temp].join('');
    }
    return result;
}
 
console.log(multipleTwoString('020','030'));