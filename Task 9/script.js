/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.bugdet = budget;
    this.exp = function () {
      if (this.budget < 100000000) {
        return false;
      } else {
        return true;
      }
    };
  }
}
const wasExpensive = new Movie("Spider-Man", "Sam Raimi", 139000000);
console.log(wasExpensive.exp());