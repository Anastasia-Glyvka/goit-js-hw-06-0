const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", onInputBlur);

function onInputBlur(evt) {
  if (evt.currentTarget.value.trim().length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
