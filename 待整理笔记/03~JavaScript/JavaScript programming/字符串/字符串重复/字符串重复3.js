function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';
  if (num == 1) return str;
  return str + repeatStringNumTimes(str, num - 1);
}
