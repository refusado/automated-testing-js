const assert = require('assert');
const Math = require('../src/Math.js');

let value = 0;

describe('Math class', function() {
  // HOOKS

  // runs before all tests in this file regardless where this line is defined.
  // before(function() { });

  // runs after all tests in this file
  // after(function() { });

  // runs before each test in this block
  // beforeEach(function() { });

  // runs after each test in this block
  // afterEach(function() { });

  beforeEach(function() {
    value = 5;
  });


  it('Sum two numbers', function(done) {
    const math = new Math();
    this.timeout(2500);

    math.sum(value, value, (result) => {
      assert.equal(result, 10);
      done();
    });
  });

  it('Subtract two numbers'); // pending

  // test only this method
  // it.only('Multiply two numbers', function() {
  //   const math = new Math();

  //   assert.equal(math.multiply(value, value), 25);
  // });

  // skip and do not test this method
  it.skip('Divide two numbers', function() {
    const math = new Math();

    assert.equal(math.divide(value, value), 1);
  });
});