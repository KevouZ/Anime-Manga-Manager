const section = document.querySelector("#content-mangas");
const mangas = JSON.parse(localStorage.getItem("mangaData"));

mangas.forEach((manga, index) => {
    let article = document.createElement("article");

    article.innerHTML = `
        <div class="manga">
            <h2 class="manga-title"> ${manga.title} </h2>
            <p class="manga-genre">Principal Genre: ${manga.genre} </p>
            <p class="manga-status">Manga status: ${manga.status} </p>

            <button class="btnDelete" data-index="${index}">Delete</button>
        </div>
    `;

    section.appendChild(article);
});

section.addEventListener("click", (event) => {
    if(event.target.classList.contains("btnDelete")){
        const index = event.target.getAttribute("data-index");

        //Eliminar el anime del array:
        mangas.splice(index, 1);

        //Guardar cambios en el LS:
        localStorage.setItem("mangaData", JSON.stringify(mangas));

        //Actualizar pagina:
        location.reload();
    }
});