document.getElementById("key-percent").addEventListener("click", function () {
  operation = (value1) => parseFloat(value1) / 100;
  prevValue = display;
  display = operation(display).toString();
  updateDisplay();
});
