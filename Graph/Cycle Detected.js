// cycle detected start

class Cycle {
  constructor() {
    this.graph = {};
    this.visited = {};
    this.parent = {};
  }

  insert(data1, data2) {
    this.visited[data1] = false;
    this.visited[data2] = false;

    // first case
    if (!this.graph[data1]) {
      this.graph[data1] = [data2];
    } else {
      this.graph[data1].push(data2);
    }

    //second case
    if (!this.graph[data2]) {
      this.graph[data2] = [data1];
    } else {
      this.graph[data2].push(data1);
    }
  }

  cycleDec(data) {
    let queue = [data];
    this.visited[data] = true;
    this.parent[data] = null;

    while (queue.length) {
      let que = queue.shift();
      console.log(que);

      let arr = this.graph[que];

      for (let i = 0; i < arr.length; i++) {
        if (!this.visited[arr[i]]) {
          queue.push(arr[i]);
          this.visited[arr[i]] = true;
          this.parent[arr[i]] = que;
        } else if (this.visited[arr[i]] && this.parent[que] === arr[i]) {
          //nothing to do
        } else if (this.visited[arr[i]] && this.parent[que] !== arr[i]) {
          console.log("cycle detected");
        }
      }
    }
    console.log("no cycle detected");
  }
}
const cycle = new Cycle();

cycle.insert(1, 2);
cycle.insert(1, 3);
cycle.insert(1, 4);
cycle.insert(2, 5);
cycle.insert(3, 6);
cycle.insert(3, 7);
cycle.insert(4, 5);
cycle.insert(4, 6);
cycle.insert(4, 7);
cycle.insert(5, 7);

cycle.cycleDec(1);

console.log(cycle);
