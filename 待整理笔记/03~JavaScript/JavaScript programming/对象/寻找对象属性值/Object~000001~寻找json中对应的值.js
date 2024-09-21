// 使用递归算法实现通过节点 key 数组寻找 json 对象中的对应值

let data = {
  a1: {
    b1: 1,
    b2: 2,
    b3: {
      b4: 5
    }
  },
  a2: {
    b1: 3,
    b2: 4
  }
};

// data中寻找属性
function findNode(attrArr, data) {
  if (attrArr.length === 1) {
    return data[attrArr[0]] ? data[attrArr[0]] : -1;
  } else {
    return findNode(attrArr.slice(1), data[attrArr[0]]);
  }
}

console.log(findNode(['a1', 'b2'], data)); // 2
console.log(findNode(['a1', 'b3', 'b4'], data)); // 5
