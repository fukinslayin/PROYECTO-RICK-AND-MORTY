// Obtener favoritos desde localStorage
const favoritesKey = "favorites";
const getFavorites = () => {
  return JSON.parse(localStorage.getItem(favoritesKey)) || [];
};

// Guardar favoritos en localStorage
const saveFavorites = (favorites) => {
  localStorage.setItem(favoritesKey, JSON.stringify(favorites));
};

// Verificar si un personaje ya es favorito
const isFavorite = (character) => {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.id === character.id);
};
// Alternar el estado de favorito para un personaje
const toggleFavorite = (character) => {
  let favorites = getFavorites();

  if (isFavorite(character)) {
    favorites = favorites.filter((fav) => fav.id !== character.id);
  } else {
    favorites.push(character);
  }

  saveFavorites(favorites);
};

export { getFavorites, saveFavorites, toggleFavorite, isFavorite };
