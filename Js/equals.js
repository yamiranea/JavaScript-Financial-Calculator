document.getElementById("key-equals").addEventListener("click", function () {
  display = operation(display, prevValue);
  prevValue = "0";
  updateDisplay();
});
