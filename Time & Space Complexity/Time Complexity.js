/**constant time complexity => O(1)
 * @param {constant time complexity => O(1)}
 */
const constantTimeComplexity = () => {
  console.log(
    `The value doesn't depend on the size of the input. For example, a hash-table element is accessed by a hash key & accessing any single element in an array takes constant time as only one operation has to be performed to locate it.`
  );
};
constantTimeComplexity(); // f(n) = 1, 3, 10 --> O(1)

/**logarithmic time complexity => O(log)
 * @param {logarithmic time complexity => O(log)}
 */
const logarithmicTimeComplexity = (arr, target) => {
  const means = `
  Where the time taken by the algorithm increases logarithmically with the size of the input. In other words, as the size of the input increases, the time taken by the algorithm increases at a slower rate than the input size.For example of an algorithm with logarithmic time complexity is binary search. In binary search, the input array is repeatedly divided in half until the target element is found. This means that the time taken by the algorithm increases logarithmically with the size of the input array, making it more efficient than linear search, which has a time complexity of O(n).
  `;

  let left = 0,
    right = arr.length - 1,
    mid;

  while (left <= right) {
    mid = Math.trunc((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};
console.log(logarithmicTimeComplexity([1, 2, 3, 4, 5, 6, 7, 8], 3));

/**Linear time complexity => O(n)
 * @param {Linear time complexity => O(n)}
 */
const linearTimeComplexity = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === target) {
      return true;
    }
  }
};
console.log(linearTimeComplexity([1, 3, 4, 6, 5, 10], 5));
