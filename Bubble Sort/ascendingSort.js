/* TODO: In bubble sort, two adjacent elements are compared. If the adjacent elements aren't in the correct position, swapping would be performed.*/

const data = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

// Ascending order Bubble Sort
const ascendingBubbleSort = (data) => {
  //when we swap the first data will be lost that's why we store it in a temporary variable, because it's an updatable.
  let temp;

  for (let i = 0; i < data.length; i++) {
    //when the first loop of one data counts then the second loop of all data length counts.
    for (let j = i; j < data.length; j++) {
      if (data[i] > data[j]) {
        //if the first data is greater than the second data small then the second data will be stored in the first data.

        temp = data[i]; // first data stored in a temporary variable.
        data[i] = data[j]; // second data stored in the first data.
        data[j] = temp; // temporary data stored in the second data.
      }
    }
  }

  return data;
};

ascendingBubbleSort(data);
