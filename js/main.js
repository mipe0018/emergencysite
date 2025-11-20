// ********************************************************************************************************
const buttons = document.querySelectorAll(".layerbtn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const layerId = button.getAttribute("data-layer");
    const layer = document.getElementById(layerId);
    layer.classList.toggle("activelayer");
  });
});

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen

  // 2. Vis værdierne i de rigtige output-felter

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

/*knapperne til svg */

console.log("main.js loaded");
