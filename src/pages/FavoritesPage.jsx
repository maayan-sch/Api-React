//import React from "react";
//import "../styles.css";
import Api from '../components/Api';

export default function FavoritesPage({ favorites, posts, toggleFavorites }) {

  return (
    <div className="pt-16">
      <h1 className="text-3xl font-semibold text-slate-700 pt-5 pb-5">
          My Favorites 🤍
        </h1>
      <div>
        {favorites.map((id) => {
          const api = posts.find((api) => api.id === id);
          return (
            <Api
              key={id}
              api={api}
              isFavorite={true}
              toggleFavorites={toggleFavorites}
            ></Api>
          );
        })}
      </div>
    </div>
  );
}
