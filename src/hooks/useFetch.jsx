import { useState, useEffect, useRef, useCallback } from "react";
import loadPosts from "../services/loadingPosts";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cancelled = useRef(false);

  const fetchData = useCallback(async () => {
    if (cancelled.current) return;
    setLoading(true);
    setError("");

    try {
      const response = await loadPosts(url);
      if (cancelled.current) return;
      setData(response.data);
    } catch (error) {
      if (cancelled.current) return;
      setError(error.message || "An unexpected error occurred.");
    } finally {
      if (!cancelled.current) {
        setLoading(false);
      }
    }
  }, [url]);

  useEffect(() => {
    cancelled.current = false;

    const runFetch = async () => {
      await fetchData();
    };

    runFetch();

    return () => {
      cancelled.current = true;
    };
  }, [fetchData]);

  return { data, loading, error, fetchData };
}
