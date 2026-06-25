//import React from "react";
//import "../styles.css";
import Api from '../components/Api';

export default function FavoritesPage({ favorites, apis, toggleFavorites }) {
  return (
    <div>
      <h2>Your Favorites Api's</h2>
      <div>
        {favorites.map((id) => {
          const api = apis.find((api) => api.id === id);
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
