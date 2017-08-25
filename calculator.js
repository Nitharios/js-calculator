/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 var calculatorModule = (function() {

    var memory, total;

    return calculator = {
      load: setTotal
    }


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    function setTotal(x) {
      total = x
      return total
   }

  /**
   * Return the value of `total`
   * @return { Number }
   */
    function returnTotal() {
      return total
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    function add(x) {
      total += x
    }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    function subtract(x) {
      total -= x
    }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    function multiply(x) {
      total *= x
    }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
    function divide(x) {
      total /= x
    }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    function returnMemory() {
      return memory
    }

  /**
   * Stores the value of `total` to `memory`
   */
    function toMemory() {
      memory = total
    }

  /**
   * Clear the value stored at `memory`
   */
    function clearMemory() {
      var memory
    }

  /**
   * Validation
   */

})