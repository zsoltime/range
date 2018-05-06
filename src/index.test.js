import range from '.';

describe('range', () => {
  test('returns an array', () => {
    expect(Array.isArray(range(10))).toBe(true);
  });

  test('returns an empty array if there are no arguments', () => {
    expect(range()).toEqual([]);
  });

  test('returns an array range from 0 to max if first argument provided only', () => {
    expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('returns an array range from min to max if two arguments provided', () => {
    expect(range(10, 15)).toEqual([10, 11, 12, 13, 14]);
  });

  test('returns an array range where values are incremented by the step', () => {
    expect(range(0, 10, 3)).toEqual([0, 3, 6, 9]);
    expect(range(0, -10, -1)).toEqual([0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
  });

  test('returns an array range from min to 0 if first arg is negative', () => {
    expect(range(-5)).toEqual([-5, -4, -3, -2, -1]);
  });

  test('throws RangeError if any of the arguments is not a safe integer', () => {
    const notSafeInteger = Math.pow(2, 53);

    expect(() => range(0, 10, notSafeInteger)).toThrowError(RangeError);
    expect(() => range(0, notSafeInteger, 1)).toThrowError(RangeError);
    expect(() => range(notSafeInteger, 0, -1)).toThrowError(RangeError);
  });

  test('throws RangeError if step is zero', () => {
    expect(() => range(0, 10, 0)).toThrowError(RangeError);
  });
});
