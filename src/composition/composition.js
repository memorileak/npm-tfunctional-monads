const {Maybe} = require('../maybe/maybe.js');
const {Either} = require('../either/either.js');
const {IO} = require('../io/io.js');

function liftMaybe(f) {
  return function(...args) {
    return Maybe.fromNullable(f(...args));
  };
}

function liftEither(f) {
  return function(...args) {
    return Either.fromNullable(f(...args));
  };
}

function liftIO(value) {
  return IO.of(value);
}

function map(f) {
  return function(container) {
    return container.map(f);
  };
}

function filter(f) {
  return function(container) {
    return container.filter(f);
  };
}

function chain(f) {
  return function(container) {
    return container.chain(f);
  };
}

function orElse(f) {
  return function(container) {
    return container.orElse(f);
  };
}

function join(joinable) {
  return joinable.join();
}

function then(f) {
  return function(promise) {
    return promise.then(f);
  };
}

function otherwise(f) {
  return function(promise) {
    return promise.catch(f);
  };
}

function final(f) {
  return function(promise) {
    return promise.finally(f);
  };
}

module.exports = {liftMaybe, liftEither, liftIO, map, filter, chain, orElse, join, then, otherwise, final};
