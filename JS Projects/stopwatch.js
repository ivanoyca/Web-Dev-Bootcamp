window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let appendSeconds = document.getElementById("seconds");
  let appendTens = document.getElementById("tens");
  let buttonStart = document.getElementById("btn_start");
  let buttonStop = document.getElementById("btn_stop");
  let buttonRestart = document.getElementById("btn_restart");
  let interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonRestart.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
