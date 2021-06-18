const {Joinable} = require('../joinable/joinable.js');

class Either extends Joinable {
  constructor(value) {
    super();
    this.value = value;
  }

  value() {
    return this.value;
  }
}

Either.left = function(value) {
  return new Left(value);
};

Either.right = function(value) {
  return new Right(value);
};

Either.fromNullable = function(value) {
  return value === null ? Either.left(value) : Either.right(value);
};

Either.of = function(value) {
  return Either.right(value);
};

class Left extends Either {
  value() {
    throw new Error('Can\'t extract value of a Left');
  }

  getOrElse(fallbackValue) {
    return fallbackValue;
  }

  getOrElseThrow(message) {
    throw new Error(message);
  }

  orElse(f) {
    return f(this.value);
  }

  map(_) {
    return this;
  }

  chain(_) {
    return this;
  }

  filter(_) {
    return this;
  }

  toString() {
    return `Either.Left (${this.value})`;
  }
}

class Right extends Either {
  getOrElse(_) {
    return this.value;
  }

  getOrElseThrow(_) {
    return this.value;
  }

  orElse(_) {
    return this;
  }

  map(f) {
    return Either.of(f(this.value));
  }

  chain(f) {
    return f(this.value);
  }

  filter(f) {
    return Either.fromNullable(f(this.value) ? this.value : null);
  }

  toString() {
    return `Either.Right (${this.value})`;
  }
}

module.exports = {Either, Left, Right};
