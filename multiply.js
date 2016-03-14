module.exports = function *multiplier() {
      // `yield` all integers multiplied by the value passed in via `.next()`
    var value = 1;
    var multiplier = 1;
    while (true) {
        var multiplier = yield value * multiplier
        value++;
        multiplier = multiplier || 1;
    }
}
