export default function updateFavorites(favorites, postId) {
  return favorites.includes(postId)
    ? favorites.filter((item) => item !== postId)
    : [...favorites, postId];
}