export default function getUserFriendlyMessage(error) {
  if (error.response?.status === 404) {
    return "Resource not found.";
  }

  if (error.code === "ECONNABORTED") {
    return "Request timed out. Please try again.";
  }

  if (error.message === "Network Error" || (!error.response && error.request)) {
    return "No internet connection. Check your network and try again.";
  }

  if (error.response?.status === 500) {
    return "Internal server error. Please try again later.";
  }

  return "Could not load data right now.";
}
