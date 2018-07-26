# combinations

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Generate all possible [combinations](https://en.wikipedia.org/wiki/Combination), which are all the unordered samples of size k, without replacement, from a set of n objects. The number of k-combinations is equal to the binomial coefficient:

![image](https://user-images.githubusercontent.com/4118690/40847651-445ec4c2-65bd-11e8-86df-58a5c0f16c73.png)

Very low memory footprint even if the number of combinations to generate is high. Thanks to generators, you can iterate over all possible samples, without creating a very large array.

## Installation

```
$ npm install ml-combinations
```

## Usage

```js
// the package exports a generator function
const combinations = require('ml-combinations');
const options = { mode: 'index' };

// the generator function returns an iterator
var gen = combinations(2, 4, options);

// You can loop thr the iterator
for (let combination of gen) {
  console.log(combination);
}

// Or use destructuring, if you want to manipulate the array with all possible sample combinations
console.log([...gen]); // [ [ 3, 2 ], [ 0, 2 ], [ 1, 2 ], [ 1, 2 ], [ 0, 2 ], [ 0, 1 ] ]
console.log(Array.from(gen)); // Same thing if destructuring is not supported

// Use mask mode instead of index mode (index mode is the default)
// The mask mode generates a list of arrays, each of which has a length equal to the number of object
// Each index has a 0 or 1 to indicate the presence / absence of the object
options.mode = 'mask';
gen = combinations(2, 4, options);
console.log(Array.from(gen)); // [ [ 0, 0, 1, 1 ][ 1, 0, 0, 1 ],[ 0, 1, 0, 1 ],[ 0, 1, 1, 0 ],[ 1, 0, 1, 0 ],[ 1, 1, 0, 0 ] ]
```

## References

Phillip J Chase, `Algorithm 382: Combinations of M out of N Objects \[G6\]',
Communications of the Association for Computing Machinery 13:6:368 (1970).
[To the article](http://dx.doi.org/10.1145/362384.362502)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-combinations.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-combinations
[travis-image]: https://img.shields.io/travis/mljs/combinations/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/combinations
[david-image]: https://img.shields.io/david/mljs/combinations.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/mljs/combinations
[codecov-image]: https://img.shields.io/codecov/c/github/mljs/combinations.svg?style=flat-square
[david-url]: https://david-dm.org/mljs/combinations
[download-image]: https://img.shields.io/npm/dm/ml-combinations.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-combinations
