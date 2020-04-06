async function async1(params) {
    console.log(1.1);
    await async2();
    console.log(1.2);
    await async2();
    console.log(1.3);
}


async function async2(params) {
    console.log(2.1);
    await async3();
    console.log(2.2);
    await async3();
    console.log(2.3);
}
async function async3(params) {
    console.log(3.1);
    return new Promise((resolve) => {
        console.log(3.3);
        resolve()
    })
}

console.log(4)
setTimeout(function () {
    console.log(5);
}, 0)
async1().then((data) => {
    console.log(6)
});
new Promise((resolve) => {
    console.log(4.1);
    resolve()
}).then(()=>{
    console.log(4.2);
})
console.log(7)


//打开控制台