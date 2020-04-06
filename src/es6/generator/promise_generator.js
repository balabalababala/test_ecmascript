var fs = require('fs');
var path = require('path');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        // fs.readFile(fileName, function (error, data) {
        //     if (error) {
        //         reject(error);
        //     }
        //     resolve(data);
        // });
        setTimeout(function () {
            resolve(Math.random())
        }, 1000);
    });
}

var gen = function* () {
    var f1 = yield readFile(path.resolve(__dirname, './a.txt'));
    console.log(f1.toString());
    var f2 = yield readFile(path.resolve(__dirname, './b.txt'));
    console.log(f2.toString());
}

function run(gen) {
    var g = gen();

    function next(data) {
        var result = g.next(data);
        if (result.done) {
            return result.value;
        }
        result.value.then(function (data) {
            next(data);
        });
    }

    next();
    return "running"
}

var result = run(gen);
console.log(result)

/**
 * running
 * aaa
 * bbb
 */


