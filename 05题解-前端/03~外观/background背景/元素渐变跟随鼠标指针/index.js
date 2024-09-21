let container = document.querySelector('.container')
container.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect()
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  container.style.setProperty('--x', x + 'px')
  container.style.setProperty('--y', y + 'px')
})