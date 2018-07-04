const numJewelsInStones = require("../solution/numJewelsInStones");







test("numJewelsInStones", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
});
