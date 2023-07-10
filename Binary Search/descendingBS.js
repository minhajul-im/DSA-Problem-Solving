/**Descending Order Binary Search
 * @param {Descending Order Binary Search}
 */
const element = [20, 19, 17, 16, 15, 13, 12, 11];
const targetElement = 17;
const descendingBinarySearch = (element, target) => {
  let mid;
  start = 0;
  end = element.length - 1;

  // when will the cross  "start" & "end" loop closed!
  while (start <= end) {
    mid = Math.trunc((start + end) / 2);

    if (element[mid] === target) {
      return `${element[mid]} is Index Number ${mid}`;
    } else if (element[mid] > target) {
      start = ++mid;
    } else {
      end = --mid;
    }
  }
  return `Data isn't Found`;
};
console.log(descendingBinarySearch(element, targetElement));
