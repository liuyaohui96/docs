// 是否是父子包含关系
function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

// 并集
function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

// 交集
function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

// 删除setA中setB具有的元素
function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// === test
let setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);

console.log(isSuperset(setA, setB)); // true
console.log(union(setA, setC)); // Set { 1, 2, 3, 4, 5, 6 }
console.log(intersection(setA, setC)); // Set { 3, 4 }
console.log(difference(setA, setC)); // Set { 1, 2 }
