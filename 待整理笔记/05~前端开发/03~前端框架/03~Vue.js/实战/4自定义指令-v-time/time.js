// === 定义time辅助函数

const time = {
  // === 标准年月日的转换
  getDay(time) {
    let date = new Date(time);
    let month = date.getMonth() + 1;
    let day = date.getDay();
    month = month > 10 ? month : '0' + month;
    day = month > 10 ? day : '0' + day;
    return `${date.getFullYear()}-${month}-${day}`;
  },

  // ==== 时间转换
  getFormatTime(time) {
    let now = new Date().getTime();
    let rst = '';
    let timer = (now - time) / 1000; // 转换为s
    if (timer < 60) {
      // 1分钟前
      rst = '刚刚';
    } else if (timer < 3600) {
      // 1 小时前
      rst = Math.floor(timer / 60) + '分钟前';
    } else if (timer < 86400) {
      // 24小时前
      rst = Math.floor(timer / 3600) + '小时前';
    } else if (timer / 86400 < 31) {
      // 一个月前
      rst = Math.ceil(timer / 86400) + '天前';
    } else {
      rst = this.getFormatTime(time);
    }
    return rst;
  }
};

// === test
// console.log(time.getFormatTime(new Date(2019, 8, 10, 22, 0, 0).getTime()));
// console.log(time.getFormatTime(new Date(2019, 8, 10, 22, 42, 0).getTime()));
// console.log(time.getFormatTime(new Date(2019, 7, 22, 22, 0, 0).getTime()));
