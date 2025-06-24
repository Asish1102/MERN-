const timer = document.getElementById("timer-text");
let timeInSec = 0;
setInterval(() => {
  timeInSec++;
  console.log(timeInSec);
  const sec = timeInSec % 60;
  const min = Math.floor(timeInSec / 60);
  min = min % 60;
  const hrs = Math.floor(timeInSec / 3600);
  timer.innerText = `${hrs}:${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}, 1000);
const handleReset = () => {
    timeInSec = 0;
};