/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
const numb = new calc(3, 1);
function calc(a, b) {
  this.sum = a + b;
  this.sub = a - b;
  this.multi = a * b;
  this.div = a / b;
  this.print = function () {
    console.log(
      ` ${this.sum}
            ${this.sub}
            ${this.multi}
            ${this.div}`
    );
  };
}
numb.print();
