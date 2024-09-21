// 很多浏览器都会内置有弹出窗口的内置程序
// 弹出窗口的屏蔽检测
let blocked = fasle;

try{
    let newWin = window.open(...);
    if(!newWin) blocked= true;
}catch(e){
    blocked = true;
}
if(blocked) alert('the popup was blocked');