import PostCard from '../components/PostCard';

export default function FavoritesPage({ favorites, posts, toggleFavorites }) {

  return (
    <div className="pt-16">
      <h1 className="text-3xl font-semibold text-slate-700 pt-5 pb-5">
          My Favorites 🤍
        </h1>
      <div>
        {favorites.map((id) => {
          const post = posts.find((post) => post.id === id);
          return (
            <PostCard
              key={id}
              post={post}
              isFavorite={true}
              toggleFavorites={toggleFavorites}
            />
          );
        })}
      </div>
    </div>
  );
}
