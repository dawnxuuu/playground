class Functor {
  constructor(val) {
    this.val = val
  }

  static of(val) {
    return new Functor(val)
  }

  map(f) {
    return new Functor(f(this.val))
  }
}

Functor.of(2).map(x => x + 10) // Functor(12)
Functor.of(2).map(x => x + 10).map(x => x + 100) // Functor(112)

// Maybe 函子
class Maybe {
  constructor(val) {
    this.val = val
  }

  static of(val) {
    return new Maybe(val)
  }

  map(f) {
    return this.val ? Maybe.of(f(this.val)) : Maybe.of(null)
  }
}

Maybe.of(null).map(s => s.toUpperCase()) // Maybe(null)

// Either 函子
class Either {
  constructor(left, right) {
    this.left = left
    this.right = right
  }

  static of(left, right) {
    return new Either(left, right)
  }

  map(f) {
    return this.right
      ? Either.of(this.left, f(this.right))
      : Either.of(f(this.left), this.right)
  }
}

Either.of(5, 6).map(x => x + 1) // Either(5, 7)
Either.of(1, null).map(x => x + 1) // Either(2, null)

// ap函子
class Ap {
  constructor(val) {
    this.val = val
  }

  static of(val) {
    return new Ap(val)
  }

  ap(F) {
    return Ap.of(this.val(F.val))
  }
}

function addTwo(x) {
  return x + 2
}

Ap.of(addTwo).ap(Functor.of(9)) // Ap(11)

function add(x) {
  return function (y) {
    return x + y
  }
}

Ap.of(add).ap(Maybe.of(2)).ap(Maybe.of(3)) // Ap(5)

// Monad函子
class Monad {
  constructor(val) {
    this.val = val
  }

  static of(val) {
    return new Monad(val)
  }

  join() {
    return this.val
  }

  flatMap(f) {
    return this.map(f).join()
  }

  map(f) {
    return new Monad(f(this.val))
  }
}

function monadTest() {
  return Functor.of(3)
}

Monad.flatMap(monadTest) // Functor(3)
