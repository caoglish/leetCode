const twoSum = require("../solution/twoSum");


test("sum", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(() => {
        twoSum([1, 2, 31, 15], 9)
    }).toThrow();
});
