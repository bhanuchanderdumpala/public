function getValues() {
  const v1 = parseFloat(document.getElementById("firstValue").value);
  const v2 = parseFloat(document.getElementById("secondValue").value);
  if (isNaN(v1) || isNaN(v2)) {
    alert("Please enter valid numbers.");
    return null;
  }
  return { v1, v2 };
}

function add(v1, v2) {
  return v1 + v2;
}

function subtract(v1, v2) {
  return v1 - v2;
}

function multiply(v1, v2) {
  return v1 * v2;
}

function displayResult(type) {
  const values = getValues();
  if (!values) return;

  let result;
  switch (type) {
    case "add":
      result = add(values.v1, values.v2);
      break;
    case "sub":
      result = subtract(values.v1, values.v2);
      break;
    case "mul":
      result = multiply(values.v1, values.v2);
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("output").innerText = result;
  document.getElementById("resultBlock").style.display = "block";
}

function clearResults() {
  document.getElementById("firstValue").value = "";
  document.getElementById("secondValue").value = "";
  document.getElementById("resultBlock").style.display = "none";
}
