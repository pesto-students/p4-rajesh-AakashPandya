function add(...args) {
  return args.reduce((prevResult, currentItem) => prevResult + currentItem, 0);
}

function memoize(func) {
  const cache = {};
  return (...args) => {
    if (args.toString() in cache) {
      return cache[args.toString()];
    }
    const sum = func(...args);
    cache[args.toString()] = sum;
    return sum;
  };
}

const memoizeAdd = memoize(add);
memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200);
memoizeAdd(100, 100);
