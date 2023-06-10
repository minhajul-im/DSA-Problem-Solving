// start graph bfs

class Graph {
  constructor() {
    this.hashTable = {};

    this.gone = {};
  }

  insert(data1, data2) {
    this.gone[data1] = false;
    this.gone[data2] = false;

    if (!this.hashTable[data1]) {
      this.hashTable[data1] = [data2];
    } else {
      this.hashTable[data1].push(data2);
    }

    // second case

    if (!this.hashTable[data2]) {
      this.hashTable[data2] = [data1];
    } else {
      this.hashTable[data2].push(data1);
    }
  }

  //graph bfs
  graphBFS(data) {
    let queue = [data];

    this.gone[queue[data]] = true;

    while (queue.length) {
      let value = queue.shift();

      console.log(value);

      let objInArr = this.hashTable[value];

      for (let i = 0; i < objInArr.length; i++) {
        if (!this.gone[objInArr[i]]) {
          queue.push(objInArr[i]);
          this.gone[objInArr[i]] = true;
        }
      }
    }
  }
}

const graph = new Graph();

graph.insert(1, 2);
graph.insert(1, 3);
graph.insert(1, 5);
graph.insert(2, 5);
graph.insert(2, 7);
graph.insert(3, 5);
graph.insert(6, 3);
graph.insert(6, 5);
graph.insert(7, 5);
graph.insert(7, 6);

console.log(graph);

console.log(graph.graphBFS(5));
