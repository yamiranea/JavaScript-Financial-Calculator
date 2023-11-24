document.getElementById("key-equals").addEventListener("click", function () {
  display = operation(prevValue, display);
  prevValue = "0";
  updateDisplay();
});
