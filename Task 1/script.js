/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const lb = 2.2046;
const g = 0.001;
const oz = 35.274;

document.getElementById("changer").addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = event.target[0].value;
  const kg = Number(inputValue);

  function convert(elementId, unitTitle, unit) {
    const formula = {
      lb: kg * lb,
      g: kg / g,
      oz: kg * oz,
    };

    document.getElementById(
      elementId
    ).textContent = `${unitTitle} = ${formula[unit]} ${unit}`;
  }

  convert({
    elementId: "svarai",
    unitTitle: "Pounds",
    unit: "lb",
  });

  convert({
    elementId: "gramai",
    unitTitle: "Grams",
    unit: "g",
  });

  convert({
    elementId: "uncijos",
    unitTitle: "Ounce",
    unit: "oz",
  });
});
