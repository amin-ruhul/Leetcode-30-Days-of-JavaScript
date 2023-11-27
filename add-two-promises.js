var addTwoPromises = async function (promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);

  return value1 + value2;
};

//OR

var addTwoPromises = async function (promise1, promise2) {
  return (await promise1) + (await promise2);
};
