/* TODO: Order-Agnostic Binary Search is a modified version of the Binary Search algorithm. Here this modified binary search comes with one more condition checking. The intuition behind & in front of this algorithm is what if the order of the sorted array isn't given that's why use Order Agnostic Binary Search */

// Order Agnostic Binary Search

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// condition 1
const agnosticBinarySearch1 = (data, target) => {
  let mid,
    start = 0,
    end = data.length - 1;

  // when will the cross  "start" & "end" loop closed!
  while (start <= end) {
    mid = Math.trunc((start + end) / 2);

    if (data[mid] === target) {
      // middle data and target value if equal to
      return `"${mid}" index of ${data[mid]} Number Value.`;
    } else if (data[start] < data[end]) {
      if (data[mid] < target) {
        start = ++mid;
      } else {
        end = --mid;
      }
    } else {
      if (data[mid] > target) {
        start = ++mid;
      } else {
        end = --mid;
      }
    }
  }
  return `Data isn't Found`;
};

console.log(agnosticBinarySearch1(a, 7));
console.log(agnosticBinarySearch1(b, 7));

// condition 2
const agnosticBinarySearch2 = (data, target) => {
  let mid,
    start = 0,
    end = data.length - 1;

  // when will the cross  "start" & "end" loop closed!
  while (start <= end) {
    mid = Math.trunc((start + end) / 2);

    if (data[mid] === target) {
      // middle data and target value if equal to
      return `"${mid}" index of ${data[mid]} Number Value.`;
    } else if (data[start] > data[end]) {
      if (data[mid] > target) {
        start = ++mid;
      } else {
        end = --mid;
      }
    } else {
      if (data[mid] < target) {
        start = ++mid;
      } else {
        end = --mid;
      }
    }
  }
  return "empty";
};
console.log(agnosticBinarySearch2(a, 3));
console.log(agnosticBinarySearch2(b, 3));

/**  
const x1 = [1, 2, 3, 4, 5, 6];
const x2 = [1, 3, 5, 6];
const x3 = [1, 3, 5, 6];
const searchInsert = (data, target) => {
  let start = 0,
   end = data.length;

  while (start < end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (data[mid] === target) {
      return mid;
    } else if (data[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  };
  return start;
};
console.log(searchInsert(x1, 4));
console.log(insertSearch(x2, 2));
console.log(searchInsert(x3, 4));
*/
