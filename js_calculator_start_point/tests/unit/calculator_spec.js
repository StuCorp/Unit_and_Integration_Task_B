var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // multiply 3x5 and get 15
  it('it can multiply', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 15);
  })

  // divide 21/7 and get 3
  it('it can divide', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  })

  // add 1+4 and get 5
  it('it can add', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 9); 
  })

  // subtract 7-4 and get 3
  it('it can subtract', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  })

  // concatenate multiple number button clicks
  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 123); 
  })

  // chain multiple operations together
  it('it can chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 1); 
  })

  // clear the running total without affecting the calculation
  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 125); 
  })
});
