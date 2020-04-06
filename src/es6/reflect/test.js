var myObject = {
  foo: 1,
  bar: 2,
  a: {
    b: 3
  },
  c: [5, 6, 7],
  get baz() {
    return this.foo + this.bar;
  }
};

Reflect.get(myObject, "foo"); // 1
Reflect.get(myObject, "bar"); // 2
Reflect.get(myObject, "baz"); // 3
Reflect.get(myObject, ["a"]); // 3
Reflect.get(myObject, "c"); // 3
