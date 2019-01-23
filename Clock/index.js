const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const time = document.querySelector("#time");

const calculateDegrees = (time, max) => (time * 360) / max + 90; //Simple rule of 3 to convert a second into a degree 12 hours = 360 degrees. And adds 90 to account for the rotate(90deg)

function setDate() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegrees = calculateDegrees(hours, 12);
  const minutesDegrees = calculateDegrees(minutes, 60);
  const secondsDegrees = calculateDegrees(seconds, 60);

  //When a hand reaches 60, temporally disable transitions to avoid jump when it reaches 0deg and then transforms to 90deg
  if (secondsDegrees === 90) {
    secondHand.classList.add("disable-transition");
  } else {
    secondHand.classList.remove("disable-transition");
  }

  if (minutesDegrees === 90) {
    minuteHand.classList.add("disable-transition");
  } else {
    minuteHand.classList.remove("disable-transition");
  }

  if (hoursDegrees === 90) {
    hourHand.classList.add("disable-transition");
  } else {
    hourHand.classList.remove("disable-transition");
  }

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);
