import { games } from "./data/data.js";

const ikona_wr = document.body.querySelector(".ikona");
const tekst_wr = document.body.querySelector(".tekst");
const left = document.body.querySelector(".left");
const right = document.body.querySelector(".right");
let count = 0;

function render() {
    ikona_wr.innerHTML = `<img src="img/${games[count].img}.jpg" alt="Okładka gry ${games[count].name}" />
    <h2>${games[count].name}</h2>`;
    tekst_wr.innerHTML = `<p>${games[count].content}</p>`;
};
render();

right.addEventListener("click", function() {
    if (count < games.length - 1) {
        count++;
        render();
    } else {
        count = 0;
        render();
    }
});
left.addEventListener("click", function() {
    if (count > 0 ) {
        count--;
        render();
    } else {
        count = games.length - 1;
        render();
    }
});