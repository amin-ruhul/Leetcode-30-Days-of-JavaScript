const reduce = function (nums, fn, init) {
  let val = init;

  for (let el of nums) {
    val = fn(val, el);
  }

  return val;
};
