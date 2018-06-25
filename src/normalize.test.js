import normalize from "./normalize";

describe("normalize", () => {
  it("adds child key array to items", () => {
    const response = [
      { id: 1, parent_id: null, name: "city" },
      { id: 2, parent_id: 1, name: "airport" },
      { id: 3, parent_id: 1, name: "police" },
      { id: 4, parent_id: 3, name: "swamp police" },
      { id: 5, parent_id: null, name: "technic" },
      { id: 6, parent_id: 5, name: "arctic" }
    ];

    const normalized = [
      { id: 1, parent_id: null, name: "city", children: [2, 3, 4] },
      { id: 2, parent_id: 1, name: "airport", children: [] },
      { id: 3, parent_id: 1, name: "police", children: [4] },
      { id: 4, parent_id: 3, name: "swamp police", children: [] },
      { id: 5, parent_id: null, name: "technic", children: [6] },
      { id: 6, parent_id: 5, name: "arctic", children: [] }
    ];

    expect(normalize(response)).toEqual(normalized);
  });
});
