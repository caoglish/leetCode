const hammingDistance = require("../solution/hammingDistance");


test("hammingDistance", () => {
    expect(hammingDistance(1, 4)).toBe(2);
    expect(hammingDistance(4, 9)).toBe(3);
});