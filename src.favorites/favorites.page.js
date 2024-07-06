//favorites.page.js

import { getFavorites } from "../src.main/src/favorites.js";
import { createCharacterElement } from "../src.main/src/user.Interface.js";

const favoritesContainer = document.getElementById("characters");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const pageInfo = document.getElementById("page-info");

let currentPage = 1;
let totalPages = 1;
const charactersPerPage = 6;

const displayFavorites = (page) => {
  const favorites = getFavorites();
  favoritesContainer.innerHTML = "";

  //calcula el total de paginas
  totalPages = Math.ceil(favorites.length / charactersPerPage);
  if (totalPages === 0) {
    favoritesContainer.innerHTML = "<p>No hay personajes favoritos.</p>";
    pageInfo.textContent = "";
    return;
  }

  //calcula el rango de personajes a mostrar
  const start = (page - 1) * charactersPerPage;
  const end = start + charactersPerPage;
  const favoritesToShow = favorites.slice(start, end);

  favoritesToShow.forEach((character) => {
    const characterElement = createCharacterElement(character);
    favoritesContainer.appendChild(characterElement);
  });

  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
};

//manejar la paginación
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayFavorites(currentPage);
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayFavorites(currentPage);
  }
});

displayFavorites(currentPage);

//TODO reutilizacion de codigo como por ejemplo el de los botones, y que la carpeta este dentro del src.main
