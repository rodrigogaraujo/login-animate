var btnSignin = document.getElementById("signin");
var btnSignup = document.getElementById("signup");

var container = document.querySelector("body");

btnSignin.addEventListener("click", function () {
  container.classList.add("sign-js");
  container.classList.remove("sign-up-js");
});

btnSignup.addEventListener("click", function () {
  container.classList.add("sign-up-js");
  container.classList.remove("sign-js");
});
