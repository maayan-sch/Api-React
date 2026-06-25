import { useState,useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes, Link } from "react-router-dom";
import FavoritesPage from './pages/FavoritesPage'
import DetailsPage from './pages/DetailsPage';
import loadPosts from './services/loadingPosts'

export default function App() {
  const [apis, setApis] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    loadPosts().then((response) => {
    setApis(response.data);
  })
  .catch((error) => {
    setError(error);
  })
  .finally(() => {
    setLoading(false);
  });
},[])

const toggleFavorites = (apiId) => {
    setFavorites((prev) =>
      prev.includes(apiId)
        ? prev.filter((id) => id !== apiId)
        : [...prev, apiId],
    );
  }

if(loading)
  return <h3>Loading...</h3>

if(error)
  return <h3>The error is: {error.message}</h3>

if(apis.length === 0)
  return <h3>There is no data</h3>

return (
    <div>
      <div>
          <nav>
            <ul>
              <li>
                <Link to="/">All Posts</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  favorites={favorites}
                  apis={apis}
                  toggleFavorites={toggleFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritesPage
                  favorites={favorites}
                  apis={apis}
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
                apis={apis}
                />
              }
            />
          </Routes>
      </div>
    </div>
  )
}

  


