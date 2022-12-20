function validateName() {
  const name = document.getElementById("name");
  return name.value != "";
}
function validateMobile() {
  const mobile = document.getElementById("mobile");
  return mobile.value != "" && mobile.value.length == 10;
}
function validateEmails() {
  const email = document.getElementById("email");
  const confEmail = document.getElementById("confEmail");
  return (
    email.value != "" && confEmail.value != "" && email.value == confEmail.value
  );
}
function validateDate() {
  const date = document.getElementById("date");
  return date.value != "";
}
function validateTickets() {
  let totalTickets;
  let numOfSlAdults = document.getElementById("slAdultTicket");
  let numOfSlChildren = document.getElementById("slChildTicket");
  let numOfFAdults = document.getElementById("fAdultTicket");
  let numOfFChildren = document.getElementById("fChildTicket");
  let numOfInfants = document.getElementById("infantTicket");

  totalTickets =
    parseInt(numOfSlAdults.value) +
    parseInt(numOfSlChildren.value) +
    parseInt(numOfFAdults.value) +
    parseInt(numOfFChildren.value) +
    parseInt(numOfInfants.value);
  return totalTickets > 0;
}
function validate() {
  const name = validateName();
  const mobile = validateMobile();
  const emails = validateEmails();
  const date = validateDate();
  const tickets = validateTickets();

  const allAreValid = name && mobile && emails && date && tickets;

  if (allAreValid) {
    // Place the order
    successfulOrder();
  } else {
    if (!name) {
      alert("Name is required");
    }
    if (!mobile) {
      alert("Mobile number is required");
    }
    if (!emails) {
      alert("Email is required");
    }
    if (!date) {
      alert("Date is required");
    }
    if (!tickets) {
      alert("At least one ticket must be ordered");
    }
  }
}

function successfulOrder() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender").value;
  let date = document.getElementById("date").value;
  let duration = document.getElementById("duration").value;
  let numOfSlAdults = document.getElementById("slAdultTicket").value;
  let numOfSlChildren = document.getElementById("slChildTicket").value;
  let numOfFAdults = document.getElementById("fAdultTicket").value;
  let numOfFChildren = document.getElementById("fChildTicket").value;
  let numOfInfants = document.getElementById("infantTicket").value;

  let summaryInfo = document.getElementById("summary");

  summaryInfo.innerHTML = `
  <table>
    <tr>
      <th colspan="3">Date</th>
      <td colspan="2">${date}</td>
    </tr>
    <tr>
      <td colspan="3">${name}</td>
      <td colspan="2">${mobile}</td>
    </tr>
    <tr>
      <td colspan="3">${email}</td>
      <td colspan="2">${gender}</td>
    </tr>
    <tr>
      <th colspan="5">Tour Details</th>
    </tr>
    <tr>
      <th>SL Adults</th>
      <th>SL Children</th>
      <th>Foreign Adults</th>
      <th>Foreign Children</th>
      <th>Infants</th>
    </tr>
    <tr>
      <td>${numOfSlAdults}</td>
      <td>${numOfSlChildren}</td>
      <td>${numOfFAdults}</td>
      <td>${numOfFChildren}</td>
      <td>${numOfInfants}</td>
    </tr>
    <tr>
      <th colspan="3">Duration</th>
      <td colspan="2">${duration}</td>
    </tr>
    <tr>
      <th colspan="3">Price</th>
      <td colspan="2">LKR ${calculatePrice()}</td>
    </tr>
  </table>`;

  // Add current order to the array
  let price = calculatePrice();
  let orderObject = {
    SLAdults: numOfSlAdults,
    SLChlidren: numOfSlChildren,
    FAdults: numOfFAdults,
    FChildren: numOfFChildren,
    infants: numOfInfants,
    tourDuration: duration,
    tourPrice: price,
  };

  addOrder(orderObject);

  // Loyalty points calculation
  totalTickets =
    parseInt(numOfSlAdults) +
    parseInt(numOfSlChildren) +
    parseInt(numOfFAdults) +
    parseInt(numOfFChildren) +
    parseInt(numOfInfants);

  if (totalTickets > 3) {
    loyaltyPoints += totalTickets * 15;
    localStorage.setItem("loyalty", loyaltyPoints);
  }

  function calculatePrice() {
    let ticketPrice;
    if (duration == "3hrs") {
      ticketPrice =
        parseInt(numOfSlAdults) * 1200 +
        parseInt(numOfSlChildren) * 700 +
        parseInt(numOfFAdults) * 5500 +
        parseInt(numOfFChildren) * 2700;
    } else if (duration == "halfDay") {
      ticketPrice =
        parseInt(numOfSlAdults) * 1550 +
        parseInt(numOfSlChildren) * 1050 +
        parseInt(numOfFAdults) * 5950 +
        parseInt(numOfFChildren) * 3150;
    } else {
      ticketPrice =
        parseInt(numOfSlAdults) * 1800 +
        parseInt(numOfSlChildren) * 1300 +
        parseInt(numOfFAdults) * 6300 +
        parseInt(numOfFChildren) * 3300;
    }
    return ticketPrice.toFixed(2);
  }
}

function placeOrder() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let currentOrder = orders[orders.length - 1];

  if (
    currentOrder.SLAdults != 0 &&
    currentOrder.SLChlidren != 0 &&
    currentOrder.FAdults != 0 &&
    currentOrder.FChildren != 0 &&
    currentOrder.infants != 0 &&
    currentOrder.tourDuration != 0 &&
    currentOrder.tourPrice != 0
  ) {
    alert(
      "Order successfully placed." +
        "\nCustomer name: " +
        name +
        "\nCustomer Mobile Number: " +
        mobile +
        "\nCustomer Email: " +
        email +
        "\nTour Date: " +
        date +
        "\nTour Duration: " +
        currentOrder.tourDuration +
        "\nTour Guest Details" +
        "\n\tSri Lankan Adults " +
        currentOrder.SLAdults +
        "\n\tSri Lankan Children " +
        currentOrder.SLChlidren +
        "\n\tForeign Adults " +
        currentOrder.FAdults +
        "\n\tForeign Children " +
        currentOrder.FChildren +
        "\n\tInfants " +
        currentOrder.infants
    );
  } else {
    alert("Order is not valid");
  }
}

let orders = [
  {
    SLAdults: 0,
    SLChlidren: 0,
    FAdults: 0,
    FChildren: 0,
    infants: 0,
    tourDuration: 0,
    tourPrice: 0,
  },
];
function addOrder(obj) {
  orders.pop();
  orders.push(obj);
}
function addToFavourite() {
  let orderToSave = orders[orders.length - 1];
  if (
    orderToSave.SLAdults != 0 &&
    orderToSave.SLChlidren != 0 &&
    orderToSave.FAdults != 0 &&
    orderToSave.FChildren != 0 &&
    orderToSave.infants != 0 &&
    orderToSave.tourDuration != 0 &&
    orderToSave.tourPrice != 0
  ) {
    localStorage.removeItem("favouriteOrder");
    localStorage.setItem("favouriteOrder", JSON.stringify(orderToSave));
    alert("Order was added to favourites");
  } else {
    alert("No order has been made yet.");
  }
}
function orderFavourite() {
  let duration = document.getElementById("duration");
  let numOfSlAdults = document.getElementById("slAdultTicket");
  let numOfSlChildren = document.getElementById("slChildTicket");
  let numOfFAdults = document.getElementById("fAdultTicket");
  let numOfFChildren = document.getElementById("fChildTicket");
  let numOfInfants = document.getElementById("infantTicket");

  let favOrder = JSON.parse(localStorage.getItem("favouriteOrder"));
  if (
    favOrder.SLAdults != 0 &&
    favOrder.SLChlidren != 0 &&
    favOrder.FAdults != 0 &&
    favOrder.FChildren != 0 &&
    favOrder.infants != 0 &&
    favOrder.tourDuration != 0
  ) {
    numOfSlAdults.value = favOrder.SLAdults;
    numOfSlChildren.value = favOrder.SLChlidren;
    numOfFAdults.value = favOrder.FAdults;
    numOfFChildren.value = favOrder.FChildren;
    numOfInfants.value = favOrder.infants;
    duration.value = favOrder.tourDuration;
  } else {
    alert("No orders have been favourite yet");
  }
}
let loyaltyPoints = 0;
function checkLoyalty() {
  alert(`Total Loyalty Points: ${loyaltyPoints}`);
}
