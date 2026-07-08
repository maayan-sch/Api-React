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
    fetchData: refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [userId, setUserId] = useState("All Users");
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorites = (postId) => {
    setFavorites((prev) => updateFavorites(prev, postId));
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const filteredPosts = posts.filter((post) => matchesUserId(userId, post));

  if (loading) {
    return (
      <div className="min-h-screen bg-[#e7ecef]">
        <div className="h-16 bg-[#274c77] animate-pulse" />

        <div className="h-12 bg-[#6096ba] animate-pulse mt-2 mx-6 rounded-md" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 shadow-md animate-pulse flex flex-col gap-3"
            >
              <div className="h-4 bg-[#8b8c89] rounded w-1/3 mx-auto"></div>

              <div className="h-5 bg-[#8b8c89] rounded w-3/4 mx-auto"></div>

              <div className="h-3 bg-[#e7ecef] rounded w-full"></div>
              <div className="h-3 bg-[#e7ecef] rounded w-5/6"></div>

              <div className="h-8 w-32 bg-[#8b8c89] rounded mx-auto mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (posts.length === 0)
    return (
      <h3 className="text-center text-[#8b8c89] pt-10">There is no data</h3>
    );

  return (
    <div className="min-h-screen bg-[#e7ecef] text-black dark:bg-[#0d1b2a] dark:text-[#e0e1dd]">
      <div>
        <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-[#274c77] dark:bg-[#1b263b] shadow-lg">
          <ul className="flex items-center gap-6 px-8 py-4 w-full">
            <li>
              <Link
                to="/"
                className="rounded-md px-4 py-2 text-[#e7ecef] dark:text-[#e0e1dd] transition hover:bg-[#8b8c89] dark:hover:bg-[#415a77]"
              >
                All Posts
              </Link>
            </li>

            <li>
              <Link
                to="/favorites"
                className="rounded-md px-4 py-2 text-[#e7ecef] dark:text-[#e0e1dd] transition hover:bg-[#8b8c89] dark:hover:bg-[#415a77]"
              >
                Favorites
              </Link>
            </li>

            <li className="ml-auto">
              <button
                onClick={toggleTheme}
                className={`relative flex h-8 w-32 items-center rounded-full p-1 transition ${
                  theme === "dark" ? "bg-[#415a77]" : "bg-[#6096ba]"
                }`}
              >
                <div
                  className={`absolute h-6 w-14 rounded-full transition-transform duration-300 ${
                    theme === "dark"
                      ? "translate-x-16 bg-[#e0e1dd]"
                      : "translate-x-0 bg-[#e7ecef]"
                  }`}
                />

                <span
                  className={`z-10 w-1/2 text-center text-xs font-semibold transition ${
                    theme === "light" ? "text-[#274c77]" : "text-[#0d1b2a]"
                  }`}
                >
                  Light
                </span>

                <span
                  className={`z-10 w-1/2 text-center text-xs font-semibold transition ${
                    theme === "dark" ? "text-[#0d1b2a]" : "text-[#e7ecef]"
                  }`}
                >
                  Dark
                </span>
              </button>
            </li>
          </ul>
        </nav>
        {error ? (
          <div className="text-center pt-10">
            <h3 className="text-lg font-medium text-[#8b8c89] mb-3">
              Something went wrong
            </h3>

            <p className="text-[#8b8c89] mb-3">{error}</p>

            <button
              onClick={() => refetch()}
              className="text-[#6096ba] hover:text-[#8b8c89] underline cursor-pointer"
            >
              Try Again
            </button>
          </div>
        ) : (
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
                  refetch={refetch}
                />
              }
            />
          </Routes>
        )}
      </div>
    </div>
  );
}
