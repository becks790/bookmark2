var register = document.querySelector("#register");
var loginsection = document.querySelector("#loginSection");
var signUpSection = document.querySelector("#signUpSection");

register.addEventListener("click", function () {
  loginsection.classList.remove("visible");
  loginsection.classList.add("visually-hidden");
  signUpSection.classList.remove("visually-hidden");
  signUpSection.classList.add("visible");
});

var userName = document.querySelector("#userName");
var mail = document.querySelector("#mail");
var password = document.querySelector("#password");
var signUp = document.querySelector("#signUp");

var users = [];
signUp.addEventListener("click", function () {
  if (validatePassword(password.value)) {
    var userData = {
      name: userName.value,
      email: mail.value,
      userPassword: password.value,
    };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(userData));
    clearForm();
  } else {
    document.querySelector(".password-alert").innerHTML = `Invalid Email or Password <br>Your Password must contains at least: eight characters, one uppercase letter, one lowercase letter, one number, one special character.`
  }
});

function clearForm() {
  userName.value = "";
  mail.value = "";
  password.value = "";
}

var loginEmail = document.querySelector("#loginEmail");
var loginPassword = document.querySelector("#loginPassword");
var loginBtn = document.querySelector("#loginBtn");
var redAlert = document.querySelector("#redAlert");

loginBtn.addEventListener("click", function () {
  var storedData = JSON.parse(localStorage.getItem("users"));
  var storedEmail = storedData.email;
  var storedPassword = storedData.userPassword;

  if (
    storedEmail === loginEmail.value &&
    storedPassword === loginPassword.value
  ) {
    window.location.href = "https://becks790.github.io/bookmarker/";
  } else {
    redAlert.innerHTML = `Invalid username or password. Please try again.`;
  }
});

function validatePassword(passwordEx) {
  var passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(passwordEx);
}

// function validateEmail(emailEx) {
//   var emailRegex =
//   /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;
//   return emailRegex.test(emailEx);
// }