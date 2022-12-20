let numOfSlAdults = document.getElementById("slAdultTicket");
let numOfSlChildren = document.getElementById("slChildTicket");
let numOfFAdults = document.getElementById("fAdultTicket");
let numOfFChildren = document.getElementById("fChildTicket");
let numOfInfants = document.getElementById("infantTicket");

function incSLAdult() {
  let SLAdultValue = parseInt(numOfSlAdults.value);
  SLAdultValue++;
  numOfSlAdults.value = SLAdultValue;
}
function decSLAdult() {
  let SLAdultValue = parseInt(numOfSlAdults.value);
  if (SLAdultValue > 0) {
    SLAdultValue--;
    numOfSlAdults.value = SLAdultValue;
  }
}
function incSLChild() {
  let SLChildValue = parseInt(numOfSlChildren.value);
  SLChildValue++;
  numOfSlChildren.value = SLChildValue;
}
function decSLChild() {
  let SLChildValue = parseInt(numOfSlChildren.value);
  if (SLChildValue > 0) {
    SLChildValue--;
    numOfSlChildren.value = SLChildValue;
  }
}

function incFAdult() {
  let FAdultValue = parseInt(numOfFAdults.value);
  FAdultValue++;
  numOfFAdults.value = FAdultValue;
}
function decFAdult() {
  let FAdultValue = parseInt(numOfFAdults.value);
  if (FAdultValue > 0) {
    FAdultValue--;
    numOfFAdults.value = FAdultValue;
  }
}
function incFChild() {
  let FChildValue = parseInt(numOfFChildren.value);
  FChildValue++;
  numOfFChildren.value = FChildValue;
}
function decFChild() {
  let FChildValue = parseInt(numOfFChildren.value);
  if (FChildValue > 0) {
    FChildValue--;
    numOfFChildren.value = FChildValue;
  }
}
function incInfant() {
  let infantValue = parseInt(numOfInfants.value);
  infantValue++;
  numOfInfants.value = infantValue;
}
function decInfant() {
  let infantValue = parseInt(numOfInfants.value);
  if (infantValue > 0) {
    infantValue--;
    numOfInfants.value = infantValue;
  }
}