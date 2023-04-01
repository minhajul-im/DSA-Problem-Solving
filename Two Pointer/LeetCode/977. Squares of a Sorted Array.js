const descendingSortedSquares = (arr) => {
  let left = 0, right = arr.length - 1;
  let positionIndex = 0, sortedArr = [];
  
  while (left <= right) {
    let leftValue = Math.pow(arr[left], 2);
    let rightValue = Math.pow(arr[right], 2);
    if (leftValue > rightValue) {
      sortedArr[positionIndex] = leftValue; left++;
    } else {
      sortedArr[positionIndex] = rightValue; right--;
    }
    positionIndex++
  }
  console.log(sortedArr);
  return sortedArr;
}

console.log(descendingSortedSquares([-7, -3, 2, 3, 11]))


const ascendingSortedSquares = (arr) => {
  let left = 0, right = arr.length - 1;
  let sortedArr = [], positionIndex = arr.length - 1;
  
  while (left <= right) {
    let leftValue = Math.pow(arr[left], 2);
    let rightValue = Math.pow(arr[right], 2);
    if (leftValue < rightValue) {
      sortedArr[positionIndex] = rightValue;
      right--;
    } else {
      sortedArr[positionIndex] = leftValue;
      left++
    }
    positionIndex--;
  }
  console.log(sortedArr)
  return sortedArr;
};
console.log(ascendingSortedSquares([-7, -3, 2, 3, 11]))