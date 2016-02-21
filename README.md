# frechet

Calculates the discrete [Fréchet distance](https://en.wikipedia.org/wiki/Fr%C3%A9chet_distance) of two polylines.

The Fréchet distance is a distance metric that represents the similarity of two curves. A way to think about it is to imagine a person walking along the first curve and a dog walking along the second curve. The Fréchet distance represents the shortest leash required to complete the walk without backtracking.

# Installation

The library is available on [npm](https://www.npmjs.com/package/frechet). Install with the following command:

```bash
npm install frechet
```

# Usage

```javascript
var frechet = require('frechet');

var l1 = [[0, 0], [1, 1], [2, 2]];
var l2 = [[1, 1], [2, 2], [3, 3]];

console.log(frechet(l1, l1)); // 0
console.log(frechet(l1, l2)); // 1
```

# Building the library

The library is packaged using [rollup.js](http://rollupjs.org/). To build use the following command:

```bash
npm install
rollup -c
```

The result is available in [dist/index.js].

# Running the tests

Run the tests like this:

```bash
npm install
npm test
```
