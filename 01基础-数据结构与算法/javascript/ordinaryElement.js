

// 从n>=3个互异整数中，任取三个元素
// 除最大、最小者以外，输出常规元素
function ordinaryElement(arr) {
  let x = arr[0], y = arr[1], z = arr[2] // 取元素O(3)
  let a, b, c

  // 需要三处分支比较 O(3)
  if (x > y) {
    if (x > z) {
      a = x
      if (y > z) {
        b = y
        c = z
      } else { // y < z
        b = z
        c = y
      }
    } else { // x < z
      a = z
      if (x > y) {
        b = x
        c = y
      } else { // x < y
        b = y
        c = x
      }
    }
  } else { // x < y
    if (y > z) {
      a = y
      if (x > z) {
        b = x
        c = z
      } else { // x < z
        b = z
        c = x
      }
    } else { // y < z
      a = z
      if (x > y) {
        b = x
        c = y
      } else {
        b = y
        c = x
      }
    }
  }

  // 输出O(1)
  console.log(`${a} < ${b} < ${c}, ordinaryElement是${b}`)
}


ordinaryElement([3, 5, 9])