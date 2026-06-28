//import React from "react";
//import "../styles.css";
import { Link } from "react-router-dom";

export default function Api({ api, toggleFavorites, isFavorite }) {
  return (
   <div
  key={api.id}
     className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"

>
  <div className="flex flex-1 flex-col">
    <p className="mb-2 text-sm font-medium text-slate-400">
  Post #{api.id}
</p>
  <h2
    title={api.title}
    className="line-clamp-2 text-center text-xl font-bold text-slate-800"
  >
    {api.title}
  </h2>

  <div className="mt-auto mb-6 text-center">
    <Link
      to={`/Details/${api.id}`}
      className="font-medium text-cyan-600 transition hover:text-cyan-500"
    >
      View More Details
    </Link>
  </div>
</div>

<button
  onClick={() => toggleFavorites(api.id)}
  className={`mt-auto mx-auto flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition
    ${
      isFavorite
        ? "bg-cyan-600 text-white hover:bg-cyan-700"
        : "border border-cyan-600 text-cyan-600 hover:bg-cyan-50"
    }`}
>
  {isFavorite ? "★ Remove from favorites" : "☆ Add to Favorites"}
</button>
</div>
  );
}
