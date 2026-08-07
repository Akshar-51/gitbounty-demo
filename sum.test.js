const assert = require("node:assert");
const { sum } = require("./sum");

assert.strictEqual(sum([1, 2, 3]), 6);
assert.strictEqual(sum([5]), 5);
assert.strictEqual(sum([]), 0);
console.log("ok");
