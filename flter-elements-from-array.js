const filter = function (arr, fn) {
  let output = [];

  arr.forEach((el, index) => {
    if (fn(el, index)) {
      output.push(el);
    }
  });

  return output;
};
