//import React from "react";
//import "../styles.css";
import { Link } from "react-router-dom";

export default function Api({ api, toggleFavorites, isFavorite }) {
  return (
    <div key={api.id}>
      <div>
        <h2> {api.title}</h2>
        <div>
          <Link to={`/Details/${api.id}`}>
        View More Details
        </Link>
        </div>
        <label>
          <input
            type="checkbox"
            checked={isFavorite}
            onChange={() => toggleFavorites(api.id)}
          ></input>
          <span>
            <span>{isFavorite ? "In Favorites" : "Add to favorites"}</span>
          </span>
        </label>
      </div>
    </div>
  );
}
