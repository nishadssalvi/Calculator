const resultInput = document.getElementById("result");

// Append value to the display
function appendValue(value) {
  if (resultInput.value === "Error") resultInput.value = ""; // Reset on error
  resultInput.value += value;
}

// Clear the display
function clearDisplay() {
  resultInput.value = "";
}

// Delete the last character
function deleteLast() {
  resultInput.value = resultInput.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    resultInput.value = eval(resultInput.value) || ""; // Evaluate safely
  } catch (error) {
    resultInput.value = "Error";
  }
}
