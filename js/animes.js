const section = document.querySelector("#content-animes");
const animes = JSON.parse(localStorage.getItem("animeData"));

animes.forEach((anime, index) => {
    let article = document.createElement("article");

    article.innerHTML = `
        <div class="anime">
            <h2 class="anime-title"> ${anime.title} </h2>
            <p class="anime-genre">Principal Genre: ${anime.genre} </p>
            <p class="anime-status">Anime status: ${anime.status} </p>

            <button class="btnDelete" data-index="${index}">Delete</button>
        </div>
    `;

    section.appendChild(article);
});

section.addEventListener("click", (event) => {
    if(event.target.classList.contains("btnDelete")){
        const index = event.target.getAttribute("data-index");

        //Eliminar el anime del array:
        animes.splice(index, 1);

        //Guardar cambios en el LS:
        localStorage.setItem("animeData", JSON.stringify(animes));

        //Actualizar pagina:
        location.reload();
    }
});