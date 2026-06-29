import { describe, it, expect } from "vitest";
import  updateFavorites  from "../utils/favorites";

describe("updateFavorites", () => {
  it("adds a new favorite", () => {
    expect(updateFavorites([1, 2], 3)).toEqual([1, 2, 3]);
  });

  it("removes an existing favorite", () => {
    expect(updateFavorites([1, 2, 3], 2)).toEqual([1, 3]);
  });
});