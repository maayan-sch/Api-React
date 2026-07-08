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
          className="rounded-md px-4 py-2 bg-[#274c77] dark:bg-[#415a77] text-white focus:outline-none focus:border-[#a3cef1] dark:focus:border-[#778da9]"
        >
          <option>All Users</option>
          {Array.from({ length: 10 }, (_, index) => index + 1).map(
            (userIdOption) => (
              <option key={userIdOption}>{userIdOption}</option>
            ),
          )}
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
