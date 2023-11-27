TimeLimitedCache.prototype.set = function (key, value, duration) {
  let res = false;
  if (this.map.has(key)) {
    let currentTime = Date.now();
    let selectedObj = this.map.get(key);
    if (currentTime > selectedObj.created + selectedObj.cache) {
      res = false;
    } else {
      res = true;
    }
  } else {
    res = false;
  }
  this.map.set(key, { value, cache: duration, created: Date.now() });

  return res;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let currentTime = Date.now();
    let selectedObj = this.map.get(key);
    if (currentTime > selectedObj.created + selectedObj.cache) {
      return -1;
    } else {
      return selectedObj.value;
    }
  } else {
    return -1;
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  let currentTime = Date.now();
  for (let [key, value] of this.map) {
    if (currentTime > value.created + value.cache) continue;
    count++;
  }
  return count;
};
