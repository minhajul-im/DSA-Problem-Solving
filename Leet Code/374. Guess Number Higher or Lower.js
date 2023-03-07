const guessNumber = (n) => {
  let start = 1; end = n;

  while (start <= end) {
    let mid = start + Math.trunc((end - start) / 2);

    let x = guess(mid);
    if (x === 0) return mid;
    if (x === -1) end = mid - 1;
    if (x === 1) start = mid + 1;
  };
}
