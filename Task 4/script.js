/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const container = document.getElementById("output");
const list = document.createDocumentFragment();

fetch("cars.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let output = data;
    output.map(function (output) {
      /* Create Elements */
      const place = document.createElement("div");
      const brand = document.createElement("h1");
      const models = document.createElement("h2");

      /* Text Content */
      brand.innerHTML = `${output.brand}`;
      models.innerHTML = `${output.models}`;

      /* Styles */
      container.style.text = "black";
      container.style.backgroundColor = "white";
      container.style.display = "flex";
      container.style.flexDirection = "column";
      container.style.justifyContent = "space-between";
      brand.style.textAlign = "center";
      brand.style.margin = "2rem";
      brand.style.border = "thick dotted black";
      models.style.textAlign = "center";
      /* Append Childs */
      place.appendChild(brand);
      place.appendChild(models);
      list.appendChild(place);
      container.appendChild(list);
    });
  });
