import axios from "axios";


export default function loadPosts() {
   return axios
  .get("https://jsonplaceholder.typicode.com/posts", {
  })
  }



 