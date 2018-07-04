const isPowerOfTwo = require("../solution/isPowerOfTwo").isPowerOfTwo;
const isPowerOfTwo1 = require("../solution/isPowerOfTwo").isPowerOfTwo1;

test("isPowerOfTwo", () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(16)).toBe(true);
    expect(isPowerOfTwo(256)).toBe(true);
    expect(isPowerOfTwo(218)).toBe(false);

});
test("isPowerOfTwo1", () => {
    expect(isPowerOfTwo1(1)).toBe(true);
    expect(isPowerOfTwo1(2)).toBe(true);
    expect(isPowerOfTwo1(16)).toBe(true);
    expect(isPowerOfTwo1(256)).toBe(true);
    expect(isPowerOfTwo1(218)).toBe(false);

});
