import { isFavorite, toggleFavorite } from "./favorites.js";

//
const displayCharacters = (characters, charactersDiv) => {
  charactersDiv.innerHTML = ""; // Limpiar el contenido anterior

  characters.slice(0, 6).forEach((character) => {
    const characterElement = createCharacterElement(character);
    charactersDiv.appendChild(characterElement);
    addFavoriteButtonEvent(characterElement, character); // Pasar characterElement como argumento
  });
};

const createCharacterElement = (character) => {
  const characterElement = document.createElement("div");
  characterElement.innerHTML = `
    <h2 class="caracter-nombres">${character.name}</h2>
    <img src="${character.image}" alt="${character.name}">
    <p class="infocharacter"><strong>Estado:</strong> ${character.status}</p>
    <p class="infocharacter"><strong>Especies:</strong> ${character.species}</p>
    <p class="infocharacter"><strong>Tipo:</strong> ${
      character.type || "Unknown"
    }</p>
    <p class="infocharacter"><strong>Género:</strong> ${character.gender}</p>
    <p class="infocharacter"><strong>Origen:</strong> ${
      character.origin.name
    }</p>
    <p class="infocharacter"><strong>Locación:</strong> ${
      character.location.name
    }</p>
    <button class="favorite-button" data-id="${character.id}">
      <i class="fas fa-heart"></i>
    </button>
        `;
  // Obtener el botón de favoritos
  const favoriteButton = characterElement.querySelector(".favorite-button");

  // Configurar estado inicial del botón
  if (isFavorite(character)) {
    favoriteButton.classList.add("active");
  } else {
    favoriteButton.classList.remove("active");
  }

  // Configurar evento de clic para alternar favorito
  favoriteButton.addEventListener("click", () => {
    toggleFavorite(character, favoriteButton);

    // Alternar clase 'active' para visualización
    favoriteButton.classList.toggle("active");
  });

  return characterElement;
};

const addFavoriteButtonEvent = (characterElement, character) => {
  const favoriteButton = characterElement.querySelector(".favorite-button");

  // Configurar evento de clic para alternar favorito
  favoriteButton.addEventListener("click", () => {
    toggleFavorite(character, favoriteButton);

    // Alternar clase 'active' para visualización
    favoriteButton.classList.toggle("active");
  });
};

const updateButtons = (currentPage, totalPages, prevButton, nextButton) => {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
};

const updatePageInfo = (currentPage, totalPages, pageInfo) => {
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
};

export {
  displayCharacters,
  updateButtons,
  updatePageInfo,
  createCharacterElement,
};
