Array.prototype.last = function () {
  const inputArr = this;

  if (!inputArr.length) return -1;

  return inputArr[inputArr.length - 1];
};
