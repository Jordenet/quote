const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";
const hoursInputSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#seconds";

const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);
const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);

const delaySeconds = 1;

let IntervalId;

let remainingTime;

let hours;
let minutes;
let seconds;

function startTimer(event) {
  event.preventDefault();
  hours = parseInt(hoursInput.value);
  minutes = parseInt(minutesInput.value);
  seconds = parseInt(secondsInput.value);

  hideElement(startButton);
  showElement(stopButton);

  remainingTime = hours * 3600 + minutes * 60 + seconds;
  console.log(IntervalId);
  IntervalId = setInterval(updateTimer, 1000);
  document.documentElement.requestFullscreen();
  startButton.classList.add("hide");
  stopButton.classList.remove("hide");
}
function updateTimer() {
  if ((remainingTime) > 0) {

    remainingTime = remainingTime - 1;
    hours = Math.floor(remainingTime / 3600);
    minutes = Math.floor((remainingTime % 3600) / 60);
    seconds = remainingTime % 60;

    hoursInput.value = hours.toString().padStart(2, "0");
    minutesInput.value = minutes;
    secondsInput.value = seconds;
    console.log(hours, minutes, seconds);
    
  } else {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(IntervalId);
  hideElement(stopButton);
  setTimeout(() => {
    document.exitFullscreen();
    showElement(startButton);
  }, 1000);
}

function hideElement(Element) {
  startButton.classList.add("hide");
}

function showElement(Element) {
  startButton.classList.remove("hide");
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
