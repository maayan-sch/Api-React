import axios from "axios";

export default async function loadPosts(url) {
  try {
    return await axios.get(url);
  } catch {
    throw new Error("Could not load data right now.");
  }
}
