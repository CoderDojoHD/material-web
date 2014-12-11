initialize();

var displayText = "";
var storedNumber = 0;
var wasNumberStored = false;

function initialize() {
    //resetCalculator();
    document.getElementById("clearButton").onclick = clearClicked;
    document.getElementById("evalButton").onclick = evalClicked;
    document.getElementById("plusButton").onclick = plusClicked;
    var digits = document.getElementsByClassName("digit");
    for (var i = 0; i < digits.length; i++) {
        var digitSpan = digits[i];
        digitSpan.onclick = function (event) {
            var digit = event.target.innerHTML;
            digitClicked(digit);
        }
    }
}

function resetCalculator() {
    displayText = "";
    storedNumber = 0;
    wasNumberStored = false;
    updateDisplay();
}

function clearClicked() {
    console.log("C");
    resetCalculator();
}

function plusClicked() {
    console.log("+");
    evaluateWithPlus();
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
    storedNumber = 0;
}

function digitClicked(digit) {
    console.log(digit);
    if (wasNumberStored) {
        displayText = "";
        wasNumberStored = false;
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
