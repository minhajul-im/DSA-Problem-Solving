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

/**quadratic time complexity => O(n2);
 * @param {quadratic time complexity => O(n2)}
 */
const quadraticTimeComplexityBubbleSort = (arr) => {
  // example
  const quadraticMeans = `Where the time taken by the algorithm increases exponentially with the size of the input. In other words, as the size of the input increases, the time taken by the algorithm increases at a much faster rate than the input size.
  An example of an algorithm with quadratic time complexity is bubble sort. In bubble sort, the input array is repeatedly traversed, comparing adjacent elements and swapping them if they are in the wrong order. This means that the time taken by the algorithm increases quadratically with the size of the input array, making it less efficient than some other sorting algorithms, such as selection sort, quicksort & merge sort.`;

  // implement
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
console.log(quadraticTimeComplexityBubbleSort([1, 3, 4, 6, 5, 10]));

const quadraticTimeComplexitySelectionSort = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
};
console.log(quadraticTimeComplexitySelectionSort([1, 3, 4, 6, 5, 10]));
