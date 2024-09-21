function getDate() {
  let dt = new Date()

  let year = dt.getFullYear()
  let month = dt.getMonth() + 1
  let date = dt.getDate()

  if (month < 10) month = '0' + month
  if (date < 10) date = '0' + date

  return year + '-' + month + '-' + date
}

console.log(getDate())
