const timeLimit = function (fn, t) {
  return async function (...args) {
    const promise1 = fn(...args);

    const promise2 = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    return Promise.race([promise1, promise2]);
  };
};
