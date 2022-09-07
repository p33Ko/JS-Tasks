/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", () => {
  fetch("https://api.github.com/users")
    .then((response) => response.json())

    .then((data) => {
      data.forEach((users) => {
        /* Elements */
        const container = document.createElement("div");
        const login = document.createElement("h2");
        const avatarUrl = document.createElement("h2");

        /* Text Content */
        login.textContent = users.login;
        avatarUrl.textContent = users.avatar_url;

        /* Styles */
        container.style.text = "black";
        container.style.backgroundColor = "white";
        container.style.display = "flex";
        container.style.justifyContent = "space-between";

        /* Append Childs */
        container.append(login, avatarUrl);

        const results = document.getElementById("output");
        results.append(container);
      });
      document.getElementById("message").style.visibility = "hidden";
    });
});
