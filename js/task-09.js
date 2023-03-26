const btnColorChanger = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

btnColorChanger.addEventListener("click", onBtnClick);

function onBtnClick(evt) {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
