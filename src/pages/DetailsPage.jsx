import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DetailsPage({
  posts,
  favorites,
  toggleFavorites,
  loading,
  error,
  refetch,
}) {
  const { id: routeId } = useParams();
  const id = Number(routeId);

  const post = posts.find((post) => post.id === id);

  if (loading)
    return <h3 className="text-center text-[#6096ba] pt-10">Loading...</h3>;

  if (error)
    return (
      <div className="text-center pt-10">
        <h3 className="text-lg font-medium text-[#274c77] mb-3">
          Something went wrong
        </h3>

        <p className="text-[#8b8c89] mb-3">{error}</p>

        <button
          onClick={() => refetch()}
          className="text-[#6096ba] hover:text-[#a3cef1] underline cursor-pointer"
        >
          Try Again
        </button>
      </div>
    );

  if (!post)
    return (
      <div className="text-center pt-10">
        <h3 className="text-lg font-medium text-[#274c77] mb-3">
          Post not found
        </h3>

        <Link to="/" className="text-[#6096ba] hover:text-[#a3cef1] underline">
          Go Home
        </Link>
      </div>
    );

  const isFavorite = favorites.includes(post.id);

  return (
    <motion.div
      className="min-h-screen bg-[#e7ecef] pt-20 dark:bg-[#0d1b2a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex h-full flex-col rounded-xl border border-[#e7ecef] bg-white p-8 shadow-md transition duration-300 hover:shadow-2xl dark:border-[#415a77] dark:bg-[#1b263b]">
          <p className="mb-2 text-sm font-medium text-[#8b8c89] dark:text-[#778da9]">
            Post #{post.id}
          </p>

          <p className="mb-6 text-sm font-medium text-[#6096ba] dark:text-[#778da9]">
            User #{post.userId}
          </p>

          <h1 className="mb-6 text-3xl font-bold text-[#274c77] dark:text-[#e0e1dd]">
            {post.title}
          </h1>

          <div className="mb-8 border-t border-[#e7ecef] pt-6">
            <p className="whitespace-pre-line leading-8 text-[#8b8c89] dark:text-[#778da9]">
              {post.body}
            </p>
          </div>

          <div className="mt-auto flex justify-center">
            <button
              onClick={() => toggleFavorites(post.id)}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition
              ${
                isFavorite
                  ? "bg-[#6096ba] text-white hover:bg-[#a3cef1] dark:bg-[#415a77] hover:dark:bg-[#778da9]"
                  : "border border-[#6096ba] text-[#6096ba] hover:bg-[#e7ecef] dark:bg-0 dark:text-white dark:border-[#e0e1dd] hover:dark:bg-[#778da9]"
              }`}
            >
              {isFavorite ? "★ Remove from favorites" : "☆ Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
