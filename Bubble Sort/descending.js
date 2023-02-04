// Descending Order Bubble Sort
const data = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

const descendingBubbleSort = (data) => {
  let temp;

  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[j] > data[i]) {
        temp = data[i];

        data[i] = data[j];

        data[j] = temp;
      }
    }
  }

  return data;
};

descendingBubbleSort(data);
