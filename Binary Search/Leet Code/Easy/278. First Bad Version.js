// 278. First Bad Version

const solution = (isBadVersion) => {
  return function (n) {
    let start = 1;
    end = n;

    while (start < end) {
      const mid = start + Math.floor((start + end) / 2);

      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    return start;
  };
};

let n = 5,
  bad = 4;

console.log(solution(n, bad));
