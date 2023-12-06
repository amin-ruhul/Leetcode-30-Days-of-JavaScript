const join = function (arr1, arr2) {
  let map = {};

  arr1.forEach((item) => {
    map[item.id] = item;
  });

  arr2.forEach((item) => {
    map[item.id] = { ...map[item.id], ...item };
  });

  return Object.values(map);
};
