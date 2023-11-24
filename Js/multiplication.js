document
  .getElementById("key-multiplication")
  .addEventListener("click", function () {
    operation = (value1, value2) => {
      return parseFloat(value1) * parseFloat(value2);
    };
    prevValue = display;
    display = "0";
  });
