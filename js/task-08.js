const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const data = {
      userEmail: email.value,
      userPassword: password.value,
    };
    form.reset();
    console.log(data);
  }
}
