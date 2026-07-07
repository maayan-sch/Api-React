import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PostCard({ post, toggleFavorites, isFavorite }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      key={post.id}
      className="flex h-full flex-col rounded-xl bg-white dark:bg-[#1b263b] border border-[#e7ecef] dark:border-[#415a77] p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="flex flex-1 flex-col">
        <p className="mb-2 text-sm font-medium text-[#8b8c89] dark:text-[#778da9]">
          Post #{post.id}
        </p>

        <h2 className="line-clamp-2 text-center text-xl font-bold text-[#274c77] dark:text-[#e0e1dd]">
          {post.title}
        </h2>

        <div className="mt-auto mb-6 text-center">
          <Link
            to={`/Details/${post.id}`}
            className="font-medium text-[#6096ba] dark:text-[#778da9] hover:text-[#a3cef1] dark:hover:text-[#e0e1dd] transition"
          >
            View More Details
          </Link>
        </div>
      </div>

      <button
        onClick={() => toggleFavorites(post.id)}
        className={`mt-auto mx-auto flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${
          isFavorite
            ? "bg-[#6096ba] text-white hover:bg-[#a3cef1] dark:bg-[#415a77]"
            : "border border-[#6096ba] text-[#6096ba] hover:bg-[#e7ecef] dark:border-0 dark:bg-[#415a77] dark:text-white"
        }`}
      >
        {isFavorite ? "★ Remove from favorites" : "☆ Add to Favorites"}
      </button>
    </motion.div>
  );
}
