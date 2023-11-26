function memoize(fn) {
  const map = new Map();

  return function (...args) {
    let key = JSON.stringify(args);
    if (map.has(key)) return map.get(key);

    let output = fn(...args);
    map.set(key, output);

    return output;
  };
}
