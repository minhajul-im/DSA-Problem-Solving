/* TODO: Binary search is a 'divide and conquer' algorithm which requires the initial array to be sorted before searching. It is called binary because it splits the array into two halves as part of the algorithm. Initially, a binary search will look at the item in the middle of the array and compare it to the search terms. */

// Ascending Order Binary Search.

const data = [10, 13, 15, 16, 17, 18, 19, 20];
const targetData = 17;

const ascendingBinarySearch = (data, target) => {
  let mid; start = 0; end = data.length - 1;

  // when will the cross  "start" & "end" loop closed!
  while (start <= end) {
    mid = Math.trunc((start + end) / 2);

    if (data[mid] === target) {
      return `${data[mid]} is Index number ${mid}.`;
    } else if (data[mid] < target) {
      start = ++mid;
    } else {
      end = --mid;
    };
  };

  //when the condition isn't executed then the return will be "Data isn't Found".
  return `Data isn't Found.`;
}
// console.log(ascendingBinarySearch(data, targetData))

//Descending Order Binary Search.

const element = [20, 19, 17, 16, 15, 13, 12, 11];
const targetElement = 17;

const descendingBinarySearch = (element, target) => {
  let mid; start = 0; end = element.length - 1;

  // when will the cross  "start" & "end" loop closed!
  while (start <= end) {
    mid = Math.trunc((start + end) / 2);

    if (element[mid] === target) {
      return `${element[mid]} is Index Number ${mid}`;
    } else if (element[mid] > target) {
      start = ++mid;
    } else {
      end = --mid;
    };
  };
  return `Data isn't Found`;
}
console.log(descendingBinarySearch(element, targetElement));

