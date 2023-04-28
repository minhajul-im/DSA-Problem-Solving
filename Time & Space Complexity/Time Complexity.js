// constant time complexity => O(1).
const constantTimeComplexity = () => {
  console.log(
    `The value doesn't depend on the size of the input. For example, a hash-table element is accessed by a hash key & accessing any single element in an array takes constant time as only one operation has to be performed to locate it.`
  );
};
constantTimeComplexity(); // f(n) = 1, 3, 10 --> O(1)
