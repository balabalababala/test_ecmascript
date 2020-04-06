export default { a: 1 };
const m = 1;
const n = 2;

var simulageAsyncFn = function() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      // resolve({ c: 1 })
      reject({ err: "1000" });
    }, 10000);
  });
};
var testAsync = async function() {
  var res = await simulageAsyncFn().catch(e => {
    console.log("error", e);
  });

  console.log(res);
};

testAsync();

export { m, n };
