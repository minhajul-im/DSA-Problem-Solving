/*TODO: In selection sort, the minimum element is selected from the array and swapped with an element that is at the beginning of the unsorted first data.*/

const data = [10, 9, 1, 6, 14, 8, 4, 6, 3, 2, 7];


// Ascending Selection Sort
const ascendingSelectionSort = (data) => {
  let temp;

  for (let i = 0; i < data.length; i++){

    let minIndex = i; 
    for (let j = i; j < data.length; j++){
      if (data[minIndex] > data[j]) {
        //if the first data is greater than the second data small then the first data index stored in the second data index.
        minIndex = j;
      };
    };

    temp = data[i];
    data[i] = data[minIndex];
    data[minIndex] = temp;
  };

  return data;
}

ascendingSelectionSort(data)

// Descending Selection Sort
const descendingSelectionSort = (data) => {
  let temp;

  for (let i = 0; i < data.length; i++) {

    let smallIndex = i;
    for (let j = i; j < data.length; j++){
      if (data[smallIndex] < data[j]) {
        smallIndex = j;
      };
    };

    temp = data[i];
    data[i] = data[smallIndex];
    data[smallIndex] = temp;
  };

  return data;
}
descendingSelectionSort(data)

