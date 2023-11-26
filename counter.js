const createCounter = function (n) {
  let numberOfCall = 0;

  return function () {
    return n + numberOfCall++;
  };
};
