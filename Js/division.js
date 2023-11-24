document.getElementById("key-division").addEventListener("click", function () {
  operation = (value1, value2) => {
    return parseFloat(value1) / parseFloat(value2);
  };
  prevValue = display;
  display = "0";
});
