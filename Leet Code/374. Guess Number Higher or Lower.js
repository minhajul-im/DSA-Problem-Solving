const guessNumber = (n) => {
  let start = 1; end = n;
  
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === -1) {
      end = mid
    } else start = mid + 1;
  };
}

