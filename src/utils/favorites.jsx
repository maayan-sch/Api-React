export default function updateFavorites(favorites, apiId) {
  return favorites.includes(apiId)
    ? favorites.filter((item) => item !== apiId)
    : [...favorites, apiId];
}