import "@testing-library/jest-dom/vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import useFetch from "../hooks/useFetch.jsx";
import loadPosts from "../services/loadingPosts.jsx";
import ErrorBoundary from "../components/ErrorBoundary";

vi.mock("../services/loadingPosts.jsx", () => ({
  default: vi.fn(),
}));

describe("useFetch", () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns the initial state immediately after render", () => {
    const { result } = renderHook(() => useFetch(url));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBe("");
  });

  it("loads data successfully and clears the error", async () => {
    loadPosts.mockResolvedValueOnce({
      data: [{ id: 1, title: "Hello world" }],
    });

    const { result } = renderHook(() => useFetch(url));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(loadPosts).toHaveBeenCalledWith(url);
    expect(result.current.data).toEqual([{ id: 1, title: "Hello world" }]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("");
  });

  it("handles a failed request and keeps the data empty", async () => {
    loadPosts.mockRejectedValueOnce(
      new Error("No internet connection. Check your network and try again."),
    );

    const { result } = renderHook(() => useFetch(url));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(loadPosts).toHaveBeenCalledWith(url);
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(
      "No internet connection. Check your network and try again.",
    );
  });

  it("retries fetchData after an error", async () => {
    loadPosts
      .mockRejectedValueOnce(new Error("Network Error"))
      .mockResolvedValueOnce({
        data: [{ id: 2, title: "Retry success" }],
      });

    const { result } = renderHook(() => useFetch(url));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("Network Error");

    await act(async () => {
      await result.current.fetchData();
    });

    expect(loadPosts).toHaveBeenCalledTimes(2);
    expect(result.current.data).toEqual([{ id: 2, title: "Retry success" }]);
    expect(result.current.error).toBe("");
  });
});

function BuggyComponent() {
  throw new Error("Test error");
}

describe("ErrorBoundary", () => {
  it("displays fallback when a component throws", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <BuggyComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    vi.restoreAllMocks();
  });
});
