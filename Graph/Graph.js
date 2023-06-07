// Start Graph

class Graph {
  constructor() {
    this.graph = {};
  }

  insert(key, value) {
    // first case

    if (this.graph[key]) {
      this.graph[key].push(value);
    } else {
      this.graph[key] = [value];
    }

    // second case

    if (this.graph[value]) {
      this.graph[value].push(key);
    } else {
      this.graph[value] = [key];
    }
  }
}

const graphData = new Graph();

graphData.insert(1, 2);
graphData.insert(1, 3);
graphData.insert(1, 4);
graphData.insert(1, 7);
graphData.insert(1, 9);
graphData.insert(7, 4);
graphData.insert(7, 3);
graphData.insert(4, 9);
graphData.insert(2, 3);
graphData.insert(2, 9);

console.log(graphData);
