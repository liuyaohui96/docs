const progressBar = document.querySelector('.progress-bar')
const totalScrolllTop = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop
  progressBar.style.width = `${scrollTop / totalScrolllTop * 100}%`
})