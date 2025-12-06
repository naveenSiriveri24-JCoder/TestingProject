// Get display element
let display = document.getElementById("display");

// Append clicked value to display
function appendValue(value) {
  display.value += value;
}

// Clear entire display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
