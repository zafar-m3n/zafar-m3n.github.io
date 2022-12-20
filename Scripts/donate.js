let donations = 0;
let selected = false;
let selId = 0;
//Onclick function to highlight selected donation amount
function setValue(element) {
  let val = element;
  if (!selected) {
    val.style.background = "#82d14b";
    selId = val;
    selected = true;
  } else {
    selId.style.background = "#fff";
    val.style.background = "#82d14b";
    selId = val;
  }
}

function validateCVC() {
  const cvc = document.getElementById("cvc");
  const cvcPattern = /\d{3,4}/;
  return matchExists(cvcPattern, cvc.value);
}

function matchExists(pattern, value) {
  let mat = value.match(pattern);
  const matchExists = mat != null;
  return matchExists && mat[0].length == value.length;
}
function validateCreditCard() {
  const cc = document.getElementById("cc");
  const ccPattern = /\d{16}/;
  return matchExists(ccPattern, cc.value);
}
function validateName() {
  const name = document.getElementById("name");
  return name.value != "";
}
function validateDate() {
  const date = document.getElementById("date");
  return date.value != "";
}
function validateAddress() {
  const address = document.getElementById("address");
  return address.value != "";
}
function validateAmount() {
  return selected;
}
function validate() {
  const indicator = document.getElementsByClassName("form-indicator")[0];
  const cvc = validateCVC();
  const cc = validateCreditCard();
  const date = validateDate();
  const name = validateName();
  const address = validateAddress();
  const donateAmount = validateAmount();

  const allAreValid = cvc && cc && date && name && address && donateAmount;

  if (allAreValid) {
    switch (Number(selId.id)) {
      case 1:
        donations = 100;
        break;
      case 2:
        donations = 500;
        break;
      case 3:
        donations = 1000;
        break;
      case 4:
        donations = 2000;
        break;
      case 5:
        donations = 5000;
        break;
      case 6:
        donations = 10000;
        break;
      default:
        break;
    }
    const donation = document.getElementById("donation");
    donation.innerHTML =
      "LKR" + donations + " was successfully donated. Thank you!";
  } else {
    if (!donateAmount) {
      indicator.style.background = "red";
      alert("Amount not selected");
    }
    if (!name) {
      const nameError = document.getElementById("name");
      nameError.style.color = "red";
      indicator.style.background = "red";
      alert("Name not filled");
    }
    if (!address) {
      const addressError = document.getElementById("address");
      addressError.style.color = "red";
      indicator.style.background = "red";
      alert("Address not filled");
    }
    if (!cc) {
      const ccError = document.getElementById("cc");
      ccError.style.color = "red";
      indicator.style.background = "red";
      alert("Invalid Credit Card Number");
    }
    if (!date) {
      const dateError = document.getElementById("date");
      dateError.style.color = "red";
      indicator.style.background = "red";
      alert("Invalid Expiry Date");
    }
    if (!cvc) {
      const cvcError = document.getElementById("cvc");
      cvcError.style.color = "red";
      indicator.style.background = "red";
      alert("Invalid CVV Number");
    }
  }
}
