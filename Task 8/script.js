/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.result = 0;

  this.sum = (a, b) => (this.result = a + b);
  this.division = (a, b) => a / b;
  this.clear = () => (this.result = 0);
}

const count = new Calculator();

count.sum(5, 4);

console.log(count.result);

count.clear();

count.sum(100, 2);

console.log(count.result);
