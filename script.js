let display = "0";

function updateDisplay() {
    document.getElementById("display").textContent = display;
}

function resetDisplay() {
    display = "0";
    updateDisplay();
}

function appendNumber (number) {
    if (display === "0") {
        display = number;
    } else {
        display += number;
    }
}

updateDisplay();

document.getElementById("key0").add