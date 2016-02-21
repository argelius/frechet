const chai = require('chai');
const frechet = require('../dist/index');

chai.should();

describe('frechet', () => {
  it('should calculate the frechet distance', () => {
    frechet([[0, 0], [1, 1]], [[0, 0], [1, 1]]).should.equal(0);
    frechet([[1.5, 0], [2.5, 1]], [[0, 0], [1, 1]]).should.equal(1.5);
  });

  it('only accepts arrays', () => {
    (() => frechet('foo', 'bar')).should.throw(Error);
  });

  it('requires both arrays to be the same length', () => {
    (() => frechet([0], [0, 1])).should.throw(Error);
  });
});
