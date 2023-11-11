"use strict";

const psw = document.getElementById("psw");
const pswConfirm = document.getElementById("pswconfirm");
const submitBtn = document.getElementById("submit");
const pswLabel = document.getElementById("psw-label");

function pswValidate() {
  if (psw.value <= 8) {
    psw.classList.add("error");
    removeifExists();
    errorMsg("(MUST BE AT LEAST 8 CHARACTERS)");
  } else {
    if (psw.value != pswConfirm.value) {
      removeifExists();
      errorMsg("(PASSWORDS DO NOT MATCH)");
      psw.classList.add("error");
      pswConfirm.classList.add("error");
    } else {
      psw.classList.remove("error");
      pswConfirm.classList.remove("error");
    }
  }
}

submitBtn.addEventListener("click", pswValidate);

function errorMsg(msg) {
  const error = document.createElement("span");
  error.classList.add("error-msg");
  error.textContent = `${msg}`;

  pswLabel.appendChild(error);
}


function removeifExists() {
  const prevMsg = document.querySelector(".error-msg");
  if (prevMsg) prevMsg.remove();
}

