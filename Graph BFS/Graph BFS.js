// Graph Traverse start

class Graph {
  constructor() {
    this.graph = {};
    this.visited = {};
  }

  insert(data1, data2) {
    // check data for traverse

    this.visited[data1] = false;
    this.visited[data2] = false;

    // first case

    if (this.graph[data1]) {
      this.graph[data1].push(data2);
    } else {
      this.graph[data1] = [data2];
    }

    // second case

    if (this.graph[data2]) {
      this.graph[data2].push(data1);
    } else {
      this.graph[data2] = [data1];
    }
  }

  // graph traverse on breadth first search
  dfsTraverse(data) {
    // given a queue store in data

    let queue = [data];

    this.visited[data] = true;

    while (queue.length) {
      let value = queue[0];

      console.log(value);

      let objInArr = this.graph[value];

      for (let i = 0; i < objInArr.length; i++) {
        if (!this.visited[objInArr[i]]) {
          queue.push(objInArr[i]);

          this.visited[objInArr[i]] = true;
        }
      }

      queue.shift();
    }
  }
}

let gp = new Graph();

gp.insert(1, 2);
gp.insert(1, 3);
gp.insert(1, 5);
gp.insert(2, 5);
gp.insert(2, 7);
gp.insert(3, 5);
gp.insert(6, 3);
gp.insert(6, 5);
gp.insert(7, 5);
gp.insert(7, 6);

console.log(gp);

gp.dfsTraverse(5);
