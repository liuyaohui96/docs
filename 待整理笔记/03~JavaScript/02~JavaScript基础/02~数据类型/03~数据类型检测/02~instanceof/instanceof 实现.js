// x instanceof y 内部实现
while (x.__proto__ != null) {
  if (x.__proto__ == y.__ptoto__) return true;
  x.__proto__ = x.__proto__.__proto__;
}
if (x.__proto__ == null) return false;
