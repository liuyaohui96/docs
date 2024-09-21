(function() {
  const target = new Date('2050-01-01').getTime();
  const countdownTimer = document.querySelector('.countdown-timer');

  setInterval(() => {
    setCountdownTimer();
  }, 1000);

  function setCountdownTimer() {
    const now = new Date().getTime();

    const distance = target - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.textContent = `${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
  }
})();
