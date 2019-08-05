
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.target = document.querySelector(selector);
    this.initialTimer();
  }

  initialTimer() {
    function pad(value) {
      return String(value).padStart(2, "0");
    }
    let targetDate = this.targetDate.getTime();
    let timer = setInterval(function(target) {
      let nowDate = new Date().getTime();
      let timeRemain = targetDate - nowDate;

      if (timeRemain > 0) {
        const days = Math.floor(timeRemain / (1000 * 60 * 60 * 24));
        const hours = pad(
          Math.floor((timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = pad(
          Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60))
        );
        const secs = pad(Math.floor((timeRemain % (1000 * 60)) / 1000));
        console.log('target :', target);
        target.querySelector("#days").textContent = days;
        target.querySelector("#hours").textContent = hours;
        target.querySelector("#mins").textContent = mins;
        target.querySelector("#secs").textContent = secs;
      } else {
        target.innerHTML = "Action is done! Buy!";
        clearInterval(timer);
      }
    }, 1000, this.target);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 9, 2020")
});

