const FORM = document.querySelector(".js-form");
const INPUT = FORM.querySelector("input");
const GREET = document.querySelector(".js-greet");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentVal = INPUT.value;
  saveName(currentVal);
  showName(currentVal);
}

function askForName() {
  FORM.classList.add(SHOWING_CN);
  FORM.addEventListener("submit", handleSubmit);
}

function showName(text) {
  FORM.classList.remove(SHOWING_CN);
  GREET.classList.add(SHOWING_CN);
  GREET.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser == null) {
    askForName();
  } else {
    showName(currentUser);
  }
}

function init() {
  loadName();
}

init();
