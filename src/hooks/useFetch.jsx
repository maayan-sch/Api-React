import { useState, useEffect, useCallback } from "react";
import loadPosts from "../services/loadingPosts";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(() => {
    loadPosts(url)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setError("Could not load data right now.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
}
