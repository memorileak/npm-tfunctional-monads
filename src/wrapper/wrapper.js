const {Joinable} = require('../joinable/joinable.js');

class Wrapper extends Joinable {
  constructor(value) {
    super();
    this.value = value;
  }

  map(f) {
    return Wrapper.of(f(this.value));
  }

  toString() {
    return `Wrapper (${this.value})`;
  }
}

Wrapper.of = function(value) {
  return new Wrapper(value);
};

module.exports = {Wrapper};
