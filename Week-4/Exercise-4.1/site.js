const getNumber = () => {
  return Math.floor(Math.random() * 100);
};

function PromisePollyfill(executor) {
  let onResolve,
    onReject,
    fulfilled = false,
    rejected = false,
    called = false,
    value,
    promiseResolutionRejectionTime;

  function resolve(v) {
    fulfilled = true;
    value = v;
    promiseResolutionRejectionTime = new Date();
  }

  function reject(reason) {
    rejected = true;
    value = reason;
    promiseResolutionRejectionTime = new Date();
  }

  this.then = function (callback) {
    onResolve = callback;

    if (fulfilled && !called) {
      called = true;
      onResolve({ value, promiseResolutionRejectionTime });
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (rejected && !called) {
      called = true;
      onReject({ error: value, promiseResolutionRejectionTime });
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const isNumberDivisibleBy5Promise = new PromisePollyfill((resolve, reject) => {
  const randomNumber = getNumber();
  if (randomNumber % 5 == 0) {
    resolve(`Promise is resolved, number ${randomNumber} is divisible by 5.`);
  } else {
    reject(
      `Promise is rejected, number ${randomNumber} is not divisible by 5.`
    );
  }
});

isNumberDivisibleBy5Promise
  .then(({ value, promiseResolutionRejectionTime }) =>
    console.log(
      value,
      `Promise resolution time: ${promiseResolutionRejectionTime}`
    )
  )
  .catch(({ error, promiseResolutionRejectionTime }) =>
    console.log(
      error,
      `Promise rejection time: ${promiseResolutionRejectionTime}`
    )
  );
