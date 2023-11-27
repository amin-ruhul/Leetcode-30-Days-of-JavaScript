const cancellable = function (fn, args, t) {
  const cancel = function () {
    clearTimeout(timer);
  };

  const timer = setTimeout(() => {
    fn(...args);
  }, t);

  return cancel;
};
