import { setTimeout } from 'timers';

var fs = require('fs');


//有针对的thunk化了fs.readFile方法，thunkify写的更通用一些
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

var asyncReadFile = async function (callback) {
    var f1 = await readFile('./a.txt');
    console.log(f1.toString());
    var f2 = await readFile('./b.txt');
    console.log(f2.toString());
    if (callback) {
        callback('complete');
    }
    return "asyncReadFile complete"
}
var result = asyncReadFile();
result.then(function (data) {
    console.log(data)
});
console.log(result)

/**
 * Promise { <pending> }
 * aaa
 * bbb
 * asyncReadFile complete
 */


