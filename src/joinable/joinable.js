class Joinable {
  join() {
    if (
      (!this.value) || (!(this.value instanceof Joinable))
    ) {
      return this;
    }
    return this.value.join();
  }
}

module.exports = {Joinable};
