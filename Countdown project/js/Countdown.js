function startCountdown() {
    const countdownDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = countdownDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;

      if (timeLeft < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-container").innerHTML = "<h1>Samsung S25 Ultra Launched!</h1>";
      }
    }
    const interval = setInterval(updateCountdown, 1000);
  }

  startCountdown();