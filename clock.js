const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();
  clockTitle.innerText = `${hour > 9 ? `${hour}` : `0${hour}`}:${
    min > 9 ? `${min}` : `0${min}`
  }:${second > 9 ? `${second}` : `0${second}`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
