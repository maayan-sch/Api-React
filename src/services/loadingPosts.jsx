import axios from "axios";
import getUserFriendlyMessage from "../utils/ErrorMessage.jsx";

export default async function loadPosts(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    throw new Error(getUserFriendlyMessage(error), { cause: error });
  }
}
