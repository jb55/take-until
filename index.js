
module.exports = function takeUntil(xs, pred) {
  for (var i = 0; i < xs.length; ++i) {
    var x = xs[i];
    if (pred(x)) return xs.slice(0, i);
  }
  return xs;
};
