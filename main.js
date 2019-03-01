inputs = document.getElementById("formInput");

inputs.addEventListener("keyup", convertValue);
console.log(inputs);
//inputs.addEventListener("onkeyup", convertValue);

function convertValue(e) {
  let inputValue = inputs.value;

  let kg = inputValue * 1000;
  let mg = inputValue / 1000;

  let kgResults = document.getElementById("kg");

  let mgResults = document.getElementById("mg");
  //console.log(mgResults);
  kgResults.innerHTML = ` <h3>kilogram: ${kg}</h3>`;
  mgResults.innerHTML = ` <h3>Milligram: ${mg}</h3>`;
}
