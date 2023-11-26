const expect = function (val) {
  return {
    toBe: function (exp) {
      if (val === exp) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: function (exp) {
      if (val !== exp) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
};
