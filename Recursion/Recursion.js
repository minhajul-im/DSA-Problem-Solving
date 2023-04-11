/**
 * @param {The recursion performs repetitive calls to the function from within the function. The recursive condition performs repeating calls to the function calls until the base case the met. The base case is present inside the function, and once the condition of the base case is satisfied, it stops the execution.}
 */

const recursion = (num, count) => {
  // Base Case
  if (num <= count) return;

  // execute Code
  console.log(count);
  recursion(num, count + 1);
};
recursion(5, 1);
