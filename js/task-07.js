const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onInputChange);

function onInputChange(evt) {
  input.range = evt.currentTarget.value;
  text.style.fontSize = `${evt.currentTarget.value}px`;
}
