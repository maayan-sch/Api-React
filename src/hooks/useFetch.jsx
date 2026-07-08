import { useState, useEffect, useCallback } from "react";
import loadPosts from "../services/loadingPosts";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await loadPosts(url);
      setData(response.data);
    } catch {
      setError("Could not load data right now.");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    let isActive = true;

    const runFetch = async () => {
      if (!isActive) return;
      await fetchData();
    };

    runFetch();

    return () => {
      isActive = false;
    };
  }, [fetchData]);

  return { data, loading, error, fetchData };
}
