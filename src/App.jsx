import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import DetailsPage from "./pages/DetailsPage";
import updateFavorites from "./utils/favorites";
import matchesUserId from "./utils/filter";
import useFetch from "./hooks/useFetch";

export default function App() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [userId, setUserId] = useState("All Users");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorites = (postId) => {
    setFavorites((prev) => updateFavorites(prev, postId));
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const filteredPosts = posts.filter((post) => matchesUserId(userId, post));

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>The error is: {error.message}</h3>;

  if (posts.length === 0) return <h3>There is no data</h3>;

  return (
    <div className="min-h-screen bg-slate-100">
      <div>
        <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-slate-800 shadow-lg">
          <ul className="flex items-center gap-6 px-8 py-4">
            <li>
              <Link
                to="/"
                className="rounded-md px-4 py-2 text-white transition hover:bg-slate-700"
              >
                All Posts
              </Link>
            </li>

            <li>
              <Link
                to="/favorites"
                className="rounded-md px-4 py-2 text-white transition duration-200 hover:bg-slate-700 hover:text-cyan-500 "
              >
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HomePage
                  favorites={favorites}
                  filteredPosts={filteredPosts}
                  toggleFavorites={toggleFavorites}
                  handleUserIdChange={handleUserIdChange}
                  userId={userId}
                />
              </div>
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                posts={posts}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route
            path="/Details/:id"
            element={
              <DetailsPage
                favorites={favorites}
                toggleFavorites={toggleFavorites}
                posts={posts}
                loading={loading}
                error={error}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
