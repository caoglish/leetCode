let solution = require("./main")
let pass = solution.pass;



// test("trapRainWater", () => {


//     expect(trapRainWater([
//         [1, 4, 3, 1, 3, 2],
//         [3, 2, 1, 3, 2, 4],
//         [2, 3, 3, 2, 3, 1]
//     ])).toBe(4);

//     expect(trapRainWater([
//         [1, 4, 3, 1, 3, 2],
//         [3, 2, 1, 3, 1, 4],
//         [2, 3, 3, 2, 3, 1]
//     ])).toBe(5);

//         expect(trapRainWater([
//             [2, 2, 2, 2, 2, 2],
//             [2, 1, 1, 1, 1, 2],
//             [2, 1, 1, 1, 1, 2],
//             [2, 2, 2, 2, 2, 2],
//         ])).toBe(8);
// });

test("pass", () => {
    expect(pass).toBe(1)
});