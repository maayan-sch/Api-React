//import React, { useState } from "react";
//import "../styles.css";
import Api from '../components/Api'

export default function HomePage({ favorites, apis, toggleFavorites }) {
  return (
    <div>
      {apis.map((api) => (
        <Api
          api={api}
          key={api.id}
          isFavorite={favorites.includes(api.id)}
          toggleFavorites={toggleFavorites}
        />
      ))}
    </div>
  );
}
