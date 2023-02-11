const inputEl = document.getElementById("converted-value-input");
const buttonEl = document.getElementById("convert-button");
const lengthEl = document.getElementById("length-converted");
const volumeEl = document.getElementById("volume-converted");
const massEl = document.getElementById("mass-converted");

buttonEl.addEventListener("click", function () {
  lengthConversion();
  volumeConversion();
  massConversion();
});

function lengthConversion() {
  const userInput = inputEl.value;
  // meter to feet:
  const lengthMetric = (userInput / 3.28084).toFixed(3);
  // feet to meter:
  const lengthImperial = (userInput / 0.3048).toFixed(3);

  lengthEl.textContent = `${userInput} meters = ${lengthImperial} feet | ${userInput} feet = ${lengthMetric} meters `;
}

function volumeConversion() {
  const userInput = inputEl.value;
  // litres to gallons:
  const volumeImperial = (userInput * 0.264172).toFixed(3);
  // gallons to litres:
  const volumeMetric = (userInput * 3.78541).toFixed(3);

  volumeEl.textContent = `${userInput} litres = ${volumeImperial} gallons | ${userInput} gallons = ${volumeMetric} litres `;
}

function massConversion() {
  const userInput = inputEl.value;
  // pounds to kilos:
  const massImperial = (userInput * 2.20462).toFixed(3);
  // kilos to pounds:
  const massMetric = (userInput * 0.453592).toFixed(3);

  massEl.textContent = `${userInput} kilos = ${massImperial} pounds | ${userInput} pounds = ${massMetric} kilos `;
}
