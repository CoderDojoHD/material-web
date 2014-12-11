initialize();

function initialize() {
  var result = document.getElementById("result");
  result.innerHTML = "0";
  var clearButton = document.getElementById("clearButton");
  clearButton.onclick = function() {
    result.innerHTML = "";
  }
}
