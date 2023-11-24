document
  .getElementById("key-substraction")
  .addEventListener("click", function () {
    operation = (value1, value2) => {
      return parseFloat(value1) - parseFloat(value2);
      updateDisplay();
    };
    prevValue = display;
    display = "0";
  });
