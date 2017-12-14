var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
 
 //  Do the number buttons work to update the display of the running total?
 it('should have working number buttons', function(){
   element(by.css('#clear')).click(); 
   running_total = element(by.css('#running_total'));
   element(by.css('#number1')).click();
   element(by.css('#number2')).click();
   element(by.css('#number3')).click();
   element(by.css('#number4')).click();
   element(by.css('#number5')).click();
   element(by.css('#number6')).click();
   element(by.css('#number7')).click();
   element(by.css('#number8')).click();
   element(by.css('#number9')).click();
   element(by.css('#number0')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('1234567890');
 });

 //  Do each of the arithmetical operations work to update the display with the result of the operation?
// add
it('should be able to add', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4');
});

// subtract
it('should be able to subtract', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('90');
});
// divide
it('should be able to divide', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('33');
});
// multiply
it('should be able to multiply', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number2')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('100');
});

 //  Can we chain multiple operations together?
 it('should chain multiple operations together', function(){
   running_total = element(by.css('#running_total'));
   element(by.css('#number2')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number4')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number5')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('50');
 });

 //  Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)
// postive
it('should work for positive numbers', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('9');
});
// negative
it('should work for negative numbers', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number6')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-9');
});

// decimals
it('should work for decimal numbers', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1.5');
});

// large numbers
it('should work for large numbers', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('998001');
});

 // What does the code do in exceptional circumstances?
 // If you divide by zero, what is the effect?
 // Can you write a test to describe what you'd prefer to happen under this circumstance, and then correct to code to make that test pass.
 it('should return undefined for division by 0', function(){
   running_total = element(by.css('#running_total'));
   element(by.css('#number9')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('undefined');
 });

});