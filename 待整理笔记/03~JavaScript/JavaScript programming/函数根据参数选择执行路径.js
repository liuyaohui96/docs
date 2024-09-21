
// Create a function that sums two arguments together
// addTogether(2, 3) should return 5, and addTogether(2) should return a function

function addTogether(...arr){
    if(arr.length==2){
        if(typeof arr[0]=='number'&& typeof arr[1]=='number'){
            return arr[0]+arr[1];
        }
        return undefined;
    }else{
        if(typeof arr[0]!='number') return undefined;
        return function(x, y=arr[0]){
            if(typeof x!='number') return undefined;
            return x+y;
        }
    }
}

function addTogether2(...arr){
    return arr.every(item => typeof item ==='number')?(arr.length>1?arr[0]+arr[1]
        :(n) => typeof n==='number'?n+arr[0]:undefined)
    :undefined;
}