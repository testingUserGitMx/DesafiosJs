const loginForm = document.getElementById("log-in-form");
const userField = document.getElementById("user-field");
const emailField = document.getElementById("email-field");
const pwdField = document.getElementById("pwd-field");
const alertMsg = document.getElementById("alert-msg");
const btnSubmit = document.getElementById("login-button");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (!userField.value.trim() || !emailField.value.trim() || !pwdField.value.trim()) {
    alertMsg.innerHTML = `¡Completa todos los campos!`
    return
  }
  
  location.href = '../Fakeflix/index.html'



});
