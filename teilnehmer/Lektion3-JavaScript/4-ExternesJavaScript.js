function fertigClicked() {
  var name = document.getElementById("name").value;
  setResult("Hallo, " + name)
}

function rechneClicked() {
  var zahl1 = document.getElementById("zahl1").value;
  var zahl2 = document.getElementById("zahl2").value;
  setResult(zahl1 * zahl2)
}

function setResult(contents) {
  var result = document.getElementById("result");
  result.innerHTML = contents;
}

document.getElementById("fertigButton").onclick = fertigClicked;

document.getElementById("rechneButton").onclick = rechneClicked;
