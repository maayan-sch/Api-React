import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DetailsPage({
  posts,
  favorites,
  toggleFavorites,
  loading,
  error,
}) {
  const param = useParams();

  const id = parseInt(param.id);

  const post = posts.find((post) => post.id === id);

  if (loading) return <h3>Loading...</h3>;

  if (!post)
    return (
      <div>
        <h3>Page not found</h3>
        <Link
          to="/"
          className="rounded-md px-4 py-2 text-white transition hover:bg-slate-700"
        >
          Go Home
        </Link>
      </div>
    );

  if (error) {
    return (
      <div>
        <h3>There was an error, Trt again</h3>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  const isFavorite = favorites.includes(post.id);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-md">
          <p className="mb-2 text-sm font-medium text-slate-400">
            Post #{post.id}
          </p>

          <p className="mb-6 text-sm font-medium text-cyan-600">
            User #{post.userId}
          </p>

          <h1 className="mb-6 text-3xl font-semibold text-slate-800">
            {post.title}
          </h1>

          <div className="mb-8 border-t border-slate-200 pt-6">
            <p className="whitespace-pre-line leading-8 text-slate-600">
              {post.body}
            </p>
          </div>

          <button
            onClick={() => toggleFavorites(post.id)}
            className={`rounded-lg px-5 py-2 font-medium transition ${
              isFavorite
                ? "bg-cyan-600 text-white hover:bg-cyan-700"
                : "border border-cyan-600 text-cyan-600 hover:bg-cyan-50"
            }`}
          >
            {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
