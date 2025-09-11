export const selectFavorites = (state) => state.favourites.items;
export const selectIsFavorite = (carId) => (state) =>
  state.favourites.items.includes(carId);
