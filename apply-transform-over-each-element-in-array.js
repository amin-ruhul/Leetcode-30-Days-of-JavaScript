const map = function (arr, fn) {
  let output = [];
  arr.forEach((el, index) => {
    output.push(fn(el, index));
  });

  return output;
};
