class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

console.log(Object.keys(Point.prototype));
// []
console.log(Object.getOwnPropertyNames(Point.prototype));

let methodName = "getArea";

class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}

//定义类
class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

var point = new Point2(2, 3);

console.log(point.toString()); // (2, 3)

console.log(point.hasOwnProperty("x")); // true
console.log(point.hasOwnProperty("y")); // true
console.log(point.hasOwnProperty("toString")); // false
console.log(point.__proto__.hasOwnProperty("toString")); // true

var p1 = new Point(2, 3);
var p2 = new Point(3, 2);

console.log(p1.__proto__ === p2.__proto__); //true
console.log(p1.__proto__ === Object.getPrototypeOf(p1)); //true

p1.__proto__.printName = function() {
  return "Oops";
};

console.log(p1.printName()); // "Oops"
console.log(p2.printName()); // "Oops"

var p3 = new Point(4, 2);
console.log(p3.printName()); // "Oops"

const bar = Symbol("bar");
const snaf = Symbol("snaf");
class myClass {
  // 公有方法
  foo(baz) {
    console.log("baz");
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return (this[snaf] = baz);
  }

  // ...
}

class Logger {
  printName(name = "there") {
    this.print(`Hello ${name}`);
  }

  print = text => {
    console.log(text);
  };
}

const logger = new Logger();
const { printName } = logger;
// printName(); // error

class IncreasingCounter {
  _count = 0;
  get value() {
    console.log("Getting the current value!");
    return this._count;
  }
  increment() {
    this._count++;
  }
}
