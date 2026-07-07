import PostCard from "../components/PostCard";

export default function HomePage({
  favorites,
  toggleFavorites,
  filteredPosts,
  userId,
  handleUserIdChange,
}) {
  return (
    <div className="pt-16">
      <div className="sticky top-16 z-40 flex items-center gap-4 px-8 py-2 bg-[#6096ba] dark:bg-[#1b263b] shadow-md w-full">
        <label className="text-white font-medium">Filter by User</label>

        <select
          value={userId}
          onChange={handleUserIdChange}
          className="rounded-md bg-[#274c77] dark:bg-[#1b263b] px-4 py-2 text-white dark:text-[#e0e1dd]"
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
        {filteredPosts.map((post) => (
          <PostCard
            post={post}
            key={post.id}
            isFavorite={favorites.includes(post.id)}
            toggleFavorites={toggleFavorites}
          />
        ))}
      </div>
    </div>
  );
}
