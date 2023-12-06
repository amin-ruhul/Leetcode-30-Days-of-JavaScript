Array.prototype.groupBy = function (fn) {
  let map = {};

  this.forEach((val) => {
    let res = fn(val);
    if (map[res]) {
      map[res].push(val);
    } else {
      map[res] = [val];
    }
  });

  return map;
};
