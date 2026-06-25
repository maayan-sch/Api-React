//import React from "react";
//import "../styles.css";
import {useParams} from 'react-router-dom';

export default function Details({apis, favorites, toggleFavorites}) {
const param = useParams();
const id = parseInt(param.id);

const api = apis.find(api => api.id === id)
if (!api)
    return <h3>Loading...</h3>
  
const isFavorite=favorites.includes(api.id)

    return (
    <div key={api.id}>
      <div>
        <h1>{api.userId}</h1>
        <h2> {api.title}</h2>        
        <h4>{api.body}</h4>
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
