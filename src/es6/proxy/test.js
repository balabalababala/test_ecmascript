var target = {
  name: "poetries"
};
var logHandler = {
  get: function(target, key) {
    console.log(`${key} 被读取`);
    return target[key];
  },
  set: function(target, key, value) {
    console.log(`${key} 被设置为 ${value}`);
    target[key] = value;
  }
};
var targetWithLog = new Proxy(target, logHandler);

targetWithLog.name; // 控制台输出：name 被读取
targetWithLog.name = "others"; // 控制台输出：name 被设置为 others

console.log(target.name); // 控制台输出: others
