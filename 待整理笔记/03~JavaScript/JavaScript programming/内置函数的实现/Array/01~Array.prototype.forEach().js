Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

let arr = ['liu', 'yaohui'];
arr.myForEach(item => {
  console.log(item); // liu yaohui
});
