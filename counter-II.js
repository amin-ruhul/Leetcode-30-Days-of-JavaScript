const createCounter = function (init) {
  let value = init;

  return {
    increment: () => ++value,
    decrement: () => --value,
    reset: () => {
      value = init;
      return value;
    },
  };
};
