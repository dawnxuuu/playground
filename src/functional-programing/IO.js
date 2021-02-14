class IO {
  constructor(val) {
    this.val = val
  }

  static of(val) {
    return new IO(val)
  }

  join() {
    return this.val
  }

  flatMap(f) {
    return this.map(f).join()
  }

  map(f) {
    return new IO(f(this.val))
  }

  run() {
    debugger
    if (typeof this.val === 'function') this.val()
    else console.log(this.val);
  }
}

const a = function (filename) {
  function a1() {
    setTimeout(() => {
      console.log(filename)
    }, 500);
  }
  return a1
}

const b = function (x) {
  function b1() {
    if (typeof x === 'function') x()
    else console.log(x)
    return x;
  }
  return b1
}

const c = function (x) {
  function c1() {
    if (typeof x === 'function') x()
    else console.log(x)
    return x;
  }

  return c1
}

const readFile = function (filename) {
  return new IO(a(filename));
};

const print = function (x) {
  return new IO(b(x));
}

const tail = function (x) {
  return new IO(c(x));
}

readFile('a-file-name')
  .flatMap(print)
  .flatMap(tail)
  .run()
// 最终会执行函数a1, 打印出'a-file-name'
