let display = "0";
let prevValue = "0";
let operation;

function updateDisplay() {
  document.getElementById("calculator-display").textContent = display;
}

function resetDisplay() {
  display = "0";
  updateDisplay();
}

updateDisplay();
