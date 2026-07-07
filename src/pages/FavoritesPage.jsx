import PostCard from "../components/PostCard";
import { motion, AnimatePresence } from "framer-motion";

export default function FavoritesPage({ favorites, posts, toggleFavorites }) {
  return (
    <div className="pt-16 bg-[#e7ecef] min-h-screen">
      <h1 className="text-3xl font-semibold text-[#274c77] pt-5 pb-5">
        My Favorites 🤍
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {favorites.length === 0 ? (
            <div className="flex min-h-[65vh] items-center justify-center px-6">
              <div className="flex flex-col items-center text-center gap-4 bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-10 max-w-md">
                <img
                  src="/favorites.svg"
                  alt="No favorites"
                  className="w-36 md:w-44 opacity-90"
                />

                <h2 className="text-2xl font-semibold text-[#8b8c89]">
                  no favorites yet
                </h2>
              </div>
            </div>
          ) : (
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
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
