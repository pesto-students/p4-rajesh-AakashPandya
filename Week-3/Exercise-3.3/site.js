function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged? => Count is 0

// Why ?
/*
    message variable was initialized when count was 0 and even if when count gets updated to new value, message is
    still referring to the old instance [in stack] of count and hence we are getting the output as Count is 0"

   But, If we want to use updated count in message variable we need to declare it under the log function itself.

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  function log() {
    const message = `Count is ${count}`;
    console.log(message);
  }
  return [increment, log];
}
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log(); // Count is 3
*/
