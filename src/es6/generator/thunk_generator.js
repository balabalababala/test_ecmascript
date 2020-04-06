var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function*() {
    var r1 = yield readFileThunk('./a.txt');
    console.log(r1.toString());
    if (false) {
        var r2 = yield readFileThunk('./b.txt');
        console.log(222);
    } else {
        var r2 = yield readFileThunk('./b.txt');
        console.log(r2.toString());
    }
    var r2 = yield readFileThunk('./b.txt');
    console.log(444);
};

// var g = gen();

// var r1 = g.next();
// r1.value(function(err, data) {
//     if (err) throw err;
//     var r2 = g.next(data);
//     r2.value(function(err, data) {
//         if (err) throw err;
//         g.next(data);
//     });
// });

function run(fn) {
    var gen = fn();

    function next(err, data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }

    next();
}


run(gen);
