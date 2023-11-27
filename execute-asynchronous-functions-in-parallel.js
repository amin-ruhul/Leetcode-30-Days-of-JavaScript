const promiseAll = function (functions) {
  const result = new Array(functions.length);
  let count = 0;

  return new Promise((resolve, reject) => {
    functions.forEach((fn, index) => {
      fn()
        .then((res) => {
          result[index] = res;
          count++;
          if (count === functions.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};
