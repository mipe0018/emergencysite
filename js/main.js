// ********************************************************************************************************
//inberet

// ********************************************************************************************************
const buttons = document.querySelectorAll(".layerbtn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const layerId = button.getAttribute("data-layer");
    const layer = document.getElementById(layerId);
    layer.classList.toggle("activelayer");
  });
});
// ********************************************************************************************************
//register

// ********************************************************************************************************
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

// ********************************************************************************************************
//form

// ********************************************************************************************************
const form = document.querySelector("form");
//Cancel pop-up
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

//Hent og vis fornavn
function visNavn() {
  const navn = document.getElementById("first_name").value;
  document.getElementById("first_name_output").value = navn;
  document.getElementById("first_name").value = "";
  const efternavn = document.getElementById("last_name").value;
  document.getElementById("last_name_output").value = efternavn;
  document.getElementById("last_name").value = "";
  const email = document.getElementById("email").value;
  document.getElementById("email_output").value = email;
  document.getElementById("email").value = "";
  const password = document.getElementById("password").value;
  document.getElementById("password_output").value = password;
  document.getElementById("password").value = "";
  const password1 = document.getElementById("password1").value;
  document.getElementById("password1_output").value = password1;
  document.getElementById("password1").value = "";
}

//Hent og vis efternavn
