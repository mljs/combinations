'use strict';
const combinations = require('..');

describe('Compute combinations', () => {
  test('should generate 1 of N combinations (index mode)', () => {
    var options = { mode: 'index' };
    expect(Array.from(combinations(1, 8, options))).toEqual([
      [7],
      [0],
      [1],
      [2],
      [3],
      [4],
      [5],
      [6]
    ]);
    expect(Array.from(combinations(1, 1))).toEqual([[0]]);
    expect(Array.from(combinations(1, 2))).toEqual([[1], [0]]);
  });

  test('should generate 1 of N combinations (mask mode)', () => {
    var options = { mode: 'mask' };
    expect(Array.from(combinations(1, 1, options))).toEqual([[1]]);
    expect(Array.from(combinations(1, 2, options))).toEqual([[0, 1], [1, 0]]);
  });

  test('Invalid mode should throw', () => {
    var options = { mode: 'invalid' };
    expect(function () {
      combinations(1, 10, options).next();
    }).toThrowError(/Invalid mode/);
  });

  test('should generate some more complicated comibinations', () => {
    expect(Array.from(combinations(2, 3))).toEqual([[1, 2], [0, 2], [0, 1]]);
    expect(Array.from(combinations(2, 4))).toEqual([
      [2, 3],
      [0, 3],
      [1, 3],
      [1, 2],
      [0, 2],
      [0, 1]
    ]);
  });
});
