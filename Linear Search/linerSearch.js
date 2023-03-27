/* TODO: The linear search starts searching from the first element and compares each element with a searched element till the element is not found.*/

const data = [10, 20, 30, 40, 50];

const target = 30;

const linearSearch = (data, target) => {
  // It's a function.
  for (let i = 0; i < data.length; i++) {
    // loop, all data traverse.
    if (data[i] === target) {
      //It's a condition true then executed.
      return `Data is Found ${i}`;
    }
  }

  return `Data isn't Found`; // when condition false return.
};

console.log(linearSearch(data, target)); // Function called.
