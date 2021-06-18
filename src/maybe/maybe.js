const {Joinable} = require('../joinable/joinable.js');

class Maybe extends Joinable {
  isNothing() {
    return false;
  }

  isJust() {
    return false;
  }
}

Maybe.just = function(value) {
  return new Just(value);
};

Maybe.nothing = function() {
  return new Nothing();
};

Maybe.fromNullable = function(value) {
  return value === null ? Maybe.nothing() : Maybe.just(value);
};

Maybe.of = function(value) {
  return Maybe.just(value);
};

class Just extends Maybe {
  constructor(value) {
    super();
    this.value = value;
  }

  value() {
    return this.value;
  }

  map(f) {
    return Maybe.of(f(this.value));
  }

  filter(f) {
    return Maybe.fromNullable(f(this.value) ? this.value : null);
  }

  getOrElse(_) {
    return this.value;
  }

  isJust() {
    return true;
  }

  toString() {
    return `Maybe.Just (${this.value})`;
  }
}

class Nothing extends Maybe {
  value() {
    throw new Error('Can\'t extract value of a Nothing');
  }

  map(_) {
    return this;
  }

  filter(_) {
    return this;
  }

  // Override
  join() {
    return this;
  }

  getOrElse(fallbackValue) {
    return fallbackValue;
  }

  isNothing() {
    return true;
  }

  toString() {
    return 'Maybe.Nothing';
  }
}

module.exports = {Maybe, Just, Nothing};
