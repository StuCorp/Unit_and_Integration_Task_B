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

 
 //  Do each of the arithmetical operations work to update the display with the result of the operation?
 //  Can we chain multiple operations together?
 //  Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)
 // What does the code do in exceptional circumstances?
 // If you divide by zero, what is the effect?
 // Can you write a test to describe what you'd prefer to happen under this circumstance, and then correct to code to make that test pass.

});