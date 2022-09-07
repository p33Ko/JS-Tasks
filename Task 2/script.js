/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let count = 0;
const clickMe = document.getElementById("btn__element");
const display = document.getElementById("btn__state");

clickMe.onclick = function () {
  count++;
  display.innerHTML = count;
};
