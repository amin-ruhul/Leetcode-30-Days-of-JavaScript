function flat(arr, n) {
  if (n <= 0) return arr;

  let result = [];

  for (let el of arr) {
    if (Array.isArray(el)) {
      result.push(...flat(el, n - 1));
    } else {
      result.push(el);
    }
  }

  return result;
}
