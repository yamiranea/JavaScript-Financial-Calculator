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

document.getElementById("key-addition").addEventListener("click", function () {
  operation = (value1, value2) => {
    return parseFloat(value1) + parseFloat(value2);
  };
  prevValue = display;
  display = "0";
});
document.getElementById("key-equals").addEventListener("click", function () {
  display = operation(display, prevValue);
  prevValue = "0";
  updateDisplay();
});
document.getElementById("key-reset").addEventListener("click", function () {
  display = "0";
  prevValue = "0";
  operation = function () {};
  updateDisplay();
});
