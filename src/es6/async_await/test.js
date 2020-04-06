var simulageAsyncFn = function() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      // resolve({ c: 1 })
      debugger;
      reject({ err: "1000" });
    }, 10000);
  });
};
var simulageAsyncFn2 = async function() {
  await simulageAsyncFn();
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      // resolve({ c: 1 })
      debugger;
      reject({ err: "1000" });
    }, 10000);
  });
};

var fn = function() {
  console.log(222);
};

var testAsync = async function() {
  var res = await simulageAsyncFn().catch(e => {
    console.log("error", e);
  });

  console.log(res);
  var res2 = await simulageAsyncFn2().catch(e => {
    console.log("error", e);
  });

  console.log(res2);

  fn();
};

testAsync();
console.log(3);
