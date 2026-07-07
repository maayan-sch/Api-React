import axios from "axios";

export default function loadPosts(url) {
  return axios.get(url);
}
