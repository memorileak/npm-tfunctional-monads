class IO {
  constructor(effect) {
    if (typeof effect !== 'function') {
      throw new Error('IO Usage: function required');
    }
    this.effect = effect;
  }

  map(f) {
    const effect = this.effect.bind(this);
    return IO.from(function() {
      return f(effect());
    });
  }

  chain(f) {
    return f(this.effect());
  }

  run() {
    return this.effect();
  }

  toString() {
    return 'IO';
  }
}

IO.of = function(value) {
  return new IO(() => value);
};

IO.from = function(effect) {
  return new IO(effect);
};

module.exports = {IO};
