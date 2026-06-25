import axios from "axios";
import { useState,useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import Apis from './components/Apis'
import { Route, Routes, Link } from "react-router-dom";
import Favorites from './components/Favorites'
import Details from "./components/Details";

export default function App() {
  const [apis, setApis] = useState([]);
  const [favorites, setFavorites] = useState([]);

   useEffect(() => {
    axios
  .get("https://jsonplaceholder.typicode.com/posts", {
  })
  .then((response) => {
    console.log(response.data);
    setApis(response.data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Request completed");
  });
},[])

const toggleFavorites = (apiId) => {
    setFavorites((prev) =>
      prev.includes(apiId)
        ? prev.filter((id) => id !== apiId)
        : [...prev, apiId],
    );
  }

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
                <Apis
                  favorites={favorites}
                  apis={apis}
                  toggleFavorites={toggleFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  apis={apis}
                  toggleFavorites={toggleFavorites}
                />
              }
            />
            <Route
              path="/details/:id"
              element={
                <Details
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

  


