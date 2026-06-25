//import React from "react";
//import "../styles.css";
import { Link } from "react-router-dom";

export default function Api({ api, toggleFavorites, isFavorite }) {
  return (
    <div key={api.id}>
      <div>
        {/* <h1>{api.userId}</h1> */}
        <h2> {api.title}</h2>
        <div>
          <Link to={`/details/${api.id}`}>
        View More Details
        </Link>
        </div>
        
        {/* <h4>{api.body}</h4> */}
        <label>
          <input
            type="checkbox"
            checked={isFavorite}
            onChange={() => toggleFavorites(api.id)}
          ></input>
          <span>
            <span>{isFavorite ? "In Favorites" : "Mark as favorite"}</span>
          </span>
        </label>
      </div>
    </div>
  );
}
