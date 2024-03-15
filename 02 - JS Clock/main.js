const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function calcTime(e) {
  return ((e / 60) * 360) + 90
}

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  const secondDegrees = calcTime(seconds)
  const minutesDegrees = calcTime(minutes)
  const hoursDegrees = calcTime(hours)
  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);