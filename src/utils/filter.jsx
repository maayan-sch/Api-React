export default function matchesUserId (userId, api)  {
    return (
      userId === "All Users" ||
      api.userId === parseInt(userId)
    );
  };