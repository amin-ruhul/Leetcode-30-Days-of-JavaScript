const cancellable = function (fn, args, t) {
  fn(...args);

  const intervalId = setInterval(() => fn(...args), t);

  return (cancelFn = () => {
    clearInterval(intervalId);
  });
};
