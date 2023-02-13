const assert = require('assert');
const Math = require('../src/Math.js');

describe('Math class', function() {
  it('Sum two numbers', function(done) {
    const math = new Math();
    this.timeout(2500);

    math.sum(5, 5, (value) => {
      assert.equal(value, 10);
      done();
    });
  });

  it('Subtract two numbers'); // pending

  // test only this method
  it.only('Multiply two numbers', function() {
    const math = new Math();

    assert.equal(math.multiply(5, 5), 25);
  });

  // skip and do not test this method
  it.skip('Divide two numbers', function() {
    const math = new Math();

    assert.equal(math.divide(5, 5), 1);
  });
});