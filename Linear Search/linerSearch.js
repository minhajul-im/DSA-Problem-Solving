/* TODO: The linear search starts searching from the first element and compares each element with a searched element till the element is not found.*/

const data = [10, 20, 30, 40, 50]; // These are all data.
const target = 30; // Our target value.

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

// We will see some building methods of JavaScript.

//includes.
const includes = (data, target) => data.includes(target);
console.log(includes(data, target));

// indexOf
const indexOf = (data, target) => data.indexOf(target);
console.log(indexOf(data, target));

//find
const find = (data, target) => data.find((item) => item === target);
console.log(find(data, target));

// findIndex.
const findIndex = (data, target) => data.findIndex((item) => item === target);
console.log(findIndex(data, target));
