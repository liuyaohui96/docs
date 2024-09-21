function pigLatin(str) {
  //元音的正则表达式
  let regex = /[aeiou]/gi;
  //如果第一个字母是元音字母
  if (str[0].match(regex)) {
    return str + 'way';
  } else if (str.match(regex) === null) {
    //如果全部都是辅音字母
    return str + 'ay';
  } else {
    //第一个元音的位置
    let firstVowel = str.indexOf(str.match(regex)[0]);
    return str.substring(firstVowel) + str.substring(0, firstVowel) + 'ay';
  }
}

let result = pigLatin('constant'); // onstantcay
console.log(result);
