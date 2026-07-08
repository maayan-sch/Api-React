import { describe, it, expect } from "vitest";
import matchesUserId from "../utils/filter";

describe("matchesUserId", () => {
  it("returns true for All Users", () => {
    expect(matchesUserId("All Users", { userId: 7 })).toBe(true);
  });

  it("returns false when ids are different", () => {
    expect(matchesUserId("3", { userId: 7 })).toBe(false);
  });
});
