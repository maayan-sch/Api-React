//import React from "react";
//import "../styles.css";
import Api from "./Api";

export default function Favorites({ favorites, apis, toggleFavorites }) {
  return (
    <div>
      <h1>Your Favorites Api's</h1>
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
