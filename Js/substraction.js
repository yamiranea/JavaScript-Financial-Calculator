document
  .getElementById("key-substraction")
  .addEventListener("click", function () {
    operation = (value1, value2) => {
      return parseFloat(value2) - parseFloat(value1);
    };
    prevValue = display;
    display = "0";
  });
