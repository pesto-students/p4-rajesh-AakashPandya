function add(...args) {
  return args.reduce((prevResult, currentItem) => prevResult + currentItem, 0);
}
