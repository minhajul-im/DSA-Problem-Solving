/**
 * What is greedy algorithm?
 * A greedy algorithm is a problem-solving approach that makes locally
 * optimal choices at each step with the aim of finding a global optimum
 * or a satisfactory solution. In a greedy algorithm, decisions are made
 * based on the best available option at the current step, without
 * considering the potential long-term consequences or examining all
 * possible choices. The algorithm iteratively builds a solution by
 * selecting the most favorable option at each stage, under the assumption
 * that these choices will lead to an overall optimal outcome. However,
 * the correctness of a greedy algorithm depends on whether the chosen
 * locally optimal choices consistently result in a globally optimal
 * solution for the given problem.
 */
const data = [1, 50, 100, 200, 500, 2, 5, 10, 20, 1000];

const greedy = (data, target) => {
  // you have to sort
  let arr = data.sort((x, y) => x - y);

  let count = 0,
    notes = [];

  for (let i = arr.length; i >= 0; i--) {
    while (target >= arr[i]) {
      count++;
      target = target - arr[i];
      notes.push(arr[i]);
    }
  }

  return { count, notes };
};

console.log(greedy(data, 231));
