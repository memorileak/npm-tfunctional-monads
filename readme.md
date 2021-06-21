```JavaScript
class Wrapper {
  static of(value) {}
  map(f) {}
  join() {}
  toString() {}
}
```
```JavaScript
class Maybe {
  static just(value) {}
  static nothing() {}
  static fromNullable(value) {}
  static of(value) {}
  join() {}
  isJust() {}
  isNothing() {}
}
class Just extends Maybe {
  value() {}
  map(f) {}
  filter(f) {}
  getOrElse(_) {}
  isJust() {}
  toString() {}
}
class Nothing extends Maybe {
  value() {}
  map(_) {}
  filter(_) {}
  join() {}
  getOrElse(fallbackValue) {}
  isNothing() {}
  toString() {}
}
```
```JavaScript
class Either {
  static left(value) {}
  static right(value) {}
  static fromNullable(value) {}
  static of(value) {}
  value() {}
}
class Right extends Either {
  map(f) {}
  chain(f) {}
  filter(f) {}
  getOrElse(_) {}
  getOrElseThrow(_) {}
  orElse(_) {}
  toString() {}
}
class Left extends Either {
  map(_) {}
  chain(_) {}
  filter(_) {}
  value() {}
  getOrElse(fallbackValue) {}
  getOrElseThrow(message) {}
  orElse(f) {}
  toString() {}
}
```
```JavaScript
class IO {
  static of(value) {}
  static from(effect) {}
  map(f) {}
  chain(f) {}
  run() {}
  toString() {}
}
```
```JavaScript
function liftMaybe(f)(...args) {}
function liftEither(f)(...args) {}
function liftIO(value) {}
function map(f)(container) {}
function filter(f)(container) {}
function chain(f)(container) {}
function join(joinable) {}
function then(f)(promise) {}
function otherwise(f)(promise) {}
```
