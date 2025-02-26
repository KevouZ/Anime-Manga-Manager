const form = document.querySelector(".content-form");
const btnAnime = document.querySelector("#addAnime");
const btnManga = document.querySelector("#addManga");

function addSerie(type){
    const title = document.querySelector("#nameInput").value.trim();
    const genre = document.querySelector("#genreInput").value.trim();
    const status = document.querySelector("input[name='statusInput']:checked").value;

    if (!title || !genre) {
        alert("Please fill in all the details.");
        return;
    }

    const series = JSON.parse(localStorage.getItem(`${type}Data`)) || [];
    const serieData = { title, genre, status };
    series.push(serieData);

    localStorage.setItem(`${type}Data`, JSON.stringify(series));
    form.reset();
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
});

btnAnime.addEventListener("click", () => addSerie("anime"));
btnManga.addEventListener("click", () => addSerie("manga"));
