initialize();

var displayText = "";
var storedNumber = 0;
var wasNumberStored = false;
var lastOperator = null;

function initialize() {
  resetCalculator();
  addClickEvent(document.getElementById("clearButton"), clearClicked);
  addClickEvent(document.getElementById("evalButton"), evalClicked);
  addClickEvent(document.getElementById("plusButton"), plusClicked);
  var digits = document.getElementsByClassName("digit");
  for (var i = 0; i < digits.length; i++) {
    var digitSpan = digits[i];
    addClickEvent(digitSpan, function (event) {
      var digit = event.target.innerHTML;
      digitClicked(digit);
    });
  }
}

function addClickEvent(element, handler) {
  if (typeof TouchEvent != "undefined") {
    element.ontouchstart = handler;
  } else {
    element.onclick = handler;
  }
}

function resetCalculator() {
  displayText = "";
  storedNumber = 0;
  wasNumberStored = false;
  lastOperator = null;
  updateDisplay();
}

function clearClicked() {
  console.log("C");
  resetCalculator();
}

function plusClicked() {
  console.log("+");
  evaluateWithPlus();
  lastOperator = "+";
}

function evaluateWithPlus() {
  if (wasNumberStored)
    return;
  var displayedNumber = parseInt(displayText);
  storedNumber = storedNumber + displayedNumber;
  wasNumberStored = true;
  displayText = storedNumber.toString();
  updateDisplay();
}

function evalClicked() {
  console.log("=");
  evaluateWithPlus();
  lastOperator = "=";
}

function digitClicked(digit) {
  console.log(digit);
  if (wasNumberStored) {
    displayText = "";
    wasNumberStored = false;
    if (lastOperator == "=")
      storedNumber = 0;
  }
  if (displayText.length == 10)
    return;
  displayText += digit;
  updateDisplay();
}

function updateDisplay() {
  var display = document.getElementById("display");
  display.innerHTML = displayText;
}
