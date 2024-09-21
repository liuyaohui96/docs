// Return an English translated sentence of the passed binary string

function binaryAgent(str){
    let arr=str.split(' '); // 空格作为分隔符
    let result=[];

    arr.forEach(item => {
        result.push(String.fromCharCode(parseInt(item, 2)));
    })

    return result.join('');
}


function binaryAgent2(str){
    return String.fromCharCode(...str.split(' ').map(item => parseInt(item, 2)));
}


function binaryAgent3(str){
        str=str.split(' ');
        let charCode=0;
        let result='';
        let power=0;

        for(let i=0;i<str.length;i++){
            for(let j=0;j<str[i].length;j++){
                // 不能严格相等
                if(str[i][j]==1){
                    power=Math.pow(2, str[i].length-j-1);
                    charCode+=power;
                }
            }
            // 一段二进制之后
            result+=String.fromCharCode(charCode);

            // 还原charCode继续循环
            charCode=0;
        }
        return result;
}