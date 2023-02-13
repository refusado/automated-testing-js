const assert = require('assert');
const Math = require('../src/Math.js');

describe('Math class', function() {
  it('Sum two numbers', function(done) {
    const math = new Math();

    math.sum(5, 5, (value) => {
      assert.equal(value, 15);
      done();
    });
  });
});