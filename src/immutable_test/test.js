/**
 * 可以在vscode中断点调试一下，看输出结果
 */
// import * as immutable from 'immutable'; // node不支持es6的import语法，如果这样用，可以用babel-node  xxx.js运行
const Immutable = require('immutable');
const fromJS = Immutable.fromJS;

let jsObj = {
    a: {
        b: [1, 2, 3],
        c: 40
    },
    d: {
        b: [1, 2, 3],
        c: 40
    }
};

let map = Immutable.fromJS(jsObj);

let map3 = map.setIn(["a", "c"], 40);

console.log(jsObj);
console.log(map);

// console.log(Object.keys(Immutable));


var map1 = Immutable.Map({ a: 1, b: 1 });
var map2 = Immutable.Map({ a: 1, b: 1 });
map1 !== map2; // true
Object.is(map1, map2); // false
Immutable.is(map1, map2); // true 只检测值是否相等
