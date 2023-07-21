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

// filter
const filter = (arr, target) => {
  const matchingElements = arr.filter((element) => element === target);
  return matchingElements.length > 0 ? arr.indexOf(matchingElements[0]) : -1;
};
