/*global test  expect*/
const balancedStringSplit = require('../solution/balancedStringSplit');



test('balancedStringSplit', () => {
    expect(balancedStringSplit("RLRRLLRLRL")).toEqual(4);
    expect(balancedStringSplit("RLLLLRRRLR")).toBe(3);
    expect(balancedStringSplit("LLLLRRRR")).toBe(1);
    expect(balancedStringSplit("RLRRRLLRLL")).toBe(2);

});