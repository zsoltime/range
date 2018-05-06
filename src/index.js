export default (min = 0, max, step = 1) => {
  if (!Number.isSafeInteger(min)) {
    throw new RangeError('Expected "min" to be a safe integer');
  }

  if (max === undefined) {
    if (min < 0) {
      max = 0;
    } else {
      max = min;
      min = 0;
    }
  }

  if (!Number.isSafeInteger(max)) {
    throw new RangeError('Expected "max" to be a safe integer');
  }

  if (typeof step !== 'number') {
    throw new TypeError('Expected "step" to be a number');
  }

  if (step === 0 || !Number.isSafeInteger(step)) {
    throw new RangeError('Expected "step" to be a non-zero safe integer');
  }

  const array = [];

  for (let i = min; (max - i) * step > 0; i += step) {
    array.push(i);
  }

  return array;
};
