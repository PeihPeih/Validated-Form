const submitButton = document.querySelector(".sub-btn");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const password = document.querySelector("#password");

const inputs = document.querySelectorAll(".input");
const email = document.querySelector("#email");
const form = document.querySelector("#form");

submitButton.addEventListener("click", () => {
  inputs.forEach(checkValidation);
  checkEmail();
  if (!document.querySelector(".error")) form.submit();
});

inputs.forEach(fix);
fixEmail(email);

function checkValidation(input) {
  if (input.value.trim() === "") {
    if (!input.parentElement.querySelector(".error-text")) setError(input);
  }
}

function fix(input) {
  input.addEventListener("input", () => {
    if (input.parentElement.querySelector(".error-text")) removeError(input);
  });
}

setError = (error) => {
  error.classList.add("error");

  // Text about error
  let errorName = error.placeholder;
  let errorNode = document.createElement("p");
  let errorText = document.createTextNode(`${errorName} cannot be empty`);
  errorNode.appendChild(errorText);
  errorNode.classList.add("error-text");
  error.parentElement.appendChild(errorNode);

  // Icon about error
  let errorIcon = document.createElement("label");
  errorIcon.htmlFor = error.id;
  errorIcon.innerHTML = "!";
  error.parentElement.appendChild(errorIcon);
};

removeError = (error) => {
  error.classList.remove("error");
  let errorNode = error.parentElement.querySelector(".error-text");
  let errorIcon = error.parentElement.querySelector("label");
  error.parentElement.removeChild(errorNode);
  error.parentElement.removeChild(errorIcon);
};

//Email error

function checkEmail() {
  if (!check(email)) {
    if (!email.parentElement.querySelector(".error-text")) {
      email.classList.add("error");

      // Text about error
      let errorName = email.placeholder;
      let errorNode = document.createElement("p");
      let errorText = document.createTextNode(
        "Looks like this is not an email"
      );
      errorNode.appendChild(errorText);
      errorNode.classList.add("error-text");
      email.parentElement.appendChild(errorNode);

      // Icon about error
      let errorIcon = document.createElement("label");
      errorIcon.htmlFor = email.id;
      errorIcon.innerHTML = "!";
      email.parentElement.appendChild(errorIcon);
    }
  }
}

getEmail = (email) => email.value.trim();

function check(email) {
  let emailContent = getEmail(email);
  if (emailContent === "") return false;
  if (emailContent.includes("@gmail.com")) {
    if (emailContent.length == 10) return false;
  } else return false;
  return true;
}

function fixEmail(email) {
  email.addEventListener("input", () => {
    if (email.parentElement.querySelector(".error")) removeError(email);
  });
}
