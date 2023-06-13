// start graph dfs

class Graph {
  constructor() {
    this.graph = {};
    this.visited = {};
  }

  insert(data1, data2) {
    this.visited[data1] = false;
    this.visited[data2] = false;

    //1st case

    if (this.graph[data1]) {
      this.graph[data1].push(data2);
    } else {
      this.graph[data1] = [data2];
    }

    //2nd case

    if (this.graph[data2]) {
      this.graph[data2].push(data1);
    } else {
      this.graph[data2] = [data1];
    }
  }

  graphDFS(node) {
    this.visited[node] = true;

    console.log(node);

    let arr = this.graph[node];

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      if (!this.visited[arr[i]]) {
        this.graphDFS(arr[i]);
      }
    }
  }
}

const gp = new Graph();

gp.insert(1, 2);
gp.insert(1, 3);
gp.insert(1, 4);
gp.insert(2, 5);
gp.insert(3, 6);
gp.insert(3, 7);
gp.insert(4, 5);
gp.insert(4, 6);
gp.insert(4, 7);
gp.insert(5, 7);

console.log(gp);

gp.graphDFS(1);

console.log();
