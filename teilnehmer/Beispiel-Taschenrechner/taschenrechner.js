initialize();

var displayText;

function initialize() {
  clearClicked();
  document.getElementById("clearButton").onclick = clearClicked;
  document.getElementById("plusButton").onclick = plusClicked;
  document.getElementById("evalButton").onclick = evalClicked;
  var digits = document.getElementsByClassName("digit");
  for (var i = 0; i < digits.length; i++) {
    var digitSpan = digits[i];
    digitSpan.onclick = function(event) {
      var digit = event.target.innerHTML;
      digitClicked(digit);
    }
  }
}

function clearClicked() {
  displayText = "";
  updateDisplay();
}

function plusClicked() {

}

function evalClicked() {

}

function digitClicked(digit) {
  displayText += digit;
  updateDisplay();
}

function updateDisplay() {
  var display = document.getElementById("display");
  display.innerHTML = displayText;
}
