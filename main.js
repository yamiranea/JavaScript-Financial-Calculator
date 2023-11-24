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

for (i = 0; i <= 9; i++) {
  const value = i.toString();
  document.getElementById(`key-${i}`).addEventListener("click", function () {
    if (display === "0") {
      display = value;
    } else {
      display += value;
    }
    updateDisplay();
  });
}

document.getElementById("key-decimal").addEventListener("click", function () {
  display += ".";
  updateDisplay();
});
