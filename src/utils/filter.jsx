export default function matchesUserId (userId, post)  {
    return (
      userId === "All Users" ||
      post.userId === parseInt(userId)
    );
  };