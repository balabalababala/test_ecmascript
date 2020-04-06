

// const arr = [];
// function show(num) {
//     console.log(num);
//     arr.push(num);
// }
// async function async1(params) {
//     show(1);
//     await async2();
//     show(2);
// }
// async function async2(params) {
//     show(3);
// }
// show(4)
// setTimeout(function () {
//     show(5);
// }, 0)
// async1();
// new Promise(function (resolve) {
//     show(6);
//     resolve();
// }).then(function () {
//     show(7);
// })
// show(8)

// setTimeout(function () {
//     console.log(arr);
// }, 2000);


var sleep = (second, index) => new Promise((resolve) => {
    console.log(index);
    setTimeout(() => { resolve(new Date()) }, second * 1000);
});

(async () => {
    for (let i = 0; i < 5; i++) {
        var x = await sleep(1, i);
        console.log(i);
        console.log(x);
    }

    await sleep(1, i);
    console.log(i);
})();
console.log(6)