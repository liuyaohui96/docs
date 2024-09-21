function checkPalindrome(inputString) {
  return (
    inputString
      .split('')
      .reverse()
      .join('') == inputString
  )
}
