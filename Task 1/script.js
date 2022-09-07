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
  let kg = Number(this.querySelector("input[type=text]").value);
  document.getElementById("svarai").innerHTML = "Pounds =" + kg * lb + "lb";
  document.getElementById("gramai").innerHTML = "Grams =" + kg / g + "g";
  document.getElementById("uncijos").innerHTML = "Ounce =" + kg * oz + "oz";
});
