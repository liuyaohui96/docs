let obj = {
  createDiv() {
    console.log('div is created');
    return this;
  },
  setBackground() {
    console.log('background is setted');
    return this;
  }
};

// div is created
// background is setted
obj.createDiv().setBackground(); // 因为方法始终返回调用方法的对象，所以可以继续链式调用该对象上的方法
