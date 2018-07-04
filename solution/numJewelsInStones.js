var numJewelsInStones = function (J, S) {
    return S.split("").reduce(function (sum, s) {
        return sum += J.indexOf(s) >= 0 ? 1 : 0
    }, 0);
}

module.exports = numJewelsInStones;