function centuryFromYear(year) {
  // let century = Math.floor(year/100)
  // if(year % 100 ==0) return century
  // else return century + 1
  return Math.ceil(year / 100)
}

console.log(centuryFromYear(1900))
console.log(centuryFromYear(1905))
