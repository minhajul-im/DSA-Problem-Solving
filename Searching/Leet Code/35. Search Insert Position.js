const searchInsert1 = (data, target) => {
  let start = 0; end = data.length;

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

const searchInsert2 = (data, target) => {
  let mid, start = 0;end = data.length - 1;

  mid = Math.trunc((start + end) / 2);
  while (start < end) {
    if (data[mid] === target) {
      return mid;
    }
    else if (data[mid] < target) {
      start = mid + 1;
    }
    else { end = mid; };
    
    mid = Math.trunc((start + end) / 2);
  };

  if (data[mid] < target) { return mid + 1 };
  return mid;
}

