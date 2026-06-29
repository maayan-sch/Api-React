//import React, { useState } from "react";
//import "../styles.css";
import Api from '../components/Api'


export default function HomePage({ favorites, toggleFavorites, filteredPosts,userId,handleUserIdChange }) {
  return (
    <div className="pt-16">
      <div className="sticky top-16 z-40 flex items-center gap-4 px-8 py-2 bg-slate-700 shadow-md w-full">
  <label className="text-white font-medium">
    Filter by User
  </label>

  <select
    value={userId}
    onChange={handleUserIdChange}
    className="rounded-md border border-slate-500 bg-slate-800 px-4 py-2 text-white outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600"
  >
    <option>All Users</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
  </select>
</div>
       <div className="mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map((api) => (
        <Api
          api={api}
          key={api.id}
          isFavorite={favorites.includes(api.id)}
          toggleFavorites={toggleFavorites}
        />
      ))}
    </div>
    </div>
   
  );
}
