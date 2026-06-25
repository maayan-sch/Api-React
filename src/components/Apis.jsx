//import React, { useState } from "react";
//import "../styles.css";
import Api from "./Api";

export default function Apis({ favorites, apis, toggleFavorites }) {
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
